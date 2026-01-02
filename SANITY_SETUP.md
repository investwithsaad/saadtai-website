# Sanity CMS Migration Guide

Complete guide to setting up Sanity CMS for the Invest with Saad website, migrating existing content, and enabling non-technical content management.

---

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Quick Start](#quick-start)
4. [Schema Design](#schema-design)
5. [Data Migration](#data-migration)
6. [Next.js Integration](#nextjs-integration)
7. [Team Setup](#team-setup)
8. [Workflow & Testing](#workflow--testing)
9. [Troubleshooting](#troubleshooting)

---

## Overview

This setup enables:
- ✅ Non-technical team members to edit copy without code access
- ✅ A/B testing of content variants
- ✅ Semi-automated listing management
- ✅ Scalable blog post publishing
- ✅ Real-time content updates (no rebuilds needed)
- ✅ Free tier until growth requires scaling

**Free Plan Details (Sanity):**
- 5 collaborators
- 3 datasets
- 20 API requests/min
- Unlimited documents

---

## Prerequisites

### Required Accounts
- [Sanity.io account](https://www.sanity.io) (free)
- GitHub account (already have)
- Node.js 16+ installed locally

### Required Information
- **Sanity Project ID** (created during Sanity setup)
- **Sanity API Token** (with write access)
- **Dataset name** (we'll use "production")

### Local Setup
```bash
# Check Node version
node --version  # Should be 16+

# Install dependencies
npm install sanity @sanity/vision
```

---

## Quick Start

### 1. Create Sanity Project

```bash
# Go to https://www.sanity.io/manage and create a new project
# Name: "Invest with Saad"
# Choose: "Start from scratch" or use existing project

# Note your Project ID from the dashboard
# It looks like: abc123def456
```

### 2. Generate API Token

In Sanity dashboard:
1. Go to **Settings** → **API tokens**
2. Click **Add API token**
3. Name it "Next.js Integration"
4. Select **Editor** (read + write permissions)
5. Copy the token (looks like: `sanXYZ...`)

### 3. Run Setup Script

```bash
# Set environment variables
export SANITY_PROJECT_ID="your_project_id"
export SANITY_DATASET="production"
export SANITY_TOKEN="sanXYZ..."

# Run setup automation
npm run setup:sanity
```

This script will:
- ✅ Create the dataset in Sanity
- ✅ Create `.env.local` with your credentials
- ✅ Create `sanity.config.ts`
- ✅ Add scripts to `package.json`

### 4. Start Sanity Studio

```bash
npm run sanity:start
```

Visit `http://localhost:3333` → You should see Sanity Studio loaded with all schemas.

### 5. Test with Sample Data

1. In Sanity Studio, click **Blog Post**
2. Click **Create**
3. Fill in test data:
   - Title: "Test Blog Post"
   - Slug: auto-generated
   - Excerpt: "This is a test"
   - Author: "Saad Tai"
   - Published Date: Today
   - Category: "Investment"
   - Content: Add a test paragraph
4. Click **Publish**

Congratulations! 🎉 You've created your first Sanity document.

---

## Schema Design

### Document Types

Your Sanity project includes 8 document types:

#### 1. **Blog Post** (`blogPost`)
Structured blog posts with rich content blocks.

**Fields:**
- `title` (string, required)
- `slug` (slug, auto-generated from title)
- `subtitle` (string)
- `excerpt` (text)
- `featuredImage` (image with hotspot)
- `author` (string)
- `publishedAt` (datetime)
- `category` (string: Investment, Market Analysis, etc.)
- `content` (array of content blocks: paragraph, h2, h3, blockquote)
- `metaDescription` (SEO)
- `relatedSolutions` (references to Solutions)

**Example Usage:**
```
Title: "5-Year Home Price Appreciation in the Capital Region"
Slug: auto-generated → "5-year-home-price-appreciation-capital-region"
Author: "Saad Tai"
Category: "Investment"
Content: [
  { type: 'h2', text: 'Market Overview' },
  { type: 'p', text: 'The Capital Region has seen strong appreciation...' },
  { type: 'h3', text: 'Key Metrics' },
  { type: 'p', text: 'Over the past 5 years, both Albany and Schenectady...' }
]
```

#### 2. **Property Listing** (`listing`)
Real estate property listings for the listings page.

**Fields:**
- `address` (string, required)
- `city` (string, required)
- `state` (string, required)
- `zip` (string, required)
- `propertyType` (string: Single Family, Duplex, 2-Unit, Multi-Family, etc.)
- `bedrooms` (number)
- `bathrooms` (number)
- `squareFeet` (number)
- `price` (number)
- `status` (string: Available, Sold, Pending, Under Contract, Off Market)
- `features` (array of strings)
- `description` (text)
- `yearsBuilt` (number)
- `daysOnMarket` (number)

#### 3. **FAQ** (`faq`)
Frequently asked questions organized by category.

**Fields:**
- `question` (string, required)
- `answer` (text, required)
- `category` (string: Buying Multifamily, Selling & Exit Strategy, Investor Strategy, Investor Network, Analysis & Tools)
- `order` (number: controls display order within category)

**Categories:**
- Buying Multifamily
- Selling & Exit Strategy
- Investor Strategy
- Investor Network
- Analysis & Tools

#### 4. **Neighborhood** (`neighborhood`)
Market data and buyer personas for neighborhoods.

**Fields:**
- `name` (string, required)
- `slug` (slug, auto-generated)
- `tagline` (string)
- `shortDescription` (text)
- `marketData` (object):
  - `medianHomePrice` (string)
  - `propertyTaxRate` (string)
  - `schoolDistrictRating` (string)
  - `walkScore` (number)
  - `appreciation1Year` (string)
  - `medianRent2BR` (string)
- `buyerPersonas` (object):
  - `valueInvestor` (text)
  - `urbanProfessional` (text)
  - `qualityOfLifeFamily` (text)
- `highIntentQuestions` (array of Q&A by category)
- `features` (array of strings)
- `lifestyle` (text)
- `demographics` (text)

#### 5. **Testimonial** (`testimonial`)
Client testimonials for social proof.

**Fields:**
- `quote` (text, required)
- `author` (string, required)
- `role` (string)
- `image` (image with hotspot)
- `rating` (number: 1-5)
- `displayOnHomepage` (boolean)

#### 6. **Solution / Service** (`solution`)
Services offered (Home Selling, Home Buying, Home Valuation).

**Fields:**
- `title` (string, required)
- `slug` (slug, auto-generated)
- `description` (string)
- `longDescription` (text)
- `features` (array)
- `ratesAndTerms` (object):
  - `availability` (string)
  - `timeline` (string)
  - `requirement` (string)
  - `support` (string)
- `commonQuestions` (array of Q&A)
- `bestFor` (array of strings)
- `qualificationCriteria` (object)

#### 7. **Page Section** (`pageSection`)
Flexible content blocks for pages (enables A/B testing).

**Fields:**
- `identifier` (string, required: e.g., "homepage-hero", "investing-benefits")
- `title` (string)
- `heading` (string)
- `subheading` (string)
- `description` (text)
- `ctaText` (string: button label)
- `ctaLink` (string: URL or internal path)
- `image` (image)
- `variant` (string: a, b, c, d for A/B testing)
- `active` (boolean)

#### 8. **Site Settings** (`siteSettings`)
Global configuration and company information.

**Fields:**
- `siteName` (string)
- `tagline` (string)
- `description` (text)
- `founder` (object):
  - `name` (string)
  - `title` (string)
  - `license` (string)
  - `background` (text)
  - `motivation` (text)
- `contact` (object):
  - `phone` (string)
  - `email` (string)
  - `address` (string)
- `coreValues` (array of value objects)
- `philosophy` (object)
- `areaServed` (string)

---

## Data Migration

### Migration Overview

Your existing TypeScript data will be migrated to Sanity:

```
src/data/blog-posts.ts      → Sanity blogPost documents
src/data/listings.ts         → Sanity listing documents
src/data/faq-data.ts         → Sanity faq documents
src/data/neighborhoods.ts    → Sanity neighborhood documents
```

### Step-by-Step Migration

#### 1. Export Existing Data

The existing data is in TypeScript format. We'll convert and import it.

#### 2. Prepare Migration Script

The migration script (`scripts/migrate-to-sanity.ts`) reads your existing data and uploads to Sanity.

```bash
# Run the migration
npm run migrate:sanity -- \
  --project-id YOUR_PROJECT_ID \
  --token YOUR_SANITY_TOKEN
```

#### 3. Verify in Sanity Studio

```bash
npm run sanity:start
```

Check each document type to ensure data migrated correctly:
- Blog Posts: 2 posts
- Listings: 6 properties
- FAQs: 25+ questions
- Neighborhoods: 3 neighborhoods

#### 4. Manual Cleanup (if needed)

If migration has issues, you can manually recreate key documents:

1. **Blog Posts:**
   - Create 2 posts from existing blog-posts.ts
   - Test publishing workflow

2. **Listings:**
   - Create 3-5 sample listings
   - Verify status field works

3. **FAQs:**
   - Create 10-15 representative FAQs
   - Test category filtering

### Important Notes

- **Images:** Local image references will need to be re-uploaded to Sanity (asset management system)
- **Slugs:** Auto-generated from titles, but you can override
- **Relationships:** References to other documents (like "related solutions" on blog posts) need manual setup
- **Publishing:** All documents start as drafts; you must explicitly publish them

---

## Next.js Integration

### 1. Install Sanity Client

```bash
npm install next-sanity
```

### 2. Create Sanity Client Configuration

Create `src/lib/sanity.client.ts`:

```typescript
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-06-07',
  useCdn: false,
})
```

### 3. Create Query Helpers

Create `src/lib/sanity.queries.ts`:

```typescript
import { client } from './sanity.client'

export async function getBlogPosts() {
  return client.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc)
  `)
}

export async function getBlogPost(slug: string) {
  return client.fetch(`
    *[_type == "blogPost" && slug.current == $slug][0]
  `, { slug })
}

export async function getListings() {
  return client.fetch(`
    *[_type == "listing"] | order(status asc)
  `)
}

export async function getFAQs(category?: string) {
  const categoryFilter = category ? `&& category == $category` : ''
  return client.fetch(`
    *[_type == "faq" ${categoryFilter}] | order(order asc)
  `, { category })
}

export async function getNeighborhoods() {
  return client.fetch(`
    *[_type == "neighborhood"] | order(name asc)
  `)
}

export async function getSiteSettings() {
  return client.fetch(`
    *[_type == "siteSettings"][0]
  `)
}
```

### 4. Update Components to Use Sanity

Example: Update `/src/app/blog/page.tsx` to fetch from Sanity:

```typescript
import { getBlogPosts } from '@/lib/sanity.queries'

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post: any) => (
        <article key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <a href={`/blog/${post.slug.current}`}>Read more</a>
        </article>
      ))}
    </div>
  )
}
```

### 5. Environment Variables

Your `.env.local` (created by setup script) contains:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2021-06-07
SANITY_API_TOKEN=sanXYZ...
```

---

## Team Setup

### Invite Collaborators

1. Go to **Sanity Dashboard** → Your Project
2. Click **Settings** → **Members**
3. Click **Invite member**
4. Enter email addresses of team members (up to 5 on free plan)
5. Assign role:
   - **Editor:** Can create, edit, publish documents
   - **Contributor:** Can create and edit (admin must publish)
   - **Viewer:** Read-only access

### Workflow Options

#### Option 1: Full Editor Access (Simplest for 2 people)
- Both have **Editor** role
- Either can edit and publish
- Real-time collaboration in Sanity Studio

#### Option 2: Contributor Workflow (Better for scaling)
- Contributors: Can edit, but can't publish
- Admin (you): Reviews and publishes
- Prevents accidental publishing

### Example Setup (for 2 people)
1. You: **Editor** (main account)
2. Team member: **Editor** (full access to manage content)

---

## Workflow & Testing

### Content Publishing Workflow

#### 1. Create Draft
1. Open Sanity Studio (`npm run sanity:start`)
2. Create new document (e.g., new blog post)
3. Fill in fields
4. Click **Publish** when ready

#### 2. View in Next.js
1. Next.js fetches from Sanity API
2. Content appears on website
3. No rebuild required (real-time)

#### 3. Edit Copy for A/B Testing
1. Edit Page Section documents
2. Create variants (A, B, C, D)
3. Toggle which variant is active

### Testing Checklist

- [ ] Blog post creates and publishes
- [ ] Blog post appears on `/blog` listing
- [ ] Blog post displays on `/blog/[slug]` page
- [ ] FAQ creates and filters by category
- [ ] Listing creates and displays on `/listings`
- [ ] Neighborhood market data displays correctly
- [ ] Site Settings updates reflect on homepage
- [ ] Images upload and display correctly
- [ ] A/B test variants toggle active status
- [ ] Team member can edit (if invited)

### Performance Notes

- **API calls:** Free plan allows 20 API req/min (sufficient for 2-person testing)
- **Caching:** Use `useCdn: true` for production (faster queries)
- **Draft/Published:** Only published documents appear on live site

---

## Troubleshooting

### Issue: "Cannot find module 'sanity'"
**Solution:** Install dependencies
```bash
npm install sanity @sanity/vision next-sanity
```

### Issue: "Invalid project ID or token"
**Solution:** Verify environment variables
```bash
# Check .env.local
cat .env.local

# Verify token is valid in Sanity dashboard
# Token should start with 'san'
```

### Issue: "Dataset not found"
**Solution:** Create dataset
```bash
# Run setup script again
npm run setup:sanity
```

### Issue: "Images not uploading"
**Solution:** Ensure you have write permissions
- Go to Sanity Dashboard → API Tokens
- Verify token has **Editor** role (not just **Viewer**)

### Issue: "Changes not appearing on website"
**Solution:** Ensure document is published
1. In Sanity Studio, check document has **Publish** button (not grayed out)
2. Click **Publish**
3. Clear browser cache: `Ctrl+Shift+Delete`

### Issue: "Team member can't see studio"
**Solution:** Check invitation
- Verify email was correct
- Team member must accept Sanity invitation email
- Sanity dashboard should show them as member

### Common Migration Issues

**Q: What if image references break?**
A: Re-upload images to Sanity:
1. Create new image fields in documents
2. Upload images through Sanity UI
3. Sanity will create asset references automatically

**Q: What about product relationships (e.g., blog → solution)?**
A: Use Sanity references:
1. In Blog Post schema, add `solution` field (reference to `solution` type)
2. When editing blog post, select related solutions
3. Query with `-> solution` in GROQ

**Q: Can I rollback to TypeScript data?**
A: Yes, keep your old data files as backup. Switch back by reverting Next.js queries to import from `src/data/` instead of Sanity.

---

## Production Deployment

### Before Going Live

1. **Test all content paths:**
   - [ ] Blog posts load with all content blocks
   - [ ] Listings display correctly
   - [ ] FAQs filter by category
   - [ ] Neighborhoods show market data
   - [ ] Images are optimized

2. **Test team workflow:**
   - [ ] Team member can edit documents
   - [ ] Publishing works
   - [ ] Real-time collaboration functions

3. **Performance:**
   - [ ] API response times < 500ms
   - [ ] No rate-limiting issues (20 req/min is sufficient)
   - [ ] Images load quickly

### Deploy to Production

1. **Push code to main branch**
   ```bash
   git add .
   git commit -m "Add Sanity CMS integration"
   git push origin main
   ```

2. **Deployment will:**
   - Install Sanity dependencies
   - Build with new queries
   - Deploy Next.js with Sanity integration
   - Keep old data files as fallback (optional)

3. **Monitor:**
   - Check Vercel/production logs for errors
   - Verify Sanity API calls succeed
   - Monitor rate limiting (should be fine)

### Upgrade Plan (Optional)

If you outgrow free tier:
- **Growth plan:** $99/month
  - 10 collaborators
  - 5 datasets
  - 100 API req/min
  - Priority support

---

## Next Steps After Setup

1. **Immediate (Today)**
   - Set up Sanity project
   - Migrate existing data
   - Test content management workflow

2. **Week 1**
   - Both team members test Sanity Studio
   - Create 2-3 test blog posts
   - Verify Next.js integration works

3. **Week 2**
   - Plan A/B testing content variants
   - Set up listing automation (if needed)
   - Finalize team workflow

4. **Ongoing**
   - Use Sanity Studio for all content updates
   - Monitor performance metrics
   - Gather feedback from team member

---

## Support & Resources

- **Sanity Documentation:** https://www.sanity.io/docs
- **Next.js + Sanity Guide:** https://www.sanity.io/guides/nextjs-cms-guide
- **Schema Reference:** https://www.sanity.io/docs/schema-types
- **GROQ Query Language:** https://www.sanity.io/docs/groq

---

Questions? Need help? Check the Troubleshooting section or Sanity support.
