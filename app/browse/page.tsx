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
            badge="Marketplace activo"
            title="Compara expertos, precios y slots sin salir de la plataforma"
            description="Aquí ya se ve el comportamiento del negocio: perfiles premium, precio visible y llamada a reservar."
          />

          <div className="browse-toolbar card">
            <div className="toolbar-input">
              <Search size={18} />
              <span>Buscar por juego, estilo o nivel…</span>
            </div>
            <div className="toolbar-filter">
              <SlidersHorizontal size={18} />
              <span>Filtros premium</span>
            </div>
          </div>

          <div className="chip-row spacious-row">
            {categories.map((category, index) => (
              <span key={category} className={`chip chip-large ${index === 0 ? 'chip-active' : ''}`}>{category}</span>
            ))}
          </div>

          <div className="browse-grid expert-grid">
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
