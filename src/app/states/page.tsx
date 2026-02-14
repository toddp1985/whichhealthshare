import Link from 'next/link'
import { generateBreadcrumb } from '@/lib/schema'

export const metadata = {
  title: 'Health Sharing by State 2026 — State Regulations & Best Plans',
  description: 'State-specific health sharing guides. Understand your state\'s regulations, mandates, and penalties. Find the best plans for residents of TX, FL, CA, and more.',
  alternates: { canonical: '/states' },
}

const states = [
  {
    name: 'Texas',
    slug: 'texas',
    description: 'Health sharing friendly. No mandate, 150,000+ members. TX Insurance Code Ch. 1681.',
    residents: '150,000+',
    mandate: 'None',
    penalty: '$0'
  },
  {
    name: 'Florida',
    slug: 'florida',
    description: 'Health sharing friendly. No mandate, 200,000+ members. FL Statute 624.125.',
    residents: '200,000+',
    mandate: 'None',
    penalty: '$0'
  },
  {
    name: 'California',
    slug: 'california',
    description: 'Individual mandate. $850+ penalty unless exempt. Legal but requires planning.',
    residents: '100,000+',
    mandate: 'Yes',
    penalty: '$850+ per adult'
  }
]

export default function StatesIndexPage() {
  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'States', url: '/states' }
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="section-narrow py-12">
        <h1 className="font-serif font-bold text-5xl mb-4 text-center">Health Sharing by State</h1>
        <p className="text-lg text-center text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto">
          State-specific guides to health sharing regulations, mandates, penalties, and best plans for your state.
        </p>

        <section className="mb-12">
          <h2 className="font-serif font-bold text-2xl mb-4">State Guides Available</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {states.map((state) => (
              <Link
                key={state.slug}
                href={`/states/${state.slug}`}
                className="card hover:shadow-lg transition"
              >
                <h3 className="font-serif font-bold text-xl mb-2">{state.name}</h3>
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--color-text-muted)]">Members:</span>
                    <span className="font-semibold">{state.residents}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--color-text-muted)]">State Mandate:</span>
                    <span className={state.mandate === 'Yes' ? 'font-semibold text-amber-600' : 'font-semibold text-green-600'}>
                      {state.mandate}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--color-text-muted)]">Penalty:</span>
                    <span className="font-semibold">{state.penalty}</span>
                  </div>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">{state.description}</p>
                <span className="text-[var(--color-primary)] hover:underline text-sm font-semibold">
                  Read {state.name} Guide →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-serif font-bold text-2xl mb-4">States with Individual Mandates</h2>
          <div className="card bg-amber-50">
            <p className="text-[var(--color-text-secondary)] mb-3">
              Six states have individual health insurance mandates requiring residents to have "qualifying health coverage"
              or pay a state penalty. Health sharing ministries are legal in these states but do not satisfy the mandate.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              <div>
                <p className="font-bold">California</p>
                <p className="text-[var(--color-text-muted)]">$850+ per adult</p>
              </div>
              <div>
                <p className="font-bold">Massachusetts</p>
                <p className="text-[var(--color-text-muted)]">Varies by income</p>
              </div>
              <div>
                <p className="font-bold">New Jersey</p>
                <p className="text-[var(--color-text-muted)]">$695+ per adult</p>
              </div>
              <div>
                <p className="font-bold">Rhode Island</p>
                <p className="text-[var(--color-text-muted)]">Varies by income</p>
              </div>
              <div>
                <p className="font-bold">Washington DC</p>
                <p className="text-[var(--color-text-muted)]">$695+ per adult</p>
              </div>
              <div>
                <p className="font-bold">Vermont</p>
                <p className="text-[var(--color-text-muted)]">Varies by income</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-serif font-bold text-2xl mb-4">Health Sharing Friendly States</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Most states (44 states) have no individual mandate and no penalty for choosing health sharing. These states
            explicitly recognize health sharing ministries as a legitimate alternative to traditional insurance.
          </p>
          <div className="card">
            <h3 className="font-bold mb-2">Top Health Sharing States by Membership:</h3>
            <ol className="list-decimal ml-6 text-[var(--color-text-secondary)] space-y-1">
              <li>Florida — 200,000+ members (Medi-Share HQ)</li>
              <li>Texas — 150,000+ members (TX Insurance Code Ch. 1681)</li>
              <li>California — 100,000+ members (despite mandate)</li>
              <li>Ohio — 80,000+ members (CHM HQ)</li>
              <li>Illinois — 60,000+ members</li>
              <li>North Carolina — 55,000+ members</li>
              <li>Georgia — 50,000+ members</li>
              <li>Tennessee — 45,000+ members</li>
            </ol>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-serif font-bold text-2xl mb-4">How to Choose a Plan for Your State</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card">
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</span>
                <div>
                  <h3 className="font-bold mb-1">Check Your State Mandate</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    If you live in CA, MA, NJ, RI, DC, or VT, understand your state's penalty and exemptions.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</span>
                <div>
                  <h3 className="font-bold mb-1">Compare Total Cost</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Calculate: health sharing monthly cost + potential penalty vs. your state's ACA marketplace.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</span>
                <div>
                  <h3 className="font-bold mb-1">Verify Provider Access</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Most plans allow any doctor. Zion offers Cigna PPO network in all 50 states.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</span>
                <div>
                  <h3 className="font-bold mb-1">Take Our Quiz</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Get personalized recommendations based on your state, budget, and health needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h2 className="font-serif font-bold text-2xl mb-3">Find Your State's Best Plan</h2>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Take our free 6-question quiz for personalized recommendations.
            </p>
            <Link href="/quiz" className="btn btn-primary inline-block">
              Start Quiz →
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif font-bold text-xl mb-4">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/answers/what-is-health-sharing" className="card p-4 hover:shadow-lg transition">
              <span className="font-serif font-bold">What Is Health Sharing?</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Learn the basics</span>
            </Link>
            <Link href="/compare" className="card p-4 hover:shadow-lg transition">
              <span className="font-serif font-bold">Compare All 16 Plans</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Side-by-side comparison</span>
            </Link>
            <Link href="/calculator" className="card p-4 hover:shadow-lg transition">
              <span className="font-serif font-bold">Cost Calculator</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Estimate your costs</span>
            </Link>
            <Link href="/reviews" className="card p-4 hover:shadow-lg transition">
              <span className="font-serif font-bold">All Plan Reviews</span>
              <span className="text-sm text-[var(--color-primary)] block mt-1">Read detailed reviews</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
