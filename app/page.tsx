import Link from 'next/link';
import {
  ArrowRight,
  CalendarCheck2,
  CreditCard,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Users,
  Wallet,
} from 'lucide-react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { SectionTitle } from '@/components/section-title';
import { ExpertCard } from '@/components/expert-card';
import { StatCard } from '@/components/stat-card';
import {
  clientBenefits,
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
              Marketplace real para expertos y clientes · listo para reservas y Stripe
            </div>
            <h1 className="hero-title">
              Reserva talento en minutos y convierte a los expertos en <span className="gradient-text">negocio repetible</span>.
            </h1>
            <p className="hero-copy">
              Guilda nace para gaming, pero ya está planteada como un marketplace serio: registro separado por rol,
              precio editable por experto, calendario de slots, checkout preparado para Stripe y reglas operativas que protegen la comisión.
            </p>
            <div className="hero-actions">
              <Link href="/browse" className="button button-primary">
                Encontrar experto
                <ArrowRight size={18} />
              </Link>
              <Link href="/auth" className="button button-secondary">
                Crear cuenta
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
              Vista ejecutiva del producto
            </div>
            <div className="stack-list">
              <div className="mini-expert-card">
                <div>
                  <div className="mini-expert-title">Registro cliente y experto</div>
                  <div className="mini-expert-subtitle">Dos journeys distintos para oferta y demanda</div>
                </div>
                <div className="mini-price">2 roles</div>
              </div>
              <div className="mini-expert-card">
                <div>
                  <div className="mini-expert-title">Reservas por calendario</div>
                  <div className="mini-expert-subtitle">Slots visibles y checkout sin fricción</div>
                </div>
                <div className="mini-price">Live</div>
              </div>
              <div className="mini-expert-card">
                <div>
                  <div className="mini-expert-title">Stripe ready</div>
                  <div className="mini-expert-subtitle">Ruta preparada para activar pagos reales</div>
                </div>
                <div className="mini-price">API</div>
              </div>
            </div>
            <div className="feature-highlight">
              <div className="feature-highlight-head">
                <ShieldCheck size={18} />
                Operativa ganadora
              </div>
              <p>
                Cliente descubre → compara → reserva → paga dentro de Guilda. El experto fija precio, condiciones y disponibilidad sin sacar la relación fuera.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            badge="Lo que te hacía falta"
            title="Ya no es solo una landing: ya parece un producto por el que alguien pagaría." 
            description="La clave de Guilda está en combinar confianza, operación y monetización. Eso es lo que hace que un marketplace deje de ser una idea bonita y empiece a parecer negocio real."
          />
          <div className="icon-grid">
            <div className="card feature-card">
              <Users className="feature-icon" />
              <h3>Onboarding separado por rol</h3>
              <p>Cliente y experto no deberían vivir el mismo alta. Ahora cada uno entra con contexto, expectativas y pasos distintos.</p>
            </div>
            <div className="card feature-card">
              <CalendarCheck2 className="feature-icon" />
              <h3>Calendario con intención de compra</h3>
              <p>La reserva deja de ser una promesa. El usuario ve disponibilidad, elige slot y está a un clic del checkout.</p>
            </div>
            <div className="card feature-card">
              <Wallet className="feature-icon" />
              <h3>Comisión incorporada</h3>
              <p>El precio del experto convive con la comisión. Desde diseño ya se entiende el modelo económico del producto.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <div className="section-head-row">
            <SectionTitle
              badge="Marketplace"
              title="Expertos listos para reservar desde una ficha que transmite confianza"
              description="Hemos dejado el producto empezando por gaming porque ahí es donde la compra es más intuitiva y más rápida de validar."
            />
            <Link href="/browse" className="button button-secondary">Ver todos</Link>
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
            title="Una secuencia de producto que ya enseña cómo escalar la operación"
            description="Esto no es un mock sin alma. Cada bloque prepara el siguiente: alta, reserva, checkout y control operativo."
          />
          <div className="steps-grid">
            {howItWorks.map((step) => (
              <div key={step.order} className="card step-card">
                <div className="step-icon-wrap"><Store className="step-icon" /></div>
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
              badge="Valor para expertos"
              title="El experto siente que está entrando en una plataforma premium, no en un tablón de anuncios."
              description="Eso sube el perceived value y hace mucho más fácil cobrar comisión sin fricción."
            />
            <div className="check-list spacious-row">
              {expertPerks.map((item) => (
                <div key={item} className="check-item"><ShieldCheck size={18} /> {item}</div>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle
              badge="Valor para clientes"
              title="El cliente entiende en segundos qué compra, cuánto cuesta y cuándo puede reservar."
              description="Ese nivel de claridad es lo que reduce miedo al pago en un marketplace nuevo."
            />
            <div className="check-list spacious-row">
              {clientBenefits.map((item) => (
                <div key={item} className="check-item"><CreditCard size={18} /> {item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            badge="Prueba social"
            title="Incluso en demo ya se ve una plataforma que inspira seriedad"
            description="La confianza no sale de decir que eres premium. Sale de que el producto parezca listo para operar."
          />
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="card testimonial-card">
                <div className="rating-line"><Star size={16} fill="currentColor" /> 5.0</div>
                <p>“{testimonial.quote}”</p>
                <div className="testimonial-meta">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.context}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <SectionTitle
            badge="Operaciones"
            title="Vista ejecutiva para entender por qué esto puede convertirse en negocio"
            description="No solo hemos pensado la cara visible. También hay narrativa clara de GMV, reservas y margen."
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
          <div className="card cta-card cta-centered">
            <div className="eyebrow pill">Siguiente paso natural</div>
            <h2 className="page-title small-title">Activa Stripe real y empieza a validar reservas de verdad.</h2>
            <p className="page-copy">
              La experiencia ya está montada. Lo siguiente es enchufar claves reales, Stripe Connect para expertos y persistencia en base de datos.
            </p>
            <div className="cta-actions">
              <Link href="/auth" className="button button-primary">Registrar experto o cliente</Link>
              <Link href="/browse" className="button button-secondary">Probar reserva</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
