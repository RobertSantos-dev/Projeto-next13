/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['assets.example.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com/api',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
