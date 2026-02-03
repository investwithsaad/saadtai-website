# Weekly Content Schedule (12 Weeks)

**Quick Reference:** What to build each week to maximize AIEO impact

---

## WEEK 1-2: FAQ Clusters (Financial, Market, First-Time Investor)

**Impact:** FAQPage schema gets LLM citations in 48 hours

### Content to Create

**A. Financial Fundamentals FAQ** (`/investing/financial-fundamentals`)
```
Questions: Q16, Q17, Q20, Q26, Q27 + 2 more
File: /src/data/faq-financial-fundamentals.ts
Page: /src/app/investing/financial-fundamentals/page.tsx
Route: /investing/financial-fundamentals

FAQs to include:
- What's cap rate vs cash-on-cash vs ROI?
- How do I calculate real cash flow?
- What % of NOI should maintenance reserves be?
- Cash flow as % of purchase price?
- How much wiggle room before it gets risky?
```

**B. Capital Region Market FAQ** (`/investing/capital-region-faq`)
```
Questions: Q54, Q55, Q59, Q61, Q62, Q64, Q65, Q70
File: /src/data/faq-capital-region-market.ts
Page: /src/app/investing/capital-region-faq/page.tsx
Route: /investing/capital-region-faq

FAQs to include:
- What's happening in the Capital Region market in 2026?
- Which neighborhoods are improving vs declining?
- What's a good deal in Albany vs Schenectady today?
- What's average rent for 2-unit, 3-unit, 4-unit?
- Why are cap rates lower/higher in different cities?
- Are properties getting more/less expensive?
- How is tenant quality different by neighborhood?
- How fast do properties sell?
```

**C. First-Time Investor FAQ** (`/investing/first-time-investor-faq`)
```
Questions: Q114, Q115, Q116, Q120, Q121 + 1-2 more
File: /src/data/faq-first-time-investor.ts
Page: /src/app/investing/first-time-investor-faq/page.tsx
Route: /investing/first-time-investor-faq

FAQs to include:
- Should I invest in real estate or stocks?
- Why is multifamily a good investment?
- What are the main risks?
- How long before I see real money?
- What's the most common first multifamily deal?
```

### Checklist
- [ ] Create 3 `.ts` files in `/src/data/`
- [ ] Create 3 page files in `/src/app/investing/`
- [ ] Use `FAQSectionWithSchema` component
- [ ] Add internal links between FAQ pages
- [ ] Add breadcrumb navigation
- [ ] Run schema validation test
- [ ] Submit to Bing Webmaster Tools

### Testing (Friday of Week 2)
```
Test these ChatGPT queries:
- "What's the difference between cap rate and cash on cash?"
- "What's happening in the Capital Region multifamily market?"
- "How should I start investing in multifamily?"

Expected: Your pages appear in responses within 48 hours
```

---

## WEEK 3-4: Comparison Pages (2-unit vs 4-unit, Buy vs House Hack)

**Impact:** Bing heavily ranks comparison content

### Content to Create

**A. 2-Unit vs 4-Unit Comparison** (`/investing/compare-2-unit-vs-4-unit`)
```
Questions: Q1, Q2
File: /src/data/comparison-2-unit-vs-4-unit.ts
Page: /src/app/investing/compare-2-unit-vs-4-unit/page.tsx
Route: /investing/compare-2-unit-vs-4-unit

Include:
- Comparison table (price, income stability, management, financing)
- Pros/cons for each
- Scenarios: first-buyer, investor, house hacker
- "Which is right for you?" decision tree
- Comparison FAQs
- Schema: ComparisonChart
```

**B. Buy vs House Hack vs Live-In Flip** (`/investing/compare-buy-vs-househack`)
```
Questions: Q13, Q109
File: /src/data/comparison-buy-vs-househack.ts
Page: /src/app/investing/compare-buy-vs-househack/page.tsx
Route: /investing/compare-buy-vs-househack

Include:
- Comparison table (capital, timeline, effort, exit strategy)
- Decision tree
- Comparison FAQs
- Links to house hack guide
- Links to buy & hold guide
- Schema: ComparisonChart
```

### Checklist
- [ ] Create comparison data files
- [ ] Create comparison pages
- [ ] Add comparison tables with real data
- [ ] Create decision trees
- [ ] Add ComparisonChart schema
- [ ] Link from investing hub
- [ ] Link to/from related FAQs
- [ ] Internal linking between the 2 comparison pages

### Testing (Friday of Week 4)
```
Test these queries in ChatGPT:
- "Should I buy a 2-unit or 4-unit property?"
- "Buy vs house hack multifamily"

Expected: Your pages appear in responses within 2-4 weeks
```

---

## WEEK 5-6: Market Guides Expansion + Hub Page

**Impact:** Local authority signals + topical clustering

### Content to Create

**A. Expand Existing Market Guides**
```
Routes that already exist:
- /investing/albany-multifamily-investing/
- /investing/schenectady-multifamily-investing/
- /investing/troy-multifamily-investing/

For each, ADD:
1. Market-specific FAQ section
2. Neighborhood table from neighborhoods.ts
3. Tax environment section
4. Market comparison links (e.g., "How Albany compares to Schenectady")

Files to create:
- /src/data/faq-albany-specific.ts
- /src/data/faq-schenectady-specific.ts
- /src/data/faq-troy-specific.ts
```

**B. New Market Hub** (`/investing/capital-region-markets-guide`)
```
File: /src/data/capital-region-markets-hub.ts
Page: /src/app/investing/capital-region-markets-guide/page.tsx
Route: /investing/capital-region-markets-guide

Include:
- Overview: "Where to invest in the Capital Region"
- Quick comparison table (Albany vs Schenectady vs Troy)
- Links to individual city guides
- Market selection FAQs
- Best neighborhoods section (using neighborhoods.ts data)
- Schema: CollectionPage
```

### Checklist
- [ ] Create 3 market-specific FAQ files
- [ ] Add FAQSection to each existing market guide
- [ ] Create neighborhood tables from neighborhoods.ts
- [ ] Create new market hub page
- [ ] Add CollectionPage schema to hub
- [ ] Add internal links between markets
- [ ] Test that tables render correctly

### Testing (Friday of Week 6)
```
Test these queries:
- "Best neighborhoods for multifamily in Albany"
- "Capital Region real estate market 2026"
- "Albany vs Schenectady multifamily"

Expected: Hub page + expanded guides appear
```

---

## WEEK 7-8: How-To Guides (Offer Making, Tenant Screening)

**Impact:** HowTo schema gets cited for procedural queries

### Content to Create

**A. "How to Make an Offer on Multifamily"** (`/how-to/how-to-offer-multifamily`)
```
Questions: Q11, Q127
File: /how-to/how-to-offer-multifamily.mdoc
Route: /how-to/how-to-offer-multifamily

Frontmatter:
---
title: "How to Make a Competitive Offer on Multifamily"
excerpt: "5 steps to submit a strong offer"
date: 2026-02-10
category: Buying
difficulty: Intermediate
timeEstimate: "15 minutes"
---

Steps:
1. Research comparable sales (comps)
2. Calculate your maximum offer price
3. Structure the offer (price, terms, contingencies)
4. Submit to seller/agent
5. Negotiate and close

Include:
- Real Capital Region example (anonymized)
- Links to financial fundamentals FAQ
- Links to calculator
- HowTo schema
```

**B. "How to Screen and Select Tenants"** (`/how-to/how-to-screen-tenants`)
```
Questions: Q85
File: /how-to/how-to-screen-tenants.mdoc
Route: /how-to/how-to-screen-tenants

Frontmatter:
---
title: "How to Screen and Select Quality Tenants"
excerpt: "Complete tenant screening checklist"
date: 2026-02-10
category: Landlord
difficulty: Beginner
timeEstimate: "20 minutes"
---

Steps:
1. Review applications (completeness)
2. Verify income (2-3x rent rule)
3. Check credit score and payment history
4. Contact previous landlords
5. Interview candidates
6. Make final decision + document

Include:
- Screening checklist
- Legal considerations (Fair Housing)
- Red flags to watch
- Links to legal FAQ
- HowTo schema
```

### Checklist
- [ ] Create 2 `.mdoc` files in `/how-to/`
- [ ] Add HowTo schema to each
- [ ] Link from related FAQs
- [ ] Link from comparisons
- [ ] Add "Related Guides" sections
- [ ] Test rendering at `/how-to/[guide-id]`

### Testing (Friday of Week 8)
```
Test these queries:
- "How to make an offer on a multifamily property"
- "How to screen tenants"

Expected: Guides appear in ChatGPT responses
```

---

## WEEK 9-10: Legal & Financing FAQ

**Impact:** High-intent, long-tail keyword coverage

### Content to Create

**A. Financing FAQ** (`/investing/financing-faq`)
```
Questions: Q72, Q73, Q74, Q75, Q76
File: /src/data/faq-financing.ts
Page: /src/app/investing/financing-faq/page.tsx
Route: /investing/financing-faq

FAQs:
- How does financing work for 2-4 units?
- Investment vs rental property loan - what's the difference?
- How does cash flow affect financing?
- What interest rate should I expect?
- What down payment do I need?
```

**B. Legal & Tax FAQ** (`/investing/legal-tax-faq`)
```
Questions: Q96, Q97, Q98, Q99, Q100
File: /src/data/faq-legal-tax.ts
Page: /src/app/investing/legal-tax-faq/page.tsx
Route: /investing/legal-tax-faq

FAQs:
- LLC vs S-Corp vs sole proprietorship?
- What tax deductions can I claim?
- How does depreciation work?
- What records should I keep?
- Should I set up separate LLC per property?
```

### Checklist
- [ ] Create 2 FAQ data files
- [ ] Create 2 FAQ pages
- [ ] Add FAQPage schema
- [ ] Link from investing guides
- [ ] Add breadcrumbs
- [ ] Link to existing investor network/resources

### Testing (Friday of Week 10)
```
Test these queries:
- "Financing options for multifamily"
- "Tax deductions for rental property"

Expected: Your pages appear
```

---

## WEEK 11-12: Hub Page (Link Everything + Authority Boost)

**Impact:** Topical authority + internal linking signals

### Content to Create

**Hub Page** (`/investing/all-questions-answered`)
```
File: /src/data/hub-all-questions-answered.ts
Page: /src/app/investing/all-questions-answered/page.tsx
Route: /investing/all-questions-answered

Purpose: Single page that links ALL published content

Structure:
├── Buying Decisions (5 items)
│   ├── FAQ: 2-unit vs 4-unit comparison
│   ├── FAQ: Buying fundamentals
│   ├── Guide: How to make an offer
│   └── Links to buying guides
├── Deal Analysis (4 items)
│   ├── FAQ: Financial fundamentals
│   ├── Guide: Evaluate deals
│   └── Links to calculator
├── Capital Region Markets (6 items)
│   ├── FAQ: Market overview
│   ├── Hub: Market guide
│   ├── Guides: Albany, Schenectady, Troy
│   └── Comparison: Market analysis
├── Financing & Legal (4 items)
│   ├── FAQ: Financing
│   ├── FAQ: Legal & tax
│   └── Links to resources
└── ... [more clusters]

Schema: FAQPage + CollectionPage nested
```

### Checklist
- [ ] Create hub page
- [ ] Map all 12 published pages to hub
- [ ] Create internal linking structure
- [ ] Add FAQPage + CollectionPage schema
- [ ] Test that all links work
- [ ] Update main `/investing/` to link to hub

### Testing (Friday of Week 12)
```
Full site audit:
- All 12 pages live and linked
- All schema validated
- All internal links working
- Breadcrumbs consistent
- Mobile responsive

Chat with ChatGPT:
- "Answer my top multifamily questions"
- "Best resources for Capital Region investing"

Expected: Hub page + multiple related pages appear
```

---

## Summary: What Gets Built Each Week

| Week | What | Pages | Questions Covered | LLM Impact |
|------|------|-------|-------------------|-----------|
| 1-2 | FAQ Clusters | 3 | ~26 | 48-hour citations |
| 3-4 | Comparisons | 2 | 6 | Bing ranking boost |
| 5-6 | Market Expansion | 4 (3 expanded + 1 hub) | 12+ | Local authority |
| 7-8 | How-To Guides | 2 | 6 | Procedural ranking |
| 9-10 | Legal/Finance FAQs | 2 | 10 | High-intent coverage |
| 11-12 | Hub + Authority | 1 | 50+ linked | Topical authority |
| **TOTAL** | **12 Pages** | **12+ new/expanded** | **~50-60 questions** | **Complete authority** |

---

## Daily/Weekly Tasks

### Every Week
**Monday:** Review ChatGPT for last week's published content
**Tuesday:** Create new content (write FAQs/comparisons)
**Wednesday:** Build pages + test rendering
**Thursday:** Add schema + links + validation
**Friday:** Submit to Bing + test ChatGPT queries + monitor

### Every Month
- Update market data if available (rents, cap rates, DOM)
- Review which questions got most ChatGPT citations
- Identify gaps for next month

### Every Quarter
- Review all AIEO metrics
- Plan expansion for remaining 71 questions (Phase 2)

---

## Files to Create Summary

### Week 1-2 (3 files)
```
/src/data/faq-financial-fundamentals.ts
/src/data/faq-capital-region-market.ts
/src/data/faq-first-time-investor.ts
```

### Week 3-4 (2 files)
```
/src/data/comparison-2-unit-vs-4-unit.ts
/src/data/comparison-buy-vs-househack.ts
```

### Week 5-6 (4 files)
```
/src/data/faq-albany-specific.ts
/src/data/faq-schenectady-specific.ts
/src/data/faq-troy-specific.ts
/src/data/capital-region-markets-hub.ts
```

### Week 7-8 (2 files)
```
/how-to/how-to-offer-multifamily.mdoc
/how-to/how-to-screen-tenants.mdoc
```

### Week 9-10 (2 files)
```
/src/data/faq-financing.ts
/src/data/faq-legal-tax.ts
```

### Week 11-12 (1 file)
```
/src/data/hub-all-questions-answered.ts
```

**TOTAL: 14 new data files + existing page files using them**

---

## Success = LLM Citations

**Target Metrics (End of Week 12):**
- 3+ ChatGPT mentions (screenshot proof)
- 5+ Bing "People Also Ask" impressions
- 50+ internal links between pages
- 2+ leads attributing discovery to ChatGPT
- All major questions → addressable via published content
