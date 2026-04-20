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
            <div className="brand-copy-small">Demo visual lista para enseñar el concepto del marketplace.</div>
          </div>
        </div>
        <div className="footer-links">
          <Link href="/">Inicio</Link>
          <Link href="/browse">Marketplace</Link>
          <Link href="/auth">Onboarding</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </div>
    </footer>
  );
}
