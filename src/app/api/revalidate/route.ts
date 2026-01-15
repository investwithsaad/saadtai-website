import { revalidatePath } from 'next/cache'
import { parseBody } from 'next-sanity/webhook'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { isValidSignature } = await parseBody(
      request,
      process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET
    )

    if (!isValidSignature) {
      return new Response('Invalid webhook signature', { status: 401 })
    }

    // Revalidate all routes when any Sanity content changes
    revalidatePath('/', 'layout')

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    return new Response('Error revalidating', { status: 500 })
  }
}
