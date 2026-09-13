import React from 'react';
import type { Metadata } from 'next';
import SpecialEdATGuideClient from '@/components/guides/SpecialEdATGuideClient';

export const metadata: Metadata = {
  title: 'Assistive Technology in Special Education Guide',
  description:
    'Explore practical AT that reduces sensory, communication, learning, and motor barriers for students with autism, Down syndrome, ID, and CP.',
  keywords: [
    'assistive technology in special education',
    'assistive technology for nonverbal autism',
    'adaptive learning tools for Down syndrome',
    'cerebral palsy communication boards',
    'task analysis ADL',
    'low-stimulus special education tech',
    'AAC in special education',
    'special education accommodations',
  ],
  alternates: {
    canonical: '/guides/assistive-technology-in-special-education',
  },
  openGraph: {
    title: 'Assistive Technology in Special Education Guide',
    description:
      'Explore practical AT that reduces sensory, communication, learning, and motor barriers for students with autism, Down syndrome, ID, and CP.',
    url: 'https://tech4neurodivergent.com/guides/assistive-technology-in-special-education',
    siteName: 'Tech4Neurodivergent',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Assistive Technology in Special Education Guide',
    description:
      'Explore practical AT that reduces sensory, communication, learning, and motor barriers for students with autism, Down syndrome, ID, and CP.',
  },
};

export default function AssistiveTechSpecialEdPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What qualifies as assistive technology in special education?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AT includes any item, equipment, software, or product system that maintains, improves, or increases a student’s functional abilities. It can be commercially purchased, adapted, or custom-made. AT services include evaluation, customization, training, and technical support.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can AAC prevent speech development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Research reviews have not found that AAC prevents speech development. AAC may support spoken language for some learners while providing an essential communication method for others. A student should not have to prove readiness or fail speech therapy before receiving AAC.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do visual schedules help students with Down syndrome?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Visual schedules reduce dependence on auditory working memory by making routines visible and persistent. They can support transitions, task initiation, sequencing, and independence. Photographs may be used initially, followed by symbols or written words as comprehension develops.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best communication device for a child with cerebral palsy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There is no universally best device. Selection depends on motor control, vision, hearing, language, seating, fatigue, and whether the learner accesses the system through touch, switches, partner-assisted scanning, or eye gaze. A multidisciplinary AAC evaluation and real-world device trial are recommended.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can an IEP team tell whether assistive technology is working?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The team should look for improved access, independence, communication, participation, and reduced effort—not merely device use. If progress occurs only with extensive prompting, or the tool increases fatigue or distress, the access method, interface, training, or activity demands should be adjusted.',
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Assistive Technology in Special Education: Removing Cognitive and Physical Barriers',
    description:
      'Explore practical AT that reduces sensory, communication, learning, and motor barriers for students with autism, Down syndrome, ID, and CP.',
    audience: {
      '@type': 'Audience',
      audienceType: ['Parents', 'Special Education Teachers', 'Therapists', 'IEP Teams'],
    },
    about: [
      { '@type': 'Thing', name: 'Assistive Technology' },
      { '@type': 'Thing', name: 'Special Education' },
      { '@type': 'Thing', name: 'Autism Spectrum Disorder' },
      { '@type': 'Thing', name: 'Down Syndrome' },
      { '@type': 'Thing', name: 'Cerebral Palsy' },
      { '@type': 'Thing', name: 'Augmentative and Alternative Communication' },
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
      <SpecialEdATGuideClient />
    </>
  );
}
