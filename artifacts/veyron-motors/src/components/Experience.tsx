import Reveal from '@/components/Reveal';

export default function Experience() {
  const features = [
    { title: "Hand-Selected Inventory", text: "Every vehicle is thoroughly inspected by our master technicians to ensure flawless condition." },
    { title: "Global Logistics", text: "Secure, climate-controlled transport to any destination worldwide with comprehensive insurance." },
    { title: "Concierge Services", text: "From sourcing rare allocations to tailored financing and private track day experiences." },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-[#080808]">
      <div className="container mx-auto px-5 sm:px-8 md:px-20 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left — image */}
          <Reveal direction="left" delay={0} duration={0.9}>
            <div className="relative">
              <div className="rounded-[18px] md:rounded-[22px] overflow-hidden border border-white/5 relative z-10">
                <img
                   src={`${import.meta.env.BASE_URL}images/interior.png`}
                  alt="Luxury car interior"
                  className="w-full h-[260px] sm:h-[360px] md:h-[540px] object-cover"
                />
              </div>
              {/* Floating badge — safe on all screen sizes */}
              <div className="absolute -bottom-4 right-4 sm:-bottom-6 sm:-right-4 md:-bottom-6 md:-right-6 p-5 sm:p-7 md:p-8 rounded-[14px] md:rounded-[18px] bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl z-20 animate-[float_3.5s_ease-in-out_infinite]">
                <div className="font-display text-[28px] sm:text-[32px] md:text-[36px] font-extrabold text-[#E8C76A] leading-none mb-1">100%</div>
                <div className="text-[11px] sm:text-[12px] text-[#9CA3AF]">Bespoke crafted</div>
              </div>
              <div className="absolute top-12 -left-3 md:-left-7 w-[3px] h-[80px] md:h-[130px] bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent rounded-sm" />
            </div>
          </Reveal>

          {/* Right — text */}
          <Reveal direction="right" delay={0.15} duration={0.9}>
            <div className="pt-8 md:pt-0">
              <div className="font-display text-[11px] font-semibold tracking-[0.3em] uppercase text-[#C9A84C] mb-4">
                The Veyron Standard
              </div>
              <h2 className="font-display text-[clamp(28px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-6 md:mb-7">
                Beyond traditional <br className="hidden sm:block"/>ownership.
              </h2>
              <p className="text-[15px] md:text-[16px] leading-[1.9] text-white/50 mb-8 md:mb-10 max-w-[480px]">
                We don't just sell cars; we curate automotive art. From sourcing off-market allocations to comprehensive
                collection management, our advisory team provides an unparalleled level of discretion and expertise.
              </p>

              <div className="space-y-5 md:space-y-6 mb-10 md:mb-12">
                {features.map((feature, i) => (
                  <Reveal key={i} direction="right" delay={0.25 + i * 0.12} duration={0.7} tilt={false}>
                    <div className="flex gap-4">
                      <div className="w-[22px] h-[22px] rounded-full border border-[#C9A84C] flex items-center justify-center shrink-0 mt-0.5">
                        <svg viewBox="0 0 12 9" className="w-[8px] h-[6px] fill-none stroke-[#C9A84C] stroke-[2]" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 4.5L4 7.5L11 1" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-display font-bold text-[14px] text-white mb-1">{feature.title}</div>
                        <div className="text-[13px] md:text-[14px] text-white/60 leading-[1.6] max-w-[360px]">{feature.text}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <button className="btn-gold min-h-[44px]">Consult an Advisor</button>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
