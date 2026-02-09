'use client'

import { useState } from 'react'
import { trackEmailSignup } from '@/lib/analytics'

export default function EmailCaptureForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [validationError, setValidationError] = useState('')

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleBlur = () => {
    if (email && !validateEmail(email)) {
      setValidationError('Please enter a valid email address')
    } else {
      setValidationError('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!validateEmail(email)) {
      setValidationError('Please enter a valid email address')
      return
    }

    setValidationError('')
    setLoading(true)

    try {
      const response = await fetch('/api/email-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      if (response.ok) {
        setSubmitted(true)
        setEmail('')
        trackEmailSignup()
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
      <div className="card border-l-4 border-l-[var(--color-success)] bg-[#f0fdf4] p-8 mb-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="text-3xl">✓</div>
        </div>
        <h3 className="font-serif font-bold text-xl mb-2 text-[var(--color-success)]">Check Your Email in 2 Min</h3>
        <p className="text-sm text-[var(--color-text-secondary)]">
          We've sent your personalized guide to <span className="font-bold">{email}</span>. Check your spam folder if you don't see it.
        </p>
      </div>
    )
  }

  return (
    <div className="card bg-blue-50 border border-blue-200 p-8 mb-8">
      <h2 className="font-serif font-bold text-2xl mb-2 text-[var(--color-text)]">Get Your Full Results Emailed</h2>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Receive personalized application instructions and tips from members who've already switched.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleBlur}
            required
            className="w-full px-4 py-3 text-base border-2 border-[var(--color-border)] rounded-lg font-base transition-all"
            disabled={loading}
          />
          {validationError && (
            <p className="text-sm text-[var(--color-error)] mt-1 font-medium">{validationError}</p>
          )}
          {error && (
            <p className="text-sm text-[var(--color-error)] mt-1 font-medium">{error}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={loading || !!validationError}
          className="btn btn-primary w-full text-base font-semibold h-12"
        >
          {loading ? 'Sending...' : 'Get My Results'}
        </button>
      </form>

      <p className="text-xs text-[var(--color-text-muted)] mt-4 text-center">
        No spam, unsubscribe anytime
      </p>
    </div>
  )
}
