import { loadAllMinistries } from '@/lib/data';
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema';
import Link from 'next/link';

export const metadata = {
  title: 'Can I Use an HSA with Health Sharing? (2026 Guide) — WhichHealthShare',
  description:
    'Yes, some health sharing plans are HSA compatible: Zion HealthShare and Sedera qualify. 2026 HSA limits are $4,300 individual / $8,550 family. Full guide to HSA + health sharing.',
  openGraph: {
    title: 'Can I Use an HSA with Health Sharing? (2026 Guide)',
    description:
      'Zion HealthShare and Sedera are HSA-compatible. 2026 limits: $4,300 individual, $8,550 family. Learn how to combine health sharing with tax-advantaged savings.',
  },
};

const faqs = [
  {
    question: 'Which health sharing plans are HSA-compatible in 2026?',
    answer:
      'Zion HealthShare is the most widely recognized HSA-compatible health sharing plan. Sedera also offers HSA-eligible arrangements. Presidio Healthcare, as actual insurance, is HSA-compatible through its high-deductible plan option. CHM, Medi-Share, Samaritan Ministries, and CrowdHealth are NOT HSA-compatible because they do not meet IRS requirements for qualifying High Deductible Health Plans.',
  },
  {
    question: 'What are the 2026 HSA contribution limits?',
    answer:
      'For 2026, HSA contribution limits are $4,300 for individuals and $8,550 for families. If you are 55 or older, you can contribute an additional $1,000 catch-up contribution. These limits apply to the total of employer and employee contributions combined. HSA funds roll over indefinitely — there is no use-it-or-lose-it rule.',
  },
  {
    question: 'Are health sharing contributions tax-deductible?',
    answer:
      'No. Health sharing monthly contributions (shares) are NOT tax-deductible under current IRS rules. They cannot be claimed as a self-employed health insurance deduction or itemized medical expense. However, if you pair an HSA-compatible health sharing plan with an HSA, the HSA contributions themselves are fully tax-deductible. This is the primary tax advantage available to health sharing members.',
  },
  {
    question: 'Can I open an HSA if I have a health sharing plan?',
    answer:
      'You can only open and contribute to an HSA if you have a qualifying High Deductible Health Plan (HDHP) or an HSA-eligible health sharing arrangement. Zion HealthShare and Sedera structure their plans to meet HSA eligibility requirements. If your health sharing plan is not HSA-eligible (CHM, Medi-Share, Samaritan, CrowdHealth), you cannot contribute to an HSA while enrolled in that plan. If you have no other coverage, consult a tax professional about your specific eligibility.',
  },
  {
    question: 'How much can I save in taxes by combining HSA with health sharing?',
    answer:
      'Tax savings depend on your income bracket. A self-employed individual in the 24% federal tax bracket contributing $4,300 to an HSA saves $1,032 in federal income tax plus avoids 15.3% self-employment tax on that amount (additional $657.90), for a total tax savings of approximately $1,690. A family contributing $8,550 saves approximately $3,360 in the same bracket. HSA withdrawals for qualified medical expenses are also tax-free, and after age 65, non-medical withdrawals are taxed as ordinary income (similar to a traditional IRA).',
  },
];

export default function HSACompatiblePage() {
  const ministries = loadAllMinistries();
  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Answers', url: '/answers' },
    { name: 'HSA Compatible', url: '/answers/hsa-compatible' },
  ]);
  const faqSchema = generateFAQSchema(faqs);
  const articleSchema = generateArticleSchema(
    'Can I Use an HSA with Health Sharing?',
    'Yes, some health sharing plans are HSA compatible. Zion HealthShare and Sedera qualify. 2026 HSA contribution limits are $4,300 for individuals and $8,550 for families.'
  );

  const allPlans = ministries.filter(
    (m) => m.plans[0]?.monthlyRange?.individual
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
          <span>HSA Compatible</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">
          Can I Use an HSA with Health Sharing?
        </h1>

        <p className="text-lg leading-relaxed mb-2">
          Yes, some health sharing plans are HSA (Health Savings Account) compatible.
          Zion HealthShare and Sedera both offer HSA-eligible arrangements that allow
          members to open and contribute to an HSA. In 2026, HSA contribution limits are
          $4,300 for individuals and $8,550 for families. Combining health sharing with
          an HSA provides both lower monthly costs and tax-advantaged savings — a
          strategy that can save $1,000-$3,000+ in annual taxes depending on your income
          bracket.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8">
          Updated February 2026. HSA limits confirmed for the 2026 tax year.
        </p>

        {/* Key Facts Table */}
        <h2 className="font-serif font-bold text-2xl mb-4">Key Facts: HSA + Health Sharing</h2>
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
                <td>HSA-Compatible Plans</td>
                <td>Zion HealthShare, Sedera, Presidio Healthcare</td>
              </tr>
              <tr>
                <td>NOT HSA-Compatible</td>
                <td>CHM, Medi-Share, Samaritan Ministries, CrowdHealth</td>
              </tr>
              <tr>
                <td>2026 Individual HSA Limit</td>
                <td>$4,300</td>
              </tr>
              <tr>
                <td>2026 Family HSA Limit</td>
                <td>$8,550</td>
              </tr>
              <tr>
                <td>Catch-Up (55+)</td>
                <td>Additional $1,000</td>
              </tr>
              <tr>
                <td>Tax Savings (24% bracket, individual)</td>
                <td>~$1,690/year</td>
              </tr>
              <tr>
                <td>HSA Funds Roll Over?</td>
                <td>Yes — no expiration, no use-it-or-lose-it</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section: How It Works */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          How Does an HSA Work with Health Sharing?
        </h2>
        <p className="mb-4 leading-relaxed">
          An HSA is a tax-advantaged savings account that allows you to set aside
          pre-tax dollars for qualified medical expenses. To contribute to an HSA, you
          must be enrolled in a qualifying High Deductible Health Plan (HDHP) or an
          HSA-eligible health sharing arrangement. Zion HealthShare structures its plans
          to meet the IRS requirements for HSA eligibility, with IUA levels that satisfy
          the minimum deductible thresholds ($1,650 for individuals and $3,300 for
          families in 2026).
        </p>
        <p className="mb-6 leading-relaxed">
          Once enrolled in an HSA-eligible plan, you open an HSA at any bank or
          financial institution that offers them (Fidelity, Lively, and HSA Bank are
          popular choices). You contribute up to $4,300 (individual) or $8,550 (family)
          in 2026. These contributions reduce your taxable income dollar-for-dollar.
          Withdrawals for qualified medical expenses — including IUA payments, co-shares,
          prescriptions, dental, and vision — are completely tax-free.
        </p>

        {/* Section: Why It Matters */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Why Is HSA Compatibility Important for Health Sharing Members?
        </h2>
        <p className="mb-4 leading-relaxed">
          Health sharing monthly contributions are not tax-deductible. Unlike ACA
          insurance premiums, which self-employed individuals can deduct on Schedule 1,
          health sharing shares provide zero tax benefit. This makes HSA compatibility
          the only tax-advantaged strategy available to health sharing members. Without an
          HSA, the entire cost of health sharing — monthly shares, IUA payments, and
          out-of-pocket expenses — comes from after-tax dollars.
        </p>
        <p className="mb-6 leading-relaxed">
          For a self-employed individual in the 24% federal bracket with 15.3%
          self-employment tax, a full $4,300 HSA contribution saves approximately $1,690
          in taxes. A family contributing $8,550 saves roughly $3,360. These savings
          effectively reduce the net cost of health sharing and can make up for the lost
          premium deduction. Over 10 years, the tax savings alone can exceed $15,000 for
          an individual or $30,000 for a family — in addition to the monthly savings
          compared to ACA insurance.
        </p>

        {/* Section: Which Plans */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Which Health Sharing Plans Are HSA-Compatible?
        </h2>
        <p className="mb-4 leading-relaxed">
          Zion HealthShare is the most accessible HSA-compatible health sharing plan.
          Their high-IUA plans ($2,000+ for individuals) meet the IRS minimum deductible
          requirements for HDHP qualification. Zion explicitly markets HSA compatibility
          and provides documentation for HSA account opening. Their individual plans start
          at $185/month with a $2,000 IUA, making the combined cost of health sharing
          plus HSA contributions manageable for most budgets.
        </p>
        <p className="mb-6 leading-relaxed">
          Sedera also offers HSA-eligible arrangements, though their individual plans
          start higher at $199-$379/month. Presidio Healthcare, as actual regulated
          insurance, offers HSA-compatible high-deductible plans starting at $300/month.
          The remaining plans — CHM, Medi-Share, Samaritan Ministries, and CrowdHealth —
          are not structured to meet HSA eligibility requirements. Members of these plans
          cannot contribute to an HSA while enrolled.
        </p>

        {/* Section: Strategy */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          What Is the Optimal HSA + Health Sharing Strategy?
        </h2>
        <p className="mb-6 leading-relaxed">
          The most tax-efficient approach combines Zion HealthShare's highest IUA plan
          ($185/month with $2,000 IUA) with maximum HSA contributions ($4,300 individual
          or $8,550 family). Use HSA funds to pay for IUA costs, co-shares, prescriptions,
          dental, vision, and any other qualified medical expenses tax-free. Invest
          unused HSA funds in index funds for long-term growth — HSA investment gains are
          tax-free when used for medical expenses. After age 65, HSA funds can be
          withdrawn for any purpose (taxed as income, similar to a traditional IRA),
          making it a powerful retirement savings vehicle in addition to healthcare
          coverage.
        </p>

        {/* Comparison Table */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          HSA Compatibility by Plan
        </h2>
        <div className="overflow-x-auto mb-8">
          <table>
            <thead>
              <tr>
                <th>Plan</th>
                <th>HSA Compatible</th>
                <th>Individual Cost/Mo</th>
                <th>Min IUA</th>
                <th>Faith Required</th>
                <th>Sharing Cap</th>
              </tr>
            </thead>
            <tbody>
              {allPlans.map((m) => (
                <tr key={m.slug}>
                  <td>
                    <Link href={`/reviews/${m.slug}`} className="font-semibold">
                      {m.name}
                    </Link>
                  </td>
                  <td className={m.hsaCompatible ? 'text-green-700 font-semibold' : 'text-red-600'}>
                    {m.hsaCompatible ? 'Yes' : 'No'}
                  </td>
                  <td>
                    ${m.plans[0]?.monthlyRange?.individual?.min}-$
                    {m.plans[0]?.monthlyRange?.individual?.max}
                  </td>
                  <td>${m.plans[0]?.iua?.[0]}</td>
                  <td>
                    {m.faithRequirement === 'any-faith' || m.faithRequirement === 'secular'
                      ? 'No'
                      : 'Yes'}
                  </td>
                  <td>{m.plans[0]?.coverageCap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Line */}
        <div className="bg-[var(--color-primary-lighter)] p-6 rounded-lg mb-8">
          <h2 className="font-serif font-bold text-2xl mb-3">The Bottom Line</h2>
          <p className="leading-relaxed">
            If you choose health sharing, HSA compatibility should be a top selection
            criterion. Zion HealthShare at $185/month paired with a maximum HSA
            contribution of $4,300 creates the most tax-efficient healthcare strategy
            available outside employer-sponsored insurance. The HSA provides $1,000-$3,000+
            in annual tax savings, tax-free medical expense payments, and long-term
            investment growth potential. For members using non-HSA-compatible plans (CHM,
            Medi-Share, Samaritan, CrowdHealth), the entire healthcare cost comes from
            after-tax dollars with no tax offset.
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
              <Link href="/answers/cost">How Much Does Health Sharing Cost?</Link>
            </li>
            <li>
              <Link href="/answers/best-for-self-employed">
                Best Plan for Self-Employed
              </Link>
            </li>
            <li>
              <Link href="/answers/worth-it">Is Health Sharing Worth It?</Link>
            </li>
            <li>
              <Link href="/answers/best-for-families">Best Plan for Families</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
