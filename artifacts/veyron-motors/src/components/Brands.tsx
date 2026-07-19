import Reveal, { StaggerReveal } from '@/components/Reveal';

export default function Brands() {
  const brands = ['LAMBORGHINI', 'FERRARI', 'ASTON MARTIN', 'ROLLS-ROYCE', 'BENTLEY', 'McLAREN'];

  return (
    <section id="brands" className="py-10 bg-[#080808] border-y border-white/5">
      <div className="container mx-auto px-6 md:px-20 max-w-[1280px]">
        <Reveal delay={0} duration={0.7} tilt={false}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 flex-wrap">
            <div className="font-display text-[10px] tracking-[0.26em] uppercase text-white/20 md:mr-7 whitespace-nowrap">
              Authorized Dealer
            </div>
            <StaggerReveal
              staggerDelay={0.08}
              delay={0.1}
              duration={0.55}
              direction="up"
              distance={18}
              className="flex flex-wrap justify-center items-center"
            >
              {brands.map((brand) => (
                <div
                  key={brand}
                  className="px-5 py-2 font-display font-bold text-[12px] tracking-[0.13em] text-white/20 hover:text-[#C9A84C]/70 transition-colors border-r border-white/5 last:border-0 cursor-default"
                >
                  {brand}
                </div>
              ))}
            </StaggerReveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
