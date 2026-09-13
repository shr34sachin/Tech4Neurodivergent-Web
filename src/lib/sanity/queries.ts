import { client, isSanityConfigured } from './client';
import { articles as staticArticles } from '@/data/articles';
import { therapyModules as staticModules, TherapyModule } from '@/data/modules';

export interface SanityImage {
  asset?: unknown;
  alt?: string;
  [key: string]: unknown;
}

export interface SanityGuideCluster {
  _id: string;
  title: string;
  nepaliTitle?: string;
  slug: { current: string };
  order: number;
  badge?: string;
  nepaliBadge?: string;
  description?: string;
  nepaliDescription?: string;
  color?: string;
  iconName?: string;
}

export interface SanityGuide {
  _id: string;
  title: string;
  nepaliTitle?: string;
  slug: { current: string };
  cluster?: {
    _id: string;
    title: string;
    nepaliTitle?: string;
    slug: { current: string };
    order: number;
    color?: string;
    badge?: string;
  };
  isPrimary?: boolean;
  order: number;
  status: 'published' | 'draft';
  readingTime?: string;
  nepaliReadingTime?: string;
  excerpt: string;
  nepaliExcerpt?: string;
  body?: unknown;
  nepaliBody?: unknown;
  keyTakeaways?: string[];
  nepaliKeyTakeaways?: string[];
  faqs?: Array<{
    question: string;
    answer: string;
    nepaliQuestion?: string;
    nepaliAnswer?: string;
  }>;
  references?: Array<{
    citation: string;
    url?: string;
  }>;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
}

export interface SanitySupportiveWebApp {
  _id: string;
  title: string;
  nepaliTitle?: string;
  slug: { current: string };
  order?: number;
  category: 'AAC & Communication' | 'Emotional Regulation' | 'Life Skills & Routines' | 'Cognitive & Academic';
  nepaliCategory?: string;
  ageRange?: string;
  nepaliAgeRange?: string;
  flutterRoute: string;
  shortDescription: string;
  nepaliShortDescription?: string;
  sensoryAccommodations?: string;
  nepaliSensoryAccommodations?: string;
  pillars?: Array<{
    title: string;
    description: string;
    nepaliTitle?: string;
    nepaliDescription?: string;
  }>;
  deepDive?: string;
  nepaliDeepDive?: string;
  parentGuide?: string[];
  nepaliParentGuide?: string[];
  faqs?: Array<{
    question?: string;
    answer?: string;
    nepaliQuestion?: string;
    nepaliAnswer?: string;
  }>;
  references?: Array<{
    citation?: string;
    url?: string;
  }>;
}

export interface SanitySiteSettings {
  siteName?: string;
  siteTitle?: string;
  metaDescription?: string;
  heroBadge?: string;
  nepaliHeroBadge?: string;
  heroTitle?: string;
  nepaliHeroTitle?: string;
  heroSubtitle?: string;
  nepaliHeroSubtitle?: string;
  esewaId?: string;
  esewaAccountName?: string;
  esewaQrImage?: SanityImage;
  supportSubtitle?: string;
  nepaliSupportSubtitle?: string;
  disclaimerText?: string;
  nepaliDisclaimerText?: string;
}

export interface SanityPost {
  _id: string;
  slug: { current: string };
  title: string;
  nepaliTitle?: string;
  subtitle?: string;
  nepaliSubtitle?: string;
  summary: string;
  nepaliSummary?: string;
  publishedAt: string;
  readingTime?: string;
  nepaliReadingTime?: string;
  mainImage?: SanityImage;
  author?: {
    name: string;
    role?: string;
    nepaliRole?: string;
    image?: unknown;
    bio?: string;
    nepaliBio?: string;
  };
  relatedModuleSlug?: string;
  keyTakeaways?: string[];
  nepaliKeyTakeaways?: string[];
  categories?: Array<{
    _id: string;
    title: string;
    nepaliTitle?: string;
    slug: { current: string };
  }>;
  body?: unknown;
  nepaliBody?: unknown;
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
}

export interface SanityPage {
  _id: string;
  slug: { current: string };
  title: string;
  nepaliTitle?: string;
  subtitle?: string;
  nepaliSubtitle?: string;
  body?: unknown;
  nepaliBody?: unknown;
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: unknown;
}

// -------------------------------------------------------------
// GROQ Queries
// -------------------------------------------------------------

export const allGuideClustersQuery = `*[_type == "guideCluster"] | order(order asc) {
  _id,
  title,
  nepaliTitle,
  slug,
  order,
  badge,
  nepaliBadge,
  description,
  nepaliDescription,
  color,
  iconName
}`;

export const allGuidesQuery = `*[_type == "guide" && status == "published"] | order(cluster->order asc, order asc) {
  _id,
  title,
  nepaliTitle,
  slug,
  isPrimary,
  order,
  readingTime,
  nepaliReadingTime,
  excerpt,
  nepaliExcerpt,
  keyTakeaways,
  nepaliKeyTakeaways,
  primaryKeyword,
  secondaryKeywords,
  metaTitle,
  metaDescription,
  cluster->{
    _id,
    title,
    nepaliTitle,
    slug,
    order,
    color,
    badge,
    nepaliBadge
  }
}`;

export const guideBySlugQuery = `*[_type == "guide" && slug.current == $slug][0] {
  _id,
  title,
  nepaliTitle,
  slug,
  isPrimary,
  order,
  readingTime,
  nepaliReadingTime,
  excerpt,
  nepaliExcerpt,
  body,
  nepaliBody,
  keyTakeaways,
  nepaliKeyTakeaways,
  faqs,
  references,
  primaryKeyword,
  secondaryKeywords,
  metaTitle,
  metaDescription,
  ogImage,
  cluster->{
    _id,
    title,
    nepaliTitle,
    slug,
    order,
    color,
    badge,
    nepaliBadge
  }
}`;

export const allSupportiveWebAppsQuery = `*[_type == "supportiveWebApp"] | order(order asc) {
  _id,
  title,
  nepaliTitle,
  slug,
  order,
  category,
  nepaliCategory,
  ageRange,
  nepaliAgeRange,
  flutterRoute,
  shortDescription,
  nepaliShortDescription,
  sensoryAccommodations,
  nepaliSensoryAccommodations,
  pillars,
  deepDive,
  nepaliDeepDive,
  parentGuide,
  nepaliParentGuide,
  faqs,
  references
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  siteName,
  siteTitle,
  metaDescription,
  heroBadge,
  nepaliHeroBadge,
  heroTitle,
  nepaliHeroTitle,
  heroSubtitle,
  nepaliHeroSubtitle,
  esewaId,
  esewaAccountName,
  esewaQrImage,
  supportSubtitle,
  nepaliSupportSubtitle,
  disclaimerText,
  nepaliDisclaimerText
}`;

export const allPostsQuery = `*[_type == "post" && status == "published"] | order(publishedAt desc) {
  _id,
  title,
  nepaliTitle,
  slug,
  summary,
  nepaliSummary,
  publishedAt,
  readingTime,
  nepaliReadingTime,
  mainImage,
  author->{
    name,
    role,
    nepaliRole,
    image,
    bio,
    nepaliBio
  },
  categories[]->{
    _id,
    title,
    nepaliTitle,
    slug
  }
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  nepaliTitle,
  slug,
  summary,
  nepaliSummary,
  publishedAt,
  readingTime,
  nepaliReadingTime,
  mainImage,
  body,
  nepaliBody,
  metaTitle,
  metaDescription,
  ogImage,
  author->{
    name,
    role,
    nepaliRole,
    image,
    bio,
    nepaliBio
  },
  categories[]->{
    _id,
    title,
    nepaliTitle,
    slug
  }
}`;

export const pageBySlugQuery = `*[_type == "page" && slug.current == $slug][0] {
  _id,
  title,
  nepaliTitle,
  slug,
  subtitle,
  nepaliSubtitle,
  body,
  nepaliBody,
  metaTitle,
  metaDescription,
  ogImage
}`;

// -------------------------------------------------------------
// Fetch Helpers with Resilient Fallbacks
// -------------------------------------------------------------

export async function getGuideClusters(): Promise<SanityGuideCluster[]> {
  if (isSanityConfigured() && client) {
    try {
      const clusters = await client.fetch<SanityGuideCluster[]>(
        allGuideClustersQuery,
        {},
        { next: { revalidate: 60, tags: ['guideClusters'] } }
      );
      if (clusters && clusters.length > 0) return clusters;
    } catch (err) {
      console.warn('Sanity guideClusters fetch failed:', err);
    }
  }
  return [];
}

export async function getAllGuides(): Promise<SanityGuide[]> {
  if (isSanityConfigured() && client) {
    try {
      const guides = await client.fetch<SanityGuide[]>(
        allGuidesQuery,
        {},
        { next: { revalidate: 60, tags: ['guides'] } }
      );
      if (guides && guides.length > 0) return guides;
    } catch (err) {
      console.warn('Sanity guides fetch failed:', err);
    }
  }
  return [];
}

export async function getGuideBySlug(slug: string): Promise<SanityGuide | null> {
  if (isSanityConfigured() && client) {
    try {
      return await client.fetch<SanityGuide>(
        guideBySlugQuery,
        { slug },
        { next: { revalidate: 60, tags: [`guide:${slug}`] } }
      );
    } catch (err) {
      console.warn(`Sanity guide (${slug}) fetch failed:`, err);
    }
  }
  return null;
}

export async function getSiteSettings(): Promise<SanitySiteSettings | null> {
  if (isSanityConfigured() && client) {
    try {
      return await client.fetch<SanitySiteSettings>(
        siteSettingsQuery,
        {},
        { next: { revalidate: 60, tags: ['siteSettings'] } }
      );
    } catch (err) {
      console.warn('Sanity siteSettings fetch failed:', err);
    }
  }
  return null;
}

export async function getAllSupportiveWebApps(): Promise<TherapyModule[]> {
  if (isSanityConfigured() && client) {
    try {
      const apps = await client.fetch<SanitySupportiveWebApp[]>(
        allSupportiveWebAppsQuery,
        {},
        { next: { revalidate: 60, tags: ['supportiveWebApps'] } }
      );
      if (apps && apps.length > 0) {
        return apps.map((app) => {
          const staticMatch = staticModules.find((m) => m.slug === app.slug.current);
          return {
            id: staticMatch?.id || app.slug.current,
            slug: app.slug.current,
            title: app.title,
            nepaliTitle: app.nepaliTitle || app.title,
            category: app.category || staticMatch?.category || 'AAC & Communication',
            nepaliCategory: app.nepaliCategory || staticMatch?.nepaliCategory || '',
            ageRange: app.ageRange || staticMatch?.ageRange || 'Ages 3–12+',
            nepaliAgeRange: app.nepaliAgeRange || staticMatch?.nepaliAgeRange || '३–१२+ वर्ष',
            flutterRoute: app.flutterRoute,
            shortDescription: app.shortDescription,
            nepaliShortDescription: app.nepaliShortDescription || app.shortDescription,
            evidenceBase: staticMatch?.evidenceBase || '',
            nepaliEvidenceBase: staticMatch?.nepaliEvidenceBase || '',
            targetSkills: staticMatch?.targetSkills || [],
            nepaliTargetSkills: staticMatch?.nepaliTargetSkills || [],
            sensoryAccommodations: app.sensoryAccommodations ? [app.sensoryAccommodations] : (staticMatch?.sensoryAccommodations || []),
            nepaliSensoryAccommodations: app.nepaliSensoryAccommodations ? [app.nepaliSensoryAccommodations] : (staticMatch?.nepaliSensoryAccommodations || []),
            parentImplementationGuide: app.parentGuide || staticMatch?.parentImplementationGuide || [],
            nepaliParentImplementationGuide: app.nepaliParentGuide || staticMatch?.nepaliParentImplementationGuide || [],
            clinicalPillars: (app.pillars && app.pillars.length > 0)
              ? app.pillars.map((p) => ({
                  title: p.title,
                  description: p.description,
                  nepaliTitle: p.nepaliTitle || p.title,
                  nepaliDescription: p.nepaliDescription || p.description,
                }))
              : (staticMatch?.clinicalPillars || []),
            overviewHtml: staticMatch?.overviewHtml || '',
            nepaliOverviewHtml: staticMatch?.nepaliOverviewHtml || '',
            clinicalDeepDive: app.deepDive || staticMatch?.clinicalDeepDive || '',
            nepaliClinicalDeepDive: app.nepaliDeepDive || staticMatch?.nepaliClinicalDeepDive || '',
            faqs: (app.faqs && app.faqs.length > 0)
              ? app.faqs.map((f) => ({
                  question: f.question || '',
                  answer: f.answer || '',
                  nepaliQuestion: f.nepaliQuestion,
                  nepaliAnswer: f.nepaliAnswer,
                }))
              : (staticMatch?.faqs || []),
            references: (app.references && app.references.length > 0)
              ? app.references.map((r) => r.citation || '')
              : (staticMatch?.references || []),
          };
        });
      }
    } catch (err) {
      console.warn('Sanity supportiveWebApps fetch failed, falling back to static modules:', err);
    }
  }
  return staticModules;
}

export async function getAllPosts(): Promise<SanityPost[]> {
  if (isSanityConfigured() && client) {
    try {
      const posts = await client.fetch<SanityPost[]>(
        allPostsQuery,
        {},
        { next: { revalidate: 60, tags: ['posts'] } }
      );
      if (posts && posts.length > 0) return posts;
    } catch (err) {
      console.warn('Sanity query failed, falling back to static articles:', err);
    }
  }

  return staticArticles.map((a) => ({
    _id: a.slug,
    slug: { current: a.slug },
    title: a.title,
    nepaliTitle: a.nepaliTitle,
    subtitle: a.subtitle,
    nepaliSubtitle: a.nepaliSubtitle,
    summary: a.summary,
    nepaliSummary: a.nepaliSummary,
    publishedAt: a.publishedAt,
    readingTime: a.readingTime,
    nepaliReadingTime: a.nepaliReadingTime,
    author: {
      name: a.author.name,
      role: a.author.role,
      bio: a.author.bio,
    },
    categories: [
      {
        _id: a.category,
        title: a.category,
        nepaliTitle: a.nepaliCategory,
        slug: { current: a.category.toLowerCase().replace(/[^a-z0-9]+/g, '-') },
      },
    ],
  }));
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  if (isSanityConfigured() && client) {
    try {
      const post = await client.fetch<SanityPost>(
        postBySlugQuery,
        { slug },
        { next: { revalidate: 60, tags: [`post:${slug}`] } }
      );
      if (post) return post;
    } catch (err) {
      console.warn('Sanity post fetch failed, falling back to static article:', err);
    }
  }

  const fallback = staticArticles.find((a) => a.slug === slug);
  if (!fallback) return null;

  return {
    _id: fallback.slug,
    slug: { current: fallback.slug },
    title: fallback.title,
    nepaliTitle: fallback.nepaliTitle,
    subtitle: fallback.subtitle,
    nepaliSubtitle: fallback.nepaliSubtitle,
    summary: fallback.summary,
    nepaliSummary: fallback.nepaliSummary,
    publishedAt: fallback.publishedAt,
    readingTime: fallback.readingTime,
    nepaliReadingTime: fallback.nepaliReadingTime,
    author: {
      name: fallback.author.name,
      role: fallback.author.role,
      bio: fallback.author.bio,
    },
    categories: [
      {
        _id: fallback.category,
        title: fallback.category,
        nepaliTitle: fallback.nepaliCategory,
        slug: { current: fallback.category.toLowerCase().replace(/[^a-z0-9]+/g, '-') },
      },
    ],
  };
}

export async function getPageBySlug(slug: string): Promise<SanityPage | null> {
  if (isSanityConfigured() && client) {
    try {
      return await client.fetch<SanityPage>(
        pageBySlugQuery,
        { slug },
        { next: { revalidate: 60, tags: [`page:${slug}`] } }
      );
    } catch (err) {
      console.warn('Sanity page fetch failed:', err);
      return null;
    }
  }
  return null;
}
