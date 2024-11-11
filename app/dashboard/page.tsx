import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export default async function DashboardPage() {
  const supabase = await createClient();

  // Check if there is a logged-in user
  // const { data, error } = await supabase.auth.getUser();
  // if (error || !data?.user) {
  //   redirect('/login'); // Redirect to login page if not authenticated
  // }

  // {data.user.email}

  return <div>Welcome to the Dashboard, !</div>;
}
