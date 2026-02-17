-- Add email sequence tracking columns for 7-email nurture sequence
-- Emails 1-3 columns may already exist; use IF NOT EXISTS pattern

DO $$
BEGIN
  -- Day 3 columns (may already exist)
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'email_captures' AND column_name = 'email_sent_day3') THEN
    ALTER TABLE public.email_captures ADD COLUMN email_sent_day3 boolean NOT NULL DEFAULT false;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'email_captures' AND column_name = 'email_sent_day3_at') THEN
    ALTER TABLE public.email_captures ADD COLUMN email_sent_day3_at timestamptz;
  END IF;

  -- Day 7 columns (may already exist)
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'email_captures' AND column_name = 'email_sent_day7') THEN
    ALTER TABLE public.email_captures ADD COLUMN email_sent_day7 boolean NOT NULL DEFAULT false;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'email_captures' AND column_name = 'email_sent_day7_at') THEN
    ALTER TABLE public.email_captures ADD COLUMN email_sent_day7_at timestamptz;
  END IF;

  -- Day 10 columns (new - Zion spotlight)
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'email_captures' AND column_name = 'email_sent_day10') THEN
    ALTER TABLE public.email_captures ADD COLUMN email_sent_day10 boolean NOT NULL DEFAULT false;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'email_captures' AND column_name = 'email_sent_day10_at') THEN
    ALTER TABLE public.email_captures ADD COLUMN email_sent_day10_at timestamptz;
  END IF;

  -- Day 14 columns (new - Medi-Share spotlight)
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'email_captures' AND column_name = 'email_sent_day14') THEN
    ALTER TABLE public.email_captures ADD COLUMN email_sent_day14 boolean NOT NULL DEFAULT false;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'email_captures' AND column_name = 'email_sent_day14_at') THEN
    ALTER TABLE public.email_captures ADD COLUMN email_sent_day14_at timestamptz;
  END IF;

  -- Day 17 columns (new - CrowdHealth spotlight)
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'email_captures' AND column_name = 'email_sent_day17') THEN
    ALTER TABLE public.email_captures ADD COLUMN email_sent_day17 boolean NOT NULL DEFAULT false;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'email_captures' AND column_name = 'email_sent_day17_at') THEN
    ALTER TABLE public.email_captures ADD COLUMN email_sent_day17_at timestamptz;
  END IF;

  -- Day 21 columns (new - final decision push)
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'email_captures' AND column_name = 'email_sent_day21') THEN
    ALTER TABLE public.email_captures ADD COLUMN email_sent_day21 boolean NOT NULL DEFAULT false;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'email_captures' AND column_name = 'email_sent_day21_at') THEN
    ALTER TABLE public.email_captures ADD COLUMN email_sent_day21_at timestamptz;
  END IF;
END $$;

-- Index for cron queries: find emails by creation date + unsent status
CREATE INDEX IF NOT EXISTS idx_email_captures_created_at ON public.email_captures (created_at);
