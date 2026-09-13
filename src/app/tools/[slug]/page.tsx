import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getModuleBySlug, getAllModuleSlugs } from '@/data/modules';
import ToolDetailClient from '@/components/ToolDetailClient';
import JsonLd from '@/components/JsonLd';

interface ToolPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllModuleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const therapyModule = getModuleBySlug(slug);

  if (!therapyModule) {
    return { title: 'Module Not Found' };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tech4neurodivergent.com';

  return {
    title: `${therapyModule.title} | Educational Guide & Supportive Web-App`,
    description: therapyModule.shortDescription,
    alternates: {
      canonical: `/tools/${therapyModule.slug}`,
    },
    openGraph: {
      title: therapyModule.title,
      description: therapyModule.shortDescription,
      url: `${siteUrl}/tools/${therapyModule.slug}`,
      type: 'article',
    },
  };
}

export default async function ToolDetailPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const therapyModule = getModuleBySlug(slug);

  if (!therapyModule) {
    notFound();
  }

  const flutterAppUrl = process.env.NEXT_PUBLIC_FLUTTER_APP_URL || 'https://app.tech4neurodivergent.com';

  const toolSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: therapyModule.title,
    alternateName: therapyModule.nepaliTitle,
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web, Android, iOS',
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
    },
    description: therapyModule.shortDescription,
    url: `${flutterAppUrl}${therapyModule.flutterRoute}`,
  };

  return (
    <>
      <JsonLd data={toolSchema} />
      <ToolDetailClient therapyModule={therapyModule} />
    </>
  );
}
