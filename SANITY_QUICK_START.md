# Sanity CMS - Quick Start Guide

Fast reference for using Sanity Studio to manage content.

---

## Login to Sanity Studio

1. Go to: `http://localhost:3333` (or ask Tim for production URL)
2. Sign in with your Sanity account
3. You'll see the Sanity Studio dashboard

---

## Creating Content

### Create a Blog Post

1. Click **Blog Post** in left sidebar
2. Click **Create new**
3. Fill in fields:
   - **Title:** Post title
   - **Slug:** Auto-fills from title (can edit)
   - **Subtitle:** Short tagline
   - **Excerpt:** Summary for listing page
   - **Featured Image:** Upload cover image
   - **Author:** Saad Tai (default)
   - **Published Date:** Today's date
   - **Category:** Choose one (Investment, Market Analysis, etc.)
   - **Content:** Add content blocks (paragraphs, headings, quotes)
   - **Meta Description:** SEO description

4. Click **Publish** when done

### Add Content Blocks

In the **Content** section:

1. Click **Add item**
2. Choose block type:
   - **Paragraph:** Regular text
   - **Heading 2:** Large section heading
   - **Heading 3:** Subsection heading
   - **Blockquote:** Highlighted quote
3. Type your content
4. Repeat for each block

---

## Editing Existing Content

1. Find the document in Sanity Studio
2. Click to open
3. Make changes
4. Click **Publish** to save changes live

**Note:** Changes appear on website immediately (no rebuild needed).

---

## Managing Listings

### Add a Property Listing

1. Click **Property Listing** in sidebar
2. Click **Create new**
3. Fill in:
   - **Address:** Street address
   - **City:** City name
   - **State:** NY
   - **ZIP Code:** Postal code
   - **Property Type:** Choose (Single Family, Duplex, 2-Unit, etc.)
   - **Bedrooms/Bathrooms:** Numbers
   - **Square Feet:** Size
   - **Price:** Sale price
   - **Status:** Available, Sold, Pending, Under Contract
   - **Features:** List key features (Updated kitchen, Hardwood floors, etc.)
   - **Description:** Property details
   - **Year Built:** Construction year
   - **Days On Market:** How long listed

4. Click **Publish**

### Change Listing Status

1. Open listing
2. Change **Status** field
3. Click **Publish**

---

## Managing FAQs

### Add a New FAQ

1. Click **FAQ** in sidebar
2. Click **Create new**
3. Fill in:
   - **Question:** The Q&A question
   - **Answer:** Full answer text
   - **Category:** Choose one:
     - Buying Multifamily
     - Selling & Exit Strategy
     - Investor Strategy
     - Investor Network
     - Analysis & Tools
   - **Display Order:** Number (lower = appears first)

4. Click **Publish**

### Edit or Remove FAQ

1. Open FAQ
2. Edit text
3. Click **Publish**

To delete: Click **Delete** (bottom right)

---

## Managing Neighborhoods

Neighborhoods include market data and buyer personas.

### Update Market Data

1. Click **Neighborhood** in sidebar
2. Click the neighborhood name (Albany, Schenectady, or Niskayuna)
3. Update **Market Data** section:
   - Median home price
   - Tax rates
   - School ratings
   - Walk score
   - Appreciation rates
   - Rent prices

4. Click **Publish**

---

## A/B Testing Content

Use **Page Section** for testing different copy variants.

### Create a Test Variant

1. Click **Page Section** in sidebar
2. Click **Create new**
3. Fill in:
   - **Section Identifier:** e.g., "homepage-hero"
   - **Heading:** Main heading to test
   - **Description:** Body copy
   - **CTA Text:** Button text
   - **CTA Link:** Where button goes
   - **Variant:** Choose A, B, C, or D
   - **Active:** Toggle on/off

4. Click **Publish**

### Switch Between Variants

1. Open the page section
2. Click **Variant** dropdown
3. Choose different variant
4. Disable inactive variants by toggling **Active**

---

## Uploading Images

1. Click the **Image** field
2. Click **Upload**
3. Choose image from your computer
4. Image uploads automatically
5. You can crop/adjust with **Edit** button

**Recommended sizes:**
- Blog featured images: 1200x600px
- Listing images: 800x600px or larger
- Testimonial photos: 400x400px (square)

---

## Tips & Tricks

### Keyboard Shortcuts

- **Cmd/Ctrl + S:** Publish (if available)
- **Esc:** Close dialogs
- **Tab:** Navigate fields

### Search Documents

1. Click **Search** (magnifying glass)
2. Type keywords
3. Find document quickly

### Preview Before Publishing

1. Click **Preview** (eye icon)
2. See how content will look
3. Click **Preview** again to close

### Unpublish a Document

1. Open document
2. Click **Unpublish** (red button)
3. Document becomes draft (won't show on website)

### Restore Deleted Document

1. Click **History** (clock icon)
2. See all versions
3. Click previous version to restore

---

## Common Tasks

### I want to edit the homepage copy

→ Go to **Page Section** and find "homepage-*" sections

### I want to add a testimonial

→ Click **Testimonial**, create new, check "Display on Homepage"

### I want to change company info

→ Click **Site Settings**, edit founder name, contact info, core values

### I want to mark a property as sold

→ Open **Listing**, change Status to "Sold"

### I want to add 5 new FAQs

→ Click **FAQ**, create new (5 times), assign category and order

---

## Need Help?

1. **Something's broken?** Click **Support** in Sanity Studio
2. **Technical question?** Ask Tim (he set up the system)
3. **Content question?** Check the full guide: `SANITY_SETUP.md`

---

## What NOT to Do

❌ Don't delete documents unless you're sure
❌ Don't publish incomplete content
❌ Don't upload super large images (Sanity will optimize)
❌ Don't edit someone else's work without asking first

---

Enjoy managing content! It's way easier than editing code.
