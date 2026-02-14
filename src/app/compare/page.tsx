import { loadAllMinistries, getCrowdHealth, getPresidio } from '@/lib/data'
import StarRating from '@/components/common/StarRating'
import { buildMinistryLink, buildCrowdHealthLink, buildPresidioLink } from '@/lib/affiliate'
import { generateBreadcrumb } from '@/lib/schema'
import Link from 'next/link'

export const metadata = {
  title: 'Compare All 16 Health Sharing Plans 2026 — WhichHealthShare',
  description: 'Side-by-side comparison of 16 health sharing plans including Zion, Medi-Share, CHM, Sedera, CrowdHealth, and Presidio insurance. All 2026 pricing verified.',
  openGraph: {
    title: 'Compare All 16 Health Sharing Plans',
    description: 'Compare 14 health sharing ministries, CrowdHealth crowdfunding, and Presidio insurance with verified 2026 pricing.'
  }
}

export default function ComparePage() {
  const ministries = loadAllMinistries()
  const crowdhealth = getCrowdHealth()
  const presidio = getPresidio()

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Compare', url: '/compare' }
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="section-narrow pt-8">
        <h1 className="font-serif font-bold text-4xl mb-4">Compare All 16 Plans</h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-8">
          Side-by-side comparison of health sharing ministries, crowdfunding alternatives, and insurance options. Pricing current as of February 2026.
        </p>

        {/* CrowdHealth Banner */}
        {crowdhealth && (
          <div className="card-coral p-6 mb-8">
            <div className="flex justify-between items-start">
              <div>
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">Featured — Crowdfunding</span>
                <h3 className="font-serif font-bold text-xl mt-3 mb-2">{crowdhealth.name}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                  Crowdfunding platform (not health sharing): $60 advocacy + ~$80 crowdfunding = ~$140/mo (avg under 55). No coverage caps. No faith requirement.
                </p>
                <a href={buildCrowdHealthLink('', 'compare')} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit CrowdHealth →</a>
              </div>
              <div className="text-right">
                <StarRating rating={crowdhealth.rating} />
                <p className="text-sm font-bold mt-2">{crowdhealth.memberCount} members</p>
              </div>
            </div>
          </div>
        )}

        {/* Mobile: Stacked Cards | Desktop: Table */}
        {/* Mobile View (hidden on desktop) */}
        <div className="md:hidden space-y-4 mb-8">
          {ministries.map((ministry) => {
            const minPrice = ministry.plans[0]?.monthlyRange?.individual?.min || 0
            const maxPrice = ministry.plans[0]?.monthlyRange?.individual?.max || 0
            
            return (
              <div key={ministry.slug} className="card p-6">
                <div className="mb-4">
                  <h3 className="font-serif font-bold text-xl mb-1">
                    <Link href={`/reviews/${ministry.slug}`} className="text-[var(--color-accent)] hover:underline">
                      {ministry.name}
                    </Link>
                  </h3>
                  <div className="flex items-center gap-2">
                    <StarRating rating={ministry.rating} />
                    <span className="text-xs text-[var(--color-text-muted)]">{ministry.rating}/5</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6 text-sm">
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase mb-1">Monthly Cost (Individual)</p>
                    <p className="font-serif font-bold text-lg text-[var(--color-accent)]">${minPrice}-${maxPrice}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase mb-1">Type</p>
                    <p>{ministry.type === 'healthshare' ? 'Health Sharing Ministry' : 'Insurance'}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase mb-1">Faith Requirement</p>
                    <p>{ministry.faithRequirement === 'secular' ? 'None (Secular)' : 'Christian faith required'}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase mb-1">Pre-Existing Wait</p>
                    <p>{ministry.preExisting.waitingPeriod || 'None'}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase mb-1">Coverage Cap</p>
                    <p>{ministry.plans[0]?.coverageCap || 'Unlimited'}</p>
                  </div>
                </div>

                <a
                  href={buildMinistryLink(ministry.affiliateLink || ministry.website, ministry.slug, 'compare')}
                  className="btn btn-primary w-full h-12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website →
                </a>
              </div>
            )
          })}
        </div>

        {/* Desktop: Table (hidden on mobile) */}
        <div className="hidden md:block overflow-x-auto mb-8">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--color-bg-warm)]">
                <th className="px-4 py-3 font-bold text-left sticky left-0 bg-[var(--color-bg-warm)]">Plan</th>
                <th className="px-4 py-3 font-bold text-left">Type</th>
                <th className="px-4 py-3 font-bold text-left">Individual Price</th>
                <th className="px-4 py-3 font-bold text-left">Faith Req</th>
                <th className="px-4 py-3 font-bold text-left">Pre-Existing</th>
                <th className="px-4 py-3 font-bold text-left">Cap</th>
                <th className="px-4 py-3 font-bold text-left">Rating</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {ministries.map((ministry) => {
                const minPrice = ministry.plans[0]?.monthlyRange?.individual?.min || 0
                const maxPrice = ministry.plans[0]?.monthlyRange?.individual?.max || 0
                
                return (
                  <tr key={ministry.slug} className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg-warm)] transition">
                    <td className="px-4 py-3 sticky left-0 bg-white hover:bg-[var(--color-bg-warm)]">
                      <Link href={`/reviews/${ministry.slug}`} className="text-[var(--color-accent)] hover:underline font-bold">
                        {ministry.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-sm">{ministry.type === 'healthshare' ? 'Health Share' : 'Insurance'}</td>
                    <td className="px-4 py-3 font-bold">${minPrice}-${maxPrice}</td>
                    <td className="px-4 py-3 text-sm">{ministry.faithRequirement === 'secular' ? 'None' : 'Yes'}</td>
                    <td className="px-4 py-3 text-sm">{ministry.preExisting.waitingPeriod || 'No'}</td>
                    <td className="px-4 py-3 text-sm">{ministry.plans[0]?.coverageCap || 'Unlimited'}</td>
                    <td className="px-4 py-3">
                      <StarRating rating={ministry.rating} />
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={buildMinistryLink(ministry.affiliateLink || ministry.website, ministry.slug, 'compare')}
                        className="btn btn-primary text-sm h-10"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit →
                      </a>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Presidio Banner */}
        {presidio && (
          <div className="card-gold p-6 mb-8">
            <div className="flex justify-between items-start">
              <div>
                <span className="bg-[var(--color-gold)] text-white px-3 py-1 rounded-full text-sm font-bold">★ Real Insurance</span>
                <h3 className="font-serif font-bold text-xl mt-3 mb-2">{presidio.name}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                  Regulated health insurance (not health sharing): $300-$600/mo. Guaranteed coverage. Pre-existing conditions covered from day one. Unlimited cap.
                </p>
                <a href={buildPresidioLink('compare')} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Explore Presidio →</a>
              </div>
              <div className="text-right">
                <StarRating rating={presidio.rating} />
                <p className="text-sm font-bold mt-2">{presidio.memberCount} members</p>
              </div>
            </div>
          </div>
        )}

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
