import { useState, useEffect } from 'react';
import PageHero from '../components/PageHero';
import { IMAGES } from '../assets/images';
import { Award, Target, Lightbulb, Handshake, Shield } from 'lucide-react';

const timeline = [
  { year: '2018', title: '公司成立', desc: '由重庆两江新区引进的科技型技术企业' },
  { year: '2018', title: '汇川授权', desc: '成为汇川技术重庆区域授权经销商' },
  { year: '2020', title: '业务拓展', desc: '获得四川区域授权，业务版图扩大' },
  { year: '2022', title: '系统集成商', desc: '成为汇川技术液压行业授权系统集成商' },
  { year: '2024', title: '联保中心', desc: '获批汇川技术授权联保中心资质' },
];

const values = [
  { icon: Target, title: '精准服务', desc: '聚焦客户需求，提供针对性解决方案' },
  { icon: Lightbulb, title: '技术创新', desc: '持续投入研发，引领技术进步' },
  { icon: Handshake, title: '合作共赢', desc: '与客户、伙伴共同成长' },
  { icon: Shield, title: '品质保障', desc: '汇川授权体系，严格质量管控' },
];

const honors = [
  { title: '汇川技术官方授权经销商', year: '2018' },
  { title: '重庆/四川区域核心经销商', year: '2020' },
  { title: '液压行业授权系统集成商', year: '2022' },
  { title: '汇川技术授权联保中心', year: '2024' },
  { title: '汇川重庆重点合作渠道', year: '2024' },
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <PageHero
        title="关于轻锐洋"
        subtitle="以汇川为基 · 做透自动化"
        desc="重庆轻锐洋智能科技有限公司 — 汇川技术官方授权重庆 / 四川区域核心经销商。"
        breadcrumb={[{ label: '关于轻锐洋' }]}
      />

      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm text-brand-500 font-medium mb-4 tracking-wider">COMPANY</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-ink-900 leading-tight mb-8">
                致力于成为西南地区<br/>领先的智能制造解决方案提供商
              </h2>
              <p className="text-ink-500 leading-relaxed mb-6">
                重庆轻锐洋智能科技有限公司是2018年由重庆两江新区引进的一家科技型技术企业，
                是苏州汇川技术有限公司授权经销商、系统集成商、联保中心，汇川重庆重点合作渠道。
              </p>
              <p className="text-ink-500 leading-relaxed mb-6">
                公司主要从事：各类伺服液压站、机床液压站、压机液压站、重工液压站、工程液压站及各类非标定制液压站；
                各类油压机、注塑机、挤出机、压铸机、重工液压站电液伺服改造；液压设备行业专用物联网；
                工业机器人系统集成、电气自动化集成、产线自动化改造；非标控制柜、驱动柜研发设计及配套。
              </p>
              <p className="text-ink-500 leading-relaxed">
                公司自创立以来凭着先进的设计，过硬的品质、优质的服务、自主研发、服务于工业智能制造、节能提效。
                公司拥有一批高素质，高水平的技术人才，具有行业一流的技术研发和服务团队。
              </p>
            </div>
            <div>
              <img src={IMAGES.aboutHero} alt="智能制造" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-ink-200">
            {[
              { v: '10+', l: '年行业经验' },
              { v: '500+', l: '交付案例' },
              { v: '20+', l: '行业资质' },
            ].map((it) => (
              <div key={it.l} className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-brand-500 mb-2 tabular">{it.v}</div>
                <div className="text-ink-500">{it.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-ink-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="text-sm text-brand-500 font-medium mb-4 tracking-wider">TIMELINE</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-ink-900">发展历程</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {timeline.map((t, i) => (
              <div key={t.year} className="bg-white p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-brand-500 mb-2 tabular">{t.year}</div>
                <div className="text-lg font-bold text-ink-900 mb-2">{t.title}</div>
                <div className="text-sm text-ink-500 leading-relaxed">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-sm text-brand-500 font-medium mb-4 tracking-wider">VALUES</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-ink-900">我们的企业文化</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="w-16 h-16 mx-auto bg-brand-50 flex items-center justify-center mb-6">
                  <v.icon size={28} className="text-brand-500" />
                </div>
                <h4 className="text-xl font-bold text-ink-900 mb-3">{v.title}</h4>
                <p className="text-ink-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-ink-900 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-sm text-accent-400 font-medium mb-4 tracking-wider">HONORS</div>
            <h2 className="text-4xl lg:text-5xl font-bold">资质荣誉</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-700">
            {honors.map((h, i) => (
              <div key={i} className="bg-ink-900 p-8 hover:bg-ink-800 transition-colors">
                <Award size={28} className="text-accent-400 mb-4" />
                <div className="text-lg font-bold text-white mb-2">{h.title}</div>
                <div className="text-sm text-ink-400 tabular">{h.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}