export const metadata = {
  title: 'Affiliate Disclosure — WhichHealthShare'
}

export default function DisclosurePage() {
  return (
    <div className="section-narrow pt-8">
      <h1 className="font-serif font-bold text-4xl mb-6">Affiliate Disclosure</h1>
      
      <div className="card bg-[var(--color-warning)] text-white p-6 mb-8">
        <p className="font-bold text-lg">
          WhichHealthShare.com is a participant in the Amazon Associates Program and affiliate programs with health sharing ministries. We may earn commissions when you click links and make purchases.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="font-serif font-bold text-2xl mb-4">FTC Compliance</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          In compliance with the Federal Trade Commission's 16 CFR Part 255 ("Guides Concerning the Use of Endorsements and Testimonials in Advertising"), we disclose that WhichHealthShare.com may receive compensation from links on this website.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          The compensation received will never influence the content, topics, or posts made on this website. All products and services discussed on this site are recommended based on their merit and our honest opinion of their value to the consumer.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-serif font-bold text-2xl mb-4">Affiliate Partners</h2>
        <ul className="space-y-3">
          <li><strong>CrowdHealth:</strong> $250 per signup referral</li>
          <li><strong>Presidio Healthcare:</strong> Commission rate varies (affiliate program)</li>
          <li><strong>Health Sharing Ministries:</strong> Various commission rates and structures</li>
          <li><strong>HSA for America:</strong> 28% recurring commission</li>
        </ul>
      </section>
    </div>
  )
}
