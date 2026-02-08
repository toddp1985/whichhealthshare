import { loadAllMinistries, getCrowdHealth, getPresidio } from '@/lib/data'
import CTAButton from '@/components/common/CTAButton'
import StarRating from '@/components/common/StarRating'
import { buildMinistryLink, buildCrowdHealthLink, buildPresidioLink } from '@/lib/affiliate'
import { generateBreadcrumb } from '@/lib/schema'
import Link from 'next/link'

export const metadata = {
  title: 'Compare Health Sharing Plans 2026 — WhichHealthShare',
  description: 'Side-by-side comparison of 15+ health sharing ministries, CrowdHealth crowdfunding, and Presidio insurance. Filter by price, faith requirement, pre-existing policies.',
  openGraph: {
    title: 'Compare Health Sharing Plans 2026',
    description: 'Side-by-side comparison of 15+ health sharing ministries, CrowdHealth, and insurance alternatives.'
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
        <h1 className="font-serif font-bold text-4xl mb-4">Compare All Health Sharing Plans</h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-8">
          Side-by-side comparison of 15+ health sharing ministries, plus CrowdHealth crowdfunding and Presidio insurance. All pricing verified February 2026.
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
                <CTAButton href={buildCrowdHealthLink('', 'comparison')} variant="primary">Visit CrowdHealth →</CTAButton>
              </div>
              <div className="text-right">
                <StarRating rating={crowdhealth.rating} />
                <p className="text-sm font-bold mt-2">{crowdhealth.memberCount} members</p>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--color-bg-warm)]">
                <th className="px-4 py-3 font-bold text-left">Plan</th>
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
                  <tr key={ministry.slug} className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg-warm)]">
                    <td className="px-4 py-3">
                      <Link href={`/reviews/${ministry.slug}`} className="text-[var(--color-primary)] hover:underline font-bold">
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
                      <CTAButton
                        href={buildMinistryLink(ministry.affiliateLink, ministry.slug, 'comparison')}
                        variant="primary"
                        className="text-sm"
                      >
                        Visit →
                      </CTAButton>
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
                <CTAButton href={buildPresidioLink('comparison')} variant="primary">Explore Presidio →</CTAButton>
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
          <CTAButton href="/quiz" variant="primary">Take Our Free Quiz →</CTAButton>
        </div>
      </div>
    </>
  )
}
