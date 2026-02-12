'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/js'

interface TippingModalProps {
  planName: string
  planUrl: string
  onClose?: () => void
}

export default function TippingModal({ planName, planUrl, onClose }: TippingModalProps) {
  const [selectedTip, setSelectedTip] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(true)

  const tipAmounts = [1, 2, 5]

  const handleSkip = () => {
    setShowModal(false)
    window.location.href = planUrl
  }

  const handleTip = async (amount: number) => {
    setLoading(true)
    setSelectedTip(amount)

    try {
      // Create Stripe checkout session
      const response = await fetch('/api/create-tip-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amount * 100, // cents
          planName,
          planUrl,
        }),
      })

      const { sessionId } = await response.json()

      if (sessionId) {
        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)
        await stripe?.redirectToCheckout({ sessionId })
      }
    } catch (error) {
      console.error('Tip error:', error)
      setLoading(false)
    }
  }

  if (!showModal) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="font-serif font-bold text-2xl mb-3">Support This Site</h2>
        
        <p className="text-[var(--color-text-secondary)] mb-6">
          WhichHealthShare is free because readers like you support our work. Your optional tip helps us keep these reviews independent and unbiased.
        </p>

        <p className="text-sm text-[var(--color-text-muted)] mb-6 bg-blue-50 p-3 rounded">
          We earn affiliate commissions when you sign up (same amount regardless of your tip), but tips fund our research and keep us honest.
        </p>

        <div className="space-y-3 mb-8">
          {tipAmounts.map(amount => (
            <button
              key={amount}
              onClick={() => handleTip(amount)}
              disabled={loading}
              className={`w-full px-4 py-3 rounded-lg font-semibold transition-all border-2 ${
                selectedTip === amount
                  ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)]'
                  : 'bg-white text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-accent)]'
              }`}
            >
              {loading && selectedTip === amount ? 'Processing...' : `Tip $${amount}`}
            </button>
          ))}
        </div>

        <button
          onClick={handleSkip}
          disabled={loading}
          className="w-full px-4 py-3 text-[var(--color-text-secondary)] font-semibold hover:text-[var(--color-text)] transition-all"
        >
          Skip, just visit {planName}
        </button>

        <p className="text-xs text-[var(--color-text-muted)] mt-4 text-center">
          Tips are secure and processed by Stripe. No personal data stored.
        </p>
      </div>
    </div>
  )
}
