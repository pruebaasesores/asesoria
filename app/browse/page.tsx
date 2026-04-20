export const dynamic = 'force-dynamic';

import { supabase } from '@/lib/supabase/client';

export default async function BrowsePage() {
  const { data, error } = await supabase.from('profiles').select('*');

  return (
    <main style={{ padding: 40 }}>
      <h1>Gamers</h1>

      {error && <p>Error: {error.message}</p>}

      {data?.map((user) => (
        <div
          key={user.id}
          style={{
            border: '1px solid #333',
            padding: 15,
            marginBottom: 10,
            borderRadius: 10,
          }}
        >
          <p><b>{user.username}</b></p>
          <p>🎮 {user.game || 'Sin juego'}</p>
          <p>💰 {user.price ? user.price + ' €/h' : 'Sin precio'}</p>
          <p>{user.description || 'Sin descripción'}</p>
        </div>
      ))}
    </main>
  );
}
