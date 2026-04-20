import { Activity, CalendarClock, CreditCard, ShieldCheck, Wallet } from 'lucide-react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { SectionTitle } from '@/components/section-title';
import { bookings, dashboardMetrics, stripeSetupNotes } from '@/lib/mock-data';

export default function DashboardPage() {
  return (
    <main>
      <Navbar />
      <section className="section compact-top-section">
        <div className="container">
          <SectionTitle
            badge="Panel operativo"
            title="Una vista de negocio que ya enseña GMV, reservas y siguiente paso de pagos"
            description="Esta página aterriza la historia que necesitas contar: Guilda no es solo bonita; tiene lógica de negocio, control y monetización."
          />

          <div className="dashboard-stat-grid">
            {dashboardMetrics.map((metric, index) => (
              <div key={metric.label} className="card dashboard-stat-card">
                <div className="dashboard-icon">
                  {index === 0 && <Wallet size={20} />}
                  {index === 1 && <CreditCard size={20} />}
                  {index === 2 && <CalendarClock size={20} />}
                  {index === 3 && <Activity size={20} />}
                </div>
                <div className="stat-value">{metric.value}</div>
                <div className="stat-label">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="two-column dashboard-columns">
            <div className="card side-card">
              <div className="table-title">Últimas reservas demo</div>
              <div className="booking-list">
                {bookings.map((booking) => (
                  <div key={booking.id} className="booking-row">
                    <div>
                      <div className="booking-name">{booking.client} → {booking.expert}</div>
                      <div className="booking-meta">{booking.date}</div>
                    </div>
                    <div className="booking-end">
                      <div className="booking-status">{booking.status}</div>
                      <div className="booking-price">{booking.amount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="stack-list-side">
              <div className="card side-card">
                <div className="side-card-title"><ShieldCheck size={18} /> Stripe checklist</div>
                <ul className="mini-list">
                  {stripeSetupNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
              <div className="card side-card">
                <div className="table-title">Qué ya está resuelto</div>
                <ul className="mini-list">
                  <li>Registro separado para experto y cliente</li>
                  <li>Precio editable del experto</li>
                  <li>Calendario con reserva por slot</li>
                  <li>Ruta de checkout preparada para Stripe o demo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
