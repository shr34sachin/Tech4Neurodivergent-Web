import React from 'react';
import type { Metadata } from 'next';
import FunctionalAcademicsGuideClient from '@/components/guides/FunctionalAcademicsGuideClient';

export const metadata: Metadata = {
  title: 'Functional Academics: Concrete Math & Literacy Tools | Tech4Neurodivergent',
  description:
    'Master functional academics for ID, Down syndrome, ASD, and CP. Discover concrete math, literacy tools, and assistive technology for cognitive scaffolding.',
  keywords: [
    'functional academics special education',
    'concrete math and literacy tools',
    'adaptive learning tools for Down syndrome',
    'assistive technology for nonverbal autism',
    'cerebral palsy communication boards',
    'task analysis ADL',
    'low-stimulus special education tech',
  ],
  alternates: {
    canonical: 'https://tech4neurodivergent.com/guides/functional-academics-special-education',
  },
  openGraph: {
    title: 'Functional Academics: Concrete Math & Literacy Tools',
    description:
      'Master functional academics for ID, Down syndrome, ASD, and CP. Discover concrete math, literacy tools, and assistive technology for cognitive scaffolding.',
    url: 'https://tech4neurodivergent.com/guides/functional-academics-special-education',
    type: 'article',
    siteName: 'Tech4Neurodivergent',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Functional Academics: Concrete Math & Literacy Tools',
    description:
      'Master functional academics for ID, Down syndrome, ASD, and CP. Discover concrete math, literacy tools, and assistive technology for cognitive scaffolding.',
  },
};

export default function FunctionalAcademicsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between traditional academics and functional academics?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Traditional academics emphasizes broad theoretical and conceptual milestones (such as algebraic factoring or literary analysis). Functional academics focuses specifically on practical, real-world math and literacy skills directly required for daily autonomy, personal safety, community access, and employment.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do concrete math manipulatives assist learners with Down syndrome and ID?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Concrete math manipulatives (such as TouchMath cards, Numicon shapes, and physical currency) transform abstract numerical concepts into tangible, visual-spatial representations, reducing the working memory load required to calculate and compare quantities.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can AAC support functional literacy for non-speaking autistic students?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. AAC systems provide access to on-screen keyboards, phonological word banks, and symbol-supported text, enabling non-speaking learners to participate in phonics instruction, answer comprehension questions, and build spelling skills without requiring spoken speech.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do visual schedules and task analysis connect to functional academic learning?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Visual schedules and task analysis apply functional academic skills directly to real-world routines. Reading a visual schedule reinforces left-to-right sequencing and time concepts, while task analysis turns abstract sequencing into practical daily routines.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can a student with severe cerebral palsy complete math assignments without writing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Students with severe cerebral palsy can complete math tasks using alternative access assistive technology, such as switch-accessible onscreen math software, eye-gaze systems, touchscreen tablets equipped with acrylic keyguards, or partner-assisted scanning.',
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Functional Academics: Concrete Math and Literacy Tools for Cognitive Scaffolding',
    description:
      'Master functional academics for ID, Down syndrome, ASD, and CP. Discover concrete math, literacy tools, and assistive technology for cognitive scaffolding.',
    audience: {
      '@type': 'Audience',
      audienceType: [
        'Special Education Teachers',
        'Occupational Therapists',
        'Speech-Language Pathologists',
        'Parents',
        'Assistive Technology Specialists',
      ],
    },
    about: [
      { '@type': 'Thing', name: 'Functional Academics' },
      { '@type': 'Thing', name: 'Intellectual Disabilities' },
      { '@type': 'Thing', name: 'Down Syndrome' },
      { '@type': 'Thing', name: 'Cognitive Scaffolding' },
      { '@type': 'Thing', name: 'Concrete-Representational-Abstract' },
      { '@type': 'Thing', name: 'TouchMath' },
      { '@type': 'Thing', name: 'Next-Dollar Strategy' },
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
      <FunctionalAcademicsGuideClient />
    </>
  );
}
