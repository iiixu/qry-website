import { Cpu, Bot, Settings, Droplets, Factory, Wrench } from 'lucide-react';
import { IMAGES } from '../assets/images';

const services = [
  { icon: Droplets, title: '液压站定制', desc: '伺服液压站、机床液压站、压机液压站及各类非标定制液压站', img: IMAGES.service04 },
  { icon: Cpu, title: '电液伺服改造', desc: '油压机、注塑机、挤出机、压铸机电液伺服节能改造', img: IMAGES.service01 },
  { icon: Bot, title: '机器人系统集成', desc: '工业机器人系统集成、产线自动化改造', img: IMAGES.service02 },
  { icon: Settings, title: '电气自动化', desc: 'PLC · HMI · 变频器系统集成、非标控制柜定制', img: IMAGES.service03 },
  { icon: Factory, title: '液压物联网', desc: '低成本设备数据采集、实时监控、生产数据追溯', img: IMAGES.service05 },
  { icon: Wrench, title: '原厂维保', desc: '汇川授权联保中心，专业售后服务', img: IMAGES.service06 },
];

export default function Services() {
  return (
    <section className="py-24 lg:py-32 bg-ink-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-7">
            <div className="text-sm text-brand-500 font-medium mb-4 tracking-wider">SERVICES</div>
            <h2 className="text-4xl lg:text-6xl font-bold text-ink-900 leading-tight">
              一站式<br/>
              <span className="font-light">智能制造解决方案</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink-500 text-lg leading-relaxed">
              从单台设备到整厂交付，从硬件选型到长期运维，
              为制造业客户提供端到端服务。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-white overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden bg-ink-100">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <s.icon size={20} className="text-brand-500" />
                  <h3 className="text-lg font-bold text-ink-900">{s.title}</h3>
                </div>
                <p className="text-ink-500 text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}