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
      },
      // Blog redirects: old slugs → current slugs
      {
        source: '/blog/health-sharing-for-freelancers',
        destination: '/blog/health-sharing-freelancers-self-employed-2026',
        permanent: true,
      },
      {
        source: '/blog/health-sharing-under-300',
        destination: '/blog/health-plans-under-300-monthly',
        permanent: true,
      },
      {
        source: '/blog/health-sharing-chronic-illness',
        destination: '/blog/health-sharing-chronic-illness-10-year-cost',
        permanent: true,
      },
      {
        source: '/blog/health-sharing-vs-insurance',
        destination: '/blog/health-sharing-vs-insurance-2026',
        permanent: true,
      },
      {
        source: '/blog/health-sharing-vs-aca',
        destination: '/blog/health-sharing-vs-aca-cost-comparison-2026',
        permanent: true,
      },
      {
        source: '/blog/health-sharing-vs-presidio-insurance',
        destination: '/comparisons/health-sharing-vs-presidio-insurance',
        permanent: true,
      },
      {
        source: '/blog/crowdhealth-vs-aca-insurance',
        destination: '/comparisons/crowdhealth-vs-aca-insurance',
        permanent: true,
      },
      {
        source: '/blog/samaritan-vs-crowdhealth',
        destination: '/comparisons/samaritan-vs-crowdhealth',
        permanent: true,
      },
      {
        source: '/blog/faith-based-vs-secular',
        destination: '/comparisons/faith-based-vs-secular-health-sharing',
        permanent: true,
      },
      {
        source: '/blog/family-health-sharing-plans',
        destination: '/blog/family-health-sharing-plans-4-members',
        permanent: true,
      },
      {
        source: '/blog/health-sharing-multigenerational-families',
        destination: '/blog/health-sharing-family-plans-multigenerational',
        permanent: true,
      },
      {
        source: '/blog/switching-from-insurance-to-health-sharing',
        destination: '/blog/switching-insurance-health-sharing-guide',
        permanent: true,
      },
      {
        source: '/blog/health-sharing-waiting-periods',
        destination: '/blog/health-sharing-waiting-periods-explained',
        permanent: true,
      },
      {
        source: '/blog/health-sharing-state-regulations',
        destination: '/blog/health-sharing-state-regulations-guide',
        permanent: true,
      },
      {
        source: '/blog/health-sharing-prescriptions',
        destination: '/blog/prescriptions-health-sharing-coverage-gaps',
        permanent: true,
      },
      {
        source: '/blog/left-insurance-for-crowdhealth',
        destination: '/blog/left-health-insurance-crowdhealth',
        permanent: true,
      },
      {
        source: '/blog/compared-15-plans',
        destination: '/blog/compared-15-health-sharing-plans',
        permanent: true,
      },
      {
        source: '/blog/chm-vs-sedera',
        destination: '/comparisons/chm-vs-sedera',
        permanent: true,
      },
      {
        source: '/blog/zion-vs-medi-share',
        destination: '/comparisons/zion-vs-medi-share',
        permanent: true,
      },
      {
        source: '/blog/health-sharing-small-business',
        destination: '/blog/health-sharing-small-business-plans-2026',
        permanent: true,
      },
      {
        source: '/blog/health-sharing-self-employed-tax',
        destination: '/blog/self-employed-health-sharing-tax-strategy',
        permanent: true,
      },
      {
        source: '/blog/health-sharing-remote-workers',
        destination: '/blog/health-sharing-remote-workers-contractors-2026',
        permanent: true,
      },
      {
        source: '/blog/short-term-vs-long-term-strategies',
        destination: '/comparisons/short-term-vs-long-term-health-sharing',
        permanent: true,
      },
      {
        source: '/blog/hidden-costs-nobody-talks-about',
        destination: '/blog/hidden-costs-health-sharing-2026',
        permanent: true,
      },
      // Bare /comparisons has no index page
      {
        source: '/comparisons',
        destination: '/',
        permanent: false,
      },
    ]
  }
}

module.exports = nextConfig
