import Link from "next/link";
import {
  ArrowRight,
  CalendarRange,
  CreditCard,
  ShieldCheck,
  Sparkles,
  Star,
  Zap
} from "lucide-react";
//import { Navbar } from "@/components/navbar";
//import { Footer } from "@/components/footer";
//import { SectionTitle } from "@/components/section-title";
//import { featuredExperts, categories } from "@/lib/mock-data";

const steps = [
  {
    icon: Sparkles,
    title: "Registro automático",
    text: "El experto crea perfil, conecta pagos y publica sus servicios en minutos."
  },
  {
    icon: CalendarRange,
    title: "Reservas instantáneas",
    text: "El cliente elige servicio, horario y compra sin fricción."
  },
  {
    icon: CreditCard,
    title: "Comisiones automáticas",
    text: "Los cobros, splits y estados de pago se controlan desde la plataforma."
  }
];

const benefits = [
  "Diseñado para arrancar con gamers y escalar a cualquier vertical",
  "Arquitectura preparada para Stripe Connect, disponibilidad y reviews",
  "Supabase con RLS y panel administrativo listo para crecer",
  "Interfaz premium pensada para conversión y confianza"
];

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section className="overflow-hidden">
        <div className="container-shell relative py-24 md:py-32">
          <div className="hero-grid absolute inset-0 opacity-40" />
          <div className="absolute inset-x-0 top-10 mx-auto h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
          <div className="grid items-center gap-16 lg:grid-cols-[1.12fr_.88fr]">
            <div className="relative z-10">
              <div className="mb-6 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
                Marketplace premium para tiempo, skill y sesiones
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                Convierte talento en <span className="gradient-text">sesiones reservables</span>.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
                Guilda conecta expertos con clientes en una experiencia moderna: perfiles potentes,
                pagos automatizados, disponibilidad en tiempo real y comisiones transparentes.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/browse"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:translate-y-[-1px]"
                >
                  Ver marketplace
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/auth"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/5"
                >
                  Crear cuenta
                </Link>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {[
                  ["24h", "activación del MVP"],
                  ["12%", "comisión por reserva"],
                  ["∞", "verticales futuras"]
                ].map(([value, label]) => (
                  <div key={label} className="card-surface p-5">
                    <div className="text-3xl font-semibold">{value}</div>
                    <div className="mt-2 text-sm text-zinc-400">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="card-surface shadow-glow p-5 md:p-6">
                <div className="rounded-[28px] border border-white/10 bg-zinc-950/70 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-zinc-400">Hoy en Guilda</p>
                      <h3 className="mt-2 text-2xl font-semibold">Marketplace en directo</h3>
                    </div>
                    <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                      live
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4">
                    {featuredExperts.map((expert) => (
                      <div key={expert.name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">featured</p>
                            <h4 className="mt-2 text-lg font-semibold">{expert.name}</h4>
                            <p className="mt-1 text-sm text-zinc-400">{expert.title}</p>
                          </div>
                          <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-950">
                            {expert.price}
                          </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-sm text-zinc-300">
                          <Star className="h-4 w-4 fill-current text-yellow-400" />
                          {expert.rating}
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {expert.tags.map((tag) => (
                            <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-3xl border border-primary/20 bg-primary/10 p-4 text-sm text-zinc-100">
                    Flujo ideal: cliente reserva → pago retenido → sesión completada → split automático.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20">
        <div className="container-shell">
          <SectionTitle
            badge="Cómo funciona"
            title="Una operativa pensada para automatizar casi todo desde el principio."
            description="La plataforma está preparada para minimizar intervención manual tanto en onboarding como en pagos y reservas."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.title} className="card-surface p-8">
                <step.icon className="h-10 w-10 text-primary" />
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experts" className="py-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <SectionTitle
              badge="Posicionamiento"
              title="Empieza con gamers. Escala a cualquier experto."
              description="Guilda arranca donde hay más cultura de compra inmediata y puede evolucionar a coaching, idiomas, fitness, diseño o tecnología sin rehacer el core."
            />

            <div className="card-surface p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {categories.map((category) => (
                  <div key={category} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-sm uppercase tracking-[0.16em] text-zinc-500">vertical</div>
                    <div className="mt-2 text-2xl font-semibold">{category}</div>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      Misma infraestructura, distintos perfiles, servicios y reglas comerciales.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="py-20">
        <div className="container-shell">
          <div className="card-surface overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1fr_.9fr]">
              <div className="p-8 md:p-10">
                <SectionTitle
                  badge="Stack recomendado"
                  title="Next.js + Vercel + Supabase como base sólida para crecer."
                  description="Código limpio, deploy instantáneo, autenticación, Postgres, storage y seguridad por políticas desde el primer día."
                />

                <div className="mt-10 grid gap-4">
                  {benefits.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <ShieldCheck className="mt-0.5 h-5 w-5 text-secondary" />
                      <p className="text-zinc-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-l border-white/5 bg-white/[0.03] p-8 md:p-10">
                <div className="rounded-3xl border border-white/10 bg-zinc-950/60 p-6">
                  <div className="flex items-center gap-3 text-primary">
                    <Zap className="h-5 w-5" />
                    <span className="text-sm font-medium">Roadmap de producto</span>
                  </div>
                  <div className="mt-6 space-y-4">
                    {[
                      "Onboarding experto",
                      "Stripe Connect",
                      "Calendario y slots",
                      "Reservas con estado",
                      "Reviews y reputación",
                      "Panel de operaciones"
                    ].map((item, index) => (
                      <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 px-4 py-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-semibold text-zinc-950">
                          {index + 1}
                        </div>
                        <div className="text-zinc-300">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
