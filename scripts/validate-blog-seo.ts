import fs from 'fs'
import path from 'path'

interface ValidationResult {
  file: string
  title: string
  titleLength: number
  excerpt: string
  excerptLength: number
  valid: boolean
  errors: string[]
}

const TITLE_MAX_LENGTH = 70
const EXCERPT_MAX_LENGTH = 160
const BLOG_TITLE_SUFFIX = ' | Saad Tai' // Applied to blog posts in metadata
const BLOG_TITLE_MAX_LENGTH = TITLE_MAX_LENGTH - BLOG_TITLE_SUFFIX.length // 61 chars max for frontmatter

function extractFrontmatter(content: string): Record<string, string> {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
  const frontmatter: Record<string, string> = {}

  if (frontmatterMatch) {
    const yamlContent = frontmatterMatch[1]
    const lines = yamlContent.split('\n')

    for (const line of lines) {
      const [key, ...valueParts] = line.split(':')
      if (key && valueParts.length > 0) {
        const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '')
        frontmatter[key.trim()] = value
      }
    }
  }

  return frontmatter
}

/**
 * Validate all Markdoc content in a directory
 */
function validateDirectory(dirName: string, dirLabel: string): ValidationResult[] {
  const dir = path.join(process.cwd(), dirName)
  // Posts, guides, and how-to guides get the " | Saad Tai" suffix
  const addsSuffix = dirName === 'posts' || dirName === 'guides' || dirName === 'how-to'

  if (!fs.existsSync(dir)) {
    return []
  }

  const mdocFiles = fs.readdirSync(dir).filter(file => file.endsWith('.mdoc'))
  const results: ValidationResult[] = []

  for (const file of mdocFiles) {
    const filePath = path.join(dir, file)
    const content = fs.readFileSync(filePath, 'utf-8')
    const frontmatter = extractFrontmatter(content)

    const title = frontmatter['title'] || ''
    const excerpt = frontmatter['excerpt'] || ''
    const titleLength = title.length
    const excerptLength = excerpt.length
    const errors: string[] = []

    // For content with suffix, check against the final title length (with " | Saad Tai" suffix)
    const maxTitleLength = addsSuffix ? BLOG_TITLE_MAX_LENGTH : TITLE_MAX_LENGTH
    const finalTitleLength = addsSuffix ? titleLength + BLOG_TITLE_SUFFIX.length : titleLength

    if (titleLength > maxTitleLength) {
      errors.push(`Title too long (${finalTitleLength}/${TITLE_MAX_LENGTH} chars in browser): "${title}${addsSuffix ? BLOG_TITLE_SUFFIX : ''}"`)
    }

    if (excerptLength > EXCERPT_MAX_LENGTH) {
      errors.push(`Excerpt too long (${excerptLength}/${EXCERPT_MAX_LENGTH} chars): "${excerpt}"`)
    }

    const result: ValidationResult = {
      file,
      title,
      titleLength,
      excerpt,
      excerptLength,
      valid: errors.length === 0,
      errors
    }

    results.push(result)
  }

  return results
}

/**
 * Validate page metadata descriptions
 */
function validatePageMetadata(): ValidationResult[] {
  const results: ValidationResult[] = []
  const pagesDir = path.join(process.cwd(), 'src/app')

  // Check all pages from sitemap
  const pagesToCheck = [
    // Main navigation pages
    { path: 'src/app/page.tsx', label: 'Home' },
    { path: 'src/app/about/page.tsx', label: 'About' },
    { path: 'src/app/buying/page.tsx', label: 'Buying' },
    { path: 'src/app/selling/page.tsx', label: 'Selling' },
    { path: 'src/app/blog/page.tsx', label: 'Blog' },
    { path: 'src/app/how-to/page.tsx', label: 'How-To Guides' },
    { path: 'src/app/listings/page.tsx', label: 'Listings' },
    { path: 'src/app/vip-investor-list/page.tsx', label: 'VIP Investor List' },
    // Investment guide pages
    { path: 'src/app/investing/page.tsx', label: 'Investing' },
    { path: 'src/app/investing/multifamily-investment-guide/page.tsx', label: 'Multifamily Investment Guide' },
    { path: 'src/app/investing/cap-rate-guide/page.tsx', label: 'Cap Rate Guide' },
    { path: 'src/app/investing/albany-multifamily-investing/page.tsx', label: 'Albany Multifamily Investing' },
    { path: 'src/app/investing/schenectady-multifamily-investing/page.tsx', label: 'Schenectady Multifamily Investing' },
    { path: 'src/app/investing/troy-multifamily-investing/page.tsx', label: 'Troy Multifamily Investing' },
    // Utility pages
    { path: 'src/app/calculator/page.tsx', label: 'Calculator' },
    { path: 'src/app/faq/page.tsx', label: 'FAQ' },
    // Legal pages
    { path: 'src/app/privacy-policy/page.tsx', label: 'Privacy Policy' },
    { path: 'src/app/terms-of-service/page.tsx', label: 'Terms of Service' },
  ]

  for (const { path: filePath, label } of pagesToCheck) {
    const fullPath = path.join(process.cwd(), filePath)
    if (!fs.existsSync(fullPath)) {
      // File doesn't exist - skip it
      continue
    }

    const content = fs.readFileSync(fullPath, 'utf-8')

    // Extract description from createPageMetadata call
    // Handles patterns like:
    // - createPageMetadata({ description: 'text' })
    // - createPageMetadata({ description: page?.description || 'text' })
    // - metadata: { description: 'text' }
    let description: string | null = null

    // Try pattern 1: createPageMetadata with description
    let match = content.match(
      /createPageMetadata\(\{[\s\S]*?description:\s*(?:page\?\.description\s*\|\|\s*)?['"`]([^'"`]+)['"`]/
    )
    if (match) {
      description = match[1]
    } else {
      // Try pattern 2: export const metadata with description in object
      match = content.match(
        /description:\s*['"`]([^'"`]+)['"`]/
      )
      if (match) {
        description = match[1]
      }
    }

    if (!description) {
      // No description found - skip validation
      continue
    }

    const descLength = description.length
    const errors: string[] = []

    if (descLength > EXCERPT_MAX_LENGTH) {
      errors.push(`Meta description too long (${descLength}/${EXCERPT_MAX_LENGTH} chars): "${description}"`)
    }

    results.push({
      file: label,
      title: label,
      titleLength: 0,
      excerpt: description,
      excerptLength: descLength,
      valid: errors.length === 0,
      errors
    })
  }

  return results
}

/**
 * Validate all content (posts + guides + pages)
 */
function validateAllContent(): void {
  const allResults: Array<{ label: string; results: ValidationResult[] }> = []

  // Validate posts
  const postResults = validateDirectory('posts', 'Blog Posts')
  if (postResults.length > 0) {
    allResults.push({ label: 'Blog Posts', results: postResults })
  }

  // Validate investing guides (consolidated into /guides directory)
  const investingGuideResults = validateDirectory('guides', 'Investing Guides')
  if (investingGuideResults.length > 0) {
    allResults.push({ label: 'Investing Guides', results: investingGuideResults })
  }

  // Validate how-to guides (kept for backwards compatibility, may be empty)
  const guideResults = validateDirectory('how-to', 'How-To Guides')
  if (guideResults.length > 0) {
    allResults.push({ label: 'How-To Guides', results: guideResults })
  }

  // Validate page metadata
  const pageResults = validatePageMetadata()
  if (pageResults.length > 0) {
    allResults.push({ label: 'Pages (Meta Descriptions)', results: pageResults })
  }

  // Display results
  console.log('\n📋 SEO Validation Report\n')

  let totalFiles = 0
  let totalValid = 0
  let hasErrors = false

  for (const { label, results } of allResults) {
    const validResults = results.filter(r => r.valid)
    const invalidResults = results.filter(r => !r.valid)
    totalFiles += results.length
    totalValid += validResults.length

    console.log(`${label} (${results.length} files):`)

    if (validResults.length > 0) {
      console.log(`  ✅ Valid (${validResults.length}):`)
      validResults.forEach(r => {
        console.log(`    ✓ ${r.file} (Excerpt: ${r.excerptLength})`)
      })
    }

    if (invalidResults.length > 0) {
      console.log(`  ❌ Invalid (${invalidResults.length}):`)
      invalidResults.forEach(r => {
        console.log(`    ✗ ${r.file}`)
        r.errors.forEach(error => {
          console.log(`      → ${error}`)
        })
      })
      hasErrors = true
    }

    console.log()
  }

  // Summary
  console.log(`📊 Summary: ${totalValid}/${totalFiles} files pass validation\n`)

  if (hasErrors) {
    process.exit(1)
  }

  console.log('✨ All content passes SEO validation!\n')
}

validateAllContent()
