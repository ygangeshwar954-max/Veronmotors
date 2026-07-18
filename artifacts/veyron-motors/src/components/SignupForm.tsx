import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function SignupForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(201,168,76,0.05)_0%,transparent_70%)] blur-[70px] pointer-events-none" />
      
      <div className="max-w-[680px] mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="font-display text-[11px] font-semibold tracking-[0.3em] uppercase text-[#C9A84C] mb-4">
            Join the Inner Circle
          </div>
          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-5">
            Exclusive Access.
          </h2>
          <p className="text-[15px] leading-[1.8] text-white/40 max-w-[480px] mx-auto">
            Register to receive off-market vehicle allocations, private event invitations, and curated editorial content.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[28px] p-8 md:p-12 bg-[#080808] shadow-[0_44px_88px_rgba(0,0,0,0.55),inset_0_0_0_1px_rgba(201,168,76,0.08)]"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-[76px] h-[76px] rounded-full border-2 border-[#C9A84C] flex items-center justify-center mx-auto mb-6 shadow-[0_0_28px_rgba(201,168,76,0.35)] text-[#C9A84C]">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-display text-[26px] font-bold mb-3">Application Received</h3>
              <p className="text-[15px] text-white/45 leading-[1.75]">
                A dedicated advisor will review your application and be in touch within 24 hours to confirm your membership.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div className="flex flex-col gap-2">
                  <label className="font-display text-[11px] font-semibold tracking-[0.13em] uppercase text-[#6B7280]">First Name</label>
                  <input required type="text" placeholder="John" className="w-full p-4 bg-white/5 border border-white/10 rounded-[10px] text-[14px] text-white placeholder:text-white/30 focus:border-[#C9A84C] focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)] outline-none transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-display text-[11px] font-semibold tracking-[0.13em] uppercase text-[#6B7280]">Last Name</label>
                  <input required type="text" placeholder="Doe" className="w-full p-4 bg-white/5 border border-white/10 rounded-[10px] text-[14px] text-white placeholder:text-white/30 focus:border-[#C9A84C] focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)] outline-none transition-all" />
                </div>
                <div className="flex flex-col gap-2 col-span-1 md:col-span-1">
                  <label className="font-display text-[11px] font-semibold tracking-[0.13em] uppercase text-[#6B7280]">Email Address</label>
                  <input required type="email" placeholder="john@example.com" className="w-full p-4 bg-white/5 border border-white/10 rounded-[10px] text-[14px] text-white placeholder:text-white/30 focus:border-[#C9A84C] focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)] outline-none transition-all" />
                </div>
                <div className="flex flex-col gap-2 col-span-1 md:col-span-1">
                  <label className="font-display text-[11px] font-semibold tracking-[0.13em] uppercase text-[#6B7280]">Phone Number</label>
                  <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full p-4 bg-white/5 border border-white/10 rounded-[10px] text-[14px] text-white placeholder:text-white/30 focus:border-[#C9A84C] focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)] outline-none transition-all" />
                </div>
                <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                  <label className="font-display text-[11px] font-semibold tracking-[0.13em] uppercase text-[#6B7280]">Area of Interest</label>
                  <div className="relative">
                    <select className="w-full p-4 bg-white/5 border border-white/10 rounded-[10px] text-[14px] text-white placeholder:text-white/30 focus:border-[#C9A84C] focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)] outline-none transition-all appearance-none">
                      <option className="bg-[#111] text-white" value="purchase">Acquiring a Vehicle</option>
                      <option className="bg-[#111] text-white" value="sell">Selling a Vehicle</option>
                      <option className="bg-[#111] text-white" value="source">Sourcing Allocation</option>
                      <option className="bg-[#111] text-white" value="other">General Inquiry</option>
                    </select>
                    <div className="absolute right-[18px] top-1/2 -translate-y-1/2 pointer-events-none text-[#6B7280] text-[12px]">▾</div>
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full p-[17px] mt-3 rounded-full bg-gradient-to-br from-[#9A7A2E] via-[#C9A84C] to-[#E8C76A] text-black font-display font-bold text-[13px] tracking-[0.15em] uppercase shadow-[0_6px_28px_rgba(201,168,76,0.28)] hover:-translate-y-[2px] hover:shadow-[0_10px_40px_rgba(201,168,76,0.46)] transition-all">
                Submit Application
              </button>
              <p className="text-center mt-[18px] text-[12px] text-white/20 leading-[1.7]">
                By submitting this form, you agree to our Terms of Service and Privacy Policy. All information is kept strictly confidential.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
