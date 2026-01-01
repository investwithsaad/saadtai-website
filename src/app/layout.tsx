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
  title: "Saad Tai Real Estate Agent | Multifamily Investing | Albany, Schenectady, Rensselaer NY",
  description: "Real estate agent specializing in 2-4 unit multifamily investing. Serving Albany County, Schenectady County, and Rensselaer County. 10+ years of experience. Straight talk, no fluff.",
  keywords: "real estate agent, Albany County, Schenectady County, Rensselaer County, multifamily investing, 2-4 unit properties, home buying, home selling, real estate valuation, realtor",
  openGraph: {
    title: "Saad Tai Real Estate Agent | Home Buying & Selling | Albany, Schenectady",
    description: "Expert real estate guidance for home buying, selling, and valuation. Licensed Realtor® serving Albany & Schenectady. Straight talk, no fluff approach.",
    url: "https://saadtherealtor.com/",
    siteName: "Saad Tai Real Estate",
    type: "website",
    images: [
      {
        url: "https://saadtherealtor.com/main-bg.png",
        width: 1200,
        height: 628,
        alt: "Saad Tai Real Estate Agent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Tai Real Estate Agent | Albany, Schenectady",
    description: "Licensed Realtor® with 10+ years of experience. Home buying, selling, and valuation for Albany & Schenectady area.",
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
