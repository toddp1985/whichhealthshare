import { loadAllMinistries } from '@/lib/data'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const ministries = loadAllMinistries()
  const baseUrl = 'https://whichhealthshare.com'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quiz`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclosure`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // Review pages
  const reviewPages: MetadataRoute.Sitemap = ministries.map(m => ({
    url: `${baseUrl}/reviews/${m.slug}`,
    lastModified: new Date(m.lastUpdated),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Comparison pages
  const comparisonPages: MetadataRoute.Sitemap = [
    'chm-vs-sedera',
    'zion-vs-medi-share',
    'faith-based-vs-secular-health-sharing',
    'crowdhealth-vs-aca-insurance',
    'health-sharing-vs-presidio-insurance',
    'samaritan-vs-crowdhealth',
    'short-term-vs-long-term-health-sharing',
  ].map(slug => ({
    url: `${baseUrl}/comparisons/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Blog pages (dynamic from filesystem)
  const blogPages: MetadataRoute.Sitemap = [
    '/blog',
    '/blog/health-sharing-vs-insurance-2026',
    '/blog/left-health-insurance-crowdhealth',
    '/blog/compared-15-health-sharing-plans',
    '/blog/non-religious-health-sharing-options',
    '/blog/hidden-costs-health-sharing-2026',
    '/blog/2026-health-sharing-what-changed',
    '/blog/hidden-cost-health-sharing',
    '/blog/health-sharing-hsa-tax-strategy',
    '/blog/crowdhealth-vs-health-sharing',
    '/blog/5-questions-before-joining',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...reviewPages, ...comparisonPages, ...blogPages]
}
