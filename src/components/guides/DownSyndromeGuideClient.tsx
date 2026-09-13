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

export default function DownSyndromeGuideClient() {
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
        ? 'डाउन सिन्ड्रोम सहायक प्रविधि'
        : 'Down Syndrome Assistive Tech Guide',
      href: '/guides/assistive-tech-for-down-syndrome',
    },
  ];

  const content = {
    badge: isNepali ? 'क्लिनिकल तथा शैक्षिक निर्देशिका' : 'Clinical & Educational Guide',
    readingTime: isNepali ? '८ मिनेट पढाइ' : '8 min read',
    audience: isNepali ? 'अभिभावक, OT, SLP, SPED शिक्षक' : 'Parents, OTs, SLPs, SPED Teachers',
    h1Title: isNepali
      ? 'डाउन सिन्ड्रोमका लागि सहायक प्रविधि: फाइन मोटर, बोली स्पष्टता, र दैनिक स्वायत्तता'
      : 'Assistive Tech for Down Syndrome: Enhancing Fine Motor Skills, Speech, and Autonomy',
    featuredTitle: isNepali ? 'कार्यकारी सारांश र मूल परिभाषा' : 'Executive Summary & Core Definition',
    featuredSnippet: isNepali
      ? 'डाउन सिन्ड्रोमका लागि सहायक प्रविधि (AT) शारीरिक, बोलीगत, र संज्ञानात्मक अवरोधहरू पार गर्न डिजाइन गरिएका विशेष लो-, मिड-, र हाई-टेक उपकरणहरू हुन्, जसले सिकारुहरूलाई फाइन मोटर समन्वय, कार्यात्मक बोली, र दैनिक स्वायत्तता विकास गर्न सक्षम बनाउँछ। डाउन सिन्ड्रोम (Trisomy 21) मा मांसपेशीको कम कसिलोपन (Hypotonia), खुकुला जोर्नीहरू (Ligamentous Laxity), छोटा औंलाहरू, ओरल-मोटर डिस्प्र्याक्सिया, र श्रव्य कार्यस्मरणमा कमजोरी तर दृश्य-स्थानिक सिकाइमा बलियो क्षमता देखिन्छ। एर्गोनोमिक लेखन सहायता, AAC, दृश्य कार्य तालिका, र अडिटरी-फिडब्याक उपकरणहरूले यी भिन्नताहरूलाई प्रभावकारी रूपमा सम्बोधन गर्दछन्।'
      : 'Assistive technology for Down syndrome encompasses specialized low-, mid-, and high-tech tools designed to bypass physical, speech, and cognitive barriers, allowing learners to develop fine motor coordination, functional speech, and daily autonomy. Down syndrome (Trisomy 21) presents generalized muscular hypotonia (low muscle tone), ligamentous laxity (loose joints), shorter digits, oral-motor dyspraxia, and relative weaknesses in auditory working memory paired with relative strengths in visual-spatial learning.',
    featuredTakeaway: isNepali
      ? 'मुख्य निष्कर्ष: फाइन मोटर शुद्धता वा बोली आफैं स्पष्ट नभएसम्म पर्खनुको सट्टा, क्लिनिकल सहायक प्रविधिले तत्काल पहुँच प्रदान गर्छ। घर र कक्षाकोठामा अटिजम (ASD), बौद्धिक अपाङ्गता (ID), र सेरेब्रल पाल्सी (CP) का सह-अनुकूलनसँगै AT प्रयोग गर्दा सिकारुको आत्मविश्वास र समुदायमा सहभागिता उल्लेख्य रूपमा बढ्छ।'
      : 'Clinical Takeaway: Rather than waiting for fine motor precision or speech clarity to develop spontaneously, clinical AT interventions deploy ergonomic writing aids, Augmentative and Alternative Communication (AAC), concrete visual task systems, and auditory-feedback tools to foster self-efficacy and active participation.',

    // Sidebar TOC
    tocTitle: isNepali ? 'यस निर्देशिकामा' : 'Table of Contents',
    tocLinks: [
      { id: 'profile', label: isNepali ? 'स्नायु-विकासात्मक तथा शारीरिक आधार' : 'Neurodevelopmental Profile & Foundations' },
      { id: 'continuum', label: isNepali ? 'सहायक प्रविधि (AT) स्पेक्ट्रम' : 'AT Continuum Matrix' },
      { id: 'condition-specific', label: isNepali ? 'अवस्था-विशिष्ट अनुकूलनहरू' : 'Condition-Specific Adaptations' },
      { id: 'implementation', label: isNepali ? 'कार्यान्वयन रोडम्याप (६ चरण)' : 'Implementation Roadmap' },
      { id: 'faq', label: isNepali ? 'क्लिनिकल सोधपुछ तथा FAQ' : 'Clinical FAQ' },
    ],

    // Section 1: Foundations
    foundationsTitle: isNepali ? 'सैद्धान्तिक तथा स्नायु-विकासात्मक आधारहरू' : 'Theoretical & Neurodevelopmental Foundation',
    foundationsIntro: isNepali
      ? 'प्रभावकारी सहायक प्रविधिले सिकारुको अन्तर्निहित शारीरिक र स्नायु-विकासात्मक यथार्थहरूलाई प्रत्यक्ष सम्बोधन गर्नुपर्दछ। डाउन सिन्ड्रोम र सह-सम्बन्धित विकासात्मक प्रोफाइलहरूमा मोटर नियन्त्रण, सञ्चार, र कार्यकारी व्यवस्थापनमा विशिष्ट अवरोधहरू हुन्छन्:'
      : 'Effective assistive technology must address the underlying physiological and neurodevelopmental realities of the learner. In Down syndrome and co-occurring developmental profiles, distinct mechanisms impede performance across motor control, communication, and executive management:',
    foundationsCards: [
      {
        title: isNepali ? 'मांसपेशीको हाइपोटोनिया र जोर्नीको खुकुलोपन' : 'Muscular Hypotonia & Ligamentous Laxity',
        desc: isNepali
          ? 'कम मांसपेशी टोन र जोर्नीको अत्यधिक लचकताले हात र नाडीलाई अस्थिर बनाउँछ। छोटा औंलाहरूले गर्दा सामान्य पेन्सिल समात्न धेरै कठिन र पीडादायी हुन्छ। यसले पेन्सिल समात्ने, कैंची चलाउने, साना बटन लगाउने, र टचस्क्रिन चलाउँदा हात चाँडै थकाउँछ।'
          : 'Low muscle tone and joint hypermobility destabilize the hand and wrist. Shorter metacarpals and phalanges make standard tripod grasp taxing. Writing, scissor work, buttons, and touchscreens induce rapid muscular fatigue without ergonomic adaptations.',
      },
      {
        title: isNepali ? 'ओरल-मोटर डिस्प्र्याक्सिया र अनुहारको बनावट' : 'Oral-Motor Dyspraxia & Midface Anatomy',
        desc: isNepali
          ? 'सानो मुखको भाग (Midface Hypoplasia), जिब्रोको कम टोन, र बोली मोटर योजना (Childhood Apraxia of Speech) का कारण बोलीको स्पष्टता प्रभावित हुन्छ। सिकारुको बुझ्ने क्षमता र सामाजिक रुचि उच्च भए पनि बोलीमार्फत त्यो व्यक्त गर्न कठिन हुन्छ।'
          : 'Speech intelligibility is often hindered by midface hypoplasia (smaller oral cavity relative to the tongue), low lingual tone, and speech motor planning challenges (apraxia). Receptive language often far exceeds expressive spoken output.',
      },
      {
        title: isNepali ? 'श्रव्य कार्यस्मरण अवरोध बनाम दृश्य क्षमता' : 'Auditory Working Memory vs. Visual Strengths',
        desc: isNepali
          ? 'बोलेको भाषा प्रशोधन गर्दा श्रव्य कार्यस्मरणमा अत्यधिक भार पर्छ। बहु-चरणका मौखिक निर्देशनहरू छोटो समयको सम्झनाबाट चाँडै मेटिन्छन्। तर दृश्य च्यानलहरू बलियो भएकाले सिकारुहरूले मौखिक निर्देशनभन्दा दृश्य रूपमा प्रस्तुत जानकारी धेरै प्रभावकारी रूपमा बुझ्छन्।'
          : 'Processing spoken language places immense load on auditory working memory; multi-step verbal commands evaporate quickly. However, visual processing channels are robust, meaning learners retain structured visual cues far more reliably.',
      },
      {
        title: isNepali ? 'कार्यकारी कार्य र कार्य अनुक्रम (Sequencing)' : 'Executive Dysfunction & Task Sequencing',
        desc: isNepali
          ? 'दैनिक आत्मनिर्भरताका लागि संज्ञानात्मक लचकता, कार्यस्मरण, र कार्य सुरु गर्ने क्षमता (Task Initiation) चाहिन्छ। बाह्य दृश्य ढाँचाविना सरसफाइ वा शैक्षिक दिनचर्याका चरणहरू मिलाउन खोज्दा मस्तिष्कमा अत्यधिक भार पर्छ।'
          : 'Developing self-directed routines requires cognitive flexibility, working memory, and initiation. Without external scaffolding, sequencing the steps of self-care or academic routines induces cognitive overload.',
      },
      {
        title: isNepali ? 'अन्तर-इन्द्रिय संवेदनशीलता (Interoception Gaps)' : 'Interoception Gaps',
        desc: isNepali
          ? 'डाउन सिन्ड्रोम र अटिजम भएका धेरै सिकारुहरूमा पिसाब थैली भरिएको, भोक, चिसो, दुखाइ, वा मांसपेशीको तनाव जस्ता आन्तरिक शारीरिक संकेतहरू महसुस गर्ने क्षमतामा भिन्नता हुन्छ, जसलाई पूर्व-नियोजित दृश्य तालिका चाहिन्छ।'
          : 'Many learners experience subtle interoceptive variations, demonstrating reduced spontaneous awareness of bladder fullness, hunger, cold, pain, or muscle strain, necessitating scheduled check-ins.',
      },
    ],

    // Section 2: AT Continuum Table
    continuumTitle: isNepali ? 'सहायक प्रविधि (AT) स्पेक्ट्रम: ३ तह र ३ क्षेत्र' : 'The Assistive Technology (AT) Continuum',
    continuumIntro: isNepali
      ? 'सिकारुको शारीरिक मोटर प्रोफाइल, दृश्य क्षमता, र संज्ञानात्मक शैलीलाई उपयुक्त प्रविधि तहसँग मिलाउनु आवश्यक छ। यहाँ फाइन मोटर, बोली, र स्वायत्तताका लागि ३-तहको तुलना प्रस्तुत गरिएको छ:'
      : 'Selecting AT requires matching the learner\'s physical motor profile, visual acuity, and cognitive style to the right tier of technology across motor, speech, and ADL domains:',
    continuumRows: [
      {
        tier: isNepali ? 'लो-टेक (कम प्रविधि)' : 'Low-Tech',
        badge: 'Low-Tech',
        color: 'emerald',
        motor: isNepali
          ? 'त्रिकोणात्मक पेन्सिल ग्रिपहरू, २०-डिग्री स्ल्यान्ट बोर्डहरू, स्प्रिङ भएका कैंचीहरू, भारित (Weighted) कलमहरू'
          : 'Triangular pencil grips, 20-degree slant boards, loop/spring scissors, weighted pens',
        speech: isNepali
          ? 'लेमिनेटेड कोर-वर्ड बोर्डहरू, दृश्य पेसिङ बोर्डहरू (Visual Pacing Boards), विषयगत सङ्केत कार्डहरू'
          : 'Laminated core-word boards, visual pacing boards (tactile syllable strips), topic cue cards',
        autonomy: isNepali
          ? 'दृश्य समयतालिका पट्टीहरू, दैनिक जीवन सीप (ADL) कार्य विश्लेषण सरसफाइ कार्डहरू, रङ-सङ्केत गरिएका वार्डरोब बाकसहरू'
          : 'Visual schedule strips, task analysis ADL hygiene strips, color-coded wardrobe bins',
      },
      {
        tier: isNepali ? 'मिड-टेक (मध्यम प्रविधि)' : 'Mid-Tech',
        badge: 'Mid-Tech',
        color: 'blue',
        motor: isNepali
          ? 'ब्याट्री-संचालित स्विच-अनुकूलित कला सामग्री, ठूला कि भएका उच्च-कन्ट्रास्ट मेकानिकल किबोर्डहरू'
          : 'Battery-powered switch adapted art tools, large-key high-contrast mechanical keyboards',
        speech: isNepali
          ? 'बोल्ने बटनहरू (जस्तै BIGmack), बहु-सन्देश आवाज निकाल्ने यन्त्रहरू (GoTalk)'
          : 'Talking buttons (e.g., BIGmack), multi-message voice output devices (GoTalk)',
        autonomy: isNepali
          ? 'कम्पन हुने दृश्य प्रम्प्ट घडीहरू, डिजिटल काउन्टडाउन टाइमरहरू (Time Timer)'
          : 'Vibrating visual prompt watches, digital countdown timers (Time Timer)',
      },
      {
        tier: isNepali ? 'हाई-टेक (उच्च प्रविधि)' : 'High-Tech',
        badge: 'High-Tech',
        color: 'purple',
        motor: isNepali
          ? 'ट्याब्लेटका लागि किगार्डहरू (Keyguards), हातको बेल्ट भएका स्टाइलस कलमहरू, अनुकूलित टच संवेदनशीलता सेटिङहरू'
          : 'Keyguards for tablets, stylus pens with hand-straps, customized touch sensitivity settings',
        speech: isNepali
          ? 'डायनामिक AAC एपहरू (TouchChat with WordPower, Proloquo2Go), बोली पहिचान सफ्टवेयर'
          : 'Dynamic AAC apps (TouchChat with WordPower, Proloquo2Go), speech-recognition software',
        autonomy: isNepali
          ? 'डिजिटल अन्तरक्रियात्मक दिनचर्या एपहरू, दृश्य जीवन-सीप एपहरू, भिडियो-मोडलिङ प्लेटफर्महरू'
          : 'Digital interactive routines, visual life-skill apps, video-modeling platforms',
      },
    ],
    continuumNote: isNepali
      ? 'महत्त्वपूर्ण डिजाइन नोट: हाई-टेक ट्याब्लेट सधैं लो-टेक तालिकाभन्दा उत्कृष्ट हुँदैन। संवेदी थकान वा हात काँप्ने समस्या हुँदा ट्याब्लेटले तनाव दिन सक्छ। एक सन्तुलित दृष्टिकोणले हाई-टेक भाषिक विस्तारसँगै लो-टेक भरपर्दो ब्याकअप प्रदान गर्दछ।'
      : 'A balanced framework provides low-tech reliability alongside high-tech linguistic expansion. For a learner experiencing sensory overload or fine-motor tremors, an uncalibrated tablet screen can cause intense frustration.',

    // Section 3: Condition-Specific Adaptations
    conditionTitle: isNepali ? 'अवस्था-विशिष्ट व्यावहारिक अनुकूलनहरू' : 'Condition-Specific Practical Adaptations',

    // Down Syndrome & ID
    downTitle: isNepali ? 'डाउन सिन्ड्रोम तथा बौद्धिक अपाङ्गता (Down Syndrome & ID)' : 'Down Syndrome & Intellectual Disabilities (ID)',
    downPoints: [
      {
        title: isNepali ? 'एर्गोनोमिक लेखन तथा औंल्याउने ढाँचा' : 'Ergonomic Writing and Pointing',
        desc: isNepali
          ? 'नाडीलाई २० देखि ३० डिग्रीको ढलानमा राख्न स्ल्यान्ट बोर्डहरू प्रयोग गर्नुहोस्, जसले औंलाहरूलाई लेखन उपकरण समात्न वा स्क्रिन छुन प्राकृतिक स्थिरता दिन्छ। यसलाई मोटो र त्रिकोणात्मक कलमहरूसँग जोड्नुहोस्।'
          : 'Utilize slant boards at a 20-30 degree incline to promote wrist extension, which naturally stabilizes the fingers for grasping tools or pressing targets. Pair with broad-barrel triangular writing instruments.',
      },
      {
        title: isNepali ? 'बोली स्पष्टता र दृश्य पेसिङ बोर्ड' : 'Speech Intelligibility Scaffolding',
        desc: isNepali
          ? 'दृश्य पेसिङ बोर्डहरू (Visual Pacing Boards) प्रयोग गर्नुहोस् जहाँ सिकारुले बोलेको प्रत्येक अक्षर वा शब्दसँगै एउटा वृत्त छुन्छ। यसले बोल्ने गति नियन्त्रण गरी बोलीको स्पष्टता बढाउँछ।'
          : 'Implement visual pacing boards (tactile dot strips where the learner touches a circle for each syllable spoken) to regulate speech rate and enhance articulation clarity.',
      },
      {
        title: isNepali ? 'कार्य विश्लेषण र अडिटरी फिडब्याक' : 'Task Analysis and Auditory Feedback',
        desc: isNepali
          ? 'दैनिक जीवन सीपका लागि कार्य विश्लेषण (Task Analysis ADL) प्रयोग गर्नुहोस्। जस्तै दाँत माझ्ने कार्यलाई चित्रमय चरणहरूमा विभाजन गरी बोल्ने बटनबाट आवाज बजाउनुहोस् ("हातमा साबुन, अब मिच्नुहोस्")।'
          : 'Employ task analysis ADL workflows for daily living skills. Break activities into illustrated steps paired with immediate auditory confirmation (e.g., pressing a talking tile for "Soap on hands, now scrub").',
      },
      {
        title: isNepali ? 'ठोस फोटो र उच्च-पारदर्शिता सङ्केतहरू' : 'Concrete Icon Matching',
        desc: isNepali
          ? 'अमूर्त रेखाचित्रहरूको सट्टा वास्तविक तस्बिरहरू वा उच्च-पारदर्शिता भएका सङ्केतहरू (जस्तै PCS वा SymbolStix) प्रयोग गर्नुहोस्, जसले नयाँ शब्दावलीलाई वास्तविकतासँग जोड्न मद्दत गर्दछ।'
          : 'Use realistic photographs or high-transparency standardized symbols (such as PCS or SymbolStix) rather than abstract line drawings to anchor new vocabulary firmly in reality.',
      },
    ],
    taskWorkflowTitle: isNepali ? 'दाँत माझ्ने कार्य विश्लेषण कार्यप्रवाह (Task Analysis Example)' : 'Task Analysis Workflow: Toothbrushing',

    // ASD
    asdTitle: isNepali ? 'अटिजम स्पेक्ट्रम डिसअर्डर (Autism Spectrum Disorder - ASD)' : 'Autism Spectrum Disorder (ASD)',
    asdPoints: [
      {
        title: isNepali ? 'दृश्य पूर्वानुमानयोग्यता' : 'Visual Predictability',
        desc: isNepali
          ? 'अस्पष्ट अपेक्षाहरू हटाउन र परिवर्तनहरू सहज बनाउन स्पष्ट "पहिलो-त्यसपछि" (First-Then) बोर्डहरू र दैनिक दृश्य तालिका प्रयोग गर्नुहोस्।'
          : 'Structure transitions using clear first-then boards and visual day schedules to eliminate ambiguous expectations and anxiety.',
      },
      {
        title: isNepali ? 'कम-उत्तेजना संवेदी इन्टरफेसहरू' : 'Sensory-Safe Interfaces',
        desc: isNepali
          ? 'स्क्रिनका विचलित पार्ने एनिमेसनहरू बन्द गरी, अप्रिय आवाजहरू म्युट गरी, र नटल्किने म्याट स्क्रिन प्रोटेक्टर प्रयोग गरी कम-उत्तेजना (low-stimulus) प्रविधि कन्फिगर गर्नुहोस्।'
          : 'Configure low-stimulus special education tech by turning off distracting animations, muting abrasive operational noises, and applying non-glare matte screen protectors.',
      },
      {
        title: isNepali ? 'व्यापक र पूर्ण AAC प्रणाली' : 'Comprehensive Robust AAC',
        desc: isNepali
          ? 'नबोल्ने अटिजमका लागि AAC केवल माग गर्नमा मात्र सीमित हुनु हुँदैन; यसमा अस्वीकार गर्ने, भावना व्यक्त गर्ने, टिप्पणी गर्ने, र प्रश्न सोध्ने शब्दावली अनिवार्य हुनुपर्छ।'
          : 'Deploy robust assistive technology for nonverbal autism. AAC should never be limited to basic requests; it must include vocabulary for refusing, emotional labeling, sharing observations, and connecting socially.',
      },
    ],

    // CP
    cpTitle: isNepali ? 'सेरेब्रल पाल्सी (Cerebral Palsy - CP)' : 'Cerebral Palsy (CP)',
    cpPoints: [
      {
        title: isNepali ? 'वैकल्पिक पहुँच मार्गहरू' : 'Alternative Access Pathways',
        desc: isNepali
          ? 'प्रत्यक्ष स्पर्श गर्न नसक्ने विद्यार्थीहरूका लागि एकल वा दोहोरो स्विच स्क्यानिङ, हेड एरे, वा आँखा-हेरचाह (Eye-Gaze) प्रणालीहरू लागू गर्नुहोस्।'
          : 'Implement single- or dual-switch scanning interfaces, mechanical head arrays, or eye-gaze systems for students unable to utilize direct touch.',
      },
      {
        title: isNepali ? 'दृश्य रनवे ट्र्याकहरू' : 'Visual Runway Tracks',
        desc: isNepali
          ? 'बोर्ड वा स्क्रिनमा उच्च-कन्ट्रास्ट भएका चम्किला बाटोहरू बनाउनुहोस् जसले विद्यार्थीको आँखा वा हातलाई सीधा लक्ष्य छनोट क्षेत्रतर्फ निर्देशित गर्दछ।'
          : 'Use high-contrast visual runway tracks—colored paths on screens or boards that guide the student\'s gaze or physical hand directly toward target selection zones.',
      },
      {
        title: isNepali ? 'इन्टरफेस अनुकूलन र ड्वेल टाइम' : 'Interface Accommodations & Dwell Times',
        desc: isNepali
          ? 'आकस्मिक छोइने समस्या रोक्न मेकानिकल किगार्डहरू र अनैच्छिक चालहरूलाई फिल्टर गर्न ड्वेल टाइम (Dwell Time) सेटिङहरू मिलाउनुहोस्।'
          : 'Configure communication boards with broad tap zones, mechanical keyguards that prevent accidental adjacent activations, and customized dwell times to filter out involuntary tremors.',
      },
    ],

    // Section 4: Implementation Roadmap
    roadmapTitle: isNepali ? 'घर तथा कक्षाकोठा कार्यान्वयन रोडम्याप' : 'Home and Classroom Implementation Guide',
    roadmapIntro: isNepali
      ? 'प्रविधिको परित्याग र सिकारुमाथि अत्यधिक मानसिक दबाब हुन नदिन ६-चरणको व्यवस्थित कार्यान्वयन प्रक्रिया पछ्याउनुहोस्:'
      : 'Introducing new AT requires a systematic, low-stress implementation process to prevent device abandonment and learner overwhelm:',
    roadmapSteps: [
      {
        num: '01',
        title: isNepali ? 'एक उच्च-मूल्य प्राथमिकता दिनचर्या पहिचान गर्नुहोस्' : 'Identify One High-Value Priority Routine',
        desc: isNepali
          ? 'हताशा भइरहेको एउटै उत्प्रेरक दैनिक दिनचर्या छान्नुहोस् (जस्तै खाजा रोज्ने वा हात धुने)। बच्चाको पूरै दिन एकैपटक परिवर्तन गर्ने प्रयास नगर्नुहोस्।'
          : 'Select a single, intrinsically motivating daily routine where frustration currently occurs (e.g., choosing a preferred snack, washing hands). Avoid overhauling the child\'s entire day simultaneously.',
      },
      {
        num: '02',
        title: isNepali ? 'बहु-विधा विशेषज्ञ फिचर म्याचिङ गर्नुहोस्' : 'Conduct Multi-Disciplinary Feature Matching',
        desc: isNepali
          ? 'OT ले हातको बल र बसाइको मूल्याङ्कन गर्छ; SLP ले भाषा र बोली मोटर योजना हेर्छ; SPED शिक्षक र अभिभावकले वातावरण हेर्छन्। यी आवश्यकतासँग मिल्ने उपकरण छान्नुहोस्।'
          : 'Collaborate across the team: OT evaluates hand strength and seating; SLP evaluates linguistic organization and speech-motor planning; SPED teachers and parents assess home and school environments.',
      },
      {
        num: '03',
        title: isNepali ? 'एइडेड ल्याङ्ग्वेज इनपुट र मोडलिङ लागू गर्नुहोस्' : 'Implement Aided Language Input and Modeling',
        desc: isNepali
          ? 'शिक्षक र अभिभावकले कुरा गर्दा आफैं ती सङ्केत वा बटनहरू थिचेर देखाउनुपर्छ। बच्चाले तुरुन्तै दोहोर्याउनुपर्ने कुनै दबाब नदिनुहोस्।'
          : 'Educators and parents must actively use the assistive tool during everyday interactions. Point to symbols or activate buttons while speaking naturally without immediate demands on the child.',
      },
      {
        num: '04',
        title: isNepali ? 'लो-टेक ब्याकअप र निरन्तरता सुरक्षित गर्नुहोस्' : 'Embed Low-Tech Redundancies and Backups',
        desc: isNepali
          ? 'कुनै पनि हाई-टेक यन्त्रको हुबहु लेमिनेटेड पेपर प्रतिलिपि सधैं तयार राख्नुहोस् ताकि ब्याट्री सकिँदा वा बाहिर जाँदा पनि सञ्चार टुट्न नपाओस्।'
          : 'Always maintain an exact, laminated low-tech paper counterpart for any high-tech device. This ensures unbroken communication during battery depletion or outdoor activities.',
      },
      {
        num: '05',
        title: isNepali ? 'शुद्धता भन्दा कार्यात्मक स्वतन्त्रता ट्र्याक गर्नुहोस्' : 'Track Functional Independence Over Pure Accuracy',
        desc: isNepali
          ? 'मेकानिकल शुद्धताको सट्टा प्रम्प्टको तहमा आएको कमी (जस्तै हात समातेर गराउनुको सट्टा दृश्य इशाराले गर्नु) र स्वतःस्फूर्त सञ्चारलाई सफलता मान्नुहोस्।'
          : 'Quantify success by measuring the reduction in prompt levels (e.g., moving from hand-under-hand to an independent visual check) and self-initiated communications, rather than mechanical accuracy.',
      },
      {
        num: '06',
        title: isNepali ? 'विभिन्न वातावरणहरूमा निरन्तरता (Generalization)' : 'Ensure Cross-Setting Generalization',
        desc: isNepali
          ? 'घर, विशेष शिक्षा कक्षा, र समुदायमा एउटै AT सेटिङ, सङ्केत शब्दावली, र एर्गोनोमिक सहायताहरू प्रयोग गर्नुहोस् ताकि मोटर ढाँचाहरू बलियो बनून्।'
          : 'Ensure identical AT configurations, symbol vocabularies, and ergonomic supports travel seamlessly between home, special education settings, and community environments.',
      },
    ],

    // Section 5: FAQ
    faqTitle: isNepali ? 'बारम्बार सोधिने प्रश्नहरू (Frequently Asked Questions)' : 'Frequently Asked Questions (FAQ)',
    faqSubtitle: isNepali
      ? 'डाउन सिन्ड्रोम र विशेष शिक्षामा सहायक प्रविधि सम्बन्धी क्लिनिकल स्पष्टीकरणहरू'
      : 'Clinical evidence and practical guidance regarding Down syndrome assistive technology',
    faqs: [
      {
        q: isNepali
          ? 'के AAC ले डाउन सिन्ड्रोम वा अटिजम भएका सिकारुहरूमा बोली विकासलाई रोक्छ?'
          : 'Can AAC prevent speech development in learners with Down syndrome or autism?',
        a: isNepali
          ? 'बिल्कुलै रोक्दैन। विस्तृत शैक्षिक अनुसन्धानहरूले पुष्टि गरेका छन् कि AAC ले बोली विकासमा कुनै बाधा गर्दैन। बरु, यसले दृश्य सङ्केत, स्पष्ट आवाज, र शारीरिक कार्यलाई जोडेर सञ्चार हताशा घटाउँछ र भाषा उत्पादनका लागि स्नायु मार्गहरूलाई बलियो बनाउँछ।'
          : 'No. Comprehensive empirical research consistently confirms that AAC does not inhibit speech development. On the contrary, AAC frequently facilitates and accelerates spoken language. By pairing a visual symbol, a clear synthesized voice, and a physical action, AAC reduces communicative frustration and reinforces neural pathways for language.',
      },
      {
        q: isNepali
          ? 'दृश्य समयतालिकाले डाउन सिन्ड्रोमका विद्यार्थीहरूलाई दैनिक स्वायत्तता बनाउन कसरी मद्दत गर्छ?'
          : 'How do visual schedules help students with Down syndrome build daily autonomy?',
        a: isNepali
          ? 'दृश्य समयतालिकाले श्रव्य कार्यस्मरणमा भर पर्ने अमूर्त समय र क्रमका अवधारणाहरूलाई स्थायी दृश्य चिन्हमा रूपान्तरण गर्छ। यसले सिकारुहरूलाई वयस्कको निरन्तर मौखिक निर्देशनविना आफ्नै प्रगति हेर्न, परिवर्तनहरूको अनुमान गर्न, र अर्को कार्य आफैं सुरु गर्न सक्षम बनाउँछ।'
          : 'Visual schedules externalize temporal and sequential concepts that rely heavily on auditory working memory—an area of relative vulnerability in Down syndrome. By translating abstract verbal routines into permanent, sequential visual markers, schedules allow learners to track progress, anticipate transitions, and self-initiate subsequent tasks.',
      },
      {
        q: isNepali
          ? 'हाइपोटोनिया (कम मांसपेशी टोन) भएका विद्यार्थीहरूका लागि कुन फाइन-मोटर अनुकूलनहरू सबैभन्दा राम्रो हुन्छन्?'
          : 'What fine-motor adaptations work best for students with hypotonia?',
        a: isNepali
          ? 'नाडीलाई २० देखि ३० डिग्रीको कोणमा राख्ने स्ल्यान्ट बोर्डहरू, मोटो र त्रिकोणात्मक लेखन उपकरणहरू, प्रप्रियोसेप्टिभ फिडब्याक दिने भारित कलमहरू, र टचस्क्रिनमा औंला चिप्लन नदिने किगार्डहरू हाइपोटोनियामा अत्यधिक प्रभावकारी हुन्छन्।'
          : 'Students with hypotonia benefit substantially from physical tools that provide mechanical leverage and joint stabilization. High-impact adaptations include slant boards that position the wrist in functional extension, wide-barrel triangular writing instruments, weighted pens, and physical keyguards over touchscreens.',
      },
      {
        q: isNepali
          ? 'डाउन सिन्ड्रोमका लागि अनुकूलित सिकाइ उपकरणहरूले बोलीको स्पष्टता कसरी सुधार्छन्?'
          : 'How do adaptive learning tools for Down syndrome improve speech intelligibility?',
        a: isNepali
          ? 'दृश्य पेसिङ बोर्डहरूले बोल्ने गतिलाई बिस्तारै बनाई प्रत्येक अक्षरलाई छुट्टाछुट्टै उच्चारण गर्न सिकाउँछन्। साथै, आवाज निकाल्ने यन्त्रहरूले तत्काल सही श्रव्य मोडल प्रदान गरेर डिस्प्र्याक्सियाका कारण हुने सञ्चार अवरोधलाई कम गर्दछन्।'
          : 'Adaptive tools improve speech intelligibility by offering multi-modal scaffolding for speech motor execution. Visual pacing boards prompt the speaker to decelerate and articulate each syllable discretely. Simultaneously, speech-generating apps provide an immediate auditory model that validates learner intent.',
      },
      {
        q: isNepali
          ? 'सेरेब्रल पाल्सीका लागि सहायक प्रविधि डाउन सिन्ड्रोमका उपकरणहरूभन्दा कसरी फरक हुन्छ?'
          : 'How does assistive technology for cerebral palsy differ from tools for Down syndrome?',
        a: isNepali
          ? 'डाउन सिन्ड्रोमका लागि AT मुख्यतया संज्ञानात्मक ढाँचा, दृश्य अनुक्रम, र कम टोनका लागि ग्रिप अनुकूलनमा केन्द्रित हुन्छ भने, सेरेब्रल पाल्सीका लागि AT ले जटिल शारीरिक पहुँच अवरोधहरू (जस्तै आँखा-हेरचाह, स्विच स्क्यानिङ, ड्वेल टाइम, र काँप्ने चाल फिल्टर गर्ने सेटिङ) समाधान गर्नुपर्छ।'
          : 'While AT for Down syndrome largely emphasizes cognitive scaffolding, visual sequencing, and compensatory grips for low tone, AT for cerebral palsy primarily resolves complex physical access barriers. CP adaptations frequently require alternative access systems (eye gaze, switch scanning), dynamic positioning mounts, and fine-tuned dwell parameters.',
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
                  <span>{isNepali ? 'द्विभाषिक Talker AAC' : 'Bilingual Talker AAC'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Article Body */}
          <main className="lg:col-span-9 space-y-16">
            {/* 1. Foundations Section */}
            <section id="profile" className="space-y-6 scroll-mt-24">
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
                        <th className="py-3.5 px-4 sm:px-6 w-4/15">{isNepali ? 'फाइन मोटर सहायता' : 'Fine Motor'}</th>
                        <th className="py-3.5 px-4 sm:px-6 w-4/15">{isNepali ? 'बोली र भाषा सहायता' : 'Speech & Language'}</th>
                        <th className="py-3.5 px-4 sm:px-6 w-4/15">{isNepali ? 'दैनिक स्वायत्तता (ADL)' : 'Autonomy & ADL'}</th>
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
                            {row.autonomy}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Callout */}
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                {content.continuumNote}
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

              {/* Down Syndrome & ID Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#182330] border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  <Hand className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  {content.downTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                {/* Workflow Box */}
                <div className="mt-4 p-4 rounded-xl bg-primary-50/60 dark:bg-primary-950/30 border border-primary-100 dark:border-primary-900/40">
                  <div className="text-xs font-bold text-primary-900 dark:text-primary-300 uppercase tracking-wider mb-2">
                    {content.taskWorkflowTitle}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
                    <div className="p-2.5 rounded-lg bg-white dark:bg-[#182330] border border-primary-200 dark:border-primary-800 font-medium text-neutral-800 dark:text-neutral-200">
                      Step 1: {isNepali ? 'ब्रस उठाउनुहोस् (Pick brush)' : 'Pick up brush'}
                      <div className="text-[10px] text-primary-600 dark:text-primary-400 mt-0.5">Icon + Audio Cue</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white dark:bg-[#182330] border border-primary-200 dark:border-primary-800 font-medium text-neutral-800 dark:text-neutral-200">
                      Step 2: {isNepali ? 'मन्जन लगाउनुहोस् (Apply paste)' : 'Apply paste'}
                      <div className="text-[10px] text-primary-600 dark:text-primary-400 mt-0.5">Icon + Audio Cue</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white dark:bg-[#182330] border border-primary-200 dark:border-primary-800 font-medium text-neutral-800 dark:text-neutral-200">
                      Step 3: {isNepali ? 'अगाडि माझ्नुहोस् (Brush front)' : 'Brush front'}
                      <div className="text-[10px] text-primary-600 dark:text-primary-400 mt-0.5">Icon + Audio Cue</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800">
                  <Link
                    href="/tools/sentence-builder"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    <span>{isNepali ? 'हाम्रो नि:शुल्क वाक्य बनाउने र दृश्य AAC मोड्युलहरू प्रयोग गर्नुहोस्' : 'Explore our free bilingual visual tools for Down syndrome'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
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
