export interface ModuleFAQ {
  question: string;
  answer: string;
  nepaliQuestion?: string;
  nepaliAnswer?: string;
}

export interface ModuleClinicalPillar {
  title: string;
  description: string;
  nepaliTitle?: string;
  nepaliDescription?: string;
}

export interface TherapyModule {
  id: string;
  slug: string;
  title: string;
  nepaliTitle: string;
  category: 'AAC & Communication' | 'Emotional Regulation' | 'Life Skills & Routines' | 'Cognitive & Academic';
  nepaliCategory: string;
  shortDescription: string;
  nepaliShortDescription: string;
  flutterRoute: string;
  ageRange: string;
  nepaliAgeRange: string;
  evidenceBase: string;
  nepaliEvidenceBase: string;
  targetSkills: string[];
  nepaliTargetSkills: string[];
  sensoryAccommodations: string[];
  nepaliSensoryAccommodations: string[];
  clinicalPillars: ModuleClinicalPillar[];
  overviewHtml: string;
  nepaliOverviewHtml: string;
  clinicalDeepDive: string;
  nepaliClinicalDeepDive: string;
  parentImplementationGuide: string[];
  nepaliParentImplementationGuide: string[];
  faqs: ModuleFAQ[];
  references: string[];
}

export const therapyModules: TherapyModule[] = [
  {
    id: 'emotion-regulation',
    slug: 'emotion-regulation',
    title: 'Emotion Regulation & Interoception',
    nepaliTitle: 'संवेग व्यवस्थापन र आन्तरिक शारीरिक अनुभूति',
    category: 'Emotional Regulation',
    nepaliCategory: 'संवेग व्यवस्थापन',
    shortDescription: 'Support interoceptive body awareness, alexithymia identification, and low-arousal de-escalation with visual 2-step scenario cards.',
    nepaliShortDescription: 'शरीरको भित्री चाल (मुटुको धड्कन, पेटको अवस्था) बुझ्न र शान्त हुने २-चरणे कार्डहरू प्रयोग गर्न सिकाउने वैज्ञानिक अभ्यास।',
    flutterRoute: '/emotion-regulation',
    ageRange: '4 to 16 years',
    nepaliAgeRange: '४ देखि १६ वर्ष',
    evidenceBase: 'Zones of Regulation (Kuypers), Polyvagal Theory (Porges), and Interoceptive Curriculum (Mahler).',
    nepaliEvidenceBase: 'जोन्स अफ रेगुलेसन, पोलिभगल सिद्धान्त, र इन्टरोसेप्टिभ थेरापी।',
    targetSkills: [
      'Interoceptive awareness (heartbeat, breath, stomach cues)',
      'Alexithymia symptom identification',
      'Cognitive reappraisal and co-regulation',
      'Proactive sensory de-escalation selection'
    ],
    nepaliTargetSkills: [
      'आन्तरिक शारीरिक सङ्केतहरू (मुटुको गति, श्वासप्रश्वास, पेटको दुखाइ) चिन्नु',
      'एलेक्सिथिमिया (भावना व्यक्त गर्न नसक्ने अवस्था) मा सजगता',
      'अभिभावक र शिक्षकसँग मिलेर शान्त हुने अभ्यास',
      'आत्तिनु अगावै उपयुक्त शान्त वातावरण छनोट'
    ],
    sensoryAccommodations: [
      'Soft pastel color zones with zero high-contrast strobe effects',
      'Auditory pacing controls with adjustable tempo',
      'No punitive time limits or countdown pressure',
      'Option to mute all environmental sounds with one touch'
    ],
    nepaliSensoryAccommodations: [
      'आँखा नबिझाउने नरम पेस्टल रङ्गहरू र शून्य झिम्किने एनिमेसन',
      'आवाजको गति मिलाउन मिल्ने शान्त अडियो नियन्त्रण',
      'कुनै तनावपूर्ण समयसीमा वा काउन्टडाउन नभएको',
      'एकै टचमा सम्पूर्ण वातावरण आवाज बन्द गर्न सकिने'
    ],
    clinicalPillars: [
      {
        title: 'Interoception First',
        nepaliTitle: 'पहिले शारीरिक अनुभूति',
        description: 'Before a child can label "anger" or "frustration", they must detect physiological markers such as muscle tension, elevated heart rate, or stomach tightness.',
        nepaliDescription: 'बच्चाले "रिस" वा "डर" नामकरण गर्नुअघि आफ्नो मुटुको धड्कन वा मांसपेशीको तनाव जस्ता शारीरिक सङ्केतहरू चिन्नु आवश्यक छ।'
      },
      {
        title: '2-Step Scenario Validation',
        nepaliTitle: '२-चरणे प्रमाणीकरण विधि',
        description: 'Decouples sensory overwhelm from behavioral misattribution. Step 1 identifies somatic state; Step 2 presents non-punitive regulation options.',
        nepaliDescription: 'व्यवहारको दोष दिनुको सट्टा पहिलो चरणमा शारीरिक अवस्था पहिचान गरिन्छ र दोस्रो चरणमा सुरक्षित शान्त उपायहरू छानिन्छ।'
      },
      {
        title: 'Bilingual Emotional Lexicon',
        nepaliTitle: 'द्विभाषिक संवेग शब्दावली',
        description: 'Provides simultaneous English and Nepali emotional terminology, validating cultural nuances in emotional expression and parental co-regulation.',
        nepaliDescription: 'नेपाली परिवेश सुहाउँदो शब्दावली (मन आत्तिनु, शरीर तातो हुनु) मार्फत भावनाको सम्मान र सह-नियमन गरिन्छ।'
      }
    ],
    overviewHtml: `
      <p>The <strong>Emotion Regulation</strong> interactive module is intentionally structured to bridge the gap between autonomic nervous system arousal and conscious cognitive recognition. Many autistic children, ADHDers, and individuals with sensory processing differences experience <em>alexithymia</em>—a condition characterized by difficulty identifying and describing subjective feelings.</p>
      <p>Traditional emotional education relies heavily on abstract questions such as "How are you feeling right now?". For a neurodivergent brain undergoing sensory saturation, this inquiry demands executive functioning that may be temporarily unavailable. Our module replaces verbal demands with concrete somatic anchor cards, visual pathways, and calming interactive tactile feedback loops.</p>
    `,
    nepaliOverviewHtml: `
      <p><strong>संवेग व्यवस्थापन</strong> मोड्युल अटिजम र एडीएचडी भएका बालबालिकालाई आफ्नो शरीरको भित्री संवेग बुझ्न मद्दत गर्ने वैज्ञानिक मञ्च हो। धेरै बालबालिकामा <em>एलेक्सिथिमिया</em> हुने गर्छ, जसले गर्दा उनीहरूलाई रिस, डर वा भोक शब्दमा व्यक्त गर्न गाह्रो हुन्छ।</p>
      <p>"तिमीलाई कस्तो लागिरहेको छ?" भनेर सोध्नुको सट्टा यस उपकरणले चित्र कार्डहरू मार्फत मुटुको धड्कन, पेटको अवस्था र श्वासप्रश्वास देखाएर सजिलै शान्त हुने उपाय छनोट गर्न मद्दत गर्दछ।</p>
    `,
    clinicalDeepDive: `
      ### Understanding Alexithymia and the Interoceptive Cascade

      Interoception represents the body's internal telemetry system—the eighth sensory system that perceives internal physiological status including respiratory rate, gastric motility, bladder pressure, muscle fatigue, and cardiovascular rhythms. Neurobiological research reveals that autistic individuals frequently present with atypical interoceptive processing.

      When alexithymia co-occurs with sensory processing differences, an escalating arousal state is experienced as a sudden, unpredictable behavioral explosion or internal shutdown. The child does not intentionally "act out"; rather, their autonomic nervous system shifts into sympathetic fight-or-flight or dorsal-vagal freeze without cognitive warning.

      ### Two-Step Scenario Architecture

      To build reliable somatic awareness without triggering cognitive defensive loops, the Emotion Regulation tool employs an evidence-based 2-step therapeutic framework:
      1. Somatic Mapping: Identifies physical sensation (heart racing, hands shaking, head hot).
      2. Low-Arousal Coping Selection: Offers sensory-safe co-regulation options (square-breathing, deep pressure, auditory rest).
    `,
    nepaliClinicalDeepDive: `
      ### एलेक्सिथिमिया र आन्तरिक शारीरिक अनुभूतिको वैज्ञानिक विश्लेषण

      इन्टरोसेप्शन (Interoception) शरीरको आठौं इन्द्रिय हो, जसले मुटुको गति, भोक, तिर्खा, र पेटको अवस्थाको सूचना मस्तिष्कमा पुर्याउँछ। अटिजम भएका बालबालिकामा यो सूचना ढिलो पुग्ने वा अत्यधिक रूपमा पुग्ने हुनसक्छ।

      जब बालबालिकाले आफ्नो शारीरिक असहजता बुझ्न सक्दैनन्, उनीहरूको स्नायु प्रणाली अचानक "फाइट अर फ्लाइट" (Fight or Flight) अवस्थामा पुग्छ। यसले गर्दा बाहिरबाट हेर्दा विनाकारण रोएको वा रिसाएको जस्तो देखिन्छ।

      ### २-चरणे समाधान विधि:
      १. **शारीरिक पहिचान:** बच्चालाई सिधै चित्रमा छुन लगाइन्छ—"के मुटु तीव्र गतिमा चलेको छ?", "के हात मुठ्ठी पारिएको छ?"
      २. **शान्त हुने उपाय छनोट:** ४-४-४ बाकस श्वासप्रश्वास, पर्खाल धकेल्ने अभ्यास, वा शान्त कोठामा विश्राम गर्ने विकल्प।
    `,
    parentImplementationGuide: [
      'Practice during baseline calm periods: Introduce scenarios when your child is in a regulated state, not during an active meltdown.',
      'Model interoception aloud: Say "My shoulders feel tight; I need to look at our calming card together."',
      'Respect non-verbal refusal: If the child pushes the device away during distress, respect their boundary.',
      'Bridge digital to physical: When your child selects the "Deep Pressure" card, physically provide the weighted lap pad.'
    ],
    nepaliParentImplementationGuide: [
      'शान्त अवस्थामा अभ्यास गर्नुहोस्: बच्चा रिसाएको बेला होइन, खुसी र शान्त भएको बेला कार्डहरूको प्रयोग सिकाउनुहोस्।',
      'आफैं नमुना बनेर देखाउनुहोस्: "मेरो काँध दुखेको छ, म पनि शान्त हुने कार्ड हेर्छु" भन्दै सँगै अभ्यास गर्नुहोस्।',
      'जबरजस्ती नगर्नुहोस्: यदि बच्चाले स्क्रिन हेर्न चाहेन भने दबाब नदिनुहोस्।',
      'वास्तविक जीवनसँग जोड्नुहोस्: कार्डमा गहिरो सास फेर्ने विकल्प छान्दा सँगै बसेर लामो सास फेर्नुहोस्।'
    ],
    faqs: [
      {
        question: 'How does this tool help a child who cannot verbally speak during meltdowns?',
        nepaliQuestion: 'बोल्न नसक्ने बालबालिकालाई यसले कसरी मद्दत गर्छ?',
        answer: 'During acute stress, the brain suppresses speech production. The interface operates entirely through visual pictograms and single-tap interactions, enabling non-verbal communication of somatic distress.',
        nepaliAnswer: 'अत्यधिक तनावमा मस्तिष्कको बोली उत्पादन केन्द्र बन्द हुन्छ। यस उपकरणमा केवल चित्र छोएर आफ्नो समस्या बताउन सकिने हुनाले बोल्न नपर्ने गरी बनाइएको छ।'
      }
    ],
    references: [
      'Mahler, K. (2019). The Interoception Curriculum. AAPC Publishing.',
      'Porges, S. W. (2011). The Polyvagal Theory. W. W. Norton & Company.',
      'Kuypers, L. M. (2011). The Zones of Regulation. Think Social Publishing.'
    ]
  },
  {
    id: 'sentence-builder',
    slug: 'sentence-builder',
    title: 'Sentence Builder AAC',
    nepaliTitle: 'वाक्य बनाउने AAC (सञ्चार प्रणाली)',
    category: 'AAC & Communication',
    nepaliCategory: 'सञ्चार तथा AAC',
    shortDescription: 'Build dynamic sentences using the standardized Fitzgerald Key color-coding system with instant auditory playback.',
    nepaliShortDescription: 'फिजराल्ड की रङ्ग-सङ्केत प्रणाली (पहेंलो: मानिस, हरियो: काम, सुन्तला: वस्तु) प्रयोग गरी वाक्य बनाउने र आवाज सुन्ने डिजिटल बोर्ड।',
    flutterRoute: '/sentence-builder',
    ageRange: '3 years through Adulthood',
    nepaliAgeRange: '३ वर्षदेखि माथि',
    evidenceBase: 'Fitzgerald Key Syntactic Model, Augmented Alternative Communication (ASHA Standards).',
    nepaliEvidenceBase: 'फिजराल्ड की व्याकरण ढाँचा, ASHA अन्तर्राष्ट्रिय AAC मापदण्ड।',
    targetSkills: [
      'Multi-word sentence generation (SVO and SOV syntax)',
      'Parts-of-speech categorization using visual syntax color grammar',
      'Bilingual grammatical sequencing',
      'Spontaneous generative functional communication'
    ],
    nepaliTargetSkills: [
      'धेरै शब्दहरू जोडेर पूर्ण वाक्य बनाउने सीप (म + पानी + खान्छु)',
      'रङ्गका आधारमा शब्दको प्रकार (नाम, क्रिया, विशेषण) छुट्याउने',
      'नेपाली र अङ्ग्रेजी व्याकरणअनुसार सही क्रम मिलाउने',
      'स्वतन्त्र अभिव्यक्ति र आफ्ना चाहना व्यक्त गर्ने क्षमता'
    ],
    sensoryAccommodations: [
      'High-contrast pastel Fitzgerald color borders meeting WCAG AAA',
      'Adjustable button dwell time to prevent accidental double taps',
      'Muted haptic feedback on card selection',
      'Clean speech synthesis output without robotic distortion'
    ],
    nepaliSensoryAccommodations: [
      'आँखा नदुखाउने स्पष्ट पेस्टल रङ्गका बोर्डरहरू',
      'गल्तीले दोहोरो थिचिनबाट रोक्ने बटन सेटिङ',
      'स्पष्ट र स्वाभाविक नेपाली/अङ्ग्रेजी आवाज',
      'कुनै अनावश्यक विज्ञापन वा झिलिमिलीबिनाको डिजाइन'
    ],
    clinicalPillars: [
      {
        title: 'Fitzgerald Key Standard',
        nepaliTitle: 'फिजराल्ड की मापदण्ड',
        description: 'Organizes parts of speech by intuitive colors (Yellow: Pronouns, Green: Actions, Orange: Nouns, Blue: Adjectives, Purple: Social).',
        nepaliDescription: 'पहेंलो (व्यक्ति/सर्वनाम), हरियो (काम/क्रिया), सुन्तला (वस्तु/नाम), नीलो (विशेषण), र बैजनी (अभिवादन) रङ्गमा आधारित।'
      },
      {
        title: 'Dual Syntax Engine',
        nepaliTitle: 'नेपाली व्याकरण अनुकूल (SOV)',
        description: 'Supports both English SVO ("I want water") and Nepali SOV ("म पानी खान्छु") sentence structures seamlessly.',
        nepaliDescription: 'अङ्ग्रेजी र नेपाली दुवै व्याकरणको स्वाभाविक क्रम मिलाउने स्मार्ट इन्जिन।'
      }
    ],
    overviewHtml: `<p><strong>Sentence Builder AAC</strong> eliminates grammatical confusion through the standardized Fitzgerald Key color system, empowering non-speaking communicators to express complex thoughts.</p>`,
    nepaliOverviewHtml: `<p><strong>वाक्य बनाउने AAC</strong> बोल्न कठिनाइ भएका बालबालिकालाई रङ्गीन कार्डहरू जोडेर आफ्नै आवाजमा कुरा गर्न सिकाउने आधुनिक सहयोगी प्रविधि हो।</p>`,
    clinicalDeepDive: `
      ### Visual Syntax & Motor Planning
      The Fitzgerald Key offloads syntactic cognitive burden into spatial memory:
      - Yellow: People / Pronouns (म, साथी)
      - Green: Actions / Verbs (खान्छु, जान्छु)
      - Orange: Objects / Nouns (पानी, किताब)
      - Blue: Modifiers / Adjectives (ठूलो, चिसो)
      - Purple: Social Pragmatics (नमस्ते, धन्यवाद)
    `,
    nepaliClinicalDeepDive: `
      ### दृश्य व्याकरण र मोटर मेमोरीको फाइदा
      बालबालिकाले अक्षर पढ्नुभन्दा धेरै पहिले रङ्ग चिन्न सक्छन्। 
      पहेंलो कार्डले "कसले?", हरियोले "के गर्ने?", र सुन्तलाले "के वस्तु?" जनाउँछ भन्ने बुझेपछि सजिलै पूर्ण वाक्य बन्दछ।
    `,
    parentImplementationGuide: [
      'Model without demanding speech: Sit next to your child and use the builder to narrate routines.',
      'Focus on Core Words first: Prioritize words like "want", "more", "stop", "go".',
      'Leave the device accessible 24/7: The device represents the childs voice.'
    ],
    nepaliParentImplementationGuide: [
      'आफैं बोलेर सिकाउनुहोस्: बच्चासँगै बसेर "म पानी खान्छु" थिचेर देखाउनुहोस्, तर बोल्नैपर्छ भनेर दबाब नदिनुहोस्।',
      'सुरुमा मुख्य शब्दहरू सिकाउनुहोस्: "चाहिन्छ", "अझै", "रोक्नुहोस्", "जाउँ" जस्ता शब्दहरू प्राथमिकतामा राख्नुहोस्।',
      'उपकरण सधैं पहुँचमा राख्नुहोस्: यो बच्चाको आवाज हो, कहिल्यै खोसेर नराख्नुहोस्।'
    ],
    faqs: [
      {
        question: 'Will using AAC prevent my child from learning verbal speech?',
        nepaliQuestion: 'AAC प्रयोग गर्दा बच्चाले आफ्नै मुखले बोल्न छाड्छ कि?',
        answer: 'Decades of research by ASHA prove that AAC reduces frustration and actually accelerates natural speech development.',
        nepaliAnswer: 'वैज्ञानिक अनुसन्धानले देखाएको छ कि AAC ले बोली बिगार्दैन, बरु बच्चाको निराशा घटाएर प्राकृतिक बोली फुटाउन थप मद्दत गर्दछ।'
      }
    ],
    references: [
      'ASHA. (2021). Augmentative and Alternative Communication Portal.',
      'Fitzgerald, E. (1949). Straight Language for the Deaf.'
    ]
  },
  {
    id: 'talker-aac',
    slug: 'talker-aac',
    title: 'Quick Talker AAC',
    nepaliTitle: 'द्रुत टकर AAC (आपतकालीन सञ्चार)',
    category: 'AAC & Communication',
    nepaliCategory: 'सञ्चार तथा AAC',
    shortDescription: 'High-urgency, 1-tap emergency and functional communication grid with custom voice output.',
    nepaliShortDescription: 'आपतकालीन अवस्था र दैनिक आवश्यकता तुरुन्तै व्यक्त गर्न १-टच ठूला बटन भएको द्रुत आवाज बोर्ड।',
    flutterRoute: '/talker-aac',
    ageRange: 'All Ages',
    nepaliAgeRange: 'सबै उमेर समूह',
    evidenceBase: 'Functional Communication Training (FCT), Rapid Access Protocols.',
    nepaliEvidenceBase: 'फङ्सनल कम्युनिकेसन तालिम (FCT)।',
    targetSkills: [
      'Emergency signaling (pain, bathroom, overload)',
      'Single-tap autonomy during speech apraxia',
      'Boundary setting ("Stop", "No", "Need Space")'
    ],
    nepaliTargetSkills: [
      'तुरुन्तै आवश्यकता बताउने (शौचालय, पानी, दुख्यो)',
      'बोली बन्द भएको बेला १-टचमा कुरा राख्ने',
      'व्यक्तिगत सीमा जनाउने ("रोक", "हुँदैन", "एक्लै बस्छु")'
    ],
    sensoryAccommodations: [
      'Extra-large touch targets (min 88x88px) for dyspraxia',
      'High contrast ratios with calming cream borders',
      'Instant voice output with zero lag'
    ],
    nepaliSensoryAccommodations: [
      'हात काम्ने बालबालिकाका लागि ठूला-ठूला बटनहरू',
      'आँखा नबिझाउने सफा र शान्त रङ्ग संयोजन',
      'तत्काल आवाज आउने शून्य ढिलाइ'
    ],
    clinicalPillars: [
      {
        title: 'Zero Latency',
        nepaliTitle: 'तत्काल आवाज',
        description: 'Single-tier direct selection grid for acute distress.',
        nepaliDescription: 'अप्ठ्यारो परिस्थितिमा सिधै १ टचमा आवाज आउने व्यवस्था।'
      }
    ],
    overviewHtml: `<p><strong>Quick Talker AAC</strong> provides a direct emergency voice grid for non-speaking individuals during acute distress.</p>`,
    nepaliOverviewHtml: `<p><strong>द्रुत टकर AAC</strong> आपतकालीन र अत्यावश्यक आवश्यकता १ टचमै बोल्ने सरल ग्रिड हो।</p>`,
    clinicalDeepDive: `Situational mutism and autistic burnout represent physical roadblocks in verbal motor speech. Quick Talker acts as an external emergency vocal cord.`,
    nepaliClinicalDeepDive: `अत्यधिक तनाव हुँदा बालबालिकाको बोली अड्किने गर्छ। यस अवस्थामा द्रुत टकरले तुरुन्तै आफ्ना आवश्यकता सुनाउन मद्दत गर्दछ।`,
    parentImplementationGuide: [
      'Bookmark on mobile phone home screen for outings.',
      'Pre-teach the Help and Stop buttons playfully.'
    ],
    nepaliParentImplementationGuide: [
      'घर बाहिर जाँदा मोबाइलको स्क्रिनमै तयारी अवस्थामा राख्नुहोस्।',
      '"मद्दत" र "रोक्नुहोस्" बटनहरू पहिले नै खेलाउँदै सिकाउनुहोस्।'
    ],
    faqs: [
      {
        question: 'Does this run offline?',
        nepaliQuestion: 'के यो इन्टरनेट बिना चल्छ?',
        answer: 'Yes, all speech tokens and icons cache locally on the device.',
        nepaliAnswer: 'हो, एकपटक खोलेपछि इन्टरनेट नभएको ठाउँमा पनि सजिलै चल्छ।'
      }
    ],
    references: ['Carr & Durand. (1985). Functional communication training.']
  },
  {
    id: 'daily-living',
    slug: 'daily-living',
    title: 'Daily Living Skills — ADL',
    nepaliTitle: 'दैनिक क्रियाकलाप (ADL कार्य विश्लेषण)',
    category: 'Life Skills & Routines',
    nepaliCategory: 'दैनिक जीवन सीप',
    shortDescription: 'Break down complex self-care activities into visual, step-by-step task analysis sequences.',
    nepaliShortDescription: 'हात धुने, दाँत माझ्ने, र शौचालय जाने जस्ता व्यक्तिगत सरसफाइका कामलाई स-साना चित्रमा सिकाउने विधि।',
    flutterRoute: '/daily-living',
    ageRange: '4 to 18+ years',
    nepaliAgeRange: '४ देखि १८ वर्ष',
    evidenceBase: 'Task Analysis, Backward & Forward Chaining, TEACCH.',
    nepaliEvidenceBase: 'कार्य विश्लेषण (Task Analysis) र ब्याकवार्ड चेनिङ।',
    targetSkills: [
      'Sequencing multistep self-care routines',
      'Executive function scaffolding',
      'Hygiene autonomy and self-monitoring'
    ],
    nepaliTargetSkills: [
      'सरसफाइका चरणहरू क्रमैसँग पूरा गर्ने सीप',
      'बिर्सने बानी कम गरी आत्मनिर्भर बन्ने',
      'हात धुने र दाँत माझ्ने सही बानी बसाल्ने'
    ],
    sensoryAccommodations: [
      'Photographic & stylized icons avoiding visual ambiguity',
      'Gentle acoustic completion chimes',
      'Step-counter checklist (e.g., Step 2 of 5)'
    ],
    nepaliSensoryAccommodations: [
      'स्पष्ट र बुझिने चित्रहरू',
      'काम सकिँदा बज्ने शान्त मधुर घण्टी',
      'कति काम बाँकी छ देखाउने सजिलो नम्बर ट्र्याकर'
    ],
    clinicalPillars: [
      {
        title: 'Micro-Step Analysis',
        nepaliTitle: 'स-साना चरणमा विभाजन',
        description: 'Complex routines are broken down into atomized steps.',
        nepaliDescription: 'हात धुने कामलाई धारा खोल्ने, साबुन लगाउने, मिच्ने गरी ८ चरणमा सिकाइन्छ।'
      }
    ],
    overviewHtml: `<p><strong>Daily Living Skills</strong> translates task analysis into visual step-by-step guides.</p>`,
    nepaliOverviewHtml: `<p><strong>दैनिक क्रियाकलाप</strong> मोड्युलले दैनिक सरसफाइका कामहरूलाई सजिलो बनाएर बालबालिकालाई आत्मनिर्भर बनाउँछ।</p>`,
    clinicalDeepDive: `Executive dysfunction impacts working memory during multi-step tasks. Task analysis offloads memory onto visual step trackers.`,
    nepaliClinicalDeepDive: `एडीएचडी वा अटिजम भएका बालबालिकाले कामको बीचको चरण बिर्सने गर्छन्। दृश्य कार्डले उनीहरूलाई अर्को के गर्ने भन्ने स्पष्ट देखाउँछ।`,
    parentImplementationGuide: [
      'Mount a tablet or visual chart adjacent to the sink.',
      'Fade verbal prompts: Point to the visual icon instead of nagging.'
    ],
    nepaliParentImplementationGuide: [
      'बाथरुम वा धारा नजिकै चित्र वा मोबाइल राख्नुहोस्।',
      'मुखले करकर गर्नुको सट्टा स्क्रिनको चित्र देखाएर आफैं गर्न प्रोत्साहन गर्नुहोस्।'
    ],
    faqs: [
      {
        question: 'How does it help children who rush through handwashing?',
        nepaliQuestion: 'हात छिटोछिटो धोएर भाग्ने बच्चालाई कसरी सिकाउने?',
        answer: 'An integrated 20-second gentle visual timer ensures thorough cleaning.',
        nepaliAnswer: 'यसमा भएको २० सेकेन्डको शान्त दृश्य टाइमरले साबुन मिच्ने सही समय सिकाउँछ।'
      }
    ],
    references: ['Cooper et al. (2020). Applied Behavior Analysis.']
  },
  {
    id: 'basic-concepts',
    slug: 'basic-concepts',
    title: 'Learn Basic Concepts',
    nepaliTitle: 'आधारभूत कुराहरू (रङ्ग, जनावर, फलफूल)',
    category: 'Cognitive & Academic',
    nepaliCategory: 'शैक्षिक तथा संज्ञानात्मक',
    shortDescription: 'Multi-sensory cognitive discrimination across 6 categories using Flashcard, Auditory, and Match modes.',
    nepaliShortDescription: 'रङ्ग, जनावर, फलफूल, तरकारी, अङ्गहरू, र सवारी साधनहरू शान्त वातावरणमा सिक्ने ६ वटा विधा।',
    flutterRoute: '/basic-concepts',
    ageRange: '2 to 8 years',
    nepaliAgeRange: '२ देखि ८ वर्ष',
    evidenceBase: 'Discrete Trial Training (DTT), Errorless Learning Principles.',
    nepaliEvidenceBase: 'डिसक्रिट ट्रायल ट्रेनिङ र त्रुटिरहित सिकाइ (Errorless Learning)।',
    targetSkills: [
      'Receptive and expressive identification across 6 categories',
      'Auditory-visual association',
      'Bilingual object naming'
    ],
    nepaliTargetSkills: [
      '६ वटा विधाका वस्तुहरू चिन्न र नाम भन्न सक्ने सीप',
      'सुनेको आवाज र आँखा अगाडिको चित्र जोड्ने',
      'नेपाली र अङ्ग्रेजी दुवै भाषामा नाम सिक्ने'
    ],
    sensoryAccommodations: [
      'Photographs against neutral cream backgrounds',
      'Zero penalty buzzers on incorrect selections',
      'Errorless learning scaffolding'
    ],
    nepaliSensoryAccommodations: [
      'कुनै तडकभडक बिनाका सफा वास्तविक तस्बिरहरू',
      'बिग्रिँदा डरलाग्दो आवाज नआउने शान्त प्रणाली',
      'मद्दत चाहिने बेला आफैं सही उत्तर चम्किने सुविधा'
    ],
    clinicalPillars: [
      {
        title: 'Tri-Modal Learning',
        nepaliTitle: 'तीन फरक सिकाइ मोड',
        description: 'Flashcard Exploration, Auditory Discrimination, and Interactive Matching.',
        nepaliDescription: 'फ्ल्यासकार्ड, आवाज सुनेर चिन्ने, र जोडा मिलाउने ३ फरक अभ्यास।'
      }
    ],
    overviewHtml: `<p><strong>Learn Basic Concepts</strong> delivers a calm, distraction-free environment for cognitive category acquisition.</p>`,
    nepaliOverviewHtml: `<p><strong>आधारभूत कुराहरू</strong> मोड्युलले प्रारम्भिक उमेरका बालबालिकालाई आधारभूत वस्तु र अवधारणाहरू सिकाउँछ।</p>`,
    clinicalDeepDive: `Conventional apps overload children with background music. Our module isolates the object on a calm canvas.`,
    nepaliClinicalDeepDive: `अनावश्यक कार्टुन र चर्को सङ्गीत नराखी सफा तस्बिर मात्र प्रयोग गरिएको छ जसले ध्यान केन्द्रित गर्न सघाउँछ।`,
    parentImplementationGuide: [
      'Start in Flashcard Mode before testing.',
      'Generalize with real kitchen items (apples, bananas).'
    ],
    nepaliParentImplementationGuide: [
      'सुरुमा फ्ल्यासकार्ड मोडमा स्वतन्त्र हेर्न दिनुहोस्।',
      'घरको भान्सामा भएका वास्तविक स्याउ र केरा देखाएर सँगै अभ्यास गराउनुहोस्।'
    ],
    faqs: [
      {
        question: 'Why are there no animated cartoons?',
        nepaliQuestion: 'यसमा कार्टुन किन राखिएको छैन?',
        answer: 'Realistic photographs support direct real-world recognition without perceptual distortion.',
        nepaliAnswer: 'वास्तविक तस्बिरले बच्चालाई घर र समाजमा भएका सामान सिधै चिन्न सजिलो बनाउँछ।'
      }
    ],
    references: ['Mueller et al. (2007). Errorless learning.']
  },
  {
    id: 'visual-schedule',
    slug: 'visual-schedule',
    title: 'Daily Visual Schedule',
    nepaliTitle: 'दैनिक तालिका (दृश्य कार्ययोजना)',
    category: 'Life Skills & Routines',
    nepaliCategory: 'दैनिक जीवन सीप',
    shortDescription: 'Mitigate transition anxiety and executive dysfunction with customizable Morning, Afternoon, and Evening swimlanes.',
    nepaliShortDescription: 'बिहान, दिउँसो र बेलुकीको कार्यतालिका बनाएर बालबालिकाको आत्तिने बानी कम गर्ने दृश्य योजना।',
    flutterRoute: '/visual-schedule',
    ageRange: 'All Ages',
    nepaliAgeRange: 'सबै उमेर समूह',
    evidenceBase: 'TEACCH Structured Teaching Methodology, Visual Priming.',
    nepaliEvidenceBase: 'TEACCH विधि र दृश्य समय व्यवस्थापन।',
    targetSkills: [
      'Transition anxiety reduction',
      'Visual time comprehension',
      'Independent routine completion',
      'First-Then behavioral understanding'
    ],
    nepaliTargetSkills: [
      'एक कामबाट अर्को काममा जाँदा हुने छटपटी घटाउने',
      'समय र कामको क्रम बुझ्ने क्षमता',
      'आफ्नो तालिका आफैं हेरेर काम सक्ने आत्मनिर्भरता',
      '"पहिले यो, अनि त्यो" को नियम बुझ्ने'
    ],
    sensoryAccommodations: [
      'Muted color-coded swimlanes (Morning, Afternoon, Evening)',
      'Smooth drag-and-drop mechanics',
      'Visual countdown timer bar'
    ],
    nepaliSensoryAccommodations: [
      'बिहान, दिउँसो र साँझका लागि छुट्टाछुट्टै शान्त रङ्गका खण्डहरू',
      'सजिलै तानेर मिलाउन मिल्ने ड्र्याग-एन्ड-ड्रप',
      'तनावमुक्त पानी भरिने दृश्य टाइमर'
    ],
    clinicalPillars: [
      {
        title: 'Temporal Predictability',
        nepaliTitle: 'समयको पूर्वअनुमान',
        description: 'Visualizing tasks reduces amygdala-driven fight-or-flight anxiety.',
        nepaliDescription: 'अर्को काम के आउँदैछ भन्ने पहिले नै थाहा पाउँदा बच्चा आत्तिँदैन।'
      }
    ],
    overviewHtml: `<p><strong>Daily Visual Schedule</strong> implements structured teaching to eliminate transition meltdowns.</p>`,
    nepaliOverviewHtml: `<p><strong>दैनिक तालिका</strong> ले बालबालिकाको दिनचर्यालाई व्यवस्थित बनाएर घरको वातावरण शान्त बनाउँछ।</p>`,
    clinicalDeepDive: `Transition meltdowns occur when a child cannot predict what demands follow a preferred activity. Schedules restore safety.`,
    nepaliClinicalDeepDive: `एउटा खेल छोडेर पढ्न वा खाना खान जाँदा बच्चा रुने गर्छ। तालिकाले उसलाई फेरि कहिले खेल्न पाइन्छ भन्ने भरोसा दिन्छ।`,
    parentImplementationGuide: [
      'Review together every morning.',
      'Let the child check off completed items.'
    ],
    nepaliParentImplementationGuide: [
      'हरेक बिहान चिया खाँदै बच्चासँगै तालिका मिलाउनुहोस्।',
      'काम सकिएपछि बच्चा आफैंलाई "सकियो" मा चिन्ह लगाउन दिनुहोस्।'
    ],
    faqs: [
      {
        question: 'What if my child refuses the schedule?',
        nepaliQuestion: 'बच्चाले तालिका मान्न मानेन भने के गर्ने?',
        answer: 'Check that preferred activities and sensory breaks balance non-preferred demands.',
        nepaliAnswer: 'लगातार गाह्रो काम मात्र नराखी बीचबीचमा आराम र रमाइलो गर्ने समय पनि राख्नुहोस्।'
      }
    ],
    references: ['Mesibov et al. (2004). The TEACCH Approach.']
  },
  {
    id: 'social-stories',
    slug: 'social-stories',
    title: 'Social Stories & Perspective Taking',
    nepaliTitle: 'सामाजिक कथा र परिस्थिति बोध',
    category: 'Cognitive & Academic',
    nepaliCategory: 'शैक्षिक तथा सामाजिक',
    shortDescription: 'Evidence-based Carol Gray Social Story™ architecture clarifying social expectations, perspective-taking, and safety routines.',
    nepaliShortDescription: 'पालो पर्खने, डाक्टरकहाँ जाने, र कपाल काट्ने जस्ता सामाजिक परिस्थितिका लागि तयार गर्ने सचित्र कथाहरू।',
    flutterRoute: '/social-stories',
    ageRange: '4 to 14 years',
    nepaliAgeRange: '४ देखि १४ वर्ष',
    evidenceBase: 'Carol Gray Social Stories™ 10.3 Criteria.',
    nepaliEvidenceBase: 'क्यारोल ग्रे सामाजिक कथा मापदण्ड।',
    targetSkills: [
      'Theory of Mind and peer perspective-taking',
      'Preparation for novel community events (Dentist, Haircut)',
      'Understanding unspoken social conventions'
    ],
    nepaliTargetSkills: [
      'अरूको विचार र भावना बुझ्ने क्षमता',
      'नयाँ ठाउँ (अस्पताल, कपाल काट्ने ठाउँ) जाँदा नडराउने',
      'सामाजिक नियमहरू सजिलै सिक्ने'
    ],
    sensoryAccommodations: [
      'Distraction-free page-turn layouts with one concept per page',
      'Muted pastel backgrounds supporting sustained reading',
      'Dual-voice audio narration'
    ],
    nepaliSensoryAccommodations: [
      'एक पटकमा एउटा मात्र कुरा देखिने सफा पाना',
      'आँखा नथाक्ने शान्त पृष्ठभूमि',
      'सुमधुर आवाजमा कथा वाचन'
    ],
    clinicalPillars: [
      {
        title: 'Carol Gray Ratio',
        nepaliTitle: 'सहानुभूतिपूर्ण कथा संरचना',
        description: '2 to 5 descriptive and perspective sentences for every 1 directive sentence.',
        nepaliDescription: 'आदेश दिनुको सट्टा परिस्थिति र अरूको भावना बुझाउन जोड दिइन्छ।'
      }
    ],
    overviewHtml: `<p><strong>Social Stories</strong> prepare neurodivergent children for novel social situations with empathy and validation.</p>`,
    nepaliOverviewHtml: `<p><strong>सामाजिक कथा</strong> ले अप्ठ्यारो परिस्थितिमा बच्चालाई सुरक्षित र आत्मविश्वासी बनाउन मद्दत गर्दछ।</p>`,
    clinicalDeepDive: `Stories explain the thoughts and feelings behind social actions rather than enforcing rigid compliance.`,
    nepaliClinicalDeepDive: `नियम लाद्नुको सट्टा अरूले के सोचिरहेका छन् र किन त्यसो भइरहेको छ भन्ने कुरा कथाले स्पष्ट पार्छ।`,
    parentImplementationGuide: [
      'Read before the event, never as punishment.',
      'Personalize with the childs name.'
    ],
    nepaliParentImplementationGuide: [
      'घटना हुनुभन्दा २-३ दिन अघि सुत्ने बेलामा कथा पढेर सुनाउनुहोस्।',
      'कथामा आफ्नै बच्चा र साथीहरूको नाम जोडेर रमाइलो बनाउनुहोस्।'
    ],
    faqs: [
      {
        question: 'Can stories be customized?',
        nepaliQuestion: 'के आफ्नै कथा थप्न मिल्छ?',
        answer: 'Yes, stories can be adjusted to fit local family contexts.',
        nepaliAnswer: 'हो, नेपाली चाडपर्व र घरायसी परिवेश अनुसार कथाहरू मिलाउन सकिन्छ।'
      }
    ],
    references: ['Gray, C. (2015). The New Social Story Book.']
  },
  {
    id: 'handwriting',
    slug: 'handwriting',
    title: 'Tracing & Handwriting Fine Motor',
    nepaliTitle: 'शैक्षिक सिकाइ र अक्षर लेखन (अ-ज्ञ, A-Z)',
    category: 'Cognitive & Academic',
    nepaliCategory: 'शैक्षिक तथा फाइन मोटर',
    shortDescription: 'Multi-sensory fine motor runway paths with 42px touch tolerance, bilingual alphabet phonetics, and real-time stroke feedback.',
    nepaliShortDescription: '४२ पिक्सेल फराकिलो ट्र्याकमा नेपाली (अ-ज्ञ) र अङ्ग्रेजी (A-Z) अक्षरहरू औंलाले कोर्दै सिक्ने रमाईलो अभ्यास।',
    flutterRoute: '/handwriting',
    ageRange: '3 to 10 years',
    nepaliAgeRange: '३ देखि १० वर्ष',
    evidenceBase: 'Multisensory Pre-Writing Framework, Devanagari Stroke Orthography.',
    nepaliEvidenceBase: 'मल्टी-सेन्सरि फाइन मोटर विधि र देवनागरी शिरोरेखा नियम।',
    targetSkills: [
      'Pencil grasp preparation and finger isolation',
      'Bilingual letter formation (English A-Z, Devanagari क-ज्ञ)',
      'Visual-spatial runway tracking and motor habits'
    ],
    nepaliTargetSkills: [
      'औंलाको नियन्त्रण र पेन्सिल समात्ने तयारी',
      'नेपाली र अङ्ग्रेजी अक्षरको सही दिशा कोर्ने बानी',
      'हात र आँखाको सन्तुलन (Hand-Eye Coordination)'
    ],
    sensoryAccommodations: [
      'Generous 42px runway track paths forgiving fine-motor tremors',
      'Dynamic visual particle sparkles',
      'Ascending harp/bell chords synchronized to stroke velocity'
    ],
    nepaliSensoryAccommodations: [
      'हात काम्ने बालबालिकाका लागि ४२ पिक्सेलको फराकिलो बाटो',
      'सफल हुँदा आउने मधुर धुन र ताराहरूको चमक',
      'बिग्रिँदा कुनै गल्तीको घण्टी नबज्ने शान्त वातावरण'
    ],
    clinicalPillars: [
      {
        title: 'Dyspraxia-Friendly Runway',
        nepaliTitle: 'डिस्प्राक्सिया-मैत्री फराकिलो ट्र्याक',
        description: 'Eliminates narrow line restrictions that cause hand fatigue.',
        nepaliDescription: 'साँघुरो धर्कोमा लेख्न नसक्ने बालबालिकाका लागि फराकिलो बाटो बनाइएको छ।'
      }
    ],
    overviewHtml: `<p><strong>Tracing & Handwriting</strong> introduces an ergonomic, multisensory canvas where children master letters without tears.</p>`,
    nepaliOverviewHtml: `<p><strong>अक्षर लेखन</strong> ले बालबालिकालाई नेपाली र अङ्ग्रेजी दुवै भाषाका अक्षरहरू सहजै लेख्न सिकाउँछ।</p>`,
    clinicalDeepDive: `Dyspraxia interferes with motor planning. Our 42-pixel runway builds positive neural motor habits.`,
    nepaliClinicalDeepDive: `हातको मांसपेशी कमजोर भएका बालबालिकालाई सही दिशामा अक्षर कोर्न यसले सिकाउँछ।`,
    parentImplementationGuide: [
      'Encourage stylus or index finger.',
      'Celebrate progress, not textbook perfection.'
    ],
    nepaliParentImplementationGuide: [
      'सुरुमा चोर औंलाले कोर्न लगाउनुहोस्, पछि मात्र स्टाइलस वा पेन्सिल दिनुहोस्।',
      'अक्षर पर्फेक्ट हुनुपर्छ भन्ने दबाब नदिई प्रयासको प्रशंसा गर्नुहोस्।'
    ],
    faqs: [
      {
        question: 'Does digital tracing help real paper writing?',
        nepaliQuestion: 'के स्क्रिनमा कोरेर कागजमा लेख्न मद्दत पुग्छ?',
        answer: 'Yes, establishing spatial letter directionality digitally directly transfers to paper.',
        nepaliAnswer: 'हो, डिजिटल माध्यममा अक्षरको दिशा सिकेपछि कापीमा लेख्न धेरै सजिलो हुन्छ।'
      }
    ],
    references: ['Feder & Majnemer. (2007). Handwriting development.']
  }
];

export function getModuleBySlug(slug: string): TherapyModule | undefined {
  return therapyModules.find((m) => m.slug === slug);
}

export function getAllModuleSlugs(): string[] {
  return therapyModules.map((m) => m.slug);
}
