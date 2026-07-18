export default function Ticker() {
  const brands = ['Ferrari', 'Lamborghini', 'McLaren', 'Porsche', 'Bugatti', 'Aston Martin', 'Rolls-Royce', 'Bentley', 'Koenigsegg', 'Pagani'];
  
  return (
    <div className="overflow-hidden bg-[#111111] border-y border-white/5 py-4 whitespace-nowrap">
      <div className="inline-flex gap-0 animate-[ticker_26s_linear_infinite]">
        {[...brands, ...brands, ...brands].map((brand, i) => (
          <div key={i} className="inline-flex items-center gap-[18px] px-9 font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-white/20">
            {brand}
            <div className="w-1 h-1 rounded-full bg-[#C9A84C] shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
