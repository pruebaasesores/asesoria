'use client';

import { useMemo, useState } from 'react';
import { platformRules } from '@/lib/mock-data';

type Role = 'client' | 'expert';

export function RoleAuth() {
  const [role, setRole] = useState<Role>('client');
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [price, setPrice] = useState('29');

  const helperCopy = useMemo(() => {
    if (role === 'client') {
      return 'Entra para descubrir coaches, comparar perfiles, reservar slots y pagar sin salir de Guilda.';
    }
    return `Activa tu perfil coach, fija tu precio por sesión y publica disponibilidad. Precio actual: ${price || '0'} €/sesión.`;
  }, [role, price]);

  return (
    <div className="auth-shell auth-grid">
      <div className="card auth-panel">
        <div className="auth-toggle">
          <button
            type="button"
            className={`toggle-pill ${role === 'client' ? 'toggle-pill-active' : ''}`}
            onClick={() => setRole('client')}
          >
            Soy jugador
          </button>
          <button
            type="button"
            className={`toggle-pill ${role === 'expert' ? 'toggle-pill-active' : ''}`}
            onClick={() => setRole('expert')}
          >
            Soy coach
          </button>
        </div>

        <div className="eyebrow pill">Acceso gamer</div>
        <h1 className="page-title small-title">
          {role === 'client' ? 'Entra para reservar coaches top' : 'Convierte tu skill en un servicio premium'}
        </h1>
        <p className="page-copy">{helperCopy}</p>

        <div className="form-grid form-grid-two">
          <div>
            <label className="field-label">Nombre o nickname</label>
            <input className="input" placeholder={role === 'client' ? 'Tu nickname' : 'Tu nombre de coach'} />
          </div>
          <div>
            <label className="field-label">Email</label>
            <input className="input" placeholder="tu@email.com" />
          </div>

          {role === 'expert' ? (
            <>
              <div>
                <label className="field-label">Juego principal</label>
                <select className="input">
                  <option>Valorant</option>
                  <option>Fortnite</option>
                  <option>League of Legends</option>
                </select>
              </div>
              <div>
                <label className="field-label">Precio por sesión (€)</label>
                <input className="input" value={price} onChange={(event) => setPrice(event.target.value)} />
              </div>
              <div className="full-span">
                <label className="field-label">Qué ofreces</label>
                <textarea
                  className="input textarea"
                  placeholder="Explica qué tipo de jugador ayudas, en qué eres fuerte y qué mejora concreta se lleva tras la sesión"
                />
              </div>
            </>
          ) : (
            <div className="full-span">
              <label className="field-label">Qué quieres mejorar</label>
              <textarea
                className="input textarea"
                placeholder="Ejemplo: mejores peeks en Fortnite, macro en LoL o consistencia en Valorant"
              />
            </div>
          )}
        </div>

        {role === 'expert' && (
          <div className="terms-box">
            <div className="table-title">Condición obligatoria para coaches</div>
            <ul className="mini-list">
              {platformRules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
            <label className="checkbox-row">
              <input type="checkbox" checked={accepted} onChange={() => setAccepted((value) => !value)} />
              <span>Acepto las condiciones operativas de Guilda.</span>
            </label>
          </div>
        )}

        <button
          type="button"
          className="button button-primary full-width-button"
          disabled={role === 'expert' && !accepted}
          onClick={() => setSubmitted(true)}
        >
          {role === 'client' ? 'Crear cuenta jugador' : 'Publicar perfil coach'}
        </button>

        {submitted && (
          <div className="success-banner">
            {role === 'client'
              ? 'Tu cuenta jugador ya quedaría lista para reservar coaches, pagar y seguir tus sesiones.'
              : 'Tu perfil coach ya quedaría publicado con precio, propuesta y regla obligatoria aceptada.'}
          </div>
        )}
      </div>

      <div className="stack-list-side">
        <div className="card side-card">
          <div className="table-title">Qué desbloquea cada rol</div>
          <div className="compare-grid">
            <div className="compare-col">
              <div className="compare-title">Jugador</div>
              <ul className="mini-list">
                <li>Comparar coaches por juego y estilo</li>
                <li>Reservar slots en segundos</li>
                <li>Pagar dentro de la plataforma</li>
                <li>Tener todo ordenado en una sola cuenta</li>
              </ul>
            </div>
            <div className="compare-col">
              <div className="compare-title">Coach</div>
              <ul className="mini-list">
                <li>Poner tu propio precio</li>
                <li>Activar disponibilidad</li>
                <li>Mostrar una propuesta premium</li>
                <li>Recibir reservas mejor filtradas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card side-card">
          <div className="table-title">Enfoque actual</div>
          <p>
            Guilda empieza solo con Fortnite, Valorant y League of Legends. Eso permite concentrar oferta, elevar la calidad del marketplace y construir una marca mucho más fuerte.
          </p>
        </div>
      </div>
    </div>
  );
}
