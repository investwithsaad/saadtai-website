/**
 * Property Listing Schema
 * Real estate listings with full property details
 */

export default {
  name: 'listing',
  title: 'Property Listing',
  type: 'document',
  fields: [
    {
      name: 'address',
      title: 'Street Address',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'state',
      title: 'State',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      initialValue: 'NY',
    },
    {
      name: 'zip',
      title: 'ZIP Code',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'address',
        maxLength: 96,
      },
    },
    {
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      options: {
        list: [
          { title: 'Single Family', value: 'single-family' },
          { title: 'Duplex', value: 'duplex' },
          { title: '2-Unit Property', value: '2-unit property' },
          { title: '3-Unit Property', value: '3-unit property' },
          { title: 'Multi-Family', value: 'multi-family' },
          { title: 'Apartment', value: 'apartment' },
          { title: 'Townhouse', value: 'townhouse' },
        ],
      },
    },
    {
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'number',
    },
    {
      name: 'bathrooms',
      title: 'Bathrooms',
      type: 'number',
    },
    {
      name: 'squareFeet',
      title: 'Square Feet',
      type: 'number',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Sale price or listed price',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available', value: 'available' },
          { title: 'Active', value: 'active' },
          { title: 'Sold', value: 'sold' },
          { title: 'Pending', value: 'pending' },
          { title: 'Under Contract', value: 'under-contract' },
          { title: 'Off Market', value: 'off-market' },
        ],
      },
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key features or amenities (e.g., "Updated kitchen", "Hardwood floors")',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    },
    {
      name: 'yearsBuilt',
      title: 'Year Built',
      type: 'number',
    },
    {
      name: 'daysOnMarket',
      title: 'Days On Market',
      type: 'number',
    },
  ],
  preview: {
    select: {
      address: 'address',
      city: 'city',
      status: 'status',
    },
    prepare({ address, city, status }: any) {
      return {
        title: `${address}, ${city}`,
        subtitle: status,
      };
    },
  },
};
