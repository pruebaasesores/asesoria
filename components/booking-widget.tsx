'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Expert, Slot } from '@/lib/mock-data';

export function BookingWidget({ expert }: { expert: Expert }) {
  const router = useRouter();
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(expert.slots[0] ?? null);
  const [note, setNote] = useState('Quiero mejorar consistencia y entender mejor mis errores en ranked.');
  const [loading, setLoading] = useState(false);
  const platformFee = useMemo(() => Math.round(expert.price * 0.12), [expert.price]);
  const total = expert.price + platformFee;

  const handleCheckout = async () => {
    if (!selectedSlot) return;
    setLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          expertSlug: expert.slug,
          expertName: expert.name,
          slotLabel: selectedSlot.label,
          amount: total,
          note,
        }),
      });

      const data = (await response.json()) as { url?: string };
      if (data.url) {
        window.location.href = data.url;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-widget">
      <div className="booking-widget-header">
        <div>
          <div className="eyebrow pill">Reserva guiada</div>
          <h3 className="table-title">Elige tu horario y pasa a checkout</h3>
        </div>
        <div className="price-badge large-price">{expert.priceLabel}</div>
      </div>

      <div className="slot-grid slot-grid-large">
        {expert.slots.map((slot) => (
          <button
            key={slot.id}
            type="button"
            className={`slot selectable-slot ${selectedSlot?.id === slot.id ? 'slot-selected' : ''}`}
            onClick={() => setSelectedSlot(slot)}
          >
            <span>{slot.label}</span>
            <span className="slot-status">Disponible</span>
          </button>
        ))}
      </div>

      <div className="booking-note-wrap">
        <label className="field-label">Qué quieres conseguir en la sesión</label>
        <textarea
          className="input textarea"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Cuéntale al experto en qué punto estás y qué objetivo tienes"
        />
      </div>

      <div className="checkout-summary card soft-card">
        <div className="summary-row"><span>Sesión con {expert.name}</span><strong>{expert.price} €</strong></div>
        <div className="summary-row"><span>Comisión plataforma (12%)</span><strong>{platformFee} €</strong></div>
        <div className="summary-row summary-total"><span>Total checkout</span><strong>{total} €</strong></div>
      </div>

      <div className="cta-actions left-actions">
        <button type="button" className="button button-primary" onClick={handleCheckout} disabled={loading || !selectedSlot}>
          {loading ? 'Preparando checkout…' : 'Pagar con Stripe / demo'}
        </button>
        <button type="button" className="button button-secondary" onClick={() => router.push('/auth')}>
          Crear cuenta cliente
        </button>
      </div>
    </div>
  );
}
