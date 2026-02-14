import { loadAllMinistries } from '@/lib/data';
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema';
import Link from 'next/link';

export const metadata = {
  title: 'Best Health Sharing Plan for Families (2026) — WhichHealthShare',
  description:
    'Medi-Share is the best health sharing plan for families in 2026, with plans from $380-$550/month, PPO network access, and maternity coverage. Compare all family plans here.',
  openGraph: {
    title: 'Best Health Sharing Plan for Families (2026)',
    description:
      'Compare family health sharing plans side-by-side. Medi-Share, CHM, Zion HealthShare, and more — pricing, coverage, and maternity options.',
  },
};

const faqs = [
  {
    question: 'Which health sharing plan has the cheapest family rate?',
    answer:
      'CHM (Christian Healthcare Ministries) has the lowest family rate starting at $345/month for their Bronze-level plan. However, CHM requires strict Christian faith and church attendance. For families without a faith requirement, Zion HealthShare starts at $555/month.',
  },
  {
    question: 'Do health sharing plans cover maternity for families?',
    answer:
      'Yes, most major health sharing plans cover maternity. Medi-Share, CHM, Zion HealthShare, Samaritan Ministries, and Sedera all include maternity sharing. Waiting periods of 10-12 months typically apply. CrowdHealth also covers maternity through its crowdfunding model.',
  },
  {
    question: 'Can my children stay on a family health sharing plan past age 18?',
    answer:
      'Most health sharing plans cover dependent children up to age 26, similar to ACA insurance rules. Medi-Share and Zion HealthShare both extend coverage to age 26. After that, children need their own individual plan. CHM covers dependents up to age 25.',
  },
  {
    question: 'Is health sharing safe for families with young children?',
    answer:
      'Health sharing covers routine pediatric emergencies, surgeries, and hospital stays. However, it is NOT insurance and does not guarantee payment. Families with children who have chronic conditions or special needs should carefully evaluate waiting periods and coverage limits. Presidio Healthcare offers actual regulated insurance as a safer alternative.',
  },
  {
    question: 'How does the IUA work for families?',
    answer:
      'The IUA (Initial Unshareable Amount) is a per-incident cost similar to a deductible. For families, each medical incident triggers an IUA payment of $500-$5,000 depending on your plan. Some plans have a family maximum IUA cap per year. Zion HealthShare caps family IUA at 3 incidents per year.',
  },
];

export default function BestForFamiliesPage() {
  const ministries = loadAllMinistries();
  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Answers', url: '/answers' },
    { name: 'Best for Families', url: '/answers/best-for-families' },
  ]);
  const faqSchema = generateFAQSchema(faqs);
  const articleSchema = generateArticleSchema(
    'Which Health Sharing Plan Is Best for Families?',
    'Medi-Share is the best health sharing plan for families in 2026, with family plans from $380-$550/month, PPO network access, maternity coverage, and 400,000+ members.'
  );

  const familyPlans = ministries
    .filter((m) => m.plans[0]?.monthlyRange?.family)
    .sort(
      (a, b) =>
        (a.plans[0]?.monthlyRange?.family?.min || 0) -
        (b.plans[0]?.monthlyRange?.family?.min || 0)
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
          <span>Best for Families</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">
          Which Health Sharing Plan Is Best for Families?
        </h1>

        <p className="text-lg leading-relaxed mb-2">
          Medi-Share is the best overall health sharing plan for families in 2026, with
          family plans from $681-$1,215/month, maternity coverage, any-doctor access, and
          400,000+ members backing a 30-year track record. CHM is the most affordable
          family option starting at $345/month but requires strict Christian faith and
          church attendance. Zion HealthShare offers unlimited sharing with no faith
          requirement starting at $555/month.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8">
          Updated February 2026. Data verified against each ministry's published rates.
        </p>

        {/* Key Facts Table */}
        <h2 className="font-serif font-bold text-2xl mb-4">Key Facts: Family Health Sharing Plans</h2>
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
                <td>Best Overall for Families</td>
                <td>Medi-Share ($681-$1,215/mo, 400,000+ members)</td>
              </tr>
              <tr>
                <td>Most Affordable</td>
                <td>CHM ($345-$792/mo, strict faith required)</td>
              </tr>
              <tr>
                <td>Best Without Faith Requirement</td>
                <td>Zion HealthShare ($555-$804/mo, secular)</td>
              </tr>
              <tr>
                <td>Maternity Coverage</td>
                <td>Available at Medi-Share, CHM, Zion, Samaritan, Sedera</td>
              </tr>
              <tr>
                <td>Typical IUA Range</td>
                <td>$300-$2,000 per incident</td>
              </tr>
              <tr>
                <td>Savings vs. ACA</td>
                <td>40-60% lower monthly cost (unsubsidized)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section: Why Medi-Share */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Why Is Medi-Share the Top Choice for Families?
        </h2>
        <p className="mb-4 leading-relaxed">
          Medi-Share has shared over $4 billion in medical bills since 1992 and maintains
          the largest membership base of any health sharing ministry at 400,000+ members.
          For families, this size translates to financial stability: larger pools mean
          more consistent bill sharing. Their family plans include maternity coverage with
          no network restrictions, meaning families can see any doctor or specialist
          without referrals. The 20% co-share after IUA keeps out-of-pocket costs
          predictable, and telehealth access provides convenient care for common pediatric
          issues.
        </p>
        <p className="mb-6 leading-relaxed">
          The trade-off is cost. Medi-Share family plans range from $681-$1,215/month
          depending on IUA selection, which places them at the higher end of health
          sharing options. They also require a Christian statement of faith (though not
          church attendance) and impose a 12-month waiting period for pre-existing
          conditions with phased sharing at 25% the first year.
        </p>

        {/* Section: Affordable Alternative */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          What Is the Most Affordable Family Health Sharing Plan?
        </h2>
        <p className="mb-4 leading-relaxed">
          CHM (Christian Healthcare Ministries) offers the lowest family rates in the
          health sharing space, starting at $345/month for a family. Their unlimited
          sharing cap means there is no ceiling on eligible medical bills. CHM has
          operated since 1981 — the longest track record of any ministry — and serves
          300,000+ members. Maternity, preventive care, emergency, and surgery are all
          eligible for sharing.
        </p>
        <p className="mb-6 leading-relaxed">
          The significant caveat: CHM requires strict Christian faith and regular church
          attendance. They also do not cover telehealth or prescription drugs, which can
          be a gap for families managing ongoing medications. Their pre-existing waiting
          period is 6 months with 50% sharing in the first period, which is shorter than
          Medi-Share's 12-month phase-in.
        </p>

        {/* Section: No Faith Requirement */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Which Family Plan Has No Faith Requirement?
        </h2>
        <p className="mb-4 leading-relaxed">
          Zion HealthShare is the strongest option for families who do not want a faith
          requirement. Starting at $555/month for families, Zion provides unlimited
          sharing cap, PPO network access through Cigna (950,000+ providers),
          prescription coverage, mental health sharing, and maternity. They accept
          pre-existing conditions with no waiting period — a significant advantage for
          families switching from insurance.
        </p>
        <p className="mb-6 leading-relaxed">
          Zion is also HSA-compatible, which allows families to pair their health sharing
          plan with tax-advantaged savings. The 2026 HSA family contribution limit is
          $8,550, which can offset a significant portion of annual healthcare costs. Zion
          was founded in 2017, so their track record is shorter than CHM or Medi-Share,
          but their 50,000+ membership base is growing.
        </p>

        {/* Section: Maternity */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          How Does Maternity Coverage Work with Health Sharing?
        </h2>
        <p className="mb-6 leading-relaxed">
          Most health sharing plans require a 10-12 month waiting period before maternity
          expenses become eligible for sharing. This means the pregnancy must begin after
          the waiting period ends. Medi-Share, CHM, Zion, Samaritan, and Sedera all
          include maternity sharing. CrowdHealth covers maternity through crowdfunding
          with no formal waiting period, though pre-existing pregnancy is excluded.
          Families planning a pregnancy should enroll well in advance to satisfy waiting
          period requirements.
        </p>

        {/* Comparison Table */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Family Plan Comparison Table
        </h2>
        <div className="overflow-x-auto mb-8">
          <table>
            <thead>
              <tr>
                <th>Plan</th>
                <th>Family Cost/Mo</th>
                <th>Sharing Cap</th>
                <th>Faith Required</th>
                <th>Maternity</th>
                <th>Network</th>
              </tr>
            </thead>
            <tbody>
              {familyPlans.map((m) => (
                <tr key={m.slug}>
                  <td>
                    <Link href={`/reviews/${m.slug}`} className="font-semibold">
                      {m.name}
                    </Link>
                  </td>
                  <td>
                    ${m.plans[0]?.monthlyRange?.family?.min}-$
                    {m.plans[0]?.monthlyRange?.family?.max}
                  </td>
                  <td>{m.plans[0]?.coverageCap}</td>
                  <td>
                    {m.faithRequirement === 'any-faith' || m.faithRequirement === 'secular'
                      ? 'No'
                      : 'Yes'}
                  </td>
                  <td>{m.plans[0]?.includes?.maternity ? 'Yes' : 'No'}</td>
                  <td>{m.network?.type === 'ppo' ? m.network.name : 'Any doctor'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Line */}
        <div className="bg-[var(--color-primary-lighter)] p-6 rounded-lg mb-8">
          <h2 className="font-serif font-bold text-2xl mb-3">The Bottom Line</h2>
          <p className="leading-relaxed">
            For most families, Medi-Share offers the best combination of stability,
            maternity coverage, and provider flexibility. Budget-conscious Christian
            families should look at CHM for savings of $300+/month. Families without a
            faith preference or with pre-existing conditions will find the strongest value
            at Zion HealthShare. If guaranteed coverage matters more than savings,
            Presidio Healthcare offers actual regulated insurance starting at $900/month
            for families.
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
          </ul>
        </div>
      </div>
    </>
  );
}
