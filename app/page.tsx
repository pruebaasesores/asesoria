import Link from "next/link";

export default function Home() {
  return (
    <main style={{padding:40}}>
      <h1 style={{fontSize:40}}>Guilda 🚀</h1>
      <p>Marketplace de expertos en tiempo real</p>

      <div style={{marginTop:20}}>
        <Link href="/browse">Explorar</Link>
      </div>

      <div style={{marginTop:10}}>
        <Link href="/auth">Login</Link>
      </div>
    </main>
  );
}