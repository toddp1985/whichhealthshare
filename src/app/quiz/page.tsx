'use client'

import { useState, useEffect } from 'react'
import { getQuizRecommendations, shouldShowPresidio, QuizAnswers } from '@/lib/quiz-logic'
import CTAButton from '@/components/common/CTAButton'
import StarRating from '@/components/common/StarRating'
import { buildMinistryLink, buildCrowdHealthLink, buildPresidioLink } from '@/lib/affiliate'
import Link from 'next/link'

export default function QuizPage() {
  const [step, setStep] = useState<number>(0)
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({})
  const [results, setResults] = useState<any[] | null>(null)
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

    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      // Submit quiz
      if (ministries.length > 0) {
        const recs = getQuizRecommendations(ministries, newAnswers as QuizAnswers)
        setResults(recs)
      }
    }
  }

  if (results) {
    const crowdhealth = ministries.find(m => m.slug === 'crowdhealth')
    const presidio = ministries.find(m => m.slug === 'presidio-healthcare')
    const showPresidio = shouldShowPresidio(answers as QuizAnswers)

    return (
      <div className="section-narrow pt-8">
        <h1 className="font-serif font-bold text-4xl mb-4 text-center">Your Personalized Recommendations</h1>
        <p className="text-lg text-center text-[var(--color-text-secondary)] mb-12">
          Based on your answers, here are our top 3 recommendations:
        </p>

        <div className="space-y-6 mb-12">
          {results.map((result, i) => (
            <div key={result.ministry.slug} className="card">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-serif font-bold text-2xl">{i + 1}. {result.ministry.name}</h3>
                <StarRating rating={result.ministry.rating} />
              </div>
              <p className="text-[var(--color-text-secondary)] mb-4">{result.reason}</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
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
                  <p className="font-bold text-sm">{result.ministry.memberCount}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Link href={`/reviews/${result.ministry.slug}`} className="btn btn-secondary flex-1 text-center">
                  Read Review →
                </Link>
                <CTAButton
                  href={buildMinistryLink(result.ministry.affiliateLink, result.ministry.slug, 'quiz-result')}
                  variant="primary"
                  className="flex-1 text-center"
                  rel="nofollow sponsored"
                  target="_blank"
                >
                  Visit →
                </CTAButton>
              </div>
            </div>
          ))}
        </div>

        {/* CrowdHealth */}
        {crowdhealth && (
          <div className="card-coral p-6 mb-6">
            <h3 className="font-serif font-bold text-xl mb-3">🧡 Modern Alternative: CrowdHealth</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
              Not a health share — CrowdHealth is a healthcare crowdfunding platform. No faith requirement, no coverage caps, month-to-month flexibility, and the lowest cost for healthy individuals.
            </p>
            <div className="flex gap-3">
              <Link href={`/reviews/crowdhealth`} className="btn btn-secondary flex-1 text-center text-sm">
                Learn More →
              </Link>
              <CTAButton
                href={buildCrowdHealthLink('', 'quiz-result')}
                variant="primary"
                className="flex-1 text-center text-sm"
                rel="nofollow sponsored"
                target="_blank"
              >
                Visit →
              </CTAButton>
            </div>
          </div>
        )}

        {/* Presidio */}
        {showPresidio && presidio && (
          <div className="card-gold p-6 mb-6">
            <h3 className="font-serif font-bold text-xl mb-3">★ Insurance Option: Presidio Healthcare</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
              Since you indicated pre-existing conditions are important, Presidio Healthcare is actual regulated health insurance with guaranteed coverage and zero waiting periods.
            </p>
            <div className="flex gap-3">
              <Link href={`/reviews/presidio-healthcare`} className="btn btn-secondary flex-1 text-center text-sm">
                Learn More →
              </Link>
              <CTAButton
                href={buildPresidioLink('quiz-result')}
                variant="primary"
                className="flex-1 text-center text-sm"
                rel="nofollow sponsored"
                target="_blank"
              >
                Visit →
              </CTAButton>
            </div>
          </div>
        )}

        <div className="text-center">
          <button
            onClick={() => {
              setStep(0)
              setAnswers({})
              setResults(null)
            }}
            className="btn btn-secondary"
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
    <div className="section-narrow pt-8">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h1 className="font-serif font-bold text-2xl">Question {step + 1} of {questions.length}</h1>
          <span className="text-sm text-[var(--color-text-muted)]">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-[var(--color-border)] rounded-full h-2">
          <div
            className="bg-[var(--color-accent)] h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif font-bold text-3xl mb-8">{currentQuestion.question}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentQuestion.options.map(option => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className={`card p-6 text-center font-bold cursor-pointer transition ${
                answers[currentQuestion.id as keyof QuizAnswers] === option.value
                  ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)]'
                  : 'hover:border-[var(--color-accent)]'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="btn btn-secondary mt-8"
          >
            ← Back
          </button>
        )}
      </div>
    </div>
  )
}
