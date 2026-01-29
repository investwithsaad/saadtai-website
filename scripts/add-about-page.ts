/**
 * Add About Page to Sanity
 *
 * Minimal script to add just the About page without affecting existing data
 *
 * Usage:
 *   npm run ts-node scripts/add-about-page.ts
 */

import * as dotenv from 'dotenv'
import * as path from 'path'

dotenv.config({
  path: path.resolve(process.cwd(), '.env.local'),
})

import { createClient } from 'next-sanity'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2021-06-07',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN!,
})

async function addAboutPage() {
  console.log('📄 Adding About page to Sanity...\n')

  const aboutPage = {
    _type: 'page',
    title: 'About',
    slug: { _type: 'slug', current: 'about' },
    description: 'About Saad Tai - Multifamily Investment Advisor specializing in buy/sell strategies in New York and Florida.',
    hero: {
      headline: 'Straight Talk. No Fluff.',
      description: 'Licensed REALTOR® serving all across New York State, with deep expertise in the Capital region. I\'m a portfolio-focused advisor—not just a transaction agent.',
      ctaText: 'Talk through your next move',
    },
  }

  try {
    const result = await client.create(aboutPage)
    console.log('✅ About page created successfully!')
    console.log(`   ID: ${result._id}`)
    console.log(`   Slug: about`)
    console.log('\n🎉 You can now edit the About page in Sanity Studio')
  } catch (error: any) {
    if (error.message.includes('already exists')) {
      console.log('ℹ️  About page already exists in Sanity')
    } else {
      console.error('❌ Failed to create About page:', error.message)
      process.exit(1)
    }
  }
}

addAboutPage().catch((error) => {
  console.error('Fatal error:', error)
  process.exit(1)
})
