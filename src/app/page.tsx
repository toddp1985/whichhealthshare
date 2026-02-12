import Link from 'next/link'
import { loadAllMinistries, getCrowdHealth, getPresidio } from '@/lib/data'
import CTAButton from '@/components/common/CTAButton'
import EmailCapture from '@/components/common/EmailCapture'
import StarRating from '@/components/common/StarRating'
import BlogCarousel from '@/components/BlogCarousel'
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
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-[var(--color-bg-warm)] py-32 px-4 sm:py-48">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="mb-8">
            <span className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🎯 Personalized Recommendations
            </span>
          </div>
          
          <h1 className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl mb-8 text-[var(--color-text)] leading-tight">
            Find Your Perfect Health Sharing Plan
          </h1>
          
          <p className="text-xl sm:text-2xl text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Answer 6 simple questions and discover which health sharing plan, insurance, or crowdfunding option is right for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <CTAButton href="/quiz" variant="primary" className="text-lg px-10 h-14 sm:h-16 font-semibold shadow-lg">
              Start Quiz Now →
            </CTAButton>
            <CTAButton href="/compare" variant="secondary" className="text-lg px-10 h-14 sm:h-16 font-semibold">
              Compare All Plans
            </CTAButton>
          </div>

          {/* Social Proof - Enhanced */}
          <div className="bg-white border border-[var(--color-border)] rounded-2xl py-6 px-8 inline-block shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl">⭐</span>
              <p className="text-base text-[var(--color-text-secondary)]">
                <span className="font-semibold text-[var(--color-text)]">Independent & Honest</span> — No affiliate bias, real 2026 pricing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Plans Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4 inline-block">Compare Options</span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-4 text-[var(--color-text)]">7 Health Plans & Alternatives</h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">Health sharing ministries, crowdfunding, and insurance options compared side-by-side</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topMinistries.map((ministry) => (
              <Link key={ministry.slug} href={`/reviews/${ministry.slug}`} className="card hover:shadow-lg hover:-translate-y-1 transition duration-200">
                <div className="mb-4">
                  <h3 className="font-serif font-bold text-xl mb-3 text-[var(--color-text)]">{ministry.name}</h3>
                  <StarRating rating={ministry.rating} />
                </div>
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-[var(--color-text-muted)]">Monthly Cost</p>
                  <p className="font-serif font-bold text-lg text-blue-600">
                    {ministry.plans[0]?.monthlyRange?.individual?.min ? `$${ministry.plans[0].monthlyRange.individual.min}-$${ministry.plans[0].monthlyRange.individual.max}` : 'Variable'}
                  </p>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">{ministry.bestFor}</p>
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
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">Crowdfunding Alternative</span>
              </div>
              <h2 className="font-serif font-bold text-2xl mb-3">CrowdHealth: The Modern Alternative</h2>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Not a health sharing ministry — CrowdHealth is a healthcare crowdfunding platform where members fund each other's medical bills. No faith requirement, no coverage caps, month-to-month flexibility, and the lowest cost for young, healthy individuals.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Average Cost</p>
                  <p className="font-bold text-lg">~$140/mo</p>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Model</p>
                  <p className="font-bold text-lg">Crowdfunding</p>
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
              <h3 className="font-serif font-bold text-lg mb-2">✓ Current Pricing</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                All 2026 costs, coverage limits, and policies. We update regularly so you get accurate information.
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
                WhichHealthShare is user-supported. If you find our research helpful, consider supporting us with a tip. This helps us keep our analysis independent and honest.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Blog Carousel */}
      <BlogCarousel />
    </>
  )
}
