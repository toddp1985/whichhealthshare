import { loadAllMinistries } from '@/lib/data'
import { generateBreadcrumb, generateFAQSchema, generateArticleSchema } from '@/lib/schema'
import Link from 'next/link'

export const metadata = {
  title: 'Can I See Any Doctor with Health Sharing? (2026) — WhichHealthShare',
  description:
    'Health sharing provider networks explained. PPO networks, out-of-network options, and which plans let you see any licensed doctor without restrictions.',
}

const faqs = [
  {
    question: 'Do I need a referral to see a specialist with health sharing?',
    answer:
      'Most health sharing plans do not require referrals to see specialists. Unlike HMO insurance plans, health sharing ministries generally allow members to visit any specialist directly. Some plans recommend using in-network providers for cost savings but do not mandate referrals. This flexibility is one of the key advantages of health sharing over traditional insurance.',
  },
  {
    question: 'What PPO network does Zion HealthShare use?',
    answer:
      'Zion HealthShare uses the Cigna PPO network, which includes over 950,000 healthcare providers nationwide. Using Cigna network providers gives you access to negotiated rates, which can significantly reduce your out-of-pocket costs. You can also see out-of-network providers, but you will pay the full billed amount rather than the negotiated rate.',
  },
  {
    question: 'Can I use my current doctor with health sharing?',
    answer:
      'In most cases, yes. Since health sharing plans either use large PPO networks or allow any licensed provider, your current doctor is likely eligible. Check your plan provider directory to confirm. Even if your doctor is out-of-network, you can still visit them — you may just pay higher rates. Call your doctor office and ask if they accept your specific health sharing plan.',
  },
  {
    question: 'Do health sharing plans cover out-of-state doctors?',
    answer:
      'Yes. Health sharing plans are not state-regulated like insurance and typically work nationwide. If your plan uses a PPO network (like Cigna or PHCS), you can find in-network providers in any state. Plans without network restrictions (like CrowdHealth) allow you to see any licensed provider in any state. This makes health sharing a good option for frequent travelers or people who split time between states.',
  },
  {
    question: 'Why do negotiated network rates matter for health sharing?',
    answer:
      'Negotiated network rates can reduce medical bills by 40-70% compared to the full chargemaster price. For example, an MRI that costs $2,500 at full price might be $800 through a PPO network. Since health sharing members are responsible for their IUA, lower negotiated rates mean your IUA covers more of the actual care. Using in-network providers maximizes the value of your health sharing plan.',
  },
]

export default function AnyDoctorPage() {
  const ministries = loadAllMinistries()

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Answers', url: '/answers' },
    { name: 'Any Doctor', url: '/answers/any-doctor' },
  ])

  const faqSchema = generateFAQSchema(faqs)

  const articleSchema = generateArticleSchema(
    'Can I See Any Doctor with Health Sharing?',
    'Explanation of health sharing provider networks, PPO access, and out-of-network care options across major plans.'
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="section-narrow pt-8">
        <nav className="text-sm text-[var(--color-text-secondary)] mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/answers" className="hover:underline">Answers</Link>
          <span className="mx-2">/</span>
          <span>Any Doctor</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl mb-4">Can I See Any Doctor with Health Sharing?</h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-6">
          Most health sharing plans allow you to see any licensed healthcare provider. Zion HealthShare provides access to the Cigna PPO network with over 950,000 providers while also permitting out-of-network care. Medi-Share uses the PHCS PPO network. CrowdHealth has no network restrictions at all. Using a PPO network typically results in lower out-of-pocket costs due to negotiated rates, but it is rarely required.
        </p>

        <h2 className="font-serif font-bold text-2xl mb-4">Key Facts</h2>
        <table className="w-full mb-8">
          <tbody>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Network Requirement</td>
              <td className="py-3">Optional for most plans — recommended but not mandatory</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Largest PPO Network</td>
              <td className="py-3">Cigna PPO (Zion) — 950,000+ providers</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Referrals Required</td>
              <td className="py-3">No — direct specialist access with most plans</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">Network Savings</td>
              <td className="py-3">40-70% lower costs vs. out-of-network billing</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4 font-bold">No Network at All</td>
              <td className="py-3">CrowdHealth and Samaritan — any provider, any time</td>
            </tr>
          </tbody>
        </table>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">How Do Health Sharing Provider Networks Work?</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Health sharing plans approach provider networks differently from insurance. Most plans partner with a PPO network to give members access to negotiated rates, but they do not restrict you to those providers. When you visit an in-network doctor, the provider has agreed to accept a pre-negotiated rate — often 40-70% lower than the full billed amount. When you go out-of-network, you pay the provider's standard rates, which are typically much higher.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            This is a significant advantage over HMO and narrow-network insurance plans, which may deny claims entirely for out-of-network care (except emergencies). With health sharing, you have the freedom to choose your providers while still benefiting from network discounts when available. The trade-off is that out-of-network bills may be larger, and your IUA applies to whatever you are billed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">Which Plans Offer the Most Provider Freedom?</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            CrowdHealth operates with zero network restrictions. Members see any licensed provider, submit their bills, and the community crowdfunds the costs. There is no PPO network and no negotiated rates, which means members may need to negotiate bills directly. Samaritan Ministries also has no formal network — members are free to choose any provider and submit their bills for sharing.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Zion HealthShare strikes a balance with the Cigna PPO network (950,000+ providers) while allowing out-of-network care. Medi-Share uses the PHCS Multiplan network, one of the largest PPO networks in the country with access to over 1 million providers. CHM allows members to see any provider but offers a discounted rate through their provider network partnership. In practice, the vast majority of doctors accept at least one of these PPO networks.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">What Happens If I Go Out-of-Network?</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Going out-of-network with a health sharing plan means you will be billed at the provider's standard rates rather than a negotiated PPO rate. For example, an office visit that costs $150 in-network might be billed at $350 out-of-network. Your health sharing plan will still share the expense (after your IUA), but the total bill — and therefore your potential out-of-pocket cost — will be higher.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Some plans have specific policies on out-of-network billing. Medi-Share may limit sharing to the amount that would have been billed in-network. This means if an in-network rate would have been $800 but you were billed $2,000 out-of-network, the plan may only share based on the $800 figure. Always check your specific plan's out-of-network policy to avoid unexpected costs.
          </p>
        </section>

        <h2 className="font-serif font-bold text-2xl mb-4">Provider Network Comparison</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--color-bg-warm)]">
                <th className="px-4 py-3 font-bold text-left">Plan</th>
                <th className="px-4 py-3 font-bold text-left">Network</th>
                <th className="px-4 py-3 font-bold text-left">Any Doctor?</th>
                <th className="px-4 py-3 font-bold text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {ministries.map((ministry) => (
                <tr key={ministry.slug} className="border-b border-[var(--color-border)]">
                  <td className="px-4 py-3 font-bold">
                    <Link href={`/reviews/${ministry.slug}`} className="text-[var(--color-accent)] hover:underline">
                      {ministry.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    {ministry.network.name || 'None'}
                  </td>
                  <td className="px-4 py-3">
                    {ministry.network.canUseAnyDoctor ? 'Yes' : 'Network only'}
                  </td>
                  <td className="px-4 py-3 text-sm text-[var(--color-text-secondary)]">
                    {ministry.network.providerCount && `${ministry.network.providerCount} providers`}
                    {!ministry.network.providerCount && ministry.network.type === 'any-doctor' && 'No network restrictions'}
                    {!ministry.network.providerCount && ministry.network.type === 'ppo' && 'PPO network access'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">The Bottom Line</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Health sharing gives you more provider freedom than most insurance plans. Nearly all health sharing plans allow you to see any licensed doctor, though using in-network providers saves significant money. If provider choice is your top priority, CrowdHealth and Samaritan offer unrestricted access. If you want the balance of network savings plus freedom, Zion HealthShare (Cigna PPO) and Medi-Share (PHCS) provide the largest networks with out-of-network flexibility. Check your current doctors against the plan's provider directory before enrolling.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <details key={index} className="mb-4 border border-[var(--color-border)] rounded-lg">
              <summary className="p-4 font-bold cursor-pointer hover:bg-[var(--color-bg-warm)]">
                {faq.question}
              </summary>
              <p className="px-4 pb-4 text-[var(--color-text-secondary)]">{faq.answer}</p>
            </details>
          ))}
        </section>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl mb-4">Related Pages</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/compare" className="text-[var(--color-accent)] hover:underline">
                Compare All Health Sharing Plans
              </Link>
            </li>
            <li>
              <Link href="/quiz" className="text-[var(--color-accent)] hover:underline">
                Take the Quiz — Find Your Best Plan
              </Link>
            </li>
            <li>
              <Link href="/answers/emergency-room" className="text-[var(--color-accent)] hover:underline">
                How Do Health Sharing Plans Handle ER Visits?
              </Link>
            </li>
            <li>
              <Link href="/answers/prescription-coverage" className="text-[var(--color-accent)] hover:underline">
                Which Plans Cover Prescriptions?
              </Link>
            </li>
            <li>
              <Link href="/answers/vs-insurance" className="text-[var(--color-accent)] hover:underline">
                Health Sharing vs Health Insurance
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
