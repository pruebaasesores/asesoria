import Link from 'next/link';
import { CalendarRange, ShieldCheck, Star, Sword } from 'lucide-react';
import type { Expert } from '@/lib/mock-data';

export function ExpertCard({ expert }: { expert: Expert }) {
  return (
    <article className={`card expert-card game-${expert.gameKey}`}>
      <div className="expert-card-top">
        <div className="expert-top-row">
          <div className="avatar-badge">{expert.initials}</div>
          <div className="price-badge">{expert.priceLabel}</div>
        </div>

        <div className="expert-game-label">{expert.game}</div>
        <div className="expert-name">{expert.name}</div>
        <div className="expert-role">{expert.headline}</div>

        <div className="rating-line">
          <Star size={16} fill="currentColor" />
          {expert.rating} · {expert.sessionsLabel}
        </div>

        <div className="expert-meta-line">
          <span>
            <CalendarRange size={14} />
            {expert.slots.length} huecos abiertos
          </span>
          <span>
            <ShieldCheck size={14} />
            coach verificado
          </span>
        </div>
      </div>

      <div className="expert-card-bottom">
        <div className="chip-row">
          {expert.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>

        <div className="expert-description">{expert.description}</div>

        <div className="card-actions">
          <Link href={`/expert/${expert.slug}`} className="card-link primary-link">
            Ver perfil y reservar
          </Link>
          <Link href="/auth" className="card-link">
            <Sword size={14} />
            Unirme como coach
          </Link>
        </div>
      </div>
    </article>
  );
}
