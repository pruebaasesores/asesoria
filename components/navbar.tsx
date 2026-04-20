import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Logo } from './logo';

export function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="nav-brand">
          <Logo />
          <div>
            <div className="brand-copy-title">Guilda</div>
            <div className="logo-caption">marketplace para expertos y gamers</div>
          </div>
        </Link>

        <nav className="nav-links">
          <Link href="/browse">Marketplace</Link>
          <Link href="/profile">Perfil</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>

        <div className="nav-actions">
          <Link href="/browse" className="button button-secondary compact-button">Explorar</Link>
          <Link href="/auth" className="button button-primary compact-button">
            Empezar
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
