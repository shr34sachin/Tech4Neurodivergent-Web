import React from 'react';
import type { Metadata } from 'next';
import FitzgeraldKeyGuideClient from '@/components/guides/FitzgeraldKeyGuideClient';

export const metadata: Metadata = {
  title: 'AAC & Fitzgerald Key Color-Coding Guide',
  description:
    'Learn how Fitzgerald Key color-coding organizes AAC vocabulary for nonspeaking learners with autism, Down syndrome, ID, and cerebral palsy.',
  keywords: [
    'AAC Fitzgerald Key color-coding',
    'assistive technology for nonverbal autism',
    'AAC color-coding system',
    'adaptive learning tools for Down syndrome',
    'cerebral palsy communication boards',
    'task analysis ADL',
    'low-stimulus special education tech',
    'AAC for gestural communicators',
  ],
  alternates: {
    canonical: '/guides/aac-fitzgerald-key-color-coding',
  },
  openGraph: {
    title: 'AAC & Fitzgerald Key Color-Coding Guide',
    description:
      'Learn how Fitzgerald Key color-coding organizes AAC vocabulary for nonspeaking learners with autism, Down syndrome, ID, and cerebral palsy.',
    url: 'https://tech4neurodivergent.com/guides/aac-fitzgerald-key-color-coding',
    siteName: 'Tech4Neurodivergent',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAC & Fitzgerald Key Color-Coding Guide',
    description:
      'Learn how Fitzgerald Key color-coding organizes AAC vocabulary for nonspeaking learners with autism, Down syndrome, ID, and cerebral palsy.',
  },
};

export default function FitzgeraldKeyGuidePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the Fitzgerald Key in AAC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Fitzgerald Key is a color-coding system that assigns a specific color to each grammatical category—yellow for pronouns, green for verbs, orange for nouns, white for adjectives, blue for prepositions, and pink for social words. It helps AAC users locate words faster and construct organized sentences by following a consistent visual pattern across their communication display.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can AAC prevent speech development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Decades of research confirm that AAC does not inhibit spoken language. AAC provides a reliable communication pathway that reduces frustration and may support speech emergence by modeling language structure. Introducing AAC early gives nonspeaking and gestural communicators immediate access to language while spoken skills develop at their own pace.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does my child need to understand grammar to use the Fitzgerald Key?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The learner does not need to know grammatical terminology. The color pattern functions as a navigational shortcut, not a grammar lesson. Over time, many learners internalize syntactic structure implicitly through repeated exposure to the color-organized layout, similar to how neurotypical children acquire grammar naturally.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do visual color-coded systems help learners with Down syndrome?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Color-coded AAC leverages the relative visual-spatial strengths common in Down syndrome while reducing the auditory working memory demands of constructing sentences. The consistent color pattern provides a predictable framework that supports vocabulary retrieval, sentence building, and task analysis ADL sequencing across daily routines.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the Fitzgerald Key be used with cerebral palsy communication boards?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The Fitzgerald Key can be adapted for any access method, including direct touch, switch scanning, and eye-gaze. The key consideration is ensuring that each color zone is large enough and positioned appropriately for the learner\'s motor abilities. A multidisciplinary AAC evaluation ensures the layout matches the learner\'s physical and cognitive profile.',
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'AAC & Fitzgerald Key Color-Coding: Supporting Non-Verbal and Gestural Communicators',
    description:
      'Learn how Fitzgerald Key color-coding organizes AAC vocabulary for nonspeaking learners with autism, Down syndrome, ID, and cerebral palsy.',
    audience: {
      '@type': 'Audience',
      audienceType: ['Parents', 'Speech-Language Pathologists', 'Special Education Teachers', 'Therapists'],
    },
    about: [
      { '@type': 'Thing', name: 'Fitzgerald Key' },
      { '@type': 'Thing', name: 'Augmentative and Alternative Communication' },
      { '@type': 'Thing', name: 'AAC Color Coding' },
      { '@type': 'Thing', name: 'Nonverbal Autism' },
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
      <FitzgeraldKeyGuideClient />
    </>
  );
}
