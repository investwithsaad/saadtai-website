/**
 * Sanity Setup Automation Script
 * Programmatically sets up a new Sanity project with schemas and configuration
 *
 * Usage:
 *   npm run setup:sanity
 *
 * Environment Variables Required:
 *   - SANITY_PROJECT_ID: Your Sanity project ID
 *   - SANITY_TOKEN: Your Sanity API token (with write access)
 *   - SANITY_DATASET: Dataset name (default: 'production')
 */

import * as fs from 'fs'
import * as path from 'path'
import * as https from 'https'

interface SetupConfig {
  projectId: string
  dataset: string
  token: string
  datasetTitle?: string
}

interface CliConfig {
  sanity?: {
    projectId: string
    dataset: string
    apiVersion: string
  }
}

// Helper to make HTTPS requests
function makeRequest(
  url: string,
  options: Record<string, any> = {}
): Promise<Record<string, any>> {
  return new Promise((resolve, reject) => {
    const requestUrl = new URL(url)
    const requestOptions = {
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${options.token}`,
        ...options.headers,
      },
    }

    const req = https.request(requestUrl, requestOptions, (res) => {
      let data = ''

      res.on('data', (chunk) => {
        data += chunk
      })

      res.on('end', () => {
        if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
          resolve(data ? JSON.parse(data) : {})
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${data}`))
        }
      })
    })

    req.on('error', reject)

    if (options.body) {
      req.write(JSON.stringify(options.body))
    }

    req.end()
  })
}

// Create or verify dataset exists
async function setupDataset(config: SetupConfig): Promise<void> {
  console.log(`📦 Setting up dataset "${config.dataset}"...`)

  try {
    const url = `https://${config.projectId}.api.sanity.io/v2021-06-07/datasets/${config.dataset}`

    // Try to get existing dataset
    try {
      await makeRequest(url, { token: config.token })
      console.log(`✅ Dataset "${config.dataset}" already exists`)
      return
    } catch {
      // Dataset doesn't exist, create it
    }

    // Create new dataset
    const createUrl = `https://${config.projectId}.api.sanity.io/v2021-06-07/datasets`
    await makeRequest(createUrl, {
      method: 'POST',
      token: config.token,
      body: {
        name: config.dataset,
        title: config.datasetTitle || `${config.dataset} dataset`,
      },
    })

    console.log(`✅ Created dataset "${config.dataset}"`)
  } catch (error) {
    console.error(`❌ Failed to setup dataset:`, error)
    throw error
  }
}

// Create .env.local file with Sanity config
async function createEnvConfig(config: SetupConfig): Promise<void> {
  const envPath = path.join(process.cwd(), '.env.local')
  const envContent = `
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=${config.projectId}
NEXT_PUBLIC_SANITY_DATASET=${config.dataset}
NEXT_PUBLIC_SANITY_API_VERSION=2021-06-07
SANITY_API_TOKEN=${config.token}
`

  fs.writeFileSync(envPath, envContent.trim())
  console.log(`✅ Created .env.local with Sanity configuration`)
}

// Create sanity.config.ts if it doesn't exist
async function createSanityConfig(config: SetupConfig): Promise<void> {
  const sanityConfigPath = path.join(process.cwd(), 'sanity.config.ts')

  if (fs.existsSync(sanityConfigPath)) {
    console.log(`ℹ️  sanity.config.ts already exists, skipping creation`)
    return
  }

  const configContent = `
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  name: 'invest-with-saad',
  title: 'Invest with Saad CMS',
  projectId: '${config.projectId}',
  dataset: '${config.dataset}',
  basePath: '/admin',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
`

  fs.writeFileSync(sanityConfigPath, configContent.trim())
  console.log(`✅ Created sanity.config.ts`)
}

// Create package.json scripts if needed
async function setupPackageJsonScripts(): Promise<void> {
  const pkgPath = path.join(process.cwd(), 'package.json')
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))

  const scriptsToAdd = {
    'sanity:start': 'sanity start',
    'sanity:build': 'sanity build',
    'sanity:deploy': 'sanity deploy',
  }

  let updated = false
  for (const [key, value] of Object.entries(scriptsToAdd)) {
    if (!pkg.scripts[key]) {
      pkg.scripts[key] = value as string
      updated = true
    }
  }

  if (updated) {
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
    console.log(`✅ Updated package.json with Sanity scripts`)
  }
}

// Main setup function
async function runSetup(): Promise<void> {
  console.log('🚀 Starting Sanity CMS Setup...')
  console.log('')

  // Get config from environment
  const projectId = process.env.SANITY_PROJECT_ID || process.argv[process.argv.indexOf('--project-id') + 1]
  const dataset = process.env.SANITY_DATASET || 'production'
  const token = process.env.SANITY_TOKEN || process.argv[process.argv.indexOf('--token') + 1]

  if (!projectId || !token) {
    console.error('❌ Error: SANITY_PROJECT_ID and SANITY_TOKEN required')
    console.error('')
    console.error('Set environment variables:')
    console.error('  export SANITY_PROJECT_ID=your_project_id')
    console.error('  export SANITY_TOKEN=your_api_token')
    console.error('')
    console.error('Or provide as arguments:')
    console.error('  npm run setup:sanity -- --project-id YOUR_ID --token YOUR_TOKEN')
    process.exit(1)
  }

  const config: SetupConfig = {
    projectId,
    dataset,
    token,
  }

  try {
    // Step 1: Setup dataset
    await setupDataset(config)
    console.log('')

    // Step 2: Create environment config
    await createEnvConfig(config)
    console.log('')

    // Step 3: Create Sanity config
    await createSanityConfig(config)
    console.log('')

    // Step 4: Update package.json scripts
    await setupPackageJsonScripts()
    console.log('')

    // Success message
    console.log('✅ Sanity setup complete!')
    console.log('')
    console.log('📝 Next steps:')
    console.log('1. Install Sanity dependencies:')
    console.log('   npm install sanity @sanity/vision')
    console.log('')
    console.log('2. Start Sanity Studio:')
    console.log('   npm run sanity:start')
    console.log('')
    console.log('3. Migrate your existing data:')
    console.log('   npm run migrate:sanity')
    console.log('')
    console.log('4. Your Next.js app will query Sanity at:')
    console.log(`   https://${projectId}.api.sanity.io/v2021-06-07`)
    console.log('')
  } catch (error) {
    console.error('❌ Setup failed:', error)
    process.exit(1)
  }
}

// Run setup
runSetup().catch((error) => {
  console.error('Fatal error:', error)
  process.exit(1)
})
