import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Settings } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const coverflowCars = [
  { id: 1, name: "Ferrari 296 GTB", maker: "Ferrari", year: 2023, price: "$338,255", hp: "819 HP", acceleration: "2.9s", engine: "V6 Hybrid", img: "/images/car-9.jpg", isNew: true },
  { id: 2, name: "Lamborghini Huracán EVO", maker: "Lamborghini", year: 2022, price: "$261,274", hp: "631 HP", acceleration: "2.9s", engine: "V10", img: "/images/car-5.jpg" },
  { id: 3, name: "Porsche 911 GT3 RS", maker: "Porsche", year: 2024, price: "$223,800", hp: "518 HP", acceleration: "3.0s", engine: "Flat-6", img: "/images/car-6.jpg", isNew: true },
  { id: 4, name: "McLaren 720S Spider", maker: "McLaren", year: 2023, price: "$315,000", hp: "710 HP", acceleration: "2.8s", engine: "V8 Twin-Turbo", img: "/images/car-7.jpg" },
  { id: 5, name: "Aston Martin DB12 Volante", maker: "Aston Martin", year: 2024, price: "$265,000", hp: "671 HP", acceleration: "3.6s", engine: "V8 Twin-Turbo", img: "/images/car-8.jpg" },
  { id: 6, name: "Bentley Continental GT Speed", maker: "Bentley", year: 2023, price: "$288,500", hp: "650 HP", acceleration: "3.5s", engine: "W12", img: "/images/car-10.jpg" },
  { id: 7, name: "Rolls-Royce Wraith Black Badge", maker: "Rolls-Royce", year: 2022, price: "$380,000", hp: "624 HP", acceleration: "4.3s", engine: "V12", img: "/images/car-11.jpg" },
  { id: 8, name: "Bugatti Chiron Pur Sport", maker: "Bugatti", year: 2021, price: "$3,600,000", hp: "1500 HP", acceleration: "2.3s", engine: "W16 Quad-Turbo", img: "/images/car-12.jpg" },
];

export default function Collection() {

  return (
    <section id="collection" className="relative pt-32 pb-20 bg-[#080808] overflow-hidden">
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(201,168,76,0.055)_0%,transparent_68%)] blur-[80px] pointer-events-none" />
      <div className="absolute top-[10%] -left-[10%] w-[500px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(201,168,76,0.03)_0%,transparent_68%)] blur-[60px] pointer-events-none" />
      <div className="absolute top-[10%] -right-[10%] w-[500px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(201,168,76,0.03)_0%,transparent_68%)] blur-[60px] pointer-events-none" />

      {/* Coverflow Header */}
      <div className="relative z-10 text-center mb-16 px-6 md:px-16">
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
          className="font-display text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.025em] leading-[1.08] mb-4"
        >
          Featured Masterpieces
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[15px] text-white/40 max-w-[440px] mx-auto leading-[1.8]"
        >
          A selection of the rarest, most capable vehicles ever produced. Each a pinnacle of automotive engineering.
        </motion.p>
        <div className="w-16 h-px mx-auto mt-5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
      </div>

      {/* Coverflow Slider */}
      <div className="relative z-10 w-full py-10 pb-20">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
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
            <SwiperSlide key={car.id} className="!w-[340px] !transition-all !duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group">
              {({ isActive }) => (
                <div className={`w-[340px] rounded-[22px] overflow-hidden bg-[#1A1A1A] border ${isActive ? 'border-[#C9A84C]/30 shadow-[0_24px_72px_rgba(0,0,0,0.8),0_0_0_1px_rgba(201,168,76,0.18),inset_0_1px_0_rgba(255,255,255,0.1)]' : 'border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]'} transition-all duration-400 ease-out pb-0 cursor-pointer relative`}>
                  <div className="relative h-[220px] overflow-hidden">
                    <img src={car.img} alt={car.name} className={`w-full h-full object-cover transition-transform duration-[650ms] ${isActive ? 'scale-105' : 'scale-100'}`} />
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

                  <div className="px-[22px] pt-5">
                    <div className="font-display text-[9.5px] font-semibold tracking-[0.26em] uppercase text-[#6B7280] mb-1.5">
                      {car.maker} • {car.year}
                    </div>
                    <div className="font-display text-[19px] font-extrabold tracking-[-0.015em] leading-[1.15] mb-4">
                      {car.name}
                    </div>

                    <div className="flex gap-[7px] flex-wrap mb-[18px]">
                      <div className="flex items-center gap-[5px] px-[12px] py-[5px] rounded-full border border-white/5 bg-white/[0.03] font-display text-[9.5px] font-semibold tracking-[0.08em] text-white/50">
                        <Settings className="w-[10px] h-[10px] opacity-55" /> {car.hp}
                      </div>
                      <div className="flex items-center gap-[5px] px-[12px] py-[5px] rounded-full border border-white/5 bg-white/[0.03] font-display text-[9.5px] font-semibold tracking-[0.08em] text-white/50">
                        <Calendar className="w-[10px] h-[10px] opacity-55" /> 0-100 {car.acceleration}
                      </div>
                      <div className="flex items-center gap-[5px] px-[12px] py-[5px] rounded-full border border-white/5 bg-white/[0.03] font-display text-[9.5px] font-semibold tracking-[0.08em] text-white/50">
                        {car.engine}
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-white/5 mx-0" />

                  <div className="flex items-center justify-between px-[22px] py-4 pb-5">
                    <div>
                      <div className="font-display text-[9px] tracking-[0.14em] uppercase text-[#6B7280] mb-1">
                        Starting from
                      </div>
                      <div className="font-display text-[22px] font-extrabold tracking-[-0.02em] text-[#E8C76A]">
                        {car.price}
                      </div>
                    </div>
                    <button className="w-[42px] h-[42px] rounded-full bg-gradient-to-br from-[#9A7A2E] to-[#C9A84C] flex items-center justify-center shadow-[0_4px_18px_rgba(201,168,76,0.3)] hover:scale-110 hover:shadow-[0_8px_28px_rgba(201,168,76,0.52)] transition-all">
                      <ArrowRight className="w-3.5 h-3.5 text-black" strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="cf-pagination flex justify-center mt-7 swiper-pagination !static" />
      </div>

    </section>
  );
}
