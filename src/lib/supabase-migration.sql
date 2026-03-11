-- Migration: Create quote_requests table
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS public.quote_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  
  -- Personal info
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  country TEXT,
  
  -- Company info
  company_name TEXT,
  company_website TEXT,
  
  -- Project details
  service_type TEXT NOT NULL,
  budget_range TEXT,
  timeline TEXT,
  project_description TEXT NOT NULL,
  has_existing_design TEXT DEFAULT 'no',
  features TEXT[] DEFAULT '{}',
  
  -- Preferences
  preferred_contact_method TEXT DEFAULT 'email',
  how_did_you_find_us TEXT,
  
  -- Internal
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_progress', 'quoted', 'closed'))
);

-- Enable RLS
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public form submissions)
CREATE POLICY "Anyone can submit a quote request"
  ON public.quote_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users (admins) can read
CREATE POLICY "Authenticated users can read quote requests"
  ON public.quote_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can update status
CREATE POLICY "Authenticated users can update quote requests"
  ON public.quote_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
