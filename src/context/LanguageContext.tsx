'use client';

import React, { createContext, useContext, useSyncExternalStore } from 'react';
import { translations, TranslationKey } from '@/data/translations';

export type Language = 'en' | 'ne';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: TranslationKey) => key,
});

function subscribeLang(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('language_change', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('language_change', callback);
  };
}

function getLangSnapshot(): Language {
  if (typeof window === 'undefined') return 'en';
  const saved = localStorage.getItem('site_language');
  return saved === 'ne' ? 'ne' : 'en';
}

function getLangServerSnapshot(): Language {
  return 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribeLang, getLangSnapshot, getLangServerSnapshot);

  const setLanguage = (lang: Language) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('site_language', lang);
      document.documentElement.lang = lang;
      window.dispatchEvent(new Event('language_change'));
    }
  };

  const t = (key: TranslationKey): string => {
    const dict = translations[language];
    return dict[key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
