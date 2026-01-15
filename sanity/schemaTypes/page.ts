/**
 * Page Schema
 * Master document for editable pages with hero and sections
 */

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Internal name for the page (e.g., "Home", "Buying", "Selling")',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
      readOnly: true,
      description: 'System identifier - automatically generated from title',
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 2,
      description: 'SEO meta description',
    },
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'heroSection',
      validation: (Rule: any) => Rule.required(),
      description: 'Main hero section for this page',
    },
  ],
  preview: {
    select: {
      title: 'title',
      headline: 'hero.headline',
    },
    prepare({ title, headline }: any) {
      return {
        title: title,
        subtitle: headline || 'No hero configured',
      };
    },
  },
};
