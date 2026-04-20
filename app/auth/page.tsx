"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const dynamic = 'force-dynamic';

export default function AuthPage() {
  const [mode, setMode] = useState<"client" | "expert">("expert");

  return (
    <main>
      <Navbar />
      <section className="container-shell py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.22em] text-zinc-300">
              Onboarding
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Registro preparado para expertos y clientes.
            </h1>
            <p className="mt-4 text-lg leading-8 text-zinc-400">
              Esta pantalla deja lista la base para autenticación con Supabase y un onboarding claro
              hacia reserva o publicación de servicios.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Login con email magic link u OAuth",
                "Selección automática de tipo de usuario",
                "Perfil inicial, pricing y categorías",
                "Conexión posterior con Stripe Connect"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-secondary" />
                  <p className="text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface p-6 md:p-8">
            <div className="grid grid-cols-2 gap-3 rounded-full border border-white/10 bg-black/30 p-2">
              <button
                onClick={() => setMode("expert")}
                className={`rounded-full px-4 py-3 text-sm font-medium transition ${mode === "expert" ? "bg-white text-zinc-950" : "text-zinc-300"}`}
              >
                Soy experto
              </button>
              <button
                onClick={() => setMode("client")}
                className={`rounded-full px-4 py-3 text-sm font-medium transition ${mode === "client" ? "bg-white text-zinc-950" : "text-zinc-300"}`}
              >
                Soy cliente
              </button>
            </div>

            <div className="mt-8 grid gap-4">
              <label className="grid gap-2">
                <span className="text-sm text-zinc-300">Nombre</span>
                <input className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 outline-none ring-0 placeholder:text-zinc-500" placeholder="Tu nombre" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm text-zinc-300">Email</span>
                <input className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 outline-none ring-0 placeholder:text-zinc-500" placeholder="tu@email.com" />
              </label>
              {mode === "expert" && (
                <label className="grid gap-2">
                  <span className="text-sm text-zinc-300">Especialidad inicial</span>
                  <input className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 outline-none ring-0 placeholder:text-zinc-500" placeholder="Valorant, Fortnite, Coaching..." />
                </label>
              )}
              <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-zinc-950 transition hover:translate-y-[-1px]">
                Continuar
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-4 text-sm leading-6 text-zinc-500">
              Demo visual. Para activarlo solo hay que conectar los métodos de Supabase Auth.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
