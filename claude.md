# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
- **Framework**: Next.js 16 (App Router) with TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: Markdoc for blog posts (`.mdoc` files), Sanity CMS integration
- **AI**: Anthropic Claude API (chatbot)
- **Components**: React with Framer Motion animations, Lucide icons

### Core Data Flow

**Master Data** → **AI Context** → **Pages/Chatbot**

1. **`src/data/company-info.ts`** - Master data source (company details, contact, licenses, philosophy, processes)
2. **`src/lib/ai.ts`** - Builds AI system prompts from company-info using `buildAIContext()` and `buildDealAIContext()`
3. **Components** - Consume data and render pages, schema markup, and chatbot responses

Any updates to company-info automatically propagate to AI prompts and schema markup.

### Key Files Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (header/footer)
│   ├── page.tsx                # Homepage
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [blog-id]/page.tsx  # Individual blog post (reads /posts/*.mdoc)
│   ├── api/
│   │   ├── chat/route.ts       # Chatbot endpoint
│   │   └── deal-inquiry/route.ts # Form submissions
│   ├── about/                  # About page
│   ├── buying/                 # Buying guidance page
│   ├── selling/                # Selling guidance page
│   ├── calculator/             # Investment calculator
│   ├── faq/                    # FAQ page (with categorized FAQs)
│   └── [other pages]           # Static pages
├── components/
│   ├── Header.tsx              # Navigation
│   ├── Footer.tsx              # Footer
│   ├── Chatbot.tsx             # AI assistant widget
│   ├── SchemaRenderer.tsx      # SEO schema markup renderer
│   └── ui/                     # Design system components
├── data/
│   ├── company-info.ts         # Master data hub (update here first!)
│   ├── neighborhoods.ts        # Market data (Capital Region & Kissimmee)
│   └── [other data files]
├── lib/
│   ├── ai.ts                   # AI system prompt builders
│   ├── schema-generators.ts    # JSON-LD schema generators for SEO
│   ├── metadata-factory.ts     # Page metadata helpers
│   └── [utilities]
└── markdoc/
    ├── config.ts               # Markdoc parser configuration
    └── renderer.tsx            # Markdoc to React renderer
posts/                          # Blog posts in Markdoc format (.mdoc)
```

### Data-Driven Architecture

**Single source of truth approach:**
- Update `src/data/company-info.ts` once
- Changes flow to: AI prompts → schema markup → chatbot responses → page content
- No need to duplicate information across multiple files

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

### GEO Best Practices

When rewriting or creating blog posts:
- **Lead with answers**: First paragraph should directly answer the query
- **Use tables**: Convert comparisons to markdown tables (4.1x more AI citations)
- **Scannable format**: Bullets, bold, H2s for quick parsing
- **Data-driven**: Include metrics, percentages, specific numbers
- **Related questions**: Add "People also ask" style sections
- **No redundancy**: If byline is in hero, don't repeat in content

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

## Standards & Constraints

- Never publish content with false claims (portfolio size, years of experience, AUM)
- Always validate SEO metrics before publishing
- Keep blog titles and descriptions concise and scannable
- Verify market data before including specific numbers
- Use company-info.ts as single source of truth; don't duplicate information
