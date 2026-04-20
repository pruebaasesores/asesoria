import { CreditCard, DollarSign, Layers3, Users } from 'lucide-react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { bookings, experts } from '@/lib/mock-data';

const dashboardStats = [
  { icon: Users, label: 'Expertos activos', value: '18' },
  { icon: CreditCard, label: 'Reservas esta semana', value: '42' },
  { icon: DollarSign, label: 'GMV demo mensual', value: '4.860 €' },
  { icon: Layers3, label: 'Take rate medio', value: '12%' },
];

export default function DashboardPage() {
  return (
    <main>
      <Navbar />
      <section className="section compact-top-section">
        <div className="container">
          <div className="eyebrow pill">Dashboard demo</div>
          <h1 className="page-title">Vista de operaciones del marketplace</h1>
          <p className="page-copy">Una pantalla ficticia para enseñar cómo podría verse el panel interno con métricas, reservas y expertos destacados.</p>

          <div className="dashboard-stat-grid">
            {dashboardStats.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="card dashboard-stat-card">
                  <div className="dashboard-icon"><Icon size={18} /></div>
                  <div className="dashboard-value">{item.value}</div>
                  <div className="dashboard-label">{item.label}</div>
                </div>
              );
            })}
          </div>

          <div className="dashboard-layout">
            <div className="card table-card">
              <div className="table-title">Próximas reservas</div>
              <div className="booking-list">
                {bookings.map((booking) => (
                  <div key={booking.id} className="booking-row">
                    <div>
                      <div className="booking-name">{booking.client}</div>
                      <div className="booking-meta">con {booking.expert}</div>
                    </div>
                    <div className="booking-status">{booking.status}</div>
                    <div className="booking-meta">{booking.date}</div>
                    <div className="booking-price">{booking.amount}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card side-card">
              <div className="table-title">Top expertos</div>
              <div className="top-expert-list">
                {experts.slice(0, 4).map((expert) => (
                  <div key={expert.slug} className="top-expert-row">
                    <div>
                      <div className="mini-expert-title">{expert.name}</div>
                      <div className="mini-expert-subtitle">{expert.headline}</div>
                    </div>
                    <div className="mini-price">{expert.rating}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
