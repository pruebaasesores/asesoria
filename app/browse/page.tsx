export const dynamic = 'force-dynamic';
import { supabase } from '@/lib/supabase/client';

export default async function Browse() {
  const { data } = await supabase.from('profiles').select('*');

  return (
    <main style={{padding:40}}>
      <h1>Gamers</h1>
      {data?.map(u => <p key={u.id}>{u.username}</p>)}
    </main>
  );
}