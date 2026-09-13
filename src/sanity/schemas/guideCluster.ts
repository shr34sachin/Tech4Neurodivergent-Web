import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'guideCluster',
  title: 'Topic Cluster / Category (क्लस्टर / विषय क्षेत्र)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Cluster Title (English)',
      type: 'string',
      description: 'e.g., "Understanding Neurodiversity", "Autism Spectrum Disorder (ASD)"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nepaliTitle',
      title: 'Cluster Title (Nepali / नेपाली शीर्षक)',
      type: 'string',
      description: 'e.g., "न्युरोडाइभर्सिटी बुझाइ", "अटिजम स्पेक्ट्रम डिसअर्डर"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order (क्रम संख्या)',
      type: 'number',
      description: 'Order from 1 to 5 (determines position in header menu and hub)',
      initialValue: 1,
      validation: (Rule) => Rule.required().min(1).max(20),
    }),
    defineField({
      name: 'badge',
      title: 'Badge Label (English)',
      type: 'string',
      description: 'e.g., "Foundational", "Executive Function & Speech", "Motor-Speech & CP"',
    }),
    defineField({
      name: 'nepaliBadge',
      title: 'Badge Label (Nepali)',
      type: 'string',
      description: 'e.g., "आधारभूत स्रोत", "कार्यकारी क्षमता र बोली"',
    }),
    defineField({
      name: 'description',
      title: 'Description (English)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'nepaliDescription',
      title: 'Description (Nepali)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'color',
      title: 'Theme Color Accent',
      type: 'string',
      options: {
        list: [
          { title: 'Indigo (Primary / Foundational)', value: 'indigo' },
          { title: 'Emerald (Sage / Autism)', value: 'emerald' },
          { title: 'Sky (Blue / Down Syndrome)', value: 'sky' },
          { title: 'Amber (Warm / Intellectual Disabilities)', value: 'amber' },
          { title: 'Violet (Purple / Cerebral Palsy)', value: 'violet' },
          { title: 'Rose (High Contrast)', value: 'rose' },
        ],
      },
      initialValue: 'indigo',
    }),
    defineField({
      name: 'iconName',
      title: 'Icon Identifier',
      type: 'string',
      options: {
        list: [
          { title: 'Compass (Navigation / Foundational)', value: 'Compass' },
          { title: 'Brain (Neurology / Autism)', value: 'Brain' },
          { title: 'Sparkles (Down Syndrome / Speech)', value: 'Sparkles' },
          { title: 'Shapes (ID / Adaptive Living)', value: 'Shapes' },
          { title: 'Activity (CP / Motor)', value: 'Activity' },
        ],
      },
      initialValue: 'Compass',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'nepaliTitle',
      order: 'order',
    },
    prepare({ title, subtitle, order }) {
      return {
        title: `${order ? `#${order} ` : ''}${title || 'Untitled Cluster'}`,
        subtitle: subtitle || '',
      };
    },
  },
});
