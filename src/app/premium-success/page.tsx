'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'

function PremiumSuccessContent() {
  const searchParams = useSearchParams()
  const tier = searchParams.get('tier') || 'unknown'
  const email = searchParams.get('email') || ''
  const [emailSent, setEmailSent] = useState(false)

  // Send thank-you email with download links on page load
  useEffect(() => {
    if (email && tier && !emailSent) {
      fetch('/api/send-results-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, tier }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setEmailSent(true)
          }
        })
        .catch(error => console.error('Failed to send email:', error))
    }
  }, [email, tier, emailSent])

  const getTierInfo = () => {
    switch(tier) {
      case '5':
        return {
          amount: '$5',
          title: 'Thank You for Your Support!',
          message: 'Your contribution helps us keep WhichHealthShare independent and honest.',
          files: [
            { name: 'Health-Sharing-Comparison-Guide.pdf', label: 'Comparison PDF' },
            { name: 'Cost-Calculator-Simple.xlsx', label: 'Simple Cost Calculator' }
          ]
        }
      case '10':
        return {
          amount: '$10',
          title: 'Thank You for Your Support!',
          message: 'Your contribution includes email support to help answer specific questions about your health plan options.',
          files: [
            { name: 'Health-Sharing-Comparison-Guide.pdf', label: 'Comparison PDF' },
            { name: 'Cost-Calculator-Simple.xlsx', label: 'Simple Cost Calculator' }
          ]
        }
      case '20':
        return {
          amount: '$20',
          title: 'Thank You for Your Premium Support!',
          message: 'Your contribution includes advanced scenario analysis and email support to guide you through the switching process.',
          files: [
            { name: 'Health-Sharing-Comparison-Guide.pdf', label: 'Comparison PDF' },
            { name: 'Cost-Calculator-Simple.xlsx', label: 'Simple Cost Calculator' },
            { name: 'Scenario-Calculator-Advanced.xlsx', label: 'Advanced Scenario Calculator' }
          ]
        }
      default:
        return {
          amount: 'Thank you',
          title: 'Thank You!',
          message: 'Your support is greatly appreciated.',
          files: []
        }
    }
  }

  const tierInfo = getTierInfo()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-20 pb-12">
      <div className="section-narrow max-w-2xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">✓</div>
          <h1 className="font-serif font-bold text-4xl mb-3 text-[var(--color-text)]">
            {tierInfo.title}
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] mb-2">
            {tierInfo.amount} received
          </p>
          <p className="text-[var(--color-text-secondary)]">
            {tierInfo.message}
          </p>
        </div>

        {/* Download Section */}
        <div className="bg-white rounded-2xl shadow-lg p-12 mb-8">
          <h2 className="font-serif font-bold text-2xl mb-6 text-[var(--color-text)]">
            Your Downloads
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8">
            Click below to download your resources. Links are also in the email we sent to <strong>{email}</strong>.
          </p>

          <div className="space-y-4 mb-8">
            {tierInfo.files.map((file) => (
              <a
                key={file.name}
                href={`/downloads/${file.name}`}
                download={file.name}
                className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all flex items-center justify-between"
              >
                <span>{file.label}</span>
                <span>↓</span>
              </a>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-[var(--color-text-secondary)]">
            <p className="font-semibold text-[var(--color-text)] mb-2">What's Included:</p>
            <ul className="space-y-1">
              <li>✓ Comparison PDF with plan features checklist</li>
              <li>✓ Cost calculator to model your specific scenario</li>
              {tier === '20' && <li>✓ Advanced scenario calculator for medical cost analysis</li>}
              {(tier === '10' || tier === '20') && <li>✓ Email support for 30 days (email us anytime)</li>}
            </ul>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-amber-50 rounded-2xl p-8 mb-8">
          <h3 className="font-serif font-bold text-xl mb-4 text-[var(--color-text)]">
            Next Steps
          </h3>
          <ol className="space-y-3 text-[var(--color-text-secondary)]">
            <li><strong>1. Download & Review</strong> — Review the PDF to understand each plan's coverage details</li>
            <li><strong>2. Use the Calculator</strong> — Model your expected costs based on your family size and medical needs</li>
            <li><strong>3. Contact Plans</strong> — Call the plans directly (our guide has questions to ask)</li>
            <li><strong>4. Make Your Decision</strong> — Switch and enjoy better coverage or lower costs!</li>
          </ol>
        </div>

        {/* Email Support Notice */}
        {(tier === '10' || tier === '20') && (
          <div className="bg-green-50 rounded-2xl p-8 mb-8">
            <h3 className="font-serif font-bold text-xl mb-3 text-[var(--color-text)]">
              📧 Email Support Included
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-4">
              You have 30 days of email support. Got a question about coverage? Not sure which plan to choose? 
            </p>
            <p className="text-[var(--color-text-secondary)]">
              Email us at <strong>support@whichhealthshare.com</strong> with your question and we'll respond within 48 hours.
            </p>
          </div>
        )}

        {/* Back to Site */}
        <div className="text-center">
          <Link href="/" className="btn btn-secondary px-8">
            Back to WhichHealthShare
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function PremiumSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <PremiumSuccessContent />
    </Suspense>
  )
}
