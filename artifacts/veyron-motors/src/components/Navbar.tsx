import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Collection', href: '#collection' },
  { label: 'Brands', href: '#brands' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-between px-6 md:px-14 border-b border-white/5 backdrop-blur-xl ${scrolled ? 'h-[70px] bg-[#080808]/90' : 'h-[80px] bg-[#080808]/80'}`}>
      <div className="flex items-center gap-3">
        <div className="w-[36px] h-[36px] rounded-full border-[1.5px] border-[#C9A84C] flex items-center justify-center shadow-[0_0_16px_rgba(201,168,76,0.3)]">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#C9A84C]">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <span className="font-display font-extrabold text-[17px] tracking-[0.18em] uppercase">Veyron</span>
      </div>

      <div className="hidden md:flex items-center gap-[34px]">
        {navLinks.map(({ label, href }) => {
          const isActive = activeLink === label;
          return (
            <a
              key={label}
              href={href}
              onClick={() => setActiveLink(label)}
              className={`font-display text-[11px] font-medium tracking-[0.1em] uppercase transition-colors relative
                after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-[#C9A84C] after:transition-all after:duration-300
                ${isActive
                  ? 'text-[#E8C76A] after:w-full'
                  : 'text-white/50 hover:text-white after:w-0 hover:after:w-full'
                }`}
            >
              {label}
            </a>
          );
        })}
      </div>

      <div className="hidden md:flex">
        <a href="#contact" className="inline-flex items-center gap-2 px-[26px] py-[10px] rounded-full bg-gradient-to-br from-[#9A7A2E] via-[#C9A84C] to-[#E8C76A] text-black font-display font-bold text-[11px] tracking-[0.13em] uppercase shadow-[0_4px_20px_rgba(201,168,76,0.28)] hover:-translate-y-[1px] hover:shadow-[0_8px_32px_rgba(201,168,76,0.48)] transition-all">
          Reserve Now
        </a>
      </div>
      
      <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X /> : <Menu />}
      </button>
    </nav>
  );
}
