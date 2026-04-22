import Link from 'next/link';
import {
  ArrowRight,
  CalendarCheck2,
  Crown,
  Flame,
  Gamepad2,
  ShieldCheck,
  Sparkles,
  Star,
  Sword,
  Trophy,
  Zap,
} from 'lucide-react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { SectionTitle } from '@/components/section-title';
import { ExpertCard } from '@/components/expert-card';
import { StatCard } from '@/components/stat-card';
import {
  dashboardMetrics,
  expertPerks,
  experts,
  howItWorks,
  metrics,
  testimonials,
} from '@/lib/mock-data';

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section className="hero-section">
        <div className="container two-column hero-grid-wrap">
          <div>
            <div className="eyebrow pill">
              <Sparkles size={14} />
              gaming only · fortnite · valorant · league of legends
            </div>
            <h1 className="hero-title">
              Reserva <span className="gradient-text">coaches top</span> y sube de nivel sin perder tiempo.
            </h1>
            <p className="hero-copy">
              Guilda empieza donde mejor encaja el modelo: coaching gamer premium. Eliges juego, comparas perfiles, revisas precio y reservas tu sesión dentro de la plataforma.
            </p>
            <div className="hero-actions">
              <Link href="/browse" className="button button-primary">
                Encontrar coach
                <ArrowRight size={18} />
              </Link>
              <Link href="/auth" className="button button-secondary">
                Quiero ser coach
              </Link>
            </div>

            <div className="stat-grid">
              {metrics.map((metric) => (
                <StatCard key={metric.label} value={metric.value} label={metric.label} />
              ))}
            </div>
          </div>

          <div className="hero-panel card glass gamer-panel">
            <div className="panel-topline">
              <span className="live-dot" />
              marketplace listo para reservar
            </div>

            <div className="stack-list">
              <div className="mini-expert-card">
                <div>
                  <div className="mini-expert-title">Fortnite coaching</div>
                  <div className="mini-expert-subtitle">Builds, peeks, control de altura y calma en fights</div>
                </div>
                <div className="mini-price">FN</div>
              </div>
              <div className="mini-expert-card">
                <div>
                  <div className="mini-expert-title">Valorant ranked climb</div>
                  <div className="mini-expert-subtitle">Aim, macro, VOD review y disciplina en rounds</div>
                </div>
                <div className="mini-price">VLR</div>
              </div>
              <div className="mini-expert-card">
                <div>
                  <div className="mini-expert-title">LoL duo & macro</div>
                  <div className="mini-expert-subtitle">Laning, wave control, visión y tempo</div>
                </div>
                <div className="mini-price">LoL</div>
              </div>
            </div>

            <div className="feature-highlight">
              <div className="feature-highlight-head">
                <ShieldCheck size={18} />
                experiencia más segura y más premium
              </div>
              <p>
                El jugador no tiene que perseguir coaches por Discord. En Guilda compara, reserva y paga dentro del producto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            badge="Por qué esta idea sí puede funcionar"
            title="No intentamos abarcar todo: empezamos donde la compra es más rápida y la propuesta más clara"
            description="Tres juegos, perfiles premium, precio visible y reserva directa. Menos ruido y más posibilidad de validar de verdad."
          />

          <div className="icon-grid">
            <div className="card feature-card">
              <Gamepad2 className="feature-icon" />
              <h3>Solo gaming, sin mezcla rara</h3>
              <p>Fortnite, Valorant y League of Legends. El marketplace se siente cohesivo y la oferta se entiende al instante.</p>
            </div>
            <div className="card feature-card">
              <CalendarCheck2 className="feature-icon" />
              <h3>Calendario y reserva claros</h3>
              <p>El jugador ve slots listos para reservar. Menos mensajes, menos fricción y más intención de compra.</p>
            </div>
            <div className="card feature-card">
              <Crown className="feature-icon" />
              <h3>Perfiles diseñados para convertir</h3>
              <p>Promesa clara, reviews, precio y pruebas de calidad. Todo apunta a una sensación más seria y premium.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <div className="section-head-row">
            <SectionTitle
              badge="Top coaches"
              title="Perfiles listos para reservar hoy"
              description="Cada ficha está construida para vender mejor: enfoque, transformación, precio, reviews y slots."
            />
            <Link href="/browse" className="button button-secondary">
              Ver marketplace
            </Link>
          </div>

          <div className="expert-grid">
            {experts.slice(0, 4).map((expert) => (
              <ExpertCard key={expert.slug} expert={expert} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            badge="Cómo funciona"
            title="Una secuencia corta y muy fácil de entender para jugador y coach"
            description="La idea no es meter pasos, sino llevar al usuario hasta la reserva con el menor ruido posible."
          />

          <div className="steps-grid">
            {howItWorks.map((step, index) => (
              <div key={step.order} className="card step-card">
                <div className="step-icon-wrap">
                  {index === 0 && <Sword className="step-icon" />}
                  {index === 1 && <Zap className="step-icon" />}
                  {index === 2 && <Trophy className="step-icon" />}
                </div>
                <div className="step-number">Paso {step.order}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container two-column">
          <div>
            <SectionTitle
              badge="Para coaches"
              title="Monetiza tu nivel con una experiencia que parece un producto serio"
              description="No se trata solo de publicar un perfil. Se trata de mostrar valor, justificar el precio y recibir reservas mucho mejor filtradas."
            />
            <div className="check-list spacious-row">
              {expertPerks.map((item) => (
                <div key={item} className="check-item">
                  <ShieldCheck size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle
              badge="Prueba social"
              title="La marca se siente gamer, la compra se siente segura"
              description="Aunque ahora trabajes con ejemplos ficticios, la interfaz ya enseña cómo debería sentirse el producto final."
            />
            <div className="testimonial-grid compact-testimonials">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="card testimonial-card">
                  <div className="rating-line">
                    <Star size={16} fill="currentColor" /> 5.0
                  </div>
                  <p>“{testimonial.quote}”</p>
                  <div className="testimonial-meta">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.context}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            badge="Señales de negocio"
            title="El producto ya cuenta una historia clara de conversión y margen"
            description="Demanda, reservas, ocupación y comisión. Lo suficiente para visualizar un marketplace gamer rentable."
          />
          <div className="dashboard-stat-grid">
            {dashboardMetrics.map((item) => (
              <div key={item.label} className="card dashboard-stat-card">
                <div className="stat-value">{item.value}</div>
                <div className="stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card cta-card">
            <div className="eyebrow pill">
              <Flame size={14} />
              momento de activar demanda y oferta
            </div>
            <h2 className="page-title small-title">Explora coaches o publica tu perfil y empieza a jugar en serio</h2>
            <p className="page-copy">
              Guilda empieza con tres juegos y una promesa muy simple: ayudar a jugadores a mejorar rápido y permitir que los mejores coaches cobren por ello de forma profesional.
            </p>
            <div className="cta-actions">
              <Link href="/browse" className="button button-primary">
                Ver coaches
              </Link>
              <Link href="/profile" className="button button-secondary">
                Crear perfil coach
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
