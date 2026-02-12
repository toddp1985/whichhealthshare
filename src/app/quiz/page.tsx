'use client'

import { useState, useEffect } from 'react'
import { getQuizRecommendations, shouldShowPresidio, QuizAnswers } from '@/lib/quiz-logic'
import CTAButton from '@/components/common/CTAButton'
import StarRating from '@/components/common/StarRating'
// Affiliate links removed - using direct website URLs instead
import Link from 'next/link'
import EmailCaptureForm from '@/components/EmailCaptureForm'
import { trackQuizStart, trackQuizCompletion, trackAffiliateClick } from '@/lib/analytics'

export default function QuizPage() {
  const [step, setStep] = useState<number>(0)
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({})
  const [results, setResults] = useState<any[] | null>(null)
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false)
  const [ministries, setMinistries] = useState<any[]>([])

  useEffect(() => {
    // Fetch ministries from API
    fetch('/api/plans')
      .then(res => res.json())
      .then(data => setMinistries(data))
  }, [])

  const questions = [
    {
      id: 'householdSize',
      question: 'What is your household size?',
      options: [
        { label: 'Individual', value: 'individual' },
        { label: 'Couple', value: 'couple' },
        { label: 'Family (3-4)', value: 'family' },
        { label: 'Large Family (5+)', value: 'large-family' }
      ]
    },
    {
      id: 'budget',
      question: 'What is your monthly budget?',
      options: [
        { label: 'Under $150', value: 'under-150' },
        { label: '$150-250', value: '150-250' },
        { label: '$250-400', value: '250-400' },
        { label: 'Over $400', value: 'over-400' }
      ]
    },
    {
      id: 'preExisting',
      question: 'Do you have pre-existing conditions?',
      options: [
        { label: 'No', value: 'no' },
        { label: 'Yes, minor', value: 'minor' },
        { label: 'Yes, significant', value: 'significant' }
      ]
    },
    {
      id: 'faith',
      question: 'What is your faith preference?',
      options: [
        { label: 'Christian', value: 'christian' },
        { label: 'Other faith', value: 'other' },
        { label: 'No preference', value: 'no-preference' },
        { label: 'Prefer secular', value: 'secular' }
      ]
    },
    {
      id: 'priority',
      question: 'What is your coverage priority?',
      options: [
        { label: 'Lowest cost', value: 'cost' },
        { label: 'Best coverage', value: 'coverage' },
        { label: 'Maternity', value: 'maternity' },
        { label: 'Mental health', value: 'mental-health' },
        { label: 'HSA compatible', value: 'hsa' }
      ]
    },
    {
      id: 'guaranteedCoverage',
      question: 'How important is guaranteed coverage?',
      options: [
        { label: 'Very important', value: 'very' },
        { label: 'Somewhat important', value: 'somewhat' },
        { label: 'Not important', value: 'not-important' }
      ]
    }
  ]

  const handleAnswer = (value: any) => {
    const newAnswers = { ...answers, [questions[step].id]: value }
    setAnswers(newAnswers)

    // Track quiz start on first answer
    if (step === 0) {
      trackQuizStart()
    }

    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      // Quiz complete - show email capture form before revealing results
      setQuizCompleted(true)
      trackQuizStart() // Signal quiz completion to analytics
    }
  }

  const handleEmailCaptured = (email: string) => {
    // Now that email is captured, calculate and show results
    if (ministries.length > 0) {
      const recs = getQuizRecommendations(ministries, answers as QuizAnswers)
      setResults(recs)
      
      // Track quiz completion with top recommendation
      if (recs.length > 0) {
        trackQuizCompletion(recs[0].ministry.slug)
      }
    }
  }

  // Show email capture form when quiz is completed but email not yet captured
  if (quizCompleted && !results) {
    return (
      <div className="section-narrow pt-12 pb-12">
        <h1 className="font-serif font-bold text-4xl sm:text-5xl mb-3 text-center text-[var(--color-text)]">
          Almost there!
        </h1>
        <p className="text-lg text-center text-[var(--color-text-secondary)] mb-12">
          Enter your email to see your personalized health plan recommendations
        </p>
        
        <div className="max-w-md mx-auto">
          <EmailCaptureForm onSuccess={handleEmailCaptured} showMessage={false} />
        </div>
      </div>
    )
  }

  if (results) {
    const topResult = results[0]
    const otherResults = results.slice(1)
    const crowdhealth = ministries.find(m => m.slug === 'crowdhealth')
    const presidio = ministries.find(m => m.slug === 'presidio-healthcare')
    const showPresidio = shouldShowPresidio(answers as QuizAnswers)

    return (
      <div className="section-narrow pt-8 pb-12">
        <h1 className="font-serif font-bold text-4xl sm:text-5xl mb-3 text-center text-[var(--color-text)]">
          Your Top Pick
        </h1>
        <p className="text-lg text-center text-[var(--color-text-secondary)] mb-12">
          Based on your answers, we recommend:
        </p>

        {/* Top Recommendation - Large Card */}
        {topResult && (
          <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-[var(--color-accent)] rounded-2xl p-8 sm:p-12 mb-8 shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
              <div>
                <h2 className="font-serif font-bold text-4xl sm:text-5xl text-[var(--color-accent)] mb-2">
                  {topResult.ministry.name}
                </h2>
                <div className="flex items-center gap-2">
                  <StarRating rating={topResult.ministry.rating} />
                  <span className="text-sm text-[var(--color-text-muted)]">
                    {topResult.ministry.rating}/5 ({topResult.ministry.memberCount} members)
                  </span>
                </div>
              </div>
            </div>

            <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
              {topResult.reason}
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-lg p-4 border border-[var(--color-border)]">
                <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase mb-1">Monthly Cost</p>
                <p className="font-serif font-bold text-2xl text-[var(--color-accent)]">
                  ${topResult.ministry.plans[0]?.monthlyRange?.individual?.min}-${topResult.ministry.plans[0]?.monthlyRange?.individual?.max}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-[var(--color-border)]">
                <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase mb-1">Coverage Cap</p>
                <p className="font-serif font-bold text-2xl text-[var(--color-accent)]">
                  {topResult.ministry.plans[0]?.coverageCap || 'Unlimited'}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-[var(--color-border)]">
                <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase mb-1">Waiting Period</p>
                <p className="font-serif font-bold text-2xl text-[var(--color-accent)]">
                  {topResult.ministry.plans[0]?.waitingPeriod || 'None'}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/reviews/${topResult.ministry.slug}`} className="btn btn-secondary flex-1 h-12">
                Read Full Review →
              </Link>
              <CTAButton
                href={topResult.ministry.website}
                variant="primary"
                className="flex-1 h-12"
                target="_blank"
              >
                Visit Website →
              </CTAButton>
            </div>
          </div>
        )}

        {/* Other Recommendations */}
        {otherResults.length > 0 && (
          <div className="mt-12 mb-8">
            <h3 className="font-serif font-bold text-2xl mb-6 text-[var(--color-text)]">
              Other Great Options
            </h3>
            <div className="space-y-4">
              {otherResults.map((result, i) => (
                <div key={result.ministry.slug} className="card hover:shadow-md transition">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h4 className="font-serif font-bold text-xl">
                      {i + 2}. {result.ministry.name}
                    </h4>
                    <StarRating rating={result.ministry.rating} />
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4">{result.reason}</p>
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div>
                      <p className="text-xs text-[var(--color-text-muted)]">Monthly</p>
                      <p className="font-bold">${result.ministry.plans[0]?.monthlyRange?.individual?.min}-${result.ministry.plans[0]?.monthlyRange?.individual?.max}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-text-muted)]">Cap</p>
                      <p className="font-bold">{result.ministry.plans[0]?.coverageCap}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-text-muted)]">Members</p>
                      <p className="font-bold">{result.ministry.memberCount}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link href={`/reviews/${result.ministry.slug}`} className="btn btn-secondary flex-1 text-center text-sm h-10">
                      Read Review →
                    </Link>
                    <CTAButton
                      href={result.ministry.website}
                      variant="primary"
                      className="flex-1 text-center text-sm h-10"
                      target="_blank"
                    >
                      Visit →
                    </CTAButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CrowdHealth Alternative */}
        {crowdhealth && (
          <div className="card-coral p-6 mb-6">
            <h3 className="font-serif font-bold text-xl mb-3">🧡 Modern Alternative: CrowdHealth</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
              Healthcare crowdfunding (not health sharing). No coverage caps, month-to-month, no faith requirement. Best for healthy individuals under 55.
            </p>
            <div className="flex gap-3">
              <Link href={`/reviews/crowdhealth`} className="btn btn-secondary flex-1 text-center text-sm">
                Learn More →
              </Link>
              <CTAButton
                href="https://www.joincrowdhealth.com"
                variant="primary"
                className="flex-1 text-center text-sm"
                target="_blank"
              >
                Visit Website →
              </CTAButton>
            </div>
          </div>
        )}

        {/* Presidio Alternative */}
        {showPresidio && presidio && (
          <div className="card-gold p-6 mb-8">
            <h3 className="font-serif font-bold text-xl mb-3">★ Insurance Option: Presidio Healthcare</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
              Guaranteed coverage with zero waiting periods. Best if pre-existing conditions are critical to your decision.
            </p>
            <div className="flex gap-3">
              <Link href={`/reviews/presidio-healthcare`} className="btn btn-secondary flex-1 text-center text-sm">
                Learn More →
              </Link>
              <CTAButton
                href="https://presidiocare.com"
                variant="primary"
                className="flex-1 text-center text-sm"
                target="_blank"
              >
                Visit Website →
              </CTAButton>
            </div>
          </div>
        )}

        {/* Email Capture - After Results */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <h3 className="font-serif font-bold text-2xl mb-6 text-center text-[var(--color-text)]">Get Your Results Emailed</h3>
          <div className="max-w-md mx-auto">
            <EmailCaptureForm onSuccess={handleEmailCaptured} showMessage={true} />
          </div>
        </div>

        {/* Retake Quiz */}
        <div className="text-center mt-12 pt-8 border-t border-[var(--color-border)]">
          <button
            onClick={() => {
              setStep(0)
              setAnswers({})
              setResults(null)
              setQuizCompleted(false)
            }}
            className="btn btn-secondary px-8"
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    )
  }

  const currentQuestion = questions[step]
  const progress = ((step + 1) / questions.length) * 100

  return (
    <div className="section-narrow pt-8 pb-20 sm:pb-8">
      {/* Progress Indicator */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-3">
          <span className="font-serif font-bold text-lg text-[var(--color-accent)]">
            Step {step + 1}/{questions.length}
          </span>
          <span className="text-sm text-[var(--color-text-muted)]">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-[var(--color-border)] rounded-full h-3 overflow-hidden">
          <div
            className="bg-[var(--color-accent)] h-3 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-10 text-[var(--color-text)] leading-tight">
          {currentQuestion.question}
        </h2>

        <div className="space-y-3 mb-10">
          {currentQuestion.options.map(option => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className={`w-full px-6 py-4 rounded-lg text-center font-semibold text-lg transition-all duration-200 border-2 min-h-[56px] flex items-center justify-center ${
                answers[currentQuestion.id as keyof QuizAnswers] === option.value
                  ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)] shadow-lg'
                  : 'bg-white text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-blue-50'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="flex gap-4 mt-12">
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="btn btn-secondary px-6 h-12 flex-shrink-0"
            >
              ← Back
            </button>
          )}
          <button
            onClick={() => handleAnswer(answers[currentQuestion.id as keyof QuizAnswers])}
            disabled={!answers[currentQuestion.id as keyof QuizAnswers]}
            className="btn btn-primary flex-1 h-12 text-lg font-semibold"
          >
            {step === questions.length - 1 ? 'See Results' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  )
}
