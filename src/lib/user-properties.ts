/**
 * User Properties & Custom Dimensions
 * Tracks user engagement, type, and interaction patterns
 */

const SESSION_COUNT_KEY = 'saad_session_count'
const SESSION_START_KEY = 'saad_session_start'
const INTERACTION_KEY = 'saad_has_interacted'
const LAST_ACTIVITY_KEY = 'saad_last_activity'
const SESSION_TIMEOUT_MS = 30 * 60 * 1000 // 30 minutes

export interface UserProperties {
  user_type?: 'new' | 'returning'
  engagement_level?: 'low' | 'medium' | 'high'
  visitor_type?: 'investor' | 'seller' | 'curious' | 'unknown'
  pages_viewed?: number
  session_count?: number
  has_interacted?: boolean
}

/**
 * Infer visitor type from current pathname
 */
function inferVisitorType(pathname: string): UserProperties['visitor_type'] {
  if (!pathname) return 'unknown'

  // Investor paths
  if (
    pathname.includes('/blog') ||
    pathname.includes('/calculator') ||
    pathname.includes('/investing') ||
    pathname.includes('/multifamily') ||
    pathname.includes('/cap-rate') ||
    pathname.includes('/buying')
  ) {
    return 'investor'
  }

  // Seller paths
  if (pathname.includes('/selling') || pathname.includes('/sell')) {
    return 'seller'
  }

  // General/curious paths
  if (pathname.includes('/about') || pathname.includes('/faq')) {
    return 'curious'
  }

  return 'unknown'
}

/**
 * Get current session count (returns new if session expired)
 */
function getSessionCount(): number {
  if (typeof localStorage === 'undefined') return 1

  try {
    const lastActivityStr = localStorage.getItem(LAST_ACTIVITY_KEY)
    const lastActivity = lastActivityStr ? parseInt(lastActivityStr) : 0

    // Check if session has expired
    if (Date.now() - lastActivity > SESSION_TIMEOUT_MS) {
      // Session expired - increment session count
      const currentCount = localStorage.getItem(SESSION_COUNT_KEY)
      const newCount = (currentCount ? parseInt(currentCount) : 0) + 1
      localStorage.setItem(SESSION_COUNT_KEY, newCount.toString())
      return newCount
    }

    // Session still active - return current session count
    const currentCount = localStorage.getItem(SESSION_COUNT_KEY)
    return currentCount ? parseInt(currentCount) : 1
  } catch (error) {
    console.warn('Failed to get session count:', error)
    return 1
  }
}

/**
 * Update last activity timestamp
 */
function updateLastActivity(): void {
  if (typeof localStorage === 'undefined') return

  try {
    localStorage.setItem(LAST_ACTIVITY_KEY, Date.now().toString())
  } catch (error) {
    console.warn('Failed to update activity:', error)
  }
}

/**
 * Determine user type (new vs returning)
 */
function determineUserType(): UserProperties['user_type'] {
  if (typeof localStorage === 'undefined') return 'new'

  try {
    const startStr = localStorage.getItem(SESSION_START_KEY)
    if (startStr) {
      return 'returning'
    }
    return 'new'
  } catch (error) {
    return 'new'
  }
}

/**
 * Initialize session on first load
 */
function initializeSession(): void {
  if (typeof localStorage === 'undefined') return

  try {
    const startStr = localStorage.getItem(SESSION_START_KEY)
    if (!startStr) {
      localStorage.setItem(SESSION_START_KEY, Date.now().toString())
      localStorage.setItem(SESSION_COUNT_KEY, '1')
    }
    updateLastActivity()
  } catch (error) {
    console.warn('Failed to initialize session:', error)
  }
}

/**
 * Calculate engagement level based on interactions and pages viewed
 */
function calculateEngagementLevel(
  hasInteracted: boolean,
  pagesViewed: number
): UserProperties['engagement_level'] {
  if (hasInteracted && pagesViewed >= 3) return 'high'
  if (hasInteracted || pagesViewed >= 2) return 'medium'
  return 'low'
}

/**
 * Initialize user properties on session start
 */
export function initializeUserProperties(): void {
  if (typeof window === 'undefined') return

  initializeSession()

  // Set initial properties in window for quick access
  const props = getUserProperties()
  if (typeof window !== 'undefined') {
    ;(window as any).__userProperties = props
  }
}

/**
 * Get current user properties
 */
export function getUserProperties(pathname?: string): UserProperties {
  if (typeof window === 'undefined') return {}

  try {
    const sessionCount = getSessionCount()
    const userType = determineUserType()
    const hasInteracted =
      typeof localStorage !== 'undefined' ? !!localStorage.getItem(INTERACTION_KEY) : false
    const visitPath = pathname || (typeof window !== 'undefined' ? window.location.pathname : '')
    const visitorType = inferVisitorType(visitPath)

    // Default pages_viewed to 1 (will be incremented by PageViewTracker)
    const pagesViewed = 1

    return {
      user_type: userType,
      engagement_level: calculateEngagementLevel(hasInteracted, pagesViewed),
      visitor_type: visitorType,
      pages_viewed: pagesViewed,
      session_count: sessionCount,
      has_interacted: hasInteracted,
    }
  } catch (error) {
    console.warn('Failed to get user properties:', error)
    return {}
  }
}

/**
 * Update user properties (e.g., increment pages viewed)
 */
export function updateUserProperties(updates: Partial<UserProperties>): void {
  if (typeof window === 'undefined') return

  try {
    // Update interaction flag if needed
    if (updates.has_interacted) {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(INTERACTION_KEY, 'true')
      }
    }

    // Update last activity
    updateLastActivity()

    // Update cached properties
    const current = getUserProperties()
    ;(window as any).__userProperties = { ...current, ...updates }
  } catch (error) {
    console.warn('Failed to update user properties:', error)
  }
}

/**
 * Track user interactions (CTA clicks, form submissions, etc.)
 */
export function trackInteraction(interactionType: string): void {
  updateUserProperties({ has_interacted: true })
}

/**
 * Clear user session data
 */
export function clearUserSession(): void {
  if (typeof localStorage === 'undefined') return

  try {
    localStorage.removeItem(SESSION_START_KEY)
    localStorage.removeItem(SESSION_COUNT_KEY)
    localStorage.removeItem(INTERACTION_KEY)
    localStorage.removeItem(LAST_ACTIVITY_KEY)
  } catch (error) {
    console.warn('Failed to clear user session:', error)
  }
}
