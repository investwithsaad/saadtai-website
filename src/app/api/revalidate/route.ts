import { revalidatePath } from 'next/cache'
import { parseBody } from 'next-sanity/webhook'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody(
      request,
      process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET
    )

    if (!isValidSignature) {
      console.error('Invalid webhook signature')
      return new Response('Invalid webhook signature', { status: 401 })
    }

    // Revalidate based on the document slug
    const slug = (body?.slug as { current?: string } | undefined)?.current

    if (slug === 'home') {
      revalidatePath('/')
    }

    if (slug) {
      revalidatePath(`/${slug}`)
    }

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    console.error('Revalidation error:', err)
    return new Response('Error revalidating', { status: 500 })
  }
}
