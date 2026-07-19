import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Settings, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination, Keyboard } from 'swiper/modules';
import { useLocation } from 'wouter';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { getCoverflowCars } from '@/data/cars';

const coverflowCars = getCoverflowCars();

// Responsive slide width — 88vw on phones, capped at 320px on tablets, 340px on desktop
const SLIDE_CLASS = '!w-[88vw] sm:!w-[320px] md:!w-[340px]';
const CARD_CLASS  = 'w-full';

export default function Collection() {
  const [, navigate] = useLocation();

  return (
    <section id="collection" className="relative pt-24 md:pt-32 pb-20 bg-[#080808] overflow-hidden">
      {/* Ambient glows — clamped so they don't cause overflow on small screens */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(900px,120vw)] h-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(201,168,76,0.055)_0%,transparent_68%)] blur-[80px] pointer-events-none" />
      <div className="absolute top-[10%] -left-[10%] w-[min(500px,70vw)] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(201,168,76,0.03)_0%,transparent_68%)] blur-[60px] pointer-events-none" />
      <div className="absolute top-[10%] -right-[10%] w-[min(500px,70vw)] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(201,168,76,0.03)_0%,transparent_68%)] blur-[60px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center mb-12 md:mb-16 px-6 md:px-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block font-display text-[11px] font-semibold tracking-[0.28em] uppercase text-[#C9A84C] mb-3.5"
        >
          Curated Perfection
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-[clamp(28px,5vw,52px)] font-extrabold tracking-[-0.025em] leading-[1.08] mb-4"
        >
          Featured Masterpieces
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[14px] md:text-[15px] text-white/40 max-w-[440px] mx-auto leading-[1.8] px-4"
        >
          A selection of the rarest, most capable vehicles ever produced. Each a pinnacle of automotive engineering.
        </motion.p>
        <div className="w-16 h-px mx-auto mt-5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
      </div>

      {/* Coverflow Slider */}
      <div className="relative z-10 w-full py-6 md:py-10 pb-20">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 28,
            stretch: 0,
            depth: 200,
            modifier: 1.2,
            slideShadows: false,
          }}
          speed={680}
          autoplay={{
            delay: 3800,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          keyboard={{ enabled: true }}
          modules={[EffectCoverflow, Autoplay, Pagination, Keyboard]}
          className="w-full"
        >
          {coverflowCars.map((car) => (
            <SwiperSlide key={car.id} className={`${SLIDE_CLASS} !transition-all !duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group`}>
              {({ isActive }) => (
                <div
                  onClick={() => navigate(`/cars/${car.slug}`)}
                  className={`${CARD_CLASS} rounded-[22px] overflow-hidden bg-[#1A1A1A] border cursor-pointer
                    ${isActive
                      ? 'border-[#C9A84C]/30 shadow-[0_24px_72px_rgba(0,0,0,0.8),0_0_0_1px_rgba(201,168,76,0.18),inset_0_1px_0_rgba(255,255,255,0.1)]'
                      : 'border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]'
                    } transition-all duration-400 ease-out relative`}
                >
                  <div className="relative h-[200px] sm:h-[220px] overflow-hidden">
                    <img
                      src={car.img}
                      alt={car.name}
                      className={`w-full h-full object-cover transition-transform duration-[650ms] ${isActive ? 'scale-105' : 'scale-100'}`}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#1A1A1A] to-transparent" />
                    <div className="absolute top-[14px] left-[14px] flex gap-[7px] flex-wrap">
                      {car.isNew && (
                        <div className="px-[13px] py-1 rounded-full font-display text-[9px] font-bold tracking-[0.18em] uppercase border border-[#C9A84C]/50 bg-[#C9A84C]/10 text-[#E8C76A]">
                          New Arrival
                        </div>
                      )}
                      <div className="px-[13px] py-1 rounded-full font-display text-[9px] font-bold tracking-[0.18em] uppercase border border-white/10 bg-black/50 backdrop-blur-sm text-white/80">
                        Automatic
                      </div>
                    </div>
                    <div className="absolute top-[14px] right-[14px] flex items-center gap-1.5 px-[12px] py-[5px] rounded-full bg-black/55 backdrop-blur-sm border border-white/10">
                      <div className="w-[5px] h-[5px] rounded-full bg-[#4ADE80] shadow-[0_0_6px_#4ADE80]" />
                      <span className="font-display text-[8px] font-semibold tracking-[0.14em] uppercase text-white/55">Available</span>
                    </div>
                  </div>

                  <div className="px-[18px] sm:px-[22px] pt-5">
                    <div className="font-display text-[9.5px] font-semibold tracking-[0.26em] uppercase text-[#6B7280] mb-1.5">
                      {car.maker} • {car.year}
                    </div>
                    <div className="font-display text-[17px] sm:text-[19px] font-extrabold tracking-[-0.015em] leading-[1.15] mb-4">
                      {car.name}
                    </div>
                    <div className="flex gap-[7px] flex-wrap mb-[18px]">
                      <div className="flex items-center gap-[5px] px-[10px] sm:px-[12px] py-[5px] rounded-full border border-white/5 bg-white/[0.03] font-display text-[9.5px] font-semibold tracking-[0.08em] text-white/50">
                        <Settings className="w-[10px] h-[10px] opacity-55" /> {car.hp}
                      </div>
                      <div className="flex items-center gap-[5px] px-[10px] sm:px-[12px] py-[5px] rounded-full border border-white/5 bg-white/[0.03] font-display text-[9.5px] font-semibold tracking-[0.08em] text-white/50">
                        <Calendar className="w-[10px] h-[10px] opacity-55" /> 0-100 {car.acceleration}
                      </div>
                      <div className="flex items-center gap-[5px] px-[10px] sm:px-[12px] py-[5px] rounded-full border border-white/5 bg-white/[0.03] font-display text-[9.5px] font-semibold tracking-[0.08em] text-white/50">
                        {car.engine}
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-white/5 mx-0" />

                  <div className="flex items-center justify-between px-[18px] sm:px-[22px] py-4 pb-5">
                    <div>
                      <div className="font-display text-[9px] tracking-[0.14em] uppercase text-[#6B7280] mb-1">Starting from</div>
                      <div className="font-display text-[20px] sm:text-[22px] font-extrabold tracking-[-0.02em] text-[#E8C76A]">{car.price}</div>
                    </div>
                    <button className="w-[42px] h-[42px] rounded-full bg-gradient-to-br from-[#9A7A2E] to-[#C9A84C] flex items-center justify-center shadow-[0_4px_18px_rgba(201,168,76,0.3)] hover:scale-110 hover:shadow-[0_8px_28px_rgba(201,168,76,0.52)] transition-all">
                      <ArrowRight className="w-3.5 h-3.5 text-black" strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}

          {/* View More card */}
          <SwiperSlide className={SLIDE_CLASS}>
            {({ isActive }) => (
              <div
                onClick={() => navigate('/cars')}
                className={`${CARD_CLASS} min-h-[380px] sm:min-h-[420px] rounded-[22px] overflow-hidden border cursor-pointer flex flex-col items-center justify-center gap-6 relative group
                  ${isActive
                    ? 'border-[#C9A84C]/40 shadow-[0_24px_72px_rgba(0,0,0,0.8),0_0_0_1px_rgba(201,168,76,0.2)]'
                    : 'border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.5)]'}
                  bg-gradient-to-b from-[#1A1A1A] to-[#111] transition-all duration-400`}
              >
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.5) 39px,rgba(255,255,255,0.5) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.5) 39px,rgba(255,255,255,0.5) 40px)' }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_55%,rgba(201,168,76,0.07),transparent)] pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center gap-5 px-8 text-center">
                  <div className={`w-20 h-20 rounded-full border-2 flex items-center justify-center transition-all duration-400
                    ${isActive ? 'border-[#C9A84C] shadow-[0_0_32px_rgba(201,168,76,0.3)]' : 'border-white/15 group-hover:border-[#C9A84C]/60'}
                    bg-gradient-to-br from-white/[0.04] to-white/[0.02]`}
                  >
                    <ChevronRight className={`w-7 h-7 transition-colors duration-300 ${isActive ? 'text-[#E8C76A]' : 'text-white/40 group-hover:text-[#C9A84C]'}`} strokeWidth={1.5} />
                  </div>

                  <div>
                    <div className="font-display text-[10px] font-semibold tracking-[0.28em] uppercase text-[#C9A84C] mb-2">
                      Full Catalogue
                    </div>
                    <div className="font-display text-[20px] sm:text-[22px] font-extrabold tracking-[-0.015em] leading-[1.2] text-white mb-3">
                      View All<br />Vehicles
                    </div>
                    <p className="text-[12px] text-white/35 leading-[1.75]">
                      Explore our complete collection of 24+ extraordinary machines.
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/[0.08] font-display text-[10px] font-bold tracking-[0.16em] uppercase text-[#E8C76A] group-hover:bg-[#C9A84C]/15 group-hover:border-[#C9A84C]/60 transition-all">
                    Browse All <ArrowRight className="w-3 h-3" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        </Swiper>
        <div className="cf-pagination flex justify-center mt-7 swiper-pagination !static" />
      </div>
    </section>
  );
}
