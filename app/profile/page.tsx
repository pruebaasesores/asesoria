import { CalendarRange, Clock3, Globe, MessageSquare, Star } from 'lucide-react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { experts } from '@/lib/mock-data';

const expert = experts[0];

export default function ProfilePage() {
  return (
    <main>
      <Navbar />
      <section className="section compact-top-section">
        <div className="container profile-layout">
          <div className="card profile-main-card">
            <div className="profile-header">
              <div>
                <div className="eyebrow pill">Perfil demo</div>
                <h1 className="page-title small-title">{expert.name}</h1>
                <p className="page-copy">{expert.headline}</p>
              </div>
              <div className="price-badge large-price">{expert.priceLabel}</div>
            </div>

            <div className="tag-list">
              {expert.tags.map((tag) => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>

            <div className="profile-copy-block">
              <p>{expert.description}</p>
            </div>

            <div className="detail-grid">
              <div className="detail-item"><Star size={16} /> {expert.rating} de valoración media</div>
              <div className="detail-item"><Clock3 size={16} /> Responde en menos de 1 hora</div>
              <div className="detail-item"><Globe size={16} /> Español e inglés</div>
              <div className="detail-item"><CalendarRange size={16} /> Slots abiertos esta semana</div>
            </div>
          </div>

          <div className="stack-list-side">
            <div className="card side-card">
              <div className="side-card-title"><MessageSquare size={18} /> Servicio incluido</div>
              <ul className="mini-list">
                <li>Sesión de 60 minutos</li>
                <li>Diagnóstico inicial</li>
                <li>Consejos accionables</li>
                <li>Resumen final con próximos pasos</li>
              </ul>
            </div>
            <div className="card side-card">
              <div className="side-card-title">Disponibilidad demo</div>
              <div className="slot-grid">
                {['Lun 18:00', 'Mar 20:00', 'Jue 19:00', 'Sáb 12:00'].map((slot) => (
                  <div key={slot} className="slot">{slot}</div>
                ))}
              </div>
            </div>
            <div className="card side-card">
              <button className="button button-primary full-width-button" type="button">Reservar sesión</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
