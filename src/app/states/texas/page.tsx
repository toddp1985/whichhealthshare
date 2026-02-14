import Link from 'next/link'
import { loadAllMinistries } from '@/lib/data'
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema'
import CTAButton from '@/components/common/CTAButton'
import StarRating from '@/components/common/StarRating'

export const metadata = {
  title: 'Health Sharing in Texas 2026 — Best Plans, Regulations & Cost',
  description: 'Complete guide to health sharing ministries in Texas. Compare 16 plans, understand TX regulations, and find the best option for your family. Prices start at $115/month.',
  alternates: { canonical: '/states/texas' },
}

export default function TexasHealthSharingPage() {
  const ministries = loadAllMinistries()
  const topPlans = ministries.filter(m => m.type === 'healthshare').slice(0, 5)

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'States', url: '/states' },
    { name: 'Texas', url: '/states/texas' }
  ])

  const articleSchema = generateArticleSchema(
    'Health Sharing in Texas: Complete 2026 Guide',
    'Comprehensive guide to health sharing ministries in Texas, including state regulations, best plans, costs, and enrollment information for Texas residents.'
  )

  const faqSchema = generateFAQSchema([
    {
      question: 'Are health sharing ministries legal in Texas?',
      answer: 'Yes. Health sharing ministries are legal in Texas and operate under the Texas Health Care Sharing Ministry Act (Texas Insurance Code Chapter 1681). Texas recognizes health sharing as a legitimate alternative to traditional insurance. Over 150,000 Texans participate in health sharing programs as of 2026.'
    },
    {
      question: 'How much does health sharing cost in Texas?',
      answer: 'Health sharing costs in Texas range from $115/month (CHM individual) to $495/month (Samaritan Ministries family plan). The average Texas individual pays $185-$268/month with Zion HealthShare. Family plans range from $345 to $1,485/month depending on household size and coverage level.'
    },
    {
      question: 'Does Texas require health insurance?',
      answer: 'No. Texas has no individual health insurance mandate. There is no state penalty for being uninsured in Texas. Health sharing ministries are recognized as an acceptable coverage option under Texas law, though they are not technically insurance.'
    },
    {
      question: 'Which health sharing plan is best for Texas residents?',
      answer: 'Zion HealthShare is the top-rated plan for Texas residents (4.8/5 rating) with no waiting period for pre-existing conditions and access to the Cigna PPO network with 950,000+ providers. CHM is best for budget-conscious Texans at $115/month. Medi-Share offers strong maternity coverage for growing families.'
    },
    {
      question: 'Can I use health sharing with any Texas doctor?',
      answer: 'Yes. Most health sharing plans (CHM, Medi-Share, Samaritan Ministries) allow you to see any doctor in Texas with no network restrictions. Zion HealthShare offers a Cigna PPO network with over 50,000 Texas providers but also allows out-of-network care at higher cost-sharing.'
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
          <span>Texas</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">Health Sharing in Texas: Complete 2026 Guide</h1>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
          <h2 className="font-bold text-lg mb-2">Quick Answer for Texas Residents</h2>
          <p className="text-[var(--color-text-secondary)]">
            <strong>Over 150,000 Texans use health sharing ministries</strong> as an alternative to traditional insurance.
            Health sharing is legal in Texas under Chapter 1681 of the Texas Insurance Code. Monthly costs range from
            <strong> $115 to $495 for individuals</strong>, with no state mandate penalty. Top-rated plans include Zion HealthShare
            (4.8/5), CHM (4.6/5), and Medi-Share (4.5/5).
          </p>
        </div>

        <p className="text-sm text-[var(--color-text-secondary)] mb-8">
          Last updated: February 2026 | Data verified from official plan websites and Texas Department of Insurance
        </p>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Texas Health Sharing Regulations</h2>

          <p className="text-[var(--color-text-secondary)] mb-4">
            Texas is one of the most health-sharing-friendly states in the country. The Texas Legislature passed the
            <strong> Texas Health Care Sharing Ministry Act (Chapter 1681)</strong> which explicitly recognizes health
            sharing ministries and exempts them from traditional insurance regulations. This law protects health sharing
            organizations that meet specific criteria, including having existed continuously since December 31, 1999,
            and consisting of members who share a common set of ethical or religious beliefs.
          </p>

          <div className="card mb-4">
            <h3 className="font-bold mb-2">Key Texas Regulations:</h3>
            <ul className="list-disc ml-6 text-[var(--color-text-secondary)] space-y-2">
              <li><strong>No state insurance mandate:</strong> Texas has no penalty for being uninsured</li>
              <li><strong>Legal recognition:</strong> Health sharing ministries are explicitly recognized under TX Insurance Code Ch. 1681</li>
              <li><strong>Consumer protections:</strong> Ministries must disclose they are not insurance and provide written guidelines</li>
              <li><strong>No network restrictions:</strong> You can see any Texas doctor or hospital</li>
              <li><strong>Registration required:</strong> Ministries must register with the Texas Attorney General</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Best Health Sharing Plans for Texas Residents</h2>

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
              Find Your Best Texas Plan →
            </CTAButton>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Health Sharing vs. Insurance in Texas</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-4 text-left font-semibold">Feature</th>
                  <th className="py-3 pr-4 text-left font-semibold">Health Sharing</th>
                  <th className="py-3 pr-4 text-left font-semibold">TX ACA Marketplace</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Monthly Cost (Individual)</td>
                  <td className="py-2 pr-4">$115 - $495</td>
                  <td className="py-2 pr-4">$450 - $800</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Deductible</td>
                  <td className="py-2 pr-4">$300 - $5,000 (IUA)</td>
                  <td className="py-2 pr-4">$1,500 - $9,100</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Pre-Existing Conditions</td>
                  <td className="py-2 pr-4">6-12 month wait (Zion: none)</td>
                  <td className="py-2 pr-4">Covered day one</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Doctor Choice</td>
                  <td className="py-2 pr-4">Any TX doctor</td>
                  <td className="py-2 pr-4">Network only</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Guaranteed Payment</td>
                  <td className="py-2 pr-4">No (voluntary sharing)</td>
                  <td className="py-2 pr-4">Yes (contractual)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">TX State Mandate</td>
                  <td className="py-2 pr-4">None</td>
                  <td className="py-2 pr-4">None</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Texas Provider Access</h2>

          <p className="text-[var(--color-text-secondary)] mb-4">
            Texas has over 200,000 licensed healthcare providers across the state. Most health sharing ministries
            allow you to see any Texas doctor or hospital without network restrictions. This includes:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="card">
              <h3 className="font-bold mb-2">Major Texas Hospital Systems</h3>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                <li>• Houston Methodist (8 hospitals)</li>
                <li>• Baylor Scott & White (52 hospitals)</li>
                <li>• HCA Houston Healthcare (14 hospitals)</li>
                <li>• UT Health System (multiple locations)</li>
                <li>• Texas Children's Hospital</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold mb-2">With Network Plans (Zion)</h3>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                <li>• 950,000+ providers nationwide</li>
                <li>• 50,000+ Texas providers</li>
                <li>• Pre-negotiated rates (20-40% savings)</li>
                <li>• Out-of-network also covered</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Enrollment Guide for Texas Residents</h2>

          <div className="space-y-4">
            <div className="card">
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</span>
                <div>
                  <h3 className="font-bold mb-1">Choose Your Plan</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Take our <Link href="/quiz" className="text-[var(--color-primary)] hover:underline">free quiz</Link> or
                    compare all <Link href="/reviews" className="text-[var(--color-primary)] hover:underline">16 plans side-by-side</Link>.
                    Consider your budget, health needs, and faith preference.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</span>
                <div>
                  <h3 className="font-bold mb-1">Complete Application</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Apply directly on the ministry's website. You'll need basic information: household size, health history,
                    and payment details. Most applications take 10-15 minutes.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</span>
                <div>
                  <h3 className="font-bold mb-1">Review Guidelines</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Read the sharing guidelines carefully. Understand what's shareable, what's excluded, and how the
                    IUA (Initial Unshareable Amount) works. This is your "deductible."
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</span>
                <div>
                  <h3 className="font-bold mb-1">Start Coverage</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Most plans start on the 1st or 15th of the month. You'll receive your member ID card and sharing
                    guidelines. Keep these with you when visiting Texas healthcare providers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Frequently Asked Questions</h2>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Are health sharing ministries legal in Texas?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Yes. Health sharing ministries are legal in Texas and operate under the Texas Health Care Sharing
              Ministry Act (Texas Insurance Code Chapter 1681). Texas recognizes health sharing as a legitimate
              alternative to traditional insurance. Over 150,000 Texans participate in health sharing programs as of 2026.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              How much does health sharing cost in Texas?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Health sharing costs in Texas range from $115/month (CHM individual) to $495/month (Samaritan Ministries
              family plan). The average Texas individual pays $185-$268/month with Zion HealthShare. Family plans range
              from $345 to $1,485/month depending on household size and coverage level.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Does Texas require health insurance?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              No. Texas has no individual health insurance mandate. There is no state penalty for being uninsured in Texas.
              Health sharing ministries are recognized as an acceptable coverage option under Texas law, though they are
              not technically insurance.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Which health sharing plan is best for Texas residents?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Zion HealthShare is the top-rated plan for Texas residents (4.8/5 rating) with no waiting period for
              pre-existing conditions and access to the Cigna PPO network with 950,000+ providers. CHM is best for
              budget-conscious Texans at $115/month. Medi-Share offers strong maternity coverage for growing families.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Can I use health sharing with any Texas doctor?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Yes. Most health sharing plans (CHM, Medi-Share, Samaritan Ministries) allow you to see any doctor in
              Texas with no network restrictions. Zion HealthShare offers a Cigna PPO network with over 50,000 Texas
              providers but also allows out-of-network care at higher cost-sharing.
            </p>
          </details>
        </section>

        <section className="mb-10">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="font-serif font-bold text-2xl mb-3">Ready to Find Your Texas Plan?</h2>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Take our free 6-question quiz to get personalized recommendations based on your needs.
            </p>
            <CTAButton href="/quiz" variant="primary" className="inline-block">
              Start Texas Plan Quiz →
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
              <span className="text-sm text-[var(--color-primary)] block mt-1">Estimate your costs</span>
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
