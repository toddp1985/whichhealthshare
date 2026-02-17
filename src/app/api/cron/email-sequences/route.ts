import { NextRequest, NextResponse } from 'next/server'
import {
  sendDay3Email,
  sendDay7Email,
  sendDay10Email,
  sendDay14Email,
  sendDay17Email,
  sendDay21Email,
} from '@/lib/email-sequences'

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
      day10_sent: 0,
      day14_sent: 0,
      day17_sent: 0,
      day21_sent: 0,
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

    // SEND EMAIL 4 (Day 10)
    try {
      const day10Date = new Date()
      day10Date.setDate(day10Date.getDate() - 10)
      const day10Start = new Date(day10Date.getFullYear(), day10Date.getMonth(), day10Date.getDate())
      const day10End = new Date(day10Start.getTime() + 24 * 60 * 60 * 1000)

      const day10Response = await fetch(
        `${SUPABASE_URL}/rest/v1/email_captures?created_at=gte.${day10Start.toISOString()}&created_at=lt.${day10End.toISOString()}&email_sent_day10=eq.false`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          },
        }
      )

      if (day10Response.ok) {
        const emails: any[] = await day10Response.json()
        console.log(`[Email Sequences] Found ${emails.length} emails for Day 10`)

        for (const record of emails) {
          try {
            const sent = await sendDay10Email(record.email)
            if (sent) {
              results.day10_sent++
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
                    email_sent_day10: true,
                    email_sent_day10_at: new Date().toISOString(),
                  }),
                }
              )
            }
          } catch (error) {
            results.errors.push(`Day 10 email to ${record.email} failed: ${error}`)
          }
        }
      } else {
        results.errors.push(`Day 10 query failed: ${day10Response.status}`)
      }
    } catch (error) {
      results.errors.push(`Day 10 process failed: ${error}`)
    }

    // SEND EMAIL 5 (Day 14)
    try {
      const day14Date = new Date()
      day14Date.setDate(day14Date.getDate() - 14)
      const day14Start = new Date(day14Date.getFullYear(), day14Date.getMonth(), day14Date.getDate())
      const day14End = new Date(day14Start.getTime() + 24 * 60 * 60 * 1000)

      const day14Response = await fetch(
        `${SUPABASE_URL}/rest/v1/email_captures?created_at=gte.${day14Start.toISOString()}&created_at=lt.${day14End.toISOString()}&email_sent_day14=eq.false`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          },
        }
      )

      if (day14Response.ok) {
        const emails: any[] = await day14Response.json()
        console.log(`[Email Sequences] Found ${emails.length} emails for Day 14`)

        for (const record of emails) {
          try {
            const sent = await sendDay14Email(record.email)
            if (sent) {
              results.day14_sent++
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
                    email_sent_day14: true,
                    email_sent_day14_at: new Date().toISOString(),
                  }),
                }
              )
            }
          } catch (error) {
            results.errors.push(`Day 14 email to ${record.email} failed: ${error}`)
          }
        }
      } else {
        results.errors.push(`Day 14 query failed: ${day14Response.status}`)
      }
    } catch (error) {
      results.errors.push(`Day 14 process failed: ${error}`)
    }

    // SEND EMAIL 6 (Day 17)
    try {
      const day17Date = new Date()
      day17Date.setDate(day17Date.getDate() - 17)
      const day17Start = new Date(day17Date.getFullYear(), day17Date.getMonth(), day17Date.getDate())
      const day17End = new Date(day17Start.getTime() + 24 * 60 * 60 * 1000)

      const day17Response = await fetch(
        `${SUPABASE_URL}/rest/v1/email_captures?created_at=gte.${day17Start.toISOString()}&created_at=lt.${day17End.toISOString()}&email_sent_day17=eq.false`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          },
        }
      )

      if (day17Response.ok) {
        const emails: any[] = await day17Response.json()
        console.log(`[Email Sequences] Found ${emails.length} emails for Day 17`)

        for (const record of emails) {
          try {
            const sent = await sendDay17Email(record.email)
            if (sent) {
              results.day17_sent++
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
                    email_sent_day17: true,
                    email_sent_day17_at: new Date().toISOString(),
                  }),
                }
              )
            }
          } catch (error) {
            results.errors.push(`Day 17 email to ${record.email} failed: ${error}`)
          }
        }
      } else {
        results.errors.push(`Day 17 query failed: ${day17Response.status}`)
      }
    } catch (error) {
      results.errors.push(`Day 17 process failed: ${error}`)
    }

    // SEND EMAIL 7 (Day 21)
    try {
      const day21Date = new Date()
      day21Date.setDate(day21Date.getDate() - 21)
      const day21Start = new Date(day21Date.getFullYear(), day21Date.getMonth(), day21Date.getDate())
      const day21End = new Date(day21Start.getTime() + 24 * 60 * 60 * 1000)

      const day21Response = await fetch(
        `${SUPABASE_URL}/rest/v1/email_captures?created_at=gte.${day21Start.toISOString()}&created_at=lt.${day21End.toISOString()}&email_sent_day21=eq.false`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          },
        }
      )

      if (day21Response.ok) {
        const emails: any[] = await day21Response.json()
        console.log(`[Email Sequences] Found ${emails.length} emails for Day 21`)

        for (const record of emails) {
          try {
            const sent = await sendDay21Email(record.email)
            if (sent) {
              results.day21_sent++
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
                    email_sent_day21: true,
                    email_sent_day21_at: new Date().toISOString(),
                  }),
                }
              )
            }
          } catch (error) {
            results.errors.push(`Day 21 email to ${record.email} failed: ${error}`)
          }
        }
      } else {
        results.errors.push(`Day 21 query failed: ${day21Response.status}`)
      }
    } catch (error) {
      results.errors.push(`Day 21 process failed: ${error}`)
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
