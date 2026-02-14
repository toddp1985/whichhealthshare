import { loadAllMinistries } from '@/lib/data';
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema';
import Link from 'next/link';

export const metadata = {
  title: 'Cheapest Health Sharing Plan in 2026: CHM $115/mo vs CrowdHealth $140/mo',
  description:
    'CHM is the cheapest health sharing plan at $115/month (Christian required). CrowdHealth averages $140/month (secular). Zion starts at $185/month (no faith requirement). Full price comparison.',
};

export default function CheapestPlanPage() {
  const ministries = loadAllMinistries();
  const byPrice = [...ministries]
    .filter((m) => m.plans[0]?.monthlyRange?.individual)
    .sort(
      (a, b) =>
        (a.plans[0]?.monthlyRange?.individual?.min ?? 0) -
        (b.plans[0]?.monthlyRange?.individual?.min ?? 0)
    );

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Answers', url: '/answers' },
    { name: 'Cheapest Health Sharing Plan', url: '/answers/cheapest-plan' },
  ]);

  const articleSchema = generateArticleSchema(
    'What Is the Cheapest Health Sharing Plan in 2026?',
    'CHM (Christian Healthcare Ministries) is the cheapest health sharing plan starting at $115/month for individuals. CrowdHealth averages $140/month (secular). Zion starts at $185/month (no faith requirement).'
  );

  const faqSchema = generateFAQSchema([
    {
      question: 'What is the cheapest health sharing plan?',
      answer:
        'CHM (Christian Healthcare Ministries) is the cheapest health sharing plan, starting at $115/month for individuals. It requires a strict Christian statement of faith and church attendance. CrowdHealth averages $140/month for members under 55 and has no faith requirement. Zion HealthShare starts at $185/month with no faith requirement and broader coverage.',
    },
    {
      question: 'What is the cheapest health sharing plan with no faith requirement?',
      answer:
        'CrowdHealth is the cheapest option with no faith requirement, averaging $140/month for individuals under 55 ($60 advocacy fee + approximately $80 crowdfunding). Zion HealthShare starts at $185/month and offers broader coverage including a Cigna PPO network and no pre-existing condition waiting period. Sedera starts at $199/month.',
    },
    {
      question: 'What is the cheapest health sharing plan for families?',
      answer:
        'CHM is the cheapest family option at $345-$792/month. Zion HealthShare offers family plans at $555-$804/month with broader coverage and no faith requirement. Medi-Share family plans cost $681-$1,215/month. CrowdHealth does not offer a separate family pricing tier.',
    },
    {
      question: 'Why is CHM so much cheaper than other plans?',
      answer:
        'CHM is cheaper because it excludes telehealth, prescriptions, and mental health coverage. It also requires strict Christian faith and church attendance, which limits the member pool to a lower-risk demographic. CHM has been operating since 1981 and has 300,000+ members, giving it economies of scale. The tradeoff is narrower coverage compared to plans like Zion HealthShare.',
    },
    {
      question: 'Is the cheapest health sharing plan the best value?',
      answer:
        'Not necessarily. CHM at $115/month excludes telehealth, prescriptions, and mental health. Zion HealthShare at $185/month covers all three plus has no pre-existing condition waiting period and a PPO network. The $70/month difference ($840/year) buys significantly broader coverage. For most people, Zion offers better overall value despite the higher monthly cost.',
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
          <span>Cheapest Health Sharing Plan</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">
          What Is the Cheapest Health Sharing Plan in 2026?
        </h1>

        <p className="text-lg text-[var(--color-text-secondary)] mb-2">
          CHM (Christian Healthcare Ministries) is the cheapest health sharing plan, starting
          at $115/month for individuals. It requires a strict Christian statement of faith and
          church attendance. CrowdHealth averages $140/month for members under 55 with no faith
          requirement but uses a crowdfunding model with variable costs. Zion HealthShare starts
          at $185/month with no faith requirement, a Cigna PPO network, and the broadest
          coverage of any health sharing plan.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mb-8">
          Last updated: February 2026 | All pricing verified from official plan websites
        </p>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-xl mb-3">Key Facts</h2>
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">Cheapest Overall</td>
                <td className="py-2">CHM at $115/month (Christian required)</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">Cheapest Secular</td>
                <td className="py-2">CrowdHealth at ~$140/month average</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">Cheapest No-Faith</td>
                <td className="py-2">Zion HealthShare at $185/month</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">Cheapest Family</td>
                <td className="py-2">CHM at $345/month (Christian required)</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">Best Value Overall</td>
                <td className="py-2">Zion HealthShare ($185/mo, broadest coverage)</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold pr-4">ACA Marketplace Avg</td>
                <td className="py-2">$450-$700/month (unsubsidized Silver)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            How Do Plans Compare on Price?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-3 font-semibold">Rank</th>
                  <th className="py-3 pr-3 font-semibold">Plan</th>
                  <th className="py-3 pr-3 font-semibold">Individual/mo</th>
                  <th className="py-3 pr-3 font-semibold">Family/mo</th>
                  <th className="py-3 pr-3 font-semibold">Faith Req.</th>
                  <th className="py-3 pr-3 font-semibold">Rating</th>
                  <th className="py-3 pr-3 font-semibold">Key Exclusion</th>
                </tr>
              </thead>
              <tbody>
                {byPrice.map((m, i) => (
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
                    <td className="py-2 pr-3">
                      ${m.plans[0]?.monthlyRange?.individual?.min} - $
                      {m.plans[0]?.monthlyRange?.individual?.max}
                    </td>
                    <td className="py-2 pr-3">
                      {m.plans[0]?.monthlyRange?.family
                        ? `$${m.plans[0].monthlyRange.family.min} - $${m.plans[0].monthlyRange.family.max}`
                        : 'Individual only'}
                    </td>
                    <td className="py-2 pr-3 capitalize">
                      {m.faithRequirement === 'any-faith' || m.faithRequirement === 'secular'
                        ? 'None'
                        : m.faithRequirement.replace('-', ' ')}
                    </td>
                    <td className="py-2 pr-3">{m.rating}/5</td>
                    <td className="py-2 pr-3 text-xs">
                      {!m.plans[0]?.includes?.prescriptions && !m.plans[0]?.includes?.mentalHealth
                        ? 'No Rx, no mental health'
                        : !m.plans[0]?.includes?.prescriptions
                          ? 'No prescriptions'
                          : !m.plans[0]?.includes?.mentalHealth
                            ? 'No mental health'
                            : 'Full coverage'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)] mt-2">
            Prices reflect lowest available individual tier. Actual cost depends on age, IUA
            selection, and family size.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Why Is CHM the Cheapest Plan?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            CHM keeps costs low through three factors. First, it excludes telehealth,
            prescription drugs, and mental health coverage from its sharing guidelines —
            services that other plans include at higher monthly costs. Second, it requires
            strict Christian faith and church attendance, which self-selects a member pool that
            tends toward lower-risk health profiles. Third, CHM has operated since 1981 with
            300,000+ members, giving it scale efficiencies that newer plans cannot match.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            The $115/month entry price comes with a $300 IUA (lowest in the industry) and
            unlimited sharing cap. CHM allows any doctor with no network restrictions. It
            covers maternity, preventive care, emergency, and surgery. For members who rarely
            use prescriptions, telehealth, or mental health services, CHM offers substantial
            savings. Over a year, CHM costs $1,380 compared to $2,220 for Zion HealthShare
            ($185/month) — a savings of $840 annually.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            What Is the Cheapest Plan Without a Faith Requirement?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            CrowdHealth is the cheapest secular option at approximately $140/month average for
            members under 55. This breaks down into a $60/month fixed advocacy fee plus
            approximately $80/month in crowdfunding contributions. CrowdHealth uses a
            peer-to-peer crowdfunding model where members fund each other&apos;s medical bills
            directly. It has no faith requirement, no coverage caps, and allows any doctor.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            The tradeoff with CrowdHealth is that crowdfunding is voluntary — there is no
            guarantee that your bill will be fully funded (though 99% of approved bills have
            been funded to date). Pre-existing conditions are not eligible for sharing in the
            first year, with phased increases in years 2-4. CrowdHealth is best for healthy
            individuals under 55 who want the lowest cost and are comfortable with a
            crowdfunding model. For a more traditional health sharing experience without faith
            requirements, Zion HealthShare starts at $185/month with a PPO network and
            guaranteed sharing guidelines.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Is the Cheapest Plan the Best Value?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Not for most people. The $70/month difference between CHM ($115) and Zion
            HealthShare ($185) buys prescription coverage, mental health coverage, telehealth,
            no pre-existing condition waiting period, and a Cigna PPO network with 950,000+
            providers. That is $840/year for significantly broader protection. A single
            prescription costing $50/month would erase the entire savings from choosing CHM.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            CHM is the best value specifically for healthy Christians who do not take regular
            prescriptions, do not need mental health services, and are comfortable with a strict
            faith requirement. For everyone else, Zion HealthShare offers better coverage per
            dollar. The annual cost comparison: CHM saves $840/year on contributions but
            excludes coverage that could cost thousands out of pocket if needed.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">The Bottom Line</h2>
          <div className="card">
            <p className="text-[var(--color-text)] mb-3">
              CHM is the cheapest health sharing plan at $115/month, but it requires strict
              Christian faith and excludes prescriptions, telehealth, and mental health.
              CrowdHealth averages $140/month with no faith requirement but uses a less
              predictable crowdfunding model. Zion HealthShare at $185/month offers the best
              overall value with the broadest coverage and no restrictions.
            </p>
            <p className="text-[var(--color-text)]">
              All health sharing plans are significantly cheaper than ACA marketplace insurance
              ($450-$700/month for unsubsidized Silver plans). Choose based on your faith
              preferences, coverage needs, and monthly budget. Use our{' '}
              <Link href="/quiz" className="text-[var(--color-primary)] hover:underline">
                free quiz
              </Link>{' '}
              to find the cheapest plan that matches your specific needs.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Frequently Asked Questions</h2>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Can I lower my monthly cost by choosing a higher IUA?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Yes. Choosing a higher IUA (deductible equivalent) reduces your monthly
              contributions. For example, with Zion HealthShare, moving from a $500 IUA to a
              $2,000 IUA can save $50-$80/month. The tradeoff is higher out-of-pocket costs
              when you have a medical expense. A $2,000 IUA makes sense if you are healthy and
              rarely visit the doctor. A $500 IUA provides more predictable costs if you
              anticipate medical expenses.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Are there hidden fees with health sharing plans?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Most health sharing plans have transparent pricing with no hidden fees. Your
              monthly contribution is the primary cost plus your IUA when you have a medical
              expense. Some plans charge a one-time enrollment fee ($50-$150). CrowdHealth
              separates its pricing into a $60/month advocacy fee plus variable crowdfunding
              costs. Always review the full fee schedule before enrolling — each plan publishes
              this on their website.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              How much can I save per year compared to insurance?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Annual savings depend on your current insurance cost. A single adult paying $550/month
              for an unsubsidized ACA Silver plan would save: $5,220/year switching to CHM
              ($115/month), $4,920/year with CrowdHealth ($140/month), or $4,380/year with Zion
              HealthShare ($185/month). Over 5 years, that is $21,900-$26,100 in savings. These
              savings are reduced if you have significant medical expenses that health sharing
              does not cover.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Do cheaper plans have lower sharing caps?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              No. CHM, the cheapest plan, offers unlimited sharing — the same cap as Zion
              HealthShare and Samaritan Ministries. The main exception is Medi-Share, which caps
              sharing at $250,000 despite costing more than several unlimited plans. CrowdHealth
              also has no per-event cap. Sharing caps are not correlated with monthly cost in
              health sharing.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Should I choose the cheapest plan if I am young and healthy?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              If you are young, healthy, and meet the faith requirement, CHM at $115/month is a
              reasonable choice. If you do not meet the faith requirement, CrowdHealth at
              $140/month is a strong option for healthy individuals under 55. However, consider
              that unexpected medical events happen — and broader coverage (Zion at $185/month)
              provides protection for prescriptions, mental health, and pre-existing conditions
              that may develop. The $70/month difference is insurance against the unexpected.
            </p>
          </details>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/answers/best-health-sharing-plan"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">Best Health Sharing Plan in 2026</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read answer</span>
            </Link>
            <Link
              href="/answers/cost"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">How Much Does Health Sharing Cost?</span>
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
