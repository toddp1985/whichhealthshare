'use client'

import { useState } from 'react'

interface TippingPopupProps {
  isOpen?: boolean
  onClose?: () => void
  context?: string
}

export function TippingPopup({ isOpen, onClose, context = 'general' }: TippingPopupProps) {
  const [loading, setLoading] = useState(false)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [showCustomInput, setShowCustomInput] = useState(false)

  const presetAmounts = [5, 10, 20]

  const handleTip = async (amount: number) => {
    try {
      setLoading(true)
      const amountCents = amount * 100
      
      // Get email from localStorage (set during quiz email capture)
      const email = typeof window !== 'undefined' ? localStorage.getItem('userEmail') || '' : ''

      const response = await fetch('/api/create-tip-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amountCents, email, tier: amount.toString() }),
      })

      const data = await response.json()
      if (data.url) {
        // Redirect to Stripe checkout
        window.location.href = data.url
      } else if (data.error) {
        alert(`Error: ${data.error}`)
      }
    } catch (error) {
      console.error('Tipping error:', error)
      alert('Failed to process tip. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in-95">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none"
          >
            ×
          </button>

          <h3 className="font-serif font-bold text-2xl mb-2 text-[var(--color-text)]">
            Support This Site
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-6">
            Help fund independent, honest health plan reviews
          </p>

          <div className="space-y-4">
            {/* Preset Amount Buttons - One Click Checkout */}
            <div className="grid grid-cols-3 gap-3">
              {presetAmounts.map(amount => (
                <button
                  key={amount}
                  onClick={() => handleTip(amount)}
                  disabled={loading}
                  className="py-3 px-4 rounded-lg font-semibold text-center transition-all bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 text-white shadow-md disabled:cursor-not-allowed"
                >
                  {loading ? '...' : `$${amount}`}
                </button>
              ))}
            </div>

            {/* Custom Amount Input */}
            {!showCustomInput ? (
              <button
                onClick={() => setShowCustomInput(true)}
                className="w-full py-3 px-4 rounded-lg font-semibold text-center transition-all bg-white border-2 border-amber-200 text-[var(--color-text)] hover:border-amber-400"
              >
                Custom Amount
              </button>
            ) : (
              <div className="flex gap-2">
                <input
                  type="number"
                  min="1"
                  value={customAmount}
                  onChange={e => setCustomAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="flex-1 py-3 px-3 rounded-lg border-2 border-amber-200 font-semibold text-center focus:outline-none focus:border-amber-400"
                  autoFocus
                />
                <button
                  onClick={() => {
                    if (customAmount) {
                      handleTip(parseInt(customAmount))
                    }
                  }}
                  disabled={!customAmount || loading}
                  className="py-3 px-6 bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 text-white font-semibold rounded-lg transition-all disabled:cursor-not-allowed"
                >
                  {loading ? '...' : 'Tip'}
                </button>
              </div>
            )}

            {/* Skip Button */}
            <button
              onClick={onClose}
              disabled={loading}
              className="w-full py-3 px-6 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-200 text-[var(--color-text)] font-semibold rounded-lg transition-all disabled:cursor-not-allowed"
            >
              Skip
            </button>
          </div>

          <p className="text-xs text-[var(--color-text-muted)] text-center mt-4">
            Secure payment via Stripe. No account required.
          </p>
        </div>
      </div>
    </>
  )
}
