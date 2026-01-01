import { NextRequest } from 'next/server'

/**
 * IPv6 Endpoint for Meta Parameter Builder
 * Returns the client's IP address (prioritizing IPv6)
 * Used by client-side Parameter Builder to collect IPv6 for better tracking
 */
export async function GET(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  const cfConnectingIp = request.headers.get('cf-connecting-ip')

  // Priority order: x-forwarded-for (first IP) > cf-connecting-ip > x-real-ip > fallback
  const clientIp =
    forwardedFor?.split(',')[0].trim() || cfConnectingIp || realIp || '0.0.0.0'

  return Response.json({
    ip: clientIp,
  })
}
