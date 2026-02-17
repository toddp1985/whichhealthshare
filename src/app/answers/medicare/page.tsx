import { loadAllMinistries } from '@/lib/data'
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema'
import Link from 'next/link'
import AnswerPageCTA from '@/components/AnswerPageCTA'

export const metadata = {
  title: 'Can I Use Health Sharing with Medicare? (2026) — WhichHealthShare',
  description:
    'Health sharing and Medicare eligibility explained. Why most plans exclude Medicare-eligible members, exceptions for 65+ members, and when health sharing makes sense vs. Medicare.',
}

const faqs = [
  {
    question: 'Can I enroll in health sharing if I am over 65?',
    answer:
      'Most health sharing ministries will not accept new members who are 65 or older and eligible for Medicare. However, there are exceptions. CHM\'s Brother\'s Keeper program accepts members of any age. If you enrolled in a health sharing plan before age 65, some plans allow you to continue membership. Contact the specific ministry to ask about their age and Medicare eligibility policies before assuming you cannot enroll.',
  },
  {
    question: 'Is health sharing a substitute for Medicare?',
    answer:
      'No. Health sharing is not a substitute for Medicare and does not satisfy Medicare enrollment requirements. If you are eligible for Medicare and fail to enroll during your initial enrollment period, you may face permanent late enrollment penalties (1% per month for Part B, added to your premium for life). Health sharing is not recognized by the federal government as creditable coverage. Always enroll in Medicare when first eligible.',
  },
  {
    question: 'Can I use health sharing to supplement Medicare?',
    answer:
      'In theory, you could use a health sharing plan alongside Medicare to cover gaps, but this is rarely practical or cost-effective. Medicare Supplement (Medigap) plans are specifically designed to cover what Medicare does not. Medigap Plan G, for example, covers nearly all out-of-pocket costs for $100-$250/month. A health sharing plan on top of Medicare would be redundant and more expensive than a Medigap policy for the coverage provided.',
  },
  {
    question: 'What happens to my health sharing if I turn 65?',
    answer:
      'Policies vary by plan. Some health sharing ministries allow existing members to continue past age 65, while others require members to transition to Medicare at 65. Medi-Share, for example, allows members to continue but encourages Medicare enrollment. CHM allows continued membership at any age. Check your specific plan\'s guidelines well before turning 65 so you can plan your Medicare enrollment accordingly.',
  },
  {
    question: 'What is the Medicare late enrollment penalty?',
    answer:
      'If you do not enroll in Medicare Part B during your initial enrollment period (3 months before to 3 months after turning 65) and do not have qualifying employer coverage, you face a permanent penalty. The penalty is 10% of the Part B premium for each 12-month period you could have had Part B but did not. In 2026, the standard Part B premium is approximately $185/month. Delaying enrollment by 2 years would add roughly $37/month to your premium permanently.',
  },
]

export default function MedicarePage() {
  const ministries = loadAllMinistries()

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Answers', url: '/answers' },
    { name: 'Medicare', url: '/answers/medicare' },
  ])

  const faqSchema = generateFAQSchema(faqs)

  const articleSchema = generateArticleSchema(
    'Can I Use Health Sharing with Medicare?',
    'Analysis of health sharing and Medicare compatibility, enrollment requirements, and when each option makes sense for members approaching or past age 65.'
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
          <span>Medicare</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">Can I Use Health Sharing with Medicare?</h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-6">
          Health sharing is generally designed for people under 65 who are not eligible for Medicare. Most health sharing ministries will not accept members who are Medicare-eligible. However, some plans — like CHM's Brother's Keeper program — accept members of any age. Health sharing is not a substitute for Medicare and does not satisfy Medicare enrollment requirements. If you are 65 or older, Medicare is almost always the better and more reliable option.
        </p>

        <h2 className="font-serif font-bold text-2xl mb-4">Key Facts</h2>
        <table className="w-full mb-8">
          <tbody>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Medicare Eligibility</td>
              <td className="py-3">Age 65+ (or younger with qualifying disability)</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Health Sharing Accepts 65+</td>
              <td className="py-3">Rarely — CHM Brother's Keeper is the main exception</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Medicare Part B Premium (2026)</td>
              <td className="py-3">~$185/month (standard; income-adjusted for higher earners)</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Late Enrollment Penalty</td>
              <td className="py-3">10% per year of delay, added permanently to Part B premium</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Health Sharing = Creditable Coverage?</td>
              <td className="py-3">No — does not count toward avoiding Medicare penalties</td>
            </tr>
          </tbody>
        </table>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">Why Do Most Health Sharing Plans Exclude Medicare-Eligible Members?</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Health sharing ministries are designed as alternatives to commercial health insurance for working-age adults and families. Medicare provides comprehensive, government-subsidized coverage that is significantly more protective than health sharing for seniors. Most health sharing plans exclude Medicare-eligible members for two reasons: first, the risk profile of 65+ members is substantially higher (average healthcare spending for 65+ is $22,000/year vs. $6,000 for 19-44), and second, Medicare provides superior coverage at a lower effective cost for seniors.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            From a practical standpoint, health sharing plans are voluntary — they are not obligated to share any expenses. For members over 65 with higher medical utilization, the sharing community would bear disproportionate costs. Medicare, by contrast, is funded through payroll taxes, general revenue, and premiums, making it financially sustainable for an older population. This is why the standard recommendation is always to enroll in Medicare when eligible.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">What Are My Options If I Am Approaching 65?</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            If you are currently on a health sharing plan and approaching age 65, begin planning your Medicare transition 6-12 months in advance. Your Initial Enrollment Period for Medicare starts 3 months before your 65th birthday and ends 3 months after. During this window, enroll in Medicare Part A (hospital coverage, free for most people) and Part B (medical coverage, ~$185/month). Missing this window triggers permanent late enrollment penalties.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            After enrolling in Medicare Parts A and B, decide between Original Medicare with a Medigap supplement or a Medicare Advantage (Part C) plan. Medigap Plan G is the most popular supplement, covering nearly all out-of-pocket costs for $100-$250/month depending on your state and age. Medicare Advantage plans often have $0 premiums and include dental, vision, and prescription coverage, but use HMO or PPO networks. Either option provides more comprehensive and reliable coverage than health sharing for members 65 and older.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">Are There Any Health Sharing Options for Seniors?</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            CHM (Christian Healthcare Ministries) stands out as the primary health sharing option for seniors through their Brother's Keeper program. This program accepts members of any age and provides catastrophic cost sharing for large medical events. CHM's Gold program has no age limit and no annual or lifetime sharing cap. For faith-based seniors who want supplemental coverage alongside Medicare, CHM is the most viable health sharing option.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            That said, using CHM or any health sharing plan as your primary coverage after 65 is not recommended. Medicare provides guaranteed coverage backed by the federal government. Health sharing is voluntary and has no legal obligation to share any expense. For seniors, the combination of Medicare Parts A and B plus a Medigap supplement or Medicare Advantage plan provides far more reliable and comprehensive protection than health sharing alone.
          </p>
        </section>

        <h2 className="font-serif font-bold text-2xl mb-4">Health Sharing vs. Medicare Comparison</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--color-bg-warm)]">
                <th className="px-4 py-3 font-bold text-left">Feature</th>
                <th className="px-4 py-3 font-bold text-left">Health Sharing</th>
                <th className="px-4 py-3 font-bold text-left">Medicare (Parts A+B)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[var(--color-border)]">
                <td className="px-4 py-3 font-bold">Monthly Cost</td>
                <td className="px-4 py-3">$150-$500+/month</td>
                <td className="px-4 py-3">$0 (Part A) + ~$185 (Part B)</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="px-4 py-3 font-bold">Legal Guarantee</td>
                <td className="px-4 py-3">None — voluntary sharing</td>
                <td className="px-4 py-3">Federal law mandates coverage</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="px-4 py-3 font-bold">Pre-Existing Conditions</td>
                <td className="px-4 py-3">Waiting periods (1-3 years)</td>
                <td className="px-4 py-3">Covered from day one</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="px-4 py-3 font-bold">Provider Network</td>
                <td className="px-4 py-3">Varies by plan</td>
                <td className="px-4 py-3">Nearly all doctors accept Medicare</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="px-4 py-3 font-bold">Prescription Drugs</td>
                <td className="px-4 py-3">Limited, capped</td>
                <td className="px-4 py-3">Part D available ($0-$100+/month)</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="px-4 py-3 font-bold">Out-of-Pocket Max</td>
                <td className="px-4 py-3">Per-incident IUA; no annual cap</td>
                <td className="px-4 py-3">$8,000-$9,000 with Advantage plans</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="px-4 py-3 font-bold">Dental/Vision</td>
                <td className="px-4 py-3">Rarely included</td>
                <td className="px-4 py-3">Included with many Advantage plans</td>
              </tr>
            </tbody>
          </table>
        </div>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">The Bottom Line</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            If you are 65 or older and eligible for Medicare, enroll in Medicare. It is more comprehensive, legally guaranteed, and less expensive than health sharing for seniors. Health sharing does not count as creditable coverage, and delaying Medicare enrollment triggers permanent premium penalties. The only scenario where health sharing may complement Medicare is for members who want a faith-based community alongside their government coverage — and even then, a Medigap or Medicare Advantage plan is the better financial choice for supplemental coverage.
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
              <Link href="/answers/vs-insurance" className="text-[var(--color-accent)] hover:underline">
                Health Sharing vs Health Insurance
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
          </ul>
        </section>
      </div>
    </>
  )
}
