# Tipping Mechanism Setup

## Overview
Optional tip modal before users visit health sharing plan websites. Helps fund independent research while keeping the site free.

## Components

### TippingModal.tsx
- Modal asking for optional tip ($1, $2, $5)
- Clear messaging about independence + affiliate commission transparency
- "Skip" button for users who don't want to tip
- Stripe integration

### API Endpoint
- `POST /api/create-tip-session` — Creates Stripe checkout session
- Redirects to plan URL after tip (success or skip)

## Setup Required

### 1. Stripe Account
- Sign up at https://stripe.com
- Get Stripe Secret Key and Public Key

### 2. Environment Variables
Add to Vercel + .env.local:

```
STRIPE_SECRET_KEY=sk_live_... (from Stripe dashboard)
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_... (from Stripe dashboard)
STRIPE_WEBHOOK_SECRET=whsec_... (optional, for webhooks)
```

### 3. Install Stripe Package
```bash
npm install @stripe/stripe-js
```

### 4. Update Review Pages
In `/src/app/reviews/[slug]/page.tsx`, wrap "Visit Website" buttons with `TippingModal`:

```tsx
import TippingModal from '@/components/TippingModal'

// Replace CTAButton with:
<TippingModal 
  planName={featured.name}
  planUrl={featured.website}
/>
```

### 5. Create Webhook (Optional)
If you want to track tip conversions, create a webhook in Stripe dashboard pointing to `/api/webhooks/stripe` to log successful tips.

## Copy Guidance

**Modal Message (Current):**
> WhichHealthShare is free because readers like you support our work. Your optional tip helps us keep these reviews independent and unbiased.
> 
> We earn affiliate commissions when you sign up (same amount regardless of your tip), but tips fund our research and keep us honest.

This is transparent: tells users both that you take tips AND affiliate commissions. That honesty is what makes it work.

## Analytics
Track tips via:
- Stripe dashboard (manual check)
- Webhook logging to Supabase (if set up)
- Daily reports

## Rollout Strategy

**Phase 1 (Now):** Add to /reviews pages (where conversion happens)
**Phase 2:** Add to /compare page (comparison table)
**Phase 3:** Add to /quiz results (recommended plans)

Start with reviews to test UX before expanding.

---

**Status:** Ready for integration. Awaiting Stripe keys.
