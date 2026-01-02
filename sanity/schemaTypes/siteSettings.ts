/**
 * Site Settings Schema
 * Minimal global configuration - only what changes
 */

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'Invest with Saad',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'Multifamily Investment Advisor & Portfolio Strategy Guide',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
        {
          name: 'address',
          title: 'Address',
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'siteName',
    },
  },
};
