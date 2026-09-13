import React from 'react';
import type { Metadata } from 'next';
import AtSpectrumGuideClient from '@/components/guides/AtSpectrumGuideClient';

export const metadata: Metadata = {
  title: 'Low-, Mid- & High-Tech Assistive Technology',
  description:
    'Compare low-, mid-, and high-tech AT for autism, Down syndrome, intellectual disabilities, and cerebral palsy at home and school.',
  keywords: [
    'low-tech vs high-tech assistive technology',
    'assistive technology spectrum',
    'assistive technology for nonverbal autism',
    'adaptive learning tools for Down syndrome',
    'cerebral palsy communication boards',
    'task analysis ADL',
    'low-stimulus special education tech',
    'AAC in special education',
  ],
  alternates: {
    canonical: '/guides/low-tech-vs-high-tech-assistive-technology',
  },
  openGraph: {
    title: 'Low-, Mid- & High-Tech Assistive Technology',
    description:
      'Compare low-, mid-, and high-tech AT for autism, Down syndrome, intellectual disabilities, and cerebral palsy at home and school.',
    url: 'https://tech4neurodivergent.com/guides/low-tech-vs-high-tech-assistive-technology',
    siteName: 'Tech4Neurodivergent',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Low-, Mid- & High-Tech Assistive Technology',
    description:
      'Compare low-, mid-, and high-tech AT for autism, Down syndrome, intellectual disabilities, and cerebral palsy at home and school.',
  },
};

export default function AtSpectrumComparisonPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is low-tech or high-tech assistive technology better for special education?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Neither is universally better. The best option provides reliable access with manageable effort across the learner’s daily environments. Many students need a coordinated combination of low-, mid-, and high-tech tools.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can AAC prevent speech development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Research reviews have not found that AAC prevents speech development. AAC may support spoken language for some learners and provides an essential communication pathway for others. A child does not need to demonstrate cognitive, behavioral, or speech prerequisites before receiving AAC.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do visual schedules help learners with Down syndrome?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Visual schedules make information persistent instead of requiring the learner to remember a sequence of spoken directions. They can improve transitions, task initiation, completion, and independence. The format may progress from objects or photographs to symbols and written words.',
        },
      },
      {
        '@type': 'Question',
        name: 'What high-tech assistive technology helps students with cerebral palsy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Options include eye-gaze AAC, switch-scanning systems, alternative keyboards, speech-generating devices, word prediction, and accessible computer controls. Selection requires evaluation of positioning, motor reliability, vision, fatigue, language, and use across real environments.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should a student have a low-tech backup for high-tech AAC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. A paper core board or communication book protects access when a device is charging, damaged, unavailable, or unsafe near water. The backup should use familiar vocabulary and remain accessible without replacing the student’s more robust primary system.',
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Low-Tech vs. Mid-Tech vs. High-Tech: Navigating the AT Spectrum for Diverse Learners',
    description:
      'Compare low-, mid-, and high-tech AT for autism, Down syndrome, intellectual disabilities, and cerebral palsy at home and school.',
    audience: {
      '@type': 'Audience',
      audienceType: ['Parents', 'Special Education Teachers', 'Therapists', 'IEP Teams'],
    },
    about: [
      { '@type': 'Thing', name: 'Assistive Technology Spectrum' },
      { '@type': 'Thing', name: 'Low-Tech AT' },
      { '@type': 'Thing', name: 'High-Tech AT' },
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
      <AtSpectrumGuideClient />
    </>
  );
}
