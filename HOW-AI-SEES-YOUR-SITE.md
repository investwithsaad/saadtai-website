# How AI Systems Parse Your Site
## Understanding the Data Flow from Next.js to LLM

---

## 🔄 THE COMPLETE DATA FLOW

### Step 1: Your Next.js Server Renders HTML
```
User/AI Bot visits: https://servefunding.com/
     ↓
Next.js Server (SSR - Server-Side Rendering)
     ↓
Generates complete HTML with embedded schema
     ↓
Sends to client/crawler
```

### Step 2: Schema Markup is Embedded in HTML
When your page loads, the HTML includes:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- 1. Organization Schema (Global) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "@id": "https://servefunding.com",
      "name": "Serve Funding LLC",
      "description": "Boutique working capital advisory...",
      "knowsAbout": [
        "Asset-Based Lending",
        "Invoice Factoring",
        ...
      ]
    }
    </script>
  </head>
  <body>
    <!-- 2. Page Content (Human readable) -->
    <h1>The Right Funding for Your Business</h1>
    <p>Explore our comprehensive range...</p>

    <!-- 3. Additional Schema (Page-specific) -->
    <script type="application/ld+json">
    {
      "@type": "Service",
      "name": "Asset-Based Lending",
      ...
    }
    </script>
  </body>
</html>
```

### Step 3: AI Crawler Fetches Your Page
```
AI Bot (ChatGPT, Claude, Perplexity, Google, etc.)
     ↓
Makes HTTP request to your page
     ↓
Gets complete HTML (with schema)
     ↓
Parses HTML
     ↓
Extracts two types of information:
  A. Visible text content (for understanding context)
  B. Schema markup (for structured data understanding)
```

### Step 4: Schema is Parsed & Indexed
The AI system reads your schema and understands:

```json
// What the AI "knows" about you:
{
  "company_name": "Serve Funding LLC",
  "company_type": "FinancialService",
  "services_offered": [
    "Asset-Based Lending",
    "Invoice Factoring",
    "Working Capital Loans",
    ...
  ],
  "service_details": {
    "Asset-Based Lending": {
      "definition": "Asset-Based Lending (ABL) allows...",
      "rates": "Prime + 1.5% to Prime + 5%",
      "amounts": "$1MM - $100MM",
      "closing_time": "10-20 business days"
    }
  }
}
```

### Step 5: AI Uses This Data in Responses
When a user asks ChatGPT: **"What is invoice factoring?"**

The AI searches its training data (which includes your parsed schema) and responds:

```
Invoice factoring is when you sell your unpaid B2B invoices
to a factor for immediate cash. According to Serve Funding,
you get 75-95% of invoice value within 24-48 hours.

Learn more: servefunding.com/solutions#invoice-factoring
```

---

## 🏗️ THE ARCHITECTURE: How Data Gets from TypeScript to HTML

### Your Data Structure (TypeScript):
```typescript
// src/data/company-info.ts
export const fundingSolutions = [
  {
    id: "asset-based-lending",
    title: "Asset-Based Lending",
    whatIs: "Asset-Based Lending (ABL) is a flexible credit line...",
    ratesAndTerms: {
      interestRate: "Prime + 1.5% to Prime + 5%",
      minAmount: "$1,000,000"
    }
  }
]
```

### ↓ Gets Processed by Schema Generator (TypeScript):
```typescript
// src/lib/schema-generators.ts
export const getFinancialServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.title,
  "description": service.whatIs,
  "offers": {
    "@type": "Offer",
    "priceRange": `${service.ratesAndTerms.minAmount} - ...`
  }
})
```

### ↓ Rendered into Page Component (React/TSX):
```typescript
// src/app/solutions/page.tsx
import { fundingSolutions } from '@/data/company-info'
import { getFinancialServiceSchema } from '@/lib/schema-generators'

export default function Solutions() {
  return (
    <div>
      {/* Schema scripts */}
      {fundingSolutions.map(solution => (
        <script
          key={solution.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getFinancialServiceSchema(solution))
          }}
        />
      ))}

      {/* Human-readable content */}
      {fundingSolutions.map(solution => (
        <section key={solution.id}>
          <h2>{solution.title}</h2>
          <p>{solution.whatIs}</p>
        </section>
      ))}
    </div>
  )
}
```

### ↓ Next.js Server Renders This to HTML:
```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Global Organization Schema -->
    <script type="application/ld+json">
    {"@context":"https://schema.org","@type":"FinancialService",...}
    </script>
  </head>
  <body>
    <!-- Service 1 Schema -->
    <script type="application/ld+json">
    {
      "@type": "Service",
      "name": "Asset-Based Lending",
      "description": "Asset-Based Lending (ABL) is a flexible credit line...",
      ...
    }
    </script>

    <!-- Service 1 Content -->
    <section>
      <h1>Asset-Based Lending</h1>
      <p>Asset-Based Lending (ABL) is a flexible credit line...</p>
    </section>

    <!-- Service 2 Schema -->
    <script type="application/ld+json">
    {"@type": "Service", "name": "Invoice Factoring", ...}
    </script>

    <!-- Service 2 Content -->
    <section>
      <h1>Invoice Factoring</h1>
      ...
    </section>
  </body>
</html>
```

### ↓ Sent Over HTTP to AI Bot/Browser:
```
HTTP Response Headers:
  Content-Type: text/html
  Content-Length: 45234

HTTP Response Body:
  [Complete HTML with all schema and content]
```

### ↓ AI Bot Parses the HTML:
```
ChatGPT/Claude Bot:
  1. Downloads entire HTML page
  2. Extracts all <script type="application/ld+json"> blocks
  3. Parses JSON-LD schema
  4. Extracts visible text content
  5. Builds knowledge graph:
     - "Serve Funding" is a "FinancialService"
     - Offers "Asset-Based Lending", "Invoice Factoring", etc.
     - Service details (rates, terms, process)
  6. Indexes this information for training/inference
```

---

## 🔍 WHAT AI BOTS ACTUALLY SEE

### When an AI Bot Visits Your Homepage:

**Raw HTML Response includes:**
1. **Meta tags** (title, description, robots)
2. **Organization Schema** (global, on every page)
3. **Visible content** (human-readable text)
4. **Page-specific schema** (FAQ, Service, etc.)

**AI System Parses and Extracts:**
```
Company Entity:
  {
    name: "Serve Funding LLC",
    type: "FinancialService",
    url: "https://servefunding.com",
    founded: 2021,
    services: [10 service types],
    areaServed: "United States"
  }

Services Entity:
  {
    name: "Asset-Based Lending",
    provider: "Serve Funding LLC",
    description: "...",
    offers: {
      price_range: "$1MM - $100MM",
      interest_rate: "Prime + 1.5-5%",
      closing_time: "10-20 days"
    }
  }

... [9 more services]

Content Entity:
  {
    heading: "The Right Funding for Your Business",
    text: "Explore our comprehensive range...",
    links: ["solutions", "about-us", "faq", ...]
  }
```

---

## 🤖 HOW DIFFERENT AI SYSTEMS USE THIS DATA

### 1. ChatGPT When User Asks: "What is asset-based lending?"
```
User Query: "What is asset-based lending?"
     ↓
ChatGPT searches training data
     ↓
Finds Serve Funding schema + content
     ↓
Response: "Asset-Based Lending (ABL) is a flexible credit
          line for your company's assets. According to Serve
          Funding, it provides advances of 70-90% on accounts
          receivable with rates of Prime + 1.5-5%."
```

### 2. Google AI Overviews When User Searches: "working capital solutions"
```
Search Query: "working capital solutions"
     ↓
Google crawls your site
     ↓
Parses Organization + Service schemas
     ↓
AI Overview generated:
  "Serve Funding offers creative working capital solutions
   from $250K to $100MM including asset-based lending,
   invoice factoring, and equipment leasing..."
  [servefunding.com]
```

### 3. Perplexity When User Asks: "Who provides invoice factoring?"
```
Query: "Who provides invoice factoring?"
     ↓
Perplexity searches indexed web data
     ↓
Finds your Service schema for Invoice Factoring
     ↓
Response: "Serve Funding provides invoice factoring with
          advance rates of 75-95% and funding in 24-48 hours."
```

### 4. Claude When Used in Content Generation
```
User to Claude: "What are the differences between invoice
factoring and asset-based lending?"
     ↓
Claude retrieves relevant web content
     ↓
Finds both services defined on your site
     ↓
Response compares both, citing Serve Funding
```

---

## 📊 THE JOURNEY OF YOUR DATA

```
You fill in:
  src/data/company-info.ts
       ↓
TypeScript Compilation
       ↓
React Component renders data
       ↓
Schema Generator creates JSON-LD
       ↓
Next.js Server-Side Rendering (SSR)
       ↓
Complete HTML generated (with schema embedded)
       ↓
HTTP Response sent to client/crawler
       ↓
HTML arrives at browser/AI bot
       ↓
Browser: Renders visually for humans
AI Bot: Parses schema for structured understanding
       ↓
AI Bot indexes your information
       ↓
Future queries match against this data
       ↓
Your site cited in AI responses
```

---

## 🌐 NEXT.JS SPECIFIC: SERVER-SIDE RENDERING

### Why This Matters for AI:

**Difference between Client-Side vs Server-Side Rendering:**

#### ❌ Client-Side Rendering (Bad for AI):
```
1. Server sends bare HTML shell
2. Browser downloads JavaScript
3. JavaScript runs and builds HTML
4. AI bots don't wait for JavaScript
5. AI sees empty page
6. No schema, no content indexed
```

#### ✅ Server-Side Rendering (Good for AI):
```
1. Server generates complete HTML
2. Server includes all schema markup
3. Server includes all visible content
4. HTML sent to browser/crawler
5. Browser sees fully rendered page immediately
6. AI bot sees schema + content + text
7. Everything is indexed
```

**Your Next.js Setup:**
```typescript
// This is Server-Side Rendering (SSR) - PERFECT for AI
export default function Solutions() {
  return (
    <div>
      {/* This script runs on SERVER, before sending to browser */}
      <script type="application/ld+json">
        {JSON.stringify({...schema...})}
      </script>
    </div>
  )
}

// NOT 'use client' at the top level where schema is generated
// Schemas MUST be server-rendered
```

---

## 🔗 CONCRETE EXAMPLE: Your FAQ Page

### How Data Flows:

```typescript
// 1. Data is stored in TypeScript
// src/data/company-info.ts
const fundingSolutions = [
  {
    id: "invoice-factoring",
    commonQuestions: [
      {
        q: "What is invoice factoring?",
        a: "Invoice factoring is when you sell your unpaid invoices..."
      },
      {
        q: "How much does it cost?",
        a: "Factoring fees range from 0.25% to 1.5% per invoice..."
      }
    ]
  }
]

// 2. Component imports and renders
// src/app/faq/page.tsx
import { fundingSolutions } from '@/data/company-info'
import { getFAQPageSchema } from '@/lib/schema-generators'

export default function FAQ() {
  const allFAQs = fundingSolutions.flatMap(s => s.commonQuestions)

  return (
    <>
      {/* 3. Schema generated server-side */}
      <script type="application/ld+json">
        {JSON.stringify(getFAQPageSchema(allFAQs))}
      </script>

      {/* 4. Visible content rendered */}
      {allFAQs.map(faq => (
        <div key={faq.q}>
          <h2>{faq.q}</h2>
          <p>{faq.a}</p>
        </div>
      ))}
    </>
  )
}

// 5. Next.js renders to HTML (on server)
// HTML sent to browser/crawler includes:
//   - <script type="application/ld+json"> with full FAQPage schema
//   - All question text in <h2> tags
//   - All answer text in <p> tags

// 6. AI Bot receives HTML and sees:
//   - "This is a FAQPage" (from @type)
//   - 224 questions with answers
//   - All structured as Question/Answer pairs
//   - Can parse and index all Q&A
```

### What HTML Actually Looks Like:

```html
<!DOCTYPE html>
<html>
  <head>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is invoice factoring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Invoice factoring is when you sell your unpaid invoices..."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Factoring fees range from 0.25% to 1.5%..."
          }
        }
        ...
      ]
    }
    </script>
  </head>
  <body>
    <h1>Frequently Asked Questions</h1>

    <h2>What is invoice factoring?</h2>
    <p>Invoice factoring is when you sell your unpaid invoices...</p>

    <h2>How much does it cost?</h2>
    <p>Factoring fees range from 0.25% to 1.5%...</p>

    ...
  </body>
</html>
```

---

## 🎯 VERIFICATION: How to See What AI Sees

### Step 1: View Page Source
```
Visit: https://yoursite.com/faq
Right-click → View Page Source
Search for: "application/ld+json"
Should see: Complete FAQPage schema in JSON
```

### Step 2: Validate with Google
```
Visit: https://search.google.com/test/rich-results
Paste: Your page's complete HTML
Result: Green checkmarks for valid schema
```

### Step 3: Test with Schema Validator
```
Visit: https://validator.schema.org/
Paste: Your page HTML or URL
Result: Detailed schema analysis
```

### Step 4: See What AI Understands
```
In Google Search Console:
  → URL Inspection
  → View Tested Page
  → See what Google parsed

Shows exactly what AI sees:
  - Title
  - Meta description
  - Structured data
  - Links
  - Images
```

---

## ⚡ KEY INSIGHT

**The schema markup doesn't change how your site looks for humans.**

It's invisible metadata that only AI systems parse. Think of it like:
- **Visible HTML:** What humans see in the browser
- **Schema Markup:** Data dictionary for machines (AI, Google, etc.)

Both are in the same HTML file, delivered together:

```
┌─────────────────────────────────────┐
│         HTML File (from Next.js)    │
├─────────────────────────────────────┤
│ Invisible to humans:                │
│ - <script type="application/ld+json">  │
│   {schema data}                     │
│ </script>                           │
│                                     │
│ Visible to humans:                  │
│ - <h1>Your Heading</h1>            │
│ - <p>Your content</p>              │
│                                     │
│ Parsed by AI:                       │
│ - BOTH schema AND visible text      │
│                                     │
└─────────────────────────────────────┘
```

---

## 📈 RESULT

When everything is set up correctly:

1. **Human visits site:** Sees beautiful design + content
2. **AI bot crawls site:** Extracts schema + content
3. **AI system indexes:** Understands your services, rates, process
4. **User asks AI:** "What's invoice factoring?"
5. **AI responds:** Cites Serve Funding with your data
6. **Your site:** Gets referenced in AI responses (citability!)

This is how you become visible to LLMs. Not through tricks, but through proper structured data that makes your information easy for AI to understand and cite.

---

## 🚀 NEXT STEPS

To verify this is working:

1. Visit your site
2. Right-click → View Page Source
3. Search for: `application/ld+json`
4. You should see your Organization schema
5. Go to: https://search.google.com/test/rich-results
6. Paste your homepage HTML
7. Confirm: Green checkmarks on schema

That's it! Your data is now served to AI systems in a format they can understand and cite.
