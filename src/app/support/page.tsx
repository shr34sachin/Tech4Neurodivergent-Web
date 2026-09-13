'use client';

import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import DonationCard from '@/components/DonationCard';
import AdSenseSlot from '@/components/AdSenseSlot';
import { useLanguage } from '@/context/LanguageContext';
import { Heart, Server } from 'lucide-react';

export default function SupportPage() {
  const { language, t } = useLanguage();

  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: t('navSupport') }]} />

        {/* Header */}
        <header className="rounded-3xl border border-[#E8E2D5] dark:border-[#273748] bg-[#FAF7EE] dark:bg-[#182330] p-6 sm:p-10 mb-10 shadow-xs transition-colors">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FAF2E9] dark:bg-[#2A231C] px-3.5 py-1 text-xs font-bold text-[#9E5819] dark:text-[#F6AD55] mb-4">
            <Heart className="h-3.5 w-3.5 fill-[#9E5819]" />
            <span>{t('navSupport')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0] tracking-tight leading-tight">
            {t('supportTitle')}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed">
            {t('supportSubtitle')}
          </p>
        </header>

        <div className="mb-12">
          <DonationCard />
        </div>

        <AdSenseSlot slotId="support-mid" format="horizontal" />

        <section className="my-10 rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-4 flex items-center gap-2">
            <Server className="h-6 w-6 text-[#2B5763] dark:text-[#5FA4B8]" />
            <span>{language === 'ne' ? 'सहयोग रकमको प्रयोग' : 'Transparent Financial Stewardship'}</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mb-6">
            {language === 'ne'
              ? 'सबै संकलित रकम सर्भर खर्च, नेपाली आवाज रेकर्डिङ, र सरकारी विद्यालयमा विशेष शिक्षा तालिम दिन प्रयोग गरिन्छ।'
              : 'Every contribution directly funds edge hosting, native voice artist stipends, and accessible educational materials.'}
          </p>
        </section>
      </div>
    </div>
  );
}
