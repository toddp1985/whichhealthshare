/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'healthsharingcompare.com'
          }
        ],
        destination: 'https://whichhealthshare.com/:path*',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
