
import React from 'react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      label: 'Email',
      value: 'kyunghoon.yoo@gmail.com',
      href: 'mailto:kyunghoon.yoo@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: 'Phone',
      value: '010-3936-9023',
      href: 'tel:01039369023',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-teal-400 tracking-widest uppercase mb-4">Contact</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">함께 변화를 만들 준비가 되셨나요?</h3>
          <p className="text-slate-400 text-lg">언제든 연락 주시면 정직과 노력을 다해 응답하겠습니다.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contactInfo.map((info) => (
            <a 
              key={info.label}
              href={info.href}
              className="group flex items-center gap-6 bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-teal-500/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-teal-500/20 text-teal-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <div>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-wide">{info.label}</p>
                <p className="text-xl md:text-2xl text-white font-semibold">{info.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center border-t border-white/10 pt-16">
          <div className="inline-flex items-center gap-2 text-teal-400 font-black text-2xl tracking-tighter mb-4">
            "일단 <span className="text-white">해보자!</span>"
          </div>
          <p className="text-slate-500">도전을 멈추지 않는 유경훈의 포트폴리오였습니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
