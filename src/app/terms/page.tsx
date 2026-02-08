export const metadata = {
  title: 'Terms of Service — WhichHealthShare'
}

export default function TermsPage() {
  return (
    <div className="section-narrow pt-8">
      <h1 className="font-serif font-bold text-4xl mb-6">Terms of Service</h1>
      
      <p className="text-[var(--color-text-secondary)] mb-8">
        Last updated: February 2026
      </p>

      <section className="mb-8">
        <h2 className="font-serif font-bold text-2xl mb-4">Disclaimer</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          WhichHealthShare.com provides information about health sharing ministries, crowdfunding platforms, and insurance options for educational purposes only.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          We are NOT healthcare providers, insurance companies, or financial advisors. Always consult with healthcare and financial professionals before making decisions about your health coverage.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-serif font-bold text-2xl mb-4">Accuracy of Information</h2>
        <p className="text-[var(--color-text-secondary)]">
          We strive to provide accurate, current information. However, pricing and policies change frequently. Always verify directly with the provider before enrolling.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-serif font-bold text-2xl mb-4">Limitation of Liability</h2>
        <p className="text-[var(--color-text-secondary)]">
          WhichHealthShare.com is not liable for any damages arising from your use of this website or reliance on its content.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-serif font-bold text-2xl mb-4">Third-Party Content</h2>
        <p className="text-[var(--color-text-secondary)]">
          This site contains links to third-party websites. We're not responsible for their accuracy or content.
        </p>
      </section>
    </div>
  )
}
