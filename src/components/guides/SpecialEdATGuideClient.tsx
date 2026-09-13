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
  Sliders,
  MessageSquare,
  Target,
  FileCheck,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function SpecialEdATGuideClient() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('executive-summary');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedTechTier, setSelectedTechTier] = useState<'all' | 'low' | 'mid' | 'high'>('all');

  const flutterAppUrl = process.env.NEXT_PUBLIC_FLUTTER_APP_URL || 'https://app.tech4neurodivergent.com';
  const isNepali = language === 'ne';

  // Scrollspy observer for sticky TOC
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'executive-summary',
        'cognitive-physical-barriers',
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
      ? 'विशेष शिक्षामा सहायक प्रविधि: संज्ञानात्मक तथा शारीरिक अवरोधहरूको निवारण'
      : 'Assistive Technology in Special Education: Removing Cognitive and Physical Barriers',

    // Executive Summary
    execSummaryTitle: isNepali ? 'कार्यकारी सारांश: सहायक प्रविधि के हो?' : 'Executive Summary: What Is Assistive Technology?',
    execSummaryText: isNepali ? (
      <>
        <strong>विशेष शिक्षामा सहायक प्रविधि (Assistive Technology - AT) भन्नाले विद्यार्थीको कार्यगत क्षमतालाई कायम राख्न, सुधार गर्न वा विस्तार गर्न मद्दत गर्ने कुनै पनि उपकरण वा सेवालाई जनाउँछ।</strong> सहायक प्रविधिले सञ्चार, पढाइ, लेखाइ, स्मरण, संवेदी नियमन, शारीरिक गतिशीलता, मोटर पहुँच, र दैनिक क्रियाकलापहरूमा सहभागितालाई समर्थन गर्न सक्छ। यो कागजमा आधारित दृश्य तालिकादेखि लिएर आवाज उत्पादन गर्ने डिजिटल उपकरण, स्विचबाट चल्ने कम्प्युटर, र आँखाको दृष्टिले चल्ने प्रणालीसम्म फैलिएको हुन्छ। सहायक प्रविधिले सिकारुलाई &quot;सुधार्ने&quot; वा कुशल शिक्षणलाई प्रतिस्थापन गर्ने होइन; यसले विद्यार्थीको क्षमता र पहुँचयोग्य नभएको वातावरणबीचको बेमेललाई कम गर्दछ। <strong>अटिजम (ASD), डाउन सिन्ड्रोम, बौद्धिक अपाङ्गता (ID), वा सेरेब्रल पाल्सी (CP)</strong> भएका सिकारुहरूका लागि उपयुक्त उपकरणले सञ्चार गर्न, अपेक्षाहरू बुझ्न, आफ्नो ज्ञान प्रदर्शन गर्न, र थप स्वतन्त्र रूपमा सहभागी हुन भरपर्दो माध्यम प्रदान गर्दछ। विशेष शिक्षाका अन्तर्राष्ट्रिय मान्यता र व्यक्तिगत शिक्षा योजना (IEP) अनुसार, टोलीले विद्यार्थीलाई सहायक प्रविधि आवश्यक छ कि छैन भनी मूल्याङ्कन गर्नुपर्छ। प्रभावकारी योजनामा केवल उपकरण छनोट मात्र नभई पहुँच मूल्याङ्कन, सञ्चार साझेदारको तालिम, नतिजाको अनुगमन, र ब्याकअप प्रणालीको व्यवस्थापन पनि समावेश हुन्छ।
      </>
    ) : (
      <>
        <strong>Assistive technology (AT) in special education is any tool or service that helps a student maintain, improve, or expand a functional ability.</strong> AT can support communication, reading, writing, memory, sensory regulation, mobility, motor access, and participation in daily routines. It ranges from paper-based visual schedules to speech-generating devices, switch-accessible computers, and eye-gaze systems. AT does not &quot;fix&quot; a learner or replace skilled teaching. It reduces the mismatch between a student&apos;s abilities and an inaccessible environment. For learners with <strong>Autism Spectrum Disorder (ASD), Down syndrome, intellectual disabilities (ID), or cerebral palsy (CP)</strong>, the right tool can provide a reliable way to communicate, understand expectations, demonstrate knowledge, and participate more independently. Under the U.S. Individuals with Disabilities Education Act (IDEA) and global special education standards, IEP teams must consider whether a student requires AT devices or services. Effective AT planning includes not only selecting a device but also evaluating access, training communication partners, monitoring outcomes, and maintaining a backup system.
      </>
    ),

    // Cognitive and Physical Barriers Section
    barriersTitle: isNepali ? 'संज्ञानात्मक तथा शारीरिक अवरोधहरू किन आउँछन्?' : 'Why Cognitive and Physical Barriers Exist',
    barriersSubtitle: isNepali
      ? 'कुनै कार्य पूरा गर्न विद्यार्थीलाई हुने कठिनाइले कार्यको डिजाइनमा भएको अपूर्णतालाई दर्शाउँछ—विद्यार्थीमा उत्प्रेरणा वा बुझाइको कमीलाई होइन। धेरै स्नायु-विकासात्मक कारकहरूले पहुँचमा प्रभाव पार्दछन्:'
      : 'A student&apos;s difficulty completing a task may reflect the design of the task—not a lack of motivation or understanding. Several neurodevelopmental factors can affect access.',
    barriers: [
      {
        id: 'interoception',
        icon: HeartPulse,
        barrier: isNepali ? 'अन्तर-इन्द्रिय शारीरिक अनुभूतिमा भिन्नता' : 'Interoception differences',
        looksLike: isNepali ? 'भोक, दुखाइ, थकान, वा बढ्दो तनाव महसुस गर्न कठिनाइ' : 'Difficulty noticing hunger, pain, fatigue, or rising distress',
        atResponse: isNepali ? 'शारीरिक जाँच तराजु (Check-in scales), संवेग दृश्य कार्ड, ब्रेक माग्ने प्रतीकहरू' : 'Body check-in scales, emotion visuals, break-request symbols',
        category: isNepali ? 'संवेदी स्व-नियमन' : 'Sensory & Regulation',
      },
      {
        id: 'working-memory',
        icon: Cpu,
        barrier: isNepali ? 'कार्यकारी स्मरण क्षमतामा भार' : 'Working memory load',
        looksLike: isNepali ? 'बहु-चरणीय मौखिक निर्देशनहरूको क्रम बिर्सने वा हराउने' : 'Losing track of multistep verbal directions',
        atResponse: isNepali ? 'दृश्य तालिकाहरू, चेकलिस्टहरू, रेकर्ड गरिएका श्रव्य संकेतहरू' : 'Visual schedules, checklists, recorded prompts',
        category: isNepali ? 'संज्ञानात्मक प्रशोधन' : 'Cognitive Processing',
      },
      {
        id: 'executive-function',
        icon: Brain,
        barrier: isNepali ? 'कार्यकारी कार्य क्षमतामा शिथिलता' : 'Executive dysfunction',
        looksLike: isNepali ? 'कार्य सुरु गर्न, अनुक्रम मिलाउन, परिवर्तन गर्न वा रोक्न कठिनाइ' : 'Difficulty starting, sequencing, shifting, or stopping tasks',
        atResponse: isNepali ? 'पहिले-त्यसपछि (First-Then) बोर्डहरू, टाइमरहरू, कार्य विश्लेषण (ADL) एपहरू' : 'First-then boards, timers, task-analysis apps',
        category: isNepali ? 'दिनचर्या र अनुक्रम' : 'Task Sequencing',
      },
      {
        id: 'motor-apraxia',
        icon: Hand,
        barrier: isNepali ? 'मोटर अपाङ्गता वा अप्राक्सिया' : 'Motor impairment or apraxia',
        looksLike: isNepali ? 'सटीक ट्याप गर्न नसक्नु, ढिलो लेखाइ, बोली समन्वयमा कठिनाइ' : 'Inaccurate tapping, slow writing, difficulty coordinating speech',
        atResponse: isNepali ? 'किगार्ड (Keyguards), स्विच पहुँच, दृष्टि-नियन्त्रण (Eye-gaze), वैकल्पिक किबोर्ड' : 'Keyguards, switch access, eye gaze, alternative keyboards',
        category: isNepali ? 'शारीरिक पहुँच' : 'Physical Access',
      },
      {
        id: 'sensory-processing',
        icon: Sliders,
        barrier: isNepali ? 'संवेदी प्रशोधनमा भिन्नता' : 'Sensory processing differences',
        looksLike: isNepali ? 'आवाज, चमक, एनिमेसन, वा अत्यधिक दृश्य भद्रगोलबाट तनाव' : 'Distress from sound, glare, animation, or visual clutter',
        atResponse: isNepali ? 'न्यून-उत्तेजना इन्टरफेस (Low-stimulus tech), आवाज नियन्त्रण, म्याट स्क्रिन' : 'Low-stimulus interfaces, volume control, matte screens',
        category: isNepali ? 'वातावरणीय अनुकूलन' : 'Sensory Accommodations',
      },
      {
        id: 'communication',
        icon: MessageSquare,
        barrier: isNepali ? 'सञ्चारमा अवरोध' : 'Communication barriers',
        looksLike: isNepali ? 'स्पष्ट सञ्चार चाहना हुँदाहुँदै पनि सीमित वा अस्थिर प्राकृतिक बोली' : 'Limited or unreliable speech despite clear communicative intent',
        atResponse: isNepali ? 'कागजमा आधारित वा डिजिटल संवर्धित तथा वैकल्पिक सञ्चार (AAC)' : 'Paper-based or electronic AAC systems',
        category: isNepali ? 'अभिव्यक्ति तथा भाषा' : 'Augmentative Communication',
      },
    ],
    behaviorCallout: isNepali
      ? 'व्यवहार भनेको प्रायः पहुँच-सम्बन्धी महत्त्वपूर्ण जानकारी हो। कार्यबाट भाग्नु वा पन्छिनु भनेको दुखाइ, थकान, संवेदी ओभरलोड, अनुपयुक्त पहुँच विधि, वा कार्यकारी स्मरण क्षमताभन्दा बढीको निर्देशनको संकेत हुन सक्छ। त्यसैले सहायक प्रविधि मूल्याङ्कनले सिकारु, गतिविधि, सञ्चार साझेदार, र वातावरणलाई सँगै हेर्नुपर्छ।'
      : 'Behavior is often access-related information. Avoidance may indicate pain, fatigue, sensory overload, an inaccessible response method, or instructions that exceed working-memory capacity. AT assessment should therefore examine the learner, activity, communication partners, and environment together.',

    // Assistive Technology Continuum Section
    atTitle: isNepali ? 'लो-टेक, मिड-टेक, र हाई-टेक सहायक प्रविधि' : 'Low-Tech, Mid-Tech, and High-Tech Assistive Technology',
    atSubtitle: isNepali
      ? 'सबैभन्दा राम्रो सहायक प्रविधि महँगो नै हुनुपर्छ भन्ने छैन। उत्तम उपकरण त्यो हो जसलाई सिकारुले भरपर्दो रूपमा पहुँच गर्न सक्छ र वास्तविक दैनिक दिनचर्यामा प्रयोग गर्दछ।'
      : 'The best AT is not necessarily the most expensive. It is the tool the learner can access reliably and use across real routines.',
    atTiers: [
      {
        id: 'low',
        tier: isNepali ? 'लो-टेक (Low-Tech)' : 'Low-Tech',
        badge: isNepali ? 'शून्य ब्याट्री, उच्च विश्वसनीयता' : 'Zero power, high reliability',
        badgeClass: 'bg-[#EBF7EE] text-[#24633B] dark:bg-[#193322] dark:text-[#7CDA9B] border-[#BDE3C7] dark:border-[#2D5A3A]',
        examples: isNepali
          ? 'दृश्य तालिकाहरू, पहिले-त्यसपछि बोर्डहरू, कागजी AAC, सञ्चार पुस्तकहरू, छनोट बोर्डहरू, पेन्सिल ग्रिप, स्लान्ट बोर्ड, किगार्ड'
          : 'Visual schedules, first-then boards, paper AAC, communication books, choice boards, pencil grips, slant boards, keyguards',
        applications: isNepali
          ? 'पूर्वानुमान, सञ्चार, हस्तलेखन, कार्य अनुक्रम'
          : 'Predictability, communication, handwriting, task sequencing',
        pros: isNepali ? 'कुनै पनि ब्याट्री वा चार्ज नचाहिने, टिकाउ, आपत्कालीन र बाहिरी प्रयोगका लागि उपयुक्त' : 'Zero charging required, extreme durability, portable and reliable in all conditions',
      },
      {
        id: 'mid',
        tier: isNepali ? 'मिड-टेक (Mid-Tech)' : 'Mid-Tech',
        badge: isNepali ? 'सामान्य ब्याट्री / आवाज आउटपुट' : 'Simple battery / voice output',
        badgeClass: 'bg-[#E8F2FC] text-[#1E4D7E] dark:bg-[#162A40] dark:text-[#88BDEC] border-[#BBD8F5] dark:border-[#234A6E]',
        examples: isNepali
          ? 'दृश्य टाइमरहरू, श्रव्य निर्देशनहरू, बोल्ने बटनहरू (Big Mack), एकल वा बहु-सन्देश उपकरणहरू, स्विच-अनुकूल खेलौनाहरू'
          : 'Visual timers, audio instructions, talking buttons, single- or multi-message devices, switch-adapted toys',
        applications: isNepali
          ? 'गतिविधि परिवर्तन (Transitions), श्रव्य प्रतिक्रिया, कारण-र-प्रभाव (Cause-and-effect) सिकाइ'
          : 'Transitions, auditory feedback, cause-and-effect learning',
        pros: isNepali ? 'एक-ट्याप पहुँच, तत्काल श्रव्य पुष्टि, न्यूनतम प्राविधिक जटिलता' : 'Single-action access, immediate auditory feedback, minimal cognitive friction',
      },
      {
        id: 'high',
        tier: isNepali ? 'हाई-टेक (High-Tech)' : 'High-Tech',
        badge: isNepali ? 'सफ्टवेयर तथा आँखाको दृष्टिले चल्ने' : 'Dynamic software / eye-gaze',
        badgeClass: 'bg-[#F4EEFB] text-[#552D80] dark:bg-[#2C1C3F] dark:text-[#C7A3F0] border-[#DFC9F7] dark:border-[#523375]',
        examples: isNepali
          ? 'गतिशील AAC एपहरू (हाम्रो वेब AAC, Proloquo2Go), समर्पित बोली-उत्पादक यन्त्रहरू, टेक्स्ट-टु-स्पीच, शब्द भविष्यवाणी, स्विच स्क्यानिङ, दृष्टि-नियन्त्रण'
          : 'Dynamic AAC apps, dedicated speech-generating devices, text-to-speech, word prediction, switch scanning, eye gaze',
        applications: isNepali
          ? 'जटिल सञ्चार, साक्षरता, कम्प्युटर पहुँच, वातावरणीय नियन्त्रण'
          : 'Complex communication, literacy, computer access, environmental control',
        pros: isNepali ? 'हजारौं शब्दावलीहरूको भण्डार, गतिशील व्याकरण, विभिन्न पहुँच मोडहरूको अनुकूलन' : 'Massive vocabulary capacity, generative grammar, customizable multi-modal access',
      },
    ],
    atServicesCallout: isNepali
      ? 'सहायक प्रविधिमा केवल हार्डवेयर मात्र होइन, सेवाहरू (Services) पनि समावेश हुन्छन्: विशेषता मिलान (Feature Matching), उपकरण परीक्षण (Device Trials), शब्दावली प्रोग्रामिङ, माउन्टिङ, सञ्चार साझेदारको तालिम, र नतिजाको नियमित अनुगमन। ट्याब्लेटमा केवल एउटा एप हालिदिनुलाई क्लिनिकल हस्तक्षेप मान्न सकिँदैन।'
      : 'AT also includes services: feature matching, device trials, vocabulary programming, mounting, partner training, and outcome monitoring. Simply placing an app on a tablet is not an intervention.',

    // Condition-Specific Adaptations
    condTitle: isNepali ? 'अवस्था-विशिष्ट व्यावहारिक अनुकूलनहरू' : 'Condition-Specific Practical Adaptations',
    condSubtitle: isNepali
      ? 'विभिन्न स्नायु-विकासात्मक अवस्थाहरूको आफ्नै संवेदी तथा शारीरिक आवश्यकताहरू हुन्छन्। यहाँ प्रत्येक अवस्थाका लागि क्लिनिकल अनुकूलन र सिफारिस गरिएका उपकरणहरू प्रस्तुत गरिएको छ:'
      : 'Neurodivergent learners present unique motor, cognitive, and sensory profiles. Below are practical accommodations and internal interactive tools tailored to each diagnosis:',

    // ASD Section
    asdTitle: isNepali ? 'अटिजमका लागि सहायक प्रविधि (Assistive Technology for Autism)' : 'Assistive Technology for Autism',
    asdBody: isNepali
      ? 'अटिस्टिक सिकारुहरूले प्रायः दृश्य पूर्वानुमान, भरपर्दो सञ्चार पहुँच, र सेन्सरि-सुरक्षित डिजाइनबाट अत्यधिक लाभ पाउँछन्। उपयोगी अनुकूलनहरूमा: अहिले के भइरहेको छ र पछि के हुन्छ भनेर देखाउने दृश्य तालिका, काउन्टडाउन टाइमर र गतिविधि परिवर्तनका पूर्व-चेतावनी, कम एनिमेसन र कम चमक भएको न्यून-उत्तेजना प्रविधि, स्थिर आइकन स्थान जसले स्थायी मोटर योजना निर्माण गर्दछ, र नबोल्ने वा कम बोल्ने विद्यार्थीका लागि AAC समावेश छन्। AAC लाई केवल खाना वा मनपर्ने वस्तु माग्नमा सीमित गरिनुहुन्न। सिकारुहरूलाई टिप्पणी गर्न, अस्वीकार गर्न, प्रश्न सोध्न, असजिलोपन व्यक्त गर्न, र सम्बन्ध निर्माण गर्न शब्दावली चाहिन्छ। सञ्चार पहुँच प्राप्त गर्न कुनै पनि पूर्वशर्त (Prerequisites) आवश्यक पर्दैन। वयस्कहरूले एडेड ल्याङ्ग्वेज इनपुट (Aided Language Input) प्रयोग गर्नुपर्छ—विद्यार्थीको AAC मा शब्दहरू थिच्दै बोल्ने।'
      : 'Autistic learners often benefit from visual predictability, reliable communication access, and sensory-safe design. Helpful adaptations include visual schedules showing what is happening now and what comes next, countdown timers, low-stimulus special education tech with reduced animation, glare, and sound, stable icon locations that support consistent motor patterns, noise-reduction options, and AAC for nonspeaking or minimally speaking students. AAC should not be restricted to requesting food or preferred objects. Learners need vocabulary for commenting, refusing, asking questions, expressing discomfort, and building relationships. There are no behavioral, cognitive, or imitation prerequisites for receiving access to communication. Adults should use aided language input: speaking while selecting relevant words on the student\'s AAC system without turning every interaction into a test.',
    asdCtaText: isNepali
      ? 'हाम्रो निःशुल्क द्विभाषिक वाक्य बनाउने (Sentence Builder AAC) र संवेग व्यवस्थापन मोड्युलहरू प्रयोग गर्नुहोस्'
      : 'Try our free bilingual Sentence Builder AAC and Emotion Regulation modules',

    // Down Syndrome & ID Section
    downTitle: isNepali ? 'डाउन सिन्ड्रोम तथा बौद्धिक अपाङ्गताका लागि अनुकूलन सिकाइ उपकरणहरू' : 'Adaptive Learning Tools for Down Syndrome and ID',
    downBody: isNepali
      ? 'डाउन सिन्ड्रोम भएका धेरै सिकारुहरूमा दृश्य सिकाइमा बलियो पक्ष हुन्छ भने श्रव्य कार्यकारी स्मरण, बोलीको स्पष्टता, वा अमूर्त भाषामा चुनौतीहरू हुन सक्छन्। बौद्धिक अपाङ्गता भएका विद्यार्थीहरू पनि कम सूचना भार र बारम्बारको अभ्यासबाट लाभान्वित हुन्छन्। उपयोगी कार्यविधिमा: बोलिएका निर्देशनहरूलाई तस्बिर वा स्पष्ट प्रतीकहरूसँग जोड्ने, कार्य विश्लेषण (Task Analysis ADL) प्रयोग गरी दिनचर्यालाई साना-साना चरणहरूमा विभाजन गर्ने, एकपटकमा एउटा मात्र चरण प्रस्तुत गर्ने, तत्काल दृश्य वा श्रव्य प्रतिक्रिया दिने, र स्वतन्त्रता बढ्दै जाँदा सहायता घटाउँदै लैजाने समावेश छ। उदाहरणका लागि, हात धुने कार्य विश्लेषणले देखाउन सक्छ: पानी खोल्नुहोस् → हात भिजाउनुहोस् → साबुन लगाउनुहोस् → मिच्नुहोस् → पखाल्नुहोस् → पुछ्नुहोस्। बोल्ने बटनले वर्तमान चरण दोहोर्याउन सक्छ भने दृश्य स्ट्रिपले सम्पूर्ण अनुक्रम सुरक्षित राख्छ।'
      : 'Many learners with Down syndrome have relative strengths in visual learning while experiencing challenges with auditory working memory, speech intelligibility, or abstract language. Students with ID may similarly benefit from reduced information load and repeated instruction. Useful workflows include pairing spoken directions with a photograph, object, or clear symbol, dividing routines into teachable steps using task analysis ADL supports, presenting one step at a time, providing immediate visual or auditory feedback, and gradually fading prompts as independence increases. For example, a handwashing task analysis might display: turn on water → wet hands → soap → scrub → rinse → dry. A talking button can replay the current step, while a visual strip preserves the complete sequence.',
    downCtaText: isNepali
      ? 'हाम्रो दैनिक जीवन सीप (ADL) कार्य विश्लेषण तथा तालिका उपकरणहरू अन्वेषण गर्नुहोस्'
      : 'Explore our Daily Living Skills (ADL) Task Analysis tools',

    // CP Section
    cpTitle: isNepali ? 'सेरेब्रल पाल्सीका लागि सहायक प्रविधि (Assistive Technology for Cerebral Palsy)' : 'Assistive Technology for Cerebral Palsy',
    cpBody: isNepali
      ? 'सेरेब्रल पाल्सीले मांसपेशीको तनाव (Tone), समन्वय, शारीरिक बसाइको मुद्रा, बोली, र ऐच्छिक चाललाई असर गर्न सक्छ। मोटर कमजोरी हुनुको अर्थ बौद्धिक अपाङ्गता हुनु होइन। मुख्य प्रश्न यो हो: यो सिकारुले न्यूनतम शारीरिक प्रयासमा कसरी आफ्नो रोजाइ व्यक्त गर्न सक्छ? उपयुक्त बसाइ र शारीरिक पहुँचबाट सुरु गर्नुहोस्। सम्भावित अनुकूलनहरूमा: ठूला ट्याप क्षेत्रहरू (Large Tap Zones) र प्रतीकहरूबीच फराकिलो दूरी, हातलाई स्थिर राख्ने किगार्ड, गल्तीले हुने दोहोरो ट्यापलाई बेवास्ता गर्ने टच अनुकूलन, उच्च-कन्ट्रास्ट दृश्य ट्र्याकहरू, अनुकूलित स्क्यानिङ समयसहितको १ वा २ स्विच स्क्यानिङ, दृष्टि-नियन्त्रण (Eye-gaze), र सेरेब्रल पाल्सी सञ्चार बोर्डहरू समावेश छन्। "सरलीकृत" भन्नुको अर्थ पहुँच गर्न सजिलो हुनु हो, अपरिपक्व वा सीमित भाषामा बाँध्नु होइन।'
      : 'CP can affect muscle tone, coordination, posture, speech, and voluntary movement. Motor impairment does not indicate intellectual disability. The essential question is: How can this learner make an intentional selection with the least effort? Begin with seating and physical access. Potential adaptations include large tap zones and increased spacing between symbols, keyguards that stabilize the hand and reduce accidental selections, touch accommodations that ignore repeated or unintended taps, high-contrast visual runway tracks, one- or two-switch scanning with individualized scan timing, eye-gaze access with calibrated dwell time, and simplified cerebral palsy communication boards. "Simplified" should mean easier to access, not restricted to childish or inadequate language.',
    cpCtaText: isNepali
      ? 'हाम्रो एक-ट्याप द्रुत टकर (Single-Tap Quick Talker AAC) इन्टरफेस परीक्षण गर्नुहोस्'
      : 'Test our Single-Tap Quick Talker AAC interface',

    // Implementation Guide
    implTitle: isNepali ? 'गृह तथा कक्षाकोठा कार्यान्वयन निर्देशिका' : 'Home and Classroom Implementation Guide',
    implSubtitle: isNepali
      ? 'उपकरण छनोटदेखि कक्षाकोठा र घरमा दिगो सञ्चार र सिकाइ स्थापित गर्न ७-चरणीय वैज्ञानिक कार्यविधि:'
      : 'A structured, evidence-based 7-step roadmap for evaluating, introducing, modeling, and maintaining assistive technology:',
    steps: [
      {
        num: '01',
        title: isNepali ? 'सहभागिताको कार्यात्मक लक्ष्य परिभाषित गर्नुहोस् (Define a participation goal)' : 'Define a participation goal',
        text: isNepali
          ? 'कुनै उत्पादन वा प्रविधिबाट होइन, कार्यात्मक नतिजाबाट सुरु गर्नुहोस्। उदाहरणका लागि: "विद्यार्थीले समूह सिकाइको समयमा स्वतन्त्र रूपमा ब्रेक माग्नेछ," न कि "विद्यार्थीले एउटा एप चलाउनेछ।"'
          : 'Start with a functional outcome rather than a product. For example: "The student will independently request a break during group instruction," not "The student will use an app."',
      },
      {
        num: '02',
        title: isNepali ? 'पूर्ण-व्यक्तिगत पहुँच मूल्याङ्कन पूरा गर्नुहोस् (Complete a whole-person access review)' : 'Complete a whole-person access review',
        text: isNepali
          ? 'सञ्चार र भाषा, दृष्टि र श्रवण, सूक्ष्म र स्थूल मोटर पहुँच, बसाइ र स्थिति (Seating & Positioning), संवेदी प्राथमिकता, ध्यान र कार्यकारी स्मरण, थकान, दुखाइ, र पारिवारिक प्राथमिकता तथा भाषाको मूल्याङ्कन गर्नुहोस्।'
          : 'Examine communication and language, vision and hearing, fine- and gross-motor access, seating and positioning, sensory preferences, attention and working memory, fatigue, pain, medication effects, and family priorities.',
      },
      {
        num: '03',
        title: isNepali ? 'अवरोधहरूसँग प्रविधिका विशेषताहरू मिलाउनुहोस् (Match features to barriers)' : 'Match features to barriers',
        text: isNepali
          ? 'आवश्यक विशेषताहरूका आधारमा उपकरणहरू परीक्षण गर्नुहोस्: प्रतीकको आकार, आवाज आउटपुट, स्विच अनुकूलता, पोर्टेबिलिटी, स्थायित्व, वा दृश्य सरलता। केवल लोकप्रिय वा उपलब्ध भएकै भरमा प्रविधि नछान्नुहोस्।'
          : 'Trial tools based on required features: symbol size, voice output, switch compatibility, portability, durability, or visual simplicity. Do not choose technology solely because it is popular or already available.',
      },
      {
        num: '04',
        title: isNepali ? 'एकपटकमा एउटा मात्र दिनचर्या सुरु गर्नुहोस् (Introduce one routine at a time)' : 'Introduce one routine at a time',
        text: isNepali
          ? 'खाजा खाने, संगीत सुन्ने, लुगा लगाउने, वा कथा पढ्ने जस्ता पूर्वानुमान गर्न सकिने र रमाइलो गतिविधिबाट सुरु गर्नुहोस्। नयाँ उपकरण सिकाउँदा परिचित लो-टेक साधनलाई ब्याकअपको रूपमा सँगै राख्नुहोस्।'
          : 'Begin in a predictable, motivating activity such as snack, music, dressing, or shared reading. Keep a familiar low-tech support available while introducing a new device.',
      },
      {
        num: '05',
        title: isNepali ? 'दबावबिना प्रयोग गरेर देखाउनुहोस् (Model without pressure)' : 'Model without pressure',
        text: isNepali
          ? 'उपकरणको बारम्बार प्रयोग गरेर देखाउनुहोस् (Aided Language Input), सोच्न र प्रशोधन गर्न पर्याप्त समय दिनुहोस्, र सबै जानाजानी गरिएका सञ्चार प्रयासहरूलाई सम्मान गर्नुहोस्। जबर्जस्ती हात समातेर थिच्न नलगाउनुहोस्।'
          : 'Demonstrate the tool frequently, allow adequate processing time, and honor all intentional communication. Avoid hand-over-hand prompting when it could obscure whether a selection reflects the learner\'s choice.',
      },
      {
        num: '06',
        title: isNepali ? 'अर्थपूर्ण नतिजाहरू मापन गर्नुहोस् (Measure meaningful outcomes)' : 'Measure meaningful outcomes',
        text: isNepali
          ? 'केवल शुद्धता मात्र होइन; स्वतन्त्र सञ्चारको सुरुवात (Initiations), सहभागिता समय, सफल सञ्चार संवादहरूको संख्या, आवश्यक सहयोगको स्तर (Prompt Level), र विभिन्न परिवेशमा भएको प्रयोगलाई ट्र्याक गर्नुहोस्।'
          : 'Track more than accuracy. Useful indicators include independent initiations, participation time, number of successful communication turns, prompt level, completion time, fatigue or distress, and use across people and settings.',
      },
      {
        num: '07',
        title: isNepali ? 'पहुँचको सामान्यीकरण र दिगोपना कायम गर्नुहोस् (Generalize and maintain access)' : 'Generalize and maintain access',
        text: isNepali
          ? 'घर, विद्यालय, र थेरापीमा एउटै प्रतीक र शब्दावली प्रयोग गर्नुहोस्। यन्त्र चार्ज गर्ने, अपडेट गर्ने, माउन्ट गर्ने, मर्मत गर्ने, शिक्षक/कर्मचारीलाई तालिम दिने, र लो-टेक ब्याकअप राख्ने कार्यविधि योजनामा स्पष्ट लेख्नुहोस्।'
          : 'Use consistent symbols and vocabulary across home, school, and therapy. Document charging, updates, mounting, repairs, staff training, and low-tech backup procedures in the AT or IEP plan.',
      },
    ],

    // FAQ Section
    faqTitle: isNepali ? 'बारम्बार सोधिने प्रश्नहरू (Frequently Asked Questions)' : 'Frequently Asked Questions',
    faqSubtitle: isNepali
      ? 'विशेष शिक्षामा सहायक प्रविधि र कार्यान्वयन सम्बन्धमा अनुसन्धान-आधारित जवाफहरू:'
      : 'Peer-reviewed evidence addressing common concerns about assistive technology, speech development, and classroom integration:',
    faqs: [
      {
        q: isNepali
          ? 'विशेष शिक्षामा के-कस्ता कुराहरू सहायक प्रविधि (AT) अन्तर्गत पर्दछन्?'
          : 'What qualifies as assistive technology in special education?',
        a: isNepali
          ? 'विद्यार्थीको कार्यगत क्षमतालाई कायम राख्ने, सुधार गर्ने, वा बढाउने कुनै पनि वस्तु, उपकरण, सफ्टवेयर, वा उत्पादन प्रणाली सहायक प्रविधि अन्तर्गत पर्दछ। यो बजारमा किन्न पाइने, अनुकूलित गरिएको, वा विशेष रूपमा बनाइएको हुन सक्छ। सहायक प्रविधि सेवाहरूमा मूल्याङ्कन, अनुकूलन, तालिम, र प्राविधिक सहयोग समावेश हुन्छन्।'
          : 'AT includes any item, equipment, software, or product system that maintains, improves, or increases a student\'s functional abilities. It can be commercially purchased, adapted, or custom-made. AT services include evaluation, customization, training, and technical support.',
      },
      {
        q: isNepali
          ? 'के AAC प्रयोग गर्दा प्राकृतिक बोलीको विकास रोकिन सक्छ?'
          : 'Can AAC prevent speech development?',
        a: isNepali
          ? 'हुँदैन, रोकिँदैन। दशकौंदेखिका अनुसन्धान समीक्षाले AAC ले प्राकृतिक बोली विकासलाई रोक्छ भन्ने कुनै प्रमाण भेट्टाएका छैनन्। AAC ले कतिपय सिकारुहरूका लागि मौखिक भाषा विकासमा सहयोग गर्दछ भने अन्यका लागि अत्यावश्यक सञ्चार विधि प्रदान गर्दछ। AAC सुरु गर्न विद्यार्थीले कुनै पूर्व योग्यता प्रमाणित गर्नु वा स्पीच थेरापीमा असफल हुनु पर्दैन।'
          : 'No. Research reviews have not found that AAC prevents speech development. AAC may support spoken language for some learners while providing an essential communication method for others. A student should not have to prove readiness or fail speech therapy before receiving AAC.',
      },
      {
        q: isNepali
          ? 'डाउन सिन्ड्रोम भएका विद्यार्थीहरूलाई दृश्य तालिकाहरूले कसरी सहयोग गर्छन्?'
          : 'How do visual schedules help students with Down syndrome?',
        a: isNepali
          ? 'दृश्य तालिकाहरूले दिनचर्यालाई आँखा अगाडि स्पष्ट र स्थिर बनाएर श्रव्य कार्यकारी स्मरण (Auditory Working Memory) माथिको निर्भरता कम गर्छन्। यसले गतिविधि परिवर्तन (Transitions), कार्य सुरु गर्ने क्षमता, अनुक्रम मिलाउने, र आत्मनिर्भरतालाई समर्थन गर्दछ। सुरुमा वास्तविक तस्बिरहरू, र पछि बुझाइ बढ्दै जाँदा प्रतीक वा लिखित शब्दहरू प्रयोग गर्न सकिन्छ।'
          : 'Visual schedules reduce dependence on auditory working memory by making routines visible and persistent. They can support transitions, task initiation, sequencing, and independence. Photographs may be used initially, followed by symbols or written words as comprehension develops.',
      },
      {
        q: isNepali
          ? 'सेरेब्रल पाल्सी भएका बालबालिकाका लागि सबैभन्दा उत्तम सञ्चार उपकरण कुन हो?'
          : 'What is the best communication device for a child with cerebral palsy?',
        a: isNepali
          ? 'सबैका लागि उपयुक्त हुने कुनै एउटै विश्वव्यापी उपकरण छैन। उपकरणको छनोट मोटर नियन्त्रण, दृष्टि, श्रवण, भाषा, बसाइको स्थिति, थकान, र सिकारुले टच, स्विच, साझेदार-सहायता स्क्यानिङ, वा आँखाको दृष्टिमध्ये कुन तरिकाले प्रणाली चलाउँछ भन्ने कुरामा निर्भर गर्दछ। बहुविषय विशेषज्ञ टोलीद्वारा AAC मूल्याङ्कन र वास्तविक यन्त्र परीक्षण सिफारिस गरिन्छ।'
          : 'There is no universally best device. Selection depends on motor control, vision, hearing, language, seating, fatigue, and whether the learner accesses the system through touch, switches, partner-assisted scanning, or eye gaze. A multidisciplinary AAC evaluation and real-world device trial are recommended.',
      },
      {
        q: isNepali
          ? 'सहायक प्रविधिले प्रभावकारी रूपमा काम गरिरहेको छ कि छैन भनी IEP टोलीले कसरी थाहा पाउन सक्छ?'
          : 'How can an IEP team tell whether assistive technology is working?',
        a: isNepali
          ? 'टोलीले केवल यन्त्र चलाएको मात्र नहेरी विद्यार्थीको पहुँचमा आएको सुधार, स्वतन्त्रता, सञ्चार, सहभागिता, र शारीरिक प्रयासमा आएको कमीलाई हेर्नुपर्छ। यदि व्यापक सहायता र दबाब दिँदा मात्र प्रगति हुन्छ, वा उपकरणले थकान र तनाव बढाउँछ भने, पहुँच विधि, इन्टरफेस, तालिम, वा कार्यको मागलाई पुनर्विचार गरी समायोजन गर्नुपर्छ।'
          : 'The team should look for improved access, independence, communication, participation, and reduced effort—not merely device use. If progress occurs only with extensive prompting, or the tool increases fatigue or distress, the access method, interface, training, or activity demands should be adjusted.',
      },
    ],
  };

  const tocItems = [
    { id: 'executive-summary', label: isNepali ? 'कार्यकारी सारांश' : 'Executive Summary' },
    { id: 'cognitive-physical-barriers', label: isNepali ? 'संज्ञानात्मक तथा शारीरिक अवरोधहरू' : 'Cognitive & Physical Barriers' },
    { id: 'assistive-technology-continuum', label: isNepali ? 'सहायक प्रविधि ३-तह तालिका' : 'AT Continuum (3 Tiers)' },
    { id: 'condition-specific-adaptations', label: isNepali ? 'अवस्था-विशिष्ट अनुकूलन (ASD, DS, CP)' : 'Condition Adaptations' },
    { id: 'implementation-guide', label: isNepali ? '७-चरण कार्यान्वयन कार्यविधि' : '7-Step Implementation Guide' },
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
                {isNepali ? 'विशेष शिक्षा सहायक प्रविधि' : 'AT in Special Education'}
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

          {/* Featured Snippet Card (Position-Zero Box) */}
          <aside
            id="executive-summary"
            aria-label="Executive Summary: What Is Assistive Technology?"
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
          
          {/* STICKY TABLE OF CONTENTS (DESKTOP SIDEBAR - 4 cols) */}
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
            
            {/* ---------------------------------------------------------- */}
            {/* ZONE 2: COGNITIVE & PHYSICAL BARRIERS (6-CARD MATRIX)      */}
            {/* ---------------------------------------------------------- */}
            <section id="cognitive-physical-barriers" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-2 text-[#2B5763] dark:text-[#80C0D0] text-xs font-bold uppercase tracking-wider">
                <Target className="h-4 w-4" aria-hidden="true" />
                <span>{isNepali ? 'पहुँच र अवरोध विश्लेषण' : 'Barrier Analysis'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0] tracking-tight mb-4">
                {content.barriersTitle}
              </h2>

              <p className="text-sm sm:text-base text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mb-8">
                {content.barriersSubtitle}
              </p>

              {/* 6-Card Responsive Matrix */}
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
                            {item.category}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-2 leading-snug">
                          {item.barrier}
                        </h3>

                        <div className="space-y-2 text-xs sm:text-sm">
                          <p className="text-[#5B6B7C] dark:text-[#94A3B8]">
                            <strong className="text-[#3E4D5E] dark:text-[#CBD5E1]">{isNepali ? 'लक्षण:' : 'Presentation:'}</strong> {item.looksLike}
                          </p>
                          <div className="rounded-xl bg-[#FAF7EE] dark:bg-[#1E2A37] p-3 text-[#1E3F49] dark:text-[#9DD3E0] font-medium">
                            <strong>{isNepali ? 'उपयोगी सहायक प्रविधि:' : 'Helpful AT Response:'}</strong> {item.atResponse}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Behavior is Access-Related Information Callout */}
              <div className="mt-6 rounded-xl border-l-4 border-[#2B5763] bg-[#E8EFF1] dark:bg-[#192C36] p-4 sm:p-5 text-xs sm:text-sm text-[#1E3F49] dark:text-[#9DD3E0] font-medium leading-relaxed">
                <strong>{isNepali ? 'क्लिनिकल मुख्य सिद्धान्त:' : 'Core Clinical Principle:'}</strong> {content.behaviorCallout}
              </div>
            </section>

            {/* ---------------------------------------------------------- */}
            {/* ZONE 3: ASSISTIVE TECHNOLOGY CONTINUUM (RESPONSIVE MATRIX) */}
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

                    <div className="rounded-xl bg-[#FAF7EE] dark:bg-[#1F2C3A] p-3.5 mb-3 text-xs text-[#3E4D5E] dark:text-[#94A3B8]">
                      <strong className="text-[#1E293B] dark:text-[#E2E8F0]">{isNepali ? 'व्यावहारिक उदाहरणहरू:' : 'Practical Examples:'}</strong> {tier.examples}
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-[#2C3E50] dark:text-[#CBD5E1] mb-2">
                      <strong>{isNepali ? 'सामान्य प्रयोग क्षेत्र:' : 'Common Applications:'}</strong> {tier.applications}
                    </p>

                    <p className="text-xs text-[#5B6B7C] dark:text-[#8090A0]">
                      <span className="font-semibold text-[#2B5763] dark:text-[#80C0D0]">{isNepali ? 'क्लिनिकल सबल पक्ष:' : 'Clinical Advantage:'}</span> {tier.pros}
                    </p>
                  </div>
                ))}
              </div>

              {/* AT Services Callout */}
              <div className="mt-6 rounded-2xl border-2 border-[#D7E3E7] dark:border-[#2C4A56] bg-[#FAF7EE] dark:bg-[#15232D] p-5 sm:p-6 shadow-xs">
                <div className="flex items-center gap-2 text-[#1E3F49] dark:text-[#80C0D0] font-bold text-sm sm:text-base mb-2">
                  <FileCheck className="h-5 w-5 text-[#2B5763] dark:text-[#80C0D0]" />
                  <h4>{isNepali ? 'सहायक प्रविधिमा "सेवाहरू" को भूमिका' : 'AT Encompasses Critical Services'}</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#3E4D5E] dark:text-[#CBD5E1] leading-relaxed">
                  {content.atServicesCallout}
                </p>
              </div>
            </section>

            {/* ---------------------------------------------------------- */}
            {/* ZONE 4: CONDITION-SPECIFIC ADAPTATIONS + FLUTTER CTAS      */}
            {/* ---------------------------------------------------------- */}
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

              {/* SUBSECTION 1: ASD */}
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

              {/* SUBSECTION 2: DOWN SYNDROME & ID */}
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

              {/* SUBSECTION 3: CEREBRAL PALSY */}
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

            {/* ---------------------------------------------------------- */}
            {/* ZONE 5: IMPLEMENTATION GUIDE (7-STEP TIMELINE STEPPER)     */}
            {/* ---------------------------------------------------------- */}
            <section id="implementation-guide" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-2 text-[#2B5763] dark:text-[#80C0D0] text-xs font-bold uppercase tracking-wider">
                <Check className="h-4 w-4" aria-hidden="true" />
                <span>{isNepali ? '७-चरणीय कार्यविधि' : 'Implementation Stepper'}</span>
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
            {/* ZONE 6: FAQ ACCORDION (ACCESSIBLE SCHEMA-DRIVEN)           */}
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
