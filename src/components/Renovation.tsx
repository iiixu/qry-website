import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Zap, Award } from 'lucide-react';
import { getFeaturedCases } from '../data/cases';

const cases = getFeaturedCases();

const advantages = [
  { icon: TrendingUp, title: '节电率 30%+', desc: '电液伺服系统替代传统液压' },
  { icon: Zap, title: '响应提速 50%', desc: '生产节拍显著优化' },
  { icon: Award, title: '汇川原厂', desc: '备件+技术+联保全保障' },
];

export default function Renovation() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-7">
            <div className="text-sm text-brand-500 font-medium mb-4 tracking-wider">CORE BUSINESS</div>
            <h2 className="text-4xl lg:text-6xl font-bold text-ink-900 leading-tight">
              液压设备<br/>
              <span className="font-light text-brand-500">节能改造</span>
              与提速升级
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink-500 text-lg leading-relaxed">
              以汇川电液伺服系统为核心，为注塑机、压铸机、机床、冶金设备等
              提供节能改造与提速升级方案，已为西南地区 200+ 客户实现
              <span className="text-ink-900 font-medium"> 平均 30%+ 节电率</span>。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 pb-20 border-b border-ink-100">
          {advantages.map((a) => (
            <div key={a.title} className="flex items-start gap-4">
              <div className="w-14 h-14 bg-brand-50 flex items-center justify-center flex-shrink-0">
                <a.icon size={24} className="text-brand-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-ink-900 mb-2">{a.title}</h3>
                <p className="text-ink-500">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-10">
          <h3 className="text-2xl lg:text-3xl font-bold text-ink-900">典型改造项目</h3>
          <Link to="/cases" className="group inline-flex items-center gap-2 text-brand-500 hover:text-brand-600">
            <span>查看全部</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden mb-5 bg-ink-100">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-2 shadow-md">
                  <div className="text-2xl font-bold text-brand-500 tabular">{c.metric}</div>
                  <div className="text-xs text-ink-500">{c.metricLabel}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-ink-400 mb-2">
                <span>{c.industry}</span>
                <span>·</span>
                <span>{c.location}</span>
              </div>
              <h4 className="text-lg font-bold text-ink-900 group-hover:text-brand-500 transition-colors">
                {c.title}
              </h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}