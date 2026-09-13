import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import AppProviders from '@/context/AppProviders';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tech4neurodivergent.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Tech4Neurodivergent | Assistive Tech & Supportive Web-Apps for Autism, ADHD & Neurodiversity',
    template: '%s | Tech4Neurodivergent'
  },
  description: 'Evidence-based, sensory-friendly assistive platform for autism, ADHD, and communication delays. 8 supportive web-apps including Fitzgerald Key AAC, Interoception, Visual Schedules, and Task Analysis.',
  keywords: [
    'neurodivergent assistive technology',
    'autism AAC app',
    'Fitzgerald Key color coding',
    'alexithymia interoception children',
    'Nepali AAC app',
    'visual schedule autism',
    'task analysis brushing handwashing',
    'Carol Gray social stories',
    'Devanagari handwriting fine motor',
    'sensory friendly learning'
  ],
  authors: [{ name: 'Tech4Neurodivergent Educational Team', url: siteUrl }],
  creator: 'Tech4Neurodivergent',
  publisher: 'Tech4Neurodivergent Non-Profit Initiative',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tech4Neurodivergent | Assistive Tech for Autism, ADHD & AAC',
    description: 'Sensory-safe, low-stimulation educational directory and educational guides for 8 interactive supportive web-apps.',
    url: siteUrl,
    siteName: 'Tech4Neurodivergent',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech4Neurodivergent | Assistive Tech & Supportive Web-Apps',
    description: 'Evidence-based AAC and sensory regulation platform for neurodivergent minds.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tech4Neurodivergent',
    url: siteUrl,
    description: 'Accessible, sensory-friendly assistive platform providing evidence-informed educational guides and supportive web-apps for neurodivergent individuals.',
    inLanguage: ['en', 'ne'],
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/tools?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tech4Neurodivergent Initiative',
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
    sameAs: [
      'https://github.com/tech4neurodivergent',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Educational & Technical Support',
      email: 'support@tech4neurodivergent.com',
      availableLanguage: ['English', 'Nepali'],
    },
  };

  return (
    <html
      lang="en"
      className={inter.variable}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <JsonLd data={websiteSchema} />
        <JsonLd data={organizationSchema} />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-[#FDFBF7] dark:bg-[#111821] text-[#1E293B] dark:text-[#E2E8F0] antialiased selection:bg-[#D3E2E6] selection:text-[#1E3F49] dark:selection:bg-[#22434E] dark:selection:text-[#E2E8F0]"
      >
        <AppProviders>
          <Header />
          <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
