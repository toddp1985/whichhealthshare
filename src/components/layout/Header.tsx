'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const linkClass = (href: string) =>
    isActive(href)
      ? 'text-[var(--color-primary)] font-semibold'
      : 'text-[var(--color-text)] hover:text-[var(--color-primary)]'

  return (
    <header className="sticky-header fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)]">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
        <Link href="/" className="text-2xl font-serif font-bold text-[var(--color-primary)]">
          WhichHealthShare
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/compare" className={linkClass('/compare')}>
            Compare Plans
          </Link>

          <div className="relative group">
            <button className={`${linkClass('/reviews')} cursor-pointer`}>
              Reviews ▾
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
              <Link href="/reviews" className="block px-4 py-2 hover:bg-[var(--color-bg-warm)] font-semibold">
                All Reviews
              </Link>
              <Link href="/reviews/zion-healthshare" className="block px-4 py-2 hover:bg-[var(--color-bg-warm)]">
                Zion HealthShare
              </Link>
              <Link href="/reviews/medi-share" className="block px-4 py-2 hover:bg-[var(--color-bg-warm)]">
                Medi-Share
              </Link>
              <Link href="/reviews/chm" className="block px-4 py-2 hover:bg-[var(--color-bg-warm)]">
                CHM
              </Link>
              <Link href="/reviews/sedera" className="block px-4 py-2 hover:bg-[var(--color-bg-warm)]">
                Sedera
              </Link>
              <Link href="/reviews/crowdhealth" className="block px-4 py-2 hover:bg-[var(--color-bg-warm)]">
                CrowdHealth
              </Link>
              <Link href="/reviews/presidio-healthcare" className="block px-4 py-2 hover:bg-[var(--color-bg-warm)]">
                Presidio Healthcare
              </Link>
            </div>
          </div>

          <Link href="/answers" className={linkClass('/answers')}>
            Answers
          </Link>

          <Link href="/quiz" className="btn btn-primary">
            Find My Plan →
          </Link>
        </div>

        {/* Mobile: Hamburger + Quiz */}
        <div className="md:hidden flex items-center gap-3">
          <Link href="/quiz" className="btn btn-primary text-sm">
            Quiz
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-[var(--color-text)]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-white" role="navigation" aria-label="Mobile navigation">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/compare"
              className={`block text-lg font-semibold ${linkClass('/compare')}`}
              onClick={() => setMobileOpen(false)}
            >
              Compare Plans
            </Link>
            <Link
              href="/reviews"
              className={`block text-lg font-semibold ${linkClass('/reviews')}`}
              onClick={() => setMobileOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/answers"
              className={`block text-lg font-semibold ${linkClass('/answers')}`}
              onClick={() => setMobileOpen(false)}
            >
              Answers
            </Link>
            <Link
              href="/blog"
              className={`block text-lg font-semibold ${linkClass('/blog')}`}
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/calculator"
              className={`block text-lg font-semibold ${linkClass('/calculator')}`}
              onClick={() => setMobileOpen(false)}
            >
              Cost Calculator
            </Link>
            <Link
              href="/quiz"
              className="block btn btn-primary text-center h-12"
              onClick={() => setMobileOpen(false)}
            >
              Find My Plan →
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
