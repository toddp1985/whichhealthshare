import { Metadata } from 'next'
import Link from 'next/link'
import { loadAllMinistries } from '@/lib/data'
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema'
import AnswerPageCTA from '@/components/AnswerPageCTA'

export const metadata: Metadata = {
  title: 'Non-Religious Health Sharing Plans — No Faith Required (2026)',
  description: 'Non-religious health sharing plans include Zion HealthShare ($185/mo), Sedera ($199/mo), Impact Health Sharing, netWell, HSA Secure, and JHS Community. No statement of faith, no church attendance.',
  openGraph: {
    title: 'Non-Religious Health Sharing Plans (2026)',
    description: 'Six secular health sharing plans with no faith requirement. Compare pricing, coverage, and ratings.',
    url: 'https://whichhealthshare.com/answers/non-religious-plans',
    type: 'article',
  },
}

export default function NonReligiousPlansPage() {
  const ministries = loadAllMinistries()
  const secularPlans = ministries.filter(m => m.faithRequirement === 'secular' || m.faithRequirement === 'any-faith')

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Answers', url: '/answers' },
    { name: 'Non-Religious Plans', url: '/answers/non-religious-plans' },
  ])

  const faqs = [
    {
      question: 'Are non-religious health sharing plans legal?',
      answer: 'Yes. Health sharing ministries are legal in all 50 states under the ACA exemption (Section 5000A). However, non-religious plans may not qualify for the ACA individual mandate exemption in states that still enforce it (CA, MA, NJ, RI, DC, VT). They are not insurance and are not regulated by state insurance departments.',
    },
    {
      question: 'Do non-religious plans cover as much as Christian plans?',
      answer: 'Secular plans often cover more. Zion HealthShare includes telehealth, prescriptions, maternity, mental health, preventive care, emergency, and surgery. By contrast, CHM (Christian, strict) excludes telehealth, prescriptions, and mental health. Sedera also covers telehealth, prescriptions, and mental health.',
    },
    {
      question: 'Can I use a non-religious health sharing plan if I am Christian?',
      answer: 'Yes. Plans like Zion HealthShare and Sedera are open to members of any belief system, including Christians. There is no restriction based on faith — they simply do not require it. Many Christians choose secular plans for broader coverage options or lower costs.',
    },
    {
      question: 'How do secular health sharing plans handle maternity?',
      answer: 'Both Zion HealthShare and Sedera include maternity coverage in their plans. Zion has no additional waiting period beyond the standard membership start date. CrowdHealth also covers maternity through its crowdfunding model. Waiting periods for maternity vary by plan, typically 10-12 months from enrollment.',
    },
    {
      question: 'Is CrowdHealth considered a non-religious health sharing plan?',
      answer: 'CrowdHealth is secular with no faith requirement, but it is technically a healthcare crowdfunding platform, not a health sharing ministry. The distinction matters: health sharing follows a defined sharing model with monthly contributions, while CrowdHealth uses peer-to-peer crowdfunding. CrowdHealth costs ~$140/month average for individuals under 55.',
    },
  ]

  const faqSchema = generateFAQSchema(faqs)
  const articleSchema = generateArticleSchema(
    'What Are Non-Religious Health Sharing Plans?',
    'Non-religious health sharing plans include Zion HealthShare, Sedera, Impact Health Sharing, netWell, HSA Secure, and JHS Community. No statement of faith required.'
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
          <span>Non-Religious Plans</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">
          What Are Non-Religious Health Sharing Plans?
        </h1>

        <p className="text-lg leading-relaxed mb-4">
          Non-religious health sharing plans include Zion HealthShare, Sedera, Impact Health Sharing, netWell,
          HSA Secure, and JHS Community. These plans have no statement of faith, no church attendance requirement,
          and are open to members of any belief system. CrowdHealth (~$140/mo average) is a secular crowdfunding
          alternative but is not technically health sharing.
        </p>
        <p className="text-lg leading-relaxed mb-8 text-[var(--color-text-secondary)]">
          Among the major plans reviewed on this site, Zion HealthShare (4.8/5, $185&ndash;$268/mo) and
          Sedera (4.3/5, $199&ndash;$379/mo) are the two largest and most-reviewed secular health sharing options.
          Both offer unlimited sharing caps and comprehensive medical coverage.
        </p>

        {/* Key Facts Table */}
        <div className="card p-6 mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Key Facts</h2>
          <table className="w-full text-left">
            <tbody>
              <tr className="border-b">
                <td className="py-3 font-semibold w-1/3">Secular health sharing plans</td>
                <td className="py-3">Zion HealthShare, Sedera, Impact, netWell, HSA Secure, JHS Community</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-semibold">Secular crowdfunding</td>
                <td className="py-3">CrowdHealth (~$140/mo avg, not health sharing)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-semibold">Lowest secular price</td>
                <td className="py-3">Zion HealthShare at $185/mo (individual)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-semibold">Best secular rating</td>
                <td className="py-3">Zion HealthShare (4.8/5)</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">Faith-based alternatives</td>
                <td className="py-3">CHM, Samaritan Ministries (strict); Medi-Share (light)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section: What makes a plan non-religious */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          What Makes a Health Sharing Plan Non-Religious?
        </h2>
        <p className="mb-4">
          A non-religious health sharing plan meets three criteria: no statement of faith required for enrollment,
          no church attendance verification, and no lifestyle requirements tied to religious doctrine. The plan
          may still promote general wellness or ethical living standards, but these are not tied to any specific
          religion or denomination.
        </p>
        <p className="mb-8">
          Zion HealthShare classifies its faith requirement as &ldquo;any-faith&rdquo; &mdash; open to all beliefs
          with no statement required. Sedera is explicitly &ldquo;secular&rdquo; with no faith component at all.
          By contrast, CHM requires members to &ldquo;live by biblical principles,&rdquo; and Samaritan Ministries
          requires a pastor&apos;s signature. Medi-Share requires signing a Christian statement of faith but does
          not verify church attendance.
        </p>

        {/* Section: Coverage comparison */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Do Secular Plans Offer the Same Coverage as Faith-Based Plans?
        </h2>
        <p className="mb-4">
          Secular plans typically offer equal or broader coverage compared to faith-based plans. Zion HealthShare
          covers telehealth, prescriptions, maternity, mental health, preventive care, emergency services, and
          surgery &mdash; a more comprehensive benefit set than CHM or Samaritan Ministries, which exclude
          telehealth, prescriptions, and mental health.
        </p>
        <p className="mb-8">
          The trade-off is track record. CHM has operated since 1981 with 300,000+ members. Samaritan Ministries
          has been active since 1994 with 230,000+ members. Zion HealthShare was founded in 2017 (50,000+ members)
          and Sedera in 2010 (50,000+ members). Longer operating history provides more evidence of consistent
          claims sharing, though all featured plans have positive track records.
        </p>

        {/* Section: Zion vs Sedera */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          How Do Zion HealthShare and Sedera Compare?
        </h2>
        <p className="mb-4">
          Zion HealthShare and Sedera are the two most prominent secular health sharing plans, but they differ in
          network structure, pre-existing condition policy, and pricing. Zion uses a Cigna PPO network with
          950,000+ providers and has no waiting period for pre-existing conditions. Sedera allows any doctor with
          no network restrictions but imposes a 6-month pre-existing waiting period with 50% sharing in the first
          6 months.
        </p>
        <p className="mb-8">
          Zion starts at $185/month for individuals; Sedera starts at $199/month. Both offer unlimited sharing caps.
          Zion is HSA-compatible; Sedera is not. For members with pre-existing conditions, Zion is the clear choice.
          For members who prioritize choosing any doctor without network considerations, Sedera offers more flexibility.
        </p>

        {/* Comparison Table */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Secular vs Faith-Based Plans: Full Comparison
        </h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b-2">
                <th className="py-3 pr-4">Plan</th>
                <th className="py-3 pr-4">Faith Req.</th>
                <th className="py-3 pr-4">Monthly (Individual)</th>
                <th className="py-3 pr-4">Pre-Existing Wait</th>
                <th className="py-3 pr-4">Sharing Cap</th>
                <th className="py-3 pr-4">Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-[var(--color-primary-lighter)]">
                <td className="py-3 pr-4 font-semibold">Zion HealthShare</td>
                <td className="py-3 pr-4">None</td>
                <td className="py-3 pr-4">$185&ndash;$268</td>
                <td className="py-3 pr-4">None</td>
                <td className="py-3 pr-4">Unlimited</td>
                <td className="py-3 pr-4">4.8/5</td>
              </tr>
              <tr className="border-b bg-[var(--color-primary-lighter)]">
                <td className="py-3 pr-4 font-semibold">Sedera</td>
                <td className="py-3 pr-4">None (secular)</td>
                <td className="py-3 pr-4">$199&ndash;$379</td>
                <td className="py-3 pr-4">6 months</td>
                <td className="py-3 pr-4">Unlimited</td>
                <td className="py-3 pr-4">4.3/5</td>
              </tr>
              <tr className="border-b bg-[var(--color-primary-lighter)]">
                <td className="py-3 pr-4 font-semibold">CrowdHealth</td>
                <td className="py-3 pr-4">None (secular)</td>
                <td className="py-3 pr-4">~$140 avg</td>
                <td className="py-3 pr-4">Phased (4 years)</td>
                <td className="py-3 pr-4">No cap</td>
                <td className="py-3 pr-4">4.6/5</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Medi-Share</td>
                <td className="py-3 pr-4">Christian (light)</td>
                <td className="py-3 pr-4">$227&ndash;$405</td>
                <td className="py-3 pr-4">12 months</td>
                <td className="py-3 pr-4">$250,000</td>
                <td className="py-3 pr-4">4.5/5</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">CHM</td>
                <td className="py-3 pr-4">Christian (strict)</td>
                <td className="py-3 pr-4">$115&ndash;$264</td>
                <td className="py-3 pr-4">6 months</td>
                <td className="py-3 pr-4">Unlimited</td>
                <td className="py-3 pr-4">4.5/5</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold">Samaritan Ministries</td>
                <td className="py-3 pr-4">Christian (strict)</td>
                <td className="py-3 pr-4">$220&ndash;$495</td>
                <td className="py-3 pr-4">12 months</td>
                <td className="py-3 pr-4">Unlimited</td>
                <td className="py-3 pr-4">4.4/5</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section: Who secular plans are best for */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Who Should Choose a Non-Religious Health Sharing Plan?
        </h2>
        <p className="mb-4">
          Non-religious plans are the right choice for anyone who does not identify as Christian, does not attend
          church regularly, or simply prefers a plan without faith-based membership criteria. They are also
          appropriate for Christians who prefer broader coverage (telehealth, prescriptions, mental health) that
          some faith-based plans exclude.
        </p>
        <p className="mb-8">
          Self-employed individuals, freelancers, gig workers, and early retirees are the largest demographics
          using secular health sharing plans. These groups often lack employer-sponsored insurance and find ACA
          marketplace plans too expensive without subsidies. A secular health sharing plan at $185&ndash;$379/month
          can save 40&ndash;60% compared to unsubsidized ACA premiums of $400&ndash;$900/month.
        </p>

        {/* Bottom Line */}
        <div className="card p-6 mb-10 border-l-4 border-[var(--color-primary)]">
          <h2 className="font-serif font-bold text-xl mb-3">The Bottom Line</h2>
          <p className="mb-2">
            Six health sharing plans operate without any faith requirement. Zion HealthShare (4.8/5, $185/mo)
            is the top-rated secular option with no pre-existing condition waiting period, unlimited sharing cap,
            and a PPO network of 950,000+ providers. Sedera (4.3/5, $199/mo) is the second-largest secular
            option with any-doctor flexibility.
          </p>
          <p>
            CrowdHealth (~$140/mo) is the cheapest secular option but operates as crowdfunding rather than
            health sharing. For members who need guaranteed, regulated coverage, Presidio Healthcare
            ($300&ndash;$600/mo) is actual health insurance with no faith requirement.
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

        <AnswerPageCTA />

        {/* Related Links */}
        <div className="card p-6 mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Related Resources</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/answers/no-church-requirement" className="text-[var(--color-primary)] font-semibold hover:underline">
                Which Plans Don&apos;t Require Church Attendance? →
              </Link>
            </li>
            <li>
              <Link href="/answers/vs-insurance" className="text-[var(--color-primary)] font-semibold hover:underline">
                Health Sharing vs Health Insurance — What&apos;s the Difference? →
              </Link>
            </li>
            <li>
              <Link href="/answers/pre-existing-conditions" className="text-[var(--color-primary)] font-semibold hover:underline">
                Which Plans Cover Pre-Existing Conditions? →
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
