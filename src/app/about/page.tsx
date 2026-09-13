'use client';

import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSenseSlot from '@/components/AdSenseSlot';
import { useLanguage } from '@/context/LanguageContext';
import {
  Sparkles,
  ShieldCheck,
  Globe2,
  Brain,
  Users,
  CheckCircle,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

export default function AboutPage() {
  const flutterAppUrl = process.env.NEXT_PUBLIC_FLUTTER_APP_URL || 'https://app.tech4neurodivergent.com';
  const { language, t } = useLanguage();

  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: t('navAbout') }]} />

        {/* Header */}
        <header className="rounded-3xl border border-[#E8E2D5] dark:border-[#273748] bg-[#FAF7EE] dark:bg-[#182330] p-6 sm:p-10 mb-10 shadow-xs transition-colors">
          <div className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-[#1F2E3E] border border-[#DCD5C5] dark:border-[#2C3E50] px-3.5 py-1 text-xs font-bold text-[#2B5763] dark:text-[#5FA4B8] mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#9E5819] dark:text-[#F6AD55]" />
            <span>{t('navAbout')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0] tracking-tight leading-tight">
            {language === 'ne'
              ? 'न्यूरोडाइभर्जेन्ट सिकारुहरूका लागि खुला सहयोगी प्रविधि'
              : 'Democratizing Assistive Technology for Neurodivergent Learners'}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed">
            {language === 'ne'
              ? 'विदेशमा बनेका विशेष शिक्षा एपहरू महँगा र नेपाली भाषामा उपलब्ध छैनन्। हाम्रो उद्देश्य हरेक बालबालिकालाई आफ्नै भाषा र गतिमा सिक्न सक्ने निःशुल्क डिजिटल मञ्च उपलब्ध गराउनु हो।'
              : 'Tech4Neurodivergent was born out of a critical observation: commercial special education software is excessively costly, Western-centric, visually overstimulating, and unavailable in regional South Asian languages like Nepali.'}
          </p>
        </header>

        {/* AdSense Slot */}
        <AdSenseSlot slotId="about-top" format="horizontal" />

        {/* Neurodiversity Section */}
        <section className="my-10 space-y-6 text-sm sm:text-base text-[#3E4D5E] dark:text-[#CBD5E1] leading-relaxed">
          <div className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 sm:p-8 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-4 flex items-center gap-2">
              <Brain className="h-6 w-6 text-[#2B5763] dark:text-[#5FA4B8]" />
              <span>{language === 'ne' ? 'न्यूरोडाइभर्सिटी सम्मान' : 'The Neurodiversity-Affirming Paradigm'}</span>
            </h2>
            <p>
              {language === 'ne'
                ? 'हामी अटिजम र एडीएचडीलाई कुनै रोग वा कमजोरी मान्दैनौं; यो मानव मस्तिष्कको विविधता हो। हाम्रा उपकरणहरू बालबालिकालाई परिवर्तन गर्न होइन, उनीहरूको आफ्नै क्षमता र सहजतामा सञ्चार गर्न सघाउन बनेका हुन्।'
                : 'We reject the medical deficit model that treats autism and ADHD as disorders to be cured. Neurological differences are natural human biological variations. Our tools provide functional autonomy: expressing distress, requesting water, and learning handwriting without sensory agony.'}
            </p>
          </div>

          <div className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 sm:p-8 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-4 flex items-center gap-2">
              <Globe2 className="h-6 w-6 text-[#9E5819] dark:text-[#F6AD55]" />
              <span>{language === 'ne' ? 'नेपाली भाषा र संस्कृतिको संरक्षण' : 'Bridging Cultural & Linguistic Disconnects'}</span>
            </h2>
            <p>
              {language === 'ne'
                ? 'घरमा आफ्नै मातृभाषा बोल्दा बालबालिका परिवारसँग नजिक रहन्छन्। देवनागरी लिपि र नेपाली बोलीमा आधारित उपकरणले नेपाली बालबालिकालाई आफ्नै परिवेशमा सिक्न सजिलो बनाउँछ।'
                : 'Depriving bilingual autistic children of their mother tongue severs family and emotional bonds. Tech4Neurodivergent provides full parity for English and Devanagari Nepali with authentic native voice recordings and cultural routines.'}
            </p>
          </div>

          <div className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 sm:p-8 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-4 flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-[#3D6B56] dark:text-[#52B788]" />
              <span>{language === 'ne' ? 'सेन्सरि-शान्त वातावरण' : 'Low-Arousal UI Standards'}</span>
            </h2>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#5B6B7C] dark:text-[#94A3B8]">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-[#3D6B56] dark:text-[#52B788] mt-0.5 shrink-0" />
                <span>{language === 'ne' ? 'आँखा नदुखाउने शान्त पृष्ठभूमि' : 'Warm, glare-free background (#FDFBF7)'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-[#3D6B56] dark:text-[#52B788] mt-0.5 shrink-0" />
                <span>{language === 'ne' ? 'कुनै झिम्किने विज्ञापन वा पपअप नभएको' : 'Zero flashing animations or popups'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-[#3D6B56] dark:text-[#52B788] mt-0.5 shrink-0" />
                <span>{language === 'ne' ? 'हात काम्नेहरूका लागि फराकिलो टच ट्र्याक' : 'Generous 42px touch runways for dyspraxia'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-[#3D6B56] dark:text-[#52B788] mt-0.5 shrink-0" />
                <span>{language === 'ne' ? 'त्रुटिरहित सिकाइ र शान्त प्रतिक्रिया' : 'Errorless learning with zero punitive buzzers'}</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Advisory */}
        <section className="my-10 rounded-2xl border border-[#DCD5C5] dark:border-[#2C3E50] bg-[#FAF7EE] dark:bg-[#151F2A] p-6 sm:p-8">
          <h2 className="text-xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-[#2B5763] dark:text-[#5FA4B8]" />
            <span>{language === 'ne' ? 'विशेषज्ञ सल्लाहकार समूह' : 'Multidisciplinary Advisory Board'}</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mb-6">
            {language === 'ne'
              ? 'हाम्रा सामग्रीहरू बाल अकुपेशनल थेरापिस्ट, स्पीच थेरापिस्ट, विशेष शिक्षक, र प्रविधि विज्ञहरूको सल्लाहमा तयार पारिएका हुन्।'
              : 'Our initiatives are guided by pediatric occupational therapists, speech-language pathologists, autistic self-advocates, and accessibility software engineers.'}
          </p>
        </section>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#E8E2D5] dark:border-[#273748] pt-6">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2B5763] dark:text-[#5FA4B8] hover:underline"
          >
            <span>{t('allModules')}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <a
            href={flutterAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#2B5763] px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-[#1E3F49]"
          >
            <span>{t('launchApp')}</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
