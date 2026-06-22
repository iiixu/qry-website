import Hero from '@/components/Hero';
import Renovation from '@/components/Renovation';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <Renovation />
      <Services />
      <About />
      <Contact />
    </div>
  );
}