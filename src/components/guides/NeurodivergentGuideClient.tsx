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
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function NeurodivergentGuideClient() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('neurodevelopmental-root-causes');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedTechTier, setSelectedTechTier] = useState<'all' | 'low' | 'mid' | 'high'>('all');

  const flutterAppUrl = process.env.NEXT_PUBLIC_FLUTTER_APP_URL || 'https://app.tech4neurodivergent.com';

  const isNepali = language === 'ne';

  // Scrollspy observer for sticky TOC
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'executive-summary',
        'neurodevelopmental-root-causes',
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

  // Content dictionaries
  const content = {
    badge: isNepali ? 'क्लिनिकल तथा शैक्षिक निर्देशिका' : 'Clinical & Educational Guide',
    audienceTag: isNepali ? 'अभिभावक, विशेष शिक्षक, थेरापिस्टहरू' : 'Parents, SPED Teachers, Therapists',
    readTime: isNepali ? '६ मिनेट पढाइ' : '6 min read',
    lastReviewed: isNepali ? 'क्लिनिकल समीक्षा: सेप्टेम्बर २०२६' : 'Clinically Reviewed: Sept 2026',
    h1: isNepali
      ? 'न्यूरोडाइभर्जेन्ट हुनुको अर्थ के हो? क्लिनिकल तथा आधुनिक दृष्टिकोण'
      : 'What Does It Mean to Be Neurodivergent? A Clinical and Modern Perspective',
    
    // Executive Summary
    execSummaryTitle: isNepali ? 'कार्यकारी सारांश तथा मूल परिभाषा' : 'Executive Summary & Core Definition',
    execSummaryText: isNepali ? (
      <>
        <strong>न्यूरोडाइभर्जेन्ट (Neurodivergent)</strong> हुनुको अर्थ कुनै व्यक्तिको मस्तिष्कको विकास, सूचना प्रशोधन, र संसारसँगको अन्तरक्रिया सामान्य वा &quot;टिपिकल&quot; मानिने तरिकाभन्दा फरक हुनु हो। यो कुनै कमजोरी वा दोष होइन—यो मानव संज्ञान (Human Cognition) को स्वाभाविक प्राकृतिक विविधता हो। न्यूरोडाइभर्जेन्सी अन्तर्गत <strong>अटिजम स्पेक्ट्रम डिसअर्डर (ASD)</strong>, <strong>डाउन सिन्ड्रोम (Down Syndrome)</strong>, <strong>बौद्धिक अपाङ्गता (ID)</strong>, र <strong>सेरेब्रल पाल्सी (CP)</strong> जस्ता अवस्थाहरू पर्दछन्, जसमा विशेष सबल पक्षहरूसँगै सिकाइ, सञ्चार, र शारीरिक गतिशीलतामा विशिष्ट चुनौतीहरू पनि हुन्छन्। सहयोगी दृष्टिकोणबाट, न्यूरोडाइभर्जेन्ट व्यक्तिहरूले प्रायः संवेदी प्रशोधन (Sensory Processing), कार्यकारी कार्य (Executive Functioning), र मोटर योजनामा भिन्नता महसुस गर्दछन् जसले परम्परागत शैक्षिक र सामाजिक वातावरणमा वास्तविक बाधाहरू सिर्जना गर्दछ। आधुनिक विशेष शिक्षा र सहायक प्रविधि (Assistive Technology) को उद्देश्य यी भिन्नताहरूलाई &quot;सुधार्नु&quot; होइन, बरु दृश्य तालिकादेखि आँखाको दृष्टिले चल्ने AAC उपकरणसम्मका अनुकूलित सहयोगहरू प्रदान गर्नु हो जसले सिकारुको स्नायु प्रणालीको सम्मान गर्दै उनीहरूको आत्मनिर्भरता, सञ्चार र सहभागितालाई विस्तार गर्दछ।
      </>
    ) : (
      <>
        Being <strong>neurodivergent</strong> means a person&apos;s brain develops, processes information, and interacts with the world in ways that differ from what is considered &quot;typical&quot; or neurotypical. This is not a deficit—it is a natural variation in human cognition. Neurodivergence encompasses conditions such as <strong>Autism Spectrum Disorder (ASD)</strong>, <strong>Down syndrome</strong>, <strong>intellectual disabilities (ID)</strong>, and <strong>cerebral palsy (CP)</strong>, each presenting unique strengths alongside specific learning, communication, and motor challenges. From a clinical standpoint, neurodivergent individuals often experience differences in sensory processing, executive functioning, and motor planning that create real barriers in traditional educational and social environments. The goal of modern special education and assistive technology is not to &quot;fix&quot; these differences but to provide adaptive supports—ranging from visual schedules to eye-gaze AAC devices—that honor the learner&apos;s neurology while expanding their independence, communication, and participation.
      </>
    ),

    // Theoretical Foundation
    theoTitle: isNepali ? 'सैद्धान्तिक तथा स्नायु-विकासात्मक आधारहरू' : 'Theoretical & Neurodevelopmental Foundation',
    theoSubtitle: isNepali
      ? 'प्रभावकारी सहयोगहरू डिजाइन गर्न, हामीले पहिले अवरोधहरू किन आउँछन् भनेर बुझ्नुपर्छ। न्यूरोडाइभर्जेन्ट सिकारुहरू प्रयास वा बौद्धिकताको कमीले संघर्ष गर्दैनन्; उनीहरू संघर्ष गर्छन् किनभने हाम्रो वातावरण उनीहरूको मस्तिष्क संरचना अनुसार बनेको छैन।'
      : 'To design effective supports, we must first understand why barriers exist. Neurodivergent learners do not struggle because of a lack of effort or intelligence; they struggle because the environment was not built for their neurology.',
    rootCauses: [
      {
        id: 'interoception',
        icon: HeartPulse,
        title: isNepali ? 'अन्तर-इन्द्रिय शारीरिक अनुभूतिमा भिन्नता (Interoception Gaps)' : 'Interoception Gaps',
        badge: isNepali ? 'संवेदी स्व-नियमन' : 'Sensory Self-Regulation',
        color: 'rose',
        text: isNepali
          ? 'धेरै अटिस्टिक सिकारुहरू र डाउन सिन्ड्रोम भएका व्यक्तिहरूलाई भित्री शारीरिक संकेतहरू—भोक, थकान, संवेगात्मक उत्तेजना—अनुभूति गर्न कठिनाइ हुन्छ। जब अन्तर-इन्द्रिय सचेतना कमजोर हुन्छ, आत्म-नियमन (Self-Regulation) अत्यन्तै कठिन बन्छ, र बाहिरी संसारका लागि व्यवहारहरू "अप्रत्याशित" वा अनौठो देखिन सक्छन्।'
          : 'Many autistic learners and individuals with Down syndrome experience difficulty sensing internal body signals—hunger, fatigue, emotional arousal. When interoceptive awareness is unreliable, self-regulation becomes extraordinarily difficult, and behavioral responses may appear "unexpected" to outside observers.',
      },
      {
        id: 'working-memory',
        icon: Cpu,
        title: isNepali ? 'कार्यकारी स्मरण क्षमतामा भार (Working Memory Load)' : 'Working Memory Load',
        badge: isNepali ? 'संज्ञानात्मक प्रशोधन' : 'Cognitive Bandwidth',
        color: 'blue',
        text: isNepali
          ? 'बौद्धिक अपाङ्गता भएका सिकारुहरू र अटिजमका कतिपय अवस्थाहरूमा कार्यकारी स्मरण क्षमता (Working Memory) सीमित हुन सक्छ। बहु-चरणीय मौखिक निर्देशनहरूले संज्ञानात्मक क्षमता ओभरलोड गर्न सक्छन्, जसले गर्दा सिकारु प्रतिक्रिया दिन नसकी रोकिन सक्छ—यो अटेरीपनले गर्दा होइन, मस्तिष्क संतृप्त (Neurological Saturation) भएको कारणले हो।'
          : 'Learners with intellectual disabilities and some profiles of ASD often have reduced working memory capacity. Multi-step verbal instructions can overload cognitive bandwidth, causing the learner to freeze or disengage—not from defiance, but from neurological saturation.',
      },
      {
        id: 'fine-motor',
        icon: Hand,
        title: isNepali ? 'सूक्ष्म मांसपेशीय गति तथा योजना (Fine-Motor Apraxia & Motor Planning)' : 'Fine-Motor Apraxia & Motor Planning',
        badge: isNepali ? 'शारीरिक नियन्त्रण' : 'Neuromotor Access',
        color: 'amber',
        text: isNepali
          ? 'सेरेब्रल पाल्सी र डाउन सिन्ड्रोमका कतिपय लक्षणहरूमा मांसपेशी परिचालन योजना (Motor Planning) मा ठूलो भिन्नता हुन्छ। मस्तिष्कलाई के गर्ने भन्ने थाहा हुन्छ, तर मांसपेशीसम्म जाने स्नायु संकेत अवरुद्ध हुन्छ। यसले हस्तलेखन, टाँक लगाउने, र ट्याब्लेटमा सटीक टच गर्ने कार्यलाई शारीरिक रूपमै अत्यन्त थकाइपूर्ण बनाउँछ।'
          : 'Cerebral palsy and certain presentations of Down syndrome involve significant motor planning differences. The brain knows what it wants to do, but the signal to the muscles is disrupted. This makes handwriting, buttoning, and even precise tap gestures on a tablet genuinely exhausting.',
      },
      {
        id: 'executive-dysfunction',
        icon: Brain,
        title: isNepali ? 'कार्यकारी कार्य क्षमतामा शिथिलता (Executive Dysfunction)' : 'Executive Dysfunction',
        badge: isNepali ? 'योजना तथा व्यवस्थापन' : 'Task Sequencing',
        color: 'teal',
        text: isNepali
          ? 'कार्य सुरु गर्ने (Task Initiation), अनुक्रम बनाउने, संज्ञानात्मक लचकता, र आवेग नियन्त्रणमा कठिनाइ ASD, बौद्धिक अपाङ्गता, र मस्तिष्क चोटपछिको अवस्थामा सामान्य छ। बाहिरी दृश्य सहयोग (Visual Scaffolding) बिना, अत्यन्त उत्प्रेरित सिकारु पनि दैनिक परिचित कार्य सुरु वा सम्पन्न गर्न असमर्थ हुन सक्छ।'
          : 'Difficulty with task initiation, sequencing, cognitive flexibility, and impulse control is common across ASD, ID, and acquired brain injuries. Without external scaffolding, even a highly motivated learner may be unable to begin or complete a familiar routine.',
      },
    ],
    rootCauseTakeaway: isNepali
      ? 'यी मूल कारणहरूलाई बुझेपछि हाम्रो उपचारात्मक प्रश्न "यो बालबालिकामा के समस्या छ?" बाट परिवर्तन भएर "यो वातावरणमा के परिवर्तन गर्न आवश्यक छ?" मा रूपान्तरण हुन्छ।'
      : 'Understanding these root causes shifts the intervention question from "What is wrong with this child?" to "What does this environment need to change?"',

    // Assistive Technology Continuum
    atTitle: isNepali ? 'सहायक प्रविधिको भूमिका (The Role of Assistive Technology)' : 'The Role of Assistive Technology (AT)',
    atSubtitle: isNepali
      ? 'न्यूरोडाइभर्जेन्ट सिकारुहरूका लागि सहायक प्रविधि तीन फरक स्तरहरूमा फैलिएको हुन्छ। सबैभन्दा प्रभावकारी योजनाले सिकारुको वर्तमान क्षमता, संवेदी प्रोफाइल, र दैनिक परिवेशलाई ध्यानमा राखेर यी तीनवटै तहका साधनहरूलाई एकीकृत गर्दछ।'
      : 'Assistive technology for neurodivergent learners spans a continuum. The most effective AT plans layer tools across all three tiers, matching the learner&apos;s current abilities, sensory profile, and daily environments.',
    atTiers: [
      {
        id: 'low',
        tier: isNepali ? 'लो-टेक (Low-Tech)' : 'Low-Tech',
        badge: isNepali ? 'शून्य ब्याट्री, उच्च विश्वसनीयता' : 'Zero power, high reliability',
        badgeClass: 'bg-[#EBF7EE] text-[#24633B] dark:bg-[#193322] dark:text-[#7CDA9B] border-[#BDE3C7] dark:border-[#2D5A3A]',
        desc: isNepali ? 'ब्याट्री वा स्क्रिन नचाहिने; स्पर्श र दृश्यमा आधारित' : 'No batteries or screens; tactile and visual',
        examples: isNepali
          ? 'PECS बोर्डहरू, दृश्य तालिका स्ट्रिपहरू, छनोट बोर्डहरू, भारित ल्याप प्याडहरू, रङ्ग-सङ्केत गरिएका फोल्डरहरू'
          : 'PECS boards, visual schedule strips, choice boards, weighted lap pads, color-coded folders',
        pros: isNepali ? 'कहिल्यै चार्ज गर्नु नपर्ने, पानी र खसाइमा नबिग्रिने, शून्य स्क्रिन उत्तेजना' : 'Never needs charging, waterproof & durable, zero screen overstimulation',
      },
      {
        id: 'mid',
        tier: isNepali ? 'मिड-टेक (Mid-Tech)' : 'Mid-Tech',
        badge: isNepali ? 'सामान्य ब्याट्री / आवाज आउटपुट' : 'Simple battery / voice output',
        badgeClass: 'bg-[#E8F2FC] text-[#1E4D7E] dark:bg-[#162A40] dark:text-[#88BDEC] border-[#BBD8F5] dark:border-[#234A6E]',
        desc: isNepali ? 'ब्याट्रीबाट चल्ने; सीमित र सरल डिजिटल अन्तरक्रिया' : 'Battery-operated; limited digital interaction',
        examples: isNepali
          ? 'बोल्ने बटनहरू (जस्तै: Big Mack स्विच), दृश्य काउन्टडाउन भएका टाइमर घडीहरू, सरल आवाज-आउटपुट सञ्चार सहायकहरू'
          : 'Talking buttons (e.g., Big Mack switches), timer clocks with visual countdowns, simple voice-output communication aids',
        pros: isNepali ? 'तत्काल श्रव्य प्रतिक्रिया, सहज पहुँच, न्यून सिकाइ समय' : 'Immediate auditory feedback, single-button access, minimal learning curve',
      },
      {
        id: 'high',
        tier: isNepali ? 'हाई-टेक (High-Tech)' : 'High-Tech',
        badge: isNepali ? 'सफ्टवेयर तथा आँखाको दृष्टिले चल्ने' : 'Dynamic software / eye-gaze',
        badgeClass: 'bg-[#F4EEFB] text-[#552D80] dark:bg-[#2C1C3F] dark:text-[#C7A3F0] border-[#DFC9F7] dark:border-[#523375]',
        desc: isNepali ? 'सफ्टवेयर-आधारित; अनुकूलन योग्य र गतिशील' : 'Software-driven; customizable and dynamic',
        examples: isNepali
          ? 'AAC एपहरू (Proloquo2Go, TouchChat, हाम्रो वेब AAC), दृष्टि-नियन्त्रित प्रणालीहरू (Tobii Dynavox), स्विच-अनुकूल ट्याब्लेटहरू, AI-आधारित दैनिक कार्य विश्लेषण (ADL)'
          : 'AAC apps (Proloquo2Go, TouchChat, our Web AAC), eye-gaze systems (Tobii Dynavox), switch-accessible tablets, AI-powered task analysis ADL prompts',
        pros: isNepali ? 'हजारौं शब्दहरूको भण्डार, व्यक्तिगत आवाज, गतिशील व्याकरण तथा वाक्य निर्माण' : 'Vast vocabulary capacity, personalized synthetic voice, dynamic grammatical sequencing',
      },
    ],
    atKeyPrincipleTitle: isNepali ? 'क्लिनिकल मुख्य सिद्धान्त (Key Principle)' : 'Key Principle',
    atKeyPrincipleText: isNepali
      ? 'हाई-टेक साधन स्वाभाविक रूपमा सबैभन्दा उत्कृष्ट हुन्छ भन्ने छैन। यदि सिकारुको संवेदी प्रोफाइललाई न्यून-उत्तेजना र ठोस, पूर्वानुमान गर्न सकिने दृश्यहरू आवश्यक छ भने एउटा सामान्य लेमिनेट गरिएको दृश्य तालिका स्ट्रिप (लो-टेक) ले $१५,००० को दृष्टि-नियन्त्रित उपकरणलाई पनि पछाडि पार्न सक्छ। सबैभन्दा उत्तम उपकरण त्यही हो जसलाई सिकारुले दैनिक जीवनका विभिन्न परिवेशमा नियमित र सहज रूपमा प्रयोग गर्न सक्छ।'
      : 'High-tech is not inherently better. A laminated visual schedule strip (low-tech) may outperform a $15,000 eye-gaze device if the learner\'s sensory profile requires low-stimulus special education tech and concrete, predictable visuals. The best tool is the one the learner will actually use consistently across settings.',

    // Condition Specific
    condTitle: isNepali ? 'अवस्था-विशिष्ट व्यावहारिक अनुकूलनहरू' : 'Condition-Specific Practical Adaptations',
    condSubtitle: isNepali
      ? 'विभिन्न स्नायु-विकासात्मक अवस्थाहरूको आफ्नै संवेदी तथा शारीरिक आवश्यकताहरू हुन्छन्। यहाँ प्रत्येक अवस्थाका लागि क्लिनिकल अनुकूलन र सिफारिस गरिएका उपकरणहरू प्रस्तुत गरिएको छ:'
      : 'Every neurodevelopmental profile presents distinct sensory and physical access needs. Below are evidence-based adaptations and recommended assistive workflows:',
    
    // ASD
    asdTitle: isNepali ? 'अटिजम स्पेक्ट्रम डिसअर्डर (Autism Spectrum Disorder - ASD)' : 'Autism Spectrum Disorder (ASD)',
    asdBody: isNepali
      ? 'अटिस्टिक सिकारुहरूले प्रायः दृश्य पूर्वानुमान (Visual Predictability) र सेन्सरि-सुरक्षित इन्टरफेसबाट अत्यधिक लाभ प्राप्त गर्दछन्। नबोल्ने वा कम बोल्ने अटिस्टिक बालबालिकाका लागि सहायक प्रविधि मुख्य रूपमा संवर्धित तथा वैकल्पिक सञ्चार (AAC) मा केन्द्रित हुन्छ। मूल शब्दावली बोर्डहरू (Core Vocabulary Boards)—चाहे ती लो-टेक लेमिनेटेड पाना हुन् वा हाई-टेक डिजिटल डिस्प्ले—ले बालबालिकालाई भरपर्दो आवाज प्रदान गर्दछन्। त्यति नै महत्त्वपूर्ण कुरा संवेदी ओभरलोड कम गर्नु हो: अनुकूलन योग्य पृष्ठभूमि, न्यूनतम एनिमेसन, र स्थिर आइकन स्थान भएका AAC एपहरू छनोट गर्नुहोस्। बलियो दृश्य-स्थानिक क्षमता भएका सिकारुहरूका लागि भिडियो मोडलिङ एपहरूले मौखिक निर्देशनभन्दा बढी प्रभावकारी रूपमा सामाजिक दिनचर्या र दैनिक जीवनका सीपहरू सिकाउन सक्छन्।'
      : 'Autistic learners frequently benefit from visual predictability and sensory-safe interfaces. Assistive technology for nonverbal autism often centers on Augmentative and Alternative Communication (AAC). Core vocabulary boards—whether low-tech laminated pages or high-tech dynamic displays—give non-speaking or minimally speaking learners a reliable voice. Equally important is reducing sensory overload: choose AAC apps with customizable backgrounds, minimal animation, and consistent icon placement. For learners with strong visual-spatial skills, video modeling apps (e.g., Model Me Kids) can teach social routines and daily living skills more effectively than verbal instruction alone.',
    asdCtaText: isNepali
      ? 'हाम्रो निःशुल्क द्विभाषिक वाक्य बनाउने (Sentence Builder AAC) र संवेग व्यवस्थापन मोड्युलहरू प्रयोग गर्नुहोस्'
      : 'Try our free bilingual Sentence Builder AAC and Emotion Regulation modules',

    // Down Syndrome & ID
    downTitle: isNepali ? 'डाउन सिन्ड्रोम तथा बौद्धिक अपाङ्गता (Down Syndrome & Intellectual Disabilities)' : 'Down Syndrome & Intellectual Disabilities (ID)',
    downBody: isNepali
      ? 'डाउन सिन्ड्रोम र बौद्धिक अपाङ्गताका लागि अनुकूलन सिकाइ उपकरणहरू ठोस आइकन मिलान, श्रव्य प्रतिक्रिया, र दैनिक कार्य विश्लेषण (Task Analysis ADL) विभाजनमा फस्टाउँछन्। डाउन सिन्ड्रोम भएका सिकारुहरूमा प्रायः दृश्य प्रशोधन र सामाजिक उत्प्रेरणामा बलियो पक्ष हुन्छ तर श्रव्य कार्यकारी स्मरण र बोलीको स्पष्टतामा चुनौतीहरू हुन्छन्। प्रत्येक मौखिक निर्देशनलाई दृश्य आइकनसँग जोड्नुहोस्। सिकारुलाई बहु-चरणीय कार्यहरू (जस्तै: "पहिले हात धुने, त्यसपछि पुछ्ने, अनि कुर्सीमा बस्ने") तत्काल आवाज प्रतिक्रियासहित अभ्यास गर्न मिड-टेक बोल्ने बटनहरूको प्रयोग गर्नुहोस्। शैक्षिक कार्यहरूका लागि, अनुकूलित मिलान र वर्गीकरण गतिविधिहरूले सिकारुको व्यक्तिगत शिक्षा योजना (IEP) का लक्ष्यहरूसँग ठ्याक्कै मेल खाने अभ्यास गराउँछन्।'
      : 'Adaptive learning tools for Down syndrome and ID thrive on concrete icon matching, auditory feedback, and task analysis ADL breakdowns. Learners with Down syndrome often have relative strengths in visual processing and social motivation but face challenges with auditory working memory and speech intelligibility. Pair every verbal instruction with a visual icon. Use mid-tech talking buttons to let the learner rehearse multi-step routines (e.g., "First wash hands, then dry, then sit down") with immediate auditory reinforcement. For academic tasks, apps like See.Touch.Learn allow educators to build custom matching and sorting activities that align precisely with the learner\'s IEP goals.',
    downCtaText: isNepali
      ? 'हाम्रो दैनिक जीवन सीप (ADL) कार्य विश्लेषण तथा तालिका उपकरणहरू अन्वेषण गर्नुहोस्'
      : 'Explore our Daily Living Skills (ADL) Task Analysis tools',

    // Cerebral Palsy
    cpTitle: isNepali ? 'सेरेब्रल पाल्सी (Cerebral Palsy - CP)' : 'Cerebral Palsy (CP)',
    cpBody: isNepali
      ? 'सेरेब्रल पाल्सी भएका सिकारुहरूका लागि प्राथमिक अवरोध प्रायः शारीरिक पहुँच (Motor Access) हो, बौद्धिक क्षमता होइन। सेरेब्रल पाल्सी सञ्चार बोर्डहरू ठूला ट्याप क्षेत्रहरू (Large Tap Zones), उच्च-कन्ट्रास्ट दृश्य ट्र्याकहरू, र स्विच-पहुँचयोग्य नेभिगेसनका साथ डिजाइन गरिनुपर्छ। दृष्टि-सञ्चार प्रणालीहरू (Eye-Gaze AAC, जस्तै: Tobii Dynavox I-Series) ले गम्भीर मोटर अप्राक्सिया भएका सिकारुहरूलाई केवल आफ्नो आँखाको दृष्टिले प्रतीकहरू चयन गर्न मद्दत गर्दछ। स्विच स्क्यानिङ प्रयोग गर्ने सिकारुका लागि स्क्यानिङ गति व्यक्तिको प्रतिक्रिया समयसँग ठ्याक्कै मेल खानुपर्छ—धेरै छिटो भए निराशा हुन्छ, धेरै ढिलो भए ध्यान भंग हुन्छ। माउन्टिङ प्रणालीहरू (जस्तै: Rehadapt क्लैम्प) पनि उत्तिकै महत्त्वपूर्ण छन्: यदि सिकारुले उपकरणलाई शारीरिक रूपमा छुन वा स्थिर राख्न सक्दैन भने जतिसुकै राम्रो सफ्टवेयर पनि व्यर्थ हुन्छ।'
      : 'For learners with CP, the primary barrier is often motor access, not cognition. Cerebral palsy communication boards must be designed with large tap zones, high-contrast visual runway tracks, and switch-accessible navigation. Eye-gaze AAC systems (e.g., Tobii Dynavox I-Series) allow learners with significant fine-motor apraxia to select symbols using only their gaze. For learners using switch scanning, ensure the scanning speed matches the individual\'s reaction time—too fast causes frustration; too slow causes disengagement. Mounting systems (e.g., Rehadapt clamps) are equally critical: a perfectly programmed AAC device is useless if the learner cannot physically reach or stabilize it.',
    cpCtaText: isNepali
      ? 'हाम्रो एक-ट्याप द्रुत टकर (Single-Tap Quick Talker AAC) इन्टरफेस परीक्षण गर्नुहोस्'
      : 'Test our Single-Tap Quick Talker AAC interface',

    // Implementation Guide
    implTitle: isNepali ? 'गृह तथा कक्षाकोठा कार्यान्वयन निर्देशिका' : 'Home and Classroom Implementation Guide',
    implSubtitle: isNepali
      ? 'सिकारुलाई मानसिक रूपमा विचलित नबनाई नयाँ सहायक प्रविधि सुरु गर्न क्रमिक, तथ्य-आधारित र धैर्यपूर्ण दृष्टिकोण आवश्यक पर्दछ:'
      : 'Introducing new assistive technology without overwhelming the learner requires a gradual, data-informed approach:',
    steps: [
      {
        num: '01',
        title: isNepali ? 'एउटा उपकरण, एउटा दैनिक कार्यबाट सुरु गर्नुहोस् (Start with One Tool, One Routine)' : 'Start with One Tool, One Routine.',
        text: isNepali
          ? 'सिकारुको सबैभन्दा रमाइलो दैनिक गतिविधि (जस्तै: खाजा खाने समय, गीत गाउने समय) छान्नुहोस् र एउटा मात्र सहायक प्रविधि प्रयोग गर्नुहोस्। एकैपटक सबै कुरा बदल्ने हतारो नगर्नुहोस्।'
          : 'Choose the learner\'s most motivating daily activity (e.g., snack time, circle time) and introduce a single AT support. Resist the urge to overhaul everything simultaneously.',
      },
      {
        num: '02',
        title: isNepali ? 'अपेक्षा गर्नुअघि आफैं प्रयोग गरेर देखाउनुहोस् (Model Before You Expect)' : 'Model Before You Expect.',
        text: isNepali
          ? 'AAC सञ्चारका लागि, यसको अर्थ वयस्क वा शिक्षकले दिनभरि नै सिकारुसँग कुरा गर्दा आफैं त्यो उपकरण चलाएर देखाउनु हो (Aided Language Stimulation)—बालबालिकाले तुरुन्तै जवाफ फर्काउनुपर्छ भन्ने दबाब नदिनुहोस्। अनुसन्धानले देखाउँछ कि यस विधिले सिकाइको गति तीव्र बनाउँछ।'
          : 'For AAC, this means the adult uses the device to communicate to the learner throughout the day—without demanding the learner respond. This is called aided language stimulation, and research consistently shows it accelerates adoption.',
      },
      {
        num: '03',
        title: isNepali ? 'इन्द्रिय संवेदनशीलताको सम्मान गर्नुहोस् (Honor Sensory Boundaries)' : 'Honor Sensory Boundaries.',
        text: isNepali
          ? 'यदि उपकरणले बोल्दा सिकारुले कान थुन्छ भने, आवाज घटाउनुहोस् वा दृश्य-मात्र आउटपुटमा जानुहोस्। यदि स्क्रिनको चमकले आँखा बिझाउँछ वा तनाव दिन्छ भने, म्याट स्क्रिन प्रोटेक्टर प्रयोग गर्नुहोस् वा कम-उत्तेजना भएको विशेष शैक्षिक प्रविधि सेटअपमा लैजानुहोस्।'
          : 'If the learner covers their ears when the device speaks, lower the volume or switch to a visual-only output. If screen glare triggers distress, apply a matte screen protector or transition to a low-stimulus special education tech setup.',
      },
      {
        num: '04',
        title: isNepali ? 'सहज र व्यावहारिक तथ्याङ्क सङ्कलन गर्नुहोस् (Collect Simple Data)' : 'Collect Simple Data.',
        text: isNepali
          ? 'केवल शुद्धता मात्र नभई स्वतन्त्र रूपमा सुरु गरिएको सञ्चारको आवृत्ति (Frequency of Independent Use) ट्र्याक गर्नुहोस्। गल्तीसहित भए पनि आफैं ३ पटक सञ्चार सुरु गर्ने बालबालिकाले, हात समातेर दबाब दिँदा मात्र बोल्ने बालबालिकाभन्दा धेरै ठूलो प्रगति गरिरहेको हुन्छ।'
          : 'Track frequency of independent use, not just accuracy. A learner who initiates communication three times with errors is making more progress than one who produces perfect sentences only when hand-over-hand prompted.',
      },
      {
        num: '05',
        title: isNepali ? 'घर, विद्यालय र थेरापीबीच सहकार्य गर्नुहोस् (Collaborate Across Settings)' : 'Collaborate Across Settings.',
        text: isNepali
          ? 'घर, कक्षाकोठा, र थेरापी क्लिनिकमा एउटै मुख्य शब्दावली (Core Vocabulary), दृश्य प्रतीकहरू, र स्विच सेटिङहरू प्रयोग भएको सुनिश्चित गर्नुहोस्। वातावरणको एकरूपताले संज्ञानात्मक भार घटाउँछ र सिकाइको दिगोपना बढाउँछ।'
          : 'Ensure the same core vocabulary, visual symbols, and switch configurations are used at home, in the classroom, and during therapy. Consistency reduces cognitive load and accelerates generalization.',
      },
    ],

    // FAQ Section
    faqTitle: isNepali ? 'बारम्बार सोधिने क्लिनिकल प्रश्नहरू (FAQ)' : 'Frequently Asked Questions (FAQ)',
    faqSubtitle: isNepali
      ? 'अभिभावक र शिक्षकहरूबाट सहायक प्रविधि र न्यूरोडाइभर्सिटी सम्बन्धी सोधिने मुख्य वैज्ञानिक जिज्ञासाहरू:'
      : 'Peer-reviewed evidence addressing common concerns about assistive technology, speech development, and classroom integration:',
    faqs: [
      {
        q: isNepali
          ? 'के AAC प्रयोग गर्दा नबोल्ने अटिस्टिक बालबालिकामा प्राकृतिक बोली विकास रोकिन सक्छ?'
          : 'Can AAC prevent speech development in nonverbal autistic children?',
        a: isNepali
          ? 'हुँदैन, रोकिँदैन। दशकौंदेखिका वैज्ञानिक अनुसन्धानहरूले प्रमाणित गरेका छन् कि AAC ले प्राकृतिक बोली विकासलाई रोक्दैन। वास्तवमा, AAC ले सञ्चारको तनाव कम गरेर, भाषाका लागि स्थिर मोटर योजना प्रदान गरेर, र सिकारुलाई सामाजिक संलग्नताको वास्तविक कारण दिएर प्रायः बोली विकासमा थप मद्दत गर्दछ। बालबालिकामा चरम निराशा आउनुअघि नै चाँडो AAC सुरु गर्नाले उत्कृष्ट दीर्घकालीन नतिजा दिन्छ।'
          : 'No. Decades of peer-reviewed research confirm that AAC does not inhibit spoken language. In fact, AAC often supports speech development by reducing communicative pressure, providing a consistent motor plan for language, and giving the learner a meaningful reason to engage socially. Introducing AAC early—before frustration peaks—yields the strongest long-term outcomes.',
      },
      {
        q: isNepali
          ? 'डाउन सिन्ड्रोम भएका बालबालिकालाई दृश्य तालिकाहरू (Visual Schedules) ले कसरी मद्दत गर्छन्?'
          : 'How do visual schedules help children with Down syndrome?',
        a: isNepali
          ? 'दृश्य तालिकाहरूले श्रव्य कार्यकारी स्मरण (Auditory Working Memory) माथिको निर्भरता घटाउँछन्, जुन डाउन सिन्ड्रोममा प्रायः तुलनात्मक रूपमा कमजोर पक्ष मानिन्छ। दिनभरिको कार्यतालिकालाई ठोस, तस्बिर-आधारित चरणहरूका रूपमा प्रस्तुत गरेर, दृश्य तालिकाहरूले मानसिक चिन्ता कम गर्छन्, कार्य सुरु गर्ने क्षमता बढाउँछन्, र घर तथा विद्यालयका विभिन्न गतिविधिहरूबीच सहज परिवर्तन (Transitions) लाई समर्थन गर्दछन्।'
          : 'Visual schedules reduce reliance on auditory working memory, which is frequently a relative weakness in Down syndrome. By presenting the day\'s sequence as concrete, picture-based steps, visual schedules lower anxiety, increase task initiation, and support smoother transitions between activities at home and school.',
      },
      {
        q: isNepali
          ? 'सेरेब्रल पाल्सी भएका बालबालिकाका लागि सबैभन्दा उत्तम AAC उपकरण कुन हो?'
          : 'What is the best AAC device for a child with cerebral palsy?',
        a: isNepali
          ? 'सबैका लागि उपयुक्त हुने कुनै एउटै "उत्कृष्ट" उपकरण हुँदैन। आदर्श सेरेब्रल पाल्सी सञ्चार बोर्ड वा AAC प्रणाली सिकारुको दृश्य तीक्ष्णता (Visual Acuity), मोटर पहुँच विधि (टच, स्विच, वा आँखाको दृष्टि), संज्ञानात्मक क्षमता, र दैनिक वातावरणमा निर्भर गर्दछ। इजाजतपत्र प्राप्त स्पीच थेरापिस्ट (SLP) र सहायक प्रविधि विज्ञ (ATP) द्वारा विस्तृत AAC मूल्याङ्कन गराउनु यसको पहिलो र अनिवार्य कदम हो।'
          : 'There is no single "best" device. The ideal cerebral palsy communication board or AAC system depends on the learner\'s visual acuity, motor access method (touch, switch, eye-gaze), cognitive profile, and daily environments. A comprehensive AAC evaluation by a licensed SLP and ATP (Assistive Technology Professional) is the essential first step.',
      },
      {
        q: isNepali
          ? 'के आधुनिक हाई-टेक कक्षाकोठामा अझै पनि लो-टेक (कागजी/कार्ड) साधनहरू उपयोगी छन्?'
          : 'Are low-tech tools still effective in a high-tech classroom?',
        a: isNepali
          ? 'अवश्य छन्, र अत्यन्तै महत्त्वपूर्ण छन्। PECS, छनोट बोर्डहरू, र दृश्य स्ट्रिपहरू जस्ता लो-टेक साधनहरू जहाँसुकै लैजान सकिने, कहिल्यै चार्ज गर्नु नपर्ने, र पानी वा घाममा नबिग्रिने खालका हुन्छन्—जसले गर्दा शैक्षिक भ्रमण, पौडी खेल्ने समय, वा आपत्कालीन अवस्थामा यी अपरिहार्य बन्दछन्। सबैभन्दा भरपर्दो विशेष शिक्षा योजनाले प्रत्येक हाई-टेक प्राथमिक प्रणालीका लागि अनिवार्य रूपमा लो-टेक ब्याकअप राख्ने गर्दछ।'
          : 'Absolutely. Low-tech tools such as PECS, choice boards, and visual strips are portable, durable, and require no charging—making them indispensable for field trips, pool activities, and emergency situations. The most robust AT plans integrate low-tech backups for every high-tech primary system.',
      },
      {
        q: isNepali
          ? 'कुनै सहायक प्रविधि उपकरणले साँच्चिकै काम गरिरहेको छ कि छैन भनेर कसरी थाहा पाउने?'
          : 'How do I know if an assistive technology tool is actually working?',
        a: isNepali
          ? 'केवल परीक्षाको अंक मात्र नहेरी सिकारुले आफैं सञ्चार सुरु गरेको आवृत्ति (Independent Initiation), दैनिक कार्य परिवर्तन गर्दा रिस वा आक्रोशमा आएको कमी (Reduced Escalation), र मनपर्ने गतिविधिहरूमा बढेको सक्रिय सहभागिता हेर्नुहोस्। आफ्ना प्रत्यक्ष अवलोकनात्मक तथ्याङ्कहरू शिक्षक र थेरापिस्टको टोलीसँग साझा गर्नुहोस् र कुनै निश्चित समयसीमामा अड्किनुको सट्टा बालबालिकाको बदलिँदो आवश्यकता अनुसार उपकरणहरू समायोजन गर्दै लैजानुहोस्।'
          : 'Look for increases in independent initiation, reduced behavioral escalation during transitions, and greater participation in preferred activities—not just improved test scores. Share observational data with the IEP team and adjust tools based on the learner\'s evolving needs, not a fixed timeline.',
      },
    ],
  };

  // Sticky TOC links
  const tocItems = [
    { id: 'executive-summary', label: isNepali ? 'कार्यकारी सारांश' : 'Executive Summary' },
    { id: 'neurodevelopmental-root-causes', label: isNepali ? 'स्नायु-विकासात्मक मूल कारणहरू' : 'Root Causes (Theoretical)' },
    { id: 'assistive-technology-continuum', label: isNepali ? 'सहायक प्रविधि ३-तह तालिका' : 'AT Continuum (3 Tiers)' },
    { id: 'condition-specific-adaptations', label: isNepali ? 'अवस्था-विशिष्ट अनुकूलन (ASD, DS, CP)' : 'Condition Adaptations' },
    { id: 'implementation-guide', label: isNepali ? 'गृह तथा कक्षाकोठा कार्यविधि' : 'Implementation Stepper' },
    { id: 'faq', label: isNepali ? 'बारम्बार सोधिने प्रश्नहरू' : 'Frequently Asked Questions' },
  ];

  const filteredTiers =
    selectedTechTier === 'all'
      ? content.atTiers
      : content.atTiers.filter((t) => t.id === selectedTechTier);

  return (
    <article className="min-h-screen py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================ */}
        {/* ZONE 1: HEADER ZONE (ABOVE THE FOLD)                          */}
        {/* ============================================================ */}
        <header className="mb-10 lg:mb-14">
          {/* Hero Breadcrumbs & High-Contrast Tag */}
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
                {isNepali ? 'आधारभूत निर्देशिकाहरू' : 'Foundational Guides'}
              </span>
            </nav>

            {/* High-Contrast Clinical Tag Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E3F49] dark:bg-[#20404C] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-xs">
              <ShieldCheck className="h-3.5 w-3.5 text-[#7CDA9B]" aria-hidden="true" />
              <span>{content.badge}</span>
            </span>
          </div>

          {/* Prominent H1 Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0] tracking-tight leading-[1.18] mb-5">
            {content.h1}
          </h1>

          {/* Quick Meta Row: Reading Time, Audience, Evidence Review */}
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

          {/* Featured Snippet Card (Position-Zero SEO Box) */}
          <aside
            id="executive-summary"
            aria-label="Executive Summary and Core Definition"
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

        {/* ============================================================ */}
        {/* MAIN BODY GRID: STICKY TOC SIDEBAR + VISUAL CONTENT ZONES    */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* STICKY TABLE OF CONTENTS (DESKTOP SIDEBAR - 3.5 cols) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 z-20">
            <div className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-[#FDFBF7] dark:bg-[#16202C] p-5 shadow-xs">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#E8E2D5] dark:border-[#273748]">
                <BookMarked className="h-4 w-4 text-[#2B5763] dark:text-[#80C0D0]" aria-hidden="true" />
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

              {/* Quick Launch Flutter App Widget */}
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

          {/* MAIN CONTENT AREA (8.5 cols) */}
          <main className="lg:col-span-8 space-y-12 lg:space-y-16">
            
            {/* ---------------------------------------------------------- */}
            {/* ZONE 3: THEORETICAL FOUNDATION (2x2 GRID)                  */}
            {/* ---------------------------------------------------------- */}
            <section id="neurodevelopmental-root-causes" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-2 text-[#2B5763] dark:text-[#80C0D0] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                <span>{isNepali ? 'स्नायु-विकासात्मक विश्लेषण' : 'Etiological Framework'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0] tracking-tight mb-4">
                {content.theoTitle}
              </h2>

              <p className="text-sm sm:text-base text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mb-8">
                {content.theoSubtitle}
              </p>

              {/* 2x2 Grid of Root Cause Visual Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {content.rootCauses.map((cause) => {
                  const Icon = cause.icon;
                  return (
                    <div
                      key={cause.id}
                      className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-5 sm:p-6 shadow-xs hover:border-[#2B5763] dark:hover:border-[#80C0D0] transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FAF7EE] dark:bg-[#202E3D] text-[#2B5763] dark:text-[#80C0D0]">
                            <Icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#F0ECE1] dark:bg-[#223140] text-[#5B6B7C] dark:text-[#CBD5E1]">
                            {cause.badge}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-2 leading-snug">
                          {cause.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed">
                          {cause.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Paradigm Shift Highlight Banner */}
              <div className="mt-6 rounded-xl border-l-4 border-[#2B5763] bg-[#E8EFF1] dark:bg-[#192C36] p-4 sm:p-5 text-xs sm:text-sm text-[#1E3F49] dark:text-[#9DD3E0] font-medium leading-relaxed">
                <strong>{isNepali ? 'महत्त्वपूर्ण दृष्टिकोण परिवर्तन:' : 'Paradigm Shift:'}</strong> {content.rootCauseTakeaway}
              </div>
            </section>

            {/* ---------------------------------------------------------- */}
            {/* ZONE 4: ASSISTIVE TECHNOLOGY CONTINUUM (RESPONSIVE MATRIX) */}
            {/* ---------------------------------------------------------- */}
            <section id="assistive-technology-continuum" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-2 text-[#2B5763] dark:text-[#80C0D0] text-xs font-bold uppercase tracking-wider">
                <Zap className="h-4 w-4" aria-hidden="true" />
                <span>{isNepali ? 'सहायक प्रविधि ३-तह तालिका' : 'Assistive Tech Continuum'}</span>
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

                    <p className="text-xs sm:text-sm font-medium text-[#2C3E50] dark:text-[#CBD5E1] mb-3">
                      <strong>{isNepali ? 'विवरण:' : 'Description:'}</strong> {tier.desc}
                    </p>

                    <div className="rounded-xl bg-[#FAF7EE] dark:bg-[#1F2C3A] p-3.5 mb-3 text-xs text-[#3E4D5E] dark:text-[#94A3B8]">
                      <strong className="text-[#1E293B] dark:text-[#E2E8F0]">{isNepali ? 'उदाहरणहरू:' : 'Examples:'}</strong> {tier.examples}
                    </div>

                    <p className="text-xs text-[#5B6B7C] dark:text-[#8090A0]">
                      <span className="font-semibold text-[#2B5763] dark:text-[#80C0D0]">{isNepali ? 'क्लिनिकल सबल पक्ष:' : 'Clinical Advantage:'}</span> {tier.pros}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key Principle Callout */}
              <div className="mt-6 rounded-2xl border-2 border-[#D7E3E7] dark:border-[#2C4A56] bg-[#FAF7EE] dark:bg-[#15232D] p-5 sm:p-6 shadow-xs">
                <div className="flex items-center gap-2 text-[#1E3F49] dark:text-[#80C0D0] font-bold text-sm sm:text-base mb-2">
                  <ShieldCheck className="h-5 w-5 text-[#2B5763] dark:text-[#80C0D0]" />
                  <h4>{content.atKeyPrincipleTitle}</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#3E4D5E] dark:text-[#CBD5E1] leading-relaxed">
                  {content.atKeyPrincipleText}
                </p>
              </div>
            </section>

            {/* ---------------------------------------------------------- */}
            {/* ZONE 5: CONDITION-SPECIFIC ADAPTATIONS + FLUTTER CTAS      */}
            {/* ---------------------------------------------------------- */}
            <section id="condition-specific-adaptations" className="scroll-mt-28 space-y-10">
              <div>
                <div className="flex items-center gap-2 mb-2 text-[#2B5763] dark:text-[#80C0D0] text-xs font-bold uppercase tracking-wider">
                  <Users className="h-4 w-4" aria-hidden="true" />
                  <span>{isNepali ? 'व्यक्तिगत अनुकूलन' : 'Targeted Accommodations'}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0] tracking-tight mb-4">
                  {content.condTitle}
                </h2>

                <p className="text-sm sm:text-base text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed">
                  {content.condSubtitle}
                </p>
              </div>

              {/* SUBSECTION 1: ASD */}
              <div className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 sm:p-8 shadow-xs">
                <h3 className="text-xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-3">
                  {content.asdTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mb-6">
                  {content.asdBody}
                </p>

                {/* High-Contrast Flutter Action Banner */}
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

              {/* SUBSECTION 2: DOWN SYNDROME & ID */}
              <div className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 sm:p-8 shadow-xs">
                <h3 className="text-xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-3">
                  {content.downTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mb-6">
                  {content.downBody}
                </p>

                {/* High-Contrast Flutter Action Banner */}
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

              {/* SUBSECTION 3: CEREBRAL PALSY */}
              <div className="rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-6 sm:p-8 shadow-xs">
                <h3 className="text-xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-3">
                  {content.cpTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mb-6">
                  {content.cpBody}
                </p>

                {/* High-Contrast Flutter Action Banner */}
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

            {/* ---------------------------------------------------------- */}
            {/* ZONE 6: IMPLEMENTATION GUIDE (PROCESS STEPPER)             */}
            {/* ---------------------------------------------------------- */}
            <section id="implementation-guide" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-2 text-[#2B5763] dark:text-[#80C0D0] text-xs font-bold uppercase tracking-wider">
                <Check className="h-4 w-4" aria-hidden="true" />
                <span>{isNepali ? 'चरणबद्ध कार्यविधि' : 'Implementation Stepper'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0] tracking-tight mb-4">
                {content.implTitle}
              </h2>

              <p className="text-sm sm:text-base text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mb-8">
                {content.implSubtitle}
              </p>

              {/* Ordered Stepper Component */}
              <div className="space-y-6 relative before:absolute before:inset-0 before:left-5 sm:before:left-6 before:w-0.5 before:bg-[#E8E2D5] dark:before:bg-[#273748] before:z-0">
                {content.steps.map((step) => (
                  <div
                    key={step.num}
                    className="relative z-10 flex items-start gap-4 sm:gap-6 rounded-2xl border border-[#E8E2D5] dark:border-[#273748] bg-white dark:bg-[#182330] p-5 sm:p-6 shadow-xs hover:border-[#2B5763] dark:hover:border-[#80C0D0] transition-colors"
                  >
                    {/* Clean Numeric Badge */}
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

            {/* ---------------------------------------------------------- */}
            {/* ZONE 7: FAQ ACCORDION (ACCESSIBLE SCHEMA-DRIVEN)           */}
            {/* ---------------------------------------------------------- */}
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

              {/* Accordion Component */}
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
