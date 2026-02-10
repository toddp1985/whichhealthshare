import { loadAllMinistries } from '@/lib/data'
import Link from 'next/link'
import StarRating from '@/components/common/StarRating'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const ministries = loadAllMinistries()
  const featured = ministries.find(m => m.slug === params.slug)
  
  return {
    title: featured ? `${featured.name} Review 2026 — WhichHealthShare` : 'Reviews',
    description: featured ? `Detailed review of ${featured.name} with pricing, coverage, ratings, and comparisons. Updated February 2026.` : 'Health sharing reviews',
  }
}

export default function ReviewsPage({ params }: { params: { slug: string } }) {
  const ministries = loadAllMinistries()
  const featured = ministries.find(m => m.slug === params.slug)
  
  // Get all ministries except the featured one
  const allOthers = ministries.filter(m => m.slug !== params.slug)
  const healthShares = allOthers.filter(m => m.type === 'healthshare')
  const crowdhealth = allOthers.find(m => m.slug === 'crowdhealth')
  const presidio = allOthers.find(m => m.slug === 'presidio-healthcare')

  return (
    <div className="section-narrow pt-8">
      <h1 className="font-serif font-bold text-4xl mb-4">Health Sharing Reviews</h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">
        In-depth reviews of health sharing ministries, crowdfunding alternatives, and insurance options. Compare plans to find your best fit.
      </p>

      {/* Featured Review */}
      {featured && (
        <div className="mb-12 p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg">
          <h2 className="font-serif font-bold text-3xl mb-6">Featured: {featured.name}</h2>
          <div className="flex justify-between items-start mb-6">
            <div>
              <StarRating rating={featured.rating} />
              <p className="text-sm text-[var(--color-text-secondary)] mt-2">{featured.memberCount}</p>
            </div>
          </div>
          <p className="text-sm font-bold text-blue-700 mb-4">
            Best for: {featured.bestFor}
          </p>
          <Link
            href={featured.website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary inline-block"
          >
            Visit {featured.name} →
          </Link>
        </div>
      )}

      <h2 className="font-serif font-bold text-2xl mb-6">Other Options</h2>

      <div className="mb-12">
        <h2 className="font-serif font-bold text-2xl mb-6">Health Sharing Ministries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {healthShares.map((ministry) => (
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

      {crowdhealth && (
        <div className="mb-12">
          <h2 className="font-serif font-bold text-2xl mb-6">Crowdfunding Alternative</h2>
          <Link
            href={`/reviews/crowdhealth`}
            className="card-coral p-6 hover:shadow-lg transition"
          >
            <h3 className="font-serif font-bold text-lg mb-2">{crowdhealth.name}</h3>
            <div className="flex justify-between items-start mb-4">
              <StarRating rating={crowdhealth.rating} />
              <span className="text-sm text-[var(--color-text-muted)]">{crowdhealth.memberCount}</span>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] mb-3">
              ~$140/mo (avg under 55)
            </p>
            <p className="text-sm font-bold text-[var(--color-primary)]">{crowdhealth.bestFor}</p>
          </Link>
        </div>
      )}

      {presidio && (
        <div className="mb-12">
          <h2 className="font-serif font-bold text-2xl mb-6">Insurance Alternative</h2>
          <Link
            href={`/reviews/presidio-healthcare`}
            className="card-gold p-6 hover:shadow-lg transition"
          >
            <h3 className="font-serif font-bold text-lg mb-2">{presidio.name}</h3>
            <div className="flex justify-between items-start mb-4">
              <StarRating rating={presidio.rating} />
              <span className="text-sm text-[var(--color-text-muted)]">{presidio.memberCount}</span>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] mb-3">
              $300-$600/mo (guaranteed)
            </p>
            <p className="text-sm font-bold text-[var(--color-primary)]">{presidio.bestFor}</p>
          </Link>
        </div>
      )}
    </div>
  )
}
