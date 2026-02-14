import Link from 'next/link'
import { loadAllMinistries } from '@/lib/data'
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema'
import CTAButton from '@/components/common/CTAButton'
import StarRating from '@/components/common/StarRating'

export const metadata = {
  title: 'Health Sharing in Florida 2026 — Best Plans, Regulations & Cost',
  description: 'Complete guide to health sharing ministries in Florida. Compare 16 plans, understand FL regulations, and find the best option. Prices start at $115/month for Floridians.',
  alternates: { canonical: '/states/florida' },
}

export default function FloridaHealthSharingPage() {
  const ministries = loadAllMinistries()
  const topPlans = ministries.filter(m => m.type === 'healthshare').slice(0, 5)

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'States', url: '/states' },
    { name: 'Florida', url: '/states/florida' }
  ])

  const articleSchema = generateArticleSchema(
    'Health Sharing in Florida: Complete 2026 Guide',
    'Comprehensive guide to health sharing ministries in Florida, including state regulations, best plans, costs, and enrollment information for Florida residents.'
  )

  const faqSchema = generateFAQSchema([
    {
      question: 'Are health sharing ministries legal in Florida?',
      answer: 'Yes. Health sharing ministries are legal in Florida and recognized as an alternative to traditional insurance. Florida Statute 624.125 exempts qualified health care sharing ministries from insurance regulation. Over 200,000 Florida residents participate in health sharing programs as of 2026.'
    },
    {
      question: 'How much does health sharing cost in Florida?',
      answer: 'Health sharing costs in Florida range from $115/month (CHM individual) to $495/month (Samaritan Ministries family plan). The average Florida individual pays $185-$268/month with Zion HealthShare. Family plans range from $345 to $1,485/month depending on household size and coverage level.'
    },
    {
      question: 'Does Florida require health insurance?',
      answer: 'No. Florida has no individual health insurance mandate. There is no state penalty for being uninsured in Florida. Health sharing ministries are recognized under Florida law as an acceptable alternative to traditional insurance.'
    },
    {
      question: 'Which health sharing plan is best for Florida retirees?',
      answer: 'For Florida retirees under 65 (pre-Medicare), Zion HealthShare is top-rated (4.8/5) with no pre-existing condition waiting period. Medi-Share offers age-based pricing that can be competitive for healthy retirees. CHM is best for budget-conscious early retirees at $115/month.'
    },
    {
      question: 'Can I use health sharing with Florida Blue Cross providers?',
      answer: 'Most health sharing plans allow you to see any Florida doctor, including Florida Blue Cross providers. You are not limited by insurance networks. Zion HealthShare offers a Cigna PPO network with 60,000+ Florida providers for additional negotiated savings.'
    }
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="section-narrow pt-8">
        <nav className="text-sm text-[var(--color-text-secondary)] mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/states" className="hover:underline">States</Link>
          <span className="mx-2">/</span>
          <span>Florida</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">Health Sharing in Florida: Complete 2026 Guide</h1>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
          <h2 className="font-bold text-lg mb-2">Quick Answer for Florida Residents</h2>
          <p className="text-[var(--color-text-secondary)]">
            <strong>Over 200,000 Floridians use health sharing ministries</strong> as an affordable alternative to ACA marketplace plans.
            Health sharing is legal in Florida under Statute 624.125. Monthly costs range from
            <strong> $115 to $495 for individuals</strong>, with no state mandate penalty. Top-rated plans include Zion HealthShare
            (4.8/5), CHM (4.6/5), and Medi-Share (4.5/5, headquartered in Florida).
          </p>
        </div>

        <p className="text-sm text-[var(--color-text-secondary)] mb-8">
          Last updated: February 2026 | Data verified from official plan websites and Florida Office of Insurance Regulation
        </p>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Florida Health Sharing Regulations</h2>

          <p className="text-[var(--color-text-secondary)] mb-4">
            Florida is one of the most health-sharing-friendly states in the nation. <strong>Florida Statute 624.125</strong> explicitly
            exempts qualified health care sharing ministries from state insurance regulation. This legal framework allows health sharing
            organizations to operate freely in Florida, provided they meet specific criteria established by federal law (ACA Section 1402(d)).
          </p>

          <div className="card mb-4 bg-blue-50">
            <h3 className="font-bold mb-2">Why Florida Is Health Sharing Friendly:</h3>
            <ul className="list-disc ml-6 text-[var(--color-text-secondary)] space-y-2">
              <li><strong>No state mandate:</strong> Florida has no health insurance mandate or penalty</li>
              <li><strong>Statutory recognition:</strong> FL Statute 624.125 explicitly protects health sharing ministries</li>
              <li><strong>Large retiree population:</strong> Over 4.5 million Florida residents are 65+ (use Medicare + supplemental sharing)</li>
              <li><strong>Medi-Share headquarters:</strong> One of the largest health sharing ministries (Christian Care Ministry) is based in Melbourne, FL</li>
              <li><strong>Provider access:</strong> Florida's 90,000+ healthcare providers widely accept health sharing patients</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Best Health Sharing Plans for Florida Residents</h2>

          <div className="space-y-4 mb-6">
            {topPlans.map((plan) => (
              <div key={plan.slug} className="card hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-1">{plan.name}</h3>
                    <StarRating rating={plan.rating} />
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[var(--color-text-muted)]">From</p>
                    <p className="font-bold text-lg text-blue-600">
                      ${plan.plans[0]?.monthlyRange?.individual?.min}/mo
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">{plan.bestFor}</p>
                <Link
                  href={`/reviews/${plan.slug}`}
                  className="text-[var(--color-primary)] hover:underline text-sm font-semibold"
                >
                  Read Full Review →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton href="/quiz" variant="primary" className="inline-block">
              Find Your Best Florida Plan →
            </CTAButton>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Health Sharing vs. ACA Marketplace in Florida</h2>

          <p className="text-[var(--color-text-secondary)] mb-4">
            Florida has one of the most expensive ACA marketplace rates in the country. The average unsubsidized Silver
            plan in Florida costs $600-$850/month for an individual, compared to $115-$495/month for health sharing.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-4 text-left font-semibold">Feature</th>
                  <th className="py-3 pr-4 text-left font-semibold">Health Sharing</th>
                  <th className="py-3 pr-4 text-left font-semibold">FL ACA Marketplace</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Monthly Cost (Individual)</td>
                  <td className="py-2 pr-4">$115 - $495</td>
                  <td className="py-2 pr-4">$600 - $850</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Deductible</td>
                  <td className="py-2 pr-4">$300 - $5,000 (IUA)</td>
                  <td className="py-2 pr-4">$2,000 - $9,100</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Pre-Existing Conditions</td>
                  <td className="py-2 pr-4">6-12 month wait (Zion: none)</td>
                  <td className="py-2 pr-4">Covered day one</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Doctor Choice</td>
                  <td className="py-2 pr-4">Any FL doctor</td>
                  <td className="py-2 pr-4">Network only</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Guaranteed Payment</td>
                  <td className="py-2 pr-4">No (voluntary sharing)</td>
                  <td className="py-2 pr-4">Yes (contractual)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">State Mandate</td>
                  <td className="py-2 pr-4">None</td>
                  <td className="py-2 pr-4">None</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Health Sharing for Florida Retirees (Pre-Medicare)</h2>

          <p className="text-[var(--color-text-secondary)] mb-4">
            Florida has the second-highest percentage of retirees in the US. Many early retirees (ages 55-64) use health
            sharing as a bridge to Medicare at age 65. Here's what Florida retirees should know:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="card">
              <h3 className="font-bold mb-2">Best for Healthy Retirees</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                <strong>Zion HealthShare:</strong> No waiting period for pre-existing conditions. Ideal if you developed
                a condition before retirement and need immediate coverage.
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Cost: $268-$495/mo (age 55-64)
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold mb-2">Best for Budget-Conscious</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                <strong>CHM (Christian Healthcare Ministries):</strong> Lowest cost option at $115/mo, but has 12-month
                waiting period for pre-existing conditions.
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Cost: $115-$205/mo (all ages)
              </p>
            </div>
          </div>

          <div className="card bg-amber-50">
            <p className="text-sm">
              <strong>Medicare Supplement Strategy:</strong> At age 65, most Florida retirees transition to Medicare
              and use health sharing as a Medicare Supplement. Read our{' '}
              <Link href="/answers/medicare" className="text-[var(--color-primary)] hover:underline">
                Medicare + Health Sharing guide
              </Link>.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Florida Provider Access</h2>

          <p className="text-[var(--color-text-secondary)] mb-4">
            Florida has over 90,000 licensed healthcare providers. Most health sharing ministries allow you to see
            any Florida doctor without network restrictions. This includes:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="card">
              <h3 className="font-bold mb-2">Major Florida Hospital Systems</h3>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                <li>• HCA Florida Healthcare (48 hospitals)</li>
                <li>• AdventHealth (50+ locations)</li>
                <li>• Orlando Health (15 hospitals)</li>
                <li>• Baptist Health South Florida</li>
                <li>• Mayo Clinic Jacksonville</li>
                <li>• Tampa General Hospital</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold mb-2">Network Plans Available</h3>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                <li>• <strong>Zion HealthShare:</strong> Cigna PPO (60,000+ FL providers)</li>
                <li>• Pre-negotiated rates (20-40% savings)</li>
                <li>• Out-of-network care also covered</li>
                <li>• All major FL hospital systems included</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Frequently Asked Questions</h2>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Are health sharing ministries legal in Florida?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Yes. Health sharing ministries are legal in Florida and recognized as an alternative to traditional insurance.
              Florida Statute 624.125 exempts qualified health care sharing ministries from insurance regulation. Over 200,000
              Florida residents participate in health sharing programs as of 2026.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              How much does health sharing cost in Florida?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Health sharing costs in Florida range from $115/month (CHM individual) to $495/month (Samaritan Ministries
              family plan). The average Florida individual pays $185-$268/month with Zion HealthShare. Family plans range
              from $345 to $1,485/month depending on household size and coverage level.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Does Florida require health insurance?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              No. Florida has no individual health insurance mandate. There is no state penalty for being uninsured in Florida.
              Health sharing ministries are recognized under Florida law as an acceptable alternative to traditional insurance.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Which health sharing plan is best for Florida retirees?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              For Florida retirees under 65 (pre-Medicare), Zion HealthShare is top-rated (4.8/5) with no pre-existing
              condition waiting period. Medi-Share offers age-based pricing that can be competitive for healthy retirees.
              CHM is best for budget-conscious early retirees at $115/month.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Can I use health sharing with Florida Blue Cross providers?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Most health sharing plans allow you to see any Florida doctor, including Florida Blue Cross providers. You
              are not limited by insurance networks. Zion HealthShare offers a Cigna PPO network with 60,000+ Florida
              providers for additional negotiated savings.
            </p>
          </details>
        </section>

        <section className="mb-10">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="font-serif font-bold text-2xl mb-3">Ready to Find Your Florida Plan?</h2>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Take our free 6-question quiz to get personalized recommendations for Florida residents.
            </p>
            <CTAButton href="/quiz" variant="primary" className="inline-block">
              Start Florida Plan Quiz →
            </CTAButton>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/answers/medicare" className="card p-4 hover:shadow-lg transition">
              <span className="font-serif font-bold">Medicare + Health Sharing</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">For 65+ retirees</span>
            </Link>
            <Link href="/compare" className="card p-4 hover:shadow-lg transition">
              <span className="font-serif font-bold">Compare All 16 Plans</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Side-by-side comparison</span>
            </Link>
            <Link href="/reviews/medi-share" className="card p-4 hover:shadow-lg transition">
              <span className="font-serif font-bold">Medi-Share Review</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">FL-based plan</span>
            </Link>
            <Link href="/answers/best-health-sharing-plan" className="card p-4 hover:shadow-lg transition">
              <span className="font-serif font-bold">Best Plans 2026</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Our top picks</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
