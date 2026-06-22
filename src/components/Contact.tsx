import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const WEBHOOK_URL = '/api/cgi-bin/webhook/send?key=b4b2d92d-6a16-43f8-91aa-81d70afdf844';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', msg: '' });
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const message = `
【网站咨询】
姓名：${form.name}
电话：${form.phone}
需求：${form.msg}
      `.trim();

      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        body: JSON.stringify({
          msgtype: 'text',
          text: { content: message }
        })
      });

      alert('感谢您的咨询，我们将在 24 小时内与您联系！');
      setForm({ name: '', phone: '', msg: '' });
    } catch (err) {
      alert('提交失败，请稍后重试或直接拨打电话联系我们。');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-ink-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="text-sm text-brand-500 font-medium mb-4 tracking-wider">CONTACT</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-ink-900 leading-tight mb-6">
              联系我们
            </h2>
            <p className="text-ink-500 text-lg leading-relaxed mb-12">
              留下您的需求，我们将在 24 小时内回复。
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, label: '联系人', v1: '孟成君 15803039169', v2: '帅健 15922615622' },
                { icon: Mail, label: '电子邮箱', v1: 'qrymcj@126.com' },
                { icon: MapPin, label: '公司地址', v1: '重庆市两江新区寸滩街道港安二路55号两江商会大厦1-4' },
                { icon: Clock, label: '工作时间', v1: '周一至周五 9:00 — 18:00' },
              ].map((it) => (
                <div key={it.label} className="flex items-start gap-4 pb-6 border-b border-ink-200">
                  <it.icon size={20} className="text-brand-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-ink-400 mb-1">{it.label}</div>
                    <div className="text-ink-900 font-medium">{it.v1}</div>
                    {it.v2 && <div className="text-ink-500 text-sm">{it.v2}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <form onSubmit={submit} className="bg-white p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-ink-900 mb-8">快速咨询</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-ink-600 mb-2">姓名 *</label>
                  <input
                    type="text" required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="您的姓名"
                    className="w-full px-4 py-3 border border-ink-200 focus:border-brand-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-ink-600 mb-2">电话 *</label>
                  <input
                    type="tel" required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="您的联系电话"
                    className="w-full px-4 py-3 border border-ink-200 focus:border-brand-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-ink-600 mb-2">需求描述 *</label>
                  <textarea
                    required rows={5}
                    value={form.msg}
                    onChange={(e) => setForm({ ...form, msg: e.target.value })}
                    placeholder="请简要描述您的需求..."
                    className="w-full px-4 py-3 border border-ink-200 focus:border-brand-500 outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-brand-500 text-white font-medium hover:bg-brand-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  提交咨询
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}