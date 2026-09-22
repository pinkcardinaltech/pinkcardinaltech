import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { VentureStudio } from '@/components/sections/VentureStudio';
import { AdvisoryServices } from '@/components/sections/AdvisoryServices';
import { Philosophy } from '@/components/sections/Philosophy';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <main className="relative bg-slate-950 text-slate-50 overflow-x-hidden">
      <Header />
      <Hero />
      <VentureStudio />
      <AdvisoryServices />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  );
}
