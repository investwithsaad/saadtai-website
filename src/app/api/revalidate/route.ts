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
      return new Response('Invalid webhook signature', { status: 401 })
    }

    const slug = (body?.slug as { current?: string } | undefined)?.current

    // Revalidate home page
    if (slug === 'home') {
      revalidatePath('/')
    }

    // Revalidate any page with a slug
    if (slug) {
      revalidatePath(`/${slug}`)
    }

    // Always revalidate the parent collections
    revalidatePath('/listings')
    revalidatePath('/blog')

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    return new Response('Error revalidating', { status: 500 })
  }
}
