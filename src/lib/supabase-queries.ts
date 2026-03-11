// Supabase queries for the quote_requests table
// Uncomment and configure when Supabase is connected
//
// import { supabase } from './supabase-client';
// import type { QuoteRequestInsert } from './supabase-types';
//
// export async function submitQuoteRequest(data: QuoteRequestInsert) {
//   const { error } = await supabase
//     .from('quote_requests')
//     .insert([data]);
//
//   if (error) throw error;
// }
//
// export async function getQuoteRequests() {
//   const { data, error } = await supabase
//     .from('quote_requests')
//     .select('*')
//     .order('created_at', { ascending: false });
//
//   if (error) throw error;
//   return data;
// }
//
// export async function updateQuoteStatus(id: string, status: string) {
//   const { error } = await supabase
//     .from('quote_requests')
//     .update({ status })
//     .eq('id', id);
//
//   if (error) throw error;
// }
