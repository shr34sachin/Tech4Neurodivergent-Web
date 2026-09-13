import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllArticleSlugs } from '@/data/articles';
import { getPostBySlug } from '@/lib/sanity/queries';
import { getModuleBySlug } from '@/data/modules';
import ArticleDetailClient from '@/components/ArticleDetailClient';
import JsonLd from '@/components/JsonLd';

export const revalidate = 60;

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getPostBySlug(slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tech4neurodivergent.com';

  return {
    title: `${article.title} | Educational Resource`,
    description: article.summary,
    alternates: {
      canonical: `/blog/${article.slug.current}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `${siteUrl}/blog/${article.slug.current}`,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author?.name || 'Educational Advisory Team'],
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getPostBySlug(slug);

  if (!article) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tech4neurodivergent.com';
  const relatedModule = article.relatedModuleSlug ? getModuleBySlug(article.relatedModuleSlug) : undefined;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    alternativeHeadline: article.nepaliTitle,
    description: article.summary,
    author: {
      '@type': 'Organization',
      name: article.author?.name || 'Educational Advisory Team',
      description: article.author?.bio,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tech4Neurodivergent Initiative',
      url: siteUrl,
    },
    datePublished: article.publishedAt,
    mainEntityOfPage: `${siteUrl}/blog/${article.slug.current}`,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <ArticleDetailClient article={article} relatedModule={relatedModule} />
    </>
  );
}
