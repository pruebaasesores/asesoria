import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { expert?: string; slot?: string; amount?: string };
}) {
  const params = searchParams;

  return (
    <main>
      <Navbar />
      <section className="section compact-top-section">
        <div className="container">
          <div className="card success-card">
            <div className="success-icon"><CheckCircle2 size={32} /></div>
            <div className="eyebrow pill">Reserva creada</div>
            <h1 className="page-title small-title">Checkout completado {params.amount ? '(modo demo o Stripe)' : ''}</h1>
            <p className="page-copy">
              Has reservado una sesión con <strong>{params.expert || 'tu experto'}</strong> para <strong>{params.slot || 'un horario seleccionado'}</strong>.
              Total gestionado: <strong>{params.amount || '0'} €</strong>.
            </p>
            <div className="cta-actions">
              <Link href="/dashboard" className="button button-primary">Ver operaciones</Link>
              <Link href="/browse" className="button button-secondary">Seguir explorando</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
