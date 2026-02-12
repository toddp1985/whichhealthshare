import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-warm)] border-t border-[var(--color-border)] mt-12">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8 items-start">
          <div className="col-span-1">
            <h3 className="font-serif font-bold text-lg mb-4">WhichHealthShare</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Find the right health sharing plan for your family.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/compare" className="text-[var(--color-primary)] hover:underline">
                  Compare Plans
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="text-[var(--color-primary)] hover:underline">
                  Take Quiz
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-[var(--color-primary)] hover:underline">
                  All Reviews
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog/2026-health-sharing-what-changed" className="text-[var(--color-primary)] hover:underline">
                  What Changed in 2026
                </Link>
              </li>
              <li>
                <Link href="/blog/crowdhealth-vs-health-sharing" className="text-[var(--color-primary)] hover:underline">
                  CrowdHealth vs Health Sharing
                </Link>
              </li>
              <li>
                <Link href="/blog/non-religious-health-sharing-options" className="text-[var(--color-primary)] hover:underline">
                  Secular Options
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-[var(--color-primary)] hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/disclosure" className="text-[var(--color-primary)] hover:underline">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[var(--color-primary)] hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[var(--color-primary)] hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)] pt-8 text-center text-sm text-[var(--color-text-secondary)]">
          <p>© 2026 WhichHealthShare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
