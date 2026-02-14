import { loadAllMinistries } from '@/lib/data';
import { generateBreadcrumb, generateArticleSchema } from '@/lib/schema';
import { buildMinistryLink } from '@/lib/affiliate';
import Link from 'next/link';

export const metadata = {
  title: 'The Hidden Cost of Health Sharing No One Talks About',
  description:
    'Health sharing looks cheap on paper. But IUAs, co-shares, waiting periods, and coverage gaps can cost thousands. Here is the real math.',
  openGraph: {
    title: 'The Hidden Cost of Health Sharing No One Talks About',
    description:
      'Health sharing looks cheap on paper. But IUAs, co-shares, waiting periods, and coverage gaps can cost thousands. Here is the real math.',
    type: 'article',
    url: 'https://whichhealthshare.com/blog/hidden-cost-health-sharing',
  },
};

export default function HiddenCostPage() {
  const ministries = loadAllMinistries();

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'The Hidden Cost of Health Sharing', url: '/blog/hidden-cost-health-sharing' },
  ]);

  const articleSchema = generateArticleSchema(
    'The Hidden Cost of Health Sharing No One Talks About',
    'A detailed breakdown of the costs health sharing plans do not advertise: IUAs, co-shares, pre-existing waiting periods, uncovered services, and worst-case scenarios. Real numbers from real plans.'
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
          <span>The Hidden Cost of Health Sharing</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">
          The Hidden Cost of Health Sharing No One Talks About
        </h1>

        <p className="text-sm text-[var(--color-text-secondary)] mb-2">
          Published February 2026 | 11 min read
        </p>
        <p className="text-lg text-[var(--color-text-secondary)] mb-8">
          Health sharing plans advertise monthly costs of $115 to $268. Those numbers are real.
          But they are not the whole story. Between IUAs (initial unshareable amounts), co-shares,
          uncovered services, pre-existing condition waiting periods, and coverage caps, the true
          annual cost of health sharing can be thousands more than the monthly rate suggests.
          Here is an honest accounting of every hidden cost.
        </p>

        {/* Table of Contents */}
        <nav className="card mb-10">
          <h2 className="font-serif font-bold text-lg mb-3">Table of Contents</h2>
          <ol className="list-decimal list-inside space-y-1 text-[var(--color-text-secondary)]">
            <li><a href="#iua" className="text-[var(--color-primary)] hover:underline">The IUA: Your Real Deductible</a></li>
            <li><a href="#co-share" className="text-[var(--color-primary)] hover:underline">Co-Shares Add Up Fast</a></li>
            <li><a href="#not-covered" className="text-[var(--color-primary)] hover:underline">Services That Are Not Covered</a></li>
            <li><a href="#pre-existing-cost" className="text-[var(--color-primary)] hover:underline">The Pre-Existing Condition Tax</a></li>
            <li><a href="#caps" className="text-[var(--color-primary)] hover:underline">Coverage Caps and Catastrophic Risk</a></li>
            <li><a href="#real-scenarios" className="text-[var(--color-primary)] hover:underline">Three Real Cost Scenarios</a></li>
            <li><a href="#how-to-minimize" className="text-[var(--color-primary)] hover:underline">How to Minimize Hidden Costs</a></li>
          </ol>
        </nav>

        {/* Section 1: IUA */}
        <section id="iua" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            The IUA: Your Real Deductible
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Every health sharing plan has an Initial Unshareable Amount (IUA), sometimes called
            MRA, MCP, PRA, APA, or ISA depending on the ministry. This works like a deductible:
            you pay this amount out of pocket before the community shares any of your medical
            costs. And the range is enormous.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-3 font-semibold">Plan</th>
                  <th className="py-3 pr-3 font-semibold">IUA Range</th>
                  <th className="py-3 pr-3 font-semibold">Monthly Cost</th>
                  <th className="py-3 pr-3 font-semibold">True Annual Floor*</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">
                    <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">Zion HealthShare</Link>
                  </td>
                  <td className="py-2 pr-3">$500 - $2,000</td>
                  <td className="py-2 pr-3">$185-$268/mo</td>
                  <td className="py-2 pr-3">$2,720 - $5,216</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">
                    <Link href="/reviews/chm" className="text-[var(--color-primary)] hover:underline">CHM</Link>
                  </td>
                  <td className="py-2 pr-3">$300 - $1,000</td>
                  <td className="py-2 pr-3">$115-$264/mo</td>
                  <td className="py-2 pr-3">$1,680 - $4,168</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">
                    <Link href="/reviews/crowdhealth" className="text-[var(--color-primary)] hover:underline">CrowdHealth</Link>
                  </td>
                  <td className="py-2 pr-3">$500 (per event)</td>
                  <td className="py-2 pr-3">~$140/mo</td>
                  <td className="py-2 pr-3">$2,180+</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">
                    <Link href="/reviews/medi-share" className="text-[var(--color-primary)] hover:underline">Medi-Share</Link>
                  </td>
                  <td className="py-2 pr-3">$500 - $2,000</td>
                  <td className="py-2 pr-3">$227-$405/mo</td>
                  <td className="py-2 pr-3">$3,224 - $6,860</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">
                    <Link href="/reviews/oneshare-health" className="text-[var(--color-primary)] hover:underline">OneShare Health</Link>
                  </td>
                  <td className="py-2 pr-3">$5,000 - $10,000</td>
                  <td className="py-2 pr-3">$144-$415/mo</td>
                  <td className="py-2 pr-3">$6,728 - $14,980</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">
                    <Link href="/reviews/impact-health-sharing" className="text-[var(--color-primary)] hover:underline">Impact Health Sharing</Link>
                  </td>
                  <td className="py-2 pr-3">$2,500 - $10,000</td>
                  <td className="py-2 pr-3">$73-$400/mo</td>
                  <td className="py-2 pr-3">$3,376 - $14,800</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] mt-2">
            *True Annual Floor = (Monthly cost x 12) + lowest IUA. Actual costs will be higher
            with co-shares and uncovered services.
          </p>
          <p className="text-[var(--color-text-secondary)] mt-4">
            The lowest-advertised monthly cost often comes with the highest IUA. OneShare&apos;s
            Catastrophic 365 plan starts at $46/month but has a $5,000-$10,000 ISA. Impact Health
            Sharing starts at $73/month but has a $2,500-$10,000 PRA. Always look at the full
            annual cost picture. For more detail, see our guide on{' '}
            <Link href="/answers/what-is-iua" className="text-[var(--color-primary)] hover:underline">
              what an IUA is and how it works
            </Link>.
          </p>
        </section>

        {/* Section 2: Co-shares */}
        <section id="co-share" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Co-Shares Add Up Fast
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            After you meet your IUA, most plans require you to pay a percentage of the remaining
            bill. This is the co-share (similar to co-insurance in traditional insurance). Co-shares
            range from 0% to 30% depending on the plan.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-3 font-semibold">Plan</th>
                  <th className="py-3 pr-3 font-semibold">Co-Share</th>
                  <th className="py-3 pr-3 font-semibold">On a $50,000 Bill (after IUA)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">Zion HealthShare</td>
                  <td className="py-2 pr-3">10-20%</td>
                  <td className="py-2 pr-3">$5,000-$10,000 out of pocket</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">CHM</td>
                  <td className="py-2 pr-3">20%</td>
                  <td className="py-2 pr-3">$10,000 out of pocket</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">Medi-Share</td>
                  <td className="py-2 pr-3">20%</td>
                  <td className="py-2 pr-3">$10,000 out of pocket</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">Sedera</td>
                  <td className="py-2 pr-3">20%</td>
                  <td className="py-2 pr-3">$10,000 out of pocket</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">Solidarity HealthShare</td>
                  <td className="py-2 pr-3">30% up to $125K</td>
                  <td className="py-2 pr-3">$15,000 out of pocket</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">Liberty (Unite plan)</td>
                  <td className="py-2 pr-3">0%</td>
                  <td className="py-2 pr-3">$0 out of pocket</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-secondary)] mt-4">
            On a $50,000 hospital bill, a 20% co-share means $10,000 out of pocket on top of your
            IUA and monthly contributions. With traditional insurance, out-of-pocket maximums cap
            your annual exposure (typically $8,700 in 2026). Most health sharing plans do not have
            an equivalent out-of-pocket maximum, so co-shares on large bills can be substantial.
          </p>
          <p className="text-[var(--color-text-secondary)] mt-4">
            Notable exceptions: Liberty HealthShare&apos;s Unite plan has 0% co-share. Impact
            Health Sharing caps co-share exposure at $5,000 per household per year. United Refuah
            caps co-share at $1,000-$4,000 depending on household size. These caps provide more
            predictable worst-case costs.
          </p>
        </section>

        {/* Section 3: Not covered */}
        <section id="not-covered" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Services That Are Not Covered
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Every health sharing plan has exclusions. Some are expected (cosmetic surgery,
            elective procedures). Others are significant and easy to overlook.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            <strong>Prescriptions.</strong> CHM, Medi-Share, Samaritan Ministries, Liberty
            HealthShare, OneShare, Altrua, and netWell do not cover prescription drugs. If
            you take a $200/month medication, that is $2,400/year out of pocket on top of your
            sharing costs. Only Zion HealthShare, Sedera, CrowdHealth, and HSA Secure include
            prescription sharing. See our{' '}
            <Link href="/answers/prescription-coverage" className="text-[var(--color-primary)] hover:underline">
              prescription coverage guide
            </Link>.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            <strong>Mental health.</strong> CHM, Medi-Share, Samaritan, netWell (Advantage plan),
            and JHS Community do not share mental health costs. Therapy at $150/session, weekly,
            is $7,800/year. Only Zion, Sedera, CrowdHealth, Solidarity (ONE plan), Liberty
            (premium plans), Impact, and Altrua include some level of mental health sharing.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            <strong>Dental and vision.</strong> Almost no health sharing plan covers dental or vision.
            The only exceptions are{' '}
            <Link href="/reviews/united-refuah" className="text-[var(--color-primary)] hover:underline">
              United Refuah
            </Link>{' '}
            ($300/year dental, $50/year vision),{' '}
            <Link href="/reviews/jhs-community" className="text-[var(--color-primary)] hover:underline">
              JHS Community
            </Link>{' '}
            (Diverse and Dynamic plans), and{' '}
            <Link href="/reviews/presidio-healthcare" className="text-[var(--color-primary)] hover:underline">
              Presidio Healthcare
            </Link>{' '}
            (insurance). Budget $20-$50/month for standalone dental and vision if needed.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            <strong>Maternity.</strong> Not all plans cover maternity, and those that do often
            have restrictions. OneShare only covers maternity on its most expensive Classic Crown
            plan. JHS Community caps maternity at $8,000-$12,000 with a 9-month waiting period.
            Altrua requires the Diamond or Emerald plan with a $5,000 additional MRA. Check
            our{' '}
            <Link href="/answers/maternity-coverage" className="text-[var(--color-primary)] hover:underline">
              maternity coverage guide
            </Link>{' '}
            before assuming your plan covers pregnancy.
          </p>
        </section>

        {/* Section 4: Pre-existing */}
        <section id="pre-existing-cost" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            The Pre-Existing Condition Tax
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            If you have any health condition that was diagnosed, treated, or medicated in the past
            1-10 years (depending on the plan), you may face a waiting period during which those
            conditions are not shared at all. This is effectively a tax on your existing health.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Here is what this looks like in practice. Suppose you have Type 2 diabetes that costs
            $300/month to manage (medication, testing, doctor visits).
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-3 font-semibold">Plan</th>
                  <th className="py-3 pr-3 font-semibold">Pre-Existing Wait</th>
                  <th className="py-3 pr-3 font-semibold">Unshared Diabetes Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)] bg-[var(--color-primary-lighter)]">
                  <td className="py-2 pr-3">Zion HealthShare</td>
                  <td className="py-2 pr-3 font-semibold">None</td>
                  <td className="py-2 pr-3">$0 (shared from month one)</td>
                </tr>
                <tr className="border-b border-[var(--color-border)] bg-[var(--color-primary-lighter)]">
                  <td className="py-2 pr-3">Presidio Healthcare</td>
                  <td className="py-2 pr-3 font-semibold">None</td>
                  <td className="py-2 pr-3">$0 (covered from day one)</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">CHM</td>
                  <td className="py-2 pr-3">6 months</td>
                  <td className="py-2 pr-3">$1,800 unshared</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">Medi-Share</td>
                  <td className="py-2 pr-3">12 months (phased)</td>
                  <td className="py-2 pr-3">$2,700+ unshared (75% not shared year 1)</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">netWell</td>
                  <td className="py-2 pr-3">24 months</td>
                  <td className="py-2 pr-3">$7,200 unshared</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">Impact Health Sharing</td>
                  <td className="py-2 pr-3">36 months</td>
                  <td className="py-2 pr-3">$10,800 unshared</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">Altrua HealthShare</td>
                  <td className="py-2 pr-3">24-60 months</td>
                  <td className="py-2 pr-3">$7,200-$18,000 unshared</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-secondary)] mt-4">
            A plan that costs $73/month but does not share your pre-existing condition for 36
            months can easily cost more than a plan at $185/month that shares it from day one.
            Always factor in the full cost of any waiting period when comparing plans. Our{' '}
            <Link href="/answers/pre-existing-conditions" className="text-[var(--color-primary)] hover:underline">
              pre-existing conditions guide
            </Link>{' '}
            breaks this down in detail.
          </p>
        </section>

        {/* Section 5: Caps */}
        <section id="caps" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Coverage Caps and Catastrophic Risk
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            One of the biggest hidden risks in health sharing is the coverage cap. Several plans
            limit how much the community will share per incident, per year, or per lifetime. If
            you face a catastrophic medical event &mdash; cancer treatment, major surgery, extended
            hospitalization &mdash; these caps determine whether you face $0 or $100,000+ in
            uncovered bills.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-3 font-semibold">Plan</th>
                  <th className="py-3 pr-3 font-semibold">Sharing Cap</th>
                  <th className="py-3 pr-3 font-semibold">Risk Level</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">Zion HealthShare</td>
                  <td className="py-2 pr-3">Unlimited</td>
                  <td className="py-2 pr-3 text-green-700">Low</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">CHM</td>
                  <td className="py-2 pr-3">Unlimited</td>
                  <td className="py-2 pr-3 text-green-700">Low</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">CrowdHealth</td>
                  <td className="py-2 pr-3">None (no max per event)</td>
                  <td className="py-2 pr-3 text-green-700">Low (but voluntary)</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">Medi-Share</td>
                  <td className="py-2 pr-3 font-semibold">$250,000</td>
                  <td className="py-2 pr-3 text-orange-600">Medium</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">OneShare (Classic Basic)</td>
                  <td className="py-2 pr-3 font-semibold">$150,000/incident, $300,000 lifetime</td>
                  <td className="py-2 pr-3 text-red-700">High</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">netWell (Advantage)</td>
                  <td className="py-2 pr-3 font-semibold">$250,000/year, $500,000 lifetime</td>
                  <td className="py-2 pr-3 text-red-700">High</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3">Impact Health Sharing</td>
                  <td className="py-2 pr-3 font-semibold">$500,000/year</td>
                  <td className="py-2 pr-3 text-orange-600">Medium</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-secondary)] mt-4">
            Average cancer treatment costs $150,000-$300,000. A major surgery with complications
            can exceed $500,000. If your plan caps at $150,000 or $250,000, you could face
            six-figure bills that the community will not share. For maximum protection, choose
            plans with unlimited sharing (Zion, CHM, Sedera, Samaritan) or no per-event caps
            (CrowdHealth).
          </p>
        </section>

        {/* Section 6: Real Scenarios */}
        <section id="real-scenarios" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Three Real Cost Scenarios
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            To illustrate the true cost gap, here are three scenarios comparing Zion HealthShare
            ($185/month, $1,000 IUA, 10% co-share) with CHM ($115/month, $500 IUA, 20% co-share).
          </p>

          <div className="card mb-4">
            <h3 className="font-semibold mb-2">Scenario 1: Healthy Year (No Claims)</h3>
            <p className="text-[var(--color-text-secondary)]">
              <strong>Zion:</strong> $185 x 12 = $2,220/year<br />
              <strong>CHM:</strong> $115 x 12 = $1,380/year<br />
              <strong>Difference:</strong> CHM saves $840/year. But CHM does not cover prescriptions,
              telehealth, or mental health. If you use any of these, the gap narrows or reverses.
            </p>
          </div>

          <div className="card mb-4">
            <h3 className="font-semibold mb-2">Scenario 2: ER Visit + Surgery ($25,000 bill)</h3>
            <p className="text-[var(--color-text-secondary)]">
              <strong>Zion:</strong> $2,220 (annual) + $1,000 (IUA) + $2,400 (10% of $24,000) =
              $5,620<br />
              <strong>CHM:</strong> $1,380 (annual) + $500 (IUA) + $4,900 (20% of $24,500) =
              $6,780<br />
              <strong>Difference:</strong> Zion saves $1,160. The lower co-share percentage
              overcomes the higher monthly cost when a significant claim occurs.
            </p>
          </div>

          <div className="card mb-4">
            <h3 className="font-semibold mb-2">Scenario 3: Cancer Treatment ($200,000 bill)</h3>
            <p className="text-[var(--color-text-secondary)]">
              <strong>Zion:</strong> $2,220 (annual) + $1,000 (IUA) + $19,900 (10% of $199,000) =
              $23,120<br />
              <strong>CHM:</strong> $1,380 (annual) + $500 (IUA) + $39,900 (20% of $199,500) =
              $41,780<br />
              <strong>Medi-Share:</strong> Would cap at $250,000 and not share above. With a
              $200,000 bill: similar to CHM math. But at $400,000? You pay $150,000+ uncovered.<br />
              <strong>Difference:</strong> Zion saves $18,660 vs. CHM on a $200,000 bill. Plans with
              caps expose you to even greater risk on larger bills.
            </p>
          </div>
        </section>

        {/* Section 7: How to minimize */}
        <section id="how-to-minimize" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            How to Minimize Hidden Costs
          </h2>
          <div className="card">
            <p className="text-[var(--color-text)] mb-3">
              <strong>1. Calculate total annual cost, not just monthly.</strong> Multiply monthly
              by 12, add the IUA, estimate co-share costs, and factor in any uncovered services
              you regularly use (prescriptions, therapy, dental). Our{' '}
              <Link href="/compare" className="text-[var(--color-primary)] hover:underline">
                comparison tool
              </Link>{' '}
              helps with side-by-side math.
            </p>
            <p className="text-[var(--color-text)] mb-3">
              <strong>2. Choose unlimited sharing plans if possible.</strong> Zion HealthShare,
              CHM, Sedera, and Samaritan all offer unlimited sharing. The monthly premium
              difference is small compared to the catastrophic risk of a capped plan.
            </p>
            <p className="text-[var(--color-text)] mb-3">
              <strong>3. Factor in pre-existing condition costs.</strong> If you have a condition
              that costs $200-$500/month to manage, a 12-36 month waiting period adds $2,400-$18,000
              to your true cost. Zion HealthShare&apos;s zero waiting period may save thousands
              even at a higher monthly rate.
            </p>
            <p className="text-[var(--color-text)] mb-3">
              <strong>4. Pair with an HSA if eligible.</strong> HSA Secure and Zion HealthShare
              both support HSA contributions, providing tax savings that offset costs. Read our{' '}
              <Link href="/blog/health-sharing-hsa-tax-strategy" className="text-[var(--color-primary)] hover:underline">
                HSA tax strategy guide
              </Link>.
            </p>
            <p className="text-[var(--color-text)]">
              <strong>5. Consider guaranteed insurance for high risk.</strong> If you have
              significant pre-existing conditions or need predictable maximum costs,{' '}
              <Link href="/reviews/presidio-healthcare" className="text-[var(--color-primary)] hover:underline">
                Presidio Healthcare
              </Link>{' '}
              ($300-$600/month) provides regulated insurance with guaranteed coverage and no
              pre-existing condition exclusions. It costs more monthly but eliminates the
              hidden costs discussed in this article.
            </p>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/blog/compared-15-health-sharing-plans"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">We Compared 15 Health Sharing Plans</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read post</span>
            </Link>
            <Link
              href="/blog/health-sharing-hsa-tax-strategy"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">Health Sharing + HSA Tax Strategy</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read post</span>
            </Link>
            <Link
              href="/answers/what-is-iua"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">What Is an IUA?</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read answer</span>
            </Link>
            <Link
              href="/answers/cost"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">Health Sharing Cost Guide</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read answer</span>
            </Link>
            <Link href="/compare" className="card p-4 hover:shadow-lg transition">
              <span className="font-serif font-bold">Compare Plans Side-by-Side</span>
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
