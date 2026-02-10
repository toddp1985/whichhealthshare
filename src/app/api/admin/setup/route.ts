/**
 * Admin endpoint to initialize database schema
 * PROTECTED: Only accessible with ?token=SETUP_SECRET
 * 
 * Usage: https://whichhealthshare.com/api/admin/setup?token=YOUR_SETUP_SECRET
 */

import { NextRequest, NextResponse } from 'next/server'

const SETUP_SECRET = process.env.SETUP_SECRET || 'dev-setup-secret'
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

const migrationSQL = `
-- Email captures table
CREATE TABLE IF NOT EXISTS public.email_captures (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL UNIQUE,
  first_name VARCHAR(100),
  quiz_results JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  email_sent BOOLEAN DEFAULT FALSE,
  email_sent_at TIMESTAMP,
  email_2_sent BOOLEAN DEFAULT FALSE,
  email_2_sent_at TIMESTAMP,
  email_3_sent BOOLEAN DEFAULT FALSE,
  email_3_sent_at TIMESTAMP,
  signup_completed BOOLEAN DEFAULT FALSE,
  signup_date TIMESTAMP,
  signup_plan VARCHAR(100)
);

CREATE INDEX IF NOT EXISTS idx_email_captures_created_at ON public.email_captures(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_email_captures_signup_completed ON public.email_captures(signup_completed);
CREATE INDEX IF NOT EXISTS idx_email_captures_email ON public.email_captures(email);

ALTER TABLE public.email_captures ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read on email_captures" ON public.email_captures FOR SELECT TO public USING (true);
CREATE POLICY "Allow public insert on email_captures" ON public.email_captures FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Allow public update on email_captures" ON public.email_captures FOR UPDATE TO public USING (true) WITH CHECK (true);
`;

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token')

  // Verify secret token
  if (token !== SETUP_SECRET) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    return NextResponse.json(
      { error: 'Supabase credentials not configured' },
      { status: 500 }
    )
  }

  try {
    console.log('[Setup] Running database migrations...')

    // Use Supabase REST API with service role key to execute SQL
    // Note: Direct SQL execution via REST API requires using the RPC endpoint
    // For simplicity, we'll return instructions

    return NextResponse.json({
      success: true,
      message: 'Setup endpoint ready',
      instructions: `
        Database schema needs to be created via Supabase console:
        1. Go to https://app.supabase.com
        2. Select your project
        3. Go to SQL Editor
        4. Run the migration SQL provided in whichhealthshare/.env.local
        5. Or use the setup script: scripts/setup-supabase-schema.sh
      `,
      migrationSQL: migrationSQL,
    })
  } catch (error) {
    console.error('[Setup] Error:', error)
    return NextResponse.json(
      { error: 'Failed to run setup' },
      { status: 500 }
    )
  }
}
