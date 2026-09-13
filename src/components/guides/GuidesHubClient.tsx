'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Clock,
  ArrowRight,
  Compass,
  Brain,
  Layers,
  Hand,
  Activity,
  Filter,
  Clock3,
  Puzzle,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SanityGuideCluster, SanityGuide } from '@/lib/sanity/queries';

export interface GuideItem {
  id: string;
  title: string;
  nepaliTitle: string;
  slug?: string;
  href?: string;
  tag: string;
  nepaliTag: string;
  readTime: string;
  nepaliReadTime: string;
  audience: string;
  nepaliAudience: string;
  description: string;
  nepaliDescription: string;
  tags: string[];
  status: 'published' | 'upcoming';
}

export interface GuideCluster {
  id: string;
  clusterNumber: number;
  title: string;
  nepaliTitle: string;
  badge: string;
  nepaliBadge: string;
  description: string;
  nepaliDescription: string;
  iconName: 'foundations' | 'asd' | 'down' | 'id' | 'cp';
  guides: GuideItem[];
}

  const staticClusters: GuideCluster[] = [
    {
      id: 'cluster-1',
      clusterNumber: 1,
      title: 'Cluster 1: Foundational Guides (Top-of-Funnel & Educational Hub)',
      nepaliTitle: 'क्लस्टर १: आधारभूत क्लिनिकल निर्देशिकाहरू (शैक्षिक केन्द्र)',
      badge: 'Foundational Knowledge',
      nepaliBadge: 'आधारभूत ज्ञान',
      description:
        'Core educational frameworks defining neurodivergence, multi-tiered assistive technology, and the continuum between low-, mid-, and high-tech tools for inclusive education.',
      nepaliDescription:
        'न्युरोडाइभर्जेन्ट अवस्था, बहु-तह सहायक प्रविधि, र समावेशी शिक्षाका लागि लो-, मिड-, र हाई-टेक उपकरणहरूको आधारभूत क्लिनिकल ढाँचा।',
      iconName: 'foundations',
      guides: [
        {
          id: 'what-does-neurodivergent-mean',
          title: 'What Does It Mean to Be Neurodivergent? A Modern Educational Perspective',
          nepaliTitle: 'न्यूरोडाइभर्जेन्ट हुनुको अर्थ के हो? क्लिनिकल तथा आधुनिक दृष्टिकोण',
          href: '/guides/what-does-neurodivergent-mean',
          tag: 'Educational Framework',
          nepaliTag: 'क्लिनिकल परिभाषा',
          readTime: '6 min read',
          nepaliReadTime: '६ मिनेट पढाइ',
          audience: 'Parents, SPED, Therapists',
          nepaliAudience: 'अभिभावक, शिक्षक, थेरापिस्ट',
          description:
            'Understand neurodivergence across ASD, Down syndrome, ID & CP. Explore root causes, a 3-tier comparative assistive technology matrix, and evidence-based implementation steps.',
          nepaliDescription:
            'अटिजम, डाउन सिन्ड्रोम, बौद्धिक अपाङ्गता र सेरेब्रल पाल्सीका स्नायु-विकासात्मक मूल कारणहरू र ३-तहको सहायक प्रविधि ढाँचा।',
          tags: ['#Neurodiversity', '#Interoception', '#MultiTierAT'],
          status: 'published',
        },
        {
          id: 'assistive-technology-in-special-education',
          title: 'Assistive Technology (AT) in Special Education: Removing Cognitive and Physical Barriers',
          nepaliTitle: 'विशेष शिक्षामा सहायक प्रविधि (AT): संज्ञानात्मक तथा शारीरिक अवरोधहरूको निवारण',
          href: '/guides/assistive-technology-in-special-education',
          tag: 'Special Ed Framework',
          nepaliTag: 'विशेष शिक्षा ढाँचा',
          readTime: '7 min read',
          nepaliReadTime: '७ मिनेट पढाइ',
          audience: 'Parents, SPED Teachers, IEP Teams',
          nepaliAudience: 'अभिभावक, SPED शिक्षक, IEP टोली',
          description:
            'Explore practical AT that reduces sensory, communication, learning, and motor barriers for students. Features a 6-barrier matrix and a 7-step IEP implementation guide.',
          nepaliDescription:
            'संवेदी, सञ्चार, सिकाइ, र मोटर अवरोधहरू हटाउन व्यावहारिक सहायक प्रविधि। ६-अवरोध म्याट्रिक्स र ७-चरण IEP गाइड।',
          tags: ['#SpecialEd', '#IDEACompliance', '#AssistiveTech'],
          status: 'published',
        },
        {
          id: 'low-tech-vs-high-tech-assistive-technology',
          title: 'Low-Tech vs. Mid-Tech vs. High-Tech: Navigating the AT Spectrum for Diverse Learners',
          nepaliTitle: 'लो-टेक बनाम मिड-टेक बनाम हाई-टेक: विविध सिकारुहरूका लागि सहायक प्रविधि स्पेक्ट्रम',
          href: '/guides/low-tech-vs-high-tech-assistive-technology',
          tag: 'AT Spectrum',
          nepaliTag: 'प्रविधि स्पेक्ट्रम',
          readTime: '7 min read',
          nepaliReadTime: '७ मिनेट पढाइ',
          audience: 'Parents, Educators, Therapists',
          nepaliAudience: 'अभिभावक, शिक्षक, थेरापिस्ट',
          description:
            'Compare low-, mid-, and high-tech AT for autism, Down syndrome, ID, and cerebral palsy. Learn how to feature-match without compromising learner autonomy.',
          nepaliDescription:
            'लो-, मिड-, र हाई-टेक सहायक प्रविधिका फाइदा, सीमा र व्यावहारिक उदाहरणहरूको विस्तृत तुलना र ब्याकअप रणनीति।',
          tags: ['#LowTechVsHighTech', '#FeatureMatching', '#AACContinuum'],
          status: 'published',
        },
      ],
    },
    {
      id: 'cluster-2',
      clusterNumber: 2,
      title: 'Cluster 2: Autism Spectrum Disorder (ASD)',
      nepaliTitle: 'क्लस्टर २: अटिजम स्पेक्ट्रम डिसअर्डर (ASD)',
      badge: 'Autism Supports',
      nepaliBadge: 'अटिजम सहायता',
      description:
        'Evidence-based assistive tech addressing executive dysfunction, sensory regulation, alexithymia, and visual color-coded language structures for autistic individuals.',
      nepaliDescription:
        'कार्यकारी कार्य शिथिलता, संवेदी व्यवस्थापन, इन्टरोसेप्शन, र दृश्य रङ-सङ्केत गरिएका भाषा संरचनाका लागि प्रमाण-आधारित AT।',
      iconName: 'asd',
      guides: [
        {
          id: 'visual-structure-and-task-analysis-autism',
          title: 'Visual Structure & Task Analysis: Mitigating Executive Dysfunction in Autism',
          nepaliTitle: 'दृश्य संरचना र कार्य विश्लेषण: अटिजममा कार्यकारी कार्य शिथिलताको न्यूनीकरण',
          href: '/guides/visual-structure-and-task-analysis-autism',
          tag: 'Executive Function',
          nepaliTag: 'कार्यकारी कार्य',
          readTime: '7 min read',
          nepaliReadTime: '७ मिनेट पढाइ',
          audience: 'Parents, SPED Teachers, Therapists',
          nepaliAudience: 'अभिभावक, शिक्षक, थेरापिस्ट',
          description:
            'Learn how visual structure and task analysis ADL reduce executive dysfunction in autism using evidence-based AT tools, TEACCH physical organization, and backward chaining.',
          nepaliDescription:
            'दृश्य संरचना र दैनिक जीवन सीप कार्य विश्लेषण (ADL) ले कसरी अटिजममा योजना, अनुक्रम, र स्मरण क्षमतालाई सहयोग पुर्याउँछन्।',
          tags: ['#VisualStructure', '#TaskAnalysisADL', '#ExecutiveDysfunction'],
          status: 'published',
        },
        {
          id: 'interoception-and-alexithymia-autism',
          title: 'Interoception, Alexithymia, and Emotional Regulation Tools for Autistic Learners',
          nepaliTitle: 'इन्टरोसेप्शन र एलेक्सिथिमिया: अटिजममा संवेग व्यवस्थापनका उपकरणहरू',
          href: '/guides/interoception-and-alexithymia-autism',
          tag: 'Sensory & Emotions',
          nepaliTag: 'संवेदी तथा संवेग',
          readTime: '8 min read',
          nepaliReadTime: '८ मिनेट पढाइ',
          audience: 'Parents, SPED, Therapists',
          nepaliAudience: 'अभिभावक, शिक्षक, थेरापिस्ट',
          description:
            'Understand interoception and alexithymia in autism. Explore low-, mid-, and high-tech emotional regulation tools, body check-in scaffolds, and sensory-safe AAC pages.',
          nepaliDescription:
            'आन्तरिक शारीरिक अनुभूति (इन्टरोसेप्शन) र भावना पहिचान (एलेक्सिथिमिया) का अवरोधहरू बुझ्नुहोस् र संवेग व्यवस्थापन प्रविधिहरू सिक्नुहोस्।',
          tags: ['#Interoception', '#Alexithymia', '#EmotionRegulation'],
          status: 'published',
        },
        {
          id: 'aac-fitzgerald-key-color-coding',
          title: 'AAC & Fitzgerald Key Color-Coding: Supporting Non-Verbal and Gestural Communicators',
          nepaliTitle: 'AAC र फिट्जगेराल्ड कि रङ-सङ्केत: गैर-मौखिक तथा इसारा सञ्चारकर्ताहरूको सशक्तीकरण',
          href: '/guides/aac-fitzgerald-key-color-coding',
          tag: 'Visual Grammar',
          nepaliTag: 'दृश्य व्याकरण',
          readTime: '7 min read',
          nepaliReadTime: '७ मिनेट पढाइ',
          audience: 'Parents, SLPs, SPED Teachers',
          nepaliAudience: 'अभिभावक, SLP, SPED शिक्षक',
          description:
            'Learn how Fitzgerald Key color-coding organizes AAC vocabulary for nonspeaking learners with autism, Down syndrome, ID, and cerebral palsy using left-to-right syntax paths.',
          nepaliDescription:
            'फिट्जगेराल्ड कि रङ-सङ्केत प्रणालीले कसरी नबोल्ने र इसाराबाट सञ्चार गर्ने सिकारुहरूका लागि AAC शब्दावली व्यवस्थित गर्दछ।',
          tags: ['#AACFitzgeraldKey', '#ColorCoding', '#NonverbalAutism'],
          status: 'published',
        },
      ],
    },
    {
      id: 'cluster-3',
      clusterNumber: 3,
      title: 'Cluster 3: Down Syndrome (Trisomy 21 & Motor-Speech Scaffolding)',
      nepaliTitle: 'क्लस्टर ३: डाउन सिन्ड्रोम (ट्राइसोमी २१ र मोटर-बोली मचान)',
      badge: 'Trisomy 21 & Motor-Speech',
      nepaliBadge: 'ट्राइसोमी २१ र मोटर-बोली',
      description:
        'Targeted assistive tools addressing muscular hypotonia, fine-motor fatigue, speech apraxia, and visual scaffolding for auditory memory deficits in Down syndrome.',
      nepaliDescription:
        'मांसपेशीको हाइपोटोनिया, फाइन-मोटर थकान, बोली अप्राक्सिया, र श्रवण कार्यस्मरण कमीका लागि दृश्य मचान र सहायक प्रविधिहरू।',
      iconName: 'down',
      guides: [
        {
          id: 'assistive-tech-for-down-syndrome',
          title: 'Assistive Tech for Down Syndrome: Addressing Hypotonia, Fine-Motor Fatigue, and Speech Apraxia',
          nepaliTitle: 'डाउन सिन्ड्रोमका लागि सहायक प्रविधि: हाइपोटोनिया, फाइन-मोटर थकान, र बोली अप्राक्सियाको समाधान',
          href: '/guides/assistive-tech-for-down-syndrome',
          tag: 'Motor & Speech',
          nepaliTag: 'मोटर र बोली',
          readTime: '8 min read',
          nepaliReadTime: '८ मिनेट पढाइ',
          audience: 'Parents, OTs, SLPs, SPED Teachers',
          nepaliAudience: 'अभिभावक, OT, SLP, SPED शिक्षक',
          description:
            'Discover evidence-based assistive technology for Down syndrome. Explore ergonomic slant boards, visual pacing boards, and hypotonia supports for fine-motor autonomy.',
          nepaliDescription:
            'डाउन सिन्ड्रोम (Trisomy 21) मा मांसपेशीको कम कसिलोपन (Hypotonia), छोटा औंला, र बोली डिस्प्र्याक्सियाका लागि प्रमाण-आधारित सहायक प्रविधि।',
          tags: ['#DownSyndrome', '#HypotoniaSupports', '#FineMotorAT'],
          status: 'published',
        },
        {
          id: 'visual-scaffolding-down-syndrome',
          title: 'Visual Scaffolding for Auditory Memory Deficits in Down Syndrome Learners',
          nepaliTitle: 'डाउन सिन्ड्रोम भएका सिकारुहरूमा श्रवण स्मरण कमीका लागि दृश्य मचान',
          href: '/guides/visual-scaffolding-auditory-memory-down-syndrome',
          tag: 'Cognitive Scaffolding',
          nepaliTag: 'संज्ञानात्मक मचान',
          readTime: '7 min read',
          nepaliReadTime: '७ मिनेट पढाइ',
          audience: 'Educators, SLPs, Parents',
          nepaliAudience: 'शिक्षक, SLP, अभिभावक',
          description:
            'Bypassing auditory-verbal short-term memory constraints through concrete visual cues, graphic organizers, and dual-coding strategies.',
          nepaliDescription:
            'ठोस दृश्य संकेतहरू, ग्राफिक आयोजकहरू, र दोहोरो कोडिङ रणनीतिहरू मार्फत श्रवण-मौखिक अल्पकालीन स्मरण सीमाहरूलाई बाइपास गर्ने।',
          tags: ['#VisualScaffolding', '#AuditoryMemory', '#DualCoding'],
          status: 'published',
        },
        {
          id: 'total-communication-speech-aids',
          title: 'Total Communication & Mid-Tech Speech Aids: Bridging Receptive and Expressive Gaps in Down Syndrome',
          nepaliTitle: 'कुल सञ्चार र मध्यम-प्रविधि बोली सहायकहरू: ग्रहणशील र अभिव्यक्ति खाडल पुर्ने',
          href: '/guides/total-communication-mid-tech-speech-aids',
          tag: 'Total Communication',
          nepaliTag: 'कुल सञ्चार',
          readTime: '8 min read',
          nepaliReadTime: '८ मिनेट पढाइ',
          audience: 'SLPs, Special Educators, Families',
          nepaliAudience: 'SLP, विशेष शिक्षक, परिवार',
          description:
            'Orchestrating gestures, signs, tactile cues, and voice-output speech devices to eliminate expressive communication bottlenecks.',
          nepaliDescription:
            'सांकेतिक भाषा, स्पर्श संकेत, र आवाज-उत्पादक उपकरणहरू संयोजन गरी अभिव्यक्ति सञ्चार अवरोधहरू हटाउने सहयोगी दृष्टिकोण।',
          tags: ['#TotalCommunication', '#MidTechAAC', '#SpeechAids'],
          status: 'published',
        },
      ],
    },
    {
      id: 'cluster-4',
      clusterNumber: 4,
      title: 'Cluster 4: Intellectual Disabilities (ID & Adaptive Behavior)',
      nepaliTitle: 'क्लस्टर ४: बौद्धिक अपाङ्गता (ID र अनुकूलन व्यवहार)',
      badge: 'ID & Adaptive Behavior',
      nepaliBadge: 'ID र अनुकूलन व्यवहार',
      description:
        'Multi-sensory digital flashcards, daily living task sequencing (ADLs), and concrete math and literacy tools for cognitive scaffolding and personal autonomy.',
      nepaliDescription:
        'बहु-संवेदी डिजिटल फ्ल्यासकार्ड, दैनिक जीवन सीप (ADL) कार्य अनुक्रम, र संज्ञानात्मक मचान तथा व्यक्तिगत स्वायत्तताका लागि ठोस गणित र साक्षरता उपकरणहरू।',
      iconName: 'id',
      guides: [
        {
          id: 'cognitive-accessibility-digital-flashcards',
          title: 'Cognitive Accessibility: Designing Multi-Sensory Digital Flashcards & Vocabulary Aids',
          nepaliTitle: 'संज्ञानात्मक पहुँच: बहु-संवेदी डिजिटल फ्ल्यासकार्ड र शब्दावली सहायता डिजाइन',
          href: '/guides/cognitive-accessibility-digital-flashcards',
          tag: 'Dual Coding Tech',
          nepaliTag: 'दोहोरो कोडिङ प्रविधि',
          readTime: '7 min read',
          nepaliReadTime: '७ मिनेट पढाइ',
          audience: 'Special Educators, SLPs, Developers',
          nepaliAudience: 'विशेष शिक्षक, SLP, विकासकर्ता',
          description:
            'Designing accessible, multi-sensory digital flashcards and vocabulary aids for learners with cognitive processing differences using dual coding.',
          nepaliDescription:
            'संज्ञानात्मक प्रशोधन भिन्नता भएका सिकारुहरूका लागि दोहोरो-कोडिङ र अडियो-भिजुअल मचान प्रयोग गरी पहुँचयोग्य डिजिटल फ्ल्यासकार्ड डिजाइन।',
          tags: ['#CognitiveAccessibility', '#MultiSensoryFlashcards', '#DualCoding'],
          status: 'published',
        },
        {
          id: 'daily-living-skills-task-sequencing',
          title: 'Daily Living Skills (ADLs): Step-by-Step Task Sequencing for Independent Living',
          nepaliTitle: 'दैनिक जीवन सीप (ADLs): स्वतन्त्र जीवनका लागि चरणबद्ध कार्य अनुक्रम',
          href: '/blog/task-analysis-home-executive-dysfunction',
          tag: 'ADL Task Analysis',
          nepaliTag: 'ADL कार्य विश्लेषण',
          readTime: '6 min read',
          nepaliReadTime: '६ मिनेट पढाइ',
          audience: 'Parents, OTs, Special Educators',
          nepaliAudience: 'अभिभावक, OT, विशेष शिक्षक',
          description:
            'Transforming complex personal hygiene, dressing, and household routines into predictable visual task-analyzed workflows for independence.',
          nepaliDescription:
            'व्यक्तिगत सरसफाइ, लुगा लगाउने, र घरायसी कामहरूलाई स्वतन्त्रताका लागि चरणबद्ध दृश्य कार्य विश्लेषणमा रूपान्तरण।',
          tags: ['#ADLSkills', '#TaskAnalysis', '#ExecutiveDysfunction'],
          status: 'published',
        },
        {
          id: 'functional-academics-special-education',
          title: 'Functional Academics: Concrete Math and Literacy Tools for Cognitive Scaffolding',
          nepaliTitle: 'कार्यात्मक शिक्षा: संज्ञानात्मक मचानका लागि ठोस गणित तथा साक्षरता उपकरणहरू',
          href: '/guides/functional-academics-special-education',
          tag: 'Functional Academics',
          nepaliTag: 'कार्यात्मक शिक्षा',
          readTime: '8 min read',
          nepaliReadTime: '८ मिनेट पढाइ',
          audience: 'SPED Educators, SLPs, OTs, Parents',
          nepaliAudience: 'विशेष शिक्षक, SLP, OT, अभिभावक',
          description:
            'Concrete-Representational-Abstract (CRA) math, TouchMath tactile numeracy, and Next-Dollar budgeting tools for community independence.',
          nepaliDescription:
            'ठोस-प्रतिनिधित्वमूलक-अमूर्त (CRA) गणित, टचम्याथ ट्याक्टाइल संख्यात्मकता, र समुदायमा स्वायत्तताका लागि नेक्स्ट-डलर बजेटिङ उपकरणहरू।',
          tags: ['#FunctionalAcademics', '#ConcreteMath', '#CRAFramework'],
          status: 'published',
        },
      ],
    },
    {
      id: 'cluster-5',
      clusterNumber: 5,
      title: 'Cluster 5: Cerebral Palsy (CP) & Motor-Speech Intersection',
      nepaliTitle: 'क्लस्टर ५: सेरेब्रल पाल्सी (CP) तथा मोटर-बोली संयोजन',
      badge: 'Motor Access & Dual Barriers',
      nepaliBadge: 'मोटर पहुँच र दोहोरो अवरोध',
      description:
        'Specialized alternative access, switch scanning, eye-gaze tracking, and high-contrast large-target digital architectures designed specifically for dual motor and speech barriers.',
      nepaliDescription:
        'वैकल्पिक पहुँच, स्विच स्क्यानिङ, आँखा-हेरचाह ट्र्याकिङ, र उच्च-कन्ट्रास्ट ठूला-टार्गेट भएका डिजिटल आर्किटेक्चरहरू।',
      iconName: 'cp',
      guides: [
        {
          id: 'adaptive-tech-for-cerebral-palsy',
          title: 'Adaptive Tech for Cerebral Palsy: Navigating Fine Motor Incoordination and Speech Apraxia',
          nepaliTitle: 'सेरेब्रल पाल्सीका लागि अनुकूलित प्रविधि: फाइन मोटर असन्तुलन र बोली अप्राक्सियाको समाधान',
          href: '/guides/adaptive-tech-for-cerebral-palsy',
          tag: 'Alternative Access',
          nepaliTag: 'वैकल्पिक पहुँच',
          readTime: '8 min read',
          nepaliReadTime: '८ मिनेट पढाइ',
          audience: 'Parents, PTs, OTs, SLPs',
          nepaliAudience: 'अभिभावक, PT, OT, SLP',
          description:
            'Practical strategies and physical mounting solutions to bypass spasticity, tremor, and motor apraxia using single/dual switches and head arrays.',
          nepaliDescription:
            'स्प्यास्टिसिटी, कम्पन, र मोटर अप्राक्सियालाई बाइपास गर्न स्विच र हेड एरे सहितको क्लिनिकल रणनीति।',
          tags: ['#CerebralPalsy', '#MotorApraxia', '#SwitchAccess'],
          status: 'published',
        },
        {
          id: 'high-contrast-large-target-interfaces',
          title: 'High-Contrast & Large-Target Digital Interfaces for Motor Impairments',
          nepaliTitle: 'मोटर अपाङ्गताका लागि उच्च-कन्ट्रास्ट तथा ठूला-टार्गेट डिजिटल इन्टरफेसहरू',
          href: '/guides/high-contrast-large-target-interfaces',
          tag: 'Interface Architecture',
          nepaliTag: 'इन्टरफेस ढाँचा',
          readTime: '8 min read',
          nepaliReadTime: '८ मिनेट पढाइ',
          audience: 'AT Specialists, Developers, Educators',
          nepaliAudience: 'AT विशेषज्ञ, विकासकर्ता, शिक्षक',
          description:
            'Engineering accessible touchscreens and visual runway tracks for individuals with tremors, athetoid movements, and Cortical Visual Impairment (CVI).',
          nepaliDescription:
            'काँप्ने चाल र CVI भएका सिकारुहरूका लागि दृश्य रनवे ट्र्याक, ठूला हिट क्षेत्र, र ड्वेल-क्लिक इन्जिनियरिङ।',
          tags: ['#LargeTargets', '#VisualRunwayTracks', '#CVIAdapted'],
          status: 'published',
        },
        {
          id: 'single-tap-vs-complex-aac-dual-barriers',
          title: 'Single-Tap Quick Talkers vs. Complex AAC for Dual Motor-Speech Barriers',
          nepaliTitle: 'एकल-स्पर्श क्विक टकर बनाम जटिल AAC: दोहोरो मोटर-बोली अवरोधमा सही छनोट',
          href: '/guides/single-tap-vs-complex-aac-dual-barriers',
          tag: 'AAC Decision Guide',
          nepaliTag: 'AAC छनोट गाइड',
          readTime: '8 min read',
          nepaliReadTime: '८ मिनेट पढाइ',
          audience: 'SLPs, Assistive Technology Teams',
          nepaliAudience: 'SLP, सहायक प्रविधि टोली',
          description:
            'Balancing cognitive vocabulary capacity against physical fatigue when a learner navigates both severe dysarthria and physical spasticity.',
          nepaliDescription:
            'गम्भीर बोली अवरोध र शारीरिक स्प्यास्टिसिटी दुवै भएका सिकारुहरूका लागि छिटो पहुँच र भाषिक क्षमताको सन्तुलन।',
          tags: ['#QuickTalkers', '#ComplexAAC', '#DualBarriers'],
          status: 'published',
        },
      ],
    },
  ];



interface GuidesHubClientProps {
  initialClusters?: SanityGuideCluster[];
  initialGuides?: SanityGuide[];
}

export default function GuidesHubClient({ initialClusters, initialGuides }: GuidesHubClientProps = {}) {
  const { language } = useLanguage();
  const isNepali = language === 'ne';
  const [selectedCluster, setSelectedCluster] = useState<string>('all');
  // Use Sanity CMS clusters & guides if available; otherwise fall back to static data
  const clusters: GuideCluster[] =
    initialClusters && initialClusters.length > 0 && initialGuides && initialGuides.length > 0
      ? initialClusters.map((sc, idx) => {
          const matchedGuides = initialGuides
            .filter((g) => g.cluster?._id === sc._id || g.cluster?.slug?.current === sc.slug?.current)
            .sort((a, b) => a.order - b.order)
            .map((g) => ({
              id: g.slug.current,
              title: g.title,
              nepaliTitle: g.nepaliTitle || g.title,
              slug: g.slug.current,
              href: `/guides/${g.slug.current}`,
              tag: g.primaryKeyword || (g.isPrimary ? 'Foundational' : 'Practical Guide'),
              nepaliTag: g.isPrimary ? 'आधारभूत' : 'व्यावहारिक निर्देशिका',
              readTime: g.readingTime || '12 min read',
              nepaliReadTime: g.nepaliReadingTime || '१२ मिनेट',
              audience: 'Special Educators & Families',
              nepaliAudience: 'विशेष शिक्षक तथा अभिभावक',
              description: g.excerpt,
              nepaliDescription: g.nepaliExcerpt || g.excerpt,
              tags: g.secondaryKeywords || [g.primaryKeyword || 'Assistive Tech'],
              status: (g.status === 'published' ? 'published' : 'upcoming') as 'published' | 'upcoming',
            }));

          return {
            id: sc.slug?.current || `cluster-${idx + 1}`,
            clusterNumber: sc.order || idx + 1,
            title: sc.title,
            nepaliTitle: sc.nepaliTitle || sc.title,
            badge: sc.badge || 'Educational Framework',
            nepaliBadge: sc.nepaliBadge || 'शैक्षिक स्रोत',
            description: sc.description || '',
            nepaliDescription: sc.nepaliDescription || '',
            iconName: (sc.order === 1 ? 'foundations' : sc.order === 2 ? 'asd' : sc.order === 3 ? 'down' : sc.order === 4 ? 'id' : sc.order === 5 ? 'cp' : 'foundations') as 'foundations' | 'asd' | 'down' | 'id' | 'cp',
            guides: matchedGuides.length > 0 ? matchedGuides : (staticClusters[idx]?.guides || []),
          };
        })
      : staticClusters;


  const breadcrumbs = [
    { label: isNepali ? 'गृहपृष्ठ' : 'Home', href: '/' },
    { label: isNepali ? 'निर्देशिकाहरू' : 'Guides', href: '/guides' },
  ];

  const getClusterIcon = (iconName: string) => {
    switch (iconName) {
      case 'foundations':
        return <Compass className="w-6 h-6 text-primary-600 dark:text-primary-400" />;
      case 'asd':
        return <Brain className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'down':
        return <Hand className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'id':
        return <Puzzle className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'cp':
        return <Activity className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      default:
        return <Layers className="w-6 h-6 text-primary-600 dark:text-primary-400" />;
    }
  };

  const filteredClusters =
    selectedCluster === 'all'
      ? clusters
      : clusters.filter((c) => c.id === selectedCluster);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#111821] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      {/* Hero Header Zone */}
      <section className="border-b border-neutral-200/80 dark:border-neutral-800 bg-white/70 dark:bg-[#182330]/80 backdrop-blur-md pt-10 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mt-6 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-primary-100 dark:bg-primary-950/80 text-primary-800 dark:text-primary-300 border border-primary-200 dark:border-primary-800">
              <ShieldCheck className="w-3.5 h-3.5" />
              {isNepali ? 'शैक्षिक तथा सहयोगी ज्ञान केन्द्र' : 'Assistive Technology Resource Hub'}
            </span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
              {isNepali ? '५ विषय क्षेत्रहरू • १४ निर्देशिकाहरू' : '5 Topic Areas • 14 Educational Guides'}
            </span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white max-w-4xl leading-tight">
            {isNepali
              ? 'प्रमाण-आधारित सहायक प्रविधि निर्देशिकाहरू'
              : 'Evidence-Based Assistive Technology Knowledge Clusters'}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
            {isNepali
              ? 'अटिजम (ASD), डाउन सिन्ड्रोम, बौद्धिक अपाङ्गता (ID), र सेरेब्रल पाल्सी (CP) का सिकारुहरूका लागि संवेदी-सुरक्षित, कम-उत्तेजना र पहुँचयोग्य प्रविधिहरूको क्लिनिकल पुस्तकालय। क्लस्टर अनुसार अध्ययन गर्नुहोस्:'
              : 'Explore structured, evidence-based assistive technology guides organized into 5 distinct educational topic areas. Built for special educators, therapists, and caregivers supporting neurodivergent learners across all communication and motor profiles.'}
          </p>

          {/* Interactive Cluster Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-4 border-t border-neutral-200/60 dark:border-neutral-800">
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-500 dark:text-neutral-400 mr-2">
              <Filter className="w-3.5 h-3.5" />
              {isNepali ? 'क्लस्टर छान्नुहोस्:' : 'Filter Cluster:'}
            </span>

            <button
              onClick={() => setSelectedCluster('all')}
              className={
                'px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ' +
                (selectedCluster === 'all'
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'bg-white dark:bg-[#1f2d3d] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800')
              }
            >
              {isNepali ? 'सबै विषयहरू (All)' : 'All 5 Topics'}
            </button>

            {clusters.map((cluster) => (
              <button
                key={cluster.id}
                onClick={() => setSelectedCluster(cluster.id)}
                className={
                  'px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ' +
                  (selectedCluster === cluster.id
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'bg-white dark:bg-[#1f2d3d] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800')
                }
              >
                {isNepali ? cluster.nepaliBadge : cluster.badge}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Clusters Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {filteredClusters.map((cluster) => (
          <section
            key={cluster.id}
            id={cluster.id}
            className="space-y-6 scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-[#182330]/70 border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs backdrop-blur-xs"
          >
            {/* Cluster Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-200/60 dark:border-neutral-800">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800/80 flex-shrink-0">
                  {getClusterIcon(cluster.iconName)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-primary-100 dark:bg-primary-950/80 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800">
                      {isNepali ? ('क्लस्टर ' + cluster.clusterNumber) : ('Cluster ' + cluster.clusterNumber)}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                      {isNepali ? cluster.nepaliBadge : cluster.badge}
                    </span>
                  </div>
                  <h2 className="mt-1.5 text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                    {isNepali ? cluster.nepaliTitle : cluster.title}
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
                    {isNepali ? cluster.nepaliDescription : cluster.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Guides Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {cluster.guides.map((guide) => {
                const isUpcoming = guide.status === 'upcoming';

                return (
                  <div
                    key={guide.id}
                    className={
                      'flex flex-col justify-between rounded-2xl border bg-white dark:bg-[#1a2533] p-6 shadow-xs transition-all ' +
                      (isUpcoming
                        ? 'border-dashed border-neutral-300 dark:border-neutral-700 opacity-90'
                        : 'border-neutral-200 dark:border-neutral-800 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-md')
                    }
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span
                          className={
                            'px-2 py-0.5 rounded-md font-semibold text-[11px] ' +
                            (isUpcoming
                              ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800'
                              : 'bg-primary-50 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300')
                          }
                        >
                          {isUpcoming
                            ? isNepali
                              ? 'चाँडै आउँदैछ (In Review)'
                              : 'Upcoming Guide'
                            : isNepali
                            ? guide.nepaliTag
                            : guide.tag}
                        </span>
                        <span className="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 text-[11px]">
                          <Clock className="w-3 h-3" />
                          {isNepali ? guide.nepaliReadTime : guide.readTime}
                        </span>
                      </div>

                      <h3 className="font-bold text-base sm:text-lg text-neutral-900 dark:text-white leading-snug">
                        {isUpcoming ? (
                          <span>{isNepali ? guide.nepaliTitle : guide.title}</span>
                        ) : (
                          <Link
                            href={guide.href || '#'}
                            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          >
                            {isNepali ? guide.nepaliTitle : guide.title}
                          </Link>
                        )}
                      </h3>

                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-3">
                        {isNepali ? guide.nepaliDescription : guide.description}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-1.5 text-[11px]">
                        {guide.tags.map((tg, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400"
                          >
                            {tg}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs">
                      <span className="text-neutral-500 dark:text-neutral-400 font-medium">
                        {isNepali ? guide.nepaliAudience : guide.audience}
                      </span>

                      {isUpcoming ? (
                        <span className="inline-flex items-center gap-1 font-semibold text-amber-600 dark:text-amber-400">
                          <Clock3 className="w-3.5 h-3.5" />
                          <span>{isNepali ? 'सामग्री प्रतिक्षारत' : 'Content In Queue'}</span>
                        </span>
                      ) : (
                        <Link
                          href={guide.href || '#'}
                          className="inline-flex items-center gap-1 font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group"
                        >
                          <span>{isNepali ? 'निर्देशिका पढ्नुहोस्' : 'Read Guide'}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
