import { FAQ } from '@/types/faq';

export interface Neighborhood {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;

  marketData: {
    medianHomePrice: string;
    propertyTaxRate: string;
    schoolDistrictRating: string;
    walkScore: number;
    appreciation1Year: string;
    medianRent2BR: string;
  };

  // Buyer persona messaging
  buyerPersonas: {
    valueInvestor: string;
    qualityOfLifeFamily: string;
    urbanProfessional: string;
  };

  // High-intent Q&A (exact answers from research)
  highIntentQuestions: Array<{
    question: string;
    answer: string;
    category: 'taxes' | 'schools' | 'cost' | 'lifestyle' | 'investment' | 'commute';
  }>;

  features: string[];
  lifestyle: string;
  demographics: string;
  relatedBlogPosts?: string[];
}

export const neighborhoods: Neighborhood[] = [
  {
    id: 'albany',
    name: 'Albany',
    tagline: 'State Capital Energy, Urban Lifestyle',
    shortDescription:
      'New York\'s capital city offers urban energy, walkable neighborhoods, and vibrant cultural amenities. Perfect for professionals seeking city living with access to state government jobs and cultural institutions.',

    marketData: {
      medianHomePrice: '$276,000 - $295,000',
      propertyTaxRate: '$2.73 per $1,000 assessed value (county)',
      schoolDistrictRating: 'B (Niche.com, 2025)',
      walkScore: 65,
      appreciation1Year: '+5.4%',
      medianRent2BR: '$1,550/month',
    },

    buyerPersonas: {
      urbanProfessional:
        'Albany\'s walkable downtown neighborhoods (Center Square Walk Score 95, Downtown 93) attract professionals who value urban energy, proximity to state jobs, and dining/cultural scenes. Commute to downtown is immediate.',
      qualityOfLifeFamily:
        'Albany offers diverse neighborhoods with good schools (B rating), lower property taxes than surrounding areas, and community amenities. Best for families seeking urban/suburban balance.',
      valueInvestor:
        'Lower median prices ($276K) compared to Niskayuna create entry points for investors. Solid rental market at $1,550/month for 2BR. Growing appreciation (+5.4% YoY) as state capital attracts workforce.',
    },

    highIntentQuestions: [
      {
        question: 'What are property taxes in Albany vs Schenectady vs Niskayuna?',
        answer:
          'Albany: $2.73 per $1,000 assessed value (County rate). Schenectady (City): $13.37 per $1,000. Niskayuna (Town): $2.84 per $1,000. Total property tax bills vary significantly based on school district. Note: Schenectady\'s higher city rate is offset by lower median home prices.',
        category: 'taxes',
      },
      {
        question: 'What are the best school districts in Albany?',
        answer:
          'Albany City School District: B rating on Niche.com with 8,329 students. Albany High School: B+ grade. Math proficiency 27%, reading 30%. For higher-rated schools, consider suburbs like Niskayuna (A rating) or Bethlehem Central.',
        category: 'schools',
      },
      {
        question: 'What makes Albany walkable?',
        answer:
          'Albany has a Walk Score of 65 overall. Center Square neighborhood: 95 (Walker\'s Paradise). Downtown: 93. Central Avenue: 95. These neighborhoods have good public transit (CDTA buses), bike lanes, and walkable retail/dining. Most errands can be accomplished on foot.',
        category: 'lifestyle',
      },
      {
        question: 'Commute time from Albany to Schenectady?',
        answer:
          'Albany to Schenectady downtown: 20-25 minutes via I-87 during off-peak hours. Rush hour: 35-45 minutes. Albany to GE campus in Schenectady: 30-40 minutes depending on traffic and exact location.',
        category: 'commute',
      },
      {
        question: 'Total monthly cost of owning a home in Albany?',
        answer:
          'Example for $295K home: Mortgage $1,850 (20% down, 7% rate), Property Tax $67/month ($2.73 rate + school district), Insurance $100/month, Utilities ~$120/month, Maintenance $150/month. Total ~$2,287/month. Actual costs vary by exact neighborhood and school district.',
        category: 'cost',
      },
      {
        question: 'What rental yields can I expect in Albany?',
        answer:
          'Median 2BR rent: $1,550/month. Median home price: $285K average. Gross rent-to-price ratio: 6.5% (good for northeast standard). Accounting for taxes, insurance, maintenance (expenses ~35%), net yield: ~4.2%. Good for appreciation-focused strategy.',
        category: 'investment',
      },
    ],

    features: [
      'Vibrant downtown with restaurants and cultural venues',
      'State government job hub',
      'Diverse neighborhood options',
      'Good public transit (CDTA)',
      'Growing young professional community',
      'Lower median prices than Niskayuna',
    ],
    lifestyle:
      'Urban professional seeking walkable neighborhoods, cultural amenities, state government careers, and city energy. Easy downtown living without suburban commute.',
    demographics:
      'Diverse population with growing millennial and young professional presence. Artist communities in neighborhoods like Hudson Square.',
  },

  {
    id: 'schenectady',
    name: 'Schenectady',
    tagline: 'Affordable Entry Point, Strong Rental Market',
    shortDescription:
      'Historic Stockade district meets revitalization momentum. Lower entry prices ($279K median) with strong cash flow potential make Schenectady ideal for investors seeking monthly income and upside as downtown redevelopment attracts new residents.',

    marketData: {
      medianHomePrice: '$279,000 - $299,000',
      propertyTaxRate: '$13.37 per $1,000 assessed value (city)',
      schoolDistrictRating: 'B- (Niche.com, 2025)',
      walkScore: 76,
      appreciation1Year: '+9.8%',
      medianRent2BR: '$1,471 - $1,695/month',
    },

    buyerPersonas: {
      valueInvestor:
        'Schenectady offers the best cash flow potential: lowest median price ($279K), strong rents ($1,471-$1,695/month), and solid appreciation (+9.8% YoY). Rental yield: 6.7% gross, 4.3% net. Revitalization near Proctors Theatre and Rivers Casino adds upside.',
      urbanProfessional:
        'Historic Stockade district (Walk Score 76) offers character, lower costs, and walkability. Growing downtown has nightlife and dining. GE campus employees benefit from short commute. Revitalization momentum creates vibrant neighborhood feel.',
      qualityOfLifeFamily:
        'Lower home prices mean more house for the money. Schools rated B-. Downtown revitalization bringing new families and community investment. Parks and Mohawk Riverfront Trail access. Consider if willing to accept lower school ratings for affordability.',
    },

    highIntentQuestions: [
      {
        question: 'Why are Schenectady property taxes so high?',
        answer:
          'City of Schenectady: $13.37 per $1,000 assessed value (2025 budget, up from $12.98). This is 4-5x higher than town rates. However, median homes are much cheaper ($279K vs $387K in Niskayuna), so actual tax bills are often similar. Example: $250K Schenectady home = $3,342/year. $387K Niskayuna home = $11,000+/year.',
        category: 'taxes',
      },
      {
        question: 'Is Schenectady worth it with high tax rates but lower prices?',
        answer:
          'Yes, for investors. While Schenectady\'s tax rate is high per $1,000, the much lower home prices mean total tax bills are competitive. Plus: stronger rents ($1,471-$1,695 vs Albany $1,550), higher appreciation (+9.8%), revitalization momentum near Proctors/Rivers Casino, and strong cash flow potential. The math works.',
        category: 'investment',
      },
      {
        question: 'What rental yields can I expect in Schenectady?',
        answer:
          'Best cash flow of the three neighborhoods. Median rent: $1,471-$1,695/month. Median price: $279K. Gross rent-to-price ratio: 6.7%. After expenses (taxes, insurance, maintenance ~35%), net yield: ~4.3%. Plus appreciation at +9.8% YoY. This is the sweet spot for income-focused investors.',
        category: 'investment',
      },
      {
        question: 'Best neighborhoods in Schenectady for rental investment?',
        answer:
          'Stockade District: Historic charm, Walk Score 76, strong appreciation. Proctors Theatre area: Downtown revitalization, growing tenant base. Rivers Casino neighborhood: New investment, improving amenities. These areas have strong renter demand and appreciation potential.',
        category: 'investment',
      },
      {
        question: 'How is the Schenectady market recovering?',
        answer:
          'Strong recovery indicators: 2025 appreciation +9.8% YoY, Proctors Theatre revitalization, Rivers Casino attraction (opened 2023), population stabilization. Downtown is cleaner, safer, with new restaurants and businesses. GE investments in local STEM initiatives. Market momentum improving.',
        category: 'investment',
      },
      {
        question: 'Commute from Schenectady to Albany?',
        answer:
          'Schenectady to Albany downtown: 20-25 minutes via I-87 off-peak, 35-45 minutes rush hour. Schenectady to GE: 10-15 minutes (short commute advantage). To hospitals/state offices: 25-35 minutes. Many residents work locally at GE or downtown Schenectady jobs.',
        category: 'commute',
      },
    ],

    features: [
      'Lowest median home prices ($279K)',
      'Strong rental market ($1,471-$1,695/month)',
      'Historic Stockade district charm',
      'Proctors Theatre revitalization',
      'Rivers Casino (opened 2023)',
      'GE campus nearby',
      'Mohawk River Trail access',
      'Highest appreciation rate (+9.8%)',
    ],
    lifestyle:
      'Value investor seeking cash flow and appreciation. Historic neighborhoods with revitalization momentum. Growing walkability and dining scene. Lower cost of living than Albany and Niskayuna.',
    demographics:
      'Mix of longtime residents, young professionals attracted by revitalization, GE employees, investors. Increasing diversity and millennial interest.',
  },

  {
    id: 'niskayuna',
    name: 'Niskayuna',
    tagline: 'Top Schools, Family-Friendly Suburbs',
    shortDescription:
      'Highest-rated school district (A grade, Niche.com 2025) in the Capital Region. Median home $387K reflects premium for education. Perfect for families prioritizing schools, safety, and established suburban community.',

    marketData: {
      medianHomePrice: '$387,000',
      propertyTaxRate: '$2.84 per $1,000 assessed value (town)',
      schoolDistrictRating: 'A (Niche.com, 2025) - #3 in Albany Area',
      walkScore: 45,
      appreciation1Year: '+4.7%',
      medianRent2BR: '$1,918/month',
    },

    buyerPersonas: {
      qualityOfLifeFamily:
        'Niskayuna Central School District (A rating, Niche.com, ranked #3 in Albany Area) is the primary draw. 95% college acceptance, strong test scores. Safe, established suburban community with parks, trails, and family amenities. Worth the premium price for families prioritizing education.',
      valueInvestor:
        'Higher price point ($387K) and lower rent-to-price ratio (6%) means less cash flow than Schenectady. However: strong school district means stable property values, appreciation (+4.7%), and professional tenant base. Better for long-term appreciation strategy than monthly cash flow.',
      urbanProfessional:
        'Niskayuna appeals to professionals who value suburban quality of life over walkability. Commute to Albany/Schenectady: 20-30 minutes. Good schools matter even without kids (resale value). Lower walk score (45) but excellent community amenities.',
    },

    highIntentQuestions: [
      {
        question: 'Why is Niskayuna more expensive than Albany and Schenectady?',
        answer:
          'School District Premium: Niskayuna Central SD rated A (Niche.com, 2025) with 95% college acceptance vs Albany B, Schenectady B-. Median home: $387K vs Albany $285K, Schenectady $279K. Parents pay for top schools. Additional factors: safer community, newer homes, established suburban amenities.',
        category: 'cost',
      },
      {
        question: 'What makes Niskayuna schools worth the higher prices?',
        answer:
          'Niskayuna Central SD: A rating (2025), #3 Best School Districts in Albany Area (Niche). Test scores: 66% proficient in math, 65% in reading. Niskayuna High School: A grade, ranked #1 in Schenectady County, 95% college acceptance. College Prep focused. Advanced Placement courses available. Strong STEM programs.',
        category: 'schools',
      },
      {
        question: 'Niskayuna High School college acceptance rates?',
        answer:
          'Niskayuna High School: A grade from Niche.com. College acceptance rate: 95%. School provides strong college counseling, AP courses, and preparation. Average SAT scores above state average. Top schools in district: Iroquoia Elementary, Veeder Elementary. Not just acceptance rate but college-readiness preparation.',
        category: 'schools',
      },
      {
        question: 'Is Niskayuna safe for families?',
        answer:
          'Niskayuna is one of the safest communities in the Capital Region. Lower crime rates than Albany and Schenectady. Established suburban character with neighborhood watch, community policing, and low violent crime. Parks, trails, and family activities throughout town. Great schools attract stable, family-oriented residents.',
        category: 'lifestyle',
      },
      {
        question: 'What is the total monthly cost of owning a home in Niskayuna?',
        answer:
          'Example for $387K home: Mortgage $2,440 (20% down, 7% rate), Property Tax $92/month ($2.84 rate + school district), Insurance $125/month, Utilities ~$140/month, Maintenance $200/month. Total ~$2,997/month. Higher than Albany but reflects premium schools and safety. Appreciation (+4.7%) helps offset higher costs.',
        category: 'cost',
      },
      {
        question: 'Total cost of ownership comparison: Niskayuna vs Albany vs Schenectady?',
        answer:
          'Niskayuna: $387K home = ~$2,997/month total. Albany: $285K home = ~$2,287/month total. Schenectady: $279K home = ~$2,410/month total (despite higher tax rate, lower home price saves money). Niskayuna premium = $500-700/month for top schools. Over 30-year mortgage: $180K-252K more. Worth it for school-focused families.',
        category: 'cost',
      },
      {
        question: 'Commute from Niskayuna to Albany?',
        answer:
          'Niskayuna to Albany downtown: 20-25 minutes via I-87 off-peak, 30-40 minutes rush hour. To GE campus: 20-30 minutes. Proximity to I-87 makes commuting easy. Many residents prefer suburbs but work in Albany/Schenectady. Good balance of family life and city job access.',
        category: 'commute',
      },
      {
        question: 'What are the most affordable areas within Niskayuna school district?',
        answer:
          'Niskayuna town average: $387K. Lower-priced pockets: Older properties south of Route 390, smaller homes (~1,500 sq ft) vs new builds (2,000+ sq ft). Condos/townhomes: $300K-$350K range still in top school district. Scout neighborhoods like Scotia-Glenville border for slightly lower prices while keeping Niskayuna SD access.',
        category: 'cost',
      },
    ],

    features: [
      'Top-rated school district (A grade)',
      '95% college acceptance rate',
      'Safe, established suburban community',
      'New homes and modern amenities',
      'Mohawk River Trail access',
      'Parks and family activities',
      'Proximity to I-87 for easy commute',
      'Strong community investment',
    ],
    lifestyle:
      'Quality-of-life family prioritizing top schools, safety, and suburban amenities. Professional community with strong emphasis on education. Values stability and community investment.',
    demographics:
      'Families with school-age children, established professionals, empty nesters attracted by quality schools. Higher median income than Albany and Schenectady. Strong community engagement.',
  },
];

/**
 * Comparison summary for homepage/marketing
 */
export const neighborhoodComparison = {
  valueInvestor: {
    bestNeighborhood: 'schenectady',
    reason: 'Lowest entry price, highest cash flow, best appreciation',
    highlights: ['$279K median price', '$1,471-$1,695 rent', '+9.8% appreciation', '6.7% gross yield'],
  },
  qualityOfLifeFamily: {
    bestNeighborhood: 'niskayuna',
    reason: 'Top schools (A rating), safest community, family amenities',
    highlights: ['A-rated schools', '95% college acceptance', 'Safe suburbs', 'Family trails/parks'],
  },
  urbanProfessional: {
    bestNeighborhood: 'albany',
    reason: 'Walkable neighborhoods, urban energy, career opportunities',
    highlights: ['Walk Score 65 (95 downtown)', 'State capital jobs', 'Culture/dining', 'Short commute'],
  },
};
