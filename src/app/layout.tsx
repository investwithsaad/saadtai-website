import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { headers } from 'next/headers'
import { LayoutContent } from "@/app/layout-content"
import { SchemaRenderer } from "@/components/SchemaRenderer"
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/schema-generators"
import { BASE_URL } from "@/lib/metadata-factory"
import { CookieConsentBanner } from "@/components/CookieConsent"
import { TrackingScripts } from "@/components/TrackingScripts"
import { getBlogPosts } from "@/lib/blog-utils"
import { getHowToGuides } from "@/lib/how-to-utils"
import "@/app/globals.css"
import { Poppins, Lora } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const lora = Lora({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Clarity for Buy, Sell, Hold Decisions | Saad Tai",
  description: "I help multifamily investors think through buy, sell, and hold decisions. Off-market deals, rigorous analysis, and execution. Albany, NY & Kissimmee, FL.",
  keywords: "multifamily investing, cap rates, off-market deals, investment property analysis, 1031 exchange, investor real estate advisor, Albany NY, Schenectady NY, Kissimmee FL, Capital Region, small multifamily, portfolio strategy, cash flow analysis",
  alternates: {
    canonical: `${BASE_URL}/`,
  },
  openGraph: {
    title: "Multifamily Investment Advisor | Saad Tai | Albany & Kissimmee",
    description: "Strategic multifamily investment guidance in Albany, NY and Kissimmee, FL. Scale smarter, exit cleaner, maximize earnings.",
    url: `${BASE_URL}/`,
    siteName: "Invest with Saad",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/main-bg.png`,
        width: 1200,
        height: 628,
        alt: "Multifamily Investment Advisor Saad Tai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multifamily Investment Advisor | Saad Tai",
    description: "Scale smarter. Exit cleaner. Strategic multifamily investment guidance in Albany, NY and Kissimmee, FL.",
  },
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

// Global revalidate - 24 hour fallback for all routes (overridden by webhook)
export const revalidate = 86400

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers()
  const nonce = headersList.get('x-nonce') || undefined

  // Fetch blog posts and guides for footer
  const allPosts = getBlogPosts()
  const recentPosts = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(post => ({ id: post.id, title: post.title }))

  const allGuides = getHowToGuides()
    .map(guide => ({ id: guide.id, title: guide.title }))

  return (
    <html lang="en" className={`${poppins.variable} ${lora.variable}`}>
      <head>

        {/* Schema Markup */}
        <SchemaRenderer schema={getOrganizationSchema()} nonce={nonce} />
        <SchemaRenderer schema={getWebsiteSchema()} nonce={nonce} />

        {/* Google Consent Mode v2 - must be set before gtag loads */}
        <Script
          id="consent-defaults"
          strategy="beforeInteractive"
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
              });
            `,
          }}
        />

        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MBTB275X6E"
          strategy="afterInteractive"
          nonce={nonce}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MBTB275X6E');
            `,
          }}
        />

        {/* Meta Pixel and Clarity - Moved to TrackingScripts component with consent check */}
      </head>
      <body className="bg-white flex flex-col min-h-screen">
<TrackingScripts nonce={nonce} />
        <LayoutContent recentPosts={recentPosts} allGuides={allGuides}>
          {children}
        </LayoutContent>
        <CookieConsentBanner />
        <Script
          id="register-sw"
          strategy="afterInteractive"
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js').catch(() => {})
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
