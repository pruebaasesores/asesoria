import { Search, SlidersHorizontal } from 'lucide-react';
import { ExpertCard } from '@/components/expert-card';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { experts } from '@/lib/mock-data';

const featuredFilters = ['Todos', 'Valorant', 'League of Legends', 'Fortnite', 'Dúos', 'Coaching'];

export default function BrowsePage() {
  return (
    <main>
      <Navbar />
      <section className="section compact-top-section">
        <div className="container">
          <div className="browse-hero">
            <div>
              <div className="eyebrow pill">Marketplace demo</div>
              <h1 className="page-title">Explora expertos disponibles</h1>
              <p className="page-copy">Perfiles ficticios para visualizar cómo se verá tu catálogo inicial con gamers, coaches y sesiones reservables.</p>
            </div>
            <div className="browse-actions">
              <div className="search-box">
                <Search size={18} />
                <span>Buscar juego, experto o servicio</span>
              </div>
              <button className="button button-secondary compact-button" type="button">
                <SlidersHorizontal size={16} />
                Filtros
              </button>
            </div>
          </div>

          <div className="chip-row spacious-row">
            {featuredFilters.map((filter, index) => (
              <span key={filter} className={`chip ${index === 0 ? 'chip-active' : ''}`}>
                {filter}
              </span>
            ))}
          </div>

          <div className="expert-grid browse-grid">
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
