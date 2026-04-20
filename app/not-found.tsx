import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found-wrap">
      <div>
        <h1 className="page-title small-title">Página no encontrada</h1>
        <p className="page-copy">La ruta que buscas no existe en esta demo.</p>
        <div className="cta-actions left-actions" style={{ justifyContent: 'center' }}>
          <Link href="/" className="button button-primary">Volver al inicio</Link>
          <Link href="/browse" className="button button-secondary">Ir al marketplace</Link>
        </div>
      </div>
    </main>
  );
}
