import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // TODO: Integrate with ConvertKit API
    // For now, log to console and return success
    console.log('Email signup:', email, new Date().toISOString())

    // In production:
    // 1. Send to ConvertKit API
    // 2. Or store in database
    // 3. Track conversion event in analytics

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
