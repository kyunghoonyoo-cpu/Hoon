
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '홈', href: '#hero' },
    { name: '소개', href: '#about' },
    { name: '보유기술', href: '#skills' },
    { name: '경력', href: '#experience' },
    { name: '연락처', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
          YKH <span className="text-teal-500">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`font-medium transition-colors hover:text-teal-500 ${
                isScrolled ? 'text-slate-700' : 'text-white/90'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-slate-900' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-slate-900' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-slate-900' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-slate-900 z-40 flex flex-col items-center justify-center transition-transform duration-500 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-3xl font-bold my-4 hover:text-teal-400"
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
