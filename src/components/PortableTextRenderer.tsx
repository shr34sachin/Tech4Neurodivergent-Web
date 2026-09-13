'use client';

import React from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import { urlForImage } from '@/lib/sanity/image';
import { ShieldCheck, AlertCircle, Info, Sparkles } from 'lucide-react';

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1E293B] dark:text-[#E2E8F0] mt-8 mb-4 pb-2 border-b border-[#E8E2D5] dark:border-[#273748]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl sm:text-2xl font-bold text-[#1E293B] dark:text-[#E2E8F0] mt-6 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold text-[#1E293B] dark:text-[#E2E8F0] mt-4 mb-2">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-[#2B5763] dark:border-[#5FA4B8] bg-[#FAF7EE] dark:bg-[#182330] p-4 rounded-r-xl italic text-[#4B5A6B] dark:text-[#CBD5E1]">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="my-4 text-base text-[#3E4D5E] dark:text-[#CBD5E1] leading-relaxed">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-4 space-y-2 list-disc list-inside text-[#3E4D5E] dark:text-[#CBD5E1]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-4 space-y-2 list-decimal list-inside text-[#3E4D5E] dark:text-[#CBD5E1]">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-[#1E293B] dark:text-[#E2E8F0]">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-[#FAF2E9] dark:bg-[#201C19] px-1.5 py-0.5 font-mono text-xs text-[#9E5819] dark:text-[#F6AD55]">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const target = value?.blank ? '_blank' : undefined;
      const rel = value?.blank ? 'noopener noreferrer' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={rel}
          className="font-semibold text-[#2B5763] dark:text-[#5FA4B8] underline hover:opacity-80 transition-opacity"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const imageUrl = urlForImage(value);
      if (!imageUrl) return null;

      return (
        <figure className="my-8 rounded-2xl overflow-hidden border border-[#E8E2D5] dark:border-[#273748] bg-[#FAF7EE] dark:bg-[#182330]">
          <div className="relative w-full h-[360px] sm:h-[480px]">
            <Image
              src={imageUrl.url()}
              alt={value.alt || 'Therapeutic illustration'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value.caption && (
            <figcaption className="p-3 text-center text-xs text-[#6B7B8D] dark:text-[#94A3B8]">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    callout: ({ value }) => {
      const type = value?.type || 'sensory';
      let style = 'border-[#3D6B56] bg-[#EDF4F0] dark:bg-[#182B24] text-[#1E293B] dark:text-[#E2E8F0]';
      let icon = <Sparkles className="h-5 w-5 text-[#3D6B56] dark:text-[#52B788] shrink-0" />;

      if (type === 'clinical') {
        style = 'border-[#9E5819] bg-[#FAF2E9] dark:bg-[#2A231C] text-[#1E293B] dark:text-[#E2E8F0]';
        icon = <ShieldCheck className="h-5 w-5 text-[#9E5819] dark:text-[#F6AD55] shrink-0" />;
      } else if (type === 'info') {
        style = 'border-[#2B5763] bg-[#E8EFF1] dark:bg-[#1A313B] text-[#1E293B] dark:text-[#E2E8F0]';
        icon = <Info className="h-5 w-5 text-[#2B5763] dark:text-[#5FA4B8] shrink-0" />;
      } else if (type === 'warning') {
        style = 'border-[#9C5265] bg-[#FDF2F4] dark:bg-[#2D1B22] text-[#1E293B] dark:text-[#E2E8F0]';
        icon = <AlertCircle className="h-5 w-5 text-[#9C5265] dark:text-[#E57388] shrink-0" />;
      }

      return (
        <aside className={`my-6 rounded-xl border p-5 shadow-xs ${style}`}>
          <div className="flex items-start gap-3">
            {icon}
            <div>
              {value.title && (
                <h5 className="font-bold text-sm mb-1">{value.title}</h5>
              )}
              <p className="text-sm leading-relaxed">{value.message}</p>
            </div>
          </div>
        </aside>
      );
    },
  },
};

export default function PortableTextRenderer({ value }: { value: unknown }) {
  if (!value) return null;
  return <PortableText value={value as Parameters<typeof PortableText>[0]["value"]} components={components} />;
}
