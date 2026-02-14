import { loadAllMinistries } from '@/lib/data';
import { generateBreadcrumb, generateArticleSchema } from '@/lib/schema';
import Link from 'next/link';

export const metadata = {
  title: 'Hidden Costs of Health Sharing Plans in 2026 — WhichHealthShare',
  description:
    'The true cost of health sharing goes beyond monthly contributions. Discover waiting periods, coverage caps, claim processing delays, and fees that add thousands.',
  openGraph: {
    title: 'Hidden Costs of Health Sharing Plans Nobody Talks About',
    description:
      'Health sharing advertises $140-$350/mo, but hidden costs can add $5,000-$15,000/year. Waiting periods, caps, admin fees, and more.',
  },
};

export default function HiddenCostsPage() {
  const ministries = loadAllMinistries();

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Hidden Costs of Health Sharing', url: '/blog/hidden-costs-health-sharing-2026' },
  ]);

  const articleSchema = generateArticleSchema(
    'Hidden Costs of Health Sharing Plans Nobody Talks About',
    'Health sharing plans advertise monthly costs of $140-$350, but the actual cost is much higher when you factor in waiting periods, coverage caps, claim processing delays, and administrative fees.'
  );

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

      <div className="section-narrow pt-8">
        <nav className="text-sm text-[var(--color-text-secondary)] mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <span className="mx-2">/</span>
          <span>Hidden Costs of Health Sharing</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">
          Hidden Costs of Health Sharing Plans Nobody Talks About
        </h1>
        <div className="text-sm text-[var(--color-text-muted)] mb-2">
          February 9, 2026 &middot; 12 min read
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] mb-8">
          Last updated: February 2026 | All figures verified from official plan guidelines
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Health sharing plans advertise monthly contributions of $115&ndash;$350 for individuals.
          Those numbers are real. But they are not the full cost. When you factor in Initial
          Unshareable Amounts, co-shares, waiting periods for pre-existing conditions, coverage
          exclusions, and processing delays, the true annual cost of health sharing can be
          $5,000&ndash;$15,000 higher than the advertised monthly rate suggests.
        </p>
        <p className="leading-relaxed mb-8">
          This is not an argument against health sharing &mdash; for many people, it is still
          significantly cheaper than insurance. But you need to understand the full picture before
          making a decision. Here are the costs that marketing materials rarely mention.
        </p>

        {/* Table of Contents */}
        <nav className="card p-6 mb-10">
          <h2 className="font-serif font-bold text-lg mb-3">Table of Contents</h2>
          <ol className="list-decimal list-inside space-y-1 text-[var(--color-text-secondary)]">
            <li><a href="#iua" className="hover:underline">Initial Unshareable Amount (IUA)</a></li>
            <li><a href="#pre-existing" className="hover:underline">Pre-Existing Condition Waiting Periods</a></li>
            <li><a href="#co-shares" className="hover:underline">Co-Shares and Member Responsibility</a></li>
            <li><a href="#exclusions" className="hover:underline">Coverage Exclusions and Gaps</a></li>
            <li><a href="#processing" className="hover:underline">Claim Processing Delays</a></li>
            <li><a href="#cost-breakdown" className="hover:underline">True Cost Comparison: Plan by Plan</a></li>
            <li><a href="#bottom-line" className="hover:underline">How to Minimize Hidden Costs</a></li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="iua" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Hidden Cost #1: Initial Unshareable Amount (IUA)
          </h2>
          <p className="leading-relaxed mb-4">
            The IUA is health sharing&apos;s equivalent of a deductible &mdash; the amount you
            pay before the community starts sharing your medical expenses. Unlike insurance
            deductibles, the IUA typically resets per incident, not per year. If you have three
            separate medical events in one year, you pay the IUA three times.
          </p>
          <p className="leading-relaxed mb-4">
            The impact depends on your plan choice:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-4 font-semibold">Plan</th>
                  <th className="py-3 pr-4 font-semibold">IUA Options</th>
                  <th className="py-3 pr-4 font-semibold">Resets Per</th>
                  <th className="py-3 pr-4 font-semibold">2 Incidents/Year Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">
                    <Link href="/reviews/chm" className="text-[var(--color-primary)] hover:underline">CHM</Link>
                  </td>
                  <td className="py-2 pr-4">$300, $500, $1,000</td>
                  <td className="py-2 pr-4">Per incident</td>
                  <td className="py-2 pr-4">$600&ndash;$2,000</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">
                    <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">Zion HealthShare</Link>
                  </td>
                  <td className="py-2 pr-4">$500, $1,000, $2,000</td>
                  <td className="py-2 pr-4">Per incident</td>
                  <td className="py-2 pr-4">$1,000&ndash;$4,000</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">
                    <Link href="/reviews/medi-share" className="text-[var(--color-primary)] hover:underline">Medi-Share</Link>
                  </td>
                  <td className="py-2 pr-4">$500, $1,000, $2,000</td>
                  <td className="py-2 pr-4">Per incident</td>
                  <td className="py-2 pr-4">$1,000&ndash;$4,000</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">
                    <Link href="/reviews/crowdhealth" className="text-[var(--color-primary)] hover:underline">CrowdHealth</Link>
                  </td>
                  <td className="py-2 pr-4">$500 (member commitment)</td>
                  <td className="py-2 pr-4">Per event</td>
                  <td className="py-2 pr-4">$1,000</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">ACA Silver Plan (comparison)</td>
                  <td className="py-2 pr-4">$3,000&ndash;$5,000</td>
                  <td className="py-2 pr-4">Per year</td>
                  <td className="py-2 pr-4">$3,000&ndash;$5,000 max</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed mb-4">
            The per-incident reset is one of the most misunderstood aspects of health sharing. A
            member with a $1,000 IUA who has an ER visit ($1,000 IUA), a separate surgery
            ($1,000 IUA), and a subsequent hospitalization ($1,000 IUA) pays $3,000 in IUAs
            before any sharing begins &mdash; on top of their monthly contributions. With ACA
            insurance, the same person&apos;s deductible applies once per year.
          </p>
        </section>

        {/* Section 2 */}
        <section id="pre-existing" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Hidden Cost #2: Pre-Existing Condition Waiting Periods
          </h2>
          <p className="leading-relaxed mb-4">
            If you have any pre-existing condition &mdash; diabetes, hypertension, asthma,
            anxiety, a previous surgery &mdash; most health sharing plans will not share
            expenses related to that condition for 6 to 12 months after you join. During the
            waiting period, you are responsible for 100% of those costs.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-4 font-semibold">Plan</th>
                  <th className="py-3 pr-4 font-semibold">Waiting Period</th>
                  <th className="py-3 pr-4 font-semibold">Sharing During Wait</th>
                  <th className="py-3 pr-4 font-semibold">Est. Year 1 Cost (diabetes example)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">
                    <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">Zion HealthShare</Link>
                  </td>
                  <td className="py-2 pr-4 font-semibold">None</td>
                  <td className="py-2 pr-4">100% from month 1</td>
                  <td className="py-2 pr-4">$0 extra</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">
                    <Link href="/reviews/chm" className="text-[var(--color-primary)] hover:underline">CHM</Link>
                  </td>
                  <td className="py-2 pr-4">6 months</td>
                  <td className="py-2 pr-4">50% first 6 months</td>
                  <td className="py-2 pr-4">$2,000&ndash;$4,000</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">
                    <Link href="/reviews/sedera" className="text-[var(--color-primary)] hover:underline">Sedera</Link>
                  </td>
                  <td className="py-2 pr-4">6 months</td>
                  <td className="py-2 pr-4">50% first 6 months</td>
                  <td className="py-2 pr-4">$2,000&ndash;$4,000</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">
                    <Link href="/reviews/medi-share" className="text-[var(--color-primary)] hover:underline">Medi-Share</Link>
                  </td>
                  <td className="py-2 pr-4">12 months</td>
                  <td className="py-2 pr-4">25% year 1, phased to 100% by year 4</td>
                  <td className="py-2 pr-4">$4,000&ndash;$8,000</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">
                    <Link href="/reviews/samaritan-ministries" className="text-[var(--color-primary)] hover:underline">Samaritan Ministries</Link>
                  </td>
                  <td className="py-2 pr-4">12 months</td>
                  <td className="py-2 pr-4">50% first year</td>
                  <td className="py-2 pr-4">$3,000&ndash;$6,000</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <Link href="/reviews/crowdhealth" className="text-[var(--color-primary)] hover:underline">CrowdHealth</Link>
                  </td>
                  <td className="py-2 pr-4">Variable by year</td>
                  <td className="py-2 pr-4">Year 1: $0 | Year 2: $25K | Year 3: $50K</td>
                  <td className="py-2 pr-4">$5,000&ndash;$10,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed mb-4">
            For someone with a manageable pre-existing condition, the waiting period can cost more
            in year one than the savings from lower monthly contributions. A Medi-Share member
            with diabetes paying $405/month ($4,860/year) plus $4,000&ndash;$8,000 in
            uncovered pre-existing costs during year one faces a total cost of $8,860&ndash;$12,860
            &mdash; close to what ACA insurance would cost with full coverage from day one.
          </p>
          <p className="leading-relaxed mb-4">
            <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">
              Zion HealthShare
            </Link>{' '}
            is the only major plan that accepts pre-existing conditions with no waiting period.
            If you have pre-existing conditions, this single factor should heavily influence your
            plan choice. Learn more in our{' '}
            <Link href="/answers/pre-existing-conditions" className="text-[var(--color-primary)] hover:underline">
              pre-existing conditions guide
            </Link>.
          </p>
        </section>

        {/* Section 3 */}
        <section id="co-shares" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Hidden Cost #3: Co-Shares and Member Responsibility Percentages
          </h2>
          <p className="leading-relaxed mb-4">
            After you meet your IUA, most health sharing plans do not cover 100% of the
            remaining bill. You pay a &ldquo;co-share&rdquo; &mdash; typically 10&ndash;20% of
            eligible expenses. Unlike insurance, there is no annual out-of-pocket maximum that
            caps your total spending.
          </p>
          <p className="leading-relaxed mb-4">
            Here is what a $50,000 surgery actually costs you at each plan (assuming $1,000 IUA):
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-4 font-semibold">Plan</th>
                  <th className="py-3 pr-4 font-semibold">Co-Share</th>
                  <th className="py-3 pr-4 font-semibold">IUA</th>
                  <th className="py-3 pr-4 font-semibold">Your Cost on $50K Bill</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">Zion HealthShare</td>
                  <td className="py-2 pr-4">10&ndash;20%</td>
                  <td className="py-2 pr-4">$1,000</td>
                  <td className="py-2 pr-4">$5,900&ndash;$10,800</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">CHM</td>
                  <td className="py-2 pr-4">20%</td>
                  <td className="py-2 pr-4">$1,000</td>
                  <td className="py-2 pr-4">$10,800</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">Medi-Share</td>
                  <td className="py-2 pr-4">20%</td>
                  <td className="py-2 pr-4">$1,000</td>
                  <td className="py-2 pr-4">$10,800</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">Sedera</td>
                  <td className="py-2 pr-4">20%</td>
                  <td className="py-2 pr-4">$1,000</td>
                  <td className="py-2 pr-4">$10,800</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">ACA Silver (comparison)</td>
                  <td className="py-2 pr-4">20% coinsurance</td>
                  <td className="py-2 pr-4">$3,000</td>
                  <td className="py-2 pr-4">$9,200 max (OOP cap)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed mb-4">
            Notice the difference: with ACA insurance, your cost is capped at $9,200 regardless
            of the bill size. With health sharing, there is no ceiling. A $200,000 hospital bill
            with a 20% co-share could leave you responsible for $40,000+ on top of your IUA.
            This is the single biggest financial risk of health sharing compared to insurance.
          </p>
        </section>

        {/* Section 4 */}
        <section id="exclusions" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Hidden Cost #4: Coverage Exclusions and Gaps
          </h2>
          <p className="leading-relaxed mb-4">
            Unlike ACA insurance, health sharing plans are not required to cover essential health
            benefits. Common exclusions that can result in significant out-of-pocket costs
            include:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="leading-relaxed">
              <strong>Prescription drugs:</strong>{' '}
              <Link href="/reviews/chm" className="text-[var(--color-primary)] hover:underline">CHM</Link>,{' '}
              <Link href="/reviews/medi-share" className="text-[var(--color-primary)] hover:underline">Medi-Share</Link>, and{' '}
              <Link href="/reviews/samaritan-ministries" className="text-[var(--color-primary)] hover:underline">Samaritan Ministries</Link>{' '}
              do not share prescription costs. If you take a $200/month medication, that is
              $2,400/year out of pocket on top of your monthly contribution. Read our{' '}
              <Link href="/answers/prescription-coverage" className="text-[var(--color-primary)] hover:underline">
                prescription coverage guide
              </Link>.
            </li>
            <li className="leading-relaxed">
              <strong>Mental health:</strong> CHM, Medi-Share, and Samaritan Ministries do not
              share mental health expenses. Therapy at $150/session weekly costs $7,800/year.
            </li>
            <li className="leading-relaxed">
              <strong>Telehealth:</strong> CHM and Samaritan do not cover telehealth visits,
              which typically cost $50&ndash;$75 each.
            </li>
            <li className="leading-relaxed">
              <strong>Dental and vision:</strong> No health sharing plan includes dental or
              vision as standard benefits. Budget $500&ndash;$2,000/year if you need routine
              dental work or glasses.
            </li>
            <li className="leading-relaxed">
              <strong>Lifestyle-related conditions:</strong> Conditions resulting from tobacco
              use, alcohol abuse, or risky activities may not be shareable. Guidelines vary by
              plan.
            </li>
          </ul>
          <p className="leading-relaxed mb-4">
            Plans like{' '}
            <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">
              Zion HealthShare
            </Link>{' '}
            and{' '}
            <Link href="/reviews/sedera" className="text-[var(--color-primary)] hover:underline">
              Sedera
            </Link>{' '}
            cover prescriptions, mental health, and telehealth &mdash; but they cost more per
            month. The cheapest plans almost always have the most exclusions.
          </p>
        </section>

        {/* Section 5 */}
        <section id="processing" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Hidden Cost #5: Claim Processing Delays
          </h2>
          <p className="leading-relaxed mb-4">
            Health sharing ministries are not insurance companies and do not process claims at
            insurance speed. Processing times range from 30 to 180 days depending on the plan.
            During that time, you may need to pay bills upfront and wait for reimbursement &mdash;
            or negotiate payment plans with providers.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-4 font-semibold">Plan</th>
                  <th className="py-3 pr-4 font-semibold">Typical Processing Time</th>
                </tr>
              </thead>
              <tbody>
                {ministries
                  .filter((m) => m.processingTime)
                  .sort((a, b) => {
                    const getMin = (s: string) => parseInt(s.match(/\d+/)?.[0] || '0');
                    return getMin(a.processingTime) - getMin(b.processingTime);
                  })
                  .slice(0, 7)
                  .map((m) => (
                    <tr key={m.slug} className="border-b border-[var(--color-border)]">
                      <td className="py-2 pr-4">
                        <Link href={`/reviews/${m.slug}`} className="text-[var(--color-primary)] hover:underline">
                          {m.name}
                        </Link>
                      </td>
                      <td className="py-2 pr-4">{m.processingTime}</td>
                    </tr>
                  ))}
                <tr>
                  <td className="py-2 pr-4 font-semibold">ACA Insurance (comparison)</td>
                  <td className="py-2 pr-4">Immediate to 30 days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed mb-4">
            Processing delays create a hidden cash flow cost. If you pay a $5,000 ER bill upfront
            and wait 60 days for sharing reimbursement, you are floating that money interest-free
            to the ministry. For larger bills, some members have reported difficulty getting
            providers to wait for sharing processing, leading to collections activity or
            credit impact.
          </p>
          <p className="leading-relaxed mb-4">
            <Link href="/reviews/crowdhealth" className="text-[var(--color-primary)] hover:underline">
              CrowdHealth
            </Link>{' '}
            is the fastest, with community-funded processing happening within days in most cases.
            Traditional ministries average 30&ndash;60 days for straightforward claims.
          </p>
        </section>

        {/* Section 6 */}
        <section id="cost-breakdown" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            True Cost Comparison: Plan by Plan
          </h2>
          <p className="leading-relaxed mb-4">
            Here is a realistic annual cost breakdown for an individual with 2 medical events
            (one ER visit, one specialist procedure) and one ongoing prescription ($150/month):
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-4 font-semibold">Cost Component</th>
                  <th className="py-3 pr-4 font-semibold">Zion</th>
                  <th className="py-3 pr-4 font-semibold">CHM</th>
                  <th className="py-3 pr-4 font-semibold">Medi-Share</th>
                  <th className="py-3 pr-4 font-semibold">ACA Silver</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">Monthly contributions (x12)</td>
                  <td className="py-2 pr-4">$2,220</td>
                  <td className="py-2 pr-4">$1,380</td>
                  <td className="py-2 pr-4">$2,724</td>
                  <td className="py-2 pr-4">$6,000</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">IUA/Deductible (2 events)</td>
                  <td className="py-2 pr-4">$1,000</td>
                  <td className="py-2 pr-4">$600</td>
                  <td className="py-2 pr-4">$1,000</td>
                  <td className="py-2 pr-4">$3,500</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">Prescriptions (12 months)</td>
                  <td className="py-2 pr-4">$0 (shared)</td>
                  <td className="py-2 pr-4">$1,800</td>
                  <td className="py-2 pr-4">$1,800</td>
                  <td className="py-2 pr-4">$360 (copays)</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">Co-share on $15K eligible</td>
                  <td className="py-2 pr-4">$1,400</td>
                  <td className="py-2 pr-4">$2,880</td>
                  <td className="py-2 pr-4">$2,800</td>
                  <td className="py-2 pr-4">$0 (hit OOP max)</td>
                </tr>
                <tr className="border-b-2 border-[var(--color-border)] font-bold">
                  <td className="py-2 pr-4">Total Annual Cost</td>
                  <td className="py-2 pr-4">$4,620</td>
                  <td className="py-2 pr-4">$6,660</td>
                  <td className="py-2 pr-4">$8,324</td>
                  <td className="py-2 pr-4">$9,200</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed mb-4">
            Even with hidden costs factored in, Zion HealthShare saves roughly $4,580/year
            compared to ACA insurance in this moderate-use scenario. CHM saves $2,540/year but
            does not cover prescriptions. Medi-Share&apos;s savings shrink to $876/year once
            hidden costs are included &mdash; far less than the monthly contribution alone
            would suggest.
          </p>
          <p className="leading-relaxed mb-4">
            The lesson: advertised monthly costs can be misleading. Always calculate total annual
            cost including IUA, co-shares, exclusions, and prescription costs before choosing a
            plan. Use our{' '}
            <Link href="/compare" className="text-[var(--color-primary)] hover:underline">
              side-by-side comparison tool
            </Link>{' '}
            to see these numbers for your specific situation.
          </p>
        </section>

        {/* Section 7 */}
        <section id="bottom-line" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            How to Minimize Hidden Costs
          </h2>
          <div className="card p-6">
            <ol className="list-decimal list-inside space-y-3">
              <li className="leading-relaxed">
                <strong>Choose a plan with prescription and mental health coverage</strong> if
                you need either.{' '}
                <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">
                  Zion HealthShare
                </Link>{' '}
                and{' '}
                <Link href="/reviews/sedera" className="text-[var(--color-primary)] hover:underline">
                  Sedera
                </Link>{' '}
                include both.
              </li>
              <li className="leading-relaxed">
                <strong>Pick the lowest IUA you can afford.</strong> Paying $50&ndash;$80 more
                per month for a $500 IUA instead of $2,000 protects you from per-incident
                costs. The math favors lower IUAs if you expect 2+ medical events per year.
              </li>
              <li className="leading-relaxed">
                <strong>Avoid plans with long pre-existing waiting periods</strong> if you have
                any ongoing conditions. Zion HealthShare has no waiting period.
              </li>
              <li className="leading-relaxed">
                <strong>Build an emergency fund</strong> of $5,000&ndash;$10,000 to cover the
                gap between when you pay a bill and when sharing reimbursement arrives.
              </li>
              <li className="leading-relaxed">
                <strong>Read the sharing guidelines document</strong> before joining. Every plan
                publishes exactly what is and is not shareable. Ask the plan directly about any
                procedure or condition you expect to need.
              </li>
            </ol>
            <p className="leading-relaxed mt-4">
              Not sure which plan minimizes your hidden costs?{' '}
              <Link href="/quiz" className="text-[var(--color-primary)] hover:underline font-semibold">
                Take our free quiz
              </Link>{' '}
              to get a personalized recommendation based on your health needs and budget.
            </p>
          </div>
        </section>

        {/* Related Posts */}
        <section className="border-t border-[var(--color-border)] pt-8 mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/blog/health-sharing-vs-insurance-2026"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">Health Sharing vs Insurance 2026</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read article</span>
            </Link>
            <Link
              href="/blog/5-questions-before-joining"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">5 Questions Before Joining Health Sharing</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read article</span>
            </Link>
            <Link
              href="/answers/what-is-iua"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">What Is an IUA (Initial Unshareable Amount)?</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read answer</span>
            </Link>
            <Link
              href="/answers/pre-existing-conditions"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">Pre-Existing Conditions and Health Sharing</span>
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
