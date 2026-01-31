import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function generateNonce() {
  const array = new Uint8Array(16)
  crypto.getRandomValues(array)
  let binary = ''
  array.forEach((b) => (binary += String.fromCharCode(b)))
  return btoa(binary)
}

export function middleware(request: NextRequest) {
  const nonce = generateNonce()

  const isProduction = process.env.NODE_ENV === 'production'

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' https://snap.licdn.com https://saadinfo.up.railway.app https://va.vercel-scripts.com https://ddwl4m2hdecbv.cloudfront.net https://connect.facebook.net https://www.facebook.com https://www.clarity.ms https://widgetbe.com https://capi-automation.s3.us-east-2.amazonaws.com https://scripts.clarity.ms https://umami-production-25e0.up.railway.app`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: https: blob:",
    "font-src 'self' data: https://fonts.gstatic.com",
    "connect-src 'self' https://snap.licdn.com https://px.ads.linkedin.com https://saadinfo.up.railway.app https://www.facebook.com https://graph.facebook.com https://www.clarity.ms https://q.clarity.ms https://e.clarity.ms https://c.clarity.ms https://j.clarity.ms https://y.clarity.ms https://h.clarity.ms https://k.clarity.ms https://widgetbe.com https://capig.datah04.com https://umami-production-25e0.up.railway.app",
    "frame-src 'self' https://www.facebook.com https://m.facebook.com",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; ')

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  response.headers.set('Content-Security-Policy', csp)
  response.headers.set('x-nonce', nonce)

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|site.webmanifest|sw.js).*)',
  ],
}
