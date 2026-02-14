import { Metadata } from 'next'
import Link from 'next/link'
import { loadAllMinistries } from '@/lib/data'
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Which Health Sharing Plans Cover Pre-Existing Conditions? (2026)',
  description: 'Most health sharing plans accept pre-existing conditions with 6-36 month waiting periods. Zion HealthShare has NO waiting period. CHM waits 6 months. Medi-Share waits 12 months. Full comparison.',
  openGraph: {
    title: 'Health Sharing Plans for Pre-Existing Conditions (2026)',
    description: 'Zion HealthShare covers pre-existing conditions from day one. Compare waiting periods across all major plans.',
    url: 'https://whichhealthshare.com/answers/pre-existing-conditions',
    type: 'article',
  },
}

export default function PreExistingConditionsPage() {
  const ministries = loadAllMinistries()

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Answers', url: '/answers' },
    { name: 'Pre-Existing Conditions', url: '/answers/pre-existing-conditions' },
  ])

  const faqs = [
    {
      question: 'What counts as a pre-existing condition for health sharing?',
      answer: 'A pre-existing condition is any medical condition diagnosed, treated, or showing symptoms in the 12-36 months before enrollment, depending on the plan. Common examples include diabetes, hypertension, asthma, thyroid disorders, heart disease, and cancer. Each ministry defines the lookback period differently — Zion uses 36 months, Medi-Share uses 36 months, CHM uses 12 months.',
    },
    {
      question: 'Does Zion HealthShare really have no waiting period for pre-existing conditions?',
      answer: 'Yes. Zion HealthShare shares pre-existing conditions from month one with no waiting period and no phased sharing schedule. This is unique among health sharing plans. Most competitors impose 6-36 month waiting periods. Zion\'s policy applies to all accepted conditions regardless of severity.',
    },
    {
      question: 'Can I be denied membership for a pre-existing condition?',
      answer: 'Most health sharing plans accept members with pre-existing conditions but may exclude specific conditions or impose waiting periods. CrowdHealth does not cover pre-existing conditions in year one and phases them in over 4 years. Unlike ACA insurance, health sharing plans are not required to accept all applicants or cover all conditions.',
    },
    {
      question: 'How does phased sharing work for pre-existing conditions?',
      answer: 'Phased sharing gradually increases the percentage of a pre-existing condition that is eligible for sharing over time. Medi-Share phases at 25% year one, 50% year two, 75% year three, and 100% year four. CrowdHealth limits pre-existing to $0 year one, $25,000 year two, $50,000 year three, and $100,000 year four and beyond.',
    },
    {
      question: 'Is health insurance better than health sharing for pre-existing conditions?',
      answer: 'ACA-compliant health insurance covers all pre-existing conditions from day one with no waiting period — this is mandated by federal law. Presidio Healthcare (regulated insurance) also covers pre-existing from day one at $300-$600/month for individuals. If you have a serious pre-existing condition requiring immediate treatment, insurance provides more guaranteed protection than health sharing.',
    },
  ]

  const faqSchema = generateFAQSchema(faqs)
  const articleSchema = generateArticleSchema(
    'Which Health Sharing Plans Cover Pre-Existing Conditions?',
    'Most health sharing plans accept pre-existing conditions with waiting periods of 6-36 months. Zion HealthShare is notable for having no waiting period. Full comparison of all plans.'
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="section-narrow pt-8">
        <nav className="text-sm text-[var(--color-text-secondary)] mb-6">
          <Link href="/">Home</Link> <span className="mx-1">/</span>
          <Link href="/answers">Answers</Link> <span className="mx-1">/</span>
          <span>Pre-Existing Conditions</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">
          Which Health Sharing Plans Cover Pre-Existing Conditions?
        </h1>

        <p className="text-lg leading-relaxed mb-4">
          Most health sharing plans accept members with pre-existing conditions but impose waiting periods of
          6&ndash;36 months before those conditions are eligible for sharing. Zion HealthShare is the only major
          plan with no waiting period for pre-existing conditions &mdash; sharing begins from month one. CHM has a
          6-month waiting period. Medi-Share and Samaritan Ministries impose 12-month waits with phased sharing.
        </p>
        <p className="text-lg leading-relaxed mb-8 text-[var(--color-text-secondary)]">
          CrowdHealth does not cover pre-existing conditions in year one and phases them in over 4 years ($25K year 2,
          $50K year 3, $100K year 4+). Presidio Healthcare, which is regulated health insurance (not health sharing),
          covers pre-existing conditions from day one with no waiting period or limits.
        </p>

        {/* Key Facts Table */}
        <div className="card p-6 mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Key Facts</h2>
          <table className="w-full text-left">
            <tbody>
              <tr className="border-b">
                <td className="py-3 font-semibold w-1/3">No waiting period</td>
                <td className="py-3">Zion HealthShare (shared from month one)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-semibold">6-month wait</td>
                <td className="py-3">CHM (50% first 6 months, 100% after), Sedera (50%/100%)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-semibold">12-month wait</td>
                <td className="py-3">Medi-Share (phased 25%&ndash;100% over 4 years), Samaritan (50% first year)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-semibold">Phased over 4 years</td>
                <td className="py-3">CrowdHealth ($0 yr 1, $25K yr 2, $50K yr 3, $100K yr 4+)</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">Covered from day one</td>
                <td className="py-3">Presidio Healthcare (regulated insurance, not health sharing)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section: What is a pre-existing condition */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          What Counts as a Pre-Existing Condition in Health Sharing?
        </h2>
        <p className="mb-4">
          Each health sharing plan defines pre-existing conditions differently, but the general standard is any medical
          condition that was diagnosed, treated, or showed symptoms within a lookback period before enrollment. Common
          pre-existing conditions include diabetes, hypertension, high cholesterol, asthma, COPD, heart disease, cancer
          (current or in remission), autoimmune disorders, and mental health conditions.
        </p>
        <p className="mb-8">
          Lookback periods vary: CHM uses a 12-month lookback, while Medi-Share and Zion HealthShare use 36 months.
          A condition that was resolved more than 36 months ago may not be classified as pre-existing under some plans.
          Pregnancy is generally not treated as a pre-existing condition but has its own separate waiting period
          (typically 10&ndash;12 months from enrollment).
        </p>

        {/* Section: Zion's approach */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Why Does Zion HealthShare Have No Pre-Existing Waiting Period?
        </h2>
        <p className="mb-4">
          Zion HealthShare (founded 2017, Denver, CO) is the only major health sharing plan that shares pre-existing
          conditions from month one with no waiting period and no phased sharing schedule. This policy makes Zion
          uniquely attractive for members with chronic conditions who need immediate cost-sharing support.
        </p>
        <p className="mb-8">
          The trade-off is that Zion&apos;s monthly contributions ($185&ndash;$268 for individuals) are higher than
          CHM ($115&ndash;$264), which has the lowest starting price but a 6-month pre-existing wait. Zion offsets
          risk through its co-share model (10&ndash;20% member responsibility) and IUA (Initial Unshareable Amount)
          options of $500, $1,000, or $2,000. Members with pre-existing conditions who would otherwise face months
          of uncovered medical costs often find Zion&apos;s higher monthly cost worthwhile.
        </p>

        {/* Section: How phased sharing works */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          How Does Phased Sharing Work for Pre-Existing Conditions?
        </h2>
        <p className="mb-4">
          Phased sharing is a graduated approach where the plan increases the percentage of pre-existing condition costs
          eligible for sharing over time. Medi-Share uses a 4-year phase: 25% shared in year one, 50% in year two,
          75% in year three, and 100% from year four onward. This means a $10,000 medical bill for a pre-existing
          condition in year one would only have $2,500 eligible for sharing (minus your IUA).
        </p>
        <p className="mb-8">
          CrowdHealth uses dollar caps rather than percentages: $0 in year one (no pre-existing coverage), $25,000 maximum
          in year two, $50,000 in year three, and $100,000 per year from year four onward. Samaritan Ministries shares
          50% of pre-existing conditions in the first year, then 100% from year two. CHM and Sedera both use a simpler
          model: 50% for the first 6 months, then 100% sharing after 6 months.
        </p>

        {/* Section: Insurance comparison */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Should I Choose Insurance Instead If I Have Pre-Existing Conditions?
        </h2>
        <p className="mb-4">
          ACA-compliant health insurance covers all pre-existing conditions from day one &mdash; this is federal law
          under the Affordable Care Act. If you have a serious condition requiring immediate, ongoing treatment
          (cancer treatment, dialysis, organ transplant recovery, etc.), ACA insurance or Presidio Healthcare provides
          the most guaranteed protection. Presidio costs $300&ndash;$600/month for individuals with no waiting period
          and regulated protections.
        </p>
        <p className="mb-8">
          For moderate pre-existing conditions (managed hypertension, controlled diabetes, stable thyroid conditions),
          Zion HealthShare&apos;s no-waiting-period policy at $185&ndash;$268/month can provide significant savings
          over unsubsidized ACA premiums ($400&ndash;$900/month). The key question is whether you need the regulatory
          guarantee of insurance or are comfortable with the sharing model. Health sharing is not insurance and does
          not guarantee payment.
        </p>

        {/* Comparison Table */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Pre-Existing Condition Policy by Plan
        </h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b-2">
                <th className="py-3 pr-4">Plan</th>
                <th className="py-3 pr-4">Accepted</th>
                <th className="py-3 pr-4">Waiting Period</th>
                <th className="py-3 pr-4">Phased Sharing</th>
                <th className="py-3 pr-4">Monthly (Individual)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-[var(--color-primary-lighter)]">
                <td className="py-3 pr-4 font-semibold">Zion HealthShare</td>
                <td className="py-3 pr-4">Yes</td>
                <td className="py-3 pr-4">None</td>
                <td className="py-3 pr-4">No &mdash; 100% from month 1</td>
                <td className="py-3 pr-4">$185&ndash;$268</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">CHM</td>
                <td className="py-3 pr-4">Yes</td>
                <td className="py-3 pr-4">6 months</td>
                <td className="py-3 pr-4">50% first 6 mo, 100% after</td>
                <td className="py-3 pr-4">$115&ndash;$264</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Sedera</td>
                <td className="py-3 pr-4">Yes</td>
                <td className="py-3 pr-4">6 months</td>
                <td className="py-3 pr-4">50% first 6 mo, 100% after</td>
                <td className="py-3 pr-4">$199&ndash;$379</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Medi-Share</td>
                <td className="py-3 pr-4">Yes</td>
                <td className="py-3 pr-4">12 months</td>
                <td className="py-3 pr-4">25% yr 1, 50% yr 2, 75% yr 3, 100% yr 4</td>
                <td className="py-3 pr-4">$227&ndash;$405</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Samaritan Ministries</td>
                <td className="py-3 pr-4">Yes</td>
                <td className="py-3 pr-4">12 months</td>
                <td className="py-3 pr-4">50% first year</td>
                <td className="py-3 pr-4">$220&ndash;$495</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">CrowdHealth</td>
                <td className="py-3 pr-4">Limited</td>
                <td className="py-3 pr-4">Phased over 4 years</td>
                <td className="py-3 pr-4">$0 yr 1, $25K yr 2, $50K yr 3, $100K yr 4+</td>
                <td className="py-3 pr-4">~$140 avg</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold">Presidio Healthcare</td>
                <td className="py-3 pr-4">Yes</td>
                <td className="py-3 pr-4">None (insurance)</td>
                <td className="py-3 pr-4">Covered from day 1 (guaranteed)</td>
                <td className="py-3 pr-4">$300&ndash;$600</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom Line */}
        <div className="card p-6 mb-10 border-l-4 border-[var(--color-primary)]">
          <h2 className="font-serif font-bold text-xl mb-3">The Bottom Line</h2>
          <p className="mb-2">
            Zion HealthShare is the only major health sharing plan that covers pre-existing conditions from month one
            with no waiting period ($185&ndash;$268/mo, 4.8/5 rating). Every other health sharing plan imposes a
            waiting period of 6&ndash;12 months or phases in coverage over multiple years.
          </p>
          <p>
            If you need guaranteed, regulated coverage for a serious pre-existing condition, Presidio Healthcare
            ($300&ndash;$600/mo) is actual health insurance that covers pre-existing from day one. For moderate
            conditions where you can accept the health sharing model, Zion offers the best combination of immediate
            coverage and competitive pricing.
          </p>
        </div>

        {/* FAQ Section */}
        <h2 className="font-serif font-bold text-2xl mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-10">
          {faqs.map((faq, i) => (
            <details key={i} className="card p-5">
              <summary className="font-semibold cursor-pointer">{faq.question}</summary>
              <p className="mt-3 text-[var(--color-text-secondary)]">{faq.answer}</p>
            </details>
          ))}
        </div>

        {/* Related Links */}
        <div className="card p-6 mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Related Resources</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/answers/vs-insurance" className="text-[var(--color-primary)] font-semibold hover:underline">
                Health Sharing vs Health Insurance — What&apos;s the Difference? →
              </Link>
            </li>
            <li>
              <Link href="/answers/no-church-requirement" className="text-[var(--color-primary)] font-semibold hover:underline">
                Which Plans Don&apos;t Require Church Attendance? →
              </Link>
            </li>
            <li>
              <Link href="/answers/non-religious-plans" className="text-[var(--color-primary)] font-semibold hover:underline">
                What Are Non-Religious Health Sharing Plans? →
              </Link>
            </li>
            <li>
              <Link href="/compare" className="text-[var(--color-primary)] font-semibold hover:underline">
                Compare All Plans Side-by-Side →
              </Link>
            </li>
            <li>
              <Link href="/quiz" className="text-[var(--color-primary)] font-semibold hover:underline">
                Take the Free Quiz — Find Your Best Plan →
              </Link>
            </li>
          </ul>
        </div>

        <p className="text-sm text-[var(--color-text-secondary)] mb-8">
          Last updated: February 2026. Data sourced from ministry websites and verified against plan documents.
          WhichHealthShare is editorially independent. Some links may be affiliate links.
        </p>
      </div>
    </>
  )
}
