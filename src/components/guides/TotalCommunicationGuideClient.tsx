'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Clock,
  Users,
  ChevronDown,
  Layers,
  Sparkles,
  ArrowRight,
  Brain,
  Sliders,
  Volume2,
  Hand,
  FileCheck2,
  Activity,
  HeartHandshake,
  HelpCircle,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function TotalCommunicationGuideClient() {
  const { language } = useLanguage();
  const isNepali = language === 'ne';
  interface SoundboardBtn {
    id: string;
    label: string;
    phrase: string;
    symbol: string;
    sign: string;
    color: string;
  }
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Interactive Mid-Tech Soundboard State
  const [activeMessage, setActiveMessage] = useState<SoundboardBtn | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const soundboardButtons = [
    {
      id: 'help',
      label: isNepali ? 'मद्दत' : 'Help',
      phrase: isNepali ? 'मलाई मद्दत गर्नुहोस्' : 'I need help please',
      symbol: '🆘',
      sign: isNepali
        ? 'दायाँ हातको मुठ्ठी बनाएर बायाँ हत्केलामाथि राखी थोरै माथि उठाउनुहोस्।'
        : 'Closed fist with thumb up placed on flat non-dominant palm, lift slightly together.',
      color: 'border-rose-400 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-100',
    },
    {
      id: 'more',
      label: isNepali ? 'थप' : 'More',
      phrase: isNepali ? 'मलाई अझै चाहिन्छ' : 'More please',
      symbol: '➕',
      sign: isNepali
        ? 'दुबै हातका औंलाहरू एकत्रित गरी एकअर्कामा छुवाउनुहोस्।'
        : 'Bring fingertips and thumb of both hands together, tapping fingertips together repeatedly.',
      color: 'border-amber-400 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-100',
    },
    {
      id: 'stop',
      label: isNepali ? 'रोक्नुहोस्' : 'Stop',
      phrase: isNepali ? 'रोक्नुहोस्, सकियो' : 'Stop, all finished',
      symbol: '🛑',
      sign: isNepali
        ? 'खुला बायाँ हत्केलामाथि दायाँ हातको किनाराले काट्ने इशारा गर्नुहोस्।'
        : 'Open non-dominant palm flat, strike edge of dominant open hand down across palm.',
      color: 'border-red-400 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-100',
    },
    {
      id: 'bathroom',
      label: isNepali ? 'शौचालय' : 'Bathroom',
      phrase: isNepali ? 'म शौचालय जान चाहन्छु' : 'I need to use the bathroom',
      symbol: '🚻',
      sign: isNepali
        ? 'T-आकारको हात बनाएर दायाँ-बायाँ हल्लाउनुहोस्।'
        : 'Form letter "T" handshape (thumb between index and middle fingers) and gently shake side to side.',
      color: 'border-sky-400 bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-100',
    },
    {
      id: 'break',
      label: isNepali ? 'विश्राम' : 'Break',
      phrase: isNepali ? 'मलाई विश्राम चाहिन्छ' : 'I need a break please',
      symbol: '⏸️',
      sign: isNepali
        ? 'दुबै हातलाई छाती अगाडि राखेर अलग पार्नुहोस्।'
        : 'Open hands facing chest with fingers touching, pull hands apart outwards.',
      color: 'border-purple-400 bg-purple-50 dark:bg-purple-950/40 text-purple-900 dark:text-purple-100',
    },
    {
      id: 'my-turn',
      label: isNepali ? 'मेरो पालो' : 'My Turn',
      phrase: isNepali ? 'अब मेरो पालो हो' : 'It is my turn now',
      symbol: '🙋',
      sign: isNepali
        ? 'बुढी औंलाले आफ्नै छातीतर्फ संकेत गर्नुहोस्।'
        : 'Form letter "L" handshape and rotate thumb toward your chest.',
      color: 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const playButtonMessage = (btn: SoundboardBtn) => {
    setActiveMessage(btn);
    setIsSpeaking(true);

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(btn.phrase);
      utterance.rate = 0.95;
      utterance.onend = () => {
        setIsSpeaking(false);
      };
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => {
        setIsSpeaking(false);
      }, 1500);
    }
  };

  const breadcrumbs = [
    { label: isNepali ? 'गृहपृष्ठ' : 'Home', href: '/' },
    { label: isNepali ? 'निर्देशिकाहरू' : 'Guides', href: '/guides' },
    {
      label: isNepali
        ? 'कुल सञ्चार तथा मिड-टेक बोली उपकरण'
        : 'Total Communication & Mid-Tech Speech Aids',
      href: '/guides/total-communication-mid-tech-speech-aids',
    },
  ];

  const content = {
    badge: isNepali ? 'कुल सञ्चार र मध्यम-प्रविधि AAC' : 'Total Communication & Mid-Tech AAC',
    readingTime: isNepali ? '८ मिनेट पढाइ' : '8 min read',
    audience: isNepali ? 'विशेष शिक्षक, SLP, OT, परिवार' : 'SLPs, SPED Teachers, OTs, Families',
    h1Title: isNepali
      ? 'कुल सञ्चार तथा मिड-टेक बोली सहायकहरू: डाउन सिन्ड्रोममा ग्रहणशील र अभिव्यक्ति खाडल पुर्ने'
      : 'Total Communication & Mid-Tech Speech Aids: Bridging Receptive and Expressive Gaps in Down Syndrome',
    featuredTitle: isNepali ? 'कार्यकारी सारांश र मूल परिभाषा' : 'Executive Summary & Core Definition',
    featuredSnippet: isNepali
      ? 'कुल सञ्चार (Total Communication) एक प्रमाण-आधारित शैक्षिक दर्शन हो जसले सिकारुको अभिव्यक्ति र ग्रहणशील भाषा विकासलाई अधिकतम बनाउन बोलिएका शब्द, सांकेतिक भाषा (जस्तै मकाटन वा ASL), शारीरिक इशारा, दृश्य प्रतीक, र आवाज निकाल्ने यन्त्रहरू सबैलाई मान्यता दिन्छ। केवल बोलीमा मात्र जोड दिनुको सट्टा, यसले हरेक सञ्चार प्रयासलाई प्रमाणीकरण गर्दछ। जब यसलाई मिड-टेक बोली उपकरण (GoTalk, QuickTalker, BIGmack जस्ता स्थिर बटन भएका ब्याट्री-सञ्चालित यन्त्र) सँग जोडिन्छ, यसले डाउन सिन्ड्रोम (Trisomy 21) मा देखिने गम्भीर ग्रहणशील-अभिव्यक्ति भाषा खाडललाई सफलतापूर्वक पुर्दछ।'
      : 'Total Communication is an evidence-based clinical philosophy that embraces all forms of communication—including spoken words, sign language (e.g., Makaton, ASL), gestures, body language, visual symbols, and speech-generating devices—to maximize a learner’s expressive and receptive language development. Rather than enforcing a speech-only approach, Total Communication validates every communicative attempt. When paired with mid-tech speech aids (dedicated, battery-operated voice-output devices with static button arrays), it establishes an accessible bridge across the pronounced receptive-expressive language gap typical in Down syndrome.',
  };

  return (
    <div className="min-h-screen bg-[#FAF7EE] dark:bg-[#111821] text-[#1E293B] dark:text-[#E2E8F0] transition-colors duration-300">
      <div className="border-b border-[#E8E2D5] dark:border-[#273748] bg-white/70 dark:bg-[#151F2A]/70 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-semibold">
          <span className="inline-flex items-center gap-1 bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-200 px-3 py-1 rounded-full border border-rose-200 dark:border-rose-900/50">
            <HeartHandshake className="w-3.5 h-3.5" />
            {content.badge}
          </span>
          <span className="inline-flex items-center gap-1 text-[#4B5A6B] dark:text-[#94A3B8]">
            <Clock className="w-3.5 h-3.5" />
            {content.readingTime}
          </span>
          <span className="inline-flex items-center gap-1 text-[#4B5A6B] dark:text-[#94A3B8]">
            <Users className="w-3.5 h-3.5" />
            {content.audience}
          </span>
          <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            {isNepali ? 'प्रमाण-आधारित स्रोत' : 'Evidence-Informed'}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1E293B] dark:text-[#F1F5F9] mb-6 leading-tight">
          {content.h1Title}
        </h1>

        <div className="rounded-2xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/50 dark:bg-rose-950/20 p-6 sm:p-8 mb-10 shadow-xs">
          <h2 className="text-lg sm:text-xl font-bold text-rose-900 dark:text-rose-200 mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            {content.featuredTitle}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#334155] dark:text-[#CBD5E1]">
            {content.featuredSnippet}
          </p>
        </div>

        {/* ASCII Ecosystem Diagram */}
        <div className="mb-12 rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-neutral-900 text-neutral-100 p-5 sm:p-6 overflow-x-auto shadow-md">
          <p className="text-xs uppercase tracking-widest text-neutral-400 font-mono mb-2">
            {isNepali ? 'शैक्षिक मोडेल: कुल सञ्चार इकोसिस्टम' : 'Educational Model: The Total Communication Ecosystem'}
          </p>
          <pre className="text-xs sm:text-sm font-mono leading-relaxed text-amber-400">
{`┌─────────────────────────────────────────────────────────────────────────┐
│                   THE TOTAL COMMUNICATION ECOSYSTEM                     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   [ Manual Signs & Gestures ] ◄───┐       ┌───► [ Spoken Words ]        │
│                                   │       │                             │
│                                   ▼       ▼                             │
│                      ┌─────────────────────────┐                        │
│                      │    TOTAL COMMUNICATION  │                        │
│                      │   FUNCTIONAL EXPRESSION │                        │
│                      └─────────────────────────┘                        │
│                                   ▲       ▲                             │
│                                   │       │                             │
│   [ Static Mid-Tech Speech Aids] ─┘       └───► [ Visual Symbol Systems]│
│   (GoTalk, QuickTalker, BIGmack)                (PECS, Core Word Boards)│
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘`}
          </pre>
        </div>

        {/* INTERACTIVE SIMULATOR: Mid-Tech Static Soundboard */}
        <div className="mb-14 rounded-2xl border-2 border-rose-300 dark:border-rose-800 bg-white dark:bg-[#182330] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E8E2D5] dark:border-[#273748]">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-950/80 px-2.5 py-0.5 rounded-md mb-1">
                <Sliders className="w-3.5 h-3.5" />
                {isNepali ? 'अन्तरक्रियात्मक मिड-टेक सिमुलेटर' : 'Interactive Mid-Tech Communicator'}
              </span>
              <h3 className="text-xl font-bold text-[#1E293B] dark:text-[#E2E8F0]">
                {isNepali
                  ? 'स्थिर ग्रिड मिड-टेक साउन्डबोर्ड र कुल सञ्चार प्रदर्शन'
                  : 'Static Mid-Tech Soundboard with Multi-Modal Sign Scaffolding'}
              </h3>
            </div>
            <span className="text-xs font-semibold text-rose-600 dark:text-rose-400 flex items-center gap-1">
              <Volume2 className="h-4 w-4" />
              {isNepali ? 'आवाज र संकेत सुन्न बटन थिच्नुहोस्' : 'Tap buttons for voice & sign modeling'}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] mb-6 leading-relaxed">
            {isNepali
              ? 'तलको ६-बटन स्थिर ग्रिड मिड-टेक यन्त्र (जस्तै GoTalk वा QuickTalker) को अनुकरण हो। कुनै पनि बटन थिच्दा तत्काल डिजिटलाइज्ड आवाज बज्छ र कुल सञ्चारको रूपमा सम्बन्धित सांकेतिक इशारा प्रदर्शित हुन्छ।'
              : 'This 6-button static grid emulates mid-tech dedicated speech aids (e.g., GoTalk or QuickTalker). Tapping any button triggers synthesized speech output and displays the corresponding manual sign for Total Communication modeling.'}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 mb-6">
            {soundboardButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => playButtonMessage(btn)}
                className={'p-5 rounded-2xl border-2 text-center transition-all flex flex-col items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 shadow-xs ' + btn.color + (
                  activeMessage && activeMessage.id === btn.id
                    ? ' ring-4 ring-rose-400 dark:ring-rose-600'
                    : ''
                )}
              >
                <span className="text-3xl sm:text-4xl">{btn.symbol}</span>
                <span className="text-sm sm:text-base font-extrabold tracking-wide">{btn.label}</span>
                <span className="text-[10px] opacity-75 font-medium flex items-center gap-1">
                  <Volume2 className="h-3 w-3" />
                  {btn.phrase}
                </span>
              </button>
            ))}
          </div>

          {/* Active Total Communication Inspector */}
          {activeMessage ? (
            <div className="rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/50 dark:bg-rose-950/30 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
                  <Hand className="h-4 w-4" />
                  {isNepali ? 'कुल सञ्चार मल्टि-मोडल मोडेलिङ' : 'Total Communication Multi-Modal Modeling'}
                </span>
                {isSpeaking && (
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 animate-pulse">
                    <Volume2 className="h-4 w-4" />
                    {isNepali ? 'आवाज बजिरहेको छ...' : 'Speaking phrase...'}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-white dark:bg-[#182330] border border-[#E8E2D5] dark:border-[#273748]">
                  <span className="text-[10px] font-bold uppercase text-neutral-400">{isNepali ? 'बोलिएको शब्द' : 'Spoken Target'}</span>
                  <p className="font-bold text-neutral-800 dark:text-neutral-100 text-sm mt-0.5">&quot;{activeMessage.phrase}&quot;</p>
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-[#182330] border border-[#E8E2D5] dark:border-[#273748]">
                  <span className="text-[10px] font-bold uppercase text-neutral-400">{isNepali ? 'दृश्य प्रतीक' : 'Visual Symbol'}</span>
                  <p className="font-bold text-neutral-800 dark:text-neutral-100 text-sm mt-0.5">{activeMessage.symbol} {activeMessage.label}</p>
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-[#182330] border border-[#E8E2D5] dark:border-[#273748]">
                  <span className="text-[10px] font-bold uppercase text-neutral-400">{isNepali ? 'सांकेतिक इशारा (Manual Sign)' : 'Manual Sign (Makaton / ASL)'}</span>
                  <p className="text-neutral-700 dark:text-neutral-300 text-xs mt-0.5 leading-snug">{activeMessage.sign}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-xl border border-dashed border-neutral-300 dark:border-neutral-700 text-center text-xs text-neutral-500">
              {isNepali
                ? 'साउन्डबोर्डका बटनहरू थिचेर आवाज, प्रतीक र सांकेतिक इशारा सँगै अभ्यास गर्नुहोस्।'
                : 'Tap any soundboard button above to view simultaneous voice, visual, and manual sign modeling.'}
            </div>
          )}
        </div>

        {/* Section: Theoretical & Neurodevelopmental Foundation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6 text-rose-600 dark:text-rose-400" />
            {isNepali
              ? 'सैद्धान्तिक तथा न्युरोडेभलपमेन्टल आधार'
              : 'Theoretical & Neurodevelopmental Foundation'}
          </h2>

          <div className="rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-900 text-neutral-100 p-4 sm:p-5 mb-6 overflow-x-auto">
            <pre className="text-xs sm:text-sm font-mono text-emerald-400 leading-relaxed">
{`┌─────────────────────────────────────────────────────────────────────────┐
│                 THE RECEPTIVE-EXPRESSIVE GAP MECHANISM                  │
├─────────────────────────────────────────────────────────────────────────┤
│  Receptive Comprehension (Temporal Lobe / Auditory Cortex):            │
│  Learner understands: "Time to pack backpack and line up for the bus."  │
│                                                                         │
│  Expressive Motor Bottleneck (Motor Strip / Oral Musculature):          │
│  ├── Lingual & Labial Hypotonia: Reduced muscle strength/precision      │
│  ├── Midface Hypoplasia: Smaller oral cavity relative to tongue size    │
│  └── Speech Motor Apraxia: Brain struggles to sequence articulation     │
│                                                                         │
│  Resulting Output: Unintelligible syllable or silence ──► Frustration   │
│  Intervention: Mid-Tech Voice Output provides immediate speech model    │
└─────────────────────────────────────────────────────────────────────────┘`}
            </pre>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330]">
              <h3 className="font-bold text-sm sm:text-base text-[#1E293B] dark:text-[#E2E8F0] mb-2">
                {isNepali ? 'मुखको मोटर डिस्प्र्याक्सिया र हाइपोटोनिया' : 'Oral-Motor Dyspraxia & Muscular Hypotonia'}
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed">
                {isNepali
                  ? 'डाउन सिन्ड्रोममा जिब्रो, ओठ, र तालुको मांसपेशी कमजोर हुन्छ। यसका साथै मिडफेस हाइपोप्लासियाले मुखको ठाउँ सानो बनाउँछ, जसले गर्दा बुझिने बोली निकाल्न उच्च शारीरिक प्रयास चाहिन्छ।'
                  : 'Low muscle tone directly impacts lingual and labial coordination. Midface hypoplasia constrains the oral cavity, creating neuromuscular friction that impairs verbal speech output despite high comprehension.'}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330]">
              <h3 className="font-bold text-sm sm:text-base text-[#1E293B] dark:text-[#E2E8F0] mb-2">
                {isNepali ? 'श्रवण कार्यस्मरण र ध्वन्यात्मक सीमा' : 'Auditory Working Memory & Phonological Limits'}
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed">
                {isNepali
                  ? 'बोलिएका शब्दहरू क्षणभरमै हराउँछन्, जबकि भौतिक बटन र दृश्य प्रतीकहरू वातावरणमा स्थायी रहन्छन्, जसले स्मरण शक्तिलाई बाह्य मचान दिन्छ।'
                  : 'Spoken language vanishes rapidly. Tactile mid-tech buttons and persistent visual icons compensate for phonological loop bottlenecks by externalizing vocabulary.'}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330]">
              <h3 className="font-bold text-sm sm:text-base text-[#1E293B] dark:text-[#E2E8F0] mb-2">
                {isNepali ? 'कार्यकारी कार्यप्रणाली र थालनी अवरोध' : 'Executive Dysfunction & Multi-Step Initiation'}
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed">
                {isNepali
                  ? 'वाक्य बनाउन, शब्द छनोट गर्न, र बोली मांसपेशी चलाउन एकैपटक धेरै भार पर्दछ। स्थिर मिड-टेक ग्रिडले सोझै बटन थिच्ने शारीरिक बानी बसालेर यो भार हटाउँछ।'
                  : 'Simultaneously formulating syntax and organizing motor speech overwhelms executive processing. Static mid-tech boards eliminate branching menus, establishing direct motor automaticity.'}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330]">
              <h3 className="font-bold text-sm sm:text-base text-[#1E293B] dark:text-[#E2E8F0] mb-2">
                {isNepali ? 'मुखभित्रको इन्टरोसेप्शन कमी' : 'Interoception & Oral Cavity Proprioception'}
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed">
                {isNepali
                  ? 'मुखभित्र स्पर्श र प्रोप्रियोसेप्टिभ फिडब्याक कम हुँदा सिकारुहरूलाई आफ्नै बोली गल्ती सच्याउन गाह्रो हुन्छ। मिड-टेक यन्त्रको आवाजले तत्काल श्रवण फिडब्याक दिन्छ।'
                  : 'Reduced tactile feedback inside the mouth makes articulation self-correction difficult. Mid-tech voice output provides immediate acoustic feedback that reinforces correct language production.'}
              </p>
            </div>
          </div>
        </section>

        {/* Section: Assistive Technology Tier Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-4 flex items-center gap-2">
            <Layers className="w-6 h-6 text-rose-600 dark:text-rose-400" />
            {isNepali ? 'सहायक प्रविधि तुलना: मिड-टेक किन महत्त्वपूर्ण छ?' : 'Assistive Technology Comparison: The Mid-Tech Niche'}
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330]">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#FAF7EE] dark:bg-[#151F2A] border-b border-[#E8E2D5] dark:border-[#273748] text-[#1E293B] dark:text-[#E2E8F0]">
                <tr>
                  <th className="p-3.5 font-bold">{isNepali ? 'विशेषता / मापदण्ड' : 'Feature / Metric'}</th>
                  <th className="p-3.5 font-bold">{isNepali ? 'लो-टेक प्रणाली' : 'Low-Tech Systems'}</th>
                  <th className="p-3.5 font-bold text-rose-700 dark:text-rose-300">{isNepali ? 'मिड-टेक बोली उपकरण' : 'Mid-Tech Speech Aids'}</th>
                  <th className="p-3.5 font-bold">{isNepali ? 'हाई-टेक डाइनामिक AAC' : 'High-Tech Dynamic AAC'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E2D5] dark:divide-[#273748]">
                <tr>
                  <td className="p-3.5 font-bold">{isNepali ? 'प्रतिनिधि उपकरणहरू' : 'Representative Devices'}</td>
                  <td className="p-3.5">Laminated core boards, PECS books, topic cue wallets</td>
                  <td className="p-3.5 font-semibold text-rose-700 dark:text-rose-300">GoTalk (4+, 9+, 20+), QuickTalker, BIGmack, Step-by-Step</td>
                  <td className="p-3.5">iPad with TouchChat/Proloquo2Go, Tobii Dynavox</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold">{isNepali ? 'संवेदी प्रोफाइल' : 'Sensory Profile'}</td>
                  <td className="p-3.5">Zero-stimulus; tactile/visual only</td>
                  <td className="p-3.5 font-semibold text-rose-700 dark:text-rose-300">Low-stimulus special education tech; digitized voice</td>
                  <td className="p-3.5">Dynamic screen backlighting; risk of sensory overstimulation</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold">{isNepali ? 'मोटर मागहरू' : 'Motor Demands'}</td>
                  <td className="p-3.5">Manual pointing or physical exchange</td>
                  <td className="p-3.5 font-semibold text-rose-700 dark:text-rose-300">Direct physical button press with tactile feedback</td>
                  <td className="p-3.5">Capacitive light touch, switch scanning, or eye-gaze tracking</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold">{isNepali ? 'संज्ञानात्मक भार' : 'Cognitive Load'}</td>
                  <td className="p-3.5">Concrete; static symbol locations</td>
                  <td className="p-3.5 font-semibold text-rose-700 dark:text-rose-300">Static grids; predictable motor memory; zero sub-menus</td>
                  <td className="p-3.5">Branching folder hierarchies; high working memory load</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold">{isNepali ? 'स्थायित्व र सेटअप' : 'Durability & Setup'}</td>
                  <td className="p-3.5">Highly durable; zero charging needed</td>
                  <td className="p-3.5 font-semibold text-rose-700 dark:text-rose-300">Drop-resistant; long battery life; instant-on</td>
                  <td className="p-3.5">Fragile glass; battery dependent; app updates</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section: Cross-Condition Practical Adaptations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-4 flex items-center gap-2">
            <Activity className="w-6 h-6 text-rose-600 dark:text-rose-400" />
            {isNepali ? 'अवस्था-विशिष्ट व्यावहारिक अनुकूलनहरू' : 'Condition-Specific Practical Adaptations'}
          </h2>

          <div className="space-y-6">
            <div className="rounded-xl border border-rose-200 dark:border-rose-900/40 bg-rose-50/30 dark:bg-rose-950/10 p-5 sm:p-6">
              <h3 className="text-lg font-bold text-rose-900 dark:text-rose-200 mb-2">
                {isNepali ? 'डाउन सिन्ड्रोम र बौद्धिक अपाङ्गता (ID)' : 'Down Syndrome & Intellectual Disabilities (ID)'}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#334155] dark:text-[#CBD5E1] list-disc pl-5">
                <li>
                  <strong>{isNepali ? 'स्थिर बहु-सन्देश ग्रिडहरू:' : 'Static Multi-Message Mid-Tech Grids:'}</strong>{' '}
                  {isNepali
                    ? 'GoTalk वा QuickTalker जस्ता यन्त्रमा मुख्य शब्दहरू ("Help", "More", "Stop", "Bathroom") निश्चित स्थानमा राख्नुहोस्, जसले गर्दा हातको मांसपेशी स्मृति (Motor Memory) बन्दछ।'
                    : 'Deploy static devices like GoTalk 9+ so core buttons remain in fixed spatial coordinates, building motor automaticity.'}
                </li>
                <li>
                  <strong>{isNepali ? 'दैनिक ADL कार्य विश्लेषण अडियो फिडब्याक:' : 'Task Analysis Audio Feedback:'}</strong>{' '}
                  {isNepali
                    ? 'हात धुने वा खाना खाने ठाउँमा सिंगल-बटन उपकरण राख्नुहोस्। थिच्दा तत्काल मौखिक निर्देशन बज्छ जसले प्रक्रियात्मक स्मृतिलाई बलियो बनाउँछ।'
                    : 'Embed mid-tech communicators into task analysis ADL routines, giving the learner on-demand auditory guidance during self-care.'}
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-amber-200 dark:border-amber-900/40 bg-amber-50/30 dark:bg-amber-950/10 p-5 sm:p-6">
              <h3 className="text-lg font-bold text-amber-900 dark:text-amber-200 mb-2">
                {isNepali ? 'अटिजम स्पेक्ट्रम डिसअर्डर (ASD)' : 'Autism Spectrum Disorder (ASD)'}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#334155] dark:text-[#CBD5E1] list-disc pl-5">
                <li>
                  <strong>{isNepali ? 'कम-उत्तेजना गैर-ब्याकलिट उपकरणहरू:' : 'Low-Stimulus Non-Backlit Interfaces:'}</strong>{' '}
                  {isNepali
                    ? 'स्क्रिनको चम्किलो प्रकाश र एनिमेसन बिनाको मिड-टेक यन्त्रले सेन्सरिक ओभरलोड र स्क्रिनमा अत्यधिक एकोहोरिने बानी रोक्छ।'
                    : 'Use non-backlit mid-tech speech aids to eliminate screen glare and visual animation loops that trigger sensory overload.'}
                </li>
                <li>
                  <strong>{isNepali ? 'स्थिर बोर्डमा सहयोगी भाषा उत्तेजना:' : 'Aided Language Stimulation:'}</strong>{' '}
                  {isNepali
                    ? 'वयस्कहरूले बोल्दा यन्त्रको बटन पनि थिचेर देखाउने, जसले यन्त्रलाई जाँच गर्ने साधन नभई सञ्चारको माध्यम बनाउँछ।'
                    : 'Model communication by pressing static buttons while speaking, showing that the device is a functional communication tool.'}
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-purple-200 dark:border-purple-900/40 bg-purple-50/30 dark:bg-purple-950/10 p-5 sm:p-6">
              <h3 className="text-lg font-bold text-purple-900 dark:text-purple-200 mb-2">
                {isNepali ? 'सेरेब्रल पाल्सी (CP)' : 'Cerebral Palsy (CP)'}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#334155] dark:text-[#CBD5E1] list-disc pl-5">
                <li>
                  <strong>{isNepali ? 'उच्च-कन्ट्रास्ट भिजुअल रनवे ट्र्याक:' : 'High-Contrast Visual Runway Tracks:'}</strong>{' '}
                  {isNepali
                    ? 'अकुलर-मोटर अप्राक्सिया भएका सिकारुहरूका लागि सेरेब्रल पाल्सी सञ्चार बोर्डमा चम्किला गाइड ट्र्याकहरू प्रयोग गर्नुहोस्।'
                    : 'Integrate luminous runway tracks on cerebral palsy communication boards to guide gaze from rest position to target keys.'}
                </li>
                <li>
                  <strong>{isNepali ? 'भौतिक एक्रिलिक किगार्ड:' : 'Physical Acrylic Keyguards:'}</strong>{' '}
                  {isNepali
                    ? 'मिड-टेक यन्त्रमा बाक्लो किगार्ड जोड्नुहोस् जसले गर्दा स्प्यास्टिसिटी भएका हातहरूले गलत बटन नथिची विश्राम लिन सकुन्।'
                    : 'Mount thick acrylic keyguards over mid-tech devices so learners with spasticity can rest hands without accidental activations.'}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Implementation Framework */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-4 flex items-center gap-2">
            <FileCheck2 className="w-6 h-6 text-rose-600 dark:text-rose-400" />
            {isNepali ? '६-चरणीय कार्यान्वयन मार्गदर्शिका' : 'Home & Classroom 6-Step Implementation Framework'}
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-[#334155] dark:text-[#CBD5E1]">
            {[
              {
                num: '1',
                title: isNepali ? 'प्राथमिक कार्यात्मक सञ्चार लक्ष्यहरू' : 'Identify Priority Functional Communication Targets',
                desc: isNepali
                  ? 'वातावरणमा तत्काल नियन्त्रण दिन ४-८ वटा उच्च-आवृत्तिका मुख्य सन्देशहरू ("Help", "No/Stop", "More", "Bathroom") चयन गर्नुहोस्।'
                  : 'Select 4–8 high-frequency core words ("Help," "No/Stop," "More," "Go," "Want that") rather than filling devices with static nouns.',
              },
              {
                num: '2',
                title: isNepali ? 'एर्गोनोमिक स्थिति र यन्त्र माउन्टिङ' : 'Establish Ergonomic Positioning & Device Mounting',
                desc: isNepali
                  ? 'विद्यार्थीलाई ९०-९०-९० आसनमा बसाल्नुहोस् र डेस्क माउन्ट वा ह्वीलचेयर कोष्ठक प्रयोग गरी यन्त्रलाई स्थिर राख्नुहोस्।'
                  : 'Seat student with 90-90-90 posture and secure mid-tech speech aids on slant mounts or wheelchair brackets.',
              },
              {
                num: '3',
                title: isNepali ? 'कुल सञ्चार बहु-मोडल मोडेलिङ' : 'Total Communication Multi-Modal Modeling',
                desc: isNepali
                  ? 'बोल्दा शब्द स्पष्ट उच्चारण गर्नुहोस्, सांकेतिक इशारा गर्नुहोस्, र मिड-टेक यन्त्रको बटन पनि थिच्नुहोस्।'
                  : 'Communicate using multiple modalities simultaneously: speak the word, execute the manual sign, and press the mid-tech button.',
              },
              {
                num: '4',
                title: isNepali ? 'दैनिक ADL कार्यहरूमा समावेश' : 'Integrate Voice Output into Daily ADL Sequences',
                desc: isNepali
                  ? 'ढोका वा टेबलको छेउमा यन्त्र राख्नुहोस् ताकि विद्यार्थीले दिनचर्या निर्देशन गर्न सकुन्।'
                  : 'Position speech aids at critical routine transitions so the learner can direct daily activities independently.',
              },
              {
                num: '5',
                title: isNepali ? 'क्रमबद्ध प्रम्प्ट फेडिङ' : 'Systematic Prompt Fading',
                desc: isNepali
                  ? '१०-१५ सेकेन्ड पर्खनुहोस् ➔ इशारा गर्नुहोस् ➔ अप्रत्यक्ष मौखिक संकेत दिनुहोस् ➔ हल्का हात-मुनि-हात सहयोग गर्नुहोस्।'
                  : 'Wait 10–15 seconds for initiation ➔ gestural point ➔ indirect verbal cue ➔ light hand-under-hand guidance.',
              },
              {
                num: '6',
                title: isNepali ? 'वातावरणहरूबीच एकरूपता' : 'Synchronize Across Environments',
                desc: isNepali
                  ? 'घर, विशेष शिक्षा कक्षा, र स्पीच थेरापीमा उस्तै शब्दावली र लेआउट प्रयोग गर्नुहोस्।'
                  : 'Program identical vocabulary and layouts across devices used at home, in the SPED classroom, and in speech therapy.',
              },
            ].map((st, i) => (
              <div key={i} className="flex gap-3 p-4 rounded-xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330]">
                <span className="h-7 w-7 rounded-full bg-rose-100 dark:bg-rose-900/60 text-rose-800 dark:text-rose-300 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                  {st.num}
                </span>
                <div>
                  <h4 className="font-bold text-neutral-800 dark:text-neutral-200">{st.title}</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 mt-0.5">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Frequently Asked Questions (FAQ) */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-rose-600 dark:text-rose-400" />
            {isNepali ? 'बारम्बार सोधिने प्रश्नहरू (FAQ)' : 'Frequently Asked Questions (FAQ)'}
          </h2>

          <div className="space-y-3">
            {[
              {
                q: isNepali
                  ? 'कुल सञ्चार के हो र यो डाउन सिन्ड्रोमका लागि किन प्रभावकारी छ?'
                  : 'What is Total Communication and why is it effective for Down syndrome?',
                a: isNepali
                  ? 'कुल सञ्चार भनेको बोली, सांकेतिक भाषा, इशारा, चित्र प्रतीक, र आवाज-उत्पादक यन्त्रहरू सबैलाई समेट्ने बहु-मोडल दृष्टिकोण हो। यसले मुखको मांसपेशीको हाइपोटोनिया र बोली अप्राक्सियालाई बाइपास गरी सिकारुलाई आफ्नो विचार व्यक्त गर्न मद्दत गर्दछ।'
                  : 'Total Communication is a multi-modal approach incorporating speech, sign language, gestures, visual symbols, and assistive voice-output devices. It bypasses oral-motor hypotonia and apraxia, allowing learners to express language while speech continues to develop.',
              },
              {
                q: isNepali
                  ? 'के मिड-टेक बोली उपकरण प्रयोग गर्दा बालबालिका बोल्न सिक्नबाट रोकिन्छन्?'
                  : 'Can using mid-tech speech aids prevent a child from learning to speak?',
                a: isNepali
                  ? 'रोकिँदैन। व्यापक शैक्षिक अनुसन्धानहरूले पुष्टि गरेका छन् कि मिड-टेक बोली उपकरण र AAC ले बोली रोक्दैन, बरु बोली विकासलाई सहज बनाउँछ। यसले तत्काल श्रवण मोडेल प्रदान गर्दछ र नबुझिँदा हुने निराशा घटाएर बोली अभ्यासलाई प्रोत्साहन गर्दछ।'
                  : 'No. Extensive empirical research demonstrates that mid-tech speech aids do not impede speech development; they facilitate it by providing an immediate auditory model and reducing the frustration of being misunderstood.',
              },
              {
                q: isNepali
                  ? 'आईप्याड AAC एपको तुलनामा मिड-टेक बोली उपकरण किन रोज्ने?'
                  : 'Why choose a mid-tech speech aid over a high-tech iPad AAC app?',
                a: isNepali
                  ? 'मिड-टेक उपकरणहरूमा स्थिर बटन लेआउट हुन्छ जसले हातको मांसपेशी स्मृति निर्माण गर्दछ। यी उपकरणहरू खस्दा नफुट्ने, लामो ब्याट्री चल्ने, र इन्टरनेट वा एप परिवर्तनको ध्यान भङ्ग नहुने भएकाले कम-उत्तेजना विशेष शिक्षाका लागि उपयुक्त हुन्छन्।'
                  : 'Mid-tech devices feature static, non-changing button layouts that build motor memory, have long battery life, resist drop damage, and present zero visual distractions like notifications or app switching.',
              },
              {
                q: isNepali
                  ? 'दृश्य तालिका र मिड-टेक उपकरणहरूले ADL कार्य विश्लेषणलाई कसरी मद्दत गर्छन्?'
                  : 'How do visual schedules and mid-tech tools support task analysis in ADLs?',
                a: isNepali
                  ? 'दृश्य तालिकाले दिनचर्याका चरणहरू स्थायी रूपमा देखाउँछ भने मिड-टेक बटनले आवाज निकालेर सम्झाउँछ। हात धुने वा लुगा लगाउने जस्ता कार्यहरूमा हरेक चरणमा बटन थिचेर आवाज सुन्दा प्रक्रियात्मक स्मरण बलियो हुन्छ र आत्मनिर्भरता बढ्छ।'
                  : 'Visual schedules present sequence steps permanently in view, while mid-tech talking buttons provide immediate auditory prompts at each step, reinforcing procedural memory during handwashing or dressing.',
              },
              {
                q: isNepali
                  ? 'सेरेब्रल पाल्सीमा बोली अप्राक्सियालाई सहायक प्रविधिले कसरी सम्बोधन गर्दछ?'
                  : 'How does assistive technology accommodate speech apraxia in cerebral palsy?',
                a: isNepali
                  ? 'सेरेब्रल पाल्सी भएका व्यक्तिहरूका लागि सहायक प्रविधिले वैकल्पिक सञ्चार मार्गहरू प्रदान गर्दछ। उच्च-कन्ट्रास्ट सञ्चार बोर्ड, स्विच स्क्यानिङ, र आई-गेज प्रणालीले मुखको मांसपेशीको आवश्यकता बिना आँखा, टाउको वा हातको सहायताले शब्द छनोट गर्न दिन्छ।'
                  : 'For individuals with speech apraxia and CP, assistive technology provides alternative expressive pathways. High-contrast communication boards, switch-scanning, and eye-gaze systems allow users to communicate bypassing oral musculature.',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#1E293B] dark:text-[#E2E8F0] hover:bg-[#FAF7EE]/50 dark:hover:bg-[#151F2A]/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={'h-4 w-4 flex-shrink-0 transition-transform ' + (
                      openFaq === idx ? 'rotate-180 text-rose-600 dark:text-rose-400' : 'text-neutral-400'
                    )}
                  />
                </button>
                {openFaq === idx && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed border-t border-[#E8E2D5]/50 dark:border-[#273748]/50 mt-1">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Footer Navigation Bar */}
        <div className="pt-8 border-t border-[#E8E2D5] dark:border-[#273748] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/guides/visual-scaffolding-auditory-memory-down-syndrome"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2B5763] dark:text-[#5FA4B8] hover:underline"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            <span>{isNepali ? 'अघिल्लो: श्रवण स्मरण कमीका लागि दृश्य मचान' : 'Prev: Visual Scaffolding for Down Syndrome'}</span>
          </Link>
          <Link
            href="/guides#cluster-3"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2B5763] dark:text-[#5FA4B8] hover:underline"
          >
            <span>{isNepali ? 'क्लस्टर ३ हब हेर्नुहोस्' : 'View Cluster 3 Hub'}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
