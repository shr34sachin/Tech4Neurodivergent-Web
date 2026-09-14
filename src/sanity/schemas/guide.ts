import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'guide',
  title: 'Educational Guide (शैक्षिक निर्देशिका)',
  type: 'document',
  groups: [
    { name: 'content', title: 'English Content', default: true },
    { name: 'nepali', title: 'Nepali (नेपाली)' },
    { name: 'organization', title: 'Cluster & Hierarchy' },
    { name: 'faqs', title: 'FAQs & Citations' },
    { name: 'seo', title: 'SEO & Metadata' },
  ],
  fields: [
    // --- Cluster & Hierarchy ---
    defineField({
      name: 'cluster',
      title: 'Parent Topic Cluster (मुख्य क्लस्टर)',
      type: 'reference',
      to: [{ type: 'guideCluster' }],
      group: 'organization',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isPrimary',
      title: 'Is Primary / Main Guide in Cluster? (क्लस्टरको मुख्य निर्देशिका)',
      type: 'boolean',
      description: 'Check this if this guide should be highlighted at the top of the cluster menu and hub',
      initialValue: false,
      group: 'organization',
    }),
    defineField({
      name: 'order',
      title: 'Display Order within Cluster (क्रम संख्या)',
      type: 'number',
      initialValue: 1,
      group: 'organization',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Publication Status',
      type: 'string',
      options: {
        list: [
          { title: 'Published', value: 'published' },
          { title: 'Draft / In Review', value: 'draft' },
        ],
        layout: 'radio',
      },
      initialValue: 'published',
      group: 'organization',
    }),

    // --- English Content ---
    defineField({
      name: 'title',
      title: 'Guide Title (English)',
      type: 'string',
      group: 'content',
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
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (English)',
      type: 'string',
      description: 'e.g., "12 min read"',
      initialValue: '12 min read',
      group: 'content',
    }),
    defineField({
      name: 'excerpt',
      title: 'Executive Summary / Excerpt (English)',
      type: 'text',
      rows: 4,
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Main Guide Content (English)',
      type: 'blockContent',
      group: 'content',
    }),
    defineField({
      name: 'keyTakeaways',
      title: 'Key Educational Takeaways (English)',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      group: 'content',
    }),

    // --- Nepali Content ---
    defineField({
      name: 'nepaliTitle',
      title: 'Guide Title (Nepali / नेपाली शीर्षक)',
      type: 'string',
      group: 'nepali',
    }),
    defineField({
      name: 'nepaliReadingTime',
      title: 'Reading Time (Nepali)',
      type: 'string',
      description: 'e.g., "१२ मिनेट पढाइ"',
      initialValue: '१२ मिनेट पढाइ',
      group: 'nepali',
    }),
    defineField({
      name: 'nepaliExcerpt',
      title: 'Executive Summary / Excerpt (Nepali)',
      type: 'text',
      rows: 4,
      group: 'nepali',
    }),
    defineField({
      name: 'nepaliBody',
      title: 'Main Guide Content (Nepali)',
      type: 'blockContent',
      group: 'nepali',
    }),
    defineField({
      name: 'nepaliKeyTakeaways',
      title: 'Key Educational Takeaways (Nepali)',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      group: 'nepali',
    }),

    // --- FAQs & Citations ---
    defineField({
      name: 'faqs',
      title: 'Frequently Asked Questions (FAQs)',
      type: 'array',
      group: 'faqs',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'question', title: 'Question (English)', type: 'string', validation: (R) => R.required() },
            { name: 'answer', title: 'Answer (English)', type: 'text', validation: (R) => R.required() },
            { name: 'nepaliQuestion', title: 'Question (Nepali)', type: 'string' },
            { name: 'nepaliAnswer', title: 'Answer (Nepali)', type: 'text' },
          ],
          preview: {
            select: { title: 'question', subtitle: 'nepaliQuestion' },
          },
        }),
      ],
    }),
    defineField({
      name: 'references',
      title: 'References & Citations',
      type: 'array',
      group: 'faqs',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'citation', title: 'Citation Text (e.g. APA format)', type: 'text', rows: 2, validation: (R) => R.required() },
            { name: 'url', title: 'Reference URL / DOI', type: 'url' },
          ],
          preview: {
            select: { title: 'citation', subtitle: 'url' },
          },
        }),
      ],
    }),

    // --- SEO & Keywords ---
    defineField({
      name: 'primaryKeyword',
      title: 'Primary Target Keyword',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'secondaryKeywords',
      title: 'Secondary Keywords & Badges',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      group: 'seo',
    }),
    defineField({
      name: 'metaTitle',
      title: 'SEO Meta Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO Meta Description',
      type: 'text',
      rows: 3,
      group: 'seo',
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Share (OG) Image',
      type: 'image',
      options: { hotspot: true },
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      clusterTitle: 'cluster.title',
      isPrimary: 'isPrimary',
      status: 'status',
    },
    prepare({ title, clusterTitle, isPrimary, status }) {
      const primaryBadge = isPrimary ? '⭐ [PRIMARY] ' : '';
      const statusBadge = status === 'draft' ? ' [DRAFT]' : '';
      return {
        title: `${primaryBadge}${title || 'Untitled Guide'}${statusBadge}`,
        subtitle: clusterTitle ? `Cluster: ${clusterTitle}` : 'No Cluster Assigned',
      };
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrder',
      by: [
        { field: 'order', direction: 'asc' },
        { field: 'title', direction: 'asc' },
      ],
    },
  ],
});
