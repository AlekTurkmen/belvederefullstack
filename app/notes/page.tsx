//This pulls data from the Supabase database (UserData) table and displays it in a preformatted JSON format.

import { createClient } from '@/utils/supabase/server';

export default async function Notes() {
  const supabase = await createClient();
  const { data: UserData, error } = await supabase.from("UserData").select();
  
  if (error) {
    console.error("Error fetching data:", error);
    return <pre>Error fetching data</pre>;
  }
          
  return <pre>{JSON.stringify(UserData, null, 2)}</pre>
}