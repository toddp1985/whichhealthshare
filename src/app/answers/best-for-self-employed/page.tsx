import { loadAllMinistries } from '@/lib/data';
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema';
import Link from 'next/link';
import AnswerPageCTA from '@/components/AnswerPageCTA';

export const metadata = {
  title: 'Best Health Sharing Plan for Self-Employed (2026) — WhichHealthShare',
  description:
    'Zion HealthShare and CrowdHealth are the best health sharing options for self-employed individuals in 2026. Compare HSA compatibility, pricing, and flexibility.',
  openGraph: {
    title: 'Best Health Sharing Plan for Self-Employed (2026)',
    description:
      'Zion costs $185-$268/month with HSA compatibility. CrowdHealth averages $140/month with no caps. Compare all options for freelancers and 1099 workers.',
  },
};

const faqs = [
  {
    question: 'Can I deduct health sharing contributions on my taxes?',
    answer:
      'No. Health sharing contributions are NOT tax-deductible as health insurance premiums under current IRS rules. Unlike employer-sponsored insurance or ACA marketplace plans, health sharing monthly shares cannot be claimed as a self-employed health insurance deduction on Schedule 1. However, if you pair an HSA-compatible plan (Zion HealthShare) with an HSA, the HSA contributions themselves are tax-deductible up to $4,300 for individuals or $8,550 for families in 2026.',
  },
  {
    question: 'Is CrowdHealth good for self-employed people?',
    answer:
      'CrowdHealth is a strong option for healthy self-employed individuals who want the lowest monthly cost and maximum flexibility. At roughly $140/month average for members under 55, it costs less than most health sharing plans. The month-to-month commitment means you can cancel anytime without penalty. The main risk: CrowdHealth uses crowdfunding, not guaranteed sharing, so coverage is not guaranteed. Self-employed individuals with significant medical needs may prefer Zion or Presidio for more predictable coverage.',
  },
  {
    question: 'Which health sharing plan is HSA-compatible for self-employed?',
    answer:
      'Zion HealthShare is the most widely available HSA-compatible health sharing plan for self-employed individuals. Pairing Zion with an HSA allows you to contribute up to $4,300 (individual) or $8,550 (family) in tax-deductible savings in 2026 while keeping monthly costs at $185-$268/month. Sedera also offers HSA-eligible arrangements. Traditional ministries like Medi-Share and CHM are not HSA-compatible.',
  },
  {
    question: 'Can I use health sharing instead of ACA insurance as a freelancer?',
    answer:
      'Yes. There is no federal tax penalty for not having ACA-compliant insurance. However, health sharing is NOT insurance and does not satisfy state-level insurance mandates in California, Massachusetts, New Jersey, Rhode Island, Vermont, or Washington D.C. Freelancers in those states may face state tax penalties. Health sharing also does not count as Minimum Essential Coverage (MEC) for ACA purposes.',
  },
  {
    question: 'What happens if I get seriously ill as a self-employed health sharing member?',
    answer:
      'Health sharing plans with unlimited sharing caps (Zion, CHM, Samaritan, Sedera) have no dollar ceiling on eligible bills. However, health sharing is voluntary — plans are not legally obligated to pay. For self-employed individuals concerned about catastrophic risk, Presidio Healthcare offers actual regulated insurance with guaranteed coverage. Some self-employed workers also pair a low-cost health sharing plan with a catastrophic insurance policy for additional protection.',
  },
];

export default function BestForSelfEmployedPage() {
  const ministries = loadAllMinistries();
  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Answers', url: '/answers' },
    { name: 'Best for Self-Employed', url: '/answers/best-for-self-employed' },
  ]);
  const faqSchema = generateFAQSchema(faqs);
  const articleSchema = generateArticleSchema(
    'Which Health Sharing Plan Is Best for Self-Employed?',
    'Zion HealthShare and CrowdHealth are the best health sharing options for self-employed individuals in 2026. Compare HSA compatibility, pricing, tax implications, and flexibility.'
  );

  const individualPlans = ministries
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="section-narrow pt-8">
        <nav className="text-sm text-[var(--color-text-muted)] mb-6">
          <Link href="/">Home</Link> / <Link href="/answers">Answers</Link> /{' '}
          <span>Best for Self-Employed</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">
          Which Health Sharing Plan Is Best for Self-Employed?
        </h1>

        <p className="text-lg leading-relaxed mb-2">
          Zion HealthShare and CrowdHealth are the best health sharing options for
          self-employed individuals in 2026. Zion costs $185-$268/month with no faith
          requirement, HSA compatibility, and unlimited sharing cap. CrowdHealth averages
          $140/month with no coverage caps and month-to-month flexibility. Both offer
          significant savings over unsubsidized ACA marketplace plans, which average
          $450-$700/month for individual coverage.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8">
          Updated February 2026. All pricing verified against published rates.
        </p>

        {/* Key Facts Table */}
        <h2 className="font-serif font-bold text-2xl mb-4">Key Facts: Self-Employed Health Sharing</h2>
        <div className="overflow-x-auto mb-8">
          <table>
            <thead>
              <tr>
                <th>Fact</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Best Overall</td>
                <td>Zion HealthShare ($185-$268/mo, HSA compatible)</td>
              </tr>
              <tr>
                <td>Lowest Cost</td>
                <td>CrowdHealth (~$140/mo average, under 55)</td>
              </tr>
              <tr>
                <td>HSA Compatible</td>
                <td>Zion HealthShare, Sedera</td>
              </tr>
              <tr>
                <td>Tax Deductible?</td>
                <td>No — health sharing contributions are NOT deductible</td>
              </tr>
              <tr>
                <td>Month-to-Month</td>
                <td>CrowdHealth (cancel anytime), most plans have no long-term contract</td>
              </tr>
              <tr>
                <td>Savings vs. ACA</td>
                <td>$200-$400/month compared to unsubsidized marketplace plans</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section: Zion */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Why Is Zion HealthShare the Best Overall for Self-Employed?
        </h2>
        <p className="mb-4 leading-relaxed">
          Zion HealthShare checks every box that matters for freelancers, contractors, and
          business owners: no faith requirement, HSA compatibility, unlimited sharing cap,
          prescription coverage, mental health sharing, and a PPO network with 950,000+
          providers through Cigna. At $185-$268/month for individuals, Zion costs
          50-70% less than comparable unsubsidized ACA plans.
        </p>
        <p className="mb-6 leading-relaxed">
          The HSA compatibility is particularly valuable for self-employed individuals.
          Pairing Zion with an HSA lets you contribute up to $4,300 (individual) or
          $8,550 (family) in 2026 with full tax deduction. This effectively creates a
          tax-advantaged healthcare savings strategy even though health sharing
          contributions themselves are not deductible. Zion also accepts pre-existing
          conditions with no waiting period, which is a significant advantage for
          self-employed individuals who may have gaps in prior coverage.
        </p>

        {/* Section: CrowdHealth */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Why Do Self-Employed Workers Choose CrowdHealth?
        </h2>
        <p className="mb-4 leading-relaxed">
          CrowdHealth is not a health sharing ministry — it is a healthcare crowdfunding
          platform. The distinction matters: members contribute to a shared pool that
          funds each other's medical bills, but coverage is not guaranteed. For healthy
          self-employed individuals, this model delivers the lowest monthly cost at
          roughly $140/month average (under 55), with no coverage caps per health event
          and no faith requirement.
        </p>
        <p className="mb-6 leading-relaxed">
          CrowdHealth's month-to-month flexibility appeals to freelancers who want to
          avoid long-term commitments. Their bill negotiation service regularly secures
          30-60% discounts on planned procedures, which can save thousands on surgeries
          and specialist care. The $500 member commitment per health event functions like
          a deductible. The trade-off: pre-existing conditions are limited for the first
          two years ($25K year 2, $50K year 3, $100K year 4+), and 99% — not 100% — of
          approved bills have been funded.
        </p>

        {/* Section: Tax Implications */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          What Are the Tax Implications for Self-Employed Members?
        </h2>
        <p className="mb-4 leading-relaxed">
          This is the single most important financial distinction for self-employed
          individuals: health sharing contributions are NOT tax-deductible. Under IRS
          rules, only health insurance premiums qualify for the self-employed health
          insurance deduction on Schedule 1. Health sharing monthly shares, CrowdHealth
          advocacy fees, and related costs cannot be claimed as a business expense or
          health insurance deduction.
        </p>
        <p className="mb-6 leading-relaxed">
          However, if you use an HSA-compatible plan like Zion HealthShare, your HSA
          contributions are fully tax-deductible. In 2026, that means up to $4,300 in
          individual deductions or $8,550 for families. For a self-employed individual in
          the 24% tax bracket, an HSA deduction of $4,300 saves $1,032 in federal taxes
          alone. This partially offsets the lost premium deduction and creates a net
          healthcare cost that is still significantly below ACA marketplace rates.
        </p>

        {/* Section: Flexibility */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          How Flexible Are Health Sharing Plans for Variable Income?
        </h2>
        <p className="mb-6 leading-relaxed">
          Self-employed income fluctuates, and health sharing plans accommodate this
          better than ACA insurance in several ways. Most health sharing plans have no
          annual contracts — you can adjust your IUA level or cancel with 30 days notice.
          CrowdHealth offers true month-to-month commitment. There are no income-based
          premium adjustments (unlike ACA subsidies that require annual income
          reconciliation). The fixed monthly cost makes budgeting straightforward: you pay
          the same share whether you earn $40,000 or $400,000 in a given year.
        </p>

        {/* Comparison Table */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Self-Employed Plan Comparison
        </h2>
        <div className="overflow-x-auto mb-8">
          <table>
            <thead>
              <tr>
                <th>Plan</th>
                <th>Individual Cost/Mo</th>
                <th>HSA Compatible</th>
                <th>Faith Required</th>
                <th>Sharing Cap</th>
                <th>Pre-Existing Wait</th>
              </tr>
            </thead>
            <tbody>
              {individualPlans.map((m) => (
                <tr key={m.slug}>
                  <td>
                    <Link href={`/reviews/${m.slug}`} className="font-semibold">
                      {m.name}
                    </Link>
                  </td>
                  <td>
                    ${m.plans[0]?.monthlyRange?.individual?.min}-$
                    {m.plans[0]?.monthlyRange?.individual?.max}
                  </td>
                  <td>{m.hsaCompatible ? 'Yes' : 'No'}</td>
                  <td>
                    {m.faithRequirement === 'any-faith' || m.faithRequirement === 'secular'
                      ? 'No'
                      : 'Yes'}
                  </td>
                  <td>{m.plans[0]?.coverageCap}</td>
                  <td>{m.preExisting?.waitingPeriod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Line */}
        <div className="bg-[var(--color-primary-lighter)] p-6 rounded-lg mb-8">
          <h2 className="font-serif font-bold text-2xl mb-3">The Bottom Line</h2>
          <p className="leading-relaxed">
            Self-employed individuals should prioritize Zion HealthShare for the best
            combination of cost, HSA compatibility, and comprehensive coverage. Healthy
            freelancers who want the absolute lowest monthly cost should consider
            CrowdHealth at ~$140/month. Remember: health sharing is not tax-deductible,
            but pairing with an HSA can recover $1,000+ in annual tax savings. If you need
            guaranteed coverage with regulatory protections — especially with pre-existing
            conditions — Presidio Healthcare offers actual insurance starting at
            $300/month.
          </p>
        </div>

        {/* FAQ Section */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Frequently Asked Questions
        </h2>
        <div className="mb-8 space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="border border-[var(--color-border)] rounded-lg p-4"
            >
              <summary className="font-semibold cursor-pointer">{faq.question}</summary>
              <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <AnswerPageCTA />

        {/* Related Links */}
        <div className="border-t border-[var(--color-border)] pt-6 mb-8">
          <h3 className="font-serif font-bold text-xl mb-4">Related Pages</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/compare">Compare All Plans Side-by-Side</Link>
            </li>
            <li>
              <Link href="/quiz">Take the Health Sharing Quiz</Link>
            </li>
            <li>
              <Link href="/answers/hsa-compatible">
                Can I Use an HSA with Health Sharing?
              </Link>
            </li>
            <li>
              <Link href="/answers/cost">How Much Does Health Sharing Cost?</Link>
            </li>
            <li>
              <Link href="/answers/worth-it">Is Health Sharing Worth It?</Link>
            </li>
            <li>
              <Link href="/answers/best-for-families">
                Best Plan for Families
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
