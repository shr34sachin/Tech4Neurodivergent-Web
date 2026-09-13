import React from 'react';
import type { Metadata } from 'next';
import CognitiveFlashcardsGuideClient from '@/components/guides/CognitiveFlashcardsGuideClient';

export const metadata: Metadata = {
  title: 'Cognitive Accessibility: Multi-Sensory Flashcard Design',
  description:
    'Design accessible, multi-sensory digital flashcards and vocabulary aids for learners with autism, Down syndrome, ID, and cerebral palsy.',
  keywords: [
    'cognitive accessibility digital flashcards',
    'assistive technology for nonverbal autism',
    'adaptive learning tools for Down syndrome',
    'cerebral palsy communication boards',
    'task analysis ADL',
    'low-stimulus special education tech',
  ],
  alternates: {
    canonical: '/guides/cognitive-accessibility-digital-flashcards',
  },
  openGraph: {
    title: 'Cognitive Accessibility: Multi-Sensory Flashcard Design',
    description:
      'Design accessible, multi-sensory digital flashcards and vocabulary aids for learners with autism, Down syndrome, ID, and cerebral palsy.',
    url: 'https://tech4neurodivergent.com/guides/cognitive-accessibility-digital-flashcards',
    siteName: 'Tech4Neurodivergent',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cognitive Accessibility: Multi-Sensory Flashcard Design',
    description:
      'Design accessible, multi-sensory digital flashcards and vocabulary aids for learners with autism, Down syndrome, ID, and cerebral palsy.',
  },
};

export default function CognitiveFlashcardsGuidePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What makes a digital flashcard application "low-stimulus"?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A low-stimulus digital flashcard application eliminates distracting, non-instructional digital elements that trigger sensory overload. This includes removing timed countdown graphics, aggressive visual flashes, celebratory particle effects, looping background music, and pop-up reward ads, emphasizing clean iconography and predictable layouts.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do visual runway tracks assist learners with cerebral palsy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Visual runway tracks are high-contrast visual guiding lines embedded into software that direct attention from a central focal point to peripheral selection targets. For individuals with cerebral palsy navigating ocular-motor dyspraxia or CVI, these pathways reduce visual search effort and coordinate eye-gaze or reaching movements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can using multi-sensory digital vocabulary aids delay natural speech?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Empirical educational research consistently confirms that multi-sensory vocabulary tools do not hinder speech development; they actively support it. By providing simultaneous auditory speech models, concrete visual imagery, and reliable output, these tools reduce communicative frustration and reinforce phonological mapping in the brain.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I choose between photographs and standardized symbols on flashcards?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The decision depends on the learner\'s level of cognitive abstraction. Start with concrete, high-resolution photographs of the child\'s actual belongings for early developmental profiles. As consistent matching is demonstrated, transition to high-transparency standardized symbols (such as PCS or SymbolStix) to foster generalization.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do digital flashcards reinforce task analysis for activities of daily living (ADLs)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Digital flashcards support task analysis ADL routines by breaking complex multi-step self-care tasks into discrete, sequentially ordered visual cards. Learners interact with each step individually, receiving auditory reinforcement and visual verification before moving forward, significantly reducing working memory load.',
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Cognitive Accessibility: Designing Multi-Sensory Digital Flashcards & Vocabulary Aids',
    description:
      'Design accessible, multi-sensory digital flashcards and vocabulary aids for learners with autism, Down syndrome, ID, and cerebral palsy.',
    audience: {
      '@type': 'Audience',
      audienceType: ['Parents', 'Special Education Teachers', 'Speech-Language Pathologists', 'Occupational Therapists'],
    },
    about: [
      { '@type': 'Thing', name: 'Cognitive Accessibility' },
      { '@type': 'Thing', name: 'Multi-Sensory Flashcards' },
      { '@type': 'Thing', name: 'Dual Coding Theory' },
      { '@type': 'Thing', name: 'Assistive Technology' },
      { '@type': 'Thing', name: 'Autism Spectrum Disorder' },
      { '@type': 'Thing', name: 'Down Syndrome' },
      { '@type': 'Thing', name: 'Cerebral Palsy' },
    ],
    publisher: {
      '@type': 'Organization',
      name: 'Tech4Neurodivergent',
      url: 'https://tech4neurodivergent.com',
    },
    inLanguage: ['en', 'ne'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <CognitiveFlashcardsGuideClient />
    </>
  );
}
