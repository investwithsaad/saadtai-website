import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
  // Modern output for better performance
  output: 'standalone',

  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Use Turbopack (Next.js 16 default)
  turbopack: {
    resolveAlias: {},
  },
  
  // Optimize images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 90],
    minimumCacheTTL: 31536000, // 1 year
  },
  
  // Enable compression
  compress: true,
  
  // Production optimizations
  productionBrowserSourceMaps: false,
  
  // Configure headers for caching and security
  async headers() {
    return [
      // Security headers for all routes
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://snap.licdn.com https://saadinfo.up.railway.app https://va.vercel-scripts.com https://ddwl4m2hdecbv.cloudfront.net https://assets.calendly.com https://connect.facebook.net https://www.clarity.ms https://widgetbe.com https://capi-automation.s3.us-east-2.amazonaws.com https://scripts.clarity.ms",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.calendly.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data: https://fonts.gstatic.com",
              "connect-src 'self' https://snap.licdn.com https://px.ads.linkedin.com https://saadinfo.up.railway.app https://calendly.com https://assets.calendly.com https://www.facebook.com https://graph.facebook.com https://www.clarity.ms https://q.clarity.ms https://e.clarity.ms https://c.clarity.ms https://widgetbe.com https://capig.datah04.com",
              "frame-src 'self' https://calendly.com https://www.facebook.com https://m.facebook.com",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self' https://calendly.com"
            ].join('; ')
          }
        ],
      },
      // Static asset caching
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // WordPress legacy redirects
      {
        source: "/frequently-asked-questions-faq",
        destination: "/faq",
        permanent: true, // 301 redirect for SEO
      },
      {
        source: "/sample-page",
        destination: "/",
        permanent: true, // 301 redirect to home
      },
      // Old WordPress category/blog pages to new blog
      {
        source: "/category/uncategorized",
        destination: "/blog",
        permanent: true, // 301 redirect for SEO
      },
      {
        source: "/category/:category",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blogs",
        destination: "/blog",
        permanent: true, // 301 redirect for SEO
      },
      {
        source: "/home-valuation",
        destination: "/selling",
        permanent: true,
      },
      {
        source: "/home-sale-calculator",
        destination: "/selling",
        permanent: true,
      },
      // Additional WordPress pages not consolidated into main routes
      {
        source: "/just-listed",
        destination: "/listings",
        permanent: true,
      },
      {
        source: "/just-listed-2",
        destination: "/listings",
        permanent: true,
      },
      {
        source: "/get-your-free-seller-guide",
        destination: "/selling",
        permanent: true,
      },
      {
        source: "/active-listings",
        destination: "/listings",
        permanent: true,
      },
      {
        source: "/property-inquiry-form",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/property-inquiry/:path*",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/niskayuna-homes-for-sale",
        destination: "/listings",
        permanent: true,
      },
      {
        source: "/relocating-to-niskayuna",
        destination: "/buying",
        permanent: true,
      },
      {
        source: "/albany-multi-family-properties",
        destination: "/listings",
        permanent: true,
      },
      {
        source: "/search",
        destination: "/listings",
        permanent: true,
      },
      {
        source: "/neighborhoods-tab",
        destination: "/listings",
        permanent: true,
      },
      {
        source: "/blog-post",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog-posts-archive",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/mortgage-calculator",
        destination: "/buying",
        permanent: true,
      },
      {
        source: "/affordability-calculator",
        destination: "/buying",
        permanent: true,
      },
      // Redirect old /buyer and /seller routes to new intent-based naming
      {
        source: "/buyer",
        destination: "/buying",
        permanent: true,
      },
      {
        source: "/seller",
        destination: "/selling",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/",
        permanent: true,
      },
      {
        source: "/buy-sell",
        destination: "/",
        permanent: true,
      },
      {
        source: "/buyer-seller-tips",
        destination: "/",
        permanent: true,
      },
      {
        source: "/hello-world",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default bundleAnalyzer(nextConfig);
