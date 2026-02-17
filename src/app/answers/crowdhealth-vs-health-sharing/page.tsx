import { Metadata } from 'next'
import Link from 'next/link'
import { loadAllMinistries } from '@/lib/data'
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema'
import AnswerPageCTA from '@/components/AnswerPageCTA'

export const metadata: Metadata = {
  title: 'CrowdHealth vs Health Sharing — Which Is Better? (2026)',
  description: 'CrowdHealth is crowdfunding (~$140/mo, no caps, $500 commitment per event). Traditional health sharing costs $115-$495/mo with IUAs of $500-$5,000. Compare costs, coverage models, and who each is best for.',
  openGraph: {
    title: 'CrowdHealth vs Health Sharing (2026)',
    description: 'CrowdHealth crowdfunding vs traditional health sharing ministries. Compare costs, models, and coverage.',
    url: 'https://whichhealthshare.com/answers/crowdhealth-vs-health-sharing',
    type: 'article',
  },
}

export default function CrowdHealthVsHealthSharingPage() {
  const ministries = loadAllMinistries()
  const crowdhealth = ministries.find(m => m.slug === 'crowdhealth')
  const healthSharePlans = ministries.filter(m => m.type === 'healthshare')

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Answers', url: '/answers' },
    { name: 'CrowdHealth vs Health Sharing', url: '/answers/crowdhealth-vs-health-sharing' },
  ])

  const faqs = [
    {
      question: 'Is CrowdHealth a health sharing ministry?',
      answer: 'No. CrowdHealth is a healthcare crowdfunding platform, not a health sharing ministry. Health sharing ministries pool monthly contributions to share members\' medical bills through a defined sharing model. CrowdHealth uses peer-to-peer crowdfunding where members contribute to fund specific medical bills submitted by other members. The distinction affects how bills are funded, what guarantees exist, and regulatory classification.',
    },
    {
      question: 'How does CrowdHealth\'s $500 member commitment work?',
      answer: 'When you have a health event (medical need), you pay a $500 member commitment — similar to a deductible. CrowdHealth then negotiates the bill (typically 30-60% discounts on planned procedures) and submits the remaining balance to the community crowdfund. The community funds the bill from pooled contributions. 99% of approved bills have been funded as of 2026.',
    },
    {
      question: 'Which is cheaper: CrowdHealth or traditional health sharing?',
      answer: 'CrowdHealth averages $140/month for individuals under 55, making it cheaper than most health sharing plans. CHM starts at $115/month (the cheapest health sharing plan) but requires strict Christian faith and church attendance. Zion HealthShare starts at $185/month with no faith requirement. CrowdHealth\'s $500 per-event commitment is lower than most health sharing IUAs, which range from $500 to $2,000+.',
    },
    {
      question: 'Does CrowdHealth cover pre-existing conditions?',
      answer: 'CrowdHealth phases in pre-existing condition coverage over 4 years: $0 in year one (not covered), $25,000 maximum in year two, $50,000 in year three, and $100,000 per year from year four onward. By comparison, Zion HealthShare covers pre-existing conditions from month one with no waiting period.',
    },
    {
      question: 'Can CrowdHealth refuse to fund my medical bill?',
      answer: 'Yes. CrowdHealth crowdfunding is voluntary, and there is no legal guarantee that any specific bill will be funded. However, CrowdHealth reports that 99% of submitted and approved bills have been funded. Bills may be rejected if they involve pre-existing conditions during the waiting period, excluded services, or conditions related to tobacco use (CrowdHealth does not accept tobacco users).',
    },
  ]

  const faqSchema = generateFAQSchema(faqs)
  const articleSchema = generateArticleSchema(
    'CrowdHealth vs Health Sharing — Which Is Better?',
    'CrowdHealth is healthcare crowdfunding (~$140/mo). Traditional health sharing costs $115-$495/mo. Compare costs, coverage models, pre-existing policies, and who each option is best for.'
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
          <span>CrowdHealth vs Health Sharing</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">
          CrowdHealth vs Health Sharing &mdash; Which Is Better?
        </h1>

        <p className="text-lg leading-relaxed mb-4">
          CrowdHealth is a healthcare crowdfunding platform, not a health sharing ministry. It costs approximately
          $140/month average for individuals under 55, has no coverage caps, no faith requirement, and a $500
          member commitment per health event. Traditional health sharing ministries cost $115&ndash;$495/month
          with Initial Unshareable Amounts (IUAs) of $500&ndash;$2,000. CrowdHealth wins on flexibility and cost
          for healthy people; traditional health sharing wins on predictability for members with frequent claims.
        </p>
        <p className="text-lg leading-relaxed mb-8 text-[var(--color-text-secondary)]">
          CrowdHealth was founded in 2021 and has 17,000+ members. Traditional health sharing ministries have
          operated for decades &mdash; CHM since 1981 (300,000+ members), Samaritan Ministries since 1994
          (230,000+ members), and Medi-Share since 1992 (400,000+ members). Newer secular options include
          Zion HealthShare (2017, 50,000+ members) and Sedera (2010, 50,000+ members).
        </p>

        {/* Key Facts Table */}
        <div className="card p-6 mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Key Facts</h2>
          <table className="w-full text-left">
            <tbody>
              <tr className="border-b">
                <td className="py-3 font-semibold w-1/3">CrowdHealth type</td>
                <td className="py-3">Healthcare crowdfunding (not health sharing, not insurance)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-semibold">CrowdHealth cost</td>
                <td className="py-3">~$140/mo avg ($60 advocacy fee + ~$80 crowdfunding)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-semibold">CrowdHealth per-event cost</td>
                <td className="py-3">$500 member commitment per health event</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-semibold">Health sharing cost range</td>
                <td className="py-3">$115&ndash;$495/mo (individual) with $500&ndash;$2,000 IUA</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">Bills funded (CrowdHealth)</td>
                <td className="py-3">99% of approved bills funded</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section: How the models differ */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          How Does CrowdHealth&apos;s Model Differ From Health Sharing?
        </h2>
        <p className="mb-4">
          Traditional health sharing follows a pooled contribution model. Members pay a fixed monthly amount that
          goes into a shared fund. When a member has a medical need, the ministry draws from the pool to share
          the cost, subject to the member&apos;s IUA (similar to a deductible) and co-share percentage (typically
          10&ndash;20%). The ministry determines which bills are eligible based on its sharing guidelines.
        </p>
        <p className="mb-4">
          CrowdHealth uses peer-to-peer crowdfunding. Members pay a fixed $60/month advocacy fee plus a variable
          crowdfunding amount (averaging ~$80/month for members under 55). When a member has a health event, they
          pay a $500 member commitment, CrowdHealth negotiates the bill down (reporting 30&ndash;60% discounts on
          planned procedures), and the remaining balance is submitted to the community crowdfund.
        </p>
        <p className="mb-8">
          The practical difference: health sharing has a more predictable monthly cost with defined sharing rules.
          CrowdHealth&apos;s monthly cost can vary because the crowdfunding component fluctuates based on community
          health events. However, CrowdHealth&apos;s per-event cost ($500 flat) is often lower than health sharing
          IUAs ($500&ndash;$2,000) and there is no co-share percentage.
        </p>

        {/* Section: Cost comparison */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          Which Costs Less: CrowdHealth or Traditional Health Sharing?
        </h2>
        <p className="mb-4">
          For healthy individuals under 55 with few medical needs, CrowdHealth is typically cheaper. At ~$140/month
          average, it costs less than Zion HealthShare ($185&ndash;$268), Sedera ($199&ndash;$379), Medi-Share
          ($227&ndash;$405), and Samaritan Ministries ($220&ndash;$495). Only CHM ($115&ndash;$264) starts lower,
          but CHM requires strict Christian faith and church attendance.
        </p>
        <p className="mb-8">
          For members with frequent health events, traditional health sharing may be more cost-effective because
          the monthly contribution is fixed regardless of how many claims other members file. CrowdHealth&apos;s
          variable crowdfunding component could increase if the community experiences higher-than-average medical
          costs in a given month. However, CrowdHealth&apos;s $500 flat per-event commitment is predictable and
          often lower than traditional IUAs.
        </p>

        {/* Section: Coverage differences */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          What Does CrowdHealth Cover That Health Sharing Plans Don&apos;t?
        </h2>
        <p className="mb-4">
          CrowdHealth has no coverage caps per health event &mdash; the community can fund any amount for an
          approved bill. Most health sharing plans also have unlimited caps (Zion, CHM, Sedera, Samaritan), but
          Medi-Share caps sharing at $250,000 per incident. CrowdHealth also covers telehealth, prescriptions,
          maternity, mental health, preventive care, emergency, and surgery &mdash; matching or exceeding most
          health sharing plans.
        </p>
        <p className="mb-8">
          The key coverage gap for CrowdHealth is pre-existing conditions. CrowdHealth does not cover pre-existing
          conditions in year one and phases them in over 4 years ($25K year 2, $50K year 3, $100K year 4+).
          Zion HealthShare covers pre-existing from month one. CHM and Sedera wait 6 months. CrowdHealth also
          does not accept tobacco users, while most health sharing plans do (with some restrictions).
        </p>

        {/* Section: Track record */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          How Does CrowdHealth&apos;s Track Record Compare?
        </h2>
        <p className="mb-4">
          CrowdHealth was founded in 2021 and has 17,000+ members. It reports that 99% of submitted and approved
          bills have been funded by the community. Its Trustpilot rating is 4.7/5 from 665+ reviews. However, it
          has only been operating for approximately 5 years &mdash; a fraction of the history of established
          ministries.
        </p>
        <p className="mb-8">
          Traditional health sharing ministries have decades of operational history. CHM has operated since 1981
          (44+ years) with 300,000+ members. Medi-Share has operated since 1992 (33+ years) with 400,000+ members.
          Samaritan Ministries has operated since 1994 (31+ years) with 230,000+ members. Even newer secular plans
          like Sedera (founded 2010) have 15+ years of history. Longer track records provide more evidence of
          sustainable operations through economic cycles and pandemic-level health events.
        </p>

        {/* Comparison Table */}
        <h2 className="font-serif font-bold text-2xl mb-4">
          CrowdHealth vs Health Sharing: Side-by-Side Comparison
        </h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b-2">
                <th className="py-3 pr-4">Feature</th>
                <th className="py-3 pr-4">CrowdHealth</th>
                <th className="py-3 pr-4">Zion HealthShare</th>
                <th className="py-3 pr-4">CHM</th>
                <th className="py-3 pr-4">Medi-Share</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Type</td>
                <td className="py-3 pr-4">Crowdfunding</td>
                <td className="py-3 pr-4">Health sharing</td>
                <td className="py-3 pr-4">Health sharing</td>
                <td className="py-3 pr-4">Health sharing</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Monthly (individual)</td>
                <td className="py-3 pr-4">~$140 avg</td>
                <td className="py-3 pr-4">$185&ndash;$268</td>
                <td className="py-3 pr-4">$115&ndash;$264</td>
                <td className="py-3 pr-4">$227&ndash;$405</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Per-event cost</td>
                <td className="py-3 pr-4">$500 flat</td>
                <td className="py-3 pr-4">$500&ndash;$2,000 IUA + 10&ndash;20%</td>
                <td className="py-3 pr-4">$300&ndash;$1,000 IUA + 20%</td>
                <td className="py-3 pr-4">$500&ndash;$2,000 IUA + 20%</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Coverage cap</td>
                <td className="py-3 pr-4">None</td>
                <td className="py-3 pr-4">Unlimited</td>
                <td className="py-3 pr-4">Unlimited</td>
                <td className="py-3 pr-4">$250,000</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Pre-existing</td>
                <td className="py-3 pr-4">Phased 4 years</td>
                <td className="py-3 pr-4">No waiting period</td>
                <td className="py-3 pr-4">6-month wait</td>
                <td className="py-3 pr-4">12-month wait</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Faith requirement</td>
                <td className="py-3 pr-4">None</td>
                <td className="py-3 pr-4">None</td>
                <td className="py-3 pr-4">Strict Christian</td>
                <td className="py-3 pr-4">Christian (light)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Prescriptions</td>
                <td className="py-3 pr-4">Yes</td>
                <td className="py-3 pr-4">Yes</td>
                <td className="py-3 pr-4">No</td>
                <td className="py-3 pr-4">No</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Mental health</td>
                <td className="py-3 pr-4">Yes</td>
                <td className="py-3 pr-4">Yes</td>
                <td className="py-3 pr-4">No</td>
                <td className="py-3 pr-4">No</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-semibold">Members</td>
                <td className="py-3 pr-4">17,000+</td>
                <td className="py-3 pr-4">50,000+</td>
                <td className="py-3 pr-4">300,000+</td>
                <td className="py-3 pr-4">400,000+</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold">Rating</td>
                <td className="py-3 pr-4">4.6/5</td>
                <td className="py-3 pr-4">4.8/5</td>
                <td className="py-3 pr-4">4.5/5</td>
                <td className="py-3 pr-4">4.5/5</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom Line */}
        <div className="card p-6 mb-10 border-l-4 border-[var(--color-primary)]">
          <h2 className="font-serif font-bold text-xl mb-3">The Bottom Line</h2>
          <p className="mb-2">
            CrowdHealth is the best option for healthy individuals under 55 who want the lowest monthly cost
            (~$140/mo), no faith requirement, and no coverage caps. Its $500 flat per-event commitment is
            simpler and often cheaper than traditional IUA + co-share structures.
          </p>
          <p className="mb-2">
            Traditional health sharing is the better choice for members with pre-existing conditions (Zion
            HealthShare covers them from day one), members over 55, families (CrowdHealth pricing is less
            competitive for families), and anyone who prefers the stability of an established ministry with
            decades of operating history.
          </p>
          <p>
            If you are healthy, under 55, and comfortable with a newer platform, CrowdHealth offers the lowest
            cost. If you have pre-existing conditions or want a longer track record, Zion HealthShare
            ($185/mo, 4.8/5) is the strongest alternative.
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
              <Link href="/answers/vs-insurance" className="text-[var(--color-primary)] font-semibold hover:underline">
                Health Sharing vs Health Insurance — What&apos;s the Difference? →
              </Link>
            </li>
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
          Last updated: February 2026. Data sourced from CrowdHealth.com, ministry websites, and verified against
          plan documents. WhichHealthShare is editorially independent. Some links may be affiliate links.
        </p>
      </div>
    </>
  )
}
