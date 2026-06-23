import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 lg:py-32 bg-ink-900 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-sm text-accent-400 font-medium mb-4 tracking-wider">CONTACT</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              立即咨询<br/>
              <span className="font-light">开启智能制造之旅</span>
            </h2>
            <p className="text-ink-300 text-lg leading-relaxed mb-12">
              不论是产品询价、方案设计还是售后支持 — 
              留下信息，我们的工程师团队将在 24 小时内与您联系。
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-accent-400" />
                <span className="text-white">孟成君 15803039169</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-accent-400" />
                <span className="text-white">qrymcj@126.com</span>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white/5 backdrop-blur-sm p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6">快速联系</h3>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent-500 text-white font-medium hover:bg-accent-600 transition-colors"
              >
                <span>填写咨询表单</span>
                <ArrowRight size={18} />
              </Link>
              <p className="text-ink-400 text-sm mt-6">
                我们将在 24 小时内回复您的咨询
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}