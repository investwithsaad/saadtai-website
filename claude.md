# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

This is **Saad Tai's multifamily real estate investment advisory website** with AI visibility optimization for ChatGPT, Bing, and other LLMs.

## Development Commands

### Getting Started
```bash
npm install          # Install dependencies
npm run dev         # Start dev server with SEO validation (http://localhost:3000)
npm run build       # Build for production with SEO validation
npm run start       # Start production server
```

### Code Quality
```bash
npm run lint        # Run Next.js ESLint
npm run analyze     # Bundle size analysis with Webpack visualization
```

### Blog Publishing & Validation
```bash
npm run validate-seo    # Check all blog posts for SEO violations (title ≤70 chars, excerpt ≤160 chars)
npm run dev            # Includes validate-seo automatically before starting
npm run build          # Includes validate-seo automatically before building
```

**Important:** SEO validation runs automatically on `npm run dev` and `npm run build`. The dev server and build will fail if any blog post violates SEO rules.

### Sanity CMS (Content Management)
```bash
npm run sanity:dev      # Run Sanity Studio for content editing
npm run setup:sanity    # Initialize Sanity project
npm run migrate:sanity  # Migrate data from local files to Sanity
```

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 16 (App Router) with TypeScript 5.9.3
- **Styling**: Tailwind CSS v4 with custom color system
- **Content**: Markdoc for blog posts (`.mdoc` files), Sanity CMS integration, how-to guides
- **AI**: Anthropic Claude API (chatbot) + AI Visibility Optimization
- **Components**: React with Framer Motion animations, Lucide icons, Recharts
- **Analytics**: Clarity, Google Analytics, Meta Pixel, custom tracking
- **Calculators**: Investment, mortgage, affordability, home sale analysis

### Core Data Flow

**Master Data** → **AI Context** → **Pages/Chatbot** → **LLM Citations**

1. **`src/data/company-info.ts`** - Master data source (company details, contact, licenses, philosophy, processes)
2. **`src/lib/ai.ts`** - Builds AI system prompts from company-info using `buildAIContext()` and `buildDealAIContext()`
3. **Components** - Consume data and render pages, schema markup, and chatbot responses
4. **Schema Markup** - JSON-LD for LLM discovery via `SchemaRenderer.tsx` and `schema-generators.ts`
5. **llms.txt** - `/public/llms.txt` enables ChatGPT/Bing/Claude discovery

Any updates to company-info automatically propagate to AI prompts and schema markup.

### Key Files Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (header/footer)
│   ├── page.tsx                # Homepage
│   ├── landing/                # Landing page variant
│   ├── api/
│   │   ├── chat/route.ts       # Claude chatbot endpoint
│   │   ├── forms/submit        # Form submission handler
│   │   ├── meta/track          # Analytics tracking
│   │   └── revalidate          # ISR revalidation
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [blog-id]/page.tsx  # Individual blog post (reads /posts/*.mdoc)
│   ├── how-to/
│   │   ├── page.tsx            # How-to guides hub
│   │   └── [guide-id]/page.tsx # Individual guide (reads /how-to/*.mdoc)
│   ├── investing/
│   │   ├── multifamily-investment-guide
│   │   ├── albany-multifamily-investing
│   │   ├── cap-rate-guide
│   │   ├── schenectady-multifamily-investing
│   │   └── troy-multifamily-investing
│   ├── about/                  # About page
│   ├── buying/                 # Buying guidance page
│   ├── selling/                # Selling guidance page
│   ├── calculator/             # Investment calculators hub
│   ├── faq/                    # FAQ page (categorized)
│   ├── listings/               # Property listings
│   ├── vip-investor-list/      # VIP investor directory
│   ├── events/                 # Event pages
│   ├── privacy-policy/         # Privacy policy
│   ├── terms-of-service/       # Terms of service
│   └── [other pages]           # Static pages
├── components/
│   ├── Header.tsx              # Navigation with dynamic menu
│   ├── Footer.tsx              # Complex footer system
│   ├── Chatbot.tsx             # Claude AI assistant widget
│   ├── SchemaRenderer.tsx      # JSON-LD schema markup renderer
│   ├── InvestmentCalculator.tsx # Multifamily calculator
│   ├── MortgageCalculator.tsx  # Mortgage calculator
│   ├── HeroSection.tsx         # Hero sections with animations
│   ├── faq/                    # FAQ components (accordion, filtering)
│   ├── forms/                  # Form components (qualified investor, lead capture)
│   ├── markdoc/                # Markdoc-specific components (Callout, RelatedPosts)
│   ├── tracking/               # Analytics components (Clarity, Meta, GA)
│   └── ui/                     # Design system (button, card, form, animation)
├── data/
│   ├── company-info.ts         # Master data hub (update here first!)
│   ├── neighborhoods.ts        # Market data (Capital Region & Kissimmee metrics)
│   ├── faq-data.ts             # FAQ questions and answers
│   ├── testimonials.ts         # Client testimonials
│   ├── listings.ts             # Property listings
│   └── [other data files]      # Funding, AI FAQs, etc.
├── lib/
│   ├── ai.ts                   # Claude API context builder
│   ├── schema-generators.ts    # JSON-LD schema generators for SEO
│   ├── metadata-factory.ts     # Page metadata helpers
│   ├── calculators/            # Calculator logic (investment, mortgage, tax)
│   ├── tracking.ts             # Analytics event tracking
│   ├── blog-utils.ts           # Blog post utilities
│   ├── how-to-utils.ts         # How-to guide utilities
│   ├── sanity.client.ts        # Sanity CMS client
│   └── [utilities]             # Form validation, formatting, UTM, etc.
├── hooks/
│   ├── useCookieConsent.ts     # Cookie consent management
│   ├── useFormSubmit.ts        # Form submission handling
│   └── useScrollTracking.ts    # Scroll position tracking
└── markdoc/
    ├── config.ts               # Markdoc parser configuration
    └── renderer.tsx            # Markdoc to React renderer
├── types/
│   └── faq.ts                  # FAQ type definitions
├── middleware.ts               # Next.js middleware (CSP, security headers)
├── next.config.ts              # Next.js config (Turbopack, image opt, 70+ redirects)
├── tailwind.config.ts          # Tailwind with custom colors
└── tsconfig.json               # TypeScript strict mode + path aliases

posts/                          # Blog posts in Markdoc format (.mdoc)
├── 5-year-appreciation-capital-region.mdoc
├── capital-region-multifamily-market-update-2026.mdoc
├── cash-flow-vs-cap-rate-explained.mdoc
├── house-hacking-live-free-real-estate.mdoc
└── [15+ more investment posts]

how-to/                         # How-to guides in Markdoc format (.mdoc)
├── 1031-exchange-multifamily-strategy.mdoc
├── evaluate-multifamily-deals-capital-region.mdoc
├── cap-rate-vs-cash-flow.mdoc
└── [4+ more guides]

public/
├── robots.txt                  # SEO robots file
├── llms.txt                    # LLM crawling instructions (ChatGPT, Bing, Claude)
└── [brand assets, icons]

scripts/
└── validate-blog-seo.ts        # SEO validation (title ≤70, excerpt ≤160 chars)
```

### Data-Driven Architecture

**Single source of truth approach:**
- Update `src/data/company-info.ts` once
- Changes flow to: AI prompts → schema markup → chatbot responses → page content
- No need to duplicate information across multiple files

## AI Visibility Strategy (AIEO Playbook)

This site is optimized for **LLM discovery and citations** (ChatGPT, Bing, Claude), not just Google SEO.

### Key Frameworks

**1. AI Visibility Playbook (AIEO WAY.md)**
- Structure content for LLM retrieval: H2/H3 headers, direct answers first, scannable tables/bullets
- Page frameworks: comparison pages, how-to guides, feature pages, FAQ hubs, benchmark pages
- Schema markup: FAQPage, HowTo, ComparisonChart, Dataset for maximum LLM visibility
- Publishing cadence: Weekly FAQ, monthly comparison, quarterly benchmark

**2. Guillermo Flor's AISO Strategy (GFlor AIEO Notes.md)**
- ChatGPT uses **Bing's search index**, not Google
- What works: Schema markup (FAQs cited in 48 hours), internal linking, thematic content clusters
- Playbook: Target Bing long-tail keywords, build topical authority, get social Q&A mentions (Reddit, Quora)
- Monitor: Test queries in ChatGPT monthly, ask leads "How did you find us?"

### 131 High-Intent Questions Strategy

**File**: `HIGH_INTENT_QUESTIONS_QUICK.md` contains 131 specific investor questions mapped to content types.

**11 Question Clusters:**
1. Buying Decisions (15 Q's)
2. Deal Analysis & Numbers (12 Q's)
3. Selling & Exit Strategy (12 Q's)
4. Portfolio Strategy & Scaling (14 Q's)
5. Capital Region Market (18 Q's)
6. Financing & Loan Programs (11 Q's)
7. Landlord & Management (13 Q's)
8. Landlord Legal & Tax (10 Q's)
9. House Hacking & Alternatives (8 Q's)
10. First-Time Investor Onboarding (9 Q's)
11. Advanced Strategy & Opportunities (9 Q's)

**Content Types (Map Questions → Assets):**
- 📝 FAQ/Blog post
- 🔀 Comparison page
- 📊 Data/benchmark page
- 🎯 How-to guide
- 📍 Capital Region specific

**Priority 1 - Month 1 Content (12 pieces):**
- 1 Hub Page (Capital Region Multifamily Guide)
- 3 Comparison Pages (2-unit vs 4-unit, tenants vs vacant, buy vs house hack)
- 4 How-To Guides (deal analysis, offer strategy, tenant screening, financing)
- 3 FAQ Clusters (financing 101, legal structure, 2026 market)
- 2 Benchmark Pages (rent tracker, cap rates by neighborhood)

**LLM Citation Wins:**
- Each page targets 1 main query + 3-5 follow-ups
- Internal linking between related questions (schema + HTML links)
- Monthly data updates for benchmarks (rents, cap rates, DOM)
- Bing long-tail keyword targeting: "best neighborhoods for multifamily in Capital Region" not just "multifamily"

## Blog Post Standards

### SEO Compliance (REQUIRED BEFORE PUBLISH)
All blog posts must pass SEO validation before being pushed to production.

**Validation Rules:**
- **Title**: Maximum 70 characters
- **Meta Description (excerpt)**: Maximum 160 characters
- **Author**: Saad Tai
- **Author Title**: `NY License #10401373295 | FL License #SL3651394`

**Run Validation:**
```bash
npm run validate-seo
```

This checks all `.mdoc` files in the `/posts` directory and reports any violations.

**Why?**
- Optimal title length for search results and LLM citation
- Excerpts cut off in snippets if too long
- Prevents publishing SEO-unfriendly content

### Blog Post Structure

1. **Frontmatter** (YAML)
   ```yaml
   ---
   title: "Post Title (max 70 chars)"
   excerpt: "Meta description (max 160 chars)"
   subtitle: "Optional subtitle"
   date: YYYY-MM-DD
   author: Saad Tai
   category: Investment
   authorImage: /saad.png
   ---
   ```

2. **Content** (Markdoc)
   - Start with `{% relatedPosts category="Investment" limit="3" /%}`
   - Use H2 headers for sections
   - Optimize for GEO (Generative Engine Optimization):
     - Direct answers in opening paragraphs
     - Scannable tables for data
     - Bullet points for comparisons
     - Related questions sections

3. **Author Credentials**
   - Displayed in blog hero via template
   - License numbers only (no false portfolio/experience claims)
   - NY License #10401373295 | FL License #SL3651394

### GEO Best Practices (Generative Engine Optimization)

When creating blog posts and guides:
- **Lead with answers**: First paragraph should directly answer the query
- **Use tables**: Convert comparisons to markdown tables (4.1x more AI citations)
- **Scannable format**: Bullets, bold, H2s for quick parsing
- **Data-driven**: Include metrics, percentages, specific numbers
- **Related questions**: Add "People also ask" style sections
- **No redundancy**: If byline is in hero, don't repeat in content
- **Entity mentions**: Include specific tools, lenders, company names (HubSpot, Stripe, Fannie Mae, etc.)
- **Structured data**: Always include JSON-LD schema (FAQPage for FAQs, HowTo for guides)
- **Internal links**: Link to 3-5 related questions/articles to build topical clusters

### Fact Checking

Before publishing any claims:
1. Verify market data against `/src/data/neighborhoods.ts`
2. Run web searches for current rental rates, cap rates, pricing
3. Update blog post with verified data
4. Document sources in comments if unusual

**Current Verified Data Sources:**
- Capital Region rental rates: neighborhoods.ts
- Capital Region cap rates: neighborhoods.ts
- Capital Region appreciation: neighborhoods.ts
- Property taxes: neighborhoods.ts

### Automatic Validation

SEO validation runs automatically on:
- `npm run dev` - Validates before starting dev server
- `npm run build` - Validates before building for production

If any blog post fails validation, the dev server or build will stop and show errors.

## How-To Guides

### Structure
How-to guides live in `/how-to/*.mdoc` files and are rendered at `/how-to/[guide-id]` routes.

**Frontmatter Requirements:**
```yaml
---
title: "Action Verb: Specific Goal (max 70 chars)"
excerpt: "Short description of what they'll learn (max 160 chars)"
date: YYYY-MM-DD
author: Saad Tai
category: Investment
difficulty: Beginner/Intermediate/Advanced
timeEstimate: "15 minutes"
---
```

**Content Structure:**
1. **Intro**: 1-2 sentences explaining goal + why it matters
2. **Prerequisites**: What they need before starting (knowledge, tools, data)
3. **Step-by-Step**: 4-7 numbered steps with examples
4. **Real Example**: Capital Region-specific walkthrough (anonymized)
5. **FAQ**: 3-5 common questions about the process
6. **Resources**: Links to related guides, calculators, tools

**Schema Markup:**
- Use `HowTo` schema with `HowToStep` for each numbered step
- Include `estimatedCost` and `totalTime` if applicable
- Link to related guides at bottom

## Calculators

### Available Calculators
- **Investment Calculator** - NOI, cap rate, cash-flow analysis
- **Mortgage Calculator** - Payment, amortization, interest
- **Affordability Calculator** - Home buying affordability
- **Home Sale Calculator** - Net proceeds after sale

### Location
- Main hub: `/src/components/InvestmentCalculator.tsx`
- Utilities: `/src/lib/calculators/`
- API integration: Post to form endpoints for lead capture

### Linking
Always link blog posts and guides to relevant calculators. Example:
- Blog post: "How to Run Numbers on a Multifamily Deal" → InvestmentCalculator
- Guide: "Evaluate Multifamily Deals" → InvestmentCalculator
- FAQ: "What cap rate should I target?" → Calculator link

## Content Management

### Updating Company Information
1. Edit `src/data/company-info.ts` (master data source)
2. Changes automatically propagate to:
   - AI chatbot system prompts (via `src/lib/ai.ts`)
   - Schema markup for SEO (via `src/lib/schema-generators.ts`)
   - All pages importing this data
   - Chatbot responses

### Adding New Pages
1. Create folder in `src/app/[page-name]/`
2. Create `page.tsx` with content
3. Use design system components from `src/components/ui/`
4. Add navigation links in `src/components/Header.tsx` if needed

### Modifying the Chatbot
- **System prompt**: Edit `src/lib/ai.ts` `buildAIContext()` function
- **UI/styling**: Edit `src/components/Chatbot.tsx`
- **API logic**: Edit `src/app/api/chat/route.ts`

## LLM Optimization Checklist

Before publishing any page/blog post:

### Content Checklist
- [ ] H2/H3 headers for every section
- [ ] Direct answer in first sentence
- [ ] At least one table or bullet list
- [ ] 1 unique metric/statistic
- [ ] 3-5 internal links to related content
- [ ] Capital Region specific (or explain why not)

### Technical Checklist
- [ ] JSON-LD schema added (FAQPage/HowTo/ComparisonChart)
- [ ] Schema validated via Google Rich Results test
- [ ] Meta description ≤160 chars, answers "what + who + benefit"
- [ ] Title ≤70 chars (optimal for SERPs + LLM citations)
- [ ] No missing alt text on images
- [ ] Page loads in <2s (test with PageSpeed)
- [ ] Mobile responsive (test on phone)

### SEO/Bing Checklist
- [ ] Long-tail keywords targeted (e.g., "best neighborhoods for multifamily in Capital Region")
- [ ] URL is descriptive and SEO-friendly
- [ ] Canonical tag if duplicate content
- [ ] Internal links form topical clusters
- [ ] Page linked from hub page

### Publishing Checklist
- [ ] Content fact-checked against `neighborhoods.ts` or external sources
- [ ] Author credentials accurate (NY/FL license numbers only)
- [ ] No false claims (portfolio size, experience, AUM, etc.)
- [ ] Run `npm run validate-seo` before pushing
- [ ] Post in relevant social Q&A within 48 hours (Reddit, Quora)

## LLM Visibility (llms.txt)

**File**: `/public/llms.txt` tells ChatGPT, Claude, and other LLMs about your site.

**When to update**:
- Add new major pages (hubs, comparisons, benchmarks)
- Change site focus or expertise areas
- Add new services or products

**Current structure**:
```
# Saad Tai Multifamily Investing
> Expert guidance on multifamily investing in Capital Region

## Pages
- Hub pages
- Comparison pages
- Data/benchmark pages

## Expertise
- 2-4 unit multifamily investing
- Capital Region market trends
```

## Standards & Constraints

- Never publish content with false claims (portfolio size, years of experience, AUM)
- Always validate SEO metrics before publishing
- Keep blog titles and descriptions concise and scannable
- Verify market data before including specific numbers (check `/src/data/neighborhoods.ts`)
- Use company-info.ts as single source of truth; don't duplicate information
- Optimize for **Bing**, not just Google (ChatGPT uses Bing's index)
- Build **topical authority** through internal linking clusters
- Target **high-intent, long-tail keywords** (not generic terms)
- Monitor LLM visibility monthly: test queries in ChatGPT, ask leads how they found you
