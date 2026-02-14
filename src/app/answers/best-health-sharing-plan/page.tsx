import { loadAllMinistries } from '@/lib/data';
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema';
import Link from 'next/link';

export const metadata = {
  title: 'Best Health Sharing Plan in 2026: Zion vs Medi-Share vs CHM',
  description:
    'Zion HealthShare is the best overall health sharing plan for 2026 (4.8/5, $185-$268/mo, no faith requirement, unlimited sharing). Full comparison of all 7 plans.',
};

export default function BestHealthSharingPlanPage() {
  const ministries = loadAllMinistries();
  const topRated = [...ministries].sort((a, b) => b.rating - a.rating);

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Answers', url: '/answers' },
    { name: 'Best Health Sharing Plan', url: '/answers/best-health-sharing-plan' },
  ]);

  const articleSchema = generateArticleSchema(
    'What Is the Best Health Sharing Plan in 2026?',
    'Zion HealthShare is the best overall health sharing plan for most people in 2026, rated 4.8/5. It costs $185-$268/month for individuals with no faith requirement, unlimited sharing cap, and a PPO network with 950,000+ providers.'
  );

  const faqSchema = generateFAQSchema([
    {
      question: 'What is the best health sharing plan in 2026?',
      answer:
        'Zion HealthShare is the best overall health sharing plan in 2026, rated 4.8/5. It costs $185-$268/month for individuals, has no faith requirement, offers unlimited sharing, and uses a Cigna PPO network with 950,000+ providers. It also covers pre-existing conditions from day one with no waiting period.',
    },
    {
      question: 'What is the best health sharing plan for families?',
      answer:
        'For Christian families, Medi-Share (4.5/5) offers the best family coverage at $681-$1,215/month with 400,000+ members and 30+ years of operation. For families without faith preferences, Zion HealthShare provides family plans at $555-$804/month with no faith requirement and broader coverage including mental health and prescriptions.',
    },
    {
      question: 'What is the best health sharing plan for self-employed people?',
      answer:
        'Zion HealthShare is the best option for self-employed individuals due to its HSA compatibility, no faith requirement, and competitive pricing starting at $185/month. CrowdHealth ($140/month average) is an alternative for healthy self-employed individuals who want the lowest cost and month-to-month flexibility.',
    },
    {
      question: 'Which health sharing plan has the best coverage?',
      answer:
        'Zion HealthShare offers the broadest coverage among health sharing plans: telehealth, prescriptions, maternity, mental health, preventive care, emergency, and surgery — all with unlimited sharing and no pre-existing condition waiting period. The only plans with comparable breadth are Sedera and CrowdHealth, but neither has a PPO network.',
    },
    {
      question: 'How do we rate health sharing plans?',
      answer:
        'Plans are rated on 5 factors: Cost (30%), Coverage breadth (25%), Member satisfaction (20%), Pre-existing condition policies (15%), and Transparency (10%). Ratings are updated quarterly. All pricing and coverage data is verified directly from official plan websites.',
    },
  ]);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="section-narrow pt-8">
        <nav className="text-sm text-[var(--color-text-secondary)] mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/answers" className="hover:underline">Answers</Link>
          <span className="mx-2">/</span>
          <span>Best Health Sharing Plan</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">
          What Is the Best Health Sharing Plan in 2026?
        </h1>

        <p className="text-lg text-[var(--color-text-secondary)] mb-2">
          Zion HealthShare is the best overall health sharing plan for most people in 2026,
          rated 4.8/5. It costs $185-$268/month for individuals with no faith requirement,
          unlimited sharing cap, and a Cigna PPO network with 950,000+ providers. For
          Christian families, Medi-Share (4.5/5, $227-$405/month) offers the best family
          coverage with 400,000+ members and 30+ years of history. For budget-conscious
          members, CHM starts at $115/month with unlimited sharing.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mb-8">
          Last updated: February 2026 | All pricing verified from official plan websites
        </p>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-xl mb-3">Key Facts</h2>
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">Best Overall</td>
                <td className="py-2">Zion HealthShare (4.8/5, $185-$268/mo)</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">Best for Christian Families</td>
                <td className="py-2">Medi-Share (4.5/5, $681-$1,215/mo family)</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">Cheapest Plan</td>
                <td className="py-2">CHM ($115/mo individual)</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">Best Secular Option</td>
                <td className="py-2">Zion HealthShare or CrowdHealth</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">Best for Pre-Existing</td>
                <td className="py-2">Zion HealthShare (no waiting period)</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold pr-4">Plans Reviewed</td>
                <td className="py-2">{ministries.length} plans</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Why Is Zion HealthShare Rated #1?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Zion HealthShare earns the top rating because it combines the broadest coverage
            with competitive pricing and no faith requirement. It is the only major health
            sharing plan that covers pre-existing conditions from day one with no waiting
            period. Its Cigna PPO network provides access to 950,000+ providers with negotiated
            rates, reducing out-of-pocket costs. Coverage includes telehealth, prescriptions,
            maternity, mental health, preventive care, emergency, and surgery — more categories
            than any other health sharing plan.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            At $185-$268/month for individuals, Zion is not the cheapest option (CHM starts at
            $115/month), but the additional coverage — prescriptions, mental health, telehealth,
            and no pre-existing waiting period — justifies the price difference for most members.
            Zion is also HSA-compatible, providing additional tax benefits that effectively
            reduce the cost further. Founded in 2017, it is newer than CHM (1981) or Medi-Share
            (1992) but has grown to 50,000+ members.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            How Do All Plans Compare?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-3 font-semibold">Rank</th>
                  <th className="py-3 pr-3 font-semibold">Plan</th>
                  <th className="py-3 pr-3 font-semibold">Rating</th>
                  <th className="py-3 pr-3 font-semibold">Individual/mo</th>
                  <th className="py-3 pr-3 font-semibold">Faith Req.</th>
                  <th className="py-3 pr-3 font-semibold">Sharing Cap</th>
                  <th className="py-3 pr-3 font-semibold">Pre-Existing Wait</th>
                </tr>
              </thead>
              <tbody>
                {topRated.map((m, i) => (
                  <tr
                    key={m.slug}
                    className={`border-b border-[var(--color-border)] ${i === 0 ? 'bg-[var(--color-primary-lighter)]' : ''}`}
                  >
                    <td className="py-2 pr-3 font-semibold">#{i + 1}</td>
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
                      ${m.plans[0]?.monthlyRange?.individual?.min} - $
                      {m.plans[0]?.monthlyRange?.individual?.max}
                    </td>
                    <td className="py-2 pr-3 capitalize">
                      {m.faithRequirement === 'any-faith' || m.faithRequirement === 'secular'
                        ? 'None'
                        : m.faithRequirement.replace('-', ' ')}
                    </td>
                    <td className="py-2 pr-3">{m.plans[0]?.coverageCap}</td>
                    <td className="py-2 pr-3">{m.preExisting.waitingPeriod}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Which Plan Is Best for Families?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            For Christian families, Medi-Share offers the most established family coverage with
            400,000+ members and a 30+ year track record. Family plans cost $681-$1,215/month
            depending on the IUA level. Medi-Share covers maternity, telehealth, preventive
            care, emergency, and surgery. It requires a Christian statement of faith but not
            church attendance.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            For families without faith preferences, Zion HealthShare provides family plans at
            $555-$804/month with broader coverage than Medi-Share — including prescriptions and
            mental health. Zion also has no pre-existing condition waiting period, which matters
            for families with children who may have existing health needs. CHM offers the
            cheapest family option at $345-$792/month but requires strict Christian faith and
            church attendance, and does not cover telehealth, prescriptions, or mental health.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Which Plan Is Best for Self-Employed Individuals?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Self-employed individuals benefit most from Zion HealthShare due to its HSA
            compatibility and no faith requirement. Contributing to an HSA while on a Zion plan
            provides a triple tax benefit: tax-deductible contributions, tax-free growth, and
            tax-free withdrawals for medical expenses. At $185-$268/month, it saves $2,000-
            $5,000/year compared to unsubsidized ACA marketplace plans.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            CrowdHealth is another strong option for healthy self-employed individuals at
            approximately $140/month average for those under 55. It offers month-to-month
            flexibility with no contracts and strong bill negotiation services (30-60% discounts
            on planned procedures). However, CrowdHealth limits pre-existing condition sharing
            for the first two years, making it less suitable for anyone with existing health
            conditions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">The Bottom Line</h2>
          <div className="card">
            <p className="text-[var(--color-text)] mb-3">
              Zion HealthShare is the best health sharing plan for most people in 2026. It
              offers the broadest coverage, no faith requirement, unlimited sharing, HSA
              compatibility, and no pre-existing condition waiting period — all at
              $185-$268/month for individuals. The only reason to choose a different plan is if
              you want the lowest possible cost (CHM at $115/month), prefer a faith-based
              community (Medi-Share or Samaritan), or want a crowdfunding model (CrowdHealth).
            </p>
            <p className="text-[var(--color-text)]">
              Not sure which plan fits your situation? Use our{' '}
              <Link href="/quiz" className="text-[var(--color-primary)] hover:underline">
                free quiz
              </Link>{' '}
              to get a personalized recommendation in 2 minutes, or{' '}
              <Link href="/compare" className="text-[var(--color-primary)] hover:underline">
                compare all plans side-by-side
              </Link>.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Frequently Asked Questions</h2>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              How often do you update these rankings?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Rankings are updated quarterly. All pricing, coverage, and membership data is
              verified directly from official plan websites. Our rating methodology weighs
              Cost (30%), Coverage breadth (25%), Member satisfaction (20%), Pre-existing
              condition policies (15%), and Transparency (10%). The last full review was
              completed in February 2026.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Is Zion HealthShare good for older adults?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Zion HealthShare accepts members of all ages and does not have age-based pricing
              tiers beyond its standard range. For adults approaching Medicare eligibility (65+),
              health sharing can bridge the gap. However, if you have significant pre-existing
              conditions, compare the cost of Zion with ACA marketplace plans that offer
              subsidies. Zion&apos;s no-waiting-period policy for pre-existing conditions is a
              significant advantage for older adults.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Can I switch health sharing plans?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Yes. Health sharing plans are month-to-month with most ministries. You can cancel
              one plan and enroll in another at any time. There is no open enrollment period for
              health sharing. Note that if you switch plans, any pre-existing condition waiting
              period will restart with the new plan (except Zion HealthShare, which has no
              waiting period).
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Do you earn commissions from these recommendations?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Yes. WhichHealthShare earns affiliate commissions when you sign up through our
              links. You pay the same price whether you sign up directly or through us.
              Commission amounts do not affect our ratings or rankings. See our{' '}
              <Link href="/disclosure" className="text-[var(--color-primary)] hover:underline">
                disclosure page
              </Link>{' '}
              for full details on our affiliate relationships and editorial independence.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              What if I need dental and vision coverage?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              No health sharing plan includes dental or vision as standard coverage. The only
              option in our comparison that includes both is{' '}
              <Link
                href="/reviews/presidio-healthcare"
                className="text-[var(--color-primary)] hover:underline"
              >
                Presidio Healthcare
              </Link>{' '}
              ($300-$600/month), which is regulated insurance, not health sharing. For health
              sharing members, standalone dental and vision plans are available through
              providers like Delta Dental and VSP for $20-$50/month each.
            </p>
          </details>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/answers/cheapest-plan"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">Cheapest Health Sharing Plan</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read answer</span>
            </Link>
            <Link
              href="/answers/best-for-families"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">Best Plan for Families</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read answer</span>
            </Link>
            <Link
              href="/answers/non-religious-plans"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">Non-Religious Health Sharing Plans</span>
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
