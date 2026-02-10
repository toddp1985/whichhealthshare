/**
 * Daily WhichHealthShare Report Cron Job (9 AM CST)
 * 
 * Metrics collected:
 * - Visitor count & pageviews (Plausible API)
 * - Quiz completions (Supabase)
 * - Email signups (Supabase)
 * - Top 3 blog posts (Plausible)
 * - Cost tracking (daily, weekly, monthly)
 * - Deployments from git commits (last 24h)
 * - Optional: BallStreet stats
 * 
 * Schedule: 0 15 * * * UTC = 9 AM CST
 * Delivery: Direct Telegram message to Todd's chat
 * Error handling: Sends alert message instead of failing silently
 * 
 * Configure in vercel.json:
 * {
 *   "path": "/api/cron/daily-reports",
 *   "schedule": "0 15 * * *"
 * }
 */

import { NextRequest, NextResponse } from 'next/server'
import { execSync } from 'child_process'

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const PLAUSIBLE_API_KEY = process.env.PLAUSIBLE_API_KEY
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID
const CRON_SECRET = process.env.CRON_SECRET

interface PlausibleStats {
  results?: Array<{
    name: string
    visitors: number
    events: number
  }>
}

interface CostTrackingData {
  daily: number
  weekly: number
  monthly: number
}

interface DeploymentInfo {
  commits: string[]
  count: number
}

async function getVisitorMetrics(): Promise<{ visitors: number; pageviews: number } | null> {
  if (!PLAUSIBLE_API_KEY) {
    console.warn('[Daily Report] Plausible API key not configured')
    return null
  }

  try {
    const siteDomain = 'whichhealthshare.com'
    const today = new Date().toISOString().split('T')[0]

    const response = await fetch(`https://plausible.io/api/v1/stats/aggregate?site_id=${siteDomain}&date=${today}&metrics=visitors,pageviews`, {
      headers: {
        Authorization: `Bearer ${PLAUSIBLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      console.error(`[Daily Report] Plausible API error: ${response.status}`)
      return null
    }

    const data: any = await response.json()
    return {
      visitors: data.results?.visitors?.value || 0,
      pageviews: data.results?.pageviews?.value || 0,
    }
  } catch (error) {
    console.error('[Daily Report] Error fetching Plausible metrics:', error)
    return null
  }
}

async function getQuizCompletions(): Promise<number> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn('[Daily Report] Supabase not configured')
    return 0
  }

  try {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const todayISO = today.toISOString()

    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/quiz_results?select=count&created_at=gte.${todayISO}`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
      }
    )

    if (!response.ok) {
      console.error(`[Daily Report] Supabase quiz_results error: ${response.status}`)
      return 0
    }

    // Supabase returns count in the header when using count
    const contentRange = response.headers.get('content-range')
    if (contentRange) {
      const count = parseInt(contentRange.split('/')[1], 10)
      return count || 0
    }

    return 0
  } catch (error) {
    console.error('[Daily Report] Error fetching quiz completions:', error)
    return 0
  }
}

async function getEmailSignups(): Promise<number> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn('[Daily Report] Supabase not configured')
    return 0
  }

  try {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const todayISO = today.toISOString()

    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/email_captures?select=count&created_at=gte.${todayISO}`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
      }
    )

    if (!response.ok) {
      console.error(`[Daily Report] Supabase email_captures error: ${response.status}`)
      return 0
    }

    // Supabase returns count in the header when using count
    const contentRange = response.headers.get('content-range')
    if (contentRange) {
      const count = parseInt(contentRange.split('/')[1], 10)
      return count || 0
    }

    return 0
  } catch (error) {
    console.error('[Daily Report] Error fetching email signups:', error)
    return 0
  }
}

async function getBlogMetrics(): Promise<Array<{ page: string; views: number }>> {
  if (!PLAUSIBLE_API_KEY) {
    console.warn('[Daily Report] Plausible API key not configured')
    return []
  }

  try {
    const siteDomain = 'whichhealthshare.com'
    const today = new Date().toISOString().split('T')[0]

    const response = await fetch(
      `https://plausible.io/api/v1/stats/breakdown?site_id=${siteDomain}&date=${today}&property=event:page&metrics=visitors&limit=3&filters=event:name==Page View`,
      {
        headers: {
          Authorization: `Bearer ${PLAUSIBLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      console.error(`[Daily Report] Plausible breakdown error: ${response.status}`)
      return []
    }

    const data: PlausibleStats = await response.json()
    if (!data.results) return []

    return data.results.map(r => ({
      page: r.name,
      views: r.visitors,
    }))
  } catch (error) {
    console.error('[Daily Report] Error fetching blog metrics:', error)
    return []
  }
}

async function getCostTracking(): Promise<CostTrackingData> {
  try {
    const fs = require('fs').promises
    const path = require('path')
    
    // Try to read cost tracking file from workspace
    const costTrackingPath = path.join(process.cwd(), '../../..', 'cost-tracking', 'today.json')
    
    try {
      const data = await fs.readFile(costTrackingPath, 'utf-8')
      const costData = JSON.parse(data)
      
      return {
        daily: costData.daily_spent || 0,
        weekly: costData.weekly_spent || 0,
        monthly: costData.monthly_spent || 0,
      }
    } catch {
      // If file doesn't exist, return mock data
      return {
        daily: 0,
        weekly: 0,
        monthly: 0,
      }
    }
  } catch (error) {
    console.warn('[Daily Report] Error reading cost tracking:', error)
    return {
      daily: 0,
      weekly: 0,
      monthly: 0,
    }
  }
}

async function getDeploymentInfo(): Promise<DeploymentInfo> {
  try {
    // Get commits from last 24 hours
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
    
    const output = execSync(
      `git log --since="${twentyFourHoursAgo}" --oneline --decorate`,
      { encoding: 'utf-8', cwd: process.cwd() }
    )
    
    const commits = output
      .trim()
      .split('\n')
      .filter(line => line.length > 0)
      .slice(0, 5) // Get top 5 commits
    
    return {
      commits,
      count: commits.length,
    }
  } catch (error) {
    console.warn('[Daily Report] Error fetching deployment info:', error)
    return {
      commits: [],
      count: 0,
    }
  }
}

async function sendTelegramAlert(report: string): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn('[Daily Report] Telegram not configured')
    return false
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: report,
        parse_mode: 'HTML',
      }),
    })

    if (!response.ok) {
      console.error(`[Daily Report] Telegram error: ${response.status}`)
      return false
    }

    console.log('[Daily Report] Telegram alert sent successfully')
    return true
  } catch (error) {
    console.error('[Daily Report] Error sending Telegram alert:', error)
    return false
  }
}

export async function GET(request: NextRequest) {
  // Verify Vercel cron secret
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    console.log('[Daily Report] Job started at', new Date().toISOString())

    // Fetch all metrics in parallel
    const [visitorMetrics, quizCount, emailCount, topBlogPosts, costData, deploymentInfo] = await Promise.all([
      getVisitorMetrics(),
      getQuizCompletions(),
      getEmailSignups(),
      getBlogMetrics(),
      getCostTracking(),
      getDeploymentInfo(),
    ])

    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })

    // Format report
    let report = `<b>📊 WhichHealthShare Daily Report — ${date}</b>\n\n`
    
    report += `<b>📈 Metrics (Last 24h)</b>\n`
    report += `Visitors: ${visitorMetrics?.visitors || 'N/A'}\n`
    report += `Pageviews: ${visitorMetrics?.pageviews || 'N/A'}\n`
    report += `Quiz Completions: ${quizCount}\n`
    report += `Email Signups: ${emailCount}\n\n`

    if (topBlogPosts.length > 0) {
      report += `<b>📰 Top 3 Blog Posts</b>\n`
      topBlogPosts.forEach((post, idx) => {
        const pageName = post.page.replace('/blog/', '').replace(/^\//, '').replace(/-/g, ' ')
        report += `${idx + 1}. ${pageName} (${post.views} views)\n`
      })
      report += '\n'
    }

    if (deploymentInfo.count > 0) {
      report += `<b>📦 Deployed Today</b>\n`
      deploymentInfo.commits.slice(0, 3).forEach(commit => {
        report += `• ${commit}\n`
      })
      report += '\n'
    }

    report += `<b>💰 Cost Tracking</b>\n`
    report += `Daily: $${costData.daily.toFixed(2)} | Weekly: $${costData.weekly.toFixed(2)} | Monthly: $${costData.monthly.toFixed(2)}\n\n`

    report += `<i>Generated automatically at 9 AM CST</i>`

    // Send Telegram alert
    const sent = await sendTelegramAlert(report)

    return NextResponse.json({
      success: true,
      message: 'Daily report generated and sent',
      metrics: {
        visitors: visitorMetrics?.visitors || 0,
        pageviews: visitorMetrics?.pageviews || 0,
        quizCompletions: quizCount,
        emailSignups: emailCount,
        topPosts: topBlogPosts.length,
        deploymentsToday: deploymentInfo.count,
        costDaily: costData.daily,
        costWeekly: costData.weekly,
        costMonthly: costData.monthly,
        telegramSent: sent,
      },
    })
  } catch (error) {
    console.error('[Daily Report] Error:', error)
    
    // Fallback: Send error alert to Telegram instead of failing silently
    const errorReport = `<b>⚠️ WhichHealthShare Daily Report — ERROR</b>\n\nFailed to generate report. Data unavailable.\n\nError: ${String(error).substring(0, 100)}\n\nRetrying at next scheduled time.`
    await sendTelegramAlert(errorReport)
    
    return NextResponse.json(
      { error: 'Failed to generate daily report', details: String(error) },
      { status: 500 }
    )
  }
}

// POST method for manual triggers
export async function POST(request: NextRequest) {
  // Allow POST for manual testing (requires auth header)
  const authHeader = request.headers.get('authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Missing authorization' }, { status: 401 })
  }

  // Delegate to GET logic
  return GET(request)
}
