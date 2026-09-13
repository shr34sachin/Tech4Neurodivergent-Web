'use client';

import React from 'react';
import Link from 'next/link';
import { TherapyModule } from '@/data/modules';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSenseSlot from '@/components/AdSenseSlot';
import { useLanguage } from '@/context/LanguageContext';
import {
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  HelpCircle
} from 'lucide-react';

export default function ToolDetailClient({ therapyModule }: { therapyModule: TherapyModule }) {
  const { language, t } = useLanguage();
  const flutterAppUrl = process.env.NEXT_PUBLIC_FLUTTER_APP_URL || 'https://app.tech4neurodivergent.com';

  const title = language === 'ne' ? therapyModule.nepaliTitle : therapyModule.title;
  const category = language === 'ne' ? therapyModule.nepaliCategory : therapyModule.category;
  const description = language === 'ne' ? therapyModule.nepaliShortDescription : therapyModule.shortDescription;
  const age = language === 'ne' ? therapyModule.nepaliAgeRange : therapyModule.ageRange;
  const sensoryAccommodations = language === 'ne' ? therapyModule.nepaliSensoryAccommodations : therapyModule.sensoryAccommodations;
  const parentGuide = language === 'ne' ? therapyModule.nepaliParentImplementationGuide : therapyModule.parentImplementationGuide;
  const overviewHtml = language === 'ne' ? therapyModule.nepaliOverviewHtml : therapyModule.overviewHtml;
  const deepDive = language === 'ne' ? therapyModule.nepaliClinicalDeepDive : therapyModule.clinicalDeepDive;

  return (
    <article className="py-10 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: t('navTools'), href: '/tools' },
            { label: title },
          ]}
        />

        {/* Header */}
        <header className="rounded-3xl border border-[#E8E2D5] dark:border-[#273748] bg-[#FAF7EE] dark:bg-[#182330] p-6 sm:p-10 mb-10 shadow-xs transition-colors">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="rounded-full bg-white dark:bg-[#1F2E3E] border border-[#DCD5C5] dark:border-[#2C3E50] px-3 py-1 text-xs font-bold text-[#2B5763] dark:text-[#5FA4B8]">
              {category}
            </span>
            <span className="text-xs text-[#6B7B8D] dark:text-[#8090A0]">
              {t('ageTarget')}: <strong className="text-[#1E293B] dark:text-[#E2E8F0]">{age}</strong>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0] tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mt-4 mb-8 max-w-3xl">
            {description}
          </p>

          {/* Launch Action */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E8E2D5] dark:border-[#273748]">
            <a
              href={`${flutterAppUrl}${therapyModule.flutterRoute}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#2B5763] px-6 py-3.5 text-base font-bold text-white shadow-xs hover:bg-[#1E3F49] transition-all"
            >
              <span>{t('launchTool')}</span>
              <ExternalLink className="h-4 w-4" />
            </a>

            <div className="text-xs text-[#6B7B8D] dark:text-[#8090A0] flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#3D6B56] dark:text-[#52B788]" />
              <span>{language === 'ne' ? 'कुनै एप इन्स्टल गर्नु पर्दैन' : 'Runs in any browser • Zero installation required'}</span>
            </div>
          </div>
        </header>

        {/* AdSense Top */}
        <AdSenseSlot slotId="tool-detail-top" format="horizontal" />

        {/* Fitzgerald Key Color Banner for AAC */}
        {therapyModule.category === 'AAC & Communication' && (
          <div className="my-8 rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 shadow-xs">
            <h3 className="text-sm font-bold text-[#1E293B] dark:text-[#E2E8F0] uppercase tracking-wider mb-3">
              {language === 'ne' ? 'फिजराल्ड की रङ्ग-सङ्केत मापदण्ड:' : 'Standardized Fitzgerald Key Color Taxonomy:'}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs font-semibold">
              <div className="p-2.5 rounded-lg fitz-yellow border">
                {language === 'ne' ? 'पहेंलो: मानिस (म, साथी)' : 'Yellow: Pronouns / People'}
              </div>
              <div className="p-2.5 rounded-lg fitz-green border">
                {language === 'ne' ? 'हरियो: काम (खान्छु, खेल्छु)' : 'Green: Actions / Verbs'}
              </div>
              <div className="p-2.5 rounded-lg fitz-orange border">
                {language === 'ne' ? 'सुन्तला: वस्तु (पानी, किताब)' : 'Orange: Objects / Nouns'}
              </div>
              <div className="p-2.5 rounded-lg fitz-blue border">
                {language === 'ne' ? 'नीलो: विशेषण (ठूलो, मीठो)' : 'Blue: Adjectives / Modifiers'}
              </div>
              <div className="p-2.5 rounded-lg fitz-purple border col-span-2 sm:col-span-1">
                {language === 'ne' ? 'बैजनी: सामाजिक (नमस्ते)' : 'Purple: Social / Greetings'}
              </div>
            </div>
          </div>
        )}

        {/* Pillars */}
        <section className="my-10" aria-labelledby="pillars-heading">
          <h2 id="pillars-heading" className="text-2xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-6">
            {t('clinicalPillars')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {therapyModule.clinicalPillars.map((pillar, idx) => {
              const pTitle = language === 'ne' && pillar.nepaliTitle ? pillar.nepaliTitle : pillar.title;
              const pDesc = language === 'ne' && pillar.nepaliDescription ? pillar.nepaliDescription : pillar.description;

              return (
                <div key={idx} className="rounded-xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-5 shadow-xs">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E8EFF1] dark:bg-[#1E3342] text-[#2B5763] dark:text-[#5FA4B8] text-xs font-bold mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-2">{pTitle}</h3>
                  <p className="text-xs text-[#5B6B7C] dark:text-[#94A3B8] leading-relaxed">{pDesc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Deep Dive */}
        <section className="my-12 text-[#1E293B] dark:text-[#E2E8F0] leading-relaxed">
          <h2 className="text-2xl font-bold pb-3 border-b border-[#E8E2D5] dark:border-[#273748]">
            {language === 'ne' ? 'विस्तृत शैक्षिक अवलोकन' : 'Comprehensive Educational & Pedagogical Overview'}
          </h2>

          <div
            className="mt-6 space-y-4 text-base text-[#3E4D5E] dark:text-[#CBD5E1]"
            dangerouslySetInnerHTML={{ __html: overviewHtml }}
          />

          <div className="mt-8 rounded-2xl bg-white dark:bg-[#182330] border border-[#E8E2D5] dark:border-[#273748] p-6 sm:p-8 space-y-6 text-sm sm:text-base text-[#3E4D5E] dark:text-[#CBD5E1] leading-relaxed whitespace-pre-line">
            {deepDive}
          </div>
        </section>

        {/* Accommodations */}
        <section className="my-12 rounded-2xl border border-[#DCD5C5] dark:border-[#2C3E50] bg-[#FAF7EE] dark:bg-[#151F2A] p-6 sm:p-8">
          <div className="flex items-center gap-2 text-[#3D6B56] dark:text-[#52B788] font-bold text-sm uppercase tracking-wider mb-4">
            <ShieldCheck className="h-5 w-5" />
            <span>{t('sensoryAccommodations')}</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8]">
            {sensoryAccommodations.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-white dark:bg-[#182330] rounded-lg p-3 border border-[#E8E2D5] dark:border-[#273748]">
                <CheckCircle2 className="h-4 w-4 text-[#3D6B56] dark:text-[#52B788] mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Parent Guide */}
        <section className="my-12" aria-labelledby="parent-guide-heading">
          <h2 id="parent-guide-heading" className="text-2xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-6">
            {t('implementationGuide')}
          </h2>
          <div className="space-y-4">
            {parentGuide.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-5 shadow-xs"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2B5763] text-white text-xs font-bold">
                  {idx + 1}
                </div>
                <p className="text-sm text-[#3E4D5E] dark:text-[#CBD5E1] leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="my-12" aria-labelledby="faqs-heading">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="h-6 w-6 text-[#2B5763] dark:text-[#5FA4B8]" />
            <h2 id="faqs-heading" className="text-2xl font-bold text-[#1E293B] dark:text-[#E2E8F0]">
              {t('faqs')}
            </h2>
          </div>
          <div className="space-y-4">
            {therapyModule.faqs.map((faq, idx) => {
              const q = language === 'ne' && faq.nepaliQuestion ? faq.nepaliQuestion : faq.question;
              const a = language === 'ne' && faq.nepaliAnswer ? faq.nepaliAnswer : faq.answer;

              return (
                <div key={idx} className="rounded-xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-5 shadow-xs">
                  <h3 className="text-base font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-2">{q}</h3>
                  <p className="text-xs sm:text-sm text-[#5B6B7C] dark:text-[#94A3B8] leading-relaxed">{a}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* References */}
        <footer className="mt-12 rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-[#F5F0E6] dark:bg-[#151F2A] p-6 text-xs text-[#5B6B7C] dark:text-[#94A3B8]">
          <h3 className="font-bold uppercase tracking-wider text-[#1E293B] dark:text-[#E2E8F0] mb-3">
            {t('references')}:
          </h3>
          <ul className="space-y-2">
            {therapyModule.references.map((ref, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span>[{idx + 1}]</span>
                <cite className="not-italic">{ref}</cite>
              </li>
            ))}
          </ul>
        </footer>

        {/* Back Link */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#E8E2D5] dark:border-[#273748] pt-6">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2B5763] dark:text-[#5FA4B8] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{t('backToTools')}</span>
          </Link>

          <a
            href={`${flutterAppUrl}${therapyModule.flutterRoute}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#2B5763] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs hover:bg-[#1E3F49] transition-all"
          >
            <span>{t('launchTool')}</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
