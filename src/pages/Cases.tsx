import { useState, useEffect } from 'react';
import PageHero from '../components/PageHero';
import { cases, type Case } from '../data/cases';

const categories: { id: 'all' | Case['category']; label: string }[] = [
  { id: 'all', label: '全部案例' },
  { id: 'automation', label: '电气自动化' },
  { id: 'robot', label: '机器人集成' },
  { id: 'hydraulic', label: '液压改造' },
];

export default function Cases() {
  const [activeCategory, setActiveCategory] = useState<'all' | Case['category']>('all');
  const filtered = activeCategory === 'all' ? cases : cases.filter(c => c.category === activeCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <PageHero
        title="改造案例"
        subtitle="500+ 真实交付 · 覆盖多个行业"
        desc="每一个项目都是方法论与工程力结合的产物 — 从设计到验收的完整记录。"
        breadcrumb={[{ label: '改造案例' }]}
      />

      <section className="bg-white border-b border-ink-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex overflow-x-auto py-4 gap-6">
            {categories.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`whitespace-nowrap text-sm font-medium transition-colors pb-1 border-b-2 ${
                    active ? 'text-brand-500 border-brand-500' : 'text-ink-600 border-transparent hover:text-brand-500'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((c) => (
              <article key={c.id} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-50 mb-5">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 shadow-md">
                    <div className="text-2xl font-bold text-brand-500 tabular">{c.metric}</div>
                    <div className="text-xs text-ink-500">{c.metricLabel}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-ink-400 mb-2">
                  <span>{c.industry}</span>
                  <span>·</span>
                  <span>{c.location}</span>
                  <span>·</span>
                  <span className="tabular">{c.year}</span>
                </div>
                <h3 className="text-lg font-bold text-ink-900 group-hover:text-brand-500 transition-colors mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed line-clamp-2">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}