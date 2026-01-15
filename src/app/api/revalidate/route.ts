import { revalidatePath } from 'next/cache'
import { parseBody } from 'next-sanity/webhook'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  console.log('📡 Webhook received at /api/revalidate')
  console.log('Secret configured:', !!process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET)

  try {
    const { body, isValidSignature } = await parseBody(
      request,
      process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET
    )

    console.log('✅ Body parsed:', JSON.stringify(body, null, 2))
    console.log('Signature valid:', isValidSignature)

    if (!isValidSignature) {
      console.error('❌ Invalid webhook signature')
      return new Response('Invalid webhook signature', { status: 401 })
    }

    // Revalidate based on the document slug
    const slug = (body?.slug as { current?: string } | undefined)?.current
    const docType = body?._type

    console.log(`🔄 Revalidating document type: ${docType}, slug: ${slug}`)

    if (slug === 'home') {
      console.log('Revalidating /')
      revalidatePath('/')
    }

    if (slug) {
      console.log(`Revalidating /${slug}`)
      revalidatePath(`/${slug}`)
    }

    console.log('✅ Revalidation complete')
    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    console.error('❌ Revalidation error:', err)
    return new Response(`Error revalidating: ${err}`, { status: 500 })
  }
}
