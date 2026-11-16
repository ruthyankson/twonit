import { createClient } from "@supabase/supabase-js";

// Same Supabase project as `application`/`twonit-admin` -- this site is
// just a third, unauthenticated client of it, calling in directly from
// the visitor's browser (a static GitHub Pages site has no server of
// its own to proxy through). The anon key is meant to be public -- see
// README.md's "Pilot form backend" section for why that's safe here:
// the pilot_signups table has no RLS policies at all, so this key can't
// do anything except call submit_pilot_signup(), which is the one
// narrow thing a visitor is supposed to be able to do.
const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Not configured (e.g. a local checkout without .env.local yet) --
// callers check this rather than crashing the whole app at import time.
export const supabaseConfigured =
  typeof url === "string" && url.length > 0 && typeof anonKey === "string" && anonKey.length > 0;

export const supabase = supabaseConfigured
  ? createClient(url as string, anonKey as string)
  : null;
