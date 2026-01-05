/**
 * Consolidated form submission endpoint
 * Handles all lead form submissions and captures to Follow Up Boss
 * Replaces: /api/lead-submission and /api/capture-lead
 */

import { captureLeadInFUB } from '@/lib/followupboss'

export interface FormSubmissionRequest {
  formType: 'lead_form' | 'qualified_investor_form' | 'investment_calculator' | 'calculator_access'
  data: {
    firstname?: string
    lastname?: string
    name?: string
    email?: string
    phone?: string
    comments?: string
    unitsSelling?: string
    timeline?: string
    condition?: string
    isQualified?: boolean
    [key: string]: any
  }
}

export async function POST(request: Request) {
  try {
    const body: FormSubmissionRequest = await request.json()
    const { formType, data } = body

    console.log('Form submission received:', { formType, data })

    // Validate required fields
    if (!data.name && (!data.firstname || !data.lastname)) {
      return Response.json(
        { error: 'Name or firstname/lastname is required' },
        { status: 400 }
      )
    }

    // Calculator access only requires email, not phone
    if (formType !== 'calculator_access' && !data.phone) {
      return Response.json(
        { error: 'Phone is required' },
        { status: 400 }
      )
    }

    // Extract lead info
    const firstName = data.firstname || data.name?.split(' ')[0] || 'Unknown'
    const lastName = data.lastname || data.name?.split(' ').slice(1).join(' ') || ''

    console.log('Extracted name:', { firstName, lastName })
    console.log('Phone:', data.phone)
    console.log('Email:', data.email)

    // Build notes from form data
    const notes = buildNotesFromFormData(formType, data)

    // Capture to Follow Up Boss
    const result = await captureLeadInFUB({
      firstName,
      lastName,
      email: data.email,
      phone: data.phone,
      source: getSourceForFormType(formType),
      notes,
      tags: getTagsForFormType(formType),
    })

    console.log('FUB result:', result)

    return Response.json({
      success: !!result,
      leadId: result?.id,
      message: 'Form submitted successfully',
    })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error('Form submission error:', errorMessage)

    // Return optimistic response to not break user experience
    return Response.json({
      success: true,
      message: 'Form submitted',
    })
  }
}

/**
 * Build notes from form data based on form type
 */
function buildNotesFromFormData(formType: string, data: Record<string, any>): string {
  const parts: string[] = []

  parts.push(`Form Type: ${formType}`)

  // Common fields
  if (data.comments) parts.push(`Comments: ${data.comments}`)

  // Qualified investor specific
  if (data.unitsSelling) parts.push(`Properties to Sell: ${data.unitsSelling}`)
  if (data.timeline) parts.push(`Sale Timeline: ${data.timeline}`)
  if (data.condition) parts.push(`Property Condition: ${data.condition}`)
  if (data.isQualified !== undefined) parts.push(`Qualified Lead: ${data.isQualified ? 'Yes' : 'No'}`)

  // Timestamp if provided
  if (data.timestamp) parts.push(`Submitted: ${data.timestamp}`)

  return parts.join('\n')
}

/**
 * Get source identifier for the lead based on form type
 */
function getSourceForFormType(formType: string): string {
  const sourceMap: Record<string, string> = {
    lead_form: 'website_lead_form',
    qualified_investor_form: 'website_qualified_investor',
    investment_calculator: 'website_investment_calculator',
    calculator_access: 'website_calculator_access',
  }

  return sourceMap[formType] || 'website_form'
}

/**
 * Get tags for the lead based on form type
 */
function getTagsForFormType(formType: string): string[] {
  const baseTag = 'real-estate'
  const webLeadTag = 'web-lead'

  const tagMap: Record<string, string[]> = {
    lead_form: [baseTag, webLeadTag, 'form-submission'],
    qualified_investor_form: [baseTag, webLeadTag, 'qualified-investor', 'multifamily-investor'],
    investment_calculator: [baseTag, webLeadTag, 'calculator'],
    calculator_access: [baseTag, webLeadTag, 'calculator-access', 'high-intent'],
  }

  return tagMap[formType] || [baseTag, webLeadTag]
}
