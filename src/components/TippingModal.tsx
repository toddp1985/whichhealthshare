'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/js'

interface TippingModalProps {
  context?: string // 'quiz' | 'blog' | 'general'
}

export default function TippingModal({ context = 'general' }: TippingModalProps) {
  const [selectedAmount, setSelectedAmount] = useState<number>(10)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [showCustomInput, setShowCustomInput] = useState(false)

  const presetAmounts = [5, 10, 20]

  const handleTip = async () => {
    try {
      setLoading(true)
      const amount = showCustomInput ? parseInt(customAmount) * 100 : selectedAmount * 100

      if (!amount || amount < 100) {
        alert('Minimum tip is $1')
        setLoading(false)
        return
      }

      const response = await fetch('/api/create-tip-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          planName: 'WhichHealthShare Research Support',
          planUrl: window.location.href,
        }),
      })

      const data = await response.json()
      if (data.sessionId) {
        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
        if (stripe) {
          stripe.redirectToCheckout({ sessionId: data.sessionId })
        }
      }
    } catch (error) {
      console.error('Tipping error:', error)
      alert('Failed to process tip. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const displayAmount = showCustomInput ? customAmount : selectedAmount

  return (
    <div className="card p-8 bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200">
      <h3 className="font-serif font-bold text-2xl mb-2 text-[var(--color-text)]">
        Support This Site
      </h3>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Help fund independent, honest health plan reviews
      </p>

      <div className="space-y-4">
        {/* Preset Amount Buttons */}
        <div className="grid grid-cols-3 gap-3">
          {presetAmounts.map(amount => (
            <button
              key={amount}
              onClick={() => {
                setSelectedAmount(amount)
                setShowCustomInput(false)
                setCustomAmount('')
              }}
              className={`py-3 px-4 rounded-lg font-semibold text-center transition-all ${
                !showCustomInput && selectedAmount === amount
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-white border-2 border-amber-200 text-[var(--color-text)] hover:border-amber-400'
              }`}
            >
              ${amount}
            </button>
          ))}
        </div>

        {/* Custom Amount Input */}
        <div className="flex gap-2">
          <button
            onClick={() => setShowCustomInput(!showCustomInput)}
            className={`flex-1 py-3 px-4 rounded-lg font-semibold text-center transition-all ${
              showCustomInput
                ? 'bg-amber-500 text-white shadow-md'
                : 'bg-white border-2 border-amber-200 text-[var(--color-text)] hover:border-amber-400'
            }`}
          >
            Custom
          </button>
          {showCustomInput && (
            <input
              type="number"
              min="1"
              value={customAmount}
              onChange={e => setCustomAmount(e.target.value)}
              placeholder="$"
              className="w-20 py-3 px-3 rounded-lg border-2 border-amber-200 font-semibold text-center focus:outline-none focus:border-amber-400"
            />
          )}
        </div>

        {/* Tip Button */}
        <button
          onClick={handleTip}
          disabled={loading || (showCustomInput && !customAmount)}
          className="w-full py-3 px-6 bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 text-white font-semibold rounded-lg transition-all shadow-md disabled:cursor-not-allowed"
        >
          {loading ? 'Processing...' : `Tip $${displayAmount}`}
        </button>
      </div>

      <p className="text-xs text-[var(--color-text-muted)] text-center mt-4">
        Secure payment via Stripe. No account required.
      </p>
    </div>
  )
}
