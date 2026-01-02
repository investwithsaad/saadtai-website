/**
 * Neighborhood Schema
 * Market data for neighborhoods - keep it minimal and focused
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
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Overview of the neighborhood',
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
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Main highlights and amenities',
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
