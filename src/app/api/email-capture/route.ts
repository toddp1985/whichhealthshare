import { NextRequest, NextResponse } from 'next/server'

// Supabase integration
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY
const RESEND_API_KEY = process.env.RESEND_API_KEY

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

    // Store in Supabase
    if (SUPABASE_URL && SUPABASE_ANON_KEY) {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/email_signups`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          email,
          quiz_result: quizResult || null,
        }),
      })

      if (!response.ok) {
        const error = await response.text()
        console.error('Supabase insert error:', error)
        // Continue anyway—send email even if storage fails
      }
    }

    // Send welcome email via Resend
    if (RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'WhichHealthShare <hello@whichhealthshare.com>',
            to: email,
            subject: 'Your personalized health sharing guide',
            html: `
              <h1>Your Quiz Results</h1>
              <p>Hi there,</p>
              <p>Based on your quiz answers, we've prepared a personalized guide to help you choose the right health sharing plan.</p>
              <p>Check your dashboard at <a href="https://whichhealthshare.com/quiz">whichhealthshare.com</a> to see your results.</p>
              <p>Questions? Reply to this email.</p>
              <p>— WhichHealthShare</p>
            `,
          }),
        })
      } catch (emailError) {
        console.error('Resend email error:', emailError)
        // Still return success—email sending failure shouldn't break signup
      }
    }

    // Track in analytics
    console.log('Email captured:', email, new Date().toISOString())

    return NextResponse.json(
      { message: 'Email captured successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email capture error:', error)
    return NextResponse.json(
      { error: 'Failed to capture email' },
      { status: 500 }
    )
  }
}
