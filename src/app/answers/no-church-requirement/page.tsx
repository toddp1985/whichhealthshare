import { Metadata } from 'next'
import Link from 'next/link'
import { loadAllMinistries } from '@/lib/data'
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Which Health Sharing Plans Don\'t Require Church Attendance? (2026)',
  description: 'Six health sharing plans have no church attendance requirement: Zion HealthShare, Sedera, Impact Health Sharing, netWell, HSA Secure, and JHS Community. Full comparison of secular and faith-optional plans.',
  openGraph: {
    title: 'Health Sharing Plans With No Church Requirement',
    description: 'Six health sharing plans require no church attendance. Compare secular options starting at $140/month.',
    url: 'https://whichhealthshare.com/answers/no-church-requirement',
    type: 'article',
  },
}

export default function NoChurchRequirementPage() {
  const ministries = loadAllMinistries()
  const noChurchPlans = ministries.filter(m => !m.churchAttendanceRequired)
  const churchRequired = ministries.filter(m => m.churchAttendanceRequired)

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Answers', url: '/answers' },
    { name: 'No Church Requirement', url: '/answers/no-church-requirement' },
  ])

  const faqs = [
    {
      question: 'Do any health sharing plans require church attendance?',
      answer: 'Yes. CHM (Christian Healthcare Ministries) and Samaritan Ministries both require regular church attendance and a strict Christian statement of faith. CHM requires members to attend church regularly, and Samaritan Ministries requires a pastor\'s verification of church attendance.',
    },
    {
      question: 'Is CrowdHealth a health sharing plan without church requirements?',
      answer: 'CrowdHealth has no faith or church requirement, but it is technically a healthcare crowdfunding platform, not a health sharing ministry. Members contribute to a crowdfund that pays medical bills. Monthly cost averages $140 for individuals under 55, with a $500 member commitment per health event.',
    },
    {
      question: 'Can I join Medi-Share without going to church?',
      answer: 'Medi-Share requires a Christian statement of faith but does not require proof of church attendance. It is classified as "christian-light" in terms of faith requirements. Monthly costs range from $227 to $405 for individuals.',
    },
    {
      question: 'What is the cheapest health sharing plan with no church requirement?',
      answer: 'CrowdHealth averages $140/month for individuals under 55, making it the cheapest secular option (though it is crowdfunding, not health sharing). Among traditional health sharing plans, Zion HealthShare starts at $185/month for individuals with no faith or church requirement.',
    },
    {
      question: 'Do secular health sharing plans cover as much as faith-based ones?',
      answer: 'Secular plans like Zion HealthShare and Sedera offer comparable or better coverage than faith-based plans. Zion includes telehealth, prescriptions, maternity, mental health, preventive care, emergency, and surgery with unlimited sharing cap and a PPO network of 950,000+ providers. Some faith-based plans like CHM exclude telehealth, prescriptions, and mental health.',
    },
  ]

  const faqSchema = generateFAQSchema(faqs)
  const articleSchema = generateArticleSchema(
    'Which Health Sharing Plans Don\'t Require Church Attendance?',
    'Six health sharing plans have no church attendance requirement. Compare secular and faith-optional plans with pricing, coverage, and ratings.'
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="section-narrow pt-8">
        <nav className="text-sm text-[var(--color-text-secondary)] mb-6">
          <Link href="/">Home</Link> <span className="mx-1">/</span>
          <Link href="/answers">Answers</Link> <span className="mx-1">/</span>
          <span>No Church Requirement</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">
          Which Health Sharing Plans Don&apos;t Require Church Attendance?
        </h1>

        <p className="text-lg leading-relaxed mb-4">
          Six health sharing plans have no church attendance requirement: Zion HealthShare (4.8/5, $185&ndash;$268/mo),
          Sedera (4.3/5, $199&ndash;$379/mo), Impact Health Sharing, netWell, HSA Secure, and JHS Community.
          CrowdHealth (~$140/mo average) is also secular but operates as a crowdfunding platform, not a health sharing ministry.
        </p>
        <p className="text-lg leading-relaxed mb-8 text-[var(--color-text-secondary)]">
          Only two major health sharing ministries require church attendance: CHM and Samaritan Ministries.
          Medi-Share requires a Christian statement of faith but does not verify church attendance.
        </p>

        {/* Key Facts Table */}
        <div className="card p-6 mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Key Facts</h2>
          <table className="w-full text-left">
            <tbody>
              <tr className="border-b">
                <td className="py-3 font-semibold w-1/3">Plans with no church requirement</td>
                <td className="py-3">Zion HealthShare, Sedera, Impact, netWell, HSA Secure, JHS Community</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-semibold">Plans requiring church attendance</td>
                <td className="py-3">CHM, Samaritan Ministries</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-semibold">Cheapest secular option</td>
                <td className="py-3">CrowdHealth ~$140/mo (crowdfunding); Zion $185/mo (health sharing)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-semibold">Best-rated secular plan</td>
                <td className="py-3">Zion HealthShare (4.8/5)</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">Faith-optional (statement only)</td>
                <td className="py-3">Medi-Share, Presidio Healthcare</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section: Why some plans require church */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Why Do Some Health Sharing Plans Require Church Attendance?
        </h2>
        <p className="mb-4">
          Health sharing ministries originated in the 1980s as faith communities pooling resources to pay medical bills.
          The ACA (Affordable Care Act) exempted health sharing ministries from the individual mandate, provided they
          had been in continuous operation since December 31, 1999, and shared a common set of ethical or religious beliefs.
          This legal framework incentivized faith-based structures.
        </p>
        <p className="mb-8">
          CHM (founded 1981) and Samaritan Ministries (founded 1994) both require regular church attendance as a
          membership condition. CHM requires members to &ldquo;faithfully attend a Christian church.&rdquo;
          Samaritan Ministries requires a pastor&apos;s signature verifying regular attendance. These requirements
          serve as membership gatekeeping tied to the ministry&apos;s religious mission.
        </p>

        {/* Section: Secular options */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Which Plans Are Fully Secular With No Faith Requirement?
        </h2>
        <p className="mb-4">
          Zion HealthShare and Sedera are the two largest health sharing plans with no statement of faith and no
          church attendance requirement. Zion (founded 2017, Denver, CO) has 50,000+ members, starts at $185/month
          for individuals, offers unlimited sharing cap, and accepts pre-existing conditions with no waiting period.
          Sedera (founded 2010, Austin, TX) has 50,000+ members, starts at $199/month, and has a 6-month pre-existing
          waiting period.
        </p>
        <p className="mb-8">
          Impact Health Sharing, netWell, HSA Secure, and JHS Community also operate without faith requirements,
          though they are smaller and less widely reviewed. CrowdHealth is fully secular with no faith requirement
          but is structured as healthcare crowdfunding rather than health sharing.
        </p>

        {/* Section: Faith-light plans */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          What About Plans That Require a Statement of Faith But Not Church Attendance?
        </h2>
        <p className="mb-4">
          Medi-Share requires members to sign a Christian statement of faith but does not require proof of church
          attendance. It is the largest health sharing ministry with 400,000+ members and monthly costs starting at
          $227 for individuals. Presidio Healthcare is Christian-oriented in branding but does not require faith
          for enrollment and is actually regulated health insurance, not health sharing.
        </p>
        <p className="mb-8">
          The distinction matters: a statement of faith is a personal declaration, while church attendance
          verification requires documentation from a pastor or church leader. Plans like Medi-Share sit in a middle
          ground &mdash; faith-oriented but not church-verified.
        </p>

        {/* Comparison Table */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Comparison: Church Requirement by Plan
        </h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b-2">
                <th className="py-3 pr-4">Plan</th>
                <th className="py-3 pr-4">Church Required</th>
                <th className="py-3 pr-4">Faith Required</th>
                <th className="py-3 pr-4">Monthly (Individual)</th>
                <th className="py-3 pr-4">Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Zion HealthShare</td>
                <td className="py-3 pr-4">No</td>
                <td className="py-3 pr-4">None</td>
                <td className="py-3 pr-4">$185&ndash;$268</td>
                <td className="py-3 pr-4">4.8/5</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Sedera</td>
                <td className="py-3 pr-4">No</td>
                <td className="py-3 pr-4">None (secular)</td>
                <td className="py-3 pr-4">$199&ndash;$379</td>
                <td className="py-3 pr-4">4.3/5</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">CrowdHealth</td>
                <td className="py-3 pr-4">No</td>
                <td className="py-3 pr-4">None (secular)</td>
                <td className="py-3 pr-4">~$140 avg</td>
                <td className="py-3 pr-4">4.6/5</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Medi-Share</td>
                <td className="py-3 pr-4">No</td>
                <td className="py-3 pr-4">Christian statement</td>
                <td className="py-3 pr-4">$227&ndash;$405</td>
                <td className="py-3 pr-4">4.5/5</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">CHM</td>
                <td className="py-3 pr-4">Yes</td>
                <td className="py-3 pr-4">Strict Christian</td>
                <td className="py-3 pr-4">$115&ndash;$264</td>
                <td className="py-3 pr-4">4.5/5</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Samaritan Ministries</td>
                <td className="py-3 pr-4">Yes</td>
                <td className="py-3 pr-4">Strict Christian</td>
                <td className="py-3 pr-4">$220&ndash;$495</td>
                <td className="py-3 pr-4">4.4/5</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold">Presidio Healthcare</td>
                <td className="py-3 pr-4">No</td>
                <td className="py-3 pr-4">Christian-oriented (optional)</td>
                <td className="py-3 pr-4">$300&ndash;$600</td>
                <td className="py-3 pr-4">4.7/5</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section: How to choose */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          How Do You Choose Between Secular Health Sharing Plans?
        </h2>
        <p className="mb-4">
          The decision between secular plans comes down to three factors: pre-existing condition coverage, network
          preference, and monthly cost. Zion HealthShare is the strongest overall pick because it has no pre-existing
          waiting period, a Cigna PPO network with 950,000+ providers, unlimited sharing cap, and competitive pricing
          at $185&ndash;$268/month for individuals.
        </p>
        <p className="mb-8">
          Sedera suits members who want any-doctor flexibility with no network restrictions. CrowdHealth works best for
          healthy individuals under 55 who want the lowest monthly cost (~$140/month average) and are comfortable with
          the crowdfunding model. All three require no church attendance and no statement of faith.
        </p>

        {/* Bottom Line */}
        <div className="card p-6 mb-10 border-l-4 border-[var(--color-primary)]">
          <h2 className="font-serif font-bold text-xl mb-3">The Bottom Line</h2>
          <p className="mb-2">
            Most health sharing plans do not require church attendance. Only CHM and Samaritan Ministries enforce
            this requirement. Zion HealthShare is the top-rated secular option (4.8/5, $185/mo starting) with no
            faith requirement and no pre-existing condition waiting period.
          </p>
          <p>
            If you want the lowest cost with no faith requirement, CrowdHealth averages $140/month but operates
            as crowdfunding, not health sharing. For guaranteed coverage of pre-existing conditions from day one,
            Presidio Healthcare ($300&ndash;$600/mo) is regulated health insurance.
          </p>
        </div>

        {/* FAQ Section */}
        <h2 className="font-serif font-bold text-2xl mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-10">
          {faqs.map((faq, i) => (
            <details key={i} className="card p-5">
              <summary className="font-semibold cursor-pointer">{faq.question}</summary>
              <p className="mt-3 text-[var(--color-text-secondary)]">{faq.answer}</p>
            </details>
          ))}
        </div>

        {/* Related Links */}
        <div className="card p-6 mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Related Resources</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/answers/non-religious-plans" className="text-[var(--color-primary)] font-semibold hover:underline">
                What Are Non-Religious Health Sharing Plans? →
              </Link>
            </li>
            <li>
              <Link href="/answers/pre-existing-conditions" className="text-[var(--color-primary)] font-semibold hover:underline">
                Which Plans Cover Pre-Existing Conditions? →
              </Link>
            </li>
            <li>
              <Link href="/answers/crowdhealth-vs-health-sharing" className="text-[var(--color-primary)] font-semibold hover:underline">
                CrowdHealth vs Health Sharing — Which Is Better? →
              </Link>
            </li>
            <li>
              <Link href="/compare" className="text-[var(--color-primary)] font-semibold hover:underline">
                Compare All Plans Side-by-Side →
              </Link>
            </li>
            <li>
              <Link href="/quiz" className="text-[var(--color-primary)] font-semibold hover:underline">
                Take the Free Quiz — Find Your Best Plan →
              </Link>
            </li>
          </ul>
        </div>

        <p className="text-sm text-[var(--color-text-secondary)] mb-8">
          Last updated: February 2026. Data sourced from ministry websites and verified against plan documents.
          WhichHealthShare is editorially independent. Some links may be affiliate links.
        </p>
      </div>
    </>
  )
}
