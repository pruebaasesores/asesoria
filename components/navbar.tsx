import Link from 'next/link';
import { ArrowRight, Flame, ShieldCheck } from 'lucide-react';
import { Logo } from './logo';

export function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="nav-brand">
          <Logo />
          <div>
            <div className="brand-copy-title">Guilda</div>
            <div className="logo-caption">fortnite · valorant · league of legends</div>
          </div>
        </Link>

        <nav className="nav-links">
          <Link href="/browse">Marketplace</Link>
          <Link href="/dashboard">Actividad</Link>
          <Link href="/profile">Ser coach</Link>
        </nav>

        <div className="nav-actions">
          <div className="nav-badge">
            <ShieldCheck size={14} />
            pagos dentro de guilda
          </div>
          <Link href="/browse" className="button button-secondary compact-button">
            <Flame size={16} />
            Explorar
          </Link>
          <Link href="/auth" className="button button-primary compact-button">
            Entrar
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
