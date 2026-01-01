import crypto from 'crypto'

const META_API_VERSION = 'v21.0'
const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN
const META_DATASET_ID = process.env.META_DATASET_ID

export interface UserData {
  email?: string
  phone?: string
  firstName?: string
  lastName?: string
  city?: string
  state?: string
  zipCode?: string
  country?: string
}

interface MetaEventData {
  event_name: string
  event_time: number
  event_id: string
  event_source_url: string
  action_source: 'website'
  user_data: {
    client_ip_address?: string
    client_user_agent?: string
    fbp?: string
    fbc?: string
    em?: string[]
    ph?: string[]
    fn?: string[]
    ln?: string[]
    ct?: string[]
    st?: string[]
    zp?: string[]
    country?: string[]
  }
  custom_data?: Record<string, any>
}

/**
 * Hash user data using SHA-256 (Meta requirement for PII)
 */
function hashData(data: string): string {
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex')
}

/**
 * Normalize phone number (remove spaces, dashes, parentheses)
 */
function normalizePhone(phone: string): string {
  return phone.replace(/[\s\-\(\)]/g, '')
}

/**
 * Send event to Meta Conversions API
 */
export async function sendMetaConversionEvent(
  eventName: string,
  eventId: string,
  eventSourceUrl: string,
  clientIp: string,
  userAgent: string,
  fbp?: string,
  fbc?: string,
  userData?: UserData,
  customData?: Record<string, any>
): Promise<boolean> {
  if (!META_ACCESS_TOKEN || !META_DATASET_ID) {
    console.warn('Meta Conversions API not configured. Event not sent.')
    return false
  }

  try {
    // Build user_data with hashed PII
    const user_data: MetaEventData['user_data'] = {
      client_ip_address: clientIp,
      client_user_agent: userAgent,
      ...(fbp && { fbp }),
      ...(fbc && { fbc }),
    }

    // Hash and add user data if provided
    if (userData) {
      if (userData.email) user_data.em = [hashData(userData.email)]
      if (userData.phone) user_data.ph = [hashData(normalizePhone(userData.phone))]
      if (userData.firstName) user_data.fn = [hashData(userData.firstName)]
      if (userData.lastName) user_data.ln = [hashData(userData.lastName)]
      if (userData.city) user_data.ct = [hashData(userData.city)]
      if (userData.state) user_data.st = [hashData(userData.state)]
      if (userData.zipCode) user_data.zp = [hashData(userData.zipCode)]
      if (userData.country) user_data.country = [hashData(userData.country)]
    }

    const event: MetaEventData = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId,
      event_source_url: eventSourceUrl,
      action_source: 'website',
      user_data,
      ...(customData && { custom_data: customData }),
    }

    const url = `https://graph.facebook.com/${META_API_VERSION}/${META_DATASET_ID}/events`

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [event],
        access_token: META_ACCESS_TOKEN,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Meta Conversions API error:', error)
      return false
    }

    return true
  } catch (error) {
    console.error('Error sending Meta conversion event:', error)
    return false
  }
}
