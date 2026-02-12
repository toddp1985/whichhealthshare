import Link from 'next/link'
import CTAButton from '@/components/common/CTAButton'

export const metadata = {
  title: 'Presidio Healthcare: Insurance Alternative to Health Sharing — WhichHealthShare',
  description: 'In-depth Presidio Healthcare review with real 2026 pricing, coverage details, how it differs from health sharing, and comparison to alternatives.',
}

export default function PresidioPartnerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero */}
      <section className="section-narrow py-16 sm:py-24">
        <h1 className="font-serif font-bold text-4xl sm:text-5xl mb-4 text-center">
          Presidio Healthcare: Regulated Insurance Alternative
        </h1>
        <p className="text-xl text-center text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
          Real health insurance without ACA marketplace complexity. Covers pre-existing conditions from day one, no waiting periods, and simpler application process.
        </p>
        <div className="flex justify-center gap-4">
          <CTAButton href="/reviews/presidio-healthcare" variant="primary" className="text-lg">
            View Full Review
          </CTAButton>
          <CTAButton href="/compare" variant="secondary" className="text-lg">
            Compare All Plans
          </CTAButton>
        </div>
      </section>

      {/* Key Stats */}
      <section className="section-narrow py-16 bg-white border-y border-amber-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-12">
          <div>
            <p className="text-sm text-[var(--color-text-muted)] uppercase mb-2">Monthly Cost</p>
            <p className="font-serif font-bold text-3xl">$300–$600</p>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Individual</p>
          </div>
          <div>
            <p className="text-sm text-[var(--color-text-muted)] uppercase mb-2">Type</p>
            <p className="font-serif font-bold text-3xl">Real Insurance</p>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Regulated, guaranteed</p>
          </div>
          <div>
            <p className="text-sm text-[var(--color-text-muted)] uppercase mb-2">Waiting Period</p>
            <p className="font-serif font-bold text-3xl">None</p>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Coverage starts immediately</p>
          </div>
          <div>
            <p className="text-sm text-[var(--color-text-muted)] uppercase mb-2">Pre-Existing</p>
            <p className="font-serif font-bold text-3xl">Day 1</p>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Fully covered</p>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200 p-8">
          <h2 className="font-serif font-bold text-2xl mb-4">Best For</h2>
          <ul className="space-y-3 text-lg">
            <li>✓ People with pre-existing conditions</li>
            <li>✓ Those wanting guaranteed coverage (not health sharing)</li>
            <li>✓ Anyone needing immediate coverage with no waiting period</li>
            <li>✓ Families seeking legal protections and regulated insurance</li>
          </ul>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="section-narrow py-16">
        <h2 className="font-serif font-bold text-3xl mb-8 text-center">Insurance vs. Health Sharing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="font-bold mb-4">✓ Presidio Advantages</h3>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li>• Regulated health insurance (legal guarantees)</li>
              <li>• Pre-existing conditions covered from day 1</li>
              <li>• No waiting periods for any coverage</li>
              <li>• Simpler claims process than health sharing</li>
              <li>• No faith requirement or lifestyle restrictions</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-bold mb-4">⚠ Higher Cost</h3>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li>• Monthly cost: $300–$600 (vs. $150–$300 health sharing)</li>
              <li>• Premium for legal protections and guarantees</li>
              <li>• Better value if you have ongoing medical needs</li>
              <li>• Comparable to ACA marketplace plans</li>
              <li>• Worth cost if pre-existing conditions required</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-narrow py-16 bg-amber-50">
        <h2 className="font-serif font-bold text-3xl mb-8 text-center">Insurance vs. Health Sharing: Key Differences</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-amber-200 border-b-2 border-amber-300">
                <th className="p-3 text-left font-bold">Feature</th>
                <th className="p-3 text-center font-bold">Presidio (Insurance)</th>
                <th className="p-3 text-center font-bold">Medi-Share (Sharing)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-amber-100">
                <td className="p-3 font-medium">Type</td>
                <td className="p-3 text-center">Regulated insurance</td>
                <td className="p-3 text-center">Voluntary sharing</td>
              </tr>
              <tr className="border-b border-amber-100">
                <td className="p-3 font-medium">Pre-Existing Coverage</td>
                <td className="p-3 text-center">Day 1</td>
                <td className="p-3 text-center">12-month wait</td>
              </tr>
              <tr className="border-b border-amber-100">
                <td className="p-3 font-medium">Waiting Period</td>
                <td className="p-3 text-center">None</td>
                <td className="p-3 text-center">30 days</td>
              </tr>
              <tr className="border-b border-amber-100">
                <td className="p-3 font-medium">Legal Guarantee</td>
                <td className="p-3 text-center">Yes (regulated)</td>
                <td className="p-3 text-center">No (voluntary)</td>
              </tr>
              <tr className="border-b border-amber-100">
                <td className="p-3 font-medium">Monthly Cost</td>
                <td className="p-3 text-center">$300–$600</td>
                <td className="p-3 text-center">$199–$399</td>
              </tr>
              <tr className="bg-amber-50">
                <td className="p-3 font-medium">Best For</td>
                <td className="p-3 text-center">Pre-existing conditions</td>
                <td className="p-3 text-center">Healthy individuals</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="section-narrow py-16">
        <div className="card border-2 border-amber-600 bg-gradient-to-br from-amber-50 to-white p-12 text-center">
          <h2 className="font-serif font-bold text-3xl mb-4">Right Choice for Your Situation?</h2>
          <p className="text-lg text-[var(--color-text-secondary)] mb-8">
            Presidio is your best option if you have pre-existing conditions or need guaranteed coverage. Read our complete review or compare with other plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/reviews/presidio-healthcare" variant="primary" className="text-lg px-8">
              Read Full Review →
            </CTAButton>
            <CTAButton href="/compare" variant="secondary" className="text-lg px-8">
              Compare All Plans
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
