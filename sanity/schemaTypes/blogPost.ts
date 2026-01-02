/**
 * Blog Post Schema
 * Structured blog posts with rich content blocks
 */

export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
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
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Short description displayed under title',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Summary for blog listing page and SEO',
      rows: 3,
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Saad Tai',
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Investment', value: 'Investment' },
          { title: 'Market Analysis', value: 'market-analysis' },
          { title: 'Investment Strategy', value: 'investment-strategy' },
          { title: 'Market Update', value: 'market-update' },
        ],
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'blockType',
              title: 'Block Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Paragraph', value: 'p' },
                  { title: 'Heading 2', value: 'h2' },
                  { title: 'Heading 3', value: 'h3' },
                  { title: 'Blockquote', value: 'blockquote' },
                ],
              },
            },
            {
              name: 'text',
              title: 'Text',
              type: 'text',
              rows: 4,
            },
          ],
          preview: {
            select: {
              blockType: 'blockType',
              text: 'text',
            },
            prepare({ blockType, text }: any) {
              const preview = text?.substring(0, 60) + (text?.length > 60 ? '...' : '');
              return {
                title: `${blockType.toUpperCase()}: ${preview}`,
              };
            },
          },
        },
      ],
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'string',
      description: 'SEO meta description (60-160 characters)',
    },
    {
      name: 'relatedSolutions',
      title: 'Related Solutions',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'solution' } }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'publishedAt',
      image: 'featuredImage',
    },
    prepare({ title, date, image }: any) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString() : 'No date',
        media: image,
      };
    },
  },
};
