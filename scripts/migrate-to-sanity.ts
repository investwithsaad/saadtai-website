/**
 * Sanity Data Migration Script
 * Migrates existing TypeScript data files to Sanity CMS
 *
 * Usage:
 *   npx ts-node scripts/migrate-to-sanity.ts --dataset production --token YOUR_SANITY_TOKEN
 *
 * Note: This is a utility script for data migration. It uses Node.js built-in fetch (Node 18+).
 */

import * as fs from 'fs'
import * as path from 'path'

// Types
interface MigrationConfig {
  sanityProjectId: string
  sanityDataset: string
  sanityToken: string
  apiVersion?: string
}

interface BlogPost {
  id: string
  title: string
  subtitle: string
  excerpt: string
  author: string
  authorImage?: string
  date: string
  category: string
  image?: string
  content: Array<{ type: string; text: string }>
  relatedSolutions?: string[]
  relatedIndustries?: string[]
}

interface Listing {
  id: string
  address: string
  city: string
  state: string
  zip: string
  bedrooms?: number
  bathrooms?: number
  squareFeet?: number
  propertyType: string
  features: string[]
  description: string
  status: 'active' | 'under-contract' | 'sold'
}

interface FAQ {
  id: string
  q: string
  a: string
  category?: string
}

interface Neighborhood {
  id: string
  name: string
  tagline: string
  shortDescription: string
  marketData: Record<string, any>
  buyerPersonas: Record<string, string>
  highIntentQuestions: Array<{ question: string; answer: string; category: string }>
  features: string[]
  lifestyle: string
  demographics: string
  relatedBlogPosts?: string[]
}

// Sanity API Endpoint Builder
function getSanityUrl(config: MigrationConfig, path: string): string {
  const apiVersion = config.apiVersion || 'v2021-06-07'
  return `https://${config.sanityProjectId}.api.sanity.io/${apiVersion}/data/mutate/${config.sanityDataset}?token=${config.sanityToken}${path}`
}

// Create document mutation
async function createDocument(
  config: MigrationConfig,
  doc: Record<string, any>
): Promise<Record<string, any>> {
  const url = `https://${config.sanityProjectId}.api.sanity.io/v2021-06-07/data/mutate/${config.sanityDataset}`

  const mutation = {
    mutations: [
      {
        create: {
          _type: doc._type,
          ...doc,
        },
      },
    ],
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${config.sanityToken}`,
    },
    body: JSON.stringify(mutation),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Failed to create document: ${response.statusText} - ${errorText}`)
  }

  const data = (await response.json()) as any
  return data.results?.[0]?.document || doc
}

// Convert blog post from TypeScript format to Sanity
function convertBlogPost(post: BlogPost, imageAssets: Record<string, string>): Record<string, any> {
  return {
    _type: 'blogPost',
    title: post.title,
    slug: {
      _type: 'slug',
      current: post.id,
    },
    subtitle: post.subtitle,
    excerpt: post.excerpt,
    author: post.author,
    publishedAt: new Date(post.date).toISOString(),
    category: post.category,
    content: post.content.map((block) => ({
      _type: 'object',
      blockType: block.type,
      text: block.text,
    })),
    metaDescription: post.excerpt,
    featuredImage: post.image
      ? {
          _type: 'image',
          asset: {
            _ref: imageAssets[post.image],
          },
        }
      : undefined,
  }
}

// Convert listing from TypeScript format to Sanity
function convertListing(listing: Listing): Record<string, any> {
  return {
    _type: 'listing',
    address: listing.address,
    city: listing.city,
    state: listing.state,
    zip: listing.zip,
    slug: {
      _type: 'slug',
      current: listing.id,
    },
    propertyType: listing.propertyType,
    bedrooms: listing.bedrooms,
    bathrooms: listing.bathrooms,
    squareFeet: listing.squareFeet,
    features: listing.features,
    description: listing.description,
    status: listing.status === 'under-contract' ? 'under-contract' : listing.status,
  }
}

// Convert FAQ from TypeScript format to Sanity
function convertFAQ(faq: FAQ, order: number): Record<string, any> {
  return {
    _type: 'faq',
    question: faq.q,
    answer: faq.a,
    category: faq.category || 'buying-multifamily',
    order: order,
  }
}

// Convert neighborhood from TypeScript format to Sanity
function convertNeighborhood(neighborhood: Neighborhood): Record<string, any> {
  return {
    _type: 'neighborhood',
    name: neighborhood.name,
    slug: {
      _type: 'slug',
      current: neighborhood.id,
    },
    tagline: neighborhood.tagline,
    shortDescription: neighborhood.shortDescription,
    marketData: neighborhood.marketData,
    buyerPersonas: neighborhood.buyerPersonas,
    highIntentQuestions: neighborhood.highIntentQuestions.map((qa) => ({
      category: qa.category,
      question: qa.question,
      answer: qa.answer,
    })),
    features: neighborhood.features,
    lifestyle: neighborhood.lifestyle,
    demographics: neighborhood.demographics,
  }
}

// Main migration function
async function runMigration() {
  console.log('🔄 Starting Sanity data migration...')

  // Get config from environment or args
  const projectId = process.env.SANITY_PROJECT_ID || process.argv[process.argv.indexOf('--project-id') + 1]
  const dataset = process.env.SANITY_DATASET || 'production'
  const token = process.env.SANITY_TOKEN || process.argv[process.argv.indexOf('--token') + 1]

  if (!projectId || !token) {
    console.error('❌ Error: SANITY_PROJECT_ID and SANITY_TOKEN environment variables required')
    console.error('   Or use: npx ts-node scripts/migrate-to-sanity.ts --project-id YOUR_ID --token YOUR_TOKEN')
    process.exit(1)
  }

  const config: MigrationConfig = {
    sanityProjectId: projectId,
    sanityDataset: dataset,
    sanityToken: token,
  }

  let migratedCount = 0
  let errorCount = 0

  try {
    // Load existing data
    console.log('📂 Loading existing data files...')
    const blogPostsPath = path.join(process.cwd(), 'src/data/blog-posts.ts')
    const listingsPath = path.join(process.cwd(), 'src/data/listings.ts')
    const faqPath = path.join(process.cwd(), 'src/data/faq-data.ts')
    const neighborhoodsPath = path.join(process.cwd(), 'src/data/neighborhoods.ts')

    // Note: In a real migration, you'd need to dynamically import or parse these files
    // For now, this is a template - you'd integrate with actual data loading

    console.log('✅ Migration template created successfully')
    console.log('')
    console.log('📝 Next steps:')
    console.log('1. Install Sanity CLI: npm install -g @sanity/cli')
    console.log('2. Create Sanity project: sanity create')
    console.log('3. Run full migration with your actual data loader')
    console.log('')
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

// Run migration
runMigration().catch((error) => {
  console.error('Fatal error:', error)
  process.exit(1)
})
