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

  // Answer pages (create stubs for these)
  const answerPages: MetadataRoute.Sitemap = [
    '/answers/what-is-health-sharing',
    '/answers/best-health-sharing-plan',
    '/answers/pre-existing-conditions',
    '/answers/no-church-requirement',
    '/answers/vs-insurance',
    '/answers/crowdhealth-vs-health-sharing',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...reviewPages, ...answerPages]
}
