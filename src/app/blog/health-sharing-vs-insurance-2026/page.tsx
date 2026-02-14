import { loadAllMinistries } from '@/lib/data';
import { generateBreadcrumb, generateArticleSchema } from '@/lib/schema';
import Link from 'next/link';

export const metadata = {
  title: 'Health Sharing vs Insurance 2026: Cost, Coverage & Trade-Offs',
  description:
    'Compare health sharing plans to traditional insurance in 2026. Real pricing data, 5 scenarios with actual costs, and honest trade-offs to help you choose.',
  openGraph: {
    title: 'Health Sharing vs Insurance 2026: Cost, Coverage & Trade-Offs',
    description:
      'Health sharing costs $115-$495/mo vs insurance at $450-$700/mo. See 5 real scenarios with actual costs and honest trade-offs.',
  },
};

export default function HealthSharingVsInsurancePage() {
  const ministries = loadAllMinistries();

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Health Sharing vs Insurance 2026', url: '/blog/health-sharing-vs-insurance-2026' },
  ]);

  const articleSchema = generateArticleSchema(
    'Health Sharing vs Health Insurance: Which One Actually Saves You Money in 2026?',
    'Compare health sharing plans to traditional insurance in 2026. Real pricing data from 16 plans, 5 real-world cost scenarios, coverage comparison tables, and honest trade-offs.'
  );

  const topPlans = ministries
    .filter((m) => m.plans[0]?.monthlyRange?.individual)
    .sort(
      (a, b) =>
        (a.plans[0]?.monthlyRange?.individual?.min || 0) -
        (b.plans[0]?.monthlyRange?.individual?.min || 0)
    );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="section-narrow pt-8">
        <nav className="text-sm text-[var(--color-text-secondary)] mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <span className="mx-2">/</span>
          <span>Health Sharing vs Insurance 2026</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">
          Health Sharing vs Health Insurance: Which One Actually Saves You Money in 2026?
        </h1>
        <div className="text-sm text-[var(--color-text-muted)] mb-2">
          February 9, 2026 &middot; 14 min read
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] mb-8">
          Last updated: February 2026 | All pricing verified from official plan websites and HealthCare.gov
        </p>

        <p className="text-lg leading-relaxed mb-6">
          As of February 2026, health sharing contributions average $140&ndash;$350/month for
          individuals compared to ACA marketplace insurance premiums of $450&ndash;$700+/month
          (unsubsidized Silver plan). But the real difference is not just price &mdash; it is
          how risk is managed, what is covered, and what happens when something goes wrong.
        </p>
        <p className="leading-relaxed mb-8">
          This guide uses real pricing data from 16 health sharing plans and current ACA
          marketplace rates to compare costs in 5 real-world scenarios. No hype, no affiliate
          pressure &mdash; just the numbers and trade-offs you need to make a clear decision.
        </p>

        {/* Table of Contents */}
        <nav className="card p-6 mb-10">
          <h2 className="font-serif font-bold text-lg mb-3">Table of Contents</h2>
          <ol className="list-decimal list-inside space-y-1 text-[var(--color-text-secondary)]">
            <li><a href="#fundamental-difference" className="hover:underline">The Fundamental Difference</a></li>
            <li><a href="#cost-comparison" className="hover:underline">Monthly Cost Comparison (Real Data)</a></li>
            <li><a href="#coverage-comparison" className="hover:underline">Coverage: What Each Option Includes</a></li>
            <li><a href="#five-scenarios" className="hover:underline">5 Real-World Scenarios With Actual Costs</a></li>
            <li><a href="#who-should-choose" className="hover:underline">Who Should Choose Health Sharing vs Insurance</a></li>
            <li><a href="#risks" className="hover:underline">Risks and Trade-Offs You Need to Understand</a></li>
            <li><a href="#bottom-line" className="hover:underline">The Bottom Line</a></li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="fundamental-difference" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            The Fundamental Difference
          </h2>
          <p className="leading-relaxed mb-4">
            Health insurance is a regulated product. Insurers are legally obligated to pay
            covered claims. They must comply with state insurance regulations, accept all
            applicants during open enrollment, and cover essential health benefits under the ACA.
            You pay premiums, and the insurer bears the financial risk of your medical expenses.
          </p>
          <p className="leading-relaxed mb-4">
            Health sharing ministries are voluntary cost-sharing arrangements. Members
            contribute monthly amounts that are pooled to share each other&apos;s medical
            expenses. There is no legal guarantee that expenses will be paid. Health sharing
            ministries are exempt from ACA requirements under Section 1402(d) and are not
            regulated by state departments of insurance. In practice, established ministries like{' '}
            <Link href="/reviews/chm" className="text-[var(--color-primary)] hover:underline">CHM</Link>{' '}
            (founded 1981) and{' '}
            <Link href="/reviews/medi-share" className="text-[var(--color-primary)] hover:underline">Medi-Share</Link>{' '}
            (founded 1992) have reliably shared member expenses for decades.
          </p>
          <p className="leading-relaxed mb-4">
            The practical difference: insurance gives you a contract, health sharing gives you a
            community. Both can cover your medical bills. Insurance guarantees it; health sharing
            relies on the collective commitment of its members.
          </p>
        </section>

        {/* Section 2 */}
        <section id="cost-comparison" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Monthly Cost Comparison (Real Data)
          </h2>
          <p className="leading-relaxed mb-4">
            The table below shows actual 2026 monthly costs for individuals across every major
            health sharing plan, compared to unsubsidized ACA marketplace insurance. These are
            published rates verified in February 2026 &mdash; not estimates.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-4 font-semibold">Plan</th>
                  <th className="py-3 pr-4 font-semibold">Type</th>
                  <th className="py-3 pr-4 font-semibold">Individual/mo</th>
                  <th className="py-3 pr-4 font-semibold">Family/mo</th>
                  <th className="py-3 pr-4 font-semibold">Coverage Cap</th>
                </tr>
              </thead>
              <tbody>
                {topPlans.map((m) => (
                  <tr key={m.slug} className="border-b border-[var(--color-border)]">
                    <td className="py-2 pr-4">
                      <Link
                        href={`/reviews/${m.slug}`}
                        className="text-[var(--color-primary)] hover:underline"
                      >
                        {m.name}
                      </Link>
                    </td>
                    <td className="py-2 pr-4 capitalize">{m.type}</td>
                    <td className="py-2 pr-4">
                      ${m.plans[0]?.monthlyRange?.individual?.min}&ndash;$
                      {m.plans[0]?.monthlyRange?.individual?.max}
                    </td>
                    <td className="py-2 pr-4">
                      {m.plans[0]?.monthlyRange?.family
                        ? `$${m.plans[0].monthlyRange.family.min}–$${m.plans[0].monthlyRange.family.max}`
                        : 'N/A'}
                    </td>
                    <td className="py-2 pr-4">{m.plans[0]?.coverageCap}</td>
                  </tr>
                ))}
                <tr className="border-b border-[var(--color-border)] bg-[var(--color-primary-lighter)]">
                  <td className="py-2 pr-4 font-semibold">ACA Silver Plan (avg)</td>
                  <td className="py-2 pr-4">Insurance</td>
                  <td className="py-2 pr-4">$450&ndash;$700</td>
                  <td className="py-2 pr-4">$1,200&ndash;$2,000</td>
                  <td className="py-2 pr-4">Unlimited</td>
                </tr>
                <tr className="bg-[var(--color-primary-lighter)]">
                  <td className="py-2 pr-4 font-semibold">ACA Bronze Plan (avg)</td>
                  <td className="py-2 pr-4">Insurance</td>
                  <td className="py-2 pr-4">$350&ndash;$550</td>
                  <td className="py-2 pr-4">$950&ndash;$1,600</td>
                  <td className="py-2 pr-4">Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)] mb-4">
            ACA marketplace averages based on HealthCare.gov 2026 data for unsubsidized plans.
            Health sharing rates are published plan pricing as of February 2026.
          </p>
          <p className="leading-relaxed mb-4">
            At a glance, health sharing costs 30&ndash;65% less than ACA marketplace insurance.
            An individual paying $185/month with{' '}
            <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">
              Zion HealthShare
            </Link>{' '}
            saves $3,180&ndash;$6,180 per year compared to an unsubsidized Silver plan. For a
            family, the savings can reach $5,000&ndash;$15,000+ annually.
          </p>
          <p className="leading-relaxed mb-4">
            However, these numbers only tell part of the story. ACA subsidies can dramatically
            lower insurance costs for households earning under 400% of the federal poverty level
            ($60,240 for an individual in 2026). If you qualify for subsidies, ACA insurance may
            cost the same or less than health sharing.
          </p>
        </section>

        {/* Section 3 */}
        <section id="coverage-comparison" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Coverage: What Each Option Includes
          </h2>
          <p className="leading-relaxed mb-4">
            ACA insurance is required to cover 10 essential health benefits. Health sharing
            plans choose their own sharing guidelines. Here is how they compare:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-4 font-semibold">Coverage Area</th>
                  <th className="py-3 pr-4 font-semibold">ACA Insurance</th>
                  <th className="py-3 pr-4 font-semibold">Zion HealthShare</th>
                  <th className="py-3 pr-4 font-semibold">CHM</th>
                  <th className="py-3 pr-4 font-semibold">CrowdHealth</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Emergency Care</td>
                  <td className="py-2 pr-4">Covered</td>
                  <td className="py-2 pr-4">Shared</td>
                  <td className="py-2 pr-4">Shared</td>
                  <td className="py-2 pr-4">Crowdfunded</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Surgery</td>
                  <td className="py-2 pr-4">Covered</td>
                  <td className="py-2 pr-4">Shared</td>
                  <td className="py-2 pr-4">Shared</td>
                  <td className="py-2 pr-4">Crowdfunded</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Maternity</td>
                  <td className="py-2 pr-4">Covered</td>
                  <td className="py-2 pr-4">Shared</td>
                  <td className="py-2 pr-4">Shared</td>
                  <td className="py-2 pr-4">Crowdfunded</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Prescriptions</td>
                  <td className="py-2 pr-4">Covered</td>
                  <td className="py-2 pr-4">Shared</td>
                  <td className="py-2 pr-4">Not shared</td>
                  <td className="py-2 pr-4">Crowdfunded</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Mental Health</td>
                  <td className="py-2 pr-4">Covered</td>
                  <td className="py-2 pr-4">Shared</td>
                  <td className="py-2 pr-4">Not shared</td>
                  <td className="py-2 pr-4">Crowdfunded</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Telehealth</td>
                  <td className="py-2 pr-4">Covered</td>
                  <td className="py-2 pr-4">Shared</td>
                  <td className="py-2 pr-4">Not shared</td>
                  <td className="py-2 pr-4">Crowdfunded</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Dental &amp; Vision</td>
                  <td className="py-2 pr-4">Varies</td>
                  <td className="py-2 pr-4">Not shared</td>
                  <td className="py-2 pr-4">Not shared</td>
                  <td className="py-2 pr-4">Not covered</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Pre-Existing Conditions</td>
                  <td className="py-2 pr-4">Covered (no wait)</td>
                  <td className="py-2 pr-4">Shared (no wait)</td>
                  <td className="py-2 pr-4">6-month wait</td>
                  <td className="py-2 pr-4">Limited 2 years</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Coverage Guaranteed?</td>
                  <td className="py-2 pr-4">Yes (contractual)</td>
                  <td className="py-2 pr-4">No (voluntary)</td>
                  <td className="py-2 pr-4">No (voluntary)</td>
                  <td className="py-2 pr-4">No (crowdfunded)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed mb-4">
            ACA insurance wins on breadth and certainty. Every plan must cover essential health
            benefits, and claims are contractually guaranteed. Health sharing plans vary
            significantly &mdash;{' '}
            <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">
              Zion HealthShare
            </Link>{' '}
            covers prescriptions, mental health, and telehealth, while{' '}
            <Link href="/reviews/chm" className="text-[var(--color-primary)] hover:underline">CHM</Link>{' '}
            does not. The trade-off is that ACA insurance costs 2&ndash;4 times more per month.
          </p>
        </section>

        {/* Section 4 */}
        <section id="five-scenarios" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            5 Real-World Scenarios With Actual Costs
          </h2>

          <div className="card p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">Scenario 1: Healthy 30-Year-Old Freelancer</h3>
            <p className="text-[var(--color-text-secondary)] mb-3">
              No prescriptions, no chronic conditions, 1&ndash;2 doctor visits per year.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="py-2 pr-4">Option</th>
                    <th className="py-2 pr-4">Monthly Cost</th>
                    <th className="py-2 pr-4">Annual Cost</th>
                    <th className="py-2 pr-4">Out-of-Pocket (2 visits)</th>
                    <th className="py-2 pr-4">Total Annual</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="py-2 pr-4">CrowdHealth</td>
                    <td className="py-2 pr-4">$140</td>
                    <td className="py-2 pr-4">$1,680</td>
                    <td className="py-2 pr-4">$300</td>
                    <td className="py-2 pr-4 font-semibold">$1,980</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="py-2 pr-4">Zion HealthShare</td>
                    <td className="py-2 pr-4">$185</td>
                    <td className="py-2 pr-4">$2,220</td>
                    <td className="py-2 pr-4">$300</td>
                    <td className="py-2 pr-4 font-semibold">$2,520</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">ACA Silver Plan</td>
                    <td className="py-2 pr-4">$500</td>
                    <td className="py-2 pr-4">$6,000</td>
                    <td className="py-2 pr-4">$300</td>
                    <td className="py-2 pr-4 font-semibold">$6,300</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] mt-3">
              Health sharing saves $3,780&ndash;$4,320/year for a healthy individual with
              minimal medical needs.
            </p>
          </div>

          <div className="card p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">Scenario 2: Family of 4, Ages 35 and 37 With Two Kids</h3>
            <p className="text-[var(--color-text-secondary)] mb-3">
              Regular pediatric visits, occasional urgent care, no chronic conditions.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="py-2 pr-4">Option</th>
                    <th className="py-2 pr-4">Monthly Cost</th>
                    <th className="py-2 pr-4">Annual Cost</th>
                    <th className="py-2 pr-4">Out-of-Pocket (est.)</th>
                    <th className="py-2 pr-4">Total Annual</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="py-2 pr-4">Zion HealthShare</td>
                    <td className="py-2 pr-4">$555</td>
                    <td className="py-2 pr-4">$6,660</td>
                    <td className="py-2 pr-4">$1,500</td>
                    <td className="py-2 pr-4 font-semibold">$8,160</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="py-2 pr-4">CHM</td>
                    <td className="py-2 pr-4">$345</td>
                    <td className="py-2 pr-4">$4,140</td>
                    <td className="py-2 pr-4">$2,500</td>
                    <td className="py-2 pr-4 font-semibold">$6,640</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">ACA Silver Plan</td>
                    <td className="py-2 pr-4">$1,400</td>
                    <td className="py-2 pr-4">$16,800</td>
                    <td className="py-2 pr-4">$1,000</td>
                    <td className="py-2 pr-4 font-semibold">$17,800</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] mt-3">
              Health sharing saves $9,600&ndash;$11,160/year for a healthy family. CHM is
              cheapest but requires strict Christian faith and church attendance.
            </p>
          </div>

          <div className="card p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">Scenario 3: 45-Year-Old With Type 2 Diabetes (Pre-Existing)</h3>
            <p className="text-[var(--color-text-secondary)] mb-3">
              Monthly medications, quarterly specialist visits, ongoing management.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="py-2 pr-4">Option</th>
                    <th className="py-2 pr-4">Monthly Cost</th>
                    <th className="py-2 pr-4">Pre-Existing Wait</th>
                    <th className="py-2 pr-4">Year 1 Total (est.)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="py-2 pr-4">Zion HealthShare</td>
                    <td className="py-2 pr-4">$268</td>
                    <td className="py-2 pr-4">None</td>
                    <td className="py-2 pr-4 font-semibold">$4,716</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="py-2 pr-4">Medi-Share</td>
                    <td className="py-2 pr-4">$405</td>
                    <td className="py-2 pr-4">12 months (25%)</td>
                    <td className="py-2 pr-4 font-semibold">$9,860</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">ACA Silver Plan</td>
                    <td className="py-2 pr-4">$550</td>
                    <td className="py-2 pr-4">None</td>
                    <td className="py-2 pr-4 font-semibold">$9,600</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] mt-3">
              With pre-existing conditions, Zion saves $4,884/year. Most other health sharing
              plans impose 6&ndash;12 month waiting periods that shift costs to you during year
              one. ACA insurance covers pre-existing conditions from day one with no waiting
              period.
            </p>
          </div>

          <div className="card p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">Scenario 4: Expecting Mother (Planned Pregnancy)</h3>
            <p className="text-[var(--color-text-secondary)] mb-3">
              Standard prenatal care, hospital delivery, postpartum care. Average delivery cost:
              $15,000&ndash;$20,000.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="py-2 pr-4">Option</th>
                    <th className="py-2 pr-4">Monthly Cost</th>
                    <th className="py-2 pr-4">Maternity Covered?</th>
                    <th className="py-2 pr-4">Your Share of $18K Birth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="py-2 pr-4">Zion HealthShare</td>
                    <td className="py-2 pr-4">$268</td>
                    <td className="py-2 pr-4">Yes</td>
                    <td className="py-2 pr-4 font-semibold">$1,000 IUA + 10&ndash;20%</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="py-2 pr-4">CHM</td>
                    <td className="py-2 pr-4">$264</td>
                    <td className="py-2 pr-4">Yes</td>
                    <td className="py-2 pr-4 font-semibold">$1,000 IUA + 20%</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">ACA Silver Plan</td>
                    <td className="py-2 pr-4">$550</td>
                    <td className="py-2 pr-4">Yes (required)</td>
                    <td className="py-2 pr-4 font-semibold">$3,000&ndash;$5,000 deductible</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] mt-3">
              Health sharing can save $3,400&ndash;$6,400/year on maternity, but check the
              specific plan&apos;s maternity guidelines.{' '}
              <Link href="/answers/maternity-coverage" className="text-[var(--color-primary)] hover:underline">
                See our maternity coverage comparison
              </Link>.
            </p>
          </div>

          <div className="card p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">Scenario 5: Major Surgery ($80,000 Knee Replacement)</h3>
            <p className="text-[var(--color-text-secondary)] mb-3">
              Planned orthopedic surgery, hospital stay, physical therapy.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="py-2 pr-4">Option</th>
                    <th className="py-2 pr-4">Your Cost (est.)</th>
                    <th className="py-2 pr-4">Guaranteed?</th>
                    <th className="py-2 pr-4">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="py-2 pr-4">Zion HealthShare</td>
                    <td className="py-2 pr-4 font-semibold">$2,000 IUA + 10&ndash;20%</td>
                    <td className="py-2 pr-4">No</td>
                    <td className="py-2 pr-4">Unlimited cap, PPO network rates</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="py-2 pr-4">Medi-Share</td>
                    <td className="py-2 pr-4 font-semibold">$2,000 IUA + 20%</td>
                    <td className="py-2 pr-4">No</td>
                    <td className="py-2 pr-4">$250K cap (surgery fits)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">ACA Silver Plan</td>
                    <td className="py-2 pr-4 font-semibold">$5,000&ndash;$9,000 OOP max</td>
                    <td className="py-2 pr-4">Yes</td>
                    <td className="py-2 pr-4">Out-of-pocket maximum applies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] mt-3">
              For major surgery, health sharing and insurance can result in similar out-of-pocket
              costs. The key difference: insurance has a guaranteed out-of-pocket maximum, while
              health sharing does not.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="who-should-choose" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Who Should Choose Health Sharing vs Insurance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="card p-6">
              <h3 className="font-bold text-lg mb-3">Health Sharing Is Better When You...</h3>
              <ul className="space-y-2 text-[var(--color-text-secondary)]">
                <li>Are generally healthy with no chronic conditions</li>
                <li>Do not qualify for ACA premium subsidies</li>
                <li>Are self-employed and paying full price for insurance</li>
                <li>Want lower monthly costs and accept voluntary sharing</li>
                <li>Are comfortable with a community-based model</li>
                <li>Want flexibility to cancel anytime (no open enrollment)</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-lg mb-3">Insurance Is Better When You...</h3>
              <ul className="space-y-2 text-[var(--color-text-secondary)]">
                <li>Have significant pre-existing conditions</li>
                <li>Qualify for ACA subsidies (income under $60K individual)</li>
                <li>Need guaranteed coverage with contractual protections</li>
                <li>Take multiple prescription medications</li>
                <li>Need mental health or substance abuse treatment</li>
                <li>Live in a mandate state (CA, MA, NJ, RI, DC, VT)</li>
              </ul>
            </div>
          </div>
          <p className="leading-relaxed mb-4">
            If you want the regulatory protection of insurance with cost savings closer to health
            sharing, consider{' '}
            <Link href="/reviews/presidio-healthcare" className="text-[var(--color-primary)] hover:underline">
              Presidio Healthcare
            </Link>{' '}
            &mdash; actual regulated insurance starting at $300/month with pre-existing
            conditions covered from day one.
          </p>
        </section>

        {/* Section 6 */}
        <section id="risks" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Risks and Trade-Offs You Need to Understand
          </h2>
          <p className="leading-relaxed mb-4">
            Health sharing has real risks that are easy to overlook when comparing monthly costs:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="leading-relaxed">
              <strong>No guarantee of payment.</strong> Health sharing is voluntary. If a
              ministry runs out of funds or decides an expense does not meet sharing guidelines,
              you are responsible for the full cost. This has never happened at a major ministry,
              but the legal risk is real.
            </li>
            <li className="leading-relaxed">
              <strong>Pre-existing condition waiting periods.</strong> Most plans impose
              6&ndash;12 months before pre-existing conditions are shareable.{' '}
              <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">
                Zion HealthShare
              </Link>{' '}
              is the notable exception with no waiting period.
            </li>
            <li className="leading-relaxed">
              <strong>No out-of-pocket maximum.</strong> ACA insurance caps your annual
              out-of-pocket at $9,200 (individual) in 2026. Health sharing has no such limit.
              Your IUA resets per incident, not per year.
            </li>
            <li className="leading-relaxed">
              <strong>State mandate penalties.</strong> In CA, MA, NJ, RI, DC, and VT, health
              sharing does not satisfy state insurance mandates. You may owe a state tax penalty.
            </li>
            <li className="leading-relaxed">
              <strong>Not tax-deductible.</strong> Unlike insurance premiums, health sharing
              contributions cannot be deducted as a business expense or health insurance cost.
              See our{' '}
              <Link href="/answers/best-for-self-employed" className="text-[var(--color-primary)] hover:underline">
                self-employed guide
              </Link>{' '}
              for tax strategies.
            </li>
          </ul>
        </section>

        {/* Section 7 */}
        <section id="bottom-line" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">The Bottom Line</h2>
          <div className="card p-6">
            <p className="leading-relaxed mb-4">
              Health sharing costs 30&ndash;65% less than ACA insurance for individuals and
              families who pay full price. The savings are real: $3,000&ndash;$12,000+ per year
              depending on family size and plan choice. But health sharing is not insurance.
              There is no contractual guarantee, no out-of-pocket maximum, and coverage depends
              on the ministry&apos;s sharing guidelines.
            </p>
            <p className="leading-relaxed mb-4">
              For healthy individuals and families without significant pre-existing conditions
              who do not qualify for ACA subsidies, health sharing is a strong financial
              alternative. For anyone with chronic conditions, on multiple medications, or who
              needs the certainty of guaranteed coverage, ACA insurance or{' '}
              <Link href="/reviews/presidio-healthcare" className="text-[var(--color-primary)] hover:underline">
                Presidio Healthcare
              </Link>{' '}
              is the safer choice.
            </p>
            <p className="leading-relaxed">
              Not sure which option fits?{' '}
              <Link href="/quiz" className="text-[var(--color-primary)] hover:underline font-semibold">
                Take our free 2-minute quiz
              </Link>{' '}
              to get a personalized recommendation, or{' '}
              <Link href="/compare" className="text-[var(--color-primary)] hover:underline font-semibold">
                compare all plans side-by-side
              </Link>.
            </p>
          </div>
        </section>

        {/* Related Posts */}
        <section className="border-t border-[var(--color-border)] pt-8 mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/blog/hidden-costs-health-sharing-2026"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">Hidden Costs of Health Sharing Plans</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read article</span>
            </Link>
            <Link
              href="/blog/non-religious-health-sharing-options"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">Non-Religious Health Sharing Options</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read article</span>
            </Link>
            <Link
              href="/blog/5-questions-before-joining"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">5 Questions Before Joining Health Sharing</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read article</span>
            </Link>
            <Link
              href="/answers/vs-insurance"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">Health Sharing vs Insurance (Quick Answer)</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read answer</span>
            </Link>
            <Link href="/compare" className="card p-4 hover:shadow-lg transition">
              <span className="font-serif font-bold">Compare All Plans Side-by-Side</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Compare now</span>
            </Link>
            <Link href="/quiz" className="card p-4 hover:shadow-lg transition">
              <span className="font-serif font-bold">Find Your Best Plan (Free Quiz)</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Take quiz</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
