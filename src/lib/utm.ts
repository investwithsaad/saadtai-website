/**
 * UTM Parameter Extraction & Persistence
 * Handles first-touch attribution for marketing channels
 */

const UTM_STORAGE_KEY = 'saad_utm_params'
const UTM_EXPIRY_KEY = 'saad_utm_expiry'
const UTM_EXPIRY_MS = 30 * 24 * 60 * 60 * 1000 // 30 days

export interface UtmParameters {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  utm_id?: string
  utm_source_platform?: string
}

/**
 * Extract UTM parameters from current URL
 */
export function extractUtmParameters(): UtmParameters {
  if (typeof window === 'undefined') return {}

  const params = new URLSearchParams(window.location.search)

  return {
    ...(params.get('utm_source') && { utm_source: params.get('utm_source') || undefined }),
    ...(params.get('utm_medium') && { utm_medium: params.get('utm_medium') || undefined }),
    ...(params.get('utm_campaign') && { utm_campaign: params.get('utm_campaign') || undefined }),
    ...(params.get('utm_term') && { utm_term: params.get('utm_term') || undefined }),
    ...(params.get('utm_content') && { utm_content: params.get('utm_content') || undefined }),
    ...(params.get('utm_id') && { utm_id: params.get('utm_id') || undefined }),
    ...(params.get('utm_source_platform') && { utm_source_platform: params.get('utm_source_platform') || undefined }),
  }
}

/**
 * Save UTM parameters to sessionStorage (first-touch attribution)
 * Only saves if no existing UTM parameters are stored
 */
export function saveUtmParameters(params: UtmParameters): void {
  if (typeof window === 'undefined' || typeof sessionStorage === 'undefined') return

  // Only save if there are params to save
  if (Object.keys(params).length === 0) return

  // Check if UTM params already exist and not expired
  const existing = getUtmParameters()
  if (Object.keys(existing).length > 0) {
    return // First-touch: don't overwrite existing
  }

  try {
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(params))
    sessionStorage.setItem(UTM_EXPIRY_KEY, (Date.now() + UTM_EXPIRY_MS).toString())
  } catch (error) {
    console.warn('Failed to save UTM parameters:', error)
  }
}

/**
 * Get stored UTM parameters from sessionStorage
 * Returns empty object if expired or not found
 */
export function getUtmParameters(): UtmParameters {
  if (typeof window === 'undefined' || typeof sessionStorage === 'undefined') return {}

  try {
    const expiryStr = sessionStorage.getItem(UTM_EXPIRY_KEY)
    if (expiryStr && Date.now() > parseInt(expiryStr)) {
      // Expired - clear and return empty
      sessionStorage.removeItem(UTM_STORAGE_KEY)
      sessionStorage.removeItem(UTM_EXPIRY_KEY)
      return {}
    }

    const stored = sessionStorage.getItem(UTM_STORAGE_KEY)
    return stored ? JSON.parse(stored) : {}
  } catch (error) {
    console.warn('Failed to retrieve UTM parameters:', error)
    return {}
  }
}

/**
 * Initialize UTM tracking on page load
 * Extracts from URL and saves if first-touch
 */
export function initializeUtmTracking(): void {
  if (typeof window === 'undefined') return

  const extracted = extractUtmParameters()
  if (Object.keys(extracted).length > 0) {
    saveUtmParameters(extracted)
  }
}

/**
 * Clear UTM parameters from storage
 */
export function clearUtmParameters(): void {
  if (typeof window === 'undefined' || typeof sessionStorage === 'undefined') return

  try {
    sessionStorage.removeItem(UTM_STORAGE_KEY)
    sessionStorage.removeItem(UTM_EXPIRY_KEY)
  } catch (error) {
    console.warn('Failed to clear UTM parameters:', error)
  }
}
