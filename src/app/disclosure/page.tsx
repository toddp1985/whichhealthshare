export const metadata = {
  title: 'Disclosure — WhichHealthShare'
}

export default function DisclosurePage() {
  return (
    <div className="section-narrow pt-8">
      <h1 className="font-serif font-bold text-4xl mb-6">Disclosure</h1>

      <section className="mb-8">
        <h2 className="font-serif font-bold text-2xl mb-4">No Affiliate Relationships</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          WhichHealthShare.com is currently an independent resource. We do not have affiliate agreements with health sharing ministries or other healthcare companies.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          All reviews, comparisons, and recommendations are based solely on publicly available information, user reviews, and our research. We receive no compensation for recommending specific plans.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-serif font-bold text-2xl mb-4">Our Mission</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Our goal is to help people make informed decisions about health sharing by providing transparent, unbiased comparisons and educational content.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          If we establish affiliate relationships in the future, this page will be updated to reflect those partnerships in compliance with FTC guidelines.
        </p>
      </section>
    </div>
  )
}
