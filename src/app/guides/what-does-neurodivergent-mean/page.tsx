import React from 'react';
import type { Metadata } from 'next';
import NeurodivergentGuideClient from '@/components/guides/NeurodivergentGuideClient';

export const metadata: Metadata = {
  title: 'What Does Neurodivergent Mean? Educational Guide & AT Tools',
  description:
    'Understand neurodivergence across ASD, Down syndrome, ID & CP. Explore evidence-based assistive technology tools for home and classroom success.',
  keywords: [
    'what does it mean to be neurodivergent',
    'assistive technology for nonverbal autism',
    'adaptive learning tools for Down syndrome',
    'cerebral palsy communication boards',
    'task analysis ADL',
    'low-stimulus special education tech',
    'neurodivergent guide',
    'AAC communication devices',
  ],
  alternates: {
    canonical: '/guides/what-does-neurodivergent-mean',
  },
  openGraph: {
    title: 'What Does Neurodivergent Mean? Educational Guide & AT Tools',
    description:
      'Understand neurodivergence across ASD, Down syndrome, ID & CP. Explore evidence-based assistive technology tools for home and classroom success.',
    url: 'https://tech4neurodivergent.com/guides/what-does-neurodivergent-mean',
    siteName: 'Tech4Neurodivergent',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Does Neurodivergent Mean? Educational Guide & AT Tools',
    description:
      'Understand neurodivergence across ASD, Down syndrome, ID & CP. Explore evidence-based assistive technology tools for home and classroom success.',
  },
};

export default function WhatDoesNeurodivergentMeanPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can AAC prevent speech development in nonverbal autistic children?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Decades of peer-reviewed research confirm that AAC does not inhibit spoken language. In fact, AAC often supports speech development by reducing communicative pressure, providing a consistent motor plan for language, and giving the learner a meaningful reason to engage socially. Introducing AAC early—before frustration peaks—yields the strongest long-term outcomes.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do visual schedules help children with Down syndrome?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Visual schedules reduce reliance on auditory working memory, which is frequently a relative weakness in Down syndrome. By presenting the day’s sequence as concrete, picture-based steps, visual schedules lower anxiety, increase task initiation, and support smoother transitions between activities at home and school.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best AAC device for a child with cerebral palsy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There is no single "best" device. The ideal cerebral palsy communication board or AAC system depends on the learner’s visual acuity, motor access method (touch, switch, eye-gaze), cognitive profile, and daily environments. A comprehensive AAC evaluation by a licensed SLP and ATP (Assistive Technology Professional) is the essential first step.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are low-tech tools still effective in a high-tech classroom?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Low-tech tools such as PECS, choice boards, and visual strips are portable, durable, and require no charging—making them indispensable for field trips, pool activities, and emergency situations. The most robust AT plans integrate low-tech backups for every high-tech primary system.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know if an assistive technology tool is actually working?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Look for increases in independent initiation, reduced behavioral escalation during transitions, and greater participation in preferred activities—not just improved test scores. Share observational data with the IEP team and adjust tools based on the learner’s evolving needs, not a fixed timeline.',
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'What Does It Mean to Be Neurodivergent? A Educational and Modern Perspective',
    description:
      'Understand neurodivergence across ASD, Down syndrome, ID & CP. Explore evidence-based assistive technology tools for home and classroom success.',
    audience: {
      '@type': 'Audience',
      audienceType: ['Parents', 'Special Education Teachers', 'Therapists'],
    },
    about: [
      { '@type': 'Thing', name: 'Neurodiversity' },
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
      <NeurodivergentGuideClient />
    </>
  );
}
