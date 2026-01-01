/**
 * Form validation utilities for all lead forms
 */

export interface ValidationError {
  field: string
  message: string
}

export interface ValidationResult {
  isValid: boolean
  errors: ValidationError[]
}

/**
 * Validates email format
 */
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/**
 * Validates phone format (basic US/North American format)
 */
function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '')
  return cleaned.length >= 10 && cleaned.length <= 15
}

/**
 * Lead form validation schema
 * Required: name, phone
 * Optional: email (if provided, must be valid), comments
 */
export function validateLeadForm(data: {
  name?: string
  phone?: string
  email?: string
  comments?: string
}): ValidationResult {
  const errors: ValidationError[] = []

  if (!data.name || data.name.trim().length === 0) {
    errors.push({ field: 'name', message: 'Full name is required' })
  } else if (data.name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Full name must be at least 2 characters' })
  }

  if (!data.phone || data.phone.trim().length === 0) {
    errors.push({ field: 'phone', message: 'Phone number is required' })
  } else if (!isValidPhone(data.phone)) {
    errors.push({ field: 'phone', message: 'Phone number must be valid' })
  }

  if (data.email && data.email.trim().length > 0) {
    if (!isValidEmail(data.email)) {
      errors.push({ field: 'email', message: 'Email must be a valid email address' })
    }
  }

  if (data.comments && data.comments.trim().length > 1000) {
    errors.push({ field: 'comments', message: 'Comments must be less than 1000 characters' })
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

/**
 * Deal inquiry form validation schema
 */
export function validateDealInquiryForm(data: {
  name?: string
  phone?: string
  email?: string
  userRole?: string
  businessIndustry?: string
  timeInBusiness?: string
  annualRevenue?: string
  fundingAmount?: string
}): ValidationResult {
  const errors: ValidationError[] = []

  // Required fields
  if (!data.name || data.name.trim().length === 0) {
    errors.push({ field: 'name', message: 'Full name is required' })
  } else if (data.name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Full name must be at least 2 characters' })
  }

  if (!data.phone || data.phone.trim().length === 0) {
    errors.push({ field: 'phone', message: 'Phone number is required' })
  } else if (!isValidPhone(data.phone)) {
    errors.push({ field: 'phone', message: 'Phone number must be valid' })
  }

  // Optional but should be filled for deal inquiry
  if (data.email && data.email.trim().length > 0) {
    if (!isValidEmail(data.email)) {
      errors.push({ field: 'email', message: 'Email must be a valid email address' })
    }
  }

  if (!data.userRole || data.userRole.trim().length === 0) {
    errors.push({ field: 'userRole', message: 'Please select your role' })
  }

  if (!data.businessIndustry || data.businessIndustry.trim().length === 0) {
    errors.push({ field: 'businessIndustry', message: 'Please select your industry' })
  }

  if (!data.timeInBusiness || data.timeInBusiness.trim().length === 0) {
    errors.push({ field: 'timeInBusiness', message: 'Please select your experience level' })
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

/**
 * Valuation form validation schema
 */
export function validateValuationForm(data: {
  address?: string
  city?: string
  state?: string
  zip?: string
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
}): ValidationResult {
  const errors: ValidationError[] = []

  // Property info
  if (!data.address || data.address.trim().length === 0) {
    errors.push({ field: 'address', message: 'Property address is required' })
  }

  if (!data.city || data.city.trim().length === 0) {
    errors.push({ field: 'city', message: 'City is required' })
  }

  if (!data.state || data.state.trim().length === 0) {
    errors.push({ field: 'state', message: 'State is required' })
  }

  if (!data.zip || data.zip.trim().length === 0) {
    errors.push({ field: 'zip', message: 'ZIP code is required' })
  } else if (!/^\d{5}(-\d{4})?$/.test(data.zip)) {
    errors.push({ field: 'zip', message: 'ZIP code must be valid' })
  }

  // Contact info
  if (!data.firstName || data.firstName.trim().length === 0) {
    errors.push({ field: 'firstName', message: 'First name is required' })
  }

  if (!data.lastName || data.lastName.trim().length === 0) {
    errors.push({ field: 'lastName', message: 'Last name is required' })
  }

  if (!data.email || data.email.trim().length === 0) {
    errors.push({ field: 'email', message: 'Email is required' })
  } else if (!isValidEmail(data.email)) {
    errors.push({ field: 'email', message: 'Email must be a valid email address' })
  }

  if (!data.phone || data.phone.trim().length === 0) {
    errors.push({ field: 'phone', message: 'Phone number is required' })
  } else if (!isValidPhone(data.phone)) {
    errors.push({ field: 'phone', message: 'Phone number must be valid' })
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

/**
 * Get error message for a specific field
 */
export function getFieldError(errors: ValidationError[], field: string): string | null {
  return errors.find((e) => e.field === field)?.message || null
}

/**
 * Serialize errors for display (group by field)
 */
export function serializeValidationErrors(errors: ValidationError[]): Record<string, string> {
  return errors.reduce(
    (acc, err) => {
      acc[err.field] = err.message
      return acc
    },
    {} as Record<string, string>
  )
}
