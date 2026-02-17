import { Metadata } from 'next'
import Link from 'next/link'
import { loadAllMinistries } from '@/lib/data'
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema'
import AnswerPageCTA from '@/components/AnswerPageCTA'

export const metadata: Metadata = {
  title: 'Health Sharing vs Health Insurance — What\'s the Difference? (2026)',
  description: 'Health sharing costs 40-60% less than unsubsidized ACA insurance ($115-$495/mo vs $400-$900/mo) but is not regulated, not guaranteed, and excludes some categories. Full comparison of costs, coverage, and trade-offs.',
  openGraph: {
    title: 'Health Sharing vs Health Insurance (2026)',
    description: 'Health sharing costs 40-60% less but trades regulatory protection for savings. Compare costs, coverage, and risks.',
    url: 'https://whichhealthshare.com/answers/vs-insurance',
    type: 'article',
  },
}

export default function VsInsurancePage() {
  const ministries = loadAllMinistries()

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Answers', url: '/answers' },
    { name: 'Health Sharing vs Insurance', url: '/answers/vs-insurance' },
  ])

  const faqs = [
    {
      question: 'Is health sharing legal?',
      answer: 'Yes. Health sharing ministries are legal in all 50 states. The ACA (Section 5000A) exempted health sharing ministry members from the individual mandate, provided the ministry has been in continuous operation since December 31, 1999. Health sharing is not regulated as insurance and is not subject to state insurance department oversight.',
    },
    {
      question: 'Does health sharing count as health insurance for tax purposes?',
      answer: 'No. Health sharing is not health insurance and does not satisfy the ACA individual mandate in states that still enforce it (CA, MA, NJ, RI, DC, VT). However, the federal penalty for not having insurance was reduced to $0 in 2019. In most states, there is no financial penalty for choosing health sharing over insurance.',
    },
    {
      question: 'Can health sharing deny my claim?',
      answer: 'Yes. Health sharing ministries are not required to pay any specific medical bill. Sharing is voluntary and based on the ministry\'s guidelines. Bills that fall outside sharing guidelines (pre-existing conditions during waiting periods, excluded services, lifestyle-related conditions) may not be shared. Unlike insurance, there is no state insurance commissioner to file an appeal with.',
    },
    {
      question: 'Is health sharing worth it if I qualify for ACA subsidies?',
      answer: 'Generally no. If you qualify for ACA premium subsidies (income below 400% of the federal poverty level, or ~$60,240 for an individual in 2026), subsidized ACA insurance may cost the same or less than health sharing while providing stronger regulatory protections. Health sharing makes the most financial sense for people who do not qualify for subsidies.',
    },
    {
      question: 'What happens if my health sharing ministry goes bankrupt?',
      answer: 'Because health sharing ministries are not regulated as insurance, there is no state guaranty fund to protect members if a ministry becomes insolvent. Members would lose access to sharing for pending and future medical bills. This risk is mitigated by choosing established ministries (CHM since 1981, Samaritan since 1994, Medi-Share since 1992) with large membership pools.',
    },
  ]

  const faqSchema = generateFAQSchema(faqs)
  const articleSchema = generateArticleSchema(
    'Health Sharing vs Health Insurance — What\'s the Difference?',
    'Health sharing costs 40-60% less than unsubsidized ACA insurance but is not regulated and not guaranteed. Compare costs, coverage, risks, and who each option is best for.'
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
          <span>Health Sharing vs Insurance</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">
          Health Sharing vs Health Insurance &mdash; What&apos;s the Difference?
        </h1>

        <p className="text-lg leading-relaxed mb-4">
          Health sharing costs 40&ndash;60% less than unsubsidized ACA health insurance: $115&ndash;$495/month
          for health sharing versus $400&ndash;$900/month for individual ACA plans without subsidies. Health sharing
          is not insurance &mdash; it is not regulated by state insurance departments, does not guarantee payment,
          and may exclude certain coverage categories. Insurance is regulated, has mandated benefits, and covers
          pre-existing conditions from day one.
        </p>
        <p className="text-lg leading-relaxed mb-8 text-[var(--color-text-secondary)]">
          Health sharing is best for healthy individuals and families seeking lower monthly costs who accept
          the trade-off of less guaranteed coverage. Insurance is best for people with pre-existing conditions,
          those who qualify for ACA subsidies, or anyone who needs the regulatory protections that insurance provides.
        </p>

        {/* Key Facts Table */}
        <div className="card p-6 mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Key Facts</h2>
          <table className="w-full text-left">
            <tbody>
              <tr className="border-b">
                <td className="py-3 font-semibold w-1/3">Health sharing cost range</td>
                <td className="py-3">$115&ndash;$495/mo (individual), $345&ndash;$1,485/mo (family)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-semibold">ACA insurance cost range</td>
                <td className="py-3">$400&ndash;$900/mo (individual, unsubsidized)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-semibold">Typical savings</td>
                <td className="py-3">40&ndash;60% less per month with health sharing</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-semibold">Regulatory status</td>
                <td className="py-3">Health sharing: unregulated. Insurance: state-regulated.</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">Pre-existing conditions</td>
                <td className="py-3">Insurance: day one. Health sharing: 0&ndash;36 month waiting period.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section: How costs compare */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          How Do Monthly Costs Compare Between Health Sharing and Insurance?
        </h2>
        <p className="mb-4">
          Individual health sharing plans range from $115/month (CHM, lowest tier) to $495/month (Samaritan
          Ministries, highest tier). The average across all featured plans is approximately $250&ndash;$300/month
          for an individual. Family plans range from $345/month (CHM) to $1,485/month (Samaritan Ministries).
        </p>
        <p className="mb-4">
          Unsubsidized ACA health insurance averages $400&ndash;$900/month for individuals in 2026, depending on
          state, age, and plan tier (Bronze, Silver, Gold, Platinum). A 40-year-old non-smoker pays approximately
          $450&ndash;$600/month for a Silver plan in most states. Family plans average $1,200&ndash;$2,400/month
          without subsidies.
        </p>
        <p className="mb-8">
          The cost comparison changes dramatically with ACA subsidies. A family of four earning $60,000/year may
          pay $200&ndash;$400/month for a Silver ACA plan after subsidies &mdash; comparable to or less than health
          sharing. Always check your subsidy eligibility before choosing health sharing over insurance.
        </p>

        {/* Section: What health sharing excludes */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          What Does Health Sharing Exclude That Insurance Covers?
        </h2>
        <p className="mb-4">
          ACA insurance mandates 10 essential health benefits: outpatient care, emergency services, hospitalization,
          maternity, mental health/substance abuse, prescription drugs, rehabilitation, lab services, preventive care,
          and pediatric services (including dental and vision for children). Every ACA plan must cover all 10 categories.
        </p>
        <p className="mb-4">
          Health sharing plans vary widely in what they cover. CHM excludes telehealth, prescriptions, and mental
          health. Samaritan Ministries excludes telehealth, prescriptions, and mental health. Medi-Share excludes
          prescriptions and mental health. Zion HealthShare and Sedera cover all major categories except dental and
          vision. No health sharing plan includes pediatric dental or vision.
        </p>
        <p className="mb-8">
          Lifestyle exclusions also differ. Most faith-based health sharing plans do not share costs related to
          substance abuse, injuries from illegal activities, or conditions arising from tobacco or alcohol use.
          Some exclude costs related to unmarried pregnancies. Insurance has no such lifestyle exclusions.
        </p>

        {/* Section: Risk comparison */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          What Are the Risks of Health Sharing vs Insurance?
        </h2>
        <p className="mb-4">
          The primary risk of health sharing is that it is voluntary. Ministries are not legally required to pay
          any specific bill. While established ministries (CHM, Samaritan, Medi-Share) have shared hundreds of
          millions of dollars in medical bills, there is no legal guarantee. If a ministry becomes insolvent, there
          is no state guaranty fund to protect members &mdash; unlike insurance, where state guaranty associations
          cover policyholders if an insurer fails.
        </p>
        <p className="mb-8">
          Insurance carries its own risks: higher costs, narrower networks (HMOs may restrict you to specific
          providers), prior authorization requirements, and the complexity of navigating deductibles, copays,
          coinsurance, and out-of-pocket maximums. However, insurance provides a legal contract with enforceable
          rights, appeals processes, and regulatory oversight by state insurance commissioners.
        </p>

        {/* Section: Who should choose what */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Who Should Choose Health Sharing vs Insurance?
        </h2>
        <p className="mb-4">
          Health sharing is best for: healthy individuals and families with no major pre-existing conditions,
          self-employed people and freelancers who do not qualify for ACA subsidies, people who want lower monthly
          costs and are willing to accept risk, and those who prefer simpler billing without network restrictions
          (many plans allow any doctor).
        </p>
        <p className="mb-8">
          Insurance is best for: anyone with a serious pre-existing condition requiring ongoing treatment, people
          who qualify for ACA premium subsidies, those who want regulatory protections and enforceable coverage
          guarantees, anyone in states with individual mandate penalties (CA, MA, NJ, RI, DC, VT), and people
          who need comprehensive prescription drug or mental health coverage.
        </p>

        {/* Comparison Table */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Health Sharing vs Insurance: Side-by-Side Comparison
        </h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b-2">
                <th className="py-3 pr-4">Feature</th>
                <th className="py-3 pr-4">Health Sharing</th>
                <th className="py-3 pr-4">ACA Insurance</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Monthly cost (individual)</td>
                <td className="py-3 pr-4">$115&ndash;$495</td>
                <td className="py-3 pr-4">$400&ndash;$900 (unsubsidized)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Regulated</td>
                <td className="py-3 pr-4">No</td>
                <td className="py-3 pr-4">Yes (state insurance departments)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Guaranteed payment</td>
                <td className="py-3 pr-4">No (voluntary sharing)</td>
                <td className="py-3 pr-4">Yes (legal contract)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Pre-existing conditions</td>
                <td className="py-3 pr-4">0&ndash;36 month waiting period</td>
                <td className="py-3 pr-4">Covered from day one</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Prescription drugs</td>
                <td className="py-3 pr-4">Some plans (Zion, Sedera, CrowdHealth)</td>
                <td className="py-3 pr-4">All plans (mandated)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Mental health</td>
                <td className="py-3 pr-4">Some plans (Zion, Sedera, CrowdHealth)</td>
                <td className="py-3 pr-4">All plans (mandated)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Dental/vision</td>
                <td className="py-3 pr-4">Not included</td>
                <td className="py-3 pr-4">Pediatric only (mandated)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Network</td>
                <td className="py-3 pr-4">Many allow any doctor</td>
                <td className="py-3 pr-4">HMO/PPO/EPO networks</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Appeals process</td>
                <td className="py-3 pr-4">Internal only</td>
                <td className="py-3 pr-4">Internal + state insurance commissioner</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold">Tax benefits</td>
                <td className="py-3 pr-4">Some plans HSA-compatible</td>
                <td className="py-3 pr-4">Premium tax credits available</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom Line */}
        <div className="card p-6 mb-10 border-l-4 border-[var(--color-primary)]">
          <h2 className="font-serif font-bold text-xl mb-3">The Bottom Line</h2>
          <p className="mb-2">
            Health sharing saves 40&ndash;60% on monthly costs compared to unsubsidized ACA insurance, but it is
            not insurance. You trade regulatory protections, guaranteed coverage, and mandated benefits for lower
            premiums. Zion HealthShare ($185/mo, 4.8/5) and CHM ($115/mo, 4.5/5) are the strongest health sharing
            options for most people.
          </p>
          <p>
            Check your ACA subsidy eligibility first. If subsidized insurance costs the same or less than health
            sharing, insurance is the better choice because it provides stronger protections. If you do not qualify
            for subsidies and are generally healthy, health sharing can cut your healthcare spending by $2,000&ndash;$5,000
            per year.
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

        <AnswerPageCTA />

        {/* Related Links */}
        <div className="card p-6 mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Related Resources</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/answers/pre-existing-conditions" className="text-[var(--color-primary)] font-semibold hover:underline">
                Which Plans Cover Pre-Existing Conditions? →
              </Link>
            </li>
            <li>
              <Link href="/answers/crowdhealth-vs-health-sharing" className="text-[var(--color-primary)] font-semibold hover:underline">
                CrowdHealth vs Health Sharing — Which Is Better? →
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
          Last updated: February 2026. Data sourced from ministry websites, Healthcare.gov, and verified against
          plan documents. WhichHealthShare is editorially independent. Some links may be affiliate links.
        </p>
      </div>
    </>
  )
}
