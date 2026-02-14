import { loadAllMinistries } from '@/lib/data';
import { generateBreadcrumb, generateArticleSchema } from '@/lib/schema';
import Link from 'next/link';

export const metadata = {
  title: '5 Questions to Ask Before Joining Health Sharing — WhichHealthShare',
  description:
    'Before joining a health sharing plan, ask these 5 critical questions about pre-existing conditions, coverage gaps, costs, faith requirements, and legal protections.',
  openGraph: {
    title: '5 Questions to Ask Before Joining a Health Sharing Plan',
    description:
      'Pre-existing waiting periods, coverage gaps, hidden fees, faith requirements, and legal risks. Ask these 5 questions before you sign up.',
  },
};

export default function FiveQuestionsPage() {
  const ministries = loadAllMinistries();

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: '5 Questions Before Joining', url: '/blog/5-questions-before-joining' },
  ]);

  const articleSchema = generateArticleSchema(
    '5 Questions to Ask Before Joining a Health Sharing Plan',
    'Before joining a health sharing ministry, ask these 5 critical questions about pre-existing conditions, coverage gaps, hidden costs, faith requirements, and legal protections. Includes plan-by-plan comparison data.'
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
          <span>5 Questions Before Joining</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">
          5 Questions to Ask Before Joining a Health Sharing Plan
        </h1>
        <div className="text-sm text-[var(--color-text-muted)] mb-2">
          February 12, 2026 &middot; 10 min read
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] mb-8">
          Last updated: February 2026 | All data verified from official plan guidelines
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Health sharing can save you $3,000&ndash;$12,000 per year compared to ACA marketplace
          insurance. But it is not insurance, and joining the wrong plan can cost you more than
          it saves. Before you sign up, ask these 5 questions to avoid costly surprises.
        </p>
        <p className="leading-relaxed mb-8">
          Each question below includes a plan-by-plan comparison so you can see exactly how the
          major ministries stack up on the issues that matter most.
        </p>

        {/* Table of Contents */}
        <nav className="card p-6 mb-10">
          <h2 className="font-serif font-bold text-lg mb-3">Table of Contents</h2>
          <ol className="list-decimal list-inside space-y-1 text-[var(--color-text-secondary)]">
            <li><a href="#question-1" className="hover:underline">What Happens With My Pre-Existing Conditions?</a></li>
            <li><a href="#question-2" className="hover:underline">What Is NOT Covered (and How Much Will That Cost Me)?</a></li>
            <li><a href="#question-3" className="hover:underline">What Is the Total Annual Cost, Not Just Monthly?</a></li>
            <li><a href="#question-4" className="hover:underline">Do I Need to Be Religious to Join?</a></li>
            <li><a href="#question-5" className="hover:underline">What Legal Protections Do I Have?</a></li>
            <li><a href="#checklist" className="hover:underline">Your Pre-Joining Checklist</a></li>
            <li><a href="#bottom-line" className="hover:underline">The Bottom Line</a></li>
          </ol>
        </nav>

        {/* Question 1 */}
        <section id="question-1" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Question 1: What Happens With My Pre-Existing Conditions?
          </h2>
          <p className="leading-relaxed mb-4">
            This is the single most important question to ask, and the answer varies dramatically
            by plan. A pre-existing condition is any health issue you had before joining &mdash;
            diabetes, hypertension, asthma, anxiety, a previous surgery, even a past injury.
            Most health sharing plans impose a waiting period of 6 to 12 months during which
            expenses related to pre-existing conditions are partially or fully excluded.
          </p>
          <p className="leading-relaxed mb-4">
            During the waiting period, you pay 100% of those costs out of pocket, on top of your
            monthly contribution. For someone managing diabetes, that could mean $4,000&ndash;$8,000
            in uncovered expenses during year one.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-4 font-semibold">Plan</th>
                  <th className="py-3 pr-4 font-semibold">Waiting Period</th>
                  <th className="py-3 pr-4 font-semibold">Year 1 Sharing</th>
                  <th className="py-3 pr-4 font-semibold">Full Eligibility</th>
                </tr>
              </thead>
              <tbody>
                {ministries
                  .filter((m) => m.preExisting)
                  .sort((a, b) => {
                    if (a.preExisting.waitingPeriod === 'None') return -1;
                    if (b.preExisting.waitingPeriod === 'None') return 1;
                    return 0;
                  })
                  .slice(0, 8)
                  .map((m) => (
                    <tr key={m.slug} className="border-b border-[var(--color-border)]">
                      <td className="py-2 pr-4">
                        <Link href={`/reviews/${m.slug}`} className="text-[var(--color-primary)] hover:underline">
                          {m.name}
                        </Link>
                      </td>
                      <td className="py-2 pr-4">{m.preExisting.waitingPeriod}</td>
                      <td className="py-2 pr-4">{m.preExisting.sharingLimits}</td>
                      <td className="py-2 pr-4">
                        {m.preExisting.waitingPeriod === 'None'
                          ? 'Month 1'
                          : m.preExisting.waitingPeriod.includes('12')
                          ? 'Year 2+'
                          : m.preExisting.waitingPeriod.includes('6')
                          ? 'Month 7'
                          : 'Varies'}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[var(--color-primary-lighter)] p-4 rounded-lg mb-4">
            <p className="font-semibold mb-1">What to do:</p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Make a list of every health condition you currently have or have had treatment for
              in the past 3 years. Call the plan directly and ask: &ldquo;Will these conditions
              be shareable from day one, and if not, what is the waiting period and sharing
              percentage during the wait?&rdquo; If you have pre-existing conditions,{' '}
              <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">
                Zion HealthShare
              </Link>{' '}
              (no waiting period) should be your starting point.
            </p>
          </div>
        </section>

        {/* Question 2 */}
        <section id="question-2" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Question 2: What Is NOT Covered (and How Much Will That Cost Me)?
          </h2>
          <p className="leading-relaxed mb-4">
            Health sharing plans are not required to cover the ACA&apos;s 10 essential health
            benefits. Common exclusions include prescription drugs, mental health services,
            telehealth, dental, and vision. If you use any of these services regularly, the
            exclusion can add thousands to your annual costs.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-4 font-semibold">Service</th>
                  <th className="py-3 pr-4 font-semibold">Zion</th>
                  <th className="py-3 pr-4 font-semibold">CHM</th>
                  <th className="py-3 pr-4 font-semibold">Medi-Share</th>
                  <th className="py-3 pr-4 font-semibold">Sedera</th>
                  <th className="py-3 pr-4 font-semibold">CrowdHealth</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Prescriptions</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2 pr-4">Yes</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Mental Health</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2 pr-4">Yes</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Telehealth</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2 pr-4">Yes</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4 font-semibold">Dental</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">No</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Vision</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">No</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-[var(--color-primary-lighter)] p-4 rounded-lg mb-4">
            <p className="font-semibold mb-1">What to do:</p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Add up what you currently spend on prescriptions, therapy, dental, and vision each
              year. If the plan does not cover those services, add that cost to your monthly
              contribution to get the real annual price. Read our{' '}
              <Link href="/answers/prescription-coverage" className="text-[var(--color-primary)] hover:underline">
                prescription coverage guide
              </Link>{' '}
              and{' '}
              <Link href="/blog/hidden-costs-health-sharing-2026" className="text-[var(--color-primary)] hover:underline">
                hidden costs article
              </Link>{' '}
              for detailed breakdowns.
            </p>
          </div>
        </section>

        {/* Question 3 */}
        <section id="question-3" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Question 3: What Is the Total Annual Cost, Not Just Monthly?
          </h2>
          <p className="leading-relaxed mb-4">
            The advertised monthly contribution is only one part of your total cost. To get the
            real number, you need to factor in the IUA (deductible equivalent), co-shares,
            uncovered services, and pre-existing condition gaps. Here is a realistic annual cost
            breakdown for an individual with moderate health needs (2 medical events, 1 ongoing
            prescription):
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-4 font-semibold">Cost Component</th>
                  <th className="py-3 pr-4 font-semibold">Zion</th>
                  <th className="py-3 pr-4 font-semibold">CHM</th>
                  <th className="py-3 pr-4 font-semibold">Medi-Share</th>
                  <th className="py-3 pr-4 font-semibold">CrowdHealth</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">Monthly x 12</td>
                  <td className="py-2 pr-4">$2,220</td>
                  <td className="py-2 pr-4">$1,380</td>
                  <td className="py-2 pr-4">$2,724</td>
                  <td className="py-2 pr-4">$1,680</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">IUA (2 events, $500 each)</td>
                  <td className="py-2 pr-4">$1,000</td>
                  <td className="py-2 pr-4">$600</td>
                  <td className="py-2 pr-4">$1,000</td>
                  <td className="py-2 pr-4">$1,000</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">Rx ($150/mo, not shared)</td>
                  <td className="py-2 pr-4">$0</td>
                  <td className="py-2 pr-4">$1,800</td>
                  <td className="py-2 pr-4">$1,800</td>
                  <td className="py-2 pr-4">$0</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">Co-share (10&ndash;20%)</td>
                  <td className="py-2 pr-4">$1,400</td>
                  <td className="py-2 pr-4">$2,880</td>
                  <td className="py-2 pr-4">$2,800</td>
                  <td className="py-2 pr-4">$0</td>
                </tr>
                <tr className="border-b-2 border-[var(--color-border)] font-bold">
                  <td className="py-2 pr-4">Total Annual</td>
                  <td className="py-2 pr-4">$4,620</td>
                  <td className="py-2 pr-4">$6,660</td>
                  <td className="py-2 pr-4">$8,324</td>
                  <td className="py-2 pr-4">$2,680</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed mb-4">
            Notice that CHM&apos;s $115/month advertised cost becomes $6,660/year when hidden
            costs are included &mdash; more than double what the monthly rate alone suggests. The
            cheapest monthly cost does not always mean the cheapest total cost. CrowdHealth looks
            cheapest in this scenario, but remember: crowdfunding is not guaranteed, and
            pre-existing conditions are not covered for the first year.
          </p>
          <div className="bg-[var(--color-primary-lighter)] p-4 rounded-lg mb-4">
            <p className="font-semibold mb-1">What to do:</p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Build your own annual cost estimate: (monthly contribution x 12) + (IUA x expected
              medical events) + (uncovered prescriptions) + (co-share on expected bills). Compare
              this to unsubsidized ACA marketplace rates in your area using{' '}
              <a href="https://www.healthcare.gov" className="text-[var(--color-primary)] hover:underline" target="_blank" rel="noopener noreferrer">
                HealthCare.gov
              </a>.
            </p>
          </div>
        </section>

        {/* Question 4 */}
        <section id="question-4" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Question 4: Do I Need to Be Religious to Join?
          </h2>
          <p className="leading-relaxed mb-4">
            Health sharing started as a faith-based movement, and several of the largest plans
            still require a specific religious commitment. This ranges from a simple checkbox to
            mandatory church attendance verification. If you are not religious, your options are
            limited but viable.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-border)]">
                  <th className="py-3 pr-4 font-semibold">Plan</th>
                  <th className="py-3 pr-4 font-semibold">Faith Requirement</th>
                  <th className="py-3 pr-4 font-semibold">Church Attendance</th>
                  <th className="py-3 pr-4 font-semibold">What It Means</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)] bg-green-50 dark:bg-green-950/20">
                  <td className="py-2 pr-4">
                    <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">Zion HealthShare</Link>
                  </td>
                  <td className="py-2 pr-4">None</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">Open to all, no religious component</td>
                </tr>
                <tr className="border-b border-[var(--color-border)] bg-green-50 dark:bg-green-950/20">
                  <td className="py-2 pr-4">
                    <Link href="/reviews/sedera" className="text-[var(--color-primary)] hover:underline">Sedera</Link>
                  </td>
                  <td className="py-2 pr-4">None</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">Explicitly secular</td>
                </tr>
                <tr className="border-b border-[var(--color-border)] bg-green-50 dark:bg-green-950/20">
                  <td className="py-2 pr-4">
                    <Link href="/reviews/crowdhealth" className="text-[var(--color-primary)] hover:underline">CrowdHealth</Link>
                  </td>
                  <td className="py-2 pr-4">None</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">Secular crowdfunding platform</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">
                    <Link href="/reviews/medi-share" className="text-[var(--color-primary)] hover:underline">Medi-Share</Link>
                  </td>
                  <td className="py-2 pr-4">Christian (light)</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">Statement of faith checkbox during enrollment</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-4">
                    <Link href="/reviews/chm" className="text-[var(--color-primary)] hover:underline">CHM</Link>
                  </td>
                  <td className="py-2 pr-4">Christian (strict)</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2 pr-4">Detailed statement of faith + pastor attestation</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <Link href="/reviews/samaritan-ministries" className="text-[var(--color-primary)] hover:underline">Samaritan Ministries</Link>
                  </td>
                  <td className="py-2 pr-4">Christian (strict)</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2 pr-4">Regular church attendance verified</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-[var(--color-primary-lighter)] p-4 rounded-lg mb-4">
            <p className="font-semibold mb-1">What to do:</p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              If you are not religious or are not a practicing Christian, stick with Zion
              HealthShare, Sedera, or CrowdHealth. Do not sign a statement of faith you do not
              genuinely agree with &mdash; plans can deny claims if they discover you
              misrepresented your faith commitment. Read our full{' '}
              <Link href="/blog/non-religious-health-sharing-options" className="text-[var(--color-primary)] hover:underline">
                non-religious options guide
              </Link>.
            </p>
          </div>
        </section>

        {/* Question 5 */}
        <section id="question-5" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Question 5: What Legal Protections Do I Have?
          </h2>
          <p className="leading-relaxed mb-4">
            This is where health sharing differs most from insurance, and it is the question
            people ask least. The answer may change your decision.
          </p>
          <p className="leading-relaxed mb-4">
            Health sharing ministries are <strong>not</strong> insurance companies. They are
            exempt from ACA requirements under Section 1402(d) and are not regulated by state
            departments of insurance. This means:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="leading-relaxed">
              <strong>No contractual guarantee of payment.</strong> Health sharing is voluntary.
              The ministry is not legally obligated to pay your medical bills. Every plan&apos;s
              guidelines include language like: &ldquo;This is not insurance. Sharing is
              voluntary and not guaranteed.&rdquo;
            </li>
            <li className="leading-relaxed">
              <strong>No state insurance commissioner oversight.</strong> If a claim is denied,
              you cannot file a complaint with your state insurance department. Your recourse is
              limited to the plan&apos;s internal appeals process.
            </li>
            <li className="leading-relaxed">
              <strong>No out-of-pocket maximum.</strong> ACA insurance caps your annual
              out-of-pocket at $9,200 (individual) or $18,400 (family) in 2026. Health sharing
              has no such cap. Your IUA resets per incident, and co-shares apply to every
              eligible expense.
            </li>
            <li className="leading-relaxed">
              <strong>State mandate penalties.</strong> In California, Massachusetts, New Jersey,
              Rhode Island, Vermont, and Washington D.C., health sharing does not satisfy state
              insurance mandates. You may owe a state tax penalty of $695&ndash;$2,000+
              depending on the state.
            </li>
            <li className="leading-relaxed">
              <strong>Not tax-deductible.</strong> Health sharing contributions cannot be
              deducted as health insurance premiums for self-employed individuals or itemized
              deductions.
            </li>
          </ul>
          <p className="leading-relaxed mb-4">
            In practice, established ministries have reliably shared billions in medical expenses
            over decades.{' '}
            <Link href="/reviews/chm" className="text-[var(--color-primary)] hover:underline">CHM</Link>{' '}
            has operated since 1981,{' '}
            <Link href="/reviews/medi-share" className="text-[var(--color-primary)] hover:underline">Medi-Share</Link>{' '}
            since 1992. No major ministry has failed to share eligible expenses. But the legal
            risk is real, and you should understand it before joining.
          </p>
          <div className="bg-[var(--color-primary-lighter)] p-4 rounded-lg mb-4">
            <p className="font-semibold mb-1">What to do:</p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              If guaranteed coverage is important to you, consider{' '}
              <Link href="/reviews/presidio-healthcare" className="text-[var(--color-primary)] hover:underline">
                Presidio Healthcare
              </Link>{' '}
              &mdash; actual regulated insurance starting at $300/month with pre-existing
              conditions covered from day one and full state regulatory protections. If you
              choose health sharing, maintain an emergency fund of $5,000&ndash;$10,000 to
              cover potential gaps.
            </p>
          </div>
        </section>

        {/* Checklist */}
        <section id="checklist" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">
            Your Pre-Joining Checklist
          </h2>
          <div className="card p-6">
            <p className="leading-relaxed mb-4">
              Before signing up for any health sharing plan, go through this checklist:
            </p>
            <ul className="space-y-2">
              <li className="leading-relaxed">
                <strong>1.</strong> List every pre-existing condition and verify the waiting
                period for each with the plan
              </li>
              <li className="leading-relaxed">
                <strong>2.</strong> Add up annual costs for uncovered services (prescriptions,
                mental health, dental, vision)
              </li>
              <li className="leading-relaxed">
                <strong>3.</strong> Calculate total annual cost: (monthly x 12) + (IUA x
                expected events) + (co-shares) + (uncovered services)
              </li>
              <li className="leading-relaxed">
                <strong>4.</strong> Compare total cost to ACA marketplace rates at{' '}
                <a href="https://www.healthcare.gov" className="text-[var(--color-primary)] hover:underline" target="_blank" rel="noopener noreferrer">
                  HealthCare.gov
                </a>{' '}
                (check if you qualify for subsidies)
              </li>
              <li className="leading-relaxed">
                <strong>5.</strong> Confirm the faith requirement works for you (or choose a
                secular plan)
              </li>
              <li className="leading-relaxed">
                <strong>6.</strong> Read the full sharing guidelines document (not just the
                marketing materials)
              </li>
              <li className="leading-relaxed">
                <strong>7.</strong> Check if your state has an individual mandate (CA, MA, NJ,
                RI, DC, VT) and understand the penalty
              </li>
              <li className="leading-relaxed">
                <strong>8.</strong> Build an emergency fund of $5,000&ndash;$10,000 before
                canceling existing insurance
              </li>
              <li className="leading-relaxed">
                <strong>9.</strong> Verify your current doctors are in-network (if the plan
                uses a PPO network like Zion&apos;s Cigna PPO)
              </li>
              <li className="leading-relaxed">
                <strong>10.</strong> Understand the claims processing timeline and plan for
                potential out-of-pocket cash flow gaps
              </li>
            </ul>
          </div>
        </section>

        {/* Bottom Line */}
        <section id="bottom-line" className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">The Bottom Line</h2>
          <div className="card p-6">
            <p className="leading-relaxed mb-4">
              Health sharing can save you thousands per year, but only if you choose the right
              plan for your situation. The 5 questions above will help you avoid the most common
              and costly mistakes: joining a plan with a long pre-existing waiting period,
              underestimating hidden costs, signing a faith statement you do not agree with,
              or assuming health sharing provides the same legal protections as insurance.
            </p>
            <p className="leading-relaxed mb-4">
              For most people without strong faith preferences and with any pre-existing
              conditions,{' '}
              <Link href="/reviews/zion-healthshare" className="text-[var(--color-primary)] hover:underline">
                Zion HealthShare
              </Link>{' '}
              offers the best combination of coverage, pricing, and accessibility at
              $185&ndash;$268/month with no pre-existing waiting period and no faith requirement.
            </p>
            <p className="leading-relaxed">
              Not sure where to start?{' '}
              <Link href="/quiz" className="text-[var(--color-primary)] hover:underline font-semibold">
                Take our free 2-minute quiz
              </Link>{' '}
              to get a personalized recommendation based on your health needs, budget, and
              preferences. Or{' '}
              <Link href="/compare" className="text-[var(--color-primary)] hover:underline font-semibold">
                compare all plans side-by-side
              </Link>{' '}
              to see the full picture.
            </p>
          </div>
        </section>

        {/* Related Posts */}
        <section className="border-t border-[var(--color-border)] pt-8 mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/blog/hidden-costs-health-sharing-2026"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">Hidden Costs of Health Sharing Plans</span>
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
              href="/blog/non-religious-health-sharing-options"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">Non-Religious Health Sharing Options</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read article</span>
            </Link>
            <Link
              href="/answers/worth-it"
              className="card p-4 hover:shadow-lg transition"
            >
              <span className="font-serif font-bold">Is Health Sharing Worth It?</span>
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
