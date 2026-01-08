import type { Metadata } from 'next'
import { Container, Heading, Text, Section } from '@/components/ui'
import { Breadcrumb } from '@/components/breadcrumb'
import { COLORS as BRAND_COLORS } from '@/lib/colors'
import { createPageMetadata } from '@/lib/metadata-factory'

export const metadata: Metadata = createPageMetadata({
  title: 'Privacy Policy | Saad Tai',
  description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
  path: '/privacy-policy',
})

export default function PrivacyPolicy() {
  return (
    <>
      {/* Breadcrumb - includes schema */}
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

      {/* Hero Section */}
      <Section className="pt-0 pb-0 md:py-0 overflow-hidden" style={{ backgroundColor: BRAND_COLORS.primary }}>
        <Container>
          <div className="flex flex-col items-center justify-center min-h-[300px] py-16 text-center">
            <Heading size="h1" color="white" className="mb-4">
              Privacy Policy
            </Heading>
            <Text size="lg" className="text-white/90 max-w-3xl">
              Effective Date: June 30, 2025
            </Text>
          </div>
        </Container>
      </Section>

      {/* Content Section */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto prose prose-lg">
            {/* Introduction */}
            <div className="mb-12">
              <Text className="text-gray-700 mb-4">
                Property Offerz LLC ("we", "us", or "our") operates the Saad Tai website and services (the "Service"). This Privacy Policy explains what information we collect, how we use it, and the choices you have.
              </Text>
              <Text className="text-gray-700">
                By using the Service, you agree to the collection and use of information in accordance with this policy. Unless defined here, terms have the same meaning as in our Terms of Service.
              </Text>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <Heading size="h2" className="text-olive-900 mb-4">
                1. Information We Collect
              </Heading>

              <Heading size="h4" className="text-olive-800 mb-3">Personal Data</Heading>
              <Text className="text-gray-700 mb-4">
                We collect information you provide directly, such as:
              </Text>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Email address</li>
                <li>First and last name</li>
                <li>Phone number</li>
                <li>Address, City, State, ZIP/Postal code</li>
                <li>Other details you choose to share</li>
              </ul>

              <Heading size="h4" className="text-olive-800 mb-3">Usage Data</Heading>
              <Text className="text-gray-700 mb-4">
                We automatically collect data about how the Service is used, including IP address, browser type and version, pages visited, time and date of visits, time spent, device identifiers, and other diagnostics.
              </Text>

              <Heading size="h4" className="text-olive-800 mb-3">Location Data</Heading>
              <Text className="text-gray-700 mb-4">
                With permission, we may collect and store location information to provide features and improve the Service. You can enable or disable location services in your device settings.
              </Text>

              <Heading size="h4" className="text-olive-800 mb-3">Cookies & Tracking</Heading>
              <Text className="text-gray-700">
                We use cookies and similar technologies to operate the Service, remember preferences, enhance security, and analyze usage. You can refuse cookies or receive alerts in your browser settings; some features may not function properly if cookies are disabled.
              </Text>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <Heading size="h2" className="text-olive-900 mb-4">
                2. Use of Data
              </Heading>
              <Text className="text-gray-700 mb-4">
                We use collected data to:
              </Text>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide and maintain the Service</li>
                <li>Notify you about changes</li>
                <li>Enable interactive features</li>
                <li>Provide customer support</li>
                <li>Monitor and analyze usage</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Send news and offers unless you opt out</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <Heading size="h2" className="text-olive-900 mb-4">
                3. Disclosure of Data
              </Heading>
              <Text className="text-gray-700 mb-4">
                We may disclose Personal Data:
              </Text>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>To comply with legal obligations</li>
                <li>To protect the rights and property of Property Offerz LLC</li>
                <li>To investigate possible wrongdoing</li>
                <li>To protect users or the public</li>
                <li>To protect against legal liability</li>
              </ul>

              <Heading size="h4" className="text-olive-800 mb-3">Service Providers</Heading>
              <Text className="text-gray-700 mb-6">
                We may employ third-party companies to facilitate the Service, perform tasks, or analyze usage. They have access to Personal Data only to perform these tasks and must not use it for other purposes.
              </Text>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <Heading size="h2" className="text-olive-900 mb-4">
                4. Security of Data
              </Heading>
              <Text className="text-gray-700">
                We strive to use commercially acceptable means to protect Personal Data. No method of transmission over the Internet or electronic storage is 100% secure.
              </Text>
            </div>

            {/* Your Privacy Rights */}
            <div className="mb-12">
              <Heading size="h2" className="text-olive-900 mb-4">
                5. Do Not Track (CalOPPA)
              </Heading>
              <Text className="text-gray-700">
                We do not support "Do Not Track" signals. You can enable or disable DNT in your browser settings.
              </Text>
            </div>

            {/* Cookies & Tracking */}
            <div className="mb-12">
              <Heading size="h2" className="text-olive-900 mb-4">
                6. Analytics & Cookies
              </Heading>
              <Text className="text-gray-700 mb-4">
                We use cookies for session operation, preferences, and security. We also use analytics services and tracking technologies to help understand usage and measure marketing effectiveness.
              </Text>
              <Text className="text-gray-700">
                For details on Google's practices, see <a href="https://policies.google.com/privacy?hl=en" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>. You can opt out by installing the Google Analytics opt-out browser add-on.
              </Text>
            </div>

            {/* Tracking Tools & Services */}
            <div className="mb-12">
              <Heading size="h2" className="text-olive-900 mb-4">
                7. Tracking Tools and Services
              </Heading>
              <Text className="text-gray-700 mb-6">
                We use the following tracking and analytics services. You can choose whether to allow these services by accepting or declining when prompted on our website.
              </Text>

              <Heading size="h4" className="text-olive-800 mb-3">Meta Pixel (Facebook Conversion Tracking)</Heading>
              <Text className="text-gray-700 mb-4">
                We use Meta Pixel to track conversions, optimize ads, and understand how visitors use our website. This includes tracking form submissions, page views, and user interactions. Meta may use this data to show you relevant ads on Facebook and Instagram.
              </Text>
              <Text className="text-gray-700 mb-6">
                Learn more: <a href="https://www.facebook.com/privacy/explanation" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Meta Privacy Policy</a>
              </Text>

              <Heading size="h4" className="text-olive-800 mb-3">Umami Analytics</Heading>
              <Text className="text-gray-700 mb-6">
                We use Umami Analytics to understand how visitors interact with our website, including pages visited, time spent, and user behavior. Umami is a privacy-focused alternative that does not use cookies to identify users and complies with GDPR.
              </Text>

              <Heading size="h4" className="text-olive-800 mb-3">Microsoft Clarity</Heading>
              <Text className="text-gray-700 mb-6">
                We use Microsoft Clarity to record how visitors use our website, including mouse movements, scrolls, and clicks. This helps us improve user experience and identify technical issues. Clarity does not identify you personally but may collect session recordings.
              </Text>

              <Heading size="h4" className="text-olive-800 mb-3">LinkedIn Insight Tag</Heading>
              <Text className="text-gray-700 mb-6">
                We use the LinkedIn Insight Tag to track conversions and understand the effectiveness of LinkedIn advertising campaigns on our website.
              </Text>

              <Heading size="h4" className="text-olive-800 mb-3">Cookie Consent Preference</Heading>
              <Text className="text-gray-700">
                We store your cookie consent choice in a cookie named "cookie-consent" so we remember whether you have accepted or declined marketing and tracking cookies. This preference is stored for one year.
              </Text>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <Heading size="h2" className="text-olive-900 mb-4">
                8. Links to Other Sites
              </Heading>
              <Text className="text-gray-700">
                Our Service may link to external sites not operated by us. Please review their privacy policies; we are not responsible for third-party practices.
              </Text>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <Heading size="h2" className="text-olive-900 mb-4">
                9. Children's Privacy
              </Heading>
              <Text className="text-gray-700">
                The Service does not address anyone under 18. We do not knowingly collect Personal Data from children. If a child provides data, we will delete it.
              </Text>
            </div>

            {/* Policy Updates */}
            <div className="mb-12">
              <Heading size="h2" className="text-olive-900 mb-4">
                10. Changes to This Policy
              </Heading>
              <Text className="text-gray-700">
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date. Significant changes may be communicated by email or a prominent notice.
              </Text>
            </div>

            {/* Contact Us */}
            <div className="mb-12">
              <Heading size="h2" className="text-olive-900 mb-4">
                11. Contact Us
              </Heading>
              <Text className="text-gray-700 mb-4">
                For questions about this Privacy Policy, please contact:
              </Text>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                <Text className="text-gray-700 mb-2"><strong>Property Offerz LLC</strong></Text>
                <Text className="text-gray-700 mb-2"><strong>Email:</strong> saadtherealtor1@gmail.com</Text>
                <Text className="text-gray-700"><strong>Phone:</strong> (518) 667-9351</Text>
              </div>
              <Text className="text-gray-700">We aim to respond within a reasonable timeframe and in accordance with applicable laws.</Text>
            </div>

            {/* Final */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <Text className="text-gray-600 text-sm">
                By using the Saad Tai website and services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree, please discontinue use of the Service.
              </Text>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
