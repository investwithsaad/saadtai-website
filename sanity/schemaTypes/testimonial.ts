/**
 * Testimonial Schema
 * Client testimonials and social proof
 */

export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role / Title',
      type: 'string',
      description: 'e.g., "Investor" or "Real Estate Investor, Albany, NY"',
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {
        list: [
          { title: '5 Stars', value: 5 },
          { title: '4 Stars', value: 4 },
          { title: '3 Stars', value: 3 },
          { title: '2 Stars', value: 2 },
          { title: '1 Star', value: 1 },
        ],
      },
    },
    {
      name: 'displayOnHomepage',
      title: 'Display on Homepage',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'author',
      quote: 'quote',
      rating: 'rating',
    },
    prepare({ title, quote, rating }: any) {
      return {
        title,
        subtitle: `${rating ? rating + ' stars' : 'No rating'} - "${quote?.substring(0, 50)}..."`,
      };
    },
  },
};
