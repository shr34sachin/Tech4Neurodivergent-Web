'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { translations, TranslationKey } from '@/data/translations';

export type Language = 'en' | 'ne';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key: TranslationKey) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  // Initial client hydration: detect saved language
  useEffect(() => {
    try {
      const saved = localStorage.getItem('site_language') as Language | null;
      if (saved === 'ne' || saved === 'en') {
        setLanguageState(saved);
        if (typeof document !== 'undefined') {
          document.documentElement.lang = saved;
        }
      }
    } catch {
      // Fallback in case of restricted localStorage
    }

    // Cross-tab synchronization
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'site_language' && (e.newValue === 'ne' || e.newValue === 'en')) {
        setLanguageState(e.newValue);
        if (typeof document !== 'undefined') {
          document.documentElement.lang = e.newValue;
        }
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
    try {
      localStorage.setItem('site_language', lang);
      window.dispatchEvent(new Event('language_change'));
    } catch {
      // Ignore localStorage write error
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const next: Language = prev === 'en' ? 'ne' : 'en';
      if (typeof document !== 'undefined') {
        document.documentElement.lang = next;
      }
      try {
        localStorage.setItem('site_language', next);
        window.dispatchEvent(new Event('language_change'));
      } catch {
        // Ignore localStorage write error
      }
      return next;
    });
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      const dict = translations[language];
      if (dict && dict[key]) return dict[key];
      return translations.en[key] || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
