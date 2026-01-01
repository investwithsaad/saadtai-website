import type { Metadata } from "next"
import Script from "next/script"
import { ScrollToTop } from "@/components/ScrollToTop"
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
  title: "Find Off-Market Multifamily Deals | Invest with Saad",
  description: "Learn how to stop competing for the same seller leads as other multifamily investors. Find off-market deals without PropStream, mailers, or cold calling.",
  robots: "noindex, nofollow",
}

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${lora.variable}`}>
      <head>
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
      </head>
      <body className="bg-white flex flex-col min-h-screen">
        <ScrollToTop />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  )
}
