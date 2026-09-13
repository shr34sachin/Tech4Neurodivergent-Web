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
  Activity,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function InteroceptionGuideClient() {
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
    audienceTag: isNepali ? 'अभिभावक, विशेष शिक्षक, थेरापिस्ट, क्लिनिसियन' : 'Parents, SPED Teachers, Therapists, Clinicians',
    readTime: isNepali ? '७ मिनेट पढाइ' : '7 min read',
    lastReviewed: isNepali ? 'क्लिनिकल समीक्षा: सेप्टेम्बर २०२६' : 'Clinically Reviewed: Sept 2026',
    h1: isNepali
      ? 'अन्तर-इन्द्रिय शारीरिक अनुभूति, एलेक्सिथिमिया, र संवेग व्यवस्थापन उपकरणहरू'
      : 'Interoception, Alexithymia, and Emotional Regulation Tools for Autistic Learners',

    // Executive Summary
    execSummaryTitle: isNepali ? 'कार्यकारी सारांश तथा मूल परिभाषा' : 'Executive Summary & Core Definition',
    execSummaryText: isNepali ? (
      <>
        <strong>अन्तर-इन्द्रिय शारीरिक अनुभूति (Interoception) भन्नाले भोक, तिर्खा, मुटुको धड्कन, शारीरिक तापक्रम, मांसपेशीको तनाव, र शौचालय जानुपर्ने आवश्यकता जस्ता भित्री शारीरिक संकेतहरू पहिचान गर्ने मस्तिष्कको क्षमता हो।</strong> <strong>एलेक्सिथिमिया (Alexithymia)</strong> भनेको भावनाहरू पहिचान गर्न, फरक छुट्याउन, र शब्दमा वर्णन गर्न कठिनाइ हुने स्नायु प्रशोधन भिन्नता हो। अनुसन्धानले देखाउँछ कि ५०-८०% अटिस्टिक व्यक्तिहरूमा एलेक्सिथिमिया देखिन्छ, र यी दुई अवस्थाहरू आपसमा गहिरो रूपमा गाँसिएका छन्: जब कुनै सिकारुले आफ्नो शरीरको भित्री संकेतहरू भरपर्दो रूपमा महसुस गर्न सक्दैन, उसले ती संकेतहरूलाई &quot;चिन्तित,&quot; &quot;हताश,&quot; वा &quot;अति-उत्तेजित&quot; जस्ता भावनात्मक शब्दहरूसँग जोड्न सक्दैन। अभिभावक र शिक्षकहरूका लागि यसको अर्थ के हो भने, अचानक देखिने भावनात्मक विष्फोट (Meltdown) वास्तवमा घन्टौंसम्म दर्ता नभएको शारीरिक पीडा वा तनावको परिणाम हुन सक्छ। संवेग व्यवस्थापन उपकरणहरूले अदृश्य आन्तरिक अवस्था र आत्म-वकालतबीच पुलको काम गर्दछन्।
      </>
    ) : (
      <>
        <strong>Interoception is the brain&apos;s ability to detect and interpret internal body signals such as hunger, thirst, heartbeat, temperature, muscle tension, and the need to use the bathroom.</strong> <strong>Alexithymia</strong> is a neurological processing difference characterized by difficulty identifying, distinguishing, and verbally describing emotions. Research estimates that 50–80% of autistic individuals experience clinically significant alexithymia, and the two conditions are deeply intertwined: when a learner cannot reliably feel their body&apos;s internal signals, they cannot map those signals to emotional labels like &quot;anxious,&quot; &quot;frustrated,&quot; or &quot;overwhelmed.&quot; Emotional regulation tools—ranging from simple body check-in charts to wearable biofeedback devices—bridge the gap between invisible internal states and actionable self-advocacy. The goal is not to teach the learner to suppress emotions but to provide reliable, accessible pathways for recognizing and communicating how they feel before distress becomes unmanageable.
      </>
    ),

    // Theoretical Foundation
    theoTitle: isNepali ? 'सैद्धान्तिक तथा स्नायु-विकासात्मक आधारहरू' : 'Theoretical & Neurodevelopmental Foundation',
    theoSubtitle: isNepali
      ? 'प्रभावकारी उपकरणहरू छनोट गर्न, हामीले पहिले न्यूरोडाइभर्जेन्ट सिकारुहरूमा अन्तर-इन्द्रिय र भावनात्मक प्रशोधन अवरोधहरू किन आउँछन् भनी बुझ्नुपर्छ:'
      : 'To select effective tools, we must first understand why interoceptive and emotional processing barriers exist across neurodivergent profiles:',
    barriers: [
      {
        id: 'interoception-gaps',
        icon: HeartPulse,
        title: isNepali ? 'अन्तर-इन्द्रिय अनुभूतिमा भिन्नता (Interoception Gaps)' : 'Interoception Gaps',
        text: isNepali
          ? 'भित्री शारीरिक संकेतहरू एकीकृत गर्ने मस्तिष्कको इन्सुलर कोर्टेक्स अटिस्टिक व्यक्तिहरूमा फरक तरिकाले काम गर्दछ। केही सिकारुहरू न्यून-संवेदनशील (Hypo-aware) हुन्छन् (चक्कर नलागेसम्म भोक लागेको थाहा पाउँदैनन्) भने केही अति-संवेदनशील (Hyper-aware) हुन्छन् (मुटुको धड्कन यति तीव्र महसुस गर्छन् कि त्रास उत्पन्न हुन्छ)। दुवै अवस्थाले संवेग व्यवस्थापनमा अवरोध पुर्याउँछ।'
          : 'The insular cortex, the brain region responsible for integrating internal body signals, functions differently in many autistic individuals. Some learners are hypo-aware (they do not notice hunger until they are dizzy) while others are hyper-aware (they feel their heartbeat so intensely it causes panic). Both profiles disrupt emotional regulation because early warning signals are either absent or overwhelming.',
        badge: isNepali ? 'इन्सुलर कोर्टेक्स' : 'Insular Processing',
      },
      {
        id: 'alexithymia-disconnect',
        icon: Activity,
        title: isNepali ? 'एलेक्सिथिमिया र शरीर-भावना विच्छेद' : 'Alexithymia & the Emotion-Body Disconnect',
        text: isNepali
          ? 'एलेक्सिथिमियाको अर्थ भावनाको कमी होइन। अटिस्टिक व्यक्तिहरूले प्रायः अत्यधिक तीव्रताका साथ भावनाहरू अनुभव गर्दछन्। कठिनाइ ती भावनाहरूलाई नाम दिन र फरक छुट्याउनमा हुन्छ। सिकारुले शारीरिक उत्तेजनाको लहर महसुस गर्न सक्छ तर त्यो उत्साह, डर, रिस वा सेन्सरि ओभरलोड के हो भनी ठम्याउन सक्दैन।'
          : 'Alexithymia does not mean a lack of emotion. Autistic individuals with alexithymia often experience emotions with extraordinary intensity. The difficulty lies in labeling and differentiating those emotions. A learner may feel a surge of physiological arousal but cannot determine whether it represents excitement, fear, anger, or sensory overload.',
        badge: isNepali ? 'भावना पहिचान' : 'Emotion Labeling',
      },
      {
        id: 'working-memory',
        icon: Cpu,
        title: isNepali ? 'कार्यकारी स्मरण भार (Working Memory Load)' : 'Working Memory Load',
        text: isNepali
          ? 'जब सिकारुले एकैसाथ सेन्सरि इनपुट व्यवस्थापन गर्ने, सामाजिक अपेक्षाहरू बुझ्ने, र शैक्षिक कार्य पूरा गर्ने प्रयास गरिरहेको हुन्छ, कार्यकारी स्मरण क्षमता संतृप्त हुन्छ। आन्तरिक शारीरिक अवस्था अनुगमन गर्न कुनै संज्ञानात्मक ब्यान्डविथ बाँकी रहँदैन, जसले गर्दा संवेग व्यवस्थापन असम्भव बन्छ।'
          : 'When a learner is simultaneously managing sensory input, decoding social expectations, and trying to complete an academic task, working memory is saturated. There is no remaining cognitive bandwidth to monitor internal states. Emotional regulation becomes impossible not because the learner lacks skill, but because cognitive load exceeds capacity.',
        badge: isNepali ? 'संज्ञानात्मक भार' : 'Cognitive Saturation',
      },
      {
        id: 'executive-dysfunction',
        icon: Brain,
        title: isNepali ? 'कार्यकारी कार्य शिथिलता (Executive Dysfunction)' : 'Executive Dysfunction',
        text: isNepali
          ? 'संज्ञानात्मक लचकतामा कठिनाइको अर्थ यो हो कि एक पटक सिकारु तनाव वा डिस्ट्रेसको अवस्थामा पुगेपछि, त्यसबाट बाहिर निस्कन बाह्य संरचनाको आवश्यकता पर्दछ। मस्तिष्कले स्वतः परिस्थिति पुनर्विचार (Reframe) गर्न सक्दैन।'
          : 'Difficulty with cognitive flexibility means that once a learner enters a state of distress, shifting out of it requires external scaffolding. The brain cannot spontaneously "reframe" the situation the way neurotypical executive functioning might allow.',
        badge: isNepali ? 'संज्ञानात्मक लचकता' : 'Cognitive Flexibility',
      },
      {
        id: 'motor-communication-barriers',
        icon: Hand,
        title: isNepali ? 'मोटर तथा सञ्चार अवरोधहरू' : 'Motor and Communication Barriers',
        text: isNepali
          ? 'सेरेब्रल पाल्सी र डाउन सिन्ड्रोममा सिकारुले असजिलोपन महसुस गरे तापनि त्यसलाई सञ्चार गर्न भरपर्दो र सजिलो माध्यम नहुन सक्छ। यदि दुखाइ रिपोर्ट गर्न जटिल AAC मेनु खोल्नुपर्ने र मोटर अप्राक्सियासँग लड्नुपर्ने भयो भने सिकारुले स्थिति गम्भीर नभएसम्म मौन पीडा सहिरहन सक्छ।'
          : 'In CP and some presentations of Down syndrome, the learner may recognize discomfort but lack a reliable, low-effort way to communicate it. If reporting pain requires navigating a complex AAC system while managing fine-motor apraxia, the learner may simply endure the distress silently until it escalates.',
        badge: isNepali ? 'सञ्चार पहुँच' : 'Expressive Access',
      },
    ],

    // Assistive Technology Continuum
    atTitle: isNepali ? 'सहायक प्रविधिको भूमिका: संवेग व्यवस्थापन उपकरणहरू' : 'The Role of Assistive Technology (AT)',
    atSubtitle: isNepali
      ? 'संवेग व्यवस्थापन उपकरणहरू विभिन्न प्रविधि तहहरूमा फैलिएका हुन्छन् ताकि सिकारुले जुनसुकै वातावरणमा पनि शरीर जाँच गर्न सकोस्:'
      : 'Emotional regulation tools should be layered across technology tiers so that the learner always has access to a body check-in method regardless of the environment.',
    atTiers: [
      {
        id: 'low',
        tier: isNepali ? 'लो-टेक (Low-Tech)' : 'Low-Tech',
        badge: isNepali ? 'शून्य ब्याट्री, उच्च विश्वसनीयता' : 'Zero power, high reliability',
        badgeClass: 'bg-[#EBF7EE] text-[#24633B] dark:bg-[#193322] dark:text-[#7CDA9B] border-[#BDE3C7] dark:border-[#2D5A3A]',
        tools: isNepali ? 'शरीर रूपरेखा चेक-इन पोस्टर, ५-बिन्दु संवेग स्केल (Zones of Regulation), लेमिनेटेड "मलाई यस्तो लागेको छ…" बोर्ड, दुखाइ स्थान नक्सा, भारित ल्याप प्याड' : 'Body outline check-in posters, 5-point emotion scales (Zones of Regulation visuals), laminated "I feel…" boards, pain location maps, weighted lap pads',
        features: isNepali ? 'कुनै ब्याट्री नचाहिने, टिकाउ, जहाँ पनि लैजान सकिने, फोटो वा प्रतीकहरूसँग अनुकूलन योग्य' : 'No batteries, durable, portable, customizable with photos or symbols',
      },
      {
        id: 'mid',
        tier: isNepali ? 'मिड-टेक (Mid-Tech)' : 'Mid-Tech',
        badge: isNepali ? 'सामान्य ब्याट्री / आवाज आउटपुट' : 'Simple battery / voice output',
        badgeClass: 'bg-[#E8F2FC] text-[#1E4D7E] dark:bg-[#162A40] dark:text-[#88BDEC] border-[#BBD8F5] dark:border-[#234A6E]',
        tools: isNepali ? 'बोल्ने भावना बटनहरू, शरीर जाँचका लागि भाइब्रेटिङ रिमाइन्डर घडीहरू, विश्राम ब्रेकका लागि दृश्य काउन्टडाउन टाइमर, स्विच-अनुकूल सेन्सरि उपकरणहरू' : 'Talking emotion buttons, vibrating reminder watches for body check-ins, visual countdown timers for regulation breaks, switch-adapted sensory tools',
        features: isNepali ? 'सरल कारण-र-प्रभाव, तत्काल श्रव्य प्रतिक्रिया, समयबद्ध प्रम्प्टहरू' : 'Simple cause-and-effect, auditory feedback, timed prompts',
      },
      {
        id: 'high',
        tier: isNepali ? 'हाई-टेक (High-Tech)' : 'High-Tech',
        badge: isNepali ? 'सफ्टवेयर तथा बायोफिडब्याक' : 'Biofeedback & Wearables',
        badgeClass: 'bg-[#F4EEFB] text-[#552D80] dark:bg-[#2C1C3F] dark:text-[#C7A3F0] border-[#DFC9F7] dark:border-[#523375]',
        tools: isNepali ? 'बायोफिडब्याक पहिरनयोग्य उपकरणहरू (Empatica E4, Feelix), क्रमबद्ध शब्दावलीसहितको AAC संवेग पृष्ठ, न्यून-उत्तेजना संवेग व्यवस्थापन एपहरू, स्मार्टवाच मुटुको धड्कन चेतावनी' : 'Biofeedback wearables (e.g., Empatica E4, Feelix), AAC emotion pages with graduated vocabulary, low-stimulus regulation apps, smartwatch heart-rate alerts',
        features: isNepali ? 'वास्तविक-समय शारीरिक डेटा, अनुकूलन योग्य थ्रेसहोल्ड, गतिशील शब्दावली' : 'Real-time physiological data, customizable thresholds, dynamic vocabulary',
      },
    ],
    atPrincipleCallout: isNepali
      ? 'सबैभन्दा महत्त्वपूर्ण डिजाइन सिद्धान्त: उपकरण केवल शान्त अवस्थामा मात्र होइन, चरम तनाव र डिस्ट्रेसको बेला पनि पहुँचयोग्य हुनुपर्छ। तनावको प्रारम्भिक चरणमा रहेको सिकारुले जटिल मेनु नेभिगेट गर्न सक्दैन। संवेग जाँच उपकरणहरूले बढीमा १ देखि २ वटा ट्याप मात्र माग्नुपर्छ।'
      : 'The most critical design principle: the tool must be accessible during distress, not only during calm. A learner in the early stages of dysregulation cannot navigate a complex menu. Emotion check-in tools should require one to two actions maximum.',

    // Condition-Specific Practical Adaptations
    condTitle: isNepali ? 'अवस्था-विशिष्ट व्यावहारिक अनुकूलनहरू' : 'Condition-Specific Practical Adaptations',
    condSubtitle: isNepali
      ? 'अटिजम, डाउन सिन्ड्रोम, र सेरेब्रल पाल्सीका लागि संवेग व्यवस्थापन र अन्तर-इन्द्रिय अनुकूलनहरू:'
      : 'Targeted accommodations for emotion regulation across ASD, Down syndrome, and Cerebral Palsy:',

    // ASD
    asdTitle: isNepali ? 'अटिजम स्पेक्ट्रम डिसअर्डर (Autism Spectrum Disorder - ASD)' : 'Autism Spectrum Disorder (ASD)',
    asdBody: isNepali
      ? 'अटिस्टिक सिकारुहरूका लागि अन्तर-इन्द्रिय सहयोगहरू ठोस, दृश्यमान, र सेन्सरि-सुरक्षित हुनुपर्छ। "हताश" वा "चिन्तित" जस्ता अमूर्त संवेग शब्दहरू शारीरिक आधारविना अर्थहीन हुन सक्छन्। प्रत्येक भावनालाई शारीरिक अनुभूतिसँग जोड्नुहोस्: "रिस = अनुहार तातो हुनु, मुट्ठी कस्सिनु, मुटु छिटो धड्किनु।" शरीर रूपरेखा दृश्य कार्ड प्रयोग गर्नुहोस् जहाँ सिकारुले अनुभूति भएको क्षेत्र औंल्याउँछ वा रङ्ग भर्छ। AAC प्रणालीमा एक समर्पित संवेग व्यवस्थापन पृष्ठ निर्माण गर्नुहोस्। नबोल्ने अटिजमका लागि यस पृष्ठमा "मलाई ब्रेक चाहिन्छ," "धेरै चर्को भयो," "मेरो शरीर अनौठो महसुस भइरहेको छ," र "मलाई कस्तो लागिरहेको छ मलाई थाहा छैन" जस्ता मुख्य वाक्यांशहरू समावेश हुनुपर्छ—जसले अनिश्चितता आफैंमा एउटा व्यक्त गर्न सकिने अवस्था हो भनी पुष्टि गर्दछ।'
      : 'For autistic learners, interoception supports must be concrete, visual, and sensory-safe. Abstract emotion vocabulary like "frustrated" or "anxious" may be meaningless without a body-based anchor. Pair each emotion label with a physical sensation description: "Angry = hot face, tight fists, fast heartbeat." Use body outline visuals where the learner points to or colors the area where they feel a sensation. Build a dedicated emotion regulation page into the learner\'s AAC system with phrases like "I need a break," "Too loud," "My body feels weird," and "I don\'t know how I feel"—validating that uncertainty is itself a communicable state. Choose low-stimulus special education tech interfaces.',
    asdCtaText: isNepali
      ? 'हाम्रो निःशुल्क द्विभाषिक वाक्य बनाउने (Sentence Builder AAC) र संवेग व्यवस्थापन मोड्युलहरू प्रयोग गर्नुहोस्'
      : 'Try our free bilingual Sentence Builder AAC and Emotion Regulation modules',

    // Down Syndrome & ID
    downTitle: isNepali ? 'डाउन सिन्ड्रोम तथा बौद्धिक अपाङ्गता (Down Syndrome & ID)' : 'Down Syndrome & Intellectual Disabilities (ID)',
    downBody: isNepali
      ? 'डाउन सिन्ड्रोम र बौद्धिक अपाङ्गताका लागि अनुकूलन सिकाइ उपकरणहरूले ठोस आइकन मिलान र तत्काल श्रव्य प्रतिक्रियालाई प्राथमिकता दिनुपर्छ। डाउन सिन्ड्रोम भएका सिकारुहरूमा उनीहरूको बोली भाषाले देखाउनेभन्दा बलियो सामाजिक-भावनात्मक चेतना हुन सक्छ, तर तनावको बेला बहु-चरणीय संवेग रणनीतिहरू पहुँचयोग्य नहुन सक्छन्। ५ वा १० बिन्दु स्केलको सट्टा सरलीकृत ३-बिन्दु स्केल (अनुहार आइकनसहित हरियो/पहेंलो/रातो) प्रयोग गर्नुहोस्। प्रत्येक स्तरलाई एउटा ठोस कार्यसँग जोड्नुहोस्: "रातो = शान्त कुनामा बस्नुहोस्।" मिड-टेक बोल्ने बटनहरू प्रयोग गर्नुहोस् जसले थिच्दा रेकर्ड गरिएको व्यवस्थापन रणनीति बजाउँछ ("सिरानी निचोर्नुहोस्," "तीन पटक गहिरो सास लिनुहोस्")। कार्य विश्लेषण (Task analysis ADL) दिनचर्यामा शरीर जाँचलाई समावेश गर्नुहोस्।'
      : 'Adaptive learning tools for Down syndrome and ID should prioritize concrete icon matching and immediate auditory feedback. Learners with Down syndrome may have stronger social-emotional awareness than expressive language suggests, but working memory limits make multi-step strategies inaccessible during stress. Use a simplified 3-point scale (green/yellow/red with face icons). Pair each level with a single concrete action: "Red = sit in the quiet corner." Use mid-tech talking buttons that play a recorded strategy ("Squeeze the pillow," "Take three breaths"). Embed body check-ins into task analysis ADL routines.',
    downCtaText: isNepali
      ? 'हाम्रो दैनिक जीवन सीप (ADL) कार्य विश्लेषण तथा तालिका उपकरणहरू अन्वेषण गर्नुहोस्'
      : 'Explore our Daily Living Skills (ADL) Task Analysis tools',

    // Cerebral Palsy
    cpTitle: isNepali ? 'सेरेब्रल पाल्सी (Cerebral Palsy - CP)' : 'Cerebral Palsy (CP)',
    cpBody: isNepali
      ? 'सेरेब्रल पाल्सी भएका सिकारुहरूका लागि संवेग व्यवस्थापनको मुख्य अवरोध प्रायः सञ्चारमा मोटर पहुँच हो, भावनात्मक चेतनाको कमी होइन। सिकारु दुखाइ, थकान, वा चिन्ताप्रति पूर्ण रूपमा सचेत हुन सक्छ तर तनाव बढ्नुअघि त्यसलाई चाँडै संकेत गर्न असमर्थ हुन सक्छ। सेरेब्रल पाल्सी सञ्चार बोर्डहरूमा सधैं पहुँचयोग्य "मलाई यस्तो लागेको छ…" वा "केही समस्या छ" बटन समावेश गर्नुहोस् जसलाई थिच्न न्यूनतम मोटर प्रयास चाहिन्छ। ठूला, उच्च-कन्ट्रास्ट लक्ष्यहरू भएका स्विच-अनुकूल संवेग स्केलहरू प्रयोग गर्नुहोस्। हात चलाउन नसक्नेहरूका लागि दृष्टि-सञ्चार (Eye-gaze AAC) प्रयोग गर्नुहोस्, र स्मार्टवाच मुटुको धड्कन सतर्कता जस्ता शारीरिक अनुगमन प्रविधि समावेश गर्नुहोस्।'
      : 'For learners with CP, the primary barrier to emotional regulation is often motor access to communication, not a lack of emotional awareness. A learner may be acutely aware of pain, fatigue, or anxiety but unable to signal it quickly enough. Ensure cerebral palsy communication boards include a permanently accessible "I feel…" or "Something is wrong" button requiring minimal motor effort. Use switch-accessible emotion scales with large, high-contrast targets. Consider eye-gaze AAC with a dedicated regulation page, and incorporate physiological monitoring like smartwatch heart-rate alerts.',
    cpCtaText: isNepali
      ? 'हाम्रो एक-ट्याप द्रुत टकर (Single-Tap Quick Talker AAC) इन्टरफेस परीक्षण गर्नुहोस्'
      : 'Test our Single-Tap Quick Talker AAC interface',

    // Implementation Guide
    implTitle: isNepali ? 'गृह तथा कक्षाकोठा कार्यान्वयन निर्देशिका' : 'Home and Classroom Implementation Guide',
    implSubtitle: isNepali
      ? 'अन्तर-इन्द्रिय चेतना र संवेग व्यवस्थापन विकास गर्न ६-चरणीय कार्यविधि:'
      : 'A practical 6-step clinical framework for building interoceptive awareness and emotional regulation:',
    steps: [
      {
        num: '01',
        title: isNepali ? 'शान्त अवस्थामा अन्तर-इन्द्रिय अभ्यास सिकाउनुहोस् (Teach Interoception During Calm)' : 'Teach Interoception During Calm',
        text: isNepali
          ? 'भावनात्मक विष्फोट वा तनावको बेला पहिलो पटक शरीर जाँच उपकरण कहिल्यै प्रयोग नगर्नुहोस्। खाजा खाने समय वा सुत्ने बेला जस्ता शान्त र आरामदायी क्षणहरूमा अभ्यास गर्नुहोस्।'
          : 'Never introduce body check-in tools for the first time during a meltdown. Practice during regulated, low-demand moments like snack time or bedtime routines.',
      },
      {
        num: '02',
        title: isNepali ? 'भावनाहरूलाई शारीरिक अनुभूतिसँग जोड्नुहोस् (Anchor Emotions to Sensations)' : 'Anchor Emotions to Sensations',
        text: isNepali
          ? 'स्थिर, ठोस भाषा प्रयोग गर्नुहोस्: "तिम्रो हातहरू कस्सिएका छन्। यसको मतलब तिम्रो शरीर विचलित भएको हुन सक्छ।" सिकारुलाई स्वतन्त्र रूपमा तुरुन्तै भावनाको नाम भन्न दबाब नदिनुहोस्।'
          : 'Use consistent, concrete language: "Your hands are squeezing. That might mean your body feels upset." Avoid demanding the learner produce the label independently.',
      },
      {
        num: '03',
        title: isNepali ? 'आफ्नै शारीरिक सचेतनाको उदाहरण देखाउनुहोस् (Model Your Own Body Awareness)' : 'Model Your Own Body Awareness',
        text: isNepali
          ? 'आफ्नो अन्तर-इन्द्रिय अनुभवहरू ठूलो स्वरमा बताउनुहोस्: "मेरो पेट कराउँदैछ। यसले मलाई भोक लागेको बताउँछ।" यसले कुनै दबाबविना शरीरको अनुगमन गर्ने बानीलाई स्वाभाविक बनाउँछ।'
          : 'Narrate your interoceptive experiences aloud: "My stomach is growling. That tells me I\'m hungry." This normalizes body monitoring without creating performance pressure.',
      },
      {
        num: '04',
        title: isNepali ? 'आदेश होइन, संवेग विकल्पहरूको मेनु बनाउनुहोस् (Create a Regulation Menu, Not a Mandate)' : 'Create a Regulation Menu, Not a Mandate',
        text: isNepali
          ? 'संवेग व्यवस्थापनका विकल्पहरूको दृश्य मेनु प्रस्ताव गर्नुहोस् (गहिरो दबाब, शान्त ठाउँ, हिँडडुल ब्रेक, पानी) र सिकारुलाई छनोट गर्न दिनुहोस्। स्वायत्तताले व्यवस्थापनमा मद्दत गर्छ; जबर्जस्तीले तनाव बढाउँछ।'
          : 'Offer a visual menu of regulation options (deep pressure, quiet space, movement break, water) and let the learner choose. Autonomy supports regulation; forced compliance undermines it.',
      },
      {
        num: '05',
        title: isNepali ? 'विद्यमान दिनचर्यामा शरीर जाँच समावेश गर्नुहोस् (Integrate Check-Ins into Existing Routines)' : 'Integrate Check-Ins into Existing Routines',
        text: isNepali
          ? 'बिहानको तालिकामा, गतिविधि परिवर्तनअघि, र सेन्सरि-भारी गतिविधिहरूपछि शरीर जाँचको चरण थप्नुहोस्। निरन्तरताले समयसँगै अन्तर-इन्द्रिय सचेतना निर्माण गर्दछ।'
          : 'Add a body check-in step to the morning schedule, before transitions, and after sensory-heavy activities. Consistency builds interoceptive awareness over time.',
      },
      {
        num: '06',
        title: isNepali ? '"मलाई थाहा छैन" भन्ने जवाफको सम्मान गर्नुहोस् (Respect "I Don\'t Know")' : 'Respect "I Don\'t Know"',
        text: isNepali
          ? 'यदि सिकारुले "मलाई कस्तो लागेको छ थाहा छैन" भन्छ भने त्यसलाई स्वीकार गर्नुहोस्। जबरजस्ती नाम सोध्नुको सट्टा कम-माग भएको सेन्सरि ब्रेक दिनुहोस्। एलेक्सिथिमियाको कारण त्यो क्षणमा जवाफ साँच्चिकै उपलब्ध नहुन सक्छ।'
          : 'If the learner selects "I don\'t know how I feel," honor that response. Provide a low-demand sensory break rather than pressing for a label. Alexithymia means the answer may genuinely be unavailable in that moment.',
      },
    ],

    // FAQ Section
    faqTitle: isNepali ? 'बारम्बार सोधिने प्रश्नहरू (Frequently Asked Questions)' : 'Frequently Asked Questions (FAQ)',
    faqSubtitle: isNepali
      ? 'अन्तर-इन्द्रिय अनुभूति, एलेक्सिथिमिया, र संवेग व्यवस्थापन सम्बन्धी प्रमाण-आधारित सोधखोज:'
      : 'Peer-reviewed evidence addressing common questions about interoception, alexithymia, and emotional regulation:',
    faqs: [
      {
        q: isNepali
          ? 'अन्तर-इन्द्रिय अनुभूति (Interoception) र एलेक्सिथिमिया (Alexithymia) बीच के भिन्नता छ?'
          : 'What is the difference between interoception and alexithymia?',
        a: isNepali
          ? 'अन्तर-इन्द्रिय अनुभूति भोक, मुटुको धड्कन, र तापक्रम जस्ता भित्री शारीरिक संकेतहरू महसुस गर्ने क्षमता हो। एलेक्सिथिमिया भावनाहरू पहिचान गर्न र वर्णन गर्न हुने कठिनाइ हो। यी दुई आपसमा नजिकबाट गाँसिएका छन्: यदि सिकारुले शरीरको संकेत स्पष्ट महसुस गर्न सक्दैन भने भावनाको नामसँग जोड्न सक्दैन। दुवै स्नायु प्रशोधन भिन्नता हुन्, व्यवहारगत छनोट होइनन्।'
          : 'Interoception is the ability to detect internal body signals like hunger, heartbeat, and temperature. Alexithymia is the difficulty identifying and describing emotions. The two are closely linked: if a learner cannot feel their body\'s signals clearly, they cannot connect those signals to emotional labels. Both are neurological processing differences, not behavioral choices.',
      },
      {
        q: isNepali
          ? 'के AAC ले अटिस्टिक बालबालिकालाई भावना व्यक्त गर्न मद्दत गर्न सक्छ?'
          : 'Can AAC help an autistic child express emotions?',
        a: isNepali
          ? 'सक्छ। आधारभूत "खुशी" र "दुःखी" भन्दा बाहिरका विस्तृत भावना शब्दावली समावेश गरिएका AAC प्रणालीहरूले नबोल्ने वा कम बोल्ने सिकारुलाई भित्री अवस्था बताउने भरपर्दो माध्यम दिन्छन्। "मेरो शरीर धेरै छिटो चलिरहेको छ," "मलाई शान्त ठाउँ चाहिन्छ," वा "कहीँ दुखिरहेको छ तर कहाँ थाहा छैन" जस्ता वाक्यांशहरू सुरक्षा र आत्म-वकालतका लागि अनिवार्य छन्।'
          : 'Yes. AAC systems that include robust emotion vocabulary—beyond basic "happy" and "sad"—give nonspeaking and minimally speaking learners a reliable way to communicate internal states. Phrases like "my body feels too fast," "I need quiet," or "something hurts but I don\'t know where" are essential for safety and self-advocacy.',
      },
      {
        q: isNepali
          ? 'दृश्य संवेग स्केलहरूले डाउन सिन्ड्रोम भएका सिकारुहरूलाई कसरी मद्दत गर्छन्?'
          : 'How do visual emotion scales help learners with Down syndrome?',
        a: isNepali
          ? 'सरलीकृत दृश्य स्केलहरूले (जस्तै: ३-बिन्दु रङ्ग-सङ्केत गरिएका अनुहारहरू) भावना पहिचान गर्न चाहिने कार्यकारी स्मरण र अमूर्त भाषाको मागलाई कम गर्छन्। प्रत्येक स्तरमा एउटा ठोस कार्य जोडिँदा, यसले पहिचानदेखि नियमनसम्मको स्पष्ट र पहुँचयोग्य बाटो दिन्छ।'
          : 'Simplified visual scales (e.g., 3-point color-coded faces) reduce the working memory and abstract language demands of identifying emotions. When paired with a single concrete action at each level, they give learners a clear, accessible pathway from recognition to regulation.',
      },
      {
        q: isNepali
          ? 'सेरेब्रल पाल्सी भएका बालबालिकालाई दुखाइ व्यक्त गर्न कुन सहायक प्रविधिले मद्दत गर्छ?'
          : 'What assistive technology helps a child with cerebral palsy communicate pain?',
        a: isNepali
          ? 'विकल्पहरूमा स्विच वा दृष्टि-नियन्त्रित AAC मा सधैं देखिने "दुखाइ" प्रतीक, "मलाई दुख्यो" भनी रेकर्ड गरिएको बोल्ने बटन, र मुटुको धड्कन मनिटर गर्ने स्मार्टवाच समावेश छन्। मुख्य कुरा यो हो कि दुखाइ व्यक्त गर्ने उपकरणलाई न्यूनतम मोटर प्रयास चाहिन्छ र सधैं पहुँचभित्र हुनुपर्छ।'
          : 'Options include a permanently accessible "pain" symbol on a switch- or eye-gaze-controlled AAC device, a mid-tech talking button programmed with "I hurt," and wearable heart-rate monitors that alert caregivers to physiological distress. The key is ensuring the pain-reporting tool requires minimal motor effort and is always within reach.',
      },
      {
        q: isNepali
          ? 'के एलेक्सिथिमिया भएको अटिस्टिक बच्चाका लागि जोन्स अफ रेगुलेसन (Zones of Regulation) प्रयोग गर्नुपर्छ?'
          : 'Should I use the Zones of Regulation with an autistic child who has alexithymia?',
        a: isNepali
          ? 'जोन्स ढाँचा उपयोगी हुन सक्छ यदि यसलाई शारीरिक अनुभूतिको आधारसँग अनुकूलन गरिएको छ र सिकारुले आफ्नो जोन पहिचान गर्न नसक्दा दण्डित गरिँदैन। यसलाई नियम पालना गराउने हतियारको रूपमा प्रयोग नगर्नुहोस्; बरु जोन पहिचानलाई बिस्तारै विकास हुने सीपको रूपमा लिनुहोस्।'
          : 'The Zones framework can be useful if adapted to include body-sensation anchors and if the learner is not penalized for being unable to identify their zone. Avoid using the Zones as a compliance tool. Instead, treat zone identification as a skill that develops gradually with interoceptive practice, not a prerequisite for receiving support.',
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
                {isNepali ? 'अन्तर-इन्द्रिय तथा एलेक्सिथिमिया' : 'Interoception & Alexithymia'}
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
                <HeartPulse className="h-4 w-4" aria-hidden="true" />
                <span>{isNepali ? 'स्नायु-संवेदी आधार' : 'Neurosensory Basis'}</span>
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
            </section>

            {/* ZONE 3: AT CONTINUUM */}
            <section id="assistive-technology-continuum" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-2 text-[#2B5763] dark:text-[#80C0D0] text-xs font-bold uppercase tracking-wider">
                <Zap className="h-4 w-4" aria-hidden="true" />
                <span>{isNepali ? '३-तह प्रविधि तुलना तालिका' : 'Regulation AT Continuum'}</span>
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
                      <strong className="text-[#1E293B] dark:text-[#E2E8F0]">{isNepali ? 'उपकरणहरू:' : 'Tools:'}</strong> {tier.tools}
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-[#2C3E50] dark:text-[#CBD5E1]">
                      <strong>{isNepali ? 'मुख्य विशेषताहरू:' : 'Key Features:'}</strong> {tier.features}
                    </p>
                  </div>
                ))}
              </div>

              {/* Principle Callout */}
              <div className="mt-6 rounded-2xl border-2 border-[#D7E3E7] dark:border-[#2C4A56] bg-[#FAF7EE] dark:bg-[#15232D] p-5 sm:p-6 shadow-xs">
                <div className="flex items-center gap-2 text-[#1E3F49] dark:text-[#80C0D0] font-bold text-sm sm:text-base mb-2">
                  <FileCheck className="h-5 w-5 text-[#2B5763] dark:text-[#80C0D0]" />
                  <h4>{isNepali ? 'संकटको बेला उपकरणको पहुँचयोग्यता' : 'Access During Distress'}</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#3E4D5E] dark:text-[#CBD5E1] leading-relaxed">
                  {content.atPrincipleCallout}
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
