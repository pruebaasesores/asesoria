export const dynamic = 'force-dynamic';

import { supabase } from '@/lib/supabase/client';

export default async function BrowsePage() {
  const { data, error } = await supabase.from('profiles').select('*');

  return (
    <main style={{ padding: 40 }}>
      <h1>Gamers</h1>
      {error && <p>Error: {error.message}</p>}
      {data?.map((user) => (
        <div key={user.id}>
          <p>{user.username}</p>
        </div>
      ))}
    </main>
  );
}
