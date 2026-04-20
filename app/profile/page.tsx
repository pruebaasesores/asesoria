import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ExpertProfileEditor } from '@/components/expert-profile-editor';

export default function ProfilePage() {
  return (
    <main>
      <Navbar />
      <section className="section compact-top-section">
        <div className="container">
          <ExpertProfileEditor />
        </div>
      </section>
      <Footer />
    </main>
  );
}
