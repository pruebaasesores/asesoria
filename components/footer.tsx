import Link from 'next/link';
import { Logo } from './logo';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo />
          <div>
            <div className="brand-copy-title">Guilda</div>
            <div className="brand-copy-small">Marketplace premium para expertos y clientes. Demo funcional lista para evolucionar a producción.</div>
          </div>
        </div>
        <div className="footer-links">
          <Link href="/">Inicio</Link>
          <Link href="/browse">Marketplace</Link>
          <Link href="/auth">Registro</Link>
          <Link href="/dashboard">Operaciones</Link>
          <Link href="/profile">Panel experto</Link>
        </div>
      </div>
    </footer>
  );
}
