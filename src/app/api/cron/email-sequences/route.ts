import { NextRequest, NextResponse } from 'next/server'
import { sendDay3Email, sendDay7Email } from '@/lib/email-sequences'

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY
const CRON_SECRET = process.env.CRON_SECRET

export async function POST(request: NextRequest) {
  try {
    // Verify cron secret
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !CRON_SECRET || authHeader !== `Bearer ${CRON_SECRET}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      return NextResponse.json(
        { error: 'Supabase credentials missing' },
        { status: 500 }
      )
    }

    const results = {
      day3_sent: 0,
      day7_sent: 0,
      errors: [] as string[]
    }

    // SEND EMAIL 2 (Day 3)
    try {
      const day3Date = new Date()
      day3Date.setDate(day3Date.getDate() - 3)
      const day3Start = new Date(day3Date.getFullYear(), day3Date.getMonth(), day3Date.getDate())
      const day3End = new Date(day3Start.getTime() + 24 * 60 * 60 * 1000)

      // Query emails created 3 days ago that haven't had Email 2 sent yet
      const day3Response = await fetch(
        `${SUPABASE_URL}/rest/v1/email_captures?created_at=gte.${day3Start.toISOString()}&created_at=lt.${day3End.toISOString()}&email_sent_day3=eq.false`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          },
        }
      )

      if (day3Response.ok) {
        const emails: any[] = await day3Response.json()
        console.log(`[Email Sequences] Found ${emails.length} emails for Day 3`)

        for (const record of emails) {
          try {
            const sent = await sendDay3Email(record.email)
            if (sent) {
              results.day3_sent++
              // Mark as sent in Supabase
              await fetch(
                `${SUPABASE_URL}/rest/v1/email_captures?email=eq.${encodeURIComponent(record.email)}`,
                {
                  method: 'PATCH',
                  headers: {
                    'Content-Type': 'application/json',
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                  },
                  body: JSON.stringify({
                    email_sent_day3: true,
                    email_sent_day3_at: new Date().toISOString(),
                  }),
                }
              )
            }
          } catch (error) {
            results.errors.push(`Day 3 email to ${record.email} failed: ${error}`)
          }
        }
      } else {
        results.errors.push(`Day 3 query failed: ${day3Response.status}`)
      }
    } catch (error) {
      results.errors.push(`Day 3 process failed: ${error}`)
    }

    // SEND EMAIL 3 (Day 7)
    try {
      const day7Date = new Date()
      day7Date.setDate(day7Date.getDate() - 7)
      const day7Start = new Date(day7Date.getFullYear(), day7Date.getMonth(), day7Date.getDate())
      const day7End = new Date(day7Start.getTime() + 24 * 60 * 60 * 1000)

      // Query emails created 7 days ago that haven't had Email 3 sent yet
      const day7Response = await fetch(
        `${SUPABASE_URL}/rest/v1/email_captures?created_at=gte.${day7Start.toISOString()}&created_at=lt.${day7End.toISOString()}&email_sent_day7=eq.false`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          },
        }
      )

      if (day7Response.ok) {
        const emails: any[] = await day7Response.json()
        console.log(`[Email Sequences] Found ${emails.length} emails for Day 7`)

        for (const record of emails) {
          try {
            const sent = await sendDay7Email(record.email)
            if (sent) {
              results.day7_sent++
              // Mark as sent in Supabase
              await fetch(
                `${SUPABASE_URL}/rest/v1/email_captures?email=eq.${encodeURIComponent(record.email)}`,
                {
                  method: 'PATCH',
                  headers: {
                    'Content-Type': 'application/json',
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                  },
                  body: JSON.stringify({
                    email_sent_day7: true,
                    email_sent_day7_at: new Date().toISOString(),
                  }),
                }
              )
            }
          } catch (error) {
            results.errors.push(`Day 7 email to ${record.email} failed: ${error}`)
          }
        }
      } else {
        results.errors.push(`Day 7 query failed: ${day7Response.status}`)
      }
    } catch (error) {
      results.errors.push(`Day 7 process failed: ${error}`)
    }

    console.log('[Email Sequences] Cron complete:', results)

    return NextResponse.json(results, { status: 200 })
  } catch (error) {
    console.error('[Email Sequences] Error:', error)
    return NextResponse.json(
      { error: 'Cron failed', details: String(error) },
      { status: 500 }
    )
  }
}
