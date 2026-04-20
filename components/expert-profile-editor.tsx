'use client';

import { useMemo, useState } from 'react';
import { platformRules } from '@/lib/mock-data';

export function ExpertProfileEditor() {
  const [price, setPrice] = useState('29');
  const [title, setTitle] = useState('Coach de Valorant para mejorar macro, aim y lectura de rondas');
  const [bio, setBio] = useState('Trabajo sesiones 1:1 para jugadores que quieren subir rank sin perder tiempo en teoría genérica.');
  const [acceptedRule, setAcceptedRule] = useState(true);

  const platformFee = useMemo(() => Math.round(Number(price || 0) * 0.12), [price]);
  const takeHome = useMemo(() => Number(price || 0) - platformFee, [price, platformFee]);

  return (
    <div className="profile-editor-grid">
      <div className="card profile-editor-card">
        <div className="eyebrow pill">Panel experto</div>
        <h1 className="page-title small-title">Configura tu perfil, tu precio y tus reglas visibles</h1>
        <p className="page-copy">Esto simula cómo el experto controlará su propuesta comercial sin tocar código.</p>

        <div className="form-grid">
          <div>
            <label className="field-label">Titular del servicio</label>
            <input className="input" value={title} onChange={(event) => setTitle(event.target.value)} />
          </div>
          <div>
            <label className="field-label">Precio por sesión (€)</label>
            <input className="input" value={price} onChange={(event) => setPrice(event.target.value)} />
          </div>
          <div className="full-span">
            <label className="field-label">Bio comercial</label>
            <textarea className="input textarea" value={bio} onChange={(event) => setBio(event.target.value)} />
          </div>
        </div>

        <div className="terms-box">
          <div className="table-title">Condición obligatoria</div>
          <label className="checkbox-row">
            <input type="checkbox" checked={acceptedRule} onChange={() => setAcceptedRule((value) => !value)} />
            <span>{platformRules[0]}</span>
          </label>
        </div>
      </div>

      <div className="stack-list-side">
        <div className="card side-card">
          <div className="table-title">Resumen económico</div>
          <div className="summary-row"><span>Precio visible</span><strong>{price} €</strong></div>
          <div className="summary-row"><span>Comisión Guilda 12%</span><strong>{platformFee} €</strong></div>
          <div className="summary-row summary-total"><span>Ingreso estimado experto</span><strong>{takeHome} €</strong></div>
        </div>
        <div className="card side-card">
          <div className="table-title">Vista previa del perfil</div>
          <div className="preview-badge">{price} € / sesión</div>
          <p className="preview-title">{title}</p>
          <p>{bio}</p>
          <div className="chip-row">
            <span className="chip">Valorant</span>
            <span className="chip">1:1</span>
            <span className="chip">Verificado</span>
          </div>
          <div className="note-box">
            {acceptedRule ? 'Condición obligatoria aceptada.' : 'Falta aceptar la condición obligatoria del marketplace.'}
          </div>
        </div>
      </div>
    </div>
  );
}
