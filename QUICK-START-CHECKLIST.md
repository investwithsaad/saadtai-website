# Quick Start Checklist

Copy this checklist and work through it when setting up a new site from this template.

## Phase 1: Initial Setup (30 minutes)

- [ ] Duplicate this folder and rename it for your new project
- [ ] Run `npm install` to install dependencies
- [ ] Update `package.json` with your project name and description
- [ ] Review [TEMPLATE-SETUP.md](TEMPLATE-SETUP.md) to understand the structure

## Phase 2: Core Information (1-2 hours)

### Company Information (`src/data/company-info.ts`)
- [ ] Update company name and tagline
- [ ] Write company description (2-3 sentences)
- [ ] Update contact phone and email
- [ ] Update address
- [ ] Set founding year and story
- [ ] Update team size
- [ ] Set years of experience (for credibility)
- [ ] Define key metrics (customers, revenue, growth rate, etc.)
- [ ] Update founder/CEO information
- [ ] Define 5 core values with descriptions
- [ ] Write your company philosophy/approach
- [ ] Document your 3-step process (Discovery → Execution → Delivery, or similar)
- [ ] List your competitive differentiators
- [ ] Define ideal customer profile / qualification criteria
- [ ] Write key marketing messages

## Phase 3: SEO & Technical (1 hour)

### SEO Configuration (`src/lib/seo.ts`)
- [ ] Replace all `yourdomain.com` with your actual domain
- [ ] Replace `[Your Company]` with your actual company name
- [ ] Write compelling titles for all major pages (include keywords)
- [ ] Write meta descriptions for all pages (under 160 characters)
- [ ] Add relevant keywords for each page
- [ ] Update canonical URLs
- [ ] Test URLs are correct

### Other Config Files
- [ ] Update domain in `next.config.ts` if needed
- [ ] Configure colors in `src/lib/colors.ts`
- [ ] Update navigation in `src/lib/header-nav.ts`
- [ ] Configure AI chatbot in `src/lib/ai.ts` (if using)

## Phase 4: Content Creation (2-4 hours)

### Products/Services (`src/data/solutions.tsx`)
- [ ] List your 3-5 main products or services
- [ ] For each product:
  - [ ] Write title and description
  - [ ] List key features (5-8)
  - [ ] Define pricing/rates if applicable
  - [ ] Write 3-5 FAQ specific to this product
  - [ ] Assign unique ID

### Case Studies / Success Stories (`src/data/fundingData.ts`)
- [ ] Add 3-5 real examples of your work
- [ ] For each:
  - [ ] Write client scenario/challenge
  - [ ] Describe your solution
  - [ ] Highlight results/metrics
  - [ ] Include client testimonial if possible

### FAQ (`src/data/faq-data.ts`)
- [ ] Add 8-12 common questions customers ask
- [ ] Organize by category (Product, Pricing, Support, etc.)
- [ ] Keep answers concise (1-2 paragraphs)
- [ ] Include questions about your process, pricing, support

### Other Pages
- [ ] Write About Us page content
- [ ] Write Contact Us page / intro call description
- [ ] Create Privacy Policy (use template or legal service)
- [ ] Create Terms of Service (use template or legal service)
- [ ] Add partner types if applicable (leave blank if N/A)

## Phase 5: Branding & Images (2-3 hours)

### Colors
- [ ] Choose primary brand color
- [ ] Choose secondary/accent color
- [ ] Update `src/lib/colors.ts` with your colors
- [ ] Test colors throughout site

### Images
- [ ] Create/prepare homepage hero image (1200x600px+)
- [ ] Prepare product/service images
- [ ] Prepare team/founder photos if using
- [ ] Prepare any case study images
- [ ] Create company logo (SVG preferred)
- [ ] Create favicon
- [ ] Prepare social media preview image (1200x630px)
- [ ] Replace all images in `/public` folder
- [ ] Optimize all images (use TinyPNG or similar)

## Phase 6: Forms & Integration (1-2 hours)

### API Endpoints
- [ ] Decide where forms will submit (your backend, email service, etc.)
- [ ] Update form submission endpoint in `.env.local`
- [ ] Update API routes if using custom backend:
  - [ ] `/api/deal-inquiry` for contact form
  - [ ] `/api/chat` for chatbot (if using)
- [ ] Test form submission end-to-end

### AI Chatbot (Optional)
- [ ] If using chatbot: Get Anthropic API key
- [ ] Add `ANTHROPIC_API_KEY` to `.env.local`
- [ ] Update chatbot system prompt in `src/lib/ai.ts`
- [ ] Test chatbot functionality
- [ ] Or remove chatbot if not needed

### Email Setup (if applicable)
- [ ] Set up email service (SendGrid, Mailgun, etc.)
- [ ] Configure contact form to send emails
- [ ] Test email delivery
- [ ] Add team email addresses to contact page

## Phase 7: Testing (1 hour)

### Local Testing
- [ ] Run `npm run dev`
- [ ] Test all pages load correctly
- [ ] Check all links work
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test forms submit successfully
- [ ] Test navigation menu works
- [ ] Check images display correctly
- [ ] Test chatbot (if using)
- [ ] Verify colors look right

### SEO Testing
- [ ] Check page titles are correct in browser tab
- [ ] Verify meta descriptions using SEO extension
- [ ] Test with Google Rich Results Test for schema.org
- [ ] Check sitemap generates correctly: `your-domain/sitemap.xml`

### Performance Testing
- [ ] Run Lighthouse audit in Chrome DevTools
- [ ] Aim for >90 score in all categories
- [ ] Check Core Web Vitals
- [ ] Test on slow 3G connection (DevTools)

## Phase 8: Pre-Launch (30 minutes)

- [ ] Set up analytics (Google Analytics 4)
- [ ] Add analytics ID to environment variables
- [ ] Create README with deployment instructions
- [ ] Set up git repository (if not already done)
- [ ] Create .env.local with all secrets
- [ ] Test production build: `npm run build && npm run start`
- [ ] Fix any build errors
- [ ] Get sign-off from team/stakeholders

## Phase 9: Deployment (1 hour)

### Choose Hosting
- [ ] Decide between Vercel, Docker, or self-hosted
- [ ] Set up domain/DNS
- [ ] Configure SSL certificate (usually automatic)

### Deploy to Vercel (Recommended)
- [ ] Connect GitHub repository to Vercel
- [ ] Add environment variables in Vercel dashboard
- [ ] Deploy
- [ ] Test live site

### Deploy Elsewhere
- [ ] Follow your hosting provider's instructions
- [ ] Ensure environment variables are set
- [ ] Test live site thoroughly

## Phase 10: Post-Launch (Ongoing)

- [ ] Monitor analytics
- [ ] Track form submissions
- [ ] Monitor site performance
- [ ] Set up error tracking/alerting
- [ ] Plan content updates (blog, case studies, etc.)
- [ ] Schedule monthly maintenance reviews
- [ ] Keep dependencies updated

---

## Estimated Timeline

- **Quick Launch**: 4-5 hours (basic customization, no custom features)
- **Standard Launch**: 8-12 hours (full customization, some content)
- **Premium Launch**: 20-30 hours (comprehensive content, custom features, professional images)

## Common Pitfalls to Avoid

❌ **Don't:** Use placeholder company info in production
✅ **Do:** Update EVERYTHING in `company-info.ts`

❌ **Don't:** Leave original Serve Funding content
✅ **Do:** Replace all examples with your content

❌ **Don't:** Use URLs with "servefunding.com"
✅ **Do:** Update domain throughout (especially SEO)

❌ **Don't:** Deploy without testing forms
✅ **Do:** Test all forms and integrations locally first

❌ **Don't:** Use generic images
✅ **Do:** Use real photos of your team, products, or customers

❌ **Don't:** Skip mobile testing
✅ **Do:** Test on actual mobile devices

## Getting Help

1. **Setup issues?** → Read [TEMPLATE-SETUP.md](TEMPLATE-SETUP.md)
2. **Customization examples?** → See [CUSTOMIZATION-EXAMPLES.md](CUSTOMIZATION-EXAMPLES.md)
3. **Code problems?** → Check file comments and type definitions
4. **Framework questions?** → See links in README.md

---

**Print this checklist and check off items as you complete them!**
