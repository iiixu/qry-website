import { Link } from 'react-router-dom';
import { IMAGES } from '../assets/images';
import { ArrowRight, Award, Shield } from 'lucide-react';

const credentials = [
  { icon: Award, label: '汇川技术官方授权经销商' },
  { icon: Shield, label: '汇川技术授权系统集成商' },
  { icon: Award, label: '汇川技术授权联保中心' },
  { icon: Shield, label: '汇川重庆重点合作渠道' },
];

export default function About() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={IMAGES.aboutHero} alt="智能制造" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-500 text-white p-8 shadow-2xl">
              <div className="text-5xl font-bold tabular">2018</div>
              <div className="text-sm mt-1 tracking-wider">SINCE</div>
            </div>
          </div>

          <div>
            <div className="text-sm text-brand-500 font-medium mb-4 tracking-wider">ABOUT</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-ink-900 leading-tight mb-6">
              关于轻锐洋
            </h2>
            <p className="text-ink-500 text-lg leading-relaxed mb-6">
              重庆轻锐洋智能科技有限公司，成立于 2018 年，是重庆两江新区引进的科技型技术企业。
            </p>
            <p className="text-ink-500 leading-relaxed mb-8">
              公司主要从事：各类伺服液压站、非标定制液压站；油压机、注塑机等电液伺服改造；液压设备行业专用物联网；工业机器人系统集成、电气自动化集成；非标控制柜研发设计；以及汇川技术授权经销、系统集成、联保服务。凭着先进的设计、过硬的品质、优质的服务，服务于工业智能制造、节能提效。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {credentials.map((c) => (
                <div key={c.label} className="flex items-center gap-3 py-2">
                  <c.icon size={18} className="text-brand-500 flex-shrink-0" />
                  <span className="text-ink-700 text-sm">{c.label}</span>
                </div>
              ))}
            </div>

            <div className="mb-8 p-5 bg-brand-50 border-l-4 border-brand-500">
              <div className="text-xs text-brand-500 font-medium tracking-wider mb-2">INOVANCE AUTHORIZED</div>
              <p className="text-ink-800 font-medium mb-1">汇川技术 · 重庆重点合作渠道</p>
              <p className="text-sm text-ink-500">汇川技术授权经销商、系统集成商、联保中心，为客户提供原厂品质保障和专业技术服务。</p>
            </div>

            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-ink-900 font-medium border-b-2 border-ink-900 pb-1 hover:border-brand-500 hover:text-brand-500 transition-colors"
            >
              <span>了解更多</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}