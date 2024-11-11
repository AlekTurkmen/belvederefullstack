// components/UserGreeting.tsx
'use client';

import { useUser } from '@supabase/auth-helpers-react';

export default function UserGreeting() {
  const user = useUser();

  if (!user) return null;

  return <p>Hello, {user.email}!</p>;
}
