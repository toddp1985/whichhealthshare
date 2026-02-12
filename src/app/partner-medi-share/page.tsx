import Link from 'next/link'
import CTAButton from '@/components/common/CTAButton'

export const metadata = {
  title: 'Medi-Share Review & Pricing Guide — WhichHealthShare',
  description: 'In-depth Medi-Share review with real 2026 pricing, coverage details, pros and cons, and comparison to alternatives.',
}

export default function MediSharePartnerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero */}
      <section className="section-narrow py-16 sm:py-24">
        <h1 className="font-serif font-bold text-4xl sm:text-5xl mb-4 text-center">
          Medi-Share: Comprehensive Review & Pricing Guide
        </h1>
        <p className="text-xl text-center text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
          Honest breakdown of America's largest health sharing ministry. Real costs, coverage limits, member experiences, and how it compares to 5 alternatives.
        </p>
        <div className="flex justify-center gap-4">
          <CTAButton href="/reviews/medi-share" variant="primary" className="text-lg">
            View Full Review
          </CTAButton>
          <CTAButton href="/compare" variant="secondary" className="text-lg">
            Compare All Plans
          </CTAButton>
        </div>
      </section>

      {/* Key Stats */}
      <section className="section-narrow py-16 bg-white border-y border-blue-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-12">
          <div>
            <p className="text-sm text-[var(--color-text-muted)] uppercase mb-2">Monthly Cost</p>
            <p className="font-serif font-bold text-3xl">$199–$399</p>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Individual</p>
          </div>
          <div>
            <p className="text-sm text-[var(--color-text-muted)] uppercase mb-2">Members</p>
            <p className="font-serif font-bold text-3xl">500K+</p>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Since 1992</p>
          </div>
          <div>
            <p className="text-sm text-[var(--color-text-muted)] uppercase mb-2">Waiting Period</p>
            <p className="font-serif font-bold text-3xl">30 Days</p>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Acute conditions</p>
          </div>
          <div>
            <p className="text-sm text-[var(--color-text-muted)] uppercase mb-2">Coverage Cap</p>
            <p className="font-serif font-bold text-3xl">$250K+</p>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Per condition</p>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 p-8">
          <h2 className="font-serif font-bold text-2xl mb-4">Best For</h2>
          <ul className="space-y-3 text-lg">
            <li>✓ Families wanting stable, predictable monthly costs</li>
            <li>✓ Christian households (faith-based model)</li>
            <li>✓ Budget-conscious members without pre-existing conditions</li>
            <li>✓ Those seeking established, mature organization (30+ years)</li>
          </ul>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="section-narrow py-16">
        <h2 className="font-serif font-bold text-3xl mb-8 text-center">Quick Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="font-bold mb-4">✓ Strengths</h3>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li>• Largest health sharing ministry (500K+ members)</li>
              <li>• Established track record (30+ years)</li>
              <li>• No major rate increases in recent years</li>
              <li>• Supports various coverage scenarios</li>
              <li>• Strong member support team</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-bold mb-4">⚠ Limitations</h3>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li>• 30-day waiting period for acute care</li>
              <li>• 12-month exclusion for pre-existing conditions</li>
              <li>• Christian faith requirement (participation in Medi-Share lifestyle)</li>
              <li>• Not regulated like insurance (no legal guarantees)</li>
              <li>• Coverage caps on some conditions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-narrow py-16 bg-blue-50">
        <h2 className="font-serif font-bold text-3xl mb-8 text-center">How Medi-Share Compares</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-200 border-b-2 border-blue-300">
                <th className="p-3 text-left font-bold">Feature</th>
                <th className="p-3 text-center font-bold">Medi-Share</th>
                <th className="p-3 text-center font-bold">Sedera</th>
                <th className="p-3 text-center font-bold">CrowdHealth</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-blue-100">
                <td className="p-3 font-medium">Monthly Cost</td>
                <td className="p-3 text-center">$199–$399</td>
                <td className="p-3 text-center">$179–$359</td>
                <td className="p-3 text-center">$80–$180</td>
              </tr>
              <tr className="border-b border-blue-100">
                <td className="p-3 font-medium">Waiting Period</td>
                <td className="p-3 text-center">30 days</td>
                <td className="p-3 text-center">30 days</td>
                <td className="p-3 text-center">None</td>
              </tr>
              <tr className="border-b border-blue-100">
                <td className="p-3 font-medium">Pre-Existing Waiting</td>
                <td className="p-3 text-center">12 months</td>
                <td className="p-3 text-center">12 months</td>
                <td className="p-3 text-center">None</td>
              </tr>
              <tr className="border-b border-blue-100">
                <td className="p-3 font-medium">Faith Requirement</td>
                <td className="p-3 text-center">Christian</td>
                <td className="p-3 text-center">Christian</td>
                <td className="p-3 text-center">None</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="p-3 font-medium">Members</td>
                <td className="p-3 text-center">500K+</td>
                <td className="p-3 text-center">100K+</td>
                <td className="p-3 text-center">150K+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="section-narrow py-16">
        <div className="card border-2 border-blue-600 bg-gradient-to-br from-blue-50 to-white p-12 text-center">
          <h2 className="font-serif font-bold text-3xl mb-4">Ready to Learn More?</h2>
          <p className="text-lg text-[var(--color-text-secondary)] mb-8">
            Read our complete Medi-Share review, see detailed pricing breakdowns, and compare against 5 other plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/reviews/medi-share" variant="primary" className="text-lg px-8">
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
