import React from 'react';
import type { Metadata } from 'next';
import VisualStructureGuideClient from '@/components/guides/VisualStructureGuideClient';

export const metadata: Metadata = {
  title: 'Visual Structure & Task Analysis for Executive Dysfunction',
  description:
    'Learn how visual structure and task analysis reduce executive dysfunction in autism, Down syndrome, ID, and CP using evidence-based AT tools.',
  keywords: [
    'visual structure and task analysis autism',
    'executive dysfunction autism supports',
    'task analysis ADL',
    'assistive technology for nonverbal autism',
    'adaptive learning tools for Down syndrome',
    'cerebral palsy communication boards',
    'low-stimulus special education tech',
    'visual schedules special education',
  ],
  alternates: {
    canonical: '/guides/visual-structure-and-task-analysis-autism',
  },
  openGraph: {
    title: 'Visual Structure & Task Analysis for Executive Dysfunction',
    description:
      'Learn how visual structure and task analysis reduce executive dysfunction in autism, Down syndrome, ID, and CP using evidence-based AT tools.',
    url: 'https://tech4neurodivergent.com/guides/visual-structure-and-task-analysis-autism',
    siteName: 'Tech4Neurodivergent',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visual Structure & Task Analysis for Executive Dysfunction',
    description:
      'Learn how visual structure and task analysis reduce executive dysfunction in autism, Down syndrome, ID, and CP using evidence-based AT tools.',
  },
};

export default function VisualStructureTaskAnalysisPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is task analysis in special education?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Task analysis is the systematic breakdown of a complex skill into smaller, observable, and teachable steps. A task analysis ADL breakdown might divide dressing into ten discrete actions. Each step is taught, practiced, and visually supported until the learner can complete the sequence with increasing independence.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do visual schedules reduce executive dysfunction in autism?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Visual schedules externalize the planning and sequencing demands that the autistic brain may struggle to manage internally. By making the day’s structure visible and predictable, visual schedules reduce working memory load, decrease transition anxiety, and support independent task initiation without requiring constant adult prompting.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can AAC prevent speech development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Peer-reviewed research consistently demonstrates that AAC does not inhibit spoken language development. AAC provides a reliable communication pathway that reduces frustration and may actually support speech emergence by modeling language structure and reducing communicative pressure.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do visual schedules help learners with Down syndrome?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Visual schedules compensate for relative weaknesses in auditory working memory by presenting information in a persistent, visual format. Learners can reference the schedule repeatedly without relying on a single verbal instruction, improving transitions, task completion, and self-regulation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What assistive technology is best for cerebral palsy task analysis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best tool depends on the learner’s motor access, vision, and cognitive profile. Options range from large-print photo strips and partner-assisted scanning to switch-accessible digital schedules and eye-gaze systems. A multidisciplinary evaluation by an OT, SLP, and assistive technology professional ensures the chosen tool matches the learner’s actual abilities.',
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Visual Structure & Task Analysis: Mitigating Executive Dysfunction in Autism',
    description:
      'Learn how visual structure and task analysis reduce executive dysfunction in autism, Down syndrome, ID, and CP using evidence-based AT tools.',
    audience: {
      '@type': 'Audience',
      audienceType: ['Parents', 'Special Education Teachers', 'Therapists', 'IEP Teams'],
    },
    about: [
      { '@type': 'Thing', name: 'Executive Dysfunction' },
      { '@type': 'Thing', name: 'Task Analysis' },
      { '@type': 'Thing', name: 'Visual Structure' },
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
      <VisualStructureGuideClient />
    </>
  );
}
