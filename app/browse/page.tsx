import Link from "next/link";
import { Search, SlidersHorizontal, Star } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { featuredExperts } from "@/lib/mock-data";

export const dynamic = 'force-dynamic';

export default function BrowsePage() {
  const cards = [...featuredExperts, ...featuredExperts].slice(0, 6);

  return (
    <main>
      <Navbar />
      <section className="container-shell py-16">
        <div className="max-w-2xl">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.22em] text-zinc-300">
            Explorar perfiles
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
            Descubre expertos listos para reservar.
          </h1>
          <p className="mt-4 text-lg leading-8 text-zinc-400">
            Una vista de marketplace preparada para filtrar, comparar y reservar sesiones.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 md:flex-row">
          <div className="flex flex-1 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-4">
            <Search className="h-5 w-5 text-zinc-500" />
            <span className="text-sm text-zinc-500">Busca por juego, skill o categoría…</span>
          </div>
          <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-4 text-sm font-medium text-white hover:bg-white/5">
            <SlidersHorizontal className="h-4 w-4" />
            Filtros
          </button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((expert, index) => (
            <div key={`${expert.name}-${index}`} className="card-surface p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-[0.16em] text-zinc-500">top seller</div>
                  <h3 className="mt-2 text-2xl font-semibold">{expert.name}</h3>
                  <p className="mt-2 text-zinc-400">{expert.title}</p>
                </div>
                <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-950">
                  {expert.price}
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm text-zinc-300">
                <Star className="h-4 w-4 fill-current text-yellow-400" />
                {expert.rating} · 120+ sesiones
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {expert.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="rounded-full border border-white/10 px-4 py-3 text-sm font-medium hover:bg-white/5">
                  Ver perfil
                </button>
                <Link
                  href="/auth"
                  className="rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:translate-y-[-1px]"
                >
                  Reservar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
