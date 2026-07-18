import { motion } from 'framer-motion';

export default function Brands() {
  const brands = ['LAMBORGHINI', 'FERRARI', 'ASTON MARTIN', 'ROLLS-ROYCE', 'BENTLEY', 'McLAREN'];
  
  return (
    <section id="brands" className="py-10 bg-[#080808] border-y border-white/5">
      <div className="container mx-auto px-6 md:px-20 max-w-[1280px]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 flex-wrap">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-[10px] tracking-[0.26em] uppercase text-white/20 md:mr-7 whitespace-nowrap"
          >
            Authorized Dealer
          </motion.div>
          <div className="flex flex-wrap justify-center items-center">
            {brands.map((brand, i) => (
              <motion.div 
                key={brand}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-5 py-2 font-display font-bold text-[12px] tracking-[0.13em] text-white/20 hover:text-[#C9A84C]/70 transition-colors border-r border-white/5 last:border-0 cursor-default"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
