import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { LayoutContent } from "@/app/layout-content"
import { SchemaRenderer } from "@/components/SchemaRenderer"
import { getOrganizationSchema } from "@/lib/schema-generators"
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
  title: "Invest with Saad | Multifamily Investment Advisor | Albany, Schenectady",
  description: "Clarity before you commit capital. I help multifamily investors think through buy, sell, and hold decisions while my team handles the execution. Off-market deals, investor analysis, portfolio strategy.",
  keywords: "multifamily investing, cap rates, off-market deals, investment property analysis, 1031 exchange, investor real estate advisor, Albany, Schenectady, small multifamily, portfolio strategy, cash flow analysis",
  openGraph: {
    title: "Invest with Saad | Multifamily Investment Advisor",
    description: "Strategic guidance for multifamily investors. Scale smarter, exit cleaner, maximize earnings in the Capital Region.",
    url: "https://investwithsaad.com/",
    siteName: "Invest with Saad",
    type: "website",
    images: [
      {
        url: "https://investwithsaad.com/main-bg.png",
        width: 1200,
        height: 628,
        alt: "Invest with Saad - Multifamily Investment Advisor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invest with Saad | Multifamily Investment Advisor",
    description: "Scale smarter. Exit cleaner. Strategic guidance for small multifamily investors in the Capital Region.",
  },
  robots: "index, follow",
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
        <link rel="preconnect" href="https://umami-production-25e0.up.railway.app" />
        <link rel="dns-prefetch" href="https://umami-production-25e0.up.railway.app" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />

        {/* Schema Markup */}
        <SchemaRenderer schema={getOrganizationSchema()} />

        {/* Umami Analytics */}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}

        {/* Meta Pixel */}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <>
            <Script
              id="meta-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}

        {/* Meta Parameter Builder - Client Side */}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <Script
            id="meta-param-builder"
            src="https://capi-automation.s3.us-east-2.amazonaws.com/public/client_js/capiParamBuilder/clientParamBuilder.bundle.js"
            strategy="afterInteractive"
          />
        )}

        {/* Microsoft Clarity */}
        {process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID && (
          <Script
            id="clarity-script"
            strategy="afterInteractive"
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
        <LayoutContent>
          {children}
        </LayoutContent>
      </body>
    </html>
  )
}
