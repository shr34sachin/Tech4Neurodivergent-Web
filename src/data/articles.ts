export interface ArticleAuthor {
  name: string;
  role: string;
  avatarInitials: string;
  bio: string;
}

export interface ArticleSection {
  title: string;
  content: string;
  nepaliTitle?: string;
  nepaliContent?: string;
}

export interface Article {
  slug: string;
  title: string;
  nepaliTitle: string;
  subtitle: string;
  nepaliSubtitle: string;
  category: 'Neuroscience & Research' | 'AAC & Speech' | 'Bilingual Education' | 'Occupational Therapy';
  nepaliCategory: string;
  publishedAt: string;
  nepaliPublishedAt: string;
  readingTime: string;
  nepaliReadingTime: string;
  author: ArticleAuthor;
  summary: string;
  nepaliSummary: string;
  sections: ArticleSection[];
  keyTakeaways: string[];
  nepaliKeyTakeaways: string[];
  references: string[];
  relatedModuleSlug: string;
}

export const articles: Article[] = [
  {
    slug: 'understanding-alexithymia-and-interoception',
    title: 'Understanding Alexithymia and Interoception in Autistic Children',
    nepaliTitle: 'अटिजम भएका बालबालिकामा एलेक्सिथिमिया र आन्तरिक शारीरिक अनुभूति',
    subtitle: 'Why children struggle to recognize their own emotions and how somatic visual supports prevent escalation.',
    nepaliSubtitle: 'बालबालिकाले आफ्ना भावना किन शब्दमा भन्न सक्दैनन् र दृश्य कार्डहरूले कसरी शान्त बनाउँछन्?',
    category: 'Neuroscience & Research',
    nepaliCategory: 'न्यूरोसाइन्स तथा अनुसन्धान',
    publishedAt: 'September 2026',
    nepaliPublishedAt: 'असोज २०८३',
    readingTime: '7 min read',
    nepaliReadingTime: '७ मिनेट पढाइ',
    author: {
      name: 'Educational Advisory Team',
      role: 'Pediatric OT & Neurodevelopmental Specialists',
      avatarInitials: 'CAB',
      bio: 'Composed of licensed pediatric occupational therapists and assistive technology consultants.'
    },
    summary: 'Explore the hidden connection between the eighth sensory system (interoception) and alexithymia, and learn how clinical 2-step visual strategies transform parent-child co-regulation.',
    nepaliSummary: 'शरीरको आठौं इन्द्रिय (इन्टरोसेप्शन) र भावना नबुझिने अवस्था (एलेक्सिथिमिया) बीचको सम्बन्ध र बालबालिकालाई शान्त राख्ने वैज्ञानिक उपायहरू।',
    keyTakeaways: [
      'Interoception is the internal neurological sense tracking physiological homeostasis (heart rate, hunger, bladder, respiration).',
      'Alexithymia affects an estimated 50% to 65% of autistic individuals, rendering verbal emotional labeling confusing and stressful.',
      'Meltdowns are rarely conscious behavioral defiance; they are often autonomic nervous system alarms triggered by unperceived somatic overload.',
      'Somatic-first mapping ("Is your heart pounding?") must always precede cognitive inquiry ("Why are you angry?").'
    ],
    nepaliKeyTakeaways: [
      'इन्टरोसेप्शन शरीरको भित्री चाल (मुटुको धड्कन, भोक, तिर्खा, सास) थाहा पाउने स्नायु प्रणाली हो।',
      'अटिजम भएका झण्डै ५०% देखि ६५% बालबालिकामा भावना शब्दमा व्यक्त गर्न नसक्ने एलेक्सिथिमिया हुन्छ।',
      'रिस देखाउनु वा रुनु जानीजानी गरेको होइन; यो स्नायु प्रणालीको अत्यधिक थकानको सङ्केत हो।',
      'किन रिसाएको भनेर सोध्नुभन्दा पहिले मुटु वा पेटको अवस्था सोध्नुहोस्।'
    ],
    sections: [
      {
        title: 'The Eighth Sensory System: What is Interoception?',
        nepaliTitle: 'आठौं इन्द्रिय: इन्टरोसेप्शन भनेको के हो?',
        content: `While most people learn about five senses, human physiology includes eight systems. Interoception tracks heart rate, respiration, gastrointestinal activity, and bladder urgency. Autistic individuals frequently experience atypical interoceptive signals, making emotional labeling confusing.`,
        nepaliContent: `हामीले सामान्यतया पाँच इन्द्रियबारे पढेका छौं। तर शरीरको आठौं इन्द्रिय इन्टरोसेप्शन हो जसले मुटुको धड्कन, भोक, र पेटको अवस्था मस्तिष्कमा पुर्याउँछ। अटिजम भएका बालबालिकामा यो सूचना स्पष्ट नहुँदा उनीहरू आत्तिने गर्छन्।`
      },
      {
        title: 'Alexithymia: When Feelings Lack Words',
        nepaliTitle: 'एलेक्सिथिमिया: जब भावना भन्न शब्द हुँदैन',
        content: `Alexithymia is not a lack of emotion. Autistic individuals feel emotions intensely. The disconnect lies between physiological arousal and linguistic labeling. Demanding verbal explanations during sensory stress escalates meltdowns.`,
        nepaliContent: `एलेक्सिथिमिया हुनु भनेको भावना नहुनु होइन। भावना धेरै गहिरो हुन्छ तर त्यसलाई शब्दमा भन्न सकिँदैन। यस्तो बेला जबरजस्ती सोध्दा बच्चा थप आत्तिन्छ।`
      },
      {
        title: 'Somatic-First Intervention Strategies',
        nepaliTitle: 'शारीरिक पहिचान पहिलो उपाय',
        content: `Replace abstract questions like "Are you angry?" with concrete somatic checks: "Does your heart feel fast?", "Are your fists tight?". Use visual cards to externalize sensations without verbal demands.`,
        nepaliContent: `"किन रिसाएको?" भन्नुको सट्टा "के मुटु छिटो चलेको छ?" भनी सोध्नुहोस्। चित्र कार्ड देखाएर समस्या छनोट गर्न दिनुहोस्।`
      }
    ],
    references: [
      'Mahler, K., et al. (2022). The relationship between interoception and emotion regulation in autistic individuals. Autism, 26(4), 890-903.',
      'Porges, S. W. (2017). The Pocket Guide to the Polyvagal Theory. W. W. Norton & Company.'
    ],
    relatedModuleSlug: 'emotion-regulation'
  },
  {
    slug: 'fitzgerald-key-aac-color-coding-guide',
    title: 'A Guide to the Fitzgerald Key Color-Coding System in AAC',
    nepaliTitle: 'AAC मा फिजराल्ड की रङ्ग-सङ्केत प्रणाली: एक पूर्ण मार्गदर्शिका',
    subtitle: 'How standardized visual syntax accelerates language acquisition, motor planning, and sentence construction.',
    nepaliSubtitle: 'रङ्ग-सङ्केत प्रणालीले कसरी बालबालिकालाई छिटो वाक्य बनाउन र कुरा गर्न सिकाउँछ?',
    category: 'AAC & Speech',
    nepaliCategory: 'सञ्चार तथा AAC',
    publishedAt: 'September 2026',
    nepaliPublishedAt: 'असोज २०८३',
    readingTime: '8 min read',
    nepaliReadingTime: '८ मिनेट पढाइ',
    author: {
      name: 'Speech & Language Therapy Team',
      role: 'AAC Specialists & Assistive Tech Engineers',
      avatarInitials: 'SLT',
      bio: 'Dedicated to implementing evidence-based augmentative communication systems for non-speaking learners.'
    },
    summary: 'Discover how the historic Fitzgerald Key color system organizes grammar visually, reduces working memory bottlenecks, and bridges sentence generation.',
    nepaliSummary: 'फिजराल्ड की रङ्ग प्रणालीले कसरी व्याकरणलाई दृश्य रङ्गमा बदल्छ र बोल्न नसक्ने बालबालिकालाई पूर्ण वाक्य बनाउन मद्दत गर्छ।',
    keyTakeaways: [
      'The Fitzgerald Key offloads syntactic grammatical rules from auditory memory into spatial-visual pathways.',
      'Standard colors: Yellow (People), Green (Actions), Orange (Nouns), Blue (Adjectives), Purple (Social).',
      'Consistent motor planning across dynamic AAC grids prevents communicators from relearning button locations.'
    ],
    nepaliKeyTakeaways: [
      'रङ्ग प्रणालीले व्याकरणको कठिन नियमलाई सरल रङ्गीन कार्डमा बदल्छ।',
      'मुख्य रङ्गहरू: पहेंलो (मानिस), हरियो (काम/क्रिया), सुन्तला (वस्तु), नीलो (विशेषण), बैजनी (सामाजिक)।',
      'बटनहरूको ठाउँ एउटै रहँदा बालबालिकाले औंलाको चालबाटै छिटो कुरा गर्न सक्छन्।'
    ],
    sections: [
      {
        title: 'The Universal Color Taxonomy',
        nepaliTitle: 'विश्वव्यापी रङ्ग मापदण्ड',
        content: `The Fitzgerald Key maps grammatical roles to consistent hues: Yellow anchors the subject, Green triggers the action, Orange specifies the object, Blue adds descriptions, and Purple handles greetings.`,
        nepaliContent: `पहेंलोले को मानिस, हरियोले के काम, सुन्तलाले के सामान, नीलोले कस्तो, र बैजनीले नमस्ते वा धन्यवाद जनाउँछ।`
      },
      {
        title: 'Motor Planning in AAC',
        nepaliTitle: 'मोटर प्लानिङ र निरन्तरता',
        content: `Consistent button placement builds muscle memory. When the communicator knows Yellow is always on the left, sentence generation becomes automatic and fast.`,
        nepaliContent: `जसरी हामी किबोर्ड नहेरी टाइप गर्न सक्छौं, त्यसरी नै बटनहरू नबदलिँदा बच्चाले छिटो-छिटो वाक्य बनाउन सिक्छ।`
      }
    ],
    references: [
      'Fitzgerald, E. (1949). Straight Language for the Deaf. The Catholic University of America.',
      'Light, J., & McNaughton, D. (2014). Communicative competence in AAC. AAC, 30(2), 99-115.'
    ],
    relatedModuleSlug: 'sentence-builder'
  },
  {
    slug: 'bilingual-assistive-tech-nepali-english',
    title: 'Bilingual Assistive Tech: Supporting Nepali and English Neurodivergent Learners',
    nepaliTitle: 'द्विभाषिक सहायक प्रविधि: नेपाली र अङ्ग्रेजी न्यूरोडाइभर्जेन्ट सिकारुहरूलाई सहयोग',
    subtitle: 'Overcoming the cultural gap in special education technology through authentic Devanagari localization.',
    nepaliSubtitle: 'नेपाली परिवेश सुहाउँदो देवनागरी लिपि र संस्कृति-मैत्री सहयोगी प्रविधिको महत्त्व।',
    category: 'Bilingual Education',
    nepaliCategory: 'द्विभाषिक विशेष शिक्षा',
    publishedAt: 'September 2026',
    nepaliPublishedAt: 'असोज २०८३',
    readingTime: '9 min read',
    nepaliReadingTime: '९ मिनेट पढाइ',
    author: {
      name: 'South Asian Assistive Tech Coalition',
      role: 'Cross-Cultural Special Education Advocates',
      avatarInitials: 'SAT',
      bio: 'Educators and clinicians advocating for regional language assistive technologies.'
    },
    summary: 'Why mainstream Western software fails bilingual neurodivergent children in South Asia, and how cultural localization fosters true inclusion.',
    nepaliSummary: 'विदेशी सफ्टवेयरले नेपाली बालबालिकालाई किन सन्तुष्ट पार्न सक्दैन र आफ्नै मातृभाषामा प्रविधि हुनुको महत्त्व।',
    keyTakeaways: [
      'Over 90% of special education software is designed exclusively for English-monolingual contexts.',
      'Stripping a neurodivergent child of their native language causes cultural isolation from grandparents and community.',
      'Devanagari script requires distinct motor and phonetic accommodations compared to Latin alphabets.'
    ],
    nepaliKeyTakeaways: [
      '९०% भन्दा बढी सफ्टवेयर अङ्ग्रेजी भाषामा मात्र सीमित छन्।',
      'मातृभाषा छुटाउँदा बालबालिका आफ्ना हजुरबुबा-हजुरआमा र समाजबाट टाढिन्छन्।',
      'नेपाली देवनागरी लिपि लेख्न र सिक्न छुट्टै वैज्ञानिक ट्र्याक आवश्यक पर्छ।'
    ],
    sections: [
      {
        title: 'The Monolingual Bias in Assistive Technology',
        nepaliTitle: 'एकल भाषाको समस्या र चुनौती',
        content: `Most assistive tools assume Western homes and English grammar. When families in Nepal are told to speak only English, children become isolated from their heritage. Dual-language support preserves family connection.`,
        nepaliContent: `नेपालमा धेरै अभिभावकलाई अङ्ग्रेजी मात्र बोल्न सल्लाह दिइन्छ जसले बच्चालाई समाजबाट एक्लो बनाउँछ। दुवै भाषा सँगै लैजाँदा बच्चाको आत्मविश्वास बढ्छ।`
      },
      {
        title: 'Devanagari Orthography & Motor Control',
        nepaliTitle: 'देवनागरी लिपि र अक्षर लेखन',
        content: `Devanagari is an abugida with horizontal sirorekha top bars and intricate curves. Children need generous motor runways tailored specifically to South Asian scripts.`,
        nepaliContent: `देवनागरीमा शिरोरेखा र विभिन्न मात्रा हुने हुनाले यसलाई सिकाउन फराकिलो र सहज ट्र्याक आवश्यक पर्छ।`
      }
    ],
    references: [
      'Grosjean, F. (2010). Bilingual: Life and Reality. Harvard University Press.',
      'Soto, G., & Yu, B. (2014). Expressive language therapy for bilingual children. LSHSS, 45(1), 58-71.'
    ],
    relatedModuleSlug: 'basic-concepts'
  },
  {
    slug: 'task-analysis-home-executive-dysfunction',
    title: 'Task Analysis at Home: Segmenting Daily Routines for Executive Dysfunction',
    nepaliTitle: 'घरमा कार्य विश्लेषण (Task Analysis): दैनिक क्रियाकलापलाई टुक्र्याउने विधि',
    subtitle: 'How backward and forward chaining empower autistic and ADHD children to master daily self-care routines.',
    nepaliSubtitle: 'हात धुने, दाँत माझ्ने जस्ता कामहरूलाई स-साना भागमा बाँडेर सिकाउने सजिलो तरिका।',
    category: 'Occupational Therapy',
    nepaliCategory: 'अकुपेशनल थेरापी',
    publishedAt: 'September 2026',
    nepaliPublishedAt: 'असोज २०८३',
    readingTime: '8 min read',
    nepaliReadingTime: '८ मिनेट पढाइ',
    author: {
      name: 'Occupational Therapy Advisory Panel',
      role: 'Sensory Integration & ADL Specialists',
      avatarInitials: 'OTA',
      bio: 'Occupational therapists and educators specializing in sensory processing and self-care scaffolding.'
    },
    summary: 'A step-by-step educational guide on breaking down complex daily self-care routines into manageable micro-tasks using chaining and visual cues.',
    nepaliSummary: 'दैनिक व्यक्तिगत सरसफाइका कामहरूलाई स-साना चरणमा बाँडेर बालबालिकालाई विनाझर्को सिकाउने अकुपेशनल थेरापी विधि।',
    keyTakeaways: [
      'Executive dysfunction impairs working memory and motor sequencing during routine self-care.',
      'Task Analysis deconstructs an overwhelming activity into discrete micro-steps.',
      'Backward Chaining allows the child to experience immediate success by independently finishing the final step first.'
    ],
    nepaliKeyTakeaways: [
      'एडीएचडी र अटिजममा धेरै चरण भएका काम बिर्सने समस्या हुन्छ।',
      'कार्य विश्लेषणले ठूलो कामलाई स-साना सजिला चरणमा विभाजन गर्दछ।',
      'पछाडिबाट सिकाउने विधि (Backward Chaining) मा अन्तिम काम बच्चालाई गर्न दिएर तत्काल खुसी र आत्मविश्वास जगाइन्छ।'
    ],
    sections: [
      {
        title: 'Hidden Demands of Simple Routines',
        nepaliTitle: 'सामान्य लाग्ने कामभित्रको जटिलता',
        content: `Brushing teeth requires sensory tolerance, bilateral coordination, and spatial planning. What seems simple to adults is a mountain of executive demands for neurodivergent children.`,
        nepaliContent: `दाँत माझ्नु वयस्कका लागि सजिलो भए पनि बच्चाका लागि धारा खोल्ने, पेस्ट लगाउने, मुख कुल्ला गर्ने गरी १२ वटा फरक कामको संयोजन हो।`
      },
      {
        title: 'Backward Chaining for Success',
        nepaliTitle: 'ब्याकवार्ड चेनिङ: अन्तिम कामबाट सुरु गर्ने विधि',
        content: `In backward chaining, the caregiver completes steps 1 through 5, prompting the child to perform the final step (drying hands with the towel). The child enjoys the immediate victory of finishing the routine.`,
        nepaliContent: `अभिभावकले सुरुका सबै काम गरिदिने र अन्तिम काम (जस्तै तौलियाले हात पुछ्ने) बच्चालाई गर्न लगाउने। यसले बच्चालाई काम पूरा गरेको ठूलो खुसी दिन्छ।`
      }
    ],
    references: [
      'Cooper, J. O., et al. (2020). Applied Behavior Analysis (3rd ed.). Pearson.',
      'Dunn, W. (2014). Sensory Profile 2: User\'s Manual. PsychCorp.'
    ],
    relatedModuleSlug: 'daily-living'
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((a) => a.slug);
}
