# Sanity CMS Setup Checklist

Step-by-step checklist to get Sanity running. Follow this exactly.

---

## Phase 1: Create Sanity Project (10 min)

- [ ] Go to https://www.sanity.io
- [ ] Click **Get started free**
- [ ] Sign up with email
- [ ] Verify email
- [ ] Create new project:
  - [ ] Name: "Invest with Saad"
  - [ ] Choose "Blank project" or "Start from scratch"
- [ ] Note your **Project ID** (from dashboard settings)
  - Copy this: `_________________________`

---

## Phase 2: Generate API Token (5 min)

- [ ] Go to your Sanity project
- [ ] Click **Settings** (bottom left of Sanity)
- [ ] Click **API tokens**
- [ ] Click **Add API token**
- [ ] Name it: "Next.js Integration"
- [ ] Select **Editor** role
- [ ] Click **Create**
- [ ] Copy the token (starts with `san`)
  - Copy this: `_________________________`

---

## Phase 3: Run Setup Script (5 min)

In your terminal:

```bash
# Navigate to project directory
cd /path/to/saadtai-website

# Set environment variables
export SANITY_PROJECT_ID="PASTE_YOUR_PROJECT_ID_HERE"
export SANITY_DATASET="production"
export SANITY_TOKEN="PASTE_YOUR_TOKEN_HERE"

# Run setup
npm run setup:sanity
```

- [ ] Script ran without errors
- [ ] `.env.local` file created (check with `cat .env.local`)
- [ ] `sanity.config.ts` created
- [ ] `package.json` scripts updated

---

## Phase 4: Start Sanity Studio (5 min)

```bash
# Start Sanity Studio
npm run sanity:start
```

- [ ] Script starts without errors
- [ ] Terminal shows "Sanity Studio is running at http://localhost:3333"
- [ ] Open browser to http://localhost:3333
- [ ] Sanity Studio loads (you'll see document types on left)

---

## Phase 5: Test Content Creation (10 min)

In Sanity Studio:

### Create Test Blog Post
- [ ] Click **Blog Post** in left sidebar
- [ ] Click **Create new**
- [ ] Fill in:
  - [ ] Title: "Test Blog Post"
  - [ ] Subtitle: "Testing the setup"
  - [ ] Excerpt: "This is a test"
  - [ ] Author: "Saad Tai"
  - [ ] Published Date: Today
  - [ ] Category: "Investment"
  - [ ] Content: Click **Add item**, type "This is test content"
- [ ] Click **Publish** (top right)
- [ ] Wait for "Document published" message

### Create Test FAQ
- [ ] Click **FAQ** in sidebar
- [ ] Click **Create new**
- [ ] Fill in:
  - [ ] Question: "Is this a test?"
  - [ ] Answer: "Yes, this is a test FAQ"
  - [ ] Category: "Buying Multifamily"
  - [ ] Order: "1"
- [ ] Click **Publish**

### Create Test Listing
- [ ] Click **Property Listing** in sidebar
- [ ] Click **Create new**
- [ ] Fill in:
  - [ ] Address: "123 Test Street"
  - [ ] City: "Albany"
  - [ ] State: "NY"
  - [ ] ZIP: "12207"
  - [ ] Property Type: "Single Family"
  - [ ] Status: "Available"
  - [ ] Description: "Test property"
- [ ] Click **Publish**

---

## Phase 6: Verify in Sanity Dashboard

- [ ] Go to https://www.sanity.io/manage
- [ ] Click your project
- [ ] Click **Content** tab
- [ ] You should see:
  - [ ] 1 Blog Post document
  - [ ] 1 FAQ document
  - [ ] 1 Listing document

---

## Phase 7: Install Next.js Dependencies

```bash
npm install sanity @sanity/vision next-sanity
```

- [ ] Dependencies install successfully
- [ ] No error messages

---

## Phase 8: Create Next.js Sanity Client (15 min)

Create file `src/lib/sanity.client.ts`:

```typescript
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-06-07',
  useCdn: false,
})
```

- [ ] File created at `src/lib/sanity.client.ts`
- [ ] No syntax errors

---

## Phase 9: Test Next.js Connection

In a new terminal (keep `npm run sanity:start` running):

```bash
# Run Next.js dev server
npm run dev
```

- [ ] Next.js starts successfully on http://localhost:3000
- [ ] No Sanity API errors in terminal

---

## Phase 10: Verify Environment Variables

```bash
# Check .env.local was created
cat .env.local
```

- [ ] Output shows:
  ```
  NEXT_PUBLIC_SANITY_PROJECT_ID=your_id
  NEXT_PUBLIC_SANITY_DATASET=production
  SANITY_API_TOKEN=san...
  ```

---

## Phase 11: Migration (Optional - if migrating existing data)

```bash
# If you have existing data to migrate
npm run migrate:sanity
```

- [ ] Migration runs successfully
- [ ] Check Sanity Studio for migrated documents
- [ ] Verify document counts match original data

---

## Phase 12: Invite Team Member (Optional)

- [ ] Go to https://www.sanity.io/manage
- [ ] Click your project
- [ ] Click **Settings** → **Members**
- [ ] Click **Add member**
- [ ] Enter team member's email
- [ ] Select **Editor** role
- [ ] Send invite
- [ ] Team member receives invite email
- [ ] Team member accepts and signs up

---

## Final Checklist

- [ ] Sanity project created
- [ ] API token generated
- [ ] Setup script ran successfully
- [ ] Sanity Studio starts at http://localhost:3333
- [ ] Can create blog posts in Studio
- [ ] Can create FAQs in Studio
- [ ] Can create listings in Studio
- [ ] Next.js dependencies installed
- [ ] .env.local file created with correct values
- [ ] Next.js dev server runs without Sanity errors
- [ ] Team member invited (if applicable)

---

## Troubleshooting

If something doesn't work:

1. **"Cannot find module 'sanity'"**
   ```bash
   npm install sanity @sanity/vision next-sanity
   ```

2. **"Invalid project ID"**
   - Check `.env.local` has correct PROJECT_ID
   - Verify token starts with `san`

3. **"Dataset not found"**
   ```bash
   npm run setup:sanity  # Run setup again
   ```

4. **Sanity Studio won't start**
   ```bash
   npm cache clean --force
   rm -rf node_modules
   npm install
   npm run sanity:start
   ```

5. **Still stuck?** Check `SANITY_SETUP.md` troubleshooting section

---

## Next Steps

- [ ] Review `SANITY_QUICK_START.md` with team member
- [ ] Have team member log into Sanity Studio
- [ ] Create 2-3 real blog posts
- [ ] Migrate remaining data
- [ ] Test A/B testing workflows
- [ ] Deploy to production when ready

---

**Done!** 🎉 You now have Sanity CMS running.
