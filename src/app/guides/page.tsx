import React from 'react';
import type { Metadata } from 'next';
import GuidesHubClient from '@/components/guides/GuidesHubClient';
import { getGuideClusters, getAllGuides } from '@/lib/sanity/queries';

export const metadata: Metadata = {
  title: 'Foundational Guides & Assistive Technology Resources | Tech4Neurodivergent',
  description:
    'Explore comprehensive educational guides on neurodiversity, assistive technology frameworks, AAC, interoception, and special education adaptations.',
  alternates: {
    canonical: '/guides',
  },
};

export default async function GuidesPage() {
  const [sanityClusters, sanityGuides] = await Promise.all([
    getGuideClusters(),
    getAllGuides(),
  ]);

  return <GuidesHubClient initialClusters={sanityClusters} initialGuides={sanityGuides} />;
}
