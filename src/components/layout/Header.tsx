'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [compareOpen, setCompareOpen] = useState(false)
  const [reviewsOpen, setReviewsOpen] = useState(false)

  return (
    <header className="sticky-header fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)]">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
        <Link href="/" className="text-2xl font-serif font-bold text-[var(--color-primary)]">
          WhichHealthShare
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="/compare" className="text-[var(--color-text)] hover:text-[var(--color-primary)]">
            Compare Plans
          </Link>

          <div className="relative group">
            <button className="text-[var(--color-text)] hover:text-[var(--color-primary)]">
              Reviews ▾
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
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

          <Link href="/quiz" className="btn btn-primary">
            Find My Plan →
          </Link>
        </div>

        <div className="md:hidden">
          <Link href="/quiz" className="btn btn-primary text-sm">
            Quiz
          </Link>
        </div>
      </nav>
    </header>
  )
}
