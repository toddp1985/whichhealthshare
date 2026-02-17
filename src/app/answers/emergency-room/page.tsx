import { loadAllMinistries } from '@/lib/data'
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema'
import Link from 'next/link'
import AnswerPageCTA from '@/components/AnswerPageCTA'

export const metadata = {
  title: 'How Do Health Sharing Plans Handle ER Visits? (2026) — WhichHealthShare',
  description:
    'Emergency room coverage for health sharing plans. IUA thresholds, true emergency vs. non-emergency policies, and what to expect when you visit the ER.',
}

const faqs = [
  {
    question: 'What counts as a true emergency for health sharing?',
    answer:
      'A true emergency is generally defined as a condition that poses an immediate threat to life, limb, or organ function. Examples include chest pain, severe bleeding, difficulty breathing, stroke symptoms, loss of consciousness, and serious injuries. Most plans use the "prudent layperson" standard — if a reasonable person would believe the situation requires emergency care, it qualifies. Non-emergency conditions treated in the ER (like earaches, mild fevers, or minor sprains) may be shared at a reduced rate or denied.',
  },
  {
    question: 'Do I need pre-authorization for ER visits with health sharing?',
    answer:
      'No. Health sharing plans do not require pre-authorization for emergency room visits. You should go to the nearest ER when you believe you are experiencing a medical emergency. Most plans ask that you notify them within 24-72 hours after the ER visit so they can begin processing the bill for sharing. Keep all receipts and documentation from your ER visit.',
  },
  {
    question: 'What if the ER visit leads to a hospital admission?',
    answer:
      'If an ER visit results in hospital admission, the entire episode (ER charges, hospital stay, procedures, medications) is typically treated as a single incident for sharing purposes. Your IUA applies once to the entire incident. For example, if your IUA is $1,500 and the combined ER and hospital bill is $25,000, you pay $1,500 and the community shares the remaining $23,500. Most plans require notification within 24-72 hours of admission.',
  },
  {
    question: 'Should I use urgent care instead of the ER with health sharing?',
    answer:
      'Yes, when medically appropriate. Urgent care visits cost $150-$350 on average compared to $2,200+ for ER visits. Health sharing plans share urgent care expenses the same way as other medical costs — after your IUA. Using urgent care for non-life-threatening conditions saves money for both you and the sharing community. Many plans actively encourage urgent care and telehealth as lower-cost alternatives to the ER.',
  },
  {
    question: 'How do I negotiate ER bills with health sharing?',
    answer:
      'Many health sharing plans assist with bill negotiation, or you can negotiate directly. Ask the hospital for an itemized bill and check for errors (billing mistakes are common, occurring in up to 80% of hospital bills). Request the hospital\'s cash-pay or self-pay discount, which can reduce bills by 30-60%. If your plan has a PPO network, confirm that network rates were applied. Some plans like CrowdHealth provide dedicated bill negotiation advocates.',
  },
]

export default function EmergencyRoomPage() {
  const ministries = loadAllMinistries()

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Answers', url: '/answers' },
    { name: 'Emergency Room', url: '/answers/emergency-room' },
  ])

  const faqSchema = generateFAQSchema(faqs)

  const articleSchema = generateArticleSchema(
    'How Do Health Sharing Plans Handle ER Visits?',
    'Guide to emergency room coverage under health sharing plans, including IUA application, true emergency definitions, and cost management strategies.'
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
          <span>Emergency Room</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">How Do Health Sharing Plans Handle ER Visits?</h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-6">
          Health sharing plans generally cover emergency room visits as eligible medical expenses. After your IUA (Initial Unshareable Amount of $500-$5,000), ER costs are shared by the community. Most plans distinguish between true emergencies and non-emergency ER visits. Non-emergency ER visits may be shared at a reduced rate or denied entirely. The average ER visit costs $2,200, making this an important factor when choosing a plan.
        </p>

        <h2 className="font-serif font-bold text-2xl mb-4">Key Facts</h2>
        <table className="w-full mb-8">
          <tbody>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Average ER Cost</td>
              <td className="py-3">$2,200 per visit (national average)</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">IUA Applies</td>
              <td className="py-3">Yes, $500-$5,000 per incident before sharing begins</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Pre-Authorization</td>
              <td className="py-3">Not required for emergencies</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Notification Window</td>
              <td className="py-3">24-72 hours after ER visit (varies by plan)</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Urgent Care Alternative</td>
              <td className="py-3">$150-$350 average vs. $2,200+ for ER</td>
            </tr>
          </tbody>
        </table>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">What Happens When You Go to the ER with Health Sharing?</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            When you visit the emergency room as a health sharing member, the process differs from traditional insurance. At the ER, you will likely be asked for your health sharing membership card and may need to explain that you are part of a health sharing ministry rather than an insurance plan. Many hospitals are familiar with health sharing programs, but some may treat you as a self-pay patient initially.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            After receiving treatment, you notify your health sharing plan within the required timeframe (typically 24-72 hours). The plan reviews the bill to confirm the visit qualifies as a true emergency. If approved, your IUA applies to the incident, and the remaining balance is shared by the community. If your plan uses a PPO network, the hospital may have already applied negotiated rates, reducing the total bill significantly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">What Is the Difference Between Emergency and Non-Emergency ER Visits?</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            This distinction is critical for health sharing members. A true emergency — chest pain, stroke symptoms, severe trauma, difficulty breathing, uncontrolled bleeding — is shared by all major health sharing plans after your IUA. A non-emergency treated in the ER — a sore throat, mild headache, minor rash, or sprained ankle — may be reduced or denied for sharing because the condition could have been treated at urgent care or a doctor's office at significantly lower cost.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Most plans use the "prudent layperson" standard: if a reasonable person would believe the symptoms required emergency care, the visit qualifies — even if the final diagnosis turns out to be non-life-threatening. For example, chest pain that turns out to be acid reflux would typically be shared as an emergency because a reasonable person would seek ER care for chest pain. Plans review each case individually, and members can appeal decisions they disagree with.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">How Can I Minimize ER Costs with Health Sharing?</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Several strategies help manage emergency costs. First, use telehealth for non-emergency medical questions — most health sharing plans include free or low-cost telehealth visits ($0-$25). Second, build a relationship with an urgent care clinic for conditions that need prompt attention but are not life-threatening. Third, if you do visit the ER, request an itemized bill and review it for errors. Hospital billing mistakes are extremely common, with some studies finding errors in up to 80% of bills.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Ask the hospital about cash-pay or self-pay discounts, which can reduce bills by 30-60%. If your health sharing plan has a PPO network, verify that the ER applied the negotiated network rates. Some health sharing plans offer bill negotiation services — CrowdHealth provides dedicated healthcare advocates who negotiate bills on your behalf. Finally, consider your IUA level carefully: a higher IUA means lower monthly contributions but more exposure on a $2,200+ ER bill.
          </p>
        </section>

        <h2 className="font-serif font-bold text-2xl mb-4">ER Coverage Comparison</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--color-bg-warm)]">
                <th className="px-4 py-3 font-bold text-left">Plan</th>
                <th className="px-4 py-3 font-bold text-left">ER Covered</th>
                <th className="px-4 py-3 font-bold text-left">IUA Range</th>
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
                    {ministry.plans[0]?.includes.emergency ? 'Yes' : 'Limited'}
                  </td>
                  <td className="px-4 py-3">
                    {ministry.plans[0]?.iua?.length > 0
                      ? `$${Math.min(...ministry.plans[0].iua).toLocaleString()}-$${Math.max(...ministry.plans[0].iua).toLocaleString()}`
                      : 'Varies'}
                  </td>
                  <td className="px-4 py-3 text-sm text-[var(--color-text-secondary)]">
                    {ministry.slug === 'medi-share' && 'True emergencies shared after IUA'}
                    {ministry.slug === 'chm' && 'Emergencies eligible; Gold program recommended'}
                    {ministry.slug === 'zion-healthshare' && 'Cigna network rates apply at in-network ERs'}
                    {ministry.slug === 'samaritan-ministries' && 'Emergency needs submitted for sharing'}
                    {ministry.slug === 'crowdhealth' && 'Community crowdfunds ER bills; advocates negotiate'}
                    {ministry.slug === 'sedera' && 'Emergencies shared as medical cost sharing'}
                    {ministry.slug === 'presidio-healthcare' && 'Insurance — standard ER copay applies'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">The Bottom Line</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Health sharing plans handle genuine emergencies well. All major plans share ER costs for true medical emergencies after your IUA is met. The key risk is non-emergency ER visits, which may not be fully shared. Choose your IUA level carefully — a $1,000 IUA costs more monthly but leaves you paying only $1,000 of a $2,200 ER bill instead of $2,200+ with a $2,500 IUA. Use telehealth and urgent care when possible, and always review your ER bills for errors before paying.
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
              <Link href="/answers/any-doctor" className="text-[var(--color-accent)] hover:underline">
                Can I See Any Doctor with Health Sharing?
              </Link>
            </li>
            <li>
              <Link href="/answers/vs-insurance" className="text-[var(--color-accent)] hover:underline">
                Health Sharing vs Health Insurance
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
