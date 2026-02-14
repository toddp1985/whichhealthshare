import Link from 'next/link'
import { loadAllMinistries } from '@/lib/data'
import StarRating from '@/components/common/StarRating'
import { generateBreadcrumb } from '@/lib/schema'

export const metadata = {
  title: 'All 16 Plan Reviews 2026 — WhichHealthShare',
  description: 'Read detailed reviews of all 16 health sharing plans, CrowdHealth crowdfunding, and Presidio insurance. Verified 2026 pricing and honest pros/cons.',
  alternates: { canonical: '/reviews' },
}

export default function ReviewsIndexPage() {
  const ministries = loadAllMinistries()
  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Reviews', url: '/reviews' }
  ])

  const healthShares = ministries.filter(m => m.type === 'healthshare')
  const crowdhealth = ministries.find(m => m.slug === 'crowdhealth')
  const presidio = ministries.find(m => m.slug === 'presidio-healthcare')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="section-narrow py-12">
        <h1 className="font-serif font-bold text-5xl mb-4 text-center">Plan Reviews</h1>
        <p className="text-lg text-center text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto">
          Detailed reviews of all {ministries.length} health sharing plans and alternatives with verified 2026 pricing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {healthShares.map(ministry => (
            <Link
              key={ministry.slug}
              href={`/reviews/${ministry.slug}`}
              className="card hover:shadow-lg transition p-6"
            >
              <h2 className="font-serif font-bold text-xl mb-2 text-[var(--color-accent)]">
                {ministry.name}
              </h2>
              <StarRating rating={ministry.rating} />
              <p className="text-sm text-[var(--color-text-muted)] mt-2">{ministry.memberCount}</p>
              <div className="bg-blue-50 rounded-lg p-3 mt-3 mb-3">
                <p className="font-serif font-bold text-lg text-blue-600">
                  ${ministry.plans[0]?.monthlyRange?.individual?.min}-${ministry.plans[0]?.monthlyRange?.individual?.max}/mo
                </p>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)]">{ministry.bestFor}</p>
            </Link>
          ))}
        </div>

        <h2 className="font-serif font-bold text-2xl mb-4">Other Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {crowdhealth && (
            <Link href="/reviews/crowdhealth" className="card-coral block">
              <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-2">Crowdfunding</p>
              <h3 className="font-serif font-bold text-xl mb-2">{crowdhealth.name}</h3>
              <StarRating rating={crowdhealth.rating} />
              <p className="text-sm text-[var(--color-text-muted)] mt-1 mb-3">{crowdhealth.memberCount}</p>
              <p className="text-sm text-[var(--color-text-secondary)] mb-3">~$140/mo (avg under 55)</p>
              <p className="text-sm font-bold text-[var(--color-primary)]">{crowdhealth.bestFor}</p>
            </Link>
          )}

          {presidio && (
            <Link href="/reviews/presidio-healthcare" className="card-gold block">
              <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-2">Insurance</p>
              <h3 className="font-serif font-bold text-xl mb-2">{presidio.name}</h3>
              <StarRating rating={presidio.rating} />
              <p className="text-sm text-[var(--color-text-muted)] mt-1 mb-3">{presidio.memberCount}</p>
              <p className="text-sm text-[var(--color-text-secondary)] mb-3">$300-$600/mo (guaranteed coverage)</p>
              <p className="text-sm font-bold text-[var(--color-primary)]">{presidio.bestFor}</p>
            </Link>
          )}
        </div>

        <div className="mt-12 p-6 card bg-blue-50 text-center">
          <h3 className="font-serif font-bold text-xl mb-2">Not sure which plan is right?</h3>
          <p className="text-[var(--color-text-secondary)] mb-4">Take our quick 6-question quiz to get personalized recommendations.</p>
          <Link href="/quiz" className="btn btn-primary">
            Start the Quiz →
          </Link>
        </div>
      </div>
    </>
  )
}
