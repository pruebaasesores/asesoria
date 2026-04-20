'use client';

import { useMemo, useState } from 'react';
import { platformRules } from '@/lib/mock-data';

type Role = 'client' | 'expert';

export function RoleAuth() {
  const [role, setRole] = useState<Role>('client');
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [expertPrice, setExpertPrice] = useState('25');

  const summary = useMemo(() => {
    if (role === 'client') {
      return 'Crear cuenta cliente para reservar, pagar y gestionar tus sesiones desde una sola cuenta.';
    }
    return `Alta de experto con precio editable. Demo actual: ${expertPrice || '0'} €/sesión.`;
  }, [role, expertPrice]);

  return (
    <div className="auth-shell two-column auth-grid">
      <div className="card auth-panel">
        <div className="auth-toggle">
          <button type="button" className={`toggle-pill ${role === 'client' ? 'toggle-pill-active' : ''}`} onClick={() => setRole('client')}>
            Registro cliente
          </button>
          <button type="button" className={`toggle-pill ${role === 'expert' ? 'toggle-pill-active' : ''}`} onClick={() => setRole('expert')}>
            Registro experto
          </button>
        </div>

        <div className="eyebrow pill">Alta diferenciada por rol</div>
        <h1 className="page-title small-title">{role === 'client' ? 'Entra para reservar expertos' : 'Crea tu perfil experto y monetiza tu tiempo'}</h1>
        <p className="page-copy">{summary}</p>

        <div className="form-grid form-grid-two">
          <div>
            <label className="field-label">Nombre</label>
            <input className="input" placeholder={role === 'client' ? 'Tu nombre' : 'Nombre profesional'} />
          </div>
          <div>
            <label className="field-label">Email</label>
            <input className="input" placeholder="tu@email.com" />
          </div>
          {role === 'expert' && (
            <>
              <div>
                <label className="field-label">Especialidad</label>
                <input className="input" placeholder="Valorant, LoL, Fortnite..." />
              </div>
              <div>
                <label className="field-label">Precio por sesión (€)</label>
                <input className="input" value={expertPrice} onChange={(event) => setExpertPrice(event.target.value)} />
              </div>
              <div className="full-span">
                <label className="field-label">Propuesta de valor</label>
                <textarea className="input textarea" placeholder="Qué ofreces, para quién es y qué mejora obtendrá el cliente" />
              </div>
            </>
          )}
          {role === 'client' && (
            <div className="full-span">
              <label className="field-label">Objetivo principal</label>
              <textarea className="input textarea" placeholder="Ejemplo: subir a diamante, mejorar builds, encontrar coach serio..." />
            </div>
          )}
        </div>

        {role === 'expert' && (
          <div className="terms-box">
            <div className="table-title">Condiciones para expertos</div>
            <ul className="mini-list">
              {platformRules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
            <label className="checkbox-row">
              <input type="checkbox" checked={accepted} onChange={() => setAccepted((value) => !value)} />
              <span>Acepto expresamente las condiciones del marketplace.</span>
            </label>
          </div>
        )}

        <button
          type="button"
          className="button button-primary full-width-button"
          disabled={role === 'expert' && !accepted}
          onClick={() => setSubmitted(true)}
        >
          {role === 'client' ? 'Crear cuenta cliente' : 'Crear cuenta experto'}
        </button>

        {submitted && (
          <div className="success-banner">
            {role === 'client'
              ? 'Cuenta cliente demo creada. Siguiente paso: reservar una sesión y pasar por checkout.'
              : 'Perfil experto demo creado. Tu precio y tus condiciones ya quedarían visibles para los clientes.'}
          </div>
        )}
      </div>

      <div className="stack-list-side">
        <div className="card side-card">
          <div className="table-title">Qué desbloquea cada rol</div>
          <div className="compare-grid">
            <div className="compare-col">
              <div className="compare-title">Cliente</div>
              <ul className="mini-list">
                <li>Reserva por calendario</li>
                <li>Pago centralizado</li>
                <li>Historial de sesiones</li>
                <li>Reprogramaciones dentro de la plataforma</li>
              </ul>
            </div>
            <div className="compare-col">
              <div className="compare-title">Experto</div>
              <ul className="mini-list">
                <li>Precio editable</li>
                <li>Bio, tags y disponibilidad</li>
                <li>Checkout preparado para comisión</li>
                <li>Condiciones legales integradas</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card side-card">
          <div className="table-title">Experiencia que transmite confianza</div>
          <p>Este onboarding ya separa muy bien oferta y demanda. Es justo lo que necesitas para escalar sin parecer una plataforma genérica.</p>
        </div>
      </div>
    </div>
  );
}
