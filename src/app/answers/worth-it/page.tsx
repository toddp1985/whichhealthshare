import { loadAllMinistries } from '@/lib/data';
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema';
import Link from 'next/link';

export const metadata = {
  title: 'Is Health Sharing Worth It? (2026 Honest Assessment) — WhichHealthShare',
  description:
    'Health sharing saves 40-60% on monthly costs but is NOT insurance. Worth it for healthy individuals; not for pre-existing conditions or mental health needs. Full analysis.',
  openGraph: {
    title: 'Is Health Sharing Worth It? (2026 Honest Assessment)',
    description:
      'Average savings of $200-$400/month vs. ACA. Trade-offs include less guaranteed coverage, waiting periods, and limited mental health. Read the full breakdown.',
  },
};

const faqs = [
  {
    question: 'Is health sharing worth it for a healthy person?',
    answer:
      'Yes, for most healthy individuals, health sharing delivers significant savings. A healthy 35-year-old paying $185/month with Zion HealthShare instead of $500/month for an unsubsidized ACA plan saves $3,780/year. If that person has 0-1 medical events per year, the IUA cost ($500-$1,000) still results in net savings of $2,780-$3,280. The math works when you rarely use healthcare beyond preventive visits.',
  },
  {
    question: 'Is health sharing worth it with pre-existing conditions?',
    answer:
      'It depends on the condition and plan. Zion HealthShare accepts pre-existing conditions with no waiting period, making it viable for some members. CHM has a 6-month waiting period, while Medi-Share and Samaritan require 12 months with phased sharing. For serious chronic conditions requiring ongoing treatment, ACA insurance or Presidio Healthcare (actual insurance) provides guaranteed coverage from day one with no exclusions. The savings gap narrows significantly when you factor in out-of-pocket costs during waiting periods.',
  },
  {
    question: 'What happens if my health sharing plan refuses to pay a bill?',
    answer:
      'Unlike insurance, health sharing plans are not legally obligated to pay any medical bill. Sharing is voluntary. If a plan denies a bill, your options are limited: you can appeal within the plan, negotiate directly with the provider, or pay out of pocket. You cannot file a complaint with your state insurance commissioner because health sharing is not regulated as insurance. This is the fundamental trade-off: lower cost in exchange for less certainty.',
  },
  {
    question: 'Is health sharing worth it compared to short-term health insurance?',
    answer:
      'Health sharing and short-term insurance serve different needs. Short-term insurance is actual insurance with regulatory protections, but excludes pre-existing conditions entirely and has coverage caps (typically $250K-$1M). Health sharing plans like Zion and CHM offer unlimited sharing caps and eventually cover pre-existing conditions after waiting periods. For healthy individuals, health sharing generally provides better long-term value. Short-term insurance is better as a gap solution for 3-12 months.',
  },
  {
    question: 'Can health sharing plans go bankrupt or disappear?',
    answer:
      'Yes, this is a real risk. Health sharing plans are not backed by state guaranty funds that protect insurance policyholders. If a ministry becomes insolvent, members may lose their contributions and have unpaid medical bills. To mitigate this risk, choose established ministries: CHM (founded 1981, 300,000+ members), Medi-Share (founded 1992, 400,000+ members), or Samaritan Ministries (founded 1994, 230,000+ members). Avoid newer, unaccredited plans with small membership pools.',
  },
];

export default function WorthItPage() {
  const ministries = loadAllMinistries();
  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Answers', url: '/answers' },
    { name: 'Worth It', url: '/answers/worth-it' },
  ]);
  const faqSchema = generateFAQSchema(faqs);
  const articleSchema = generateArticleSchema(
    'Is Health Sharing Worth It?',
    'Health sharing saves 40-60% on monthly healthcare costs but trades guaranteed coverage for lower prices. Worth it for healthy individuals; less suitable for pre-existing conditions or comprehensive coverage needs.'
  );

  const healthshares = ministries.filter(
    (m) => m.type === 'healthshare' || m.type === 'crowdfunding'
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
          <span>Worth It</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">
          Is Health Sharing Worth It?
        </h1>

        <p className="text-lg leading-relaxed mb-2">
          Health sharing is worth it for healthy individuals and families who want to save
          40-60% on monthly healthcare costs and accept the trade-off of less guaranteed
          coverage. It is NOT worth it for people with significant pre-existing conditions
          (waiting periods of 6-12 months apply at most plans), those who need
          comprehensive mental health or fertility coverage, or anyone who needs regulatory
          protections. Average savings: $200-$400/month compared to unsubsidized ACA
          marketplace plans.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8">
          Updated February 2026. An honest, editorial assessment based on verified plan
          data.
        </p>

        {/* Key Facts Table */}
        <h2 className="font-serif font-bold text-2xl mb-4">Key Facts: Is Health Sharing Worth It?</h2>
        <div className="overflow-x-auto mb-8">
          <table>
            <thead>
              <tr>
                <th>Factor</th>
                <th>Assessment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Average Monthly Savings</td>
                <td>$200-$400/month vs. unsubsidized ACA</td>
              </tr>
              <tr>
                <td>Annual Savings</td>
                <td>$2,400-$4,800/year</td>
              </tr>
              <tr>
                <td>Coverage Guarantee</td>
                <td>None — sharing is voluntary, not legally required</td>
              </tr>
              <tr>
                <td>Pre-Existing Conditions</td>
                <td>6-12 month waiting periods at most plans</td>
              </tr>
              <tr>
                <td>Mental Health Coverage</td>
                <td>Limited — only Zion, Sedera, CrowdHealth, Presidio</td>
              </tr>
              <tr>
                <td>Regulatory Protection</td>
                <td>None — not regulated as insurance in any state</td>
              </tr>
              <tr>
                <td>Best Candidate</td>
                <td>Healthy, under 55, no chronic conditions, flexible</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section: When Worth It */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          When Is Health Sharing Worth the Trade-Offs?
        </h2>
        <p className="mb-4 leading-relaxed">
          Health sharing delivers the strongest value for a specific profile: generally
          healthy individuals and families under 55 who rarely use healthcare beyond
          preventive visits and occasional urgent care. A 35-year-old paying $185/month
          with Zion HealthShare instead of $500/month for an unsubsidized ACA silver plan
          saves $3,780 per year. Over 5 years, that is $18,900 in savings — a meaningful
          sum that can be directed toward an HSA, emergency fund, or retirement account.
        </p>
        <p className="mb-6 leading-relaxed">
          Self-employed individuals without access to employer-sponsored insurance see the
          highest value. Freelancers, contractors, and small business owners who do not
          qualify for ACA subsidies face the full cost of marketplace premiums. Health
          sharing cuts that expense by 40-60%. Month-to-month flexibility (especially with
          CrowdHealth) appeals to workers with variable income who want to avoid annual
          enrollment commitments.
        </p>

        {/* Section: When Not Worth It */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          When Is Health Sharing NOT Worth It?
        </h2>
        <p className="mb-4 leading-relaxed">
          Health sharing is not a good fit for several important situations. If you have
          pre-existing conditions requiring ongoing treatment — diabetes, heart disease,
          autoimmune disorders — most plans impose 6-12 month waiting periods before
          sharing begins. During that waiting period, you pay 100% of related costs out
          of pocket. Zion HealthShare is the exception with no waiting period, but even
          then, sharing is voluntary and not guaranteed.
        </p>
        <p className="mb-6 leading-relaxed">
          Mental health coverage is sparse across health sharing plans. Only Zion
          HealthShare, Sedera, CrowdHealth, and Presidio Healthcare include mental health
          sharing. CHM, Medi-Share, and Samaritan Ministries do not. Fertility treatments,
          substance abuse programs, and gender-affirming care are excluded from virtually
          all health sharing plans. If these services are important to your healthcare
          needs, ACA insurance provides legally mandated coverage for most of them.
        </p>

        {/* Section: Risk Assessment */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          What Are the Real Risks of Health Sharing?
        </h2>
        <p className="mb-4 leading-relaxed">
          The fundamental risk is that health sharing is not insurance. Plans are not
          legally obligated to share your medical bills. While established ministries like
          CHM and Medi-Share have decades-long track records of consistent sharing, there
          is no state insurance commissioner, no guaranty fund, and no legal recourse if
          a plan refuses to share a bill. CrowdHealth reports that 99% of approved bills
          have been funded — which means 1% have not.
        </p>
        <p className="mb-6 leading-relaxed">
          Catastrophic events test health sharing plans the hardest. A $500,000 hospital
          bill requires the plan to mobilize significant resources from the sharing pool.
          Plans with unlimited sharing caps (Zion, CHM, Samaritan, Sedera) theoretically
          cover this, but the speed and completeness of sharing depends on pool size and
          member contributions. Medi-Share caps sharing at $250,000 per incident, which
          may not cover complex surgeries, cancer treatment, or extended ICU stays.
        </p>

        {/* Section: Math */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Does the Math Actually Work Out?
        </h2>
        <p className="mb-6 leading-relaxed">
          For a healthy individual with 0-2 medical events per year: Zion HealthShare at
          $185/month ($2,220/year) plus one $1,000 IUA event totals $3,220/year. An
          unsubsidized ACA silver plan at $500/month ($6,000/year) plus a $2,000
          deductible totals $8,000/year in a similar scenario. Net savings: $4,780/year
          with health sharing. For a family of four with Zion at $555/month
          ($6,660/year) versus an ACA family plan at $1,400/month ($16,800/year), the
          annual savings exceeds $10,000. These savings compound over time but assume
          generally good health and limited use of excluded services.
        </p>

        {/* Comparison Table */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Health Sharing vs. ACA Insurance: Coverage Comparison
        </h2>
        <div className="overflow-x-auto mb-8">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Health Sharing</th>
                <th>ACA Insurance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly Cost (Individual)</td>
                <td>$115-$495</td>
                <td>$450-$700 (unsubsidized)</td>
              </tr>
              <tr>
                <td>Coverage Guarantee</td>
                <td>No — voluntary sharing</td>
                <td>Yes — legally required</td>
              </tr>
              <tr>
                <td>Pre-Existing Conditions</td>
                <td>6-12 month wait (varies)</td>
                <td>Covered from day one</td>
              </tr>
              <tr>
                <td>Mental Health</td>
                <td>Limited (select plans only)</td>
                <td>Required by law</td>
              </tr>
              <tr>
                <td>Prescription Drugs</td>
                <td>Varies (excluded at CHM, Medi-Share)</td>
                <td>Covered (formulary varies)</td>
              </tr>
              <tr>
                <td>Regulatory Protection</td>
                <td>None</td>
                <td>State and federal oversight</td>
              </tr>
              <tr>
                <td>Tax Deductible</td>
                <td>No (except via HSA)</td>
                <td>Yes (self-employed deduction)</td>
              </tr>
              <tr>
                <td>Network</td>
                <td>Varies (PPO or any doctor)</td>
                <td>HMO, PPO, or EPO</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom Line */}
        <div className="bg-[var(--color-primary-lighter)] p-6 rounded-lg mb-8">
          <h2 className="font-serif font-bold text-2xl mb-3">The Bottom Line</h2>
          <p className="leading-relaxed">
            Health sharing is worth it if you are generally healthy, comfortable with
            voluntary (not guaranteed) coverage, and want to save $200-$400/month on
            healthcare costs. It is not worth it if you have significant pre-existing
            conditions, need comprehensive mental health or fertility coverage, or want
            the regulatory protections that come with insurance. The ideal candidate is a
            healthy individual or family under 55, preferably self-employed or without
            access to affordable employer insurance. When in doubt, Presidio Healthcare
            offers actual regulated insurance as a middle ground between health sharing
            savings and ACA protections.
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
              <Link href="/answers/best-for-families">Best Plan for Families</Link>
            </li>
            <li>
              <Link href="/answers/hsa-compatible">
                Can I Use an HSA with Health Sharing?
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
