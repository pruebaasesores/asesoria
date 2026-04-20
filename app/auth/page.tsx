import { CheckCircle2, ChevronRight, Shield, Sparkles, Wallet } from 'lucide-react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

const checklist = [
  'Crear cuenta con email o Google',
  'Completar nombre, juegos e idiomas',
  'Conectar pagos con Stripe Connect',
  'Publicar servicios y disponibilidad',
];

export default function AuthPage() {
  return (
    <main>
      <Navbar />
      <section className="section compact-top-section">
        <div className="container auth-layout">
          <div className="card auth-card-main">
            <div className="eyebrow pill">Onboarding demo</div>
            <h1 className="page-title">Crea tu perfil de experto en menos de 5 minutos</h1>
            <p className="page-copy">
              Esta pantalla es ficticia, pero está pensada para representar el flujo real de alta: cuenta,
              perfil, pagos y publicación del servicio.
            </p>

            <div className="form-grid">
              <label>
                <span>Nombre visible</span>
                <input className="input" defaultValue="Nyx Coach" />
              </label>
              <label>
                <span>Email</span>
                <input className="input" defaultValue="nyx@guilda.demo" />
              </label>
              <label>
                <span>Especialidad</span>
                <input className="input" defaultValue="Valorant · coaching" />
              </label>
              <label>
                <span>Precio base</span>
                <input className="input" defaultValue="24 €/sesión" />
              </label>
              <label className="full-width">
                <span>Bio</span>
                <textarea className="input textarea" defaultValue="Ayudo a jugadores oro-diamante a mejorar aim, lectura de rondas y toma de decisiones con sesiones prácticas y review de VOD." />
              </label>
            </div>

            <div className="cta-actions left-actions">
              <button className="button button-primary" type="button">
                Guardar perfil demo
                <ChevronRight size={18} />
              </button>
              <button className="button button-secondary" type="button">Conectar pagos</button>
            </div>
          </div>

          <div className="stack-list-side">
            <div className="card side-card">
              <div className="side-card-title"><Sparkles size={18} /> Lo que consigue este flujo</div>
              <div className="check-list">
                {checklist.map((item) => (
                  <div className="check-item" key={item}>
                    <CheckCircle2 size={18} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="card side-card">
              <div className="side-card-title"><Wallet size={18} /> Pagos automatizados</div>
              <p>El experto conecta su cuenta, el cliente paga online y la plataforma retiene la comisión de forma automática.</p>
            </div>
            <div className="card side-card">
              <div className="side-card-title"><Shield size={18} /> Confianza y control</div>
              <p>Perfiles verificados, servicios bien definidos, horarios visibles y señales de calidad desde la primera visita.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
