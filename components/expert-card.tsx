import Link from 'next/link';
import { Star } from 'lucide-react';
import type { Expert } from '@/lib/mock-data';

export function ExpertCard({ expert }: { expert: Expert }) {
  return (
    <article className="card expert-card">
      <div className="expert-card-top">
        <div className="expert-top-row">
          <div className="avatar-badge">{expert.initials}</div>
          <div className="price-badge">{expert.priceLabel}</div>
        </div>
        <div className="expert-name">{expert.name}</div>
        <div className="expert-role">{expert.headline}</div>
        <div className="rating-line">
          <Star size={16} fill="currentColor" />
          {expert.rating} · {expert.sessionsLabel}
        </div>
      </div>
      <div className="expert-card-bottom">
        <div className="chip-row">
          {expert.tags.map((tag) => (
            <span key={tag} className="chip">{tag}</span>
          ))}
        </div>
        <div className="expert-description">{expert.description}</div>
        <div className="card-actions">
          <Link href={`/expert/${expert.slug}`} className="card-link primary-link">Ver perfil</Link>
          <Link href="/auth" className="card-link">Reservar demo</Link>
        </div>
      </div>
    </article>
  );
}
