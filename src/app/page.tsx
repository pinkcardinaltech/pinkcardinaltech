import { Hero } from '@/components/sections/Hero';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <main className="relative bg-white text-slate-900 overflow-x-hidden">
      <Hero />
      <Contact />
      <Footer />
    </main>
  );
}
