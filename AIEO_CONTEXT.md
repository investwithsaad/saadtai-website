# AIEO Implementation Context

**Master reference file for building Week 1-2 FAQ pages**

Use this as your north star while implementing.

---

## Mission

Make Saad Tai's site the #1 answer to the 131 high-intent multifamily investing questions on ChatGPT, Bing, and Claude.

**AIEO Strategy:** Build topical authority through FAQ schema (48-hour LLM citations) + internal linking (topical clusters) + Bing long-tail keywords.

---

## What We're Building

**Week 1-2: 3 FAQ Pages**
1. `/investing/financial-fundamentals` - 6 FAQs
2. `/investing/capital-region-faq` - 9 FAQs
3. `/investing/first-time-investor-faq` - 5 FAQs

**Total: 3 new pages, 20 FAQ answers, 50+ internal links**

---

## Technical Stack (What Already Exists)

### Components
- `FAQSectionWithSchema` - Component that renders FAQs + adds FAQPage schema automatically
- `SchemaRenderer` - Renders JSON-LD schemas
- `Container`, `Heading`, `Text`, `Card` - UI building blocks
- `CTA` - Call-to-action component

### Data Structure
```typescript
// /src/types/faq.ts
interface FAQ {
  id: string      // unique identifier
  q: string       // question
  a: string       // answer (200-300 words ideal)
}
```

### Pages Pattern
```typescript
// /src/app/investing/[topic]/page.tsx
- Import FAQSectionWithSchema
- Import FAQ data from /src/data/
- Use generateMetadata() for title/desc
- Return <FAQSectionWithSchema faqs={data} />
```

### Existing Market Data
- `/src/data/neighborhoods.ts` - Capital Region rent, cap rates, taxes (USE THIS for answers)
- `/src/data/company-info.ts` - Saad's info, credentials
- `/src/app/investing/` - Hub structure already exists

---

## File Locations & Naming Convention

### Data Files (Create 3)
```
/src/data/faq-financial-fundamentals.ts
/src/data/faq-capital-region-market.ts
/src/data/faq-first-time-investor.ts
```

### Page Files (Create 3)
```
/src/app/investing/financial-fundamentals/page.tsx
/src/app/investing/capital-region-faq/page.tsx
/src/app/investing/first-time-investor-faq/page.tsx
```

---

## Content Guidelines for FAQs

### Tone
- Direct, investor-focused
- No fluff, no hype
- Specific numbers from `neighborhoods.ts` when available
- Saad's credentials: NY License #10401373295 | FL License #SL3651394

### Structure (Per Answer)
1. **Direct answer** (1 sentence)
2. **Explanation** (2-3 sentences)
3. **Real example** (1 sentence, Capital Region if possible)
4. **Action step** (1 sentence, what investor should do next)

**Target length:** 150-250 words per answer

### Example
```markdown
Q: What's the difference between cap rate and cash-on-cash return?

A: Cap rate = NOI ÷ price (ignores financing). Cash-on-cash = annual cash flow ÷ cash invested (with financing).

Cap rate tells you the property's raw profitability. A 7% cap rate property costs $100k for $7k annual NOI. Cash-on-cash shows YOUR return after debt service. If you put down $20k with $5k annual cash flow, that's 25% cash-on-cash.

In the Capital Region, typical cap rates range 7-9%, but cash-on-cash returns often 10-15% depending on leverage.

Use cap rate to compare properties fairly; use cash-on-cash to evaluate your actual return after financing.
```

---

## Schema & Internal Linking

### Schema (Automatic)
`FAQSectionWithSchema` component adds:
- `@type: FAQPage`
- `mainEntity: [{ @type: Question, acceptedAnswer: { @type: Answer } }]`
- This enables ChatGPT/Claude citations within 48 hours

### Internal Linking (Manual - Add to Each Page)

**Bottom of each FAQ page, add:**
```markdown
## Related Resources

- [Financial Fundamentals FAQs](/investing/financial-fundamentals) - Understand cap rates, cash flow
- [Capital Region Market FAQs](/investing/capital-region-faq) - Market trends, neighborhoods
- [First-Time Investor FAQs](/investing/first-time-investor-faq) - Start here
- [Multifamily Investment Guide](/investing/multifamily-investment-guide) - Deep dive
- [Investment Hub](/investing) - All investing resources
```

**Also add:** Links from existing guides to these FAQs (update existing content)

---

## Data to Answer Questions

### For Financial Q's
Use these metrics from `neighborhoods.ts`:
- Average cap rates in different neighborhoods
- Typical property prices
- Tax rates
- HOW TO CALCULATE from actual data

### For Market Q's
Use these from `neighborhoods.ts`:
- Neighborhood names + data
- Rent prices by area
- Appreciation trends
- Tax environment
- Tenant demographics

### For First-Time Q's
Use company-info:
- Saad's credentials
- Most common investor type
- First-time investor paths

---

## Testing Checklist (Before Publishing)

### Content
- [ ] All FAQ answers are 150-250 words
- [ ] All answers start with direct answer (1 sentence)
- [ ] Capital Region examples where relevant
- [ ] No false claims, only verified data
- [ ] Links to neighborhoods.ts or other sources

### Technical
- [ ] Data file imports correctly
- [ ] Page renders without errors
- [ ] FAQSection renders all FAQs
- [ ] Schema renders (test with: [Google Rich Results](https://search.google.com/test/rich-results))
- [ ] Internal links all work
- [ ] Mobile responsive
- [ ] Page loads <2s

### SEO
- [ ] Meta title ≤70 chars (e.g., "Financial Fundamentals for Multifamily Investors")
- [ ] Meta description ≤160 chars (e.g., "Learn cap rates, cash flow, returns. Essential metrics for analyzing deals.")
- [ ] Breadcrumb navigation works
- [ ] Canonical tag correct

---

## Implementation Sequence

**For Each FAQ Page:**

1. **Create data file** (`/src/data/faq-*.ts`)
   - Export array of FAQ objects
   - Each FAQ has id, q, a
   - a = 150-250 words

2. **Create page file** (`/src/app/investing/*/page.tsx`)
   - Import FAQ data
   - Import FAQSectionWithSchema
   - Create metadata
   - Return JSX with FAQSectionWithSchema + internal links

3. **Test component**
   - Visit route in browser
   - Check all FAQs render
   - Validate schema with Google test
   - Check links work

4. **Add internal linking**
   - Link between 3 FAQ pages
   - Link from investing hub
   - Link from existing guides (if relevant)

5. **Validate & Deploy**
   - Run `npm run build` (SEO validation runs)
   - Check no errors
   - Commit & push to dev branch

6. **Monitor (Friday)**
   - Test queries in ChatGPT
   - Screenshot if appears
   - Ask: "Where did you get that source?"

---

## Week 1-2 Tasks

### Page 1: Financial Fundamentals FAQs (WEEK 1)
- [ ] Create `/src/data/faq-financial-fundamentals.ts` (6 FAQs)
- [ ] Create `/src/app/investing/financial-fundamentals/page.tsx`
- [ ] Test rendering + schema validation
- [ ] Add internal links section

### Page 2: Capital Region Market FAQs (WEEK 1)
- [ ] Create `/src/data/faq-capital-region-market.ts` (9 FAQs)
- [ ] Create `/src/app/investing/capital-region-faq/page.tsx`
- [ ] Test rendering + schema validation
- [ ] Add internal links section

### Page 3: First-Time Investor FAQs (WEEK 2)
- [ ] Create `/src/data/faq-first-time-investor.ts` (5 FAQs)
- [ ] Create `/src/app/investing/first-time-investor-faq/page.tsx`
- [ ] Test rendering + schema validation
- [ ] Add internal links section

### Cross-Linking (WEEK 2)
- [ ] Update investing hub to link to FAQ pages
- [ ] Update existing guides to link to FAQs
- [ ] Create "Related FAQs" section on each page

### Validation & Monitoring (WEEK 2)
- [ ] Run `npm run build` - all validations pass
- [ ] Submit each page to Bing Webmaster
- [ ] Test 5 queries in ChatGPT
- [ ] Document screenshots

---

## File Examples

### Example Data File
```typescript
// /src/data/faq-financial-fundamentals.ts
import { FAQ } from '@/types/faq'

export const financialFundamentalsFAQs: FAQ[] = [
  {
    id: 'cap-rate-vs-coc',
    q: 'What\'s the difference between cap rate and cash-on-cash return?',
    a: 'Cap rate = NOI ÷ price (ignores financing). Cash-on-cash = annual cash flow ÷ cash invested (includes financing).

Cap rate shows the property\'s raw profitability independent of how you finance it. A 7% cap rate means a property generates $7k annual NOI per $100k purchase price. Cash-on-cash shows YOUR actual return after the mortgage. If you invest $20k down with $5k annual cash flow, that\'s 25% cash-on-cash.

In the Capital Region, typical cap rates range 7-9%, but investor cash-on-cash returns often reach 10-15% with standard financing.

Use cap rate to compare properties on equal footing; use cash-on-cash to evaluate your actual return with your specific financing.'
  },
  {
    id: 'calculate-real-cashflow',
    q: 'How do I calculate real cash flow?',
    a: 'Start with gross scheduled rent. Subtract vacancy loss (5-10%), credit loss, and all operating expenses (taxes, insurance, utilities, maintenance, management). This gives you NOI. Then subtract your debt service (mortgage payment). What\'s left is cash flow.

Example: $60k gross annual rent - $3k vacancy - $20k expenses = $37k NOI. Minus $20k mortgage = $17k cash flow.

Many investors forget to model actual vacancy, taxes (check neighborhoods.ts for Capital Region), and CapEx reserves. Without these, you\'re guessing, not investing.

The formula: Gross Rent - Vacancy - Expenses - Debt Service = Cash Flow. Every dollar must be accounted for.'
  },
  // ... 4 more FAQs
]
```

### Example Page File
```typescript
// /src/app/investing/financial-fundamentals/page.tsx
import { FAQSectionWithSchema } from '@/components/faq/FAQSectionWithSchema'
import { Container, Heading, Text } from '@/components/ui'
import { generateMetadata } from '@/lib/metadata-factory'
import { financialFundamentalsFAQs } from '@/data/faq-financial-fundamentals'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'Financial Fundamentals for Multifamily Investors',
  description: 'Understand cap rates, cash flow, ROI, and returns. Essential metrics for analyzing multifamily deals.',
  slug: '/investing/financial-fundamentals'
})

export default function FinancialFundamentalsPage() {
  return (
    <Container>
      <Heading size="h1">Financial Fundamentals for Multifamily Investors</Heading>

      <Text>
        Master the metrics that matter: cap rate, cash-on-cash return, and real cash flow.
        These financial concepts are the foundation of smart multifamily investing.
      </Text>

      <FAQSectionWithSchema
        faqs={financialFundamentalsFAQs}
        schemaName="Multifamily Investing Financial Concepts"
      />

      {/* Internal Linking Section */}
      <section className="mt-12 border-t pt-8">
        <Heading size="h2">Related Resources</Heading>

        <div className="grid gap-4 mt-6">
          <Link href="/investing/capital-region-faq" className="card-link">
            → Capital Region Market FAQs: Rent, cap rates, neighborhoods
          </Link>

          <Link href="/investing/first-time-investor-faq" className="card-link">
            → First-Time Investor FAQs: Is multifamily right for you?
          </Link>

          <Link href="/investing/multifamily-investment-guide" className="card-link">
            → Multifamily Investment Guide: Complete overview
          </Link>

          <Link href="/investing" className="card-link">
            → Investment Hub: All resources
          </Link>
        </div>
      </section>
    </Container>
  )
}
```

---

## Success Criteria (End of Week 2)

✅ 3 FAQ pages published
✅ 20 FAQ answers live
✅ FAQPage schema on all 3 pages
✅ All internal links working
✅ `npm run build` passes
✅ All pages submitted to Bing
✅ At least 1 question tested in ChatGPT

---

## Reference Commands

```bash
# Run SEO validation
npm run validate-seo

# Build and test
npm run build

# Start dev server
npm run dev

# Test in browser
# Visit http://localhost:3000/investing/financial-fundamentals
```

---

## Common Mistakes to Avoid

❌ Answers that are too short (<150 words) - LLMs won't cite them
❌ No real data/numbers - ChatGPT ignores generic advice
❌ Forgot internal links - Misses topical clustering opportunity
❌ Answers not specific to Capital Region - Loses local authority
❌ Schema not validated - Defeats purpose of AIEO strategy
❌ Not testing in ChatGPT after publishing - Won't know if it works

---

## Questions Contact

If unclear about answer content:
1. Check `neighborhoods.ts` for local metrics
2. Reference CLAUDE.md for GEO best practices
3. Check `HIGH_INTENT_QUESTIONS_QUICK.md` for full question context
4. Use ChatGPT answers provided in initial brief as guidance (not exact copy, rewrite for site voice)

---

## Success = LLM Citations

**This is working if:**
- Your page appears when people ask questions in ChatGPT
- Your page gets cited as a source
- You start getting leads asking "I found you on ChatGPT"
- Bing shows your pages in "People Also Ask"

**Timeline:** FAQPage schema cited within 48 hours of publishing (if crawled).

---

**Ready to implement Week 1? Let's go.**
