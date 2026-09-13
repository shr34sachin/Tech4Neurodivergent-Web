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
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function CognitiveFlashcardsGuideClient() {
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
        ? 'संज्ञानात्मक पहुँच: बहु-संवेदी फ्ल्यासकार्ड डिजाइन'
        : 'Cognitive Accessibility: Multi-Sensory Flashcards',
      href: '/guides/cognitive-accessibility-digital-flashcards',
    },
  ];

  const content = {
    badge: isNepali ? 'क्लिनिकल तथा शैक्षिक निर्देशिका' : 'Clinical & Educational Guide',
    readingTime: isNepali ? '७ मिनेट पढाइ' : '7 min read',
    audience: isNepali ? 'अभिभावक, SPED शिक्षक, SLP, OT' : 'Parents, SPED Teachers, SLPs, OTs',
    h1Title: isNepali
      ? 'संज्ञानात्मक पहुँच: बहु-संवेदी डिजिटल फ्ल्यासकार्ड र शब्दावली सहायता डिजाइन'
      : 'Cognitive Accessibility: Designing Multi-Sensory Digital Flashcards & Vocabulary Aids',
    featuredTitle: isNepali ? 'कार्यकारी सारांश र मूल परिभाषा' : 'Executive Summary & Core Definition',
    featuredSnippet: isNepali
      ? 'डिजिटल फ्ल्यासकार्ड र शब्दावली सहायतामा संज्ञानात्मक पहुँच (Cognitive Accessibility) भनेको न्युरोडाइभर्जेन्ट सिकारुहरूको संवेदी, मोटर, र संज्ञानात्मक प्रशोधन प्रोफाइलसँग मेल खाने गरी सिकाइ इन्टरफेसहरूको सचेत डिजाइन हो। स्थिर पाठ वा द्रुत दृश्य अभ्यासमा भर पर्नुको सट्टा, पहुँचयोग्य फ्ल्यासकार्डहरूले बहु-संवेदी एकीकरण (Multi-Sensory Integration)—सिङ्क्रोनाइज्ड अडियो, उच्च-कन्ट्रास्ट दृश्य आइकनोग्राफी, ह्याप्टिक प्रतिक्रिया, र मोटर-मैत्री टच क्षेत्रहरूको संयोजन गर्दछन्। यसले अटिजम (ASD), डाउन सिन्ड्रोम, बौद्धिक अपाङ्गता (ID), र सेरेब्रल पाल्सी (CP) का सिकारुहरूका लागि अनावश्यक मानसिक भार हटाउँछ।'
      : 'Cognitive accessibility in digital flashcards and vocabulary aids is the intentional design of learning interfaces to match the sensory, motor, and cognitive processing profiles of neurodivergent learners. Rather than relying on static text or rapid visual drills, cognitively accessible flashcards leverage multi-sensory integration—combining synchronized audio, high-contrast visual iconography, haptic feedback, and motor-accommodating hit states.',
    featuredTakeaway: isNepali
      ? 'क्लिनिकल निष्कर्ष: व्यावसायिक फ्ल्यासकार्ड एपहरूमा हुने अनावश्यक एनिमेसन, त्रुटि जनाउने चर्को आवाज, र साना बटनहरूले सिकाइमा अवरोध पुर्याउँछन्। प्रमाण-आधारित सहायक प्रविधि सिद्धान्तहरू प्रयोग गर्दा अमूर्त भाषिक अवधारणाहरू ठोस, सुलभ, र आत्मनिर्भर सिकाइ अनुभवमा रूपान्तरण हुन्छन्।'
      : 'Clinical Takeaway: Standard commercial flashcard apps frequently create barriers with chaotic visual animations, punitive error sounds, micro-sized tap targets, and unmanageable working memory demands. By removing extraneous cognitive loads, multi-sensory vocabulary aids transform abstract linguistic concepts into concrete, self-directed learning experiences.',

    // Sidebar TOC
    tocTitle: isNepali ? 'यस निर्देशिकामा' : 'Table of Contents',
    tocLinks: [
      { id: 'foundations', label: isNepali ? 'स्नायु-विकासात्मक तथा दोहोरो-कोड आधार' : 'Theoretical & Neurodevelopmental Foundation' },
      { id: 'continuum', label: isNepali ? 'सहायक प्रविधि (AT) स्पेक्ट्रम' : 'AT Continuum Matrix' },
      { id: 'condition-specific', label: isNepali ? 'अवस्था-विशिष्ट अनुकूलनहरू' : 'Condition-Specific Adaptations' },
      { id: 'implementation', label: isNepali ? 'कार्यान्वयन रोडम्याप (६ चरण)' : 'Implementation Roadmap' },
      { id: 'faq', label: isNepali ? 'क्लिनिकल सोधपुछ तथा FAQ' : 'Clinical FAQ' },
    ],

    // Section 1: Foundations
    foundationsTitle: isNepali ? 'सैद्धान्तिक तथा स्नायु-विकासात्मक आधारहरू' : 'Theoretical & Neurodevelopmental Foundation',
    foundationsIntro: isNepali
      ? 'प्रभावकारी शैक्षिक प्रविधि निर्माण गर्न सूचना ग्रहण, प्रशोधन, र उत्पादनलाई प्रभाव पार्ने स्नायु-विकासात्मक कारकहरू बुझ्न आवश्यक छ:'
      : 'Designing effective educational technology requires an understanding of the neurodevelopmental factors that influence information intake, processing, and output:',
    foundationsCards: [
      {
        title: isNepali ? 'दोहोरो कोडिङ सिद्धान्त र कार्यस्मरण' : 'Dual Coding Theory & Working Memory Saturation',
        desc: isNepali
          ? 'एभ पाभियोको दोहोरो कोडिङ सिद्धान्तले देखाउँछ कि मानव मस्तिष्कले दृश्य र मौखिक जानकारी छुट्टाछुट्टै समानान्तर च्यानलमार्फत प्रशोधन गर्छ। सीमित कार्यस्मरण भएका सिकारुहरूका लागि केवल लिखित शब्द देखाउँदा अत्यधिक प्रयास चाहिन्छ। शब्दलाई स्पष्ट दृश्य सङ्केत र सफा प्राकृतिक आवाजसँग एकैसाथ प्रस्तुत गर्दा एउटा च्यानललाई थकाउनुविना स्मरण क्षमता बलियो बन्छ।'
          : 'Allan Paivio\'s Dual Coding Theory establishes that the brain processes visual and verbal information through separate, parallel channels. Pairing a written word simultaneously with an unambiguous visual symbol and clean auditory narration reinforces memory encoding without overloading a single processing channel.',
      },
      {
        title: isNepali ? 'अन्तर-इन्द्रिय र संवेदी मोड्युलेसन भिन्नता' : 'Interoception & Sensory Modulation Gaps',
        desc: isNepali
          ? 'अटिस्टिक सिकारुहरू र बौद्धिक अपाङ्गता भएका व्यक्तिहरूले संवेदी उत्तेजनालाई फरक रूपमा महसुस गर्छन्। फ्ल्यासकार्डमा बज्ने चर्को आवाज, झिलिमिली एनिमेसन, वा अप्रत्याशित स्क्रिन परिवर्तनले संवेदी अधिभार (Sensory Overload) निम्त्याउन सक्छ, जसले मस्तिष्कलाई सिकाइको अवस्थाबाट रक्षात्मक तनावको अवस्थामा धकेल्छ।'
          : 'Autistic learners and individuals with ID often experience sensory hypo- or hyper-reactivity. High-pitched celebratory chimes, flashing reward graphics, or unexpected screen shifts can induce autonomic arousal or trigger sensory overload, derailing receptive learning.',
      },
      {
        title: isNepali ? 'फाइन-मोटर अप्राक्सिया र शारीरिक कार्यान्वयन' : 'Fine-Motor Apraxia & Physical Execution',
        desc: isNepali
          ? 'सेरेब्रल पाल्सी, डाउन सिन्ड्रोम, र मोटर भिन्नताहरूमा दिमागबाट हातका औंलाहरूसम्म पुग्ने स्नायु संकेत ढिलो वा बाधित हुन सक्छ। जब अन्तरक्रियात्मक फ्ल्यासकार्डले सानो ठाउँमा सटीक स्पर्श वा ड्र्याग माग्छ, त्यहाँ सिकारुको संज्ञानात्मक ज्ञान होइन तर शारीरिक निपुणताको परीक्षा भइरहेको हुन्छ।'
          : 'In cerebral palsy, Down syndrome, and related motor differences, neural signals to distal extremities can be delayed. When an interactive card requires high-precision pinching or rapid micro-taps, the learner is tested on physical dexterity rather than cognitive comprehension.',
      },
      {
        title: isNepali ? 'कार्यकारी कार्य र जानकारीको स्थायित्व' : 'Executive Dysfunction & Transience of Information',
        desc: isNepali
          ? 'बोलेको भाषा र स्क्रिनमा तुरुन्तै हराउने डिजिटल प्रम्प्टहरू सेकेन्डमै हराउँछन्। कार्यकारी कार्य भिन्नता भएका सिकारुहरूलाई क्षणिक जानकारी सम्झन कठिन हुन्छ। डिजिटल फ्ल्यासकार्डहरूमा स्थिर स्थायित्व (Static Persistence) हुनुपर्छ—जसले सिकारुलाई समयको जरिवानाविना आफ्नै गतिमा पुनः सुन्न र हेर्न अनुमति दिन्छ।'
          : 'Spoken language and transient digital prompts disappear in fractions of a second. Learners with executive differences struggle to sequence ephemeral information. Digital flashcards must provide static persistence—allowing learners to re-listen and process at their own pace without time penalties.',
      },
    ],

    // Section 2: AT Continuum Table
    continuumTitle: isNepali ? 'सहायक प्रविधि (AT) स्पेक्ट्रम: बहु-संवेदी फ्ल्यासकार्ड' : 'The Assistive Technology (AT) Continuum',
    continuumIntro: isNepali
      ? 'बहु-संवेदी शब्दावली उपकरणहरू विभिन्न प्रविधि तहहरूमा उपलब्ध छन्। सिकारुको मोटर पहुँच, दृश्य तीक्ष्णता, र संज्ञानात्मक क्षमतासँग उपयुक्त ढाँचा मिलाउनु आवश्यक छ:'
      : 'Multi-sensory vocabulary tools exist along a technological spectrum. Matching the tool to the learner\'s specific motor access, visual acuity, and cognitive tolerance ensures sustained engagement without abandonment:',
    continuumRows: [
      {
        tier: isNepali ? 'लो-टेक (कम प्रविधि)' : 'Low-Tech',
        badge: 'Low-Tech',
        color: 'emerald',
        formats: isNepali
          ? 'बनावटी किनारा भएका स्पर्श फ्ल्यासकार्डहरू (Tactile Cards); उच्च-कन्ट्रास्ट छापिएका PECS/SymbolStix कार्डहरू; लेमिनेटेड सञ्चार बोर्डहरू'
          : 'Tactile flashcards with textured boundaries; high-contrast printed PECS/SymbolStix cards; laminated communication boards',
        access: isNepali
          ? 'प्रत्यक्ष शारीरिक स्पर्श, E-TRAN फ्रेमबाट आँखाले औंल्याउने, सहयोगी-सहायता स्क्यानिङ'
          : 'Direct physical grasp, eye-pointing with an E-TRAN frame, partner-assisted scanning',
        clinical: isNepali
          ? 'गैर-विद्युतीय वातावरण, पानीमा खेल्दा, संवेदी शान्ति क्षेत्र, बाहिरी सिकाइ'
          : 'Non-electronic environments, water play, sensory de-escalation, outdoor learning',
      },
      {
        tier: isNepali ? 'मिड-टेक (मध्यम प्रविधि)' : 'Mid-Tech',
        badge: 'Mid-Tech',
        color: 'blue',
        formats: isNepali
          ? 'RFID/बारकोड बोल्ने कार्ड रिडरहरू; आवाज रेकर्ड गर्न मिल्ने बहु-बटन साउन्ड टाइलहरू; अडियो कलमहरू'
          : 'RFID/Barcode talking card readers; recordable multi-button sound tiles; tactile audio pens',
        access: isNepali
          ? 'कार्ड घुसाउने (Physical Card Insertion), एकल-स्पर्श बटन थिच्ने'
          : 'Physical card insertion, single-touch button presses',
        clinical: isNepali
          ? 'कारण र प्रभाव सिकाइ, ठोस ADL कार्य विश्लेषण दिनचर्या, स्वतन्त्र श्रव्य समीक्षा'
          : 'Cause-and-effect learning, concrete task analysis ADL routines, independent auditory review',
      },
      {
        tier: isNepali ? 'हाई-टेक (उच्च प्रविधि)' : 'High-Tech',
        badge: 'High-Tech',
        color: 'purple',
        formats: isNepali
          ? 'स्विच-अनुकूलित शब्दावली एपहरू; आँखा-हेरचाह (Eye-Gaze) डिजिटल फ्ल्यासकार्डहरू; डायनामिक कम-उत्तेजना सफ्टवेयर'
          : 'Switch-accessible vocabulary apps; eye-gaze digital flashcards; dynamic low-stimulus special education tech software',
        access: isNepali
          ? 'एकल/दोहोरो स्विचहरू, हेड-ट्र्याकिङ, आई-गेज प्रणाली, ठूला टचस्क्रिनहरू'
          : 'Single/dual switches, head-tracking, eye-gaze systems, enlarged touchscreens',
        clinical: isNepali
          ? 'जटिल कोर भाषा निर्माण, बहु-मोडल अडियो-भिजुअल फिडब्याक, स्विच-स्क्यानिङ तालिम'
          : 'Complex core language building, dynamic multi-modal feedback, switch-scanning training',
      },
    ],

    // Section 3: Condition-Specific
    conditionTitle: isNepali ? 'अवस्था-विशिष्ट व्यावहारिक अनुकूलनहरू' : 'Condition-Specific Practical Adaptations',

    // ASD
    asdTitle: isNepali ? 'अटिजम स्पेक्ट्रम डिसअर्डर (Autism Spectrum Disorder - ASD)' : 'Autism Spectrum Disorder (ASD)',
    asdPoints: [
      {
        title: isNepali ? 'संवेदी-सुरक्षित, कम-उत्तेजना इन्टरफेसहरू' : 'Sensory-Safe, Low-Stimulus Interfaces',
        desc: isNepali
          ? 'कम-उत्तेजना (low-stimulus) प्रविधि सिद्धान्तहरू लागू गर्नुहोस्। विचलित पार्ने एनिमेसनहरू, लुप हुने पृष्ठभूमि सङ्गीत, तनाव बढाउने टाइमरहरू, र चम्किला नियोन रङहरू हटाउनुहोस्। मधुर खैरो वा डार्क मोड पृष्ठभूमि र नटल्किने म्याट स्क्रिन प्रयोग गर्नुहोस्।'
          : 'Deploy low-stimulus special education tech parameters. Eliminate animated celebratory sprites, looping background audio, panic-inducing visual timers, and neon palettes. Use soft slate/dark backgrounds with matte screen protectors.',
      },
      {
        title: isNepali ? 'दृश्य पूर्वानुमानयोग्यता र स्थिर मोटर योजना' : 'Visual Predictability & Consistent Motor Planning',
        desc: isNepali
          ? '"अर्को", "पुनः सुन्नुहोस्", वा "गृहपृष्ठ" जस्ता अन्तरक्रियात्मक बटनहरूलाई प्रत्येक डिजिटल कार्डमा सधैं एउटै निश्चित स्थानमा राख्नुहोस्। यसले स्वचालित मोटर योजनालाई सहयोग पुर्याउँछ, जसले गर्दा दिमाग शब्दावली सिक्न केन्द्रित हुन पाउँछ।'
          : 'Anchor interactive buttons ("Next," "Replay Audio," "Home") in permanent, identical coordinates across every digital card. This supports automatic motor planning, freeing up cognitive resources for vocabulary acquisition.',
      },
      {
        title: isNepali ? 'व्यक्तिगत AAC सँग प्रत्यक्ष एकीकरण' : 'Direct Integration with Personal AAC',
        desc: isNepali
          ? 'नबोल्ने सिकारुहरूका लागि फ्ल्यासकार्डमा प्रयोग हुने सङ्केतहरू (जस्तै PCS वा SymbolStix) उनीहरूको व्यक्तिगत बोली निकाल्ने यन्त्र (Speech Generating Device) सँग ठ्याक्कै मेल खाने हुनुपर्छ।'
          : 'When presenting assistive technology for nonverbal autism, the visual symbols used on digital flashcards must mirror the exact icons present on the student\'s personal speech-generating device.',
      },
    ],

    // Down Syndrome & ID
    downTitle: isNepali ? 'डाउन सिन्ड्रोम तथा बौद्धिक अपाङ्गता (Down Syndrome & ID)' : 'Down Syndrome & Intellectual Disabilities (ID)',
    downPoints: [
      {
        title: isNepali ? 'ठोस-देखि-सङ्केत प्रगति (Concrete-to-Iconic)' : 'Concrete-to-Iconic Progression',
        desc: isNepali
          ? 'पहिले वास्तविक संसारको फोटो देखाउनुहोस्, त्यसपछि मानक सङ्केतमा परिवर्तन गर्नुहोस्, र अन्त्यमा लिखित शब्दसँग जोड्नुहोस्। यसले अमूर्त सङ्केतहरूलाई वास्तविक अनुभवसँग जोड्छ।'
          : 'Scaffold flashcard vocabulary by presenting a real-world photograph first, then cross-fading to a standardized symbol, and finally pairing it with the written orthography to anchor abstract concepts.',
      },
      {
        title: isNepali ? 'तत्काल अडिटरी फिडब्याक र बोली गति' : 'Immediate Auditory Feedback & Speech Pacing',
        desc: isNepali
          ? 'मानव आवाजमा रेकर्ड गरिएको, केही सुस्त गतिको प्राकृतिक बोली अडियो प्रदान गर्नुहोस्। माग अनुसार सुन्न सकिने "इको (Echo)" बटन समावेश गर्नुहोस् जसले श्रव्य कार्यस्मरणलाई सहयोग गर्दछ।'
          : 'Provide human-recorded, natural speech audio at a slightly decelerated rate. Include an on-demand "Echo" button so the learner can listen repeatedly to support auditory working memory.',
      },
      {
        title: isNepali ? 'दैनिक जीवन सीप (ADL) कार्य विश्लेषण' : 'Task-Analysis ADL Integration',
        desc: isNepali
          ? 'एक्लै-एक्लै नामहरू सिकाउनुको सट्टा, दैनिक जीवनका व्यावहारिक अनुक्रमहरूमा फ्ल्यासकार्डहरू व्यवस्थित गर्नुहोस् (जस्तै मोजा → जुत्ता → बाँध्ने वा थाल → चम्चा → खाने)।'
          : 'Structure vocabulary decks around functional task analysis ADL routines. Rather than teaching isolated nouns, arrange digital cards in logical chains (e.g., Socks → Shoes → Tie), reinforcing practical life skills.',
      },
    ],

    // CP
    cpTitle: isNepali ? 'सेरेब्रल पाल्सी (Cerebral Palsy - CP)' : 'Cerebral Palsy (CP)',
    cpPoints: [
      {
        title: isNepali ? 'उच्च-कन्ट्रास्ट दृश्य रनवे ट्र्याकहरू' : 'High-Contrast Visual Runway Tracks',
        desc: isNepali
          ? 'स्क्रिनको केन्द्रबाट परिधिको छनोट बटनहरूतर्फ जाने चम्किला मार्गदर्शक रेखाहरू समावेश गर्नुहोस्। यी ट्र्याकहरूले कोर्टिकल भिजुअल इम्पेयरमेन्ट (CVI) भएका विद्यार्थीहरूको आँखालाई निर्देशित गर्दछन्।'
          : 'Incorporate luminous visual guiding lines that extend from the center toward selection buttons. These tracks guide eye-gaze or reaching, reducing visual searching fatigue for learners with CVI.',
      },
      {
        title: isNepali ? 'विस्तारित टच जोन र ड्वेल छनोट' : 'Expanded Hit Zones & Dwell Selection',
        desc: isNepali
          ? 'स्क्रिनको ठूलो भाग समेट्ने गरी बटन क्षेत्र फराकिलो बनाउनुहोस्। औंला खुम्च्याउन नपर्ने गरी निश्चित समय (०.५ देखि १.५ सेकेन्ड) हेर्दा वा हात राख्दा काम गर्ने ड्वेल छनोट (Dwell Selection) कन्फिगर गर्नुहोस्।'
          : 'Expand the interactive target bounding box across large screen areas. Implement configurable dwell selection (holding contact or gaze for 0.5-1.5s) to eliminate the need for physical finger flexion.',
      },
      {
        title: isNepali ? 'वैकल्पिक पहुँच र किगार्ड अनुकूलता' : 'Alternative Access Interfacing & Keyguards',
        desc: isNepali
          ? 'फ्ल्यासकार्ड सफ्टवेयर बाह्य दोहोरो-स्विच प्रणालीहरू र मेकानिकल किगार्डहरूसँग पूर्ण रूपमा मिल्दो हुनुपर्छ ताकि काँप्ने वा अनैच्छिक चालहरूले गलत बटन थिच्न नपाओस्।'
          : 'Ensure digital software is fully compatible with external dual-switch systems (step-scanning) and physical keyguards over communication boards to filter out involuntary spastic movements.',
      },
    ],

    // Section 4: Implementation Roadmap
    roadmapTitle: isNepali ? 'घर तथा कक्षाकोठा कार्यान्वयन रोडम्याप' : 'Home and Classroom Implementation Guide',
    roadmapIntro: isNepali
      ? 'संज्ञानात्मक अधिभार र प्रविधिको अस्वीकार्यता रोक्न ६-चरणको व्यवस्थित कार्यान्वयन योजना पछ्याउनुहोस्:'
      : 'Introducing multi-sensory digital vocabulary aids must be done intentionally to avoid cognitive overwhelm and device resistance:',
    roadmapSteps: [
      {
        num: '01',
        title: isNepali ? 'वातावरणीय तथा संवेदी क्यालिब्रेसन' : 'Environmental & Sensory Calibration',
        desc: isNepali
          ? 'सिकाउने ठाउँको अडिट गर्नुहोस्। बाहिरी आवाज घटाउनुहोस्, स्क्रिनमा प्रकाश नटल्किने गरी बत्ती मिलाउनुहोस्, र बसाइको आसन स्थिर बनाउनुहोस् ताकि शारीरिक स्थिरतामा ऊर्जा खेर नजाओस्।'
          : 'Audit the learning space. Reduce ambient noise, eliminate screen reflections, and adjust seating posture. A learner cannot focus on vocabulary if core muscles are straining for stability.',
      },
      {
        num: '02',
        title: isNepali ? 'शारीरिक पहुँच इन्टरफेस स्थापना गर्नुहोस्' : 'Establish the Physical Access Interface',
        desc: isNepali
          ? 'कुनै पनि सफ्टवेयर खोल्नुअघि इनपुट विधि निश्चित गर्नुहोस्: आँखा-हेरचाह क्यामरा क्यालिब्रेट गर्नुहोस्, स्विचलाई सबैभन्दा भरपर्दो ठाउँमा राख्नुहोस्, वा स्क्रिनमा किगार्ड जोड्नुहोस्।'
          : 'Before opening software, confirm physical input: calibrate eye-gaze cameras, mount mechanical switches near the most reliable motor site, or attach an acrylic keyguard.',
      },
      {
        num: '03',
        title: isNepali ? 'उच्च-मूल्य कार्यात्मक कोर शब्दावली छान्नुहोस्' : 'Curate High-Value Functional Core Vocabulary',
        desc: isNepali
          ? 'कम प्रयोग हुने शब्दहरूको सट्टा दैनिक स्वायत्तता दिने मुख्य शब्दहरूलाई प्राथमिकता दिनुहोस्: कार्य क्रियाहरू (जानु, रोक्नु, चाहनु), सामाजिक विरोध (नाई, सकियो, ब्रेक), र दैनिक आवश्यकताहरू।'
          : 'Avoid decks filled exclusively with low-frequency fringe nouns. Prioritize high-utility core vocabulary that empowers immediate autonomy: action verbs (go, stop, want), social protests (no, finish, break), and daily living nouns.',
      },
      {
        num: '04',
        title: isNepali ? 'एइडेड ल्याङ्ग्वेज स्टिम्युलेसन (वयस्क मोडलिङ)' : 'Execute Aided Language Stimulation (Adult Modeling)',
        desc: isNepali
          ? 'विद्यार्थीबाट तुरुन्तै उत्तर नमागी शिक्षक वा अभिभावकले आफैं फ्ल्यासकार्ड थिचेर आवाज बजाउँदै भौतिक वातावरणमा त्यो कार्य गरेर देखाउनुपर्छ।'
          : 'Therapists and parents must model the use of the digital flashcard system without demanding an immediate response. Point to the card, activate speech feedback, and demonstrate the action simultaneously.',
      },
      {
        num: '05',
        title: isNepali ? 'व्यवस्थित त्रुटिरहित ढाँचा (Errorless Scaffolding)' : 'Apply Systematic, Errorless Scaffolding',
        desc: isNepali
          ? 'शुरुमा स्क्रिनमा एउटा मात्र सही विकल्प देखाउनुहोस् ताकि असफलताको डर नहोस्। सिकाइमा सुधार हुँदै गएपछि मात्र दुई वा तीनवटा विकल्पहरू प्रस्तुत गर्नुहोस्।'
          : 'Begin with an errorless configuration: show only one correct target on screen to prevent failure-induced anxiety. Gradually increase the field size to two and three options as mastery occurs.',
      },
      {
        num: '06',
        title: isNepali ? 'प्राकृतिक दिनचर्यामा शब्दावलीको सामान्यीकरण' : 'Generalize Vocabulary Across Natural Routines',
        desc: isNepali
          ? 'सफ्टवेयरमा सिकेको शब्द त्यहीँ सीमित नहोस्। जब विद्यार्थीले "खोल्नुहोस्" भन्ने कार्ड सिक्छ, तुरुन्तै ढोका, खाजाको बट्टा, वा पुस्तक खोल्न त्यो शब्द प्रयोग गराउनुहोस्।'
          : 'Flashcard learning must not remain isolated. When a student learns the card for "open," immediately bridge that concept to physical doors, snack packages, and book covers throughout daily routines.',
      },
    ],

    // Section 5: FAQ
    faqTitle: isNepali ? 'बारम्बार सोधिने प्रश्नहरू (Frequently Asked Questions)' : 'Frequently Asked Questions (FAQ)',
    faqSubtitle: isNepali
      ? 'बहु-संवेदी डिजिटल फ्ल्यासकार्ड र संज्ञानात्मक पहुँच सम्बन्धी प्रमाण-आधारित प्रश्नोत्तरहरू'
      : 'Evidence-based clinical guidance regarding cognitive accessibility and multi-sensory digital flashcards',
    faqs: [
      {
        q: isNepali
          ? 'कुन कुराले डिजिटल फ्ल्यासकार्ड एपलाई "कम-उत्तेजना" (Low-Stimulus) बनाउँछ?'
          : 'What makes a digital flashcard application "low-stimulus"?',
        a: isNepali
          ? 'कम-उत्तेजना डिजिटल फ्ल्यासकार्ड एपले विचलित पार्ने अनावश्यक तत्वहरू हटाउँछ—जस्तै काउन्टडाउन घडी, चर्को झिलिमिली एनिमेसन, पृष्ठभूमि सङ्गीत, र पप-अप विज्ञापनहरू। यसले सफा आइकन, पूर्वानुमानयोग्य नेभिगेसन, उच्च-कन्ट्रास्ट लेआउट, र प्राकृतिक शान्त अडियो प्रतिक्रियालाई प्राथमिकता दिन्छ।'
          : 'A low-stimulus digital flashcard application eliminates distracting, non-instructional digital elements that trigger sensory overload. This includes removing timed countdown graphics, aggressive visual flashes, celebratory particle effects, looping background music, and pop-up reward ads, emphasizing clean iconography and predictable layouts.',
      },
      {
        q: isNepali
          ? 'दृश्य रनवे ट्र्याकहरूले सेरेब्रल पाल्सी भएका सिकारुहरूलाई कसरी मद्दत गर्छन्?'
          : 'How do visual runway tracks assist learners with cerebral palsy?',
        a: isNepali
          ? 'दृश्य रनवे ट्र्याकहरू उच्च-कन्ट्रास्ट चम्किला रेखाहरू हुन् जसले प्रयोगकर्ताको ध्यान स्क्रिनको केन्द्रबाट बटनहरूतर्फ डोर्याउँछन्। सेरेब्रल पाल्सी र कोर्टिकल भिजुअल इम्पेयरमेन्ट (CVI) भएकाहरूका लागि यसले लक्ष्य खोज्न लाग्ने आँखा र मोटर थकान उल्लेख्य रूपमा घटाउँछ।'
          : 'Visual runway tracks are high-contrast visual guiding lines embedded into software that direct attention from a central focal point to peripheral selection targets. For individuals with cerebral palsy navigating ocular-motor dyspraxia or CVI, these pathways reduce visual search effort and coordinate eye-gaze or reaching movements.',
      },
      {
        q: isNepali
          ? 'के बहु-संवेदी डिजिटल शब्दावली उपकरणहरूको प्रयोगले प्राकृतिक बोली विकासमा ढिलाइ गर्छ?'
          : 'Can using multi-sensory digital vocabulary aids delay natural speech?',
        a: isNepali
          ? 'बिल्कुलै गर्दैन। शैक्षिक अनुसन्धानहरूले पुष्टि गरेका छन् कि बहु-संवेदी उपकरणहरूले बोली विकासलाई रोक्दैनन्, बरु सहयोग गर्छन्। एकैसाथ अडियो मोडल, ठोस दृश्य चित्र, र शारीरिक प्रतिक्रिया पाउँदा सञ्चार हताशा घट्छ र मस्तिष्कमा भाषाको स्नायु मार्गहरू सुदृढ हुन्छन्।'
          : 'No. Empirical empirical research consistently confirms that multi-sensory vocabulary tools do not hinder speech development; they actively support it. By providing simultaneous auditory speech models, concrete visual imagery, and reliable output, these tools reduce communicative frustration and reinforce phonological mapping in the brain.',
      },
      {
        q: isNepali
          ? 'फ्ल्यासकार्डमा तस्बिर वा मानक सङ्केतहरू (Symbols) मध्ये कुन रोज्ने?'
          : 'How do I choose between photographs and standardized symbols on flashcards?',
        a: isNepali
          ? 'सिकारुको संज्ञानात्मक अमूर्तता स्तर अनुसार छनोट गरिन्छ। शुरुवाती सिकारु वा गम्भीर बौद्धिक अपाङ्गता भएकाहरूका लागि उनीहरूको आफ्नै सामानको वास्तविक फोटोबाट सुरु गर्नुहोस्। त्यसपछि मात्र सामान्यीकरणका लागि मानक सङ्केतहरू (PCS वा SymbolStix) मा जानुहोस्।'
          : 'The decision depends on the learner\'s level of cognitive abstraction. Start with concrete, high-resolution photographs of the child\'s actual belongings for early developmental profiles. As consistent matching is demonstrated, transition to high-transparency standardized symbols (such as PCS or SymbolStix) to foster generalization.',
      },
      {
        q: isNepali
          ? 'डिजिटल फ्ल्यासकार्डहरूले दैनिक जीवन सीप (ADL) कार्य विश्लेषणलाई कसरी सुदृढ गर्छन्?'
          : 'How do digital flashcards reinforce task analysis for activities of daily living (ADLs)?',
        a: isNepali
          ? 'डिजिटल फ्ल्यासकार्डहरूले हात धुने वा दाँत माझ्ने जस्ता जटिल बहु-चरणका कार्यहरूलाई छुट्टाछुट्टै दृश्य कार्डहरूमा विभाजन गर्छन्। सिकारुले प्रत्येक चरणमा अडियो र दृश्य पुष्टि पाएपछि मात्र अर्को चरणमा जान्छ, जसले गर्दा कार्यस्मरणमा भार पर्दैन।'
          : 'Digital flashcards support task analysis ADL routines by breaking complex multi-step self-care tasks into discrete, sequentially ordered visual cards. Learners interact with each step individually, receiving auditory reinforcement and visual verification before moving forward, significantly reducing working memory load.',
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
                  <span>{isNepali ? 'वाक्य बनाउने तथा फ्ल्यासकार्ड' : 'Multi-Sensory AAC Tools'}</span>
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
                        <th className="py-3.5 px-4 sm:px-6 w-1/3">{isNepali ? 'फ्ल्यासकार्ड ढाँचा' : 'Flashcard Format'}</th>
                        <th className="py-3.5 px-4 sm:px-6 w-1/4">{isNepali ? 'पहुँच विधि' : 'Input Method'}</th>
                        <th className="py-3.5 px-4 sm:px-6 w-1/4">{isNepali ? 'क्लिनिकल प्रयोग' : 'Clinical Use'}</th>
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
                            {row.formats}
                          </td>
                          <td className="py-4 px-4 sm:px-6 align-top text-xs sm:text-sm leading-relaxed">
                            {row.access}
                          </td>
                          <td className="py-4 px-4 sm:px-6 align-top text-xs sm:text-sm leading-relaxed">
                            {row.clinical}
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
                <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  <FolderSync className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                  {content.conditionTitle}
                </h2>
              </div>

              {/* ASD Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#182330] border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
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
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
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

              {/* CP Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#182330] border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                  {content.cpTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              </div>
            </section>

            {/* 4. Implementation Roadmap */}
            <section id="implementation" className="space-y-6 scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                  <Activity className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                  {content.roadmapTitle}
                </h2>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base">
                {content.roadmapIntro}
              </p>

              <div className="space-y-4">
                {content.roadmapSteps.map((step, idx) => (
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
