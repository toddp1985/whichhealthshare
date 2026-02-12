import { NextRequest, NextResponse } from 'next/server'

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET

export async function POST(request: NextRequest) {
  try {
    const { amount, planName, planUrl } = await request.json()

    if (!STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Stripe not configured' },
        { status: 500 }
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
        'line_items[0][price_data][product_data][name]': `Tip: WhichHealthShare Research`,
        'line_items[0][price_data][product_data][description]': `Supporting independent health sharing reviews`,
        'line_items[0][quantity]': '1',
        'mode': 'payment',
        'success_url': `https://whichhealthshare.com?tip_success=true&redirect=${encodeURIComponent(planUrl)}`,
        'cancel_url': `https://whichhealthshare.com?tip_cancelled=true&redirect=${encodeURIComponent(planUrl)}`,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Stripe error:', error)
      return NextResponse.json(
        { error: 'Failed to create checkout session' },
        { status: 500 }
      )
    }

    const session = await response.json()

    return NextResponse.json(
      { sessionId: session.id },
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
