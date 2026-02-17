import { loadAllMinistries } from '@/lib/data'
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema'
import Link from 'next/link'
import AnswerPageCTA from '@/components/AnswerPageCTA'

export const metadata = {
  title: 'What Is an IUA (Initial Unshareable Amount)? (2026) — WhichHealthShare',
  description:
    'IUA explained: the health sharing equivalent of a deductible. How IUAs work, typical ranges ($500-$5,000), per-incident vs. annual, and how to choose the right level.',
}

const faqs = [
  {
    question: 'Is an IUA the same as a deductible?',
    answer:
      'An IUA is similar to a deductible but not identical. Both represent the amount you pay before your plan kicks in. The key difference: insurance deductibles typically apply annually (once you meet it, you are covered for the rest of the year), while IUAs apply per incident. This means each new medical event resets your IUA. A broken arm and a separate ER visit for chest pain would each have their own IUA, even in the same year.',
  },
  {
    question: 'How do I choose the right IUA level?',
    answer:
      'Consider your health history, financial reserves, and monthly budget. If you are generally healthy and have $2,000-$5,000 in savings for emergencies, a higher IUA ($2,500-$5,000) saves you significant money on monthly contributions. If you have ongoing health concerns or limited savings, a lower IUA ($500-$1,000) provides more protection per incident at a higher monthly cost. The monthly savings between a $1,000 and $5,000 IUA can be $100-$200/month.',
  },
  {
    question: 'Does the IUA apply to every doctor visit?',
    answer:
      'The IUA applies to each medical incident, not each individual visit. If you visit the doctor three times for the same illness (initial diagnosis, follow-up, specialist referral), those visits are part of one incident with one IUA. Routine checkups and preventive care may be handled differently depending on your plan — some plans include preventive care outside the IUA, while others apply the IUA to all medical expenses.',
  },
  {
    question: 'Can I change my IUA after enrolling?',
    answer:
      'Most health sharing plans allow you to change your IUA level at annual renewal. Some plans may allow mid-year changes, though this often resets waiting periods for pre-existing conditions. Changing from a higher IUA to a lower IUA will increase your monthly contribution. Changing from a lower IUA to a higher one will decrease your monthly cost. Check with your specific plan for their IUA change policies and any restrictions.',
  },
  {
    question: 'What does the IUA NOT cover?',
    answer:
      'The IUA is the amount you pay, not what you are covered for. After you pay your IUA for an incident, the community shares the remaining eligible expenses. However, certain expenses are not eligible for sharing regardless of IUA: cosmetic procedures, fertility treatments, and services excluded by your plan guidelines. Pre-existing conditions during the waiting period also fall outside IUA coverage. Your IUA only applies to expenses that are otherwise eligible for sharing.',
  },
]

export default function WhatIsIuaPage() {
  const ministries = loadAllMinistries()

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Answers', url: '/answers' },
    { name: 'What Is an IUA', url: '/answers/what-is-iua' },
  ])

  const faqSchema = generateFAQSchema(faqs)

  const articleSchema = generateArticleSchema(
    'What Is an IUA (Initial Unshareable Amount)?',
    'Complete explanation of IUAs in health sharing: how they work, typical ranges, per-incident vs. annual application, and how to choose the right level.'
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
          <span>What Is an IUA</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">What Is an IUA (Initial Unshareable Amount)?</h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-6">
          An IUA (Initial Unshareable Amount) is the health sharing equivalent of a deductible. It is the amount you pay out-of-pocket before the community begins sharing your medical expenses. IUAs typically range from $500 to $5,000 per incident. Lower IUAs mean higher monthly contributions. Higher IUAs mean lower monthly costs but more out-of-pocket risk per medical event. Unlike insurance deductibles, most IUAs apply per incident rather than annually.
        </p>

        <h2 className="font-serif font-bold text-2xl mb-4">Key Facts</h2>
        <table className="w-full mb-8">
          <tbody>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">IUA Range</td>
              <td className="py-3">$500 to $5,000 per incident (varies by plan)</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Application</td>
              <td className="py-3">Per incident (not annual like insurance deductibles)</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Monthly Savings</td>
              <td className="py-3">$100-$200/month difference between lowest and highest IUA</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Most Popular IUA</td>
              <td className="py-3">$1,000-$1,500 (balances cost and protection)</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Can Be Changed</td>
              <td className="py-3">Typically at annual renewal</td>
            </tr>
          </tbody>
        </table>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">How Does an IUA Work in Practice?</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            When you have a medical event — say a broken arm — the IUA is the first portion of the bill you pay yourself. If your IUA is $1,500 and the total bill is $8,000, you pay $1,500 and the health sharing community covers the remaining $6,500. Each new, unrelated medical incident triggers a separate IUA. If you break your arm in March ($1,500 IUA) and then have appendicitis in July ($1,500 IUA), you pay $1,500 for each incident — $3,000 total out-of-pocket for the year.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            This per-incident structure is the most important difference between an IUA and an insurance deductible. With a $1,500 annual insurance deductible, your second incident would be fully covered (you already met the deductible). With a $1,500 per-incident IUA, each event starts fresh. For members who rarely need medical care, the per-incident IUA is often cheaper overall because the monthly contributions are lower. For members with multiple medical events per year, an annual deductible structure provides better protection.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">How Should I Choose My IUA Level?</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            The right IUA depends on three factors: your health status, your emergency savings, and your monthly budget. A healthy 30-year-old with $5,000 in savings who rarely visits the doctor may benefit from a $5,000 IUA — the monthly savings of $150-$200 add up to $1,800-$2,400 per year, which effectively builds a buffer for the rare incident. A 55-year-old managing a chronic condition who expects regular medical costs should lean toward a $500-$1,000 IUA for more predictable expenses.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Consider the math: at a $1,000 IUA saving $100/month over a $500 IUA, you save $1,200/year. If you have one medical incident per year, you spend an extra $500 on the IUA but saved $1,200 on contributions — a net savings of $700. If you have three incidents per year, you spend an extra $1,500 on IUAs but saved $1,200 — a net loss of $300. Run the numbers based on your personal medical history to find the optimal level.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">How Does the IUA Differ from Insurance Deductibles and Copays?</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Insurance deductibles are annual: once you pay $2,000 in covered expenses, the insurance covers the rest for that calendar year (subject to coinsurance). The IUA resets per incident, not per year. Insurance copays ($25 for a doctor visit, $50 for a specialist) do not exist in health sharing — you pay the full cost of visits under your IUA. Insurance also has an out-of-pocket maximum ($8,000-$9,000 in 2026), which caps your total annual spending. Most health sharing plans do not have a formal annual out-of-pocket maximum, though the per-incident IUA naturally limits exposure per event.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Some health sharing plans, like Sedera and Zion HealthShare, offer annual IUA options that function more like traditional deductibles. With an annual IUA, once you meet the threshold across all incidents in a year, subsequent incidents are shared without further IUA. Annual IUA plans typically have higher monthly contributions than per-incident plans but provide more comprehensive protection for members who anticipate multiple medical events.
          </p>
        </section>

        <h2 className="font-serif font-bold text-2xl mb-4">IUA Comparison by Plan</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--color-bg-warm)]">
                <th className="px-4 py-3 font-bold text-left">Plan</th>
                <th className="px-4 py-3 font-bold text-left">IUA Options</th>
                <th className="px-4 py-3 font-bold text-left">Type</th>
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
                    {ministry.plans[0]?.iua?.length > 0
                      ? ministry.plans[0].iua.map(v => `$${v.toLocaleString()}`).join(', ')
                      : 'Varies'}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {ministry.slug === 'crowdhealth' && 'Per event'}
                    {ministry.slug === 'samaritan-ministries' && 'Per incident'}
                    {ministry.slug !== 'crowdhealth' && ministry.slug !== 'samaritan-ministries' && 'Per incident'}
                  </td>
                  <td className="px-4 py-3 text-sm text-[var(--color-text-secondary)]">
                    {ministry.slug === 'medi-share' && 'Called AHP (Annual Household Portion) — annual reset'}
                    {ministry.slug === 'chm' && 'Called personal responsibility; per incident'}
                    {ministry.slug === 'zion-healthshare' && 'Per-incident IUA with multiple tier options'}
                    {ministry.slug === 'samaritan-ministries' && 'Called monthly share; different structure'}
                    {ministry.slug === 'crowdhealth' && 'Called member commitment; per event'}
                    {ministry.slug === 'sedera' && 'IUA options with annual and per-incident available'}
                    {ministry.slug === 'presidio-healthcare' && 'Insurance deductible — annual reset'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">The Bottom Line</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            The IUA is the single most important variable in your health sharing costs. A higher IUA saves $100-$200/month but requires you to cover more per incident. A lower IUA costs more monthly but limits your per-event exposure. For most healthy adults, a $1,000-$1,500 IUA provides the best balance of monthly savings and incident protection. Keep an emergency fund equal to at least 2x your IUA to handle unexpected medical costs without financial stress.
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
              <Link href="/answers/emergency-room" className="text-[var(--color-accent)] hover:underline">
                How Do Health Sharing Plans Handle ER Visits?
              </Link>
            </li>
            <li>
              <Link href="/answers/vs-insurance" className="text-[var(--color-accent)] hover:underline">
                Health Sharing vs Health Insurance
              </Link>
            </li>
            <li>
              <Link href="/answers/cheapest-plan" className="text-[var(--color-accent)] hover:underline">
                What Is the Cheapest Health Sharing Plan?
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
