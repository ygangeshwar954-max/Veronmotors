import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Zap, Gauge, Wind, Settings2, Layers,
  Navigation2, CheckCircle2, Calendar, ChevronLeft, ChevronRight, Phone, Mail
} from 'lucide-react';
import { getCarBySlug, cars } from '@/data/cars';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CarDetail() {
  const params = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const car = getCarBySlug(params.slug);
  const [activeImg, setActiveImg] = useState(0);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveImg(0);
  }, [params.slug]);

  if (!car) {
    return (
      <div className="min-h-screen bg-[#080808] flex flex-col items-center justify-center gap-6">
        <Navbar />
        <div className="font-display text-[14px] tracking-[0.2em] uppercase text-white/30">Vehicle not found</div>
        <button onClick={() => navigate('/cars')} className="text-[#C9A84C] font-display text-[11px] uppercase tracking-[0.15em] underline underline-offset-4">
          Back to Collection
        </button>
      </div>
    );
  }

  const related = cars.filter(c => c.maker === car.maker && c.id !== car.id).slice(0, 3);

  const specs = [
    { icon: Zap, label: 'Power Output', value: car.hp },
    { icon: Gauge, label: '0–100 km/h', value: car.acceleration },
    { icon: Wind, label: 'Top Speed', value: car.topSpeed },
    { icon: Settings2, label: 'Engine', value: car.engine },
    { icon: Layers, label: 'Transmission', value: car.transmission },
    { icon: Navigation2, label: 'Drivetrain', value: car.drive },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const prevImg = () => setActiveImg(i => (i - 1 + car.gallery.length) % car.gallery.length);
  const nextImg = () => setActiveImg(i => (i + 1) % car.gallery.length);

  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />

      {/* Hero Image */}
      <div className="relative h-[70vh] min-h-[520px] overflow-hidden">
        <AnimatedImage src={car.gallery[activeImg]} alt={car.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 to-transparent" />

        {/* Gallery nav */}
        {car.gallery.length > 1 && (
          <div className="absolute bottom-8 right-8 flex items-center gap-3 z-10">
            <button onClick={prevImg} className="w-10 h-10 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center hover:border-[#C9A84C]/50 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-display text-[11px] tracking-[0.2em] text-white/50">
              {activeImg + 1} / {car.gallery.length}
            </span>
            <button onClick={nextImg} className="w-10 h-10 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center hover:border-[#C9A84C]/50 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Thumbnails */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {car.gallery.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`w-12 h-1.5 rounded-full transition-all ${i === activeImg ? 'bg-[#C9A84C]' : 'bg-white/20 hover:bg-white/40'}`}
            />
          ))}
        </div>

        {/* Back button */}
        <button
          onClick={() => navigate('/cars')}
          className="absolute top-28 left-8 inline-flex items-center gap-2 text-white/60 hover:text-[#C9A84C] font-display text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors z-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> All Vehicles
        </button>

        {/* Hero text overlay */}
        <div className="absolute bottom-16 left-8 md:left-20 z-10">
          {car.isNew && (
            <div className="inline-block mb-3 px-4 py-1 rounded-full border border-[#C9A84C]/50 bg-[#C9A84C]/10 font-display text-[9px] font-bold tracking-[0.25em] uppercase text-[#E8C76A]">
              New Arrival
            </div>
          )}
          <div className="font-display text-[11px] tracking-[0.25em] uppercase text-[#C9A84C] mb-2">
            {car.maker} · {car.year} · {car.color}
          </div>
          <h1 className="font-display text-[clamp(32px,4.5vw,64px)] font-extrabold tracking-[-0.03em] leading-[1.05] text-white">
            {car.name}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 md:px-20 max-w-[1280px] mx-auto py-16">
        <div className="grid lg:grid-cols-[1fr_380px] gap-16">

          {/* Left column */}
          <div>
            {/* Price + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center justify-between gap-6 mb-12 pb-12 border-b border-white/[0.07]"
            >
              <div>
                <div className="font-display text-[10px] tracking-[0.2em] uppercase text-[#6B7280] mb-1">Starting Price</div>
                <div className="font-display text-[42px] font-extrabold tracking-[-0.03em] text-[#E8C76A]">{car.price}</div>
              </div>
              <div className="flex gap-3">
                <a
                  href="#enquire"
                  className="px-6 py-3 rounded-full bg-gradient-to-br from-[#9A7A2E] via-[#C9A84C] to-[#E8C76A] text-black font-display font-bold text-[11px] tracking-[0.12em] uppercase shadow-[0_4px_20px_rgba(201,168,76,0.28)] hover:-translate-y-[1px] hover:shadow-[0_8px_28px_rgba(201,168,76,0.44)] transition-all"
                >
                  Reserve This Vehicle
                </a>
                <a
                  href="#enquire"
                  className="px-6 py-3 rounded-full border border-white/10 text-white/60 font-display font-bold text-[11px] tracking-[0.12em] uppercase hover:border-[#C9A84C]/50 hover:text-white transition-all"
                >
                  Book a Viewing
                </a>
              </div>
            </motion.div>

            {/* Specs grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12"
            >
              <div className="font-display text-[11px] tracking-[0.28em] uppercase text-[#C9A84C] mb-6">
                Performance Specifications
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {specs.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-white/[0.03] border border-white/[0.07] rounded-[14px] p-5 hover:border-[#C9A84C]/20 transition-colors">
                    <Icon className="w-4 h-4 text-[#C9A84C] mb-3" />
                    <div className="font-display text-[9px] tracking-[0.18em] uppercase text-[#6B7280] mb-1.5">{label}</div>
                    <div className="font-display text-[17px] font-bold text-white">{value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mb-12"
            >
              <div className="font-display text-[11px] tracking-[0.28em] uppercase text-[#C9A84C] mb-5">
                About This Vehicle
              </div>
              <p className="text-[15px] text-white/55 leading-[1.9]">{car.description}</p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <div className="font-display text-[11px] tracking-[0.28em] uppercase text-[#C9A84C] mb-6">
                Standard Equipment
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {car.features.map(f => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                    <span className="text-[13px] text-white/60">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Gallery thumbnails */}
            {car.gallery.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mb-4"
              >
                <div className="font-display text-[11px] tracking-[0.28em] uppercase text-[#C9A84C] mb-5">
                  Gallery
                </div>
                <div className="flex gap-3">
                  {car.gallery.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => { setActiveImg(i); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className={`relative w-28 h-20 rounded-xl overflow-hidden border-2 transition-all ${i === activeImg ? 'border-[#C9A84C]' : 'border-white/10 hover:border-[#C9A84C]/40'}`}
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right column — Enquiry form */}
          <div>
            <motion.div
              id="enquire"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="sticky top-28 bg-white/[0.03] border border-white/[0.08] rounded-[22px] p-8"
            >
              {!formSent ? (
                <>
                  <div className="font-display text-[11px] tracking-[0.25em] uppercase text-[#C9A84C] mb-2">Private Enquiry</div>
                  <h3 className="font-display text-[22px] font-bold leading-[1.2] mb-1">{car.name}</h3>
                  <div className="font-display text-[13px] text-[#E8C76A] font-semibold mb-7">{car.price}</div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {[
                      { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                      { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                      { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 (000) 000-0000' },
                    ].map(({ id, label, type, placeholder }) => (
                      <div key={id}>
                        <label htmlFor={id} className="block font-display text-[10px] tracking-[0.18em] uppercase text-white/40 mb-1.5">{label}</label>
                        <input
                          id={id}
                          type={type}
                          required
                          placeholder={placeholder}
                          className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl font-display text-[13px] text-white placeholder:text-white/25 focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                        />
                      </div>
                    ))}
                    <div>
                      <label htmlFor="interest" className="block font-display text-[10px] tracking-[0.18em] uppercase text-white/40 mb-1.5">Interest</label>
                      <select
                        id="interest"
                        className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl font-display text-[13px] text-white/70 focus:outline-none focus:border-[#C9A84C]/50 transition-colors cursor-pointer"
                      >
                        <option value="purchase">Purchase</option>
                        <option value="reserve">Reserve &amp; Enquire</option>
                        <option value="viewing">Private Viewing</option>
                        <option value="finance">Finance Options</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block font-display text-[10px] tracking-[0.18em] uppercase text-white/40 mb-1.5">Message (optional)</label>
                      <textarea
                        id="message"
                        rows={3}
                        placeholder="Any specific requirements or questions…"
                        className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl font-display text-[13px] text-white placeholder:text-white/25 focus:outline-none focus:border-[#C9A84C]/50 transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-2 w-full py-3.5 rounded-xl bg-gradient-to-br from-[#9A7A2E] via-[#C9A84C] to-[#E8C76A] text-black font-display font-bold text-[12px] tracking-[0.16em] uppercase shadow-[0_4px_20px_rgba(201,168,76,0.25)] hover:shadow-[0_8px_32px_rgba(201,168,76,0.42)] hover:-translate-y-[1px] transition-all"
                    >
                      Submit Enquiry
                    </button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-white/[0.06] flex flex-col gap-3">
                    <a href="tel:+18005555555" className="flex items-center gap-3 text-[12px] text-white/40 hover:text-[#C9A84C] transition-colors font-display tracking-[0.04em]">
                      <Phone className="w-4 h-4" /> +1 800 555 5555
                    </a>
                    <a href="mailto:enquiries@veyronmotors.com" className="flex items-center gap-3 text-[12px] text-white/40 hover:text-[#C9A84C] transition-colors font-display tracking-[0.04em]">
                      <Mail className="w-4 h-4" /> enquiries@veyronmotors.com
                    </a>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <div className="font-display text-[18px] font-bold mb-2">Enquiry Received</div>
                  <p className="text-[13px] text-white/40 leading-[1.7] mb-6">Our specialist will contact you within 24 hours regarding the {car.name}.</p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="text-[#C9A84C] font-display text-[11px] uppercase tracking-[0.15em] underline underline-offset-4"
                  >
                    Submit another enquiry
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Related vehicles */}
        {related.length > 0 && (
          <div className="mt-24 pt-16 border-t border-white/[0.06]">
            <div className="font-display text-[11px] tracking-[0.28em] uppercase text-[#C9A84C] mb-2">More from {car.maker}</div>
            <h3 className="font-display text-[28px] font-bold mb-10">You may also like</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(rc => (
                <div
                  key={rc.id}
                  onClick={() => { navigate(`/cars/${rc.slug}`); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="group bg-white/[0.03] border border-white/[0.07] rounded-[18px] overflow-hidden cursor-pointer hover:border-[#C9A84C]/30 hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="relative h-[180px] overflow-hidden">
                    <img src={rc.img} alt={rc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="font-display text-[9.5px] tracking-[0.22em] uppercase text-[#6B7280] mb-1">{rc.maker} · {rc.year}</div>
                    <div className="font-display text-[16px] font-bold group-hover:text-[#E8C76A] transition-colors mb-2">{rc.name}</div>
                    <div className="font-display text-[15px] font-bold text-[#E8C76A]">{rc.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

function AnimatedImage({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.img
      key={src}
      src={src}
      alt={alt}
      initial={{ opacity: 0, scale: 1.04 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55 }}
      className="absolute inset-0 w-full h-full object-cover"
      onError={e => { (e.target as HTMLImageElement).src = '/images/car-9.jpg'; }}
    />
  );
}
