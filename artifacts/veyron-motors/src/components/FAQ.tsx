import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "Do you offer international shipping?",
    a: "Yes, we provide fully insured, climate-controlled transport globally. Our logistics team handles all customs clearance and import documentation to ensure a seamless delivery to your residence or private facility."
  },
  {
    q: "Can you source specific vehicles not currently in inventory?",
    a: "Absolutely. Our extensive private network allows us to source off-market hypercars and rare allocations that never reach public listings. Contact an advisor with your exact specifications."
  },
  {
    q: "Do you offer financing and leasing options?",
    a: "We partner with elite automotive financial institutions to offer bespoke financing structures tailored to high-net-worth individuals, including open-ended leasing and portfolio lending."
  },
  {
    q: "What is your consignment process?",
    a: "We offer highly discreet consignment services. Our team will evaluate your vehicle, arrange professional detailing and photography, and market it directly to our vetted global client list without public exposure if desired."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-[110px] bg-[#111111]">
      <div className="container mx-auto px-6 md:px-20 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 md:gap-[88px] items-start">
          
          <div className="md:sticky md:top-[100px]">
            <div className="font-display text-[11px] font-semibold tracking-[0.3em] uppercase text-[#C9A84C] mb-4">
              Knowledge Base
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-[22px]">
              Common <br/>Inquiries.
            </h2>
            <p className="text-[14px] text-white/40 leading-[1.85] mb-[36px] max-w-[320px]">
              Everything you need to know about the acquisition process, from global logistics to exclusive sourcing capabilities.
            </p>
            <button className="btn-outline">
              Contact an Advisor
            </button>
          </div>

          <div>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="border-b border-white/5 overflow-hidden">
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex justify-between items-center gap-5 py-6 text-left font-display text-[15px] font-medium text-white hover:text-[#E8C76A] transition-colors"
                  >
                    <span className={isOpen ? "text-[#E8C76A]" : ""}>{faq.q}</span>
                    <div className={`w-[26px] h-[26px] rounded-full border flex items-center justify-center shrink-0 text-[18px] leading-none transition-all duration-350 ${isOpen ? 'border-[#C9A84C] text-[#C9A84C] rotate-45' : 'border-white/15 text-white/50'}`}>
                      +
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="pb-6 text-[14px] leading-[1.85] text-white/50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
