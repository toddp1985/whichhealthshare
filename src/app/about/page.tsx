import { generateArticleSchema } from '@/lib/schema'

export const metadata = {
  title: 'About WhichHealthShare — Our Methodology & Mission',
  description: 'Learn how we research, rate, and recommend health sharing plans. Independent, unbiased reviews with verified pricing.'
}

export default function AboutPage() {
  const schema = generateArticleSchema(
    'About WhichHealthShare',
    'Our methodology, mission, and how we rate health sharing plans.'
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="section-narrow pt-8">
        <h1 className="font-serif font-bold text-4xl mb-6">About WhichHealthShare</h1>

        <section className="mb-12">
          <h2 className="font-serif font-bold text-2xl mb-4">Our Mission</h2>
          <p className="text-lg text-[var(--color-text-secondary)] mb-4">
            WhichHealthShare is an independent comparison site dedicated to helping Americans find the right health sharing plan. We research, compare, and honestly review health sharing ministries, crowdfunding alternatives, and insurance options — without bias.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-serif font-bold text-2xl mb-4">Our Methodology</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            We rate health sharing plans on five key factors:
          </p>
          <ul className="space-y-2">
            <li className="flex gap-3">
              <span className="font-bold text-[var(--color-primary)]">30%</span>
              <span>Cost: Monthly premiums for individuals, couples, families</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[var(--color-primary)]">25%</span>
              <span>Coverage: Breadth of included services (telehealth, maternity, etc.)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[var(--color-primary)]">20%</span>
              <span>Satisfaction: Member ratings and reviews (Trustpilot, etc.)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[var(--color-primary)]">15%</span>
              <span>Pre-existing Policies: Waiting periods and sharing limits</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[var(--color-primary)]">10%</span>
              <span>Transparency: Updated pricing, clear policies, honest communication</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-serif font-bold text-2xl mb-4">How We Earn</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            WhichHealthShare earns affiliate commissions when you sign up for a health sharing ministry or insurance plan through our links. This means:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-[var(--color-success)]">✓</span>
              <span>You pay the same price whether you sign up directly or through us</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--color-success)]">✓</span>
              <span>Commission amounts do NOT affect our ratings or recommendations</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--color-success)]">✓</span>
              <span>We recommend the plans that fit your situation, regardless of commission</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--color-success)]">✓</span>
              <span>We're transparent about our affiliate relationships (see Disclosure page)</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-serif font-bold text-2xl mb-4">Our Editorial Standards</h2>
          <ul className="space-y-2">
            <li>✓ All pricing verified in the current year (2026)</li>
            <li>✓ Coverage information sourced directly from official ministry websites</li>
            <li>✓ Member ratings from verified sources (Trustpilot, official reviews)</li>
            <li>✓ Every review includes honest pros AND cons</li>
            <li>✓ We update ratings and pricing quarterly</li>
            <li>✓ We disclose all affiliate relationships</li>
          </ul>
        </section>

        <section className="mb-12 card bg-[var(--color-primary-lighter)]">
          <h3 className="font-serif font-bold text-xl mb-3">Questions?</h3>
          <p className="text-[var(--color-text)]">
            Email us at <a href="mailto:hello@whichhealthshare.com" className="underline">hello@whichhealthshare.com</a>
          </p>
        </section>
      </div>
    </>
  )
}
