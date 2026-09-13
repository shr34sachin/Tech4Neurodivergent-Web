import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Layout & Global Settings (साइट लेआउट र सेटिङहरू)',
  type: 'document',
  groups: [
    { name: 'general', title: 'General & SEO', default: true },
    { name: 'hero', title: 'Homepage Hero & Layout' },
    { name: 'donation', title: 'Support & eSewa Settings' },
    { name: 'legal', title: 'Disclaimer & Footer' },
  ],
  fields: [
    // --- General & SEO ---
    defineField({
      name: 'siteName',
      title: 'Platform Name',
      type: 'string',
      initialValue: 'Tech4Neurodivergent',
      group: 'general',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteTitle',
      title: 'Default Browser Title',
      type: 'string',
      initialValue: 'Tech4Neurodivergent | Assistive Technology & Supportive Web-Apps',
      group: 'general',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Default Meta Description',
      type: 'text',
      rows: 3,
      group: 'general',
    }),

    // --- Hero & Layout ---
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge Text (English)',
      type: 'string',
      initialValue: 'Neurodevelopmental Assistive Technology Platform',
      group: 'hero',
    }),
    defineField({
      name: 'nepaliHeroBadge',
      title: 'Hero Badge Text (Nepali)',
      type: 'string',
      initialValue: 'न्युरोडेभलपमेन्टल सहयोगी प्रविधि मञ्च',
      group: 'hero',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Heading (English)',
      type: 'string',
      initialValue: 'Evidence-Informed Assistive Technology & Supportive Web-Apps',
      group: 'hero',
    }),
    defineField({
      name: 'nepaliHeroTitle',
      title: 'Hero Heading (Nepali)',
      type: 'string',
      initialValue: 'अटिजम, एडीएचडी र सिकाइ भिन्नता भएका बालबालिकाका लागि सहयोगी प्रविधि',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle (English)',
      type: 'text',
      rows: 3,
      initialValue: 'Open-access, bilingual digital tools, visual scaffolding, and educational resources engineered to bypass communication barriers.',
      group: 'hero',
    }),
    defineField({
      name: 'nepaliHeroSubtitle',
      title: 'Hero Subtitle (Nepali)',
      type: 'text',
      rows: 3,
      initialValue: 'नेपाली र अङ्ग्रेजी दुवै भाषामा उपलब्ध खुला, निःशुल्क डिजिटल उपकरण र शैक्षिक स्रोतहरू।',
      group: 'hero',
    }),

    // --- Support & eSewa ---
    defineField({
      name: 'esewaId',
      title: 'eSewa ID / Number',
      type: 'string',
      description: 'Primary eSewa ID for direct community contributions',
      initialValue: '977 9841616976',
      group: 'donation',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'esewaAccountName',
      title: 'eSewa Account Holder Name',
      type: 'string',
      initialValue: 'Tech4Neurodivergent Open Support',
      group: 'donation',
    }),
    defineField({
      name: 'esewaQrImage',
      title: 'eSewa QR Code Image',
      type: 'image',
      description: 'Upload your eSewa QR code image here. It will automatically display on the Support page and footer cards.',
      options: { hotspot: true },
      group: 'donation',
    }),
    defineField({
      name: 'supportSubtitle',
      title: 'Donation Message (English)',
      type: 'text',
      rows: 3,
      initialValue: 'Help us maintain free edge hosting, Nepali speech synthesis, and open-source tools for neurodivergent learners, families, and educators.',
      group: 'donation',
    }),
    defineField({
      name: 'nepaliSupportSubtitle',
      title: 'Donation Message (Nepali)',
      type: 'text',
      rows: 3,
      initialValue: 'निःशुल्क होस्टिङ, नेपाली आवाज तथा खुला स्रोतका उपकरणहरू निरन्तर सञ्चालन गर्न सहयोग गर्नुहोस्।',
      group: 'donation',
    }),

    // --- Disclaimer & Legal ---
    defineField({
      name: 'disclaimerText',
      title: 'Educational Disclaimer (English)',
      type: 'text',
      rows: 3,
      initialValue: 'The software tools, visual roadmaps, and educational articles provided on tech4neurodivergent.com are designed exclusively for educational, supplemental, and communication-scaffolding purposes. They do not constitute formal medical diagnosis or clinical treatment.',
      group: 'legal',
    }),
    defineField({
      name: 'nepaliDisclaimerText',
      title: 'Educational Disclaimer (Nepali)',
      type: 'text',
      rows: 3,
      initialValue: 'यस वेबसाइटमा प्रस्तुत सामग्री तथा उपकरणहरू शैक्षिक र सञ्चार सहजीकरणका लागि मात्र हुन्। यी कुनै चिकित्सकीय उपचार वा औपचारिक निदान होइनन्।',
      group: 'legal',
    }),
  ],
  preview: {
    select: {
      title: 'siteName',
      subtitle: 'siteTitle',
    },
  },
});
