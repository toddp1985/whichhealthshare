import Link from 'next/link'
import { loadAllMinistries, getCrowdHealth, getPresidio } from '@/lib/data'
import CTAButton from '@/components/common/CTAButton'
import EmailCapture from '@/components/common/EmailCapture'
import StarRating from '@/components/common/StarRating'
import { generateBreadcrumb, generateOrganizationSchema, generateWebsiteSchema } from '@/lib/schema'

export default function HomePage() {
  const ministries = loadAllMinistries()
  const topMinistries = ministries  // Show all 7 plans
  const crowdhealth = getCrowdHealth()
  const presidio = getPresidio()

  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' }
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebsiteSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-[var(--color-bg)] py-24 px-4 sm:py-32">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 text-[var(--color-text)] leading-tight">
            Find Your Best Health Sharing Plan in 6 Questions
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed">
            Get personalized recommendations from 7 health sharing options with verified 2026 pricing. Fast, honest, and independent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <CTAButton href="/quiz" variant="primary" className="text-lg px-8 h-12 sm:h-14">
              Start Quiz Now
            </CTAButton>
            <CTAButton href="/compare" variant="secondary" className="text-lg px-8 h-12 sm:h-14">
              Skip to Compare
            </CTAButton>
          </div>

          {/* Social Proof */}
          <div className="bg-white border border-[var(--color-border)] rounded-lg py-4 px-6 inline-block">
            <p className="text-sm text-[var(--color-text-secondary)]">
              ⭐ <span className="font-semibold">Trusted by 8,000+ people</span> who've found their plan
            </p>
          </div>
        </div>
      </section>

      {/* Featured Plans Preview */}
      <section className="section py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif font-bold text-3xl mb-8 text-center">All 7 Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topMinistries.map((ministry) => (
              <Link key={ministry.slug} href={`/reviews/${ministry.slug}`} className="card hover:shadow-lg transition">
                <h3 className="font-serif font-bold mb-2">{ministry.name}</h3>
                <StarRating rating={ministry.rating} />
                <p className="text-sm text-[var(--color-text-secondary)] mt-2">
                  From ${ministry.plans[0]?.monthlyRange?.individual?.min}/mo
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">{ministry.bestFor}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CrowdHealth Featured Banner */}
      {crowdhealth && (
        <section className="section bg-[#FFF7F0] py-16">
          <div className="container mx-auto max-w-4xl">
            <div className="card-coral p-8">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">Featured — Crowdfunding</span>
              </div>
              <h2 className="font-serif font-bold text-2xl mb-3">CrowdHealth: The Modern Alternative</h2>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Not a health sharing ministry — CrowdHealth is a healthcare crowdfunding platform where members fund each other's medical bills. No faith requirement, no coverage caps, month-to-month flexibility, and the lowest cost for young, healthy individuals.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Monthly Cost (under 55)</p>
                  <p className="font-bold text-lg">~$140/mo</p>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Members</p>
                  <p className="font-bold text-lg">17,000+</p>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Rating</p>
                  <p className="font-bold text-lg">4.6/5</p>
                </div>
              </div>
              <CTAButton href="/reviews/crowdhealth" variant="primary">Learn About CrowdHealth →</CTAButton>
            </div>
          </div>
        </section>
      )}

      {/* Presidio Featured Banner */}
      {presidio && (
        <section className="section py-16">
          <div className="container mx-auto max-w-4xl">
            <div className="card-gold p-8">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-[var(--color-gold)] text-white px-3 py-1 rounded-full text-sm font-bold">★ Real Insurance</span>
              </div>
              <h2 className="font-serif font-bold text-2xl mb-3">Presidio Healthcare: Guaranteed Coverage</h2>
              <p className="text-[var(--color-text-secondary)] mb-4">
                If you need guaranteed coverage or have pre-existing conditions, Presidio Healthcare is actual regulated health insurance with unlimited coverage and zero waiting periods. Premium pricing for peace of mind.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Monthly Cost</p>
                  <p className="font-bold text-lg">$300-$600</p>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Pre-Existing</p>
                  <p className="font-bold text-lg">Covered Day 1</p>
                </div>
              </div>
              <CTAButton href="/reviews/presidio-healthcare" variant="primary">Explore Presidio →</CTAButton>
            </div>
          </div>
        </section>
      )}

      {/* Why Compare Section */}
      <section className="section py-16 bg-[var(--color-bg-warm)]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif font-bold text-3xl mb-8 text-center">Why Use WhichHealthShare?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="font-serif font-bold text-lg mb-2">✓ Verified 2026 Pricing</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                We research each ministry's current pricing, coverage, and policies. No outdated information.
              </p>
            </div>
            <div className="card">
              <h3 className="font-serif font-bold text-lg mb-2">✓ Honest Reviews</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Every review includes genuine pros and cons. We're not selling you anything.
              </p>
            </div>
            <div className="card">
              <h3 className="font-serif font-bold text-lg mb-2">✓ Three Options</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Health sharing ministries, modern crowdfunding, and traditional insurance — all compared fairly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="section py-16">
        <div className="container mx-auto">
          <h2 className="font-serif font-bold text-3xl mb-8 text-center">Stay Updated</h2>
          <EmailCapture title="Get Our Free Comparison Guide" />
        </div>
      </section>

      {/* FAQ */}
      <section className="section py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-serif font-bold text-3xl mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="card">
              <summary className="font-bold cursor-pointer">What's the difference between health sharing and insurance?</summary>
              <p className="mt-4 text-[var(--color-text-secondary)]">
                Health sharing is voluntary. Members pool money to help each other pay medical bills. Insurance is guaranteed regulated coverage. Health sharing is cheaper but not guaranteed. Insurance is more expensive but guaranteed.
              </p>
            </details>
            <details className="card">
              <summary className="font-bold cursor-pointer">What about pre-existing conditions?</summary>
              <p className="mt-4 text-[var(--color-text-secondary)]">
                Most health sharing ministries have waiting periods (6-12 months). Insurance covers pre-existing conditions from day one. This is a major difference.
              </p>
            </details>
            <details className="card">
              <summary className="font-bold cursor-pointer">Which plan should I choose?</summary>
              <p className="mt-4 text-[var(--color-text-secondary)]">
                Take our 6-question quiz. It'll recommend the top 3 options based on your household size, budget, health needs, and faith preference.
              </p>
            </details>
            <details className="card">
              <summary className="font-bold cursor-pointer">How do you make money?</summary>
              <p className="mt-4 text-[var(--color-text-secondary)]">
                We earn affiliate commissions when you sign up through our links. This doesn't affect our ratings — we recommend the best plans regardless of commission.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="section py-16 bg-[var(--color-bg-warm)]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif font-bold text-3xl mb-8 text-center">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/blog/crowdhealth-vs-health-sharing" className="card hover:shadow-lg transition">
              <h3 className="font-serif font-bold text-lg mb-2 text-blue-600 hover:text-blue-700">CrowdHealth vs Health Sharing</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">CrowdHealth is a healthcare crowdfunding platform that averaged $140/month for individuals under 55 and has no per-event coverage caps.</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-3">1,600 words • Feb 8, 2026</p>
            </Link>
            <Link href="/blog/2026-health-sharing-what-changed" className="card hover:shadow-lg transition">
              <h3 className="font-serif font-bold text-lg mb-2 text-blue-600 hover:text-blue-700">What Changed in 2026</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">Pricing updates, coverage rule changes, and which plans improved or got worse in 2026.</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-3">1,400 words • Feb 8, 2026</p>
            </Link>
            <Link href="/blog/hidden-cost-health-sharing" className="card hover:shadow-lg transition">
              <h3 className="font-serif font-bold text-lg mb-2 text-blue-600 hover:text-blue-700">Hidden Costs Nobody Talks About</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">Out-of-pocket amounts, claim rejections, coverage gaps, and true annual costs calculated.</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-3">1,200 words • Feb 8, 2026</p>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-bold text-lg">
              Read All Articles →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
