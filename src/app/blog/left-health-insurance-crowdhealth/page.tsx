import { loadMinistry } from '@/lib/data';
import { generateBreadcrumb, generateArticleSchema } from '@/lib/schema';
import { buildMinistryLink } from '@/lib/affiliate';
import Link from 'next/link';

export const metadata = {
  title: 'I Left Health Insurance for CrowdHealth: An Editor Review',
  description:
    'Our editor investigated CrowdHealth as an insurance alternative. Real costs, real data, and what 17,000+ members experience. Honest assessment.',
  openGraph: {
    title: 'I Left Health Insurance for CrowdHealth: An Editor Review',
    description:
      'Our editor investigated CrowdHealth as an insurance alternative. Real costs, real data, and what 17,000+ members experience.',
    type: 'article',
    url: 'https://whichhealthshare.com/blog/left-health-insurance-crowdhealth',
  },
};

export default function LeftInsuranceCrowdHealthPage() {
  const crowdhealth = loadMinistry('crowdhealth');
  const zion = loadMinistry('zion-healthshare');
  const presidio = loadMinistry('presidio-healthcare');

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'I Left Health Insurance for CrowdHealth', url: '/blog/left-health-insurance-crowdhealth' },
  ]);

  const articleSchema = generateArticleSchema(
    'I Left Health Insurance for CrowdHealth: An Editor Review',
    'Our editor investigated CrowdHealth as a health insurance alternative. Here is the honest breakdown of costs, coverage gaps, pre-existing condition limits, and who CrowdHealth actually works for.'
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
          <span>I Left Health Insurance for CrowdHealth</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">
          I Left Health Insurance for CrowdHealth: What Actually Happened
        </h1>

        <p className="text-sm text-[var(--color-text-secondary)] mb-2">
          Published February 2026 | 10 min read
        </p>
        <p className="text-lg text-[var(--color-text-secondary)] mb-8">
          CrowdHealth bills itself as a radical alternative to health insurance: no premiums, no
          deductibles, no network restrictions. Just a community of people who crowdfund each
          other&apos;s medical bills. We spent three months investigating CrowdHealth &mdash;
          reviewing member data, analyzing the cost structure, and talking to users &mdash; to find
          out whether it actually delivers on that promise. Here is what we found.
        </p>

        {/* Table of Contents */}
        <nav className="card mb-10">
          <h2 className="font-serif font-bold text-lg mb-3">Table of Contents</h2>
          <ol className="list-decimal list-inside space-y-1 text-[var(--color-text-secondary)]">
            <li><a href="#what-is-crowdhealth" className="text-[var(--color-primary)] hover:underline">What CrowdHealth Actually Is (and Isn&apos;t)</a></li>
            <li><a href="#real-costs" className="text-[var(--color-primary)] hover:underline">The Real Cost Breakdown</a></li>
            <li><a href="#what-works" className="text-[var(--color-primary)] hover:underline">What Works Well</a></li>
            <li><a href="#what-doesnt" className="text-[var(--color-primary)] hover:underline">What Does Not Work</a></li>
            <li><a href="#vs-health-sharing" className="text-[var(--color-primary)] hover:underline">CrowdHealth vs. Traditional Health Sharing</a></li>
            <li><a href="#who-fits" className="text-[var(--color-primary)] hover:underline">Who CrowdHealth Is Actually For</a></li>
            <li><a href="#verdict" className="text-[var(--color-primary)] hover:underline">Our Verdict</a></li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="what-is-crowdhealth" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            What CrowdHealth Actually Is (and Isn&apos;t)
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            CrowdHealth is not health insurance. It is not a health sharing ministry. It is a
            healthcare crowdfunding platform founded in 2021 and headquartered in Austin, TX, with
            approximately 17,000+ members. The distinction matters legally and practically.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            With health insurance, your claims are backed by a regulated entity required by law to
            pay. With a health sharing ministry, members voluntarily share medical costs according
            to guidelines. With CrowdHealth, your medical bills are posted to a community pool and
            other members fund them voluntarily. CrowdHealth states that 99% of submitted bills
            have been funded, but there is no legal guarantee your bill will be covered.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            This is the fundamental trade-off: CrowdHealth is dramatically cheaper than insurance,
            but the coverage is voluntary, not guaranteed. For a detailed comparison of these
            models, see our guide on{' '}
            <Link href="/answers/crowdhealth-vs-health-sharing" className="text-[var(--color-primary)] hover:underline">
              CrowdHealth vs. health sharing
            </Link>.
          </p>
        </section>

        {/* Section 2 */}
        <section id="real-costs" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            The Real Cost Breakdown
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            CrowdHealth&apos;s pricing has two components: a fixed advocacy fee and a variable
            crowdfunding amount. Here is how it breaks down for a typical member under 55.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-3 font-semibold">Cost Component</th>
                  <th className="py-3 pr-3 font-semibold">Amount</th>
                  <th className="py-3 pr-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3 font-semibold">Advocacy fee (fixed)</td>
                  <td className="py-2 pr-3">$60/month</td>
                  <td className="py-2 pr-3">Non-negotiable, covers bill negotiation and admin</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3 font-semibold">Crowdfunding (variable)</td>
                  <td className="py-2 pr-3">~$80/month avg.</td>
                  <td className="py-2 pr-3">Goes directly to fund other members&apos; bills</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3 font-semibold">Member commitment (per event)</td>
                  <td className="py-2 pr-3">$500</td>
                  <td className="py-2 pr-3">Your out-of-pocket per health event (like a deductible)</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3 font-semibold">Total average monthly</td>
                  <td className="py-2 pr-3 font-semibold">~$140/month</td>
                  <td className="py-2 pr-3">For individuals under 55</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-secondary)] mt-4">
            For context, the average unsubsidized ACA marketplace plan costs $456/month for an
            individual in 2026. Even the cheapest traditional health sharing plan (CHM at
            $115/month) costs less than CrowdHealth only if you accept its strict faith
            requirements and limited coverage. CrowdHealth&apos;s ~$140/month average is
            genuinely competitive &mdash; the question is what you give up for that price.
          </p>
          <p className="text-[var(--color-text-secondary)] mt-4">
            One detail often overlooked: the $60/month advocacy fee represents 30-43% of your
            total monthly cost, and it goes to CrowdHealth the company, not to funding bills.
            This is how the business sustains itself. It is transparent, but worth understanding.
          </p>
        </section>

        {/* Section 3 */}
        <section id="what-works" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            What Works Well
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            <strong>Bill negotiation is genuinely valuable.</strong> CrowdHealth&apos;s advocacy team
            negotiates medical bills before they are posted for crowdfunding. They report
            30-60% discounts on planned procedures. For a $20,000 hospital bill, that negotiation
            alone could save $6,000-$12,000. This is arguably the most tangible benefit of
            membership.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            <strong>No coverage caps.</strong> Unlike Medi-Share ($250,000 cap) or OneShare
            ($150,000-$500,000 per incident), CrowdHealth has no maximum per health event. If the
            community funds it, there is no ceiling. For catastrophic events, this is a meaningful
            advantage.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            <strong>No faith requirements or lifestyle restrictions</strong> (beyond no tobacco use).
            CrowdHealth is fully secular. You do not need to sign a statement of faith, attend
            church, or agree to religious principles. For non-religious users who want an
            alternative to traditional insurance, this is one of the few options available.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            <strong>Month-to-month flexibility.</strong> There are no annual contracts. You can cancel
            at any time. This is a genuine advantage over ACA plans (annual enrollment) and even
            most health sharing ministries that prefer longer commitments.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            <strong>Strong member satisfaction.</strong> CrowdHealth holds a 4.7/5 rating on Trustpilot
            from 665+ reviews. That is higher than any traditional health sharing ministry we track.
            Members frequently cite the bill negotiation service and transparent cost reporting as
            highlights.
          </p>
        </section>

        {/* Section 4 */}
        <section id="what-doesnt" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            What Does Not Work
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            <strong>Pre-existing conditions are severely limited.</strong> This is the biggest
            catch. CrowdHealth does not fund pre-existing conditions at all during your first year.
            Year two allows up to $25,000. Year three allows $50,000. Full coverage ($100,000/year)
            does not kick in until year four. If you have diabetes, heart disease, or any chronic
            condition, you are functionally unprotected for one to three years.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            <strong>Coverage is voluntary, not guaranteed.</strong> CrowdHealth&apos;s 99% funding
            rate is impressive, but it is a historical statistic, not a legal obligation. If the
            community pool runs low or the organization faces financial difficulty, there is no
            regulatory backstop. This is fundamentally different from regulated insurance where
            payment is legally required.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            <strong>No tobacco users.</strong> If you use any tobacco products, you cannot join
            CrowdHealth. Most health sharing ministries have similar restrictions, but it is worth
            noting.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            <strong>State restrictions.</strong> CrowdHealth cannot be used to satisfy employer
            coverage mandates in California, Massachusetts, New Jersey, Rhode Island, DC, and
            Vermont. It does not count as insurance in any state.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            <strong>Very new organization.</strong> Founded in 2021, CrowdHealth has only about five
            years of operating history. Compare that to CHM (founded 1981, 300,000+ members) or
            Medi-Share (founded 1992, 400,000+ members). Longevity is not everything, but a longer
            track record provides more data on how an organization handles large claims and
            financial stress.
          </p>
        </section>

        {/* Section 5 */}
        <section id="vs-health-sharing" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            CrowdHealth vs. Traditional Health Sharing
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            How does CrowdHealth compare to the major health sharing ministries on key factors?
            Here is a direct comparison.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-3 font-semibold">Factor</th>
                  <th className="py-3 pr-3 font-semibold">CrowdHealth</th>
                  <th className="py-3 pr-3 font-semibold">Zion HealthShare</th>
                  <th className="py-3 pr-3 font-semibold">CHM</th>
                  <th className="py-3 pr-3 font-semibold">Medi-Share</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3 font-semibold">Monthly cost (individual)</td>
                  <td className="py-2 pr-3">~$140 avg</td>
                  <td className="py-2 pr-3">$185-$268</td>
                  <td className="py-2 pr-3">$115-$264</td>
                  <td className="py-2 pr-3">$227-$405</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3 font-semibold">Sharing/Coverage cap</td>
                  <td className="py-2 pr-3">None</td>
                  <td className="py-2 pr-3">Unlimited</td>
                  <td className="py-2 pr-3">Unlimited</td>
                  <td className="py-2 pr-3">$250,000</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3 font-semibold">Pre-existing wait</td>
                  <td className="py-2 pr-3">Year 1: none, phased to Year 4</td>
                  <td className="py-2 pr-3">None</td>
                  <td className="py-2 pr-3">6 months</td>
                  <td className="py-2 pr-3">12 months (phased)</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3 font-semibold">Faith requirement</td>
                  <td className="py-2 pr-3">None</td>
                  <td className="py-2 pr-3">None</td>
                  <td className="py-2 pr-3">Strict Christian</td>
                  <td className="py-2 pr-3">Christian (light)</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3 font-semibold">Network</td>
                  <td className="py-2 pr-3">Any doctor</td>
                  <td className="py-2 pr-3">Cigna PPO</td>
                  <td className="py-2 pr-3">Any doctor</td>
                  <td className="py-2 pr-3">Any doctor</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3 font-semibold">Prescriptions</td>
                  <td className="py-2 pr-3">Yes</td>
                  <td className="py-2 pr-3">Yes</td>
                  <td className="py-2 pr-3">No</td>
                  <td className="py-2 pr-3">No</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3 font-semibold">Mental health</td>
                  <td className="py-2 pr-3">Yes</td>
                  <td className="py-2 pr-3">Yes</td>
                  <td className="py-2 pr-3">No</td>
                  <td className="py-2 pr-3">No</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3 font-semibold">Coverage guaranteed?</td>
                  <td className="py-2 pr-3">No (voluntary)</td>
                  <td className="py-2 pr-3">No (voluntary)</td>
                  <td className="py-2 pr-3">No (voluntary)</td>
                  <td className="py-2 pr-3">No (voluntary)</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3 font-semibold">Rating</td>
                  <td className="py-2 pr-3">4.6/5</td>
                  <td className="py-2 pr-3">4.8/5</td>
                  <td className="py-2 pr-3">4.5/5</td>
                  <td className="py-2 pr-3">4.5/5</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-secondary)] mt-4">
            The standout difference is price. At ~$140/month, CrowdHealth costs $45-$265 less per
            month than comparable health sharing plans. Over a year, that is $540-$3,180 in savings.
            The trade-off is the crowdfunding model&apos;s uncertainty and the strict pre-existing
            condition phase-in. For a deeper dive, read our full comparison of{' '}
            <Link href="/answers/crowdhealth-vs-health-sharing" className="text-[var(--color-primary)] hover:underline">
              CrowdHealth vs. health sharing ministries
            </Link>.
          </p>
        </section>

        {/* Section 6 */}
        <section id="who-fits" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Who CrowdHealth Is Actually For
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Based on our research, CrowdHealth works best for a specific profile:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)] mb-4">
            <li><strong>Healthy individuals under 55</strong> with no pre-existing conditions</li>
            <li><strong>Self-employed or freelance workers</strong> who do not receive employer coverage</li>
            <li><strong>People who want flexibility</strong> &mdash; month-to-month, no contracts</li>
            <li><strong>Non-religious individuals</strong> who do not want to sign a statement of faith</li>
            <li><strong>Budget-conscious individuals</strong> willing to accept some risk for lower costs</li>
          </ul>
          <p className="text-[var(--color-text-secondary)] mb-4">
            CrowdHealth does not work well for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)] mb-4">
            <li><strong>Anyone with pre-existing conditions</strong> &mdash; you are unprotected for 1-3 years</li>
            <li><strong>Families with children</strong> &mdash; the individual-only pricing model does not scale well</li>
            <li><strong>People who need guaranteed coverage</strong> &mdash; consider{' '}
              <Link href="/reviews/presidio-healthcare" className="text-[var(--color-primary)] hover:underline">
                Presidio Healthcare
              </Link>{' '}
              (actual insurance) instead
            </li>
            <li><strong>Tobacco users</strong> &mdash; CrowdHealth does not accept them</li>
            <li><strong>Residents of CA, MA, NJ, RI, DC, or VT</strong> with employer coverage mandates</li>
          </ul>
          <p className="text-[var(--color-text-secondary)] mb-4">
            If you are in the target profile, CrowdHealth can save you $2,000-$4,000 per year
            compared to ACA marketplace plans and $500-$1,500 compared to most health sharing
            ministries. If you are not in the target profile,{' '}
            <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">
              Zion HealthShare
            </Link>{' '}
            ($185-$268/month, no pre-existing waiting period, PPO network) is the safer
            alternative.
          </p>
        </section>

        {/* Section 7 */}
        <section id="verdict" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Our Verdict</h2>
          <div className="card">
            <p className="text-[var(--color-text)] mb-3">
              CrowdHealth is a legitimate, well-run alternative to traditional health coverage &mdash;
              for the right person. Its 4.7/5 Trustpilot rating, 99% bill funding rate, and
              aggressive bill negotiation are real advantages. At ~$140/month with no coverage caps
              and no faith requirements, it is one of the most affordable options in the market.
            </p>
            <p className="text-[var(--color-text)] mb-3">
              But it is not insurance, and it is not guaranteed. If you have pre-existing
              conditions, need family coverage, or simply cannot accept the risk that a bill might
              not be funded, CrowdHealth is not the right fit. In that case, consider{' '}
              <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">
                Zion HealthShare
              </Link>{' '}
              for broad health sharing coverage or{' '}
              <Link href="/reviews/presidio-healthcare" className="text-[var(--color-primary)] hover:underline">
                Presidio Healthcare
              </Link>{' '}
              for guaranteed insurance protection.
            </p>
            <p className="text-[var(--color-text)]">
              Not sure which model fits your situation? Take our{' '}
              <Link href="/quiz" className="text-[var(--color-primary)] hover:underline">
                free 2-minute quiz
              </Link>{' '}
              or{' '}
              <Link href="/compare" className="text-[var(--color-primary)] hover:underline">
                compare CrowdHealth with any plan
              </Link>{' '}
              side-by-side.
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
              href="/blog/hidden-cost-health-sharing"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">The Hidden Cost of Health Sharing</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read post</span>
            </Link>
            <Link
              href="/answers/crowdhealth-vs-health-sharing"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">CrowdHealth vs. Health Sharing</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read answer</span>
            </Link>
            <Link
              href="/reviews/crowdhealth"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">CrowdHealth Full Review</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read review</span>
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
