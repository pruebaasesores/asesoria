import Link from 'next/link';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ expert?: string; slot?: string; amount?: string }>;
}) {
  const params = await searchParams;

  return (
    <main>
      <Navbar />
      <section className="section compact-top-section">
        <div className="container">
          <div className="card success-card">
            <div className="success-icon">
              <CheckCircle2 size={40} />
            </div>
            <div className="eyebrow pill">Reserva completada</div>
            <h1 className="page-title small-title">Tu sesión ya está bloqueada dentro de Guilda</h1>
            <p className="page-copy">
              El flujo ideal ahora es este: pago dentro de la plataforma, horario confirmado y relación comercial protegida.
            </p>

            <div className="success-summary">
              <div className="summary-row">
                <span>Coach</span>
                <strong>{params.expert ?? 'Coach confirmado'}</strong>
              </div>
              <div className="summary-row">
                <span>Horario</span>
                <strong>{params.slot ?? 'Slot confirmado'}</strong>
              </div>
              <div className="summary-row summary-total">
                <span>Total</span>
                <strong>{params.amount ?? 'Pago realizado'}</strong>
              </div>
            </div>

            <div className="note-box">
              <ShieldCheck size={16} />
              Todo queda dentro de Guilda para proteger al jugador, al coach y la operativa del marketplace.
            </div>

            <div className="cta-actions">
              <Link href="/browse" className="button button-primary">
                Seguir explorando coaches
              </Link>
              <Link href="/dashboard" className="button button-secondary">
                Ver actividad
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
