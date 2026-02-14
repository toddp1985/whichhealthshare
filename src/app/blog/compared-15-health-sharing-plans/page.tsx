import { loadAllMinistries } from '@/lib/data';
import { generateBreadcrumb, generateArticleSchema } from '@/lib/schema';
import { buildMinistryLink } from '@/lib/affiliate';
import Link from 'next/link';

export const metadata = {
  title: 'We Compared 15 Health Sharing Plans Side-by-Side (2026)',
  description:
    'Side-by-side comparison of 15 health sharing plans with real pricing, coverage, and ratings. From $60/mo CrowdHealth to $600/mo Presidio.',
  openGraph: {
    title: 'We Compared 15 Health Sharing Plans Side-by-Side (2026)',
    description:
      'Side-by-side comparison of 15 health sharing plans with real pricing, coverage, and ratings. From $60/mo CrowdHealth to $600/mo Presidio.',
    type: 'article',
    url: 'https://whichhealthshare.com/blog/compared-15-health-sharing-plans',
  },
};

export default function ComparedPlansPage() {
  const ministries = loadAllMinistries();
  const sorted = [...ministries].sort((a, b) => b.rating - a.rating);

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'We Compared 15 Health Sharing Plans', url: '/blog/compared-15-health-sharing-plans' },
  ]);

  const articleSchema = generateArticleSchema(
    'We Compared 15 Health Sharing Plans Side-by-Side (2026)',
    'Side-by-side comparison of 15 health sharing plans with real pricing, coverage caps, faith requirements, and pre-existing condition policies. Updated February 2026.'
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
          <span>We Compared 15 Health Sharing Plans</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">
          We Compared 15 Health Sharing Plans Side-by-Side
        </h1>

        <p className="text-sm text-[var(--color-text-secondary)] mb-2">
          Published February 2026 | 12 min read
        </p>
        <p className="text-lg text-[var(--color-text-secondary)] mb-8">
          Health sharing plans range from $60/month to $600/month, cover wildly different things,
          and impose vastly different restrictions. We pulled pricing, coverage details, faith
          requirements, pre-existing condition policies, and member satisfaction data for every
          major health sharing ministry in the United States. Here is what we found.
        </p>

        {/* Table of contents */}
        <nav className="card mb-10">
          <h2 className="font-serif font-bold text-lg mb-3">Table of Contents</h2>
          <ol className="list-decimal list-inside space-y-1 text-[var(--color-text-secondary)]">
            <li><a href="#what-we-compared" className="text-[var(--color-primary)] hover:underline">What We Compared and How</a></li>
            <li><a href="#pricing-table" className="text-[var(--color-primary)] hover:underline">Full Pricing Comparison Table</a></li>
            <li><a href="#coverage-table" className="text-[var(--color-primary)] hover:underline">Coverage Breakdown: What Each Plan Includes</a></li>
            <li><a href="#faith-requirements" className="text-[var(--color-primary)] hover:underline">Faith Requirements Vary Widely</a></li>
            <li><a href="#pre-existing" className="text-[var(--color-primary)] hover:underline">Pre-Existing Conditions: The Biggest Differentiator</a></li>
            <li><a href="#top-picks" className="text-[var(--color-primary)] hover:underline">Our Top Picks by Category</a></li>
            <li><a href="#bottom-line" className="text-[var(--color-primary)] hover:underline">The Bottom Line</a></li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="what-we-compared" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            What We Compared and How
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            We evaluated {ministries.length} health sharing plans across six dimensions: monthly
            cost, coverage breadth, sharing caps, faith requirements, pre-existing condition
            policies, and member satisfaction. Every data point was verified directly from official
            plan websites and enrollment documents in February 2026.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            The plans in this comparison include traditional health sharing ministries (Medi-Share,
            CHM, Samaritan Ministries), newer secular options (Zion HealthShare, Sedera), a
            healthcare crowdfunding platform (CrowdHealth), and one regulated insurance product
            (Presidio Healthcare) for context. We also cover niche ministries like United Refuah
            (Jewish), Solidarity HealthShare (Catholic), and HSA Secure (HSA-compatible).
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            For a quick personalized recommendation, try our{' '}
            <Link href="/quiz" className="text-[var(--color-primary)] hover:underline">
              free quiz
            </Link>. For head-to-head matchups, use the{' '}
            <Link href="/compare" className="text-[var(--color-primary)] hover:underline">
              comparison tool
            </Link>.
          </p>
        </section>

        {/* Section 2: Pricing */}
        <section id="pricing-table" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Full Pricing Comparison Table
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Monthly costs vary by more than 10x depending on the plan and household size.
            CrowdHealth starts as low as $60/month for young, healthy individuals. Presidio
            Healthcare (actual insurance) goes up to $600/month for individuals. Most health
            sharing plans fall in the $115 to $400/month range for a single person.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-3 font-semibold">Plan</th>
                  <th className="py-3 pr-3 font-semibold">Rating</th>
                  <th className="py-3 pr-3 font-semibold">Individual/mo</th>
                  <th className="py-3 pr-3 font-semibold">Family/mo</th>
                  <th className="py-3 pr-3 font-semibold">Sharing Cap</th>
                  <th className="py-3 pr-3 font-semibold">IUA/Deductible</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((m, i) => (
                  <tr
                    key={m.slug}
                    className={`border-b border-[var(--color-border)] ${i === 0 ? 'bg-[var(--color-primary-lighter)]' : ''}`}
                  >
                    <td className="py-2 pr-3">
                      <Link
                        href={`/reviews/${m.slug}`}
                        className="text-[var(--color-primary)] hover:underline"
                      >
                        {m.name}
                      </Link>
                    </td>
                    <td className="py-2 pr-3">{m.rating}/5</td>
                    <td className="py-2 pr-3">
                      ${m.plans[0]?.monthlyRange?.individual?.min}
                      {m.plans[0]?.monthlyRange?.individual?.max !== m.plans[0]?.monthlyRange?.individual?.min
                        ? `-$${m.plans[0]?.monthlyRange?.individual?.max}`
                        : ''}/mo
                    </td>
                    <td className="py-2 pr-3">
                      {m.plans[0]?.monthlyRange?.family?.min
                        ? `$${m.plans[0]?.monthlyRange?.family?.min}-$${m.plans[0]?.monthlyRange?.family?.max}/mo`
                        : 'N/A'}
                    </td>
                    <td className="py-2 pr-3">{m.plans[0]?.coverageCap}</td>
                    <td className="py-2 pr-3">
                      ${m.plans[0]?.iua?.join(' / $')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] mt-2">
            All pricing verified from official plan websites, February 2026. Ranges reflect
            lowest to highest IUA/deductible options.
          </p>
        </section>

        {/* Section 3: Coverage */}
        <section id="coverage-table" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Coverage Breakdown: What Each Plan Includes
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Monthly cost tells only half the story. The coverage gap between the cheapest plan
            (CHM at $115/month) and a mid-range plan (Zion at $185/month) is significant. CHM
            does not cover telehealth, prescriptions, or mental health. Zion covers all three.
            Below is a feature-by-feature breakdown of every plan&apos;s primary tier.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-3 font-semibold">Plan</th>
                  <th className="py-3 pr-2 font-semibold text-center">Telehealth</th>
                  <th className="py-3 pr-2 font-semibold text-center">Rx</th>
                  <th className="py-3 pr-2 font-semibold text-center">Maternity</th>
                  <th className="py-3 pr-2 font-semibold text-center">Mental Health</th>
                  <th className="py-3 pr-2 font-semibold text-center">Preventive</th>
                  <th className="py-3 pr-2 font-semibold text-center">Dental</th>
                  <th className="py-3 pr-2 font-semibold text-center">Vision</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((m) => {
                  const inc = m.plans[0]?.includes;
                  return (
                    <tr key={m.slug} className="border-b border-[var(--color-border)]">
                      <td className="py-2 pr-3">
                        <Link
                          href={`/reviews/${m.slug}`}
                          className="text-[var(--color-primary)] hover:underline"
                        >
                          {m.name}
                        </Link>
                      </td>
                      <td className="py-2 pr-2 text-center">{inc?.telehealth ? 'Yes' : 'No'}</td>
                      <td className="py-2 pr-2 text-center">{inc?.prescriptions ? 'Yes' : 'No'}</td>
                      <td className="py-2 pr-2 text-center">{inc?.maternity ? 'Yes' : 'No'}</td>
                      <td className="py-2 pr-2 text-center">{inc?.mentalHealth ? 'Yes' : 'No'}</td>
                      <td className="py-2 pr-2 text-center">{inc?.preventive ? 'Yes' : 'No'}</td>
                      <td className="py-2 pr-2 text-center">{inc?.dental ? 'Yes' : 'No'}</td>
                      <td className="py-2 pr-2 text-center">{inc?.vision ? 'Yes' : 'No'}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] mt-2">
            Coverage shown for each plan&apos;s primary/comprehensive tier. Some plans offer
            additional tiers with different coverage. See individual{' '}
            <Link href="/reviews" className="text-[var(--color-primary)] hover:underline">
              review pages
            </Link>{' '}
            for full details.
          </p>
        </section>

        {/* Section 4: Faith Requirements */}
        <section id="faith-requirements" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Faith Requirements Vary Widely
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            This is one of the most misunderstood aspects of health sharing. Some plans require
            strict Christian faith plus regular church attendance. Others accept anyone regardless
            of belief. If you are not Christian, your options are more limited but they do exist.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-3 font-semibold">Faith Level</th>
                  <th className="py-3 pr-3 font-semibold">Plans</th>
                  <th className="py-3 pr-3 font-semibold">What It Means</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3 font-semibold">None / Secular</td>
                  <td className="py-2 pr-3">
                    <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">Zion HealthShare</Link>,{' '}
                    <Link href="/reviews/crowdhealth" className="text-[var(--color-primary)] hover:underline">CrowdHealth</Link>,{' '}
                    <Link href="/reviews/sedera" className="text-[var(--color-primary)] hover:underline">Sedera</Link>,{' '}
                    <Link href="/reviews/hsa-secure" className="text-[var(--color-primary)] hover:underline">HSA Secure</Link>,{' '}
                    <Link href="/reviews/jhs-community" className="text-[var(--color-primary)] hover:underline">JHS Community</Link>
                  </td>
                  <td className="py-2 pr-3">No statement of faith, no church attendance, open to everyone</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3 font-semibold">Christian (light)</td>
                  <td className="py-2 pr-3">
                    <Link href="/reviews/medi-share" className="text-[var(--color-primary)] hover:underline">Medi-Share</Link>,{' '}
                    <Link href="/reviews/liberty-healthshare" className="text-[var(--color-primary)] hover:underline">Liberty</Link>,{' '}
                    <Link href="/reviews/oneshare-health" className="text-[var(--color-primary)] hover:underline">OneShare</Link>,{' '}
                    <Link href="/reviews/netwell" className="text-[var(--color-primary)] hover:underline">netWell</Link>,{' '}
                    <Link href="/reviews/impact-health-sharing" className="text-[var(--color-primary)] hover:underline">Impact</Link>,{' '}
                    <Link href="/reviews/altrua-healthshare" className="text-[var(--color-primary)] hover:underline">Altrua</Link>
                  </td>
                  <td className="py-2 pr-3">Agree to Christian principles, no church attendance verification</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3 font-semibold">Christian (strict)</td>
                  <td className="py-2 pr-3">
                    <Link href="/reviews/chm" className="text-[var(--color-primary)] hover:underline">CHM</Link>,{' '}
                    <Link href="/reviews/samaritan-ministries" className="text-[var(--color-primary)] hover:underline">Samaritan</Link>
                  </td>
                  <td className="py-2 pr-3">Signed statement of faith plus church attendance required</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3 font-semibold">Catholic</td>
                  <td className="py-2 pr-3">
                    <Link href="/reviews/solidarity-healthshare" className="text-[var(--color-primary)] hover:underline">Solidarity HealthShare</Link>
                  </td>
                  <td className="py-2 pr-3">Catholic faith with church attendance verification</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3 font-semibold">Jewish</td>
                  <td className="py-2 pr-3">
                    <Link href="/reviews/united-refuah" className="text-[var(--color-primary)] hover:underline">United Refuah</Link>
                  </td>
                  <td className="py-2 pr-3">Torah-based lifestyle commitment</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-secondary)] mt-4">
            For a deeper breakdown, see our guide to{' '}
            <Link href="/answers/non-religious-plans" className="text-[var(--color-primary)] hover:underline">
              non-religious health sharing plans
            </Link>{' '}
            and plans with{' '}
            <Link href="/answers/no-church-requirement" className="text-[var(--color-primary)] hover:underline">
              no church requirement
            </Link>.
          </p>
        </section>

        {/* Section 5: Pre-existing */}
        <section id="pre-existing" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Pre-Existing Conditions: The Biggest Differentiator
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            If you have any health condition diagnosed in the past 1-10 years, the pre-existing
            condition policy will likely matter more than monthly cost. Waiting periods range from
            zero (Zion HealthShare, Presidio Healthcare) to 36 months (Impact Health Sharing).
            Some plans phase in coverage over years. Others exclude certain conditions permanently.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-3 font-semibold">Plan</th>
                  <th className="py-3 pr-3 font-semibold">Waiting Period</th>
                  <th className="py-3 pr-3 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((m) => (
                  <tr key={m.slug} className="border-b border-[var(--color-border)]">
                    <td className="py-2 pr-3">
                      <Link
                        href={`/reviews/${m.slug}`}
                        className="text-[var(--color-primary)] hover:underline"
                      >
                        {m.name}
                      </Link>
                    </td>
                    <td className="py-2 pr-3 font-semibold">{m.preExisting.waitingPeriod}</td>
                    <td className="py-2 pr-3 text-sm">{m.preExisting.sharingLimits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-secondary)] mt-4">
            Read our full guide on{' '}
            <Link href="/answers/pre-existing-conditions" className="text-[var(--color-primary)] hover:underline">
              pre-existing conditions and health sharing
            </Link>{' '}
            for detailed advice on choosing a plan when you have an existing diagnosis.
          </p>
        </section>

        {/* Section 6: Top Picks */}
        <section id="top-picks" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Our Top Picks by Category
          </h2>
          <div className="space-y-4">
            <div className="card">
              <h3 className="font-semibold mb-2">Best Overall: Zion HealthShare (4.8/5)</h3>
              <p className="text-[var(--color-text-secondary)]">
                $185-$268/month for individuals. No faith requirement, unlimited sharing cap, PPO
                network with 950,000+ providers, no pre-existing condition waiting period. Covers
                telehealth, prescriptions, maternity, mental health, preventive care, emergency,
                and surgery. Read our{' '}
                <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">
                  full Zion review
                </Link>.
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">Cheapest Plan: CHM ($115/month)</h3>
              <p className="text-[var(--color-text-secondary)]">
                The most affordable option at $115/month for individuals with unlimited sharing.
                Founded in 1981 with 300,000+ members. Trade-off: strict Christian faith requirement,
                church attendance required, no telehealth, prescriptions, or mental health coverage.
                Read our{' '}
                <Link href="/reviews/chm" className="text-[var(--color-primary)] hover:underline">
                  full CHM review
                </Link>.
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">Best for Families: Medi-Share (4.5/5)</h3>
              <p className="text-[var(--color-text-secondary)]">
                $681-$1,215/month for families. Largest ministry with 400,000+ members and 30+
                years of operation. Christian faith requirement (light). Covers maternity, telehealth,
                preventive, emergency, and surgery. Read our{' '}
                <Link href="/reviews/medi-share" className="text-[var(--color-primary)] hover:underline">
                  full Medi-Share review
                </Link>.
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">Lowest Monthly Cost: CrowdHealth (~$140/month average)</h3>
              <p className="text-[var(--color-text-secondary)]">
                Healthcare crowdfunding platform with $60/month advocacy fee plus variable crowdfunding.
                No coverage caps, no faith requirement, month-to-month flexibility. Works best for
                young, healthy individuals. Pre-existing conditions limited for first two years. Read our{' '}
                <Link href="/reviews/crowdhealth" className="text-[var(--color-primary)] hover:underline">
                  full CrowdHealth review
                </Link>.
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">Best HSA-Compatible: HSA Secure ($170-$320/month)</h3>
              <p className="text-[var(--color-text-secondary)]">
                The only health sharing plan specifically designed for HSA compatibility. Combines
                a MEC insurance component with Zion HealthShare coverage. No faith requirement,
                unlimited sharing cap. Ideal for self-employed individuals wanting tax advantages. Read our{' '}
                <Link href="/reviews/hsa-secure" className="text-[var(--color-primary)] hover:underline">
                  full HSA Secure review
                </Link>.
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">Best Guaranteed Coverage: Presidio Healthcare (4.7/5)</h3>
              <p className="text-[var(--color-text-secondary)]">
                $300-$600/month for individuals. This is actual regulated insurance, not health
                sharing. Pre-existing conditions covered from day one with zero waiting. Includes
                dental and vision. Best for anyone who needs guaranteed, regulated protections. Read our{' '}
                <Link href="/reviews/presidio-healthcare" className="text-[var(--color-primary)] hover:underline">
                  full Presidio review
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Bottom Line */}
        <section id="bottom-line" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">The Bottom Line</h2>
          <div className="card">
            <p className="text-[var(--color-text)] mb-3">
              There is no single best health sharing plan. The right choice depends on your faith
              background, health status, budget, and risk tolerance. That said, if we had to pick
              one plan for the average person exploring health sharing for the first time, it would
              be{' '}
              <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">
                Zion HealthShare
              </Link>{' '}
              for its combination of broad coverage, no faith requirement, no pre-existing
              condition waiting period, and competitive pricing.
            </p>
            <p className="text-[var(--color-text)] mb-3">
              If you prioritize lowest cost above all else, CHM ($115/month) or CrowdHealth
              (~$140/month) are worth investigating. If you have pre-existing conditions and need
              guaranteed coverage, Presidio Healthcare ($300-$600/month) is the safest option.
              If you want HSA tax benefits, HSA Secure is currently the only viable path.
            </p>
            <p className="text-[var(--color-text)]">
              Not sure where to start? Take our{' '}
              <Link href="/quiz" className="text-[var(--color-primary)] hover:underline">
                free 2-minute quiz
              </Link>{' '}
              to get a personalized recommendation, or{' '}
              <Link href="/compare" className="text-[var(--color-primary)] hover:underline">
                compare any two plans side-by-side
              </Link>.
            </p>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/blog/hidden-cost-health-sharing"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">The Hidden Cost of Health Sharing</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read post</span>
            </Link>
            <Link
              href="/blog/2026-health-sharing-what-changed"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">2026 Health Sharing: What Changed</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read post</span>
            </Link>
            <Link
              href="/blog/left-health-insurance-crowdhealth"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">I Left Health Insurance for CrowdHealth</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read post</span>
            </Link>
            <Link
              href="/answers/best-health-sharing-plan"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">Best Health Sharing Plan in 2026</span>
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
