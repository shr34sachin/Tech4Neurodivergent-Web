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
  Eye,
  Volume2,
  VolumeX,
  Play,
  RotateCcw,
  CheckSquare,
  Square,
  FileCheck2,
  Activity,
  HeartHandshake,
  HelpCircle,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function VisualScaffoldingDownSyndromeGuideClient() {
  const { language } = useLanguage();
  const isNepali = language === 'ne';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Interactive Auditory vs Visual Memory Simulator State
  const [simulationMode, setSimulationMode] = useState('auditory');
  const [auditoryFaded, setAuditoryFaded] = useState(false);
  const [completedSteps, setCompletedSteps] = useState([false, false, false]);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleStepCheck = (index: number) => {
    const updated = [...completedSteps];
    updated[index] = !updated[index];
    setCompletedSteps(updated);
  };

  const resetSimulator = () => {
    setAuditoryFaded(false);
    setCompletedSteps([false, false, false]);
    setIsPlayingAudio(false);
  };

  const playAuditoryPrompt = () => {
    setIsPlayingAudio(true);
    setAuditoryFaded(false);

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance('Wash hands, dry them, and sit down at the table.');
      utterance.rate = 0.9;
      utterance.onend = () => {
        setIsPlayingAudio(false);
        setTimeout(() => {
          setAuditoryFaded(true);
        }, 1800);
      };
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => {
        setIsPlayingAudio(false);
        setAuditoryFaded(true);
      }, 2500);
    }
  };

  const breadcrumbs = [
    { label: isNepali ? 'गृहपृष्ठ' : 'Home', href: '/' },
    { label: isNepali ? 'निर्देशिकाहरू' : 'Guides', href: '/guides' },
    {
      label: isNepali
        ? 'डाउन सिन्ड्रोममा दृश्य मचान'
        : 'Visual Scaffolding for Down Syndrome',
      href: '/guides/visual-scaffolding-auditory-memory-down-syndrome',
    },
  ];

  const content = {
    badge: isNepali ? 'डाउन सिन्ड्रोम र दृश्य मचान' : 'Down Syndrome & Visual Scaffolding',
    readingTime: isNepali ? '७ मिनेट पढाइ' : '7 min read',
    audience: isNepali ? 'विशेष शिक्षक, SLP, OT, अभिभावक' : 'SPED Teachers, SLPs, OTs, Parents',
    h1Title: isNepali
      ? 'डाउन सिन्ड्रोम भएका सिकारुहरूमा श्रवण स्मरण कमीका लागि दृश्य मचान'
      : 'Visual Scaffolding for Auditory Memory Deficits in Down Syndrome Learners',
    featuredTitle: isNepali ? 'कार्यकारी सारांश र मूल परिभाषा' : 'Executive Summary & Core Definition',
    featuredSnippet: isNepali
      ? 'श्रवण स्मरण कमीका लागि दृश्य मचान (Visual Scaffolding) एक प्रमाण-आधारित क्लिनिकल र शैक्षिक विधि हो जसले ध्वन्यात्मक कार्यस्मरण (Phonological Working Memory) को सीमिततालाई बाइपास गर्न क्षणिक बोलिएका निर्देशनहरूलाई स्थायी, संरचित दृश्य रूपहरूमा अनुवाद गर्दछ। डाउन सिन्ड्रोम (Trisomy 21) भएका सिकारुहरूमा मौखिक अल्पकालीन स्मरण र श्रवण प्रशोधन गतिमा कमजोरी हुन्छ भने दृश्य-स्थानिक (Visual-Spatial) सिकाइ र ढाँचा पहिचानमा सापेक्षिक बलियोपन हुन्छ। बहु-चरणीय बोलिएका आदेशहरू केही सेकेन्डमै हराउँछन्; तसर्थ ठोस फोटो टास्क चेन, अडियो-फिडब्याक टाइलहरू, र सहायक प्रविधिले संज्ञानात्मक मचान प्रदान गर्दछ।'
      : 'Visual scaffolding for auditory memory deficits is an evidence-based clinical and educational methodology that translates transient spoken information into permanent, structured visual representations to bypass phonological working memory constraints. In learners with Down syndrome (Trisomy 21), the neurodevelopmental profile presents marked vulnerabilities in verbal short-term memory and auditory processing speed, contrasted with relative strengths in visual-spatial learning and pattern recognition.',
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

        {/* ASCII Cognitive Bridge Diagram */}
        <div className="mb-12 rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-neutral-900 text-neutral-100 p-5 sm:p-6 overflow-x-auto shadow-md">
          <p className="text-xs uppercase tracking-widest text-neutral-400 font-mono mb-2">
            {isNepali ? 'शैक्षिक मोडेल: श्रवण-देखि-दृश्य संज्ञानात्मक पुल' : 'Educational Model: The Auditory-to-Visual Cognitive Bridge'}
          </p>
          <pre className="text-xs sm:text-sm font-mono leading-relaxed text-emerald-400">
{`┌─────────────────────────────────────────────────────────────────────────┐
│                  THE AUDITORY-TO-VISUAL COGNITIVE BRIDGE                │
├─────────────────────────────────────────────────────────────────────────┤
│  Spoken Command: "Wash hands, dry them, sit down"                       │
│    └── Transient Auditory Signal (Fades in ~1.5 - 2 Seconds)            │
│         │                                                               │
│         ▼ [ Phonological Loop Bottleneck in Down Syndrome ]             │
│         ✖ Information Dropped ──► Task Abandonment / Overload           │
│                                                                         │
│  Visual Scaffolding Intervention:                                       │
│    └── [Step 1: Wash] ──► [Step 2: Dry] ──► [Step 3: Sit]               │
│         │                                                               │
│         ▼ [ Exploits Intact Visual-Spatial Processing Stream ]          │
│         ✔ Permanent Visual Anchor ──► Independent Task Execution        │
└─────────────────────────────────────────────────────────────────────────┘`}
          </pre>
        </div>

        {/* INTERACTIVE SIMULATOR */}
        <div className="mb-14 rounded-2xl border-2 border-rose-300 dark:border-rose-800 bg-white dark:bg-[#182330] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E8E2D5] dark:border-[#273748]">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-950/80 px-2.5 py-0.5 rounded-md mb-1">
                <Sliders className="w-3.5 h-3.5" />
                {isNepali ? 'अन्तरक्रियात्मक सिकाइ सिमुलेटर' : 'Interactive Learning Simulator'}
              </span>
              <h3 className="text-xl font-bold text-[#1E293B] dark:text-[#E2E8F0]">
                {isNepali
                  ? 'श्रवण बनाम दृश्य कार्यस्मरण सिमुलेटर'
                  : 'Auditory Decay vs. Visual Persistence Working Memory Simulator'}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setSimulationMode('auditory');
                  resetSimulator();
                }}
                className={'px-3 py-1.5 text-xs font-bold rounded-lg transition-all ' + (
                  simulationMode === 'auditory'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300'
                )}
              >
                {isNepali ? 'श्रवण मोड (Decays)' : 'Auditory Mode (Decays)'}
              </button>
              <button
                onClick={() => {
                  setSimulationMode('visual');
                  resetSimulator();
                }}
                className={'px-3 py-1.5 text-xs font-bold rounded-lg transition-all ' + (
                  simulationMode === 'visual'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300'
                )}
              >
                {isNepali ? 'दृश्य मचान मोड (Permanent)' : 'Visual Scaffold (Permanent)'}
              </button>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] mb-6 leading-relaxed">
            {isNepali
              ? 'तलको सिमुलेटर चलाएर अनुभव गर्नुहोस् कि मौखिक निर्देशन दिँदा कसरी २ सेकेन्डमै मस्तिष्कको ध्वन्यात्मक लूप खाली हुन्छ, जबकि दृश्य मचानले कार्यलाई स्थायी बनाएर स्वतन्त्रता प्रदान गर्दछ।'
              : 'Test this simulator to experience how transient spoken directives evaporate within 2 seconds due to phonological loop limits in Down syndrome, whereas visual scaffolding provides a persistent cognitive anchor.'}
          </p>

          {simulationMode === 'auditory' ? (
            <div className="rounded-xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/40 dark:bg-rose-950/20 p-5 sm:p-6 text-center">
              <div className="max-w-md mx-auto">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-rose-100 dark:bg-rose-900/60 flex items-center justify-center text-rose-600 dark:text-rose-400">
                    {isPlayingAudio ? (
                      <Volume2 className="h-8 w-8 animate-pulse" />
                    ) : (
                      <VolumeX className="h-8 w-8" />
                    )}
                  </div>
                </div>

                <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                  {isNepali
                    ? '३-चरणीय मौखिक आदेश: "हात धुनुहोस्, पुछ्नुहोस्, र टेबलमा बस्नुहोस्"'
                    : '3-Step Spoken Command: "Wash hands, dry them, and sit down at the table."'}
                </p>

                <div className="flex justify-center gap-3 my-4">
                  <button
                    onClick={playAuditoryPrompt}
                    disabled={isPlayingAudio}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs transition-colors shadow-sm disabled:opacity-50"
                  >
                    <Play className="h-3.5 w-3.5" />
                    {isNepali ? 'मौखिक आदेश सुन्नुहोस्' : 'Speak Spoken Command'}
                  </button>
                  <button
                    onClick={resetSimulator}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-semibold text-xs hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    {isNepali ? 'रिसेट' : 'Reset'}
                  </button>
                </div>

                <div className="mt-4 p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs">
                  {isPlayingAudio && (
                    <span className="text-amber-600 dark:text-amber-400 font-bold flex items-center justify-center gap-1">
                      <Volume2 className="h-3.5 w-3.5" />
                      {isNepali ? 'ध्वनि सक्रिय... (Transient Phonological Loop Store)' : 'Audio Streaming... (Phonological Loop Active)'}
                    </span>
                  )}
                  {auditoryFaded && (
                    <span className="text-rose-600 dark:text-rose-400 font-bold flex items-center justify-center gap-1">
                      <VolumeX className="h-3.5 w-3.5" />
                      {isNepali
                        ? '✖ सङ्केत हरायो (Memory Decay in 1.8s) ➔ दोस्रो र तेस्रो चरण बिर्सियो!'
                        : '✖ Signal Faded (Auditory Decay in 1.8s) ➔ Steps 2 & 3 Evaporated from Short-Term Store!'}
                    </span>
                  )}
                  {!isPlayingAudio && !auditoryFaded && (
                    <span className="text-neutral-500 italic">
                      {isNepali ? 'सिमुलेशन सुरु गर्न आदेश सुन्नुहोस् क्लिक गर्नुहोस्' : 'Click "Speak Spoken Command" to observe auditory memory decay'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/40 dark:bg-emerald-950/20 p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                  <Eye className="h-4 w-4" />
                  {isNepali ? 'स्थायी दृश्य मचान पट्टी (Permanent Visual Task Chain)' : 'Permanent Visual Task Chain (Persists in Environment)'}
                </span>
                <button
                  onClick={resetSimulator}
                  className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
                >
                  <RotateCcw className="h-3 w-3" />
                  {isNepali ? 'रिसेट' : 'Reset'}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                {[
                  { title: isNepali ? 'चरण १: हात धुनुहोस्' : 'Step 1: Wash Hands', icon: '🧼' },
                  { title: isNepali ? 'चरण २: तौलियाले पुछ्नुहोस्' : 'Step 2: Dry with Towel', icon: '🧺' },
                  { title: isNepali ? 'चरण ३: टेबलमा बस्नुहोस्' : 'Step 3: Sit at Table', icon: '🪑' },
                ].map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleStepCheck(idx)}
                    className={'p-4 rounded-xl border text-left transition-all flex flex-col justify-between ' + (
                      completedSteps[idx]
                        ? 'border-emerald-500 bg-emerald-100/70 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-100'
                        : 'border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200'
                    )}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{step.icon}</span>
                      {completedSteps[idx] ? (
                        <CheckSquare className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Square className="h-5 w-5 text-neutral-400" />
                      )}
                    </div>
                    <span className="text-xs font-bold">{step.title}</span>
                    <span className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-1">
                      {completedSteps[idx] ? (isNepali ? 'सम्पन्न भयो' : 'Done') : (isNepali ? 'बाँकी' : 'Tap to Complete')}
                    </span>
                  </button>
                ))}
              </div>

              <div className="rounded-lg bg-emerald-100 dark:bg-emerald-950/60 p-3 text-xs text-emerald-900 dark:text-emerald-200 font-medium flex items-center justify-between">
                <span>
                  {isNepali
                    ? '✔ दृश्य मचान समयको दबाब बिना निरन्तर उपलब्ध रहन्छ। शिक्षार्थीले आफ्नै गतिमा हेरेर काम गर्न सक्दछ।'
                    : '✔ Visual Scaffolding eliminates working memory burden. The prompt never decays, guaranteeing task autonomy.'}
                </span>
                <span className="font-bold">
                  {completedSteps.filter(Boolean).length}/3 {isNepali ? 'सम्पन्न' : 'Done'}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Section: Theoretical & Neurodevelopmental Foundation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6 text-rose-600 dark:text-rose-400" />
            {isNepali ? 'सैद्धान्तिक तथा न्युरोडेभलपमेन्टल आधार' : 'Theoretical & Neurodevelopmental Foundation'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330]">
              <h3 className="font-bold text-sm sm:text-base text-[#1E293B] dark:text-[#E2E8F0] mb-2">
                {isNepali ? 'ध्वन्यात्मक लूप अवरोध (Phonological Loop Bottleneck)' : 'The Phonological Loop Bottleneck'}
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed">
                {isNepali
                  ? 'Baddeley को कार्यस्मरण मोडेल अनुसार, श्रवण जानकारी ध्वन्यात्मक लूपमा प्रशोधन हुन्छ। डाउन सिन्ड्रोममा टेम्पोरल लोब र प्रिफ्रन्टल कोर्टेक्सको भिन्नताले गर्दा मौखिक आदेशहरू १-२ सेकेन्डमै मस्तिष्कबाट मेटिन्छन्।'
                  : 'Baddeley’s Working Memory Model demonstrates that auditory information is processed through the phonological loop. In Down syndrome, structural temporal lobe variations constrain acoustic store capacity, causing verbal commands to rapidly vanish.'}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330]">
              <h3 className="font-bold text-sm sm:text-base text-[#1E293B] dark:text-[#E2E8F0] mb-2">
                {isNepali ? 'दोहोरो कोडिङ सिद्धान्त (Dual Coding Theory)' : 'Dual Coding Theory & Visual Strengths'}
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed">
                {isNepali
                  ? 'Paivio को दोहोरो कोडिङ सिद्धान्तले देखाउँछ कि स्मृति दृश्य र मौखिक दुई अलग माध्यमबाट चल्छ। डाउन सिन्ड्रोममा दृश्य-स्थानिक प्रशोधन बलियो हुने भएकाले चित्र र मौखिक शब्द सँगै प्रस्तुत गर्दा स्मृति दिगो बन्दछ।'
                  : 'Paivio’s Dual Coding Theory proves memory operates through distinct visual and verbal channels. Because visual-spatial pathways are an intact relative strength in Down syndrome, pairing graphics with concise verbal labels optimizes cognitive retention.'}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330]">
              <h3 className="font-bold text-sm sm:text-base text-[#1E293B] dark:text-[#E2E8F0] mb-2">
                {isNepali ? 'कार्यकारी कार्यप्रणाली र थालनी ढिलाइ' : 'Executive Dysfunction & Task Initiation Lags'}
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed">
                {isNepali
                  ? 'प्रिफ्रन्टल कोर्टेक्सले कार्यको योजना र सुरुवात नियमन गर्दछ। दृश्य संकेत बिना, केवल बोलेर अह्राउँदा सिकारुहरूले सुरुवाती बिन्दु नदेखी "थाल्न नसक्ने पक्षाघात" (Initiation Paralysis) अनुभव गर्दछन्।'
                  : 'The prefrontal cortex regulates sequencing and task initiation. Without a visible, structured anchor, neurodivergent learners frequently experience initiation paralysis, unsure of where to physically or cognitively begin.'}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330]">
              <h3 className="font-bold text-sm sm:text-base text-[#1E293B] dark:text-[#E2E8F0] mb-2">
                {isNepali ? 'बोली अप्राक्सिया र श्रवण प्रशोधन ढिलाइ' : 'Speech Apraxia & Processing Delay'}
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed">
                {isNepali
                  ? 'डाउन सिन्ड्रोममा बाल्यकालको बोली अप्राक्सिया र मुखको मांसपेशीको हाइपोटोनिया सह-अवस्थित हुन्छ। बोल्न तयारी गर्दा श्रवण प्रशोधन गति थप सुस्त हुन्छ, जसले दृश्य मचानलाई अनिवार्य बनाउँछ।'
                  : 'Childhood apraxia of speech and hypotonia co-occur frequently with Down syndrome. Striving to formulate motor speech while simultaneously decoding complex auditory sentences bottlenecks processing speed.'}
              </p>
            </div>
          </div>
        </section>

        {/* Section: Assistive Technology Tier Matrix */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-4 flex items-center gap-2">
            <Layers className="w-6 h-6 text-rose-600 dark:text-rose-400" />
            {isNepali ? 'सहायक प्रविधि (AT) तह वर्गीकरण' : 'The Role of Assistive Technology (AT) Spectrum'}
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330]">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#FAF7EE] dark:bg-[#151F2A] border-b border-[#E8E2D5] dark:border-[#273748] text-[#1E293B] dark:text-[#E2E8F0]">
                <tr>
                  <th className="p-3.5 font-bold">{isNepali ? 'AT तह' : 'AT Tier'}</th>
                  <th className="p-3.5 font-bold">{isNepali ? 'दृश्य स्थायित्व उपकरणहरू' : 'Visual Persistence Tools'}</th>
                  <th className="p-3.5 font-bold">{isNepali ? 'श्रवण स्मृति परिपूरक' : 'Auditory Compensation'}</th>
                  <th className="p-3.5 font-bold">{isNepali ? 'व्यावहारिक प्रयोगहरू' : 'Practical Applications'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E2D5] dark:divide-[#273748]">
                <tr>
                  <td className="p-3.5 font-bold text-primary-700 dark:text-primary-300">
                    {isNepali ? 'लो-टेक (Low-Tech)' : 'Low-Tech'}
                  </td>
                  <td className="p-3.5">First-Then boards, laminated photo strips, color checklists</td>
                  <td className="p-3.5">Physical token placement, tactile visual pacing boards</td>
                  <td className="p-3.5">Hygiene routines, classroom transitions, physical task sequences</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-amber-700 dark:text-amber-300">
                    {isNepali ? 'मिड-टेक (Mid-Tech)' : 'Mid-Tech'}
                  </td>
                  <td className="p-3.5">Visual countdown timers (Time Timer), talking photo albums</td>
                  <td className="p-3.5">Single/multi-message voice tiles (GoTalk One), Anybook audio pens</td>
                  <td className="p-3.5">Independent task analysis ADL, sight-word sound verification</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-purple-700 dark:text-purple-300">
                    {isNepali ? 'हाई-टेक (High-Tech)' : 'High-Tech'}
                  </td>
                  <td className="p-3.5">Dynamic schedule apps (Choiceworks, First Then HD), digital narratives</td>
                  <td className="p-3.5">Video modeling platforms, visual text-to-speech highlighting</td>
                  <td className="p-3.5">Multi-step vocational tasks, community navigation, AAC literacy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section: Cross-Condition Adaptations */}
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
                  <strong>{isNepali ? 'ठोस फोटो-देखि-प्रतीक मिलान:' : 'Concrete Photo-to-Icon Matching:'}</strong>{' '}
                  {isNepali
                    ? 'अमूर्त रेखाचित्रहरू भन्दा अगाडि विद्यार्थीको आफ्नै कोट, कक्षाकोठा, र जुत्ताका वास्तविक तस्बिरहरू प्रयोग गर्नुहोस्।'
                    : 'Anchor routines with real photographs of the learner’s actual environment before transitioning to symbolic PCS drawings.'}
                </li>
                <li>
                  <strong>{isNepali ? 'अडियो इको प्रम्प्ट बटनहरू:' : 'Auditory Echo Prompt Buttons:'}</strong>{' '}
                  {isNepali
                    ? 'प्रत्येक कार्य कार्डसँग अडियो बटन जोड्नुहोस्, जसले शिक्षकको दोहोरो मौखिक निर्देशन बिना सिकारुलाई आफैं आवाज सुन्न अनुमति दिन्छ।'
                    : 'Pair visual task cards with mid-tech audio buttons allowing the learner to replay auditory directions on demand without adult badgering.'}
                </li>
                <li>
                  <strong>{isNepali ? 'टास्क-विश्लेषण गरिएको ADL चेकलिस्ट:' : 'Task-Analyzed Visual ADLs:'}</strong>{' '}
                  {isNepali
                    ? 'हात धुने, लुगा लगाउने जस्ता दैनिक सीपहरूलाई कार्यसम्पादन स्थलमै स्थायी पट्टीका रूपमा टाँस्नुहोस् र पूरा भएपछि कार्ड "Done" बाकसमा सार्ने बनाउनुहोस्।'
                    : 'Break multi-step self-care tasks into visual task analysis strips mounted directly at the point of performance (e.g., sink basin).'}
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-amber-200 dark:border-amber-900/40 bg-amber-50/30 dark:bg-amber-950/10 p-5 sm:p-6">
              <h3 className="text-lg font-bold text-amber-900 dark:text-amber-200 mb-2">
                {isNepali ? 'अटिजम स्पेक्ट्रम डिसअर्डर (ASD)' : 'Autism Spectrum Disorder (ASD)'}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#334155] dark:text-[#CBD5E1] list-disc pl-5">
                <li>
                  <strong>{isNepali ? 'कम-उत्तेजना डिजिटल प्रविधि:' : 'Sensory-Safe, Low-Stimulus Tech:'}</strong>{' '}
                  {isNepali
                    ? 'स्क्रिनका चम्किला एनिमेसन र चर्को सेलिब्रेशन ध्वनिहरू बन्द गरी सेन्सरिक ओभरलोड हुनबाट जोगाउनुहोस्।'
                    : 'Configure low-stimulus special education tech by disabling loud celebration chimes and excessive visual animation loops.'}
                </li>
                <li>
                  <strong>{isNepali ? 'TEACCH संरचित कार्य प्रणाली:' : 'Structured TEACCH Visual Work Systems:'}</strong>{' '}
                  {isNepali
                    ? 'बायाँबाट दायाँ सर्ने बाकसहरू प्रयोग गरी कुन काम गर्ने, कति बाँकी छ, र कहिले सकिन्छ भन्ने कुरा स्पष्ट गर्नुहोस्।'
                    : 'Implement left-to-right work stations that define what task is expected, how much work is required, and what happens next.'}
                </li>
                <li>
                  <strong>{isNepali ? 'AAC-आधारित श्रवण मद्दत:' : 'AAC-Driven Auditory Support:'}</strong>{' '}
                  {isNepali
                    ? 'मौखिक निर्देशनहरू भारी हुँदा विद्यार्थीले "Help", "Break", "Stop" जस्ता कोर शब्दहरू तुरुन्तै देखाउन सकून्।'
                    : 'Deploy assistive technology for nonverbal autism, ensuring core self-advocacy keys remain permanently visible during verbal directions.'}
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
                    ? 'अकुलर-मोटर अप्राक्सिया भएका सिकारुहरूको आँखालाई सोझै लक्ष्य विकल्पसम्म पुर्‍याउन उज्यालो गाइड ट्र्याकहरू प्रयोग गर्नुहोस्।'
                    : 'Integrate luminous visual runway tracks on cerebral palsy communication boards to guide ocular-motor gaze toward target responses.'}
                </li>
                <li>
                  <strong>{isNepali ? 'भौतिक किगार्ड र टच जोन क्यालिब्रेसन:' : 'Physical Keyguards & Dwell Zones:'}</strong>{' '}
                  {isNepali
                    ? 'कम्पन र स्प्यास्टिसिटीका कारण हुने आकस्मिक टच रोक्न एक्रिलिक किगार्ड र ड्वेल टाइम प्रयोग गर्नुहोस्।'
                    : 'Equip touchscreens with acrylic keyguards and calibrated dwell hits to filter involuntary muscular spasms.'}
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
                title: isNepali ? 'श्रवण प्रशोधन आधारभूत अडिट' : 'Auditory Processing Baseline Audit',
                desc: isNepali
                  ? 'विद्यार्थीले कतिवटा मौखिक शब्द सुनेपछि अलमलिन्छन् भन्ने जाँच गर्नुहोस् र त्यही अनुसार १ वा २ चरणको दृश्य मचान बनाउनुहोस्।'
                  : 'Observe daily routines to count verbal steps tolerated before task breakdown occurs, establishing baseline scaffold lengths.',
              },
              {
                num: '2',
                title: isNepali ? 'प्रतीक अमूर्तता स्तर निर्धारण' : 'Determine Symbolic Abstraction Level',
                desc: isNepali
                  ? 'विद्यार्थीले मानक रेखाचित्र बुझ्छन् वा वास्तविक फोटो आवश्यक छ भन्ने यकिन गर्नुहोस्।'
                  : 'Evaluate whether the learner comprehends line icons or requires concrete photographs of their personal environment.',
              },
              {
                num: '3',
                title: isNepali ? 'कार्यसम्पादन स्थलमै दृश्य स्थापना' : 'Point-of-Performance Environmental Placement',
                desc: isNepali
                  ? 'दृश्य मचानलाई दराजमा नराखी जहाँ काम गरिन्छ (जस्तै धाराको छेउमा, लकरको भित्र) त्यहीँ टाँस्नुहोस्।'
                  : 'Mount visual strips at the exact physical location where the task takes place (e.g., sink basin, locker door).',
              },
              {
                num: '4',
                title: isNepali ? 'दोहोरो-च्यानल वयस्क मोडेलिङ' : 'Dual-Channel Adult Modeling',
                desc: isNepali
                  ? 'बोल्दा लामो भाषण नगरी चित्रमा औंला देखाउँदै १-२ शब्द मात्र स्पष्ट बोल्नुहोस्।'
                  : 'Point to the visual icon while speaking minimal verbal cues (1–3 words), preventing auditory working memory re-overload.',
              },
              {
                num: '5',
                title: isNepali ? 'क्रमबद्ध प्रम्प्ट फेडिङ' : 'Systematic Prompt Fading',
                desc: isNepali
                  ? 'Least-to-Most प्रम्प्टिङ प्रयोग गर्नुहोस्: प्राकृतिक दृश्य संकेत ➔ इशारा ➔ अप्रत्यक्ष प्रम्प्ट ➔ भौतिक मद्दत।'
                  : 'Follow a least-to-most hierarchy: independent glance ➔ gestural point ➔ indirect prompt ➔ physical guidance.',
              },
              {
                num: '6',
                title: isNepali ? 'वातावरणहरूबीच एकरूपता' : 'Cross-Environment Synchronization',
                desc: isNepali
                  ? 'घर, कक्षाकोठा, र थेरापी क्लिनिकमा एउटै प्रतीक र रङ प्रणाली लागू गर्नुहोस्।'
                  : 'Ensure identical visual iconography and vocabulary are maintained across home, school, and therapy settings.',
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
                  ? 'डाउन सिन्ड्रोम भएका सिकारुहरूले दृश्य संकेत भन्दा बोलिएका निर्देशनहरूमा किन बढी संघर्ष गर्छन्?'
                  : 'Why do learners with Down syndrome struggle more with spoken directions than visual cues?',
                a: isNepali
                  ? 'डाउन सिन्ड्रोममा कार्यस्मरणको ध्वन्यात्मक लूपमा न्युरोडेभलपमेन्टल सीमितता हुन्छ, जसले गर्दा क्षणिक बोलिएका शब्दहरू केही सेकेन्डमै हराउँछन्। यसको विपरित, उनीहरूको दृश्य-स्थानिक स्मृति बलियो हुन्छ। दृश्य संकेतहरू वातावरणमा स्थायी रूपमा रहने हुनाले सिकारुले आफ्नै गतिमा हेरेर प्रक्रिया गर्न सक्दछन्।'
                  : 'Learners with Down syndrome typically have neurodevelopmental constraints in the phonological loop of working memory, making it difficult to store, rehearse, and process transient spoken words. In contrast, their visual-spatial pathways are relatively strong. Spoken language vanishes in seconds, whereas visual cues remain permanently in the environment.',
              },
              {
                q: isNepali
                  ? 'के दृश्य तालिकाहरूले डाउन सिन्ड्रोम भएका विद्यार्थीहरूको स्मरण शक्ति बढाउन मद्दत गर्दछ?'
                  : 'How do visual schedules help students with Down syndrome build memory retention?',
                a: isNepali
                  ? 'दृश्य तालिकाहरूले दिनचर्याका मानसिक चरणहरूलाई बाह्य बनाउँछन्, जसले अल्पकालीन श्रवण स्मरणबाट बोझ हटाउँछ। स्थायी दृश्य मार्फत एउटै अनुक्रम बारम्बार हेरेर अभ्यास गर्दा मस्तिष्कले उक्त दिनचर्यालाई दीर्घकालीन प्रक्रियात्मक स्मृति (Procedural Memory) मा रूपान्तरण गर्दछ।'
                  : 'Visual schedules externalize the mental steps of a routine, removing the burden from short-term auditory memory. By repeatedly executing sequences presented through permanent visual markers, the brain transfers routines into long-term procedural memory.',
              },
              {
                q: isNepali
                  ? 'के दृश्य मद्दत र AAC प्रयोग गर्दा प्राकृतिक बोली विकासमा बाधा पुग्छ?'
                  : 'Can introducing visual supports and AAC delay natural speech development?',
                a: isNepali
                  ? 'हुँदैन। दशकौंका शैक्षिक अनुसन्धानहरूले पुष्टि गरेका छन् कि दृश्य मद्दत र AAC ले बोली विकासमा बाधा पुर्‍याउँदैन, बरु प्रोत्साहन गर्दछ। यसले सञ्चार चिन्ता घटाउँछ र बोलिएका शब्दहरूलाई प्रत्यक्ष अर्थसँग जोडेर प्राकृतिक बोलीलाई बलियो बनाउँछ।'
                  : 'No. Decades of empirical research show that visual supports and AAC do not hinder speech development; they actively support it by reducing communicative anxiety and pairing spoken words directly with meaningful visual concepts.',
              },
              {
                q: isNepali
                  ? 'दृश्य मचान (Visual Scaffolding) र दृश्य तालिका (Visual Schedule) बीच के भिन्नता छ?'
                  : 'What is the difference between visual scaffolding and a visual schedule?',
                a: isNepali
                  ? 'दृश्य तालिका एउटा निश्चित उपकरण हो जसले दिनभरिका मुख्य गतिविधिहरू देखाउँछ। दृश्य मचान भनेको एक व्यापक सहयोगी दृष्टिकोण हो जसमा तालिका, चरणबद्ध कार्य विश्लेषण, रङ-कोडिङ, र ग्राफिक आयोजकहरू समावेश हुन्छन् जसले सबै सिकाइ गतिविधिहरूमा कार्यस्मरणलाई मद्दत गर्दछ।'
                  : 'A visual schedule is a specific tool that displays a sequence of daily activities. Visual scaffolding is a broader clinical framework that encompasses schedules, step-by-step task analyses, color-coding, graphic organizers, and visual prompts designed to support working memory across all learning tasks.',
              },
              {
                q: isNepali
                  ? 'सेरेब्रल पाल्सी भएका सिकारुहरूलाई उच्च-कन्ट्रास्ट भिजुअल रनवे ट्र्याकहरूले कसरी मद्दत गर्छ?'
                  : 'How do high-contrast visual runway tracks help learners with cerebral palsy?',
                a: isNepali
                  ? 'उच्च-कन्ट्रास्ट भिजुअल रनवे ट्र्याकहरू स्क्रिन वा बोर्डमा राखिएका चम्किला मार्गहरू हुन् जसले आँखा वा हातलाई केन्द्रबाट सोझै सही विकल्पसम्म डोर्‍याउँछन्। यसले अकुलर-मोटर अप्राक्सिया वा Cortical Visual Impairment (CVI) भएका बालबालिकालाई आँखा स्थिर गर्न र सही छनोट गर्न मद्दत गर्छ।'
                  : 'High-contrast visual runway tracks are luminous visual guide paths embedded into digital screens or communication boards that connect a central resting point directly to target selection zones, helping individuals with ocular-motor apraxia or CVI direct their gaze accurately.',
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
            href="/guides/assistive-tech-for-down-syndrome"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2B5763] dark:text-[#5FA4B8] hover:underline"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            <span>{isNepali ? 'अघिल्लो: डाउन सिन्ड्रोममा सहायक प्रविधि' : 'Prev: Assistive Tech for Down Syndrome'}</span>
          </Link>
          <Link
            href="/guides/total-communication-mid-tech-speech-aids"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2B5763] dark:text-[#5FA4B8] hover:underline"
          >
            <span>{isNepali ? 'अर्को: कुल सञ्चार तथा मिड-टेक बोली उपकरण' : 'Next: Total Communication & Mid-Tech Speech Aids'}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
