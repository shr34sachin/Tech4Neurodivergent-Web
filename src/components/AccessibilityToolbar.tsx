'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Accessibility,
  X,
  Type,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  RotateCcw,
  Check,
} from 'lucide-react';
import { useAccessibility, FontSize } from '@/context/AccessibilityContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

export default function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const {
    fontSize,
    setFontSize,
    dyslexicFont,
    setDyslexicFont,
    highContrast,
    setHighContrast,
    reducedMotion,
    setReducedMotion,
    readingGuide,
    toggleReadingGuide,
    resetAccessibility,
    isSpeaking,
    speakText,
    stopSpeaking,
  } = useAccessibility();

  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleToggleTts = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else {
      speakText(undefined, language);
    }
  };

  return (
    <>
      {/* Trigger Button in Header Bar */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg border border-[#DCD5C5] dark:border-[#2C3E50] bg-[#FAF7EE] dark:bg-[#17222E] p-2 text-[#2B5763] dark:text-[#80C0D0] hover:bg-[#F0ECE1] dark:hover:bg-[#1E2B38] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2B5763] relative"
        aria-label={t('a11yTitle')}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <Accessibility className="h-4 w-4" aria-hidden="true" />
        {(dyslexicFont || highContrast || reducedMotion || fontSize !== 'normal' || readingGuide) && (
          <span
            className="absolute -top-1 -right-1 flex h-2.5 w-2.5 rounded-full bg-[#3D6B56] ring-2 ring-white dark:ring-[#111821]"
            aria-hidden="true"
          />
        )}
      </button>

      {/* Accessible Modal / Flyout Dialog */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="a11y-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150"
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-lg rounded-2xl border border-[#DCD5C5] dark:border-[#2C3E50] bg-[#FDFBF7] dark:bg-[#151F2A] p-6 shadow-2xl text-[#1E293B] dark:text-[#E2E8F0] max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E2D5] dark:border-[#273748]">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2B5763] text-white">
                  <Accessibility className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 id="a11y-modal-title" className="text-base sm:text-lg font-bold">
                    {t('a11yTitle')}
                  </h2>
                  <p className="text-xs text-[#5B6B7C] dark:text-[#94A3B8]">
                    {t('a11yDesc')}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-[#5B6B7C] dark:text-[#94A3B8] hover:bg-[#F0ECE1] dark:hover:bg-[#1E2B38] transition-colors focus:outline-none"
                aria-label="Close accessibility options"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Controls List */}
            <div className="space-y-5 py-4">
              {/* 1. Text Size Scaling */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5B6B7C] dark:text-[#94A3B8] mb-2 flex items-center gap-1.5">
                  <Type className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{t('textSize')}</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['normal', 'large', 'xlarge'] as FontSize[]).map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setFontSize(size)}
                      className={`flex items-center justify-center gap-1.5 rounded-xl border py-2 px-3 text-xs font-semibold transition-all ${
                        fontSize === size
                          ? 'border-[#2B5763] bg-[#2B5763] text-white shadow-xs'
                          : 'border-[#DCD5C5] dark:border-[#2C3E50] bg-white dark:bg-[#1A2532] text-[#1E293B] dark:text-[#E2E8F0] hover:bg-[#F5F0E6] dark:hover:bg-[#202E3D]'
                      }`}
                      aria-pressed={fontSize === size}
                    >
                      {fontSize === size && <Check className="h-3.5 w-3.5" />}
                      <span>
                        {size === 'normal'
                          ? t('normalText')
                          : size === 'large'
                          ? t('largeText')
                          : t('xlargeText')}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Dyslexia-Friendly Font */}
              <div className="flex items-center justify-between p-3 rounded-xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#1A2532]">
                <div className="pr-4">
                  <span className="font-bold text-sm block">{t('dyslexiaFont')}</span>
                  <span className="text-xs text-[#5B6B7C] dark:text-[#94A3B8]">
                    {t('dyslexiaFontDesc')}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setDyslexicFont(!dyslexicFont)}
                  role="switch"
                  aria-checked={dyslexicFont}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    dyslexicFont ? 'bg-[#2B5763]' : 'bg-[#DCD5C5] dark:bg-[#3E4F63]'
                  }`}
                  aria-label={t('dyslexiaFont')}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                      dyslexicFont ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* 3. High Contrast Mode */}
              <div className="flex items-center justify-between p-3 rounded-xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#1A2532]">
                <div className="pr-4">
                  <span className="font-bold text-sm block">{t('highContrast')}</span>
                  <span className="text-xs text-[#5B6B7C] dark:text-[#94A3B8]">
                    {t('highContrastDesc')}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setHighContrast(!highContrast)}
                  role="switch"
                  aria-checked={highContrast}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    highContrast ? 'bg-[#2B5763]' : 'bg-[#DCD5C5] dark:bg-[#3E4F63]'
                  }`}
                  aria-label={t('highContrast')}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                      highContrast ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* 4. Reduced Motion / Sensory Calm */}
              <div className="flex items-center justify-between p-3 rounded-xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#1A2532]">
                <div className="pr-4">
                  <span className="font-bold text-sm block">{t('reducedMotion')}</span>
                  <span className="text-xs text-[#5B6B7C] dark:text-[#94A3B8]">
                    {t('reducedMotionDesc')}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setReducedMotion(!reducedMotion)}
                  role="switch"
                  aria-checked={reducedMotion}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    reducedMotion ? 'bg-[#2B5763]' : 'bg-[#DCD5C5] dark:bg-[#3E4F63]'
                  }`}
                  aria-label={t('reducedMotion')}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                      reducedMotion ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* 5. Reading Ruler (Focus Guide) */}
              <div className="flex items-center justify-between p-3 rounded-xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#1A2532]">
                <div className="pr-4">
                  <span className="font-bold text-sm block">{t('readingGuide')}</span>
                  <span className="text-xs text-[#5B6B7C] dark:text-[#94A3B8]">
                    {t('readingGuideDesc')}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={toggleReadingGuide}
                  role="switch"
                  aria-checked={readingGuide}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    readingGuide ? 'bg-[#2B5763]' : 'bg-[#DCD5C5] dark:bg-[#3E4F63]'
                  }`}
                  aria-label={t('readingGuide')}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                      readingGuide ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* 6. Text-to-Speech (Audio Read Aloud) */}
              <div className="flex items-center justify-between p-3 rounded-xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#1A2532]">
                <div className="pr-4">
                  <span className="font-bold text-sm flex items-center gap-1.5">
                    {isSpeaking ? (
                      <VolumeX className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                    ) : (
                      <Volume2 className="h-4 w-4 text-[#2B5763] dark:text-[#80C0D0]" />
                    )}
                    <span>{isSpeaking ? t('stopSpeech') : t('textToSpeech')}</span>
                  </span>
                  <span className="text-xs text-[#5B6B7C] dark:text-[#94A3B8]">
                    {language === 'ne'
                      ? 'पृष्ठको मुख्य सामग्री वाचन गरी सुन्नुहोस्'
                      : 'Listen to the page content read aloud'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleToggleTts}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    isSpeaking
                      ? 'bg-rose-600 text-white hover:bg-rose-700'
                      : 'bg-[#2B5763] text-white hover:bg-[#1E3F49]'
                  }`}
                >
                  {isSpeaking ? t('stopSpeech') : t('textToSpeech')}
                </button>
              </div>

              {/* 7. Quick Theme & Language Links */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {/* Theme Selector */}
                <div className="p-3 rounded-xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#1A2532]">
                  <span className="text-xs font-bold text-[#5B6B7C] dark:text-[#94A3B8] block mb-1.5">
                    {t('themeToggle')}
                  </span>
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="flex items-center gap-2 w-full justify-center rounded-lg border border-[#DCD5C5] dark:border-[#2C3E50] p-1.5 text-xs font-semibold hover:bg-[#FAF7EE] dark:hover:bg-[#202E3D]"
                  >
                    {theme === 'dark' ? (
                      <>
                        <Sun className="h-3.5 w-3.5 text-[#E2B350]" />
                        <span>{t('themeLight')}</span>
                      </>
                    ) : (
                      <>
                        <Moon className="h-3.5 w-3.5 text-[#5B6B7C]" />
                        <span>{t('themeDark')}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Language Selector */}
                <div className="p-3 rounded-xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#1A2532]">
                  <span className="text-xs font-bold text-[#5B6B7C] dark:text-[#94A3B8] block mb-1.5">
                    {t('language')}
                  </span>
                  <div className="flex rounded-lg border border-[#DCD5C5] dark:border-[#2C3E50] p-0.5">
                    <button
                      type="button"
                      onClick={() => setLanguage('en')}
                      className={`flex-1 rounded py-1 text-center text-xs font-semibold ${
                        language === 'en'
                          ? 'bg-[#2B5763] text-white'
                          : 'text-[#5B6B7C] dark:text-[#94A3B8]'
                      }`}
                    >
                      EN
                    </button>
                    <button
                      type="button"
                      onClick={() => setLanguage('ne')}
                      className={`flex-1 rounded py-1 text-center text-xs font-semibold ${
                        language === 'ne'
                          ? 'bg-[#2B5763] text-white'
                          : 'text-[#5B6B7C] dark:text-[#94A3B8]'
                      }`}
                    >
                      नेपाली
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer / Reset Action */}
            <div className="flex items-center justify-between pt-4 border-t border-[#E8E2D5] dark:border-[#273748]">
              <button
                type="button"
                onClick={resetAccessibility}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#5B6B7C] dark:text-[#94A3B8] hover:text-[#1E293B] dark:hover:text-white transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>{t('resetA11y')}</span>
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-xl bg-[#2B5763] px-4 py-2 text-xs font-semibold text-white hover:bg-[#1E3F49] transition-colors"
              >
                {language === 'ne' ? 'सम्पन्न' : 'Done'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
