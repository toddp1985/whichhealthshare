import Link from 'next/link'

export default function AnswerPageCTA() {
  return (
    <section className="mb-10">
      <div className="bg-gradient-to-br from-[var(--color-primary-lighter)] to-white border border-[var(--color-primary)] rounded-lg p-6 md:p-8">
        <h2 className="font-serif font-bold text-xl md:text-2xl mb-3">
          Find Your Best Plan in 60 Seconds
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-5 max-w-xl">
          Answer 6 quick questions and we'll match you with the health sharing plan
          that fits your budget, health needs, and preferences.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:opacity-90 transition"
          >
            Take the Free Quiz →
          </Link>
          <Link
            href="/compare"
            className="inline-flex items-center justify-center px-6 py-3 border border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary-lighter)] transition"
          >
            Compare All 16 Plans
          </Link>
        </div>
        <p className="text-xs text-[var(--color-text-secondary)] mt-3">
          No email required. See results instantly.
        </p>
      </div>
    </section>
  )
}
