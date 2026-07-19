import Reveal, { StaggerReveal } from '@/components/Reveal';

const testimonials = [
  {
    quote: "The level of discretion and professionalism is unmatched. They sourced a very specific PTS GT3 RS for me in under a week when other brokers told me it was impossible.",
    name: "Alexander H.",
    title: "Private Collector",
    rating: 5,
    avatar: "AH",
  },
  {
    quote: "Purchasing my DB12 remotely was entirely seamless. The concierge handled all logistics to Dubai flawlessly. Veyron Motors sets the global standard.",
    name: "Marcus T.",
    title: "Entrepreneur",
    rating: 5,
    avatar: "MT",
  },
  {
    quote: "From the initial consultation to taking delivery of my SF90, every interaction felt bespoke. An absolute masterclass in client relationship management.",
    name: "Sarah L.",
    title: "Enthusiast",
    rating: 5,
    avatar: "SL",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#111111]">
      <div className="container mx-auto px-6 md:px-20 max-w-[1280px]">

        {/* Header */}
        <Reveal delay={0} duration={0.8}>
          <div className="text-center mb-20">
            <div className="font-display text-[11px] font-semibold tracking-[0.3em] uppercase text-[#C9A84C] mb-4">
              Client Voices
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.1]">
              A reputation built on <br />excellence.
            </h2>
            <div className="w-16 h-px mx-auto mt-6 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
          </div>
        </Reveal>

        {/* Cards — staggered 3D entrance */}
        <StaggerReveal staggerDelay={0.14} delay={0.1} duration={0.8} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.09] rounded-[18px] p-9 hover:border-[#C9A84C]/20 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className="text-[#C9A84C] text-[14px]">★</span>
                ))}
              </div>
              <p className="text-[15px] leading-[1.8] text-white/60 italic mb-8">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-[46px] h-[46px] rounded-full bg-gradient-to-br from-[#9A7A2E] to-[#C9A84C] flex items-center justify-center font-display font-bold text-[14px] text-black shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-display font-semibold text-[14px] mb-1">{t.name}</div>
                  <div className="text-[12px] text-[#6B7280]">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </StaggerReveal>

      </div>
    </section>
  );
}
