# Sanity CMS Migration Plan: Page Structure Audit & Schema Design

## Executive Summary

This document outlines a plan to extend Sanity CMS to manage all page sections across the website, moving from the current partial implementation (hero sections only) to a full page builder model. This will make the entire website editable without code changes.

**Current State:** Hero sections + metadata managed in Sanity; all other content (testimonials, process steps, stats, FAQs, cards) hardcoded

**Target State:** Complete page content managed in Sanity with reusable section components

---

## Part 1: Current State Analysis

### Pages Audited (11 Main Pages)

1. Home (`/`)
2. About (`/about`)
3. Buying (`/buying`)
4. Selling (`/selling`)
5. Landing (`/landing`)
6. Calculator (`/calculator`)
7. FAQ (`/faq`)
8. Listings (`/listings`)
9. VIP Investor List (`/vip-investor-list`)
10. Blog (`/blog`)
11. Privacy Policy & Terms of Service

### Current Content Management Split

**Managed in Sanity CMS:**
- Hero section headline, description, CTA text
- Open Graph image
- Page metadata (title, description)

**Hardcoded/Static Files:**
- All section bodies (problem statements, features, benefits)
- Testimonials (13 testimonials in array)
- Process steps (4-step home process, 6-step selling process)
- Credibility stats (market statistics)
- FAQ data
- Card content (investor personas, strategic advantages)
- Listings data (though this fetches from Sanity, content is property-specific)

---

## Part 2: Universal Section Types (High-Priority)

### Sections Appearing on 100% of Main Pages

#### 1. **Hero Section** ⭐ (Already in Sanity)
- **Current Fields:** headline, description, ctaText, ogImage
- **Status:** ✅ Implemented
- **No Action Needed**

#### 2. **Section Wrapper** (Container Layout)
- **Current:** Tailwind background classes (white, dark, background)
- **Action:** Standardize in Sanity schema
- **Proposed Fields:**
  ```
  - backgroundColor: select (white | dark | background)
  - className: string (optional additional classes)
  - containerWidth: select (default | full-width | narrow)
  - paddingY: select (small | medium | large)
  ```

#### 3. **Heading + Text Block**
- **Current:** Scattered throughout pages
- **Action:** Create reusable block type
- **Proposed Fields:**
  ```
  - heading: string
  - headingSize: select (h1 | h2 | h3 | h4)
  - description: rich text
  - alignment: select (left | center)
  - backgroundColor: inherited from parent
  ```

#### 4. **CTA Button / Call-to-Action**
- **Current:** Embedded in multiple sections
- **Action:** Create consistent CTA component
- **Proposed Fields:**
  ```
  - text: string (button label)
  - link: url | reference (internal link or external URL)
  - style: select (primary | secondary | outline)
  - openInNewTab: boolean
  ```

---

## Part 3: Common Section Types (Medium-Priority)

### Sections Appearing on 50%+ of Pages

#### 5. **Card Grid Section** (82% of pages)
**Used on:** Home, About, Buying, Selling, Listings, VIP, Blog, FAQ

- **Current Variations:**
  - 2-column investor personas (Home)
  - 3-column strategic advantages (Home)
  - 3-column testimonials (Home, About)
  - 2-column listings grid (Listings)
  - 2-column VIP benefits (VIP)
  - 3-column features/mistake cards (Buying)

- **Proposed Sanity Schema:**
  ```
  CardGridSection {
    title: string
    description: string (optional)
    gridColumns: select (2 | 3 | 4)
    cards: array of {
      title: string
      description: text
      image: image (optional)
      icon: string (optional, e.g., CheckCircle)
      link: url (optional)
      badge: string (optional, e.g., "Featured")
      highlightFirstLetter: boolean (for process values like About page)
    }
    backgroundColor: inherited
    alignmentStyle: select (default | centered)
  }
  ```

#### 6. **Lead Form Modal Section** (73% of pages)
**Used on:** Home, About, Buying, Selling, Listings, VIP, Blog (8 pages)

- **Current Implementation:** LeadFormModal component
- **Context Variations:**
  - Generic lead capture (most pages)
  - Pre-filled context (Listings with address, VIP with interest type)

- **Proposed Sanity Fields:**
  ```
  LeadFormSection {
    formType: select (standard | qualified-investor | vip-interest)
    ctaText: string
    description: string (optional)
    buttonText: string
    prefilledFields: object {
      source?: string
      property?: reference (for Listings)
      interest?: string
    }
    displayPlacement: select (inline | modal | both)
  }
  ```

#### 7. **Problem/Challenge Section** (27% of pages)
**Used on:** Home, Buying, Selling

- **Current Structure:** Heading + bullet points + dark background
- **Proposed Sanity Schema:**
  ```
  ProblemSection {
    heading: string
    description: string
    bulletPoints: array of string
    backgroundColor: "dark" (default)
    image: image (optional)
    imagePosition: select (left | right)
  }
  ```

#### 8. **Testimonials Section** (18% of pages)
**Used on:** Home, About

- **Current Data:** Array of 13 testimonials (hardcoded)
- **Current Fields:** quote, author, role, rating, tag (optional)

- **Proposed Sanity Schema:**
  ```
  TestimonialsSection {
    heading: string
    testimonials: array of reference to Testimonial document
      OR array of inline {
        quote: text
        author: string
        role: string
        rating: number (1-5)
        tag: string (optional, e.g., "Investor")
        image: image (optional)
      }
    gridColumns: select (2 | 3 | 4)
  }
  ```

#### 9. **Process/Steps Section** (18% of pages)
**Used on:** Home (4-step), Selling (6-step)

- **Current Variations:**
  - Numbered circles with descriptions (Home)
  - Multi-step visual process (Selling)

- **Proposed Sanity Schema:**
  ```
  ProcessSection {
    heading: string
    steps: array of {
      stepNumber: number (auto or manual)
      title: string
      description: string
      icon: string (optional)
      image: image (optional)
      duration: string (optional, e.g., "2-3 days")
    }
    layout: select (horizontal | vertical | timeline)
    backgroundColor: inherited
  }
  ```

#### 10. **Credibility/Stats Section** (27% of pages)
**Used on:** Home, Buying, Selling

- **Current Data:** "13 days on market", "97% above asking"

- **Proposed Sanity Schema:**
  ```
  CredibilityStatsSection {
    heading: string (optional)
    stats: array of {
      number: string (e.g., "13")
      unit: string (optional, e.g., "days")
      label: string (e.g., "Average time on market")
      icon: string (optional)
    }
    layout: select (2-column | 3-column | 4-column)
    backgroundColor: inherited
  }
  ```

#### 11. **FAQ Accordion Section** (27% of pages)
**Used on:** FAQ page (main), Buying, Selling (filtered)

- **Current Data:** FAQ array with category filtering
- **Proposed Sanity Schema:**
  ```
  FAQAccordionSection {
    heading: string
    category: select (buying | selling | investor | network | tools | all)
    faqs: array of reference to FAQ document OR inline {
      question: string
      answer: rich text
      category: string (for filtering)
    }
    limit: number (optional, e.g., show first 5)
    showAllLink: boolean (link to full FAQ page)
  }
  ```

#### 12. **Breadcrumb Navigation** (27% of pages)
**Used on:** FAQ, Blog, Privacy Policy, Terms of Service

- **Current Implementation:** Breadcrumb component
- **Proposed Sanity Schema:**
  ```
  BreadcrumbSection {
    items: array of {
      label: string
      link: url (optional)
    }
    (OR) autoGenerate: boolean (auto-generate from URL structure)
  }
  ```

---

## Part 4: Specialized Sections (Lower-Priority)

### Page-Specific Sections

#### 13. **Listings Section** (Listings page)
- **Current:** Dynamic grid from Sanity properties
- **Status:** Already uses Sanity data
- **Consider:** Parameterize grid layout (columns, filters)

#### 14. **Calculator Section** (Calculator page)
- **Current:** Gated access with localStorage
- **Consider:** Make gate behavior configurable in Sanity

#### 15. **Featured Case Study Section** (Home, Buying, Selling)
- **Current:** Hardcoded John Hooper House + property cards
- **Proposed:** Make featured property configurable
  ```
  FeaturedCaseStudySection {
    heading: string
    featuredProperty: reference to Property/Listing
    relatedProperties: array of references (limit: 3)
  }
  ```

---

## Part 5: Proposed Sanity Document Structure

### New Document Types to Create

```
/schemas
├── sections/
│   ├── heroSection.ts
│   ├── cardGridSection.ts
│   ├── problemSection.ts
│   ├── testimonialsSection.ts
│   ├── processSection.ts
│   ├── credibilityStatsSection.ts
│   ├── faqAccordionSection.ts
│   ├── leadFormSection.ts
│   ├── headingTextBlock.ts
│   ├── ctaButton.ts
│   └── breadcrumbSection.ts
├── page.ts (NEW - Page document with array of sections)
├── testimonial.ts (NEW - Reusable testimonial reference)
├── faq.ts (NEW - Reusable FAQ reference)
└── [existing schemas]
```

### New "Page" Document Type

**Purpose:** Single document per page, containing all sections in order

```typescript
{
  _type: 'page',
  slug: 'buying',  // unique identifier
  title: 'Buying',
  metadata: {
    metaTitle: string
    metaDescription: string
    keywords: array
    ogImage: image
  },
  sections: [
    {
      _type: 'heroSection',
      headline: string
      description: string
      ctaText: string
      ...
    },
    {
      _type: 'cardGridSection',
      title: string
      cards: array
      ...
    },
    {
      _type: 'problemSection',
      heading: string
      bulletPoints: array
      ...
    },
    // ... more sections
  ]
}
```

---

## Part 6: Migration Phases

### Phase 1: Foundation (Weeks 1-2)
**Priority: High | Impact: Core infrastructure**

- [ ] Create base Sanity document type: `page`
- [ ] Create core section types: Hero, Heading+Text, CTA Button
- [ ] Update page queries to fetch full page sections
- [ ] Create SectionRenderer component to render array of sections
- [ ] Test with Home page (non-breaking, backward compatible)

**Deliverable:** Home page sections fetched from Sanity, hardcoded fallbacks in place

---

### Phase 2: High-Impact Sections (Weeks 3-4)
**Priority: High | Impact: Covers 80% of pages**

- [ ] Create CardGridSection schema & component
- [ ] Create TestimonialsSection schema & component
- [ ] Create ProcessSection schema & component
- [ ] Migrate Home page testimonials → Sanity
- [ ] Migrate Home page 4-step process → Sanity
- [ ] Migrate Strategic Advantages cards → Sanity

**Deliverable:** Home page fully editable in Sanity

---

### Phase 3: Common Patterns (Weeks 5-6)
**Priority: Medium | Impact: Covers remaining common sections**

- [ ] Create ProblemSection schema & component
- [ ] Create CredibilityStatsSection schema & component
- [ ] Create FAQAccordionSection schema & component
- [ ] Migrate Buying page sections
- [ ] Migrate Selling page sections
- [ ] Migrate FAQ page sections

**Deliverable:** Buying, Selling, FAQ pages editable in Sanity

---

### Phase 4: Specialized Pages (Weeks 7-8)
**Priority: Medium | Impact: Remaining pages**

- [ ] Migrate About page sections
- [ ] Migrate Listings page (review current structure)
- [ ] Migrate VIP Investor List page
- [ ] Migrate Blog page sections
- [ ] Create Landing page in Sanity

**Deliverable:** 10 of 11 main pages fully editable

---

### Phase 5: Data Consolidation (Weeks 9-10)
**Priority: Low | Impact: Cleanup & optimization**

- [ ] Consolidate hardcoded testimonials into Sanity
- [ ] Consolidate hardcoded FAQs into Sanity
- [ ] Remove static data files (blog-posts.ts, testimonials.ts, faq-data.ts)
- [ ] Update TypeScript types to reflect new data structure
- [ ] Audit and remove unused components

**Deliverable:** Single source of truth for all content (Sanity)

---

### Phase 6: Advanced Features (Optional, Future)
**Priority: Low | Impact: Enhanced capabilities**

- [ ] Implement draft preview mode
- [ ] Add version control/revision history
- [ ] Create page templates for quick setup
- [ ] Implement A/B testing framework in sections
- [ ] Add analytics event tracking configuration
- [ ] Mobile-specific section variants

---

## Part 7: Implementation Considerations

### Data Migration Strategy

**Option A: Gradual Migration** (Recommended)
- Keep static data as fallback
- Gradually enable Sanity sections per page
- No breaking changes
- Allows testing before full cutover

**Option B: Big Bang Migration**
- All pages to Sanity at once
- Requires comprehensive testing
- Higher risk, faster payoff

### Component Architecture

**Recommended Approach:**

```typescript
// pages/[slug].tsx
const page = await fetchPageFromSanity(slug);

return (
  <>
    {page.sections.map((section) => (
      <SectionRenderer key={section._key} section={section} />
    ))}
  </>
);

// SectionRenderer.tsx
const SectionRenderer = ({ section }) => {
  switch (section._type) {
    case 'heroSection':
      return <HeroSection {...section} />;
    case 'cardGridSection':
      return <CardGridSection {...section} />;
    case 'problemSection':
      return <ProblemSection {...section} />;
    // ... etc
  }
};
```

### TypeScript Types

Create discriminated union for type safety:

```typescript
type PageSection =
  | { _type: 'heroSection'; headline: string; ... }
  | { _type: 'cardGridSection'; title: string; ... }
  | { _type: 'problemSection'; heading: string; ... }
  | // ... etc
```

### Backward Compatibility

All static data should have **fallback logic** during migration:

```typescript
const testimonials = page.testimonials || HARDCODED_TESTIMONIALS;
```

---

## Part 8: Current Section Types Summary Table

| Section Type | Pages | Frequency | Priority | Est. Effort |
|---|---|---|---|---|
| Hero Section | All 11 | 100% | Done ✅ | N/A |
| Card Grid | 9 pages | 82% | Phase 2 | Medium |
| Heading + Text | All 11 | 100% | Phase 1 | Low |
| CTA Button | All 11 | 100% | Phase 1 | Low |
| FadeIn Animation | All 11 | 100% | Phase 1 | Low |
| Lead Form Modal | 8 pages | 73% | Phase 3 | Medium |
| Testimonials | 2 pages | 18% | Phase 2 | Medium |
| Process Steps | 2 pages | 18% | Phase 2 | Medium |
| Problem Section | 3 pages | 27% | Phase 3 | Low |
| Credibility Stats | 3 pages | 27% | Phase 3 | Low |
| FAQ Accordion | 3 pages | 27% | Phase 3 | Medium |
| Breadcrumb | 3 pages | 27% | Phase 4 | Low |
| Listings Grid | 1 page | 9% | Phase 4 | Low |
| Calculator | 1 page | 9% | Phase 4 | Medium |
| Featured Case | 3 pages | 27% | Phase 4 | Medium |

---

## Part 9: Benefits of Full Sanity Migration

### Content Team Benefits
- ✅ Edit any page section without developer involvement
- ✅ Reorder sections by dragging
- ✅ A/B test different section layouts
- ✅ Manage testimonials, FAQs, stats in one place
- ✅ Schedule content updates

### Developer Benefits
- ✅ Reduced hardcoded content maintenance
- ✅ Consistent component patterns
- ✅ Easier to add new page types
- ✅ Single data source of truth
- ✅ Simpler deployment (no code for content changes)

### Performance Benefits
- ✅ Smaller bundle size (less static data)
- ✅ Faster page builds with CDN-cached Sanity data
- ✅ Real-time content updates without redeploy

---

## Part 10: Success Metrics

### Phase Completion Checklist

- [ ] All sections have Sanity schemas
- [ ] SectionRenderer component works reliably
- [ ] Fallback logic prevents blank sections
- [ ] TypeScript types prevent runtime errors
- [ ] Performance metrics stable (no slowdown)
- [ ] Content team trained on Sanity CMS
- [ ] SEO impact verified (no ranking drops)
- [ ] All pages render identically to previous version
- [ ] Analytics tracking maintained

---

## Part 11: Questions to Consider

1. **Lead Forms:** Should the LeadFormModal remain as-is, or be editable (placement, fields, CTAs)?
2. **Testimonials:** Keep as reusable documents or embedded in sections?
3. **FAQs:** Manage globally or per-page?
4. **Listings:** Keep current Sanity integration or enhance?
5. **Calculator Page:** Should calculator logic be in Sanity or stay code-based?
6. **Blog:** Separate content management system or integrate with pages?
7. **Metadata:** Keep in page documents or separate?
8. **Versioning:** Do you need revision history or draft/published states?

---

## Appendix: Current Hardcoded Data Locations

- **Testimonials:** `/src/data/testimonials.ts` (13 items)
- **FAQs:** `/src/data/faq-data.ts` (50+ items by category)
- **Blog Posts:** `/src/data/blog-posts.ts`
- **Home Process:** `home-content.tsx` (4 steps)
- **Selling Process:** `seller-page-content.tsx` (6 steps)
- **Investor Personas:** `home-content.tsx` (3 personas)
- **Strategic Advantages:** `home-content.tsx` (3 advantages)
- **Credibility Stats:** Shared across `buying-content.tsx`, `seller-page-content.tsx`, `home-content.tsx`
- **Stats Section:** `buying-content.tsx`, `seller-page-content.tsx`
- **Featured Case:** `home-content.tsx`, `buying-content.tsx`, `seller-page-content.tsx`

---

## Next Steps

1. **Review this plan** with team stakeholders
2. **Answer Part 11 questions** to clarify scope
3. **Begin Phase 1** (Foundation): Create Sanity schemas
4. **Implement SectionRenderer** component
5. **Test with Home page** (backward compatible)
6. **Iterate through phases** based on priority and bandwidth
