# Professional Services Website Template

A modern, production-ready Next.js 16 template for building professional service websites. Built with TypeScript, Tailwind CSS, and AI chatbot capabilities.

**Start here:** See [TEMPLATE-SETUP.md](TEMPLATE-SETUP.md) for complete customization instructions.

## Features

✨ **Modern Architecture**
- Next.js 16 with App Router
- TypeScript for type safety
- Tailwind CSS v4 with custom theming
- Responsive design for all devices

🤖 **AI Integration**
- Claude AI chatbot widget (powered by Anthropic)
- Customizable system prompts
- Real-time conversation streaming

📱 **Content-First Design**
- Master data file for easy customization
- Dynamic product/solution pages
- Blog support with markdown
- FAQ management system

🔍 **SEO & Performance**
- Schema.org structured data
- Dynamic sitemap generation
- Image optimization
- Performance monitoring
- Analytics ready

📧 **Built-in Features**
- Contact forms with API integration
- Newsletter signup
- Social sharing buttons
- Case study/testimonial sections

## Quick Start

1. **Duplicate this folder** for your new project
2. **Read [TEMPLATE-SETUP.md](TEMPLATE-SETUP.md)** - Complete customization guide
3. **Update `src/data/company-info.ts`** - Your master data source
4. **Customize colors** in `src/lib/colors.ts`
5. **Update SEO** in `src/lib/seo.ts`
6. **Replace images** in `public/` folder
7. **Run `npm install && npm run dev`**

## Tech Stack

- **Framework**: Next.js 16 with TypeScript
- **Styling**: Tailwind CSS v4 with customizable color themes
- **UI Components**: React with Framer Motion animations
- **AI Integration**: Anthropic Claude API for chatbot
- **Icons**: Lucide React
- **Component Library**: Class Variance Authority (CVA) for component styling

## Project Structure

```
your-site/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── api/                      # API routes
│   │   │   ├── chat/route.ts         # AI chatbot endpoint
│   │   │   ├── deal-inquiry/route.ts # Form submission
│   │   │   └── webhook/route.ts      # Webhook receiver
│   │   ├── layout.tsx                # Root layout with Header/Footer
│   │   ├── page.tsx                  # Homepage
│   │   ├── solutions/                # Products/services pages
│   │   │   ├── page.tsx              # Solutions listing
│   │   │   └── [solution-id]/page.tsx # Dynamic detail pages
│   │   ├── about-us/
│   │   ├── contact-us/
│   │   ├── faq/
│   │   ├── blog/
│   │   ├── partners/
│   │   ├── privacy-policy/
│   │   ├── terms-of-service/
│   │   ├── sitemap.ts
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── Header.tsx                # Navigation
│   │   ├── Footer.tsx                # Footer
│   │   ├── Chatbot.tsx               # AI assistant widget
│   │   ├── HeroCarousel.tsx          # Hero section
│   │   ├── FAQSection.tsx            # FAQ display
│   │   └── ui/                       # Design system components
│   ├── data/
│   │   ├── company-info.ts           # Master company data (customize first!)
│   │   ├── solutions.tsx             # Your products/services
│   │   ├── fundingData.ts            # Case studies/use cases
│   │   ├── faq-data.ts               # FAQ content
│   │   ├── blog-posts.ts             # Blog content
│   │   └── partners.ts               # Partner information
│   ├── lib/
│   │   ├── colors.ts                 # Brand color system
│   │   ├── seo.ts                    # SEO metadata
│   │   ├── header-nav.ts             # Navigation structure
│   │   ├── ai.ts                     # Chatbot configuration
│   │   ├── schema-generators.ts      # Schema.org markup
│   │   └── tracking.ts               # Analytics setup
│   ├── types/                        # TypeScript definitions
│   └── hooks/                        # Custom React hooks
├── public/                           # Static assets
│   ├── home/                         # Homepage images
│   ├── solutions/                    # Product images
│   └── logos/                        # Logos and branding
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── TEMPLATE-SETUP.md                 # 👈 START HERE for customization
└── README.md                         # This file
```

## Customization Guide

**See [TEMPLATE-SETUP.md](TEMPLATE-SETUP.md) for complete instructions on:**

- ✅ Updating company information
- ✅ Customizing colors and branding
- ✅ Adding your products/solutions
- ✅ Configuring SEO and meta tags
- ✅ Replacing images
- ✅ Setting up forms and APIs
- ✅ Deploying to production

## Key Files to Customize

1. **`src/data/company-info.ts`** - Your master data source
2. **`src/lib/seo.ts`** - SEO metadata for all pages
3. **`src/lib/colors.ts`** - Brand color theme
4. **`src/data/solutions.tsx`** - Your products/services
5. **`src/data/faq-data.ts`** - FAQ content
6. **`public/`** - Replace images and logos

## Features Explained

### Master Data System
All company information flows from `src/data/company-info.ts`. Update it once and changes propagate throughout the website automatically.

### Dynamic Pages
- Solutions/products at `/solutions/[id]` auto-generate from data
- Blog posts at `/blog/[id]` 
- Custom pages can be added easily

### SEO Ready
- Automatic sitemap generation
- Schema.org structured data for search engines
- Customizable meta tags per page
- Mobile-friendly design

### AI Chatbot
- Claude-powered assistant
- Customizable system prompt
- Learns from your company data
- Can be disabled if not needed


## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Customize for Your Business
Follow [TEMPLATE-SETUP.md](TEMPLATE-SETUP.md) step by step:
- Update company information
- Customize colors
- Add your content
- Replace images

### 3. Environment Variables
Create `.env.local`:
```env
ANTHROPIC_API_KEY=your_key_here
NEXT_PUBLIC_API_BASE_URL=https://your-api.com
```

### 4. Development
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

### 5. Production Build
```bash
npm run build
npm run start
```

## Deployment

### Vercel (Easiest)
```bash
vercel
```

### Docker
```bash
docker build -t your-site .
docker run -p 3000:3000 your-site
```

### Manual Deploy
```bash
npm run build
npm run start
```

## Customizable Colors

The template includes a pre-configured color system in `src/lib/colors.ts`.

**Edit colors for:**
- Primary brand color
- Secondary/accent colors
- Text colors
- Background colors
- Component-specific colors

All colors are centrally managed, so one change propagates throughout the site.

## API Endpoints

### POST `/api/chat`
Chatbot endpoint - send messages and get Claude responses.

**Request:**
```json
{
  "message": "Your question",
  "conversationHistory": []
}
```

**Response:**
```json
{
  "reply": "AI response"
}
```

### POST `/api/deal-inquiry`
Form submission endpoint for contact/inquiry forms.

### POST `/api/webhook`
Webhook receiver for external integrations.

## Monitoring & Analytics

The template includes:
- Performance monitoring component
- Vercel Speed Insights integration
- Google Analytics ready (add ID to environment)
- Console error tracking

## Troubleshooting

### Common Issues

**Images not displaying?**
- Check image paths are correct in data files
- Ensure files exist in `/public` folder
- Verify Next.js has built (`npm run build`)

**Colors not applying?**
- Verify color is imported from `src/lib/colors.ts`
- Check Tailwind classes are spelled correctly
- Run `npm run dev` to rebuild CSS

**Forms not submitting?**
- Check API endpoint is accessible
- Verify `.env.local` has API URL
- Test with curl: `curl -X POST http://localhost:3000/api/deal-inquiry`

**Chatbot not responding?**
- Verify `ANTHROPIC_API_KEY` is set
- Check API key is valid
- Review system prompt in `src/lib/ai.ts`

## Performance Optimization

- Dynamic imports for heavy components
- Image optimization via Next.js Image
- CSS minification with Tailwind v4
- Bundle analysis: `npm run analyze`

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Anthropic API Docs](https://docs.anthropic.com)
- [Vercel Deployment](https://vercel.com/docs)

## Support

For template questions, refer to [TEMPLATE-SETUP.md](TEMPLATE-SETUP.md).

For framework-specific issues:
- Next.js: https://github.com/vercel/next.js/discussions
- Tailwind: https://tailwindcss.com/docs
- Anthropic: https://docs.anthropic.com

---

**Template Version:** 1.0.0  
**Last Updated:** December 2025  
**Recommended Node Version:** 18+
  ]
}
```

**Response:**
```json
{
  "reply": "We offer multiple funding solutions including asset-based lending and invoice financing."
}
```

**Details:**
- System prompt dynamically built from `src/data/company-info.ts`
- Maintains conversation context for multi-turn conversations
- Max response: 1024 tokens
- Model: `claude-haiku-4-5-20251001`
- Responses kept brief (1-2 sentences, no markdown)

## Customization

### Adding a New Funding Solution
1. Add entry to `src/data/solutions.ts` with title, description, features, rates, terms
2. Dynamic route `src/app/solutions/[solution-id]/page.tsx` automatically generates detail pages
3. Update `src/data/company-info.ts` if adding new process steps or philosophy
4. Solution automatically available in chatbot context via `buildAIContext()`

### Updating Company Information
1. Edit `src/data/company-info.ts` (single source of truth)
2. Changes propagate to:
   - Chatbot AI system prompt (via `src/lib/ai.ts`)
   - Schema markup (via `src/lib/schema-generators.ts`)
   - All pages importing this data
   - No cache invalidation needed—built at request time

### Adding New Pages
1. Create folder in `src/app/[page-name]/`
2. Create `page.tsx` with content
3. Use design system components from `src/components/ui/`
4. Add navigation links in `src/components/Header.tsx` if needed

### Modifying the Chatbot
- **System prompt**: Edit `src/lib/ai.ts` `buildAIContext()` function
- **UI/styling**: Edit `src/components/Chatbot.tsx`
- **API logic**: Edit `src/app/api/chat/route.ts`
- **Behavior**: Modify conversation flow in `src/components/Chatbot.tsx`

### Adding SEO Schema Markup
1. Import schema generator from `src/lib/schema-generators.ts`
2. Create schema object with page data
3. Embed in page: `<script type="application/ld+json">{JSON.stringify(schema)}</script>`
4. Validate with [Google Rich Results Test](https://search.google.com/test/rich-results)

### Updating Colors
Edit `tailwind.config.ts` to modify the olive/gold theme colors.

### Modifying Components
Design system components are in `src/components/ui/`. Use CVA (class-variance-authority) patterns for variants:
```tsx
import { button } from "@/components/ui/button"
<button className={button({ variant: "gold" })}>Click me</button>
```

## Performance

- Built with Next.js Turbopack for faster builds
- Static page generation for better performance
- API routes optimized for serverless deployment
- Responsive design with mobile-first approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## AIEO/GEO Optimization (LLM Visibility)

This project is optimized for AI Engine Optimization (AIEO) to maximize visibility in LLM responses (ChatGPT, Claude, Perplexity, Google AI Overviews).

### Current Status: Phase 1 Complete
- ✅ Master data file: `src/data/company-info.ts` (46 items need verification)
- ✅ Schema generators: `src/lib/schema-generators.ts` (8 reusable functions)
- ✅ Organization schema live on every page

### Week 1: Verification (NOW)
**See:** `WEEK-1-VERIFICATION-CHECKLIST.md`

Fill in 46 verification items in `src/data/company-info.ts`:
- Company basics (address, phone, team size)
- Business metrics (capital facilitated, clients served)
- Founder information (background, education, credentials)
- Product rates & terms (verify with lending partners)
- Qualification criteria (credit score, revenue minimums)

**Timeline:** 3-4 hours to complete

### Weeks 2-4: Implementation
See `IMPLEMENTATION-GUIDE.md` for detailed roadmap:
- **Week 2:** FAQ page with 224 questions + FAQPage schema
- **Week 3:** Solutions page with Service schema (10 funding types)
- **Week 4:** Case studies with Review schema + Process with How-To schema

### How It Works
1. Data stored in `src/data/company-info.ts`
2. Schema generators transform to JSON-LD in `src/lib/schema-generators.ts`
3. React components render both visible content and invisible schema scripts
4. Next.js SSR ensures complete HTML sent to browsers and AI crawlers
5. AI bots parse schema, understand your offerings, cite your site in responses

**See:** `HOW-AI-SEES-YOUR-SITE.md` for complete technical details

### Key Files
- **Data:** `src/data/company-info.ts` - Master information hub
- **Schema:** `src/lib/schema-generators.ts` - Schema markup functions
- **Guides:**
  - `WEEK-1-VERIFICATION-CHECKLIST.md` - This week's tasks
  - `IMPLEMENTATION-GUIDE.md` - 4-week roadmap
  - `MARKET-RESEARCH-MOST-SEARCHED-QUESTIONS.md` - 224 FAQ questions
  - `HOW-AI-SEES-YOUR-SITE.md` - Architecture explanation

### Getting Started
1. Read: `WEEK-1-VERIFICATION-CHECKLIST.md`
2. Open: `src/data/company-info.ts`
3. Fill in: All 46 `[VERIFY:]` items
4. Validate: Schema with Google Rich Results Test
5. Commit: Changes to git

---

## License

© 2024 Serve Funding, LLC. All Rights Reserved.
