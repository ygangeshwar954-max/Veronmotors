import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleLinkClick = (label: string) => {
    setActiveLink(label);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-between
          px-5 md:px-14 border-b border-white/5 backdrop-blur-xl
          ${scrolled ? 'h-[64px] md:h-[70px] bg-[#080808]/92' : 'h-[70px] md:h-[80px] bg-[#080808]/80'}`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-[1.5px] border-[#C9A84C] flex items-center justify-center shadow-[0_0_14px_rgba(201,168,76,0.28)]">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#C9A84C]">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="font-display font-extrabold text-[15px] md:text-[17px] tracking-[0.18em] uppercase">Veyron</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-[34px]">
          {navLinks.map(({ label, href }) => {
            const isActive = activeLink === label;
            return (
              <a
                key={label}
                href={href}
                onClick={() => handleLinkClick(label)}
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

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-[26px] py-[10px] rounded-full bg-gradient-to-br from-[#9A7A2E] via-[#C9A84C] to-[#E8C76A] text-black font-display font-bold text-[11px] tracking-[0.13em] uppercase shadow-[0_4px_20px_rgba(201,168,76,0.28)] hover:-translate-y-[1px] hover:shadow-[0_8px_32px_rgba(201,168,76,0.48)] transition-all"
          >
            Reserve Now
          </a>
        </div>

        {/* Mobile hamburger button — 44×44 tap target */}
        <button
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-full border border-white/10 text-white hover:border-[#C9A84C]/40 transition-colors -mr-1"
          onClick={() => setMobileMenuOpen(v => !v)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-[18px] h-[18px]" /> : <Menu className="w-[18px] h-[18px]" />}
        </button>
      </nav>

      {/* ── Mobile slide-out drawer ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 z-40 bg-black/65 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(320px,88vw)] bg-[#0C0C0C] border-l border-white/[0.07] flex flex-col md:hidden shadow-[−24px_0_80px_rgba(0,0,0,0.6)]"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-[70px] border-b border-white/[0.07] shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full border-[1.5px] border-[#C9A84C] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#C9A84C]">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <span className="font-display font-extrabold text-[15px] tracking-[0.18em] uppercase">Veyron</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Gold accent line */}
              <div className="h-px bg-gradient-to-r from-[#C9A84C]/60 via-[#E8C76A]/30 to-transparent shrink-0" />

              {/* Nav links */}
              <nav className="flex-1 flex flex-col px-5 pt-7 pb-4 gap-1.5 overflow-y-auto">
                {navLinks.map(({ label, href }, i) => {
                  const isActive = activeLink === label;
                  return (
                    <motion.a
                      key={label}
                      href={href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 + i * 0.05, duration: 0.28 }}
                      onClick={() => handleLinkClick(label)}
                      className={`flex items-center min-h-[52px] px-5 rounded-[14px] font-display text-[13px] font-semibold tracking-[0.1em] uppercase transition-all duration-200
                        ${isActive
                          ? 'text-[#E8C76A] bg-[#C9A84C]/[0.12] border border-[#C9A84C]/20'
                          : 'text-white/55 hover:text-white hover:bg-white/[0.045] border border-transparent'
                        }`}
                    >
                      {isActive && (
                        <span className="w-1 h-1 rounded-full bg-[#C9A84C] mr-3 shrink-0 shadow-[0_0_6px_rgba(201,168,76,0.8)]" />
                      )}
                      {label}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Divider */}
              <div className="mx-5 h-px bg-white/[0.06]" />

              {/* CTA */}
              <div className="px-5 pt-5 pb-10 shrink-0">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center min-h-[52px] w-full rounded-full bg-gradient-to-br from-[#9A7A2E] via-[#C9A84C] to-[#E8C76A] text-black font-display font-bold text-[12px] tracking-[0.16em] uppercase shadow-[0_6px_24px_rgba(201,168,76,0.3)] active:scale-[0.98] transition-transform"
                >
                  Reserve Now
                </a>
                <p className="text-center mt-4 font-display text-[10px] tracking-[0.1em] uppercase text-white/20">
                  enquiries@veyronmotors.com
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
