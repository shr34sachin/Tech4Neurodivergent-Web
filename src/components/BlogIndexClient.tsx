'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SanityPost } from '@/lib/sanity/queries';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSenseSlot from '@/components/AdSenseSlot';
import { urlForImage } from '@/lib/sanity/image';
import { useLanguage } from '@/context/LanguageContext';
import { BookOpen, Clock, User, ArrowRight } from 'lucide-react';

export default function BlogIndexClient({ posts }: { posts: SanityPost[] }) {
  const { language, t } = useLanguage();

  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: t('navBlog') }]} />

        {/* Intro */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9E5819] dark:text-[#F6AD55] mb-3">
            <BookOpen className="h-4 w-4" />
            <span>{t('blogTitle')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0] tracking-tight">
            {language === 'ne' ? 'अभिभावक तथा क्लिनिसियनका लागि शैक्षिक स्रोत' : 'Educational Guides for Parents & Clinicians'}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed">
            {t('blogSubtitle')}
          </p>
        </div>

        {/* Top AdSense Slot */}
        <AdSenseSlot slotId="blog-index-top" format="horizontal" />

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          {posts.map((post) => {
            const title = language === 'ne' && post.nepaliTitle ? post.nepaliTitle : post.title;
            const summary = language === 'ne' && post.nepaliSummary ? post.nepaliSummary : post.summary;
            const category = post.categories?.[0]
              ? (language === 'ne' && post.categories[0].nepaliTitle ? post.categories[0].nepaliTitle : post.categories[0].title)
              : 'Clinical';
            const readingTime = language === 'ne' && post.nepaliReadingTime ? post.nepaliReadingTime : (post.readingTime || '7 min read');
            const imageUrl = post.mainImage ? urlForImage(post.mainImage) : null;

            return (
              <article
                key={post._id}
                className="flex flex-col justify-between rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] overflow-hidden shadow-xs hover:border-[#2B5763] dark:hover:border-[#5FA4B8] transition-all group"
              >
                {imageUrl && (
                  <div className="relative w-full h-48 bg-[#FAF7EE] dark:bg-[#151F2A]">
                    <Image
                      src={imageUrl.url()}
                      alt={post.mainImage?.alt || title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#6B7B8D] dark:text-[#8090A0] mb-4">
                      <span className="rounded-full bg-[#E8EFF1] dark:bg-[#1E3342] px-3 py-1 font-semibold text-[#2B5763] dark:text-[#5FA4B8]">
                        {category}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{readingTime}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-[#1E293B] dark:text-[#E2E8F0] group-hover:text-[#2B5763] dark:group-hover:text-[#5FA4B8] transition-colors leading-snug mb-3">
                      <Link href={`/blog/${post.slug.current}`}>
                        {title}
                      </Link>
                    </h2>

                    <p className="text-sm text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mb-6 line-clamp-3">
                      {summary}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#F0ECE1] dark:border-[#273748] text-xs">
                    <span className="text-[#6B7B8D] dark:text-[#8090A0] flex items-center gap-1">
                      <User className="h-3.5 w-3.5 text-[#5B6B7C] dark:text-[#8090A0]" />
                      <span>{post.author?.name || 'Educational Advisory Team'}</span>
                    </span>
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="font-bold text-[#2B5763] dark:text-[#5FA4B8] hover:underline flex items-center gap-1"
                    >
                      <span>{t('readGuide')}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom AdSense */}
        <AdSenseSlot slotId="blog-index-bottom" format="rectangle" />
      </div>
    </div>
  );
}
