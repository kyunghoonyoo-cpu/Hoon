
import React from 'react';

const Skills: React.FC = () => {
  const softwareSkills = [
    { name: 'PowerPoint', level: 95 },
    { name: 'Excel', level: 90 },
    { name: 'Word', level: 90 },
  ];

  const techSkills = [
    { name: 'Mechanical Calculation', level: 85, icon: '⚙️' },
    { name: 'English (Intermediate)', level: 75, icon: '🌐' },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Software Tools */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
        <h4 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-2">
          <span className="w-8 h-8 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center text-sm">💻</span>
          업무 프로그램 및 도구
        </h4>
        <div className="space-y-8">
          {softwareSkills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-slate-700">{skill.name}</span>
                <span className="text-teal-600 font-bold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-teal-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Specialty & Language */}
      <div className="grid gap-6">
        {techSkills.map((skill) => (
          <div key={skill.name} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-teal-300 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">{skill.icon}</span>
              <h4 className="text-2xl font-bold text-slate-800">{skill.name}</h4>
            </div>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <div 
                  key={star} 
                  className={`h-2 flex-1 rounded-full ${star <= (skill.level / 20) ? 'bg-teal-500' : 'bg-slate-100'}`}
                ></div>
              ))}
            </div>
            <p className="mt-4 text-slate-500 text-sm">
              {skill.name === 'Mechanical Calculation' 
                ? '플랜트 기자재 설계 및 기계 계산 업무 수행 가능' 
                : '비즈니스 회화 및 문서 작성 중급 수준'}
            </p>
          </div>
        ))}
        
        <div className="bg-teal-900 text-teal-50 p-8 rounded-3xl shadow-sm">
          <h4 className="font-bold mb-2">종합 역량</h4>
          <p className="text-sm text-teal-200 leading-relaxed">
            기술적 계산 능력과 기획력, 외국어 소통 능력을 골고루 갖추어 복합적인 비즈니스 환경에서도 유연하게 대처할 수 있는 멀티 플레이어입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
