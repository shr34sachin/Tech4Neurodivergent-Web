import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { getPageBySlug } from '@/lib/sanity/queries';
import { urlForImage } from '@/lib/sanity/image';
import PortableTextRenderer from '@/components/PortableTextRenderer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const revalidate = 60;

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    return { title: 'Page Not Found' };
  }

  return {
    title: page.metaTitle || page.title,
    description: page.metaDescription || page.subtitle || '',
  };
}

export default async function DynamicSanityPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const ogImageUrl = page.ogImage ? urlForImage(page.ogImage) : null;

  return (
    <article className="py-10 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: page.title }]} />

        <header className="rounded-3xl border border-[#E8E2D5] dark:border-[#273748] bg-[#FAF7EE] dark:bg-[#182330] p-6 sm:p-10 mb-10 shadow-xs">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0] tracking-tight leading-tight">
            {page.title}
          </h1>

          {page.subtitle && (
            <p className="text-base sm:text-lg text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mt-4">
              {page.subtitle}
            </p>
          )}
        </header>

        {ogImageUrl && (
          <div className="relative w-full h-[360px] rounded-2xl overflow-hidden mb-8 border border-[#E8E2D5] dark:border-[#273748]">
            <Image
              src={ogImageUrl.url()}
              alt={page.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 sm:p-10 shadow-xs">
          <PortableTextRenderer value={page.body} />
        </div>
      </div>
    </article>
  );
}
