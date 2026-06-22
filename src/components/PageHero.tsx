import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface PageHeroProps {
  title: string;
  subtitle: string;
  desc?: string;
  bg?: string;
  breadcrumb?: { label: string; to?: string }[];
}

export default function PageHero({ title, subtitle, desc, bg, breadcrumb = [] }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 bg-ink-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src={bg || IMAGES.hero} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ink-900/75" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-4">
          {title}
        </h1>
        <p className="text-2xl lg:text-3xl text-brand-200 font-light mb-4">
          {subtitle}
        </p>
        {desc && (
          <p className="text-white/70 text-base lg:text-lg max-w-2xl leading-relaxed">
            {desc}
          </p>
        )}

        {breadcrumb.length > 0 && (
          <div className="mt-12 pt-6 border-t border-white/10 flex items-center gap-2 text-sm">
            <Link to="/" className="text-white/60 hover:text-white transition-colors">首页</Link>
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight size={14} className="text-white/40" />
                {b.to ? (
                  <Link to={b.to} className="text-white/60 hover:text-white transition-colors">{b.label}</Link>
                ) : (
                  <span className="text-white">{b.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}