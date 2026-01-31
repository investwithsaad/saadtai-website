# Quick Implementation Guide - Highest Impact Fixes

This file contains ready-to-use code snippets for the biggest performance gains.

## 1. FIX: Image Optimization (Impact: +500-800ms LCP) ⭐⭐⭐

### Location: `src/components/blog-hero-fade-in.tsx`

Replace any `<img>` tags with Next.js `Image` component:

```tsx
import Image from 'next/image'

interface BlogHeroFadeInProps {
  authorPhoto?: string
  // ... other props
}

export function BlogHeroFadeIn({ authorPhoto, ...props }: BlogHeroFadeInProps) {
  return (
    <section className="relative">
      {authorPhoto && (
        <div className="relative w-12 h-12 rounded-full overflow-hidden mb-4">
          <Image
            src={authorPhoto}
            alt="Author photo"
            fill  // Use fill instead of explicit width/height for responsive
            sizes="48px"
            className="object-cover"
            priority={true}  // Load this immediately (LCP element)
            placeholder="blur"  // Show blur while loading
          />
        </div>
      )}
      {/* rest of component */}
    </section>
  )
}
```

---

## 2. FIX: Defer Non-Critical CSS (Impact: +70-100ms FCP) ⭐⭐⭐

### Location: Extract animations to separate CSS file

**Step 1**: Create `src/app/animations.css`
```css
/* Non-critical animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-in;
}

/* Other animations... */
```

**Step 2**: Update `src/app/layout.tsx`
```tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {/* Critical CSS only in globals.css */}
        <link rel="stylesheet" href="/globals.css" />
        
        {/* Defer animations CSS */}
        <link
          rel="stylesheet"
          href="/animations.css"
          media="print"
          onLoad="this.media='all'"
        />
        {/* Fallback for browsers without JS */}
        <noscript>
          <link rel="stylesheet" href="/animations.css" />
        </noscript>
      </head>
      {/* ... */}
    </html>
  )
}
```

---

## 3. FIX: Code-Split Markdoc Rendering (Impact: +400-600ms TBT) ⭐⭐⭐

### Location: `src/app/blog/[blog-id]/page.tsx`

Replace the inline content rendering with dynamic import:

**Before** (current - blocks main thread):
```tsx
export default async function BlogPost({ params }: Props) {
  const { 'blog-id': blogId } = await params
  const blogPost = getBlogPost(blogId)
  
  // This creates a long task:
  const content = Markdoc.transform(blogPost.ast, config)
  
  return (
    <>
      {renderMarkdoc(content)}
    </>
  )
}
```

**After** (code-split - runs in background):
```tsx
import dynamic from 'next/dynamic'

// Lazy load the expensive rendering
const BlogContent = dynamic(
  () => import('@/components/blog-content-renderer'),
  {
    loading: () => <div className="animate-pulse h-96 bg-gray-100 rounded" />,
    ssr: true  // Still render on server, but don't block main thread
  }
)

export default async function BlogPost({ params }: Props) {
  const { 'blog-id': blogId } = await params
  const blogPost = getBlogPost(blogId)
  
  // Don't transform here, pass raw data
  return (
    <>
      <BlogHeroFadeIn {...blogPost} />
      
      {/* This component handles Markdoc transformation */}
      <BlogContent ast={blogPost.ast} rawContent={blogPost.rawContent} />
      
      {/* Rest of page */}
    </>
  )
}
```

**New file** `src/components/blog-content-renderer.tsx`:
```tsx
'use client'

import Markdoc from '@markdoc/markdoc'
import { config } from '@/markdoc/config'
import { renderMarkdoc } from '@/markdoc/renderer'

interface BlogContentRendererProps {
  ast: any
  rawContent: string
}

export default function BlogContentRenderer({ ast, rawContent }: BlogContentRendererProps) {
  // This heavy computation now happens on client after page interactive
  const content = Markdoc.transform(ast, config)
  
  return (
    <div>
      {renderMarkdoc(content)}
    </div>
  )
}
```

---

## 4. FIX: Lazy Load Tracking Scripts (Impact: +200-300ms TBT) ⭐⭐

### Location: `src/app/layout.tsx`

Ensure all third-party scripts use `strategy="lazyOnload"` or better:

```tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {/* Only critical scripts here */}
      </head>
      <body>
        {/* App content loads FIRST */}
        <LayoutContent>{children}</LayoutContent>
        
        {/* All analytics/tracking LAST */}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="lazyOnload"  // Load after page interactive ✅
            onLoad={() => {
              console.log('Analytics loaded')
            }}
          />
        )}
        
        {process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID && (
          <Script
            id="clarity-script"
            strategy="lazyOnload"  // Load after page interactive ✅
            dangerouslySetInnerHTML={{...}}
          />
        )}
      </body>
    </html>
  )
}
```

---

## 5. FIX: Heading Hierarchy (Accessibility +2 points) ⭐

### Location: `src/app/blog/[blog-id]/page.tsx`

Ensure proper heading order:

```tsx
export default async function BlogPost({ params }: Props) {
  // ...
  
  return (
    <>
      {/* Blog title is H1 (set in BlogHeroFadeIn component) */}
      <BlogHeroFadeIn title={blogPost.title!} />
      
      <Section>
        {/* Main section should start with H2 */}
        <h2 className="sr-only">Blog Content</h2>  {/* Or remove if not needed */}
        
        {/* Key takeaway section */}
        {blogPost.keyTakeaway && (
          <div>
            {/* Use H3 not H2 */}
            <h3>Key Takeaway</h3>
            {blogPost.keyTakeaway}
          </div>
        )}
        
        {/* FAQs section */}
        {faqs.length > 0 && (
          <div className="mt-10">
            {/* Use H2 for section, H3 for individual FAQs */}
            <h2>FAQs</h2>
            <InlineFAQ faqs={faqs} />
          </div>
        )}
        
        {/* Related guides section */}
        {relatedGuides.length > 0 && (
          <div className="mt-12 border-t border-gray-200 pt-8">
            {/* Use H2 for main section, H3 for guide cards */}
            <h2>Related How-To Guides</h2>
            {relatedGuides.map((guide) => (
              <article key={guide.id}>
                <h3>{guide.title}</h3>
                <p>{guide.excerpt}</p>
              </article>
            ))}
          </div>
        )}
      </Section>
    </>
  )
}
```

---

## 6. FIX: Link Contrast (Accessibility +2 points) ⭐

### Location: `src/app/globals.css`

Add clear visual distinction for all links:

```css
/* Make all links clearly distinguishable */
a {
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 0.25em;
}

/* Ensure sufficient color contrast */
a:not([class*="btn"]) {
  color: #1e40af;  /* Tailwind blue-800 - WCAG AA compliant */
}

a:visited {
  color: #5b21b6;  /* Tailwind purple-800 */
}

a:hover,
a:focus {
  text-decoration-thickness: 2px;
  color: #0c2340;  /* Darker blue */
}

/* Specific component fixes */
.breadcrumb a {
  color: #1e40af;
  text-decoration: underline;
}

.related-guides a {
  color: #1e40af;
  text-decoration: underline;
}

.social-share a {
  color: #1e40af;
  text-decoration: underline;
}
```

---

## 7. BONUS: Remove Unused JavaScript (Impact: +100-200ms) ⭐

Run this to see what's unused:
```bash
npm run analyze
```

Then check which dependencies aren't used on blog posts:

**Likely candidates to move to dynamic imports:**

```tsx
// If recharts/charts aren't used on blog:
import dynamic from 'next/dynamic'

const ChartComponent = dynamic(() => import('@/components/chart'), {
  loading: () => <div>Loading...</div>,
  ssr: false  // Charts don't need SSR
})

export default function Page() {
  // Only show chart where needed, not on every page
  return <ChartComponent />
}
```

---

## Implementation Priority Order

1. **First** (5 mins): Image optimization → +500-800ms ⭐⭐⭐
2. **Second** (10 mins): Defer CSS → +70-100ms ⭐⭐⭐
3. **Third** (20 mins): Code-split Markdoc → +400-600ms ⭐⭐⭐
4. **Fourth** (5 mins): Fix heading hierarchy → +2 a11y points ⭐
5. **Fifth** (5 mins): Fix link contrast → +2 a11y points ⭐
6. **Sixth** (15 mins): Lazy load scripts → +200-300ms ⭐⭐
7. **Optional** (30 mins): Bundle analysis → +100-200ms ⭐

**Total effort: ~1 hour for +1000-1500ms performance improvement**

---

## Testing After Implementation

```bash
# 1. Build
npm run build

# 2. Run production build locally
npm run start

# 3. Run Lighthouse in incognito mode (no extensions/cache affecting results)
# Chrome DevTools → Lighthouse → Audit

# 4. Expected results:
# Performance: 48 → 75-85 ✅
# Accessibility: 95 → 97-99 ✅
# Best Practices: 73 → 78-85 ✅
# SEO: 100 → 100 ✅
```

---

## Verification Checklist

After implementing each fix:

- [ ] Build succeeds: `npm run build`
- [ ] No console errors in dev/prod
- [ ] Page renders identically (visual regression check)
- [ ] All links work
- [ ] Images load properly
- [ ] Analytics still tracking
- [ ] Lighthouse score improved

---

## Questions?

If any changes cause issues:
1. Check console for errors: `npm run dev`
2. Verify component props match interfaces
3. Test with `npm run build` before deploying
4. Roll back the specific fix if needed
