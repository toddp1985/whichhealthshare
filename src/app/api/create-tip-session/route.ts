import { NextRequest, NextResponse } from 'next/server'

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json()

    if (!STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Stripe not configured' },
        { status: 500 }
      )
    }

    // Validate amount
    if (!amount || amount < 100) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      )
    }

    // Create Stripe checkout session
    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'payment_method_types[]': 'card',
        'line_items[0][price_data][currency]': 'usd',
        'line_items[0][price_data][unit_amount]': amount.toString(),
        'line_items[0][price_data][product_data][name]': 'Support WhichHealthShare',
        'line_items[0][price_data][product_data][description]': 'Independent health sharing reviews',
        'line_items[0][quantity]': '1',
        'mode': 'payment',
        'success_url': 'https://whichhealthshare.com?tip=success',
        'cancel_url': 'https://whichhealthshare.com?tip=cancelled',
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Stripe API error:', error)
      return NextResponse.json(
        { error: 'Failed to create checkout session' },
        { status: 500 }
      )
    }

    const session = await response.json()

    return NextResponse.json(
      { url: session.url },
      { status: 200 }
    )
  } catch (error) {
    console.error('Tip session error:', error)
    return NextResponse.json(
      { error: 'Failed to process tip' },
      { status: 500 }
    )
  }
}
