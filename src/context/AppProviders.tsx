'use client';

import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { AccessibilityProvider } from '@/context/AccessibilityContext';
import { AdProvider } from '@/context/AdContext';
import ReadingRuler from '@/components/ReadingRuler';

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AccessibilityProvider>
          <AdProvider>
            <ReadingRuler />
            {children}
          </AdProvider>
        </AccessibilityProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
