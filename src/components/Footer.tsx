'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Sparkles, Shield, AlertTriangle, BookMarked, Compass } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import AdToggle from '@/components/AdToggle';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const flutterAppUrl = process.env.NEXT_PUBLIC_FLUTTER_APP_URL || 'https://app.tech4neurodivergent.com';
  const { language, t } = useLanguage();
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) return null;

  return (
    <footer className="border-t border-[#E8E2D5] dark:border-[#273748] bg-[#F5F0E6] dark:bg-[#151F2A] text-[#3E4D5E] dark:text-[#94A3B8] mt-16 transition-colors" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2B5763] text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="font-bold text-[#1E293B] dark:text-[#E2E8F0] text-lg">{t('siteTitle')}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#5B6B7C] dark:text-[#94A3B8] leading-relaxed max-w-md">
              {language === 'ne'
                ? 'अटिजम, डाउन सिन्ड्रोम, बौद्धिक अपाङ्गता, तथा सेरेब्रल पाल्सी भएका सिकारुहरूका लागि प्रमाण-आधारित सहायक प्रविधि, संवेग व्यवस्थापन, र सञ्चार सशक्तीकरण प्लेटफर्म।'
                : 'Open-access, evidence-informed assistive technology platform engineered for autistic, Down syndrome, ID, and cerebral palsy learners.'}
            </p>
            <div className="pt-2">
              <Link
                href="/guides"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#2B5763] text-white text-xs font-semibold hover:bg-[#1E3F49] transition-colors shadow-xs"
              >
                <BookMarked className="h-3.5 w-3.5" />
                <span>{language === 'ne' ? '१४ शैक्षिक निर्देशिकाहरू हेर्नुहोस्' : 'Explore All 14 Educational Guides'}</span>
              </Link>
            </div>
          </div>

          {/* 4 Educational Resource Hubs */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E293B] dark:text-[#E2E8F0] mb-3 flex items-center gap-1.5">
              <Compass className="h-3.5 w-3.5 text-primary-600 dark:text-primary-400" />
              <span>{language === 'ne' ? 'ज्ञान केन्द्रहरू' : 'Knowledge Clusters'}</span>
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/guides#cluster-1" className="hover:text-[#2B5763] dark:hover:text-[#5FA4B8] font-semibold block text-primary-700 dark:text-primary-300">
                  {language === 'ne' ? 'क्लस्टर १: आधारभूत ज्ञान' : 'Cluster 1: Foundational'}
                </Link>
              </li>
              <li>
                <Link href="/guides#cluster-2" className="hover:text-[#2B5763] dark:hover:text-[#5FA4B8] font-semibold block text-amber-700 dark:text-amber-300">
                  {language === 'ne' ? 'क्लस्टर २: अटिजम (ASD)' : 'Cluster 2: Autism (ASD)'}
                </Link>
              </li>
              <li>
                <Link href="/guides#cluster-3" className="hover:text-[#2B5763] dark:hover:text-[#5FA4B8] font-semibold block text-amber-700 dark:text-amber-300">
                  {language === 'ne' ? 'क्लस्टर ३: डाउन सिन्ड्रोम' : 'Cluster 3: Down Syndrome'}
                </Link>
              </li>
              <li>
                <Link href="/guides#cluster-4" className="hover:text-[#2B5763] dark:hover:text-[#5FA4B8] font-semibold block text-blue-700 dark:text-blue-300">
                  {language === 'ne' ? 'क्लस्टर ४: बौद्धिक अपाङ्गता (ID)' : 'Cluster 4: Intellectual Disabilities'}
                </Link>
              </li>
              <li>
                <Link href="/guides#cluster-5" className="hover:text-[#2B5763] dark:hover:text-[#5FA4B8] font-semibold block text-purple-700 dark:text-purple-300">
                  {language === 'ne' ? 'क्लस्टर ५: सेरेब्रल पाल्सी (CP)' : 'Cluster 5: Cerebral Palsy (CP)'}
                </Link>
              </li>
              <li className="pt-2 border-t border-[#E8E2D5] dark:border-[#273748]">
                <Link href="/guides" className="text-[#2B5763] dark:text-[#5FA4B8] font-bold hover:underline">
                  {language === 'ne' ? 'पूर्ण गाइड डाइरेक्टरी →' : 'Full Guides Directory →'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Supportive Web-Apps */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E293B] dark:text-[#E2E8F0] mb-3">
              {t('navTools')}
            </h3>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/tools/emotion-regulation" className="hover:text-[#2B5763] dark:hover:text-[#5FA4B8] hover:underline">
                  {language === 'ne' ? 'संवेग व्यवस्थापन (Interoception)' : 'Emotion Regulation'}
                </Link>
              </li>
              <li>
                <Link href="/tools/sentence-builder" className="hover:text-[#2B5763] dark:hover:text-[#5FA4B8] hover:underline">
                  {language === 'ne' ? 'वाक्य बनाउने (Sentence Builder)' : 'Sentence Builder AAC'}
                </Link>
              </li>
              <li>
                <Link href="/tools/talker-aac" className="hover:text-[#2B5763] dark:hover:text-[#5FA4B8] hover:underline">
                  {language === 'ne' ? 'द्रुत टकर (Quick Talker AAC)' : 'Quick Talker AAC'}
                </Link>
              </li>
              <li>
                <Link href="/tools/daily-living" className="hover:text-[#2B5763] dark:hover:text-[#5FA4B8] hover:underline">
                  {language === 'ne' ? 'दैनिक जीवन सीप (Daily Living ADL)' : 'Daily Living Skills ADL'}
                </Link>
              </li>
              <li>
                <Link href="/tools" className="font-semibold text-[#2B5763] dark:text-[#5FA4B8] hover:underline pt-1 inline-block">
                  {t('allModules')} →
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust, Legal & Transparency */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E293B] dark:text-[#E2E8F0] mb-3">
              {language === 'ne' ? 'कानुनी तथा पारदर्शिता' : 'Trust & Policies'}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-[#2B5763] dark:hover:text-[#5FA4B8] hover:underline">
                  {t('navAbout')}
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-[#2B5763] dark:hover:text-[#5FA4B8] hover:underline flex items-center gap-1">
                  <Heart className="h-3 w-3 text-[#9E5819]" />
                  {t('navSupport')}
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#2B5763] dark:hover:text-[#5FA4B8] hover:underline flex items-center gap-1">
                  <Shield className="h-3 w-3 text-[#3D6B56]" />
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-[#2B5763] dark:hover:text-[#5FA4B8] hover:underline flex items-center gap-1">
                  <AlertTriangle className="h-3 w-3 text-[#9E5819]" />
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Educational Disclaimer Banner */}
        <div className="rounded-xl border border-[#E8E2D5] dark:border-[#273748] bg-[#FAF7EE] dark:bg-[#1A2430] p-4 text-xs text-[#5B6B7C] dark:text-[#94A3B8] space-y-1 mb-8">
          <p className="font-semibold text-[#1E293B] dark:text-[#E2E8F0]">
            {t('disclaimerTitle')}:
          </p>
          <p>{t('disclaimerText')}</p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#E8E2D5] dark:border-[#273748] pt-6 text-xs text-[#6B7B8D] dark:text-[#7A8B9C] gap-3">
          <p>© {currentYear} {t('copyright')}</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:underline">{t('privacy')}</Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:underline">{t('terms')}</Link>
            <span>•</span>
            <Link href="/support" className="hover:underline">{t('navSupport')}</Link>
            <span>•</span>
            <AdToggle />
            <span>•</span>
            <a href={flutterAppUrl} target="_blank" rel="noopener noreferrer" className="text-[#2B5763] dark:text-[#5FA4B8] font-semibold hover:underline">
              {language === 'ne' ? 'वेब एप पोर्टल ↗' : 'Web App Portal ↗'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
