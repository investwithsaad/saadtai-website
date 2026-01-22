/**
 * Hero Section Schema
 * Reusable hero component for page headers
 */

export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
      description: 'Main heading (H1) - use line breaks for multi-line headlines',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Hero description text',
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      description: 'Call-to-action button text (opens modal popup)',
    },
  ],
  preview: {
    select: {
      headline: 'headline',
      description: 'description',
    },
    prepare({ headline, description }: any) {
      return {
        title: headline,
        subtitle: description?.substring(0, 60) + (description?.length > 60 ? '...' : ''),
      };
    },
  },
};
