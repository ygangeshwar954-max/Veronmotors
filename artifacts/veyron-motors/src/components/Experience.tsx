import { motion } from 'framer-motion';

export default function Experience() {
  const features = [
    { icon: "M10 3L4.5 8.5L2 6", title: "Hand-Selected Inventory", text: "Every vehicle is thoroughly inspected by our master technicians to ensure flawless condition." },
    { icon: "M10 3L4.5 8.5L2 6", title: "Global Logistics", text: "Secure, climate-controlled transport to any destination worldwide with comprehensive insurance." },
    { icon: "M10 3L4.5 8.5L2 6", title: "Concierge Services", text: "From sourcing rare allocations to tailored financing and private track day experiences." }
  ];

  return (
    <section id="experience" className="py-32 bg-[#080808]">
      <div className="container mx-auto px-6 md:px-20 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[22px] overflow-hidden border border-white/5 relative z-10">
              <img src="/images/interior.png" alt="Luxury car interior" className="w-full h-[540px] object-cover" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 md:-right-6 p-8 rounded-[18px] bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl z-20 animate-[float_3.5s_ease-in-out_infinite]">
              <div className="font-display text-[36px] font-extrabold text-[#E8C76A] leading-none mb-1">
                100%
              </div>
              <div className="text-[12px] text-[#9CA3AF]">
                Bespoke crafted
              </div>
            </div>

            <div className="absolute top-12 -left-7 w-[3px] h-[130px] bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent rounded-sm" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="font-display text-[11px] font-semibold tracking-[0.3em] uppercase text-[#C9A84C] mb-4">
              The Veyron Standard
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-7">
              Beyond traditional <br/>ownership.
            </h2>
            <p className="text-[16px] leading-[1.9] text-white/50 mb-10 max-w-[480px]">
              We don't just sell cars; we curate automotive art. From sourcing off-market allocations to comprehensive collection management, our advisory team provides an unparalleled level of discretion and expertise.
            </p>

            <div className="space-y-6 mb-12">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-[22px] h-[22px] rounded-full border border-[#C9A84C] flex items-center justify-center shrink-0 mt-1">
                    <svg viewBox="0 0 12 12" className="w-[8px] h-[6px] fill-none stroke-[#C9A84C] stroke-[2]" strokeLinecap="round" strokeLinejoin="round">
                      <path d={feature.icon} />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display font-bold text-[14px] text-white mb-1.5">{feature.title}</div>
                    <div className="text-[14px] text-white/60 leading-[1.6] max-w-[360px]">{feature.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-gold">
              Consult an Advisor
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
