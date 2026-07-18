export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-20 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full border-[1.5px] border-[#C9A84C] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#C9A84C]">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="font-display font-extrabold text-[15px] tracking-[0.18em] uppercase">Veyron</span>
            </div>
            <p className="text-[13px] leading-[1.8] text-white/40 max-w-[240px] mb-8">
              The premier destination for sourcing, acquiring, and managing the world's most significant automotive assets.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all">in</a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all">ig</a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all">tw</a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-[11px] font-bold tracking-[0.2em] uppercase text-white mb-6">Inventory</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[13px] text-white/50 hover:text-[#C9A84C] transition-colors">Hypercars</a></li>
              <li><a href="#" className="text-[13px] text-white/50 hover:text-[#C9A84C] transition-colors">Supercars</a></li>
              <li><a href="#" className="text-[13px] text-white/50 hover:text-[#C9A84C] transition-colors">Luxury SUVs</a></li>
              <li><a href="#" className="text-[13px] text-white/50 hover:text-[#C9A84C] transition-colors">Classics & Vintage</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-[11px] font-bold tracking-[0.2em] uppercase text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[13px] text-white/50 hover:text-[#C9A84C] transition-colors">Vehicle Sourcing</a></li>
              <li><a href="#" className="text-[13px] text-white/50 hover:text-[#C9A84C] transition-colors">Consignment</a></li>
              <li><a href="#" className="text-[13px] text-white/50 hover:text-[#C9A84C] transition-colors">Collection Management</a></li>
              <li><a href="#" className="text-[13px] text-white/50 hover:text-[#C9A84C] transition-colors">Global Logistics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-[11px] font-bold tracking-[0.2em] uppercase text-white mb-6">Showrooms</h4>
            <ul className="space-y-4">
              <li className="text-[13px] text-white/50">Beverly Hills, CA</li>
              <li className="text-[13px] text-white/50">Miami, FL</li>
              <li className="text-[13px] text-white/50">Dubai, UAE</li>
              <li className="text-[13px] text-white/50">London, UK</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[12px] text-white/20 tracking-[0.04em]">
            &copy; {new Date().getFullYear()} Veyron Motors. All rights reserved.
          </div>
          <div className="flex gap-7">
            <a href="#" className="font-display text-[10px] font-medium tracking-[0.12em] uppercase text-white/20 hover:text-[#C9A84C] transition-colors">Privacy Policy</a>
            <a href="#" className="font-display text-[10px] font-medium tracking-[0.12em] uppercase text-white/20 hover:text-[#C9A84C] transition-colors">Terms of Service</a>
            <a href="#" className="font-display text-[10px] font-medium tracking-[0.12em] uppercase text-white/20 hover:text-[#C9A84C] transition-colors">Legal Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
