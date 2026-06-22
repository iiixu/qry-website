import { Link } from 'react-router-dom';
import { IMAGES } from '../assets/images';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="工业液压站车间"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/80 via-ink-900/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-900/40" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-1.5 border border-white/40 text-white text-sm font-light tracking-wider animate-fade-in">
              <span className="text-signal-300 font-medium">汇川技术</span> · 重庆 / 四川区域核心经销商
            </div>

            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-8 animate-fade-in-up">
              智造未来
              <br />
              <span className="font-light">从轻锐洋开始</span>
            </h1>

            <p className="text-white/80 text-lg sm:text-xl font-light leading-relaxed mb-10 max-w-2xl animate-fade-in-up animate-delay-200">
              专注电气自动化、机器人系统集成、液压设备节能改造，
              以汇川原厂体系为基，赋能制造业转型升级。
            </p>

            <div className="flex flex-wrap items-center gap-4 animate-fade-in-up animate-delay-300">
              <Link
                to="/products"
                className="px-8 py-3.5 bg-white text-ink-900 font-medium hover:bg-brand-50 transition-colors"
              >
                浏览产品中心
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3.5 border border-white text-white font-light hover:bg-white hover:text-ink-900 transition-colors"
              >
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-3 bg-accent-500 text-white px-3 py-6 shadow-lg cursor-pointer hover:bg-accent-600 transition-colors">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">💬</div>
        <div className="text-sm font-medium" style={{ writingMode: 'vertical-rl' }}>在线咨询</div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 text-xs tracking-widest">
        SCROLL DOWN ↓
      </div>
    </section>
  );
}