
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 pt-20 relative z-10 text-white">
        <div className="max-w-3xl">
          <span className="inline-block bg-teal-500 text-teal-950 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest animate-bounce">
            Portfolio
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight">
            일단 <span className="text-teal-400">해보자!</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light mb-10 leading-relaxed">
            안녕하세요, <strong className="text-white font-semibold">유경훈</strong>입니다.<br />
            변화를 즐기는 자유로운 영혼이자, 기획과 기술의 경계를 허무는 21년차 전문가입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#about" 
              className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold rounded-lg transition-all text-center"
            >
              자기소개 보기
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-bold rounded-lg transition-all text-center"
            >
              연락하기
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
