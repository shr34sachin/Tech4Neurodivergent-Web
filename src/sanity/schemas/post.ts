import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Blog Article (लेख)',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content / सामग्री', default: true },
    { name: 'nepali', title: 'Nepali (नेपाली)' },
    { name: 'seo', title: 'SEO & Social Share' },
  ],
  fields: [
    // English Content
    defineField({
      name: 'title',
      title: 'Article Title (English)',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required().min(5).max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      group: 'content',
    }),
    defineField({
      name: 'mainImage',
      title: 'Featured Image',
      type: 'image',
      group: 'content',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text (Screen Readers)',
          description: 'Required for accessibility and SEO',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      group: 'content',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (English)',
      type: 'string',
      group: 'content',
      placeholder: 'e.g., 7 min read',
      initialValue: '7 min read',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      group: 'content',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'status',
      title: 'Publishing Status',
      type: 'string',
      group: 'content',
      options: {
        list: [
          { title: 'Draft / ड्राफ्ट', value: 'draft' },
          { title: 'Published / प्रकाशित', value: 'published' },
        ],
        layout: 'radio',
      },
      initialValue: 'published',
    }),
    defineField({
      name: 'summary',
      title: 'Summary / Excerpt (English)',
      type: 'text',
      group: 'content',
      rows: 3,
      validation: (Rule) => Rule.required().min(20).max(300),
    }),
    defineField({
      name: 'body',
      title: 'Body Content (English)',
      type: 'blockContent',
      group: 'content',
    }),

    // Nepali Content Fields
    defineField({
      name: 'nepaliTitle',
      title: 'Article Title (Nepali / नेपाली शीर्षक)',
      type: 'string',
      group: 'nepali',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nepaliReadingTime',
      title: 'Reading Time (Nepali / पढ्ने समय)',
      type: 'string',
      group: 'nepali',
      placeholder: 'e.g., ७ मिनेट पढाइ',
      initialValue: '७ मिनेट पढाइ',
    }),
    defineField({
      name: 'nepaliSummary',
      title: 'Summary / Excerpt (Nepali / सारांश)',
      type: 'text',
      group: 'nepali',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nepaliBody',
      title: 'Body Content (Nepali / नेपाली मुख्य सामग्री)',
      type: 'blockContent',
      group: 'nepali',
    }),

    // SEO Fields
    defineField({
      name: 'metaTitle',
      title: 'Meta Title (Search Engines)',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'seo',
      rows: 2,
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image (Social Shares)',
      type: 'image',
      group: 'seo',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'nepaliTitle',
      media: 'mainImage',
      status: 'status',
    },
    prepare(selection) {
      const { title, subtitle, media, status } = selection;
      const statusIcon = status === 'published' ? '🟢' : '🟡';
      return {
        title: `${statusIcon} ${title}`,
        subtitle: subtitle || 'No Nepali title set',
        media,
      };
    },
  },
});
