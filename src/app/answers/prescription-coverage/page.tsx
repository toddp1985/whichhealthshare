import { loadAllMinistries } from '@/lib/data'
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema'
import Link from 'next/link'
import AnswerPageCTA from '@/components/AnswerPageCTA'

export const metadata = {
  title: 'Which Health Sharing Plans Cover Prescriptions? (2026) — WhichHealthShare',
  description:
    'Prescription drug coverage comparison for health sharing plans. Monthly caps, formularies, and pharmacy discount programs for Medi-Share, CHM, Zion, and more.',
}

const faqs = [
  {
    question: 'Do health sharing plans cover maintenance medications?',
    answer:
      'Coverage for maintenance medications varies significantly by plan. Medi-Share covers maintenance prescriptions through their Rx program with monthly caps. CHM shares prescription costs as part of eligible medical expenses but may limit long-term maintenance drugs. Zion HealthShare includes prescriptions but with formulary restrictions. Most plans are better suited for acute prescriptions than ongoing daily medications.',
  },
  {
    question: 'What are the monthly prescription caps for health sharing?',
    answer:
      'Monthly prescription caps typically range from $125 to $400 depending on the plan and tier. Medi-Share caps vary by plan level. CHM includes prescriptions as part of the overall medical expense sharing without a separate cap, but individual prescription costs may be reviewed. Some plans use tiered caps where generic drugs have higher limits than brand-name medications.',
  },
  {
    question: 'Are specialty drugs covered by health sharing?',
    answer:
      'Specialty drugs (biologics, injectables, and high-cost medications) are generally the weakest area of health sharing prescription coverage. Most plans either exclude specialty drugs entirely or have strict dollar limits. If you rely on specialty medications costing $1,000+ per month, traditional health insurance is almost always a better fit. Some plans may share specialty drug costs on a case-by-case basis.',
  },
  {
    question: 'Can I use pharmacy discount cards with health sharing?',
    answer:
      'Yes. Many health sharing plans provide pharmacy discount cards (such as SingleCare or RxAssist partnerships) that offer negotiated rates at major pharmacies. These discounts can reduce prescription costs by 30-80% at chains like CVS, Walgreens, and Walmart. Discount cards can be used alongside your health sharing plan and do not count toward your IUA.',
  },
  {
    question: 'Does CrowdHealth cover prescription drugs?',
    answer:
      'CrowdHealth does not have a traditional prescription benefit. Prescription costs are handled through their crowdfunding model, where members submit bills and the community votes to fund them. For expensive prescriptions tied to a medical event, the community typically funds them. For routine monthly prescriptions, members generally pay out of pocket or use discount programs like GoodRx.',
  },
]

export default function PrescriptionCoveragePage() {
  const ministries = loadAllMinistries()

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Answers', url: '/answers' },
    { name: 'Prescription Coverage', url: '/answers/prescription-coverage' },
  ])

  const faqSchema = generateFAQSchema(faqs)

  const articleSchema = generateArticleSchema(
    'Which Health Sharing Plans Cover Prescriptions?',
    'Prescription drug coverage comparison across health sharing ministries including monthly caps, formulary restrictions, and pharmacy discount programs.'
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="section-narrow pt-8">
        <nav className="text-sm text-[var(--color-text-secondary)] mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/answers" className="hover:underline">Answers</Link>
          <span className="mx-2">/</span>
          <span>Prescription Coverage</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">Which Health Sharing Plans Cover Prescriptions?</h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-6">
          Most health sharing plans provide limited prescription coverage with monthly caps ranging from $125 to $400. Zion HealthShare includes prescriptions in their standard plans. Medi-Share covers prescriptions through a dedicated Rx program. CHM shares prescription costs as part of eligible medical expenses. Specialty drugs and ongoing maintenance medications are generally the weakest point of health sharing prescription benefits.
        </p>

        <h2 className="font-serif font-bold text-2xl mb-4">Key Facts</h2>
        <table className="w-full mb-8">
          <tbody>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Monthly Rx Caps</td>
              <td className="py-3">$125-$400/month depending on plan and tier</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Generic Drug Savings</td>
              <td className="py-3">30-80% off retail with plan discount cards</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Specialty Drugs</td>
              <td className="py-3">Limited or excluded by most plans</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Pharmacy Networks</td>
              <td className="py-3">Most plans accepted at major chains (CVS, Walgreens, Walmart)</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Best for Prescriptions</td>
              <td className="py-3">Zion HealthShare and Medi-Share offer the most comprehensive Rx benefits</td>
            </tr>
          </tbody>
        </table>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">How Does Prescription Sharing Work in Health Sharing Plans?</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Prescription coverage in health sharing plans works differently from traditional insurance formularies. Most plans share prescription costs either as part of a dedicated Rx program or as a component of eligible medical expenses. The key difference: health sharing prescription benefits typically have monthly dollar caps rather than copay structures. If your prescriptions cost $200/month and your plan caps at $150/month, you pay the $50 difference out of pocket.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Prescriptions related to a specific medical incident (such as antibiotics after surgery or pain medication following an ER visit) are usually shared as part of that incident and count toward your IUA. Ongoing maintenance medications — like blood pressure drugs, cholesterol medication, or thyroid hormones — are handled separately and subject to the monthly prescription cap.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">Which Plans Have the Best Prescription Benefits?</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Zion HealthShare includes prescriptions as a standard benefit in all their plans, with access to the Cigna PPO network for negotiated pharmacy rates. Medi-Share operates a dedicated Rx program that covers both acute and maintenance medications, though monthly caps apply based on your plan level. CHM shares prescription costs as part of overall medical expenses, which means prescriptions tied to a medical condition or incident are generally covered without a separate cap.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Samaritan Ministries does not have a formal prescription program. Members pay for prescriptions out of pocket and may submit large prescription bills as a Special Prayer Need. Sedera includes prescription sharing with their medical cost sharing program. For members who take multiple daily medications, the prescription benefit alone can be the deciding factor between plans.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">How Can I Reduce Prescription Costs with Health Sharing?</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Several strategies can lower your prescription spending alongside a health sharing plan. First, use pharmacy discount programs like GoodRx, SingleCare, or your plan's built-in discount card — generic drugs often cost $4-$15 with these programs. Second, ask your doctor about generic alternatives; generic medications are chemically identical to brand-name drugs and cost 80-85% less on average. Third, consider mail-order pharmacies like Amazon Pharmacy or CostPlus Drugs, which offer transparent pricing without insurance markups.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Walmart's $4 prescription list covers over 300 generic medications at $4 for a 30-day supply or $10 for a 90-day supply. Costco Pharmacy does not require a membership for prescriptions and often has the lowest retail prices. Combining these strategies with your health sharing plan's prescription benefit can keep monthly drug costs manageable for most members.
          </p>
        </section>

        <h2 className="font-serif font-bold text-2xl mb-4">Prescription Coverage Comparison</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--color-bg-warm)]">
                <th className="px-4 py-3 font-bold text-left">Plan</th>
                <th className="px-4 py-3 font-bold text-left">Rx Included</th>
                <th className="px-4 py-3 font-bold text-left">Monthly Cap</th>
                <th className="px-4 py-3 font-bold text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {ministries.map((ministry) => (
                <tr key={ministry.slug} className="border-b border-[var(--color-border)]">
                  <td className="px-4 py-3 font-bold">
                    <Link href={`/reviews/${ministry.slug}`} className="text-[var(--color-accent)] hover:underline">
                      {ministry.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    {ministry.plans[0]?.includes.prescriptions ? 'Yes' : 'No'}
                  </td>
                  <td className="px-4 py-3">
                    {ministry.slug === 'medi-share' && '$125-$375/mo'}
                    {ministry.slug === 'chm' && 'No separate cap'}
                    {ministry.slug === 'zion-healthshare' && '$200-$400/mo'}
                    {ministry.slug === 'samaritan-ministries' && 'N/A — out of pocket'}
                    {ministry.slug === 'crowdhealth' && 'Crowdfunded'}
                    {ministry.slug === 'sedera' && 'Varies by plan'}
                    {ministry.slug === 'presidio-healthcare' && 'Standard insurance Rx'}
                  </td>
                  <td className="px-4 py-3 text-sm text-[var(--color-text-secondary)]">
                    {ministry.slug === 'medi-share' && 'Dedicated Rx program; discount card included'}
                    {ministry.slug === 'chm' && 'Shared as part of medical expenses'}
                    {ministry.slug === 'zion-healthshare' && 'Cigna network pharmacy rates'}
                    {ministry.slug === 'samaritan-ministries' && 'No formal Rx program'}
                    {ministry.slug === 'crowdhealth' && 'Community crowdfunds large Rx bills'}
                    {ministry.slug === 'sedera' && 'Included in medical cost sharing'}
                    {ministry.slug === 'presidio-healthcare' && 'Formulary-based copays'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">The Bottom Line</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Health sharing prescription coverage works well for members who take few or no daily medications and primarily need prescriptions for acute conditions. If you take 1-2 generic maintenance medications, plans like Medi-Share or Zion HealthShare can adequately cover your needs. If you rely on specialty drugs, biologics, or multiple expensive brand-name medications, traditional health insurance will provide significantly better prescription coverage. Pharmacy discount programs like GoodRx and CostPlus Drugs are essential tools for any health sharing member.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <details key={index} className="mb-4 border border-[var(--color-border)] rounded-lg">
              <summary className="p-4 font-bold cursor-pointer hover:bg-[var(--color-bg-warm)]">
                {faq.question}
              </summary>
              <p className="px-4 pb-4 text-[var(--color-text-secondary)]">{faq.answer}</p>
            </details>
          ))}
        </section>

        <AnswerPageCTA />

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">Related Pages</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/compare" className="text-[var(--color-accent)] hover:underline">
                Compare All Health Sharing Plans
              </Link>
            </li>
            <li>
              <Link href="/quiz" className="text-[var(--color-accent)] hover:underline">
                Take the Quiz — Find Your Best Plan
              </Link>
            </li>
            <li>
              <Link href="/answers/any-doctor" className="text-[var(--color-accent)] hover:underline">
                Can I See Any Doctor with Health Sharing?
              </Link>
            </li>
            <li>
              <Link href="/answers/what-is-iua" className="text-[var(--color-accent)] hover:underline">
                What Is an IUA (Initial Unshareable Amount)?
              </Link>
            </li>
            <li>
              <Link href="/answers/maternity-coverage" className="text-[var(--color-accent)] hover:underline">
                Which Plans Cover Maternity?
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
