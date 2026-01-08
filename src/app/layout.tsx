import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { LayoutContent } from "@/app/layout-content"
import { SchemaRenderer } from "@/components/SchemaRenderer"
import { getOrganizationSchema } from "@/lib/schema-generators"
import { BASE_URL } from "@/lib/metadata-factory"
import { CookieConsentBanner } from "@/components/CookieConsent"
import { TrackingScripts } from "@/components/TrackingScripts"
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
  title: "Multifamily Investment Advisor | Saad Tai",
  description: "Clarity on multifamily investment decisions. Real estate advisor specializing in buy/sell strategies in upstate New York.",
  keywords: "multifamily investing, cap rates, off-market deals, investment property analysis, 1031 exchange, investor real estate advisor, Albany, Schenectady, small multifamily, portfolio strategy, cash flow analysis",
  alternates: {
    canonical: `${BASE_URL}/`,
  },
  openGraph: {
    title: "Multifamily Investment Advisor | Saad Tai",
    description: "Strategic guidance for multifamily investors. Scale smarter, exit cleaner, maximize earnings in the Capital Region.",
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
    description: "Scale smarter. Exit cleaner. Strategic guidance for small multifamily investors in the Capital Region.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${lora.variable}`}>
      <head>
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://saadinfo.up.railway.app" />
        <link rel="preconnect" href="https://capig.datah04.com" />
        <link rel="dns-prefetch" href="https://capig.datah04.com" />

        {/* Schema Markup */}
        <SchemaRenderer schema={getOrganizationSchema()} />

        {/* Umami Analytics */}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="lazyOnload"
          />
        )}

        {/* Meta Pixel - Moved to TrackingScripts component with consent check */}

        {/* Microsoft Clarity */}
        {process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID && (
          <Script
            id="clarity-script"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
              `,
            }}
          />
        )}
      </head>
      <body className="bg-white flex flex-col min-h-screen">
        <TrackingScripts />
        <LayoutContent>
          {children}
        </LayoutContent>
        <CookieConsentBanner />
        <Script
          id="register-sw"
          strategy="afterInteractive"
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
