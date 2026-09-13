import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Custom Page (पृष्ठ)',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content (English)', default: true },
    { name: 'nepali', title: 'Nepali (नेपाली)' },
    { name: 'seo', title: 'SEO & Metadata' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title (English)',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
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
      name: 'subtitle',
      title: 'Subtitle (English)',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Page Content (English)',
      type: 'blockContent',
      group: 'content',
    }),

    // Nepali
    defineField({
      name: 'nepaliTitle',
      title: 'Page Title (Nepali)',
      type: 'string',
      group: 'nepali',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nepaliSubtitle',
      title: 'Subtitle (Nepali)',
      type: 'string',
      group: 'nepali',
    }),
    defineField({
      name: 'nepaliBody',
      title: 'Page Content (Nepali)',
      type: 'blockContent',
      group: 'nepali',
    }),

    // SEO
    defineField({
      name: 'metaTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO Description',
      type: 'text',
      group: 'seo',
    }),
    defineField({
      name: 'ogImage',
      title: 'OG Share Image',
      type: 'image',
      group: 'seo',
    }),
  ],
});
