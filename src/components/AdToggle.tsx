'use client';

import React from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useAds } from '@/context/AdContext';
import { useLanguage } from '@/context/LanguageContext';

interface AdToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function AdToggle({ className = '', showLabel = true }: AdToggleProps) {
  const { showAds, toggleAds } = useAds();
  const { language } = useLanguage();
  const isNepali = language === 'ne';

  return (
    <button
      type="button"
      onClick={toggleAds}
      aria-pressed={showAds}
      aria-label={
        showAds
          ? isNepali
            ? 'विज्ञापन लुकाउनुहोस्'
            : 'Hide Advertisements'
          : isNepali
            ? 'विज्ञापन देखाउनुहोस्'
            : 'Show Advertisements'
      }
      title={
        showAds
          ? isNepali
            ? 'विज्ञापन प्रदर्शन बन्द गर्नुहोस्'
            : 'Turn off ad banners'
          : isNepali
            ? 'विज्ञापन प्रदर्शन खोल्नुहोस्'
            : 'Turn on ad banners'
      }
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium transition-all duration-200 cursor-pointer border ${
        showAds
          ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 border-amber-300 dark:border-amber-800 hover:bg-amber-200 dark:hover:bg-amber-900'
          : 'bg-[#EAE5D9] dark:bg-[#1E2B38] text-[#5B6B7C] dark:text-[#94A3B8] border-[#DCD5C5] dark:border-[#2C3E50] hover:text-[#1E293B] dark:hover:text-[#E2E8F0]'
      } ${className}`}
    >
      {showAds ? (
        <>
          <Eye className="h-3 w-3 text-amber-700 dark:text-amber-400 shrink-0" />
          {showLabel && (
            <span>{isNepali ? 'विज्ञापन: खुला' : 'Ads: Visible'}</span>
          )}
        </>
      ) : (
        <>
          <EyeOff className="h-3 w-3 text-[#718096] dark:text-[#94A3B8] shrink-0" />
          {showLabel && (
            <span>{isNepali ? 'विज्ञापन: बन्द' : 'Ads: Off'}</span>
          )}
        </>
      )}
    </button>
  );
}
