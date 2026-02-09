'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function StickyQuizCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 z-40 md:hidden shadow-lg">
      <div className="flex items-center gap-3 max-w-md mx-auto">
        <div className="flex-1">
          <p className="text-sm font-bold">Not sure which plan?</p>
          <p className="text-xs opacity-90">3-question quiz finds your match</p>
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
