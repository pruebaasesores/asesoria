'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase/client';

export default function ProfilePage() {
  const [game, setGame] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const save = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return alert('No logueado');

    await supabase
      .from('profiles')
      .update({
        game,
        price: Number(price),
        description,
      })
      .eq('id', user.id);

    alert('Perfil guardado');
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>Tu perfil</h1>

      <input
        placeholder="Juego (ej: Valorant)"
        value={game}
        onChange={(e) => setGame(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Precio por hora"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <button onClick={save}>Guardar</button>
    </main>
  );
}
