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
  Target,
  FileCheck,
  Layers,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function AtSpectrumGuideClient() {
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
        'neurodevelopmental-barriers',
        'at-spectrum-comparison',
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
      ? 'लो-टेक बनाम मिड-टेक बनाम हाई-टेक: विविध सिकारुहरूका लागि सहायक प्रविधि स्पेक्ट्रम'
      : 'Low-Tech vs. Mid-Tech vs. High-Tech: Navigating the AT Spectrum for Diverse Learners',

    // Executive Summary
    execSummaryTitle: isNepali ? 'कार्यकारी सारांश: सहायक प्रविधि स्पेक्ट्रमको बुझाइ' : 'Executive Summary: Understanding the Assistive Technology Spectrum',
    execSummaryText: isNepali ? (
      <>
        <strong>लो-टेक सहायक प्रविधिले सरल, सामान्यतया गैर-इलेक्ट्रोनिक सामग्रीहरू प्रयोग गर्दछ; मिड-टेकले आधारभूत इलेक्ट्रोनिक कार्यहरू प्रयोग गर्दछ; र हाई-टेक प्रविधि अनुकूलन योग्य सफ्टवेयर वा उन्नत हार्डवेयरमा निर्भर हुन्छ।</strong> उदाहरणहरूमा कागजी दृश्य तालिका, रेकर्ड गरिएको सन्देश बटन, र आँखाको दृष्टिले चल्ने बोली-उत्पादक उपकरण पर्दछन्। यी श्रेणीहरूले उपकरणको प्राविधिक जटिलतालाई वर्णन गर्दछन्—यसको गुणस्तर वा सिकारुको क्षमतालाई होइन। सबैभन्दा राम्रो सहायक प्रविधि (AT) त्यो <strong>न्यूनतम जटिल विकल्प हो जसले भविष्यको सिकाइलाई सीमित नगरी भरपर्दो, मर्यादित पहुँच प्रदान गर्दछ</strong>। अटिजम (ASD), डाउन सिन्ड्रोम, बौद्धिक अपाङ्गता (ID), वा सेरेब्रल पाल्सी (CP) भएका धेरै विद्यार्थीहरूलाई एक समन्वित संयोजन चाहिन्छ: सञ्चारका लागि हाई-टेक AAC, गतिविधि परिवर्तनका लागि दृश्य टाइमर, र ब्याकअपका लागि कागजी सञ्चार बोर्ड। सहायक प्रविधिले सञ्चार, सिकाइ, गतिशीलता, आत्म-नियमन, र सहभागितामा रहेका अवरोधहरू हटाउनुपर्छ। सिकारुको आराम, स्वायत्तता, वा वास्तविक सञ्चारलाई बलिदान दिएर उनीहरूलाई &quot;सामान्य&quot; देखाउनका लागि प्रविधि कहिल्यै प्रयोग गरिनु हुँदैन।
      </>
    ) : (
      <>
        <strong>Low-tech assistive technology uses simple, usually non-electronic materials; mid-tech AT uses basic electronic functions; and high-tech AT relies on customizable software or advanced hardware.</strong> Examples include a paper visual schedule, a recorded-message button, and an eye-gaze speech-generating device. These categories describe a tool&apos;s complexity—not its quality or the learner&apos;s ability. The best assistive technology (AT) is the <strong>least complicated option that provides reliable, dignified access without limiting future learning</strong>. Many students with Autism Spectrum Disorder (ASD), Down syndrome, intellectual disabilities (ID), or cerebral palsy (CP) need a combination: high-tech AAC for communication, a visual timer for transitions, and a paper communication board for backup. AT should remove barriers to communication, learning, movement, self-regulation, and participation. It should never be used to make a learner appear more &quot;typical&quot; at the expense of comfort, autonomy, or authentic communication.
      </>
    ),

    // Neurodevelopmental Barriers
    barriersTitle: isNepali ? 'स्नायु-विकासात्मक अवरोधहरू किन उत्पन्न हुन्छन्?' : 'Why Neurodevelopmental Barriers Occur',
    barriersSubtitle: isNepali
      ? 'कुनै सिकारुले अवधारणालाई पूर्ण रूपमा बुझेको हुन सक्छ, तर पनि बोली, हस्तलेखन, वा द्रुत मोटर प्रतिक्रियाद्वारा आफ्नो बुझाइ प्रदर्शन गर्न असमर्थ हुन सक्छ। सामान्य अवरोधहरूमा निम्न समावेश छन्:'
      : 'A learner may understand a concept yet be unable to demonstrate that understanding through speech, handwriting, or rapid motor responses. Common barriers include:',
    barriers: [
      {
        id: 'interoception',
        icon: HeartPulse,
        factor: isNepali ? 'अन्तर-इन्द्रिय शारीरिक अनुभूतिमा भिन्नता' : 'Interoception differences',
        impact: isNepali ? 'दुखाइ, भोक, थकान, वा बढ्दो मानसिक तनाव पहिचान गर्न कठिनाइ' : 'Difficulty identifying pain, hunger, fatigue, or escalating distress',
        atResponse: isNepali ? 'शारीरिक जाँच चार्ट, दुखाइ मापन स्केल, ब्रेक माग्ने प्रतीकहरू' : 'Body check-in charts, pain scales, break symbols',
        category: isNepali ? 'संवेदी स्व-नियमन' : 'Sensory & Regulation',
      },
      {
        id: 'working-memory',
        icon: Cpu,
        factor: isNepali ? 'कार्यकारी स्मरण क्षमतामा भार' : 'Working-memory load',
        impact: isNepali ? 'बहु-चरणीय मौखिक निर्देशनहरू पूरा गर्नुअघि नै क्रम बिर्सने' : 'Losing multistep verbal directions before completing them',
        atResponse: isNepali ? 'दृश्य तालिकाहरू, रेकर्ड गरिएका श्रव्य संकेतहरू, चेकलिस्टहरू' : 'Visual schedules, recorded prompts, checklists',
        category: isNepali ? 'संज्ञानात्मक प्रशोधन' : 'Cognitive Processing',
      },
      {
        id: 'executive-dysfunction',
        icon: Brain,
        factor: isNepali ? 'कार्यकारी कार्य क्षमतामा शिथिलता' : 'Executive dysfunction',
        impact: isNepali ? 'कुनै गतिविधि सुरु गर्न, अनुक्रम मिलाउन, परिवर्तन गर्न वा रोक्न कठिनाइ' : 'Difficulty initiating, sequencing, shifting, or stopping an activity',
        atResponse: isNepali ? 'पहिले-त्यसपछि बोर्डहरू, टाइमरहरू, कार्य-अनुक्रम एपहरू' : 'First-then boards, timers, task-sequencing apps',
        category: isNepali ? 'दिनचर्या र अनुक्रम' : 'Task Sequencing',
      },
      {
        id: 'motor-apraxia',
        icon: Hand,
        factor: isNepali ? 'मोटर योजना भिन्नता वा अप्राक्सिया' : 'Motor planning differences or apraxia',
        impact: isNepali ? 'बोली, लेखाइ, औंल्याउने, वा ट्याप गर्ने कार्य ढिलो र थकाइपूर्ण हुने' : 'Speech, writing, pointing, or tapping may be slow and effortful',
        atResponse: isNepali ? 'AAC उपकरण, किगार्ड, वैकल्पिक किबोर्ड, स्विच पहुँच' : 'AAC, keyguards, alternative keyboards, switch access',
        category: isNepali ? 'शारीरिक पहुँच' : 'Physical Access',
      },
      {
        id: 'sensory-processing',
        icon: Sliders,
        factor: isNepali ? 'संवेदी प्रशोधनमा भिन्नता' : 'Sensory processing differences',
        impact: isNepali ? 'आवाज, चमक, भद्रगोल दृश्य, वा एनिमेसनले सहभागितामा बाधा पुर्याउने' : 'Sound, glare, clutter, or animation interferes with participation',
        atResponse: isNepali ? 'म्याट स्क्रिन, शान्त इन्टरफेस, संकुचित दृश्य क्षेत्र (Reduced fields)' : 'Matte screens, quiet interfaces, reduced visual fields',
        category: isNepali ? 'वातावरणीय अनुकूलन' : 'Sensory Accommodations',
      },
      {
        id: 'impaired-motor-control',
        icon: Target,
        factor: isNepali ? 'अवरुद्ध मोटर नियन्त्रण' : 'Impaired motor control',
        impact: isNepali ? 'कम्पन (Tremor), मांसपेशीको तनाव, सीमित दायरा, वा थकानले गलत चयन हुने' : 'Tremor, muscle tone, limited range, or fatigue causes inaccurate selection',
        atResponse: isNepali ? 'ठूला ट्याप लक्ष्यहरू, दृष्टि-नियन्त्रण, स्क्यानिङ, अनुकूलित बसाइ' : 'Large targets, eye gaze, scanning, optimized positioning',
        category: isNepali ? 'मोटर अनुकूलन' : 'Motor Adaptations',
      },
    ],
    behaviorCallout: isNepali
      ? 'नियम पालना नगरेको वा अस्वीकार गरेको भनी व्याख्या गरिने व्यवहारले वास्तवमा दुखाइ, संवेदी ओभरलोड, अनुपयुक्त पहुँच विधि, वा अत्यधिक संज्ञानात्मक मागको संकेत गरिरहेको हुन सक्छ। श्रवण कमजोरी, दृष्टि भिन्नता, निद्रा समस्या, वा दुखाइ जस्ता चिकित्सा विषयहरूलाई पनि केवल अपाङ्गताको नाममा नछोडी उचित क्लिनिकल मूल्याङ्कन गरिनुपर्छ।'
      : 'Behavior described as refusal may instead signal pain, overload, an inaccessible response method, or excessive cognitive demand. Medical concerns—including hearing loss, vision differences, sleep problems, seizures, or pain—also require appropriate clinical assessment rather than being attributed automatically to disability.',

    // Low-Tech, Mid-Tech, and High-Tech AT Compared
    atTitle: isNepali ? 'लो-टेक, मिड-टेक, र हाई-टेक सहायक प्रविधिको तुलना' : 'Low-Tech, Mid-Tech, and High-Tech AT Compared',
    atSubtitle: isNepali
      ? 'यी तीन तहहरू कडा चिकित्सा वर्गीकरण होइनन्, बरु व्यावहारिक योजना बनाउने श्रेणीहरू हुन्:'
      : 'The three levels are practical planning categories rather than rigid medical classifications.',
    atTiers: [
      {
        id: 'low',
        tier: isNepali ? 'लो-टेक (Low-Tech)' : 'Low-Tech',
        badge: isNepali ? 'शून्य ब्याट्री, उच्च विश्वसनीयता' : 'Zero power, high reliability',
        badgeClass: 'bg-[#EBF7EE] text-[#24633B] dark:bg-[#193322] dark:text-[#7CDA9B] border-[#BDE3C7] dark:border-[#2D5A3A]',
        examples: isNepali
          ? 'दृश्य तालिकाहरू, पहिले-त्यसपछि बोर्डहरू, पेन्सिल ग्रिप, स्लान्ट बोर्ड, कागजी AAC, छनोट बोर्ड, कार्य-विश्लेषण स्ट्रिपहरू'
          : 'Visual schedules, first-then boards, pencil grips, slant boards, paper AAC, choice boards, task-analysis strips',
        advantages: isNepali ? 'किफायती, टिकाउ, पोर्टेबल, कुनै चार्ज नचाहिने' : 'Affordable, durable, portable, no charging required',
        limitations: isNepali ? 'सीमित आवाज आउटपुट; सामग्रीहरू म्यानुअल रूपमा अद्यावधिक गर्नुपर्ने' : 'Limited voice output; materials must be updated manually',
      },
      {
        id: 'mid',
        tier: isNepali ? 'मिड-टेक (Mid-Tech)' : 'Mid-Tech',
        badge: isNepali ? 'सामान्य ब्याट्री / आवाज आउटपुट' : 'Simple battery / voice output',
        badgeClass: 'bg-[#E8F2FC] text-[#1E4D7E] dark:bg-[#162A40] dark:text-[#88BDEC] border-[#BBD8F5] dark:border-[#234A6E]',
        examples: isNepali
          ? 'दृश्य टाइमरहरू, बोल्ने बटनहरू, अडियो रेकर्डरहरू, बहु-सन्देश यन्त्रहरू, स्विच-अनुकूल खेलौनाहरू'
          : 'Visual timers, talking buttons, audio recorders, multi-message devices, switch-adapted toys',
        advantages: isNepali ? 'सरल प्रतिक्रिया, सजिलो कारण-र-प्रभाव सिकाइ, न्यूनतम नेभिगेसन माग' : 'Simple feedback, easy cause-and-effect learning, fewer navigation demands',
        limitations: isNepali ? 'सीमित शब्दावली र अनुकूलन क्षमता' : 'Limited vocabulary and customization',
      },
      {
        id: 'high',
        tier: isNepali ? 'हाई-टेक (High-Tech)' : 'High-Tech',
        badge: isNepali ? 'सफ्टवेयर तथा आँखाको दृष्टिले चल्ने' : 'Dynamic software / eye-gaze',
        badgeClass: 'bg-[#F4EEFB] text-[#552D80] dark:bg-[#2C1C3F] dark:text-[#C7A3F0] border-[#DFC9F7] dark:border-[#523375]',
        examples: isNepali
          ? 'गतिशील AAC, बोली-उत्पादक उपकरणहरू, टेक्स्ट-टु-स्पीच, स्विच-स्क्यानिङ सफ्टवेयर, दृष्टि-नियन्त्रण (Eye-Gaze) प्रणालीहरू'
          : 'Dynamic AAC, speech-generating devices, text-to-speech, switch-scanning software, eye-gaze systems',
        advantages: isNepali ? 'सबल भाषा, अनुकूलन योग्य पहुँच, साक्षरता र जटिल सहभागितामा समर्थन' : 'Robust language, adaptable access, supports literacy and complex participation',
        limitations: isNepali ? 'मूल्याङ्कन, तालिम, नियमित चार्जिङ, मर्मत, र ब्याकअप योजना आवश्यक पर्ने' : 'Requires assessment, training, charging, maintenance, and backup plans',
      },
    ],
    atFeatureMatchCallout: isNepali
      ? 'हाई-टेक यन्त्र स्वतः बढी प्रभावकारी हुन्छ भन्ने छैन। अर्कोतर्फ, कुनै विद्यार्थीलाई सबल AAC का लागि तत्परता प्रमाणित गर्न सीमित तस्बिर बोर्डमा मात्र रोकेर राखिनु हुँदैन। उपकरण छनोट विशेषता मिलान (Feature Matching) मा आधारित हुनुपर्छ: विद्यार्थीलाई चाहिने पहुँच, भाषा, संवेदी, र वातावरणीय सुविधाहरू पहिचान गर्ने र वास्तविक गतिविधिहरूमा परीक्षण गर्ने। सहायक प्रविधिमा शब्दावली प्रोग्रामिङ, स्थिति मिलाउने, सञ्चार साझेदारको तालिम, र नतिजा मापन जस्ता सेवाहरू पनि समावेश हुन्छन्।'
      : 'A high-tech device is not automatically more effective. Conversely, a student should not be kept on a limited picture board merely to prove readiness for robust AAC. Tool selection should be based on feature matching: identifying the access, language, sensory, and environmental features the student needs, then trialing options in real activities. AT also includes services: programming vocabulary, positioning a device, training partners, and measuring outcomes.',

    // Condition-Specific Practical Adaptations
    condTitle: isNepali ? 'अवस्था-विशिष्ट व्यावहारिक अनुकूलनहरू' : 'Condition-Specific Practical Adaptations',
    condSubtitle: isNepali
      ? 'विभिन्न स्नायु-विकासात्मक आवश्यकता भएका सिकारुहरूका लागि लो-टेक, मिड-टेक, र हाई-टेक तहका व्यावहारिक अनुकूलनहरू:'
      : 'Actionable adaptations categorized across low-, mid-, and high-tech tiers for diverse learners:',

    // ASD
    asdTitle: isNepali ? 'अटिजम: पूर्वानुमान, संवेदी पहुँच, र AAC' : 'Autism: Predictability, Sensory Access, and AAC',
    asdBody: isNepali
      ? 'अटिस्टिक विद्यार्थीहरूले बाह्य संरचना र तनावको समयमा पनि उपलब्ध रहने सञ्चार विकल्पहरूबाट लाभ उठाउन सक्छन्। लो-टेक: दृश्य तालिकाहरू, पहिले-त्यसपछि बोर्डहरू, लिखित लिपि, ब्रेक कार्ड, र कागजी कोर-शब्दावली बोर्डहरू प्रयोग गर्नुहोस्। मिड-टेक: दृश्य काउन्टडाउन टाइमर, रेकर्ड गरिएका गतिविधि परिवर्तन संकेत, वा सहभागिताका लागि एकल-सन्देश बटनहरू थप्नुहोस्। हाई-टेक: स्थिर आइकन स्थान, समायोज्य आवाज र भोल्युम, कम एनिमेसन, र माग गर्नमा मात्र सीमित नभएको शब्दावली प्रणाली भएको AAC छनोट गर्नुहोस्। कम-उत्तेजना विशेष शैक्षिक प्रविधि (Low-stimulus tech) मा हल्का पृष्ठभूमि, बन्द गरिएका सूचनाहरू, म्याट स्क्रिन प्रोटेक्टर, र कम दृश्य भद्रगोल समावेश हुन सक्छ। "ननभर्बल अटिजमका लागि सहायक प्रविधि" सामान्य खोजी शब्द भए तापनि धेरैले नबोल्ने (Nonspeaking) वा कम बोल्ने (Minimally speaking) शब्द रुचाउँछन्। AAC ले अस्वीकार गर्ने, टिप्पणी गर्ने, प्रश्न सोध्ने, असजिलोपन व्यक्त गर्ने, र सामाजिक सम्बन्ध बनाउने कुरालाई समर्थन गर्नुपर्छ।'
      : 'Autistic students may benefit from external structure and communication options that remain available during stress. Low-tech: Use visual schedules, first-then boards, written scripts, break cards, and paper core-vocabulary boards. Mid-tech: Add visual countdown timers, recorded transition cues, or single-message buttons for participation. High-tech: Select AAC with stable icon locations, adjustable voice and volume, reduced animation, and a vocabulary system that supports more than requesting. Low-stimulus special education tech may include muted backgrounds, disabled notifications, matte screen protectors, and reduced visual clutter. Although "assistive technology for nonverbal autism" is a common search term, many prefer nonspeaking or minimally speaking. AAC should support refusing, commenting, asking questions, reporting discomfort, and social connection—not just compliance.',
    asdCtaText: isNepali
      ? 'हाम्रो निःशुल्क द्विभाषिक वाक्य बनाउने (Sentence Builder AAC) र संवेग व्यवस्थापन मोड्युलहरू प्रयोग गर्नुहोस्'
      : 'Try our free bilingual Sentence Builder AAC and Emotion Regulation modules',

    // Down Syndrome & ID
    downTitle: isNepali ? 'डाउन सिन्ड्रोम तथा बौद्धिक अपाङ्गता: ठोस, अनुक्रमिक सिकाइ' : 'Down Syndrome and Intellectual Disabilities: Concrete, Sequential Learning',
    downBody: isNepali
      ? 'डाउन सिन्ड्रोम र बौद्धिक अपाङ्गता (ID) एउटै होइनन्, तर दुवै समूहका सिकारुहरूले ठोस जानकारी, दोहोर्याएर गरिने अभ्यास, र कम कार्यकारी स्मरण भारबाट लाभ लिन सक्छन्। लो-टेक: बोलिने भाषालाई तस्बिर, वास्तविक वस्तु, प्रतीक, वा छोटो लिखित निर्देशनहरूसँग जोड्नुहोस्। मिड-टेक: बोल्ने बटन वा श्रव्य संकेतहरू प्रयोग गर्नुहोस् जसले सिकारुलाई एउटा निर्देशन पुनः सुन्न मद्दत गर्दछ। हाई-टेक: ठूलो स्वरमा पढ्ने टेक्स्ट, प्रतीक-समर्थित निर्देशन, सरलीकृत नेभिगेसन, र तत्काल श्रव्य वा दृश्य प्रतिक्रिया विचार गर्नुहोस्। कार्य विश्लेषण (Task analysis ADL) ले गतिविधिलाई अवलोकनयोग्य चरणहरूमा विभाजन गर्दछ। हात धुने कार्यका लागि: पानी खोल्नुहोस् → हात भिजाउनुहोस् → साबुन लगाउनुहोस् → मिच्नुहोस् → पखाल्नुहोस् → पुछ्नुहोस्। एकपटकमा एउटा मात्र चरण प्रस्तुत गर्नुहोस् र बिस्तारै सहायता घटाउँदै लैजानुहोस्। डाउन सिन्ड्रोमका लागि उपयोगी सिकाइ उपकरणहरूले सम्भावित श्रवण वा दृष्टि भिन्नतालाई ध्यानमा राख्नुपर्छ।'
      : 'Down syndrome and ID are not interchangeable diagnoses, but learners in both groups may benefit from concrete information, repetition, and lower working-memory demands. Low-tech: Pair spoken language with photographs, objects, symbols, or short written directions. Mid-tech: Use talking buttons or audio prompts that allow the learner to replay one instruction. High-tech: Consider read-aloud text, symbol-supported instruction, simplified navigation, and immediate auditory or visual feedback. A task analysis ADL workflow divides an activity into observable steps. For handwashing: turn on water → wet hands → add soap → scrub → rinse → dry. Present one step at a time, provide adequate processing time, and gradually fade prompts. Adaptive learning tools for Down syndrome should account for possible hearing or vision differences.',
    downCtaText: isNepali
      ? 'हाम्रो दैनिक जीवन सीप (ADL) कार्य विश्लेषण तथा तालिका उपकरणहरू अन्वेषण गर्नुहोस्'
      : 'Explore our Daily Living Skills (ADL) Task Analysis tools',

    // Cerebral Palsy
    cpTitle: isNepali ? 'सेरेब्रल पाल्सी: कार्य प्रदर्शनअघि मोटर पहुँच' : 'Cerebral Palsy: Motor Access Before Task Performance',
    cpBody: isNepali
      ? 'सेरेब्रल पाल्सी (CP) ले मांसपेशीको तनाव, शारीरिक मुद्रा, समन्वय, बोली, र ऐच्छिक चाललाई असर गर्न सक्छ। यी मोटर भिन्नताहरूले स्वतः बौद्धिक अपाङ्गतालाई दर्शाउँदैनन्। लो-टेक: ठूला, पर्याप्त दूरी भएका लक्ष्यहरू, साझेदार-सहायता स्क्यानिङ, वा पारदर्शी दृष्टि-औंल्याउने फ्रेमहरूसहित सेरेब्रल पाल्सी सञ्चार बोर्डहरू अनुकूलन गर्नुहोस्। मिड-टेक: १ वा २ स्विच सन्देश यन्त्रहरू र स्विच-अनुकूल कक्षाकोठा सामग्रीहरू प्रयोग गर्नुहोस्। हाई-टेक: स्विच स्क्यानिङ, दृष्टि-सञ्चार (Eye-gaze AAC), वैकल्पिक किबोर्ड, र गल्तीले वा दोहोरिएर हुने ट्यापलाई फिल्टर गर्ने टच सेटिङहरू विचार गर्नुहोस्। ठूला ट्याप क्षेत्रहरू, किगार्ड, लक्ष्यतर्फ डोर्याउने उच्च-कन्ट्रास्ट दृश्य ट्र्याकहरू (Visual Runway Tracks), र व्यक्तिगत ड्वेल समय (Dwell times) ले शुद्धता बढाउन सक्छ। बसाइ र माउन्टिङ अनिवार्य छन्: थेरापिस्ट वा सहायक प्रविधि विज्ञले बसाइ, थकान, दृष्टि, र सिकारुको सबैभन्दा भरपर्दो ऐच्छिक चालको मूल्याङ्कन गर्नुपर्छ।'
      : 'CP can affect muscle tone, posture, coordination, speech, and voluntary movement. These motor differences do not, by themselves, indicate intellectual disability. Low-tech: Adapt cerebral palsy communication boards with large, well-spaced targets, partner-assisted scanning, or transparent eye-pointing frames. Mid-tech: Use one- or two-switch message devices and switch-adapted classroom materials. High-tech: Consider switch scanning, eye-gaze AAC, alternative keyboards, and touch settings that filter accidental or repeated taps. Large tap zones, keyguards, high-contrast visual runway tracks leading toward targets, and individualized dwell times can improve accuracy. Positioning and mounting are essential: an OT, PT, SLP, or AT professional should evaluate seating, fatigue, vision, and the most reliable voluntary movement.',
    cpCtaText: isNepali
      ? 'हाम्रो एक-ट्याप द्रुत टकर (Single-Tap Quick Talker AAC) इन्टरफेस परीक्षण गर्नुहोस्'
      : 'Test our Single-Tap Quick Talker AAC interface',

    // Implementation Guide
    implTitle: isNepali ? 'गृह तथा कक्षाकोठा कार्यान्वयन निर्देशिका' : 'Home and Classroom Implementation Guide',
    implSubtitle: isNepali
      ? 'सहायक प्रविधि मूल्याङ्कन, छनोट, मोडलिङ र नियमित मर्मतका लागि ७-चरणीय कार्यविधि:'
      : 'A practical, evidence-based 7-step guide for implementing assistive technology across settings:',
    steps: [
      {
        num: '01',
        title: isNepali ? 'कार्यात्मक सहभागिता लक्ष्य परिभाषित गर्नुहोस् (Define a functional participation goal)' : 'Define a functional participation goal',
        text: isNepali
          ? 'उत्पादनबाट होइन, गतिविधिबाट सुरु गर्नुहोस्: "विद्यार्थीले कक्षाकोठामा असजिलो भएको कुरा बताउनेछ" भन्ने लक्ष्य "विद्यार्थीले AAC एप चलाउनेछ" भन्दा बढी उपयोगी हुन्छ।'
          : 'Begin with the activity, not the product: "The student will communicate discomfort during class" is more useful than "The student will use an AAC app."',
      },
      {
        num: '02',
        title: isNepali ? 'सिकारु, कार्य, र वातावरणको मूल्याङ्कन गर्नुहोस् (Assess the learner, task, and environment)' : 'Assess the learner, task, and environment',
        text: isNepali
          ? 'भाषा, दृष्टि, श्रवण, मोटर पहुँच, संवेदी प्राथमिकता, बसाइको स्थिति, थकान, साक्षरता, र दैनिक दिनचर्याको समीक्षा गर्नुहोस्। सिकारु र परिवारलाई सबैभन्दा महत्त्वपूर्ण के लाग्छ भनी सोध्नुहोस्।'
          : 'Review language, vision, hearing, motor access, sensory preferences, positioning, fatigue, literacy, and daily routines. Ask the learner and family what matters most.',
      },
      {
        num: '03',
        title: isNepali ? 'विशेषताहरू मिलाउनुहोस् र परीक्षण गर्नुहोस् (Match features and conduct trials)' : 'Match features and conduct trials',
        text: isNepali
          ? 'लक्ष्यको आकार, शब्दावली क्षमता, आवाज आउटपुट, पोर्टेबिलिटी, स्विच अनुकूलता, स्थायित्व, र संवेदी भारको तुलना गर्नुहोस्। सम्भव भएसम्म घर, विद्यालय र थेरापीमा उपकरणहरू परीक्षण गर्नुहोस्।'
          : 'Compare target size, vocabulary capacity, voice output, portability, switch compatibility, durability, and sensory load. Trial tools at home, school, and therapy whenever possible.',
      },
      {
        num: '04',
        title: isNepali ? 'एउटा परिचित दिनचर्याभित्र एउटा उपकरण सुरु गर्नुहोस् (Introduce one tool within one familiar routine)' : 'Introduce one tool within one familiar routine',
        text: isNepali
          ? 'खाजा, संगीत, सँगै पढाइ, वा लुगा लगाउने जस्ता उत्प्रेरक गतिविधिबाट सुरु गर्नुहोस्। एकैपटक हरेक दिनचर्या बदल्ने प्रयास नगर्नुहोस्।'
          : 'Start during a motivating activity such as snack, music, shared reading, or dressing. Avoid changing every routine at once.',
      },
      {
        num: '05',
        title: isNepali ? 'दबावबिना प्रयोग गरेर देखाउनुहोस् (Model without creating performance pressure)' : 'Model without creating performance pressure',
        text: isNepali
          ? 'AAC का लागि, वयस्कहरूले बोल्दा शब्दहरू औंल्याउनुपर्छ (Aided Language Input)। पर्याप्त प्रशोधन समय दिनुहोस् र मौखिक बोली वा नक्कलको माग नगरी जानाजानी गरिएका सञ्चार प्रयासहरूलाई तत्काल सम्मान गर्नुहोस्।'
          : 'For AAC, adults should point to words while speaking—a strategy called aided language input. Allow enough processing time and respond to intentional communication without requiring imitation or spoken words first.',
      },
      {
        num: '06',
        title: isNepali ? 'अर्थपूर्ण नतिजाहरू मापन गर्नुहोस् (Measure meaningful outcomes)' : 'Measure meaningful outcomes',
        text: isNepali
          ? 'स्वतन्त्र सुरुवात (Initiations), सहायताको स्तर (Prompt level), सफल सञ्चार संवादहरूको संख्या, सहभागिता समय, थकान, र विभिन्न व्यक्तिहरूसँगको प्रयोग ट्र्याक गर्नुहोस्। यदि व्यापक दबाब दिँदा मात्र उपकरण प्रयोग हुन्छ भने इन्टरफेस वा कार्यको माग समायोजन गर्नुहोस्।'
          : 'Track independent initiations, prompt level, successful communication turns, participation time, accuracy, speed, fatigue, frustration, and use across settings. If the learner uses a tool only with intensive prompting, adjust the interface or task demands.',
      },
      {
        num: '07',
        title: isNepali ? 'प्रणालीको समन्वय र मर्मत गर्नुहोस् (Coordinate and maintain the system)' : 'Coordinate and maintain the system',
        text: isNepali
          ? 'सबै वातावरणहरूमा समान प्रतीक र शब्दावली प्रयोग गर्नुहोस्। उपकरण चार्जिङ, सफ्टवेयर अपडेट, माउन्टिङ, मर्मत जिम्मेवारी, कर्मचारी तालिम, र लो-टेक ब्याकअप कार्यविधि योजनामा स्पष्ट लिपिबद्ध गर्नुहोस्।'
          : 'Use consistent symbols and vocabulary across environments. Document device charging, updates, mounting, repair responsibilities, staff training, and low-tech backups.',
      },
    ],

    // FAQ Section
    faqTitle: isNepali ? 'बारम्बार सोधिने प्रश्नहरू (Frequently Asked Questions)' : 'Frequently Asked Questions',
    faqSubtitle: isNepali
      ? 'लो-टेक, मिड-टेक, र हाई-टेक सहायक प्रविधि सम्बन्धी प्रमाण-आधारित सोधखोज:'
      : 'Peer-reviewed evidence addressing common questions about assistive technology tiers and clinical decision-making:',
    faqs: [
      {
        q: isNepali
          ? 'विशेष शिक्षाका लागि लो-टेक वा हाई-टेक सहायक प्रविधिमध्ये कुन राम्रो हो?'
          : 'Is low-tech or high-tech assistive technology better for special education?',
        a: isNepali
          ? 'कुनै पनि एउटा स्वतः उत्कृष्ट हुँदैन। सबैभन्दा राम्रो विकल्प त्यो हो जसले सिकारुको दैनिक वातावरणमा सहज प्रयासका साथ भरपर्दो पहुँच प्रदान गर्दछ। धेरै विद्यार्थीहरूलाई लो-, मिड-, र हाई-टेक उपकरणहरूको समन्वित संयोजन आवश्यक पर्दछ।'
          : 'Neither is universally better. The best option provides reliable access with manageable effort across the learner\'s daily environments. Many students need a coordinated combination of low-, mid-, and high-tech tools.',
      },
      {
        q: isNepali
          ? 'के AAC प्रयोग गर्दा प्राकृतिक बोली विकास रोकिन सक्छ?'
          : 'Can AAC prevent speech development?',
        a: isNepali
          ? 'हुँदैन, रोकिँदैन। दशकौंदेखिका अनुसन्धान समीक्षाले AAC ले बोली विकासलाई रोक्छ भन्ने कुनै प्रमाण भेट्टाएका छैनन्। AAC ले कतिपय सिकारुहरूका लागि मौखिक भाषा विकासमा सहयोग गर्दछ भने अन्यका लागि अत्यावश्यक सञ्चार माध्यम प्रदान गर्दछ। AAC प्राप्त गर्न बच्चाले कुनै पूर्व संज्ञानात्मक वा बोली योग्यता प्रमाणित गर्नु पर्दैन।'
          : 'No. Research reviews have not found that AAC prevents speech development. AAC may support spoken language for some learners and provides an essential communication pathway for others. A child does not need to demonstrate cognitive, behavioral, or speech prerequisites before receiving AAC.',
      },
      {
        q: isNepali
          ? 'डाउन सिन्ड्रोम भएका सिकारुहरूलाई दृश्य तालिकाहरूले कसरी मद्दत गर्छन्?'
          : 'How do visual schedules help learners with Down syndrome?',
        a: isNepali
          ? 'दृश्य तालिकाहरूले जानकारीलाई बोलीको क्षणिक निर्देशनको सट्टा आँखा अगाडि स्थिर बनाउँछन्। यसले गतिविधि परिवर्तन (Transitions), कार्य सुरु गर्ने क्षमता, कार्य सम्पन्नता, र आत्मनिर्भरतामा सुधार गर्दछ। ढाँचा वास्तविक वस्तु वा तस्बिरबाट सुरु भई प्रतीक र लिखित शब्दसम्म विस्तार हुन सक्छ।'
          : 'Visual schedules make information persistent instead of requiring the learner to remember a sequence of spoken directions. They can improve transitions, task initiation, completion, and independence. The format may progress from objects or photographs to symbols and written words.',
      },
      {
        q: isNepali
          ? 'सेरेब्रल पाल्सी भएका विद्यार्थीहरूलाई कुन हाई-टेक सहायक प्रविधिले मद्दत गर्छ?'
          : 'What high-tech assistive technology helps students with cerebral palsy?',
        a: isNepali
          ? 'विकल्पहरूमा दृष्टि-सञ्चार (Eye-Gaze AAC), स्विच-स्क्यानिङ प्रणाली, वैकल्पिक किबोर्ड, बोली-उत्पादक उपकरणहरू, शब्द भविष्यवाणी, र पहुँचयोग्य कम्प्युटर नियन्त्रणहरू समावेश छन्। छनोटका लागि शारीरिक मुद्रा, मोटर विश्वसनीयता, दृष्टि, थकान, र भाषाको मूल्याङ्कन आवश्यक पर्दछ।'
          : 'Options include eye-gaze AAC, switch-scanning systems, alternative keyboards, speech-generating devices, word prediction, and accessible computer controls. Selection requires evaluation of positioning, motor reliability, vision, fatigue, language, and use across real environments.',
      },
      {
        q: isNepali
          ? 'के विद्यार्थीसँग हाई-टेक AAC का लागि लो-टेक ब्याकअप हुनुपर्छ?'
          : 'Should a student have a low-tech backup for high-tech AAC?',
        a: isNepali
          ? 'अवश्य हुनुपर्छ। कागजी कोर बोर्ड वा सञ्चार पुस्तकले उपकरण चार्ज भइरहेको, बिग्रिएको, वा पानी नजिक भएको बेला सञ्चार पहुँचलाई निरन्तरता दिन्छ। ब्याकअपमा परिचित शब्दावली प्रयोग गरिनुपर्छ र यसले मुख्य डिजिटल प्रणालीलाई विस्थापित नगरी सहयोगी भूमिका खेल्नुपर्छ।'
          : 'Yes. A paper core board or communication book protects access when a device is charging, damaged, unavailable, or unsafe near water. The backup should use familiar vocabulary and remain accessible without replacing the student\'s more robust primary system.',
      },
    ],
  };

  const tocItems = [
    { id: 'executive-summary', label: isNepali ? 'कार्यकारी सारांश' : 'Executive Summary' },
    { id: 'neurodevelopmental-barriers', label: isNepali ? 'स्नायु-विकासात्मक अवरोधहरू' : 'Neurodevelopmental Barriers' },
    { id: 'at-spectrum-comparison', label: isNepali ? '३-तह प्रविधि तुलना तालिका' : 'AT Spectrum Compared' },
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
                {isNepali ? 'लो-टेक बनाम हाई-टेक AT' : 'AT Spectrum Comparison'}
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
            aria-label="Executive Summary: Understanding the Assistive Technology Spectrum"
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
            
            {/* ZONE 2: NEURODEVELOPMENTAL BARRIERS MATRIX */}
            <section id="neurodevelopmental-barriers" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-2 text-[#2B5763] dark:text-[#80C0D0] text-xs font-bold uppercase tracking-wider">
                <Target className="h-4 w-4" aria-hidden="true" />
                <span>{isNepali ? 'अवरोध विश्लेषण' : 'Barrier Analysis'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] dark:text-[#E2E8F0] tracking-tight mb-4">
                {content.barriersTitle}
              </h2>

              <p className="text-sm sm:text-base text-[#4B5A6B] dark:text-[#94A3B8] leading-relaxed mb-8">
                {content.barriersSubtitle}
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
                            {item.category}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-[#1E293B] dark:text-[#E2E8F0] mb-2 leading-snug">
                          {item.factor}
                        </h3>

                        <div className="space-y-2 text-xs sm:text-sm">
                          <p className="text-[#5B6B7C] dark:text-[#94A3B8]">
                            <strong className="text-[#3E4D5E] dark:text-[#CBD5E1]">{isNepali ? 'दैनिक प्रभाव:' : 'Everyday Impact:'}</strong> {item.impact}
                          </p>
                          <div className="rounded-xl bg-[#FAF7EE] dark:bg-[#1E2A37] p-3 text-[#1E3F49] dark:text-[#9DD3E0] font-medium">
                            <strong>{isNepali ? 'सहायक प्रविधि प्रतिक्रिया:' : 'Potential AT Response:'}</strong> {item.atResponse}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-xl border-l-4 border-[#2B5763] bg-[#E8EFF1] dark:bg-[#192C36] p-4 sm:p-5 text-xs sm:text-sm text-[#1E3F49] dark:text-[#9DD3E0] font-medium leading-relaxed">
                <strong>{isNepali ? 'क्लिनिकल मुख्य सिद्धान्त:' : 'Core Clinical Principle:'}</strong> {content.behaviorCallout}
              </div>
            </section>

            {/* ZONE 3: AT SPECTRUM COMPARISON */}
            <section id="at-spectrum-comparison" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-2 text-[#2B5763] dark:text-[#80C0D0] text-xs font-bold uppercase tracking-wider">
                <Zap className="h-4 w-4" aria-hidden="true" />
                <span>{isNepali ? '३-तह तुलना तालिका' : 'Comparative AT Matrix'}</span>
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
                      <strong className="text-[#1E293B] dark:text-[#E2E8F0]">{isNepali ? 'उदाहरणहरू:' : 'Examples:'}</strong> {tier.examples}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-[#EBF7EE]/60 dark:bg-[#193322]/40 border border-[#BDE3C7]/60 dark:border-[#2D5A3A]/60">
                        <strong className="text-[#24633B] dark:text-[#7CDA9B] block mb-1">
                          {isNepali ? '✓ फाइदाहरू (Advantages):' : '✓ Advantages:'}
                        </strong>
                        <span className="text-[#3E4D5E] dark:text-[#CBD5E1]">{tier.advantages}</span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#FAF3E8]/60 dark:bg-[#2E2214]/40 border border-[#E8D0B5]/60 dark:border-[#4D361F]/60">
                        <strong className="text-[#9E5819] dark:text-[#E2B350] block mb-1">
                          {isNepali ? '⚠ सीमाहरू (Limitations):' : '⚠ Limitations:'}
                        </strong>
                        <span className="text-[#3E4D5E] dark:text-[#CBD5E1]">{tier.limitations}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Feature Matching Callout */}
              <div className="mt-6 rounded-2xl border-2 border-[#D7E3E7] dark:border-[#2C4A56] bg-[#FAF7EE] dark:bg-[#15232D] p-5 sm:p-6 shadow-xs">
                <div className="flex items-center gap-2 text-[#1E3F49] dark:text-[#80C0D0] font-bold text-sm sm:text-base mb-2">
                  <FileCheck className="h-5 w-5 text-[#2B5763] dark:text-[#80C0D0]" />
                  <h4>{isNepali ? 'विशेषता मिलान (Feature Matching) र सेवाहरू' : 'Feature Matching & The Role of Services'}</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#3E4D5E] dark:text-[#CBD5E1] leading-relaxed">
                  {content.atFeatureMatchCallout}
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

            {/* ZONE 5: IMPLEMENTATION GUIDE (7-STEP STEPPER) */}
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
