'use client';

import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, Lock, EyeOff, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const { language, t } = useLanguage();

  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: t('privacy') }]} />

        <header className="rounded-3xl border border-[#E8E2D5] dark:border-[#273748] bg-[#FAF7EE] dark:bg-[#182330] p-6 sm:p-10 mb-10 shadow-xs transition-colors">
          <div className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-[#1F2E3E] border border-[#DCD5C5] dark:border-[#2C3E50] px-3.5 py-1 text-xs font-bold text-[#3D6B56] dark:text-[#52B788] mb-4">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>COPPA & GDPR Aligned</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0] tracking-tight leading-tight">
            {t('privacy')}
          </h1>

          <p className="mt-4 text-xs sm:text-sm text-[#6B7B8D] dark:text-[#8090A0]">
            {language === 'ne' ? 'अन्तिम अद्यावधिक: असोज २०८३' : 'Last updated: September 13, 2026'}
          </p>
        </header>

        <div className="space-y-8 text-sm sm:text-base text-[#3E4D5E] dark:text-[#CBD5E1] leading-relaxed">
          <section className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 sm:p-8 shadow-xs">
            <h2 className="text-xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-3 flex items-center gap-2">
              <Lock className="h-5 w-5 text-[#2B5763] dark:text-[#5FA4B8]" />
              <span>{language === 'ne' ? '१. बालबालिकाको व्यक्तिगत विवरण संकलन नगर्ने (COPPA)' : '1. Zero Personal Data Harvesting from Minors (COPPA)'}</span>
            </h2>
            <p>
              {language === 'ne'
                ? 'हामी बालबालिका वा अभिभावकको कुनै पनि नाम, इमेल वा फोन नम्बर संकलन गर्दैनौं। कुनै खाता नखोली सिधै सबै सामग्री प्रयोग गर्न सकिन्छ।'
                : 'We comply with the Children\'s Online Privacy Protection Act (COPPA). We do NOT require user account creation, emails, or personal identification.'}
            </p>
          </section>

          <section className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 sm:p-8 shadow-xs">
            <h2 className="text-xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-3 flex items-center gap-2">
              <EyeOff className="h-5 w-5 text-[#9E5819] dark:text-[#F6AD55]" />
              <span>{language === 'ne' ? '२. लोकल डिभाइस स्टोरेज' : '2. On-Device Local Storage'}</span>
            </h2>
            <p>
              {language === 'ne'
                ? 'एपमा तयार गरिएका तालिका वा कोरिएका अक्षरहरू प्रयोगकर्ताको आफ्नै मोबाइल वा कम्प्युटरमै सुरक्षित रहन्छन्, हाम्रो सर्भरमा पठाइँदैन।'
                : 'All customized schedules, vocabulary items, or handwriting progress remain strictly inside your browser\'s local storage.'}
            </p>
          </section>

          <section className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 sm:p-8 shadow-xs">
            <h2 className="text-xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-3 flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#3D6B56] dark:text-[#52B788]" />
              <span>{language === 'ne' ? '३. विज्ञापन तथा कुकीज' : '3. Advertising & Cookies Policy'}</span>
            </h2>
            <p>
              {language === 'ne'
                ? 'निःशुल्क सेवा निरन्तर राख्न Google AdSense मार्फत सेन्सरि-मैत्री, आँखा नबिझाउने विज्ञापनहरू मात्र राखिन्छन्।'
                : 'To support free hosting, non-intrusive advertisements from Google AdSense may be displayed. All ads adhere to child-friendly and low-arousal standards.'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
