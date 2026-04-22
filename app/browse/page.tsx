import { Search, SlidersHorizontal } from 'lucide-react';
import { ExpertCard } from '@/components/expert-card';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { SectionTitle } from '@/components/section-title';
import { categories, experts } from '@/lib/mock-data';

export default function BrowsePage() {
  return (
    <main>
      <Navbar />
      <section className="section compact-top-section">
        <div className="container">
          <SectionTitle
            badge="Marketplace gamer"
            title="Encuentra tu coach ideal en Fortnite, Valorant o League of Legends"
            description="Filtra por juego, compara estilo y precio, y entra directamente a la ficha para reservar tu sesión."
          />

          <div className="browse-toolbar card">
            <div className="toolbar-input">
              <Search size={18} />
              <span>Busca por juego, rank, rol, tipo de coaching o mejora que buscas…</span>
            </div>
            <div className="toolbar-filter">
              <SlidersHorizontal size={18} />
              <span>Filtros gamer</span>
            </div>
          </div>

          <div className="chip-row spacious-row">
            {categories.map((category, index) => (
              <span key={category} className={`chip chip-large ${index === 0 ? 'chip-active' : ''}`}>
                {category}
              </span>
            ))}
          </div>

          <div className="browse-grid">
            {experts.map((expert) => (
              <ExpertCard key={expert.slug} expert={expert} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
