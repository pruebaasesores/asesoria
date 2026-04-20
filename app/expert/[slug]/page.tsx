import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CalendarRange, Globe, ShieldCheck, Star } from 'lucide-react';
import { BookingWidget } from '@/components/booking-widget';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { experts } from '@/lib/mock-data';

export default function ExpertDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
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
                <div className="eyebrow pill">Perfil experto</div>
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
              <p>{expert.transformation}</p>
            </div>
            <div className="detail-grid">
              <div className="detail-item"><Star size={16} /> {expert.rating} de valoración media</div>
              <div className="detail-item"><CalendarRange size={16} /> {expert.slots.length} horarios abiertos</div>
              <div className="detail-item"><Globe size={16} /> {expert.languages.join(' / ')}</div>
              <div className="detail-item"><ShieldCheck size={16} /> Respuesta media {expert.responseTime}</div>
            </div>
            <div className="two-column detail-split">
              <div className="card soft-card inner-card">
                <div className="table-title">Qué incluye la sesión</div>
                <ul className="mini-list">
                  {expert.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="card soft-card inner-card">
                <div className="table-title">Normas de operación</div>
                <ul className="mini-list">
                  {expert.rules.map((rule) => (
                    <li key={rule}>{rule}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="review-grid">
              {expert.reviews.map((review) => (
                <div key={review.author} className="card soft-card review-card">
                  <div className="rating-line"><Star size={14} fill="currentColor" /> {review.rating}</div>
                  <p>“{review.quote}”</p>
                  <div className="testimonial-meta">
                    <strong>{review.author}</strong>
                    <span>{review.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="stack-list-side">
            <BookingWidget expert={expert} />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
