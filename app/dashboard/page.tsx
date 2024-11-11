// app/dashboard/page.tsx
import { createServerSupabaseClient } from '@/lib/supabaseServerClient';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const supabase = createServerSupabaseClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    // Redirect to login page if not authenticated
    redirect('/login');
  }

  // Render the dashboard content
  return (
    <div>
      <h1>Welcome to your dashboard, {session.user.email}!</h1>
    </div>
  );
}
