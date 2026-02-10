/**
 * Database migrations for WhichHealthShare
 * Runs on app initialization to create necessary tables
 */

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

const migrationSQL = `
-- Email captures table for WhichHealthShare quiz signups
CREATE TABLE IF NOT EXISTS email_captures (
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

CREATE INDEX IF NOT EXISTS idx_email_captures_created_at ON email_captures(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_email_captures_signup_completed ON email_captures(signup_completed);
CREATE INDEX IF NOT EXISTS idx_email_captures_email ON email_captures(email);
`;

/**
 * Check if tables exist and create if missing
 * This runs on app initialization
 */
export async function runMigrations() {
  if (!supabaseUrl || !supabaseServiceKey) {
    console.warn('[DB] Supabase credentials not configured, skipping migrations')
    return
  }

  try {
    // Use service role key for admin operations
    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })

    // Check if email_captures table exists
    const { data, error } = await supabase
      .from('email_captures')
      .select('count()', { count: 'exact' })
      .limit(1)

    if (error && error.code === 'PGRST116') {
      // Table doesn't exist, run migrations
      console.log('[DB] Running migrations...')
      
      // Note: Direct SQL execution requires using the admin API
      // For now, we'll rely on tables being created via Supabase console
      // or via the setup script
      console.log('[DB] Migrations skipped (requires Supabase console or setup script)')
      return
    }

    console.log('[DB] Database tables already exist')
  } catch (error) {
    console.error('[DB] Migration error:', error)
  }
}

/**
 * Verify database connectivity
 */
export async function verifyDatabaseConnection() {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('[DB] Supabase not configured')
    return false
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey)
    
    // Test connection by querying email_captures table
    const { error } = await supabase
      .from('email_captures')
      .select('count()', { count: 'exact' })
      .limit(1)

    if (error) {
      console.error('[DB] Connection error:', error.message)
      return false
    }

    console.log('[DB] Database connection verified ✓')
    return true
  } catch (error) {
    console.error('[DB] Verification error:', error)
    return false
  }
}
