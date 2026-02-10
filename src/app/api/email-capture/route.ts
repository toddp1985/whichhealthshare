import { NextRequest, NextResponse } from 'next/server'
import { sendWelcomeEmail } from '@/lib/email-sequences'

// Supabase integration
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY

// Handle CORS preflight
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(
    {},
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  )
}

export async function POST(request: NextRequest) {
  try {
    const { email, quizResult } = await request.json()

    // Validate email
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Store in Supabase with email_sent flag = false initially
    if (SUPABASE_URL && SUPABASE_ANON_KEY) {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/email_captures`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          email,
          quiz_results: quizResult || null,
          created_at: new Date().toISOString(),
          email_sent: false,
          signup_completed: false,
        }),
      })

      if (!response.ok) {
        const error = await response.text()
        console.error('Supabase insert error:', error)
        // Continue anyway—send email even if storage fails
      }
    }

    // Send Email 1 (Welcome) immediately via email sequences
    const emailSent = await sendWelcomeEmail(email, quizResult)

    if (emailSent) {
      // Update Supabase to mark email as sent
      if (SUPABASE_URL && SUPABASE_ANON_KEY) {
        try {
          await fetch(`${SUPABASE_URL}/rest/v1/email_captures`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'apikey': SUPABASE_ANON_KEY,
              'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            },
            body: JSON.stringify({
              email_sent: true,
              email_sent_at: new Date().toISOString(),
            }),
          })
        } catch (updateError) {
          console.error('Failed to update email sent status:', updateError)
        }
      }
    }

    // Track in analytics
    console.log('Email captured:', email, 'Email sent:', emailSent, new Date().toISOString())

    return NextResponse.json(
      { 
        message: 'Email captured successfully',
        emailSent,
      },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
  } catch (error) {
    console.error('Email capture error:', error)
    return NextResponse.json(
      { error: 'Failed to capture email' },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
  }
}
