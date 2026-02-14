import { loadAllMinistries } from '@/lib/data';
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema';
import Link from 'next/link';

export const metadata = {
  title: 'How Does Health Sharing Work? Step-by-Step Guide (2026)',
  description:
    'Members pay monthly contributions ($115-$495). Medical expenses above the IUA ($500-$5,000) are shared by the community. Processing takes 30-90 days. Full breakdown.',
};

export default function HowHealthSharingWorksPage() {
  const ministries = loadAllMinistries();

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Answers', url: '/answers' },
    { name: 'How Health Sharing Works', url: '/answers/how-health-sharing-works' },
  ]);

  const articleSchema = generateArticleSchema(
    'How Does Health Sharing Work?',
    'Members pay monthly contributions. When someone has a medical expense, other members\' contributions share that cost. Each member has an IUA of $500-$5,000. Processing takes 30-90 days.'
  );

  const faqSchema = generateFAQSchema([
    {
      question: 'How do monthly contributions work in health sharing?',
      answer:
        'Members pay a fixed monthly contribution (ranging from $115 to $495 for individuals) to their health sharing ministry. These funds are pooled and used to share other members\' eligible medical expenses. Contributions are not insurance premiums — they are voluntary payments into a shared fund.',
    },
    {
      question: 'What is an IUA (Initial Unshareable Amount)?',
      answer:
        'An IUA is the health sharing equivalent of a deductible. It is the amount you pay out of pocket before the community begins sharing your medical expenses. IUAs range from $300 (CHM) to $5,000 depending on the plan. Lower IUAs mean higher monthly contributions, and vice versa.',
    },
    {
      question: 'How long does it take to get medical bills shared?',
      answer:
        'Processing times vary by ministry. CHM and Zion HealthShare typically process in 30-45 days. Medi-Share and Samaritan Ministries take 45-60 days. CrowdHealth uses crowdfunding with variable timelines. All ministries require you to submit bills with documentation for review before sharing.',
    },
    {
      question: 'What happens if the ministry runs out of money?',
      answer:
        'Health sharing ministries are not legally obligated to share expenses if funds are insufficient. In practice, established ministries have shared billions in medical expenses over decades. Some ministries (CHM, Samaritan) use a direct member-to-member sharing model. Others pool contributions centrally. No major ministry has failed to share eligible expenses to date.',
    },
    {
      question: 'Can I submit any medical bill for sharing?',
      answer:
        'No. Each ministry publishes sharing guidelines that define eligible expenses. Most share emergency care, hospitalization, surgery, maternity, and preventive care. Common exclusions include pre-existing conditions during the waiting period, dental, vision, and lifestyle-related conditions. You must submit bills with supporting documentation for the ministry to review.',
    },
  ]);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="section-narrow pt-8">
        <nav className="text-sm text-[var(--color-text-secondary)] mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/answers" className="hover:underline">Answers</Link>
          <span className="mx-2">/</span>
          <span>How Health Sharing Works</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">How Does Health Sharing Work?</h1>

        <p className="text-lg text-[var(--color-text-secondary)] mb-2">
          Members pay monthly contributions ranging from $115 to $495 for individuals. When a
          member has a qualifying medical expense, other members&apos; contributions are used
          to share that cost. Each member has an IUA (Initial Unshareable Amount) of $300 to
          $5,000 — the amount paid out of pocket before sharing begins. After the IUA, eligible
          expenses are shared by the community at 80-100%. Processing typically takes 30-90
          days depending on the ministry.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mb-8">
          Last updated: February 2026 | Data verified from official plan websites
        </p>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-xl mb-3">Key Facts</h2>
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">Monthly Contributions</td>
                <td className="py-2">$115 - $495/month (individual)</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">IUA Range</td>
                <td className="py-2">$300 - $5,000</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">Co-Share After IUA</td>
                <td className="py-2">0-20% (varies by plan)</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">Processing Time</td>
                <td className="py-2">30-90 days</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">Sharing Cap</td>
                <td className="py-2">Unlimited (most plans) or $250K (Medi-Share)</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold pr-4">Pre-Existing Wait</td>
                <td className="py-2">0-12 months (plan dependent)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            What Happens When You Join a Health Sharing Plan?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            When you enroll in a health sharing ministry, you agree to the plan&apos;s sharing
            guidelines and begin paying monthly contributions. Some plans (CHM, Samaritan
            Ministries) require a Christian statement of faith. Others (Zion HealthShare, Sedera,
            CrowdHealth) accept anyone regardless of religious beliefs. Enrollment is typically
            immediate, with coverage starting the first of the following month.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Your monthly contribution amount depends on your age, family size, and chosen IUA
            level. A 30-year-old individual choosing a $1,000 IUA with Zion HealthShare pays
            approximately $215/month. The same individual with CHM pays approximately $150/month
            but must meet a Christian faith requirement. Higher IUAs reduce monthly costs: a
            $2,000 IUA can save $50-$80/month compared to a $500 IUA on the same plan.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            What Happens When You Have a Medical Expense?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            When you visit a doctor, go to the emergency room, or have a planned procedure, you
            present your membership card (most plans provide one) and receive care. You pay the
            provider directly or the provider bills the ministry. You then submit the bill and
            any required documentation to your ministry for review.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            The ministry reviews the bill against its sharing guidelines. If the expense is
            eligible and exceeds your IUA, the community shares the remaining cost. For example,
            if you have a $10,000 surgery with a $1,000 IUA and 20% co-share, you pay $1,000
            (IUA) + $1,800 (20% of the remaining $9,000) = $2,800 total. The community shares
            the remaining $7,200. Most plans negotiate discounts with providers that reduce the
            total bill before sharing calculations.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            How Do Processing Times Compare Across Plans?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-4 font-semibold">Plan</th>
                  <th className="py-3 pr-4 font-semibold">Processing Time</th>
                  <th className="py-3 pr-4 font-semibold">IUA Options</th>
                  <th className="py-3 pr-4 font-semibold">Co-Share</th>
                  <th className="py-3 pr-4 font-semibold">Sharing Cap</th>
                </tr>
              </thead>
              <tbody>
                {ministries
                  .filter((m) => m.type !== 'insurance')
                  .map((m) => (
                    <tr key={m.slug} className="border-b border-[var(--color-border)]">
                      <td className="py-2 pr-4">
                        <Link
                          href={`/reviews/${m.slug}`}
                          className="text-[var(--color-primary)] hover:underline"
                        >
                          {m.name}
                        </Link>
                      </td>
                      <td className="py-2 pr-4">{m.processingTime}</td>
                      <td className="py-2 pr-4">
                        ${m.plans[0]?.iua?.join(', $')}
                      </td>
                      <td className="py-2 pr-4">{m.plans[0]?.coShare}</td>
                      <td className="py-2 pr-4">{m.plans[0]?.coverageCap}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            What Is Not Shared?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Every health sharing ministry publishes guidelines defining what expenses are and
            are not eligible for sharing. Common exclusions across most plans include dental
            care, vision care, cosmetic procedures, and injuries sustained during illegal
            activities. Pre-existing conditions are typically excluded during a waiting period
            of 6-12 months (except Zion HealthShare, which has no waiting period).
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Some plans do not share prescription drug costs (CHM, Medi-Share, Samaritan
            Ministries). Mental health coverage is limited to Zion HealthShare, Sedera, and
            CrowdHealth. Telehealth is included by Zion, Medi-Share, Sedera, and CrowdHealth
            but not by CHM or Samaritan Ministries. Review your plan&apos;s specific sharing
            guidelines before enrolling — they are publicly available on each ministry&apos;s
            website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">The Bottom Line</h2>
          <div className="card">
            <p className="text-[var(--color-text)] mb-3">
              Health sharing operates on a straightforward model: you pay monthly contributions,
              maintain an IUA (like a deductible), and the community shares eligible medical
              expenses above that amount. Processing takes 30-90 days. The model has worked
              reliably for over 40 years through ministries like CHM (founded 1981).
            </p>
            <p className="text-[var(--color-text)]">
              The key difference from insurance is that sharing is voluntary, not guaranteed.
              In practice, established ministries share eligible expenses consistently. Choose a
              plan based on your monthly budget, desired IUA level, faith preferences, and
              coverage needs. Use our{' '}
              <Link href="/compare" className="text-[var(--color-primary)] hover:underline">
                comparison tool
              </Link>{' '}
              to see all plans side-by-side.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Frequently Asked Questions</h2>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Do I get a membership card like insurance?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Most health sharing plans provide a membership card that you can present to
              healthcare providers. Zion HealthShare provides a Cigna PPO card that providers
              recognize. Other plans provide their own membership cards. Providers are not
              required to accept health sharing cards, but most do — especially if the plan
              uses a recognized network like Cigna PPO.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Can I cancel health sharing at any time?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Yes. Health sharing is month-to-month with most plans. There are no long-term
              contracts or cancellation fees. You can cancel at any time by notifying your
              ministry. CrowdHealth specifically markets month-to-month flexibility as a key
              feature. Some plans may have a minimum enrollment period of 3-6 months.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              What if I disagree with a sharing decision?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Each ministry has an appeals process for disputed sharing decisions. You can
              submit additional documentation, request a review, and escalate to a member
              advisory board in some cases. Because health sharing is not insurance, you
              cannot file a complaint with your state insurance department. However, ministries
              that are accredited by recognized organizations follow established dispute
              resolution procedures.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Is health sharing tax deductible?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Health sharing contributions are generally not tax deductible as health insurance
              premiums. However, if you are self-employed, you may be able to deduct
              contributions under the self-employed health insurance deduction. Consult a tax
              professional for your specific situation. Zion HealthShare is HSA-compatible,
              which provides additional tax benefits through a Health Savings Account.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              How do I choose between a high and low IUA?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              A lower IUA ($300-$500) means you pay less out of pocket when you have a medical
              expense, but your monthly contributions are higher. A higher IUA ($2,000-$5,000)
              reduces your monthly cost but increases your out-of-pocket risk. If you are
              generally healthy and rarely visit the doctor, a higher IUA saves money over time.
              If you anticipate medical expenses, a lower IUA provides more predictable costs.
            </p>
          </details>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/answers/what-is-health-sharing"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">What Is Health Sharing?</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read answer</span>
            </Link>
            <Link
              href="/answers/what-is-iua"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">What Is an IUA?</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read answer</span>
            </Link>
            <Link
              href="/answers/cheapest-plan"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">Cheapest Health Sharing Plan</span>
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
