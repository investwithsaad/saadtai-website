import Image from "next/image"
import { Container, Text, Heading } from "../ui"
import { COLORS } from "@/lib/colors"
import { FooterClient } from "./FooterClient"
import { SocialIcon, FooterLink, FooterSection } from "./FooterComponents"

interface FooterProps {
  recentPosts: Array<{ id: string; title: string }>
  allGuides: Array<{ id: string; title: string }>
}

export function Footer({ recentPosts, allGuides }: FooterProps) {
  return (
    <footer className="text-white font-sans" style={{ backgroundColor: COLORS.primary }} suppressHydrationWarning>
      <Container>
        <div className="pt-16">
          {/* License Badge */}
          <div className="flex justify-center py-8 mb-12">
            <FooterClient />
          </div>

          {/* 4-Column Layout for Uniform Heights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Column 1: Logo, Social, and Contact */}
            <div className="flex flex-col gap-6">
              <Image
                src="/real.png"
                alt="Invest with Saad - multifamily real estate investment services"
                width={120}
                height={60}
                className="h-auto"
              />
              <div className="flex gap-4">
                <SocialIcon href="https://www.facebook.com/profile.php?id=61577367974508" label="Visit us on Facebook" type="facebook" />
                <SocialIcon href="https://www.instagram.com/saadtherealtor/" label="Visit us on Instagram" type="instagram" />
              </div>
              <div>
                <Heading size="h4" color="white" className="mb-4">CONTACT</Heading>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.423 1.157 1.03 2.268 1.87 3.109.84.84 1.952 1.447 3.109 1.87l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <FooterLink href="tel:+15186679351">(518) 667-9351</FooterLink>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <FooterLink href="mailto:saadtherealtor1@gmail.com">saadtherealtor1@gmail.com</FooterLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <FooterSection title="NAVIGATION">
              <div className="space-y-3">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/buying">For Buyers</FooterLink>
                <FooterLink href="/selling">For Sellers</FooterLink>
                <FooterLink href="/vip-investor-list">VIP Investor List</FooterLink>
                <FooterLink href="/calculator">Calculator</FooterLink>
                <FooterLink href="/faq">FAQ</FooterLink>
              </div>
            </FooterSection>

            {/* Column 3: Recent Posts */}
            <FooterSection title="RECENT POSTS">
              <div className="space-y-2">
                {recentPosts.slice(0, 5).map((post) => (
                  <FooterLink key={post.id} href={`/blog/${post.id}`} className="line-clamp-2 text-xs">
                    {post.title}
                  </FooterLink>
                ))}
                <FooterLink href="/blog" className="text-xs font-semibold mt-4 text-secondary" secondary>
                  See more posts →
                </FooterLink>
              </div>
            </FooterSection>

            {/* Column 4: How-To Guides */}
            <FooterSection title="HOW-TO GUIDES">
              <div className="space-y-2">
                {allGuides.slice(0, 5).map((guide) => (
                  <FooterLink key={guide.id} href={`/how-to/${guide.id}`} className="line-clamp-2 text-xs">
                    {guide.title}
                  </FooterLink>
                ))}
                <FooterLink href="/how-to" className="text-xs font-semibold mt-4 text-secondary" secondary>
                  See all guides →
                </FooterLink>
              </div>
            </FooterSection>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-white/20">
            <div className="flex items-center">
              <Text size="sm" color="white" className="opacity-90">
                NY License #10401373295 | FL License #SL3651394 | Realtor®
              </Text>
            </div>

            <div className="flex justify-center">
              <Image
                src="/footersmallimg.png"
                alt="Invest with Saad - multifamily real estate advisory"
                width={40}
                height={40}
                className="h-auto"
              />
            </div>

            <div className="flex justify-end items-center">
              <Text size="sm" color="white">
                Copyright © 2026 Saad Tai | <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
