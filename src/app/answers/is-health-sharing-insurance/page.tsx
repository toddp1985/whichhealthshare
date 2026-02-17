import { loadAllMinistries } from '@/lib/data';
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema';
import Link from 'next/link';
import AnswerPageCTA from '@/components/AnswerPageCTA';

export const metadata = {
  title: 'Is Health Sharing Insurance? Key Differences Explained (2026)',
  description:
    'No. Health sharing ministries are not insurance. They are exempt from ACA under Section 1402(d). No guaranteed coverage, no state regulation, but 30-60% lower costs. Full comparison.',
};

export default function IsHealthSharingInsurancePage() {
  const ministries = loadAllMinistries();

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Answers', url: '/answers' },
    { name: 'Is Health Sharing Insurance?', url: '/answers/is-health-sharing-insurance' },
  ]);

  const articleSchema = generateArticleSchema(
    'Is Health Sharing Insurance?',
    'No. Health sharing ministries are not insurance companies. They are exempt from ACA under Section 1402(d). Key differences: not regulated by state insurance departments, no guaranteed coverage, no mandated benefits.'
  );

  const faqSchema = generateFAQSchema([
    {
      question: 'Is health sharing considered insurance?',
      answer:
        'No. Health sharing ministries are not insurance companies. They are voluntary cost-sharing arrangements exempt from the Affordable Care Act under Section 1402(d). They are not regulated by state insurance departments and do not provide a contractual guarantee of coverage.',
    },
    {
      question: 'Does health sharing satisfy the ACA individual mandate?',
      answer:
        'Health sharing ministries that meet specific criteria under 26 USC 5000A(d)(2)(B)(ii) were recognized as qualifying coverage under the federal individual mandate. Since the federal penalty was reduced to $0 in 2019, this is largely moot. However, states with their own mandates (CA, MA, NJ, RI, DC, VT) may not accept health sharing as qualifying coverage.',
    },
    {
      question: 'What legal protections do health sharing members have?',
      answer:
        'Health sharing members do not have the same legal protections as insurance policyholders. There is no state insurance commissioner to file complaints with, no guaranteed claims payment, and no mandated appeals process. However, accredited ministries follow voluntary standards and most have internal dispute resolution processes.',
    },
    {
      question: 'Can a health sharing ministry deny sharing my medical bills?',
      answer:
        'Yes. Health sharing ministries can decline to share expenses that fall outside their published sharing guidelines. Common reasons include pre-existing conditions during the waiting period, excluded services (dental, vision), lifestyle-related conditions, or expenses that exceed the sharing cap. Each ministry publishes its guidelines publicly.',
    },
    {
      question: 'Why do people choose health sharing over insurance?',
      answer:
        'The primary reason is cost. Health sharing plans cost 30-60% less than comparable ACA marketplace insurance. Individual plans start at $115/month vs. $450-$700/month for unsubsidized ACA Silver plans. Other reasons include faith-based community, flexibility to choose any doctor, and no open enrollment periods.',
    },
  ]);

  const healthshareMinistries = ministries.filter((m) => m.type !== 'insurance');
  const insurancePlans = ministries.filter((m) => m.type === 'insurance');

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
          <span>Is Health Sharing Insurance?</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">Is Health Sharing Insurance?</h1>

        <p className="text-lg text-[var(--color-text-secondary)] mb-2">
          No. Health sharing ministries are not insurance companies. They are exempt from
          Affordable Care Act requirements under Section 1402(d) and are not regulated by
          state insurance departments. There is no contractual guarantee that medical expenses
          will be shared. However, established ministries have reliably shared billions in
          medical expenses, and many members report comparable coverage at 30-60% lower cost
          than ACA marketplace plans.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mb-8">
          Last updated: February 2026 | Data verified from official plan websites
        </p>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-xl mb-3">Key Facts</h2>
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">Legal Classification</td>
                <td className="py-2">501(c)(3) nonprofit, not insurance</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">ACA Exemption</td>
                <td className="py-2">Section 1402(d)</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">State Regulation</td>
                <td className="py-2">Not regulated by insurance departments</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">Guaranteed Payment</td>
                <td className="py-2">No — voluntary sharing model</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">Mandated Benefits</td>
                <td className="py-2">No — each ministry sets own guidelines</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="py-2 font-semibold pr-4">Cost vs Insurance</td>
                <td className="py-2">30-60% lower than ACA marketplace</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold pr-4">Track Record</td>
                <td className="py-2">40+ years (CHM founded 1981)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            What Are the Legal Differences Between Health Sharing and Insurance?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Insurance is a legally binding contract between you and an insurance company. The
            insurer is contractually obligated to pay covered claims according to the policy
            terms. Insurance companies are regulated by state departments of insurance, must
            maintain minimum financial reserves, and are subject to consumer protection laws.
            If an insurer wrongfully denies a claim, you can file a complaint with your state
            insurance commissioner or pursue legal action.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Health sharing is a voluntary arrangement between members. The ministry facilitates
            sharing but does not contractually guarantee that expenses will be paid. Health
            sharing ministries are organized as 501(c)(3) nonprofits and are exempt from
            insurance regulation. Members agree to sharing guidelines when they join, but these
            guidelines are not enforceable as insurance contracts. Every health sharing plan
            includes a disclaimer stating that sharing is voluntary and not insurance.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            How Do Health Sharing and Insurance Compare on Coverage?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-4 font-semibold">Feature</th>
                  <th className="py-3 pr-4 font-semibold">Health Sharing</th>
                  <th className="py-3 pr-4 font-semibold">ACA Insurance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Monthly Cost (Individual)</td>
                  <td className="py-2 pr-4">$115 - $495</td>
                  <td className="py-2 pr-4">$450 - $700 (unsubsidized)</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Payment Guarantee</td>
                  <td className="py-2 pr-4">No — voluntary sharing</td>
                  <td className="py-2 pr-4">Yes — contractual obligation</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">State Regulation</td>
                  <td className="py-2 pr-4">Not regulated</td>
                  <td className="py-2 pr-4">Fully regulated</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Pre-Existing Conditions</td>
                  <td className="py-2 pr-4">0-12 month waiting period</td>
                  <td className="py-2 pr-4">Covered from day one</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Essential Health Benefits</td>
                  <td className="py-2 pr-4">Not mandated</td>
                  <td className="py-2 pr-4">10 categories mandated</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Open Enrollment</td>
                  <td className="py-2 pr-4">Enroll anytime</td>
                  <td className="py-2 pr-4">Nov-Jan (special exceptions)</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Dental & Vision</td>
                  <td className="py-2 pr-4">Not included (most plans)</td>
                  <td className="py-2 pr-4">Pediatric dental required</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Mental Health</td>
                  <td className="py-2 pr-4">Some plans only</td>
                  <td className="py-2 pr-4">Required by law</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Subsidies Available</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">Yes — income-based</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            When Should You Choose Health Sharing Over Insurance?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Health sharing makes financial sense when you are generally healthy, do not qualify
            for ACA subsidies, and want lower monthly costs. A healthy 35-year-old earning
            $60,000 might pay $550/month for an unsubsidized ACA Silver plan or $215/month for
            Zion HealthShare — a savings of $4,020 per year. Over 5 years without major claims,
            that is $20,100 in savings.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Health sharing is not the right choice if you have significant pre-existing
            conditions requiring ongoing treatment, need guaranteed coverage by law (employer
            mandate in some states), want the regulatory protection of insurance, or qualify
            for substantial ACA subsidies that reduce your premium below health sharing costs.
            If you earn under 400% of the federal poverty level, check ACA subsidies first —
            they may make insurance cheaper than health sharing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            What Risks Come With Health Sharing vs Insurance?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            The primary risk is that sharing is voluntary. If a ministry experiences financial
            difficulty, member contributions may not cover all eligible expenses. No major
            ministry has failed to share eligible expenses to date, but the possibility exists.
            Additionally, health sharing plans can change their sharing guidelines at any time,
            potentially reducing what is shareable.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Another risk is the lack of regulatory oversight. If a ministry denies sharing for
            an expense you believe should be covered, your only recourse is the ministry&apos;s
            internal appeals process. There is no state insurance commissioner to intervene.
            For members who want regulatory protection with lower costs than traditional ACA
            plans, {' '}
            <Link
              href="/reviews/presidio-healthcare"
              className="text-[var(--color-primary)] hover:underline"
            >
              Presidio Healthcare
            </Link>{' '}
            offers regulated insurance starting at $300/month with pre-existing conditions
            covered from day one.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">The Bottom Line</h2>
          <div className="card">
            <p className="text-[var(--color-text)] mb-3">
              Health sharing is not insurance. It is a voluntary cost-sharing arrangement that
              operates outside of insurance regulation. Members save 30-60% on monthly costs
              compared to ACA marketplace plans. The tradeoff is the absence of a contractual
              guarantee that expenses will be shared and the lack of regulatory oversight.
            </p>
            <p className="text-[var(--color-text)]">
              For over 1.5 million Americans, that tradeoff is worthwhile. Established
              ministries have shared billions in medical expenses over 30-40 years without
              failing to cover eligible expenses. If you are healthy, do not qualify for ACA
              subsidies, and understand that sharing is voluntary, health sharing is a
              legitimate and cost-effective alternative to insurance.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Frequently Asked Questions</h2>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Does health sharing count as insurance for tax purposes?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Health sharing contributions are not treated the same as insurance premiums for
              tax purposes. Self-employed individuals may be able to deduct contributions
              under certain circumstances. The federal individual mandate penalty is $0 as of
              2019, so there is no federal tax penalty for having health sharing instead of
              insurance. State mandates in CA, MA, NJ, RI, DC, and VT may impose penalties
              for not having qualifying coverage.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Can a hospital refuse to treat me if I have health sharing instead of insurance?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Emergency rooms are required to treat all patients regardless of coverage under
              EMTALA (Emergency Medical Treatment and Labor Act). For non-emergency care,
              providers can choose whether to accept health sharing. Most providers accept
              health sharing members, especially when the plan uses a recognized network like
              Cigna PPO (Zion HealthShare). You may need to pay upfront and submit for
              sharing reimbursement with some providers.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Has any health sharing ministry ever gone bankrupt?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              No major accredited health sharing ministry has gone bankrupt. CHM has operated
              continuously since 1981, Medi-Share since 1992, and Samaritan Ministries since
              1994. Some smaller, unaccredited programs have had financial difficulties. This
              is why accreditation and track record matter when choosing a plan. We recommend
              choosing an established ministry with a minimum 5-year track record.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Do I still need insurance if I have health sharing?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              There is no federal requirement to have insurance (the penalty is $0 since 2019).
              Some states (CA, MA, NJ, RI, DC, VT) have their own mandates where health
              sharing may not count as qualifying coverage. In those states, you may owe a
              state tax penalty. Many health sharing members use their plan as their sole
              coverage. Others combine health sharing with supplemental insurance or an
              HSA-compatible plan.
            </p>
          </details>

          <details className="mb-4 card">
            <summary className="font-semibold cursor-pointer">
              Are there hybrid options that combine sharing and insurance?
            </summary>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Yes.{' '}
              <Link
                href="/reviews/presidio-healthcare"
                className="text-[var(--color-primary)] hover:underline"
              >
                Presidio Healthcare
              </Link>{' '}
              offers regulated insurance (not health sharing) starting at $300/month with
              pre-existing conditions covered from day one. It provides the regulatory
              protection of insurance at a lower cost than standard ACA marketplace plans.
              Some members also pair a health sharing plan with a short-term health insurance
              policy for additional protection.
            </p>
          </details>
        </section>

        <AnswerPageCTA />

        <section className="mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/answers/what-is-health-sharing"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">What Is Health Sharing?</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read answer</span>
            </Link>
            <Link
              href="/answers/vs-insurance"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">Health Sharing vs Insurance</span>
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
