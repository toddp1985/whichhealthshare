'use client'

import { useState, useEffect, useMemo } from 'react'
import { buildMinistryLink } from '@/lib/affiliate'
import Link from 'next/link'

type HouseholdSize = 'individual' | 'couple' | 'family'
type AgeRange = '18-29' | '30-39' | '40-49' | '50-64' | '65+'
type PreExisting = 'no' | 'yes'

interface Ministry {
  slug: string
  name: string
  type: 'healthshare' | 'insurance' | 'crowdfunding'
  faithRequirement: string
  website: string
  affiliateLink: string
  rating: number
  preExisting: {
    accepted: boolean
    waitingPeriod: string
    phasedSharing: boolean
    sharingLimits: string
  }
  plans: {
    name: string
    monthlyRange: {
      individual?: { min: number; max: number }
      couple?: { min: number; max: number }
      family?: { min: number; max: number }
    }
    coverageCap: string
    iua: number[]
    coShare: string
  }[]
}

interface PlanEstimate {
  ministry: Ministry
  monthlyMin: number
  monthlyMax: number
  annualMin: number
  annualMax: number
  lowestIua: number
  annualWithIua: number
  faithNote: string | null
  preExistingNote: string | null
}

// Age multipliers to estimate cost variation by age bracket
// Younger members typically pay less; older members pay more
const AGE_MULTIPLIERS: Record<AgeRange, number> = {
  '18-29': 0.85,
  '30-39': 0.95,
  '40-49': 1.0,
  '50-64': 1.15,
  '65+': 1.3,
}

// Average ACA marketplace costs by household size (2026 estimates)
const ACA_COSTS: Record<HouseholdSize, { min: number; max: number }> = {
  individual: { min: 400, max: 600 },
  couple: { min: 700, max: 1100 },
  family: { min: 900, max: 1500 },
}

function getFaithNote(faithReq: string): string | null {
  switch (faithReq) {
    case 'christian-strict':
      return 'Requires active Christian faith and church attendance'
    case 'christian-light':
      return 'Requires Christian statement of faith'
    case 'catholic':
      return 'Catholic faith community'
    case 'jewish':
      return 'Requires Jewish faith and Torah-based lifestyle'
    case 'any-faith':
      return null
    case 'secular':
      return null
    default:
      return null
  }
}

function getPreExistingNote(ministry: Ministry, hasPreExisting: boolean): string | null {
  if (!hasPreExisting) return null
  const pe = ministry.preExisting
  if (!pe.waitingPeriod || pe.waitingPeriod === 'None') {
    return 'Pre-existing conditions covered from day one'
  }
  return `${pe.waitingPeriod} waiting period for pre-existing conditions`
}

export default function Calculator() {
  const [ministries, setMinistries] = useState<Ministry[]>([])
  const [loading, setLoading] = useState(true)
  const [householdSize, setHouseholdSize] = useState<HouseholdSize>('individual')
  const [ageRange, setAgeRange] = useState<AgeRange>('30-39')
  const [preExisting, setPreExisting] = useState<PreExisting>('no')

  useEffect(() => {
    fetch('/api/plans?all=true')
      .then((res) => res.json())
      .then((data) => {
        setMinistries(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const estimates: PlanEstimate[] = useMemo(() => {
    if (ministries.length === 0) return []

    const multiplier = AGE_MULTIPLIERS[ageRange]
    const hasPreExisting = preExisting === 'yes'

    return ministries
      .map((ministry) => {
        const plan = ministry.plans[0]
        if (!plan) return null

        const range = plan.monthlyRange[householdSize]
        if (!range) return null

        // Apply age multiplier to estimate costs
        const monthlyMin = Math.round(range.min * multiplier)
        const monthlyMax = Math.round(range.max * multiplier)
        const annualMin = monthlyMin * 12
        const annualMax = monthlyMax * 12
        const lowestIua = plan.iua.length > 0 ? Math.min(...plan.iua) : 0
        // Annual total estimate = 12 months of mid-range cost + lowest IUA
        const annualWithIua = Math.round(((monthlyMin + monthlyMax) / 2) * 12 + lowestIua)

        return {
          ministry,
          monthlyMin,
          monthlyMax,
          annualMin,
          annualMax,
          lowestIua,
          annualWithIua,
          faithNote: getFaithNote(ministry.faithRequirement),
          preExistingNote: getPreExistingNote(ministry, hasPreExisting),
        } as PlanEstimate
      })
      .filter((e): e is PlanEstimate => e !== null)
      .sort((a, b) => a.monthlyMin - b.monthlyMin)
  }, [ministries, householdSize, ageRange, preExisting])

  const acaCost = ACA_COSTS[householdSize]

  return (
    <div className="section-narrow pt-8 pb-12">
      <h1 className="font-serif font-bold text-4xl sm:text-5xl mb-3 text-center text-[var(--color-text)]">
        Cost Calculator
      </h1>
      <p className="text-lg text-center text-[var(--color-text-secondary)] mb-10">
        Compare estimated monthly costs across all health sharing plans. Adjust your household details
        to see personalized pricing.
      </p>

      {/* Input Controls */}
      <div className="card p-6 sm:p-8 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Household Size */}
          <div>
            <label className="block text-sm font-semibold text-[var(--color-text-muted)] uppercase mb-2">
              Household Size
            </label>
            <div className="space-y-2">
              {([
                { value: 'individual', label: 'Individual' },
                { value: 'couple', label: 'Couple' },
                { value: 'family', label: 'Family' },
              ] as const).map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setHouseholdSize(opt.value)}
                  className={`w-full px-4 py-3 rounded-lg text-left font-semibold text-sm transition-all duration-200 border-2 ${
                    householdSize === opt.value
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-600 shadow-md'
                      : 'bg-white text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-blue-50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Age Range */}
          <div>
            <label className="block text-sm font-semibold text-[var(--color-text-muted)] uppercase mb-2">
              Age Range
            </label>
            <div className="space-y-2">
              {([
                { value: '18-29', label: '18-29' },
                { value: '30-39', label: '30-39' },
                { value: '40-49', label: '40-49' },
                { value: '50-64', label: '50-64' },
                { value: '65+', label: '65+' },
              ] as const).map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setAgeRange(opt.value)}
                  className={`w-full px-4 py-3 rounded-lg text-left font-semibold text-sm transition-all duration-200 border-2 ${
                    ageRange === opt.value
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-600 shadow-md'
                      : 'bg-white text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-blue-50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Pre-Existing Conditions */}
          <div>
            <label className="block text-sm font-semibold text-[var(--color-text-muted)] uppercase mb-2">
              Pre-Existing Conditions
            </label>
            <div className="space-y-2">
              {([
                { value: 'no', label: 'No' },
                { value: 'yes', label: 'Yes' },
              ] as const).map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setPreExisting(opt.value)}
                  className={`w-full px-4 py-3 rounded-lg text-left font-semibold text-sm transition-all duration-200 border-2 ${
                    preExisting === opt.value
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-600 shadow-md'
                      : 'bg-white text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-blue-50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-12">
          <p className="text-lg text-[var(--color-text-secondary)]">Loading plans...</p>
        </div>
      )}

      {/* Results */}
      {!loading && estimates.length > 0 && (
        <>
          <p className="text-sm text-[var(--color-text-muted)] mb-6 text-center">
            Showing {estimates.length} plans sorted by lowest monthly cost. Prices are estimates
            based on published rates and may vary by location and health history.
          </p>

          {/* ACA Comparison Banner */}
          <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-5 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <p className="font-serif font-bold text-lg text-amber-900">
                  ACA Marketplace Comparison
                </p>
                <p className="text-sm text-amber-800">
                  Average ACA marketplace plan for{' '}
                  {householdSize === 'individual'
                    ? 'an individual'
                    : householdSize === 'couple'
                      ? 'a couple'
                      : 'a family'}{' '}
                  (without subsidies)
                </p>
              </div>
              <div className="text-right">
                <p className="font-serif font-bold text-2xl text-amber-900">
                  ${acaCost.min}-${acaCost.max}/mo
                </p>
                <p className="text-xs text-amber-700">
                  ${(acaCost.min * 12).toLocaleString()}-${(acaCost.max * 12).toLocaleString()}/yr
                </p>
              </div>
            </div>
          </div>

          {/* Mobile: Stacked Cards */}
          <div className="md:hidden space-y-4 mb-8">
            {estimates.map((est, idx) => (
              <div key={est.ministry.slug} className="card p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-xs font-bold text-[var(--color-accent)] mb-1">
                      #{idx + 1} cheapest
                    </p>
                    <h3 className="font-serif font-bold text-xl">
                      <Link
                        href={`/reviews/${est.ministry.slug}`}
                        className="text-[var(--color-accent)] hover:underline"
                      >
                        {est.ministry.name}
                      </Link>
                    </h3>
                  </div>
                  <span className="text-xs font-semibold bg-blue-100 text-blue-900 px-2 py-1 rounded-full">
                    {est.ministry.type === 'healthshare'
                      ? 'Health Share'
                      : est.ministry.type === 'crowdfunding'
                        ? 'Crowdfunding'
                        : 'Insurance'}
                  </span>
                </div>

                <div className="space-y-3 mb-4 text-sm">
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase mb-1">
                      Monthly Cost
                    </p>
                    <p className="font-serif font-bold text-2xl text-[var(--color-accent)]">
                      ${est.monthlyMin}-${est.monthlyMax}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase mb-1">
                        Annual Total
                      </p>
                      <p className="font-bold">${est.annualMin.toLocaleString()}-${est.annualMax.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase mb-1">
                        Annual + Lowest IUA
                      </p>
                      <p className="font-bold">${est.annualWithIua.toLocaleString()}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase mb-1">
                      Coverage Cap
                    </p>
                    <p className="font-bold">{est.ministry.plans[0]?.coverageCap || 'Unlimited'}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase mb-1">
                      IUA Options
                    </p>
                    <p className="font-bold">
                      {est.ministry.plans[0]?.iua.map((v) => `$${v.toLocaleString()}`).join(', ')}
                    </p>
                  </div>
                </div>

                {/* Notes */}
                {(est.faithNote || est.preExistingNote) && (
                  <div className="space-y-1 mb-4">
                    {est.faithNote && (
                      <p className="text-xs bg-yellow-50 text-yellow-800 px-3 py-1.5 rounded-md">
                        {est.faithNote}
                      </p>
                    )}
                    {est.preExistingNote && (
                      <p className="text-xs bg-orange-50 text-orange-800 px-3 py-1.5 rounded-md">
                        {est.preExistingNote}
                      </p>
                    )}
                  </div>
                )}

                <a
                  href={buildMinistryLink(
                    est.ministry.affiliateLink || est.ministry.website,
                    est.ministry.slug,
                    'calculator'
                  )}
                  className="btn btn-primary w-full h-12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit {est.ministry.name} →
                </a>
              </div>
            ))}
          </div>

          {/* Desktop: Table */}
          <div className="hidden md:block overflow-x-auto mb-8">
            <table className="w-full">
              <thead>
                <tr className="bg-[var(--color-bg-warm)]">
                  <th className="px-4 py-3 font-bold text-left sticky left-0 bg-[var(--color-bg-warm)]">
                    #
                  </th>
                  <th className="px-4 py-3 font-bold text-left">Plan</th>
                  <th className="px-4 py-3 font-bold text-left">Monthly Est.</th>
                  <th className="px-4 py-3 font-bold text-left">Annual Est.</th>
                  <th className="px-4 py-3 font-bold text-left">Annual + IUA</th>
                  <th className="px-4 py-3 font-bold text-left">Coverage Cap</th>
                  <th className="px-4 py-3 font-bold text-left">IUA Options</th>
                  <th className="px-4 py-3 font-bold text-left">Notes</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {/* ACA Comparison Row */}
                <tr className="bg-amber-50 border-b-2 border-amber-200">
                  <td className="px-4 py-3 sticky left-0 bg-amber-50">--</td>
                  <td className="px-4 py-3 font-bold text-amber-900">
                    ACA Marketplace (avg)
                  </td>
                  <td className="px-4 py-3 font-bold text-amber-900">
                    ${acaCost.min}-${acaCost.max}
                  </td>
                  <td className="px-4 py-3 text-sm text-amber-800">
                    ${(acaCost.min * 12).toLocaleString()}-${(acaCost.max * 12).toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-sm text-amber-800">N/A</td>
                  <td className="px-4 py-3 text-sm text-amber-800">Unlimited</td>
                  <td className="px-4 py-3 text-sm text-amber-800">Deductible varies</td>
                  <td className="px-4 py-3 text-xs text-amber-700">
                    Without subsidies
                  </td>
                  <td className="px-4 py-3"></td>
                </tr>

                {estimates.map((est, idx) => (
                  <tr
                    key={est.ministry.slug}
                    className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg-warm)] transition"
                  >
                    <td className="px-4 py-3 sticky left-0 bg-white hover:bg-[var(--color-bg-warm)] text-sm font-bold text-[var(--color-text-muted)]">
                      {idx + 1}
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/reviews/${est.ministry.slug}`}
                        className="text-[var(--color-accent)] hover:underline font-bold"
                      >
                        {est.ministry.name}
                      </Link>
                      <span className="block text-xs text-[var(--color-text-muted)]">
                        {est.ministry.type === 'healthshare'
                          ? 'Health Share'
                          : est.ministry.type === 'crowdfunding'
                            ? 'Crowdfunding'
                            : 'Insurance'}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-serif font-bold text-lg">
                      ${est.monthlyMin}-${est.monthlyMax}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      ${est.annualMin.toLocaleString()}-${est.annualMax.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold">
                      ${est.annualWithIua.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {est.ministry.plans[0]?.coverageCap || 'Unlimited'}
                    </td>
                    <td className="px-4 py-3 text-xs">
                      {est.ministry.plans[0]?.iua.map((v) => `$${v.toLocaleString()}`).join(', ')}
                    </td>
                    <td className="px-4 py-3">
                      {est.faithNote && (
                        <p className="text-xs bg-yellow-50 text-yellow-800 px-2 py-1 rounded mb-1">
                          {est.faithNote}
                        </p>
                      )}
                      {est.preExistingNote && (
                        <p className="text-xs bg-orange-50 text-orange-800 px-2 py-1 rounded">
                          {est.preExistingNote}
                        </p>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={buildMinistryLink(
                          est.ministry.affiliateLink || est.ministry.website,
                          est.ministry.slug,
                          'calculator'
                        )}
                        className="btn btn-primary text-sm h-10"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Disclaimer */}
          <div className="bg-[var(--color-bg-warm)] p-5 rounded-lg mb-8 text-sm text-[var(--color-text-secondary)]">
            <p className="font-semibold mb-2 text-[var(--color-text)]">Important Notes</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Prices shown are estimates based on published 2026 rates. Actual costs may vary by
                age, location, and health history.
              </li>
              <li>
                IUA (Initial Unshareable Amount) is similar to a deductible -- you pay this amount
                before the plan shares costs.
              </li>
              <li>
                &quot;Annual + IUA&quot; shows estimated yearly cost using mid-range monthly + lowest
                available IUA.
              </li>
              <li>
                Health sharing ministries are <strong>not insurance</strong>. Sharing is voluntary and
                not guaranteed.
              </li>
              <li>
                ACA marketplace costs shown without subsidies. Many people qualify for premium tax
                credits that significantly reduce costs.
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-[var(--color-primary-lighter)] p-6 rounded-lg text-center">
            <p className="text-[var(--color-text)] mb-4">
              Not sure which plan fits your needs best?
            </p>
            <Link href="/quiz" className="btn btn-primary">
              Take Our Free Quiz →
            </Link>
          </div>
        </>
      )}

      {/* No results state */}
      {!loading && estimates.length === 0 && ministries.length > 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-[var(--color-text-secondary)]">
            No plans found matching your criteria. Try adjusting your selections.
          </p>
        </div>
      )}
    </div>
  )
}
