'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase/client';

export default function Auth() {
  const [email, setEmail] = useState('');

  const login = async () => {
    await supabase.auth.signInWithOtp({ email });
    alert('Check email');
  };

  return (
    <main style={{padding:40}}>
      <h1>Login</h1>
      <input value={email} onChange={e=>setEmail(e.target.value)} />
      <button onClick={login}>Entrar</button>
    </main>
  );
}