import { NextRequest } from 'next/server'
import { sendMetaConversionEvent, UserData } from '@/lib/meta-conversions'

export interface MetaTrackRequest {
  eventName: string
  eventId: string
  eventSourceUrl: string
  fbp?: string
  fbc?: string
  fbi?: string // IPv6 identifier from client-side Parameter Builder
  userAgent: string
  customData?: Record<string, any>
  userData?: UserData
}

export async function POST(request: NextRequest) {
  try {
    const body: MetaTrackRequest = await request.json()
    const {
      eventName,
      eventId,
      eventSourceUrl,
      fbp,
      fbc,
      fbi, // IPv6 identifier from client-side Parameter Builder
      userAgent,
      customData,
      userData,
    } = body

    // Get client IP from request headers
    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      '0.0.0.0'

    // Send to Meta Conversions API
    const success = await sendMetaConversionEvent(
      eventName,
      eventId,
      eventSourceUrl,
      clientIp,
      userAgent,
      fbp,
      fbc,
      userData,
      customData
    )

    // Log when we receive IPv6 identifier (fbi) from Parameter Builder
    if (fbi) {
      console.log('IPv6 identifier received from Parameter Builder:', { eventId, fbi })
    }

    return Response.json({
      success,
      message: success ? 'Event tracked' : 'Event tracking failed',
    })
  } catch (error) {
    console.error('Meta tracking API error:', error)

    // Return optimistic response to not break user experience
    return Response.json({
      success: true,
      message: 'Event received',
    })
  }
}
