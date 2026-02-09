'use client'

import { useState, useEffect } from 'react'
import { trackEmailSignup } from '@/lib/analytics'

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from top of page (back button region)
      if (e.clientY <= 0 && !localStorage.getItem('exitIntentShown')) {
        setIsVisible(true)
        localStorage.setItem('exitIntentShown', 'true')
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/email-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'exit-intent' })
      })

      if (response.ok) {
        setSubmitted(true)
        trackEmailSignup('exit-intent')
        setTimeout(() => setIsVisible(false), 2000)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-8 shadow-xl animate-in fade-in slide-in-from-bottom-4">
        {submitted ? (
          <div className="text-center">
            <h3 className="font-serif font-bold text-xl mb-2">✓ Check Your Email</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              We sent your free health sharing comparison guide. Check your inbox (or spam folder).
            </p>
          </div>
        ) : (
          <>
            <button
              onClick={() => setIsVisible(false)}
              className="float-right text-2xl leading-none"
            >
              ✕
            </button>
            
            <h3 className="font-serif font-bold text-xl mb-2">Wait — Free Comparison Guide</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
              Get our breakdown of all 7 health sharing plans + CrowdHealth + insurance options, with 2026 pricing and honest pros/cons.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition"
              >
                Send Me the Guide
              </button>
            </form>

            <p className="text-xs text-[var(--color-text-muted)] text-center mt-3">
              No spam. Just helpful comparisons.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
