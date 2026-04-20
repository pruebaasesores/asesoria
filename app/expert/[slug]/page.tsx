import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CalendarRange, Globe, ShieldCheck, Star } from 'lucide-react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { experts } from '@/lib/mock-data';

export default async function ExpertDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const expert = experts.find((item) => item.slug === slug);

  if (!expert) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <section className="section compact-top-section">
        <div className="container profile-layout">
          <div className="profile-main-card card">
            <Link href="/browse" className="back-link"><ArrowLeft size={16} /> Volver al marketplace</Link>
            <div className="profile-header">
              <div>
                <div className="eyebrow pill">Detalle demo</div>
                <h1 className="page-title small-title">{expert.name}</h1>
                <p className="page-copy">{expert.headline}</p>
              </div>
              <div className="price-badge large-price">{expert.priceLabel}</div>
            </div>
            <div className="tag-list">
              {expert.tags.map((tag) => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>
            <div className="profile-copy-block">
              <p>{expert.description}</p>
            </div>
            <div className="detail-grid">
              <div className="detail-item"><Star size={16} /> Rating {expert.rating}</div>
              <div className="detail-item"><Globe size={16} /> Español / English</div>
              <div className="detail-item"><CalendarRange size={16} /> Slots actualizados semanalmente</div>
              <div className="detail-item"><ShieldCheck size={16} /> Perfil verificado por plataforma</div>
            </div>
          </div>

          <div className="stack-list-side">
            <div className="card side-card">
              <div className="table-title">Qué se reserva aquí</div>
              <ul className="mini-list">
                <li>Sesión individual 1:1</li>
                <li>Seguimiento personalizado</li>
                <li>Explicación práctica y accionable</li>
                <li>Resumen de mejoras</li>
              </ul>
            </div>
            <div className="card side-card">
              <button className="button button-primary full-width-button" type="button">Reservar demo</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
