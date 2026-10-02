import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Disable image optimization on serverless to avoid sharp issues
    unoptimized: true,
  },
  reactCompiler: false,
}

export default nextConfig
