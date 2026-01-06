import { Container, Heading, Text, Section } from '@/components/ui'
import { Breadcrumb } from '@/components/breadcrumb'
import { COLORS as BRAND_COLORS } from '@/lib/colors'
import { createPageMetadata } from '@/lib/metadata-factory'

export const metadata = createPageMetadata({
  title: 'Terms of Service | Saad Tai',
  description: 'Review our terms of service and important disclaimers for using our website and services.',
  path: '/terms-of-service',
})

export default function TermsOfService() {
  return (
    <>
      {/* Breadcrumb - includes schema */}
      <Breadcrumb items={[{ label: 'Terms of Service' }]} />

      {/* Hero Section */}
      <Section className="pt-0 pb-0 md:py-0 overflow-hidden" style={{ backgroundColor: BRAND_COLORS.primary }}>
        <Container>
          <div className="flex flex-col items-center justify-center min-h-[300px] py-16 text-center">
            <Heading size="h1" color="white" className="mb-4">
              Terms of Service
            </Heading>
            <Text size="lg" className="text-white/90 max-w-3xl">
              Last Updated: September 8, 2024
            </Text>
          </div>
        </Container>
      </Section>

      {/* Content Section */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto prose prose-lg">
            {/* Acceptance & Eligibility */}
            <div className="mb-12">
              <Heading size="h2" className="text-olive-900 mb-4">
                Acceptance & Eligibility
              </Heading>
              <Text className="text-gray-700 mb-4">
                By accessing and using this website, you agree to be bound by these Terms of Service. These terms govern your use of Saad Tai Real Estate's website and services.
              </Text>
              <Text className="text-gray-700 mb-4">
                Our services are intended for individuals aged 18 years or older and business entities. By using our services, you represent and warrant that you meet these eligibility requirements.
              </Text>
              <Text className="text-gray-700 font-semibold">
                Important: We do not guarantee approval for funding or financing as each request is subject to lender criteria and evaluation.
              </Text>
            </div>

            {/* Services Offered */}
            <div className="mb-12">
              <Heading size="h2" className="text-olive-900 mb-4">
                Services Offered
              </Heading>
              <Text className="text-gray-700 mb-4">
                Saad Tai Real Estate provides real estate advisory services including, but not limited to:
              </Text>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Funding assessments and consultations</li>
                <li>Access to various financial products</li>
                <li>Lender liaison and coordination services</li>
                <li>Financial guidance and education</li>
              </ul>
              <Text className="text-gray-700">
                Please note: Saad Tai Real Estate is not a mortgage lender or financial institution. We provide real estate advisory and brokerage services.
              </Text>
            </div>

            {/* User Obligations */}
            <div className="mb-12">
              <Heading size="h2" className="text-olive-900 mb-4">
                User Obligations
              </Heading>
              <Text className="text-gray-700 mb-4">
                As a client of Saad Tai Real Estate, you agree to:
              </Text>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide accurate, complete, and truthful information</li>
                <li>Respond promptly to our requests for additional information or documentation</li>
                <li>Comply with all applicable laws and lender requirements</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not misrepresent your financial situation or credentials</li>
              </ul>
            </div>

            {/* Important Disclaimers */}
            <div className="mb-12">
              <Heading size="h2" className="text-olive-900 mb-4">
                Important Disclaimers
              </Heading>
              <Text className="text-gray-700 mb-4">
                <strong>Not Real Estate, Legal, or Tax Advice:</strong> The information and advisory services provided by Saad Tai Real Estate are for general informational purposes only and do not constitute legal or tax advice. We strongly recommend that you consult with qualified professionals—including attorneys and tax specialists—before making any decisions based on our recommendations or information.
              </Text>
              <Text className="text-gray-700 mb-4">
                <strong>No Guarantee of Sale:</strong> Saad Tai Real Estate makes no warranties or guarantees regarding the sale or acquisition of property. All real estate transactions are subject to market conditions, buyer/seller agreement, and successful closing.
              </Text>
              <Text className="text-gray-700">
                <strong>Market Conditions:</strong> Interest rates, terms, and availability of financial products are subject to change based on market conditions and lender policies. Information provided may not reflect real-time market conditions.
              </Text>
            </div>

            {/* Liability & Compensation */}
            <div className="mb-12">
              <Heading size="h2" className="text-olive-900 mb-4">
                Compensation & Liability
              </Heading>
              <Text className="text-gray-700 mb-4">
                <strong>How We Are Compensated:</strong> Saad Tai Real Estate receives commissions from the sale or purchase of property in accordance with New York real estate licensing regulations. Our compensation is contingent on successful transaction closing.
              </Text>
              <Text className="text-gray-700 mb-4">
                <strong>Limitation of Liability:</strong> To the fullest extent permitted by applicable law, Saad Tai Realtor and its agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or loss of profits, arising out of or relating to your use of our services, even if we have been advised of the possibility of such damages.
              </Text>
              <Text className="text-gray-700">
                <strong>Indemnification:</strong> You agree to indemnify and hold harmless Saad Tai Realtor from any claims, damages, or costs arising from your violation of these Terms of Service or your use of our services.
              </Text>
            </div>

            {/* Data Protection & Privacy */}
            <div className="mb-12">
              <Heading size="h2" className="text-olive-900 mb-4">
                Data Protection & Privacy
              </Heading>
              <Text className="text-gray-700 mb-4">
                Your privacy and the confidentiality of your information are important to us. Client information is maintained in accordance with our Privacy Policy and all applicable data protection laws.
              </Text>
              <Text className="text-gray-700">
                <strong>Security Disclaimer:</strong> While we implement security measures to protect your information, we cannot guarantee complete security as no method of transmission over the internet or electronic storage is 100% secure. You use our services at your own risk in this regard.
              </Text>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <Heading size="h2" className="text-olive-900 mb-4">
                Intellectual Property Rights
              </Heading>
              <Text className="text-gray-700">
                All content on our website, including text, graphics, logos, images, and software, is the property of Saad Tai Realtor or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or transmit any content without our prior written permission.
              </Text>
            </div>

            {/* Termination & Modifications */}
            <div className="mb-12">
              <Heading size="h2" className="text-olive-900 mb-4">
                Termination & Modifications
              </Heading>
              <Text className="text-gray-700 mb-4">
                <strong>Right to Terminate:</strong> Saad Tai Realtor reserves the right to suspend or terminate your access to our services at any time, with or without cause, and with or without notice if you violate these Terms of Service or engage in conduct that violates applicable law.
              </Text>
              <Text className="text-gray-700">
                <strong>Changes to Terms:</strong> We reserve the right to modify these Terms of Service at any time. Material changes will be communicated to you with reasonable notice. Your continued use of our services constitutes your acceptance of the modified terms.
              </Text>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <Heading size="h2" className="text-olive-900 mb-4">
                Governing Law & Jurisdiction
              </Heading>
              <Text className="text-gray-700">
                These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction where Saad Tai Realtor is located, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts in that location for the resolution of any disputes.
              </Text>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <Heading size="h2" className="text-olive-900 mb-4">
                Contact Us
              </Heading>
              <Text className="text-gray-700 mb-2">
                If you have questions about these Terms of Service, please contact us at:
              </Text>
              <Text className="text-gray-700">
                <strong>Email:</strong> saadtherealtor1@gmail.com<br />
                <strong>Phone:</strong> (518) 667-9351
              </Text>
            </div>

            {/* Final */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <Text className="text-gray-600 text-sm">
                By using Saad Tai Realtor's website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </Text>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
