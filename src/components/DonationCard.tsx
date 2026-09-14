'use client';

import React, { useState } from 'react';
import { Heart, Copy, Check, QrCode, ShieldCheck, Smartphone, ExternalLink, Download } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function DonationCard() {
  const { language } = useLanguage();
  const isNepali = language === 'ne';
  const [copied, setCopied] = useState(false);

  const esewaId = '977 9841616976';
  const cleanId = '9841616976';

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(cleanId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="rounded-3xl border border-[#E8E2D5] dark:border-[#273748] bg-[#FAF7EE] dark:bg-[#18222D] p-6 sm:p-10 shadow-sm transition-colors">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#E8E2D5] dark:border-[#273748]">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400">
            <Heart className="h-6 w-6 fill-emerald-600 dark:fill-emerald-400" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0]">
              {isNepali ? 'eSewa मार्फत सहयोग गर्नुहोस्' : 'Support via eSewa (Nepal)'}
            </h3>
            <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8]">
              {isNepali
                ? 'निःशुल्क नेपाली सहयोगी प्रविधि र शैक्षिक मञ्चलाई निरन्तरता दिनुहोस्'
                : 'Direct community support to maintain free assistive technology'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            {isNepali ? 'सक्रिय eSewa खाता' : 'Active eSewa Gateway'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8">
        {/* Left Side: ID & Step-by-Step Info */}
        <div className="md:col-span-7 space-y-6">
          <p className="text-sm text-[#4B5A6B] dark:text-[#CBD5E1] leading-relaxed">
            {isNepali
              ? 'तपाईंको सहयोगले नेपाल तथा विश्वभरिका विशेष आवश्यकता भएका बालबालिका, अभिभावक, र शिक्षकहरूका लागि निःशुल्क सिकाइ सामग्री र सर्भर सञ्चालन निरन्तर राख्न मद्दत पुग्नेछ।'
              : 'Every contribution directly funds edge cloud infrastructure, native Nepali speech audio recordings, and free educational guides for families, educators, and neurodivergent learners.'}
          </p>

          {/* eSewa ID Box */}
          <div className="rounded-2xl border-2 border-emerald-500/40 bg-white dark:bg-[#1D2A37] p-5 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 flex items-center gap-1.5">
                <Smartphone className="h-4 w-4" />
                {isNepali ? 'eSewa आईडी / मोबाइल नम्बर' : 'eSewa ID / Mobile Number'}
              </span>
              <span className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">
                {isNepali ? 'नेपाल' : 'Nepal'}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#FAF7EE] dark:bg-[#151F2A] p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <div className="font-mono text-xl sm:text-2xl font-black text-[#1E293B] dark:text-emerald-400 tracking-wider">
                {esewaId}
              </div>
              <button
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-xs"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>{isNepali ? 'प्रतिलिपि गरियो!' : 'Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>{isNepali ? 'आईडी कपी गर्नुहोस्' : 'Copy ID'}</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
              <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                {isNepali ? 'कैफियत (Remark):' : 'Suggested Remark:'}
              </span>
              <span className="bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded font-mono text-[11px]">
                Tech4Neurodivergent
              </span>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
            <div className="flex items-start gap-2">
              <span className="h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold flex items-center justify-center flex-shrink-0 text-[10px]">
                1
              </span>
              <span>{isNepali ? 'आफ्नो मोबाइलमा eSewa एप खोल्नुहोस्।' : 'Open the eSewa app on your smartphone.'}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold flex items-center justify-center flex-shrink-0 text-[10px]">
                2
              </span>
              <span>{isNepali ? 'दायाँपट्टि रहेको QR कोड स्क्यान गर्नुहोस् वा सिधै आईडी ' + esewaId + ' मा पठाउनुहोस्।' : 'Scan the QR code or make a direct transfer to eSewa ID: ' + esewaId + '.'}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold flex items-center justify-center flex-shrink-0 text-[10px]">
                3
              </span>
              <span>{isNepali ? 'कैफियत (Remark) मा "Tech4Neurodivergent" लेखी पुष्टि गर्नुहोस्।' : 'Add remark "Tech4Neurodivergent" and confirm transfer.'}</span>
            </div>
          </div>
        </div>

        {/* Right Side: eSewa QR Code Card */}
        <div className="md:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-xs rounded-2xl border-2 border-dashed border-emerald-500/50 bg-white dark:bg-[#1D2A37] p-5 text-center shadow-md">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-3">
              <QrCode className="h-4 w-4" />
              <span>{isNepali ? 'eSewa स्क्यान गर्नुहोस्' : 'Scan to Donate'}</span>
            </div>

            {/* QR Image Display */}
            <div className="relative aspect-square w-full rounded-xl bg-white border border-neutral-200 dark:border-neutral-700 flex items-center justify-center overflow-hidden p-3 shadow-inner">
              {/* Direct image rendering with white background to ensure QR scanners read immediately */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/support/esewa_qr.png"
                alt="eSewa QR Code - 9841616976"
                className="w-full h-full object-contain rounded-md"
                loading="eager"
              />
            </div>

            <div className="mt-3 flex items-center justify-center gap-2">
              <a
                href="/images/support/esewa_qr.png"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
              >
                <ExternalLink className="h-3 w-3" />
                <span>{isNepali ? 'पूर्ण आकारमा हेर्नुहोस्' : 'View Full Image'}</span>
              </a>
              <span className="text-neutral-300 dark:text-neutral-600">•</span>
              <a
                href="/images/support/esewa_qr.png"
                download="esewa_qr_tech4neurodivergent.png"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
              >
                <Download className="h-3 w-3" />
                <span>{isNepali ? 'डाउनलोड गर्नुहोस्' : 'Download QR'}</span>
              </a>
            </div>

            <p className="mt-2 text-[11px] text-neutral-500 dark:text-neutral-400">
              {isNepali
                ? 'eSewa एप खोलेर स्क्यान गर्नुहोस्'
                : 'Point any eSewa mobile scanner to contribute'}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Trust Bar */}
      <div className="flex flex-wrap items-center justify-between text-xs text-[#6B7B8D] dark:text-[#94A3B8] border-t border-[#E8E2D5] dark:border-[#273748] pt-4 gap-2">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          {isNepali
            ? '१००% पारदर्शी वित्तीय व्यवस्थापन (खुला शैक्षिक स्रोत अभियान)'
            : '100% transparent stewardship: Funds exclusively support free education tools'}
        </span>
        <span className="font-semibold text-emerald-700 dark:text-emerald-400">
          eSewa ID: {cleanId}
        </span>
      </div>
    </div>
  );
}
