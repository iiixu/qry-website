import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Logo from '../Logo';

const quickLinks = [
  { path: '/', label: '首页' },
  { path: '/about', label: '关于轻锐洋' },
  { path: '/products', label: '产品中心' },
  { path: '/cases', label: '改造案例' },
  { path: '/contact', label: '联系我们' },
];

const serviceLinks = [
  { path: '/products', label: '电气自动化' },
  { path: '/products', label: '机器人系统集成' },
  { path: '/products', label: '电器成套柜定制' },
  { path: '/products', label: '液压节能改造' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12">
                <Logo showText={false} variant="light" />
              </div>
              <div>
                <div className="font-bold text-xl text-white" style={{ letterSpacing: '0.1em' }}>轻锐洋</div>
                <div className="text-[10px] tracking-[0.3em] text-ink-400 mt-1">QING RUI YANG · 2018</div>
              </div>
            </div>
            <p className="text-ink-300 text-sm leading-relaxed mb-6">
              重庆轻锐洋智能科技有限公司 — 汇川技术官方授权的重庆 / 四川区域核心经销商。
              专注电气自动化、机器人系统集成、液压设备节能改造领域。
            </p>
            <div className="text-sm text-ink-400">
              <div className="text-accent-400 font-medium">INOVANCE AUTHORIZED</div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-medium mb-5 tracking-wider">导航</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.path} className="text-ink-300 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-medium mb-5 tracking-wider">业务</h4>
            <ul className="space-y-3">
              {serviceLinks.map((l, i) => (
                <li key={i}>
                  <Link to={l.path} className="text-ink-300 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-sm font-medium mb-5 tracking-wider">联系方式</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent-400 mt-0.5 flex-shrink-0" />
                <span className="text-ink-300">重庆市两江新区寸滩街道港安二路55号两江商会大厦1-4</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-accent-400 mt-0.5 flex-shrink-0" />
                <span className="text-ink-300">孟成君 15803039169 · 帅健 15922615622</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent-400 flex-shrink-0" />
                <span className="text-ink-300">qrymcj@126.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-accent-400 flex-shrink-0" />
                <span className="text-ink-300">周一至周五 9:00 — 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-ink-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ink-400 text-sm">
            © 2024 重庆轻锐洋智能科技有限公司 · 保留所有权利
          </p>
          <div className="flex gap-6 text-sm text-ink-400">
            <a href="#" className="hover:text-white transition-colors">渝ICP备 2024xxxxx号</a>
          </div>
        </div>
      </div>
    </footer>
  );
}