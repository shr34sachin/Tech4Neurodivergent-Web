'use client';

import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { AdProvider } from '@/context/AdContext';

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AdProvider>
          {children}
        </AdProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
