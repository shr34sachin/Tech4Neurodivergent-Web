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
  Monitor,
  Zap,
  Volume2,
  Shuffle,
  AlertCircle,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function SingleTapVsComplexAacGuideClient() {
  const { language } = useLanguage();
  const isNepali = language === 'ne';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Interactive Live Dual-System Simulator State
  const [simulatedState, setSimulatedState] = useState<'fatigue' | 'academic'>('fatigue');
  const [simFeedback, setSimFeedback] = useState<string | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const breadcrumbs = [
    { label: isNepali ? 'गृहपृष्ठ' : 'Home', href: '/' },
    { label: isNepali ? 'निर्देशिकाहरू' : 'Guides', href: '/guides' },
    {
      label: isNepali
        ? 'एकल-ट्याप बनाम जटिल AAC'
        : 'Single-Tap Quick Talkers vs. Complex AAC',
      href: '/guides/single-tap-vs-complex-aac-dual-barriers',
    },
  ];

  const content = {
    badge: isNepali ? 'क्लिनिकल तथा AAC निर्णय ढाँचा' : 'Clinical & AAC Decision Matrix',
    readingTime: isNepali ? '८ मिनेट पढाइ' : '8 min read',
    audience: isNepali ? 'SLP, AT टोली, अभिभावक, विशेष शिक्षक' : 'SLPs, AT Specialists, OTs, Parents, SPED Educators',
    h1Title: isNepali
      ? 'दोहोरो मोटर-बोली अवरोधका लागि एकल-ट्याप क्विक टकर बनाम जटिल AAC'
      : 'Single-Tap Quick Talkers vs. Complex AAC for Dual Motor-Speech Barriers',
    featuredTitle: isNepali ? 'कार्यकारी सारांश र मूल परिभाषा' : 'Executive Summary & Core Definition',
    featuredSnippet: isNepali
      ? 'एकल-ट्याप क्विक टकर (Single-Tap Quick Talker) र जटिल AAC (Complex Dynamic AAC) बीचको छनोट गर्नु भनेको दोहोरो मोटर-बोली अवरोध भएका सिकारुहरूमा सञ्चारको गति (Speed) र भाषिक गहिराइ (Linguistic Depth) बीचको क्लिनिकल सन्तुलन मिलाउनु हो। एकल-ट्याप क्विक टकर भनेको ठूला, निश्चित टार्गेटहरू भएको प्रणाली हो जसले एउटै भौतिक स्पर्शबाट तत्काल पूर्व-संग्रहित सन्देश प्रवाह गर्दछ। यसको विपरित, जटिल AAC भनेको हजारौं शब्दहरू, व्याकरण मचान, र बहु-पृष्ठीय वर्गहरू भएको प्रणाली हो जसले स्वतन्त्र, पूर्ण वाक्य निर्माण गर्न अनुमति दिन्छ।'
      : 'Choosing between single-tap quick talkers and complex AAC systems requires balancing communicative speed against linguistic depth for learners navigating dual motor-speech barriers. A single-tap quick talker is a dedicated device or simplified page set featuring large, fixed targets that deliver immediate messages with a single physical action. In contrast, complex dynamic AAC is a multi-page, robust language system organized into thousands of core and fringe words that allow generative, unrestricted expression.',
    featuredTakeaway: isNepali
      ? 'क्लिनिकल निष्कर्ष: सेरेब्रल पाल्सी (CP), अटिजम, डाउन सिन्ड्रोम, वा बौद्धिक अपाङ्गता (ID) भएका सिकारुहरूमा कुनै एउटा मात्र उपकरण पूर्ण हुँदैन। क्लिनिकल उत्कृष्ट अभ्यास "दोहोरो-प्रणाली वा श्रेणीबद्ध पहुँच ढाँचा" (Dual-System / Tiered Framework) मा आधारित हुन्छ: उच्च-थकान वा संवेदी ओभरलोडको क्षणमा एकल-ट्याप इन्टरफेस, र संज्ञानात्मक तथा शैक्षिक वृद्धिका लागि जटिल AAC को व्यवस्थित प्रयोग।'
      : 'Clinical Takeaway: For learners with Cerebral Palsy (CP), Autism Spectrum Disorder (ASD), Down syndrome, and intellectual disabilities (ID) navigating dual motor-speech barriers, neither tool is universally superior. Clinical best practice relies on a dual-system or tiered access framework: deploying single-tap interfaces for high-urgency, fatigue-heavy moments, while systematically building access to complex AAC for generative language and academic growth.',

    // Sidebar TOC
    tocTitle: isNepali ? 'यस निर्देशिकामा' : 'Table of Contents',
    toc: [
      { id: 'definition', label: isNepali ? 'कार्यकारी सारांश र स्पेक्ट्रम' : 'Executive Summary & Clinical Spectrum' },
      { id: 'interactive-simulator', label: isNepali ? 'दोहोरो-प्रणाली अन्तरक्रियात्मक सिमुलेटर' : 'Live Dual-System Triage Simulator' },
      { id: 'theoretical-foundations', label: isNepali ? 'संज्ञानात्मक-मोटर घर्षण र आधार' : 'Theoretical & Neurodevelopmental Foundation' },
      { id: 'at-continuum', label: isNepali ? '३-तह सहायक प्रविधि कन्टिन्युम' : 'The Role of Assistive Technology (AT)' },
      { id: 'condition-adaptations', label: isNepali ? 'अवस्था अनुसारका विशेष व्यावहारिक अनुकूलनहरू' : 'Condition-Specific Practical Adaptations' },
      { id: 'implementation-roadmap', label: isNepali ? '६-चरण क्लिनिकल कार्यान्वयन मार्गचित्र' : 'Home & Classroom Implementation Guide' },
      { id: 'clinical-faq', label: isNepali ? 'प्रायः सोधिने क्लिनिकल प्रश्नहरू' : 'Frequently Asked Questions (FAQ)' },
    ],

    // ASCII/Architecture Box
    spectrumTitle: isNepali ? 'दोहोरो-प्रणाली क्लिनिकल स्पेक्ट्रम' : 'THE DUAL-SYSTEM CLINICAL SPECTRUM',
    spectrumQuick: isNepali
      ? 'एकल-ट्याप क्विक टकरहरू (Quick Talkers):\n• १ स्पर्श = १ पूर्ण सन्देश\n• न्यून मोटर र संज्ञानात्मक थकान\n• उच्च-अतिआवश्यक / आपतकालीन पहुँच\n• निश्चित र अपरिवर्तनीय टार्गेट स्थान\n• उच्च-थकान र संवेदी संकटका लागि उपयुक्त'
      : 'SINGLE-TAP QUICK TALKERS:\n• 1 Action = Complete Message\n• Low Motor & Cognitive Fatigue\n• High-Urgency / Emergency Access\n• Fixed Target Locations\n• Ideal for High-Fatigue States',
    spectrumComplex: isNepali
      ? 'जटिल गतिशील AAC (Complex Dynamic AAC):\n• बहु-चरण नेभिगेसन र व्याकरण संरचना\n• स्वतन्त्र, असीमित भाषिक अभिव्यक्ति\n• शैक्षिक र सामाजिक साक्षरता विकास\n• गतिशील कोर + फ्रिज शब्दावली\n• कम-थकान र कक्षा सिकाइका लागि उपयुक्त'
      : 'COMPLEX DYNAMIC AAC:\n• Multi-Step Navigation & Syntax\n• Generative, Autonomous Language\n• Academic & Social Literacy\n• Dynamic Core + Fringe Vocabulary\n• Ideal for Low-Fatigue Learning',

    // Theoretical 4-card matrix
    frictionTitle: isNepali ? 'जटिल AAC मा संज्ञानात्मक-मोटर घर्षण' : 'COGNITIVE-MOTOR FRICTION IN COMPLEX AAC',
    frictionSubtitle: isNepali
      ? 'दोहोरो मोटर-बोली अवरोधमा शारीरिक मोटर क्रियान्वयन र अभिव्यक्ति भाषा प्रशोधनले मस्तिष्कको एउटै संज्ञानात्मक ब्यान्डविथ साझा गर्छन्।'
      : 'Dual motor-speech impairments present unique neurodevelopmental challenges because physical motor execution and expressive language processing share underlying cognitive bandwidth.',
    frictionModel: isNepali
      ? 'भाषिक कार्य: वाक्य निर्माण ("मलाई बस्न आवश्यक छ")\n  ├── वर्किङ मेमोरी: पानाहरू खोज्दा वाक्य मस्तिष्कमा सम्झिराख्ने\n  └── कार्यकारी कार्य: नेभिगेसन अनुक्रम (कोटिहरू ──► शरीर)\n\nमोटर कार्य: नेभिगेट गर्ने र भौतिक रूपमा बटन छुने\n  ├── शारीरिक प्रयास: मांसपेशीको कडापन दबाउने / औंला अलग गर्ने\n  └── अक्युलो-मोटर: विभिन्न पानाहरूमा ६०-कोठा भएको भीडभाडयुक्त ग्रिड स्क्यान गर्ने\n\nपरिणाम: मोटर-संज्ञानात्मक ओभरलोड ──► सञ्चार अवरोध / मौनता'
      : 'Linguistic Task: Formulate Sentence ("I need to sit down")\n  ├── Working Memory: Hold sentence in mind while searching pages\n  └── Executive Function: Sequence navigation (Categories ──► Body)\n\nMotor Task: Navigate & Execute Physical Touches\n  ├── Physical Effort: Suppress spasticity / isolate finger\n  └── Ocular-Motor: Scan crowded 60-cell grid across pages\n\nResult: Motor-Cognitive Overload ──► Communication Breakdown / Silence',

    foundationsTitle: isNepali ? 'सैद्धान्तिक र स्नायु-विकासात्मक आधार' : 'Theoretical & Neurodevelopmental Foundation',
    foundations: [
      {
        icon: 'Activity',
        title: isNepali ? 'मोटर अप्राक्सिया र स्नायु-मांसपेशीय स्प्यास्टिसिटी' : 'Motor Apraxia & Neuromuscular Spasticity',
        desc: isNepali
          ? 'सेरेब्रल पाल्सीमा माथिल्लो मोटर न्यूरोनको क्षतिका कारण मांसपेशीहरू अत्यधिक कडा हुन्छन्। जब विद्यार्थीले ४ वटा सब-फोल्डरहरू पार गर्दै ६०-बटन भएको गतिशील AAC ग्रिड नेभिगेट गर्न खोज्छ, प्रत्येक स्क्रिन परिवर्तनले शारीरिक पुनर्सन्तुलन र दृष्टि पुनःकेन्द्रित गर्न बाध्य पार्छ। शारीरिक तनाव धेरै भएमा भाषिक सन्देश पूरा हुनु अगावै मोटर प्रणाली असफल हुन्छ।'
          : 'In cerebral palsy, upper motor neuron lesions cause muscle hypertonicity and involuntary movement overflow. When navigating a 60-location dynamic AAC grid across sub-folders, each transition demands postural recalculation and visual re-orientation. If physical strain becomes too high, the motor system breaks down before the message is complete.',
      },
      {
        icon: 'Brain',
        title: isNepali ? 'वर्किङ मेमोरी भार (Working Memory Load)' : 'Working Memory Load & Navigation',
        desc: isNepali
          ? 'डाउन सिन्ड्रोम र बौद्धिक अपाङ्गता भएका सिकारुहरूमा श्रवण र स्थानिय वर्किङ मेमोरी सीमित हुन सक्छ। जब जटिल AAC मा एउटै शब्द खोज्न ३ पटक नेभिगेट गर्नुपर्छ, बटन खोज्ने क्रममै सिकारुले आफूले भन्न चाहेको मूल विचार बिर्सन्छ।'
          : 'Learners with Down syndrome and ID frequently demonstrate relative limitations in auditory and spatial working memory. When a complex AAC system requires three navigational hits to locate a single word, the original communicative intent can be lost during the search process.',
      },
      {
        icon: 'AlertCircle',
        title: isNepali ? 'इन्टेरोसेप्शन भिन्नता र उच्च-उत्तेजना संकट' : 'Interoception Gaps & High-Arousal Emergencies',
        desc: isNepali
          ? 'तीव्र शारीरिक संकट (जस्तै दुखाइ, पिसाब भरिनु, संवेदी ओभरलोड, श्वासप्रश्वास थकान) को समयमा संज्ञानात्मक ध्यान संकुचित हुन्छ। यस्तो तनावको अवस्थामा सिकारुले बहु-चरण नेभिगेसन गर्न सक्दैन। उसलाई आफ्ना महत्वपूर्ण शारीरिक अवस्था ("दुख्यो", "मद्दत", "स्थान परिवर्तन") व्यक्त गर्न प्रत्यक्ष एकल-ट्याप चाहिन्छ।'
          : 'During states of acute physiological dysregulation (e.g., pain, bladder fullness, sensory overload, respiratory fatigue), interoceptive stress narrows cognitive focus. Under high stress, a learner cannot execute multi-step pathways. They require direct, single-tap access to express critical physiological states.',
      },
      {
        icon: 'Sliders',
        title: isNepali ? 'कार्यकारी अक्षमता र दृश्य भीडभाड (Visual Crowding)' : 'Executive Dysfunction & Visual Crowding',
        desc: isNepali
          ? 'अटिजम र कर्टिकल भिजुअल इम्पेयरमेन्ट (CVI) भएका बालबालिका गतिशील स्क्रिन परिवर्तन र बाक्लो प्रतीक ग्रिडबाट विचलित हुन सक्छन्। जब इन्टरफेसले दृश्य थकान दिन्छ, कार्य प्रारम्भ गर्ने क्षमता रोकिन्छ, जसलाई शिक्षकहरूले सञ्चार इच्छा नभएको भनी गलत अर्थ लगाउन सक्छन्।'
          : 'Autistic learners and individuals with co-occurring Cortical Visual Impairment (CVI) can be overwhelmed by dynamic screen transitions and dense symbol arrays. When an interface triggers visual search fatigue, executive initiation stalls, mimicking a lack of communicative intent.',
      },
    ],

    // 3-tier AT Table
    tableTitle: isNepali ? 'सहायक प्रविधि (AT) को भूमिका' : 'The Role of Assistive Technology (AT)',
    tableSubtitle: isNepali
      ? 'शारीरिक अवस्था, बसाइ, र वातावरणीय सन्दर्भ अनुसार सञ्चारको निरन्तरता सुनिश्चित गर्न प्रविधिलाई तहगत रूपमा विभाजन गर्नुपर्छ।'
      : 'Stratifying assistive technology tools across technology tiers ensures that the learner maintains functional communication across all physical states, seating positions, and environments.',
    tableHeaders: [
      isNepali ? 'AT तह' : 'AT Tier',
      isNepali ? 'एकल-ट्याप क्विक टकर समाधान' : 'Single-Tap Quick Talker Solutions',
      isNepali ? 'जटिल गतिशील AAC समाधान' : 'Complex Dynamic AAC Solutions',
      isNepali ? 'क्लिनिकल उद्देश्य' : 'Clinical Purpose',
    ],
    tableRows: [
      {
        tier: isNepali ? 'निम्न-प्रविधि (Low-Tech)' : 'Low-Tech',
        quick: isNepali
          ? 'एकल-पाना उच्च-कन्ट्रास्ट विषयगत बोर्डहरू; ४-स्थान छनोट कार्डहरू; E-TRAN आई-पोइन्टिङ फ्रेमहरू।'
          : 'Single-sheet high-contrast topic boards; 4-location choice cards; E-TRAN eye-pointing frames.',
        complex: isNepali
          ? 'बहु-पृष्ठीय PODD सञ्चार पुस्तकहरू; विस्तृत कोर-शब्दावली फ्लिपबुकहरू।'
          : 'Multi-page PODD communication books; comprehensive core-vocabulary flipbooks.',
        purpose: isNepali
          ? 'शून्य-ब्याट्री ब्याकअप; हाइड्रोथेरापी/पौडी; आपतकालीन शारीरिक पोजिसनिङ।'
          : 'Zero-battery redundancy; aquatic therapy; emergency physical positioning.',
      },
      {
        tier: isNepali ? 'मध्यम-प्रविधि (Mid-Tech)' : 'Mid-Tech',
        quick: isNepali
          ? 'डिजिटाइज्ड आवाज-उत्पादक बटनहरू (BIGmack, Step-by-Step, GoTalk 4+/9+); बोल्ने टायलहरू (Talking Tiles)।'
          : 'Digitized voice-output buttons (BIGmack, Step-by-Step, GoTalk 4+/9+); talking tiles.',
        complex: isNepali
          ? 'बहु-स्तरीय स्थिर आवाज-उत्पादक उपकरणहरू (GoTalk 20+, QuickTalker 23)।'
          : 'Multi-level static voice-output devices (GoTalk 20+, QuickTalker 23).',
        purpose: isNepali
          ? 'कारण-र-असर सिकाइ; द्रुत कार्यात्मक वाक्यांश पहुँच; न्यून-विचलन वातावरण।'
          : 'Cause-and-effect learning; rapid functional phrase access; low-distraction environments.',
      },
      {
        tier: isNepali ? 'उच्च-प्रविधि (High-Tech)' : 'High-Tech',
        quick: isNepali
          ? 'AAC एपहरूमा पप-अप १-ट्याप "क्विक पेजहरू"; स्विच-आधारित आपतकालीन अलर्टहरू।'
          : 'Pop-up 1-tap "Quick Pages" embedded in AAC apps; switch-latched emergency alerts.',
        complex: isNepali
          ? 'गतिशील AAC सफ्टवेयर (TouchChat, Grid 3, Proloquo2Go, Accent NuVoice)।'
          : 'Dynamic AAC software (TouchChat, Grid 3, Proloquo2Go, Accent with NuVoice).',
        purpose: isNepali
          ? 'स्वतन्त्र भाषिक अभिव्यक्ति; साक्षरता निर्देशन; स्विच वा आई-गेज नियन्त्रण।'
          : 'Autonomous linguistic expression; literacy instruction; switch/eye-gaze control.',
      },
    ],

    // Condition-Specific Adaptations
    conditionsTitle: isNepali ? 'अवस्था अनुसारका विशेष व्यावहारिक अनुकूलनहरू' : 'Condition-Specific Practical Adaptations',
    conditionsSubtitle: isNepali
      ? 'सेरेब्रल पाल्सी, अटिजम, र डाउन सिन्ड्रोममा द्रुत क्विक-पहुँच र जटिल भाषा प्रणाली कसरी संयोजन गरिन्छ।'
      : 'How quick-access tools and robust generative AAC are orchestrated across diverse neurological profiles.',
    conditions: [
      {
        category: isNepali ? 'सेरेब्रल पाल्सी (CP) र मोटर-बोली संयोजन' : 'Cerebral Palsy (CP) & Motor-Speech Intersection',
        badge: isNepali ? 'हाइब्रिड प्रदर्शन र मोटर मचान' : 'Hybrid Displays & Physical Scaffolds',
        color: 'border-purple-300 dark:border-purple-800/60 bg-purple-50/40 dark:bg-purple-950/20',
        items: [
          {
            title: isNepali ? 'हाइब्रिड डिस्प्ले आर्किटेक्चर (स्थिर क्विक-बार)' : 'Hybrid Display Architecture (Permanent Quick Bar)',
            text: isNepali
              ? 'जटिल AAC स्क्रिनको छेउमा सधैं देखिने उच्च-कन्ट्रास्ट एकल-ट्याप "क्विक बार" प्रोग्राम गर्नुहोस्। यसमा कहिल्यै स्थान नबदलिने आपतकालीन बटनहरू ("रोक्नुहोस्", "पोजिसन मिलाउनुहोस्", "दुख्यो", "मलाई केही भन्नु छ") राखिन्छ।'
              : 'Program a permanent, high-contrast single-tap "Quick Bar" along the perimeter of the primary dynamic display. This bar contains non-navigational urgent messages ("Stop," "Reposition," "Pain," "I have something to say") that never shift position.',
          },
          {
            title: isNepali ? 'उच्च-कन्ट्रास्ट दृश्य रनवे ट्र्याकहरू' : 'High-Contrast Visual Runway Tracks',
            text: isNepali
              ? 'आँखा-हेरचाह वा प्रत्यक्ष स्पर्श प्रयोग गर्ने विद्यार्थीका लागि केन्द्रीय आराम बिन्दुबाट बाहिरी बटनहरूसम्म प्रदीप्त दृश्य रेखाहरू राख्नुहोस्, जसले अक्युलोमोटर अप्राक्सियामा आँखा र हातलाई मार्गनिर्देशन गर्छ।'
              : 'Implement high-contrast visual runway tracks—colored luminous guide lines connecting the central rest zone to outer selection boxes on cerebral palsy communication boards, directly supporting ocular-motor apraxia.',
          },
          {
            title: isNepali ? 'मोटर फिल्टरिङ र एक्रिलिक कीगार्डहरू' : 'Motor Filtering & Acrylic Keyguards',
            text: isNepali
              ? 'टचस्क्रीनमा लेजर-कट कीगार्ड जडान गर्नुहोस् र कम्पन वा स्प्यास्टिक टचहरू बेवास्ता गर्न सफ्टवेयरमा ०.८ सेकेन्ड ड्वेल सेलेक्सन वा रिलिज एक्टिभेसन मिलाउनुहोस्।'
              : 'Install laser-cut acrylic keyguards and calibrate touch settings (e.g., 0.8-second dwell selection or release activation) to filter out involuntary spastic taps during direct touchscreen access.',
          },
          {
            title: isNepali ? 'वैकल्पिक पहुँच मार्गहरू (Alternative Access Pathways)' : 'Alternative Access Pathways',
            text: isNepali
              ? 'यदि प्रत्यक्ष स्पर्शले छिट्टै मांसपेशी थकाउँछ भने, जटिल भाषाका लागि ड्युअल-स्विच स्टेप स्क्यानिङ वा आई-गेज प्रयोग गर्नुहोस्, र आपतकालीन आवाजका लागि एकल मेकानिकल स्विच सुरक्षित राख्नुहोस्।'
              : 'If direct touch causes rapid fatigue, transition complex AAC to dual-switch step scanning or calibrated eye-gaze systems, reserving single-tap mechanical switches for urgent vocalization.',
          },
        ],
      },
      {
        category: isNepali ? 'अटिजम स्पेक्ट्रम डिसअर्डर (ASD)' : 'Autism Spectrum Disorder (ASD)',
        badge: isNepali ? 'संवेदी-नियमन र मोटर स्थायित्व' : 'Sensory Regulation & Motor Stability',
        color: 'border-teal-300 dark:border-teal-800/60 bg-teal-50/40 dark:bg-teal-950/20',
        items: [
          {
            title: isNepali ? 'न्यून-उत्तेजक इन्टरफेस (Low-Stimulus Tech)' : 'Low-Stimulus Interfaces',
            text: isNepali
              ? 'अनावश्यक एनिमेसन, ट्रान्जिसन, र विचलित पार्ने आवाजहरू बन्द गरेर संवेदी-सुरक्षित वातावरण सिर्जना गर्नुहोस्।'
              : 'Deploy low-stimulus special education tech by deactivating animated rewards, transitions, and distracting audio feedback that provoke sensory overload.',
          },
          {
            title: isNepali ? 'मोटर-स्थिर गतिशील लेआउटहरू (LAMP Words for Life)' : 'Motor-Stable Dynamic Layouts',
            text: isNepali
              ? 'प्रतीकहरू सधैं एउटै निश्चित स्थानमा रहने मोटर-प्लान पद्धति अपनाउनुहोस्, ताकि जटिल भाषा निर्माण दृश्य खोजमा नभई स्वचालित शारीरिक बानीमा आधारित होस्।'
              : 'Utilize motor-planning-based AAC architectures (such as LAMP Words for Life) where every word has a fixed motor trajectory, ensuring language building relies on consistent physical habits rather than visual search.',
          },
          {
            title: isNepali ? 'द्रुत-पहुँच नियमन बोर्डहरू (Quick-Access Regulation)' : 'Quick-Access Regulation Boards',
            text: isNepali
              ? 'जटिल AAC को साथसाथै संवेदी नियमनका लागि एकल-ट्याप बोर्डहरू ("धेरै चर्को भयो", "विश्राम चाहिन्छ", "मेरो शरीर छिटो चलिरहेको छ") सधैं उपलब्ध गराउनुहोस्।'
              : 'Alongside generative AAC, provide high-visibility single-tap assistive technology for nonverbal autism focused on sensory and emotional regulation ("Too loud," "Need a break," "My body feels fast").',
          },
        ],
      },
      {
        category: isNepali ? 'डाउन सिन्ड्रोम र बौद्धिक अपाङ्गता (ID)' : 'Down Syndrome & Intellectual Disabilities (ID)',
        badge: isNepali ? 'ठोस तस्विर र अनुक्रमिक टकर' : 'Concrete Imagery & Sequenced Talkers',
        color: 'border-amber-300 dark:border-amber-800/60 bg-amber-50/40 dark:bg-amber-950/20',
        items: [
          {
            title: isNepali ? 'ठोस तस्विर मिलान (Concrete Icon Matching)' : 'Concrete Icon Matching',
            text: isNepali
              ? 'अमूर्त प्रतीकहरूलाई वास्तविक वस्तुका सफा तस्विरहरूसँग जोडेर संज्ञानात्मक अनुवाद भार कम गर्नुहोस्।'
              : 'Pair abstract language symbols on AAC devices with concrete, clear photographs of familiar objects to lower cognitive translation requirements.',
          },
          {
            title: isNepali ? 'दैनिक क्रियाकलाप (ADL) का लागि अनुक्रमिक टकर' : 'Sequenced Step Talkers for ADLs',
            text: isNepali
              ? 'हात धुने वा लुगा लगाउने कार्य विश्लेषणमा एकल बोल्ने टायल थिच्दा तत्काल अर्को निर्देशन बज्ने प्रणाली लागू गर्नुहोस्।'
              : 'Integrate mid-tech sequential quick talkers into task analysis ADL routines. During handwashing or dressing, pressing a single talking tile plays the immediate auditory instruction, reinforcing the sequence.',
          },
          {
            title: isNepali ? 'क्रमबद्ध शब्दावली विस्तार (Graduated Expansion)' : 'Graduated Vocabulary Expansion',
            text: isNepali
              ? 'सुरुमा ४ देखि ८ वटा ठूला एकल-ट्याप बटनहरूबाट सुरु गर्नुहोस् र दक्षता बढेपछि मात्र स्थान स्थिर राख्दै जटिल कोर-वर्ड प्रणालीतर्फ विस्तार गर्नुहोस्।'
              : 'Start with simplified, large-target single-tap boards (4–8 items) and systematically expand to complex dynamic core-word systems as mastery develops, maintaining consistent icon locations throughout.',
          },
        ],
      },
    ],

    // 6-step Implementation Guide
    roadmapTitle: isNepali ? 'गृह तथा कक्षाकोठा कार्यान्वयन गाइड' : 'Home and Classroom Implementation Guide',
    roadmapSubtitle: isNepali
      ? 'उपकरण परित्याग रोक्न र दोहोरो-प्रणालीको सफल व्यवस्थापनका लागि ६-चरणको क्लिनिकल विधि।'
      : 'Implementing a tiered communication framework requires systematic planning to avoid device abandonment and communicative frustration.',
    roadmapSteps: [
      {
        num: '1',
        title: isNepali ? 'वातावरणीय तथा मोटर थकान अडिट' : 'Environmental & Motor Fatigue Baseline Audit',
        desc: isNepali
          ? 'दिनभरि विद्यार्थीको शारीरिक क्षमता ट्र्याक गर्नुहोस्। कुन समयमा थकान उच्च हुन्छ (जस्तै दिउँसोको खाजापछि वा फिजियोथेरापीपछि) पत्ता लगाउनुहोस् र ती समयमा क्विक-टकर प्रयोग गर्ने योजना बनाउनुहोस्।'
          : 'Track the learner’s physical performance throughout the day. Document when fatigue peaks (e.g., late afternoon, post-physical therapy). If motor accuracy drops by 40% after lunch, plan for quick-access tools during those specific windows.',
      },
      {
        num: '2',
        title: isNepali ? 'बहु-विषयगत विशेषता मिलान (Feature Matching: OT/PT/SLP)' : 'Multi-Disciplinary Feature Matching (OT/PT/SLP)',
        desc: isNepali
          ? 'OT र PT ले ९०-९०-९० बसाइ नियमको पालना गर्दै प्राथमिक मोटर पहुँच बिन्दु निर्धारण गर्छन्। SLP ले भाषिक बुझाइ मूल्यांकन गरी उपयुक्त प्रतीक र शब्दावली छनोट गर्दछन्।'
          : 'Collaborate across the clinical team. The OT and PT establish seating ergonomics (adhering to 90-90-90 pelvic and foot support) and identify the primary motor access site. The SLP evaluates linguistic comprehension and selects vocabulary architecture.',
      },
      {
        num: '3',
        title: isNepali ? 'दोहोरो-प्रणाली पूर्वाधार स्थापना' : 'Setup Dual-System Infrastructure (Quick vs. Complex)',
        desc: isNepali
          ? 'एकल-ट्याप र जटिल AAC लाई परस्पर विरोधी नठान्नुहोस्। कक्षाकोठा सिकाइका लागि उच्च-प्रविधि गतिशील उपकरण राख्नुहोस्, तर ह्वीलचेयर वा ओछ्यानमा तत्काल पहुँचका लागि समर्पित मिड-टेक क्विक टकर वा बोर्ड जडान गर्नुहोस्।'
          : 'Do not view single-tap talkers and complex AAC as mutually exclusive. Configure the dynamic high-tech device for rich classroom and social learning, but mount a dedicated mid-tech quick talker to the wheelchair or bed for rapid access.',
      },
      {
        num: '4',
        title: isNepali ? 'वयस्क मोडलिङ (Aided Language Stimulation)' : 'Adult Modeling via Aided Language Stimulation',
        desc: isNepali
          ? 'सञ्चार साझेदारहरूले बच्चाबाट तत्काल जवाफको आशा नगरी दुवै प्रणाली प्रयोग गरेर देखाउनुपर्छ। जटिल प्रणालीमा कुरा गर्दै शब्दहरू देखाउनुहोस् र तनावको बेला क्विक बटन मोडेल गर्नुहोस्।'
          : 'Communication partners must actively model both systems without requiring immediate learner imitation. Speak while selecting words on the complex AAC system, and model using quick-access buttons during transitions or moments of dysregulation.',
      },
      {
        num: '5',
        title: isNepali ? 'व्यवस्थित पहुँच तालिम र मचान' : 'Systematic Access Training & Scaffolding',
        desc: isNepali
          ? 'थकान कम भएको र अत्यधिक उत्प्रेरक गतिविधिहरूमा जटिल AAC अभ्यास सुरु गर्नुहोस्। जब विद्यार्थी थाकेको, तनावग्रस्त वा अपरिचित वातावरणमा हुन्छ, तब एकल-ट्याप प्रणालीलाई प्राथमिकता दिनुहोस्।'
          : 'Begin complex AAC practice in low-stakes, highly motivating activities where physical fatigue is low. Reserve single-tap systems for times when the learner is dysregulated, fatigued, or in unfamiliar environments.',
      },
      {
        num: '6',
        title: isNepali ? 'वातावरणीय एकरूपता र नियमित समीक्षा' : 'Cross-Environment Standardization & Review',
        desc: isNepali
          ? 'घर, विशेष शिक्षा कक्षाकोठा, र थेरापी क्लिनिकहरूमा उही शब्दावली संगठन, रङ कोडिङ, स्विच सेटअप, र आपतकालीन वाक्यांशहरू प्रतिविम्बित भएको सुनिश्चित गर्नुहोस्।'
          : 'Ensure the same vocabulary organization, color coding, switch setups, and emergency phrases are mirrored across home, special education classrooms, and therapy clinics.',
      },
    ],

    // Clinical FAQ
    faqTitle: isNepali ? 'प्रायः सोधिने क्लिनिकल प्रश्नहरू (FAQ)' : 'Frequently Asked Questions (FAQ)',
    faqSubtitle: isNepali
      ? 'एकल-ट्याप क्विक टकर, जटिल AAC, र दोहोरो मोटर-बोली अवरोध सम्बन्धी वैज्ञानिक आधारहरू।'
      : 'Evidence-based insights into quick talkers, generative dynamic AAC, keyguards, and fatigue management.',
    faqs: [
      {
        q: isNepali
          ? 'शिक्षक तथा सहयोगी टोलीले जटिल AAC को सट्टा एकल-ट्याप क्विक टकर कहिले रोज्नुपर्छ?'
          : 'When should a clinical team choose a single-tap quick talker over complex AAC?',
        a: isNepali
          ? 'एकल-ट्याप क्विक टकर तब सिफारिस गरिन्छ जब सिकारुले गम्भीर मोटर थकान, अत्यधिक संज्ञानात्मक तनाव, वा स्वास्थ्य संवेदनशीलता महसुस गर्छ, जहाँ जटिल प्रणाली नेभिगेट गर्दा सञ्चार नै असम्भव बन्छ। यद्यपि, यसलाई एक्लै प्रयोग गर्नु हुँदैन; क्लिनिकल उत्कृष्ट अभ्यासले अतिआवश्यक आवश्यकताका लागि क्विक टकर र भाषिक विकासका लागि जटिल AAC दुवैलाई सँगसँगै अगाडि बढाउँछ।'
          : 'A single-tap quick talker is indicated when a learner experiences severe motor fatigue, high cognitive stress, or medical fragility where navigating a complex system prevents functional communication. However, it should rarely be used in isolation; clinical best practice pairs quick talkers for high-priority needs with ongoing instruction in complex AAC for generative language.',
      },
      {
        q: isNepali
          ? 'के AAC को प्रयोगले न्युरोडाइभर्जेन्ट बालबालिकामा प्राकृतिक बोली विकास रोक्छ?'
          : 'Can using AAC prevent natural speech development in neurodivergent children?',
        a: isNepali
          ? 'हुँदैन। विस्तृत शैक्षिक अनुसन्धानले पुष्टि गर्दछ कि AAC ले बोली विकासलाई रोक्दैन, बरु यसलाई सक्रिय रूपमा मद्दत गर्छ। दृश्य प्रतीक, संश्लेषित आवाज, र मोटर कार्यहरू संयोजन गरेर, AAC ले सञ्चार निराशा घटाउँछ, वाक्य संरचनाको मोडेल दिन्छ, र प्रायः स्वाभाविक मौखिक आवाजहरूलाई उत्प्रेरित गर्दछ।'
          : 'No. Comprehensive empirical research shows that AAC does not inhibit speech development; it actively supports it. By pairing visual icons, synthesized voice output, and motor actions, AAC reduces communicative frustration, models sentence structure, and often encourages natural vocalization.',
      },
      {
        q: isNepali
          ? 'दृश्य तालिकाहरू (Visual Schedules) ले डाउन सिन्ड्रोम र बौद्धिक अपाङ्गता भएका विद्यार्थीलाई कसरी मद्दत गर्छन्?'
          : 'How do visual schedules help students with Down syndrome and intellectual disabilities?',
        a: isNepali
          ? 'दृश्य तालिकाहरूले अमूर्त मौखिक निर्देशनहरूलाई स्थायी दृश्य संकेतमा रूपान्तरण गर्दछन्। डाउन सिन्ड्रोम भएका व्यक्तिहरूमा श्रवण वर्किङ मेमोरीको तुलनामा दृश्य-स्थानिय प्रशोधन बलियो हुने भएकाले, दृश्य तालिकाहरूले दैनिक दिनचर्यालाई अनुमानयोग्य बनाउँछन्, संक्रमणकालीन चिन्ता घटाउँछन्, र स्वतन्त्र कार्य थालनीलाई समर्थन गर्दछन्।'
          : 'Visual schedules translate abstract verbal instructions into persistent visual markers. Because individuals with Down syndrome typically have relative strengths in visual-spatial processing compared to auditory working memory, visual schedules make daily routines predictable, reduce transition anxiety, and support independent task initiation.',
      },
      {
        q: isNepali
          ? 'दृश्य रनवे ट्र्याकहरूले सेरेब्रल पाल्सी भएका सिकारुहरूलाई कसरी मद्दत गर्छन्?'
          : 'How do visual runway tracks assist learners with cerebral palsy?',
        a: isNepali
          ? 'उच्च-कन्ट्रास्ट दृश्य रनवे ट्र्याकहरू डिजिटल स्क्रिन वा सञ्चार बोर्डमा राखिएका चम्किला मार्गदर्शक रेखाहरू हुन्। यिनीहरूले केन्द्रीय सुरुआती विन्दुबाट लक्षित बटनहरूसम्म दृश्य बाटो प्रदान गर्दछन्, जसले गर्दा अक्युलोमोटर अप्राक्सिया वा CVI भएका व्यक्तिहरूमा दृश्य खोजको थकान घट्छ र आँखा वा हातलाई सिधै लक्ष्यतर्फ पुर्याउन मद्दत गर्छ।'
          : 'High-contrast visual runway tracks are luminous guide lines embedded into digital screens or physical communication boards. They provide a visual path from a central starting point to target selection buttons, reducing visual search fatigue and helping learners with ocular-motor apraxia or Cortical Visual Impairment (CVI) direct their gaze or hand accurately.',
      },
      {
        q: isNepali
          ? 'मोटर अपाङ्गतामा जटिल AAC का लागि कीगार्ड (Keyguards) को भूमिका के हो?'
          : 'What is the role of keyguards in complex AAC for motor impairments?',
        a: isNepali
          ? 'कीगार्डहरू टचस्क्रीनमाथि राखिएका एक्रिलिक वा प्लास्टिकका भौतिक प्लेटहरू हुन्, जसमा प्रत्येक बटनका लागि प्वालहरू काटिएका हुन्छन्। यिनीहरूले प्रयोगकर्ताको हातलाई अड्याउने ठाउँ दिन्छन्, मांसपेशीको कम्पन वा कडापनबाट हुने आकस्मिक छनोट रोक्छन्, र औंलालाई सिधै लक्षित बटनको गहिराइमा पुग्न मार्गदर्शन गर्दछन्।'
          : 'Keyguards are physical acrylic or plastic plates mounted over touchscreens with cutouts for each interactive button. They provide a resting surface for the user’s hand, prevent accidental selections caused by muscle spasticity or tremors, and guide isolated fingers directly into target selection zones, making complex grids accessible for users with motor coordination differences.',
      },
    ],

    // Tools CTA
    ctaTitle: isNepali ? 'हाम्रो Quick Talker AAC उपकरण प्रयोग गर्नुहोस्' : 'Try the Dual-Mode Quick Talker AAC Web App',
    ctaDesc: isNepali
      ? 'उच्च-कन्ट्रास्ट रङ प्यालेट, ठूला एकल-ट्याप टार्गेटहरू, र मोटर-मैत्री लेआउट सहितको हाम्रो निःशुल्क Quick Talker AAC ब्राउजरमै चलाउनुहोस्।'
      : 'Access our free sensory-safe Quick Talker AAC featuring single-tap emergency communication, high-contrast visual runway layouts, and synthesized voice outputs.',
    ctaButton: isNepali ? 'Quick Talker AAC खोल्नुहोस् →' : 'Launch Quick Talker AAC →',
  };

  // Live Dual-System Triage Simulator Handler
  const handleSimAction = (actionName: string) => {
    if (simulatedState === 'fatigue') {
      setSimFeedback(
        isNepali
          ? `[एकल-ट्याप सुरक्षा सक्रिय]: "${actionName}" सन्देश तत्काल १ स्पर्शमै प्रवाह भयो। कुनै फोल्डर खोज्नु परेन, शून्य मोटर थकान।`
          : `[Single-Tap Urgent Dispatch]: "${actionName}" delivered instantly in 1 physical action. 0 page search required, minimal motor fatigue.`
      );
    } else {
      setSimFeedback(
        isNepali
          ? `[जटिल AAC अन्वेषण]: "${actionName}" बहु-शब्द कोर वाक्य निर्माण सुरु भयो। भाषिक गहिराइ र साक्षरता अभ्यास सक्रिय।`
          : `[Complex AAC Generative]: "${actionName}" opened rich core-word category. Generative syntax and autonomous expression enabled.`
      );
    }
    setTimeout(() => setSimFeedback(null), 4500);
  };

  return (
    <article className="min-h-screen bg-[#FDFBF7] dark:bg-[#111821] text-[#2D3748] dark:text-[#E2E8F0] transition-colors duration-300">
      {/* 1. Header Zone */}
      <header className="border-b border-[#E2E8F0] dark:border-[#273748] bg-white/70 dark:bg-[#182330]/70 backdrop-blur-md pt-8 pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-semibold">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
              <Shuffle className="h-3.5 w-3.5" />
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

          <h1 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#1A202C] dark:white leading-tight">
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
            {/* Zone 1: Spectrum Comparison */}
            <section id="definition" className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-black text-[#1A202C] dark:text-white">
                <Shuffle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                <h2>{content.spectrumTitle}</h2>
              </div>
              <p className="text-sm sm:text-base text-[#4A5568] dark:text-[#CBD5E1] leading-relaxed">
                {isNepali
                  ? 'एकल-ट्याप क्विक टकर र जटिल गतिशील AAC बीचको आधारभूत क्लिनिकल भिन्नता र तिनीहरूको सही प्रयोग क्षेत्र:'
                  : 'Comparing the functional divergence between rapid single-tap communicators and generative complex dynamic language suites:'}
              </p>

              {/* Graphical Comparison Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Single-Tap Card */}
                <div className="rounded-2xl border-2 border-amber-300 dark:border-amber-800/60 bg-amber-50/40 dark:bg-amber-950/20 p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/50 px-2 py-0.5 rounded">
                      {isNepali ? 'एकल-ट्याप क्विक टकर' : 'Single-Tap Quick Talker'}
                    </span>
                    <span className="text-xs text-amber-700 dark:text-amber-400 font-semibold">
                      {isNepali ? 'शून्य नेभिगेसन' : 'Zero Page Search'}
                    </span>
                  </div>
                  <div className="bg-[#FAF7EE] dark:bg-[#111821] p-4 rounded-xl border border-amber-200 dark:border-amber-900/40 flex items-center justify-center gap-2">
                    <div className="px-3 py-2 rounded-lg bg-amber-500 text-white font-black text-xs flex items-center gap-1.5 shadow-sm">
                      <Zap className="h-4 w-4" />
                      {isNepali ? '१-स्पर्श = सन्देश' : '1 Tap = Full Message'}
                    </div>
                  </div>
                  <p className="text-xs text-[#4A5568] dark:text-[#CBD5E1] leading-relaxed whitespace-pre-line">
                    {content.spectrumQuick}
                  </p>
                </div>

                {/* Complex AAC Card */}
                <div className="rounded-2xl border-2 border-purple-300 dark:border-purple-800/60 bg-purple-50/40 dark:bg-purple-950/20 p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-800 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/50 px-2 py-0.5 rounded">
                      {isNepali ? 'जटिल गतिशील AAC' : 'Complex Dynamic AAC'}
                    </span>
                    <span className="text-xs text-purple-700 dark:text-purple-400 font-semibold">
                      {isNepali ? 'स्वतन्त्र व्याकरण' : 'Generative Syntax'}
                    </span>
                  </div>
                  <div className="bg-[#FAF7EE] dark:bg-[#111821] p-4 rounded-xl border border-purple-200 dark:border-purple-900/40 flex items-center justify-center gap-2">
                    <div className="px-3 py-2 rounded-lg bg-purple-600 text-white font-black text-xs flex items-center gap-1.5 shadow-sm">
                      <Brain className="h-4 w-4" />
                      {isNepali ? 'हजारौं कोर शब्दहरू' : 'Thousands of Words'}
                    </div>
                  </div>
                  <p className="text-xs text-[#4A5568] dark:text-[#CBD5E1] leading-relaxed whitespace-pre-line">
                    {content.spectrumComplex}
                  </p>
                </div>
              </div>
            </section>

            {/* Interactive Dual-System Triage Simulator */}
            <section id="interactive-simulator" className="rounded-2xl border-2 border-purple-400/60 dark:border-purple-500/40 bg-purple-50/30 dark:bg-[#182330] p-6 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Shuffle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  <h2 className="text-lg sm:text-xl font-bold text-[#1A202C] dark:text-white">
                    {isNepali ? 'प्रत्यक्ष सिमुलेटर: थकान स्तर अनुसार सञ्चार चयन' : 'Live Dual-System Triage & Fatigue Simulator'}
                  </h2>
                </div>
                {/* State Toggle */}
                <div className="flex items-center rounded-lg border border-[#E2E8F0] dark:border-[#273748] p-1 bg-white dark:bg-[#111821] text-xs font-bold">
                  <button
                    onClick={() => setSimulatedState('fatigue')}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      simulatedState === 'fatigue'
                        ? 'bg-amber-500 text-white shadow-xs'
                        : 'text-[#4A5568] dark:text-[#CBD5E1]'
                    }`}
                  >
                    {isNepali ? 'उच्च थकान / संकट' : 'High Fatigue / Crisis'}
                  </button>
                  <button
                    onClick={() => setSimulatedState('academic')}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      simulatedState === 'academic'
                        ? 'bg-purple-600 text-white shadow-xs'
                        : 'text-[#4A5568] dark:text-[#CBD5E1]'
                    }`}
                  >
                    {isNepali ? 'संज्ञानात्मक / शैक्षिक' : 'Low Fatigue / Academic'}
                  </button>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4A5568] dark:text-[#CBD5E1]">
                {simulatedState === 'fatigue'
                  ? isNepali
                    ? 'अहिले सिकारु उच्च थकान वा संवेदी ओभरलोडको अवस्थामा छ। यस्तो बेला १-स्पर्शमै अतिआवश्यक सन्देश प्रवाह हुनुपर्छ:'
                    : 'The learner is currently in a high-fatigue or dysregulated state. Notice how large single-tap targets bypass motor spasticity and cognitive searching:'
                  : isNepali
                    ? 'अहिले सिकारु आरामदायी र कम-थकान अवस्थामा छ। अब हजारौं कोर शब्दहरूको प्रयोग गरी पूर्ण वाक्य निर्माण गर्न सकिन्छ:'
                    : 'The learner is rested with optimal core stability. Robust multi-word generative sentence formulation is now accessible:'}
              </p>

              {/* Dynamic Triage Display */}
              <div className="rounded-xl p-5 sm:p-6 border-2 border-purple-200 dark:border-purple-800 bg-[#FAF7EE] dark:bg-[#111821]">
                {simulatedState === 'fatigue' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      onClick={() => handleSimAction(isNepali ? 'दुख्यो / असहज भयो' : 'In Pain / Discomfort')}
                      className="p-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm flex flex-col items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <AlertCircle className="h-6 w-6" />
                      <span>{isNepali ? 'दुख्यो (Pain)' : 'In Pain'}</span>
                    </button>
                    <button
                      onClick={() => handleSimAction(isNepali ? 'मद्दत गर्नुहोस्' : 'Need Help')}
                      className="p-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm flex flex-col items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <Zap className="h-6 w-6" />
                      <span>{isNepali ? 'मद्दत (Help)' : 'Need Help'}</span>
                    </button>
                    <button
                      onClick={() => handleSimAction(isNepali ? 'विश्राम चाहिन्छ' : 'Need a Break')}
                      className="p-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm flex flex-col items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <Volume2 className="h-6 w-6" />
                      <span>{isNepali ? 'विश्राम (Break)' : 'Need Break'}</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {['I want', 'to read', 'about space', 'with teacher', 'more', 'please'].map((word, i) => (
                        <button
                          key={i}
                          onClick={() => handleSimAction(word)}
                          className="px-3.5 py-2 rounded-lg bg-white dark:bg-[#182330] border border-purple-300 dark:border-purple-700 hover:border-purple-500 text-xs font-bold text-purple-900 dark:text-purple-200 transition-all shadow-xs cursor-pointer"
                        >
                          {word}
                        </button>
                      ))}
                    </div>
                    <span className="text-[11px] text-[#718096] dark:text-[#94A3B8] font-mono block">
                      {isNepali
                        ? 'कोर + फ्रिज शब्दावली संरचना (Core Vocabulary Syntax Mode)'
                        : 'Core + Fringe Generative Grammar Workspace'}
                    </span>
                  </div>
                )}
              </div>

              {/* Feedback Alert */}
              {simFeedback && (
                <div className="p-3.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm font-bold flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{simFeedback}</span>
                </div>
              )}
            </section>

            {/* Zone 2: Theoretical Foundations & Cognitive-Motor Friction */}
            <section id="theoretical-foundations" className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xl font-black text-[#1A202C] dark:text-white">
                  <Brain className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  <h2>{content.foundationsTitle}</h2>
                </div>
                <p className="mt-1 text-sm sm:text-base text-[#4A5568] dark:text-[#CBD5E1]">
                  {content.frictionSubtitle}
                </p>
              </div>

              {/* Friction Architecture Box */}
              <div className="rounded-2xl border-2 border-red-300 dark:border-red-900/60 bg-red-50/40 dark:bg-red-950/20 p-5 space-y-3">
                <div className="flex items-center gap-2 text-red-800 dark:text-red-300 font-bold text-sm">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <h3>{content.frictionTitle}</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4A5568] dark:text-[#CBD5E1] font-mono whitespace-pre-line leading-relaxed bg-white/70 dark:bg-[#111821]/80 p-3.5 rounded-xl border border-red-200 dark:border-red-900/40">
                  {content.frictionModel}
                </p>
              </div>

              {/* 4 Pillars Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {content.foundations.map((item, idx) => (
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
                ))}
              </div>
            </section>

            {/* Zone 3: 3-Tier AT Table */}
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
                          {row.quick}
                        </td>
                        <td className="p-3.5 sm:p-4 text-[#4A5568] dark:text-[#CBD5E1] align-top leading-relaxed">
                          {row.complex}
                        </td>
                        <td className="p-3.5 sm:p-4 text-[#4A5568] dark:text-[#CBD5E1] align-top leading-relaxed">
                          {row.purpose}
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
