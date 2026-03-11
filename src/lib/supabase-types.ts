// Supabase types for the quote_requests table
// Use these types when integrating with Supabase

export interface QuoteRequest {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  phone: string;
  company_name: string | null;
  company_website: string | null;
  country: string | null;
  service_type: string;
  budget_range: string | null;
  timeline: string | null;
  project_description: string;
  has_existing_design: string;
  preferred_contact_method: string;
  features: string[];
  how_did_you_find_us: string | null;
  status: 'new' | 'contacted' | 'in_progress' | 'quoted' | 'closed';
}

export type QuoteRequestInsert = Omit<QuoteRequest, 'id' | 'created_at' | 'status'>;
