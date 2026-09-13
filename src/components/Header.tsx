'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Sparkles,
  Sun,
  Moon,
  ExternalLink,
  ChevronDown,
  BookMarked,
  Wrench,
  BookOpen,
  Info,
  HeartHandshake
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const flutterAppUrl = process.env.NEXT_PUBLIC_FLUTTER_APP_URL || 'https://app.tech4neurodivergent.com';

  const navLinks = [
    { href: '/guides', labelKey: 'navGuides' as const, icon: BookMarked },
    { href: '/tools', labelKey: 'navTools' as const, icon: Wrench },
    { href: '/blog', labelKey: 'navBlog' as const, icon: BookOpen },
    { href: '/about', labelKey: 'navAbout' as const, icon: Info },
    { href: '/support', labelKey: 'navSupport' as const, icon: HeartHandshake },
  ];

  return (
    <>
      {/* Top Clinical & Accessibility Notification Bar */}
      <aside aria-label="Accessibility and Scope Notice" className="bg-[#1E3F49] dark:bg-[#0E1E24] px-4 py-1.5 text-center text-xs text-[#E0EDF0] border-b border-[#2B5763] dark:border-[#1A3740]">
        <div className="mx-auto max-w-7xl flex items-center justify-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-[#52B788] animate-pulse" aria-hidden="true" />
          <span>
            {language === 'ne'
              ? '१००% खुला स्रोत, निःशुल्क, र प्रमाण-आधारित सहायक प्रविधि सिकाइ केन्द्र'
              : '100% Free, Open-Source & Evidence-Informed Special Education Platform'}
          </span>
        </div>
      </aside>

      {/* Main Global Header */}
      <header className="sticky top-0 z-40 border-b border-[#E8E2D5] dark:border-[#273748] bg-[#FDFBF7]/90 dark:bg-[#111821]/90 backdrop-blur-md transition-colors">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Brand Identity / Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[#2B5763] rounded-lg p-1"
            aria-label="Tech4Neurodivergent Home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#0284C7] via-[#10B981] to-[#6366F1] text-white shadow-xs">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-black tracking-tight text-[#1E293B] dark:text-[#E2E8F0]">
                Tech<span className="text-[#2B5763] dark:text-[#80C0D0]">4</span>Neurodivergent
              </span>
              <span className="hidden sm:block text-[10px] font-semibold text-[#5B6B7C] dark:text-[#94A3B8] tracking-widest uppercase">
                {language === 'ne' ? 'सहयोगी प्रविधि र सिकाइ' : 'Assistive Tech & Learning'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
              const Icon = link.icon;

              if (link.href === '/guides') {
                return (
                  <div key={link.href} className="relative group">
                    <Link
                      href="/guides"
                      className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-[#E8EFF1] text-[#1E3F49] dark:bg-[#1A313B] dark:text-[#80C0D0] font-semibold'
                          : 'text-[#3E4D5E] dark:text-[#CBD5E1] hover:bg-[#F5F0E6] dark:hover:bg-[#1A2530] hover:text-[#1E293B] dark:hover:text-white'
                      }`}
                    >
                      <Icon className="h-4 w-4 text-[#5B6B7C] dark:text-[#8090A0]" aria-hidden="true" />
                      <span>{t(link.labelKey)}</span>
                      <span className="hidden lg:inline-block px-1.5 py-0.2 rounded text-[10px] font-bold bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300">
                        15
                      </span>
                      <ChevronDown className="h-3 w-3 text-neutral-400 group-hover:rotate-180 transition-transform" />
                    </Link>

                    {/* Desktop Hover Mega Dropdown */}
                    <div className="absolute top-full -left-40 lg:-left-56 pt-2 w-[760px] hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#182330] p-5 shadow-2xl">
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-100 dark:border-neutral-800 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                          <span>{language === 'ne' ? 'निर्देशिका तथा सिकाइ केन्द्र' : 'Educational Guides & Learning Hubs'}</span>
                          <Link href="/guides" className="text-primary-600 dark:text-primary-400 hover:underline normal-case font-semibold">
                            {language === 'ne' ? 'सबै १५ निर्देशिकाहरू हेर्नुहोस् →' : 'Explore All 15 Guides Hub →'}
                          </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                          {/* Topic 1: Understanding Neurodiversity */}
                          <div className="space-y-1.5 p-2.5 rounded-xl bg-neutral-50/60 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-700/40">
                            <div className="text-xs font-extrabold uppercase tracking-wide text-primary-700 dark:text-primary-300">
                              {language === 'ne' ? '१. न्यूरोडाइभर्सिटी बुझ्दै' : 'Understanding Neurodiversity'}
                            </div>
                            <Link
                              href="/guides/what-does-neurodivergent-mean"
                              className="block p-1.5 rounded-lg bg-white dark:bg-[#1E2B38] border border-primary-200/80 dark:border-primary-800/80 hover:border-primary-500 transition-colors shadow-2xs"
                            >
                              <div className="text-xs font-bold text-neutral-900 dark:text-white flex items-center gap-1">
                                <span className="text-[10px] bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 px-1 rounded">Main</span>
                                <span className="line-clamp-1">{language === 'ne' ? 'न्युरोडाइभर्जेन्टको अर्थ के हो?' : 'What Is Neurodivergent?'}</span>
                              </div>
                            </Link>
                            <div className="space-y-1 pt-1 text-[11px] text-neutral-600 dark:text-neutral-400 pl-1">
                              <Link href="/guides/assistive-technology-in-special-education" className="block hover:text-primary-600 dark:hover:text-primary-400 line-clamp-1">
                                • {language === 'ne' ? 'विशेष शिक्षामा सहायक प्रविधि' : 'AT in Special Education'}
                              </Link>
                              <Link href="/guides/low-tech-vs-high-tech-assistive-technology" className="block hover:text-primary-600 dark:hover:text-primary-400 line-clamp-1">
                                • {language === 'ne' ? 'लो-टेक बनाम हाई-टेक प्रविधि' : 'Low vs. High Tech Spectrum'}
                              </Link>
                            </div>
                          </div>

                          {/* Topic 2: Autism Spectrum Support */}
                          <div className="space-y-1.5 p-2.5 rounded-xl bg-neutral-50/60 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-700/40">
                            <div className="text-xs font-extrabold uppercase tracking-wide text-amber-700 dark:text-amber-400">
                              {language === 'ne' ? '२. अटिजम र संवेगात्मक नियमन' : 'Autism & Regulation'}
                            </div>
                            <Link
                              href="/guides/visual-structure-and-task-analysis-autism"
                              className="block p-1.5 rounded-lg bg-white dark:bg-[#1E2B38] border border-amber-200/80 dark:border-amber-800/80 hover:border-amber-500 transition-colors shadow-2xs"
                            >
                              <div className="text-xs font-bold text-neutral-900 dark:text-white flex items-center gap-1">
                                <span className="text-[10px] bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-1 rounded">Main</span>
                                <span className="line-clamp-1">{language === 'ne' ? 'दृश्य संरचना र कार्य विश्लेषण' : 'Visual Structure & Task Analysis'}</span>
                              </div>
                            </Link>
                            <div className="space-y-1 pt-1 text-[11px] text-neutral-600 dark:text-neutral-400 pl-1">
                              <Link href="/guides/interoception-and-alexithymia-autism" className="block hover:text-primary-600 dark:hover:text-primary-400 line-clamp-1">
                                • {language === 'ne' ? 'इन्टरोसेप्शन र एलेक्सीथिमिया' : 'Interoception & Alexithymia'}
                              </Link>
                              <Link href="/guides/aac-fitzgerald-key-color-coding" className="block hover:text-primary-600 dark:hover:text-primary-400 line-clamp-1">
                                • {language === 'ne' ? 'AAC र फिट्जेराल्ड की' : 'Fitzgerald Key Color-Coding'}
                              </Link>
                            </div>
                          </div>

                          {/* Topic 3: Down Syndrome & Speech */}
                          <div className="space-y-1.5 p-2.5 rounded-xl bg-neutral-50/60 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-700/40">
                            <div className="text-xs font-extrabold uppercase tracking-wide text-rose-700 dark:text-rose-400">
                              {language === 'ne' ? '३. डाउन सिन्ड्रोम र बोली' : 'Down Syndrome & Speech'}
                            </div>
                            <Link
                              href="/guides/assistive-tech-for-down-syndrome"
                              className="block p-1.5 rounded-lg bg-white dark:bg-[#1E2B38] border border-rose-200/80 dark:border-rose-800/80 hover:border-rose-500 transition-colors shadow-2xs"
                            >
                              <div className="text-xs font-bold text-neutral-900 dark:text-white flex items-center gap-1">
                                <span className="text-[10px] bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 px-1 rounded">Main</span>
                                <span className="line-clamp-1">{language === 'ne' ? 'डाउन सिन्ड्रोममा सहायक प्रविधि' : 'Down Syndrome Assistive Tech'}</span>
                              </div>
                            </Link>
                            <div className="space-y-1 pt-1 text-[11px] text-neutral-600 dark:text-neutral-400 pl-1">
                              <Link href="/guides/visual-scaffolding-auditory-memory-down-syndrome" className="block hover:text-primary-600 dark:hover:text-primary-400 line-clamp-1">
                                • {language === 'ne' ? 'श्रवण स्मरणका लागि दृश्य मचान' : 'Auditory Memory Visual Scaffolding'}
                              </Link>
                              <Link href="/guides/total-communication-mid-tech-speech-aids" className="block hover:text-primary-600 dark:hover:text-primary-400 line-clamp-1">
                                • {language === 'ne' ? 'कुल सञ्चार र मिड-टेक बोली उपकरण' : 'Total Communication Speech Aids'}
                              </Link>
                            </div>
                          </div>

                          {/* Topic 4: Intellectual Disabilities & ADLs */}
                          <div className="space-y-1.5 p-2.5 rounded-xl bg-neutral-50/60 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-700/40">
                            <div className="text-xs font-extrabold uppercase tracking-wide text-teal-700 dark:text-teal-400">
                              {language === 'ne' ? '४. बौद्धिक अपाङ्गता र ADLs' : 'ID & Adaptive Living'}
                            </div>
                            <Link
                              href="/guides/cognitive-accessibility-digital-flashcards"
                              className="block p-1.5 rounded-lg bg-white dark:bg-[#1E2B38] border border-teal-200/80 dark:border-teal-800/80 hover:border-teal-500 transition-colors shadow-2xs"
                            >
                              <div className="text-xs font-bold text-neutral-900 dark:text-white flex items-center gap-1">
                                <span className="text-[10px] bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 px-1 rounded">Main</span>
                                <span className="line-clamp-1">{language === 'ne' ? 'संज्ञानात्मक पहुँच: फ्ल्यासकार्ड' : 'Multi-Sensory Flashcards'}</span>
                              </div>
                            </Link>
                            <div className="space-y-1 pt-1 text-[11px] text-neutral-600 dark:text-neutral-400 pl-1">
                              <Link href="/blog/task-analysis-home-executive-dysfunction" className="block hover:text-primary-600 dark:hover:text-primary-400 line-clamp-1">
                                • {language === 'ne' ? 'दैनिक जीवन सीप (ADLs) शृङ्खला' : 'Task Sequencing for ADLs'}
                              </Link>
                              <Link href="/guides/functional-academics-special-education" className="block hover:text-primary-600 dark:hover:text-primary-400 line-clamp-1">
                                • {language === 'ne' ? 'व्यावहारिक शिक्षा: गणित र साक्षरता' : 'Functional Academics'}
                              </Link>
                            </div>
                          </div>

                          {/* Topic 5: Cerebral Palsy & Motor Access */}
                          <div className="space-y-1.5 p-2.5 rounded-xl bg-neutral-50/60 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-700/40 md:col-span-2 lg:col-span-1">
                            <div className="text-xs font-extrabold uppercase tracking-wide text-purple-700 dark:text-purple-400">
                              {language === 'ne' ? '५. सेरेब्रल पाल्सी र मोटर पहुँच' : 'Cerebral Palsy & Motor Access'}
                            </div>
                            <Link
                              href="/guides/adaptive-tech-for-cerebral-palsy"
                              className="block p-1.5 rounded-lg bg-white dark:bg-[#1E2B38] border border-purple-200/80 dark:border-purple-800/80 hover:border-purple-500 transition-colors shadow-2xs"
                            >
                              <div className="text-xs font-bold text-neutral-900 dark:text-white flex items-center gap-1">
                                <span className="text-[10px] bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 px-1 rounded">Main</span>
                                <span className="line-clamp-1">{language === 'ne' ? 'सेरेब्रल पाल्सी अनुकूलित प्रविधि' : 'Adaptive Tech for CP & Apraxia'}</span>
                              </div>
                            </Link>
                            <div className="space-y-1 pt-1 text-[11px] text-neutral-600 dark:text-neutral-400 pl-1">
                              <Link href="/guides/high-contrast-large-target-interfaces" className="block hover:text-primary-600 dark:hover:text-primary-400 line-clamp-1">
                                • {language === 'ne' ? 'उच्च-कन्ट्रास्ट तथा ठूला इन्टरफेस' : 'High-Contrast & Large Targets'}
                              </Link>
                              <Link href="/guides/single-tap-vs-complex-aac-dual-barriers" className="block hover:text-primary-600 dark:hover:text-primary-400 line-clamp-1">
                                • {language === 'ne' ? 'एकल-स्पर्श बनाम जटिल AAC' : 'Single-Tap vs. Complex AAC'}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#E8EFF1] text-[#1E3F49] dark:bg-[#1A313B] dark:text-[#80C0D0] font-semibold'
                      : 'text-[#3E4D5E] dark:text-[#CBD5E1] hover:bg-[#F5F0E6] dark:hover:bg-[#1A2530] hover:text-[#1E293B] dark:hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4 text-[#5B6B7C] dark:text-[#8090A0]" aria-hidden="true" />
                  <span>{t(link.labelKey)}</span>
                </Link>
              );
            })}

            {/* Language Selector Switcher */}
            <div className="ml-2 flex items-center rounded-lg border border-[#DCD5C5] dark:border-[#2C3E50] bg-[#FAF7EE] dark:bg-[#17222E] p-0.5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`rounded-md px-2.5 py-1.5 transition-colors ${
                  language === 'en'
                    ? 'bg-[#2B5763] text-white shadow-xs'
                    : 'text-[#5B6B7C] dark:text-[#94A3B8] hover:text-[#1E293B] dark:hover:text-white'
                }`}
                aria-label="Switch to English"
                aria-pressed={language === 'en'}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ne')}
                className={`rounded-md px-2.5 py-1.5 transition-colors ${
                  language === 'ne'
                    ? 'bg-[#2B5763] text-white shadow-xs'
                    : 'text-[#5B6B7C] dark:text-[#94A3B8] hover:text-[#1E293B] dark:hover:text-white'
                }`}
                aria-label="Switch to Nepali"
                aria-pressed={language === 'ne'}
              >
                नेपाली
              </button>
            </div>

            {/* Sensory Theme Toggle (Dark / Light) */}
            <button
              type="button"
              onClick={toggleTheme}
              className="ml-1 rounded-lg border border-[#DCD5C5] dark:border-[#2C3E50] bg-[#FAF7EE] dark:bg-[#17222E] p-2 text-[#3E4D5E] dark:text-[#CBD5E1] hover:bg-[#F0ECE1] dark:hover:bg-[#1E2B38] transition-colors focus:outline-none"
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Sensory Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-[#E2B350]" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4 text-[#5B6B7C]" aria-hidden="true" />
              )}
            </button>

            {/* Launch Flutter App Quick Action */}
            <a
              href={flutterAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1.5 rounded-lg bg-[#2B5763] px-3.5 py-2 text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#1E3F49] active:scale-95"
              aria-label={t('launchApp')}
            >
              <span>{t('launchApp')}</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </nav>

          {/* Mobile Action Controls */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Language Toggle */}
            <div className="flex items-center rounded-lg border border-[#DCD5C5] dark:border-[#2C3E50] bg-[#FAF7EE] dark:bg-[#17222E] p-0.5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`rounded px-2 py-1 text-[11px] ${
                  language === 'en' ? 'bg-[#2B5763] text-white' : 'text-[#5B6B7C] dark:text-[#94A3B8]'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ne')}
                className={`rounded px-2 py-1 text-[11px] ${
                  language === 'ne' ? 'bg-[#2B5763] text-white' : 'text-[#5B6B7C] dark:text-[#94A3B8]'
                }`}
              >
                नेपाली
              </button>
            </div>

            {/* Mobile Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-lg border border-[#DCD5C5] dark:border-[#2C3E50] p-1.5 text-[#3E4D5E] dark:text-[#CBD5E1]"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4 text-[#E2B350]" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-[#3E4D5E] dark:text-[#CBD5E1] hover:bg-[#F5F0E6] dark:hover:bg-[#1E2B38] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E8E2D5] dark:border-[#273748] bg-[#FDFBF7] dark:bg-[#111821] px-4 py-4 space-y-2 max-h-[85vh] overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
              const Icon = link.icon;

              if (link.href === '/guides') {
                return (
                  <div key={link.href} className="space-y-2 border-y border-neutral-200 dark:border-neutral-800 py-2 my-1">
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between rounded-lg px-3 py-2 text-base font-medium ${
                        isActive
                          ? 'bg-[#E8EFF1] text-[#1E3F49] dark:bg-[#1A313B] dark:text-[#80C0D0]'
                          : 'text-[#3E4D5E] dark:text-[#CBD5E1] hover:bg-[#F5F0E6] dark:hover:bg-[#1E2B38]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-[#5B6B7C] dark:text-[#8090A0]" />
                        <span>{t(link.labelKey)}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300">
                        15 Guides
                      </span>
                    </Link>

                    {/* Topic Categories with Main Guide & Follow-ups */}
                    <div className="pl-3 pr-1 space-y-2.5 text-xs">
                      {/* 1. Understanding Neurodiversity */}
                      <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50">
                        <div className="font-extrabold text-primary-700 dark:text-primary-300 mb-1">
                          {language === 'ne' ? '१. न्यूरोडाइभर्सिटी बुझ्दै' : '1. Understanding Neurodiversity'}
                        </div>
                        <Link
                          href="/guides/what-does-neurodivergent-mean"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block font-bold text-neutral-900 dark:text-white py-0.5 hover:underline text-xs"
                        >
                          ★ {language === 'ne' ? 'न्युरोडाइभर्जेन्टको अर्थ के हो? (मुख्य)' : 'What Is Neurodivergent? (Main)'}
                        </Link>
                        <div className="pl-3 space-y-1 text-neutral-600 dark:text-neutral-400 mt-1">
                          <Link href="/guides/assistive-technology-in-special-education" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary-600">
                            • {language === 'ne' ? 'विशेष शिक्षामा सहायक प्रविधि' : 'AT in Special Education'}
                          </Link>
                          <Link href="/guides/low-tech-vs-high-tech-assistive-technology" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary-600">
                            • {language === 'ne' ? 'लो-टेक बनाम हाई-टेक प्रविधि' : 'Low vs. High Tech Spectrum'}
                          </Link>
                        </div>
                      </div>

                      {/* 2. Autism & Regulation */}
                      <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50">
                        <div className="font-extrabold text-amber-700 dark:text-amber-400 mb-1">
                          {language === 'ne' ? '२. अटिजम र संवेगात्मक नियमन' : '2. Autism & Regulation'}
                        </div>
                        <Link
                          href="/guides/visual-structure-and-task-analysis-autism"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block font-bold text-neutral-900 dark:text-white py-0.5 hover:underline text-xs"
                        >
                          ★ {language === 'ne' ? 'दृश्य संरचना र कार्य विश्लेषण (मुख्य)' : 'Visual Structure & Task Analysis (Main)'}
                        </Link>
                        <div className="pl-3 space-y-1 text-neutral-600 dark:text-neutral-400 mt-1">
                          <Link href="/guides/interoception-and-alexithymia-autism" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary-600">
                            • {language === 'ne' ? 'इन्टरोसेप्शन र एलेक्सीथिमिया' : 'Interoception & Alexithymia'}
                          </Link>
                          <Link href="/guides/aac-fitzgerald-key-color-coding" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary-600">
                            • {language === 'ne' ? 'AAC र फिट्जेराल्ड की' : 'Fitzgerald Key Color-Coding'}
                          </Link>
                        </div>
                      </div>

                      {/* 3. Down Syndrome & Speech */}
                      <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50">
                        <div className="font-extrabold text-rose-700 dark:text-rose-400 mb-1">
                          {language === 'ne' ? '३. डाउन सिन्ड्रोम र बोली' : '3. Down Syndrome & Speech'}
                        </div>
                        <Link
                          href="/guides/assistive-tech-for-down-syndrome"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block font-bold text-neutral-900 dark:text-white py-0.5 hover:underline text-xs"
                        >
                          ★ {language === 'ne' ? 'डाउन सिन्ड्रोममा सहायक प्रविधि (मुख्य)' : 'Assistive Tech for Down Syndrome (Main)'}
                        </Link>
                        <div className="pl-3 space-y-1 text-neutral-600 dark:text-neutral-400 mt-1">
                          <Link href="/guides/visual-scaffolding-auditory-memory-down-syndrome" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary-600">
                            • {language === 'ne' ? 'श्रवण स्मरण दृश्य मचान' : 'Auditory Memory Visual Scaffolding'}
                          </Link>
                          <Link href="/guides/total-communication-mid-tech-speech-aids" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary-600">
                            • {language === 'ne' ? 'कुल सञ्चार बोली उपकरण' : 'Total Communication Speech Aids'}
                          </Link>
                        </div>
                      </div>

                      {/* 4. ID & ADLs */}
                      <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50">
                        <div className="font-extrabold text-teal-700 dark:text-teal-400 mb-1">
                          {language === 'ne' ? '४. बौद्धिक अपाङ्गता र ADLs' : '4. ID & Adaptive Living'}
                        </div>
                        <Link
                          href="/guides/cognitive-accessibility-digital-flashcards"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block font-bold text-neutral-900 dark:text-white py-0.5 hover:underline text-xs"
                        >
                          ★ {language === 'ne' ? 'संज्ञानात्मक पहुँच: फ्ल्यासकार्ड (मुख्य)' : 'Multi-Sensory Flashcards (Main)'}
                        </Link>
                        <div className="pl-3 space-y-1 text-neutral-600 dark:text-neutral-400 mt-1">
                          <Link href="/blog/task-analysis-home-executive-dysfunction" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary-600">
                            • {language === 'ne' ? 'दैनिक जीवन सीप (ADLs)' : 'Task Sequencing for ADLs'}
                          </Link>
                          <Link href="/guides/functional-academics-special-education" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary-600">
                            • {language === 'ne' ? 'व्यावहारिक शिक्षा: गणित' : 'Functional Academics'}
                          </Link>
                        </div>
                      </div>

                      {/* 5. Cerebral Palsy & Motor Access */}
                      <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50">
                        <div className="font-extrabold text-purple-700 dark:text-purple-400 mb-1">
                          {language === 'ne' ? '५. सेरेब्रल पाल्सी र मोटर पहुँच' : '5. Cerebral Palsy & Motor Access'}
                        </div>
                        <Link
                          href="/guides/adaptive-tech-for-cerebral-palsy"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block font-bold text-neutral-900 dark:text-white py-0.5 hover:underline text-xs"
                        >
                          ★ {language === 'ne' ? 'अनुकूलित प्रविधि (मुख्य)' : 'Adaptive Tech for CP & Apraxia (Main)'}
                        </Link>
                        <div className="pl-3 space-y-1 text-neutral-600 dark:text-neutral-400 mt-1">
                          <Link href="/guides/high-contrast-large-target-interfaces" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary-600">
                            • {language === 'ne' ? 'उच्च-कन्ट्रास्ट इन्टरफेस' : 'High-Contrast Interfaces'}
                          </Link>
                          <Link href="/guides/single-tap-vs-complex-aac-dual-barriers" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary-600">
                            • {language === 'ne' ? 'एकल-स्पर्श बनाम जटिल AAC' : 'Single-Tap vs. Complex AAC'}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium ${
                    isActive
                      ? 'bg-[#E8EFF1] text-[#1E3F49] dark:bg-[#1A313B] dark:text-[#80C0D0]'
                      : 'text-[#3E4D5E] dark:text-[#CBD5E1] hover:bg-[#F5F0E6] dark:hover:bg-[#1E2B38]'
                  }`}
                >
                  <Icon className="h-5 w-5 text-[#5B6B7C] dark:text-[#8090A0]" />
                  <span>{t(link.labelKey)}</span>
                </Link>
              );
            })}

            <div className="pt-2 border-t border-[#E8E2D5] dark:border-[#273748]">
              <a
                href={flutterAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#2B5763] px-4 py-2.5 text-sm font-semibold text-white shadow-xs w-full"
              >
                <span>{t('launchApp')}</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
