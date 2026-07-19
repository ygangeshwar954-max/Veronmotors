import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home',       href: '#',           num: '01' },
  { label: 'Collection', href: '#collection', num: '02' },
  { label: 'Brands',     href: '#brands',     num: '03' },
  { label: 'Experience', href: '#experience', num: '04' },
  { label: 'Contact',    href: '#contact',    num: '05' },
];

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink]     = useState('Home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* ── Navbar bar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-between
          px-5 md:px-14 border-b border-white/5 backdrop-blur-xl
          ${scrolled ? 'h-[64px] md:h-[70px] bg-[#080808]/92' : 'h-[70px] md:h-[80px] bg-[#080808]/80'}`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0 z-[60] relative">
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

        {/* Mobile hamburger — always on top */}
        <button
          className="md:hidden relative z-[60] flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300
            border border-white/15 text-white hover:border-[#C9A84C]/50"
          onClick={() => setMobileMenuOpen(v => !v)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileMenuOpen ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0,   opacity: 1 }}
                exit={{   rotate:  90,  opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="flex items-center justify-center"
              >
                <X className="w-[17px] h-[17px]" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate:  90, opacity: 0 }}
                animate={{ rotate:  0,  opacity: 1 }}
                exit={{   rotate: -90,  opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="flex items-center justify-center"
              >
                <Menu className="w-[17px] h-[17px]" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* ── Full-screen mobile overlay ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="fullscreen-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{    opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="md:hidden fixed inset-0 z-[55] flex flex-col"
            style={{
              background: 'rgba(6, 6, 6, 0.72)',
              backdropFilter: 'blur(28px) saturate(1.4)',
              WebkitBackdropFilter: 'blur(28px) saturate(1.4)',
            }}
          >
            {/* Subtle gold vignette — top-left glow */}
            <div
              className="absolute top-0 left-0 w-[260px] h-[260px] pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at top left, rgba(201,168,76,0.09) 0%, transparent 68%)',
              }}
            />
            {/* Bottom-right glow */}
            <div
              className="absolute bottom-0 right-0 w-[220px] h-[220px] pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at bottom right, rgba(201,168,76,0.06) 0%, transparent 70%)',
              }}
            />

            {/* Thin gold rule under the navbar height */}
            <div
              className="absolute left-5 right-5 h-px"
              style={{
                top: '70px',
                background: 'linear-gradient(90deg, rgba(201,168,76,0.5) 0%, rgba(232,199,106,0.18) 60%, transparent 100%)',
              }}
            />

            {/* Nav links — centred, 3-D perspective entrance */}
            <nav
              className="flex-1 flex flex-col items-start justify-center px-7"
              style={{ perspective: '900px', paddingTop: '70px' }}
            >
              {navLinks.map(({ label, href, num }, i) => {
                const isActive = activeLink === label;
                return (
                  <motion.a
                    key={label}
                    href={href}
                    onClick={() => handleLinkClick(label)}
                    initial={{ opacity: 0, y: 28, rotateX: 22, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0,  rotateX:  0, scale: 1    }}
                    exit={{    opacity: 0, y: 16,  rotateX: -8, scale: 0.96 }}
                    transition={{
                      delay: 0.06 + i * 0.055,
                      duration: 0.42,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                    className="group relative flex items-baseline gap-3 py-[11px] w-full select-none"
                  >
                    {/* Index number */}
                    <span className={`font-display text-[10px] font-semibold tracking-[0.18em] transition-colors duration-200 w-6 shrink-0
                      ${isActive ? 'text-[#C9A84C]' : 'text-white/20 group-hover:text-[#C9A84C]/60'}`}>
                      {num}
                    </span>

                    {/* Label */}
                    <span className={`font-display font-extrabold tracking-[-0.02em] leading-none transition-all duration-200
                      ${isActive
                        ? 'text-[clamp(30px,9vw,46px)] text-[#E8C76A]'
                        : 'text-[clamp(28px,8.5vw,42px)] text-white/70 group-hover:text-white'}`}>
                      {label}
                    </span>

                    {/* Active dot */}
                    {isActive && (
                      <motion.span
                        layoutId="active-dot"
                        className="mb-1 ml-1 w-[6px] h-[6px] rounded-full bg-[#C9A84C] shrink-0 shadow-[0_0_8px_rgba(201,168,76,0.9)]"
                      />
                    )}

                    {/* Hover underline */}
                    <span
                      className={`absolute bottom-[10px] left-9 h-px transition-all duration-300 ease-out
                        ${isActive
                          ? 'w-[calc(100%-36px)] bg-gradient-to-r from-[#C9A84C]/60 to-transparent'
                          : 'w-0 group-hover:w-[calc(100%-36px)] bg-gradient-to-r from-white/15 to-transparent'}`}
                    />
                  </motion.a>
                );
              })}
            </nav>

            {/* Bottom strip — CTA + contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0  }}
              exit={{    opacity: 0, y: 10  }}
              transition={{ delay: 0.32, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0 px-7 pb-10 pt-6 border-t border-white/[0.06]"
            >
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center h-[48px] w-full rounded-full
                  bg-gradient-to-br from-[#9A7A2E] via-[#C9A84C] to-[#E8C76A]
                  text-black font-display font-bold text-[11px] tracking-[0.18em] uppercase
                  shadow-[0_6px_24px_rgba(201,168,76,0.28)] active:scale-[0.97] transition-transform"
              >
                Reserve Now
              </a>
              <p className="text-center mt-4 font-display text-[10px] tracking-[0.12em] uppercase text-white/18">
                enquiries@veyronmotors.com
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
