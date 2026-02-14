import { loadAllMinistries } from '@/lib/data'
import Link from 'next/link'
import StarRating from '@/components/common/StarRating'
import { generateBreadcrumb, generateReviewSchema } from '@/lib/schema'
import { buildMinistryLink } from '@/lib/affiliate'

export async function generateStaticParams() {
  const ministries = loadAllMinistries()
  return ministries.map(m => ({
    slug: m.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const ministries = loadAllMinistries()
  const featured = ministries.find(m => m.slug === params.slug)

  return {
    title: featured ? `${featured.name} Review 2026 — WhichHealthShare` : 'Reviews',
    description: featured ? `Detailed review of ${featured.name} with pricing, coverage, ratings, and comparisons. Updated February 2026.` : 'Health sharing reviews',
    alternates: {
      canonical: `/reviews/${params.slug}`,
    },
  }
}

export default function ReviewsPage({ params }: { params: { slug: string } }) {
  const ministries = loadAllMinistries()
  const featured = ministries.find(m => m.slug === params.slug)

  // Fallback if plan not found
  if (!featured) {
    return (
      <div className="section-narrow pt-8 text-center">
        <h1 className="font-serif font-bold text-4xl mb-4">Plan Not Found</h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-8">
          The review you're looking for doesn't exist.
        </p>
        <Link href="/reviews" className="btn btn-primary">
          Back to Reviews →
        </Link>
      </div>
    )
  }

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Reviews', url: '/reviews' },
    { name: featured.name, url: `/reviews/${featured.slug}` }
  ])

  const reviewSchema = generateReviewSchema(featured)

  // Get all ministries except the featured one
  const allOthers = ministries.filter(m => m.slug !== params.slug)
  const healthShares = allOthers.filter(m => m.type === 'healthshare')
  const crowdhealth = allOthers.find(m => m.slug === 'crowdhealth')
  const presidio = allOthers.find(m => m.slug === 'presidio-healthcare')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="section-narrow pt-8">
        <nav className="text-sm text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          {' / '}
          <Link href="/reviews" className="hover:underline">Reviews</Link>
          {' / '}
          <span className="text-[var(--color-text)]">{featured.name}</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">{featured.name} Review 2026</h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-8">
          In-depth review with verified pricing, coverage details, and honest pros and cons.
        </p>

        {featured && (
          <div className="mb-12 p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg">
            <h2 className="font-serif font-bold text-3xl mb-6">{featured.name}</h2>
            <div className="flex justify-between items-start mb-6">
              <div>
                <StarRating rating={featured.rating} />
                <p className="text-sm text-[var(--color-text-secondary)] mt-2">{featured.memberCount}</p>
              </div>
            </div>
            <p className="text-sm font-bold text-blue-700 mb-4">
              Best for: {featured.bestFor}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="text-xs text-[var(--color-text-muted)]">Monthly Cost</p>
                <p className="font-serif font-bold text-lg text-blue-600">
                  ${featured.plans[0]?.monthlyRange?.individual?.min}-${featured.plans[0]?.monthlyRange?.individual?.max}
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="text-xs text-[var(--color-text-muted)]">Coverage Cap</p>
                <p className="font-serif font-bold text-sm">{featured.plans[0]?.coverageCap || 'Unlimited'}</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="text-xs text-[var(--color-text-muted)]">Pre-Existing Wait</p>
                <p className="font-serif font-bold text-sm">{featured.preExisting.waitingPeriod || 'None'}</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="text-xs text-[var(--color-text-muted)]">Faith Requirement</p>
                <p className="font-serif font-bold text-sm">{featured.faithRequirement === 'secular' ? 'None' : featured.faithRequirement}</p>
              </div>
            </div>

            <a
              href={buildMinistryLink(featured.affiliateLink || featured.website, featured.slug, 'review')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-block"
            >
              Visit {featured.name} →
            </a>
          </div>
        )}

        {/* AI Summary */}
        <div className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">Overview</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">{featured.aiSummary}</p>
        </div>

        {/* Key Facts */}
        <div className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">Key Facts</h2>
          <ul className="space-y-2">
            {featured.aiKeyFacts.map((fact, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="text-blue-600 mt-0.5">&#10003;</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="card border-l-4 border-green-500">
            <h3 className="font-serif font-bold text-lg mb-3 text-green-700">Pros</h3>
            <ul className="space-y-2">
              {featured.pros.map((pro, i) => (
                <li key={i} className="text-sm flex items-start gap-2">
                  <span className="text-green-500">+</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card border-l-4 border-red-500">
            <h3 className="font-serif font-bold text-lg mb-3 text-red-700">Cons</h3>
            <ul className="space-y-2">
              {featured.cons.map((con, i) => (
                <li key={i} className="text-sm flex items-start gap-2">
                  <span className="text-red-500">-</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Coverage Details */}
        <div className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">What's Covered</h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {Object.entries(featured.plans[0]?.includes || {}).map(([key, value]) => (
              <div key={key} className={`text-center p-3 rounded-lg border ${value ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                <p className="text-lg mb-1">{value ? '✓' : '✗'}</p>
                <p className="text-xs capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="font-serif font-bold text-2xl mb-6">Other Options</h2>

        <div className="mb-12">
          <h3 className="font-serif font-bold text-xl mb-4">Health Sharing Ministries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthShares.slice(0, 6).map((ministry) => (
              <Link
                key={ministry.slug}
                href={`/reviews/${ministry.slug}`}
                className="card hover:shadow-lg transition"
              >
                <h3 className="font-serif font-bold text-lg mb-2">{ministry.name}</h3>
                <div className="flex justify-between items-start mb-4">
                  <StarRating rating={ministry.rating} />
                  <span className="text-sm text-[var(--color-text-muted)]">{ministry.memberCount}</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                  From ${ministry.plans[0]?.monthlyRange?.individual?.min}/mo
                </p>
                <p className="text-sm font-bold text-[var(--color-primary)]">{ministry.bestFor}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {crowdhealth && (
            <div>
              <h3 className="font-serif font-bold text-xl mb-4">Crowdfunding Alternative</h3>
              <Link
                href="/reviews/crowdhealth"
                className="card-coral block"
              >
                <h4 className="font-serif font-bold text-lg mb-2">{crowdhealth.name}</h4>
                <StarRating rating={crowdhealth.rating} />
                <p className="text-sm text-[var(--color-text-muted)] mt-1 mb-3">{crowdhealth.memberCount}</p>
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">~$140/mo (avg under 55)</p>
                <p className="text-sm font-bold text-[var(--color-primary)]">{crowdhealth.bestFor}</p>
              </Link>
            </div>
          )}

          {presidio && (
            <div>
              <h3 className="font-serif font-bold text-xl mb-4">Insurance Alternative</h3>
              <Link
                href="/reviews/presidio-healthcare"
                className="card-gold block"
              >
                <h4 className="font-serif font-bold text-lg mb-2">{presidio.name}</h4>
                <StarRating rating={presidio.rating} />
                <p className="text-sm text-[var(--color-text-muted)] mt-1 mb-3">{presidio.memberCount}</p>
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">$300-$600/mo (guaranteed)</p>
                <p className="text-sm font-bold text-[var(--color-primary)]">{presidio.bestFor}</p>
              </Link>
            </div>
          )}
        </div>

        {/* Related Content */}
        <div className="bg-[var(--color-primary-lighter)] p-6 rounded-lg mb-8 text-center">
          <p className="text-[var(--color-text)] mb-4">
            Not sure which plan is right for you?
          </p>
          <Link href="/quiz" className="btn btn-primary">Take Our Free Quiz →</Link>
        </div>
      </div>
    </>
  )
}
