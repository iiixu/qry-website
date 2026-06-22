import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/30 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}