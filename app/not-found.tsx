import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found-wrap">
      <div className="card success-card">
        <h1 className="page-title small-title">Esta ruta no existe en Guilda</h1>
        <p className="page-copy">
          Puede que el perfil haya desaparecido o que la URL no sea válida.
        </p>
        <div className="cta-actions">
          <Link href="/" className="button button-primary">Volver al inicio</Link>
          <Link href="/browse" className="button button-secondary">Ver marketplace</Link>
        </div>
      </div>
    </main>
  );
}
