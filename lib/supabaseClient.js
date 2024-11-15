// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
//     persistSession: true,        // Enables session persistence across reloads
//     autoRefreshToken: true,      // Automatically refreshes the token when it expires
//   });

// lib/supabaseClient.ts
'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export const supabase = createClientComponentClient();
