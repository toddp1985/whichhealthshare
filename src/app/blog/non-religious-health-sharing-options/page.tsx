import { loadAllMinistries } from '@/lib/data';
import { generateBreadcrumb, generateArticleSchema } from '@/lib/schema';
import Link from 'next/link';

export const metadata = {
  title: 'Non-Religious Health Sharing Plans in 2026 — WhichHealthShare',
  description:
    'Not religious? You can still join health sharing. Compare Zion HealthShare, Sedera, and CrowdHealth — three secular options with no faith requirement.',
  openGraph: {
    title: 'Non-Religious Health Sharing Options (No Faith Required)',
    description:
      'Zion HealthShare, Sedera, and CrowdHealth require no faith statement or church attendance. Compare pricing, coverage, and trade-offs.',
  },
};

export default function NonReligiousOptionsPage() {
  const ministries = loadAllMinistries();

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Non-Religious Health Sharing Options', url: '/blog/non-religious-health-sharing-options' },
  ]);

  const articleSchema = generateArticleSchema(
    'Non-Religious Health Sharing Options: Plans With No Faith Requirement in 2026',
    'You do not need to be religious to join a health sharing plan. Zion HealthShare, Sedera, and CrowdHealth all accept members of any faith or no faith, with individual costs starting at $140/month.'
  );

  const secularPlans = ministries.filter(
    (m) => m.faithRequirement === 'secular' || m.faithRequirement === 'any-faith'
  );

  const faithPlans = ministries.filter(
    (m) =>
      m.faithRequirement === 'christian-strict' ||
      m.faithRequirement === 'christian-light' ||
      m.faithRequirement === 'catholic' ||
      m.faithRequirement === 'jewish'
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
          <span>Non-Religious Health Sharing Options</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">
          Non-Religious Health Sharing Options: Plans With No Faith Requirement in 2026
        </h1>
        <div className="text-sm text-[var(--color-text-muted)] mb-2">
          February 10, 2026 &middot; 11 min read
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] mb-8">
          Last updated: February 2026 | All faith requirements verified directly with each plan
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Health sharing started as a faith-based movement, and many of the largest plans still
          require a Christian statement of faith or regular church attendance. But the landscape
          has changed. In 2026, three major options &mdash;{' '}
          <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">
            Zion HealthShare
          </Link>,{' '}
          <Link href="/reviews/sedera" className="text-[var(--color-primary)] hover:underline">
            Sedera
          </Link>, and{' '}
          <Link href="/reviews/crowdhealth" className="text-[var(--color-primary)] hover:underline">
            CrowdHealth
          </Link>{' '}
          &mdash; accept members of any faith or no faith at all. Monthly costs start at $140
          for individuals.
        </p>
        <p className="leading-relaxed mb-8">
          This guide compares every non-religious health sharing option available, explains what
          &ldquo;faith requirements&rdquo; actually mean at each plan, and helps you decide which
          secular option fits your needs and budget.
        </p>

        {/* Table of Contents */}
        <nav className="card p-6 mb-10">
          <h2 className="font-serif font-bold text-lg mb-3">Table of Contents</h2>
          <ol className="list-decimal list-inside space-y-1 text-[var(--color-text-secondary)]">
            <li><a href="#faith-landscape" className="hover:underline">The Faith Requirement Landscape</a></li>
            <li><a href="#secular-comparison" className="hover:underline">Non-Religious Plans Compared</a></li>
            <li><a href="#zion" className="hover:underline">Zion HealthShare: Best Overall Non-Religious Option</a></li>
            <li><a href="#sedera" className="hover:underline">Sedera: Fully Secular With Flexible Coverage</a></li>
            <li><a href="#crowdhealth" className="hover:underline">CrowdHealth: Crowdfunding With No Faith Strings</a></li>
            <li><a href="#faith-light" className="hover:underline">Plans With &ldquo;Light&rdquo; Faith Requirements</a></li>
            <li><a href="#bottom-line" className="hover:underline">Which Non-Religious Plan Is Best for You?</a></li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="faith-landscape" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            The Faith Requirement Landscape in 2026
          </h2>
          <p className="leading-relaxed mb-4">
            Health sharing ministries were originally created as faith-based alternatives to
            insurance, operating under an ACA exemption (Section 1402(d)) that applies to
            religious organizations. To qualify for this exemption, ministries must facilitate
            the sharing of medical expenses among members &ldquo;of a similar faith.&rdquo; Some
            interpret this broadly (any belief system), while others require strict adherence to
            specific Christian doctrines.
          </p>
          <p className="leading-relaxed mb-4">
            Here is how every major plan categorizes its faith requirement:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-4 font-semibold">Plan</th>
                  <th className="py-3 pr-4 font-semibold">Faith Requirement</th>
                  <th className="py-3 pr-4 font-semibold">Church Attendance?</th>
                  <th className="py-3 pr-4 font-semibold">Individual/mo</th>
                </tr>
              </thead>
              <tbody>
                {secularPlans.map((m) => (
                  <tr key={m.slug} className="border-b border-[var(--color-border)] bg-green-50 dark:bg-green-950/20">
                    <td className="py-2 pr-4">
                      <Link href={`/reviews/${m.slug}`} className="text-[var(--color-primary)] hover:underline font-semibold">
                        {m.name}
                      </Link>
                    </td>
                    <td className="py-2 pr-4">None required</td>
                    <td className="py-2 pr-4">No</td>
                    <td className="py-2 pr-4">
                      ${m.plans[0]?.monthlyRange?.individual?.min}&ndash;$
                      {m.plans[0]?.monthlyRange?.individual?.max}
                    </td>
                  </tr>
                ))}
                {faithPlans.map((m) => (
                  <tr key={m.slug} className="border-b border-[var(--color-border)]">
                    <td className="py-2 pr-4">
                      <Link href={`/reviews/${m.slug}`} className="text-[var(--color-primary)] hover:underline">
                        {m.name}
                      </Link>
                    </td>
                    <td className="py-2 pr-4">
                      {m.faithRequirement === 'christian-strict'
                        ? 'Strict Christian'
                        : m.faithRequirement === 'christian-light'
                        ? 'Light Christian'
                        : m.faithRequirement === 'catholic'
                        ? 'Catholic'
                        : 'Jewish'}
                    </td>
                    <td className="py-2 pr-4">{m.churchAttendanceRequired ? 'Yes' : 'No'}</td>
                    <td className="py-2 pr-4">
                      ${m.plans[0]?.monthlyRange?.individual?.min}&ndash;$
                      {m.plans[0]?.monthlyRange?.individual?.max}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)] mb-4">
            Green-highlighted rows indicate plans with no faith requirement.
          </p>
        </section>

        {/* Section 2 */}
        <section id="secular-comparison" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Non-Religious Plans Compared: Pricing, Coverage, and Trade-Offs
          </h2>
          <p className="leading-relaxed mb-4">
            The three non-religious options differ significantly in how they work, what they
            cover, and how much they cost. Here is a direct comparison:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-4 font-semibold">Feature</th>
                  <th className="py-3 pr-4 font-semibold">Zion HealthShare</th>
                  <th className="py-3 pr-4 font-semibold">Sedera</th>
                  <th className="py-3 pr-4 font-semibold">CrowdHealth</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Type</td>
                  <td className="py-2 pr-4">Health sharing</td>
                  <td className="py-2 pr-4">Health sharing</td>
                  <td className="py-2 pr-4">Crowdfunding</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Individual/mo</td>
                  <td className="py-2 pr-4">$185&ndash;$268</td>
                  <td className="py-2 pr-4">$199&ndash;$379</td>
                  <td className="py-2 pr-4">~$140 avg</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Family/mo</td>
                  <td className="py-2 pr-4">$555&ndash;$804</td>
                  <td className="py-2 pr-4">$597&ndash;$1,137</td>
                  <td className="py-2 pr-4">N/A (individual only)</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Coverage Cap</td>
                  <td className="py-2 pr-4">Unlimited</td>
                  <td className="py-2 pr-4">Unlimited</td>
                  <td className="py-2 pr-4">No cap per event</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Prescriptions</td>
                  <td className="py-2 pr-4">Shared</td>
                  <td className="py-2 pr-4">Shared</td>
                  <td className="py-2 pr-4">Crowdfunded</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Mental Health</td>
                  <td className="py-2 pr-4">Shared</td>
                  <td className="py-2 pr-4">Shared</td>
                  <td className="py-2 pr-4">Crowdfunded</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Pre-Existing Wait</td>
                  <td className="py-2 pr-4 font-semibold">None</td>
                  <td className="py-2 pr-4">6 months</td>
                  <td className="py-2 pr-4">Limited first 2 years</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">HSA Compatible</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">No</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Network</td>
                  <td className="py-2 pr-4">Cigna PPO (950K+)</td>
                  <td className="py-2 pr-4">Any doctor</td>
                  <td className="py-2 pr-4">Any doctor</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Members</td>
                  <td className="py-2 pr-4">50,000+</td>
                  <td className="py-2 pr-4">50,000+</td>
                  <td className="py-2 pr-4">17,000+</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Rating</td>
                  <td className="py-2 pr-4">4.8/5</td>
                  <td className="py-2 pr-4">4.3/5</td>
                  <td className="py-2 pr-4">4.6/5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3 */}
        <section id="zion" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Zion HealthShare: Best Overall Non-Religious Option
          </h2>
          <p className="leading-relaxed mb-4">
            <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">
              Zion HealthShare
            </Link>{' '}
            is the top-rated non-religious health sharing plan and our overall pick for most
            people who want to avoid faith requirements. Founded in 2017 and based in Denver,
            CO, Zion accepts members of any faith or no faith. There is no statement of faith,
            no church attendance requirement, and no lifestyle covenant beyond basic wellness
            commitments.
          </p>
          <p className="leading-relaxed mb-4">
            What sets Zion apart from other secular options:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="leading-relaxed">
              <strong>No pre-existing condition waiting period.</strong> This is Zion&apos;s
              biggest advantage. Every other plan (secular or faith-based) imposes 6&ndash;12
              months of limited sharing for pre-existing conditions.
            </li>
            <li className="leading-relaxed">
              <strong>HSA compatible.</strong> Zion is the only non-religious plan that works
              with a Health Savings Account, enabling tax-deductible contributions up to $4,300
              (individual) or $8,550 (family) in 2026.
            </li>
            <li className="leading-relaxed">
              <strong>Cigna PPO network.</strong> Access to 950,000+ providers with negotiated
              rates, reducing your out-of-pocket costs on in-network care.
            </li>
            <li className="leading-relaxed">
              <strong>Comprehensive sharing.</strong> Includes prescriptions, mental health,
              telehealth, maternity, preventive care, emergency, and surgery.
            </li>
          </ul>
          <p className="leading-relaxed mb-4">
            Zion costs $185&ndash;$268/month for individuals with IUA options of $500, $1,000,
            or $2,000 and a 10&ndash;20% co-share. For families, rates start at $555/month.
            Read our{' '}
            <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">
              full Zion HealthShare review
            </Link>.
          </p>
        </section>

        {/* Section 4 */}
        <section id="sedera" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Sedera: Fully Secular With Flexible Coverage
          </h2>
          <p className="leading-relaxed mb-4">
            <Link href="/reviews/sedera" className="text-[var(--color-primary)] hover:underline">
              Sedera
            </Link>{' '}
            is explicitly secular &mdash; it was founded in Austin, TX in 2010 as a
            non-religious alternative to faith-based ministries. There is no statement of faith,
            no church requirement, and no religious language in its materials.
          </p>
          <p className="leading-relaxed mb-4">
            Sedera&apos;s coverage is similar to Zion&apos;s: prescriptions, mental health,
            telehealth, maternity, and preventive care are all shared. The main differences:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="leading-relaxed">
              <strong>Higher pricing.</strong> Individual plans start at $199&ndash;$379/month,
              compared to Zion&apos;s $185&ndash;$268/month. Family plans run
              $597&ndash;$1,137/month.
            </li>
            <li className="leading-relaxed">
              <strong>6-month pre-existing waiting period.</strong> Unlike Zion&apos;s immediate
              sharing, Sedera shares only 50% of pre-existing condition costs for the first 6
              months.
            </li>
            <li className="leading-relaxed">
              <strong>Not accredited.</strong> Sedera is not accredited with major health sharing
              organizations, though it has operated reliably for 16 years.
            </li>
            <li className="leading-relaxed">
              <strong>Any doctor.</strong> Sedera has no network restrictions, so you can see
              any provider. This means more flexibility but also potentially higher costs since
              there are no pre-negotiated rates.
            </li>
          </ul>
          <p className="leading-relaxed mb-4">
            Sedera is a good option for secular members who want comprehensive coverage and
            flexible provider choice. However, for most people, Zion HealthShare offers better
            value with lower pricing, HSA compatibility, and no pre-existing waiting period.
            Read our{' '}
            <Link href="/reviews/sedera" className="text-[var(--color-primary)] hover:underline">
              full Sedera review
            </Link>.
          </p>
        </section>

        {/* Section 5 */}
        <section id="crowdhealth" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            CrowdHealth: Crowdfunding With No Faith Strings
          </h2>
          <p className="leading-relaxed mb-4">
            <Link href="/reviews/crowdhealth" className="text-[var(--color-primary)] hover:underline">
              CrowdHealth
            </Link>{' '}
            is not technically health sharing &mdash; it is a healthcare crowdfunding platform
            where members contribute to fund each other&apos;s medical bills. Founded in 2021 in
            Austin, TX, CrowdHealth is completely secular with no faith requirement of any kind.
          </p>
          <p className="leading-relaxed mb-4">
            CrowdHealth appeals to a specific type of member:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="leading-relaxed">
              <strong>Lowest monthly cost.</strong> At roughly $140/month average for individuals
              under 55, CrowdHealth is the cheapest non-religious option. The cost includes a
              $60/month fixed advocacy fee plus variable crowdfunding contributions.
            </li>
            <li className="leading-relaxed">
              <strong>No coverage caps.</strong> There is no per-event or annual cap on what the
              community can fund. 99% of approved bills have been funded.
            </li>
            <li className="leading-relaxed">
              <strong>Month-to-month flexibility.</strong> Cancel anytime with no long-term
              commitment. This appeals to freelancers and people between jobs.
            </li>
            <li className="leading-relaxed">
              <strong>Bill negotiation.</strong> CrowdHealth&apos;s advocacy team routinely
              negotiates 30&ndash;60% discounts on medical bills before they go to the
              community for funding.
            </li>
          </ul>
          <p className="leading-relaxed mb-4">
            The trade-offs are significant: CrowdHealth does not offer family plans, pre-existing
            conditions are limited for the first 2 years ($25K year 2, $50K year 3), no tobacco
            users are accepted, and coverage is crowdfunded &mdash; meaning it relies on
            community funding rather than guaranteed sharing. The member base is also relatively
            small at 17,000+ compared to Zion and Sedera at 50,000+ each.
          </p>
          <p className="leading-relaxed mb-4">
            CrowdHealth is best for healthy, tech-savvy individuals under 55 who want the
            absolute lowest monthly cost and are comfortable with a newer, crowdfunding-based
            model. Read our{' '}
            <Link href="/reviews/crowdhealth" className="text-[var(--color-primary)] hover:underline">
              full CrowdHealth review
            </Link>{' '}
            or see how it compares in our{' '}
            <Link href="/blog/crowdhealth-vs-health-sharing" className="text-[var(--color-primary)] hover:underline">
              CrowdHealth vs Health Sharing
            </Link>{' '}
            deep dive.
          </p>
        </section>

        {/* Section 6 */}
        <section id="faith-light" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Plans With &ldquo;Light&rdquo; Faith Requirements: Worth Considering?
          </h2>
          <p className="leading-relaxed mb-4">
            Some health sharing plans fall in a middle ground &mdash; they have a faith component
            but do not require strict adherence or church attendance. These &ldquo;light
            faith&rdquo; plans may work for people who are broadly spiritual or who are
            comfortable affirming general values without being practicing members of a specific
            denomination.
          </p>
          <ul className="space-y-3 mb-4">
            <li className="leading-relaxed">
              <strong><Link href="/reviews/medi-share" className="text-[var(--color-primary)] hover:underline">
                Medi-Share
              </Link>:</strong>{' '}
              Requires a Christian statement of faith but does not require church attendance.
              The faith requirement is a checkbox during enrollment. Individual plans:
              $227&ndash;$405/month.
            </li>
            <li className="leading-relaxed">
              <strong><Link href="/reviews/liberty-healthshare" className="text-[var(--color-primary)] hover:underline">
                Liberty HealthShare
              </Link>:</strong>{' '}
              Requires agreement with Christian principles but is flexible on denomination.
              No church attendance required. Individual plans start at $87/month (Liberty
              Assist).
            </li>
            <li className="leading-relaxed">
              <strong><Link href="/reviews/presidio-healthcare" className="text-[var(--color-primary)] hover:underline">
                Presidio Healthcare
              </Link>:</strong>{' '}
              Christian-oriented branding but actual regulated insurance. No faith requirement
              for enrollment. Individual plans: $300&ndash;$600/month with guaranteed coverage.
            </li>
          </ul>
          <p className="leading-relaxed mb-4">
            Plans with strict faith requirements &mdash;{' '}
            <Link href="/reviews/chm" className="text-[var(--color-primary)] hover:underline">CHM</Link>{' '}
            and{' '}
            <Link href="/reviews/samaritan-ministries" className="text-[var(--color-primary)] hover:underline">
              Samaritan Ministries
            </Link>{' '}
            &mdash; both require church attendance and a detailed Christian statement of faith.
            These are genuinely faith-centered communities, not casual checkboxes. If you are not
            a practicing Christian, these plans are not appropriate. Learn more in our{' '}
            <Link href="/answers/no-church-requirement" className="text-[var(--color-primary)] hover:underline">
              plans without church requirements guide
            </Link>.
          </p>
        </section>

        {/* Section 7 */}
        <section id="bottom-line" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Which Non-Religious Plan Is Best for You?
          </h2>
          <div className="card p-6 mb-6">
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-1">Choose Zion HealthShare if you want...</p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  The best overall value with no pre-existing condition waiting period, HSA
                  compatibility, prescription and mental health coverage, and a PPO network.
                  Best for individuals and families.{' '}
                  <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">
                    Starting at $185/month
                  </Link>.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">Choose Sedera if you want...</p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  A fully secular plan with any-doctor flexibility and comprehensive coverage.
                  Good option if you prefer no network restrictions. Note the 6-month
                  pre-existing waiting period and higher pricing.{' '}
                  <Link href="/reviews/sedera" className="text-[var(--color-primary)] hover:underline">
                    Starting at $199/month
                  </Link>.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">Choose CrowdHealth if you want...</p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  The lowest monthly cost and maximum flexibility as an individual. Best for
                  healthy people under 55 who are comfortable with crowdfunding. Not available
                  for families.{' '}
                  <Link href="/reviews/crowdhealth" className="text-[var(--color-primary)] hover:underline">
                    Averaging $140/month
                  </Link>.
                </p>
              </div>
            </div>
          </div>
          <p className="leading-relaxed mb-4">
            If you need guaranteed coverage with regulatory protections and no faith
            requirement, consider{' '}
            <Link href="/reviews/presidio-healthcare" className="text-[var(--color-primary)] hover:underline">
              Presidio Healthcare
            </Link>{' '}
            &mdash; actual regulated insurance starting at $300/month that covers pre-existing
            conditions from day one.
          </p>
          <p className="leading-relaxed">
            Not sure which option fits?{' '}
            <Link href="/quiz" className="text-[var(--color-primary)] hover:underline font-semibold">
              Take our free 2-minute quiz
            </Link>{' '}
            to get a personalized recommendation, or{' '}
            <Link href="/compare" className="text-[var(--color-primary)] hover:underline font-semibold">
              compare all plans side-by-side
            </Link>.
          </p>
        </section>

        {/* Related Posts */}
        <section className="border-t border-[var(--color-border)] pt-8 mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/blog/crowdhealth-vs-health-sharing"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">CrowdHealth vs Health Sharing Plans</span>
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
              href="/answers/non-religious-plans"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">Non-Religious Plans (Quick Answer)</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read answer</span>
            </Link>
            <Link
              href="/answers/no-church-requirement"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">Plans Without Church Requirements</span>
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
