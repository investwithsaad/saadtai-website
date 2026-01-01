export interface Listing {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  bedrooms?: number;
  bathrooms?: number;
  squareFeet?: number;
  propertyType: string;
  features: string[];
  description: string;
  status: 'active' | 'under-contract' | 'sold';
}

export const listings: Listing[] = [
  {
    id: '1',
    address: '12 Tyler Street',
    city: 'Troy',
    state: 'NY',
    zip: '12180',
    bedrooms: 7,
    bathrooms: 3,
    squareFeet: 3333,
    propertyType: '2-unit property',
    features: ['Remodeled kitchen', 'Functional layout', 'Oversized rooms'],
    description: 'Turn-key and ideal for student or multi-tenant housing near RPI, Sage, and downtown',
    status: 'sold',
  },
  {
    id: '2',
    address: '429 1st Street',
    city: 'Troy',
    state: 'NY',
    zip: '12180',
    bedrooms: 7,
    bathrooms: 2,
    squareFeet: 3576,
    propertyType: '2-unit property',
    features: ['Remodeled kitchen', 'Oversized layouts'],
    description: 'Ideal for student or multi-tenant housing near RPI, Sage, and downtown',
    status: 'sold',
  },
  {
    id: '3',
    address: '8 Wilkins Avenue',
    city: 'Albany',
    state: 'NY',
    zip: '12206',
    propertyType: '2-unit property',
    features: ['Washer/dryer hookups', 'Private driveway', 'Dry basement storage'],
    description: 'Well-maintained with reliable tenants and strong income potential',
    status: 'sold',
  },
  {
    id: '4',
    address: '1123 Ardsley Road',
    city: 'Schenectady',
    state: 'NY',
    zip: '12308',
    bedrooms: 3,
    bathrooms: 1,
    squareFeet: 1973,
    propertyType: 'Single family home',
    features: ['Updated kitchen', 'Spacious backyard', 'Modern finishes'],
    description: 'Beautifully remodeled in highly walkable neighborhood',
    status: 'sold',
  },
  {
    id: '5',
    address: '10 Wilkins Avenue',
    city: 'Albany',
    state: 'NY',
    zip: '12206',
    bedrooms: 6,
    bathrooms: 2,
    squareFeet: 2294,
    propertyType: '2-unit property',
    features: ['Updated roof', 'Central air', 'Currently leased below market'],
    description: 'Fully remodeled with built-in equity and investment opportunity',
    status: 'under-contract',
  },
  {
    id: '6',
    address: '740 Eastern Avenue',
    city: 'Schenectady',
    state: 'NY',
    zip: '12308',
    propertyType: 'Duplex',
    features: ['Separate utilities', 'Garage'],
    description: 'Fully renovated with strong rental potential—turn-key',
    status: 'sold',
  },
];
