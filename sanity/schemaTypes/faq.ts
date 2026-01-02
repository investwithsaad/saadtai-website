/**
 * FAQ Schema
 * Frequently asked questions organized by category
 */

export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 6,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Buying Multifamily', value: 'buying-multifamily' },
          { title: 'Selling & Exit Strategy', value: 'selling-exit' },
          { title: 'Investor Strategy', value: 'investor-strategy' },
          { title: 'Investor Network', value: 'investor-network' },
          { title: 'Analysis & Tools', value: 'analysis-tools' },
        ],
      },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first within category',
    },
  ],
  preview: {
    select: {
      title: 'question',
      category: 'category',
      order: 'order',
    },
    prepare({ title, category, order }: any) {
      return {
        title: title,
        subtitle: `[${category}] Order: ${order || 'unset'}`,
      };
    },
  },
};
