/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // This will ignore ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // This will ignore TypeScript errors during build
  },
  output: 'standalone',
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'burkina-portal.gov.bf']
    },
    turbo: {
      resolveAlias: {
        '@': '.',
        '@/components': ['./components', './app/components']
      }
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'www.presidencedufaso.bf',
      },
      {
        protocol: 'https',
        hostname: 'presidencedufaso.bf',
      },
      {
        protocol: 'http',
        hostname: 'www.presidencedufaso.bf',
      },
      {
        protocol: 'http',
        hostname: 'presidencedufaso.bf',
      }
    ],
    domains: ['www.presidencedufaso.bf', 'presidencedufaso.bf'],
  },
  // Optimize build output
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  // Handle CORS for API routes
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ]
  }
}

module.exports = nextConfig 