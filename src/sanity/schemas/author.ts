import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'author',
  title: 'Author / Clinician',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Clinical Role / Credentials (English)',
      type: 'string',
      placeholder: 'e.g., Pediatric Occupational Therapist, SLP',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nepaliRole',
      title: 'Clinical Role (Nepali / पद वा विज्ञता)',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Avatar / Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio (English)',
      type: 'text',
    }),
    defineField({
      name: 'nepaliBio',
      title: 'Bio (Nepali / परिचय)',
      type: 'text',
    }),
  ],
});
