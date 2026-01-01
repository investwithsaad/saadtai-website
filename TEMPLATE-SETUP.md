# Site Template - Setup & Customization Guide

This is a modern Next.js template for building professional service websites. It includes a beautiful UI, AI chatbot integration, SEO optimization, and a structured data system for easy customization.

## Quick Start

1. **Clone/duplicate this folder** and rename it for your new project
2. **Update `package.json`** with your project name
3. **Customize company data** in `src/data/company-info.ts`
4. **Update SEO settings** in `src/lib/seo.ts`
5. **Replace content files** (solutions, case studies, FAQ, etc.)
6. **Update styling** if needed in `src/lib/colors.ts`
7. **Replace images** in `/public` folder
8. **Update domain/URLs** throughout the codebase

---

## Key Files to Customize

### 1. **Company Information** (`src/data/company-info.ts`)
This is your master data file. Everything here flows throughout the website.

**Update these sections:**
- `companyInfo`: Your company name, tagline, description, contact info
- `founder`: Founder/CEO information
- `coreValues`: Your company's core values (uses acronym pattern like TRUST)
- `philosophy`: Your core business philosophy
- `serveFundingProcess`: Your 3-step business process (adapt to your workflow)
- `competitivePositioning`: Your differentiators and competitive advantages
- `qualificationCriteria`: Who you serve and any requirements
- `messagingTemplates`: Key marketing messages
- `verificationChecklist`: Use this before launching

**Usage:** This data is imported throughout the site in components and pages.

---

### 2. **SEO & Meta Tags** (`src/lib/seo.ts`)
Configure SEO metadata for every major page.

**Update:**
- Replace `[Your Company]` with your actual company name
- Update page titles with your keywords
- Write compelling meta descriptions (under 160 characters)
- Add relevant keywords for each page
- Update canonical URLs to your domain
- Update domain in schema.org markup

**Files that use this:**
- `src/app/layout.tsx` - Uses pageMetaData to set head tags
- Dynamic pages reference specific keys from pageMetaData

---

### 3. **Solutions/Products** (`src/data/solutions.tsx`)
If you offer multiple products/services, this is where you define them.

**Replace Serve Funding products with:**
- Your product/service names
- Descriptions and features
- Pricing/terms information
- FAQ specific to each product
- Images specific to each product

**Usage:** Dynamic detail pages at `/solutions/[solution-id]`

---

### 4. **Case Studies/Fundings** (`src/data/fundingData.ts`)
Define your success stories or use cases.

**Update:**
- Replace funding scenarios with your case studies
- Update metrics and outcomes
- Add customer testimonials if available
- Change industry/scenario focus to match your customers

---

### 5. **FAQ Data** (`src/data/faq-data.ts`)
Define your frequently asked questions.

**Update:**
- Replace Serve Funding FAQs with your own
- Add questions specific to your industry/products
- Keep answers concise and helpful
- Organize by category if needed

---

### 6. **Colors & Branding** (`src/lib/colors.ts`)
Customize the color scheme.

**Update:**
- Primary color (e.g., was olive/teal for Serve Funding)
- Secondary/accent colors
- Text colors
- Background colors
- Component-specific color overrides

**Usage:** Imported in components as `COLORS.primary`, etc.

---

### 7. **Navigation & URLs** (`src/lib/header-nav.ts`)
Configure your main navigation menu.

**Update:**
- Navigation items and URLs
- Dropdown menus for main sections
- Mobile menu structure

---

## File Structure Overview

```
src/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Homepage
│   ├── solutions/                # Solutions/products
│   │   ├── page.tsx              # Solutions listing
│   │   └── [solution-id]/        # Individual solution detail
│   ├── about-us/                 # About page
│   ├── contact-us/               # Contact form
│   ├── faq/                       # FAQ page
│   ├── blog/                      # Blog listing & posts
│   ├── partners/                 # Partner information
│   ├── api/                       # API routes
│   │   ├── chat/route.ts         # AI Chatbot API
│   │   ├── deal-inquiry/route.ts # Form submission API
│   │   └── webhook/route.ts      # Webhook endpoint
│   ├── privacy-policy/
│   ├── terms-of-service/
│   └── layout.tsx                # Root layout
├── components/                   # Reusable React components
│   ├── Header.tsx                # Navigation
│   ├── Footer.tsx                # Footer
│   ├── Chatbot.tsx               # AI Assistant widget
│   ├── HeroCarousel.tsx          # Hero section slider
│   ├── FAQSection.tsx            # FAQ display
│   └── ui/                       # Design system components
├── data/                         # Content & configuration data
│   ├── company-info.ts           # Master company data
│   ├── solutions.tsx             # Products/services
│   ├── fundingData.ts            # Case studies
│   ├── faq-data.ts               # FAQ content
│   ├── partners.ts               # Partner types
│   └── blog-posts.ts             # Blog posts
├── lib/                          # Utility functions & configs
│   ├── colors.ts                 # Brand colors
│   ├── seo.ts                    # SEO metadata
│   ├── header-nav.ts             # Navigation structure
│   ├── schema-generators.ts      # Schema.org markup
│   ├── ai.ts                     # AI/Chatbot configuration
│   └── tracking.ts               # Analytics setup
├── types/                        # TypeScript type definitions
│   ├── solutions.ts              # Solution interface
│   └── faq.ts                    # FAQ interface
├── hooks/                        # Custom React hooks
├── globals.css                   # Global styles
└── sitemap.ts                    # Dynamic sitemap

public/                           # Static assets
├── home/                         # Homepage images
├── solutions/                    # Solution-specific images
├── logos/                        # Company logos
└── ...                          # Other static assets
```

---

## Customization Checklist

### Brand & Identity
- [ ] Update company name in `company-info.ts`
- [ ] Update tagline and company description
- [ ] Change brand colors in `src/lib/colors.ts`
- [ ] Replace logo in `public/` folder
- [ ] Update favicon in `public/`

### Content
- [ ] Update homepage content (`src/app/page.tsx`)
- [ ] Add your products/solutions (`src/data/solutions.tsx`)
- [ ] Add case studies/success stories (`src/data/fundingData.ts`)
- [ ] Update FAQ content (`src/data/faq-data.ts`)
- [ ] Write about-us page content
- [ ] Update footer company info
- [ ] Configure contact form

### SEO & Technical
- [ ] Update all URLs in `src/lib/seo.ts` to your domain
- [ ] Update page titles and meta descriptions
- [ ] Update navigation structure (`src/lib/header-nav.ts`)
- [ ] Configure analytics/tracking
- [ ] Update API endpoints if needed
- [ ] Test sitemap generation

### Images
- [ ] Replace homepage hero images
- [ ] Replace solution-specific images
- [ ] Optimize all images for web
- [ ] Update any company/team photos
- [ ] Add social media preview images

### Optional Features
- [ ] Customize AI chatbot behavior (`src/lib/ai.ts`)
- [ ] Set up form submission handling (`src/app/api/deal-inquiry/`)
- [ ] Configure newsletter integration
- [ ] Set up blog posts if using blog feature
- [ ] Configure partner information if relevant

---

## Key Features to Know

### AI Chatbot
The template includes an AI-powered chatbot widget using Anthropic's Claude API.

**Configuration:**
- `src/lib/ai.ts` - AI system prompt and behavior
- `src/components/Chatbot.tsx` - UI component
- `src/app/api/chat/route.ts` - Backend endpoint

To use:
1. Get API key from Anthropic
2. Add to `.env.local`: `ANTHROPIC_API_KEY=your_key`
3. Customize system prompt in `src/lib/ai.ts`

### Dynamic Pages
Routes like `/solutions/[solution-id]` use Next.js dynamic routing.

**To add a new solution:**
1. Add entry to `fundingSolutions` array in `src/data/solutions.tsx`
2. Assign it a unique `id`
3. Page automatically generates at `/solutions/[id]`

### SEO & Schema.org
The site includes structured data (schema.org markup) for better SEO.

**Generated schemas:**
- Organization schema (company info)
- Service schemas (for each product)
- FAQPage schema (for FAQ page)
- BreadcrumbList schema (for navigation)

### Forms & API Routes
The template includes API routes for:
- `POST /api/chat` - Chatbot conversation
- `POST /api/deal-inquiry` - Form submissions
- `POST /api/webhook` - Webhook receiver

Update these endpoints to match your backend.

---

## Environment Variables

Create a `.env.local` file at the root:

```env
# AI Chatbot (if using)
ANTHROPIC_API_KEY=your_anthropic_api_key

# Form submission (if using)
NEXT_PUBLIC_FORM_API_URL=https://your-api.com/endpoint

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Other APIs
NEXT_PUBLIC_API_BASE_URL=https://your-api.com
```

---

## Performance Optimization

The template includes several optimizations:

- **Dynamic imports** for below-the-fold components
- **Image optimization** using Next.js Image component
- **CSS minification** via Tailwind CSS v4
- **Font optimization** 
- **Bundle analysis** - Run `npm run analyze` to see bundle size

---

## Deployment

The site is configured for Vercel but works on any Next.js hosting:

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Set environment variables
4. Deploy

### Docker
```dockerfile
FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM node:20
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY package.json .
CMD ["npm", "start"]
```

---

## Troubleshooting

### Images not showing
- Check paths are relative to `/public` folder
- Ensure images are in correct format (WebP, JPEG, PNG)
- Verify image paths in data files match actual files

### Styles not applying
- Check color variable is imported from `src/lib/colors.ts`
- Verify Tailwind CSS is built (`npm run dev`)
- Check className syntax is valid Tailwind

### SEO not working
- Verify URLs in `src/lib/seo.ts` are correct
- Check `src/app/layout.tsx` for meta tag generation
- Test with Google Search Console
- Use schema.org validator for structured data

### Forms not submitting
- Check API endpoint is configured
- Verify backend is accessible
- Check browser console for error messages
- Test POST request with curl or Postman

---

## Next Steps

1. **Customize company-info.ts** - This is the highest priority
2. **Update SEO data** - Set up your domain and keywords
3. **Replace images** - Homepage and product images
4. **Update navigation** - Customize main menu structure
5. **Add content** - Update about, solutions, FAQ, etc.
6. **Test forms** - Ensure submissions work
7. **Deploy** - Push to production
8. **Monitor** - Set up analytics and monitoring

---

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com
- **Vercel Deployment**: https://vercel.com/docs
- **Schema.org**: https://schema.org
- **Anthropic API**: https://docs.anthropic.com

---

**Template Version:** 1.0.0  
**Last Updated:** December 2025  
**Framework:** Next.js 16 + TypeScript + Tailwind CSS v4
