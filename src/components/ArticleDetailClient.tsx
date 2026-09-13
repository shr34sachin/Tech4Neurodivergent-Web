'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SanityPost } from '@/lib/sanity/queries';
import { TherapyModule } from '@/data/modules';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSenseSlot from '@/components/AdSenseSlot';
import PortableTextRenderer from '@/components/PortableTextRenderer';
import { urlForImage } from '@/lib/sanity/image';
import { useLanguage } from '@/context/LanguageContext';
import {
  Clock,
  Calendar,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function ArticleDetailClient({
  article,
  relatedModule
}: {
  article: SanityPost & { sections?: Array<{ title: string; nepaliTitle?: string; content: string; nepaliContent?: string }> };
  relatedModule?: TherapyModule;
}) {
  const { language, t } = useLanguage();
  const flutterAppUrl = process.env.NEXT_PUBLIC_FLUTTER_APP_URL || 'https://app.tech4neurodivergent.com';

  const title = language === 'ne' && article.nepaliTitle ? article.nepaliTitle : article.title;
  const subtitle = language === 'ne' && article.nepaliSubtitle ? article.nepaliSubtitle : article.subtitle;
  const category = article.categories?.[0]
    ? (language === 'ne' && article.categories[0].nepaliTitle ? article.categories[0].nepaliTitle : article.categories[0].title)
    : 'Clinical';
  const readingTime = language === 'ne' && article.nepaliReadingTime ? article.nepaliReadingTime : (article.readingTime || '7 min read');
  const publishedAt = article.publishedAt || 'September 2026';
  const takeaways = language === 'ne' && article.nepaliKeyTakeaways
    ? article.nepaliKeyTakeaways
    : article.keyTakeaways;

  const mainImageUrl = article.mainImage ? urlForImage(article.mainImage) : null;
  const authorName = article.author?.name || 'Educational Advisory Team';
  const authorRole = language === 'ne' && article.author?.nepaliRole ? article.author.nepaliRole : (article.author?.role || 'Pediatric Specialists');

  const richBody = language === 'ne' && article.nepaliBody ? article.nepaliBody : article.body;

  return (
    <article className="py-10 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: t('navBlog'), href: '/blog' },
            { label: title },
          ]}
        />

        {/* Header */}
        <header className="rounded-3xl border border-[#E8E2D5] dark:border-[#273748] bg-[#FAF7EE] dark:bg-[#182330] p-6 sm:p-10 mb-10 shadow-xs transition-colors">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="rounded-full bg-white dark:bg-[#1F2E3E] border border-[#DCD5C5] dark:border-[#2C3E50] px-3 py-1 text-xs font-bold text-[#2B5763] dark:text-[#5FA4B8]">
              {category}
            </span>
            <div className="flex items-center gap-4 text-xs text-[#6B7B8D] dark:text-[#8090A0]">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {readingTime}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" /> {publishedAt}
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0] tracking-tight leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mt-4 mb-6">
              {subtitle}
            </p>
          )}

          {/* Author Byline */}
          <div className="flex items-center gap-3 pt-4 border-t border-[#E8E2D5] dark:border-[#273748]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2B5763] text-white font-bold text-xs">
              {authorName.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="text-sm font-bold text-[#1E293B] dark:text-[#E2E8F0]">{authorName}</div>
              <div className="text-xs text-[#5B6B7C] dark:text-[#94A3B8]">{authorRole}</div>
            </div>
          </div>
        </header>

        {/* Featured Image if present */}
        {mainImageUrl && (
          <div className="relative w-full h-[360px] sm:h-[480px] rounded-3xl overflow-hidden mb-10 border border-[#E8E2D5] dark:border-[#273748] shadow-xs">
            <Image
              src={mainImageUrl.url()}
              alt={article.mainImage?.alt || title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Top AdSense */}
        <AdSenseSlot slotId="article-detail-top" format="horizontal" />

        {/* Key Takeaways */}
        {takeaways && takeaways.length > 0 && (
          <aside className="my-8 rounded-2xl border border-[#DCD5C5] dark:border-[#2C3E50] bg-[#FAF2E9] dark:bg-[#201C19] p-6 sm:p-8">
            <h2 className="text-base font-bold text-[#9E5819] dark:text-[#F6AD55] uppercase tracking-wider mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#9E5819] dark:text-[#F6AD55]" />
              <span>{language === 'ne' ? 'मुख्य शैक्षिक निष्कर्ष' : 'Core Educational Takeaways'}</span>
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#3E4D5E] dark:text-[#CBD5E1]">
              {takeaways.map((takeaway: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#9E5819] dark:text-[#F6AD55] font-bold">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Render Rich Body (Sanity Portable Text) or Legacy Static Sections */}
        {richBody ? (
          <div className="my-10 rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 sm:p-10 shadow-xs">
            <PortableTextRenderer value={richBody} />
          </div>
        ) : article.sections ? (
          <div className="my-10 space-y-12">
            {article.sections.map((section, idx) => {
              const sTitle = language === 'ne' && section.nepaliTitle ? section.nepaliTitle : section.title;
              const sContent = language === 'ne' && section.nepaliContent ? section.nepaliContent : section.content;

              return (
                <section key={idx} className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 sm:p-8 shadow-xs">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B] dark:text-[#E2E8F0] pb-3 mb-4 border-b border-[#F0ECE1] dark:border-[#273748]">
                    {sTitle}
                  </h2>
                  <div className="text-sm sm:text-base text-[#3E4D5E] dark:text-[#CBD5E1] leading-relaxed whitespace-pre-line">
                    {sContent}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          <div className="my-10 rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 sm:p-8 shadow-xs text-[#3E4D5E] dark:text-[#CBD5E1]">
            <p>{language === 'ne' ? article.nepaliSummary || article.summary : article.summary}</p>
          </div>
        )}

        {/* Mid AdSense */}
        <AdSenseSlot slotId="article-detail-mid" format="rectangle" />

        {/* Companion Tool Callout */}
        {relatedModule && (
          <div className="my-10 rounded-2xl border border-[#2B5763] dark:border-[#5FA4B8] bg-[#FAF7EE] dark:bg-[#151F2A] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2B5763] dark:text-[#5FA4B8]">
                {language === 'ne' ? 'सम्बन्धित अन्तरक्रियात्मक उपकरण' : 'Companion Interactive Tool'}
              </span>
              <h3 className="text-xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mt-1">
                {language === 'ne' ? relatedModule.nepaliTitle : relatedModule.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] mt-2 max-w-xl">
                {language === 'ne' ? relatedModule.nepaliShortDescription : relatedModule.shortDescription}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href={`/tools/${relatedModule.slug}`}
                className="inline-flex items-center justify-center rounded-xl border border-[#DCD5C5] dark:border-[#2C3E50] bg-white dark:bg-[#182330] px-4 py-2.5 text-xs font-bold text-[#1E293B] dark:text-[#E2E8F0] hover:bg-[#F5F0E6] dark:hover:bg-[#202E3D]"
              >
                <span>{t('clinicalGuide')}</span>
              </Link>
              <a
                href={`${flutterAppUrl}${relatedModule.flutterRoute}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#2B5763] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#1E3F49]"
              >
                <span>{t('launchTool')}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="mt-10 flex items-center justify-between border-t border-[#E8E2D5] dark:border-[#273748] pt-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2B5763] dark:text-[#5FA4B8] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{t('backToBlog')}</span>
          </Link>

          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2B5763] dark:text-[#5FA4B8] hover:underline"
          >
            <span>{t('navTools')}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
