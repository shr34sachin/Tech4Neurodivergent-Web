'use client';

import React from 'react';
import Link from 'next/link';
import { therapyModules } from '@/data/modules';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSenseSlot from '@/components/AdSenseSlot';
import { useLanguage } from '@/context/LanguageContext';
import { Compass, ExternalLink, ArrowRight } from 'lucide-react';

export default function ToolsPage() {
  const flutterAppUrl = process.env.NEXT_PUBLIC_FLUTTER_APP_URL || 'https://app.tech4neurodivergent.com';
  const { language, t } = useLanguage();

  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: t('navTools') }]} />

        {/* Header Intro */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2B5763] dark:text-[#5FA4B8] mb-3">
            <Compass className="h-4 w-4" />
            <span>{t('navTools')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0] tracking-tight">
            {t('toolsTitle')}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed">
            {t('toolsSubtitle')}
          </p>
        </div>

        {/* AdSense Top Slot */}
        <AdSenseSlot slotId="tools-directory-top" format="horizontal" />

        {/* 8 Module Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          {therapyModules.map((module, index) => {
            const title = language === 'ne' ? module.nepaliTitle : module.title;
            const category = language === 'ne' ? module.nepaliCategory : module.category;
            const description = language === 'ne' ? module.nepaliShortDescription : module.shortDescription;
            const skills = language === 'ne' ? module.nepaliTargetSkills : module.targetSkills;
            const age = language === 'ne' ? module.nepaliAgeRange : module.ageRange;
            const evidence = language === 'ne' ? module.nepaliEvidenceBase : module.evidenceBase;

            return (
              <article
                key={module.id}
                className="flex flex-col justify-between rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 sm:p-8 shadow-xs hover:border-[#2B5763] dark:hover:border-[#5FA4B8] transition-all group"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-bold text-[#2B5763] dark:text-[#5FA4B8] px-2.5 py-1 rounded bg-[#E8EFF1] dark:bg-[#1E3342]">
                      0{index + 1}
                    </span>
                    <span className="rounded-full bg-[#FAF2E9] dark:bg-[#2A231C] px-3 py-0.5 text-xs font-medium text-[#9E5819] dark:text-[#F6AD55]">
                      {category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-[#1E293B] dark:text-[#E2E8F0] group-hover:text-[#2B5763] dark:group-hover:text-[#5FA4B8] transition-colors mb-3">
                    <Link href={`/tools/${module.slug}`}>
                      {title}
                    </Link>
                  </h2>

                  <p className="text-sm text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mb-6">
                    {description}
                  </p>

                  {/* Key Target Skills List */}
                  <div className="border-t border-[#F0ECE1] dark:border-[#273748] pt-4 mb-6">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1E293B] dark:text-[#E2E8F0] mb-2">
                      {t('targetSkills')}:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5B6B7C] dark:text-[#94A3B8]">
                      {skills.map((skill, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-1.5">
                          <span className="text-[#3D6B56] dark:text-[#52B788] font-bold">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Meta details */}
                  <div className="rounded-xl bg-[#FAF7EE] dark:bg-[#151F2A] p-3 text-xs text-[#5B6B7C] dark:text-[#94A3B8] space-y-1 mb-6">
                    <div>
                      <strong className="text-[#1E293B] dark:text-[#E2E8F0]">{t('ageTarget')}:</strong> {age}
                    </div>
                    <div>
                      <strong className="text-[#1E293B] dark:text-[#E2E8F0]">{t('evidenceBase')}:</strong> {evidence}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#F0ECE1] dark:border-[#273748]">
                  <Link
                    href={`/tools/${module.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2B5763] dark:text-[#5FA4B8] hover:underline"
                  >
                    <span>{t('clinicalGuide')}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <a
                    href={`${flutterAppUrl}${module.flutterRoute}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#2B5763] px-4 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#1E3F49] transition-all"
                  >
                    <span>{t('launchTool')}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom AdSense */}
        <AdSenseSlot slotId="tools-directory-bottom" format="rectangle" className="mt-12" />
      </div>
    </div>
  );
}
