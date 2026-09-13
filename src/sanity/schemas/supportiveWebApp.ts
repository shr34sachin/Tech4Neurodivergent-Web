import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'supportiveWebApp',
  title: 'Supportive Web-App (सहयोगी वेब-एप)',
  type: 'document',
  groups: [
    { name: 'details', title: 'App Details', default: true },
    { name: 'nepali', title: 'Nepali (नेपाली)' },
    { name: 'pedagogy', title: 'Pedagogical Foundations & Deep Dive' },
    { name: 'faqs', title: 'FAQs & References' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'App Title (English)',
      type: 'string',
      group: 'details',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nepaliTitle',
      title: 'App Title (Nepali / नेपाली शीर्षक)',
      type: 'string',
      group: 'nepali',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'details',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
      group: 'details',
    }),
    defineField({
      name: 'category',
      title: 'Category (English)',
      type: 'string',
      options: {
        list: [
          { title: 'AAC & Communication', value: 'AAC & Communication' },
          { title: 'Executive Function & ADLs', value: 'Executive Function & ADLs' },
          { title: 'Sensory & Self-Regulation', value: 'Sensory & Self-Regulation' },
          { title: 'Social Understanding', value: 'Social Understanding' },
          { title: 'Motor & Writing Skills', value: 'Motor & Writing Skills' },
        ],
      },
      group: 'details',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nepaliCategory',
      title: 'Category (Nepali)',
      type: 'string',
      group: 'nepali',
    }),
    defineField({
      name: 'ageRange',
      title: 'Target Age Range (English)',
      type: 'string',
      initialValue: 'Ages 3–12+',
      group: 'details',
    }),
    defineField({
      name: 'nepaliAgeRange',
      title: 'Target Age Range (Nepali)',
      type: 'string',
      initialValue: '३–१२+ वर्ष',
      group: 'nepali',
    }),
    defineField({
      name: 'flutterRoute',
      title: 'Interactive Web-App Route',
      type: 'string',
      description: 'Route to the interactive Flutter application (e.g. /talker-aac, /sentence-builder)',
      group: 'details',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description (English)',
      type: 'text',
      rows: 3,
      group: 'details',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nepaliShortDescription',
      title: 'Short Description (Nepali)',
      type: 'text',
      rows: 3,
      group: 'nepali',
    }),
    defineField({
      name: 'sensoryAccommodations',
      title: 'Sensory Accommodations (English)',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'nepaliSensoryAccommodations',
      title: 'Sensory Accommodations (Nepali)',
      type: 'string',
      group: 'nepali',
    }),

    // --- Pedagogical Pillars & Deep Dive ---
    defineField({
      name: 'pillars',
      title: 'Core Educational Pillars',
      type: 'array',
      group: 'pedagogy',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'title', title: 'Pillar Title (English)', type: 'string', validation: (R) => R.required() },
            { name: 'description', title: 'Description (English)', type: 'text', validation: (R) => R.required() },
            { name: 'nepaliTitle', title: 'Pillar Title (Nepali)', type: 'string' },
            { name: 'nepaliDescription', title: 'Description (Nepali)', type: 'text' },
          ],
          preview: {
            select: { title: 'title', subtitle: 'nepaliTitle' },
          },
        }),
      ],
    }),
    defineField({
      name: 'deepDive',
      title: 'In-Depth Pedagogical Rationale (English)',
      type: 'text',
      rows: 6,
      group: 'pedagogy',
    }),
    defineField({
      name: 'nepaliDeepDive',
      title: 'In-Depth Pedagogical Rationale (Nepali)',
      type: 'text',
      rows: 6,
      group: 'nepali',
    }),
    defineField({
      name: 'parentGuide',
      title: 'Caregiver & Educator Guide Steps (English)',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      group: 'pedagogy',
    }),
    defineField({
      name: 'nepaliParentGuide',
      title: 'Caregiver & Educator Guide Steps (Nepali)',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      group: 'nepali',
    }),

    // --- FAQs & Citations ---
    defineField({
      name: 'faqs',
      title: 'App FAQs',
      type: 'array',
      group: 'faqs',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'question', title: 'Question (English)', type: 'string' },
            { name: 'answer', title: 'Answer (English)', type: 'text' },
            { name: 'nepaliQuestion', title: 'Question (Nepali)', type: 'string' },
            { name: 'nepaliAnswer', title: 'Answer (Nepali)', type: 'text' },
          ],
        }),
      ],
    }),
    defineField({
      name: 'references',
      title: 'Research & References',
      type: 'array',
      group: 'faqs',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'citation', title: 'Citation Text', type: 'text', rows: 2 },
            { name: 'url', title: 'Link', type: 'url' },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
    },
  },
});
