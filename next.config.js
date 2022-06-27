/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  images: {
    domains: ['localhost', 'diary.chirilovnarcis.ro'],
  },
  async headers() {
    return [
      {
        source: '/fonts/Caudex-Bold.ttf',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/Caudex-Regular.ttf',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
