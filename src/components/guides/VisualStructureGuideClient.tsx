'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  HeartPulse,
  Cpu,
  Hand,
  Brain,
  Clock,
  Users,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  ArrowRight,
  ExternalLink,
  BookMarked,
  ShieldCheck,
  Zap,
  BatteryCharging,
  Laptop,
  Check,
  ChevronRight,
  Home,
  FileCheck,
  Layers,
  PlayCircle,
  RefreshCw,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function VisualStructureGuideClient() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('executive-summary');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedTechTier, setSelectedTechTier] = useState<'all' | 'low' | 'mid' | 'high'>('all');

  const flutterAppUrl = process.env.NEXT_PUBLIC_FLUTTER_APP_URL || 'https://app.tech4neurodivergent.com';
  const isNepali = language === 'ne';

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'executive-summary',
        'theoretical-foundation',
        'assistive-technology-continuum',
        'condition-specific-adaptations',
        'implementation-guide',
        'faq',
      ];

      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const content = {
    badge: isNepali ? 'क्लिनिकल तथा शैक्षिक निर्देशिका' : 'Clinical & Educational Guide',
    audienceTag: isNepali ? 'अभिभावक, विशेष शिक्षक, थेरापिस्ट, IEP टोली' : 'Parents, SPED Teachers, Therapists, IEP Teams',
    readTime: isNepali ? '७ मिनेट पढाइ' : '7 min read',
    lastReviewed: isNepali ? 'क्लिनिकल समीक्षा: सेप्टेम्बर २०२६' : 'Clinically Reviewed: Sept 2026',
    h1: isNepali
      ? 'दृश्य संरचना र कार्य विश्लेषण: अटिजममा कार्यकारी कार्य शिथिलताको न्यूनीकरण'
      : 'Visual Structure & Task Analysis: Mitigating Executive Dysfunction in Autism',

    // Executive Summary
    execSummaryTitle: isNepali ? 'कार्यकारी सारांश तथा मूल परिभाषा' : 'Executive Summary & Core Definition',
    execSummaryText: isNepali ? (
      <>
        <strong>दृश्य संरचना (Visual structure) भन्नाले भौतिक स्थान, सामग्री र जानकारीको योजनाबद्ध संगठन हो जसले सिकारुलाई के गर्ने, कति गर्ने, कार्य कहिले समाप्त हुन्छ, र त्यसपछि के हुन्छ भनी स्वतन्त्र रूपमा बुझ्न मद्दत गर्दछ।</strong> <strong>कार्य विश्लेषण (Task analysis)</strong> भनेको जटिल सीप वा दिनचर्यालाई साना, अवलोकनयोग्य र सिकाउन सकिने चरणहरूमा विभाजन गर्ने प्रक्रिया हो—जसलाई प्रायः <strong>दैनिक जीवन सीप कार्य विश्लेषण (Task analysis ADL)</strong> भनिन्छ। यी दुवै रणनीतिहरूले अटिजममा योजना, अनुक्रम, कार्यकारी स्मरण, संज्ञानात्मक लचकता, र कार्य सुरुवातलाई असर गर्ने मुख्य स्नायु भिन्नता <strong>कार्यकारी कार्य शिथिलता (Executive dysfunction)</strong> लाई प्रत्यक्ष रूपमा सम्बोधन गर्दछन्। अटिस्टिक सिकारुहरू तथा डाउन सिन्ड्रोम, बौद्धिक अपाङ्गता (ID), र सेरेब्रल पाल्सी (CP) भएका विद्यार्थीहरूका लागि कार्यकारी शिथिलता उत्प्रेरणाको कमी होइन। मस्तिष्कको आन्तरिक &quot;परियोजना प्रबन्धक&quot; बाह्य संरचनाविना बहु-चरणीय कार्यहरू सुरु गर्न र व्यवस्थित गर्न संघर्ष गर्दछ। दृश्य संरचना र कार्य विश्लेषणले अदृश्य संज्ञानात्मक मागहरूलाई दृश्यमान, पूर्वानुमानयोग्य, र व्यवस्थित बनाउँछ।
      </>
    ) : (
      <>
        <strong>Visual structure is the deliberate organization of physical space, materials, and information so that a learner can independently understand what to do, how much to do, when the task ends, and what happens next.</strong> <strong>Task analysis</strong> is the process of breaking a complex skill or routine into smaller, observable, teachable steps—often called a <strong>task analysis ADL</strong> (activities of daily living) breakdown. Together, these strategies directly target <strong>executive dysfunction</strong>, a core neurological difference in autism that affects planning, sequencing, working memory, cognitive flexibility, and task initiation. For autistic learners—and many students with Down syndrome, intellectual disabilities (ID), and cerebral palsy (CP)—executive dysfunction is not a motivation problem. The brain&apos;s internal &quot;project manager&quot; struggles to organize, prioritize, and execute multi-step actions without external scaffolding. Visual structure and task analysis serve as that external scaffolding, making invisible cognitive demands visible, predictable, and manageable.
      </>
    ),

    // Theoretical Foundation
    theoTitle: isNepali ? 'सैद्धान्तिक तथा स्नायु-विकासात्मक आधारहरू' : 'Theoretical & Neurodevelopmental Foundation',
    theoSubtitle: isNepali
      ? 'कार्यकारी कार्यले मुख्यतया मस्तिष्कको प्रिफ्रन्टल कोर्टेक्सद्वारा संचालित उच्च-स्तरीय संज्ञानात्मक प्रक्रियाहरूलाई जनाउँछ। न्यूरोडाइभर्जेन्ट सिकारुहरूमा यी प्रक्रियाहरू फरक समयरेखा वा स्नायु मार्गहरूबाट विकसित हुन्छन्:'
      : 'Executive functioning refers to a cluster of higher-order cognitive processes managed primarily by the prefrontal cortex. In neurodivergent learners, these processes often develop on a different timeline or operate through different neural pathways:',
    barriers: [
      {
        id: 'working-memory',
        icon: Cpu,
        title: isNepali ? 'कार्यकारी स्मरण ओभरलोड (Working Memory Overload)' : 'Working Memory Overload',
        text: isNepali
          ? 'जब शिक्षकले तीन-चरणीय मौखिक निर्देशन दिन्छन्, कम श्रव्य कार्यकारी स्मरण भएको अटिस्टिक विद्यार्थीले अन्तिम चरण मात्र याद राख्न सक्छ। अघिल्ला निर्देशनहरू हराउँछन्—बेवास्ता गरिएका होइनन्। दृश्य संरचनाले ती चरणहरूलाई बाह्य रूपमा स्थिर राख्छ ताकि सिकारुले मस्तिष्कमा बोझ थुपार्नु नपरोस्।'
          : 'When a teacher gives a three-step verbal direction, an autistic student with reduced auditory working memory may only retain the final step. The earlier instructions are lost—not ignored. Visual structure externalizes those steps so the learner does not need to hold them internally.',
        badge: isNepali ? 'संज्ञानात्मक भार' : 'Cognitive Retention',
      },
      {
        id: 'task-initiation',
        icon: PlayCircle,
        title: isNepali ? 'कार्य सुरुवातमा अवरोध (Task Initiation Deficits)' : 'Task Initiation Deficits',
        text: isNepali
          ? 'विद्यार्थीले कार्यलाई पूर्ण रूपमा बुझेको हुन सक्छ, तर पनि मस्तिष्कले कार्य सुरु गर्ने "स्टार्ट संकेत" उत्पादन गर्न नसक्दा चुपचाप बस्न सक्छ। दृश्य चेकलिस्टमा स्पष्ट पहिलो चरण तोकिदिँदा कार्य सुरु गर्न चाहिने मानसिक शक्ति उल्लेख्य रूपमा घट्छ।'
          : 'A student may understand an assignment perfectly yet sit motionless because the brain cannot generate the "start signal." A clearly defined first step on a visual checklist reduces the cognitive energy required to begin.',
        badge: isNepali ? 'सुरुवात र सक्रियता' : 'Action Activation',
      },
      {
        id: 'cognitive-inflexibility',
        icon: RefreshCw,
        title: isNepali ? 'संज्ञानात्मक दृढता / अलचकता (Cognitive Inflexibility)' : 'Cognitive Inflexibility',
        text: isNepali
          ? 'अप्रत्याशित परिवर्तन वा अस्पष्ट निर्देशनहरूले तनाव निम्त्याउन सक्छन् किनभने सिकारुको मस्तिष्कले विचारको ढाँचा द्रुत रूपमा परिवर्तन गर्न सक्दैन। पूर्वानुमानयोग्य दृश्य दिनचर्याले एक स्थिर संज्ञानात्मक संरचना बनाउँछ जसले सानातिना परिवर्तनहरूलाई सहजै व्यवस्थापन गर्दछ।'
          : 'Unexpected transitions or ambiguous instructions can trigger distress because the learner\'s brain has difficulty rapidly shifting mental sets. Predictable visual routines create a stable cognitive framework that absorbs minor disruptions more gracefully.',
        badge: isNepali ? 'लचकता र संक्रमण' : 'Mental Flexibility',
      },
      {
        id: 'interoception',
        icon: HeartPulse,
        title: isNepali ? 'अन्तर-इन्द्रिय शारीरिक अनुभूतिमा भिन्नता (Interoception Gaps)' : 'Interoception Gaps',
        text: isNepali
          ? 'धेरै अटिस्टिक सिकारुहरू र डाउन सिन्ड्रोम भएका व्यक्तिहरूलाई भोक, थकान, वा बढ्दो चिन्ता महसुस गर्न कठिनाइ हुन्छ। जब अन्तर-इन्द्रिय सचेतना कमजोर हुन्छ, सिकारुले समयमै स्व-नियमन गर्न सक्दैन र अनियन्त्रित शारीरिक तनावले कार्यकारी स्रोतहरू खपत गर्दछ।'
          : 'Many autistic learners and individuals with Down syndrome struggle to detect internal signals like hunger, fatigue, or rising anxiety. When interoceptive awareness is unreliable, the learner cannot self-regulate proactively, and executive resources are consumed by unmanaged physiological stress.',
        badge: isNepali ? 'संवेदी स्व-नियमन' : 'Sensory Awareness',
      },
      {
        id: 'motor-planning',
        icon: Hand,
        title: isNepali ? 'मोटर अप्राक्सिया र योजना (Fine-Motor Apraxia & Motor Planning)' : 'Fine-Motor Apraxia & Motor Planning',
        text: isNepali
          ? 'सेरेब्रल पाल्सी र डाउन सिन्ड्रोममा मस्तिष्कले चाहेको चाल मांसपेशीले सही रूपमा कार्यान्वयन गर्न सक्दैन। आफ्नो नाम लेख्ने जस्तो सामान्य कार्यमा पनि ठूलो प्रयास लाग्ने हुँदा अनुक्रम मिलाउने र समस्या समाधानका लागि निकै कम मानसिक ऊर्जा बाँकी रहन्छ।'
          : 'In CP and some presentations of Down syndrome, the motor system cannot reliably execute what the brain intends. Even a simple task like writing a name may require enormous effort, leaving fewer cognitive resources for sequencing and problem-solving.',
        badge: isNepali ? 'शारीरिक पहुँच' : 'Neuromotor Access',
      },
    ],
    theoTakeaway: isNepali
      ? 'कार्यकारी कार्य शिथिलताले स्नायु संरचनालाई दर्शाउँछ, चारित्रिक कमजोरीलाई होइन। उपचारात्मक विधिहरूले वातावरणलाई बदल्नुपर्छ, सिकारुलाई केवल इच्छाशक्तिका भरमा स्नायु भिन्नतालाई दबाउन बाध्य पार्नु हुँदैन।'
      : 'Executive dysfunction reflects neurological architecture, not character. Interventions must change the environment, not demand that the learner override their neurology through willpower.',

    // Assistive Technology Continuum
    atTitle: isNepali ? 'सहायक प्रविधिको भूमिका: ३-तहको ढाँचा' : 'The Role of Assistive Technology (AT)',
    atSubtitle: isNepali
      ? 'दृश्य संरचना र कार्य विश्लेषणलाई सबै प्रविधि स्तरहरूमा प्रयोग गर्न सकिन्छ। सबैभन्दा प्रभावकारी योजनाले विभिन्न तहका साधनहरूलाई सँगसँगै प्रयोग गर्दछ:'
      : 'Visual structure and task analysis can be delivered through tools at every technology level. The most effective plans layer supports across tiers.',
    atTiers: [
      {
        id: 'low',
        tier: isNepali ? 'लो-टेक (Low-Tech)' : 'Low-Tech',
        badge: isNepali ? 'शून्य ब्याट्री, उच्च विश्वसनीयता' : 'Zero power, high reliability',
        badgeClass: 'bg-[#EBF7EE] text-[#24633B] dark:bg-[#193322] dark:text-[#7CDA9B] border-[#BDE3C7] dark:border-[#2D5A3A]',
        structExamples: isNepali ? 'लेमिनेट गरिएका दृश्य तालिकाहरू, रङ्ग-सङ्केत गरिएका बक्सहरू, पहिले-त्यसपछि बोर्डहरू, कार्य सम्पन्न बक्सहरू' : 'Laminated visual schedules, color-coded bins, first-then boards, finished boxes',
        taskExamples: isNepali ? 'कागजी चरणबद्ध स्ट्रिपहरू, फोटो अनुक्रम कार्डहरू, वास्तविक वस्तुमा आधारित चेकलिस्टहरू' : 'Paper step-by-step strips, photo sequence cards, object-based checklists',
        pros: isNepali ? 'अत्यन्तै भरपर्दो, कुनै चार्ज नचाहिने, स्पर्श र दृश्यमा आधारित ठोस समर्थन' : 'Extreme tactile predictability, zero screen glare, durable across all settings',
      },
      {
        id: 'mid',
        tier: isNepali ? 'मिड-टेक (Mid-Tech)' : 'Mid-Tech',
        badge: isNepali ? 'सामान्य ब्याट्री / आवाज आउटपुट' : 'Simple battery / voice output',
        badgeClass: 'bg-[#E8F2FC] text-[#1E4D7E] dark:bg-[#162A40] dark:text-[#88BDEC] border-[#BBD8F5] dark:border-[#234A6E]',
        structExamples: isNepali ? 'दृश्य काउन्टडाउन टाइमरहरू (जस्तै: Time Timer), रेकर्ड गरिएका गतिविधि परिवर्तन संकेतहरू, बोल्ने चरण बटनहरू' : 'Visual countdown timers (e.g., Time Timer), recorded transition cues, talking step buttons',
        taskExamples: isNepali ? 'प्रत्येक चरण पुनः सुनाउने बहु-सन्देश उपकरणहरू, श्रव्य-संकेत दिनचर्याहरू' : 'Multi-message devices replaying each step, audio-prompted routines',
        pros: isNepali ? 'तत्काल श्रव्य प्रतिक्रिया, सहज पहुँच, समय बित्दै गएको ठोस दृश्य रूप' : 'Auditory feedback, tangible visual countdown, single-touch playback',
      },
      {
        id: 'high',
        tier: isNepali ? 'हाई-टेक (High-Tech)' : 'High-Tech',
        badge: isNepali ? 'सफ्टवेयर तथा आँखाको दृष्टिले चल्ने' : 'Dynamic software / eye-gaze',
        badgeClass: 'bg-[#F4EEFB] text-[#552D80] dark:bg-[#2C1C3F] dark:text-[#C7A3F0] border-[#DFC9F7] dark:border-[#523375]',
        structExamples: isNepali ? 'डिजिटल तालिका एपहरू (Choiceworks, First Then), न्यून-उत्तेजना विशेष शैक्षिक सफ्टवेयर इन्टरफेसहरू' : 'Digital schedule apps (e.g., Choiceworks, First Then Visual Schedule), low-stimulus special ed interfaces',
        taskExamples: isNepali ? 'भिडियो मोडलिङ एपहरू, AI-आधारित कार्य विश्लेषण (ADL) प्रम्प्टहरू, स्मार्टवाच चरणबद्ध संकेतहरू' : 'Video modeling apps, AI-driven task analysis ADL prompts, step-by-step wearable cues',
        pros: isNepali ? 'असीमित अनुकूलन, गतिशील भिडियो मोडलिङ, विभिन्न उपकरणहरूमा सिंक हुने सुविधा' : 'Dynamic video modeling, individualized scheduling, cross-device synchronization',
      },
    ],
    atLayeringCallout: isNepali
      ? 'नबोल्ने अटिजमका लागि सहायक प्रविधि प्रयोग गर्ने सिकारुले सञ्चारका लागि हाई-टेक AAC उपकरण प्रयोग गर्न सक्छ भने दिनचर्या संरचनाका लागि लो-टेक दृश्य तालिका प्रयोग गर्न सक्छ। यी उपकरणहरू एकअर्काका प्रतिद्वन्द्वी होइनन्, बरु एकअर्काका पूरक हुन्।'
      : 'A learner using assistive technology for nonverbal autism may rely on a high-tech AAC device for communication while using a low-tech visual schedule for routine structure. These tools complement, rather than compete with, each other.',

    // Condition-Specific Practical Adaptations
    condTitle: isNepali ? 'अवस्था-विशिष्ट व्यावहारिक अनुकूलनहरू' : 'Condition-Specific Practical Adaptations',
    condSubtitle: isNepali
      ? 'अटिजम, डाउन सिन्ड्रोम, र सेरेब्रल पाल्सीका लागि दृश्य संरचना र कार्य विश्लेषण अनुकूलनहरू:'
      : 'Evidence-based visual structuring and task analysis workflows tailored to specific neurodevelopmental profiles:',

    // ASD
    asdTitle: isNepali ? 'अटिजम स्पेक्ट्रम डिसअर्डर (Autism Spectrum Disorder - ASD)' : 'Autism Spectrum Disorder (ASD)',
    asdBody: isNepali
      ? 'धेरै अटिस्टिक सिकारुहरूका लागि दृश्य पूर्वानुमान आधारभूत आवश्यकता हो। भौतिक वातावरणलाई व्यवस्थित गर्नुहोस् ताकि कार्य क्षेत्र, विश्राम क्षेत्र, र गतिविधि परिवर्तन क्षेत्रहरू स्पष्ट रूपमा छुट्टिएका हुन्। पूरै दिनको अनुक्रम देखाउने दृश्य तालिका प्रयोग गर्नुहोस्, जसमा पूरा भएका कार्डहरू हाल्ने "फिनिस्ड" बक्स समावेश होस्—यसले प्रगतिको ठोस प्रमाण र स्पष्ट अन्त्य विन्दु प्रदान गर्दछ। कार्य विश्लेषणका लागि, दिनचर्यालाई साना एकाइहरूमा विभाजन गर्नुहोस्। दाँत माझ्ने कार्य विश्लेषणमा समावेश हुन सक्छ: ब्रस उठाउनुहोस् → पानीले भिजाउनुहोस् → मन्जन लगाउनुहोस् → माथिल्लो दाँत माझ्नुहोस् → तल्लो दाँत माझ्नुहोस् → थुक्नुहोस् → कुल्ला गर्नुहोस् → ब्रस राख्नुहोस्। प्रत्येक चरणलाई तस्बिर वा प्रतीकहरूसँग जोड्नुहोस्। दृश्य भद्रगोलबाट विचलित हुने सिकारुका लागि न्यून-उत्तेजना विशेष शैक्षिक प्रविधि (Low-stimulus tech) सेटिङहरू प्रयोग गर्नुहोस्: हल्का पृष्ठभूमि, एकल-चरण प्रदर्शन, र न्यूनतम एनिमेसन। AAC प्रयोगकर्ताहरूका लागि कार्य विश्लेषण शब्दावली सिधै सञ्चार प्रणालीमा समावेश गर्नुहोस् ताकि उनीहरूले कुनै पनि चरणमा मद्दत माग्न वा कार्य पूरा भएको जनाउन सकून्।'
      : 'Visual predictability is foundational for many autistic learners. Structure the physical environment so that work areas, break areas, and transition zones are clearly defined. Use visual schedules that show the entire day\'s sequence, with a "finished" envelope or box where completed step cards are deposited—this provides concrete evidence of progress and a clear endpoint. For task analysis, break routines into the smallest meaningful units. A "brush teeth" analysis might include: pick up toothbrush → wet bristles → add toothpaste → brush top teeth → brush bottom teeth → spit → rinse → put toothbrush away. Pair each step with a photograph or symbol. For learners who find visual clutter overwhelming, use low-stimulus special education tech settings: muted backgrounds, single-step displays, and minimal animation. When AAC is part of the learner\'s profile, embed task analysis vocabulary directly into the communication system.',
    asdCtaText: isNepali
      ? 'हाम्रो निःशुल्क द्विभाषिक वाक्य बनाउने (Sentence Builder AAC) र संवेग व्यवस्थापन मोड्युलहरू प्रयोग गर्नुहोस्'
      : 'Try our free bilingual Sentence Builder AAC and Emotion Regulation modules',

    // Down Syndrome & ID
    downTitle: isNepali ? 'डाउन सिन्ड्रोम तथा बौद्धिक अपाङ्गता (Down Syndrome & ID)' : 'Down Syndrome & Intellectual Disabilities (ID)',
    downBody: isNepali
      ? 'डाउन सिन्ड्रोम र बौद्धिक अपाङ्गताका लागि अनुकूलन सिकाइ उपकरणहरू ठोस आइकन मिलान र तत्काल श्रव्य प्रतिक्रियाबाट लाभान्वित हुन्छन्। डाउन सिन्ड्रोम भएका सिकारुहरूमा दृश्य प्रशोधनमा बलियो पक्ष हुन्छ तर श्रव्य कार्यकारी स्मरण र अमूर्त अनुक्रममा चुनौतीहरू हुन्छन्। पूरै अनुक्रम एकैपटक देखाउनुको सट्टा कार्य विश्लेषण चरणहरू एकपटकमा एउटा मात्र प्रस्तुत गर्नुहोस्, जसले गर्दा स्मरण क्षमतामा भार पर्दैन। मिड-टेक बोल्ने बटनहरू प्रयोग गर्नुहोस् जसले थिच्दा प्रत्येक चरणको निर्देशन पुनः बजाउँछ। दृश्य आइकनलाई सधैं समान मौखिक शब्दसँग जोड्नुहोस् जसले गर्दा सिकाइ दिगो हुन्छ। शैक्षिक कार्यहरूका लागि, See.Touch.Learn जस्ता एपहरूले दैनिक दिनचर्यामा प्रयोग हुने शब्दावलीलाई नै सुदृढ बनाउने मिलान गतिविधिहरू बनाउन अनुमति दिन्छन्।'
      : 'Adaptive learning tools for Down syndrome and ID benefit from concrete icon matching and immediate auditory feedback. Learners with Down syndrome often have relative strengths in visual processing but face challenges with auditory working memory and abstract sequencing. Present task analysis steps one at a time rather than displaying the entire sequence simultaneously, which can overwhelm working memory. Use mid-tech talking buttons that replay each step\'s instruction when pressed. Pair every visual icon with a consistent verbal label to strengthen cross-modal learning. For academic tasks, apps like See.Touch.Learn allow educators to build custom matching activities that reinforce the same vocabulary used in daily routines.',
    downCtaText: isNepali
      ? 'हाम्रो दैनिक जीवन सीप (ADL) कार्य विश्लेषण तथा तालिका उपकरणहरू अन्वेषण गर्नुहोस्'
      : 'Explore our Daily Living Skills (ADL) Task Analysis tools',

    // Cerebral Palsy
    cpTitle: isNepali ? 'सेरेब्रल पाल्सी (Cerebral Palsy - CP)' : 'Cerebral Palsy (CP)',
    cpBody: isNepali
      ? 'सेरेब्रल पाल्सी भएका सिकारुहरूका लागि दृश्य संरचनाले शारीरिक पहुँचलाई ध्यानमा राख्नुपर्छ। सेरेब्रल पाल्सी सञ्चार बोर्ड र तालिका डिस्प्लेहरूमा ठूला ट्याप क्षेत्रहरू, उच्च-कन्ट्रास्ट प्रतीकहरू, र लक्ष्यहरूबीच फराकिलो दूरी हुनुपर्छ। यदि सिकारुले स्विच स्क्यानिङ प्रयोग गर्दछ भने दृश्य ट्र्याकले व्यक्तिको प्रतिक्रिया गतिसँग मेल खाने गरी एकपटकमा एउटा मात्र चरण हाइलाइट गर्नुपर्छ। सेरेब्रल पाल्सी भएका सिकारुका लागि कार्य विश्लेषणमा मोटर-विशिष्ट उप-चरणहरू समावेश गरिनुपर्छ जुन सामान्य कार्य विश्लेषणमा छुट्न सक्छन्—जस्तै: "कप उठाउनु" अघि "कपमा हात राख्नुहोस्"। दृष्टि-सञ्चार वा सरलीकृत AAC प्रणालीले सिकारुलाई सामग्रीहरू शारीरिक रूपमा नछोईकनै प्रत्येक पूरा भएको चरण पुष्टि गर्न अनुमति दिन्छ।'
      : 'For learners with CP, visual structure must account for motor access. Cerebral palsy communication boards and schedule displays should feature large tap zones, high-contrast symbols, and generous spacing between targets. If the learner uses switch scanning, ensure the visual runway track highlights one step at a time with a scan rate matched to the individual\'s reaction speed. Task analysis for CP learners should also incorporate motor-specific sub-steps that neurotypical task analyses omit—such as "position hand on cup" before "lift cup." Eye-gaze or simplified AAC systems can allow the learner to confirm each completed step without requiring physical manipulation of materials.',
    cpCtaText: isNepali
      ? 'हाम्रो एक-ट्याप द्रुत टकर (Single-Tap Quick Talker AAC) इन्टरफेस परीक्षण गर्नुहोस्'
      : 'Test our Single-Tap Quick Talker AAC interface',

    // Implementation Guide
    implTitle: isNepali ? 'गृह तथा कक्षाकोठा कार्यान्वयन निर्देशिका' : 'Home and Classroom Implementation Guide',
    implSubtitle: isNepali
      ? 'दैनिक जीवन र कक्षाकोठामा दृश्य संरचना र कार्य विश्लेषण लागू गर्न ६-चरणीय कार्यविधि:'
      : 'A 6-step practical protocol for implementing visual structure and task analysis across home and school:',
    steps: [
      {
        num: '01',
        title: isNepali ? 'एउटा प्राथमिकता दिनचर्या पहिचान गर्नुहोस् (Identify One Priority Routine)' : 'Identify One Priority Routine',
        text: isNepali
          ? 'वर्तमानमा सबैभन्दा बढी कठिनाइ निम्त्याउने एउटा दैनिक गतिविधि छान्नुहोस्—बिहानीको तयारी, हात धुने, झोला मिलाउने, वा कक्षा परिवर्तन। एकैपटक सम्पूर्ण दिनको संरचना बदल्ने प्रयास नगर्नुहोस्।'
          : 'Choose a daily activity that currently causes the most friction—morning transitions, handwashing, packing a backpack, or moving between classes. Do not attempt to restructure the entire day simultaneously.',
      },
      {
        num: '02',
        title: isNepali ? 'कार्य विश्लेषण सञ्चालन गर्नुहोस् (Conduct the Task Analysis)' : 'Conduct the Task Analysis',
        text: isNepali
          ? 'पहिले त्यो कार्य आफैं गर्नुहोस् र प्रत्येक छुट्टाछुट्टै चरण लेख्नुहोस्। त्यसपछि सिकारुले कार्य गर्दा अवलोकन गर्नुहोस् र कहाँ अवरोध आउँछ भनी नोट गर्नुहोस्। तपाईंको विश्लेषण र सिकारुको प्रदर्शनबीचको अन्तरले दृश्य सहयोग चाहिने वास्तविक चरणहरू देखाउँछ।'
          : 'Perform the routine yourself and write down every discrete step. Then observe the learner attempting it and note where breakdowns occur. The gap between your analysis and the learner\'s performance reveals the exact steps needing visual support.',
      },
      {
        num: '03',
        title: isNepali ? 'उपयुक्त सहायक प्रविधि तह छनोट गर्नुहोस् (Select the Appropriate AT Tier)' : 'Select the Appropriate AT Tier',
        text: isNepali
          ? 'उपकरणलाई सिकारुको संवेदी प्रोफाइल, मोटर पहुँच, र संज्ञानात्मक भार वहन क्षमतासँग मिलाउनुहोस्। स्क्रिनको चमकबाट विचलित हुने सिकारुलाई हाई-टेक एपभन्दा पहिले लो-टेक वा कम-उत्तेजना विकल्पहरू आवश्यक पर्दछ।'
          : 'Match the tool to the learner\'s sensory profile, motor access, and cognitive load tolerance. A learner who becomes dysregulated by screen glare needs low-tech or low-stimulus options before high-tech apps.',
      },
      {
        num: '04',
        title: isNepali ? 'प्रयोग गरेर देखाउनुहोस्, अनि सहयोग घटाउँदै लैजानुहोस् (Model, Then Fade)' : 'Model, Then Fade',
        text: isNepali
          ? 'पहिले आफैं दृश्य संरचना चलाएर देखाउनुहोस्। कार्य पूरा गर्दा प्रत्येक चरण औंल्याउनुहोस्। सिकारुले स्वतन्त्र रूपमा दृश्य तालिका हेर्न थालेपछि आफ्नो मौखिक सहयोग क्रमशः घटाउँदै लैजानुहोस्।'
          : 'Demonstrate the visual structure yourself. Point to each step as you complete it. Gradually reduce your prompting as the learner begins to reference the visual independently.',
      },
      {
        num: '05',
        title: isNepali ? 'सञ्चार पहुँच समावेश गर्नुहोस् (Build in Communication Access)' : 'Build in Communication Access',
        text: isNepali
          ? 'सिकारुले प्रत्येक चरणमा "म अड्किएँ," "मलाई विश्राम चाहिन्छ," वा "मैले गरें" भन्न सक्ने व्यवस्था सुनिश्चित गर्नुहोस्—चाहे बोली, AAC, इसारा, वा स्विच पहुँचद्वारा होस्।'
          : 'Ensure the learner can say "I\'m stuck," "I need a break," or "I\'m done" at every step—through speech, AAC, gestures, or switch access.',
      },
      {
        num: '06',
        title: isNepali ? 'साप्ताहिक रूपमा समीक्षा र समायोजन गर्नुहोस् (Review and Adjust Weekly)' : 'Review and Adjust Weekly',
        text: isNepali
          ? 'थकान, बिरामी, विकासात्मक वृद्धि, र वातावरणीय परिवर्तनसँगै कार्यकारी कार्य आवश्यकताहरू परिवर्तन हुन्छन्। भदौमा प्रभावकारी भएको दृश्य प्रणालीलाई माघमा थप सरलीकरण गर्नुपर्ने हुन सक्छ।'
          : 'Executive functioning needs change with fatigue, illness, developmental growth, and environmental shifts. A visual system that worked in September may need simplification in January.',
      },
    ],

    // FAQ Section
    faqTitle: isNepali ? 'बारम्बार सोधिने प्रश्नहरू (Frequently Asked Questions)' : 'Frequently Asked Questions (FAQ)',
    faqSubtitle: isNepali
      ? 'दृश्य संरचना, कार्य विश्लेषण, र कार्यकारी शिथिलता सम्बन्धी प्रमाण-आधारित सोधखोज:'
      : 'Peer-reviewed evidence addressing common questions about visual structure and task analysis for diverse minds:',
    faqs: [
      {
        q: isNepali
          ? 'विशेष शिक्षामा कार्य विश्लेषण (Task Analysis) के हो?'
          : 'What is task analysis in special education?',
        a: isNepali
          ? 'कार्य विश्लेषण भनेको जटिल सीप वा गतिविधिलाई साना, अवलोकनयोग्य र सिकाउन सकिने चरणहरूमा व्यवस्थित रूपमा विभाजन गर्नु हो। दैनिक जीवन सीप कार्य विश्लेषण (Task analysis ADL) ले लुगा लगाउने कार्यलाई दस वटा छुट्टाछुट्टै कार्यमा विभाजन गर्न सक्छ। सिकारुले बढ्दो स्वतन्त्रताका साथ कार्य सम्पन्न नगरेसम्म प्रत्येक चरणलाई सिकाइन्छ, अभ्यास गराइन्छ र दृश्य रूपमा सहयोग गरिन्छ।'
          : 'Task analysis is the systematic breakdown of a complex skill into smaller, observable, and teachable steps. A task analysis ADL breakdown might divide dressing into ten discrete actions. Each step is taught, practiced, and visually supported until the learner can complete the sequence with increasing independence.',
      },
      {
        q: isNepali
          ? 'दृश्य तालिकाहरूले अटिजममा कार्यकारी कार्य शिथिलता कसरी घटाउँछन्?'
          : 'How do visual schedules reduce executive dysfunction in autism?',
        a: isNepali
          ? 'दृश्य तालिकाहरूले योजना र अनुक्रमको आन्तरिक मानसिक मागलाई बाह्य रूपमा दृश्यमान बनाउँछन्। दिनको संरचनालाई आँखा अगाडि स्थिर र पूर्वानुमानयोग्य बनाएर, दृश्य तालिकाहरूले कार्यकारी स्मरणको भार घटाउँछन्, गतिविधि परिवर्तनको चिन्ता कम गर्छन्, र निरन्तर वयस्क निर्देशनविना स्वतन्त्र रूपमा कार्य सुरु गर्न मद्दत गर्दछन्।'
          : 'Visual schedules externalize the planning and sequencing demands that the autistic brain may struggle to manage internally. By making the day\'s structure visible and predictable, visual schedules reduce working memory load, decrease transition anxiety, and support independent task initiation without requiring constant adult prompting.',
      },
      {
        q: isNepali
          ? 'के AAC प्रयोग गर्दा प्राकृतिक बोली विकास रोकिन सक्छ?'
          : 'Can AAC prevent speech development?',
        a: isNepali
          ? 'हुँदैन, रोकिँदैन। वैज्ञानिक अनुसन्धानहरूले लगातार देखाएका छन् कि AAC ले बोली विकासलाई रोक्दैन। AAC ले भरपर्दो सञ्चार माध्यम प्रदान गरेर निराशा कम गर्दछ र भाषाको संरचना मोडलिङ गरेर प्राकृतिक बोलीको विकासलाई समेत प्रवर्द्धन गर्न सक्छ।'
          : 'No. Peer-reviewed research consistently demonstrates that AAC does not inhibit spoken language development. AAC provides a reliable communication pathway that reduces frustration and may actually support speech emergence by modeling language structure and reducing communicative pressure.',
      },
      {
        q: isNepali
          ? 'डाउन सिन्ड्रोम भएका सिकारुहरूलाई दृश्य तालिकाहरूले कसरी मद्दत गर्छन्?'
          : 'How do visual schedules help learners with Down syndrome?',
        a: isNepali
          ? 'दृश्य तालिकाहरूले श्रव्य कार्यकारी स्मरणको कमजोरीलाई सूचनालाई स्थायी दृश्य ढाँचामा प्रस्तुत गरेर पूर्ति गर्दछन्। सिकारुले एकपटकको मौखिक निर्देशनमा भर पर्नुको सट्टा तालिकालाई बारम्बार हेर्न सक्छन्, जसले कार्य सुरु गर्न, सम्पन्न गर्न, र संवेदी आत्म-नियमनलाई सुधार गर्दछ।'
          : 'Visual schedules compensate for relative weaknesses in auditory working memory by presenting information in a persistent, visual format. Learners can reference the schedule repeatedly without relying on a single verbal instruction, improving transitions, task completion, and self-regulation.',
      },
      {
        q: isNepali
          ? 'सेरेब्रल पाल्सी कार्य विश्लेषणका लागि कुन सहायक प्रविधि सबैभन्दा राम्रो हो?'
          : 'What assistive technology is best for cerebral palsy task analysis?',
        a: isNepali
          ? 'सबैभन्दा राम्रो उपकरण सिकारुको मोटर पहुँच, दृष्टि, र संज्ञानात्मक क्षमतामा निर्भर गर्दछ। विकल्पहरूमा ठूला तस्बिर स्ट्रिप, साझेदार-सहायता स्क्यानिङ, स्विच-अनुकूल डिजिटल तालिका, र दृष्टि-सञ्चार (Eye-gaze) प्रणाली पर्दछन्। थेरापिस्ट र सहायक प्रविधि विज्ञद्वारा मूल्याङ्कनले उपकरण सिकारुको वास्तविक क्षमतासँग मेल खाने सुनिश्चित गर्दछ।'
          : 'The best tool depends on the learner\'s motor access, vision, and cognitive profile. Options range from large-print photo strips and partner-assisted scanning to switch-accessible digital schedules and eye-gaze systems. A multidisciplinary evaluation by an OT, SLP, and assistive technology professional ensures the chosen tool matches the learner\'s actual abilities.',
      },
    ],
  };

  const tocItems = [
    { id: 'executive-summary', label: isNepali ? 'कार्यकारी सारांश' : 'Executive Summary' },
    { id: 'theoretical-foundation', label: isNepali ? 'स्नायु-विकासात्मक आधारहरू' : 'Theoretical Foundation' },
    { id: 'assistive-technology-continuum', label: isNepali ? 'सहायक प्रविधि ३-तह तालिका' : 'AT Continuum' },
    { id: 'condition-specific-adaptations', label: isNepali ? 'अवस्था-विशिष्ट अनुकूलन (ASD, DS, CP)' : 'Condition Adaptations' },
    { id: 'implementation-guide', label: isNepali ? '६-चरण कार्यान्वयन कार्यविधि' : '6-Step Implementation Guide' },
    { id: 'faq', label: isNepali ? 'बारम्बार सोधिने प्रश्नहरू' : 'Frequently Asked Questions' },
  ];

  const filteredTiers =
    selectedTechTier === 'all'
      ? content.atTiers
      : content.atTiers.filter((t) => t.id === selectedTechTier);

  return (
    <article className="min-h-screen py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ZONE 1: HEADER ZONE */}
        <header className="mb-10 lg:mb-14">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#5B6B7C] dark:text-[#94A3B8]">
              <Link href="/" className="hover:text-[#1E3F49] dark:hover:text-[#80C0D0] flex items-center gap-1">
                <Home className="h-3.5 w-3.5" />
                <span>{isNepali ? 'गृहपृष्ठ' : 'Home'}</span>
              </Link>
              <ChevronRight className="h-3 w-3 text-[#A0AAB5]" aria-hidden="true" />
              <Link href="/guides" className="hover:text-[#1E3F49] dark:hover:text-[#80C0D0]">
                {isNepali ? 'स्रोतहरू' : 'Resources'}
              </Link>
              <ChevronRight className="h-3 w-3 text-[#A0AAB5]" aria-hidden="true" />
              <span className="font-semibold text-[#1E293B] dark:text-[#E2E8F0]">
                {isNepali ? 'दृश्य संरचना र कार्य विश्लेषण' : 'Visual Structure & Task Analysis'}
              </span>
            </nav>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E3F49] dark:bg-[#20404C] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-xs">
              <ShieldCheck className="h-3.5 w-3.5 text-[#7CDA9B]" aria-hidden="true" />
              <span>{content.badge}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0] tracking-tight leading-[1.18] mb-5">
            {content.h1}
          </h1>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-[#5B6B7C] dark:text-[#94A3B8] pb-6 border-b border-[#E8E2D5] dark:border-[#273748]">
            <div className="flex items-center gap-1.5 font-medium">
              <Clock className="h-4 w-4 text-[#2B5763] dark:text-[#80C0D0]" aria-hidden="true" />
              <span>{content.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Users className="h-4 w-4 text-[#3D6B56] dark:text-[#7CDA9B]" aria-hidden="true" />
              <span>{isNepali ? 'लक्षित समूह:' : 'Audience:'} <strong className="text-[#1E293B] dark:text-[#E2E8F0]">{content.audienceTag}</strong></span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Sparkles className="h-4 w-4 text-[#9E5819] dark:text-[#E2B350]" aria-hidden="true" />
              <span>{content.lastReviewed}</span>
            </div>
          </div>

          {/* Featured Snippet Card */}
          <aside
            id="executive-summary"
            aria-label="Executive Summary & Core Definition"
            className="mt-8 rounded-2xl border-2 border-[#D7E3E7] dark:border-[#2C4A56] bg-[#FAF7EE] dark:bg-[#15232D] p-6 sm:p-8 shadow-xs relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-[#2B5763] dark:bg-[#1E3F49] text-white px-3.5 py-1 text-[11px] font-bold tracking-wider uppercase rounded-bl-xl">
              {isNepali ? 'स्थिति-शून्य सारांश (Position-Zero)' : 'Quick Answer / Snippet'}
            </div>

            <div className="flex items-center gap-2 text-[#1E3F49] dark:text-[#80C0D0] font-bold text-base sm:text-lg mb-3">
              <BookMarked className="h-5 w-5 text-[#2B5763] dark:text-[#80C0D0]" aria-hidden="true" />
              <h2>{content.execSummaryTitle}</h2>
            </div>

            <p className="text-sm sm:text-base text-[#2C3E50] dark:text-[#CBD5E1] leading-relaxed">
              {content.execSummaryText}
            </p>
          </aside>
        </header>

        {/* MAIN BODY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* STICKY TOC (4 cols) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 z-20">
            <div className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-[#FDFBF7] dark:bg-[#16202C] p-5 shadow-xs">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#E8E2D5] dark:border-[#273748]">
                <Layers className="h-4 w-4 text-[#2B5763] dark:text-[#80C0D0]" aria-hidden="true" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E293B] dark:text-[#E2E8F0]">
                  {isNepali ? 'यस पृष्ठका मुख्य भागहरू' : 'Table of Contents'}
                </h3>
              </div>

              <nav aria-label="Page Table of Contents">
                <ul className="space-y-1.5 text-xs font-medium">
                  {tocItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => scrollToSection(e, item.id)}
                          className={`block rounded-lg px-3 py-2 transition-all ${
                            isActive
                              ? 'bg-[#2B5763] text-white font-semibold shadow-xs translate-x-1'
                              : 'text-[#4B5A6B] dark:text-[#94A3B8] hover:bg-[#F5F0E6] dark:hover:bg-[#1F2E3E] hover:text-[#1E293B] dark:hover:text-white'
                          }`}
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="mt-6 pt-4 border-t border-[#E8E2D5] dark:border-[#273748] text-center">
                <p className="text-[11px] text-[#5B6B7C] dark:text-[#94A3B8] mb-2 font-medium">
                  {isNepali ? '८ अन्तरक्रियात्मक सिकाइ उपकरणहरू' : '8 Free Clinical Web Modules'}
                </p>
                <a
                  href={flutterAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full rounded-xl bg-[#2B5763] hover:bg-[#1E3F49] px-3 py-2 text-xs font-bold text-white shadow-xs transition-colors"
                >
                  <span>{isNepali ? 'वेब एप खोल्नुहोस्' : 'Launch Interactive App'}</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT AREA (8 cols) */}
          <main className="lg:col-span-8 space-y-12 lg:space-y-16">
            
            {/* ZONE 2: THEORETICAL FOUNDATION */}
            <section id="theoretical-foundation" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-2 text-[#2B5763] dark:text-[#80C0D0] text-xs font-bold uppercase tracking-wider">
                <Brain className="h-4 w-4" aria-hidden="true" />
                <span>{isNepali ? 'स्नायु-संज्ञानात्मक आधार' : 'Neurocognitive Basis'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0] tracking-tight mb-4">
                {content.theoTitle}
              </h2>

              <p className="text-sm sm:text-base text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mb-8">
                {content.theoSubtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {content.barriers.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-5 sm:p-6 shadow-xs hover:border-[#2B5763] dark:hover:border-[#80C0D0] transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FAF7EE] dark:bg-[#202E3D] text-[#2B5763] dark:text-[#80C0D0]">
                            <Icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#F0ECE1] dark:bg-[#223140] text-[#5B6B7C] dark:text-[#CBD5E1]">
                            {item.badge}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-2 leading-snug">
                          {item.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-xl border-l-4 border-[#2B5763] bg-[#E8EFF1] dark:bg-[#192C36] p-4 sm:p-5 text-xs sm:text-sm text-[#1E3F49] dark:text-[#9DD3E0] font-medium leading-relaxed">
                <strong>{isNepali ? 'महत्त्वपूर्ण दृष्टिकोण परिवर्तन:' : 'Paradigm Shift:'}</strong> {content.theoTakeaway}
              </div>
            </section>

            {/* ZONE 3: AT CONTINUUM */}
            <section id="assistive-technology-continuum" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-2 text-[#2B5763] dark:text-[#80C0D0] text-xs font-bold uppercase tracking-wider">
                <Zap className="h-4 w-4" aria-hidden="true" />
                <span>{isNepali ? '३-तह प्रविधि तुलना तालिका' : 'Assistive Tech Continuum'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0] tracking-tight mb-4">
                {content.atTitle}
              </h2>

              <p className="text-sm sm:text-base text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mb-6">
                {content.atSubtitle}
              </p>

              {/* Interactive Tier Filter Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs font-semibold text-[#5B6B7C] dark:text-[#94A3B8] mr-1">
                  {isNepali ? 'तह छान्नुहोस्:' : 'Filter View:'}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedTechTier('all')}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                    selectedTechTier === 'all'
                      ? 'bg-[#1E293B] text-white dark:bg-white dark:text-[#1E293B]'
                      : 'bg-[#F0ECE1] dark:bg-[#1E293B] text-[#5B6B7C] dark:text-[#94A3B8] hover:bg-[#E5E0D4]'
                  }`}
                >
                  {isNepali ? 'सबै ३ तहहरू' : 'All 3 Tiers'}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTechTier('low')}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                    selectedTechTier === 'low'
                      ? 'bg-[#24633B] text-white'
                      : 'bg-[#EBF7EE] text-[#24633B] dark:bg-[#193322] dark:text-[#7CDA9B]'
                  }`}
                >
                  Low-Tech
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTechTier('mid')}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                    selectedTechTier === 'mid'
                      ? 'bg-[#1E4D7E] text-white'
                      : 'bg-[#E8F2FC] text-[#1E4D7E] dark:bg-[#162A40] dark:text-[#88BDEC]'
                  }`}
                >
                  Mid-Tech
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTechTier('high')}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                    selectedTechTier === 'high'
                      ? 'bg-[#552D80] text-white'
                      : 'bg-[#F4EEFB] text-[#552D80] dark:bg-[#2C1C3F] dark:text-[#C7A3F0]'
                  }`}
                >
                  High-Tech
                </button>
              </div>

              {/* Comparative Matrix Cards */}
              <div className="space-y-4">
                {filteredTiers.map((tier) => (
                  <div
                    key={tier.id}
                    className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-5 sm:p-6 shadow-xs"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        {tier.id === 'low' && <CheckCircle2 className="h-5 w-5 text-[#24633B] dark:text-[#7CDA9B]" />}
                        {tier.id === 'mid' && <BatteryCharging className="h-5 w-5 text-[#1E4D7E] dark:text-[#88BDEC]" />}
                        {tier.id === 'high' && <Laptop className="h-5 w-5 text-[#552D80] dark:text-[#C7A3F0]" />}
                        <h3 className="text-lg font-bold text-[#1E293B] dark:text-[#E2E8F0]">{tier.tier}</h3>
                      </div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${tier.badgeClass}`}>
                        {tier.badge}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 text-xs">
                      <div className="p-3 rounded-xl bg-[#FAF7EE] dark:bg-[#1F2C3A]">
                        <strong className="text-[#1E293B] dark:text-[#E2E8F0] block mb-1">
                          {isNepali ? 'दृश्य संरचना उदाहरणहरू:' : 'Visual Structure Examples:'}
                        </strong>
                        <span className="text-[#3E4D5E] dark:text-[#CBD5E1]">{tier.structExamples}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#FAF7EE] dark:bg-[#1F2C3A]">
                        <strong className="text-[#1E293B] dark:text-[#E2E8F0] block mb-1">
                          {isNepali ? 'कार्य विश्लेषण (ADL) उदाहरणहरू:' : 'Task Analysis Examples:'}
                        </strong>
                        <span className="text-[#3E4D5E] dark:text-[#CBD5E1]">{tier.taskExamples}</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#5B6B7C] dark:text-[#8090A0]">
                      <span className="font-semibold text-[#2B5763] dark:text-[#80C0D0]">{isNepali ? 'क्लिनिकल सबल पक्ष:' : 'Clinical Advantage:'}</span> {tier.pros}
                    </p>
                  </div>
                ))}
              </div>

              {/* Layering Callout */}
              <div className="mt-6 rounded-2xl border-2 border-[#D7E3E7] dark:border-[#2C4A56] bg-[#FAF7EE] dark:bg-[#15232D] p-5 sm:p-6 shadow-xs">
                <div className="flex items-center gap-2 text-[#1E3F49] dark:text-[#80C0D0] font-bold text-sm sm:text-base mb-2">
                  <FileCheck className="h-5 w-5 text-[#2B5763] dark:text-[#80C0D0]" />
                  <h4>{isNepali ? 'तहहरूको समन्वित प्रयोग' : 'Layered Support Systems'}</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#3E4D5E] dark:text-[#CBD5E1] leading-relaxed">
                  {content.atLayeringCallout}
                </p>
              </div>
            </section>

            {/* ZONE 4: CONDITION-SPECIFIC ADAPTATIONS + FLUTTER CTAS */}
            <section id="condition-specific-adaptations" className="scroll-mt-28 space-y-10">
              <div>
                <div className="flex items-center gap-2 mb-2 text-[#2B5763] dark:text-[#80C0D0] text-xs font-bold uppercase tracking-wider">
                  <Users className="h-4 w-4" aria-hidden="true" />
                  <span>{isNepali ? 'अवस्था-विशिष्ट अनुकूलन' : 'Targeted Accommodations'}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0] tracking-tight mb-4">
                  {content.condTitle}
                </h2>

                <p className="text-sm sm:text-base text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed">
                  {content.condSubtitle}
                </p>
              </div>

              {/* ASD */}
              <div className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 sm:p-8 shadow-xs">
                <h3 className="text-xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-3">
                  {content.asdTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mb-6">
                  {content.asdBody}
                </p>

                <div className="rounded-xl border border-[#2B5763] bg-[#E8EFF1] dark:bg-[#192C36] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#2B5763] dark:text-[#80C0D0]">
                      {isNepali ? 'निःशुल्क अन्तरक्रियात्मक मोड्युल' : 'Free Interactive Module'}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-[#1E293B] dark:text-[#E2E8F0]">
                      {content.asdCtaText}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Link
                      href="/tools/sentence-builder"
                      className="inline-flex items-center gap-1 rounded-lg bg-[#2B5763] px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#1E3F49] transition-colors"
                    >
                      <span>{isNepali ? 'AAC मोड्युल' : 'Sentence AAC'}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      href="/tools/emotion-regulation"
                      className="inline-flex items-center gap-1 rounded-lg border border-[#2B5763] px-3.5 py-2 text-xs font-bold text-[#2B5763] dark:text-[#80C0D0] hover:bg-[#FAF7EE] dark:hover:bg-[#203440] transition-colors"
                    >
                      <span>{isNepali ? 'संवेग व्यवस्थापन' : 'Interoception'}</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* DOWN SYNDROME & ID */}
              <div className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 sm:p-8 shadow-xs">
                <h3 className="text-xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-3">
                  {content.downTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mb-6">
                  {content.downBody}
                </p>

                <div className="rounded-xl border border-[#3D6B56] bg-[#EBF7EE] dark:bg-[#172D20] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#3D6B56] dark:text-[#7CDA9B]">
                      {isNepali ? 'दैनिक जीवन सीप मोड्युल' : 'Life Skills & Task Analysis'}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-[#1E293B] dark:text-[#E2E8F0]">
                      {content.downCtaText}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Link
                      href="/tools/daily-living"
                      className="inline-flex items-center gap-1 rounded-lg bg-[#3D6B56] px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#2D5241] transition-colors"
                    >
                      <span>{isNepali ? 'ADL कार्य विश्लेषण' : 'ADL Task Tools'}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      href="/tools/visual-schedule"
                      className="inline-flex items-center gap-1 rounded-lg border border-[#3D6B56] px-3.5 py-2 text-xs font-bold text-[#3D6B56] dark:text-[#7CDA9B] hover:bg-[#FAF7EE] dark:hover:bg-[#203828] transition-colors"
                    >
                      <span>{isNepali ? 'दृश्य तालिका' : 'Visual Schedule'}</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* CEREBRAL PALSY */}
              <div className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 sm:p-8 shadow-xs">
                <h3 className="text-xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-3">
                  {content.cpTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mb-6">
                  {content.cpBody}
                </p>

                <div className="rounded-xl border border-[#9E5819] bg-[#FAF3E8] dark:bg-[#2E2214] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#9E5819] dark:text-[#E2B350]">
                      {isNepali ? 'एक-ट्याप मोटर पहुँच' : 'Single-Tap Motor Access'}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-[#1E293B] dark:text-[#E2E8F0]">
                      {content.cpCtaText}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Link
                      href="/tools/talker-aac"
                      className="inline-flex items-center gap-1 rounded-lg bg-[#9E5819] px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#7D4512] transition-colors"
                    >
                      <span>{isNepali ? 'द्रुत टकर (Quick Talker)' : 'Single-Tap AAC'}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <a
                      href={flutterAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg border border-[#9E5819] px-3.5 py-2 text-xs font-bold text-[#9E5819] dark:text-[#E2B350] hover:bg-[#FAF7EE] dark:hover:bg-[#3D2C1B] transition-colors"
                    >
                      <span>{isNepali ? 'वेब पोर्टल' : 'Web Portal'}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* ZONE 5: IMPLEMENTATION GUIDE (6-STEP TIMELINE) */}
            <section id="implementation-guide" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-2 text-[#2B5763] dark:text-[#80C0D0] text-xs font-bold uppercase tracking-wider">
                <Check className="h-4 w-4" aria-hidden="true" />
                <span>{isNepali ? '६-चरणीय कार्यविधि' : 'Implementation Stepper'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0] tracking-tight mb-4">
                {content.implTitle}
              </h2>

              <p className="text-sm sm:text-base text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mb-8">
                {content.implSubtitle}
              </p>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-5 sm:before:left-6 before:w-0.5 before:bg-[#E8E2D5] dark:before:bg-[#273748] before:z-0">
                {content.steps.map((step) => (
                  <div
                    key={step.num}
                    className="relative z-10 flex items-start gap-4 sm:gap-6 rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-5 sm:p-6 shadow-xs hover:border-[#2B5763] dark:hover:border-[#80C0D0] transition-colors"
                  >
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-[#2B5763] text-white font-extrabold text-sm sm:text-base shadow-xs">
                      {step.num}
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-[#1E293B] dark:text-[#E2E8F0]">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ZONE 6: FAQ ACCORDION */}
            <section id="faq" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-2 text-[#2B5763] dark:text-[#80C0D0] text-xs font-bold uppercase tracking-wider">
                <BookMarked className="h-4 w-4" aria-hidden="true" />
                <span>{isNepali ? 'प्रमाण-आधारित सोधखोज' : 'Clinical FAQ'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0] tracking-tight mb-4">
                {content.faqTitle}
              </h2>

              <p className="text-sm sm:text-base text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mb-6">
                {content.faqSubtitle}
              </p>

              <div className="space-y-3" role="region" aria-label="Frequently Asked Questions">
                {content.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] overflow-hidden transition-colors shadow-xs"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-[#FAF7EE] dark:hover:bg-[#1E2C3A] focus:outline-none"
                      >
                        <span className="font-bold text-sm sm:text-base text-[#1E293B] dark:text-[#E2E8F0] pr-4">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-[#2B5763] dark:text-[#80C0D0] transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      {isOpen && (
                        <div className="border-t border-[#E8E2D5] dark:border-[#273748] p-5 bg-[#FDFBF7] dark:bg-[#15202B]">
                          <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#CBD5E1] leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

          </main>
        </div>

      </div>
    </article>
  );
}
