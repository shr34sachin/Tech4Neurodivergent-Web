import React from 'react';
import type { Metadata } from 'next';
import InteroceptionGuideClient from '@/components/guides/InteroceptionGuideClient';

export const metadata: Metadata = {
  title: 'Interoception & Alexithymia: Regulation Tools for Autism',
  description:
    'Understand interoception and alexithymia in autism. Explore low-, mid-, and high-tech emotional regulation tools for ASD, Down syndrome, ID, and CP.',
  keywords: [
    'interoception and alexithymia autism',
    'emotional regulation tools autism',
    'assistive technology for nonverbal autism',
    'adaptive learning tools for Down syndrome',
    'cerebral palsy communication boards',
    'task analysis ADL',
    'low-stimulus special education tech',
    'AAC emotional vocabulary',
  ],
  alternates: {
    canonical: '/guides/interoception-and-alexithymia-autism',
  },
  openGraph: {
    title: 'Interoception & Alexithymia: Regulation Tools for Autism',
    description:
      'Understand interoception and alexithymia in autism. Explore low-, mid-, and high-tech emotional regulation tools for ASD, Down syndrome, ID, and CP.',
    url: 'https://tech4neurodivergent.com/guides/interoception-and-alexithymia-autism',
    siteName: 'Tech4Neurodivergent',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interoception & Alexithymia: Regulation Tools for Autism',
    description:
      'Understand interoception and alexithymia in autism. Explore low-, mid-, and high-tech emotional regulation tools for ASD, Down syndrome, ID, and CP.',
  },
};

export default function InteroceptionAlexithymiaPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between interoception and alexithymia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Interoception is the ability to detect internal body signals like hunger, heartbeat, and temperature. Alexithymia is the difficulty identifying and describing emotions. The two are closely linked: if a learner cannot feel their body\'s signals clearly, they cannot connect those signals to emotional labels. Both are neurological processing differences, not behavioral choices.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can AAC help an autistic child express emotions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. AAC systems that include robust emotion vocabulary—beyond basic "happy" and "sad"—give nonspeaking and minimally speaking learners a reliable way to communicate internal states. Phrases like "my body feels too fast," "I need quiet," or "something hurts but I don\'t know where" are essential for safety and self-advocacy.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do visual emotion scales help learners with Down syndrome?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Simplified visual scales (e.g., 3-point color-coded faces) reduce the working memory and abstract language demands of identifying emotions. When paired with a single concrete action at each level, they give learners a clear, accessible pathway from recognition to regulation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What assistive technology helps a child with cerebral palsy communicate pain?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Options include a permanently accessible "pain" symbol on a switch- or eye-gaze-controlled AAC device, a mid-tech talking button programmed with "I hurt," and wearable heart-rate monitors that alert caregivers to physiological distress. The key is ensuring the pain-reporting tool requires minimal motor effort and is always within reach.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I use the Zones of Regulation with an autistic child who has alexithymia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Zones framework can be useful if adapted to include body-sensation anchors and if the learner is not penalized for being unable to identify their zone. Avoid using the Zones as a compliance tool. Instead, treat zone identification as a skill that develops gradually with interoceptive practice, not a prerequisite for receiving support.',
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Interoception, Alexithymia, and Emotional Regulation Tools for Autistic Learners',
    description:
      'Understand interoception and alexithymia in autism. Explore low-, mid-, and high-tech emotional regulation tools for ASD, Down syndrome, ID, and CP.',
    audience: {
      '@type': 'Audience',
      audienceType: ['Parents', 'Special Education Teachers', 'Therapists', 'IEP Teams'],
    },
    about: [
      { '@type': 'Thing', name: 'Interoception' },
      { '@type': 'Thing', name: 'Alexithymia' },
      { '@type': 'Thing', name: 'Emotional Regulation' },
      { '@type': 'Thing', name: 'Autism Spectrum Disorder' },
      { '@type': 'Thing', name: 'Down Syndrome' },
      { '@type': 'Thing', name: 'Cerebral Palsy' },
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
      <InteroceptionGuideClient />
    </>
  );
}
