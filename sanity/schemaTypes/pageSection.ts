/**
 * Page Section Schema
 * Flexible content blocks for pages and A/B testing
 */

export default {
  name: 'pageSection',
  title: 'Page Section',
  type: 'document',
  fields: [
    {
      name: 'identifier',
      title: 'Section Identifier',
      type: 'string',
      description: 'Unique key used in Next.js (e.g., "homepage-hero", "investing-benefits")',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Display Title',
      type: 'string',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading for this section',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      description: 'Optional secondary heading',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Main content/body text',
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      description: 'Call-to-action button label',
    },
    {
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'string',
      description: 'URL or internal path for the button',
    },
    {
      name: 'image',
      title: 'Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'variant',
      title: 'Variant',
      type: 'string',
      description: 'For A/B testing - label this as variant A, B, etc.',
      options: {
        list: [
          { title: 'Variant A (Control)', value: 'a' },
          { title: 'Variant B', value: 'b' },
          { title: 'Variant C', value: 'c' },
          { title: 'Variant D', value: 'd' },
        ],
      },
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Is this section currently active?',
    },
  ],
  preview: {
    select: {
      title: 'identifier',
      variant: 'variant',
    },
    prepare({ title, variant }: any) {
      return {
        title,
        subtitle: `Variant ${variant?.toUpperCase() || 'A'}`,
      };
    },
  },
};
