/**
 * Neighborhood Schema
 * Market data and buyer personas for neighborhoods
 */

export default {
  name: 'neighborhood',
  title: 'Neighborhood',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Neighborhood Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short marketing tagline',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'marketData',
      title: 'Market Data',
      type: 'object',
      fields: [
        {
          name: 'medianHomePrice',
          title: 'Median Home Price',
          type: 'string',
        },
        {
          name: 'propertyTaxRate',
          title: 'Property Tax Rate',
          type: 'string',
        },
        {
          name: 'schoolDistrictRating',
          title: 'School District Rating',
          type: 'string',
        },
        {
          name: 'walkScore',
          title: 'Walk Score',
          type: 'number',
        },
        {
          name: 'appreciation1Year',
          title: 'Annual Appreciation',
          type: 'string',
        },
        {
          name: 'medianRent2BR',
          title: 'Median Rent (2BR)',
          type: 'string',
        },
      ],
    },
    {
      name: 'buyerPersonas',
      title: 'Buyer Personas',
      type: 'object',
      fields: [
        {
          name: 'valueInvestor',
          title: 'Value Investor',
          type: 'text',
          rows: 3,
        },
        {
          name: 'urbanProfessional',
          title: 'Urban Professional',
          type: 'text',
          rows: 3,
        },
        {
          name: 'qualityOfLifeFamily',
          title: 'Quality of Life Family',
          type: 'text',
          rows: 3,
        },
      ],
    },
    {
      name: 'highIntentQuestions',
      title: 'High-Intent Q&A',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'category',
              title: 'Category',
              type: 'string',
              options: {
                list: [
                  { title: 'Taxes', value: 'taxes' },
                  { title: 'Schools', value: 'schools' },
                  { title: 'Cost', value: 'cost' },
                  { title: 'Lifestyle', value: 'lifestyle' },
                  { title: 'Investment', value: 'investment' },
                  { title: 'Commute', value: 'commute' },
                ],
              },
            },
            {
              name: 'question',
              title: 'Question',
              type: 'string',
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 4,
            },
          ],
          preview: {
            select: {
              question: 'question',
              category: 'category',
            },
            prepare({ question, category }: any) {
              return {
                title: question,
                subtitle: `[${category}]`,
              };
            },
          },
        },
      ],
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'lifestyle',
      title: 'Lifestyle Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'demographics',
      title: 'Demographics',
      type: 'text',
      rows: 3,
    },
  ],
  preview: {
    select: {
      title: 'name',
      tagline: 'tagline',
    },
    prepare({ title, tagline }: any) {
      return {
        title,
        subtitle: tagline,
      };
    },
  },
};
