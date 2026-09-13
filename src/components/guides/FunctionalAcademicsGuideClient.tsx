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
  Brain,
  Sliders,
  Target,
  Calculator,
  BookOpen,
  DollarSign,
  Coins,
  Puzzle,
  FileCheck2,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function FunctionalAcademicsGuideClient() {
  const { language } = useLanguage();
  const isNepali = language === 'ne';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Interactive CRA Framework Step State
  const [craStage, setCraStage] = useState<'concrete' | 'representational' | 'abstract'>('concrete');
  const [itemPrice] = useState<number>(4.35);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const breadcrumbs = [
    { label: isNepali ? 'गृहपृष्ठ' : 'Home', href: '/' },
    { label: isNepali ? 'निर्देशिकाहरू' : 'Guides', href: '/guides' },
    {
      label: isNepali
        ? 'कार्यात्मक शैक्षिक सीप र ठोस मचान'
        : 'Functional Academics & Cognitive Scaffolding',
      href: '/guides/functional-academics-special-education',
    },
  ];

  const content = {
    badge: isNepali ? 'कार्यात्मक शिक्षा र संज्ञानात्मक मचान' : 'Functional Academics & Cognitive Scaffolding',
    readingTime: isNepali ? '८ मिनेट पढाइ' : '8 min read',
    audience: isNepali ? 'विशेष शिक्षक, SLP, OT, अभिभावक, प्यारा-एजुकेटर' : 'SPED Educators, SLPs, OTs, Parents, Paraeducators',
    h1Title: isNepali
      ? 'कार्यात्मक शिक्षा: संज्ञानात्मक मचानका लागि ठोस गणित तथा साक्षरता उपकरणहरू'
      : 'Functional Academics: Concrete Math and Literacy Tools for Cognitive Scaffolding',
    featuredTitle: isNepali ? 'कार्यकारी सारांश र मूल परिभाषा' : 'Executive Summary & Core Definition',
    featuredSnippet: isNepali
      ? 'विशेष शिक्षामा कार्यात्मक शिक्षा (Functional Academics) भनेको व्यक्तिगत स्वायत्तता, सुरक्षा, व्यावसायिक तयारी, र दैनिक सामाजिक आत्मनिर्भरता अधिकतम बनाउन डिजाइन गरिएको वास्तविक-संसारमा लागू हुने गणित र साक्षरता सीपहरूको शिक्षण विधि हो। केवल अमूर्त सिद्धान्तहरू (जस्तै बीजगणित वा साहित्यिक विश्लेषण) मा केन्द्रित हुनुको सट्टा, यसले ठोस दक्षताहरूलाई प्राथमिकता दिन्छ: पैसा व्यवस्थापन, वातावरणीय सुरक्षा संकेतहरू पढ्ने, समय ट्र्याक गर्ने, दृश्य रेसिपीहरू पछ्याउने, र दैनिक कारोबारहरू सम्पन्न गर्ने।'
      : 'Functional academics in special education is an instructional approach that prioritizes real-world, applicable math and literacy skills designed to maximize personal independence, safety, vocational readiness, and daily community autonomy. Rather than focusing exclusively on abstract theoretical concepts, functional academics targets concrete competencies: managing currency, reading environmental safety signage, tracking time, following multi-step visual recipes, navigating schedules, and executing community-based transactions.',
    featuredTakeaway: isNepali
      ? 'क्लिनिकल निष्कर्ष: बौद्धिक अपाङ्गता (ID), डाउन सिन्ड्रोम, अटिजम (ASD), र सेरेब्रल पाल्सी (CP) भएका सिकारुहरूका लागि अमूर्त प्रतीकात्मक जानकारीले ठूलो सिकाइ अवरोध खडा गर्छ। सहायक प्रविधिद्वारा समर्थित "ठोस-प्रतिनिधित्वमूलक-अमूर्त" (CRA) सिकाइ रूपरेखाले जटिल संज्ञानात्मक भारलाई बाह्य मचानमा रूपान्तरण गरी सिकाइलाई मूर्त र अर्थपूर्ण बनाउँछ।'
      : 'Clinical Takeaway: For learners diagnosed with Intellectual Disabilities (ID), Down syndrome, Autism Spectrum Disorder (ASD), and Cerebral Palsy (CP), abstract symbolic information can create significant learning barriers. Cognitive scaffolding through assistive technology (AT) and the Concrete-Representational-Abstract (CRA) instructional framework externalizes complex cognitive demands, transforming abstract educational content into tangible, functionally meaningful milestones.',

    // Sidebar TOC
    tocTitle: isNepali ? 'यस निर्देशिकामा' : 'Table of Contents',
    toc: [
      { id: 'definition', label: isNepali ? 'कार्यकारी सारांश र CRA मोडेल' : 'Executive Summary & CRA Framework' },
      { id: 'interactive-cra', label: isNepali ? 'अन्तरक्रियात्मक नेक्स्ट-डलर सिमुलेटर' : 'Live Next-Dollar CRA Simulator' },
      { id: 'theoretical-foundations', label: isNepali ? 'स्नायु-विकासात्मक तथा संज्ञानात्मक आधार' : 'Theoretical & Neurodevelopmental Foundation' },
      { id: 'at-continuum', label: isNepali ? '३-तह सहायक प्रविधि कन्टिन्युम' : 'The Role of Assistive Technology (AT)' },
      { id: 'condition-adaptations', label: isNepali ? 'अवस्था अनुसारका विशेष व्यावहारिक अनुकूलनहरू' : 'Condition-Specific Practical Adaptations' },
      { id: 'implementation-roadmap', label: isNepali ? '६-चरण क्लिनिकल कार्यान्वयन मार्गचित्र' : 'Home & Classroom Implementation Guide' },
      { id: 'clinical-faq', label: isNepali ? 'प्रायः सोधिने क्लिनिकल प्रश्नहरू' : 'Frequently Asked Questions (FAQ)' },
    ],

    // ASCII/Architecture Box
    craTitle: isNepali ? 'ठोस-प्रतिनिधित्वमूलक-अमूर्त (CRA) संज्ञानात्मक मचान' : 'THE CONCRETE-REPRESENTATIONAL-ABSTRACT (CRA) CONTINUUM',
    craSubtitle: isNepali
      ? 'अमूर्त धारणाबाट उत्पन्न हुने संज्ञानात्मक घर्षणलाई हटाउन ३-चरणको विकासात्मक रूपरेखा:'
      : 'A 3-stage developmental progression bypassing working memory bottlenecks:',
    craConcrete: isNepali
      ? '[ ठोस (CONCRETE) ]\n• भौतिक वस्तुहरू, वास्तविक सिक्का/नोटहरू, ३D आकारहरू\n• प्रत्यक्ष स्पर्श र हातले छुने अनुभव\n• शून्य अमूर्त मानसिक भार'
      : '[ CONCRETE ]\n• Physical Manipulatives, Real Coins, 3D Objects\n• Multi-sensory tactile grounding\n• Zero abstract mental load',
    craRep: isNepali
      ? '[ प्रतिनिधित्वमूलक (REPRESENTATIONAL) ]\n• दृश्य आइकनहरू, उच्च-कन्ट्रास्ट तस्विरहरू, ट्याली मार्कहरू\n• अर्ध-मूर्त दृश्य मिलान\n• फोटो-देखि-शब्द मचान'
      : '[ REPRESENTATIONAL ]\n• Visual Icons, High-Contrast Photos, Tallies\n• Semi-concrete visual matching\n• Photo-to-word scaffolds',
    craAbstract: isNepali
      ? '[ अमूर्त / सहायक प्रविधि (ABSTRACT / AT) ]\n• आवाज आउने क्यालकुलेटर, गतिशील AAC शब्दहरू\n• नेक्स्ट-डलर डिजिटल एप्स, सिम्बोल-समर्थित सफ्टवेयर\n• स्वतन्त्र कार्यात्मक साक्षरता र गणित'
      : '[ ABSTRACT / AT ]\n• Speech-Output Calculators, Dynamic AAC Words\n• Next-Dollar Money Apps, Symbol-Supported Software\n• Independent functional literacy and numeracy',

    // Theoretical 5-card matrix
    foundationsTitle: isNepali ? 'स्नायु-विकासात्मक तथा संज्ञानात्मक आधार' : 'Theoretical & Neurodevelopmental Foundation',
    foundationsSubtitle: isNepali
      ? 'बौद्धिक अपाङ्गता र सम्बन्धित अवस्थाहरूमा सूचना प्रशोधन कसरी हुन्छ भनी विश्लेषण गरेर मात्र प्रभावकारी कार्यात्मक शैक्षिक हस्तक्षेपहरू डिजाइन गर्न सकिन्छ।'
      : 'Designing effective functional academic interventions requires analyzing the neurodevelopmental and cognitive profiles shaping information processing in ID and associated conditions.',
    foundations: [
      {
        icon: 'Brain',
        title: isNepali ? 'वर्किङ मेमोरी क्षमता र फोनोलोजिकल लुप सीमाहरू' : 'Working Memory Capacity & Phonological Loop Limits',
        desc: isNepali
          ? 'वर्किङ मेमोरी मस्तिष्कको अस्थायी कार्यक्षेत्र हो। बौद्धिक अपाङ्गता र डाउन सिन्ड्रोममा फोनोलोजिकल लुप (जसले मौखिक र श्रवण जानकारी प्रशोधन गर्छ) सीमित हुन्छ। मानसिक रूपमा धेरै अंकको जोड-घटाउ गर्ने वा जटिल फोनिक्स डिकोड गर्ने प्रयास गर्दा वर्किङ मेमोरी ओभरलोड भई सिकाइ रोकिन्छ।'
          : 'Working memory is the brain’s temporary mental workspace. In individuals with ID and Down syndrome, the phonological loop is frequently constrained. Traditional academic tasks—such as mental multi-digit addition or decoding complex phonetic blends—overload working memory, preventing skill retention.',
      },
      {
        icon: 'Sliders',
        title: isNepali ? 'कार्यकारी अक्षमता र संज्ञानात्मक लचकता' : 'Executive Dysfunction & Cognitive Flexibility',
        desc: isNepali
          ? 'प्रिफ्रन्टल कोर्टेक्सले कार्य थालनी, अनुक्रम, ध्यान, र लक्ष्य अनुगमनलाई नियन्त्रण गर्छ। ID र अटिजम भएका सिकारुहरूलाई शैक्षिक चरणहरू व्यवस्थित गर्न, वर्कसिटमा सिकेको सीपलाई वास्तविक किराना पसलमा सामान्यीकरण गर्न, वा त्रुटि हुँदा रणनीति बदल्न गाह्रो हुन्छ।'
          : 'The prefrontal cortex regulates task initiation, sequencing, selective attention, and goal monitoring. Learners with ID and ASD often struggle to independently organize academic steps, generalize a skill from a worksheet to a real store, or shift strategies when an error occurs.',
      },
      {
        icon: 'Puzzle',
        title: isNepali ? 'अमूर्त प्रतीकात्मक प्रशोधन अन्तरालहरू' : 'Abstract Symbolic Processing Gaps',
        desc: isNepali
          ? 'सामान्य विकासमा सिकारुहरू ठोस इन्द्रिय-चालबाट अमूर्त प्रतीकात्मक तर्कतर्फ अग्रसर हुन्छन्। न्यूरोडाइभर्जेन्ट सिकारुहरूमा अमूर्त अंक (जस्तै "५") लाई वास्तविक परिमाणमा अनुवाद गर्ने स्नायु मार्गहरूलाई बुझ्न स्थायी, ठोस दृश्य लंगरहरू (Visual Anchors) आवश्यक पर्दछ।'
          : 'In typical cognitive development, learners transition from concrete sensorimotor interactions to abstract symbolic logic. For many neurodivergent learners, translating an abstract numeral into its quantitative value requires permanent, tangible visual anchors to remain comprehensible.',
      },
      {
        icon: 'AlertCircle',
        title: isNepali ? 'फाइन-मोटर अप्राक्सिया र शारीरिक थकान' : 'Fine-Motor Apraxia & Physical Execution Fatigue',
        desc: isNepali
          ? 'सेरेब्रल पाल्सी र डाउन सिन्ड्रोम (हाइपोटोनिया र लिगामेन्टको खुकुलोपन) मा सिसाकलम समात्ने वा किताबको पाना पल्टाउने कार्यले धेरै ऊर्जा खपत गर्छ। जब शारीरिक क्रियान्वयनमै धेरै ध्यान खर्च हुन्छ, तब शैक्षिक समस्या समाधानका लागि थोरै मात्र संज्ञानात्मक ऊर्जा बाँकी रहन्छ।'
          : 'In cerebral palsy and Down syndrome (characterized by hypotonia and ligament laxity), the physical act of grasping a pencil or turning a book page requires conscious muscular effort. When physical execution demands high energy, fewer cognitive resources remain for academic problem-solving.',
      },
      {
        icon: 'ShieldCheck',
        title: isNepali ? 'इन्टेरोसेप्शन र संज्ञानात्मक थकान' : 'Interoception & Cognitive Exhaustion',
        desc: isNepali
          ? 'दिनभरि प्रशोधन भिन्नताहरूलाई क्षतिपूर्ति दिने प्रयासले गम्भीर संज्ञानात्मक र शारीरिक थकान निम्त्याउँछ। यदि विद्यार्थी संवेदी ओभरलोड वा बसाइको अस्थिरताबाट गुज्रिरहेको छ भने उसको स्नायु प्रणाली रक्षात्मक अवस्थामा पुग्छ, जसले शैक्षिक ग्रहणशीलता घटाउँछ।'
          : 'Compensating for processing differences throughout the school day generates significant cognitive and physiological fatigue. If a student is experiencing unmanaged sensory overload or postural instability, their nervous system shifts into a protective state, reducing academic receptivity.',
      },
    ],

    // 3-tier AT Table
    tableTitle: isNepali ? 'सहायक प्रविधि (AT) को भूमिका' : 'The Role of Assistive Technology (AT)',
    tableSubtitle: isNepali
      ? 'शारीरिक शुद्धता वा वर्किङ मेमोरी क्षमता जे भए तापनि शैक्षिक अवधारणाहरूमा सक्रिय सहभागिता सुनिश्चित गर्न तीन तहको मचान ढाँचा।'
      : 'Assistive technology serves as external cognitive scaffolding, ensuring learners can engage with academic concepts regardless of physical dexterity or working memory capacity.',
    tableHeaders: [
      isNepali ? 'AT तह' : 'AT Tier',
      isNepali ? 'ठोस कार्यात्मक गणित सहायता' : 'Concrete Functional Math Supports',
      isNepali ? 'कार्यात्मक साक्षरता तथा वातावरणीय प्रिन्ट' : 'Functional Literacy & Environmental Print',
      isNepali ? 'दैनिक जीवन तथा ADL एकीकरण' : 'Adaptive Life & Daily Living Integration',
    ],
    tableRows: [
      {
        tier: isNepali ? 'निम्न-प्रविधि (Low-Tech)' : 'Low-Tech',
        math: isNepali
          ? 'टचम्याथ (TouchMath) डट-कार्डहरू, सिक्का मिलान जिगहरू, प्लास्टिक फ्र्याक्सन टाइलहरू, ट्याक्टाइल नम्बर लाइनहरू।'
          : 'TouchMath dot-cards, physical coin-matching jigs, plastic fraction tiles, tactile number lines.',
        literacy: isNepali
          ? 'वातावरणीय प्रिन्ट फ्ल्यासकार्डहरू, उच्च-कन्ट्रास्ट PECS स्ट्रिपहरू, लेमिनेटेड तस्विर-शब्द मेनुहरू।'
          : 'Environmental print flashcards, high-contrast PECS strips, laminated picture-word menus.',
        adl: isNepali
          ? 'रङ-कोड गरिएका दृश्य रेसिपीहरू, कार्य विश्लेषण ADL सरसफाइ स्ट्रिपहरू, दृश्य तालिका बाइन्डरहरू।'
          : 'Color-coded visual recipes, task analysis ADL hygiene strips, visual schedule binders.',
      },
      {
        tier: isNepali ? 'मध्यम-प्रविधि (Mid-Tech)' : 'Mid-Tech',
        math: isNepali
          ? 'ठूला बटन भएका बोल्ने क्यालकुलेटरहरू, दृश्य काउन्टडाउन टाइमर (Time Timer), सिक्का गन्ने मेकानिकल बैंकहरू।'
          : 'Large-key talking calculators, visual countdown timers (Time Timer), coin-counting mechanical banks.',
        literacy: isNepali
          ? 'अडियो-प्रम्प्टिङ फ्ल्यासकार्ड रिडरहरू, एकल-शब्द बोल्ने टायलहरू (Talking Tiles), अडियो-पेन स्क्यानरहरू।'
          : 'Audio-prompting flashcard readers, single-word talking tiles, audio-pen scanners (e.g., Anybook Reader).',
        adl: isNepali
          ? 'कम्पन हुने प्रम्प्ट घडीहरू, दैनिक कार्यका लागि बहु-सन्देश अडियो अनुक्रम प्याडहरू।'
          : 'Vibrating prompt watches, multi-message audio sequence pads for daily tasks.',
      },
      {
        tier: isNepali ? 'उच्च-प्रविधि (High-Tech)' : 'High-Tech',
        math: isNepali
          ? 'स्विच-पहुँचयोग्य डिजिटल गणित सफ्टवेयर, गतिशील पैसा-व्यवस्थापन एपहरू (Next Dollar विधि)।'
          : 'Switch-accessible digital math software, dynamic money-management apps (Next Dollar method).',
        literacy: isNepali
          ? 'गतिशील डिस्प्ले AAC साक्षरता पानाहरू, प्रतीक-समर्थित पाठ पाठकहरू, टेक्स्ट-टु-स्पीच सफ्टवेयर।'
          : 'Dynamic display AAC literacy pages, symbol-supported text readers, text-to-speech software.',
        adl: isNepali
          ? 'अन्तरक्रियात्मक डिजिटल जीवन-सीप सुइटहरू, न्यून-उत्तेजक विशेष शिक्षा डिजिटल योजनाकारहरू।'
          : 'Interactive digital life-skills suites, low-stimulus special education tech digital planners.',
      },
    ],

    // Condition-Specific Adaptations
    conditionsTitle: isNepali ? 'अवस्था अनुसारका विशेष व्यावहारिक अनुकूलनहरू' : 'Condition-Specific Practical Adaptations',
    conditionsSubtitle: isNepali
      ? 'बौद्धिक अपाङ्गता, डाउन सिन्ड्रोम, अटिजम, र सेरेब्रल पाल्सीमा कार्यात्मक शैक्षिक मचान कसरी लागू गरिन्छ।'
      : 'Evidence-based academic scaffolding calibrated across intellectual, developmental, and neuromotor profiles.',
    conditions: [
      {
        category: isNepali ? 'डाउन सिन्ड्रोम र बौद्धिक अपाङ्गता (ID)' : 'Down Syndrome & Intellectual Disabilities (ID)',
        badge: isNepali ? 'ठोस र दृश्य-स्थानिय मचान' : 'Concrete Visual-Spatial Scaffolding',
        color: 'border-amber-300 dark:border-amber-800/60 bg-amber-50/40 dark:bg-amber-950/20',
        items: [
          {
            title: isNepali ? 'टचम्याथ र ट्याक्टाइल संख्यात्मकता (TouchMath)' : 'TouchMath & Tactile Numeracy',
            text: isNepali
              ? 'बहु-संवेदी गणित कार्यक्रम (जस्तै TouchMath वा Numicon) लागू गर्नुहोस् जहाँ प्रत्येक अंकमा त्यसको मान अनुसारका स्पर्श गर्न सकिने बिन्दुहरू हुन्छन् (जस्तै "३" मा तीनवटा डट)। यसले दृश्य परिमाणलाई शारीरिक स्पर्शसँग जोड्दछ।'
              : 'Implement multi-sensory math programs (like TouchMath or Numicon) where each numeral contains discrete, touchable anchor points corresponding to its value (e.g., number "3" has three tactile dots), linking visual quantity to physical touch.',
          },
          {
            title: isNepali ? '"नेक्स्ट-डलर" वित्तीय रणनीति (Next-Dollar Method)' : 'The "Next-Dollar" Financial Strategy',
            text: isNepali
              ? 'जटिल घटाउ-आधारित पैसाको गणितको सट्टा "नेक्स्ट-डलर" (Dollar-Up) विधि सिकाउनुहोस्। यदि कुनै सामानको मूल्य $४.३५ पर्छ भने, पूरा अंक ४ पहिचान गरी एक डलर थपेर पाँचवटा $१ को नोट तिर्न सिकाउनुहोस्। यसका लागि भिजुअल मनी-स्लाइड रुलर प्रयोग गर्नुहोस्।'
              : 'Replace complex subtraction-based money math with the "Next-Dollar" (Dollar-Up) method. If an item costs $4.35, teach the student to locate the whole number 4 and count up one more dollar to pay with five $1 bills using visual money-slide rulers.',
          },
          {
            title: isNepali ? 'साक्षरताका लागि ठोस तस्विर मिलान' : 'Concrete Icon Matching for Literacy',
            text: isNepali
              ? 'साइड-वर्डहरूलाई वास्तविक समुदायका संकेतहरू (STOP, EXIT, RESTROOM, DANGER) का उच्च-कन्ट्रास्ट तस्विरहरूसँग जोड्नुहोस्। साथै अडियो पेनहरू प्रयोग गर्नुहोस् जसले छापिएको स्टिकर छुँदा शब्द पढेर सुनाउँछन्।'
              : 'Anchor sight words to high-resolution photographs of actual community signs (STOP, EXIT, RESTROOM, DANGER). Utilize mid-tech audio pens (such as the Anybook Reader) that read words aloud when touched to task cards.',
          },
        ],
      },
      {
        category: isNepali ? 'अटिजम स्पेक्ट्रम डिसअर्डर (ASD)' : 'Autism Spectrum Disorder (ASD)',
        badge: isNepali ? 'संरचित र न्यून-उत्तेजक ढाँचा' : 'Structured TEACCH Architecture',
        color: 'border-teal-300 dark:border-teal-800/60 bg-teal-50/40 dark:bg-teal-950/20',
        items: [
          {
            title: isNepali ? 'संरचित, बन्द-अन्त्य कार्यहरू (TEACCH मोडल)' : 'Structured, Closed-Ended Work Tasks (TEACCH Model)',
            text: isNepali
              ? 'स्पष्ट सुरुआती बिन्दु, स्पष्ट प्रगति सूचक, र ठोस समापन परिभाषा भएका गणित र साक्षरता गतिविधिहरू डिजाइन गर्नुहोस् (जस्तै बायाँको "गर्नुपर्ने" बिनबाट दायाँको "सकियो" बिनमा सर्ने ५ वटा फोल्डरहरू)।'
              : 'Design math and literacy activities with unambiguous starting points, clear progress indicators, and concrete completion definitions (e.g., bins moving systematically from a "To Do" box on the left to a "Finished" box on the right).',
          },
          {
            title: isNepali ? 'संवेदी-सुरक्षित, न्यून-उत्तेजक इन्टरफेस' : 'Sensory-Safe, Low-Stimulus Interfaces',
            text: isNepali
              ? 'शैक्षिक एपहरूमा अनावश्यक भिजुअल क्लटर, चम्किने एनिमेसन, र तर्सने आवाजहरू हटाउनुहोस्। तटस्थ पृष्ठभूमि र उच्च-कन्ट्रास्ट स्पष्ट फन्ट प्रयोग गर्नुहोस्।'
              : 'Deploy low-stimulus special education tech for academic apps. Eliminate visual clutter, flashing animations, and startling game-over sounds, using neutral backgrounds and clear, high-contrast text.',
          },
          {
            title: isNepali ? 'AAC-एकीकृत साक्षरता निर्देशन' : 'AAC-Integrated Literacy Instruction',
            text: isNepali
              ? 'अबोली विद्यार्थीहरूका लागि गतिशील AAC उपकरणमा वर्णमाला किबोर्ड, फोनिक्स-आधारित कोर शब्दहरू, र वर्णनात्मक शब्दावलीको सजिलो पहुँच सुनिश्चित गर्नुहोस् ताकि मौखिक बोली बिना नै पठनमा भाग लिन सकियोस्।'
              : 'For non-speaking students, utilize assistive technology for nonverbal autism to teach comprehensive literacy, ensuring easy access to an alphabet keyboard, phonics core words, and descriptive vocabulary for shared reading.',
          },
        ],
      },
      {
        category: isNepali ? 'सेरेब्रल पाल्सी (CP) र मोटर अवरोध' : 'Cerebral Palsy (CP) & Motor Access',
        badge: isNepali ? 'वैकल्पिक पहुँच र मोटर डिकपलिङ' : 'Alternative Access & Motor Decoupling',
        color: 'border-purple-300 dark:border-purple-800/60 bg-purple-50/40 dark:bg-purple-950/20',
        items: [
          {
            title: isNepali ? 'डिजिटल र स्विच-पहुँचयोग्य म्यानिपुलेटिभ्स' : 'Digital & Switch-Accessible Manipulatives',
            text: isNepali
              ? 'जब फाइन-मोटर स्प्यास्टिसिटीले वास्तविक सिक्का, पासा, वा गन्ती गर्ने ब्लकहरू समात्न दिँदैन, तब ट्याब्लेट वा कम्प्युटरमा स्विच-पहुँचयोग्य डिजिटल म्यानिपुलेटिभ्स प्रयोग गर्नुहोस्।'
              : 'When fine-motor spasticity prevents a student from holding real coins, dice, or counting cubes, utilize switch-accessible digital math manipulatives on a tablet or computer.',
          },
          {
            title: isNepali ? 'उच्च-कन्ट्रास्ट दृश्य रनवे ट्र्याकहरू' : 'High-Contrast Visual Runway Tracks',
            text: isNepali
              ? 'सञ्चार बोर्ड र डिजिटल वर्कसिटहरूमा प्रदीप्त दृश्य रनवे ट्र्याकहरू जोड्नुहोस्, जसले अक्युलोमोटर अप्राक्सिया भएका सिकारुलाई प्रश्नबाट सिधै उत्तर विकल्पहरूतर्फ आँखा वा हात पुर्याउन मद्दत गर्दछ।'
              : 'Integrate high-contrast visual runway tracks on cerebral palsy communication boards and digital worksheets to help learners direct their gaze or hand directly to answer choices.',
          },
          {
            title: isNepali ? 'आई-गेज र कीगार्ड-जडित वर्कसिटहरू' : 'Eye-Gaze & Keyguard-Mounted Worksheets',
            text: isNepali
              ? 'आई-गेज सफ्टवेयर वा टचस्क्रीनमा एक्रिलिक कीगार्ड जडान गरेर शैक्षिक सामग्री प्रस्तुत गर्नुहोस्। कम्पन बेवास्ता गर्न ०.८ सेकेन्ड ड्वेल-सेलेक्सन मिलाउनुहोस्।'
              : 'Deliver academic content through eye-gaze software or touchscreens fitted with physical acrylic keyguards. Calibrate dwell selection times (e.g., 0.8 seconds) to bypass physical tremors and muscle fatigue.',
          },
        ],
      },
    ],

    // 6-step Implementation Guide
    roadmapTitle: isNepali ? 'गृह तथा कक्षाकोठा कार्यान्वयन गाइड' : 'Home and Classroom Implementation Guide',
    roadmapSubtitle: isNepali
      ? 'कार्यात्मक शैक्षिक उपकरणहरूलाई वास्तविक-संसारका दिनचर्याहरूमा सहज रूपमा एकीकृत गर्न ६-चरणको क्लिनिकल विधि।'
      : 'A systematic clinical implementation framework ensures functional academic tools are integrated smoothly into real-world routines.',
    roadmapSteps: [
      {
        num: '1',
        title: isNepali ? 'कार्यात्मक पारिस्थितिकीय सूची (Functional Ecological Inventory)' : 'Conduct a Functional Ecological Inventory',
        desc: isNepali
          ? 'दैनिक जीवनमा विद्यार्थीलाई चाहिने विशिष्ट गणित र साक्षरता सीपहरू पहिचान गर्नुहोस्। सैद्धान्तिक रटानभन्दा वास्तविक आवश्यकताहरू (माइक्रोवेभ टाइमर, औषधिको लेबल, बस तालिका, सामान्य खरिद) लाई प्राथमिकता दिनुहोस्।'
          : 'Identify the specific math and literacy skills the learner needs in their daily life. Prioritize functional targets (reading a microwave timer, recognizing medication labels, checking a bus schedule, calculating simple purchases) over rote drills.',
      },
      {
        num: '2',
        title: isNepali ? 'संवेदी र एर्गोनोमिक बसाइ क्यालिब्रेसन (९०-९०-९० नियम)' : 'Sensory & Ergonomic Positioning Calibration (90-90-90)',
        desc: isNepali
          ? 'शैक्षिक कार्य सुरु गर्नु अगाडि उचित बसाइ सुनिश्चित गर्नुहोस् (हिप, घुँडा, र गोलीगाँठो ९० डिग्रीमा अडिएको)। कोरको स्थिरताले नै दृश्य ट्र्याकिङ, हातको प्रयोग, र ध्यान केन्द्रित गर्न मद्दत गर्छ।'
          : 'Ensure proper seating ergonomics (the 90-90-90 rule: hips, knees, and feet supported at 90 degrees) before initiating academic tasks. Postural stability provides the physical foundation for visual tracking and sustained attention.',
      },
      {
        num: '3',
        title: isNepali ? 'CRA रूपरेखा अनुसार आधारभूत मूल्यांकन (पहिले ठोस)' : 'Baseline Assessment via the CRA Framework (Concrete First)',
        desc: isNepali
          ? 'सिकारु कंक्रीट-रिप्रिजेन्टेसनल-एब्स्ट्र्याक्ट कन्टिन्युमको कुन चरणमा छ पत्ता लगाउनुहोस्। यदि तस्विर वर्कसिटमा कठिनाइ हुन्छ भने, अगाडि बढ्नुअघि वास्तविक वस्तुहरू (वास्तविक सिक्का) मा फर्कनुहोस्।'
          : 'Determine where the learner sits on the Concrete-Representational-Abstract continuum. If a learner struggles with a representational worksheet (pictures of coins), step back to concrete 3D materials (real coins) before moving forward.',
      },
      {
        num: '4',
        title: isNepali ? 'वयस्क सहायक मोडलिङ र मचान निर्देशन' : 'Adult Aided Modeling & Scaffolded Instruction',
        desc: isNepali
          ? 'विद्यार्थीबाट तुरुन्त नतिजाको अपेक्षा नगरी शिक्षक र अभिभावकले ठोस उपकरण प्रयोग गरेर देखाउनुपर्छ। भौतिक म्यानिपुलेटिभ्स देखाउँदै समस्या समाधानको प्रक्रिया स्वाभाविक रूपमा बोल्नुहोस्।'
          : 'Teachers, therapists, and caregivers must model using the concrete tool or AT software without demanding immediate student output. Point to physical manipulatives, demonstrate the sequence, and verbalize problem-solving naturally.',
      },
      {
        num: '5',
        title: isNepali ? 'व्यवस्थित प्रम्प्ट फेपिङ र त्रुटिरहित अभ्यास' : 'Systematic Prompt Fading & Errorless Practice',
        desc: isNepali
          ? 'त्रुटिरहित सिकाइबाट सुरु गर्नुहोस् (जस्तै सही उत्तर र खाली ठाउँ बीचको छनोट)। बिस्तारै प्रम्प्टहरू घटाउँदै लैजानुहोस्: शारीरिक सहयोगबाट दृश्य औंल्याउने, त्यसपछि मौखिक संकेत, र अन्तमा स्वतन्त्र कार्यान्वयन।'
          : 'Begin with errorless learning structures (e.g., offering a choice between the correct answer and a neutral blank space). Gradually fade prompts: from physical guidance to visual pointing, verbal cues, and finally independent execution.',
      },
      {
        num: '6',
        title: isNepali ? 'दैनिक जीवन (ADL) र समुदायमा सीप सामान्यीकरण' : 'Generalize Skills into Natural ADL & Community Environments',
        desc: isNepali
          ? 'शैक्षिक सिकाइलाई डेस्कको काममा मात्र सीमित नराख्नुहोस्। खाना पकाउँदा सामग्री नाप्ने, पसलमा दृश्य किराना सूची पढ्ने, वा मनोरञ्जनका लागि दृश्य टाइमर मिलाउने जस्ता कार्य विश्लेषण ADL दिनचर्यामा गणित र साक्षरता जोड्नुहोस्।'
          : 'Academic learning must extend beyond desk work. Bridge literacy and math directly into daily life by incorporating task analysis ADL routines: measuring ingredients during cooking, reading a grocery list at the store, or setting a visual timer.',
      },
    ],

    // Clinical FAQ
    faqTitle: isNepali ? 'प्रायः सोधिने क्लिनिकल प्रश्नहरू (FAQ)' : 'Frequently Asked Questions (FAQ)',
    faqSubtitle: isNepali
      ? 'कार्यात्मक शिक्षा, नेक्स्ट-डलर विधि, टचम्याथ, र संज्ञानात्मक मचान सम्बन्धी प्रमाण-आधारित जवाफहरू।'
      : 'Evidence-based insights into functional academics, CRA continuum, Next-Dollar budgeting, and assistive technology.',
    faqs: [
      {
        q: isNepali
          ? 'परम्परागत शिक्षा र कार्यात्मक शिक्षा (Functional Academics) बीच के भिन्नता छ?'
          : 'What is the difference between traditional academics and functional academics?',
        a: isNepali
          ? 'परम्परागत शिक्षाले व्यापक सैद्धान्तिक र अमूर्त माइलस्टोनहरू (जस्तै बीजगणित, ऐतिहासिक विश्लेषण, साहित्यिक व्याख्या) मा जोड दिन्छ। कार्यात्मक शिक्षाले व्यक्तिगत स्वायत्तता, सुरक्षा, समुदायमा पहुँच, र रोजगारीका लागि प्रत्यक्ष आवश्यक पर्ने व्यावहारिक गणित र साक्षरता सीपहरू (जस्तै समय व्यवस्थापन, बजेटिङ, वातावरणीय संकेत पढ्ने, र दृश्य निर्देशनहरू पछ्याउने) मा केन्द्रित हुन्छ।'
          : 'Traditional academics emphasizes broad theoretical and conceptual milestones (such as historical analysis, algebraic computation, or literary interpretation). Functional academics focuses specifically on practical, real-world math and literacy skills directly required for daily autonomy, personal safety, community access, and employment (such as time management, budgeting, reading environmental signage, and following visual instructions).',
      },
      {
        q: isNepali
          ? 'ठोस गणित म्यानिपुलेटिभ्सले डाउन सिन्ड्रोम र ID भएका सिकारुलाई कसरी मद्दत गर्छन्?'
          : 'How do concrete math manipulatives assist learners with Down syndrome and ID?',
        a: isNepali
          ? 'ठोस गणित म्यानिपुलेटिभ्स (जस्तै TouchMath कार्ड, Numicon आकार, वास्तविक मुद्रा) ले अमूर्त संख्यात्मक अवधारणाहरूलाई मूर्त, दृश्य-स्थानिय रूपमा रूपान्तरण गर्दछन्। डाउन सिन्ड्रोम र ID मा श्रवण वर्किङ मेमोरी कमजोर तर दृश्य प्रशोधन तुलनात्मक रूपमा बलियो हुने भएकाले, भौतिक वस्तुहरूले गणना र परिमाण तुलना गर्न चाहिने मानसिक भार घटाउँछन्।'
          : 'Concrete math manipulatives (such as TouchMath cards, Numicon shapes, and physical currency) transform abstract numerical concepts into tangible, visual-spatial representations. Because individuals with Down syndrome and ID often have relative strengths in visual processing alongside limitations in auditory working memory, physical manipulatives reduce the mental load required to calculate and compare quantities.',
      },
      {
        q: isNepali
          ? 'के AAC ले अबोली अटिस्टिक विद्यार्थीहरूमा कार्यात्मक साक्षरता विकास गर्न मद्दत गर्छ?'
          : 'Can AAC support functional literacy for non-speaking autistic students?',
        a: isNepali
          ? 'हो, अवश्य गर्छ। विस्तृत AAC प्रणालीहरूले स्क्रिनमा किबोर्ड, फोनोलोजिकल शब्द बैंक, र प्रतीक-समर्थित पाठ उपलब्ध गराउँछन्। अबोली सिकारुहरूलाई भरपर्दो अभिव्यक्ति माध्यम दिएर, AAC ले उनीहरूलाई मौखिक बोली बिना नै फोनिक्स निर्देशनमा भाग लिन, पढाइ बुझाइका प्रश्नहरूको उत्तर दिन, र हिज्जे सीपहरू विकास गर्न सक्षम बनाउँछ।'
          : 'Yes. AAC systems actively support functional literacy. Comprehensive AAC devices provide access to on-screen keyboards, phonological word banks, and symbol-supported text. By giving non-speaking learners a reliable expressive channel, AAC enables them to participate in phonics instruction, answer reading comprehension questions, and build spelling skills without needing spoken speech.',
      },
      {
        q: isNepali
          ? 'दृश्य तालिकाहरू र कार्य विश्लेषण (Task Analysis) कार्यात्मक शैक्षिक सिकाइसँग कसरी जोडिन्छन्?'
          : 'How do visual schedules and task analysis connect to functional academic learning?',
        a: isNepali
          ? 'दृश्य तालिका र कार्य विश्लेषण ADL रूपरेखाले कार्यात्मक शैक्षिक सीपहरूलाई प्रत्यक्ष रूपमा वास्तविक दिनचर्याहरूमा लागू गर्दछन्। दृश्य तालिका पढ्दा बायाँ-देखि-दायाँ अनुक्रम, समयको अवधारणा, र शब्द-तस्विर सम्बन्ध बलियो हुन्छ भने, चरणबद्ध कार्य विश्लेषणले अमूर्त अनुक्रम सीपलाई खाना पकाउने वा सरसफाइ जस्ता व्यावहारिक दैनिक कार्यमा रूपान्तरण गर्दछ।'
          : 'Visual schedules and task analysis ADL frameworks apply functional academic skills directly to real-world routines. Reading a visual schedule reinforces left-to-right sequencing, time concepts, and word-picture association, while a step-by-step task analysis turns abstract sequencing skills into practical daily routines like cooking, dressing, or hygiene.',
      },
      {
        q: isNepali
          ? 'गम्भीर सेरेब्रल पाल्सी भएको विद्यार्थीले लेख्न नसक्दा पनि गणितको असाइनमेन्ट कसरी पूरा गर्न सक्छ?'
          : 'How can a student with severe cerebral palsy complete math assignments without writing?',
        a: isNepali
          ? 'गम्भीर सेरेब्रल पाल्सी भएका विद्यार्थीहरूले वैकल्पिक पहुँच सहायक प्रविधि प्रयोग गरेर गणित कार्यहरू गर्न सक्छन्। यसमा स्विच-पहुँचयोग्य डिजिटल गणित सफ्टवेयर, आँखाको दृष्टिले नम्बर छनोट गर्ने आई-गेज प्रणाली, एक्रिलिक कीगार्ड जडान गरिएका ट्याब्लेटहरू, र अडियो स्क्यानिङ उपकरणहरू समावेश छन्। यी अनुकूलनहरूले हस्तलेखनको अवरोध हटाएर विद्यार्थीलाई आफ्नो गणितीय तर्क प्रदर्शन गर्न सक्षम बनाउँछन्।'
          : 'Students with severe cerebral palsy can complete math tasks using alternative access assistive technology. Options include switch-accessible onscreen math software, eye-gaze systems that allow students to select numbers with eye fixations, touchscreen tablets equipped with acrylic keyguards, and voice-input or partner-assisted scanning tools. These adaptations eliminate handwriting barriers and allow students to demonstrate mathematical reasoning independently.',
      },
    ],

    // Tools CTA
    ctaTitle: isNepali ? 'हाम्रो Sentence Builder र AAC उपकरणहरू प्रयोग गर्नुहोस्' : 'Explore Our Accessible Literacy & Sentence Building Tools',
    ctaDesc: isNepali
      ? 'फित्जेराल्ड की रङ कोडिङ, ठोस तस्विर-शब्द मिलान, र आवाज संश्लेषण सहितको हाम्रो निःशुल्क उपकरणहरू ब्राउजरमै चलाउनुहोस्।'
      : 'Try our free browser-based tools featuring Fitzgerald Key color coding, concrete icon matching, and multi-sensory dual coding.',
    ctaButton: isNepali ? 'Sentence Builder खोल्नुहोस् →' : 'Launch Sentence Builder →',
  };

  return (
    <article className="min-h-screen bg-[#FDFBF7] dark:bg-[#111821] text-[#2D3748] dark:text-[#E2E8F0] transition-colors duration-300">
      {/* 1. Header Zone */}
      <header className="border-b border-[#E2E8F0] dark:border-[#273748] bg-white/70 dark:bg-[#182330]/70 backdrop-blur-md pt-8 pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-semibold">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              <Calculator className="h-3.5 w-3.5" />
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
          <div className="mt-8 rounded-2xl border-2 border-blue-400/40 dark:border-blue-600/40 bg-blue-50/50 dark:bg-blue-950/30 p-6 sm:p-7 shadow-xs">
            <div className="flex items-center gap-2.5 text-blue-900 dark:text-blue-200 font-bold text-lg mb-2.5">
              <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />
              <h2>{content.featuredTitle}</h2>
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-[#2D3748] dark:text-[#CBD5E1] font-medium">
              {content.featuredSnippet}
            </p>
            <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800/60 flex items-start gap-2.5 text-sm sm:text-base text-blue-950 dark:text-blue-200">
              <ShieldCheck className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
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
                <Layers className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>{content.tocTitle}</span>
              </div>
              <nav className="space-y-1.5 text-xs font-medium">
                {content.toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block py-1.5 px-2 rounded-lg text-[#4A5568] dark:text-[#CBD5E1] hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Quick Jump to Tool */}
              <div className="mt-6 pt-4 border-t border-[#E2E8F0] dark:border-[#273748]">
                <Link
                  href="/tools/sentence-builder"
                  className="flex items-center justify-between p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors text-xs font-bold"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    {isNepali ? 'Sentence Builder' : 'Sentence Builder Tool'}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Body */}
          <main className="lg:col-span-8 space-y-14">
            {/* Zone 1: CRA Architecture Box */}
            <section id="definition" className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-black text-[#1A202C] dark:text-white">
                <Calculator className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h2>{content.craTitle}</h2>
              </div>
              <p className="text-sm sm:text-base text-[#4A5568] dark:text-[#CBD5E1] leading-relaxed">
                {content.craSubtitle}
              </p>

              {/* Graphical 3-Step Continuum Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Concrete Card */}
                <div className="rounded-2xl border-2 border-emerald-300 dark:border-emerald-800/60 bg-emerald-50/40 dark:bg-emerald-950/20 p-4 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/50 px-2 py-0.5 rounded">
                      १. ठोस (Concrete)
                    </span>
                  </div>
                  <div className="bg-[#FAF7EE] dark:bg-[#111821] p-3 rounded-xl border border-emerald-200 dark:border-emerald-900/40 flex items-center justify-center">
                    <Coins className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <p className="text-xs text-[#4A5568] dark:text-[#CBD5E1] leading-relaxed whitespace-pre-line">
                    {content.craConcrete}
                  </p>
                </div>

                {/* Representational Card */}
                <div className="rounded-2xl border-2 border-blue-300 dark:border-blue-800/60 bg-blue-50/40 dark:bg-blue-950/20 p-4 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50 px-2 py-0.5 rounded">
                      २. प्रतिनिधित्वमूलक
                    </span>
                  </div>
                  <div className="bg-[#FAF7EE] dark:bg-[#111821] p-3 rounded-xl border border-blue-200 dark:border-blue-900/40 flex items-center justify-center">
                    <FileCheck2 className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-xs text-[#4A5568] dark:text-[#CBD5E1] leading-relaxed whitespace-pre-line">
                    {content.craRep}
                  </p>
                </div>

                {/* Abstract/AT Card */}
                <div className="rounded-2xl border-2 border-purple-300 dark:border-purple-800/60 bg-purple-50/40 dark:bg-purple-950/20 p-4 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-800 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/50 px-2 py-0.5 rounded">
                      ३. अमूर्त / AT
                    </span>
                  </div>
                  <div className="bg-[#FAF7EE] dark:bg-[#111821] p-3 rounded-xl border border-purple-200 dark:border-purple-900/40 flex items-center justify-center">
                    <Calculator className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                  </div>
                  <p className="text-xs text-[#4A5568] dark:text-[#CBD5E1] leading-relaxed whitespace-pre-line">
                    {content.craAbstract}
                  </p>
                </div>
              </div>
            </section>

            {/* Interactive Simulator: The Next-Dollar Strategy */}
            <section id="interactive-cra" className="rounded-2xl border-2 border-blue-400/60 dark:border-blue-500/40 bg-blue-50/30 dark:bg-[#182330] p-6 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-lg sm:text-xl font-bold text-[#1A202C] dark:text-white">
                    {isNepali ? 'प्रत्यक्ष सिमुलेटर: "नेक्स्ट-डलर" बजेटिङ रणनीति' : 'Live Interactive Simulator: The Next-Dollar Strategy'}
                  </h2>
                </div>
                {/* Stage Selector */}
                <div className="flex items-center rounded-lg border border-[#E2E8F0] dark:border-[#273748] p-1 bg-white dark:bg-[#111821] text-xs font-bold">
                  <button
                    onClick={() => setCraStage('concrete')}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      craStage === 'concrete'
                        ? 'bg-emerald-500 text-white shadow-xs'
                        : 'text-[#4A5568] dark:text-[#CBD5E1]'
                    }`}
                  >
                    {isNepali ? 'ठोस (Coins/Bills)' : '1. Concrete'}
                  </button>
                  <button
                    onClick={() => setCraStage('representational')}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      craStage === 'representational'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-[#4A5568] dark:text-[#CBD5E1]'
                    }`}
                  >
                    {isNepali ? 'प्रतिनिधित्वमूलक (Visual Ruler)' : '2. Representational'}
                  </button>
                  <button
                    onClick={() => setCraStage('abstract')}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      craStage === 'abstract'
                        ? 'bg-purple-600 text-white shadow-xs'
                        : 'text-[#4A5568] dark:text-[#CBD5E1]'
                    }`}
                  >
                    {isNepali ? 'अमूर्त / AT (Digital Up)' : '3. Abstract AT'}
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-[#111821] border border-blue-200 dark:border-blue-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#718096] dark:text-[#94A3B8] font-bold block uppercase">
                    {isNepali ? 'किराना पसलको वस्तु मूल्य' : 'Store Item Cost:'}
                  </span>
                  <span className="text-2xl font-black text-[#1A202C] dark:text-white font-mono">
                    ${itemPrice.toFixed(2)}
                  </span>
                </div>

                <div className="text-xs sm:text-sm font-medium text-[#4A5568] dark:text-[#CBD5E1] text-center sm:text-right">
                  {craStage === 'concrete' && (
                    <span className="text-emerald-700 dark:text-emerald-300 font-bold">
                      {isNepali
                        ? '→ ५ वटा वास्तविक $१ का भौतिक नोटहरू गनेर दिनुहोस् (४ डलर + १ थप)'
                        : '→ Count out 5 physical $1 bills into the cashier’s hand (4 whole dollars + 1 next dollar)'}
                    </span>
                  )}
                  {craStage === 'representational' && (
                    <span className="text-blue-700 dark:text-blue-300 font-bold">
                      {isNepali
                        ? '→ दृश्य स्केलमा ४ अंक हेर्नुहोस् र दायाँतर्फ ५ मा स्लाइड गर्नुहोस्'
                        : '→ Locate "4" on the visual number line and jump right to "5"'}
                    </span>
                  )}
                  {craStage === 'abstract' && (
                    <span className="text-purple-700 dark:text-purple-300 font-bold">
                      {isNepali
                        ? '→ नेक्स्ट-डलर एपमा "५" ट्याप गर्नुहोस् (स्वतन्त्र क्यासियर भुक्तानी)'
                        : '→ Tap "$5" on the accessible Next-Dollar speech-output register app'}
                    </span>
                  )}
                </div>
              </div>

              {/* Interactive Visual Scaffold Display */}
              <div className="rounded-xl p-5 border border-[#E2E8F0] dark:border-[#273748] bg-[#FAF7EE] dark:bg-[#182330]">
                {craStage === 'concrete' && (
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {[1, 2, 3, 4, 5].map((bill) => (
                      <div
                        key={bill}
                        className="px-4 py-2.5 rounded-lg bg-emerald-600 text-white font-mono font-black text-sm shadow-sm flex items-center gap-1.5 border-2 border-emerald-400"
                      >
                        <DollarSign className="h-4 w-4" />
                        <span>$1 Bill #{bill}</span>
                      </div>
                    ))}
                  </div>
                )}

                {craStage === 'representational' && (
                  <div className="flex items-center justify-between gap-1 overflow-x-auto py-2">
                    {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                      <div
                        key={num}
                        className={`flex-1 min-w-[40px] text-center p-2 rounded-lg font-bold text-xs border ${
                          num === 5
                            ? 'bg-blue-600 text-white border-blue-400 ring-2 ring-blue-300 shadow-sm'
                            : num === 4
                              ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 border-amber-300'
                              : 'bg-white dark:bg-[#111821] text-[#718096] border-slate-200 dark:border-slate-800'
                        }`}
                      >
                        <span className="block text-sm font-mono">{num}</span>
                        <span className="text-[10px] block">
                          {num === 4 ? '$4.35' : num === 5 ? (isNepali ? 'तिर्ने' : 'PAY') : ''}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {craStage === 'abstract' && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['$3.00', '$4.00', '$5.00 (Correct)', '$6.00'].map((btn, i) => (
                      <button
                        key={i}
                        className={`p-3 rounded-xl font-bold text-xs sm:text-sm text-center transition-all ${
                          btn.includes('5.00')
                            ? 'bg-purple-600 text-white shadow-md ring-2 ring-purple-300'
                            : 'bg-white dark:bg-[#111821] text-[#4A5568] dark:text-[#CBD5E1] border border-slate-200 dark:border-slate-800'
                        }`}
                      >
                        {btn}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* Zone 2: Theoretical Foundations 5-card matrix */}
            <section id="theoretical-foundations" className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xl font-black text-[#1A202C] dark:text-white">
                  <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <h2>{content.foundationsTitle}</h2>
                </div>
                <p className="mt-1 text-sm sm:text-base text-[#4A5568] dark:text-[#CBD5E1]">
                  {content.foundationsSubtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {content.foundations.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[#E2E8F0] dark:border-[#273748] bg-white dark:bg-[#182330] p-5 shadow-xs hover:border-blue-400 dark:hover:border-blue-600 transition-all space-y-2.5"
                  >
                    <div className="flex items-center gap-2.5 text-blue-700 dark:text-blue-300 font-bold text-base">
                      <Puzzle className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />
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
                  <Layers className="h-6 w-6 text-blue-600 dark:text-blue-400" />
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
                        className="hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition-colors"
                      >
                        <td className="p-3.5 sm:p-4 font-bold text-blue-700 dark:text-blue-300 whitespace-nowrap align-top">
                          {row.tier}
                        </td>
                        <td className="p-3.5 sm:p-4 text-[#4A5568] dark:text-[#CBD5E1] align-top leading-relaxed">
                          {row.math}
                        </td>
                        <td className="p-3.5 sm:p-4 text-[#4A5568] dark:text-[#CBD5E1] align-top leading-relaxed">
                          {row.literacy}
                        </td>
                        <td className="p-3.5 sm:p-4 text-[#4A5568] dark:text-[#CBD5E1] align-top leading-relaxed">
                          {row.adl}
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
                  <Sliders className="h-6 w-6 text-blue-600 dark:text-blue-400" />
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
                            <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
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
              <div className="rounded-2xl border-2 border-blue-400 dark:border-blue-700 bg-gradient-to-r from-blue-500/10 via-blue-600/15 to-blue-500/10 dark:from-blue-950/40 dark:via-blue-900/50 dark:to-blue-950/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="text-base sm:text-lg font-bold text-blue-950 dark:text-blue-100">
                    {content.ctaTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-900 dark:text-blue-200">
                    {content.ctaDesc}
                  </p>
                </div>
                <Link
                  href="/tools/sentence-builder"
                  className="shrink-0 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md flex items-center gap-2"
                >
                  <span>{content.ctaButton}</span>
                </Link>
              </div>
            </section>

            {/* Zone 5: 6-Step Implementation Roadmap */}
            <section id="implementation-roadmap" className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xl font-black text-[#1A202C] dark:text-white">
                  <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
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
                    <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-black text-sm flex items-center justify-center border border-blue-200 dark:border-blue-800">
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
                  <ShieldCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
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
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 text-sm sm:text-base font-bold text-[#1A202C] dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-[#718096] transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''
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
