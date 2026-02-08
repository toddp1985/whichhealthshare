'use client'

import { useState } from 'react'

export default function EmailCaptureForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // This will integrate with ConvertKit via API
      // For now, store email locally and track in analytics
      const response = await fetch('/api/email-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      if (response.ok) {
        setSubmitted(true)
        setEmail('')
        // Track in Plausible
        if (typeof window !== 'undefined' && (window as any).plausible) {
          (window as any).plausible('Email Signup', { props: { source: 'quiz-result' } })
        }
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Could not submit email. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="card bg-teal-50 border border-teal-200 p-6 mb-8">
        <div className="text-center">
          <h3 className="font-serif font-bold text-xl mb-2">✓ Email Confirmed</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Check your inbox for your personalized guide and next steps. If you don't see it, check your spam folder.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="card bg-teal-50 border border-teal-200 p-6 mb-8">
      <h3 className="font-serif font-bold text-xl mb-2">📧 Get Your Personal Guide</h3>
      <p className="text-sm text-[var(--color-text-secondary)] mb-4">
        Enter your email to receive step-by-step instructions for applying to your recommended plan, plus tips from members who've already switched.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          disabled={loading}
        />
        
        {error && <p className="text-sm text-red-600">{error}</p>}
        
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-full"
        >
          {loading ? 'Sending...' : 'Send Me My Guide'}
        </button>
      </form>

      <p className="text-xs text-[var(--color-text-muted)] mt-3 text-center">
        No spam. Just helpful tips. Unsubscribe anytime.
      </p>
    </div>
  )
}
