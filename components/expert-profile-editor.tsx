'use client';

import { useMemo, useState } from 'react';
import { platformRules } from '@/lib/mock-data';

export function ExpertProfileEditor() {
  const [price, setPrice] = useState('32');
  const [title, setTitle] = useState('Coach de Valorant para ranked climb, VOD review y toma de decisiones');
  const [bio, setBio] = useState(
    'Trabajo sesiones 1:1 con jugadores que quieren dejar de improvisar y empezar a subir con un plan claro.'
  );
  const [accepted, setAccepted] = useState(true);

  const commission = useMemo(() => Math.max(2, Math.round(Number(price || 0) * 0.12)), [price]);
  const takeHome = useMemo(() => Math.max(0, Number(price || 0) - commission), [price, commission]);

  return (
    <div className="profile-editor-grid">
      <div className="card profile-editor-card">
        <div className="eyebrow pill">Panel coach</div>
        <h1 className="page-title small-title">Construye un perfil gamer que venda bien</h1>
        <p className="page-copy">
          Tu ficha tiene que explicar rápido quién ayudas, qué cambio prometes y por qué vale tu precio.
        </p>

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
          <div className="table-title">Regla obligatoria</div>
          <label className="checkbox-row">
            <input type="checkbox" checked={accepted} onChange={() => setAccepted((value) => !value)} />
            <span>{platformRules[0]}</span>
          </label>
        </div>
      </div>

      <div className="stack-list-side">
        <div className="card side-card">
          <div className="table-title">Economía de una sesión</div>
          <div className="summary-row">
            <span>Precio visible al jugador</span>
            <strong>{price} €</strong>
          </div>
          <div className="summary-row">
            <span>Comisión Guilda (12%)</span>
            <strong>{commission} €</strong>
          </div>
          <div className="summary-row summary-total">
            <span>Ingreso estimado coach</span>
            <strong>{takeHome} €</strong>
          </div>
        </div>

        <div className="card side-card">
          <div className="table-title">Vista previa de perfil</div>
          <div className="preview-badge">{price} € / sesión</div>
          <p className="preview-title">{title}</p>
          <p>{bio}</p>
          <div className="chip-row">
            <span className="chip">Valorant</span>
            <span className="chip">1:1 coaching</span>
            <span className="chip">Perfil verificado</span>
          </div>
          <div className="note-box">
            {accepted
              ? 'Condición operativa obligatoria aceptada.'
              : 'Falta aceptar la condición operativa para publicar el perfil.'}
          </div>
        </div>
      </div>
    </div>
  );
}
