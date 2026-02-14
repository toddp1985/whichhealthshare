'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function StickyQuizCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  // Hide on quiz and calculator pages where it's redundant
  const hideOnPages = ['/quiz', '/calculator']
  const shouldHide = hideOnPages.some(p => pathname.startsWith(p))

  useEffect(() => {
    if (shouldHide) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      // Show after 500px scroll, hide near bottom (within 200px of footer)
      const nearBottom = scrollY + winHeight >= docHeight - 200
      setIsVisible(scrollY > 500 && !nearBottom)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [shouldHide])

  if (shouldHide || !isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 z-40 md:hidden shadow-lg">
      <div className="flex items-center gap-3 max-w-md mx-auto">
        <div className="flex-1">
          <p className="text-sm font-bold">Not sure which plan?</p>
          <p className="text-xs opacity-90">6-question quiz finds your match</p>
        </div>
        <Link
          href="/quiz"
          className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-2 px-4 rounded transition whitespace-nowrap text-sm"
        >
          Start →
        </Link>
      </div>
    </div>
  )
}
