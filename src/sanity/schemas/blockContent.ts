import { defineType, defineArrayMember } from 'sanity';

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2 (Section Heading)', value: 'h2' },
        { title: 'H3 (Sub-heading)', value: 'h3' },
        { title: 'H4 (Minor Heading)', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: 'Underline', value: 'underline' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
                initialValue: true,
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text (Screen Readers)',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    }),
    defineArrayMember({
      name: 'callout',
      type: 'object',
      title: 'Sensory & Educational Callout',
      fields: [
        {
          name: 'type',
          type: 'string',
          title: 'Callout Type',
          options: {
            list: [
              { title: 'Sensory Tip (Green/Sage)', value: 'sensory' },
              { title: 'Educational Notice (Amber/Warm)', value: 'evidence' },
              { title: 'Important Note (Blue/Teal)', value: 'info' },
              { title: 'Practical Suggestion (Purple)', value: 'suggestion' },
              { title: 'Disclaimer / Warning (Rose)', value: 'warning' },
            ],
          },
          initialValue: 'sensory',
        },
        {
          name: 'title',
          type: 'string',
          title: 'Callout Title',
        },
        {
          name: 'message',
          type: 'text',
          title: 'Callout Message',
          validation: (Rule) => Rule.required(),
        },
      ],
      preview: {
        select: {
          title: 'title',
          subtitle: 'message',
        },
      },
    }),
  ],
});
