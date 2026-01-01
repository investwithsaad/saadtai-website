/**
 * Consolidated form submission endpoint
 * Handles all lead form submissions and captures to Follow Up Boss
 * Replaces: /api/lead-submission and /api/capture-lead
 */

import { captureLeadInFUB } from '@/lib/followupboss'

export interface FormSubmissionRequest {
  formType: 'lead_form' | 'deal_inquiry' | 'valuation' | 'contact_form' | 'qualified_investor_form'
  data: {
    firstname?: string
    lastname?: string
    name?: string
    email?: string
    phone?: string
    company?: string
    comments?: string
    dealsCompleted?: string
    dealsLastYear?: string
    frustration?: string
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

    if (!data.phone) {
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
      customFields: buildCustomFieldsFromData(data),
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
  if (data.company) parts.push(`Company: ${data.company}`)

  // Qualified investor specific
  if (data.dealsCompleted) parts.push(`Deals Completed: ${data.dealsCompleted}`)
  if (data.dealsLastYear) parts.push(`Deals Last 12-18 Months: ${data.dealsLastYear}`)
  if (data.frustration) parts.push(`Main Frustration: ${data.frustration}`)
  if (data.isQualified !== undefined) parts.push(`Qualified Lead: ${data.isQualified ? 'Yes' : 'No'}`)

  // Deal inquiry specific
  if (data.user_role) parts.push(`Role: ${data.user_role}`)
  if (data.business_industry) parts.push(`Industry: ${data.business_industry}`)
  if (data.time_in_business) parts.push(`Time in Business: ${data.time_in_business}`)
  if (data.annual_revenue) parts.push(`Annual Revenue: ${data.annual_revenue}`)
  if (data.funding_amount) parts.push(`Funding Needed: ${data.funding_amount}`)
  if (data.owner_credit_score) parts.push(`Credit Score: ${data.owner_credit_score}`)
  if (data.financing_needs?.length) parts.push(`Financing Needs: ${data.financing_needs.join(', ')}`)

  // Valuation specific
  if (data.address) parts.push(`Property Address: ${data.address}`)
  if (data.city) parts.push(`City: ${data.city}`)
  if (data.state) parts.push(`State: ${data.state}`)
  if (data.zip) parts.push(`ZIP: ${data.zip}`)

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
    deal_inquiry: 'website_deal_inquiry',
    valuation: 'website_home_valuation',
    contact_form: 'website_contact_form',
    qualified_investor_form: 'website_qualified_investor',
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
    deal_inquiry: [baseTag, webLeadTag, 'deal-inquiry'],
    valuation: [baseTag, webLeadTag, 'seller-lead', 'valuation'],
    contact_form: [baseTag, webLeadTag, 'contact-inquiry'],
    qualified_investor_form: [baseTag, webLeadTag, 'qualified-investor', 'multifamily-investor'],
  }

  return tagMap[formType] || [baseTag, webLeadTag]
}

/**
 * Build custom fields object from form data
 */
function buildCustomFieldsFromData(
  data: Record<string, any>
): Record<string, any> {
  const customFields: Record<string, any> = {}

  // Only include fields that have values
  if (data.company) customFields.company = data.company
  if (data.business_industry) customFields.industry = data.business_industry
  if (data.annual_revenue) customFields.annual_revenue = data.annual_revenue
  if (data.funding_amount) customFields.funding_needed = data.funding_amount
  if (data.owner_credit_score) customFields.credit_score = data.owner_credit_score

  return customFields
}
