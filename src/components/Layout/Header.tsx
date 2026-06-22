import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../Logo';

const navLinks = [
  { path: '/', label: '首页' },
  { path: '/about', label: '关于轻锐洋' },
  { path: '/products', label: '产品中心' },
  { path: '/cases', label: '改造案例' },
  { path: '/contact', label: '联系我们' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsMobileMenuOpen(false); }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10">
              <Logo showText={false} variant={isScrolled ? 'dark' : 'light'} />
            </div>
            <div>
              <div className={`font-bold text-lg leading-none ${isScrolled ? 'text-ink-900' : 'text-white'}`} style={{ letterSpacing: '0.05em' }}>
                轻锐洋
              </div>
              <div className={`text-[10px] tracking-[0.3em] mt-1 ${isScrolled ? 'text-ink-400' : 'text-white/70'}`}>
                QING RUI YANG
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative py-2 ${
                    active
                      ? isScrolled ? 'text-brand-500' : 'text-white'
                      : isScrolled ? 'text-ink-700 hover:text-brand-500' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className={`absolute -bottom-0.5 left-0 right-0 h-0.5 ${isScrolled ? 'bg-brand-500' : 'bg-white'}`} />
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? 'text-ink-900' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="py-3 text-ink-700 border-b border-ink-100 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}