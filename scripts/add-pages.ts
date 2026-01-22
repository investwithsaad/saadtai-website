/**
 * Add Multiple Pages to Sanity
 *
 * Minimal script to add VIP, Blog, and Listings pages without affecting existing data
 *
 * Usage:
 *   npx ts-node scripts/add-pages.ts
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

async function addPages() {
  console.log('📄 Adding pages to Sanity...\n')

  const pages = [
    {
      _type: 'page',
      title: 'VIP Investor List',
      slug: { _type: 'slug', current: 'vip-investor-list' },
      description: 'Get early access to curated 2-4 unit deals with selective distribution. Fewer bidders, better negotiating power, and verified numbers for serious investors.',
      hero: {
        headline: 'Early Access to Off-Market Deals',
        description: 'Join a selective group of serious investors who get first look at curated multifamily opportunities before they hit the MLS.',
        ctaText: 'Join the VIP List',
      },
    },
    {
      _type: 'page',
      title: 'Blog',
      slug: { _type: 'slug', current: 'blog' },
      description: 'Multifamily investment insights and strategies for small investors. Cap rates, cash flow, market analysis, and portfolio guidance.',
      hero: {
        headline: 'Invest with Saad Blog',
        description: 'Multifamily investment strategies, market insights, and portfolio guidance for small investors in the Capital Region.',
        ctaText: 'Read Articles',
      },
    },
    {
      _type: 'page',
      title: 'Listings',
      slug: { _type: 'slug', current: 'listings' },
      description: 'Browse available multifamily investment properties and listings across Albany County, Schenectady County, and Rensselaer County. Find your next investment opportunity.',
      hero: {
        headline: 'Available Multifamily Investments',
        description: 'Curated 2-4 unit investment properties across the Capital Region. Verified numbers, honest analysis, investor-grade deals.',
        ctaText: 'Browse Properties',
      },
    },
  ]

  let created = 0
  let skipped = 0

  for (const page of pages) {
    try {
      await client.create(page)
      created++
      console.log(`✅ Created: ${page.title}`)
    } catch (error: any) {
      if (error.message.includes('already exists')) {
        skipped++
        console.log(`ℹ️  Already exists: ${page.title}`)
      } else {
        console.error(`❌ Failed to create ${page.title}:`, error.message)
      }
    }
  }

  console.log('\n' + '='.repeat(50))
  console.log(`✓ Created: ${created}`)
  console.log(`ℹ️  Already existed: ${skipped}`)
  console.log('='.repeat(50))
  console.log('\n🎉 Pages are ready to edit in Sanity Studio')
}

addPages().catch((error) => {
  console.error('Fatal error:', error)
  process.exit(1)
})
