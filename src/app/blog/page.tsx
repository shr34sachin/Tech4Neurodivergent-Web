import React from 'react';
import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/sanity/queries';
import BlogIndexClient from '@/components/BlogIndexClient';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Educational Guides & Assistive Tech Research | Tech4Neurodivergent',
  description: 'Evidence-based articles on alexithymia, interoception, AAC Fitzgerald Key color coding, bilingual assistive technology, and task analysis for autistic and ADHD learners.',
  alternates: {
    canonical: '/blog',
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  return <BlogIndexClient posts={posts} />;
}
