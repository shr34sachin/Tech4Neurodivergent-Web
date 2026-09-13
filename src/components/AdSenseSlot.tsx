'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useAds } from '@/context/AdContext';

interface AdSenseSlotProps {
  slotId?: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'fluid';
  className?: string;
}

export default function AdSenseSlot({
  slotId = '0000000000',
  format = 'horizontal',
  className = '',
}: AdSenseSlotProps) {
  const { showAds } = useAds();
  const { t } = useLanguage();

  // If ads are toggled off, remove completely from view (render null)
  if (!showAds) {
    return null;
  }

  const isProduction =
    process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  return (
    <aside
      aria-label="Sponsorship & Advertising"
      className={`my-8 rounded-xl border border-[#E8E2D5] dark:border-[#273748] bg-[#FAF7EE] dark:bg-[#18222D] p-4 text-center transition-colors ${className}`}
    >
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E8E2D5] dark:border-[#273748] text-xs font-medium text-[#6B7B8D] dark:text-[#94A3B8]">
        <span className="uppercase tracking-wider">{t('advertisement')}</span>
        <span className="text-[11px] text-[#8C9AA8] dark:text-[#64748B]">{t('safeAdPlacement')}</span>
      </div>

      {isProduction ? (
        <div className="overflow-hidden min-h-[90px] flex items-center justify-center">
          <ins
            className="adsbygoogle block w-full"
            style={{ display: 'block' }}
            data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
            data-ad-slot={slotId}
            data-ad-format={format}
            data-full-width-responsive="true"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-6 px-4 rounded-lg bg-[#FDFBF7] dark:bg-[#141C24] border border-dashed border-[#DCD5C5] dark:border-[#2C3E50] text-[#546477] dark:text-[#94A3B8]">
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded bg-[#E8EFF1] dark:bg-[#1D2B37] text-[#2B5763] dark:text-[#80C0D0] mb-1">
            <span>Google AdSense</span>
            <span className="font-mono">#{slotId}</span>
          </div>
          <p className="text-xs text-[#6B7B8D] dark:text-[#7A8B9C] max-w-md mt-1">
            Low-stimulation, sensory-safe ad placement reserved for educational and assistive technology sponsors.
          </p>
        </div>
      )}
    </aside>
  );
}
