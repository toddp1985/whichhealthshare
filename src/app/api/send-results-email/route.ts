import { NextRequest, NextResponse } from 'next/server'
import { generateResultsEmailHTML } from '@/lib/email-results-template'

const RESEND_API_KEY = process.env.RESEND_API_KEY

export async function POST(request: NextRequest) {
  try {
    const { email, tier } = await request.json()

    if (!email || !tier) {
      return NextResponse.json(
        { error: 'Email and tier required' },
        { status: 400 }
      )
    }

    if (!RESEND_API_KEY) {
      console.error('Resend API key not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Generate email HTML with tier-specific message
    const emailHTML = generateResultsEmailHTML([], email, tier)

    // Send via Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'hello@whichhealthshare.com',
        to: email,
        subject: 'Your Health Plan Matches + Premium Downloads',
        html: emailHTML,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    const result = await response.json()

    return NextResponse.json(
      { success: true, messageId: result.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Send email error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
