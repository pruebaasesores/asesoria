'use client';

import { useMemo, useState } from 'react';
import type { Expert, Slot } from '@/lib/mock-data';

export function BookingWidget({ expert }: { expert: Expert }) {
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(expert.slots[0] ?? null);
  const [note, setNote] = useState(
    'Quiero salir de la sesión con objetivos claros, ejercicios útiles y cambios concretos para subir nivel.'
  );
  const [loading, setLoading] = useState(false);

  const platformFee = useMemo(() => Math.max(2, Math.round(expert.price * 0.12)), [expert.price]);
  const total = expert.price + platformFee;

  const handleCheckout = async () => {
    if (!selectedSlot) return;
    setLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          expertName: expert.name,
          expertSlug: expert.slug,
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
    <div className="booking-widget card">
      <div className="booking-widget-header">
        <div>
          <div className="eyebrow pill">Reserva protegida</div>
          <h3 className="table-title">Elige horario y bloquea tu sesión</h3>
        </div>
        <div className="price-badge large-price">{expert.priceLabel}</div>
      </div>

      <div className="slot-grid">
        {expert.slots.map((slot) => (
          <button
            key={slot.id}
            type="button"
            className={`slot selectable-slot ${selectedSlot?.id === slot.id ? 'slot-selected' : ''}`}
            onClick={() => setSelectedSlot(slot)}
          >
            <span>{slot.label}</span>
            <span className="slot-status">{slot.available ? 'Disponible' : 'No disponible'}</span>
          </button>
        ))}
      </div>

      <div>
        <label className="field-label">Qué quieres trabajar</label>
        <textarea
          className="input textarea"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Cuenta tu rank, el problema que más te frena y qué te gustaría conseguir con esta sesión"
        />
      </div>

      <div className="checkout-summary">
        <div className="summary-row">
          <span>Sesión con {expert.name}</span>
          <strong>{expert.price} €</strong>
        </div>
        <div className="summary-row">
          <span>Protección, soporte y uso de plataforma</span>
          <strong>{platformFee} €</strong>
        </div>
        <div className="summary-row summary-total">
          <span>Total</span>
          <strong>{total} €</strong>
        </div>
      </div>

      <div className="note-box">
        La comunicación comercial, el precio y la reserva se mantienen dentro de Guilda para proteger al jugador, al coach y la comisión del marketplace.
      </div>

      <div className="cta-actions left-actions">
        <button type="button" className="button button-primary full-width-button" onClick={handleCheckout} disabled={!selectedSlot || loading}>
          {loading ? 'Preparando checkout…' : 'Reservar y pagar'}
        </button>
      </div>
    </div>
  );
}
