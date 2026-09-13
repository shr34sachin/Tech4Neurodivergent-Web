import React from 'react';
import type { Metadata } from 'next';
import TotalCommunicationGuideClient from '@/components/guides/TotalCommunicationGuideClient';

export const metadata: Metadata = {
  title: 'Total Communication & Mid-Tech Speech Aids Guide',
  description:
    'Bridge receptive-expressive gaps in Down syndrome, ASD, ID & CP with Total Communication and mid-tech speech aids. Educational SPED & OT/SLP guide.',
  keywords: [
    'total communication mid-tech speech aids',
    'adaptive learning tools for Down syndrome',
    'assistive technology for nonverbal autism',
    'cerebral palsy communication boards',
    'task analysis ADL',
    'low-stimulus special education tech',
    'Down syndrome motor speech scaffolding',
  ],
  alternates: {
    canonical: '/guides/total-communication-mid-tech-speech-aids',
  },
  openGraph: {
    title: 'Total Communication & Mid-Tech Speech Aids Guide',
    description:
      'Bridge receptive-expressive gaps in Down syndrome, ASD, ID & CP with Total Communication and mid-tech speech aids. Educational SPED & OT/SLP guide.',
    url: 'https://tech4neurodivergent.com/guides/total-communication-mid-tech-speech-aids',
    siteName: 'Tech4Neurodivergent',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Total Communication & Mid-Tech Speech Aids Guide',
    description:
      'Bridge receptive-expressive gaps in Down syndrome, ASD, ID & CP with Total Communication and mid-tech speech aids. Educational SPED & OT/SLP guide.',
  },
};

export default function TotalCommunicationPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Total Communication and why is it effective for Down syndrome?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Total Communication is a multi-modal approach that incorporates speech, sign language, gestures, visual picture symbols, and assistive voice-output devices. It is effective for Down syndrome because it bypasses oral-motor hypotonia and speech apraxia, allowing learners to understand and express language through visual, tactile, and gestural channels while spoken speech continues to develop.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can using mid-tech speech aids prevent a child from learning to speak?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Extensive educational research demonstrates that mid-tech speech aids and AAC do not impede speech development; they facilitate it. By providing an immediate auditory model and reducing the physical and communicative frustration of being misunderstood, speech aids support phonological processing, build language architecture, and encourage vocal exploration.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why choose a mid-tech speech aid over a high-tech iPad AAC app?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mid-tech speech aids offer key advantages for specific learners: they have static, non-changing button layouts that build physical motor memory, feature long battery life, resist drop damage, and present zero visual distractions (such as app switching or internet notifications). This makes them practical low-stimulus special education tech tools for learners easily overwhelmed by complex dynamic touchscreens.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do visual schedules and mid-tech tools support task analysis in ADLs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Visual schedules present the sequential steps of an activity permanently in the visual field, compensating for auditory working memory deficits. Combining visual schedules with mid-tech talking buttons in a task analysis ADL routine allows the learner to touch each step and hear an auditory cue, reinforcing procedural memory and independence during self-care tasks like handwashing or dressing.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does assistive technology accommodate speech apraxia in cerebral palsy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For individuals with speech apraxia and cerebral palsy, assistive technology provides alternative expressive pathways. High-contrast cerebral palsy communication boards, switch-scanning speech devices, and eye-gaze systems allow the user to select words using their most reliable motor movement (eyes, hands, head, or feet), completely bypassing the speech musculature.',
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Total Communication & Mid-Tech Speech Aids: Bridging Receptive and Expressive Gaps in Down Syndrome',
    description:
      'Bridge receptive-expressive gaps in Down syndrome, ASD, ID & CP with Total Communication and mid-tech speech aids. Educational SPED & OT/SLP guide.',
    audience: {
      '@type': 'Audience',
      audienceType: ['Speech-Language Pathologists', 'Special Educators', 'Occupational Therapists', 'Parents'],
    },
    about: [
      { '@type': 'Thing', name: 'Down Syndrome' },
      { '@type': 'Thing', name: 'Total Communication' },
      { '@type': 'Thing', name: 'Mid-Tech Speech Aids' },
      { '@type': 'Thing', name: 'Speech Apraxia' },
      { '@type': 'Thing', name: 'Assistive Technology' },
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
      <TotalCommunicationGuideClient />
    </>
  );
}
