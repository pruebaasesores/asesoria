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
            <div className="brand-copy-small">
              Plataforma gamer para reservar coaches, dúos y sesiones competitivas sin sacar al jugador fuera del producto.
            </div>
          </div>
        </div>

        <div className="footer-links">
          <Link href="/">Inicio</Link>
          <Link href="/browse">Coaches</Link>
          <Link href="/auth">Registro</Link>
          <Link href="/profile">Panel coach</Link>
          <Link href="/dashboard">Actividad</Link>
        </div>
      </div>
    </footer>
  );
}
