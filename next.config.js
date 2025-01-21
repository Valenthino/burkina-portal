/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // This will ignore ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // This will ignore TypeScript errors during build
  },
  experimental: {
    turbo: {
      resolveAlias: {
        '@': '.',
        '@/components': ['./components', './app/components']
      }
    }
  }
}

module.exports = nextConfig 