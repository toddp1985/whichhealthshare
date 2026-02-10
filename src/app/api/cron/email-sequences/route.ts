/**
 * Cron job for email sequences (Day 3 and Day 7 follow-ups)
 * 
 * Configure in vercel.json:
 * {
 *   "crons": [
 *     {
 *       "path": "/api/cron/email-sequences",
 *       "schedule": "0 9 * * *"  // Daily at 9 AM UTC
 *     }
 *   ]
 * }
 */

import { NextRequest, NextResponse } from 'next/server'
import { sendDay3Email, sendDay7Email } from '@/lib/email-sequences'

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY

export async function GET(request: NextRequest) {
  // Verify Vercel cron secret
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    console.log('[Cron] Email sequences job started')

    // Get emails that need Day 3 send (3 days after signup, no conversion)
    if (SUPABASE_URL && SUPABASE_ANON_KEY) {
      const threeDaysAgo = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
      
      // Fetch users who signed up 3+ days ago, haven't converted, and haven't received email 2
      const day3Response = await fetch(
        `${SUPABASE_URL}/rest/v1/email_captures?select=email&created_at=lt.${threeDaysAgo}&signup_completed=eq.false&email_2_sent=eq.false&limit=100`,
        {
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          },
        }
      )

      if (day3Response.ok) {
        const day3Emails = await day3Response.json()
        console.log(`[Cron] Sending ${day3Emails.length} Day 3 emails`)

        for (const record of day3Emails) {
          const sent = await sendDay3Email(record.email)
          if (sent) {
            // Update record to mark email 2 as sent
            await fetch(
              `${SUPABASE_URL}/rest/v1/email_captures?email=eq.${record.email}`,
              {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                  'apikey': SUPABASE_ANON_KEY,
                  'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                },
                body: JSON.stringify({
                  email_2_sent: true,
                  email_2_sent_at: new Date().toISOString(),
                }),
              }
            )
          }
        }
      }

      // Get emails that need Day 7 send (7 days after signup, no conversion)
      const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
      
      const day7Response = await fetch(
        `${SUPABASE_URL}/rest/v1/email_captures?select=email&created_at=lt.${sevenDaysAgo}&signup_completed=eq.false&email_3_sent=eq.false&limit=100`,
        {
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          },
        }
      )

      if (day7Response.ok) {
        const day7Emails = await day7Response.json()
        console.log(`[Cron] Sending ${day7Emails.length} Day 7 emails`)

        for (const record of day7Emails) {
          const sent = await sendDay7Email(record.email)
          if (sent) {
            // Update record to mark email 3 as sent
            await fetch(
              `${SUPABASE_URL}/rest/v1/email_captures?email=eq.${record.email}`,
              {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                  'apikey': SUPABASE_ANON_KEY,
                  'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                },
                body: JSON.stringify({
                  email_3_sent: true,
                  email_3_sent_at: new Date().toISOString(),
                }),
              }
            )
          }
        }
      }
    }

    return NextResponse.json({ success: true, message: 'Email sequences sent' })
  } catch (error) {
    console.error('[Cron] Error:', error)
    return NextResponse.json(
      { error: 'Failed to send email sequences' },
      { status: 500 }
    )
  }
}
