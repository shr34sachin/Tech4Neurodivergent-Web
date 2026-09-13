'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Clock,
  Users,
  CheckCircle2,
  ChevronDown,
  Layers,
  Sparkles,
  ArrowRight,
  Activity,
  Brain,
  Sliders,
  Target,
  Maximize2,
  Contrast,
  Monitor,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function HighContrastInterfacesGuideClient() {
  const { language } = useLanguage();
  const isNepali = language === 'ne';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Interactive Live Visual Demo State
  const [activeDemoMode, setActiveDemoMode] = useState<'standard' | 'accessible'>('accessible');
  const [selectionMessage, setSelectionMessage] = useState<string | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const breadcrumbs = [
    { label: isNepali ? 'गृहपृष्ठ' : 'Home', href: '/' },
    { label: isNepali ? 'निर्देशिकाहरू' : 'Guides', href: '/guides' },
    {
      label: isNepali
        ? 'उच्च-कन्ट्रास्ट तथा ठूला-टार्गेट इन्टरफेस'
        : 'High-Contrast & Large-Target Interfaces',
      href: '/guides/high-contrast-large-target-interfaces',
    },
  ];

  const content = {
    badge: isNepali ? 'क्लिनिकल तथा UI/UX इन्जिनियरिङ' : 'Clinical & UI/UX Engineering',
    readingTime: isNepali ? '८ मिनेट पढाइ' : '8 min read',
    audience: isNepali ? 'AT विशेषज्ञ, विकासकर्ता, OT, SLP, शिक्षक' : 'AT Specialists, UI/UX Designers, OTs, SLPs, Educators',
    h1Title: isNepali
      ? 'मोटर अपाङ्गताका लागि उच्च-कन्ट्रास्ट तथा ठूला-टार्गेट डिजिटल इन्टरफेसहरू: सेरेब्रल पाल्सी र मोटर-बोली संयोजन'
      : 'High-Contrast & Large-Target Digital Interfaces for Motor Impairments: Navigating the Cerebral Palsy & Motor-Speech Intersection',
    featuredTitle: isNepali ? 'कार्यकारी सारांश र मूल परिभाषा' : 'Executive Summary & Core Definition',
    featuredSnippet: isNepali
      ? 'उच्च-कन्ट्रास्ट र ठूला-टार्गेट भएका डिजिटल इन्टरफेसहरू विशेष सहायक प्रविधि (AT) UI/UX संरचनाहरू हुन्, जसले दृश्य खोजको थकान (Visual Search Fatigue) घटाउन, अनैच्छिक शारीरिक चालहरूलाई समायोजन गर्न, र सेरेब्रल पाल्सी (CP) तथा मोटर-बोली अवरोध भएका सिकारुहरूमा स्नायु-मांसपेशीय अवरोधलाई बाइपास गर्न इन्जिनियरिङ गरिएका हुन्छन्।'
      : 'High-contrast and large-target digital interfaces are specialized assistive technology UI/UX configurations engineered to reduce visual search fatigue, accommodate involuntary physical movements, and bypass neuromuscular barriers in learners with motor impairments and motor-speech disorders.',
    featuredTakeaway: isNepali
      ? 'क्लिनिकल निष्कर्ष: सेरेब्रल पाल्सीमा फाइन-मोटर असन्तुलनसँगै अक्सर अक्युलोमोटर अप्राक्सिया, कर्टिकल भिजुअल इम्पेयरमेन्ट (CVI), र डिस्आर्थ्रिया वा अप्राक्सिया सँगै देखिन्छन्। ठूला हिट-बक्सहरू (Expanded Hit-Boxes), उच्च-कन्ट्रास्ट भिजुअल रनवे ट्र्याकहरू, र ड्वेल/रिलिज टच फिल्टरिङ लागू गरेर शिक्षक तथा सहयोगी टोलीहरूले सिकारुको बौद्धिक क्षमतालाई उसको शारीरिक सीमाबाट पूर्ण रूपमा मुक्त गर्न सक्छन्।'
      : 'Clinical Takeaway: In conditions such as Cerebral Palsy (CP), fine-motor incoordination frequently co-occurs with ocular-motor apraxia, Cortical Visual Impairment (CVI), and speech apraxia (or dysarthria). Standard consumer digital interfaces create insurmountable access bottlenecks. By implementing expanded hit-boxes, high-contrast visual runway tracks, and customized touch filtering, educators and caregivers decouple a student’s cognitive and communicative capability from their physical motor limitations.',

    // Sidebar TOC
    tocTitle: isNepali ? 'यस निर्देशिकामा' : 'Table of Contents',
    toc: [
      { id: 'definition', label: isNepali ? 'कार्यकारी सारांश र परिभाषा' : 'Executive Summary & Core Definition' },
      { id: 'interactive-demo', label: isNepali ? 'अन्तरक्रियात्मक रनवे सिमुलेटर' : 'Live Interactive Runway Simulator' },
      { id: 'theoretical-foundations', label: isNepali ? 'सैद्धान्तिक र स्नायु-विकासात्मक आधार' : 'Theoretical & Neurodevelopmental Foundation' },
      { id: 'at-continuum', label: isNepali ? '३-तह सहायक प्रविधि कन्टिन्युम' : 'The Role of Assistive Technology (AT)' },
      { id: 'condition-adaptations', label: isNepali ? 'अवस्था अनुसारका विशेष अनुकूलनहरू' : 'Condition-Specific Practical Adaptations' },
      { id: 'implementation-roadmap', label: isNepali ? '६-चरण क्लिनिकल कार्यान्वयन मार्गचित्र' : 'Home & Classroom Implementation Guide' },
      { id: 'clinical-faq', label: isNepali ? 'प्रायः सोधिने क्लिनिकल प्रश्नहरू' : 'Frequently Asked Questions (FAQ)' },
    ],

    // ASCII/Architecture Box
    asciiTitle: isNepali ? 'मोटर-दृश्य इन्टरफेस अनुकूलन मोडेल' : 'MOTOR-VISUAL INTERFACE OPTIMIZATION',
    asciiStandard: isNepali
      ? 'साधारण डिजिटल UI:\n[सानो आइकन][सानो आइकन][सानो आइकन] ──► उच्च मोटर शुद्धता आवश्यक (मांसपेशीको कडापन ट्रिगर गर्छ)\n(न्यून कन्ट्रास्ट, भीडभाडयुक्त ग्रिड)'
      : 'Standard Digital UI:\n[Small Icon][Small Icon][Small Icon] ──► High Motor Precision Required (Triggers Muscle Spasticity)\n(Low Contrast, Crowded Target Grid)',
    asciiAccessible: isNepali
      ? 'पहुँचयोग्य क्लिनिकल इन्टरफेस:\n┌───────────────────────────────┐\n│ उच्च-कन्ट्रास्ट टार्गेट क्षेत्र   │ ◄──► विस्तारित हिट-बक्स (Dwell Click समर्थित)\n│       [ प्रदीप्त आइकन ]       │\n└───────────────▲───────────────┘\n                │\n  ══════════════╧══════════════ (दृश्य रनवे ट्र्याक: आँखा र हातलाई मार्गनिर्देशन गर्छ)'
      : 'Accessible Clinical Interface:\n┌───────────────────────────────┐\n│ HIGH-CONTRAST TARGET ZONE     │ ◄──► Expanded Hit-Box (Dwell Click Supported)\n│       [ Luminous Icon ]       │\n└───────────────▲───────────────┘\n                │\n  ══════════════╧══════════════ (Visual Runway Track Guides Gaze/Hand)',

    // Theoretical 4-card matrix
    foundationsTitle: isNepali ? 'सैद्धान्तिक र स्नायु-विकासात्मक आधार' : 'Theoretical & Neurodevelopmental Foundation',
    foundationsSubtitle: isNepali
      ? 'पहुँचयोग्य डिजिटल वातावरण निर्माण गर्न स्नायु-मोटर रोगविज्ञान, आँखाको नियन्त्रण, र संज्ञानात्मक भार कसरी एकअर्कामा अन्तरसम्बन्धित छन् भनी विश्लेषण गर्नुपर्छ।'
      : 'Designing accessible digital environments requires analyzing how neuromotor pathology, ocular control, and cognitive load intersect during learning and communication tasks.',
    foundations: [
      {
        icon: 'Activity',
        title: isNepali ? 'CP मा मोटर-बोली र अक्युलोमोटर संयोजन' : 'Motor-Speech & Oculomotor Coupling in CP',
        desc: isNepali
          ? 'सेरेब्रल पाल्सीले माथिल्लो मोटर न्यूरोन घाउहरू (UMN lesions) मार्फत ऐच्छिक मांसपेशी नियन्त्रणमा बाधा पुर्याउँछ। औंला अलग गर्ने वा स्वरयन्त्र नियन्त्रण गर्ने प्रयास गर्दा सामान्यीकृत टोन सर्ज वा कम्पन ट्रिगर हुन्छ। साथै आँखाको द्रुत चाल (Saccades) नियन्त्रण गर्ने क्रेनियल नर्भहरू समेत प्रभावित हुन सक्छन्। भीडभाडयुक्त स्क्रिन स्क्यान गर्नुपर्दा दृश्य तनावले अनैच्छिक मोटर ऐंठन बढाउँछ।'
          : 'Cerebral palsy disrupts voluntary muscle control via upper motor neuron lesions. Voluntary attempts to isolate an index finger or coordinate vocal cords (speech apraxia) often trigger generalized tone surges, muscle overflow, or dystonic posturing. Crucially, cranial nerves controlling ocular saccades can also be impaired, meaning visual hunting triggers physical strain and involuntary spasms.',
      },
      {
        icon: 'Eye',
        title: isNepali ? 'कर्टिकल भिजुअल इम्पेयरमेन्ट (CVI) र भिजुअल क्राउडिङ' : 'Cortical Visual Impairment (CVI) & Visual Crowding',
        desc: isNepali
          ? 'सेरेब्रल पाल्सी भएका ५०–७०% बालबालिकामा CVI जस्ता दृश्य प्रशोधन भिन्नताहरू हुन्छन्। मस्तिष्कले भीडभाडयुक्त दृश्यहरू (Visual Crowding) प्रशोधन गर्न र न्यून-कन्ट्रास्ट सीमाहरू छुट्याउन संघर्ष गर्छ। रोमन कालो-र-पहेंलो वा कालो-र-रातो जस्ता उच्च-कन्ट्रास्ट संयोजन र न्यूनतम घनत्व डोर्सल र भेन्ट्रल दृश्य प्रवाहहरू सक्रिय गर्न अत्यावश्यक हुन्छ।'
          : 'Up to 50–70% of children with cerebral palsy have co-occurring visual processing differences, frequently CVI. The brain struggles to process complex visual scenes (visual crowding), distinguish low-contrast boundaries, or process 2D spatial layouts. High-contrast illumination (e.g., Roman black-and-yellow or black-and-red pairings) and minimal array density are essential neurodevelopmental necessities to activate dorsal and ventral visual streams.',
      },
      {
        icon: 'Brain',
        title: isNepali ? 'संज्ञानात्मक थकान र वर्किङ मेमोरी ह्रास' : 'Cognitive Exhaustion & Working Memory Depletion',
        desc: isNepali
          ? 'जब विद्यार्थीको ८५% सचेत ध्यान शरीरलाई सन्तुलनमा राख्न, कम्पन दबाउन, र स्क्रिनमा सानो लक्ष्य खोज्नमै खर्च हुन्छ, तब उसको कार्यात्मक वर्किङ मेमोरी क्षमता तीव्र रूपमा घट्छ। केवल मोटर-इन्द्रिय क्रियान्वयनले संज्ञानात्मक ऊर्जा रित्त्याइदिएका कारण विद्यार्थीले आफ्नो वास्तविक बौद्धिक क्षमता देखाउन सक्दैन।'
          : 'When 85% of a student’s conscious attention is consumed by stabilizing their torso, suppressing tremors, and visually hunting for a micro-target, their functional working memory capacity drops dramatically. The student is unable to demonstrate their true cognitive potential simply because the motor-sensory execution is exhausting their cognitive bandwidth.',
      },
      {
        icon: 'Sliders',
        title: isNepali ? 'इन्टेरोसेप्शन र शारीरिक स्थितिगत असन्तुलन' : 'Interoception & Positional Dysregulation',
        desc: isNepali
          ? 'अस्थिर बसाइ, मांसपेशीको कडापन, र अत्यधिक थकानले आन्तरिक शारीरिक अनुभूति (Interoception) लाई गडबड बनाउँछ। यदि सिकारु ह्वीलचेयरमा चिप्लिँदैछ वा दुखाइ महसुस गर्दैछ भने उसको स्नायु प्रणाली रक्षात्मक उच्च-उत्तेजना अवस्थामा पुग्छ, जसले गर्दा एर्गोनोमिक र डिजिटल सहारा बिना शुद्ध शारीरिक चयन असम्भव बन्छ।'
          : 'Postural instability, physical muscle spasticity, and fatigue alter interoceptive processing. If a learner is slipping in their seating system or experiencing muscular strain, their nervous system shifts into a defensive, high-arousal state, making precise physical selections impossible without ergonomic and digital scaffolding.',
      },
    ],

    // 3-tier AT Table
    tableTitle: isNepali ? 'सहायक प्रविधि (AT) को भूमिका' : 'The Role of Assistive Technology (AT)',
    tableSubtitle: isNepali
      ? 'ब्याट्री स्तर, शारीरिक थकान वा वातावरणीय सन्दर्भ जे भए तापनि निरन्तर पहुँच सुनिश्चित गर्न सहायक प्रविधिलाई तीन तहहरूमा विभाजन गर्नुपर्छ।'
      : 'Assistive technology must be stratified across low-, mid-, and high-tech tiers, ensuring consistent access regardless of device battery levels, physical fatigue, or environmental context.',
    tableHeaders: [
      isNepali ? 'AT तह' : 'AT Tier',
      isNepali ? 'इन्टरफेस तथा दृश्य संरचना' : 'Interface & Visual Architecture',
      isNepali ? 'मोटर पहुँच मचान (Scaffolding)' : 'Motor Access Scaffolding',
      isNepali ? 'क्लिनिकल अनुप्रयोग' : 'Clinical Application',
    ],
    tableRows: [
      {
        tier: isNepali ? 'निम्न-प्रविधि (Low-Tech)' : 'Low-Tech',
        visual: isNepali
          ? 'उच्च-कन्ट्रास्ट छापिएका सेरेब्रल पाल्सी सञ्चार बोर्डहरू (कालो पृष्ठभूमि, पहेंलो/रातो टार्गेटहरू); E-TRAN आई-गेज फ्रेमहरू।'
          : 'High-contrast printed cerebral palsy communication boards (black background, illuminated yellow/red targets); E-TRAN eye-gaze frames.',
        motor: isNepali
          ? 'एक्रिलिक मेकानिकल कीगार्ड, २०° डेस्कटप स्ल्यान्ट बोर्ड, उच्च-घर्षण भएको डाइसेम (Dycem) नन-स्लिप म्याट।'
          : 'Acrylic mechanical keyguards, 20° desktop slant boards, high-friction Dycem non-slip mats.',
        clinical: isNepali
          ? 'कम थकान हुने टेबल-सञ्चार, हाइड्रोथेरापी, बाहिरी गतिविधिहरू, शून्य-ब्याट्री ब्याकअप।'
          : 'Low-fatigue tabletop communication, hydrotherapy, outdoor activities, zero-battery redundancy.',
      },
      {
        tier: isNepali ? 'मध्यम-प्रविधि (Mid-Tech)' : 'Mid-Tech',
        visual: isNepali
          ? 'ब्याकलिट एलईडी इन्डिकेटर सहितका उच्च-कन्ट्रास्ट ट्याक्टाइल स्विचहरू; २ देखि ४ बटन भएका सरलीकृत आवाज-उत्पादक उपकरणहरू।'
          : 'High-contrast tactile switches with backlit LED indicators; simplified 2-to-4 location voice-output communicators.',
        motor: isNepali
          ? 'ठूला-टार्गेट मेकानिकल स्विचहरू (जस्तै Big Red, Jelly Bean), बनावटयुक्त स्विच क्याप, स्विच-अनुकूलित खेलौना र उपकरणहरू।'
          : 'Large-target mechanical switches (e.g., Big Red, Jelly Bean), textured switch caps, switch-adapted tools.',
        clinical: isNepali
          ? 'कारण-र-असर सिकाइ (Cause & Effect), एकल सन्देश सहभागिता, प्रत्यक्ष ठोस छनोट निर्माण।'
          : 'Cause-and-effect learning, single-message participation, concrete choice-making.',
      },
      {
        tier: isNepali ? 'उच्च-प्रविधि (High-Tech)' : 'High-Tech',
        visual: isNepali
          ? 'कन्फिगर गर्न सकिने हिट-जोन, दृश्य रनवे ट्र्याक (Visual Runways), समायोज्य रङ स्याचुरेसन, र CVI-विशिष्ट प्यालेट भएको सफ्टवेयर।'
          : 'Dynamic display software with configurable hit zones, visual runway tracks, variable color saturation, and CVI-specific palettes.',
        motor: isNepali
          ? 'आई-गेज प्रणालीहरू (Tobii Dynavox), हेड-एरे ट्र्याकिङ, सिंगल/ड्युअल स्विच स्टेप-स्क्यानिङ, ड्वेल/रिलिज टच फिल्टरहरू।'
          : 'Eye-gaze systems (Tobii Dynavox), head-array tracking, single/dual switch step-scanning, dwell/release touch filters.',
        clinical: isNepali
          ? 'जटिल AAC अभिव्यक्ति, स्विच-पहुँचयुक्त पाठ्यक्रम, स्वतन्त्र कम्प्युटर नियन्त्रण।'
          : 'Complex AAC expression, switch-accessible curriculum, independent computer control.',
      },
    ],

    // Condition-Specific Adaptations
    conditionsTitle: isNepali ? 'अवस्था अनुसारका विशेष व्यावहारिक अनुकूलनहरू' : 'Condition-Specific Practical Adaptations',
    conditionsSubtitle: isNepali
      ? 'सेरेब्रल पाल्सी, अटिजम, र डाउन सिन्ड्रोममा मोटर र दृश्य इन्टरफेसहरू कसरी फरक रूपमा कन्फिगर गरिन्छन्।'
      : 'How digital touch interfaces and visual pathways are customized across neuromotor and developmental profiles.',
    conditions: [
      {
        category: isNepali ? 'सेरेब्रल पाल्सी (CP) र मोटर-बोली संयोजन' : 'Cerebral Palsy (CP) & Motor-Speech Intersection',
        badge: isNepali ? 'मोटर-दृश्य अनुकूलन' : 'Motor-Visual Scaffolding',
        color: 'border-purple-300 dark:border-purple-800/60 bg-purple-50/40 dark:bg-purple-950/20',
        items: [
          {
            title: isNepali ? 'उच्च-कन्ट्रास्ट दृश्य रनवे ट्र्याकहरू (Visual Runway Tracks)' : 'High-Contrast Visual Runway Tracks',
            text: isNepali
              ? 'केन्द्रीय गृह स्थितिबाट बाहिरी बटनहरूसम्म चम्किला ग्राफिक रेखाहरू (जस्तै कालो पृष्ठभूमिमा चम्किलो पहेंलो रेखा) सिर्जना गर्नुहोस्। यसले आँखाको चाल वा हातलाई शारीरिक रूपमा बाटो देखाउँछ र CVI Phase II वा अक्युलोमोटर अप्राक्सिया भएका सिकारुलाई मद्दत गर्छ।'
              : 'Integrate prominent, luminous graphic pathways (e.g., neon yellow lines on a matte black canvas) bridging a home resting position to peripheral selection buttons. These physically guide gaze trajectories or manual reaching, directly assisting ocular-motor apraxia or CVI Phase II.',
          },
          {
            title: isNepali ? 'विस्तारित हिट-जोन र पर्याप्त "डेड जोनहरू" (Dead Zones)' : 'Expanded Hit-Zones with Generous "Dead Zones"',
            text: isNepali
              ? 'देखिने आइकन साइज र सक्रिय डिजिटल टच जोनलाई अलग गर्नुहोस्। २ इन्चको देखिने आइकन भए पनि सम्पूर्ण कुनालाई नै टच क्षेत्र बनाउनुहोस्। बटनहरूको बीचमा खाली "डेड जोन" राखेर कम्पन वा अनैच्छिक चालले अर्को बटन थिच्नबाट रोक्नुहोस्।'
              : 'Decouple visual icon size from active touch target zones. The visible graphic may be 2 inches wide, but the underlying digital hit-box extends across the entire quadrant. Generous inactive blank spaces ("dead zones") absorb uncontrolled motor overflow or hand tremors.',
          },
          {
            title: isNepali ? 'सफ्टवेयर टच क्यालिब्रेसन (ड्वेल बनाम रिलिज)' : 'Software Touch Calibration (Dwell vs. Release)',
            text: isNepali
              ? 'ड्वेल सेलेक्सन: स्क्रिनमा पूर्व-निर्धारित समय (०.६-१.२ सेकेन्ड) छोइराख्दा वा हेरिराख्दा मात्र चयन हुन्छ, जसले गर्दा आकस्मिक छोइलाई बेवास्ता गरिन्छ। रिलिज एक्टिभेसन: हात स्क्रिनबाट उठाउँदा मात्र बटन थिचिन्छ, जसले गर्दा सिकारुले छनोट गर्नु अगाडि स्क्रिनमा हात अड्याउन सक्छ।'
              : 'Dwell Selection registers a tap only when the user maintains physical contact or gaze fixation for a calibrated duration (0.6–1.2s), ignoring accidental brush-bys. Release Activation registers the tap only upon hand lift-off, letting students stabilize their hand on the screen glass before selecting.',
          },
          {
            title: isNepali ? 'भौतिक कीगार्ड समायोजन (Physical Keyguards)' : 'Physical Keyguard Integration',
            text: isNepali
              ? 'ट्याब्लेट स्क्रिनमाथि लेजर-कट एक्रिलिक कीगार्ड जडान गर्नुहोस्। यसले हत्केला अड्याउने ठाउँ प्रदान गर्छ र अनैच्छिक चाल भएका औंलाहरूलाई सही बटनको गहिरो प्वालभित्र निर्देशित गर्दछ।'
              : 'Fit laser-cut acrylic keyguards over dynamic displays. Keyguards provide a physical resting shelf for palms while mechanically guiding isolated fingers into deep selection wells.',
          },
        ],
      },
      {
        category: isNepali ? 'अटिजम स्पेक्ट्रम डिसअर्डर (ASD)' : 'Autism Spectrum Disorder (ASD)',
        badge: isNepali ? 'संवेदी-सुरक्षित ढाँचा' : 'Sensory-Safe Architecture',
        color: 'border-teal-300 dark:border-teal-800/60 bg-teal-50/40 dark:bg-teal-950/20',
        items: [
          {
            title: isNepali ? 'न्यून-उत्तेजक UI आर्किटेक्चर (Low-Stimulus UI)' : 'Low-Stimulus UI Architecture',
            text: isNepali
              ? 'अनावश्यक एनिमेसनहरू, विचलित पार्ने पप-अप ब्यानरहरू, र दोहोरिने अडियो आवाजहरू हटाएर न्यून-उत्तेजक वातावरण सिर्जना गर्नुहोस्, जसले संवेदी ओभरलोड हुनबाट जोगाउँछ।'
              : 'Configure low-stimulus special education tech by eliminating celebratory visual animations, distracting pop-up banners, and looping audio effects that trigger sensory overload.',
          },
          {
            title: isNepali ? 'स्थिर मोटर योजना (Motor Planning Consistency)' : 'Motor Planning Consistency',
            text: isNepali
              ? 'प्रतीकहरूलाई सधैं एउटै निश्चित स्थानमा राख्ने मोटर-योजना प्रणाली (जस्तै LAMP) प्रयोग गर्नुहोस्। यसले गर्दा हरेक पटक नयाँ ठाउँ खोज्नुपर्दैन र स्वतः बानी विकास हुन्छ।'
              : 'Deploy motor-planning-focused layouts (such as LAMP Words for Life) where symbols remain in fixed spatial coordinates. This builds automatic motor habits, drastically reducing working memory demands.',
          },
          {
            title: isNepali ? 'आत्म-नियमन शब्दावलीको तत्काल पहुँच' : 'Robust AAC Integration for Self-Regulation',
            text: isNepali
              ? '"धेरै ठूलो आवाज", "विश्राम चाहिन्छ", "मेरो शरीर दुख्यो" जस्ता संवेदी नियमन शब्दावलीलाई एकल-ट्यापमा तुरुन्त पहुँचयोग्य बनाउनुहोस्।'
              : 'Deploy comprehensive assistive technology for nonverbal autism, ensuring rapid single-tap access to self-regulation vocabulary ("too loud," "need a break," "my body hurts") to prevent dysregulation during difficult tasks.',
          },
        ],
      },
      {
        category: isNepali ? 'डाउन सिन्ड्रोम र बौद्धिक अपाङ्गता (ID)' : 'Down Syndrome & Intellectual Disabilities (ID)',
        badge: isNepali ? 'ठोस दृश्य मचान' : 'Concrete Visual Scaffolding',
        color: 'border-amber-300 dark:border-amber-800/60 bg-amber-50/40 dark:bg-amber-950/20',
        items: [
          {
            title: isNepali ? 'उच्च-कन्ट्रास्ट बाह्य रेखा परिभाषा' : 'High-Contrast Boundary Definition',
            text: isNepali
              ? 'आइकनहरू वरिपरि बाक्लो, उच्च-कन्ट्रास्ट बोर्डर प्रयोग गर्नुहोस् जसले क्लिक गर्न सकिने क्षेत्र प्रष्ट पार्छ र दृश्य वर्गीकरणलाई सजिलो बनाउँछ।'
              : 'Utilize thick, high-contrast borders around icons to clearly define clickable regions, supporting spatial processing and visual categorization.',
          },
          {
            title: isNepali ? 'ठोस तस्विर-आधारित मचान (Photographic Scaffolding)' : 'Concrete Photographic Scaffolding',
            text: isNepali
              ? 'अमूर्त रेखाचित्रको सट्टा वास्तविक संसारका सफा तस्विरहरू जोड्नुहोस्, जसले भाषा बुझाइ र स्मरणलाई बलियो बनाउँछ।'
              : 'Anchor abstract symbols by pairing them with crisp, uncluttered photographs of familiar real-world objects, reinforcing language retention.',
          },
          {
            title: isNepali ? 'दैनिक जीवन सीप (ADL) कार्य विश्लेषण' : 'Integrated ADL Task Flows',
            text: isNepali
              ? 'कपडा लगाउने वा हात धुने जस्ता दैनिक कार्यहरूका लागि बहु-संवेदी फ्ल्यासकार्ड र अडियो प्रतिक्रिया सहितको कार्य विश्लेषण प्रवाह लागू गर्नुहोस्।'
              : 'Embed multi-sensory flashcards and sequencing steps within functional task analysis ADL routines (e.g., dressing, hygiene), providing immediate auditory feedback upon each completed step.',
          },
        ],
      },
    ],

    // 6-step Implementation Guide
    roadmapTitle: isNepali ? 'गृह तथा कक्षाकोठा कार्यान्वयन गाइड' : 'Home and Classroom Implementation Guide',
    roadmapSubtitle: isNepali
      ? 'उपकरणको परित्याग रोक्न र घर तथा विद्यालयमा एकरूपता ल्याउन ६-चरणको क्लिनिकल विधि।'
      : 'A systematic clinical implementation framework prevents equipment abandonment and ensures seamless adoption across home and school environments.',
    roadmapSteps: [
      {
        num: '1',
        title: isNepali ? 'एर्गोनोमिक बसाइ र पेल्भिक स्थिरीकरण (९०-९०-९० नियम)' : 'Ergonomic Seating & Pelvic Stabilization (90-90-90)',
        desc: isNepali
          ? 'शारीरिक रूपमा अस्थिर भएको अवस्थामा बच्चालाई कहिल्यै डिजिटल इन्टरफेस नदिनुहोस्। हिप, घुँडा र गोलीगाँठो ९० डिग्रीमा झुकेको र खुट्टा अड्याउने प्लेटमा स्थिर भएको हुनुपर्छ। कम्मर र पेटको स्थिरताले नै हात, आँखा र टाउकोको नियन्त्रण सम्भव बनाउँछ।'
          : 'Never evaluate or present a digital interface to a child who is posturally unstable. Ensure optimal alignment using the clinical 90-90-90 rule (hips, knees, and ankles bent at 90 degrees with firm footplate contact and lateral trunk supports). Core stability unlocks motor control in hands, eyes, and head.',
      },
      {
        num: '2',
        title: isNepali ? 'अक्युलोमोटर र दृश्य क्षेत्र आधारभूत म्यापिङ' : 'Ocular-Motor & Visual Field Baseline Mapping',
        desc: isNepali
          ? 'OT, SLP, र दृश्य विशेषज्ञसँग मिलेर बच्चाको उत्कृष्ट दृश्य क्षेत्र (जस्तै CVI मा माथिल्लो-दायाँ क्षेत्र) र सबैभन्दा भरपर्दो मोटर पहुँच बिन्दु (हातको स्पर्श, हेड पोइन्टर, आई-गेज वा खुट्टाको स्विच) पत्ता लगाउनुहोस्।'
          : 'Collaborate with an OT, SLP, and Teacher of the Visually Impaired (TVI) to identify the learner’s optimal visual field (e.g., upper-right quadrant presentation is often preferred in specific CVI profiles) and their most reliable motor access point (direct hand touch, head pointer, eye-gaze tracking, or foot switch).',
      },
      {
        num: '3',
        title: isNepali ? 'इन्टरफेस क्यालिब्रेसन र भिजुअल रनवे सक्रियकरण' : 'Interface Calibration & Runway Activation',
        desc: isNepali
          ? 'स्क्रिन दिनु अगाडि पृष्ठभूमि कालो डार्क-मोडमा राख्नुहोस्, दृश्य रनवे ट्र्याकहरू अन गर्नुहोस्, कम्पन बेवास्ता गर्न ड्वेल-समय मिलाउनुहोस्, र हिट-बक्सहरू विस्तार गर्नुहोस्।'
          : 'Configure interface parameters before presenting the screen to the learner. Set background colors to high-contrast dark modes, activate visual runway tracks, set touch dwell times to filter tremors, and scale target sizes to match the student’s physical accuracy range.',
      },
      {
        num: '4',
        title: isNepali ? 'वयस्क सहायक भाषा इनपुट (शून्य-दबाव मोडलिङ)' : 'Adult Aided Language Input (Zero-Pressure Modeling)',
        desc: isNepali
          ? 'अभिभावक र शिक्षकहरूले दैनिक क्रियाकलापमा बोल्दै इन्टरफेसमा थिचेर देखाउनुपर्छ। बच्चालाई तुरुन्तै जवाफ दिन दबाब नदिई उपकरण कसरी चल्छ भनेर स्वाभाविक रूपमा सिकाउनुहोस्।'
          : 'Communication partners (parents, SPED educators, therapists) must actively model the interface. Point to and select targets while naturally speaking throughout daily routines, demonstrating how the interface functions without placing high-pressure response demands on the learner.',
      },
      {
        num: '5',
        title: isNepali ? 'त्रुटिरहित छनोट अभ्यास (Errorless Selection)' : 'Errorless Selection Practice & Scaffolding',
        desc: isNepali
          ? 'सुरुमा स्क्रिनमा १ वा २ वटा मात्र ठूला लक्ष्यहरू राख्नुहोस्, जहाँ जुनसुकै छनोटले सकारात्मक र उत्प्रेरक परिणाम दिन्छ। नियन्त्रण र आत्मविश्वास बढेपछि मात्र बटनहरूको संख्या बढाउँदै लैजानुहोस्।'
          : 'Begin with sparse visual arrays (e.g., 1 or 2 large targets on screen) where every selection triggers an immediate, motivating, and positive natural outcome. As physical control, accuracy, and confidence improve, gradually increase target density while maintaining adequate contrast and dead zones.',
      },
      {
        num: '6',
        title: isNepali ? 'वातावरणीय एकरूपता र निम्न-प्रविधि ब्याकअप' : 'Cross-Environment Standardization & Low-Tech Redundancy',
        desc: isNepali
          ? 'घरको ट्याब्लेट, विद्यालयको स्मार्टबोर्ड, र क्लिनिकका उपकरणहरूमा समान रङ कोड र इन्टरफेस सेटिङहरू राख्नुहोस्। उपकरणलाई सुरक्षित स्ट्यान्डमा जोड्नुहोस् र सधैं हातको पहुँचमा छापिएको उच्च-कन्ट्रास्ट सञ्चार बोर्ड राख्नुहोस्।'
          : 'Ensure matching interface parameters, color codes, and vocabulary architectures are mirrored across the student’s home tablet, classroom smartboards, and therapy clinic devices. Mount equipment securely using industrial articulating arms, and always keep an exact, high-contrast laminated paper backup within arm’s reach.',
      },
    ],

    // Clinical FAQ
    faqTitle: isNepali ? 'प्रायः सोधिने क्लिनिकल प्रश्नहरू (FAQ)' : 'Frequently Asked Questions (FAQ)',
    faqSubtitle: isNepali
      ? 'उच्च-कन्ट्रास्ट इन्टरफेस, दृश्य रनवे ट्र्याक, र मोटर पहुँच प्रविधि सम्बन्धी वैज्ञानिक जवाफहरू।'
      : 'Evidence-based insights into visual runway tracks, expanded hit-zones, and touch calibration.',
    faqs: [
      {
        q: isNepali
          ? 'सेरेब्रल पाल्सी सञ्चार इन्टरफेसमा भिजुअल रनवे ट्र्याक (Visual Runway Tracks) भनेको के हो?'
          : 'What are visual runway tracks in cerebral palsy communication interfaces?',
        a: isNepali
          ? 'उच्च-कन्ट्रास्ट भिजुअल रनवे ट्र्याकहरू स्क्रिन वा भौतिक बोर्डमा राखिएका चम्किला, स्पष्ट रङका बाटोहरू (Graphic pathways) हुन्। यिनीहरूले केन्द्रीय दृश्य विन्दुलाई सिधै बाहिरी छनोट बटनहरूसँग जोड्दछन्। अक्युलोमोटर अप्राक्सिया वा कर्टिकल भिजुअल इम्पेयरमेन्ट (CVI) भएका बालबालिकामा यसले दृश्य खोजको थकान घटाउँछ र आँखा वा हातलाई सिधै लक्षित बटनतर्फ पुग्न मार्गदर्शन गर्दछ।'
          : 'High-contrast visual runway tracks are luminous, distinctly colored graphic lines or channels embedded into digital screens or physical boards. They connect a central visual starting point directly to outer selection targets. For individuals with cerebral palsy who also experience oculomotor apraxia or Cortical Visual Impairment (CVI), these guide paths reduce visual search fatigue and help direct intentional eye movements or physical reaches accurately toward target buttons.',
      },
      {
        q: isNepali
          ? 'ठूला हिट जोन र "डेड जोन" ले आकस्मिक स्क्रिन ट्याप हुनबाट कसरी रोक्छन्?'
          : 'How do large hit zones and "dead zones" prevent accidental screen taps?',
        a: isNepali
          ? 'पहुँचयोग्य इन्टरफेस डिजाइनमा, आइकनको डिजिटल हिट जोन (क्लिक गर्न सकिने क्षेत्र) लाई देखिने चित्रभन्दा धेरै ठूलो बनाउन सकिन्छ। "डेड जोन" भनेको बटनहरूको बीचमा राखिने निष्क्रिय, खाली ठाउँ हो। यो संयोजनले मांसपेशीको कडापन वा कम्पन भएका व्यक्तिहरूलाई छेउछाउका गलत बटनहरू नथिची लक्ष्य नजिकै छोएर पनि सही छनोट गर्न मद्दत गर्दछ, जसले निराशा घटाउँछ।'
          : 'In accessible interface design, an icon’s digital hit zone (the clickable area) can be made significantly larger than the visible picture itself. "Dead zones" are inactive, neutral spaces placed between these interactive targets. This combination allows individuals with muscle spasticity, tremors, or ataxia to land near a target without accidentally activating an adjacent button, drastically reducing selection errors and physical frustration.',
      },
      {
        q: isNepali
          ? 'के AAC को प्रयोगले बोली अप्राक्सिया भएका बालबालिकामा प्राकृतिक बोली विकास रोक्छ?'
          : 'Can AAC use prevent speech development in children with speech apraxia?',
        a: isNepali
          ? 'हुँदैन। विस्तृत शैक्षिक अनुसन्धानले पुष्टि गर्दछ कि AAC ले बोलिने भाषा विकासलाई रोक्दैन, बरु यसलाई सक्रिय रूपमा मद्दत गर्छ। तनावमुक्त र भरपर्दो सञ्चार माध्यम उपलब्ध गराएर, AAC ले मुखका मांसपेशीहरूमाथिको दबाब घटाउँछ, स्पष्ट उच्चारणको मोडेल प्रदान गर्छ, र प्रायः स्वाभाविक मौखिक आवाजहरू निकाल्न प्रोत्साहन गर्दछ।'
          : 'No. Comprehensive empirical research confirms that AAC does not hinder spoken language development; it actively supports it. By providing an immediate, reliable, and low-stress communication channel, AAC relieves pressure on the oral-motor apparatus, models clear synthesized pronunciation, pairs language concepts with consistent motor patterns, and often encourages natural verbal vocalizations.',
      },
      {
        q: isNepali
          ? 'कर्टिकल भिजुअल इम्पेयरमेन्ट (CVI) ले सञ्चार बोर्डको डिजाइनमा कस्तो परिवर्तन ल्याउँछ?'
          : 'How does Cortical Visual Impairment (CVI) change how communication boards are designed?',
        a: isNepali
          ? 'CVI का लागि विशेष इन्टरफेस परिमार्जन आवश्यक पर्दछ: भीडभाड घटाउने (कम संख्यामा आइकनहरू), उच्च-कन्ट्रास्ट रङ योजनाहरू (जस्तै कालो पृष्ठभूमिमा चम्किलो पहेंलो वा रातो ग्राफिक), आइकनहरू बीच थप खाली ठाउँ, र प्रदीप्त दृश्य रनवे ट्र्याकहरू। जटिल, बहु-रंगीन कार्टुन चित्रहरूको सट्टा सरल, उच्च-पारदर्शिता भएका प्रतीकहरू वा सफा तस्विरहरू प्रयोग गर्नुपर्छ।'
          : 'CVI requires specific interface modifications: reducing visual clutter (low array density), using high-contrast color schemes (such as bright yellow or red graphics set against a non-reflective black background), providing extra spacing between icons, and highlighting target boundaries with illuminated visual runway tracks. Complex, multi-colored cartoon illustrations should be replaced with simple, high-transparency symbols or uncluttered photographs.',
      },
      {
        q: isNepali
          ? 'ड्वेल क्लिक (Dwell Click) र रिलिज एक्टिभेसन (Release Activation) बीच के भिन्नता छ?'
          : 'What is the difference between dwell click and release activation?',
        a: isNepali
          ? 'ड्वेल क्लिक: प्रयोगकर्ताले निश्चित समय (जस्तै ०.८ सेकेन्ड) सम्म आफ्नो दृष्टि वा हात बटनमा अड्याएपछि मात्र बटन थिचिन्छ, जसले क्षणिक कम्पन वा चिप्लाइबाट हुने गल्ती रोक्छ। रिलिज एक्टिभेसन: प्रयोगकर्ताले स्क्रिनबाट औंला वा स्टाइलस "उठाएपछि" मात्र प्रणालीले छनोट दर्ता गर्दछ। यसले मोटर असन्तुलन भएका व्यक्तिहरूलाई छनोट गर्नु अघि शारीरिक स्थिरताका लागि स्क्रिनमा हात घिसार्न वा अड्याउन अनुमति दिन्छ।'
          : 'Dwell Click (or Dwell Selection) triggers a selection only after the user holds their gaze or rests their hand over a target for a predetermined duration (e.g., 0.8 seconds), preventing accidental activations caused by brief motor spasms. Release Activation registers the selection only when the user lifts their finger or stylus off the screen surface, allowing individuals to drag or rest their hand across the screen for physical stability before releasing on their desired choice.',
      },
    ],

    // Tools CTA
    ctaTitle: isNepali ? 'हाम्रो Quick Talker AAC उपकरण प्रयोग गरी हेर्नुहोस्' : 'Experience Our Accessible Quick Talker AAC Tool',
    ctaDesc: isNepali
      ? 'उच्च-कन्ट्रास्ट रङ, ठूला टच टार्गेटहरू, र मोटर-मैत्री लेआउटहरू भएको हाम्रो निःशुल्क Quick Talker AAC उपकरण तुरुन्त ब्राउजरमै चलाउनुहोस्।'
      : 'Try our free browser-based Quick Talker AAC designed with sensory-safe high-contrast palettes, expanded hit boxes, and speech-synthesis supports.',
    ctaButton: isNepali ? 'Quick Talker AAC खोल्नुहोस् →' : 'Launch Quick Talker AAC →',
  };

  // Live Interactive Demo Handler
  const handleTargetClick = (targetName: string) => {
    setSelectionMessage(
      isNepali
        ? `सफलतापूर्वक चयन भयो: "${targetName}" (भिजुअल रनवे र विस्तारित हिट-बक्स सक्रिय)`
        : `Successfully Activated: "${targetName}" (Visual Runway & Expanded Hit-Box Verified)`
    );
    setTimeout(() => setSelectionMessage(null), 3500);
  };

  return (
    <article className="min-h-screen bg-[#FDFBF7] dark:bg-[#111821] text-[#2D3748] dark:text-[#E2E8F0] transition-colors duration-300">
      {/* 1. Header Zone */}
      <header className="border-b border-[#E2E8F0] dark:border-[#273748] bg-white/70 dark:bg-[#182330]/70 backdrop-blur-md pt-8 pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-semibold">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
              <Contrast className="h-3.5 w-3.5" />
              {content.badge}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#E2E8F0] dark:bg-[#273748] text-[#4A5568] dark:text-[#CBD5E1]">
              <Clock className="h-3.5 w-3.5" />
              {content.readingTime}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              <Users className="h-3.5 w-3.5" />
              {content.audience}
            </span>
          </div>

          <h1 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#1A202C] dark:text-white leading-tight">
            {content.h1Title}
          </h1>

          {/* Snippet Card */}
          <div className="mt-8 rounded-2xl border-2 border-purple-400/40 dark:border-purple-600/40 bg-purple-50/50 dark:bg-purple-950/30 p-6 sm:p-7 shadow-xs">
            <div className="flex items-center gap-2.5 text-purple-900 dark:text-purple-200 font-bold text-lg mb-2.5">
              <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400 shrink-0" />
              <h2>{content.featuredTitle}</h2>
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-[#2D3748] dark:text-[#CBD5E1] font-medium">
              {content.featuredSnippet}
            </p>
            <div className="mt-4 pt-4 border-t border-purple-200 dark:border-purple-800/60 flex items-start gap-2.5 text-sm sm:text-base text-purple-950 dark:text-purple-200">
              <ShieldCheck className="h-5 w-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
              <span>{content.featuredTakeaway}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container with Sticky TOC & Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Desktop Sticky TOC */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24 rounded-2xl border border-[#E2E8F0] dark:border-[#273748] bg-white dark:bg-[#182330] p-5 shadow-xs">
              <div className="flex items-center gap-2 text-sm font-bold text-[#1A202C] dark:text-white mb-3">
                <Layers className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                <span>{content.tocTitle}</span>
              </div>
              <nav className="space-y-1.5 text-xs font-medium">
                {content.toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block py-1.5 px-2 rounded-lg text-[#4A5568] dark:text-[#CBD5E1] hover:bg-purple-50 dark:hover:bg-purple-950/50 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Quick Jump to Tool */}
              <div className="mt-6 pt-4 border-t border-[#E2E8F0] dark:border-[#273748]">
                <Link
                  href="/tools/talker-aac"
                  className="flex items-center justify-between p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-purple-900 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900/60 transition-colors text-xs font-bold"
                >
                  <span className="flex items-center gap-2">
                    <Monitor className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    {isNepali ? 'Quick Talker AAC' : 'Launch Quick Talker AAC'}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Body */}
          <main className="lg:col-span-8 space-y-14">
            {/* Zone 1: Architecture ASCII / Visual Diagram */}
            <section id="definition" className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-black text-[#1A202C] dark:text-white">
                <Contrast className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                <h2>{content.asciiTitle}</h2>
              </div>
              <p className="text-sm sm:text-base text-[#4A5568] dark:text-[#CBD5E1] leading-relaxed">
                {isNepali
                  ? 'परम्परागत डिजिटल इन्टरफेस र क्लिनिकली इन्जिनियर गरिएको पहुँचयोग्य इन्टरफेस बीचको दृश्य र मोटर अन्तरक्रिया तुलना:'
                  : 'Comparing standard consumer dense grids against clinically engineered accessible motor-visual runway architectures:'}
              </p>

              {/* Graphical Comparison Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Standard UI Card */}
                <div className="rounded-2xl border-2 border-red-300 dark:border-red-900/60 bg-red-50/40 dark:bg-red-950/20 p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900/50 px-2 py-0.5 rounded">
                      {isNepali ? 'साधारण उपभोक्ता UI' : 'Standard Consumer UI'}
                    </span>
                    <span className="text-xs text-red-600 dark:text-red-400 font-semibold">
                      {isNepali ? 'उच्च मोटर थकान' : 'High Fatigue Risk'}
                    </span>
                  </div>
                  <div className="bg-[#FAF7EE] dark:bg-[#111821] p-3 rounded-xl border border-red-200 dark:border-red-900/40 flex gap-2 justify-center">
                    <div className="w-10 h-10 rounded bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] text-slate-500">
                      Icon
                    </div>
                    <div className="w-10 h-10 rounded bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] text-slate-500">
                      Icon
                    </div>
                    <div className="w-10 h-10 rounded bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] text-slate-500">
                      Icon
                    </div>
                  </div>
                  <p className="text-xs text-[#4A5568] dark:text-[#CBD5E1] leading-relaxed whitespace-pre-line">
                    {content.asciiStandard}
                  </p>
                </div>

                {/* Accessible Clinical UI Card */}
                <div className="rounded-2xl border-2 border-emerald-400 dark:border-emerald-700/60 bg-emerald-50/40 dark:bg-emerald-950/20 p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/50 px-2 py-0.5 rounded">
                      {isNepali ? 'क्लिनिकल इन्टरफेस' : 'Accessible Clinical UI'}
                    </span>
                    <span className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
                      {isNepali ? 'विस्तारित हिट-जोन' : 'Expanded Hit-Box'}
                    </span>
                  </div>
                  <div className="bg-[#0A0D12] p-4 rounded-xl border-2 border-yellow-400 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="w-full h-1 bg-yellow-400 mb-2 shadow-[0_0_8px_#FACC15]" />
                    <div className="px-4 py-2 rounded-lg bg-yellow-400 text-black font-black text-xs flex items-center gap-1.5 shadow-md">
                      <Target className="h-3.5 w-3.5" />
                      {isNepali ? 'ठूलो टार्गेट' : 'LARGE TARGET'}
                    </div>
                    <span className="text-[10px] text-yellow-300 font-mono mt-1">
                      {isNepali ? 'भिजुअल रनवे ट्र्याक' : 'Visual Runway Active'}
                    </span>
                  </div>
                  <p className="text-xs text-[#4A5568] dark:text-[#CBD5E1] leading-relaxed whitespace-pre-line">
                    {content.asciiAccessible}
                  </p>
                </div>
              </div>
            </section>

            {/* Interactive Simulator: Visual Runway & Dwell Click */}
            <section id="interactive-demo" className="rounded-2xl border-2 border-yellow-400/60 dark:border-yellow-500/40 bg-yellow-50/30 dark:bg-[#182330] p-6 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  <h2 className="text-lg sm:text-xl font-bold text-[#1A202C] dark:text-white">
                    {isNepali ? 'प्रत्यक्ष अन्तरक्रियात्मक सिमुलेटर: दृश्य रनवे र ठूला टार्गेट' : 'Live Interactive Demo: Visual Runways & Target Hit-Zones'}
                  </h2>
                </div>
                {/* Mode Selector */}
                <div className="flex items-center rounded-lg border border-[#E2E8F0] dark:border-[#273748] p-1 bg-white dark:bg-[#111821] text-xs font-bold">
                  <button
                    onClick={() => setActiveDemoMode('accessible')}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      activeDemoMode === 'accessible'
                        ? 'bg-yellow-400 text-black shadow-xs'
                        : 'text-[#4A5568] dark:text-[#CBD5E1]'
                    }`}
                  >
                    {isNepali ? 'पहुँचयोग्य रनवे (Accessible)' : 'High-Contrast Runway'}
                  </button>
                  <button
                    onClick={() => setActiveDemoMode('standard')}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      activeDemoMode === 'standard'
                        ? 'bg-red-500 text-white shadow-xs'
                        : 'text-[#4A5568] dark:text-[#CBD5E1]'
                    }`}
                  >
                    {isNepali ? 'साधारण ग्रिड (Standard)' : 'Standard Grid'}
                  </button>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4A5568] dark:text-[#CBD5E1]">
                {isNepali
                  ? 'तलका बटनहरूमा छोएर वा क्लिक गरेर हेर्नुहोस्। "पहुँचयोग्य रनवे" मोडमा चम्किलो बाटोले दृष्टिलाई सिधै लक्ष्यमा डोर्याउँछ र विस्तारित हिट-बक्सले कम्पनलाई बेवास्ता गर्छ।'
                  : 'Interact with the buttons below. In Accessible mode, notice how the luminous track guides your visual search and the expanded target boundary prevents miss-clicks.'}
              </p>

              {/* Interactive Canvas */}
              {activeDemoMode === 'accessible' ? (
                <div className="bg-[#0B0F17] rounded-xl p-6 sm:p-8 border-2 border-yellow-400/80 relative overflow-hidden shadow-inner">
                  {/* Visual Runway Lines */}
                  <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-1.5 bg-yellow-400 shadow-[0_0_12px_#FACC15] pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Home Position */}
                    <div className="px-4 py-2.5 rounded-full bg-slate-800 border-2 border-yellow-300 text-yellow-300 text-xs font-mono font-bold">
                      {isNepali ? 'गृह बिन्दु (Resting Home)' : 'Resting Origin'}
                    </div>

                    {/* Luminous Target 1 */}
                    <button
                      onClick={() => handleTargetClick(isNepali ? 'मद्दत चाहिन्छ (Help)' : 'Need Help')}
                      className="group relative p-5 rounded-2xl bg-yellow-400 hover:bg-yellow-300 text-black font-black text-sm sm:text-base transition-all duration-200 shadow-[0_0_16px_rgba(250,204,21,0.4)] hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
                    >
                      <Target className="h-5 w-5" />
                      <span>{isNepali ? 'मद्दत चाहिन्छ' : 'Need Help'}</span>
                    </button>

                    {/* Luminous Target 2 */}
                    <button
                      onClick={() => handleTargetClick(isNepali ? 'विश्राम (Break)' : 'Take a Break')}
                      className="group relative p-5 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-black text-sm sm:text-base transition-all duration-200 shadow-[0_0_16px_rgba(239,68,68,0.4)] hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
                    >
                      <Maximize2 className="h-5 w-5" />
                      <span>{isNepali ? 'विश्राम चाहिन्छ' : 'Take Break'}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-6 border border-slate-300 dark:border-slate-800 flex justify-center gap-2">
                  <button
                    onClick={() => handleTargetClick('Micro-Button 1')}
                    className="w-16 h-10 rounded bg-slate-300 dark:bg-slate-800 text-[10px] text-slate-700 dark:text-slate-300 hover:bg-slate-400"
                  >
                    Button 1
                  </button>
                  <button
                    onClick={() => handleTargetClick('Micro-Button 2')}
                    className="w-16 h-10 rounded bg-slate-300 dark:bg-slate-800 text-[10px] text-slate-700 dark:text-slate-300 hover:bg-slate-400"
                  >
                    Button 2
                  </button>
                  <button
                    onClick={() => handleTargetClick('Micro-Button 3')}
                    className="w-16 h-10 rounded bg-slate-300 dark:bg-slate-800 text-[10px] text-slate-700 dark:text-slate-300 hover:bg-slate-400"
                  >
                    Button 3
                  </button>
                </div>
              )}

              {/* Selection Notification */}
              {selectionMessage && (
                <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm font-bold flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{selectionMessage}</span>
                </div>
              )}
            </section>

            {/* Zone 2: Theoretical Foundations 4-card matrix */}
            <section id="theoretical-foundations" className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xl font-black text-[#1A202C] dark:text-white">
                  <Brain className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  <h2>{content.foundationsTitle}</h2>
                </div>
                <p className="mt-1 text-sm sm:text-base text-[#4A5568] dark:text-[#CBD5E1]">
                  {content.foundationsSubtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {content.foundations.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-[#E2E8F0] dark:border-[#273748] bg-white dark:bg-[#182330] p-5 shadow-xs hover:border-purple-400 dark:hover:border-purple-600 transition-all space-y-2.5"
                    >
                      <div className="flex items-center gap-2.5 text-purple-700 dark:text-purple-300 font-bold text-base">
                        <Activity className="h-5 w-5 text-purple-600 dark:text-purple-400 shrink-0" />
                        <h3>{item.title}</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[#4A5568] dark:text-[#CBD5E1] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Zone 3: 3-Tier AT Continuum Table */}
            <section id="at-continuum" className="space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xl font-black text-[#1A202C] dark:text-white">
                  <Layers className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  <h2>{content.tableTitle}</h2>
                </div>
                <p className="mt-1 text-sm sm:text-base text-[#4A5568] dark:text-[#CBD5E1]">
                  {content.tableSubtitle}
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] dark:border-[#273748] bg-white dark:bg-[#182330] shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#FAF7EE] dark:bg-[#111821] border-b border-[#E2E8F0] dark:border-[#273748] text-[#1A202C] dark:text-white font-bold">
                    <tr>
                      {content.tableHeaders.map((header, i) => (
                        <th key={i} className="p-3.5 sm:p-4">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0] dark:divide-[#273748]">
                    {content.tableRows.map((row, index) => (
                      <tr
                        key={index}
                        className="hover:bg-purple-50/30 dark:hover:bg-purple-950/20 transition-colors"
                      >
                        <td className="p-3.5 sm:p-4 font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap align-top">
                          {row.tier}
                        </td>
                        <td className="p-3.5 sm:p-4 text-[#4A5568] dark:text-[#CBD5E1] align-top leading-relaxed">
                          {row.visual}
                        </td>
                        <td className="p-3.5 sm:p-4 text-[#4A5568] dark:text-[#CBD5E1] align-top leading-relaxed">
                          {row.motor}
                        </td>
                        <td className="p-3.5 sm:p-4 text-[#4A5568] dark:text-[#CBD5E1] align-top leading-relaxed">
                          {row.clinical}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Zone 4: Condition-Specific Practical Adaptations */}
            <section id="condition-adaptations" className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xl font-black text-[#1A202C] dark:text-white">
                  <Sliders className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  <h2>{content.conditionsTitle}</h2>
                </div>
                <p className="mt-1 text-sm sm:text-base text-[#4A5568] dark:text-[#CBD5E1]">
                  {content.conditionsSubtitle}
                </p>
              </div>

              <div className="space-y-6">
                {content.conditions.map((block, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl border-2 p-6 space-y-4 shadow-xs ${block.color}`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/10 dark:border-white/10 pb-3">
                      <h3 className="text-lg font-black text-[#1A202C] dark:text-white">
                        {block.category}
                      </h3>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white dark:bg-[#111821] text-[#2D3748] dark:text-[#CBD5E1] shadow-xs">
                        {block.badge}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {block.items.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="bg-white/90 dark:bg-[#182330]/90 rounded-xl p-4 border border-[#E2E8F0] dark:border-[#273748] space-y-1.5"
                        >
                          <h4 className="text-xs sm:text-sm font-bold text-[#1A202C] dark:text-white flex items-center gap-1.5">
                            <CheckCircle2 className="h-4 w-4 text-purple-600 dark:text-purple-400 shrink-0" />
                            {sub.title}
                          </h4>
                          <p className="text-xs text-[#4A5568] dark:text-[#CBD5E1] leading-relaxed">
                            {sub.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive Tool Banner */}
              <div className="rounded-2xl border-2 border-purple-400 dark:border-purple-700 bg-gradient-to-r from-purple-500/10 via-purple-600/15 to-purple-500/10 dark:from-purple-950/40 dark:via-purple-900/50 dark:to-purple-950/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="text-base sm:text-lg font-bold text-purple-950 dark:text-purple-100">
                    {content.ctaTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-900 dark:text-purple-200">
                    {content.ctaDesc}
                  </p>
                </div>
                <Link
                  href="/tools/talker-aac"
                  className="shrink-0 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md flex items-center gap-2"
                >
                  <span>{content.ctaButton}</span>
                </Link>
              </div>
            </section>

            {/* Zone 5: 6-Step Implementation Roadmap */}
            <section id="implementation-roadmap" className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xl font-black text-[#1A202C] dark:text-white">
                  <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  <h2>{content.roadmapTitle}</h2>
                </div>
                <p className="mt-1 text-sm sm:text-base text-[#4A5568] dark:text-[#CBD5E1]">
                  {content.roadmapSubtitle}
                </p>
              </div>

              <div className="space-y-3.5">
                {content.roadmapSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 sm:p-5 rounded-2xl border border-[#E2E8F0] dark:border-[#273748] bg-white dark:bg-[#182330] shadow-xs"
                  >
                    <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-black text-sm flex items-center justify-center border border-purple-200 dark:border-purple-800">
                      {step.num}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-bold text-[#1A202C] dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4A5568] dark:text-[#CBD5E1] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Zone 6: Clinical FAQ Accordion */}
            <section id="clinical-faq" className="space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xl font-black text-[#1A202C] dark:text-white">
                  <ShieldCheck className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  <h2>{content.faqTitle}</h2>
                </div>
                <p className="mt-1 text-sm sm:text-base text-[#4A5568] dark:text-[#CBD5E1]">
                  {content.faqSubtitle}
                </p>
              </div>

              <div className="space-y-3">
                {content.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-[#E2E8F0] dark:border-[#273748] bg-white dark:bg-[#182330] overflow-hidden shadow-xs transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 text-sm sm:text-base font-bold text-[#1A202C] dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-[#718096] transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-purple-600 dark:text-purple-400' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[#4A5568] dark:text-[#CBD5E1] leading-relaxed border-t border-[#E2E8F0] dark:border-[#273748] pt-3.5">
                          <p>{faq.a}</p>
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
