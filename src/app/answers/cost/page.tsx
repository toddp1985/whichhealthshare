import { loadAllMinistries } from '@/lib/data';
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema';
import Link from 'next/link';

export const metadata = {
  title: 'How Much Does Health Sharing Cost? (2026 Pricing) — WhichHealthShare',
  description:
    'Health sharing costs $115-$495/month for individuals and $264-$804/month for families in 2026. Compare CHM, CrowdHealth, Zion, Medi-Share, and more with real pricing data.',
  openGraph: {
    title: 'How Much Does Health Sharing Cost? (2026 Pricing)',
    description:
      'CHM starts at $115/mo. CrowdHealth averages $140/mo. Zion starts at $185/mo. Full pricing breakdown with IUA costs and hidden fees.',
  },
};

const faqs = [
  {
    question: 'What is the cheapest health sharing plan in 2026?',
    answer:
      'CHM (Christian Healthcare Ministries) is the cheapest health sharing plan starting at $115/month for individuals and $345/month for families. However, CHM requires strict Christian faith and church attendance. For those without faith requirements, CrowdHealth averages $140/month for individuals under 55, and Zion HealthShare starts at $185/month.',
  },
  {
    question: 'What is an IUA and how does it affect my total cost?',
    answer:
      'IUA stands for Initial Unshareable Amount. It functions like a deductible — the amount you pay per medical incident before the plan begins sharing costs. IUAs range from $300 to $5,000 depending on the plan and tier. Higher IUAs mean lower monthly contributions, and lower IUAs mean higher monthly costs. Unlike insurance deductibles, most health sharing IUAs apply per incident, not per year.',
  },
  {
    question: 'Are there hidden costs with health sharing?',
    answer:
      "Yes, several costs beyond the monthly share exist. The IUA (per-incident out-of-pocket) ranges from $300-$5,000. Co-sharing percentages of 10-20% apply after the IUA is met. Some plans charge enrollment fees ($50-$150). Prescription drugs are not covered by CHM, Medi-Share, or Samaritan (you pay out of pocket or use discount cards). Annual assessments are possible if the plan's sharing pool runs low. Always calculate total annual cost including IUA scenarios, not just monthly share.",
  },
  {
    question: 'How much do I save compared to ACA marketplace insurance?',
    answer:
      'Without ACA subsidies, the average ACA marketplace plan costs $450-$700/month for individuals and $1,200-$2,000/month for families in 2026. Health sharing plans range from $115-$495/month for individuals and $345-$1,485/month for families. Average savings: $200-$400/month ($2,400-$4,800/year). However, if you qualify for ACA subsidies (income under 400% of federal poverty level), subsidized ACA plans may cost less than health sharing.',
  },
  {
    question: 'Does the monthly cost change as I get older?',
    answer:
      'Most health sharing plans use age-banded pricing, meaning costs increase as you age. CrowdHealth separates members into under-55 and over-55 categories. Medi-Share, Zion, and others adjust monthly shares by age bracket. However, age-based increases in health sharing are typically smaller than ACA insurance age adjustments, where premiums can be up to 3x higher for older members.',
  },
];

export default function CostPage() {
  const ministries = loadAllMinistries();
  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Answers', url: '/answers' },
    { name: 'Cost', url: '/answers/cost' },
  ]);
  const faqSchema = generateFAQSchema(faqs);
  const articleSchema = generateArticleSchema(
    'How Much Does Health Sharing Cost?',
    'Health sharing costs $115-$495/month for individuals and $264-$804/month for families in 2026. Complete pricing breakdown with IUA costs, co-sharing, and hidden fees.'
  );

  const sortedByIndividualCost = ministries
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
          <span>Cost</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">
          How Much Does Health Sharing Cost?
        </h1>

        <p className="text-lg leading-relaxed mb-2">
          Health sharing costs $60-$495/month for individuals and $345-$1,485/month for
          families in 2026, depending on the plan, age, and IUA level selected. CHM is
          the cheapest at $115/month for individuals. CrowdHealth averages $140/month.
          Zion HealthShare starts at $185/month. Medi-Share starts at $227/month.
          Additionally, members pay an IUA (Initial Unshareable Amount) of $300-$5,000
          per incident. These costs are 40-60% lower than unsubsidized ACA marketplace
          plans.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8">
          Updated February 2026. Pricing verified against each ministry's published
          rates.
        </p>

        {/* Key Facts Table */}
        <h2 className="font-serif font-bold text-2xl mb-4">Key Facts: Health Sharing Costs</h2>
        <div className="overflow-x-auto mb-8">
          <table>
            <thead>
              <tr>
                <th>Cost Component</th>
                <th>Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Individual Monthly Share</td>
                <td>$60-$495/month</td>
              </tr>
              <tr>
                <td>Family Monthly Share</td>
                <td>$345-$1,485/month</td>
              </tr>
              <tr>
                <td>IUA (per incident)</td>
                <td>$300-$5,000</td>
              </tr>
              <tr>
                <td>Co-Share (after IUA)</td>
                <td>10-20% of remaining bill</td>
              </tr>
              <tr>
                <td>Enrollment Fee (one-time)</td>
                <td>$0-$150</td>
              </tr>
              <tr>
                <td>Average ACA Comparison</td>
                <td>$450-$700/mo individual (unsubsidized)</td>
              </tr>
              <tr>
                <td>Annual Savings vs. ACA</td>
                <td>$2,400-$4,800/year (without subsidies)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section: Monthly Costs */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          What Are the Monthly Costs by Plan?
        </h2>
        <p className="mb-4 leading-relaxed">
          Monthly health sharing costs vary significantly based on the plan, your age,
          household size, and IUA selection. The cheapest option is CHM at $115/month for
          individuals, but this requires strict Christian faith and church attendance.
          CrowdHealth averages roughly $140/month for members under 55 ($60 advocacy fee
          plus approximately $80 in crowdfunding contributions). Zion HealthShare starts
          at $185/month with no faith requirement, and Medi-Share begins at $227/month
          for the largest ministry with 400,000+ members.
        </p>
        <p className="mb-6 leading-relaxed">
          Family costs scale proportionally. CHM family plans start at $345/month while
          Zion HealthShare families pay $555-$804/month and Medi-Share families pay
          $681-$1,215/month. Samaritan Ministries has the highest family ceiling at
          $660-$1,485/month. CrowdHealth does not publish formal family rates, as pricing
          is based on individual member age rather than household structure.
        </p>

        {/* Section: IUA */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          How Does the IUA Affect Total Cost?
        </h2>
        <p className="mb-4 leading-relaxed">
          The IUA (Initial Unshareable Amount) is the most misunderstood cost in health
          sharing. It works like a deductible, but with a critical difference: most health
          sharing IUAs apply per medical incident, not per calendar year. If you have
          three separate medical events in one year with a $1,000 IUA, you pay $3,000
          out of pocket before sharing kicks in for each event.
        </p>
        <p className="mb-6 leading-relaxed">
          Choosing a higher IUA significantly lowers your monthly share. For example,
          Zion HealthShare's individual plan at a $500 IUA costs approximately $268/month,
          while the same plan at a $2,000 IUA drops to approximately $185/month — a
          savings of $83/month ($996/year). For healthy individuals who rarely need
          medical care, a higher IUA makes financial sense. For those expecting multiple
          medical events, a lower IUA provides more predictable total costs.
        </p>

        {/* Section: Hidden Costs */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          What Hidden Costs Should I Watch For?
        </h2>
        <p className="mb-4 leading-relaxed">
          Beyond the monthly share and IUA, several costs can catch members off guard.
          Co-sharing requires you to pay 10-20% of eligible bills after the IUA is met.
          Prescription drugs are not covered by CHM, Medi-Share, or Samaritan Ministries —
          members pay retail prices or use discount programs like GoodRx. Some plans
          charge one-time enrollment fees of $50-$150. Annual assessments are possible if
          a plan's sharing pool experiences higher-than-expected claims, though this is
          uncommon.
        </p>
        <p className="mb-6 leading-relaxed">
          Dental and vision are excluded from every health sharing plan reviewed. Mental
          health coverage is limited to Zion HealthShare, Sedera, CrowdHealth, and
          Presidio Healthcare. If you need mental health services, prescription drugs, or
          dental/vision, you will pay these costs entirely out of pocket with most plans.
          Factor these exclusions into your total annual healthcare budget when comparing
          against ACA insurance, which typically includes these categories.
        </p>

        {/* Section: ACA Comparison */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          How Do Health Sharing Costs Compare to ACA Insurance?
        </h2>
        <p className="mb-6 leading-relaxed">
          Without subsidies, the average ACA marketplace plan costs $450-$700/month for
          individuals and $1,200-$2,000/month for families in 2026. Health sharing saves
          $200-$400/month ($2,400-$4,800/year) on monthly costs alone. However, ACA
          insurance includes guaranteed coverage, prescription drug benefits, mental
          health parity, preventive care at no cost, and regulatory protections that
          health sharing does not provide. If you qualify for ACA subsidies — household
          income under 400% of the federal poverty level ($60,240 for an individual in
          2026) — subsidized ACA insurance may cost less than health sharing while
          offering stronger protections.
        </p>

        {/* Comparison Table */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Complete Cost Comparison by Plan
        </h2>
        <div className="overflow-x-auto mb-8">
          <table>
            <thead>
              <tr>
                <th>Plan</th>
                <th>Individual/Mo</th>
                <th>Family/Mo</th>
                <th>IUA Options</th>
                <th>Co-Share</th>
                <th>Sharing Cap</th>
              </tr>
            </thead>
            <tbody>
              {sortedByIndividualCost.map((m) => (
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
                  <td>
                    {m.plans[0]?.monthlyRange?.family
                      ? `$${m.plans[0].monthlyRange.family.min}-$${m.plans[0].monthlyRange.family.max}`
                      : 'N/A'}
                  </td>
                  <td>
                    {m.plans[0]?.iua?.map((v) => `$${v}`).join(', ')}
                  </td>
                  <td>{m.plans[0]?.coShare}</td>
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
            Health sharing costs 40-60% less than unsubsidized ACA insurance for most
            individuals and families. The cheapest entry point is CHM at $115/month
            (strict faith required) or CrowdHealth at ~$140/month (secular). For the best
            balance of cost and coverage, Zion HealthShare at $185-$268/month offers HSA
            compatibility, unlimited sharing, and no faith requirement. Always calculate
            your total annual cost including IUA scenarios, co-sharing, and excluded
            services — not just the monthly share — before committing.
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
              <Link href="/answers/worth-it">Is Health Sharing Worth It?</Link>
            </li>
            <li>
              <Link href="/answers/hsa-compatible">
                Can I Use an HSA with Health Sharing?
              </Link>
            </li>
            <li>
              <Link href="/answers/best-for-self-employed">
                Best Plan for Self-Employed
              </Link>
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
