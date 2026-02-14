import { loadAllMinistries } from '@/lib/data';
import { generateBreadcrumb, generateArticleSchema } from '@/lib/schema';
import Link from 'next/link';

export const metadata = {
  title: 'CrowdHealth vs Health Sharing Plans 2026 — WhichHealthShare',
  description:
    'CrowdHealth uses crowdfunding, not shared pools. Compare its $140/mo cost, no-cap model, and trade-offs against traditional health sharing ministries.',
  openGraph: {
    title: 'CrowdHealth vs Traditional Health Sharing: Which Model Is Better?',
    description:
      'CrowdHealth averages $140/mo with no caps. Traditional health sharing costs $115-$495/mo with pooled sharing. See the real differences.',
  },
};

export default function CrowdHealthVsHealthSharingPage() {
  const ministries = loadAllMinistries();

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'CrowdHealth vs Health Sharing', url: '/blog/crowdhealth-vs-health-sharing' },
  ]);

  const articleSchema = generateArticleSchema(
    'CrowdHealth vs Health Sharing Plans: Two Different Models Compared',
    'CrowdHealth is a healthcare crowdfunding platform that averages $140/month with no coverage caps. Traditional health sharing ministries use pooled contributions and typically cost $115-$405/month. This guide breaks down how each model works.'
  );

  const traditionalPlans = ministries
    .filter((m) => m.type === 'healthshare')
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="section-narrow pt-8">
        <nav className="text-sm text-[var(--color-text-secondary)] mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <span className="mx-2">/</span>
          <span>CrowdHealth vs Health Sharing</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">
          CrowdHealth vs Health Sharing Plans: Two Different Models Compared
        </h1>
        <div className="text-sm text-[var(--color-text-muted)] mb-2">
          February 11, 2026 &middot; 12 min read
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] mb-8">
          Last updated: February 2026 | All pricing and features verified from official sources
        </p>

        <p className="text-lg leading-relaxed mb-6">
          CrowdHealth and traditional health sharing ministries are both alternatives to
          insurance, but they work in fundamentally different ways. CrowdHealth is a healthcare
          crowdfunding platform where members voluntarily fund each other&apos;s medical bills.
          Health sharing ministries pool monthly contributions into a shared fund that is used
          to pay eligible expenses. The result: different costs, different risks, and different
          kinds of people each model serves best.
        </p>
        <p className="leading-relaxed mb-8">
          This guide explains the structural differences, compares real costs, and helps you
          decide which model makes sense for your situation.
        </p>

        {/* Table of Contents */}
        <nav className="card p-6 mb-10">
          <h2 className="font-serif font-bold text-lg mb-3">Table of Contents</h2>
          <ol className="list-decimal list-inside space-y-1 text-[var(--color-text-secondary)]">
            <li><a href="#how-they-work" className="hover:underline">How Each Model Works</a></li>
            <li><a href="#cost-comparison" className="hover:underline">Cost Comparison: CrowdHealth vs Health Sharing</a></li>
            <li><a href="#coverage" className="hover:underline">What Each Model Covers</a></li>
            <li><a href="#pre-existing" className="hover:underline">Pre-Existing Conditions</a></li>
            <li><a href="#risks" className="hover:underline">Risk Profile: Crowdfunding vs Pooled Sharing</a></li>
            <li><a href="#who-should-choose" className="hover:underline">Who Should Choose CrowdHealth vs Health Sharing</a></li>
            <li><a href="#bottom-line" className="hover:underline">The Bottom Line</a></li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="how-they-work" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            How Each Model Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="card p-6">
              <h3 className="font-bold text-lg mb-3">CrowdHealth: Crowdfunding Model</h3>
              <ol className="list-decimal list-inside space-y-2 text-[var(--color-text-secondary)]">
                <li>You pay a fixed $60/month advocacy fee</li>
                <li>You contribute a variable crowdfunding amount (~$80/month average)</li>
                <li>When you have a medical bill, you submit it to CrowdHealth</li>
                <li>CrowdHealth&apos;s advocacy team negotiates the bill (30&ndash;60% discounts)</li>
                <li>The bill is posted to the community for funding</li>
                <li>Members voluntarily fund the bill from their accounts</li>
                <li>You pay a $500 member commitment per health event</li>
              </ol>
              <p className="text-sm text-[var(--color-text-secondary)] mt-3">
                Key distinction: funding is voluntary. There is no pooled fund guaranteeing
                payment. 99% of approved bills have been funded.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-lg mb-3">Health Sharing: Pooled Contribution Model</h3>
              <ol className="list-decimal list-inside space-y-2 text-[var(--color-text-secondary)]">
                <li>You pay a fixed monthly contribution ($115&ndash;$495)</li>
                <li>Contributions go into a shared pool</li>
                <li>When you have an eligible medical expense, you submit it</li>
                <li>The ministry reviews it against sharing guidelines</li>
                <li>After your IUA (deductible), the pool pays your eligible expenses</li>
                <li>You pay a co-share of 10&ndash;20% on the remaining balance</li>
              </ol>
              <p className="text-sm text-[var(--color-text-secondary)] mt-3">
                Key distinction: sharing comes from a pooled fund with established guidelines.
                Not guaranteed like insurance, but more systematic than crowdfunding.
              </p>
            </div>
          </div>
          <p className="leading-relaxed mb-4">
            The structural difference matters. With health sharing, your monthly contribution
            goes into a communal pool managed by the ministry. With CrowdHealth, your money sits
            in your account until a community member&apos;s bill needs funding. CrowdHealth
            gives you more transparency into where your money goes but less certainty that your
            own bills will be funded (though the 99% funding rate is strong).
          </p>
        </section>

        {/* Section 2 */}
        <section id="cost-comparison" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Cost Comparison: CrowdHealth vs Health Sharing
          </h2>
          <p className="leading-relaxed mb-4">
            CrowdHealth is consistently one of the cheapest options for individuals. Here is how
            it stacks up against every major health sharing plan:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-4 font-semibold">Plan</th>
                  <th className="py-3 pr-4 font-semibold">Model</th>
                  <th className="py-3 pr-4 font-semibold">Individual/mo</th>
                  <th className="py-3 pr-4 font-semibold">IUA / Commitment</th>
                  <th className="py-3 pr-4 font-semibold">Coverage Cap</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)] bg-blue-50 dark:bg-blue-950/20">
                  <td className="py-2 pr-4">
                    <Link href="/reviews/crowdhealth" className="text-[var(--color-primary)] hover:underline font-semibold">
                      CrowdHealth
                    </Link>
                  </td>
                  <td className="py-2 pr-4">Crowdfunding</td>
                  <td className="py-2 pr-4">~$140 avg</td>
                  <td className="py-2 pr-4">$500 per event</td>
                  <td className="py-2 pr-4">No cap</td>
                </tr>
                {traditionalPlans.slice(0, 8).map((m) => (
                  <tr key={m.slug} className="border-b border-[var(--color-border)]">
                    <td className="py-2 pr-4">
                      <Link href={`/reviews/${m.slug}`} className="text-[var(--color-primary)] hover:underline">
                        {m.name}
                      </Link>
                    </td>
                    <td className="py-2 pr-4">Health sharing</td>
                    <td className="py-2 pr-4">
                      ${m.plans[0]?.monthlyRange?.individual?.min}&ndash;$
                      {m.plans[0]?.monthlyRange?.individual?.max}
                    </td>
                    <td className="py-2 pr-4">${m.plans[0]?.iua?.join(', $')}</td>
                    <td className="py-2 pr-4">{m.plans[0]?.coverageCap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed mb-4">
            CrowdHealth&apos;s average $140/month cost is lower than most health sharing plans.
            Only{' '}
            <Link href="/reviews/chm" className="text-[var(--color-primary)] hover:underline">
              CHM
            </Link>{' '}
            at $115/month undercuts it &mdash; but CHM requires strict Christian faith and church
            attendance, does not cover prescriptions or mental health, and has a 6-month
            pre-existing waiting period.
          </p>
          <p className="leading-relaxed mb-4">
            One important cost detail: CrowdHealth&apos;s $60/month advocacy fee is fixed
            regardless of your health events. That represents 30&ndash;43% of your total monthly
            cost. Think of it as an administrative fee for bill negotiation, claims management,
            and platform access.
          </p>
        </section>

        {/* Section 3 */}
        <section id="coverage" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            What Each Model Covers
          </h2>
          <p className="leading-relaxed mb-4">
            CrowdHealth takes a &ldquo;fund anything&rdquo; approach, while health sharing
            ministries have specific sharing guidelines that define what is and is not eligible.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-4 font-semibold">Coverage Area</th>
                  <th className="py-3 pr-4 font-semibold">CrowdHealth</th>
                  <th className="py-3 pr-4 font-semibold">Zion HealthShare</th>
                  <th className="py-3 pr-4 font-semibold">CHM</th>
                  <th className="py-3 pr-4 font-semibold">Medi-Share</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Emergency / Surgery</td>
                  <td className="py-2 pr-4">Crowdfunded</td>
                  <td className="py-2 pr-4">Shared</td>
                  <td className="py-2 pr-4">Shared</td>
                  <td className="py-2 pr-4">Shared</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Prescriptions</td>
                  <td className="py-2 pr-4">Crowdfunded</td>
                  <td className="py-2 pr-4">Shared</td>
                  <td className="py-2 pr-4">Not shared</td>
                  <td className="py-2 pr-4">Not shared</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Mental Health</td>
                  <td className="py-2 pr-4">Crowdfunded</td>
                  <td className="py-2 pr-4">Shared</td>
                  <td className="py-2 pr-4">Not shared</td>
                  <td className="py-2 pr-4">Not shared</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Telehealth</td>
                  <td className="py-2 pr-4">Crowdfunded</td>
                  <td className="py-2 pr-4">Shared</td>
                  <td className="py-2 pr-4">Not shared</td>
                  <td className="py-2 pr-4">Shared</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Maternity</td>
                  <td className="py-2 pr-4">Crowdfunded</td>
                  <td className="py-2 pr-4">Shared</td>
                  <td className="py-2 pr-4">Shared</td>
                  <td className="py-2 pr-4">Shared</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Preventive Care</td>
                  <td className="py-2 pr-4">Incentivized</td>
                  <td className="py-2 pr-4">Shared</td>
                  <td className="py-2 pr-4">Shared</td>
                  <td className="py-2 pr-4">Shared</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Bill Negotiation</td>
                  <td className="py-2 pr-4 font-semibold">Yes (30&ndash;60% off)</td>
                  <td className="py-2 pr-4">PPO network rates</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">No</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Processing Speed</td>
                  <td className="py-2 pr-4 font-semibold">Immediate (community)</td>
                  <td className="py-2 pr-4">30&ndash;45 days</td>
                  <td className="py-2 pr-4">30&ndash;45 days</td>
                  <td className="py-2 pr-4">45&ndash;60 days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed mb-4">
            CrowdHealth&apos;s coverage model is broader in theory &mdash; any legitimate medical
            bill can be submitted for community funding. But &ldquo;crowdfunded&rdquo; means the
            community decides what to fund, whereas health sharing has established guidelines
            that create more predictability. CrowdHealth also stands out with its bill
            negotiation service, which can significantly reduce costs before they even reach the
            community.
          </p>
        </section>

        {/* Section 4 */}
        <section id="pre-existing" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Pre-Existing Conditions: A Critical Difference
          </h2>
          <p className="leading-relaxed mb-4">
            How each model handles pre-existing conditions varies dramatically and can make or
            break the value proposition depending on your health history:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-4 font-semibold">Plan</th>
                  <th className="py-3 pr-4 font-semibold">Pre-Existing Policy</th>
                  <th className="py-3 pr-4 font-semibold">Year 1 Limit</th>
                  <th className="py-3 pr-4 font-semibold">Full Eligibility</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">CrowdHealth</td>
                  <td className="py-2 pr-4">Not eligible year 1</td>
                  <td className="py-2 pr-4">$0</td>
                  <td className="py-2 pr-4">Year 4+ ($100K/year)</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">
                    <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">
                      Zion HealthShare
                    </Link>
                  </td>
                  <td className="py-2 pr-4 font-semibold">No waiting period</td>
                  <td className="py-2 pr-4">Unlimited</td>
                  <td className="py-2 pr-4">Month 1</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">
                    <Link href="/reviews/chm" className="text-[var(--color-primary)] hover:underline">CHM</Link>
                  </td>
                  <td className="py-2 pr-4">6-month wait</td>
                  <td className="py-2 pr-4">50% shared</td>
                  <td className="py-2 pr-4">Month 7</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">
                    <Link href="/reviews/sedera" className="text-[var(--color-primary)] hover:underline">Sedera</Link>
                  </td>
                  <td className="py-2 pr-4">6-month wait</td>
                  <td className="py-2 pr-4">50% shared</td>
                  <td className="py-2 pr-4">Month 7</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <Link href="/reviews/medi-share" className="text-[var(--color-primary)] hover:underline">Medi-Share</Link>
                  </td>
                  <td className="py-2 pr-4">12-month phased</td>
                  <td className="py-2 pr-4">25% shared</td>
                  <td className="py-2 pr-4">Year 4</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed mb-4">
            CrowdHealth has the most restrictive pre-existing condition policy: nothing is
            eligible in year one, and limits gradually increase ($25K year 2, $50K year 3, $100K
            year 4+). If you have any pre-existing condition, CrowdHealth is a poor choice for
            at least the first two years.
          </p>
          <p className="leading-relaxed mb-4">
            <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">
              Zion HealthShare
            </Link>{' '}
            is the clear winner for pre-existing conditions with no waiting period. If you have
            any health history, this single factor tips the value calculation heavily in
            Zion&apos;s favor despite its higher monthly cost. See our{' '}
            <Link href="/answers/pre-existing-conditions" className="text-[var(--color-primary)] hover:underline">
              pre-existing conditions guide
            </Link>{' '}
            for a deeper analysis.
          </p>
        </section>

        {/* Section 5 */}
        <section id="risks" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Risk Profile: Crowdfunding vs Pooled Sharing
          </h2>
          <p className="leading-relaxed mb-4">
            Neither CrowdHealth nor health sharing ministries are insurance. Neither guarantees
            payment. But the risk profiles differ:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="card p-6">
              <h3 className="font-bold text-lg mb-3">CrowdHealth Risks</h3>
              <ul className="space-y-2 text-[var(--color-text-secondary)]">
                <li>Crowdfunding is voluntary &mdash; community chooses what to fund</li>
                <li>Smaller community (17,000+ members) means less funding capacity</li>
                <li>Founded 2021 &mdash; limited track record (5 years)</li>
                <li>Pre-existing conditions severely limited for first 2 years</li>
                <li>No tobacco users accepted</li>
                <li>Does not satisfy state insurance mandates in 6 states</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-lg mb-3">Health Sharing Risks</h3>
              <ul className="space-y-2 text-[var(--color-text-secondary)]">
                <li>Sharing is voluntary &mdash; no contractual guarantee of payment</li>
                <li>Larger communities (50K&ndash;400K members) provide more stability</li>
                <li>30+ year track record for established plans (CHM, Medi-Share)</li>
                <li>Pre-existing waiting periods of 6&ndash;12 months (except Zion)</li>
                <li>IUA resets per incident &mdash; no annual out-of-pocket cap</li>
                <li>Processing delays of 30&ndash;60 days are common</li>
              </ul>
            </div>
          </div>
          <p className="leading-relaxed mb-4">
            The fundamental risk with CrowdHealth is concentration: 17,000 members is a small
            pool. A few catastrophic health events could strain funding capacity. Established
            ministries with 100,000&ndash;400,000 members have more financial resilience and
            decades of operational history to demonstrate reliability.
          </p>
          <p className="leading-relaxed mb-4">
            CrowdHealth mitigates this risk with transparency (you can see funding rates) and
            bill negotiation (reducing the total amount that needs funding). Their 99% funding
            rate on approved bills is strong, but the platform has only been tested during a
            period of rapid growth, not during a prolonged economic downturn.
          </p>
        </section>

        {/* Section 6 */}
        <section id="who-should-choose" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Who Should Choose CrowdHealth vs Health Sharing
          </h2>
          <div className="card p-6 mb-6">
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-1">Choose CrowdHealth if you are...</p>
                <ul className="text-[var(--color-text-secondary)] space-y-1 ml-4 list-disc">
                  <li>Healthy individual under 55 with no pre-existing conditions</li>
                  <li>Looking for the absolute lowest monthly cost (~$140/month)</li>
                  <li>Comfortable with a newer, crowdfunding-based model</li>
                  <li>Self-employed or between jobs wanting month-to-month flexibility</li>
                  <li>Non-smoker (tobacco users are not accepted)</li>
                  <li>Not living in a mandate state (CA, MA, NJ, RI, DC, VT)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-1">Choose health sharing if you are...</p>
                <ul className="text-[var(--color-text-secondary)] space-y-1 ml-4 list-disc">
                  <li>A family (CrowdHealth does not offer family plans)</li>
                  <li>Anyone with pre-existing conditions (choose Zion HealthShare)</li>
                  <li>Wanting a more established model with decades of track record</li>
                  <li>Looking for HSA compatibility (Zion HealthShare)</li>
                  <li>Preferring a PPO network with negotiated provider rates</li>
                  <li>Seeking larger community size (50K&ndash;400K members)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section id="bottom-line" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">The Bottom Line</h2>
          <div className="card p-6">
            <p className="leading-relaxed mb-4">
              CrowdHealth and health sharing solve the same problem &mdash; affordable healthcare
              without traditional insurance &mdash; but through different mechanisms. CrowdHealth
              is cheaper ($140/month vs $185&ndash;$495/month) and more flexible (cancel
              anytime), but has a smaller community, stricter pre-existing condition limits, and
              a shorter track record.
            </p>
            <p className="leading-relaxed mb-4">
              For healthy individuals under 55 who want the lowest cost and maximum flexibility,
              CrowdHealth is a compelling option. For families, anyone with pre-existing
              conditions, or people who want more established infrastructure,{' '}
              <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">
                Zion HealthShare
              </Link>{' '}
              offers better overall value with no pre-existing waiting period, HSA compatibility,
              and a 950,000+ provider PPO network.
            </p>
            <p className="leading-relaxed">
              Not sure which model is right for you?{' '}
              <Link href="/quiz" className="text-[var(--color-primary)] hover:underline font-semibold">
                Take our free 2-minute quiz
              </Link>{' '}
              or{' '}
              <Link href="/compare" className="text-[var(--color-primary)] hover:underline font-semibold">
                compare all plans side-by-side
              </Link>.
            </p>
          </div>
        </section>

        {/* Related Posts */}
        <section className="border-t border-[var(--color-border)] pt-8 mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/blog/non-religious-health-sharing-options"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">Non-Religious Health Sharing Options</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read article</span>
            </Link>
            <Link
              href="/blog/health-sharing-vs-insurance-2026"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">Health Sharing vs Insurance 2026</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read article</span>
            </Link>
            <Link
              href="/answers/crowdhealth-vs-health-sharing"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">CrowdHealth vs Health Sharing (Quick Answer)</span>
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
