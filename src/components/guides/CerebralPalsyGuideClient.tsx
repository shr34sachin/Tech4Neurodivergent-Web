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
  Compass,
  HelpCircle,
  FolderSync,
  Hand,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function CerebralPalsyGuideClient() {
  const { language } = useLanguage();
  const isNepali = language === 'ne';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const breadcrumbs = [
    { label: isNepali ? 'गृहपृष्ठ' : 'Home', href: '/' },
    { label: isNepali ? 'निर्देशिकाहरू' : 'Guides', href: '/guides' },
    {
      label: isNepali
        ? 'सेरेब्रल पाल्सी अनुकूलित प्रविधि'
        : 'Cerebral Palsy Adaptive Tech Guide',
      href: '/guides/adaptive-tech-for-cerebral-palsy',
    },
  ];

  const content = {
    badge: isNepali ? 'क्लिनिकल तथा शैक्षिक निर्देशिका' : 'Clinical & Educational Guide',
    readingTime: isNepali ? '८ मिनेट पढाइ' : '8 min read',
    audience: isNepali ? 'अभिभावक, PT, OT, SLP, शिक्षक' : 'Parents, PTs, OTs, SLPs, Teachers',
    h1Title: isNepali
      ? 'सेरेब्रल पाल्सीका लागि अनुकूलित प्रविधि: फाइन मोटर असन्तुलन र बोली अप्राक्सियाको समाधान'
      : 'Adaptive Tech for Cerebral Palsy: Navigating Fine Motor Incoordination and Speech Apraxia',
    featuredTitle: isNepali ? 'कार्यकारी सारांश र मूल परिभाषा' : 'Executive Summary & Core Definition',
    featuredSnippet: isNepali
      ? 'सेरेब्रल पाल्सी (CP) का लागि अनुकूलित प्रविधि (Adaptive Technology) भनेको स्नायु-मांसपेशीय मोटर कमजोरी, फाइन मोटर असन्तुलन, र बोली अप्राक्सियालाई सिकारुमाथि अनावश्यक संज्ञानात्मक भार नथपी बाइपास गर्न डिजाइन गरिएको भौतिक, सञ्चारमूलक, र डिजिटल उपकरणहरूको इन्जिनियरिङ प्रणाली हो। सेरेब्रल पाल्सी प्रारम्भिक मस्तिष्क विकासमा आउने अवरोधका कारण उत्पन्न हुने गैर-प्रगतिशील स्नायु-मोटर अवस्था हो, जसले मांसपेशीको टोन (Spasticity, Dystonia, Hypotonia), शारीरिक सन्तुलन, र ऐच्छिक चालहरूलाई असर गर्दछ।'
      : 'Adaptive technology for cerebral palsy (CP) refers to an engineered ecosystem of physical, communicative, and digital tools designed to bypass neuromuscular motor impairments, fine motor incoordination, and speech apraxia without placing unnecessary cognitive demands on the learner. Cerebral palsy is a non-progressive neuromotor condition affecting muscle tone (spasticity, dystonia, hypotonia), postural control, and voluntary motor execution.',
    featuredTakeaway: isNepali
      ? 'क्लिनिकल निष्कर्ष: बोलीका मांसपेशीहरू प्रभावित हुँदा डिस्आर्थ्रिया वा अप्राक्सियाले सिकारुको बुझ्ने क्षमता र शारीरिक अभिव्यक्ति क्षमताबीच ठूलो खाडल सिर्जना गर्न सक्छ। विशेष सञ्चार बोर्ड, स्विच-स्क्यानिङ, र आँखा-हेरचाह (Eye-Gaze) AAC ले यो शारीरिक अवरोध हटाएर बौद्धिक क्षमता अनुसारको पूर्ण अभिव्यक्ति सुनिश्चित गर्दछ।'
      : 'Clinical Takeaway: Childhood dysarthria or speech apraxia can create a profound discrepancy between internal understanding and physical expression. Specialized cerebral palsy communication boards, switch-access workflows, and eye-gaze AAC eliminate physical barriers, empowering learners to express their true cognitive potential without physical access fatigue.',

    // Sidebar TOC
    tocTitle: isNepali ? 'यस निर्देशिकामा' : 'Table of Contents',
    tocLinks: [
      { id: 'foundations', label: isNepali ? 'स्नायु-विकासात्मक तथा मोटर आधारहरू' : 'Theoretical & Neurodevelopmental Foundation' },
      { id: 'continuum', label: isNepali ? 'सहायक प्रविधि (AT) स्पेक्ट्रम' : 'AT Continuum Matrix' },
      { id: 'condition-specific', label: isNepali ? 'अवस्था-विशिष्ट अनुकूलनहरू' : 'Condition-Specific Adaptations' },
      { id: 'implementation', label: isNepali ? 'कार्यान्वयन गाइड (९०-९०-९० नियम)' : 'Implementation Guide (90-90-90)' },
      { id: 'faq', label: isNepali ? 'क्लिनिकल सोधपुछ तथा FAQ' : 'Clinical FAQ' },
    ],

    // Section 1: Foundations
    foundationsTitle: isNepali ? 'सैद्धान्तिक तथा स्नायु-विकासात्मक आधारहरू' : 'Theoretical & Neurodevelopmental Foundation',
    foundationsIntro: isNepali
      ? 'प्रभावकारी अनुकूलित हस्तक्षेपहरू डिजाइन गर्न शिक्षक तथा सहयोगी टोलीहरूले मोटर कार्यसम्पादन, बोली मोटर योजना, संवेदी प्रतिक्रिया लुपहरू, र संज्ञानात्मक क्षमताबीच स्पष्ट भिन्नता बुझ्न आवश्यक छ:'
      : 'To design effective adaptive interventions, educators and caregivers must differentiate between motor performance, speech motor planning, sensory feedback loops, and cognitive capacity:',
    foundationsCards: [
      {
        title: isNepali ? 'पिरामिडल बनाम एक्स्ट्रापिरामिडल मोटर अवरोध' : 'Pyramidal vs. Extrapyramidal Motor Disruption',
        desc: isNepali
          ? 'स्प्यास्टिक सीपी (पिरामिडल) मा मांसपेशीको कडापन र सीमित चालका कारण सामान्य ट्याप गर्न पनि अत्यधिक प्रयास चाहिन्छ। डिस्काइनेटिक वा एथेटोइड सीपी (एक्स्ट्रापिरामिडल) मा अनैच्छिक, अप्रत्याशित चालहरू आउने भएकाले स्क्रिन वा स्विचसँग लगातार स्थिर सम्पर्क राख्न कठिन हुन्छ।'
          : 'Spastic CP (pyramidal) creates hypertonicity, muscle stiffness, and restricted range of motion, turning standard tapping into high-effort events. Dyskinetic or athetoid CP (extrapyramidal) introduces involuntary, fluctuating movements, making sustained physical contact difficult without stabilization.',
      },
      {
        title: isNepali ? 'बोली अप्राक्सिया बनाम डिस्आर्थ्रिया (Speech Apraxia vs. Dysarthria)' : 'Speech Apraxia vs. Dysarthria',
        desc: isNepali
          ? 'बोली अप्राक्सिया एक स्नायु मोटर-योजना समस्या हो जहाँ मस्तिष्कले बोलीका मांसपेशीहरूलाई समन्वय गर्न सक्दैन, यद्यपि मांसपेशीहरू आफैं बलिया हुन्छन्। डिस्आर्थ्रियामा भने मुख र जिब्रोका मांसपेशीहरू नै कमजोर वा असन्तुलित हुन्छन्। दुवै अवस्थामा बुझ्ने क्षमता सामान्य भए पनि बोल्न कठिन हुन्छ। बोली अस्पष्ट भएकै आधारमा बौद्धिक कमजोरी मान्नु गम्भीर शैक्षिक भूल हो।'
          : 'Speech apraxia is a neurological motor-planning deficit where the brain struggles to coordinate sequential articulation movements, despite intact vocal muscles. Dysarthria involves actual oral-motor muscular weakness. In both, receptive comprehension often far exceeds spoken output; assuming cognitive impairment creates severe disadvantage.',
      },
      {
        title: isNepali ? 'मोटर क्षतिपूर्तिबाट कार्यस्मरण थकान' : 'Working Memory Exhaustion from Motor Compensation',
        desc: isNepali
          ? 'जब विद्यार्थीले आफ्नो ९०% मानसिक ध्यान केवल शारीरिक स्थिरता कायम गर्न, नाडी तन्काउन, र एउटा औंला छुट्ट्याउनमा लगाउनुपर्छ, शैक्षिक विषयवस्तु प्रशोधन गर्न दिमागमा ऊर्जा बाँकी रहँदैन। शारीरिक पहुँचको थकानले नै विद्यार्थीलाई संज्ञानात्मक रूपमा असफल देखाउन सक्छ।'
          : 'When a student must dedicate 90% of conscious attention to physical stabilization and isolating a single finger, remaining working memory capacity for academic content drops dramatically. Physical access fatigue directly mimics cognitive failure.',
      },
      {
        title: isNepali ? 'अन्तर-इन्द्रिय खाडल र बसाइको असहजता' : 'Interoception Gaps & Postural Discomfort',
        desc: isNepali
          ? 'दीर्घकालीन मांसपेशी स्प्यास्टिसिटी, ग्यास्ट्रोइसोफेजियल रिफ्लक्स, र हिपको असन्तुलनले शारीरिक पीडा दिन्छ। शारीरिक स्थिरता र सही बसाइ नभएसम्म सिकारुले शैक्षिक वा सञ्चार कार्यमा ध्यान केन्द्रित गर्न सक्दैन।'
          : 'Chronic spasticity, gastrointestinal reflux, and hip displacement frequently alter interoception. Learners managing physical pain or postural instability cannot adequately attend to communicative tasks until their physiological positioning is stabilized.',
      },
      {
        title: isNepali ? 'कोर्टिकल भिजुअल इम्पेयरमेन्ट (CVI) र अकुलोमोटर अप्राक्सिया' : 'Cortical Visual Impairment (CVI) & Oculomotor Apraxia',
        desc: isNepali
          ? 'सीपीमा मस्तिष्कको चोटका कारण दृश्य प्रशोधनमा पनि भिन्नता आउन सक्छ। विद्यार्थीले भीडभाड भएको स्क्रिनमा वस्तु खोज्न थकान महसुस गर्न सक्छ वा आँखाका चालहरू (Saccades) समन्वय गर्न गाह्रो हुन सक्छ, जसका लागि दृश्य रनवे ट्र्याकहरू चाहिन्छ।'
          : 'Brain injury in CP can co-occur with visual processing differences. A student may experience visual search fatigue, difficulty isolating items in visual clutter, or impaired saccadic eye movements, requiring visual guiding tracks alongside physical adaptations.',
      },
    ],

    // Section 2: AT Continuum Table
    continuumTitle: isNepali ? 'सहायक प्रविधि (AT) स्पेक्ट्रम: मोटर, बोली र सिकाइ' : 'The Assistive Technology (AT) Continuum',
    continuumIntro: isNepali
      ? 'सहायक प्रविधिले मोटर चाहना र कार्यान्वयनबीचको खाडल पुर्दछ। थकान वा डिभाइस समस्या हुँदा पनि सञ्चार नटुटोस् भन्नाका खातिर लो-, मिड-, र हाई-टेक उपकरणहरूको सन्तुलित प्रयोग आवश्यक छ:'
      : 'Assistive technology bridges the gap between motor intent and execution. An effective AT plan layers low-, mid-, and high-tech tools to protect the student from access failures due to fatigue, device malfunction, or environmental shifts:',
    continuumRows: [
      {
        tier: isNepali ? 'लो-टेक (कम प्रविधि)' : 'Low-Tech',
        badge: 'Low-Tech',
        color: 'emerald',
        motor: isNepali
          ? 'कस्टम एक्रिलिक किगार्डहरू (Keyguards), युनिभर्सल कफहरू, भारित नाडी पट्टाहरू, डाइसेम (Dycem) चिप्लन नदिने म्याट, २०° स्ल्यान्ट बोर्ड'
          : 'Custom acrylic keyguards, universal cuffs, weighted wrist straps, high-friction Dycem mats, 20° slant boards',
        speech: isNepali
          ? 'E-TRAN आँखा-हेरचाह फ्रेमहरू, लेमिनेटेड सेरेब्रल पाल्सी सञ्चार बोर्डहरू, सहयोगी-सहायता स्क्यानिङ पुस्तकहरू'
          : 'E-TRAN eye-pointing frames, laminated cerebral palsy communication boards, partner-assisted scanning books',
        cognitive: isNepali
          ? 'दृश्य समयतालिका, रङ-सङ्केत गरिएका कार्य अनुक्रम, उच्च-कन्ट्रास्ट पेपर वर्कशीटहरू'
          : 'Visual schedules, color-coded task sequences, high-contrast paper worksheets',
      },
      {
        tier: isNepali ? 'मिड-टेक (मध्यम प्रविधि)' : 'Mid-Tech',
        badge: 'Mid-Tech',
        color: 'blue',
        motor: isNepali
          ? 'ठूला सतह भएका मेकानिकल स्विचहरू (Jelly Bean, Big Red), ब्याट्री इन्टरप्टर, ल्याच/टाइमर मोड्युलहरू'
          : 'Large-surface mechanical switches (Jelly Bean, Big Red), switch-adapted battery interrupters, latch/timer modules',
        speech: isNepali
          ? 'एकल र बहु-सन्देश डिभाइसहरू (BIGmack, QuickTalker, GoTalk 20+), भ्वाइस-आउटपुट स्टेप कम्युनिकेटरहरू'
          : 'Single- and multi-message digitizers (BIGmack, QuickTalker, GoTalk 20+), voice-output step communicators',
        cognitive: isNepali
          ? 'कम्पन हुने समयतालिका घडीहरू, भिजुअल काउन्टडाउन टाइमर, अडियो प्रम्प्ट टाइलहरू'
          : 'Vibrating schedule watches, visual countdown timers, auditory prompt tiles',
      },
      {
        tier: isNepali ? 'हाई-टेक (उच्च प्रविधि)' : 'High-Tech',
        badge: 'High-Tech',
        color: 'purple',
        motor: isNepali
          ? 'डायनामिक आई-गेज क्यामराहरू (Tobii Dynavox, Irisbond), हेड-ट्र्याकिङ इन्फ्रारेड एरे, एकल/दोहोरो स्विच अटो-स्क्यानिङ'
          : 'Dynamic eye-gaze cameras (Tobii Dynavox, Irisbond), head-tracking infrared arrays, single/dual switch auto-scanning',
        speech: isNepali
          ? 'डायनामिक डिस्प्ले AAC सफ्टवेयर (TouchChat, Grid 3, Communicator 5) प्राकृतिक सिन्थेसाइज्ड आवाज इन्जिनसहित'
          : 'Dynamic display AAC software (TouchChat, Grid 3, Communicator 5) with synthesized natural voice engines',
        cognitive: isNepali
          ? 'कम-उत्तेजना विशेष शिक्षा प्रविधि, स्विच-पहुँचयोग्य डिजिटल पाठ्यक्रम, AI-आधारित भविष्यवाणी पाठ'
          : 'Low-stimulus special education tech, switch-accessible digital curricula, AI-driven predictive text',
      },
    ],

    // Section 3: Condition-Specific Adaptations
    conditionTitle: isNepali ? 'अवस्था-विशिष्ट व्यावहारिक अनुकूलनहरू' : 'Condition-Specific Practical Adaptations',

    // CP
    cpTitle: isNepali ? 'सेरेब्रल पाल्सी (Cerebral Palsy - CP)' : 'Cerebral Palsy (CP)',
    cpPoints: [
      {
        title: isNepali ? 'उच्च-कन्ट्रास्ट दृश्य रनवे ट्र्याकहरू' : 'High-Contrast Visual Runway Tracks',
        desc: isNepali
          ? 'स्क्रिनमा चम्किला रङ्गीन मार्गदर्शक रेखाहरू राख्नुहोस् जसले प्रयोगकर्ताको आँखा वा सूचकलाई केन्द्रबाट सीधा लक्ष्य बटनतर्फ डोर्याउँछ। यसले अकुलोमोटर अप्राक्सिया वा CVI भएकाहरूका लागि दृश्य खोजी थकान घटाउँछ।'
          : 'Implement luminous, distinctly colored graphic channels that lead the user\'s gaze or physical pointer from a central resting location directly to target buttons, reducing search fatigue for CVI and ocular apraxia.',
      },
      {
        title: isNepali ? 'भौतिक किगार्ड र हिट-जोन समायोजन' : 'Physical Keyguards and Hit-Zone Adjustments',
        desc: isNepali
          ? 'ट्याब्लेटको माथि एक्रिलिक किगार्ड राख्नुहोस् जसले गर्दा विद्यार्थीले स्क्रिनमा हात बिसाउँदा पनि गलत बटन थिचिँदैन। बटनको छनोट क्षेत्र फराकिलो बनाउनुहोस् र बटनहरूको बीचमा खाली ठाउँ (Dead Zones) राख्नुहोस्।'
          : 'Place laser-cut acrylic keyguards over tablet surfaces so learners can rest hands across the grid without triggering accidental selections. Expand active hit zones while adding generous dead zones between targets.',
      },
      {
        title: isNepali ? 'सफ्टवेयर टच क्यालिब्रेसन (Dwell र Release Activation)' : 'Software Touch Calibration',
        desc: isNepali
          ? 'सफ्टवेयरमा ड्वेल टाइम (जस्तै ०.७ सेकेन्ड छोइराखेपछि मात्र छनोट हुने) र रिलिज-एक्टिभेसन (हात स्क्रिनबाट उठाउँदा मात्र छनोट दर्ता हुने) सेटिङ मिलाउनुहोस् ताकि काँप्ने वा अनैच्छिक चालहरू फिल्टर हुन सकून्।'
          : 'Configure software dwell parameters (holding contact for 0.7s to click) and release-activation parameters (registering selection only upon lifting the hand) to filter out involuntary spastic taps.',
      },
      {
        title: isNepali ? 'स्विच स्क्यानिङ र आई-गेज कार्यप्रवाह' : 'Switch Scanning & Eye-Gaze Workflows',
        desc: isNepali
          ? 'प्रत्यक्ष हातले छुन नसक्ने सिकारुहरूका लागि दोहोरो-स्विच स्टेप-स्क्यानिङ (एउटाले अर्को विकल्पमा सार्ने, दोस्रोले छान्ने) वा अनुकूलित ड्वेल समय भएका आँखा-हेरचाह प्रणालीहरू प्रयोग गर्नुहोस्।'
          : 'For learners unable to use touch, position dual-switch step-scanning arrays (one advances highlight, second selects) or eye-gaze systems calibrated with customized dwell times.',
      },
    ],

    // ASD
    asdTitle: isNepali ? 'अटिजम स्पेक्ट्रम डिसअर्डर (Autism Spectrum Disorder - ASD)' : 'Autism Spectrum Disorder (ASD)',
    asdPoints: [
      {
        title: isNepali ? 'संवेदी-सुरक्षित, कम-उत्तेजना डिजाइन' : 'Sensory-Safe, Low-Stimulus Design',
        desc: isNepali
          ? 'चम्किला एनिमेसनहरू, अप्रिय अलार्म आवाजहरू, र भीडभाडयुक्त स्क्रिन विषयवस्तुहरू बन्द गरेर संवेदी-सुरक्षित वातावरण सिर्जना गर्नुहोस्।'
          : 'Deploy low-stimulus special education tech by deactivating bright animations, abrasive buzzer alerts, and busy visual themes that induce sensory defensiveness.',
      },
      {
        title: isNepali ? 'स्थिर मोटर लेआउट (Predictable Motor Planning)' : 'Predictable Motor Layouts',
        desc: isNepali
          ? 'महत्त्वपूर्ण मुख्य शब्दहरू सधैं स्क्रिनको एउटै निश्चित स्थानमा राख्नुहोस् ताकि सिकारुले स्वचालित मोटर योजना निर्माण गर्न सकोस्।'
          : 'Use static symbol layouts where high-frequency vocabulary never changes screen position, allowing the learner to build automatic motor routines.',
      },
      {
        title: isNepali ? 'संवेग र सीमा शब्दावली भएको AAC' : 'AAC for Varied Communication Needs',
        desc: isNepali
          ? 'नबोल्ने सिकारुहरूका लागि संवेग व्यवस्थापन, दुखाइ व्यक्त गर्ने, र व्यक्तिगत सीमा ("धेरै चर्को भयो", "रोक्नुहोस्", "एक्लै बस्न मन छ") का शब्दहरू अनिवार्य समावेश गर्नुहोस्।'
          : 'Implement robust assistive technology for nonverbal autism, ensuring quick access to emotional regulation phrases, pain descriptors, and personal boundary vocabulary ("too loud," "stop," "need space").',
      },
    ],

    // Down Syndrome & ID
    downTitle: isNepali ? 'डाउन सिन्ड्रोम तथा बौद्धिक अपाङ्गता (Down Syndrome & ID)' : 'Down Syndrome & Intellectual Disabilities (ID)',
    downPoints: [
      {
        title: isNepali ? 'जोर्नी र नाडीको स्थिरता' : 'Joint and Wrist Stabilization',
        desc: isNepali
          ? 'नाडीलाई २० देखि ३० डिग्रीको ढलानमा राख्न डेस्कटप स्ल्यान्ट बोर्डहरू प्रयोग गर्नुहोस्, जसले खुकुला जोर्नीहरूको क्षतिपूर्ति गर्दछ। मोटो ग्रिप भएका कलमहरू प्रयोग गर्नुहोस्।'
          : 'Use 20- to 30-degree desktop slant boards to place the wrist into functional extension, compensating for ligamentous laxity during writing or typing. Equip tools with wide-barrel grips.',
      },
      {
        title: isNepali ? 'ठोस फोटो म्याचिङ र अडिटरी इको' : 'Concrete Icon Matching & Auditory Echoes',
        desc: isNepali
          ? 'अमूर्त सङ्केतहरूलाई वास्तविक तस्बिरहरूसँग जोड्नुहोस्। थिच्दा तत्काल स्पष्ट आवाज आउने अडियो बटनहरू प्रयोग गर्नुहोस् जसले श्रव्य कार्यस्मरणलाई सहयोग पुर्याउँछ।'
          : 'Pair abstract symbols with real photographic equivalents. Use mid-tech audio prompt buttons that provide an immediate auditory model when pressed, supporting auditory working memory.',
      },
      {
        title: isNepali ? 'स्वायत्तताका लागि अनुक्रमित कार्य विश्लेषण' : 'Sequenced Task Analysis for Autonomy',
        desc: isNepali
          ? 'दैनिक जीवन सीप (ADL) का कार्यहरूलाई स-साना दृश्य चरणहरूमा विभाजन गरी अडियो पुष्टिसँग जोड्नुहोस्।'
          : 'Deconstruct complex activities of daily living using systematic task analysis ADL visual checklists, pairing every step with an immediate auditory confirmation.',
      },
    ],

    // Section 4: Implementation Guide
    implementationTitle: isNepali ? 'कार्यान्वयन गाइड: ९०-९०-९० बसाइ र ६-चरण ढाँचा' : 'Home and Classroom Implementation Guide (90-90-90 Rule)',
    implementationIntro: isNepali
      ? 'सेरेब्रल पाल्सी र जटिल मोटर प्रोफाइल भएका सिकारुहरूका लागि अनुकूलित प्रविधि लागू गर्दा व्यवस्थित क्लिनिकल ढाँचा पछ्याउनुपर्छ:'
      : 'Introducing adaptive technology for cerebral palsy and complex motor profiles requires a structured, multi-step clinical framework:',
    implementationSteps: [
      {
        num: '01',
        title: isNepali ? 'एर्गोनोमिक बसाइ तथा शारीरिक स्थिरता (९०-९०-९० नियम)' : 'Ergonomic Positioning & Seating Stabilization (90-90-90)',
        desc: isNepali
          ? 'अस्थिर कुर्सीमा बसेको विद्यार्थीको कहिल्यै प्रविधि मूल्याङ्कन नगर्नुहोस्। पेल्भिक स्थिरता, ढाडको सीधापन, र खुट्टाको आधार (९०° कम्मर, ९०° घुँडा, ९०° गोलीगाँठो) सुनिश्चित गर्नुहोस्। शारीरिक स्थिरताले मात्र हात, टाउको वा आँखाको नियन्त्रण सम्भव बनाउँछ।'
          : 'Never conduct an access evaluation in an unsupportive chair. Secure optimal pelvic stability, trunk alignment, and foot support (the 90-90-90 rule: 90° hips, 90° knees, 90° ankles). Proper physical stability provides the base needed for distal motor control.',
      },
      {
        num: '02',
        title: isNepali ? 'शारीरिक मोटर साइट पहिचान (ऐच्छिक नियन्त्रण)' : 'Anatomical Motor Site Assessment (Identify Voluntary Control)',
        desc: isNepali
          ? 'OT र PT सँग मिलेर विद्यार्थीको सबैभन्दा भरपर्दो र नथाक्ने ऐच्छिक मोटर साइट पत्ता लगाउनुहोस्। यो हात नभएर टाउकोको दायाँ भाग, देब्रे घुँडा, च्युँडो वा आँखाको चाल हुन सक्छ।'
          : 'Collaborate with an OT and PT to locate the student\'s most reliable, fatigue-resistant voluntary motor site. This may not be the hand—it could be the right temple, left knee, chin, or direct eye movements.',
      },
      {
        num: '03',
        title: isNepali ? 'बहु-विधा फिचर म्याचिङ (हार्डवेयर र सफ्टवेयर)' : 'Multi-Disciplinary Feature Matching',
        desc: isNepali
          ? 'ब्रान्डको लोकप्रियता होइन, विद्यार्थीको क्लिनिकल आवश्यकता (जस्तै ड्वेल फिल्टरिङ, स्विच इनपुट, उच्च-कन्ट्रास्ट रनवे ट्र्याक) अनुसार हार्डवेयर र सफ्टवेयर छनोट गर्नुहोस्।'
          : 'Select AT hardware and software based entirely on identified clinical needs (e.g., dwell filtering, switch inputs, high-contrast visual runway tracks) rather than brand popularity.',
      },
      {
        num: '04',
        title: isNepali ? 'वयस्क मोडलिङ र एइडेड ल्याङ्ग्वेज स्टिम्युलेसन' : 'Adult Modeling & Aided Language Stimulation',
        desc: isNepali
          ? 'शिक्षक, थेरापिस्ट, र अभिभावकले कुराकानी गर्दा आफैं विद्यार्थीको AAC प्रणाली प्रयोग गरेर देखाउनुपर्छ। विद्यार्थीलाई तुरुन्तै जवाफ दिन दबाब नदिनुहोस्।'
          : 'Educators, therapists, and caregivers must actively use the student\'s AAC system or switch interface during natural daily interactions, modeling without demanding an immediate physical response.',
      },
      {
        num: '05',
        title: isNepali ? 'क्रमिक प्रम्प्ट फेडिङ र त्रुटिरहित अभ्यास' : 'Systematic Prompt Fading & Errorless Practice',
        desc: isNepali
          ? 'सुरुमा ठूला र त्रुटिरहित बटनहरूबाट अभ्यास गराउनुहोस्। विद्यार्थीको शुद्धता बढ्दै गएपछि मात्र अन्य विकल्पहरू थप्नुहोस्। प्रतिक्रिया दिन १०-१५ सेकेन्डको समय दिनुहोस्।'
          : 'Begin with large, errorless interactive fields. As access accuracy improves, introduce visual distractors gradually. Fade prompts, providing 10–15 seconds of motor processing time before assisting.',
      },
      {
        num: '06',
        title: isNepali ? 'ह्वीलचेयर माउन्टिङ र लो-टेक ब्याकअप योजना' : 'Real-World Generalization & Redundancy Planning',
        desc: isNepali
          ? 'डिभाइसहरूलाई ह्वीलचेयर वा डेस्कमा बलियो माउन्टिंग आर्म्स (जस्तै Rehadapt) मार्फत सुरक्षित रूपमा जोड्नुहोस्। ब्याट्री सकिँदा वा बाहिर खेल्दा प्रयोग गर्न प्रत्येक वातावरणमा दुरुस्त लेमिनेटेड पेपर सञ्चार बोर्ड राख्नुहोस्।'
          : 'Mount devices securely to wheelchairs and desks using heavy-duty articulating arms. Maintain an exact, laminated low-tech paper communication board in every environment to ensure uninterrupted communication.',
      },
    ],

    // Section 5: FAQ
    faqTitle: isNepali ? 'बारम्बार सोधिने प्रश्नहरू (Frequently Asked Questions)' : 'Frequently Asked Questions (FAQ)',
    faqSubtitle: isNepali
      ? 'सेरेब्रल पाल्सी, बोली अप्राक्सिया, र मोटर अनुकूलन सम्बन्धी प्रमाण-आधारित उत्तरहरू'
      : 'Evidence-based clinical guidance regarding cerebral palsy adaptive technology and speech apraxia',
    faqs: [
      {
        q: isNepali
          ? 'के AAC ले बोली अप्राक्सिया वा सेरेब्रल पाल्सी भएका बालबालिकामा बोली विकासलाई रोक्छ?'
          : 'Can AAC prevent speech development in children with speech apraxia or cerebral palsy?',
        a: isNepali
          ? 'बिल्कुलै रोक्दैन। दशकौंदेखिका शैक्षिक अनुसन्धानहरूले पुष्टि गरेका छन् कि AAC ले प्राकृतिक बोली विकासलाई बाधा गर्दैन, बरु सहयोग गर्छ। भरपर्दो सञ्चार माध्यम दिएर यसले बोलीका मांसपेशीहरूमाथिको तनाव हटाउँछ। दृश्य सङ्केत, आवाज, र मोटर चयनको संयोजनले भाषाका स्नायु मार्गहरूलाई बलियो बनाउँछ।'
          : 'No. Decades of peer-reviewed empirical research confirm that AAC does not inhibit natural speech development; it actively supports it. By providing an immediate, reliable way to communicate, AAC relieves communicative frustration and pressure on speech muscles, reinforcing neural language pathways.',
      },
      {
        q: isNepali
          ? 'सेरेब्रल पाल्सीमा प्रत्यक्ष छनोट (Direct Selection) र स्विच स्क्यानिङ (Switch Scanning) बीच के फरक छ?'
          : 'What is the difference between direct selection and switch scanning for cerebral palsy?',
        a: isNepali
          ? 'प्रत्यक्ष छनोट भनेको प्रयोगकर्ताले औंला, स्टाइलस, आँखा-हेरचाह (Eye-Gaze), वा हेड पोइन्टर प्रयोग गरेर स्क्रिनको विकल्प सिधै छुनु वा हेर्नु हो। स्विच स्क्यानिङ भनेको अप्रत्यक्ष विधि हो जहाँ सफ्टवेयरले क्रमशः विकल्पहरू हाइलाइट गर्छ र विद्यार्थीले चाहेको विकल्प आउँदा बाह्य स्विच (हात वा टाउकोले) थिच्छ।'
          : 'Direct selection occurs when the user indicates a choice directly using a finger, stylus, eye-gaze fixation, or head pointer. Switch scanning is an indirect method used when involuntary movements prevent direct pointing: software sequentially highlights items, and the user activates an external switch when their target is highlighted.',
      },
      {
        q: isNepali
          ? 'दृश्य रनवे ट्र्याकहरूले मोटर समन्वयमा समस्या भएका सिकारुहरूलाई कसरी मद्दत गर्छन्?'
          : 'How do visual runway tracks help learners with motor coordination difficulties?',
        a: isNepali
          ? 'उच्च-कन्ट्रास्ट दृश्य रनवे ट्र्याकहरू स्क्रिनमा बनाइएका चम्किला मार्गदर्शक रेखाहरू हुन् जसले आँखा वा हातलाई केन्द्रबाट सीधा लक्ष्य बटनतर्फ डोर्याउँछन्। सेरेब्रल पाल्सी र कोर्टिकल भिजुअल इम्पेयरमेन्ट (CVI) भएकाहरूका लागि यसले लक्ष्य खोज्न लाग्ने दृष्टि र मोटर थकान उल्लेख्य रूपमा घटाउँछ।'
          : 'High-contrast visual runway tracks are luminous visual guide paths on screen interfaces that connect a starting reference point directly to target selection zones. For individuals with CP navigating ocular-motor apraxia or CVI, these tracks reduce the cognitive and visual search effort required to execute an intentional movement.',
      },
      {
        q: isNepali
          ? 'दृश्य समयतालिकाले डाउन सिन्ड्रोम र बौद्धिक अपाङ्गता भएका विद्यार्थीहरूलाई कसरी सहयोग गर्छ?'
          : 'How do visual schedules help students with Down syndrome and intellectual disabilities?',
        a: isNepali
          ? 'दृश्य समयतालिकाले अमूर्त मौखिक निर्देशनहरूलाई स्थायी दृश्य चित्रमा बदल्छ। डाउन सिन्ड्रोममा श्रव्य कार्यस्मरण कमजोर भए पनि दृश्य-स्थानिक सिकाइ बलियो हुने भएकाले यसले तनाव घटाउँछ र अर्को कार्य आफैं सुरु गर्न सिकाउँछ।'
          : 'Visual schedules translate abstract, spoken instructions into concrete, permanent visual representations. Because learners with Down syndrome demonstrate stronger visual-spatial processing relative to auditory working memory, visual schedules reduce cognitive fatigue and support independent task initiation.',
      },
      {
        q: isNepali
          ? 'स्प्यास्टिक सेरेब्रल पाल्सी भएको बच्चालाई टचस्क्रिनमा झुक्किएर गलत बटन थिच्नबाट कसरी रोक्ने?'
          : 'How do I stop a child with spastic cerebral palsy from hitting accidental buttons on a touchscreen?',
        a: isNepali
          ? 'भौतिक र सफ्टवेयर अनुकूलनको संयोजन गरेर रोक्न सकिन्छ: १) स्क्रिनमाथि एक्रिलिक किगार्ड लगाउने जसले औंलालाई प्वालभित्र निर्देशित गर्छ; २) बटनहरूको बीचमा खाली ठाउँ (Dead Zones) बढाउने; ३) सफ्टवेयरमा ड्वेल छनोट (निश्चित समयसम्म थिच्नुपर्ने) वा रिलिज-एक्टिभेसन सेट गर्ने; ४) स्ल्यान्ट बोर्ड प्रयोग गरी बसाइको आसन स्थिर बनाउने।'
          : 'Accidental touchscreen activations can be prevented by combining physical and software adaptations: install a physical acrylic keyguard, increase dead zones between targets, configure software dwell selection (holding for set duration) or release activation (click on lift-off), and ensure optimal ergonomic seating and arm support.',
      },
    ],
  };

  return (
    <article className="min-h-screen bg-neutral-50 dark:bg-[#111821] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      {/* Header Zone */}
      <header className="relative border-b border-neutral-200/80 dark:border-neutral-800 bg-white/60 dark:bg-[#182330]/80 backdrop-blur-md pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-primary-100 dark:bg-primary-950/80 text-primary-800 dark:text-primary-300 border border-primary-200 dark:border-primary-800">
              <ShieldCheck className="w-3.5 h-3.5" />
              {content.badge}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 font-medium">
              <Clock className="w-3.5 h-3.5" />
              {content.readingTime}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 font-medium">
              <Users className="w-3.5 h-3.5" />
              {content.audience}
            </span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white max-w-4xl leading-tight">
            {content.h1Title}
          </h1>

          {/* Position-Zero Featured Snippet Card */}
          <div className="mt-8 p-6 rounded-2xl bg-primary-50/50 dark:bg-[#1f2d3d]/60 border border-primary-100 dark:border-neutral-700/80 shadow-sm max-w-4xl">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-3">
                <h2 className="text-base font-semibold text-primary-900 dark:text-primary-200 uppercase tracking-wider text-xs">
                  {content.featuredTitle}
                </h2>
                <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal">
                  {content.featuredSnippet}
                </p>
                <div className="pt-2 border-t border-primary-200/50 dark:border-neutral-700 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                  {content.featuredTakeaway}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout with Sticky Desktop Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sticky Desktop Table of Contents Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 p-5 rounded-2xl bg-white dark:bg-[#182330] border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-neutral-100 dark:border-neutral-800 font-bold text-neutral-900 dark:text-white text-sm">
                <Compass className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                <span>{content.tocTitle}</span>
              </div>
              <nav className="space-y-1.5">
                {content.tocLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="block px-3 py-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/60 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <Link
                  href="/tools/talker-aac"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors text-xs font-medium group"
                >
                  <span>{isNepali ? 'द्रुत टकर (Quick Talker AAC)' : 'Quick Talker AAC Module'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Article Body */}
          <main className="lg:col-span-9 space-y-16">
            {/* 1. Foundations Section */}
            <section id="foundations" className="space-y-6 scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300">
                  <Brain className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                  {content.foundationsTitle}
                </h2>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base">
                {content.foundationsIntro}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {content.foundationsCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white dark:bg-[#182330] border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-2 hover:border-primary-200 dark:hover:border-primary-800 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                      <h3 className="font-semibold text-neutral-900 dark:text-white text-sm sm:text-base">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed pl-6">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. AT Continuum Table */}
            <section id="continuum" className="space-y-6 scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                  <Layers className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                  {content.continuumTitle}
                </h2>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base">
                {content.continuumIntro}
              </p>

              <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#182330] shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-neutral-50 dark:bg-[#111821] border-b border-neutral-200 dark:border-neutral-800 text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                      <tr>
                        <th className="py-3.5 px-4 sm:px-6 w-1/5">{isNepali ? 'प्रविधि तह' : 'AT Tier'}</th>
                        <th className="py-3.5 px-4 sm:px-6 w-1/3">{isNepali ? 'मोटर पहुँच र एर्गोनोमिक्स' : 'Motor & Ergonomics'}</th>
                        <th className="py-3.5 px-4 sm:px-6 w-1/4">{isNepali ? 'बोली र भाषा सहायता' : 'Speech & Language'}</th>
                        <th className="py-3.5 px-4 sm:px-6 w-1/4">{isNepali ? 'संज्ञानात्मक र शैक्षिक सहयोग' : 'Academic Support'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800 text-neutral-700 dark:text-neutral-300">
                      {content.continuumRows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/40 transition-colors">
                          <td className="py-4 px-4 sm:px-6 align-top">
                            <span
                              className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold uppercase ${
                                row.color === 'emerald'
                                  ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-200'
                                  : row.color === 'blue'
                                  ? 'bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-200'
                                  : 'bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-200'
                              }`}
                            >
                              {row.tier}
                            </span>
                          </td>
                          <td className="py-4 px-4 sm:px-6 align-top text-xs sm:text-sm leading-relaxed">
                            {row.motor}
                          </td>
                          <td className="py-4 px-4 sm:px-6 align-top text-xs sm:text-sm leading-relaxed">
                            {row.speech}
                          </td>
                          <td className="py-4 px-4 sm:px-6 align-top text-xs sm:text-sm leading-relaxed">
                            {row.cognitive}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 3. Condition-Specific Adaptations */}
            <section id="condition-specific" className="space-y-6 scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                  <FolderSync className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                  {content.conditionTitle}
                </h2>
              </div>

              {/* CP Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#182330] border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  {content.cpTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.cpPoints.map((point, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 space-y-1.5">
                      <h4 className="font-semibold text-neutral-900 dark:text-white text-sm">
                        {point.title}
                      </h4>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800">
                  <Link
                    href="/tools/talker-aac"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    <span>{isNepali ? 'हाम्रो नि:शुल्क Quick Talker AAC मोड्युल प्रयोग गर्नुहोस्' : 'Explore our free single-tap Quick Talker AAC'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* ASD Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#182330] border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  <Brain className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  {content.asdTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {content.asdPoints.map((point, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 space-y-1.5">
                      <h4 className="font-semibold text-neutral-900 dark:text-white text-sm">
                        {point.title}
                      </h4>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Down Syndrome Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#182330] border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  <Hand className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  {content.downTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {content.downPoints.map((point, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 space-y-1.5">
                      <h4 className="font-semibold text-neutral-900 dark:text-white text-sm">
                        {point.title}
                      </h4>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. Implementation Guide */}
            <section id="implementation" className="space-y-6 scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                  <Activity className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                  {content.implementationTitle}
                </h2>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base">
                {content.implementationIntro}
              </p>

              <div className="space-y-4">
                {content.implementationSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-5 rounded-xl bg-white dark:bg-[#182330] border border-neutral-200 dark:border-neutral-800 shadow-sm"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 font-bold text-xs flex items-center justify-center border border-primary-200 dark:border-primary-800">
                      {step.num}
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-bold text-neutral-900 dark:text-white text-sm sm:text-base">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. FAQ Accordion */}
            <section id="faq" className="space-y-6 scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                    {content.faqTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                    {content.faqSubtitle}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {content.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#182330] overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-semibold text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <span className="pr-4">{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 flex-shrink-0 text-neutral-500 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-primary-600' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-neutral-100 dark:border-neutral-800 pt-3">
                          {faq.a}
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
