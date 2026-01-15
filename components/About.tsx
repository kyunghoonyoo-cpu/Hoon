
import React from 'react';

const About: React.FC = () => {
  const keywords = [
    { title: '사랑', desc: '사람과 일을 향한 따뜻한 마음', icon: '❤️' },
    { title: '정직', desc: '신뢰의 밑바탕이 되는 투명함', icon: '⚖️' },
    { title: '노력', desc: '결과를 만드는 끈기 있는 실행', icon: '🔥' },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-bold text-teal-600 tracking-widest uppercase mb-4">About Me</h2>
          <h3 className="text-4xl font-black text-slate-900 mb-8 leading-tight">
            나를 움직이는 <br />세 가지 핵심 키워드
          </h3>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            "변화를 두려워하지 않는 자유로운 영혼" 유경훈입니다. 
            단순한 경험의 나열이 아닌, 매 순간 진심을 다해 도전해온 시간을 소중히 여깁니다. 
            나의 성장은 '사랑', '정직', '노력'이라는 세 기둥 위에서 이루어졌습니다.
          </p>
          
          <div className="space-y-6">
            {keywords.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <span className="text-3xl bg-slate-100 p-3 rounded-2xl shadow-sm">{item.icon}</span>
                <div>
                  <h4 className="text-xl font-bold text-slate-800">{item.title}</h4>
                  <p className="text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl">
             <img src="https://picsum.photos/seed/ykh/800/1000" alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl max-w-xs">
            <p className="italic text-slate-600 font-medium">
              "실패를 두려워하며 멈춰 있기보다, 일단 해보고 그 과정에서 배우는 것을 즐깁니다."
            </p>
            <p className="mt-4 text-sm font-bold text-teal-600 text-right">— 유경훈</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
