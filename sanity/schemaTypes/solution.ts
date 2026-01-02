/**
 * Solution/Service Schema
 * Services offered by the business
 */

export default {
  name: 'solution',
  title: 'Solution / Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Name',
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
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'string',
    },
    {
      name: 'longDescription',
      title: 'Long Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'features',
      title: 'Features / Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'ratesAndTerms',
      title: 'Rates & Terms',
      type: 'object',
      fields: [
        {
          name: 'availability',
          title: 'Availability',
          type: 'string',
        },
        {
          name: 'timeline',
          title: 'Timeline',
          type: 'string',
        },
        {
          name: 'requirement',
          title: 'Requirements',
          type: 'string',
        },
        {
          name: 'support',
          title: 'Support',
          type: 'string',
        },
      ],
    },
    {
      name: 'commonQuestions',
      title: 'Common Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'id',
              title: 'ID',
              type: 'string',
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
              rows: 3,
            },
          ],
          preview: {
            select: {
              title: 'question',
            },
          },
        },
      ],
    },
    {
      name: 'bestFor',
      title: 'Best For',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Ideal customer types',
    },
    {
      name: 'qualificationCriteria',
      title: 'Qualification Criteria',
      type: 'object',
      fields: [
        {
          name: 'minimumRevenue',
          title: 'Minimum Revenue',
          type: 'string',
        },
        {
          name: 'minimumTimeInBusiness',
          title: 'Minimum Time in Business',
          type: 'string',
        },
        {
          name: 'minimumCreditScore',
          title: 'Minimum Credit Score',
          type: 'string',
        },
        {
          name: 'requirements',
          title: 'Other Requirements',
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
