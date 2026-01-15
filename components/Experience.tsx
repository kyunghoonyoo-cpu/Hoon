
import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      period: '15 Years',
      role: '기획 업무',
      desc: '사업 전략 수립 및 운영 기획 전반을 담당하며 프로젝트의 핵심 동력을 창출했습니다.',
      color: 'bg-teal-500',
    },
    {
      period: '3 Years',
      role: '플랜트 국내/해외 영업',
      desc: '다양한 시장 환경 속에서 신뢰를 기반으로 고객사를 확보하고 비즈니스 성과를 달성했습니다.',
      color: 'bg-indigo-500',
    },
    {
      period: '3 Years',
      role: '플랜트 기자재 설계',
      desc: '정밀한 기계 계산과 설계를 통해 프로젝트의 기초와 안정성을 확보하는 엔지니어링 업무를 수행했습니다.',
      color: 'bg-slate-700',
    },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-teal-600 tracking-widest uppercase mb-4">Experience</h2>
          <h3 className="text-4xl font-black text-slate-900">활동 및 주요 성과</h3>
          <p className="mt-4 text-slate-500">21년의 시간 동안 쌓아온 탄탄한 실무 경험의 궤적입니다.</p>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:left-1/2">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`relative mb-12 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:-left-[50%]' : 'md:pl-12 md:left-0'}`}>
              {/* Timeline dot */}
              <div className={`absolute top-0 w-6 h-6 rounded-full border-4 border-white shadow-md ${exp.color} -left-[13px] md:left-auto ${idx % 2 === 0 ? 'md:-right-[13px]' : 'md:-left-[13px]'}`}></div>
              
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                <span className={`inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-4 ${exp.color}`}>
                  {exp.period}
                </span>
                <h4 className="text-2xl font-bold text-slate-800 mb-3">{exp.role}</h4>
                <p className="text-slate-600 leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-100 p-8 rounded-3xl text-center border-2 border-dashed border-slate-300">
          <p className="text-slate-500 font-medium">
            현재도 새로운 도전을 위해 끊임없이 배우고 나아가는 중입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
