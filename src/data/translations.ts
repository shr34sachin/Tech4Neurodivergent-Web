export type TranslationKey =
  | 'siteTitle'
  | 'siteTagline'
  | 'skipToContent'
  | 'navTools'
  | 'navBlog'
  | 'navGuides'
  | 'navAbout'
  | 'navSupport'
  | 'launchApp'
  | 'launchTool'
  | 'clinicalGuide'
  | 'readGuide'
  | 'backToTools'
  | 'backToBlog'
  | 'allModules'
  | 'allArticles'
  | 'heroBadge'
  | 'heroTitle'
  | 'heroSubtitle'
  | 'heroCtaLaunch'
  | 'heroCtaBrowse'
  | 'freeOpenAccess'
  | 'lowStimulationUi'
  | 'bilingualTitle'
  | 'pillarsTitle'
  | 'pillarsSubtitle'
  | 'toolsTitle'
  | 'toolsSubtitle'
  | 'blogTitle'
  | 'blogSubtitle'
  | 'supportTitle'
  | 'supportSubtitle'
  | 'advertisement'
  | 'safeAdPlacement'
  | 'disclaimerTitle'
  | 'disclaimerText'
  | 'copyright'
  | 'privacy'
  | 'terms'
  | 'donateNow'
  | 'nepalWallets'
  | 'globalSupport'
  | 'ageTarget'
  | 'evidenceBase'
  | 'targetSkills'
  | 'sensoryAccommodations'
  | 'clinicalPillars'
  | 'implementationGuide'
  | 'faqs'
  | 'references'
  | 'readMore';

export const translations: Record<'en' | 'ne', Record<TranslationKey, string>> = {
  en: {
    siteTitle: 'Tech4Neurodivergent',
    siteTagline: 'Assistive Tech for Diverse Minds',
    skipToContent: 'Skip to main content',
    navTools: 'Supportive Web-Apps',
    navBlog: 'Practical Articles',
    navGuides: 'Guides',
    navAbout: 'Our Mission',
    navSupport: 'Support & Donate',
    launchApp: 'Launch App',
    launchTool: 'Launch Tool',
    clinicalGuide: 'Educational Guide',
    readGuide: 'Read Full Guide',
    backToTools: 'Back to All Tools',
    backToBlog: 'Back to All Articles',
    allModules: 'View All 8 Modules',
    allArticles: 'Explore All Articles',
    heroBadge: 'Evidence-Based Special Education & AAC Platform',
    heroTitle: 'Empowering Neurodivergent Minds Through Sensory-Safe Assistive Tech',
    heroSubtitle: 'An open-access platform engineered for autistic children, ADHDers, non-speaking communicators, and their families. Explore 8 sensory-friendly interactive supportive web-apps with zero ads and zero paywalls.',
    heroCtaLaunch: 'Launch Interactive Web App',
    heroCtaBrowse: 'Browse Educational Guides',
    freeOpenAccess: '100% Free & Open-Access',
    lowStimulationUi: 'WCAG AAA Low-Stimulation UI',
    bilingualTitle: 'English & Devanagari Bilingual',
    pillarsTitle: 'Our Educational & Pedagogical Pillars',
    pillarsSubtitle: 'Informed by evidence-based special education, assistive technology, and neurodiversity-affirming research.',
    toolsTitle: '8 Supportive Web-Apps',
    toolsSubtitle: 'Each module is backed by comprehensive parent guides, research citations, and direct access to the live interactive Flutter application.',
    blogTitle: 'Parent & Clinician Knowledgebase',
    blogSubtitle: 'Peer-reviewed strategies, AAC scaffolding principles, and cultural neurodiversity frameworks.',
    supportTitle: 'Keep Assistive Tools 100% Free & Open',
    supportSubtitle: 'Help us maintain free hosting, speech synthesis, and open-source tools for neurodivergent learners, families, and educators.',
    advertisement: 'Advertisement',
    safeAdPlacement: 'Sensory-Safe Ad Placement',
    disclaimerTitle: 'Medical & Therapeutic Notice',
    disclaimerText: 'The software tools, visual roadmaps, and educational articles provided on tech4neurodivergent.com are designed exclusively for educational, supplemental, and communication-scaffolding purposes. They do not constitute formal medical diagnosis or clinical treatment. Always consult with a licensed Speech-Language Pathologist, Occupational Therapist, or special education professional.',
    copyright: 'Tech4Neurodivergent. Designed with low-arousal, sensory-friendly standards.',
    privacy: 'Privacy Policy',
    terms: 'Disclaimer',
    donateNow: 'Support Our Mission',
    nepalWallets: 'Nepal Digital Wallets',
    globalSupport: 'Global Supporters',
    ageTarget: 'Age Target',
    evidenceBase: 'Evidence Base',
    targetSkills: 'Target Developmental Skills',
    sensoryAccommodations: 'Sensory & Low-Stimulation Accommodations',
    clinicalPillars: 'Educational Design Foundations',
    implementationGuide: 'Parent & Educator Implementation Protocol',
    faqs: 'Frequently Asked Questions',
    references: 'Scientific Literature & References',
    readMore: 'Read More',
  },
  ne: {
    siteTitle: 'Tech4Neurodivergent',
    siteTagline: 'विशेष सिकाइ तथा सञ्चार प्रविधि',
    skipToContent: 'मुख्य सामग्रीमा जानुहोस्',
    navTools: 'उपकरणहरू',
    navBlog: 'शैक्षिक लेखहरू',
    navGuides: 'मार्गदर्शन',
    navAbout: 'हाम्रो उद्देश्य',
    navSupport: 'सहयोग गर्नुहोस्',
    launchApp: 'एप सुरु गर्नुहोस्',
    launchTool: 'उपकरण खोल्नुहोस्',
    clinicalGuide: 'शैक्षिक निर्देशिका',
    readGuide: 'पूर्ण लेख पढ्नुहोस्',
    backToTools: 'सबै उपकरणहरूमा फर्कनुहोस्',
    backToBlog: 'सबै लेखहरूमा फर्कनुहोस्',
    allModules: 'सबै ८ मोड्युलहरू हेर्नुहोस्',
    allArticles: 'सबै लेखहरू खोज्नुहोस्',
    heroBadge: 'वैज्ञानिक विशेष शिक्षा तथा AAC मञ्च',
    heroTitle: 'सेन्सरि-मैत्री प्रविधिद्वारा न्यूरोडाइभर्जेन्ट सिकारुहरूको सशक्तीकरण',
    heroSubtitle: 'अटिजम, एडीएचडी, तथा सञ्चारमा भिन्नता भएका बालबालिका र परिवारका लागि निःशुल्क र खुला मञ्च। ८ वटा वैज्ञानिक विधिमा आधारित अन्तरक्रियात्मक सिकाइ उपकरणहरू प्रयोग गर्नुहोस्।',
    heroCtaLaunch: 'अन्तरक्रियात्मक वेब एप खोल्नुहोस्',
    heroCtaBrowse: '८ शैक्षिक निर्देशिकाहरू हेर्नुहोस्',
    freeOpenAccess: '१००% निःशुल्क र खुला पहुँच',
    lowStimulationUi: 'आँखा नबिझाउने शान्त डिजाइन (WCAG AAA)',
    bilingualTitle: 'नेपाली र अङ्ग्रेजी पूर्ण द्विभाषिक',
    pillarsTitle: 'हाम्रा मुख्य शैक्षिक आधारहरू',
    pillarsSubtitle: 'विशेष शिक्षा, सहायक प्रविधि, र न्यूरोडाइभर्सिटी अध्ययनमा आधारित व्यावहारिक सिद्धान्तहरू।',
    toolsTitle: '८ अन्तरक्रियात्मक सहयोगी वेब-एपहरू',
    toolsSubtitle: 'प्रत्येक मोड्युलमा विस्तृत अभिभावक निर्देशिका, वैज्ञानिक अनुसन्धान, र प्रत्यक्ष अन्तरक्रियात्मक अभ्यास समावेश छ।',
    blogTitle: 'अभिभावक तथा शिक्षकका लागि ज्ञान भण्डार',
    blogSubtitle: 'प्रमाणमा आधारित विधि, AAC सञ्चार सिद्धान्त, र व्यावहारिक सल्लाहहरू।',
    supportTitle: 'उपकरणहरूलाई सधैं निःशुल्क राख्न सहयोग गर्नुहोस्',
    supportSubtitle: 'निजी थेरापी लिन नसक्ने विपन्न परिवारका बालबालिकालाई निःशुल्क सेवा दिन तपाईंको सहयोग महत्त्वपूर्ण छ।',
    advertisement: 'विज्ञापन',
    safeAdPlacement: 'सेन्सरि-सुरक्षित विज्ञापन स्थान',
    disclaimerTitle: 'चिकित्सकीय तथा कानुनी सूचना',
    disclaimerText: 'यस वेबसाइटमा उपलब्ध सामग्री, दृश्य कार्डहरू र लेखहरू केवल शैक्षिक र सहयोगी प्रयोजनका लागि हुन्। यो कुनै चिकित्सक वा थेरापिस्टको व्यक्तिगत परीक्षण वा उपचारको विकल्प होइन। सधैं इजाजतपत्र प्राप्त विज्ञहरूसँग सल्लाह लिनुहोस्।',
    copyright: 'Tech4Neurodivergent. सेन्सरि-सुरक्षित शान्त वातावरणमा निर्मित।',
    privacy: 'गोपनीयता नीति',
    terms: 'सूचना तथा सर्तहरू',
    donateNow: 'सहयोग पठाउनुहोस्',
    nepalWallets: 'नेपाल डिजिटल वालेट (eSewa / Khalti)',
    globalSupport: 'अन्तर्राष्ट्रिय सहयोग',
    ageTarget: 'उमेर समूह',
    evidenceBase: 'वैज्ञानिक आधार',
    targetSkills: 'सिकाइने मुख्य सीपहरू',
    sensoryAccommodations: 'सेन्सरि र शान्त वातावरण सुविधा',
    clinicalPillars: 'शैक्षिक संरचनाका आधारहरू',
    implementationGuide: 'अभिभावक तथा शिक्षकका लागि कार्यविधि',
    faqs: 'बारम्बार सोधिने प्रश्नहरू',
    references: 'वैज्ञानिक अनुसन्धान तथा स्रोतहरू',
    readMore: 'थप पढ्नुहोस्',
  }
};
