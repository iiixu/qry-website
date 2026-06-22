import { useState, useEffect } from 'react';
import PageHero from '../components/PageHero';
import { products, type Product, type ProductCategory } from '../data/products';

const categories: { id: 'all' | ProductCategory; label: string }[] = [
  { id: 'all', label: '全部产品' },
  { id: 'vfd', label: '变频器' },
  { id: 'servo', label: '伺服驱动器' },
  { id: 'motor', label: '伺服电机' },
  { id: 'plc', label: 'PLC' },
  { id: 'hmi', label: 'HMI' },
  { id: 'pneumatic', label: '气动元件' },
  { id: 'robot', label: '机器人' },
  { id: 'iot', label: '液压物联网' },
  { id: 'vision', label: '视觉系统' },
  { id: 'hydraulic', label: '液压元件' },
  { id: 'transmission', label: '传动部件' },
  { id: 'sensor', label: '传感器' },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<'all' | ProductCategory>('all');
  const filtered = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <PageHero
        title="产品中心"
        subtitle="汇川技术全系列 · 原厂体系保障"
        desc="PLC · HMI · 变频器 · 伺服 · 电机 · 气动 · 传感器 · 工业机器人 — 覆盖自动化全栈硬件选型。"
        breadcrumb={[{ label: '产品中心' }]}
      />

      <section className="bg-white border-b border-ink-200 sticky top-20 z-30">
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
            {filtered.map((p) => (
              <article key={p.id} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden bg-ink-50 mb-4">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-xs text-ink-400 mb-2 tabular">{p.spec}</div>
                <h3 className="text-lg font-bold text-ink-900 mb-2 group-hover:text-brand-500 transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-ink-500">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}