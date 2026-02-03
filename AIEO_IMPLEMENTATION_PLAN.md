# AIEO Implementation Plan (12-Week Roadmap)

**Goal:** Implement 131 high-intent questions into the site using **existing components** to maximize LLM visibility and internal linking authority.

**AIEO Impact Principle:** FAQs cited in 48 hours. Comparisons cited in 2-4 weeks. Hub pages build topical authority. Internal links = stronger embeddings.

---

## PHASE 1: WEEKS 1-2 (Foundation - FAQ Clusters)

### Why First?
FAQ schema gets LLM citations fastest (48 hours reported). Quick to implement using existing `FAQSection` + `FAQSectionWithSchema` components.

### Implementation Strategy

**Build 3 FAQ Clusters (reuse existing FAQ component):**

1. **Financial Fundamentals FAQ** (6-8 questions)
   - Q16: Cap rate vs cash-on-cash vs ROI
   - Q17: Calculate real cash flow
   - Q20: Maintenance reserves %
   - Q26: Cash flow as % of price
   - Q27: Wiggle room before risky
   - + 2 more from Q16-27 cluster

   **File:** `/src/data/faq-financial-fundamentals.ts`
   **Page:** `/src/app/investing/financial-fundamentals/page.tsx`
   **Route:** `/investing/financial-fundamentals`

2. **Capital Region Market FAQ** (8-10 questions)
   - Q54: What's happening in 2026?
   - Q55: Neighborhoods improving vs declining
   - Q59: Good deal in Albany vs Schenectady
   - Q61: Average rent by unit count
   - Q62: Why cap rates differ
   - Q64: More/less expensive?
   - Q65: Tenant quality differences
   - Q70: How fast do properties sell?
   - + 1-2 more

   **File:** `/src/data/faq-capital-region-market.ts`
   **Page:** `/src/app/investing/capital-region-faq/page.tsx`
   **Route:** `/investing/capital-region-faq`

3. **First-Time Investor FAQ** (6-8 questions)
   - Q114: RE vs stocks
   - Q115: Why multifamily is good
   - Q116: Risks framework
   - Q120: How long before real money
   - Q121: Most common first deal
   - + 2 more

   **File:** `/src/data/faq-first-time-investor.ts`
   **Page:** `/src/app/investing/first-time-investor-faq/page.tsx`
   **Route:** `/investing/first-time-investor-faq`

### Component Reuse Pattern

Each FAQ page follows the same pattern:

```tsx
// /src/app/investing/[topic]-faq/page.tsx
import { FAQSectionWithSchema } from '@/components/faq/FAQSectionWithSchema'
import { financialFundamentalsFAQs } from '@/data/faq-financial-fundamentals'
import { generateMetadata } from '@/lib/metadata-factory'

export const metadata = generateMetadata({
  title: 'Financial Fundamentals for Multifamily Investors',
  description: 'Understand cap rates, cash flow, and returns.',
  // ... other metadata
})

export default function FinancialFundamentalsFAQ() {
  return (
    <FAQSectionWithSchema
      faqs={financialFundamentalsFAQs}
      schemaName="Investment Financial Concepts"
      includeRelatedLinks
    />
  )
}
```

### Data Format (consistent)

```tsx
// /src/data/faq-financial-fundamentals.ts
import { FAQ } from '@/types/faq'

export const financialFundamentalsFAQs: FAQ[] = [
  {
    id: 'cap-rate-vs-coc',
    q: 'What\'s the difference between cap rate and cash-on-cash return?',
    a: 'Cap rate = NOI ÷ price (ignores financing). Cash-on-cash = annual cash flow ÷ cash invested. Cap rate matters for unleveraged comparison; cash-on-cash matters for your actual return with financing.'
  },
  // ... more FAQs
]
```

### Internal Linking Strategy

- Each FAQ page links to:
  - **Related FAQ clusters** (Financial → First-Time Investor FAQ)
  - **Related investing guides** (`/investing/multifamily-investment-guide`)
  - **Investment hub** (`/investing`)
  - **Calculator** (when relevant)

**Example:** "Cap rate vs cash-on-cash" → links to "Calculate real cash flow" → links to InvestmentCalculator

### Deliverables for Phase 1

- [ ] Create 3 FAQ data files (`.ts`)
- [ ] Create 3 FAQ pages (routes)
- [ ] Add FAQPage schema to each
- [ ] Create internal linking map between all 3 FAQs
- [ ] Add breadcrumb navigation
- [ ] Add "Related FAQs" section to each page
- [ ] Submit to Bing Webmaster Tools / test in ChatGPT

**Expected Output:**
- 3 new pages with ~26 FAQ answers
- FAQPage schema for LLM discovery
- 3 new routes for Bing indexing

---

## PHASE 2: WEEKS 3-4 (Comparisons - High Bing Impact)

### Why Second?
Comparison pages are Bing's #2 most-cited format. Use existing market data + invest minimal effort.

### Implementation Strategy

**Build 2 Comparison Pages:**

1. **"2-Unit vs 4-Unit Property" Comparison** (Q1-2)
   - Market comparison table (price, income, management, financing)
   - Pros/cons for each
   - Scenarios: first-time buyer, investor, house hacker
   - FAQs about the comparison
   - Schema: `ComparisonChart` or `Table`

   **File:** `/src/data/comparison-2-unit-vs-4-unit.ts`
   **Page:** `/src/app/investing/compare-2-unit-vs-4-unit/page.tsx`
   **Route:** `/investing/compare-2-unit-vs-4-unit`

2. **"Buy vs House Hack vs Live-In Flip" Comparison** (Q13)
   - Comparison table (capital, timeline, effort, exit)
   - Decision tree: "Which is right for you?"
   - FAQs specific to the comparison
   - Links to house-hacking guide

   **File:** `/src/data/comparison-buy-vs-househack.ts`
   **Page:** `/src/app/investing/compare-buy-vs-househack/page.tsx`
   **Route:** `/investing/compare-buy-vs-househack`

### Component Pattern

```tsx
// /src/app/investing/compare-2-unit-vs-4-unit/page.tsx
import { Card, Container, Heading, Text } from '@/components/ui'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { FAQSection } from '@/components/faq/FAQSection'
import { generateComparisonSchema } from '@/lib/schema-generators'

export default function Compare2vs4Unit() {
  const comparisonSchema = generateComparisonSchema({
    title: '2-Unit vs 4-Unit',
    items: [
      { name: '2-Unit', properties: { ... } },
      { name: '4-Unit', properties: { ... } }
    ]
  })

  return (
    <>
      <SchemaRenderer schema={comparisonSchema} />
      <Container>
        <Heading>2-Unit vs 4-Unit Property Comparison</Heading>
        {/* Comparison table */}
        {/* Pros/cons cards */}
        <FAQSection faqs={comparisonFAQs} />
      </Container>
    </>
  )
}
```

### Deliverables for Phase 2

- [ ] Create 2 comparison data files
- [ ] Create 2 comparison pages
- [ ] Add ComparisonChart schema
- [ ] Create decision trees / "which is right for you?" sections
- [ ] Link from investing hub
- [ ] Link to/from related FAQs
- [ ] Link to/from related guides

**Expected Output:**
- 2 new pages optimized for Bing comparison queries
- ComparisonChart schema for rich snippets
- Decision frameworks that funnel to hub/guide pages

---

## PHASE 3: WEEKS 5-6 (Market Expansion - Capital Region Authority)

### Why Third?
You have market data in `neighborhoods.ts`. Quick to expand existing `/investing` guides with specific data + FAQ integration.

### Implementation Strategy

**Expand 3 Existing Market Guides + Create Hub:**

Current guides exist at:
- `/investing/albany-multifamily-investing`
- `/investing/schenectady-multifamily-investing`
- `/investing/troy-multifamily-investing`

**Add to each:**
- Market comparison FAQs (embedded)
- Neighborhood rankings table (from `neighborhoods.ts`)
- "Best neighborhoods" section
- Tax/financing specific to that market
- Links to comparison pages

**Create New Hub:** `/investing/capital-region-markets-guide/`
- Overview of 3 markets
- Quick comparison table (Albany vs Schenectady vs Troy)
- When to invest in each
- Links to individual market guides
- FAQs about market selection
- Schema: CollectionPage + ItemList

### Example Content Addition

For each market guide (Albany, Schenectady, Troy):

```tsx
// Add to existing [market]-content.tsx:
<FAQSection
  faqs={albanySpecificFAQs}
  title="Albany Multifamily FAQs"
  description="Questions specific to Albany investing"
/>

<table>
  <thead>
    <tr>
      <th>Neighborhood</th>
      <th>Avg Rent</th>
      <th>Cap Rate</th>
      <th>Tax Rate</th>
      <th>Trend</th>
    </tr>
  </thead>
  <tbody>
    {neighborhoods.albany.map(n => (
      <tr key={n.id}>
        <td>{n.name}</td>
        <td>${n.avgRent}</td>
        <td>{n.capRate}%</td>
        // ... etc
      </tr>
    ))}
  </tbody>
</table>
```

### Deliverables for Phase 3

- [ ] Create market-specific FAQ data (3 files)
- [ ] Add FAQSection to each existing guide
- [ ] Create neighborhood tables from `neighborhoods.ts`
- [ ] Create new market hub page
- [ ] Add CollectionPage schema to hub
- [ ] Create internal linking between markets
- [ ] Add comparison links (e.g., "Albany vs Schenectady")

**Expected Output:**
- 3 expanded market guides with embedded FAQs
- 1 new market hub page
- Neighborhood comparison tables (real data from your system)
- Local authority signals for Bing/Claude

---

## PHASE 4: WEEKS 7-8 (How-To Guides - Action-Oriented)

### Why Fourth?
HowTo schema cited well. You have how-to structure at `/how-to/`. Map questions to existing guides + create 2 new ones.

### Implementation Strategy

**Existing Guides** (in `/how-to/*.mdoc`):
- `1031-exchange-multifamily-strategy.mdoc`
- `best-multifamily-markets-2026.mdoc`
- `cap-rate-vs-cash-flow.mdoc`
- `evaluate-multifamily-deals-capital-region.mdoc`
- `first-time-homebuyer.mdoc`
- `kissimmee-multifamily-investment-guide.mdoc`
- `negative-cash-flow-warning-signs.mdoc`

**Map Questions to Guides:**
- Q6 (Run numbers) → Enhance `evaluate-multifamily-deals-...`
- Q11 (Offer strategy) → Create NEW guide
- Q85 (Screen tenants) → Create NEW guide
- Q72-76 (Financing) → Create NEW guide

**Create 2 New Guides:**

1. **"How to Make an Offer on Multifamily"** (Q11, Q127)
   - Markdown guide format (use existing `.mdoc` structure)
   - Steps: Research comps → Calculate offer → Submit → Negotiate
   - Real Capital Region example
   - Link to calculator
   - HowTo schema

2. **"How to Screen Tenants"** (Q85)
   - Steps: Application → Credit check → References → Interview → Decide
   - Checklist template
   - Link to legal/compliance FAQ
   - HowTo schema

### File Structure

```
how-to/
├── how-to-offer-multifamily.mdoc  (NEW)
├── how-to-screen-tenants.mdoc      (NEW)
└── [existing guides]
```

### Frontmatter for New Guides

```yaml
---
title: "How to Make an Offer on Multifamily"
excerpt: "5 steps to submit a competitive offer"
date: 2026-02-03
author: Saad Tai
category: Buying
difficulty: Intermediate
timeEstimate: "15 minutes"
---
```

### Deliverables for Phase 4

- [ ] Create 2 new `.mdoc` files in `/how-to/`
- [ ] Add HowTo schema to guide pages
- [ ] Link from related FAQs + comparisons
- [ ] Add "Related Guides" section between guides
- [ ] Test rendering at `/how-to/[guide-id]`

**Expected Output:**
- 2 new guide pages with HowTo schema
- Improved internal linking (FAQ → Guide → Calculator)
- Action-oriented content for Bing/ChatGPT

---

## PHASE 5: WEEKS 9-10 (Legal & Financing FAQs)

### Why Fifth?
High-intent, long-tail questions. Use existing FAQ infrastructure.

### Implementation Strategy

**2 More FAQ Clusters:**

1. **Financing FAQ** (Q72-76)
   - How financing works
   - Investment vs rental property loans
   - DSCR explained
   - Down payment options
   - FHA vs conventional
   - Link to financing guide (if exists) or calculator

2. **Legal & Tax FAQ** (Q96-100)
   - LLC vs S-Corp
   - Tax deductions
   - Depreciation
   - Passive loss limitation
   - Link to CPA/legal resources

### Deliverables for Phase 5

- [ ] Create 2 FAQ data files
- [ ] Create 2 FAQ pages
- [ ] Add FAQPage schema
- [ ] Link to financing guides
- [ ] Add breadcrumbs

**Expected Output:**
- 2 new pages, ~12 FAQ answers
- High-intent keyword coverage
- Legal/tax authority established

---

## PHASE 6: WEEKS 11-12 (Hub Page & Linking Strategy)

### Why Last?
Hub pages tie everything together. Build after you have content to link.

### Implementation Strategy

**Create Hub Page:** `/investing/all-questions-answered/`

Purpose: Central page that links all 131+ questions → internal linking authority boost

**Structure:**
```
All Your Multifamily Investment Questions Answered

├── Buying Decisions (link to 15 questions)
│   ├── FAQ: 2-unit vs 4-unit
│   ├── Comparison: 2-unit vs 4-unit
│   ├── Guide: Making an offer
│   └── ...
├── Deal Analysis (link to 12 questions)
│   ├── FAQ: Financial fundamentals
│   ├── Guide: Evaluating deals
│   └── ...
├── Capital Region Markets (link to 18 questions)
│   ├── FAQ: Capital Region market
│   ├── Guide: Albany investing
│   ├── Comparison: Markets
│   └── ...
└── ... [other clusters]
```

### Schema

```tsx
// Use FAQPage schema with all 131 questions linked
// + internal CollectionPage schema showing structure
```

### Deliverables for Phase 6

- [ ] Create hub page at `/investing/all-questions-answered/`
- [ ] Map all published content to questions
- [ ] Create internal linking structure
- [ ] Add FAQPage schema with linked items
- [ ] Update main `/investing/` hub to link here

**Expected Output:**
- 1 authoritative hub page
- Internal linking boost (10+ links per section)
- Topical authority signal to LLMs

---

## Weekly Publishing Schedule (12 Weeks)

### Week 1-2: FAQ Cluster 1 + 2 + 3
- **Mon-Tue**: Create 3 FAQ data files + pages
- **Wed**: Internal linking + schema validation
- **Thu**: Submit to Bing Webmaster Tools
- **Fri**: Test in ChatGPT, monitor for citations

### Week 3-4: Comparisons 1 + 2
- **Mon-Tue**: Create comparison data files + pages
- **Wed**: Add comparison tables + decision trees
- **Thu**: Schema validation + Bing submission
- **Fri**: Monitor Bing for "vs" query rankings

### Week 5-6: Market Expansion + Hub
- **Mon-Tue**: Create market FAQ files + expand guides
- **Wed**: Add neighborhood tables + market hub
- **Thu**: Internal linking map + schema
- **Fri**: Test market guides in ChatGPT

### Week 7-8: How-To Guides
- **Mon-Tue**: Create `.mdoc` files for 2 guides
- **Wed**: Add HowTo schema + test rendering
- **Thu**: Link from FAQs + comparisons
- **Fri**: Monitor guide citations

### Week 9-10: Legal/Financing FAQs
- **Mon-Tue**: Create 2 FAQ files + pages
- **Wed**: Link from guides + comparisons
- **Thu**: Schema validation
- **Fri**: Monitor for citations

### Week 11-12: Hub Page
- **Mon-Tue**: Create hub page + map all content
- **Wed**: Add internal linking structure
- **Thu**: Schema validation + Bing submission
- **Fri**: Full site audit + reporting

---

## Monitoring & Optimization

### Weekly (Every Friday)
- [ ] Test 5 main queries in ChatGPT
  - "How to evaluate multifamily deals in Capital Region"
  - "2-unit vs 4-unit property"
  - "Buy vs house hack multifamily"
  - "Albany vs Schenectady investing"
  - "First time multifamily investor"
- [ ] Screenshot if your page appears
- [ ] Ask leads: "How did you find us?"

### Monthly
- [ ] Review Bing Webmaster Tools
- [ ] Check GA for "people also ask" impressions
- [ ] Update market data (rents, cap rates) if available
- [ ] Add new FAQ based on ChatGPT trends

### Quarterly
- [ ] Review which questions got most citations
- [ ] Identify gaps (questions not yet answered)
- [ ] Expand top-performing clusters
- [ ] Update internal linking strategy

---

## Total Scope

**12 Pages Published:**
- 8 FAQ pages (26 questions)
- 2 Comparison pages (6 questions)
- 2 How-To guides (additional coverage)

**Content Expansion:**
- 3 existing market guides expanded
- 1 new market hub page

**Schema Coverage:**
- FAQPage (8 pages)
- ComparisonChart (2 pages)
- HowTo (2 guides)
- CollectionPage (3 hubs)

**Internal Linking:**
- 10+ links per major cluster
- Hub page with 50+ linked items

**Expected LLM Impact:**
- FAQ citations within 48 hours of publishing
- Comparison rankings within 2-4 weeks
- Topical authority established within 6-8 weeks
- Consistent organic leads from ChatGPT within 3 months

---

## Dependencies & Assumptions

✅ All components exist (FAQSection, SchemaRenderer, etc.)
✅ Data structure ready (neighborhoods.ts, company-info.ts)
✅ llms.txt configured
✅ Routing conventions established

⚠️ Requires: Familiarity with existing FAQ data structure
⚠️ Requires: Ability to expand Markdoc guides (`.mdoc` files)
⚠️ Requires: Weekly ChatGPT monitoring to validate strategy

---

## Success Metrics

**After 12 weeks:**
1. 0 → 3+ mentions in ChatGPT responses (track with screenshots)
2. 0 → 5+ Bing "People Also Ask" impressions
3. Topical authority established (internal links between 12+ pages)
4. 2+ leads attributed to ChatGPT discovery (ask during calls)
5. All major 131 questions → addressable via published content

---

**Next Step:** Shall I build Week 1 content now? (3 FAQ data files + 3 pages)
