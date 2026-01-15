/**
 * Page Schema
 * Master document for editable pages with hero and sections
 */

import { CharacterCountInput } from '../components/CharacterCountInput'
import { DescriptionInput } from '../components/DescriptionInput'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      components: {
        input: CharacterCountInput,
      },
      validation: (Rule: any) => Rule.required().min(10).max(70).warning('Title should be 50-60 characters for best SEO results'),
      description: 'Page title displayed in browser tab and as SEO title (10-70 characters recommended: 50-60)',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      readOnly: true,
      description: 'System identifier - automatically generated from page title',
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 2,
      components: {
        input: DescriptionInput,
      },
      validation: (Rule: any) =>
        Rule.required()
          .min(110)
          .max(160)
          .warning('Meta description should be 110-160 characters (Google recommendation)'),
      description: 'SEO meta description (110-160 characters). Used by Google for snippets and Facebook for link previews. Longer descriptions may be truncated.',
    },
    {
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image for social sharing (1200x630px recommended)',
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
      slug: 'slug.current',
      headline: 'hero.headline',
    },
    prepare({ title, slug, headline }: any) {
      return {
        title: `${title}`,
        subtitle: `${slug}`,
      };
    },
  },
};
