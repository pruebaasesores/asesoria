import Link from 'next/link';
import {
  ArrowRight,
  CalendarCheck2,
  CreditCard,
  Gamepad2,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
  Zap,
} from 'lucide-react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { SectionTitle } from '@/components/section-title';
import { ExpertCard } from '@/components/expert-card';
import { StatCard } from '@/components/stat-card';
import { experts, categories, howItWorks, metrics, testimonials } from '@/lib/mock-data';

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section className="hero-section">
        <div className="container two-column hero-grid-wrap">
          <div>
            <div className="eyebrow pill">
              <Sparkles size={14} />
              Marketplace premium para vender tiempo, skill y sesiones 1:1
            </div>
            <h1 className="hero-title">
              Convierte talento en <span className="gradient-text">reservas automatizadas</span>.
            </h1>
            <p className="hero-copy">
              Guilda empieza con gamers y coaches de gaming, pero está pensada para escalar a cualquier experto.
              Onboarding rápido, perfiles potentes, pagos claros, reservas simples y una experiencia que transmite confianza.
            </p>
            <div className="hero-actions">
              <Link href="/browse" className="button button-primary">
                Ver marketplace
                <ArrowRight size={18} />
              </Link>
              <Link href="/auth" className="button button-secondary">
                Probar onboarding
              </Link>
            </div>
            <div className="stat-grid">
              {metrics.map((metric) => (
                <StatCard key={metric.label} value={metric.value} label={metric.label} />
              ))}
            </div>
          </div>

          <div className="hero-panel card glass">
            <div className="panel-topline">
              <span className="live-dot" />
              Demo operativa del marketplace
            </div>
            <div className="stack-list">
              {experts.slice(0, 3).map((expert) => (
                <div key={expert.slug} className="mini-expert-card">
                  <div>
                    <div className="mini-expert-title">{expert.name}</div>
                    <div className="mini-expert-subtitle">{expert.headline}</div>
                  </div>
                  <div className="mini-price">{expert.priceLabel}</div>
                </div>
              ))}
            </div>
            <div className="feature-highlight">
              <div className="feature-highlight-head">
                <ShieldCheck size={18} />
                Flujo ideal
              </div>
              <p>Cliente reserva → pago retenido → sesión completada → comisión automática → payout al experto.</p>
            </div>
            <div className="chip-row">
              <span className="chip chip-active">Gaming</span>
              <span className="chip">Coaching</span>
              <span className="chip">Idiomas</span>
              <span className="chip">Fitness</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            badge="Por qué ahora"
            title="Empieza en un nicho que ya compra online y escala después."
            description="La mejor forma de lanzar un marketplace es empezar focalizado. Gaming te da oferta atractiva, tickets claros y una propuesta fácil de entender."
          />
          <div className="icon-grid">
            <div className="card feature-card">
              <Gamepad2 className="feature-icon" />
              <h3>Público acostumbrado a pagar</h3>
              <p>Coaching, dúos, carries, entrenamientos y acompañamiento ya tienen demanda real.</p>
            </div>
            <div className="card feature-card">
              <Users className="feature-icon" />
              <h3>Onboarding simple</h3>
              <p>Un gamer entiende su propuesta en minutos: juego, precio, horario, idioma y nivel.</p>
            </div>
            <div className="card feature-card">
              <Trophy className="feature-icon" />
              <h3>Fácil de enseñar</h3>
              <p>La home, el catálogo y los perfiles permiten explicar el producto de forma visual y comercial.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section muted-section">
        <div className="container">
          <SectionTitle
            badge="Cómo funciona"
            title="Una experiencia pensada para automatizar casi todo desde el principio."
            description="Este diseño te permite mostrar ya el recorrido completo de experto, cliente y operación interna."
          />
          <div className="steps-grid">
            {howItWorks.map((step) => {
              const Icon =
                step.icon === 'sparkles'
                  ? Sparkles
                  : step.icon === 'calendar'
                    ? CalendarCheck2
                    : step.icon === 'credit-card'
                      ? CreditCard
                      : Zap;

              return (
                <div key={step.title} className="card step-card">
                  <div className="step-icon-wrap">
                    <Icon className="step-icon" />
                  </div>
                  <div className="step-number">0{step.order}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experts" className="section">
        <div className="container">
          <div className="section-head-row">
            <SectionTitle
              badge="Marketplace"
              title="Ejemplos ficticios para visualizar cómo se verá tu oferta inicial."
              description="Estos perfiles son de demo, pero ya están planteados con formato comercial real para que puedas enseñar el producto a socios, expertos o primeros clientes."
            />
            <Link href="/browse" className="button button-secondary compact-button">
              Explorar catálogo completo
            </Link>
          </div>
          <div className="expert-grid">
            {experts.slice(0, 4).map((expert) => (
              <ExpertCard key={expert.slug} expert={expert} />
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="section muted-section">
        <div className="container two-column stack-layout">
          <div>
            <SectionTitle
              badge="Stack recomendado"
              title="Pensado para GitHub + Vercel + Supabase + Stripe Connect."
              description="Este proyecto va con datos ficticios para demo, pero la arquitectura visual ya está preparada para llevarla a producción con autenticación, perfiles, reservas y pagos."
            />
            <div className="bullet-list">
              <div className="bullet-item"><ShieldCheck size={18} /> Rutas claras: home, catálogo, perfil, onboarding y dashboard.</div>
              <div className="bullet-item"><ShieldCheck size={18} /> Estructura lista para conectar Supabase sin rehacer el frontend.</div>
              <div className="bullet-item"><ShieldCheck size={18} /> Diseño serio para enseñar el MVP a inversores, expertos o clientes beta.</div>
              <div className="bullet-item"><ShieldCheck size={18} /> Base escalable para gaming hoy y otros verticales mañana.</div>
            </div>
          </div>

          <div className="card roadmap-card">
            <div className="roadmap-title">Roadmap visual del producto</div>
            <div className="roadmap-list">
              <div className="roadmap-item"><span>1</span> Onboarding del experto</div>
              <div className="roadmap-item"><span>2</span> Perfil con juegos, precios y disponibilidad</div>
              <div className="roadmap-item"><span>3</span> Checkout y comisión automática</div>
              <div className="roadmap-item"><span>4</span> Dashboard con reservas y payouts</div>
              <div className="roadmap-item"><span>5</span> Reviews, reputación y crecimiento por verticales</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            badge="Verticales futuras"
            title="Empieza por gamers, pero con una marca capaz de crecer."
            description="No te cierres desde el naming ni desde la interfaz. Guilda suena flexible, premium y te permite pasar de gaming a coaches, creadores, formación o expertos técnicos."
          />
          <div className="chip-row spacious-row">
            {categories.map((category) => (
              <span key={category} className="chip chip-large">{category}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <SectionTitle
            badge="Prueba social"
            title="Cómo se vería la confianza en una versión ya activa."
            description="Las reviews ficticias ayudan a visualizar reputación, calidad percibida y señales de conversión."
          />
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <div className="card testimonial-card" key={item.name}>
                <div className="testimonial-stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
                <p>“{item.quote}”</p>
                <div className="testimonial-author">{item.name} · {item.context}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="card cta-card">
            <div>
              <div className="cta-title">Ya tienes una base convincente para enseñar el producto.</div>
              <p>Usa esta demo para validar el concepto, enseñar la experiencia y decidir el siguiente sprint: auth real, perfiles persistentes y reservas.</p>
            </div>
            <div className="cta-actions">
              <Link href="/dashboard" className="button button-primary">Ver dashboard demo</Link>
              <Link href="/profile" className="button button-secondary">Ver perfil experto</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
