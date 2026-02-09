/**
 * Analytics Tracking Utilities
 * Integrates with Plausible Analytics to track conversion funnel
 */

export type TrackingEvent = 
  | 'Quiz Started'
  | 'Quiz Completed'
  | 'Email Signup'
  | 'Affiliate Click'
  | 'CTA Click'
  | 'Review Page View'

interface TrackingProps {
  [key: string]: string | number | boolean
}

/**
 * Track custom event in Plausible
 */
export function trackEvent(event: TrackingEvent, props?: TrackingProps) {
  if (typeof window === 'undefined') return

  const plausible = (window as any).plausible
  if (!plausible) {
    console.warn('Plausible not loaded')
    return
  }

  plausible(event, { props: props || {} })
}

/**
 * Track quiz start
 */
export function trackQuizStart() {
  trackEvent('Quiz Started', { timestamp: new Date().toISOString() })
}

/**
 * Track quiz completion with top recommendation
 */
export function trackQuizCompletion(topRecommendation: string) {
  trackEvent('Quiz Completed', {
    topRecommendation,
    timestamp: new Date().toISOString()
  })
}

/**
 * Track email signup from quiz
 */
export function trackEmailSignup(source: string = 'quiz-result') {
  trackEvent('Email Signup', {
    source,
    timestamp: new Date().toISOString()
  })
}

/**
 * Track affiliate click (user visiting plan signup)
 */
export function trackAffiliateClick(plan: string, source: string = 'unknown') {
  trackEvent('Affiliate Click', {
    plan,
    source,
    timestamp: new Date().toISOString()
  })
}

/**
 * Track CTA button clicks
 */
export function trackCTAClick(buttonText: string, page: string) {
  trackEvent('CTA Click', {
    buttonText,
    page,
    timestamp: new Date().toISOString()
  })
}

/**
 * Track review page views
 */
export function trackReviewPageView(planName: string) {
  trackEvent('Review Page View', {
    plan: planName,
    timestamp: new Date().toISOString()
  })
}

/**
 * Track conversion funnel
 * Call this at each step to visualize the path from visitor → signup
 */
export function trackConversionStep(step: 'landing' | 'quiz_start' | 'quiz_complete' | 'email_capture' | 'affiliate_click' | 'plan_signup') {
  trackEvent('Conversion Step', {
    step,
    timestamp: new Date().toISOString()
  })
}
