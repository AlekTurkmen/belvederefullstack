//This pulls data from the Supabase database (UserData) table and displays it in a preformatted JSON format.

import { createClient } from '@/utils/supabase/server';

export default async function Notes() {
  const supabase = await createClient();
  const { data: notes } = await supabase.from("UserData").select();

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}