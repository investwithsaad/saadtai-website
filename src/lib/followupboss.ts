/**
 * Follow Up Boss Integration
 * Captures real estate leads to Follow Up Boss CRM
 * 
 * IMPORTANT: Uses POST /v1/events (not /v1/people)
 * Reasons to use /v1/events:
 * - Automatically deduplicates contacts by phone/email
 * - Triggers action plans and automations
 * - Triggers agent notifications
 * - Records event in contact history
 * - Assigns correct agent based on Lead Flow rules
 * 
 * Setup required:
 * 1. Get API Key from Follow Up Boss dashboard
 * 2. Add to .env.local:
 *    FOLLOWUPBOSS_API_KEY=your_api_key
 *    FOLLOWUPBOSS_TEAM_ID=your_team_id
 * 
 * Docs: https://docs.followupboss.com/reference/events-post
 */

export interface FUBLeadData {
  firstName: string
  lastName: string
  email?: string
  phone?: string
  source?: string // Where the lead came from: "Website Form", "Contact Us", etc.
  notes?: string
  tags?: string[]
  customFields?: Record<string, string>
}

export interface FUBPerson {
  firstName: string
  lastName: string
  email?: string
  phone?: string
}

export interface FUBEventPayload {
  type: "Inquiry" | "General Inquiry" | "Property Inquiry" | "Seller Inquiry" | "Registration"
  source: string
  person: FUBPerson
  description?: string
  [key: string]: any
}

const API_KEY = process.env.FOLLOWUPBOSS_API_KEY
const API_BASE = "https://api.followupboss.com/v1"

/**
 * Capture a lead in Follow Up Boss using the events endpoint
 * This is the correct way per FUB documentation:
 * - Automatically deduplicates contacts
 * - Triggers action plans and automations
 * - Assigns correct agent based on Lead Flow rules
 * - Records event in contact history
 *
 * NOTE: Email/phone are sent in the person object but FUB may not persist
 * them in the contact record depending on lead source configuration.
 * Check your FUB Lead Source settings to enable email/phone capture.
 */
export async function captureLeadInFUB(data: FUBLeadData): Promise<any> {
  if (!API_KEY) {
    console.warn("FOLLOWUPBOSS_API_KEY not configured. Lead not captured in FUB.")
    return null
  }

  try {
    // Build the person object with all contact info
    const person: any = {
      firstName: data.firstName,
      lastName: data.lastName,
    }

    // Try sending as arrays since FUB stores them as arrays
    if (data.email) {
      person.emails = [{ value: data.email }]
    }
    if (data.phone) {
      person.phones = [{ value: data.phone }]
    }

    const eventPayload: FUBEventPayload = {
      type: "General Inquiry",
      source: data.source || "Website Form",
      person: person,
      ...(data.notes && { description: data.notes }),
    }

    console.log("Event payload being sent to FUB:", JSON.stringify(eventPayload, null, 2))

    // FUB API expects Basic Auth
    const authHeader = `Basic ${Buffer.from(API_KEY + ":").toString("base64")}`

    const response = await fetch(`${API_BASE}/events`, {
      method: "POST",
      headers: {
        "Authorization": authHeader,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(eventPayload),
    })

    // FUB returns 200 if contact was updated, 201 if new contact was created, 204 if lead source is archived
    if (!response.ok && response.status !== 204) {
      const error = await response.json().catch(() => ({}))
      console.error("FUB API Error:", error)
      throw new Error(`FUB API Error: ${error.message || response.statusText}`)
    }

    // Handle 204 (no content) response
    if (response.status === 204) {
      console.warn("FUB returned 204 No Content - lead source may be archived")
      return null
    }

    const result = await response.json()
    console.log("Lead captured in Follow Up Boss:", result)
    return result
  } catch (error) {
    console.error("Error capturing lead in Follow Up Boss:", error)
    // Don't throw - lead capture failure shouldn't break the user flow
    return null
  }
}
