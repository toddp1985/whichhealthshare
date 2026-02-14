import { loadAllMinistries } from '@/lib/data';
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema';
import Link from 'next/link';

export const metadata = {
  title: 'What Is Health Sharing? Definition, Cost & How It Works (2026)',
  description:
    'Health sharing is a voluntary, community-based alternative to health insurance where 1.5M+ Americans share medical expenses. Monthly costs range $115-$495. Learn how it works.',
};

export default function WhatIsHealthSharingPage() {
  const ministries = loadAllMinistries();

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Answers', url: '/answers' },
    { name: 'What Is Health Sharing?', url: '/answers/what-is-health-sharing' },
  ]);

  const articleSchema = generateArticleSchema(
    'What Is Health Sharing?',
    'Health sharing is a voluntary, community-based alternative to health insurance where members share each other\'s medical expenses. There are 1.5M+ Americans in health sharing programs.'
  );

  const faqSchema = generateFAQSchema([
    {
      question: 'What is health sharing?',
      answer:
        'Health sharing is a voluntary, community-based alternative to health insurance where members pool monthly contributions to share each other\'s medical expenses. Over 1.5 million Americans participate in health sharing programs, with monthly costs ranging from $115 to $495 depending on plan and family size.',
    },
    {
      question: 'Is health sharing the same as health insurance?',
      answer:
        'No. Health sharing ministries are not insurance companies. They are exempt from ACA regulations under Section 1402(d). Sharing is voluntary and not guaranteed, but monthly costs are typically 30-60% lower than comparable insurance premiums.',
    },
    {
      question: 'How much does health sharing cost per month?',
      answer:
        'Individual health sharing plans start at $115/month (CHM) and go up to $495/month (Samaritan Ministries). Family plans range from $345/month to $1,485/month. The average individual pays $185-$268/month with Zion HealthShare, the top-rated plan.',
    },
    {
      question: 'Do health sharing plans cover pre-existing conditions?',
      answer:
        'Most health sharing plans accept members with pre-existing conditions but impose waiting periods of 6-12 months before those conditions become shareable. Zion HealthShare is the exception with no waiting period for pre-existing conditions.',
    },
    {
      question: 'Who qualifies for health sharing?',
      answer:
        'Qualification depends on the plan. Some require a Christian statement of faith (CHM, Samaritan Ministries, Medi-Share). Others like Zion HealthShare and Sedera accept members of any faith or no faith. Most plans require members to be non-tobacco users and maintain a healthy lifestyle.',
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
          <span>What Is Health Sharing?</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">What Is Health Sharing?</h1>

        <p className="text-lg text-[var(--color-text-secondary)] mb-2">
          Health sharing is a voluntary, community-based alternative to health insurance where
          members share each other&apos;s medical expenses. Over 1.5 million Americans currently
          participate in health sharing programs. Monthly costs range from $115 to $495 for
          individuals, depending on the plan and family size — typically 30-60% less than
          comparable ACA marketplace insurance.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mb-8">
          Last updated: February 2026 | Data verified from official plan websites
        </p>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-xl mb-3">Key Facts</h2>
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">Total U.S. Members</td>
                <td className="py-2">1.5 million+</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">Individual Cost Range</td>
                <td className="py-2">$115 - $495/month</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">Family Cost Range</td>
                <td className="py-2">$345 - $1,485/month</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">IUA (Deductible Equivalent)</td>
                <td className="py-2">$300 - $5,000</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">Active Ministries</td>
                <td className="py-2">7+ major plans reviewed</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">Legal Basis</td>
                <td className="py-2">ACA Section 1402(d) exemption</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold pr-4">Regulated as Insurance?</td>
                <td className="py-2">No — voluntary sharing, not insurance</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            How Is Health Sharing Different From Insurance?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Health sharing ministries are not insurance companies. They are organized under
            IRS Section 501(c)(3) as nonprofit organizations and exempt from Affordable Care Act
            requirements under Section 1402(d). Members voluntarily contribute monthly amounts
            that are used to share other members&apos; eligible medical expenses. There is no
            legally binding guarantee that expenses will be paid — sharing depends on member
            contributions and program guidelines.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Insurance companies are regulated by state departments of insurance, must meet
            minimum coverage standards, and are contractually obligated to pay covered claims.
            Health sharing ministries set their own guidelines for what is shareable, may exclude
            pre-existing conditions for a waiting period, and are not subject to state insurance
            regulations. In practice, established ministries like CHM (founded 1981) and
            Medi-Share (founded 1992) have reliably shared member expenses for decades.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Who Uses Health Sharing?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            The 1.5 million Americans in health sharing programs are primarily self-employed
            individuals, freelancers, small business owners, early retirees (pre-Medicare), and
            families seeking lower monthly costs than ACA marketplace plans. Some members are
            motivated by faith-based community values. Others choose health sharing purely for
            cost savings — secular options like Zion HealthShare and Sedera require no religious
            affiliation.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Health sharing is most cost-effective for generally healthy individuals and families
            who do not have chronic conditions requiring ongoing treatment. Members with
            pre-existing conditions can join most plans but may face 6-12 month waiting periods
            before those conditions are shareable. Zion HealthShare is the only major plan that
            covers pre-existing conditions from day one with no waiting period.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            What Does Health Sharing Cover?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Coverage varies by plan, but most health sharing ministries share expenses for
            doctor visits, emergency room visits, surgery, hospitalization, and maternity care.
            Some plans include telehealth, prescription drugs, mental health, and preventive
            care. No health sharing plan currently covers dental or vision as a standard benefit
            (Presidio Healthcare, a regulated insurance product, is the exception).
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Each member has an Initial Unshareable Amount (IUA), which functions like a
            deductible. IUAs range from $300 (CHM) to $5,000 depending on the plan and tier.
            After meeting the IUA, eligible expenses are shared by the community, typically at
            80-100% of the remaining cost. Processing time for shared expenses ranges from 30 to
            90 days depending on the ministry.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            How Much Does Health Sharing Cost Compared to Insurance?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-4 font-semibold">Plan</th>
                  <th className="py-3 pr-4 font-semibold">Type</th>
                  <th className="py-3 pr-4 font-semibold">Individual/mo</th>
                  <th className="py-3 pr-4 font-semibold">Family/mo</th>
                  <th className="py-3 pr-4 font-semibold">Rating</th>
                </tr>
              </thead>
              <tbody>
                {ministries.map((m) => (
                  <tr key={m.slug} className="border-b border-[var(--color-border)]">
                    <td className="py-2 pr-4">
                      <Link
                        href={`/reviews/${m.slug}`}
                        className="text-[var(--color-primary)] hover:underline"
                      >
                        {m.name}
                      </Link>
                    </td>
                    <td className="py-2 pr-4 capitalize">{m.type}</td>
                    <td className="py-2 pr-4">
                      ${m.plans[0]?.monthlyRange?.individual?.min} - $
                      {m.plans[0]?.monthlyRange?.individual?.max}
                    </td>
                    <td className="py-2 pr-4">
                      {m.plans[0]?.monthlyRange?.family
                        ? `$${m.plans[0].monthlyRange.family.min} - $${m.plans[0].monthlyRange.family.max}`
                        : 'N/A'}
                    </td>
                    <td className="py-2 pr-4">{m.rating}/5</td>
                  </tr>
                ))}
                <tr className="border-b border-[var(--color-border)] bg-[var(--color-primary-lighter)]">
                  <td className="py-2 pr-4 font-semibold">ACA Marketplace (avg)</td>
                  <td className="py-2 pr-4">Insurance</td>
                  <td className="py-2 pr-4">$450 - $700</td>
                  <td className="py-2 pr-4">$1,200 - $2,000</td>
                  <td className="py-2 pr-4">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)] mt-2">
            ACA marketplace average based on HealthCare.gov 2026 data for unsubsidized Silver plans.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">The Bottom Line</h2>
          <div className="card">
            <p className="text-[var(--color-text)] mb-3">
              Health sharing is a legitimate alternative to health insurance used by over
              1.5 million Americans. It costs 30-60% less than comparable ACA plans, with
              individual rates starting at $115/month. It is not insurance — there is no
              contractual guarantee of payment — but established ministries have reliably
              shared billions in medical expenses over 30+ years.
            </p>
            <p className="text-[var(--color-text)]">
              Health sharing works best for generally healthy individuals and families who want
              lower monthly costs and are comfortable with a voluntary sharing model. If you
              need guaranteed coverage or have significant pre-existing conditions, consider
              ACA marketplace insurance or{' '}
              <Link href="/reviews/presidio-healthcare" className="text-[var(--color-primary)] hover:underline">
                Presidio Healthcare
              </Link>{' '}
              (regulated insurance starting at $300/month).
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Frequently Asked Questions</h2>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Is health sharing legal?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Yes. Health sharing ministries are legal in all 50 states. They are recognized
              under ACA Section 1402(d) and operate as 501(c)(3) nonprofit organizations. As
              of 2019, there is no federal tax penalty for not having traditional insurance,
              though some states (CA, MA, NJ, RI, DC, VT) have individual mandates where
              health sharing may not qualify as coverage.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Can I use any doctor with health sharing?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Most plans allow any doctor. CHM, Medi-Share, Samaritan Ministries, and Sedera
              have no network restrictions. Zion HealthShare offers a Cigna PPO network with
              950,000+ providers but also allows out-of-network care. Using in-network providers
              typically results in lower costs due to negotiated rates.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Do I need to be religious to join health sharing?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Not necessarily. Zion HealthShare, Sedera, and CrowdHealth have no faith
              requirement. Medi-Share requires a Christian statement of faith but not church
              attendance. CHM and Samaritan Ministries require both a Christian statement of
              faith and regular church attendance.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              What happens if my expenses are not shared?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              If an expense does not meet the plan&apos;s sharing guidelines, you are
              responsible for the full cost. Common exclusions include pre-existing conditions
              during the waiting period, dental and vision care, and lifestyle-related
              conditions. Each plan publishes its sharing guidelines, which specify exactly what
              is and is not eligible for sharing.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Can I have health sharing and insurance at the same time?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Yes. Some members use health sharing as their primary coverage and maintain a
              supplemental insurance policy for specific needs. Others use health sharing
              alongside an HSA-compatible plan (Zion HealthShare is HSA-compatible) to cover
              routine expenses while maintaining catastrophic protection.
            </p>
          </details>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/answers/how-health-sharing-works"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">How Does Health Sharing Work?</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read answer</span>
            </Link>
            <Link
              href="/answers/is-health-sharing-insurance"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">Is Health Sharing Insurance?</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read answer</span>
            </Link>
            <Link
              href="/answers/best-health-sharing-plan"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">Best Health Sharing Plan in 2026</span>
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
