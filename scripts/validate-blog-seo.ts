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
  // Both posts and how-to guides get the " | Saad Tai" suffix
  const addsSuffix = dirName === 'posts' || dirName === 'how-to'

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

  // Check specific pages that have generateMetadata with descriptions
  const pagesToCheck = [
    { path: 'src/app/page.tsx', label: 'Home' },
    { path: 'src/app/buying/page.tsx', label: 'Buying' },
    { path: 'src/app/selling/page.tsx', label: 'Selling' },
  ]

  for (const { path: filePath, label } of pagesToCheck) {
    const fullPath = path.join(process.cwd(), filePath)
    if (!fs.existsSync(fullPath)) continue

    const content = fs.readFileSync(fullPath, 'utf-8')

    // Extract description from createPageMetadata call specifically
    const createPageMetadataMatch = content.match(
      /createPageMetadata\(\{[\s\S]*?description:\s*(?:page\?\.description\s*\|\|\s*)?['"`]([^'"`]+)['"`]/
    )
    if (!createPageMetadataMatch) continue

    const description = createPageMetadataMatch[1]
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

  // Validate how-to guides
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
