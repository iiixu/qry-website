import { IMAGES } from '../assets/images';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'dark' | 'light';
}

export default function Logo({ className = '', showText = true, variant = 'dark' }: LogoProps) {
  const textColor = variant === 'dark' ? 'text-ink-900' : 'text-white';
  const subColor = variant === 'dark' ? 'text-ink-400' : 'text-white/70';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={IMAGES.logo}
        alt="轻锐洋 Logo"
        className="w-full h-full flex-shrink-0 object-contain"
      />
      {showText && (
        <div className="flex flex-col">
          <div className={`font-bold text-base leading-none ${textColor}`} style={{ letterSpacing: '0.05em' }}>
            轻锐洋
          </div>
          <div className={`text-[9px] tracking-[0.3em] mt-1 ${subColor}`}>
            QING RUI YANG
          </div>
        </div>
      )}
    </div>
  );
}