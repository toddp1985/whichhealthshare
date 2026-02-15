import Link from 'next/link'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
}

// Featured blog posts (manually curated from recent posts)
const featuredPosts: BlogPost[] = [
  {
    slug: '2026-health-sharing-what-changed',
    title: 'What Changed in Health Sharing (2026)',
    excerpt: 'New regulations, pricing shifts, and what it means for your coverage.',
    date: 'Feb 2026',
    category: 'Trends'
  },
  {
    slug: 'crowdhealth-vs-health-sharing',
    title: 'CrowdHealth vs Health Sharing',
    excerpt: 'Cost comparison, coverage differences, and which model wins for your situation.',
    date: 'Feb 2026',
    category: 'Comparison'
  },
  {
    slug: 'non-religious-health-sharing-options',
    title: 'Secular Health Sharing Options (No Faith Required)',
    excerpt: 'Faith-free health sharing plans that work for everyone, regardless of beliefs.',
    date: 'Feb 2026',
    category: 'Options'
  },
  {
    slug: 'health-sharing-freelancers-self-employed-2026',
    title: 'Health Sharing for Freelancers & Self-Employed',
    excerpt: 'Plans that work with variable income, no employer requirements.',
    date: 'Feb 2026',
    category: 'Guide'
  }
]

export default function BlogCarousel() {
  return (
    <section className="section py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-3 text-center">Latest Articles</h2>
          <p className="text-center text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Deep dives into health sharing plans, coverage gaps, and real-world scenarios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex-1 flex flex-col">
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold mb-2">
                    {post.category}
                  </span>
                  <p className="text-xs text-[var(--color-text-muted)]">{post.date}</p>
                </div>
                <h3 className="font-serif font-bold text-lg mb-3 group-hover:text-blue-600 transition leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-800">
                  Read Article →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}
