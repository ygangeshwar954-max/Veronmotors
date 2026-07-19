import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';
import { Search, ArrowLeft, ArrowRight, Zap, Gauge } from 'lucide-react';
import { cars } from '@/data/cars';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Reveal from '@/components/Reveal';

const filters = ['All Models', 'Supercar', 'Hypercar', 'Grand Tourer', 'Luxury SUV', 'Roadster'];

export default function Cars() {
  const [, navigate] = useLocation();
  const [activeFilter, setActiveFilter] = useState('All Models');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('default');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = [...cars];
    if (activeFilter !== 'All Models') list = list.filter(c => c.category === activeFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.maker.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
      );
    }
    if (sort === 'price-asc') list.sort((a, b) => a.priceRaw - b.priceRaw);
    if (sort === 'price-desc') list.sort((a, b) => b.priceRaw - a.priceRaw);
    if (sort === 'hp') list.sort((a, b) => parseInt(b.hp) - parseInt(a.hp));
    return list;
  }, [activeFilter, search, sort]);

  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />

      {/* Page Header */}
      <div className="relative pt-36 pb-20 px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(201,168,76,0.07),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 79px,rgba(255,255,255,0.4) 79px,rgba(255,255,255,0.4) 80px),repeating-linear-gradient(90deg,transparent,transparent 79px,rgba(255,255,255,0.4) 79px,rgba(255,255,255,0.4) 80px)' }}
        />
        <div className="relative z-10 max-w-[1280px] mx-auto">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-[#C9A84C] font-display text-[11px] font-semibold tracking-[0.2em] uppercase mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </button>
          <Reveal direction="up" delay={0.05} duration={0.7}>
            <span className="block font-display text-[11px] font-semibold tracking-[0.3em] uppercase text-[#C9A84C] mb-3">
              Full Catalogue
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.14} duration={0.85}>
            <h1 className="font-display text-[clamp(36px,5vw,72px)] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
              The Complete<br />
              <span className="text-gold-shimmer">Collection</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.22} duration={0.75}>
            <p className="text-[15px] text-white/40 max-w-[500px] leading-[1.8]">
              {cars.length} exceptional machines. Each hand-selected for those who refuse to compromise.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Controls */}
      <div className="sticky top-[70px] z-40 bg-[#080808]/95 backdrop-blur-xl border-b border-white/[0.06] px-6 md:px-20 py-4">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          {/* Search */}
          <div className="relative w-full md:w-[280px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by name or brand…"
              className="w-full pl-9 pr-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-full font-display text-[12px] tracking-[0.04em] text-white placeholder:text-white/30 focus:outline-none focus:border-[#C9A84C]/40 transition-colors"
            />
          </div>

          {/* Filter tabs — horizontally scrollable on mobile */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none flex-nowrap md:flex-wrap">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`shrink-0 min-h-[44px] px-4 py-2 rounded-full font-display text-[10px] font-bold tracking-[0.12em] uppercase transition-all ${
                  activeFilter === f
                    ? 'bg-[#C9A84C] text-black shadow-[0_4px_16px_rgba(201,168,76,0.3)]'
                    : 'bg-white/[0.04] border border-white/[0.08] text-white/50 hover:text-white hover:border-[#C9A84C]/40'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="w-full md:w-auto min-h-[44px] px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-full font-display text-[11px] tracking-[0.06em] text-white/60 focus:outline-none focus:border-[#C9A84C]/40 cursor-pointer appearance-none pr-8 transition-colors"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23C9A84C'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
          >
            <option value="default">Default Order</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="hp">Highest Power</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-20 py-14 max-w-[1280px] mx-auto">
        <Reveal direction="none" delay={0} duration={0.5} tilt={false}>
          <div className="text-[12px] text-white/30 font-display tracking-[0.1em] uppercase mb-8">
            {filtered.length} vehicle{filtered.length !== 1 ? 's' : ''} found
          </div>
        </Reveal>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filtered.map((car, i) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                onClick={() => navigate(`/cars/${car.slug}`)}
                className="group bg-white/[0.03] border border-white/[0.07] rounded-[18px] overflow-hidden cursor-pointer hover:border-[#C9A84C]/30 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(0,0,0,0.7),0_0_40px_rgba(201,168,76,0.07)] transition-all duration-400 relative"
              >
                {/* Image */}
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={car.img}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    style={{ '--tw-scale-x': 1, '--tw-scale-y': 1 } as React.CSSProperties}
                    onError={e => { (e.target as HTMLImageElement).src = '/images/car-9.jpg'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
                  {car.isNew && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full border border-[#C9A84C]/50 bg-[#C9A84C]/10 font-display text-[9px] font-bold tracking-[0.2em] uppercase text-[#E8C76A]">
                      New
                    </div>
                  )}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 font-display text-[9px] font-semibold tracking-[0.1em] uppercase text-white/60">
                    {car.category}
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="font-display text-[9.5px] tracking-[0.22em] uppercase text-[#6B7280] mb-1.5">
                    {car.maker} · {car.year}
                  </div>
                  <div className="font-display text-[17px] font-bold tracking-[-0.01em] leading-[1.2] mb-4 group-hover:text-[#E8C76A] transition-colors">
                    {car.name}
                  </div>

                  <div className="flex gap-2 mb-4">
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      <Zap className="w-3 h-3 text-[#C9A84C]" />
                      <span className="font-display text-[10px] text-white/50">{car.hp}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      <Gauge className="w-3 h-3 text-[#C9A84C]" />
                      <span className="font-display text-[10px] text-white/50">0–100 {car.acceleration}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                    <div>
                      <div className="font-display text-[9px] text-[#6B7280] tracking-[0.1em] uppercase mb-0.5">From</div>
                      <div className="font-display text-[18px] font-extrabold text-[#E8C76A] tracking-[-0.02em]">{car.price}</div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#9A7A2E] to-[#C9A84C] flex items-center justify-center shadow-[0_4px_16px_rgba(201,168,76,0.25)] group-hover:scale-110 group-hover:shadow-[0_6px_24px_rgba(201,168,76,0.4)] transition-all">
                      <ArrowRight className="w-3.5 h-3.5 text-black" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-32">
            <div className="text-white/20 font-display text-[14px] tracking-[0.15em] uppercase mb-3">No vehicles found</div>
            <button
              onClick={() => { setSearch(''); setActiveFilter('All Models'); }}
              className="text-[#C9A84C] font-display text-[11px] tracking-[0.15em] uppercase underline underline-offset-4"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
