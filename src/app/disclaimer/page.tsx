'use client';

import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useLanguage } from '@/context/LanguageContext';
import { AlertTriangle } from 'lucide-react';

export default function DisclaimerPage() {
  const { language, t } = useLanguage();

  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: t('terms') }]} />

        <header className="rounded-3xl border border-[#DCD5C5] dark:border-[#2C3E50] bg-[#FAF2E9] dark:bg-[#2A231C] p-6 sm:p-10 mb-10 shadow-xs transition-colors">
          <div className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-[#1F2E3E] border border-[#DCD5C5] dark:border-[#2C3E50] px-3.5 py-1 text-xs font-bold text-[#9E5819] dark:text-[#F6AD55] mb-4">
            <AlertTriangle className="h-3.5 w-3.5 text-[#9E5819] dark:text-[#F6AD55]" />
            <span>{t('disclaimerTitle')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0] tracking-tight leading-tight">
            {t('terms')}
          </h1>

          <p className="mt-4 text-xs sm:text-sm text-[#6B7B8D] dark:text-[#8090A0]">
            {language === 'ne' ? 'अन्तिम अद्यावधिक: असोज २०८३' : 'Last updated: September 13, 2026'}
          </p>
        </header>

        <div className="space-y-8 text-sm sm:text-base text-[#3E4D5E] dark:text-[#CBD5E1] leading-relaxed">
          <section className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 sm:p-8 shadow-xs">
            <h2 className="text-xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-3">
              {language === 'ne' ? '१. चिकित्सकीय उपचार वा निदानको विकल्प होइन' : '1. Not a Substitute for Clinical Diagnosis'}
            </h2>
            <p>
              {language === 'ne'
                ? 'यस मञ्चमा उपलब्ध सामग्रीहरू केवल शैक्षिक र सहयोगी प्रयोजनका लागि हुन्। यो कुनै आधिकारिक चिकित्सकीय निदान वा थेरापीको विकल्प होइन।'
                : 'The tools and guides on tech4neurodivergent.com are educational and supplemental. They do not constitute formal medical diagnosis or personalized clinical therapy.'}
            </p>
          </section>

          <section className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 sm:p-8 shadow-xs">
            <h2 className="text-xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-3">
              {language === 'ne' ? '२. बालबालिकाको व्यक्तिगत भिन्नता' : '2. Individual Child Variability'}
            </h2>
            <p>
              {language === 'ne'
                ? 'हरेक बालबालिकाको सिकाइ गति फरक हुन्छ। आफ्नो बच्चाको रुचि र सहजता अनुसार उपकरणहरू प्रयोग गर्नुहोस्।'
                : 'Every neurodivergent individual has a unique sensory profile. Always monitor comfort and adapt pacing in consultation with your child\'s clinical team.'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
