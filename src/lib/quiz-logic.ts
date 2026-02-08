import { Ministry } from './data'

export interface QuizAnswers {
  householdSize: 'individual' | 'couple' | 'family' | 'large-family'
  budget: 'under-150' | '150-250' | '250-400' | 'over-400'
  preExisting: 'no' | 'minor' | 'significant'
  faith: 'christian' | 'other' | 'no-preference' | 'secular'
  priority: 'cost' | 'coverage' | 'maternity' | 'mental-health' | 'hsa'
  guaranteedCoverage: 'very' | 'somewhat' | 'not-important'
}

export interface QuizResult {
  rank: number
  ministry: Ministry
  score: number
  reason: string
}

export function scoreMinistry(ministry: Ministry, answers: QuizAnswers): number {
  let score = 0

  // Household size scoring
  if (answers.householdSize === 'individual' && ministry.plans[0]?.monthlyRange?.individual) {
    score += 2
  } else if (answers.householdSize === 'couple' && ministry.plans[0]?.monthlyRange?.couple) {
    score += 2
  } else if ((answers.householdSize === 'family' || answers.householdSize === 'large-family') && ministry.plans[0]?.monthlyRange?.family) {
    score += 2
  }

  // Budget scoring
  if (ministry.plans[0]?.monthlyRange?.individual) {
    const minPrice = ministry.plans[0].monthlyRange.individual.min
    if (answers.budget === 'under-150' && minPrice < 150) score += 2
    if (answers.budget === '150-250' && minPrice >= 150 && minPrice < 250) score += 2
    if (answers.budget === '250-400' && minPrice >= 250 && minPrice < 400) score += 2
    if (answers.budget === 'over-400') score += 1
  }

  // Pre-existing conditions scoring
  if (answers.preExisting === 'significant' && ministry.preExisting.accepted && !ministry.preExisting.phasedSharing) {
    score += 3
  } else if (answers.preExisting === 'minor' && ministry.preExisting.accepted) {
    score += 2
  } else if (answers.preExisting === 'no') {
    score += 1
  }

  // Faith alignment scoring
  if (answers.faith === 'secular' && ministry.faithRequirement === 'secular') {
    score += 3
  } else if (answers.faith === 'christian' && (ministry.faithRequirement === 'christian-light' || ministry.faithRequirement === 'christian-strict')) {
    score += 3
  } else if (answers.faith === 'no-preference') {
    score += 1
  }

  // Priority scoring
  if (answers.priority === 'cost') {
    const minPrice = ministry.plans[0]?.monthlyRange?.individual?.min || 0
    if (minPrice < 200) score += 3
    else if (minPrice < 300) score += 2
  } else if (answers.priority === 'coverage') {
    const coverage = Object.values(ministry.plans[0]?.includes || {}).filter(v => v).length
    if (coverage >= 8) score += 3
    else if (coverage >= 6) score += 2
  } else if (answers.priority === 'maternity') {
    if (ministry.plans[0]?.includes?.maternity) score += 3
  } else if (answers.priority === 'mental-health') {
    if (ministry.plans[0]?.includes?.mentalHealth) score += 3
  } else if (answers.priority === 'hsa') {
    if (ministry.hsaCompatible) score += 3
  }

  // Guaranteed coverage (Presidio flag)
  if (answers.guaranteedCoverage === 'very' && ministry.type === 'insurance') {
    score += 10 // Major boost for Presidio if guaranteed coverage is important
  }

  // Rating boost
  score += ministry.rating

  return score
}

export function getQuizRecommendations(ministries: Ministry[], answers: QuizAnswers): QuizResult[] {
  const scored = ministries.map(m => ({
    ministry: m,
    score: scoreMinistry(m, answers),
    rank: 0,
    reason: ''
  })).sort((a, b) => b.score - a.score)

  return scored.slice(0, 3).map((result, index) => ({
    ...result,
    rank: index + 1,
    reason: generateReason(result.ministry, answers)
  }))
}

function generateReason(ministry: Ministry, answers: QuizAnswers): string {
  if (ministry.type === 'insurance') {
    return 'Guaranteed coverage option with regulated protections'
  }
  if (ministry.type === 'crowdfunding') {
    return 'Modern crowdfunding alternative with no faith requirement'
  }
  return ministry.bestFor || 'Top match for your needs'
}

export function shouldShowPresidio(answers: QuizAnswers): boolean {
  return answers.guaranteedCoverage === 'very' || answers.preExisting === 'significant'
}

export function shouldShowCrowdHealth(): boolean {
  return true // Always show as modern alternative
}
