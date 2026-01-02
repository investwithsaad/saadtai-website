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
      name: 'page',
      title: 'Display Page',
      type: 'string',
      options: {
        list: [
          { title: 'Buying Page', value: 'buying' },
          { title: 'Selling Page', value: 'selling' },
          { title: 'Landing/Main Page', value: 'landing' },
          { title: 'VIP Investor List', value: 'vip-investor-list' },
          { title: 'Calculator Page', value: 'calculator' },
          { title: 'FAQ Page', value: 'faq' },
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
      page: 'page',
      order: 'order',
    },
    prepare({ title, page, order }: any) {
      return {
        title: title,
        subtitle: `[${page}] Order: ${order || 'unset'}`,
      };
    },
  },
};
