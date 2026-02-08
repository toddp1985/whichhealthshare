export const metadata = {
  title: 'Privacy Policy — WhichHealthShare'
}

export default function PrivacyPage() {
  return (
    <div className="section-narrow pt-8">
      <h1 className="font-serif font-bold text-4xl mb-6">Privacy Policy</h1>
      
      <p className="text-[var(--color-text-secondary)] mb-8">
        Last updated: February 2026
      </p>

      <section className="mb-8">
        <h2 className="font-serif font-bold text-2xl mb-4">Information We Collect</h2>
        <p className="text-[var(--color-text-secondary)]">
          When you subscribe to our email list or take our quiz, we collect your email address and quiz responses to provide personalized recommendations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-serif font-bold text-2xl mb-4">Analytics</h2>
        <p className="text-[var(--color-text-secondary)]">
          We use Plausible Analytics (a privacy-first analytics service) to track site usage. Plausible does NOT use cookies and complies with GDPR.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-serif font-bold text-2xl mb-4">Third-Party Links</h2>
        <p className="text-[var(--color-text-secondary)]">
          This site contains links to third-party websites (health sharing ministries, insurance providers). We're not responsible for their privacy practices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-serif font-bold text-2xl mb-4">Your Rights</h2>
        <p className="text-[var(--color-text-secondary)]">
          You have the right to access, update, or delete your personal information. Email hello@whichhealthshare.com to request.
        </p>
      </section>
    </div>
  )
}
