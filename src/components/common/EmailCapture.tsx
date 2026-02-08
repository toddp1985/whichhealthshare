'use client'

export default function EmailCapture({ title = "Get Our Comparison Guide" }) {
  return (
    <div className="bg-[var(--color-gold-bg)] border-2 border-[var(--color-gold-border)] rounded-lg p-6 max-w-md mx-auto">
      <h3 className="font-serif font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-[var(--color-text-secondary)] mb-4">
        Join 50,000+ people comparing health plans
      </p>
      <form className="space-y-3">
        <input
          type="email"
          placeholder="Your email"
          required
          className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg text-sm"
        />
        <button
          type="submit"
          className="w-full btn btn-primary text-sm"
        >
          Get Free Guide →
        </button>
      </form>
      <p className="text-xs text-[var(--color-text-muted)] mt-3">
        No spam. We respect your inbox.
      </p>
    </div>
  )
}
