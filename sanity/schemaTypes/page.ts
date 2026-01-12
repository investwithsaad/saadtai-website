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
      description: 'Internal name for the page',
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
      description: 'URL-friendly identifier (e.g., "home", "buying", "selling")',
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
      hero: 'hero',
    },
    prepare({ title, hero }: any) {
      return {
        title: title,
        subtitle: hero?.headline || 'No hero configured',
      };
    },
  },
};
