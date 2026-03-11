

# Supabase Setup Guide for Your Quote Form

Here is the complete step-by-step walkthrough to get your quote form connected to Supabase.

---

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in (or create an account)
2. Click **"New Project"**
3. Pick your organization, name the project (e.g. "averix"), set a database password, choose a region close to your users
4. Wait for the project to finish provisioning (~2 minutes)

---

## Step 2: Create the Database Table

1. In your Supabase dashboard, go to **SQL Editor** (left sidebar)
2. Click **"New query"**
3. Copy-paste the **entire contents** of your file `src/lib/supabase-migration.sql` into the editor
4. Click **"Run"**

This creates the `quote_requests` table with Row Level Security policies that allow anyone to submit forms but only authenticated users to read/update entries.

---

## Step 3: Enable Anonymous Access

Since your form is public (no login required), you need anonymous access enabled:

1. Go to **Settings → Authentication** in Supabase dashboard
2. Under **"User Signups"**, make sure **"Allow anonymous sign-ins"** is toggled **OFF** (you don't need anonymous sign-ins — the `anon` key already grants the `anon` role)

The RLS policy already allows the `anon` role to insert, so no extra config is needed here.

---

## Step 4: Get Your API Keys

1. Go to **Settings → API** in the Supabase dashboard
2. Copy these two values:
   - **Project URL** (e.g. `https://xyzcompany.supabase.co`)
   - **anon / public key** (the long `eyJ...` string)

---

## Step 5: Create the Supabase Client File

You need to install the Supabase JS library. In your project, run:

```bash
npm install @supabase/supabase-js
```

Then create the file `src/lib/supabase-client.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_PROJECT_URL';   // paste from Step 4
const supabaseAnonKey = 'YOUR_ANON_KEY';  // paste from Step 4

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

> The anon key is a **publishable** key — it is safe to include in frontend code. RLS protects your data.

---

## Step 6: Uncomment the Query Functions

In `src/lib/supabase-queries.ts`, remove all the comment markers so it looks like:

```typescript
import { supabase } from './supabase-client';
import type { QuoteRequestInsert } from './supabase-types';

export async function submitQuoteRequest(data: QuoteRequestInsert) {
  const { error } = await supabase
    .from('quote_requests')
    .insert([data]);
  if (error) throw error;
}

export async function getQuoteRequests() {
  const { data, error } = await supabase
    .from('quote_requests')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function updateQuoteStatus(id: string, status: string) {
  const { error } = await supabase
    .from('quote_requests')
    .update({ status })
    .eq('id', id);
  if (error) throw error;
}
```

---

## Step 7: Uncomment the Form Import

In `src/components/QuoteForm.tsx`, make two changes:

**Line 17** — uncomment the import:
```typescript
import { submitQuoteRequest } from "@/lib/supabase-queries";
```

**Line 65** — uncomment the function call and remove the console.log:
```typescript
await submitQuoteRequest(formData);
```

---

## Step 8: Test It

1. Open your site, scroll to the quote form
2. Fill in the required fields and submit
3. Go to your Supabase dashboard → **Table Editor → quote_requests**
4. You should see the submitted entry appear

---

## Step 9: View Submissions (Optional Admin)

To view submissions later, you can either:
- Check the **Table Editor** in the Supabase dashboard directly
- Build an admin page that uses `getQuoteRequests()` (requires authentication)

---

That is it — 7 files touched, zero backend code to deploy. Once you do Steps 4-7 and hit save, the form is live.

