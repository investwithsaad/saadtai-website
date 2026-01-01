/**
 * ============================================================================
 * SAAD TAI REAL ESTATE BRAND COLOR PALETTE
 * ============================================================================
 * Professional real estate theme with modern black and gold accents
 */

export const COLORS = {
  primary: "#1a1a1a",      // Black - Modern, sophisticated, strong
  secondary: "#f4b86e",    // Gold - Premium, accent color
  dark: "#0f172a",         // Dark blue/navy - navbar color
  background: "#f8f9fa",   // Light gray background
  white: "#ffffff"
} as const;

// Color option types for components
export type HeadingColorOption = 'primary' | 'secondary' | 'white' | 'dark' | 'background'
export type TextColorOption = 'dark' | 'primary' | 'secondary' | 'white'
export type CardColorOption = 'white' | 'background' | 'dark'
export type SectionBackgroundOption = 'white' | 'background' | 'primary' | 'dark'

// Tailwind palette for real estate theme
export const tailwindColors = {
  "brand-primary": COLORS.primary,
  "brand-secondary": COLORS.secondary,
  "brand-dark": COLORS.dark,
  "brand-background": COLORS.background,
  "brand-white": COLORS.white
} as const;
