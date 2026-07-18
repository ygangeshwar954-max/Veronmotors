import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-right md:bg-center"
        style={{ backgroundImage: "url('/images/hero-car.png')" }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/95 via-[#000000]/75 to-[#000000]/5" />
      
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, transparent 55%)',
          WebkitMaskImage: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, transparent 55%)'
        }}
      />
      
      <div className="absolute -bottom-[120px] left-[8%] w-[700px] h-[340px] rounded-full bg-[radial-gradient(ellipse,rgba(201,168,76,0.07)_0%,transparent_70%)] blur-[50px] pointer-events-none" />

      <div className="relative z-10 max-w-[700px] px-6 md:px-16 pt-10 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#C9A84C]/35 bg-[#C9A84C]/10 mb-7"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-[pulse-dot_2s_ease_infinite]" />
          <span className="font-display text-[10px] font-semibold tracking-[0.24em] uppercase text-[#E8C76A]">
            The New Benchmark
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-[clamp(48px,7.5vw,96px)] font-black leading-[0.97] tracking-[-0.04em] mb-7"
        >
          Engineering the <br/><span className="text-gold-shimmer">Extraordinary</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[17px] leading-[1.85] text-white/50 max-w-[440px] mb-12"
        >
          Step into a world where performance meets absolute perfection. 
          Discover the most exclusive collection of hypercars and luxury vehicles globally.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center gap-5 flex-wrap"
        >
          <button className="btn-gold !px-[38px] !py-[15px] !shadow-[0_6px_28px_rgba(201,168,76,0.32)]">
            Explore Collection <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button className="btn-outline !px-[34px] !py-[15px] !border-white/15 !text-white/70">
            Private Viewing
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute bottom-32 md:bottom-[48px] left-6 md:left-[64px] z-10 flex items-center gap-3.5 hidden md:flex"
      >
        <div className="w-px h-[48px] bg-gradient-to-b from-[#C9A84C] to-transparent" />
        <span className="font-display text-[9px] tracking-[0.3em] uppercase text-white/30">Scroll to explore</span>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col md:flex-row bg-[#000000]/70 backdrop-blur-md border-t border-white/5">
        {[
          { value: '28+', label: 'Years of Excellence' },
          { value: '4.2K', label: 'Vehicles Delivered' },
          { value: '94%', label: 'Client Retention' },
          { value: '18', label: 'Global Showrooms' },
        ].map((stat, i) => (
          <div key={i} className="flex-1 py-5 text-center border-b md:border-b-0 md:border-r border-white/5 last:border-0">
            <div className="font-display text-2xl md:text-[28px] font-extrabold tracking-[-0.02em] bg-gradient-to-br from-white to-[#E8C76A] bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-[10px] tracking-[0.1em] uppercase text-[#6B7280] mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
