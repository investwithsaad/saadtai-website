/**
 * Site Settings Schema
 * Global configuration and company information
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
      rows: 4,
    },
    {
      name: 'founder',
      title: 'Founder Information',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
          initialValue: 'Saad Tai',
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'license',
          title: 'License Number',
          type: 'string',
          initialValue: '10401373295',
        },
        {
          name: 'background',
          title: 'Background',
          type: 'text',
          rows: 3,
        },
        {
          name: 'motivation',
          title: 'Personal Motivation',
          type: 'text',
          rows: 3,
        },
      ],
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
    {
      name: 'coreValues',
      title: 'Core Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'acronym',
              title: 'Acronym',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'philosophy',
      title: 'Company Philosophy',
      type: 'object',
      fields: [
        {
          name: 'headline',
          title: 'Headline',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
        },
      ],
    },
    {
      name: 'areaServed',
      title: 'Area Served',
      type: 'string',
      initialValue: 'Albany to Schenectady, NY',
    },
  ],
  preview: {
    select: {
      title: 'siteName',
    },
  },
};
