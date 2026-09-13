'use client';

import React from 'react';
import Link from 'next/link';
import { therapyModules } from '@/data/modules';
import { articles } from '@/data/articles';
import AdSenseSlot from '@/components/AdSenseSlot';
import DonationCard from '@/components/DonationCard';
import { useLanguage } from '@/context/LanguageContext';
import {
  Sparkles,
  BookMarked,
  Activity,
  ExternalLink,
  ShieldCheck,
  Brain,
  Layers,
  HeartHandshake,
  Compass,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Puzzle
} from 'lucide-react';

export default function HomePage() {
  const flutterAppUrl = process.env.NEXT_PUBLIC_FLUTTER_APP_URL || 'https://app.tech4neurodivergent.com';
  const { language, t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#E8E2D5] dark:border-[#273748] bg-gradient-to-b from-[#FAF7EE] to-[#FDFBF7] dark:from-[#151F2A] dark:to-[#111821] py-16 sm:py-24 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#DCD5C5] dark:border-[#2C3E50] bg-white dark:bg-[#1A2532] px-3.5 py-1.5 text-xs font-semibold text-[#2B5763] dark:text-[#5FA4B8] shadow-xs mb-6">
              <Sparkles className="h-3.5 w-3.5 text-[#9E5819] dark:text-[#F6AD55]" />
              <span>{t('heroBadge')}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1E293B] dark:text-[#E2E8F0] leading-[1.15]">
              {t('heroTitle')}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed">
              {t('heroSubtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={flutterAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#2B5763] px-6 py-3.5 text-base font-semibold text-white shadow-xs transition-all hover:bg-[#1E3F49] hover:shadow-md active:scale-98"
              >
                <span>{t('heroCtaLaunch')}</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <Link
                href="/tools"
                className="inline-flex items-center gap-2 rounded-xl border border-[#DCD5C5] dark:border-[#2C3E50] bg-white dark:bg-[#1A2532] px-5 py-3.5 text-base font-semibold text-[#1E293B] dark:text-[#E2E8F0] hover:bg-[#F5F0E6] dark:hover:bg-[#233140] transition-colors"
              >
                <span>{t('heroCtaBrowse')}</span>
                <ArrowRight className="h-4 w-4 text-[#5B6B7C] dark:text-[#8090A0]" />
              </Link>
            </div>

            {/* Metrics Checklist */}
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-[#E8E2D5] dark:border-[#273748] pt-6 text-xs text-[#5B6B7C] dark:text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-[#3D6B56] dark:text-[#52B788]" />
                <span>{t('freeOpenAccess')}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-[#3D6B56] dark:text-[#52B788]" />
                <span>{t('lowStimulationUi')}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-[#3D6B56] dark:text-[#52B788]" />
                <span>{t('bilingualTitle')}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Slot */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AdSenseSlot slotId="home-top-leaderboard" format="horizontal" />
      </div>

      {/* 4 Core Educational Pillars */}
      <section className="py-16 sm:py-20 border-b border-[#E8E2D5] dark:border-[#273748] bg-[#FAF7EE]/60 dark:bg-[#151F2A]/60 transition-colors" aria-labelledby="pillars-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 id="pillars-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1E293B] dark:text-[#E2E8F0]">
              {t('pillarsTitle')}
            </h2>
            <p className="mt-2 text-sm text-[#4B5A6B] dark:text-[#94A3B8]">
              {t('pillarsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8EFF1] dark:bg-[#1E3342] text-[#2B5763] dark:text-[#5FA4B8] mb-4">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-2">
                {language === 'ne' ? 'पहिले शारीरिक अनुभूति' : 'Interoception First'}
              </h3>
              <p className="text-xs text-[#5B6B7C] dark:text-[#94A3B8] leading-relaxed">
                {language === 'ne'
                  ? 'मुटुको धड्कन र शारीरिक सङ्केतहरू पहिले बुझ्ने अभ्यास जसले तनाव र रिस शान्त गर्न मद्दत गर्छ।'
                  : 'Prioritizes internal visceral cues (heartbeat, breath) before demanding abstract emotional labels.'}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FAF2E9] dark:bg-[#2A231C] text-[#9E5819] dark:text-[#F6AD55] mb-4">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-2">
                {language === 'ne' ? 'फिजराल्ड की मापदण्ड' : 'Fitzgerald Key Standard'}
              </h3>
              <p className="text-xs text-[#5B6B7C] dark:text-[#94A3B8] leading-relaxed">
                {language === 'ne'
                  ? 'रङ्ग-सङ्केतमा आधारित व्याकरण जसले बोल्न नसक्ने बालबालिकालाई छिटो वाक्य बनाउन सिकाउँछ।'
                  : 'Organizes parts of speech by visual color grammar, structuring predictable motor planning.'}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDF4F0] dark:bg-[#182B24] text-[#3D6B56] dark:text-[#52B788] mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-2">
                {language === 'ne' ? 'सेन्सरि-शान्त डिजाइन' : 'Low-Arousal UI'}
              </h3>
              <p className="text-xs text-[#5B6B7C] dark:text-[#94A3B8] leading-relaxed">
                {language === 'ne'
                  ? 'आँखा नबिझाउने शान्त रङ्गहरू र शून्य झिलिमिली जसले एकाग्रता बढाउँछ।'
                  : 'Zero flashing animations and desaturated palettes that protect sensitive sensory thresholds.'}
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F2EFF7] dark:bg-[#251E33] text-[#5B4F7D] dark:text-[#B794F4] mb-4">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-2">
                {language === 'ne' ? 'पूर्ण द्विभाषिक पहुँच' : 'Bilingual First'}
              </h3>
              <p className="text-xs text-[#5B6B7C] dark:text-[#94A3B8] leading-relaxed">
                {language === 'ne'
                  ? 'नेपाली देवनागरी लिपि र स्वाभाविक आवाज जसले आफ्नै भाषामा सिक्न मद्दत गर्छ।'
                  : 'Native Devanagari script and clear pronunciation preserving native language and family bonds.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Supportive Web-Apps Grid */}
      <section className="py-16 sm:py-24" aria-labelledby="tools-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2B5763] dark:text-[#5FA4B8] mb-2">
                <Compass className="h-3.5 w-3.5" />
                <span>{t('navTools')}</span>
              </div>
              <h2 id="tools-heading" className="text-2xl sm:text-4xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0] tracking-tight">
                {t('toolsTitle')}
              </h2>
              <p className="mt-2 text-sm text-[#4B5A6B] dark:text-[#94A3B8] max-w-2xl">
                {t('toolsSubtitle')}
              </p>
            </div>
            <Link
              href="/tools"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2B5763] dark:text-[#5FA4B8] hover:underline"
            >
              <span>{t('allModules')}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {therapyModules.map((module, idx) => {
              const title = language === 'ne' ? module.nepaliTitle : module.title;
              const category = language === 'ne' ? module.nepaliCategory : module.category;
              const description = language === 'ne' ? module.nepaliShortDescription : module.shortDescription;
              const age = language === 'ne' ? module.nepaliAgeRange : module.ageRange;

              return (
                <article
                  key={module.id}
                  className="flex flex-col justify-between rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 shadow-xs hover:border-[#2B5763] dark:hover:border-[#5FA4B8] transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#6B7B8D] dark:text-[#8090A0] mb-3">
                      <span className="font-mono font-semibold text-[#2B5763] dark:text-[#5FA4B8]">
                        0{idx + 1}
                      </span>
                      <span className="rounded-full bg-[#FAF2E9] dark:bg-[#2A231C] px-2.5 py-0.5 text-[11px] font-medium text-[#9E5819] dark:text-[#F6AD55]">
                        {category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#1E293B] dark:text-[#E2E8F0] group-hover:text-[#2B5763] dark:group-hover:text-[#5FA4B8] transition-colors leading-snug mb-3">
                      {title}
                    </h3>

                    <p className="text-xs text-[#4B5A6B] dark:text-[#94A3B8] line-clamp-3 leading-relaxed mb-4">
                      {description}
                    </p>

                    <div className="border-t border-[#F0ECE1] dark:border-[#273748] pt-3 mb-4 text-[11px] text-[#6B7B8D] dark:text-[#8090A0]">
                      <strong className="text-[#3E4D5E] dark:text-[#CBD5E1]">{t('ageTarget')}:</strong> {age}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#F0ECE1] dark:border-[#273748] flex items-center justify-between gap-2">
                    <Link
                      href={`/tools/${module.slug}`}
                      className="text-xs font-semibold text-[#2B5763] dark:text-[#5FA4B8] hover:underline"
                    >
                      {t('clinicalGuide')} →
                    </Link>

                    <a
                      href={`${flutterAppUrl}${module.flutterRoute}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg bg-[#FAF7EE] dark:bg-[#151F2A] border border-[#DCD5C5] dark:border-[#2C3E50] px-2.5 py-1 text-xs font-semibold text-[#1E293B] dark:text-[#E2E8F0] hover:bg-[#2B5763] hover:text-white transition-colors"
                    >
                      <span>{t('launchTool')}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

            {/* Educational Knowledge Base: 5 Topic Clusters */}
      <section className="py-16 sm:py-20 border-b border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#111821] transition-colors" aria-labelledby="clusters-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-950/60 px-3 py-1 text-xs font-semibold text-primary-800 dark:text-primary-300 mb-3">
                <BookMarked className="h-3.5 w-3.5" />
                <span>{language === 'ne' ? 'शैक्षिक ज्ञान केन्द्र' : 'Educational Knowledge Hub'}</span>
              </div>
              <h2 id="clusters-heading" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1E293B] dark:text-[#E2E8F0]">
                {language === 'ne' ? '५ मुख्य विषयगत केन्द्रहरू: प्रमाण-आधारित निर्देशिकाहरू' : 'Explore Our 5 Educational Resource Hubs'}
              </h2>
              <p className="mt-2 text-sm text-[#4B5A6B] dark:text-[#94A3B8] max-w-2xl leading-relaxed">
                {language === 'ne'
                  ? 'अटिजम, डाउन सिन्ड्रोम, बौद्धिक अपाङ्गता, र सेरेब्रल पाल्सीका सिकारुहरूका लागि १५ वटा गहन क्लिनिकल निर्देशिकाहरू।'
                  : 'Comprehensive educational guides organized into 5 strategic neurodevelopmental clusters for special educators, therapists, and caregivers.'}
              </p>
            </div>
            <Link
              href="/guides"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2B5763] dark:text-[#5FA4B8] hover:underline"
            >
              <span>{language === 'ne' ? 'सबै निर्देशिकाहरू हेर्नुहोस्' : 'Explore Complete Guides Hub'}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cluster 1 Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-[#FAF7EE]/50 dark:bg-[#182330] p-6 shadow-xs hover:border-[#2B5763] dark:hover:border-[#5FA4B8] transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-950/80 px-2.5 py-0.5 rounded-md">
                    {language === 'ne' ? 'क्लस्टर १: आधारभूत ज्ञान' : 'Cluster 1: Foundational'}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                    {language === 'ne' ? '३ प्रकाशित' : '3 Live'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-2 flex items-center gap-2">
                  <Compass className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  {language === 'ne' ? 'आधारभूत निर्देशिकाहरू' : 'Foundational Principles'}
                </h3>
                <p className="text-xs text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mb-4">
                  {language === 'ne'
                    ? 'न्युरोडाइभर्जेन्स, विशेष शिक्षामा सहायक प्रविधि, र लो-टेक बनाम हाई-टेक उपकरणहरूको शैक्षिक वर्गीकरण।'
                    : 'Core definitions, practical frameworks, and the low-to-high tech assistive spectrum.'}
                </p>
                <ul className="space-y-2 border-t border-[#E8E2D5]/80 dark:border-neutral-800 pt-3 text-xs">
                  <li>
                    <Link href="/guides/what-does-neurodivergent-mean" className="text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#2B5763] dark:hover:text-[#5FA4B8] font-medium flex items-center justify-between">
                      <span className="line-clamp-1">• {language === 'ne' ? 'न्युरोडाइभर्जेन्टको अर्थ के हो?' : 'What Does It Mean to Be Neurodivergent?'}</span>
                      <ArrowRight className="h-3 w-3 flex-shrink-0 text-neutral-400" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/assistive-technology-in-special-education" className="text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#2B5763] dark:hover:text-[#5FA4B8] font-medium flex items-center justify-between">
                      <span className="line-clamp-1">• {language === 'ne' ? 'विशेष शिक्षामा सहायक प्रविधि (AT)' : 'Assistive Technology in Special Education'}</span>
                      <ArrowRight className="h-3 w-3 flex-shrink-0 text-neutral-400" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/low-tech-vs-high-tech-assistive-technology" className="text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#2B5763] dark:hover:text-[#5FA4B8] font-medium flex items-center justify-between">
                      <span className="line-clamp-1">• {language === 'ne' ? 'लो-टेक बनाम हाई-टेक प्रविधि' : 'Low-Tech vs. High-Tech AT Spectrum'}</span>
                      <ArrowRight className="h-3 w-3 flex-shrink-0 text-neutral-400" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-[#E8E2D5]/80 dark:border-neutral-800 mt-4">
                <Link href="/guides#cluster-1" className="text-xs font-semibold text-[#2B5763] dark:text-[#5FA4B8] hover:underline flex items-center gap-1">
                  <span>{language === 'ne' ? 'क्लस्टर १ का सबै गाइडहरू' : 'Browse Cluster 1 Hub'}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Cluster 2 Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-[#FAF7EE]/50 dark:bg-[#182330] p-6 shadow-xs hover:border-[#2B5763] dark:hover:border-[#5FA4B8] transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-200 bg-amber-100 dark:bg-amber-950/80 px-2.5 py-0.5 rounded-md">
                    {language === 'ne' ? 'क्लस्टर २: अटिजम (ASD)' : 'Cluster 2: Autism (ASD)'}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                    {language === 'ne' ? '३ प्रकाशित' : '3 Live'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-2 flex items-center gap-2">
                  <Brain className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  {language === 'ne' ? 'अटिजम स्पेक्ट्रम डिसअर्डर' : 'Autism Spectrum Disorder'}
                </h3>
                <p className="text-xs text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mb-4">
                  {language === 'ne'
                    ? 'कार्यकारी कार्यप्रणाली, इन्टरोसेप्शन, एलेक्सीथिमिया, र फिट्जेराल्ड की AAC रङ-कोडिङ ढाँचाहरू।'
                    : 'Visual structure, emotional regulation for alexithymia, and Fitzgerald Key AAC color-coding.'}
                </p>
                <ul className="space-y-2 border-t border-[#E8E2D5]/80 dark:border-neutral-800 pt-3 text-xs">
                  <li>
                    <Link href="/guides/visual-structure-and-task-analysis-autism" className="text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#2B5763] dark:hover:text-[#5FA4B8] font-medium flex items-center justify-between">
                      <span className="line-clamp-1">• {language === 'ne' ? 'दृश्यक संरचना तथा कार्य विश्लेषण' : 'Visual Structure & Task Analysis'}</span>
                      <ArrowRight className="h-3 w-3 flex-shrink-0 text-neutral-400" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/interoception-and-alexithymia-autism" className="text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#2B5763] dark:hover:text-[#5FA4B8] font-medium flex items-center justify-between">
                      <span className="line-clamp-1">• {language === 'ne' ? 'इन्टरोसेप्शन तथा एलेक्सीथिमिया' : 'Interoception & Alexithymia'}</span>
                      <ArrowRight className="h-3 w-3 flex-shrink-0 text-neutral-400" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/aac-fitzgerald-key-color-coding" className="text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#2B5763] dark:hover:text-[#5FA4B8] font-medium flex items-center justify-between">
                      <span className="line-clamp-1">• {language === 'ne' ? 'AAC तथा फिट्जेराल्ड की रङ-कोडिङ' : 'AAC & Fitzgerald Key Color-Coding'}</span>
                      <ArrowRight className="h-3 w-3 flex-shrink-0 text-neutral-400" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-[#E8E2D5]/80 dark:border-neutral-800 mt-4">
                <Link href="/guides#cluster-2" className="text-xs font-semibold text-[#2B5763] dark:text-[#5FA4B8] hover:underline flex items-center gap-1">
                  <span>{language === 'ne' ? 'क्लस्टर २ का सबै गाइडहरू' : 'Browse Cluster 2 Hub'}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Cluster 3 Card: Down Syndrome */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-[#FAF7EE]/50 dark:bg-[#182330] p-6 shadow-xs hover:border-[#2B5763] dark:hover:border-[#5FA4B8] transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-rose-800 dark:text-rose-200 bg-rose-100 dark:bg-rose-950/80 px-2.5 py-0.5 rounded-md">
                    {language === 'ne' ? 'क्लस्टर ३: डाउन सिन्ड्रोम' : 'Cluster 3: Down Syndrome'}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                    {language === 'ne' ? '३ प्रकाशित' : '3 Live'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-2 flex items-center gap-2">
                  <HeartHandshake className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                  {language === 'ne' ? 'डाउन सिन्ड्रोम (ट्राइसोमी २१)' : 'Down Syndrome (Trisomy 21)'}
                </h3>
                <p className="text-xs text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mb-4">
                  {language === 'ne'
                    ? 'हाइपोटोनिया, फाइन मोटर थकान, श्रवण मेमोरी कमी, र कुल सञ्चार सहयोगी प्रविधि।'
                    : 'Hypotonia mitigation, visual scaffolding for auditory memory deficits, and total communication speech aids.'}
                </p>
                <ul className="space-y-2 border-t border-[#E8E2D5]/80 dark:border-neutral-800 pt-3 text-xs">
                  <li>
                    <Link href="/guides/assistive-tech-for-down-syndrome" className="text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#2B5763] dark:hover:text-[#5FA4B8] font-medium flex items-center justify-between">
                      <span className="line-clamp-1">• {language === 'ne' ? 'डाउन सिन्ड्रोमका लागि सहायक प्रविधि' : 'Assistive Tech for Down Syndrome'}</span>
                      <ArrowRight className="h-3 w-3 flex-shrink-0 text-neutral-400" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/visual-scaffolding-auditory-memory-down-syndrome" className="text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#2B5763] dark:hover:text-[#5FA4B8] font-medium flex items-center justify-between">
                      <span className="line-clamp-1">• {language === 'ne' ? 'श्रवण मेमोरी कमीका लागि दृश्य मचान' : 'Visual Scaffolding for Auditory Memory'}</span>
                      <ArrowRight className="h-3 w-3 flex-shrink-0 text-neutral-400" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/total-communication-mid-tech-speech-aids" className="text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#2B5763] dark:hover:text-[#5FA4B8] font-medium flex items-center justify-between">
                      <span className="line-clamp-1">• {language === 'ne' ? 'कुल सञ्चार तथा मिड-टेक बोली उपकरण' : 'Total Communication & Mid-Tech Aids'}</span>
                      <ArrowRight className="h-3 w-3 flex-shrink-0 text-neutral-400" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-[#E8E2D5]/80 dark:border-neutral-800 mt-4">
                <Link href="/guides#cluster-3" className="text-xs font-semibold text-[#2B5763] dark:text-[#5FA4B8] hover:underline flex items-center gap-1">
                  <span>{language === 'ne' ? 'क्लस्टर ३ का सबै गाइडहरू' : 'Browse Cluster 3 Hub'}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Cluster 4 Card: Intellectual Disabilities */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-[#FAF7EE]/50 dark:bg-[#182330] p-6 shadow-xs hover:border-[#2B5763] dark:hover:border-[#5FA4B8] transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-200 bg-teal-100 dark:bg-teal-950/80 px-2.5 py-0.5 rounded-md">
                    {language === 'ne' ? 'क्लस्टर ४: बौद्धिक अपाङ्गता (ID)' : 'Cluster 4: Intellectual Disabilities'}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                    {language === 'ne' ? '३ प्रकाशित' : '3 Live'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-2 flex items-center gap-2">
                  <Puzzle className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  {language === 'ne' ? 'बौद्धिक अपाङ्गता तथा अनुकूलित व्यवहार' : 'ID & Adaptive Behavior'}
                </h3>
                <p className="text-xs text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mb-4">
                  {language === 'ne'
                    ? 'संज्ञानात्मक पहुँच, दैनिक जीवन सीप (ADLs), र कंक्रीट गणित तथा साक्षरता उपकरणहरू।'
                    : 'Cognitive accessibility, task sequencing for ADLs, and concrete math & literacy tools.'}
                </p>
                <ul className="space-y-2 border-t border-[#E8E2D5]/80 dark:border-neutral-800 pt-3 text-xs">
                  <li>
                    <Link href="/guides/cognitive-accessibility-digital-flashcards" className="text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#2B5763] dark:hover:text-[#5FA4B8] font-medium flex items-center justify-between">
                      <span className="line-clamp-1">• {language === 'ne' ? 'संज्ञानात्मक पहुँच: डिजिटल फ्ल्यासकार्ड' : 'Cognitive Accessibility Flashcards'}</span>
                      <ArrowRight className="h-3 w-3 flex-shrink-0 text-neutral-400" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/task-analysis-home-executive-dysfunction" className="text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#2B5763] dark:hover:text-[#5FA4B8] font-medium flex items-center justify-between">
                      <span className="line-clamp-1">• {language === 'ne' ? 'दैनिक जीवन सीप (ADLs): कार्य शृङ्खला' : 'Daily Living Skills (ADLs) Sequencing'}</span>
                      <ArrowRight className="h-3 w-3 flex-shrink-0 text-neutral-400" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/functional-academics-special-education" className="text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#2B5763] dark:hover:text-[#5FA4B8] font-medium flex items-center justify-between">
                      <span className="line-clamp-1">• {language === 'ne' ? 'व्यावहारिक शिक्षा: कंक्रीट गणित तथा साक्षरता' : 'Functional Academics: Math & Literacy'}</span>
                      <ArrowRight className="h-3 w-3 flex-shrink-0 text-neutral-400" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-[#E8E2D5]/80 dark:border-neutral-800 mt-4">
                <Link href="/guides#cluster-4" className="text-xs font-semibold text-[#2B5763] dark:text-[#5FA4B8] hover:underline flex items-center gap-1">
                  <span>{language === 'ne' ? 'क्लस्टर ४ का सबै गाइडहरू' : 'Browse Cluster 4 Hub'}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Cluster 5 Card: Cerebral Palsy */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-[#FAF7EE]/50 dark:bg-[#182330] p-6 shadow-xs hover:border-[#2B5763] dark:hover:border-[#5FA4B8] transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-purple-800 dark:text-purple-200 bg-purple-100 dark:bg-purple-950/80 px-2.5 py-0.5 rounded-md">
                    {language === 'ne' ? 'क्लस्टर ५: सेरेब्रल पाल्सी (CP)' : 'Cluster 5: Cerebral Palsy (CP)'}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                    {language === 'ne' ? '३ प्रकाशित' : '3 Live'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-2 flex items-center gap-2">
                  <Activity className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  {language === 'ne' ? 'सेरेब्रल पाल्सी तथा मोटर-बोली संयोजन' : 'Cerebral Palsy & Motor-Speech'}
                </h3>
                <p className="text-xs text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mb-4">
                  {language === 'ne'
                    ? 'स्प्यास्टिसिटी, कम्पन, र बोली अप्राक्सिया भएका सिकारुहरूका लागि वैकल्पिक पहुँच, स्विच स्क्यानिङ, र उच्च-कन्ट्रास्ट इन्टरफेस।'
                    : 'Alternative access, switch scanning, eye-gaze tracking, and large-target interfaces for spasticity and motor-speech barriers.'}
                </p>
                <ul className="space-y-2 border-t border-[#E8E2D5]/80 dark:border-neutral-800 pt-3 text-xs">
                  <li>
                    <Link href="/guides/adaptive-tech-for-cerebral-palsy" className="text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#2B5763] dark:hover:text-[#5FA4B8] font-medium flex items-center justify-between">
                      <span className="line-clamp-1">• {language === 'ne' ? 'सेरेब्रल पाल्सीका लागि अनुकूलित प्रविधि' : 'Adaptive Tech for Cerebral Palsy'}</span>
                      <ArrowRight className="h-3 w-3 flex-shrink-0 text-neutral-400" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/high-contrast-large-target-interfaces" className="text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#2B5763] dark:hover:text-[#5FA4B8] font-medium flex items-center justify-between">
                      <span className="line-clamp-1">• {language === 'ne' ? 'उच्च-कन्ट्रास्ट तथा ठूला-टार्गेट इन्टरफेस' : 'High-Contrast & Large-Target Interfaces'}</span>
                      <ArrowRight className="h-3 w-3 flex-shrink-0 text-neutral-400" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/single-tap-vs-complex-aac-dual-barriers" className="text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#2B5763] dark:hover:text-[#5FA4B8] font-medium flex items-center justify-between">
                      <span className="line-clamp-1">• {language === 'ne' ? 'एकल-स्पर्श क्विक टकर बनाम जटिल AAC' : 'Single-Tap Quick Talkers vs. Complex AAC'}</span>
                      <ArrowRight className="h-3 w-3 flex-shrink-0 text-neutral-400" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-[#E8E2D5]/80 dark:border-neutral-800 mt-4">
                <Link href="/guides#cluster-5" className="text-xs font-semibold text-[#2B5763] dark:text-[#5FA4B8] hover:underline flex items-center gap-1">
                  <span>{language === 'ne' ? 'क्लस्टर ५ का सबै गाइडहरू' : 'Browse Cluster 5 Hub'}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Featured Educational Articles */}
      <section className="py-16 bg-[#FAF7EE]/50 dark:bg-[#151F2A]/50 border-t border-b border-[#E8E2D5] dark:border-[#273748] transition-colors" aria-labelledby="articles-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9E5819] dark:text-[#F6AD55] mb-2">
                <BookOpen className="h-3.5 w-3.5" />
                <span>{t('blogTitle')}</span>
              </div>
              <h2 id="articles-heading" className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0]">
                {language === 'ne' ? 'अनुसन्धान तथा व्यावहारिक सल्लाहहरू' : 'In-Depth Research & Practical Guides'}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#5B6B7C] dark:text-[#94A3B8]">
                {t('blogSubtitle')}
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#2B5763] dark:text-[#5FA4B8] hover:underline"
            >
              <span>{t('allArticles')}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.slice(0, 2).map((article) => {
              const title = language === 'ne' ? article.nepaliTitle : article.title;
              const summary = language === 'ne' ? article.nepaliSummary : article.summary;
              const category = language === 'ne' ? article.nepaliCategory : article.category;
              const readingTime = language === 'ne' ? article.nepaliReadingTime : article.readingTime;

              return (
                <article
                  key={article.slug}
                  className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#2B5763] transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#6B7B8D] dark:text-[#8090A0] mb-3">
                      <span className="rounded-full bg-[#E8EFF1] dark:bg-[#1E3342] px-2.5 py-0.5 font-semibold text-[#2B5763] dark:text-[#5FA4B8]">
                        {category}
                      </span>
                      <span>{readingTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#2B5763] transition-colors mb-3">
                      <Link href={`/blog/${article.slug}`}>
                        {title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed line-clamp-3 mb-4">
                      {summary}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#F0ECE1] dark:border-[#273748] text-xs">
                    <span className="text-[#6B7B8D] dark:text-[#8090A0]">{article.author.name}</span>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="font-semibold text-[#2B5763] dark:text-[#5FA4B8] hover:underline flex items-center gap-1"
                    >
                      <span>{t('readGuide')}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Donation & AdSense Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <DonationCard />
          <AdSenseSlot slotId="home-bottom-rectangle" format="rectangle" />
        </div>
      </section>
    </>
  );
}
