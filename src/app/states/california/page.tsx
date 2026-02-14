import Link from 'next/link'
import { loadAllMinistries } from '@/lib/data'
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema'
import CTAButton from '@/components/common/CTAButton'
import StarRating from '@/components/common/StarRating'

export const metadata = {
  title: 'Health Sharing in California 2026 — Regulations, Penalties & Best Plans',
  description: 'California health sharing guide: Understand the CA individual mandate, $850+ penalties, and health sharing exemptions. Compare plans starting at $115/month.',
  alternates: { canonical: '/states/california' },
}

export default function CaliforniaHealthSharingPage() {
  const ministries = loadAllMinistries()
  const topPlans = ministries.filter(m => m.type === 'healthshare').slice(0, 5)

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'States', url: '/states' },
    { name: 'California', url: '/states/california' }
  ])

  const articleSchema = generateArticleSchema(
    'Health Sharing in California: Complete 2026 Guide',
    'Comprehensive guide to health sharing ministries in California, including the CA individual mandate, penalty exemptions, best plans, and enrollment information.'
  )

  const faqSchema = generateFAQSchema([
    {
      question: 'Are health sharing ministries legal in California?',
      answer: 'Yes, health sharing ministries are legal in California. However, California has an individual health insurance mandate. If you have health sharing instead of insurance, you may owe a state penalty of $850+ per adult ($425+ per child) unless you qualify for an exemption. Check with a tax professional about exemptions.'
    },
    {
      question: 'Does health sharing count as insurance in California?',
      answer: 'No. Health sharing ministries are not considered qualifying health coverage under California\'s individual mandate. If you choose health sharing, you may owe a state penalty unless you qualify for an exemption (income below filing threshold, affordability hardship, religious objection, or other exemptions).'
    },
    {
      question: 'How much is the California health insurance penalty?',
      answer: 'The California individual mandate penalty for 2026 is $850 per adult and $425 per child, or 2.5% of household income above the tax filing threshold, whichever is greater. This applies if you do not have qualifying health coverage and do not qualify for an exemption.'
    },
    {
      question: 'Can I get an exemption from the California mandate for health sharing?',
      answer: 'Possibly. California offers exemptions for affordability hardship, religious objection, income below the filing threshold, and other circumstances. Health sharing membership may support a religious exemption claim, but this is not automatic. Consult a tax professional to determine if you qualify.'
    },
    {
      question: 'What is the best health sharing plan for California residents?',
      answer: 'Zion HealthShare (4.8/5 rating) is top-rated with no pre-existing condition waiting period and nationwide provider access. For California residents facing the mandate penalty, compare total cost: health sharing monthly cost + potential $850 penalty vs. Covered California insurance premiums.'
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
          <span>California</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">Health Sharing in California: Complete 2026 Guide</h1>

        <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8 rounded">
          <h2 className="font-bold text-lg mb-2">⚠️ Important: California Individual Mandate</h2>
          <p className="text-[var(--color-text-secondary)]">
            <strong>California has a state health insurance mandate.</strong> If you choose health sharing instead of traditional
            insurance, you may owe a state penalty of <strong>$850+ per adult ($425+ per child)</strong> unless you qualify for
            an exemption. Health sharing ministries are legal in California, but they do not satisfy the state mandate.
            Read below to understand exemptions and whether health sharing + penalty is still cheaper than Covered California.
          </p>
        </div>

        <p className="text-sm text-[var(--color-text-secondary)] mb-8">
          Last updated: February 2026 | Data verified from official plan websites and California Franchise Tax Board
        </p>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">California Individual Mandate Explained</h2>

          <p className="text-[var(--color-text-secondary)] mb-4">
            California is one of six states (CA, MA, NJ, RI, DC, VT) with an individual health insurance mandate. Starting
            in 2020, California requires all residents to have "qualifying health coverage" or pay a state tax penalty.
            <strong> Health sharing ministries are not considered qualifying coverage</strong> under this law.
          </p>

          <div className="card mb-4">
            <h3 className="font-bold mb-2">2026 California Penalty Amounts:</h3>
            <ul className="list-disc ml-6 text-[var(--color-text-secondary)] space-y-2">
              <li><strong>$850 per adult</strong> (ages 18+)</li>
              <li><strong>$425 per child</strong> (under 18)</li>
              <li><strong>OR 2.5% of household income</strong> above the tax filing threshold (whichever is greater)</li>
              <li>Example: Family of 4 (2 adults, 2 kids) = $2,550 annual penalty</li>
            </ul>
          </div>

          <div className="card bg-blue-50">
            <h3 className="font-bold mb-2">Exemptions from California Mandate:</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-2">
              You may be exempt from the penalty if:
            </p>
            <ul className="list-disc ml-6 text-sm text-[var(--color-text-secondary)] space-y-1">
              <li>Household income below the tax filing threshold</li>
              <li>Lowest-cost coverage exceeds 8.17% of household income (affordability exemption)</li>
              <li>Religious objection to insurance (health sharing membership may support this)</li>
              <li>Member of a federally recognized tribe</li>
              <li>Incarceration</li>
              <li>Short coverage gap (less than 3 consecutive months)</li>
            </ul>
            <p className="text-sm mt-3">
              <strong>Consult a tax professional</strong> to determine if you qualify for an exemption.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Cost Comparison: Health Sharing vs. Covered California</h2>

          <p className="text-[var(--color-text-secondary)] mb-4">
            Even with the California penalty, health sharing may be cheaper than Covered California for some residents.
            Here's the math:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-4 text-left font-semibold">Scenario</th>
                  <th className="py-3 pr-4 text-left font-semibold">Health Sharing + Penalty</th>
                  <th className="py-3 pr-4 text-left font-semibold">Covered California</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Individual (healthy, 35)</td>
                  <td className="py-2 pr-4">
                    $185/mo × 12 = $2,220<br />
                    + $850 penalty = <strong>$3,070/yr</strong>
                  </td>
                  <td className="py-2 pr-4">
                    $550/mo × 12 = <strong>$6,600/yr</strong><br />
                    <span className="text-xs text-green-600">Savings: $3,530/yr with health sharing</span>
                  </td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Family of 4</td>
                  <td className="py-2 pr-4">
                    $495/mo × 12 = $5,940<br />
                    + $2,550 penalty = <strong>$8,490/yr</strong>
                  </td>
                  <td className="py-2 pr-4">
                    $1,400/mo × 12 = <strong>$16,800/yr</strong><br />
                    <span className="text-xs text-green-600">Savings: $8,310/yr with health sharing</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">With Religious Exemption</td>
                  <td className="py-2 pr-4">
                    $185/mo × 12 = <strong>$2,220/yr</strong><br />
                    (no penalty)
                  </td>
                  <td className="py-2 pr-4">
                    $550/mo × 12 = <strong>$6,600/yr</strong><br />
                    <span className="text-xs text-green-600">Savings: $4,380/yr with health sharing</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-[var(--color-text-muted)] mt-2">
            Note: Covered California costs are estimates for unsubsidized Silver plans in 2026. Your actual cost may vary
            based on age, income, and subsidy eligibility.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Best Health Sharing Plans for California Residents</h2>

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
              Find Your Best California Plan →
            </CTAButton>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Should California Residents Choose Health Sharing?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="card bg-green-50">
              <h3 className="font-bold mb-2">✓ Health Sharing May Be Better If:</h3>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-2">
                <li>• You qualify for a mandate exemption (religious, affordability, income)</li>
                <li>• You are healthy with no pre-existing conditions</li>
                <li>• Even with the penalty, total cost is lower than Covered CA</li>
                <li>• You prefer any-doctor access (no networks)</li>
                <li>• You are self-employed and value lower monthly costs</li>
              </ul>
            </div>
            <div className="card bg-red-50">
              <h3 className="font-bold mb-2">✗ Covered California May Be Better If:</h3>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-2">
                <li>• You have significant pre-existing conditions</li>
                <li>• You qualify for Covered CA subsidies (income-based)</li>
                <li>• You want guaranteed coverage with no exclusions</li>
                <li>• You prefer not to pay the state penalty</li>
                <li>• You need prescription drug coverage (health sharing varies)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">California Provider Access</h2>

          <p className="text-[var(--color-text-secondary)] mb-4">
            California has over 150,000 licensed healthcare providers. Most health sharing plans allow you to see
            any California doctor without network restrictions. This includes major systems like:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="card">
              <h3 className="font-bold mb-2">Major California Hospital Systems</h3>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                <li>• Kaiser Permanente (39 hospitals)</li>
                <li>• UC Health (5 medical centers)</li>
                <li>• Sutter Health (24 hospitals)</li>
                <li>• Cedars-Sinai Medical Center</li>
                <li>• Stanford Health Care</li>
                <li>• Providence (8 CA hospitals)</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold mb-2">Network Plans Available</h3>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                <li>• <strong>Zion HealthShare:</strong> Cigna PPO (80,000+ CA providers)</li>
                <li>• Pre-negotiated rates (20-40% savings)</li>
                <li>• Out-of-network care also covered</li>
                <li>• All major CA hospital systems included</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Frequently Asked Questions</h2>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Are health sharing ministries legal in California?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Yes, health sharing ministries are legal in California. However, California has an individual health
              insurance mandate. If you have health sharing instead of insurance, you may owe a state penalty of $850+
              per adult ($425+ per child) unless you qualify for an exemption. Check with a tax professional about exemptions.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Does health sharing count as insurance in California?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              No. Health sharing ministries are not considered qualifying health coverage under California's individual
              mandate. If you choose health sharing, you may owe a state penalty unless you qualify for an exemption
              (income below filing threshold, affordability hardship, religious objection, or other exemptions).
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              How much is the California health insurance penalty?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              The California individual mandate penalty for 2026 is $850 per adult and $425 per child, or 2.5% of
              household income above the tax filing threshold, whichever is greater. This applies if you do not have
              qualifying health coverage and do not qualify for an exemption.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Can I get an exemption from the California mandate for health sharing?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Possibly. California offers exemptions for affordability hardship, religious objection, income below the
              filing threshold, and other circumstances. Health sharing membership may support a religious exemption
              claim, but this is not automatic. Consult a tax professional to determine if you qualify.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              What is the best health sharing plan for California residents?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Zion HealthShare (4.8/5 rating) is top-rated with no pre-existing condition waiting period and nationwide
              provider access. For California residents facing the mandate penalty, compare total cost: health sharing
              monthly cost + potential $850 penalty vs. Covered California insurance premiums.
            </p>
          </details>
        </section>

        <section className="mb-10">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="font-serif font-bold text-2xl mb-3">Calculate Your California Costs</h2>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Use our calculator to compare health sharing + penalty vs. Covered California for your household.
            </p>
            <CTAButton href="/calculator" variant="primary" className="inline-block">
              Open Cost Calculator →
            </CTAButton>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/answers/what-is-health-sharing" className="card p-4 hover:shadow-lg transition">
              <span className="font-serif font-bold">What Is Health Sharing?</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Learn the basics</span>
            </Link>
            <Link href="/compare" className="card p-4 hover:shadow-lg transition">
              <span className="font-serif font-bold">Compare All 16 Plans</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Side-by-side comparison</span>
            </Link>
            <Link href="/calculator" className="card p-4 hover:shadow-lg transition">
              <span className="font-serif font-bold">Cost Calculator</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Estimate total costs</span>
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
