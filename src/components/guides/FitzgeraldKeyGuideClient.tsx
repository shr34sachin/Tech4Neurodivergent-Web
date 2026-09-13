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
  Palette,
  Compass,
  HelpCircle,
  FolderSync,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function FitzgeraldKeyGuideClient() {
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
        ? 'AAC र फिट्जगेराल्ड कि रङ-सङ्केत निर्देशिका'
        : 'AAC & Fitzgerald Key Color-Coding Guide',
      href: '/guides/aac-fitzgerald-key-color-coding',
    },
  ];

  const content = {
    badge: isNepali ? 'क्लिनिकल तथा शैक्षिक निर्देशिका' : 'Clinical & Educational Guide',
    readingTime: isNepali ? '७ मिनेट पढाइ' : '7 min read',
    audience: isNepali ? 'अभिभावक, SLP, SPED शिक्षक' : 'Parents, SLPs, SPED Teachers',
    h1Title: isNepali
      ? 'AAC र फिट्जगेराल्ड कि रङ-सङ्केत: गैर-मौखिक तथा इसारा सञ्चारकर्ताहरूको सशक्तीकरण'
      : 'AAC & Fitzgerald Key Color-Coding: Supporting Non-Verbal and Gestural Communicators',
    featuredTitle: isNepali ? 'कार्यकारी सारांश र मूल परिभाषा' : 'Executive Summary & Core Definition',
    featuredSnippet: isNepali
      ? 'फिट्जगेराल्ड कि (Fitzgerald Key) एक रङ-सङ्केत प्रणाली हो जसले संवर्धित तथा वैकल्पिक सञ्चार (AAC) डिस्प्लेमा प्रत्येक व्याकरणिक श्रेणीका लागि एक निश्चित रङ निर्धारण गर्दछ। यसले नबोल्ने र इसाराबाट सञ्चार गर्ने सिकारुहरूलाई शब्दहरू छिटो फेला पार्न र व्याकरणिक रूपमा व्यवस्थित वाक्यहरू निर्माण गर्न मद्दत गर्दछ। यो प्रणाली सन् १९२० को दशकमा एडिथ फिट्जगेराल्डको बहिरा शिक्षा ढाँचाबाट अनुकूलित गरिएको हो। मानक रङ योजना: पहेंलो = सर्वनाम/व्यक्ति, हरियो = क्रिया/कार्य, सुन्तला = नाम/वस्तु, सेतो = विशेषण/वर्णन, नीलो = पूर्वसर्ग/स्थान, र गुलाबी वा रातो = सामाजिक अभिव्यक्ति तथा प्रश्नहरू।'
      : 'The Fitzgerald Key is a color-coding system that assigns a specific color to each grammatical category within an Augmentative and Alternative Communication (AAC) display, helping nonspeaking and gestural communicators locate words faster and construct grammatically organized sentences. Originally adapted from Edith Fitzgerald\'s 1920s language framework, standard color schemes assign yellow to pronouns/people, green to verbs/actions, orange to nouns/things, white to adjectives/descriptors, blue to prepositions/locations, and pink or red to social words and questions.',
    featuredTakeaway: isNepali
      ? 'मुख्य निष्कर्ष: फिट्जगेराल्ड किले पढ्न नसक्ने सिकारुहरूलाई पनि दृश्य व्याकरण प्रदान गर्दछ। सिकारुलाई क्रिया के हो थाहा नभए पनि हरियो सङ्केतले कार्य जनाउँछ भन्ने बुझ्न सक्छ। यसले वाक्य निर्माण गर्दा लाग्ने मानसिक भार घटाउँछ र एकल शब्दको मागबाट स्वतःस्फूर्त सञ्चारतर्फ रूपान्तरण गर्न सहयोग गर्दछ।'
      : 'Clinical Takeaway: The Fitzgerald Key provides a visual grammar that operates independently of reading ability. A learner does not need grammatical theory to know green represents actions. It acts as an automatic navigation cue, reducing cognitive load and scaffolding spontaneous, generative multi-word communication.',

    // Sidebar TOC
    tocTitle: isNepali ? 'यस निर्देशिकामा' : 'Table of Contents',
    tocLinks: [
      { id: 'foundations', label: isNepali ? 'स्नायु-विकासात्मक मूल आधारहरू' : 'Theoretical & Neurodevelopmental Foundation' },
      { id: 'continuum', label: isNepali ? 'सहायक प्रविधि (AT) स्पेक्ट्रम' : 'Assistive Technology Continuum' },
      { id: 'color-breakdown', label: isNepali ? 'फिट्जगेराल्ड रङ वर्गीकरण' : 'Color System Breakdown' },
      { id: 'condition-specific', label: isNepali ? 'अवस्था-विशिष्ट अनुकूलनहरू' : 'Condition-Specific Adaptations' },
      { id: 'implementation', label: isNepali ? 'घर तथा कक्षाकोठा कार्यान्वयन गाइड' : 'Home & Classroom Implementation Guide' },
      { id: 'faq', label: isNepali ? 'क्लिनिकल सोधपुछ तथा FAQ' : 'Clinical FAQ' },
    ],

    // Section 1: Foundations
    foundationsTitle: isNepali ? 'सैद्धान्तिक तथा स्नायु-विकासात्मक आधारहरू' : 'Theoretical & Neurodevelopmental Foundation',
    foundationsIntro: isNepali
      ? 'AAC मा रङ-सङ्केतले एकैसाथ धेरै स्नायु-विकासात्मक अवरोधहरूलाई सम्बोधन गर्दछ। यी संयन्त्रहरू बुझ्दा टोलीहरूलाई सिकारुको निदान स्तरभन्दा माथि उठेर उनीहरूको वास्तविक प्रशोधन प्रोफाइलसँग मिल्ने प्रणाली चयन र अनुकूलन गर्न मद्दत पुग्छ:'
      : 'Color-coding in AAC addresses several neurodevelopmental barriers simultaneously. Understanding these mechanisms helps teams select and customize systems that match the learner\'s actual processing profile rather than their diagnostic label:',
    foundationsCards: [
      {
        title: isNepali ? 'कार्यकारी स्मरण क्षमताको भार (Working Memory Load)' : 'Working Memory Load',
        desc: isNepali
          ? 'वाक्य निर्माण गर्दा अर्को सङ्केत खोज्दै गर्दा पहिलेका शब्दहरू दिमागमा राख्नुपर्छ। डाउन सिन्ड्रोम, बौद्धिक अपाङ्गता, र अटिजममा देखिने कमजोर दृश्य-श्रव्य कार्यस्मरणले गर्दा यो प्रक्रियाले दिमागलाई चाँडै थकाउँछ। फिट्जगेराल्ड किले दृश्य खोजी क्षेत्रलाई संकुचित गरेर समय र ऊर्जा बचत गर्छ: कार्य शब्द चाहिएमा पूरै बोर्ड खोज्नुको सट्टा हरियो भाग मात्र हेरे पुग्छ।'
          : 'Constructing a sentence requires holding multiple words in mind while searching for the next symbol. For learners with reduced working memory, this search-and-hold process quickly exceeds capacity. The Fitzgerald Key reduces search time by narrowing the visual field: scanning only the green region for actions instead of the entire display.',
      },
      {
        title: isNepali ? 'कार्यकारी कार्य शिथिलता र अनुक्रम (Executive Dysfunction)' : 'Executive Dysfunction & Sequencing',
        desc: isNepali
          ? 'शब्दहरूलाई व्याकरणिक रूपमा मिलाउन योजना, क्रमबद्धता, र स्व-निगरानी चाहिन्छ। देब्रेबाट दायाँ रङ-सङ्केत मिलावट (पहेंलो → हरियो → सुन्तला → नीलो) ले बाह्य अनुक्रम ढाँचा प्रदान गर्दछ जसले आन्तरिक कार्यकारी शिथिलतालाई परिपूर्ति गर्छ। सिकारुले स्वतन्त्र रूपमा व्याकरण नजाने पनि रङको बाटो पछ्याउन सक्छ।'
          : 'Sequencing words into a grammatically coherent message demands planning and monitoring. The color-coded left-to-right arrangement (yellow → green → orange → blue) provides an external sequencing scaffold that compensates for internal executive dysfunction.',
      },
      {
        title: isNepali ? 'फाइन-मोटर अप्राक्सिया र मोटर योजना (Fine-Motor Apraxia)' : 'Fine-Motor Apraxia & Motor Planning',
        desc: isNepali
          ? 'सेरेब्रल पाल्सी (CP) र केही अटिस्टिक सिकारुहरूमा मोटर प्रणालीले सटीक र द्रुत चयन गर्न सक्दैन। अनावश्यक दृश्य खोजीले मोटर प्रयासहरूको संख्या बढाउँछ, जसले थकान र त्रुटि दर वृद्धि गर्दछ। रङ-सङ्केतले लक्ष्य सङ्केतहरूलाई अनुमानित समूहमा राखेर नेभिगेसनको शारीरिक लागत घटाउँछ।'
          : 'In CP and motor-planning challenges, the motor system cannot reliably execute precise selections. Every unnecessary visual search multiplies physical attempts, compounding fatigue and errors. Color-coding minimizes the motor cost of navigation.',
      },
      {
        title: isNepali ? 'अन्तर-इन्द्रिय खाडल र संवेग अधिभार (Interoception & Overload)' : 'Interoception Gaps & Emotional Overload',
        desc: isNepali
          ? 'जब सिकारु तनावमा हुन्छ, संज्ञानात्मक स्रोतहरू तीव्र रूपमा साँघुरिन्छन्। कष्टमा रहेको सिकारुले जटिल वा अव्यवस्थित ग्रिड चलाउन सक्दैन। स्पष्ट रूपमा चिन्ह लगाइएको "म महसुस गर्छु" खण्ड (प्रायः गुलाबी वा रातो) भएको रङ-सङ्केत प्रणालीले उच्च शारीरिक तनावमा पनि संवेगात्मक शब्दावलीमा छिटो पहुँच प्रदान गर्दछ।'
          : 'When a learner is dysregulated, cognitive bandwidth narrows. A color-coded system with a clearly marked emotional section (often pink) provides a fast-access pathway to emotional vocabulary even under high physiological stress.',
      },
      {
        title: isNepali ? 'दृश्य प्रशोधन भिन्नता र CVI (Visual Processing Differences)' : 'Visual Processing Differences & CVI',
        desc: isNepali
          ? 'धेरै अटिस्टिक सिकारुहरू र सेरेब्रल पाल्सीसँग सम्बन्धित कोर्टिकल भिजुअल इम्पेयरमेन्ट (CVI) भएका व्यक्तिहरूले आकार वा पाठभन्दा रङलाई धेरै प्रभावकारी रूपमा प्रशोधन गर्छन्। फिट्जगेराल्ड किले साना अक्षर वा सूक्ष्म आइकनमा भर पर्नुको सट्टा रङलाई प्राथमिक नेभिगेसन माध्यमको रूपमा प्रयोग गर्दछ।'
          : 'Many autistic learners and individuals with CP-related cortical visual impairment (CVI) process color more efficiently than shape or text. The Fitzgerald Key leverages this strength, using color as the primary navigational channel.',
      },
    ],

    // Color Breakdown Matrix
    colorBreakdownTitle: isNepali ? 'मानक फिट्जगेराल्ड रङ वर्गीकरण' : 'Standard Fitzgerald Key Color Palette',
    colorBreakdownSubtitle: isNepali
      ? 'प्रत्येक व्याकरणिक वर्गको लागि विश्वव्यापी रूपमा स्वीकार गरिएको रङ-सङ्केत ढाँचा'
      : 'Universally accepted grammatical category mappings across modern AAC systems',
    colors: [
      {
        name: isNepali ? 'पहेंलो (Yellow)' : 'Yellow',
        category: isNepali ? 'सर्वनाम तथा व्यक्ति (Pronouns / People)' : 'Pronouns / People',
        examples: isNepali ? 'म, तिमी, हामी, शिक्षक, आमा, डाक्टर' : 'I, you, we, they, teacher, mom, doctor',
        badgeColor: 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200 border-amber-300 dark:border-amber-800',
        dotColor: 'bg-amber-400',
      },
      {
        name: isNepali ? 'हरियो (Green)' : 'Green',
        category: isNepali ? 'क्रिया तथा कार्य (Verbs / Actions)' : 'Verbs / Actions',
        examples: isNepali ? 'जानु, खानु, खेल्नु, रोकिनु, मद्दत गर्नु' : 'go, eat, play, stop, want, help, see',
        badgeColor: 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800',
        dotColor: 'bg-emerald-500',
      },
      {
        name: isNepali ? 'सुन्तला (Orange)' : 'Orange',
        category: isNepali ? 'नाम तथा वस्तुहरू (Nouns / Objects)' : 'Nouns / Objects',
        examples: isNepali ? 'स्याउ, पानी, खेलौना, जुत्ता, पुस्तक' : 'apple, water, toy, shoe, book, iPad',
        badgeColor: 'bg-orange-100 dark:bg-orange-950/60 text-orange-800 dark:text-orange-200 border-orange-300 dark:border-orange-800',
        dotColor: 'bg-orange-500',
      },
      {
        name: isNepali ? 'सेतो वा खरानी (White / Grey)' : 'White / Descriptors',
        category: isNepali ? 'विशेषण तथा वर्णन (Adjectives / Descriptors)' : 'Adjectives / Descriptors',
        examples: isNepali ? 'ठूलो, सानो, तातो, छिटो, रमाइलो' : 'big, little, hot, cold, fast, slow, good',
        badgeColor: 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700',
        dotColor: 'bg-slate-300 dark:bg-slate-500',
      },
      {
        name: isNepali ? 'नीलो (Blue)' : 'Blue',
        category: isNepali ? 'पूर्वसर्ग तथा स्थान (Prepositions / Places)' : 'Prepositions / Places',
        examples: isNepali ? 'भित्र, बाहिर, माथि, मुनि, घर, पार्क' : 'in, on, under, out, here, home, park',
        badgeColor: 'bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-800',
        dotColor: 'bg-blue-500',
      },
      {
        name: isNepali ? 'गुलाबी वा रातो (Pink / Red)' : 'Pink / Red',
        category: isNepali ? 'सामाजिक अभिव्यक्ति, भावना तथा प्रश्न (Social / Emotions / Questions)' : 'Social Words, Emotions & Questions',
        examples: isNepali ? 'नमस्ते, धन्यवाद, मलाई दुख्यो, किन, के' : 'hello, thank you, bye, I hurt, why, what',
        badgeColor: 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200 border-rose-300 dark:border-rose-800',
        dotColor: 'bg-rose-500',
      },
    ],

    // Section 2: Continuum Table
    continuumTitle: isNepali ? 'सहायक प्रविधि (AT) टियरहरूमा कार्यान्वयन' : 'The Role of Assistive Technology (AT)',
    continuumIntro: isNepali
      ? 'फिट्जगेराल्ड कि प्रत्येक प्रविधि टियरमा लागू गर्न सकिन्छ, जसले गर्दा यो AAC मा सबैभन्दा बहुमुखी र भरपर्दो संगठनात्मक ढाँचाहरूमध्ये एक बनेको छ:'
      : 'The Fitzgerald Key can be implemented across every technology tier, making it one of the most versatile organizational frameworks in AAC:',
    continuumRows: [
      {
        tier: isNepali ? 'लो-टेक (कम प्रविधि)' : 'Low-Tech',
        badge: 'Low-Tech',
        color: 'emerald',
        tools: isNepali
          ? 'रङ-सङ्केत लेमिनेटेड कोर बोर्डहरू, रङ्गीन ट्याब डिभाइडर भएका सञ्चार पुस्तकहरू, रङ-सङ्केत पृष्ठ भएका PODD पुस्तकहरू'
          : 'Color-coded laminated core boards, communication books with colored tab dividers, PODD books with color-coded page sets',
        features: isNepali
          ? 'पहेंलो सर्वनाम पट्टी, हरियो क्रिया स्तम्भ, र सुन्तला नाम ग्रिड भएको पोर्टेबल सेरेब्रल पाल्सी सञ्चार बोर्ड। ब्याट्री आवश्यक पर्दैन, टिकाउ, र सबै वातावरणमा सुरक्षित।'
          : 'A portable cerebral palsy communication board with yellow pronoun strips, green verb columns, and orange noun grids. Zero batteries, highly durable, waterproof.',
      },
      {
        tier: isNepali ? 'मिड-टेक (मध्यम प्रविधि)' : 'Mid-Tech',
        badge: 'Mid-Tech',
        color: 'blue',
        tools: isNepali
          ? 'मल्टी-म्यासेज डिभाइसमा रङ-सङ्केत ओभरलेहरू, रङ श्रेणी अनुसार समूहबद्ध गरिएका बोल्ने बटनहरू (Talking Buttons)'
          : 'Color-coded overlays on multi-message devices, talking buttons grouped by color category',
        features: isNepali
          ? 'प्रत्येक व्याकरणिक वर्गका मुख्य शब्दहरू प्रतिनिधित्व गर्ने फिट्जगेराल्ड रङको फ्रेम भएका ६ वटा बोल्ने बटनहरूको सेट। तत्काल आवाज पृष्ठपोषण (Auditory Feedback)।'
          : 'A set of six talking buttons, each framed in its Fitzgerald color, representing core words from each grammatical class with recorded auditory output.',
      },
      {
        tier: isNepali ? 'हाई-टेक (उच्च प्रविधि)' : 'High-Tech',
        badge: 'High-Tech',
        color: 'purple',
        tools: isNepali
          ? 'फिट्जगेराल्ड कि ग्रिड सेटिङ भएका डायनामिक AAC एपहरू (TouchChat, Proloquo2Go, LAMP), प्रति सेल अनुकूलन योग्य पृष्ठभूमि रङ'
          : 'Dynamic AAC apps with Fitzgerald Key grid settings (Proloquo2Go, TouchChat, LAMP Words for Life), customizable cell background colors',
        features: isNepali
          ? 'शब्दावली स्तरहरूमा लगातार व्याकरणिक म्यापिङ कायम राख्ने रङ-सङ्केत गरिएका फोल्डरहरू। नबोल्ने अटिजमका लागि आँखा-हेरचाह वा स्विच-पहुँचसँग उपयुक्त।'
          : 'Assistive technology for nonverbal autism configured with color-coded folders maintaining consistent grammatical mapping across vocabulary levels.',
      },
    ],
    continuumNote: isNepali
      ? 'महत्त्वपूर्ण डिजाइन नोट: फिट्जगेराल्ड कि एक सहयोगी ढाँचा हो, कडा नियम होइन। केही सिकारुहरूले पूर्ण ६-रङ प्रणालीबाट लाभ उठाउँछन्; अरूलाई दृश्य जटिलता कम गर्न २ वा ३ रङ मात्र चाहिन्छ। कम-उत्तेजना (low-stimulus) सेटिङहरूमा व्याकरणिक समूह तर्क सुरक्षित राख्दै रङलाई हल्का (desaturated) बनाउन सकिन्छ।'
      : 'Critical Design Note: The Fitzgerald Key is an organizational scaffold, not a rigid mandate. Some learners benefit from the full six-color system; others need only two or three colors to reduce visual complexity. For low-stimulus tech configurations, muted pastels preserve the categorical distinction without triggering sensory overstimulation.',

    // Section 3: Condition-Specific
    conditionTitle: isNepali ? 'अवस्था-विशिष्ट व्यावहारिक अनुकूलनहरू' : 'Condition-Specific Practical Adaptations',
    
    // ASD
    asdTitle: isNepali ? 'अटिजम स्पेक्ट्रम डिसअर्डर (Autism Spectrum Disorder - ASD)' : 'Autism Spectrum Disorder (ASD)',
    asdBody: isNepali
      ? 'अटिस्टिक सिकारुहरूका लागि फिट्जगेराल्ड किले दृश्य पूर्वानुमानयोग्यता प्रदान गर्दछ र अव्यवस्थित सङ्केत लेआउटको चिन्ता घटाउँछ। धेरै अटिस्टिक व्यक्तिहरूमा बलियो ढाँचा पहिचान (Pattern Recognition) क्षमता हुने भएकाले रङ-सङ्केत गरिएको व्याकरण स्वाभाविक रूपमा प्रभावकारी हुन्छ। सबै पृष्ठ र उपकरणहरूमा रङको स्थिति स्थिर राख्नुहोस् (यदि हरियो क्रिया दोस्रो पङ्क्तिमा छ भने, यो हरेक फोल्डरमा दोस्रो पङ्क्तिमै हुनुपर्छ)। संवेदी संवेदनशीलता भएका सिकारुहरूका लागि चम्किलो नियोन रङहरू हटाएर हल्का पेसेल (Pastel) रङहरू प्रयोग गर्नुहोस्। यसलाई एइडेड ल्याङ्ग्वेज इनपुट (Aided Language Input) सँग जोड्नुहोस्: सञ्चार साझेदारले बोल्दै गर्दा सङ्केत थिचेर रङ-व्याकरण सम्बन्ध स्वाभाविक रूपमा देखाउनुपर्छ।'
      : 'For autistic learners, the Fitzgerald Key supports visual predictability and reduces the anxiety of navigating an unpredictable symbol layout. Many autistic individuals have strong pattern recognition skills, making color-coded grammar a natural fit. Maintain consistent color placement across all pages and devices. Ensure AAC systems include a robust, color-coded emotional vocabulary page for gestural communicators. Use muted pastels instead of neon colors to prevent visual sensory overload, and pair the display with aided language input.',
    asdAacCta: isNepali
      ? 'हाम्रो नि:शुल्क द्विभाषिक वाक्य बनाउने (Sentence Builder AAC) र कम-उत्तेजना संवेग व्यवस्थापन मोड्युलहरू प्रयोग गर्नुहोस्'
      : 'Try our free bilingual Sentence Builder AAC and Low-Stimulus Communication tools',

    // Down Syndrome & ID
    downTitle: isNepali ? 'डाउन सिन्ड्रोम तथा बौद्धिक अपाङ्गता (Down Syndrome & ID)' : 'Down Syndrome & Intellectual Disabilities (ID)',
    downBody: isNepali
      ? 'डाउन सिन्ड्रोम र बौद्धिक अपाङ्गता भएका सिकारुहरूले फिट्जगेराल्ड किको ठोस, दृश्य व्याकरणबाट धेरै फाइदा लिन्छन् किनकि उनीहरूमा श्रव्य कार्यस्मरण र अमूर्त व्याकरण कमजोर भए पनि दृश्य-स्थानिक (Visual-Spatial) क्षमता बलियो हुन्छ। पहिले दुई-रङ प्रणालीबाट सुरु गर्नुहोस् (कार्यका लागि हरियो र वस्तुका लागि सुन्तला) र सिकारुको शब्दावली बढ्दै जाँदा अन्य रङ थप्नुहोस्। दैनिक जीवन सीप (ADL) कार्य विश्लेषण तालिकामा रङ कोड प्रयोग गर्नुहोस्: "पहिले हरियो (धुने), त्यसपछि सुन्तला (हात)।" प्रत्येक रङ क्षेत्रका लागि श्रव्य प्रतिक्रिया (Auditory Feedback) दिनुहोस् जसले बहु-संवेदी माध्यमबाट व्याकरणिक अवधारणालाई बलियो बनाउँछ।'
      : 'Adaptive learning tools for Down syndrome and ID benefit from concrete, visual grammar because many learners have strengths in visual-spatial processing alongside auditory working memory limitations. Start with a simplified two-color system (green for actions, orange for things) and gradually introduce additional categories. Use the color code during task analysis ADL routines ("First green wash, then orange hands"), and provide auditory feedback for each color category to reinforce concepts.',

    // Cerebral Palsy
    cpTitle: isNepali ? 'सेरेब्रल पाल्सी (Cerebral Palsy - CP)' : 'Cerebral Palsy (CP)',
    cpBody: isNepali
      ? 'सेरेब्रल पाल्सी भएका सिकारुहरूका लागि फिट्जगेराल्ड किलाई उनीहरूको मोटर पहुँच विधि (Touch, Switch, Eye-Gaze) अनुसार अनुकूलन गर्नुपर्छ। आँखा-हेरचाह (Eye-Gaze) वा स्विच स्क्यानिङ प्रयोग गर्दा प्रत्येक रङ क्षेत्र सिकारुको छनोट शुद्धताका लागि पर्याप्त ठूलो हुनुपर्छ। काँप्ने (Tremor) समस्या भएका सिकारुहरूलाई ६०-सेल ग्रिडको सट्टा ४ वटा ठूला रङ क्षेत्र मात्र आवश्यक पर्न सक्छ। कोर्टिकल भिजुअल इम्पेयरमेन्ट (CVI) भएकाहरूका लागि कालो पृष्ठभूमिमा पहेंलो सङ्केत जस्ता उच्च-कन्ट्रास्ट रङ जोडीहरू प्रयोग गर्नुहोस्। स्विच-स्क्यानिङ प्रणालीमा फिट्जगेराल्ड देब्रे-दायाँ रङ अनुक्रम पछ्याउनुहोस् ताकि प्रत्यक्ष छनोट गर्न नसके पनि व्याकरणिक संरचना कायम रहोस्।'
      : 'For learners with CP, the Fitzgerald Key must be adapted to motor access methods before grammatical benefits can be realized. On cerebral palsy communication boards accessed via eye-gaze or switch scanning, ensure color zones are large enough to match selection accuracy. A learner with tremor may need four large color regions rather than a dense grid. Use high-contrast color pairings (yellow on dark) for learners with CVI, and align switch-scanning sequences to the left-to-right grammatical order.',

    // Section 4: Stepper
    stepperTitle: isNepali ? 'घर तथा कक्षाकोठा कार्यान्वयन गाइड' : 'Home and Classroom Implementation Guide',
    steps: [
      {
        num: '01',
        title: isNepali ? 'वर्तमान प्रणालीको अडिट गर्नुहोस् (Audit Current System)' : 'Audit the Current System',
        text: isNepali
          ? 'रङ-सङ्केत सुरु गर्नुअघि सिकारुको विद्यमान AAC शब्दावलीको समीक्षा गर्नुहोस्। सङ्केतहरू वर्ग अनुसार समूहीकृत छन् कि अव्यवस्थित छन् पत्ता लगाउनुहोस्। अव्यवस्थित लेआउटले खोजी समय र हताशा बढाउँछ।'
          : 'Before introducing color-coding, review the learner\'s existing AAC vocabulary. Identify whether symbols are already grouped by category or scattered randomly. Random layouts increase visual search time and frustration.',
      },
      {
        num: '02',
        title: isNepali ? 'पहिले दुईवटा रङ मात्र प्रस्तुत गर्नुहोस् (Introduce Two Colors First)' : 'Introduce Two Colors First',
        text: isNepali
          ? 'पहिले हरियो (कार्य/क्रिया) र सुन्तला (वस्तु/नाम) बाट सुरु गर्नुहोस्। यी दुई वर्गले अधिकांश प्रारम्भिक व्यावहारिक सञ्चार समेट्छन् र तुरुन्तै देखिने भिन्नता प्रदान गर्दछन्।'
          : 'Begin with green (actions) and orange (things). These two categories cover the majority of early functional communication and provide immediate, visible contrast.',
      },
      {
        num: '03',
        title: isNepali ? 'दैनिक रूपमा रङ ढाँचा मोडल गर्नुहोस् (Model the Pattern Daily)' : 'Model the Color Pattern Daily',
        text: isNepali
          ? 'सञ्चार गर्दा रङको उच्चारण गर्नुहोस्: "म हरियो शब्द खोज्दैछु—जानुहोस् (Go)! हरियो भनेको हामीले गर्ने काम हो।" यसले सिकारुमाथि दबाब नदिई भाषा सचेतना निर्माण गर्दछ।'
          : 'During aided language input, narrate the color: "I\'m looking for a green word—go! Green means something we do." This builds metalinguistic awareness without demanding performance.',
      },
      {
        num: '04',
        title: isNepali ? 'सबै वातावरणमा निरन्तरता कायम राख्नुहोस् (Maintain Consistency)' : 'Maintain Consistency Across Settings',
        text: isNepali
          ? 'घर, कक्षाकोठा, र थेरापी सत्रहरूमा एउटै रङ-व्याकरण म्यापिङ देखिनुपर्छ। वातावरणपिच्छे फरक रङ प्रयोग गर्दा सिकारुले प्रत्येक नयाँ ठाउँमा प्रणाली पुनः सिक्नुपर्ने बाध्यता आउँछ।'
          : 'The same color-grammar mapping must appear at home, in the classroom, and during therapy. Inconsistent color coding across environments forces the learner to relearn navigation in every new setting.',
      },
      {
        num: '05',
        title: isNepali ? 'सहयोगहरूलाई क्रमशः घटाउँदै लैजानुहोस् (Fade Scaffolds Gradually)' : 'Fade Scaffolds Gradually',
        text: isNepali
          ? 'सिकारुले रङ र व्याकरणको सम्बन्ध बुझ्दै गएपछि मौखिक रङ प्रम्प्टहरू घटाउनुहोस् र स्वतन्त्र रूपमा प्रयोग गर्न दिनुहोस्। केहीलाई पछि रङ आवश्यक नपर्न सक्छ भने केहीलाई सधैं चाहिन्छ—दुवै मान्य हुन्।'
          : 'As the learner internalizes the color-grammar relationship, reduce verbal color prompts and allow independent navigation. Some learners eventually transition beyond color cues; others benefit indefinitely.',
      },
      {
        num: '06',
        title: isNepali ? 'दस्तावेजीकरण र साझेदारी गर्नुहोस् (Document and Share)' : 'Document and Share',
        text: isNepali
          ? 'सिकारुको IEP, AAC पासपोर्ट, वा सञ्चार प्रोफाइलमा फिट्जगेराल्ड कि रङ लेजेन्ड समावेश गर्नुहोस् ताकि नयाँ शिक्षक, सहयोगी, र परिवारका सदस्यहरूले पहिलो दिनदेखि नै सही समर्थन गर्न सकून्।'
          : 'Include the Fitzgerald Key color legend in the learner\'s IEP, AAC passport, or communication profile so that new staff, substitutes, and family members can support the system correctly from day one.',
      },
    ],

    // Section 5: FAQ
    faqTitle: isNepali ? 'बारम्बार सोधिने प्रश्नहरू (Frequently Asked Questions)' : 'Frequently Asked Questions (FAQ)',
    faqSubtitle: isNepali
      ? 'फिट्जगेराल्ड कि र AAC रङ-सङ्केत सम्बन्धी प्रमाण-आधारित क्लिनिकल उत्तरहरू'
      : 'Evidence-based clinical answers regarding AAC Fitzgerald Key color coding',
    faqs: [
      {
        q: isNepali ? 'AAC मा फिट्जगेराल्ड कि (Fitzgerald Key) भनेको के हो?' : 'What is the Fitzgerald Key in AAC?',
        a: isNepali
          ? 'फिट्जगेराल्ड कि एक रङ-सङ्केत प्रणाली हो जसले प्रत्येक व्याकरणिक वर्गलाई निश्चित रङ दिन्छ—सर्वनामका लागि पहेंलो, क्रियाका लागि हरियो, नामका लागि सुन्तला, विशेषणका लागि सेतो, पूर्वसर्गका लागि नीलो, र सामाजिक शब्दहरूका लागि गुलाबी। यसले सञ्चार डिस्प्लेमा लगातार दृश्य ढाँचा पछ्याएर शब्दहरू छिटो खोज्न र व्यवस्थित वाक्य बनाउन AAC प्रयोगकर्ताहरूलाई मद्दत गर्दछ।'
          : 'The Fitzgerald Key is a color-coding system that assigns a specific color to each grammatical category—yellow for pronouns, green for verbs, orange for nouns, white for adjectives, blue for prepositions, and pink for social words. It helps AAC users locate words faster and construct organized sentences by following a consistent visual pattern across their communication display.',
      },
      {
        q: isNepali ? 'के AAC ले बोल्ने क्षमता विकासमा अवरोध पुर्याउँछ?' : 'Can AAC prevent speech development?',
        a: isNepali
          ? 'बिल्कुलै पुर्याउँदैन। दशकौंदेखिका वैज्ञानिक अनुसन्धानहरूले पुष्टि गरेका छन् कि AAC ले बोली विकासमा कुनै बाधा गर्दैन। बरु यसले हताशा घटाएर भरपर्दो सञ्चार माध्यम दिन्छ र भाषाको संरचना मोडल गरेर बोली प्रस्फुटनमा सहयोग पुर्याउन सक्छ। फिट्जगेराल्ड कि जस्ता प्रणालीहरूले गैर-मौखिक र इसारा सञ्चारकर्ताहरूलाई तुरुन्तै भाषामा पहुँच दिन्छन्।'
          : 'No. Decades of research confirm that AAC does not inhibit spoken language. AAC provides a reliable communication pathway that reduces frustration and may support speech emergence by modeling language structure. Introducing AAC early gives nonspeaking and gestural communicators immediate access to language while spoken skills develop at their own pace.',
      },
      {
        q: isNepali ? 'के मेरो बच्चालाई फिट्जगेराल्ड कि प्रयोग गर्न व्याकरण बुझ्न आवश्यक छ?' : 'Does my child need to understand grammar to use the Fitzgerald Key?',
        a: isNepali
          ? 'छैन। सिकारुलाई व्याकरणका प्राविधिक शब्दावली थाहा पाउन आवश्यक छैन। रङ ढाँचाले व्याकरणको पाठको रूपमा नभई नेभिगेसन सर्टकटको रूपमा काम गर्छ। समयसँगै, धेरै सिकारुहरूले रङ-व्यवस्थित लेआउटको बारम्बार प्रयोगमार्फत स्वाभाविक रूपमा वाक्य संरचना आत्मसात गर्छन्।'
          : 'No. The learner does not need to know grammatical terminology. The color pattern functions as a navigational shortcut, not a grammar lesson. Over time, many learners internalize syntactic structure implicitly through repeated exposure to the color-organized layout, similar to how neurotypical children acquire grammar naturally.',
      },
      {
        q: isNepali ? 'दृश्य रङ-सङ्केत प्रणालीले डाउन सिन्ड्रोम भएका सिकारुहरूलाई कसरी मद्दत गर्छ?' : 'How do visual color-coded systems help learners with Down syndrome?',
        a: isNepali
          ? 'रङ-सङ्केत AAC ले डाउन सिन्ड्रोममा सामान्य रूपमा देखिने दृश्य-स्थानिक क्षमतालाई उपयोग गर्दछ भने वाक्य बनाउँदा लाग्ने श्रव्य कार्यस्मरणको मागलाई घटाउँछ। स्थिर रङ ढाँचाले दैनिक दिनचर्याहरूमा शब्दावली पुनःप्राप्ति, वाक्य निर्माण, र ADL कार्य विश्लेषण अनुक्रमलाई भरपर्दो आधार दिन्छ।'
          : 'Color-coded AAC leverages the relative visual-spatial strengths common in Down syndrome while reducing the auditory working memory demands of constructing sentences. The consistent color pattern provides a predictable framework that supports vocabulary retrieval, sentence building, and task analysis ADL sequencing across daily routines.',
      },
      {
        q: isNepali ? 'के फिट्जगेराल्ड किलाई सेरेब्रल पाल्सी सञ्चार बोर्डहरूमा प्रयोग गर्न सकिन्छ?' : 'Can the Fitzgerald Key be used with cerebral palsy communication boards?',
        a: isNepali
          ? 'सकिन्छ। फिट्जगेराल्ड किलाई प्रत्यक्ष स्पर्श, स्विच स्क्यानिङ, र आँखा-हेरचाह (Eye-Gaze) लगायत कुनै पनि पहुँच विधिको लागि अनुकूलन गर्न सकिन्छ। मुख्य कुरा प्रत्येक रङ क्षेत्र सिकारुको मोटर क्षमता अनुसार पर्याप्त ठूलो र उचित स्थानमा राखिएको सुनिश्चित गर्नु हो।'
          : 'Yes. The Fitzgerald Key can be adapted for any access method, including direct touch, switch scanning, and eye-gaze. The key consideration is ensuring that each color zone is large enough and positioned appropriately for the learner\'s motor abilities. A multidisciplinary AAC evaluation ensures the layout matches the learner\'s physical and cognitive profile.',
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
                  href="/tools/sentence-builder"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors text-xs font-medium group"
                >
                  <span>{isNepali ? 'वाक्य बनाउने AAC प्रयोग' : 'Sentence Builder AAC'}</span>
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

            {/* 2. Color System Breakdown Matrix */}
            <section id="color-breakdown" className="space-y-6 scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
                  <Palette className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                    {content.colorBreakdownTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                    {content.colorBreakdownSubtitle}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {content.colors.map((col, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white dark:bg-[#182330] border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`w-3.5 h-3.5 rounded-full ${col.dotColor}`} />
                        <span className="font-bold text-neutral-900 dark:text-white text-sm">
                          {col.name}
                        </span>
                      </div>
                    </div>
                    <div className={`px-2.5 py-1 rounded-md text-xs font-medium border ${col.badgeColor}`}>
                      {col.category}
                    </div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">
                      <span className="font-medium text-neutral-700 dark:text-neutral-300">
                        {isNepali ? 'उदाहरण: ' : 'Examples: '}
                      </span>
                      {col.examples}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Assistive Technology Continuum Table */}
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
                        <th className="py-3.5 px-4 sm:px-6 w-1/4">{isNepali ? 'प्रविधि तह' : 'AT Tier'}</th>
                        <th className="py-3.5 px-4 sm:px-6 w-3/8">{isNepali ? 'फिट्जगेराल्ड कि कार्यान्वयन' : 'Fitzgerald Key Setup'}</th>
                        <th className="py-3.5 px-4 sm:px-6 w-3/8">{isNepali ? 'व्यावहारिक उदाहरणहरू' : 'Practical Examples'}</th>
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
                            {row.tools}
                          </td>
                          <td className="py-4 px-4 sm:px-6 align-top text-xs sm:text-sm leading-relaxed">
                            {row.features}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Critical Design Note Callout */}
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                {content.continuumNote}
              </div>
            </section>

            {/* 4. Condition-Specific Adaptations */}
            <section id="condition-specific" className="space-y-6 scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  <FolderSync className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                  {content.conditionTitle}
                </h2>
              </div>

              {/* ASD */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#182330] border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                  {content.asdTitle}
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {content.asdBody}
                </p>
                <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800">
                  <Link
                    href="/tools/sentence-builder"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    <span>{content.asdAacCta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Down Syndrome & ID */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#182330] border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                  {content.downTitle}
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {content.downBody}
                </p>
              </div>

              {/* Cerebral Palsy */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#182330] border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                  {content.cpTitle}
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {content.cpBody}
                </p>
              </div>
            </section>

            {/* 5. Implementation Stepper */}
            <section id="implementation" className="space-y-6 scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                  <Activity className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                  {content.stepperTitle}
                </h2>
              </div>

              <div className="space-y-4">
                {content.steps.map((step, idx) => (
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
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. FAQ Accordion */}
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
