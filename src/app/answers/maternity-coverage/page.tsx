import { loadAllMinistries } from '@/lib/data'
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema'
import Link from 'next/link'
import AnswerPageCTA from '@/components/AnswerPageCTA'

export const metadata = {
  title: 'Which Health Sharing Plans Cover Maternity? (2026) — WhichHealthShare',
  description:
    'Maternity coverage comparison for health sharing plans. Medi-Share, CHM, Zion, and CrowdHealth maternity waiting periods, costs, and limits explained.',
}

const faqs = [
  {
    question: 'How long is the maternity waiting period for health sharing plans?',
    answer:
      'Most health sharing plans require a 10-12 month waiting period before maternity expenses are eligible for sharing. Medi-Share requires 12 months on their family plan. CHM requires 12 months of membership. Zion HealthShare includes maternity with a standard waiting period. You must be enrolled before becoming pregnant for expenses to be eligible.',
  },
  {
    question: 'Does health sharing cover C-sections?',
    answer:
      'Yes, most health sharing plans cover medically necessary C-sections after the maternity waiting period has been met. CHM covers cesarean delivery as part of normal pregnancy expenses. Medi-Share includes C-sections under their maternity benefit. The IUA (Initial Unshareable Amount) still applies to the total maternity episode.',
  },
  {
    question: 'Are prenatal visits covered by health sharing?',
    answer:
      'Prenatal visits are generally included as part of the maternity benefit once the waiting period is satisfied. Medi-Share covers prenatal care under their maternity sharing. CHM includes prenatal visits as part of eligible pregnancy expenses. Coverage for routine prenatal labs, ultrasounds, and office visits varies by plan.',
  },
  {
    question: 'What if I get pregnant during the waiting period?',
    answer:
      'If you become pregnant before completing the maternity waiting period, most plans will not share those maternity expenses. Some plans may offer partial sharing for pregnancies that begin during the waiting period but deliver after it ends. Always verify the specific policy with your plan before relying on maternity coverage.',
  },
  {
    question: 'Does CrowdHealth cover maternity?',
    answer:
      'CrowdHealth handles maternity through their crowdfunding model. Members have a $3,000 personal commitment for maternity events, after which the community funds the remaining costs. There is no traditional waiting period, but maternity must not be a pre-existing condition at enrollment. CrowdHealth is not a health sharing ministry — it is a crowdfunding platform.',
  },
]

export default function MaternityPage() {
  const ministries = loadAllMinistries()

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Answers', url: '/answers' },
    { name: 'Maternity Coverage', url: '/answers/maternity-coverage' },
  ])

  const faqSchema = generateFAQSchema(faqs)

  const articleSchema = generateArticleSchema(
    'Which Health Sharing Plans Cover Maternity?',
    'Comparison of maternity coverage across health sharing plans including waiting periods, costs, and coverage limits for 2026.'
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
          <span>Maternity Coverage</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">Which Health Sharing Plans Cover Maternity?</h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-6">
          Most health sharing plans cover maternity expenses, but only after a waiting period of 10-12 months. Medi-Share covers maternity after 12 months on their family plan. CHM covers normal pregnancy after 12 months of membership. Zion HealthShare includes maternity in their standard coverage. CrowdHealth uses a $3,000 member commitment model for maternity events.
        </p>

        <h2 className="font-serif font-bold text-2xl mb-4">Key Facts</h2>
        <table className="w-full mb-8">
          <tbody>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Typical Waiting Period</td>
              <td className="py-3">10-12 months before maternity is eligible</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Plans With Maternity</td>
              <td className="py-3">Medi-Share, CHM, Zion HealthShare, Samaritan, CrowdHealth</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Average Delivery Cost</td>
              <td className="py-3">$5,000-$11,000 (vaginal), $7,500-$14,500 (C-section)</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">IUA Applies</td>
              <td className="py-3">Yes, per-incident IUA ($500-$5,000) applies to maternity</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Must Enroll Before Pregnancy</td>
              <td className="py-3">Yes, pregnancy cannot be pre-existing at enrollment</td>
            </tr>
          </tbody>
        </table>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">How Does Health Sharing Maternity Coverage Work?</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Health sharing maternity coverage functions differently from traditional insurance. When you enroll in a health sharing plan, your maternity expenses become eligible for sharing only after you complete the waiting period — typically 10-12 months. This means you must be enrolled and actively contributing before becoming pregnant. Pregnancy that exists at the time of enrollment is considered pre-existing and will not be shared.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Once the waiting period is met, eligible maternity expenses include prenatal care, labor and delivery, hospital stays, and medically necessary C-sections. Your IUA (Initial Unshareable Amount) applies to the entire maternity episode as one incident. For example, if your IUA is $1,500 and your total maternity costs are $8,000, you pay $1,500 and the community shares the remaining $6,500.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">Which Plans Offer the Best Maternity Coverage?</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Medi-Share requires enrollment in their family plan and a 12-month waiting period. After that, normal pregnancy and delivery expenses are eligible for sharing up to the plan maximum. CHM covers maternity as part of their Gold program, with expenses eligible after 12 months of membership. CHM has no annual or lifetime sharing limit, which is a significant advantage for high-cost pregnancies.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Zion HealthShare includes maternity in their standard coverage with competitive waiting periods. Samaritan Ministries handles maternity through their Special Prayer Needs program, where members send shares directly to cover pregnancy expenses. CrowdHealth takes a different approach — members have a $3,000 personal commitment for maternity, and the community crowdfunds the rest. CrowdHealth has no traditional waiting period for maternity, but the pregnancy cannot be pre-existing.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">What About Complications and High-Risk Pregnancies?</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Most health sharing plans cover medically necessary complications during pregnancy, including emergency C-sections, preeclampsia treatment, and NICU stays for the newborn. However, coverage for elective procedures, fertility treatments, and surrogacy is generally excluded. Some plans limit sharing for pregnancies in women over 40 or for complications related to pre-existing conditions.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            NICU coverage is an important consideration. CHM covers NICU expenses as part of the baby's medical needs (the baby must be added to the plan within 30 days). Medi-Share includes NICU under the newborn's coverage. Average NICU costs run $3,000-$5,000 per day, so understanding your plan's limits on newborn care is critical for families planning ahead.
          </p>
        </section>

        <h2 className="font-serif font-bold text-2xl mb-4">Maternity Coverage Comparison</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--color-bg-warm)]">
                <th className="px-4 py-3 font-bold text-left">Plan</th>
                <th className="px-4 py-3 font-bold text-left">Maternity Included</th>
                <th className="px-4 py-3 font-bold text-left">Waiting Period</th>
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
                    {ministry.plans[0]?.includes.maternity ? 'Yes' : 'No'}
                  </td>
                  <td className="px-4 py-3">10-12 months</td>
                  <td className="px-4 py-3 text-sm text-[var(--color-text-secondary)]">
                    {ministry.slug === 'medi-share' && 'Family plan required; 12-month wait'}
                    {ministry.slug === 'chm' && 'Gold program; no lifetime cap'}
                    {ministry.slug === 'zion-healthshare' && 'Standard coverage includes maternity'}
                    {ministry.slug === 'samaritan-ministries' && 'Special Prayer Needs program'}
                    {ministry.slug === 'crowdhealth' && '$3,000 member commitment'}
                    {ministry.slug === 'sedera' && 'Included after waiting period'}
                    {ministry.slug === 'presidio-healthcare' && 'Insurance — standard maternity coverage'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">The Bottom Line</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            If you are planning a pregnancy, health sharing can work — but you need to plan ahead. Enroll at least 12 months before you intend to conceive. CHM offers the strongest maternity benefit due to unlimited sharing and comprehensive coverage of complications. CrowdHealth is worth considering if you want to avoid a long waiting period, though the $3,000 personal commitment is higher than some IUA options. For guaranteed maternity coverage with no waiting period, traditional health insurance or a plan like Presidio remains the most reliable option.
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
              <Link href="/answers/what-is-iua" className="text-[var(--color-accent)] hover:underline">
                What Is an IUA (Initial Unshareable Amount)?
              </Link>
            </li>
            <li>
              <Link href="/answers/pre-existing-conditions" className="text-[var(--color-accent)] hover:underline">
                Which Plans Cover Pre-Existing Conditions?
              </Link>
            </li>
            <li>
              <Link href="/answers/prescription-coverage" className="text-[var(--color-accent)] hover:underline">
                Which Plans Cover Prescriptions?
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
