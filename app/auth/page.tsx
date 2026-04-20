import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { RoleAuth } from '@/components/role-auth';

export default function AuthPage() {
  return (
    <main>
      <Navbar />
      <section className="section compact-top-section">
        <div className="container">
          <RoleAuth />
        </div>
      </section>
      <Footer />
    </main>
  );
}
