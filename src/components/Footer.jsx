import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#241E19] text-[#FBF9F5] border-t border-[#382F27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-xl font-serif font-medium text-[#FBF9F5] tracking-tight block">
              Atelier Coffee Roasters
            </span>
            <p className="text-xs text-[#B3A190] leading-relaxed max-w-sm">
              Artisanal specialty coffee roastery and espresso laboratory based in the Pacific Northwest. Dedicated to transparent micro-lot sourcing, respectful roasting, and patient hospitality.
            </p>
            <p className="text-[11px] font-mono text-[#8C7A6B] pt-2">
              Loring S15 Kestrel · Synesso MVP Hydra · Hario &amp; Chemex Slow Bar
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#D5C0A8] block">
              Explore &amp; Order
            </span>
            <div className="flex flex-col space-y-1.5 text-xs text-[#C5B7A8]">
              <button
                onClick={() => onNavigate('menu')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Seasonal Drink &amp; Bakery Menu
              </button>
              <button
                onClick={() => onNavigate('origins')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Single Origin Micro-Lots
              </button>
              <button
                onClick={() => onNavigate('brew-guide')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Pour-Over Ratio Calculator &amp; Timer
              </button>
              <button
                onClick={() => onNavigate('workshops')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Weekend Cupping Sessions
              </button>
            </div>
          </div>

          {/* Store Hours & Location summary */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#D5C0A8] block">
              Roastery &amp; Espresso Bar
            </span>
            <p className="text-xs text-[#C5B7A8]">
              412 Artisan Alley, Historic Mill District, Portland OR
            </p>
            <p className="text-xs text-[#8C7A6B] font-mono">
              Mon – Fri: 6:30 AM – 6:00 PM · Weekends: 7:30 AM – 6:30 PM
            </p>
            <div className="pt-2 text-[11px] text-[#8C7A6B]">
              Direct line: (503) 847-2914
            </div>
          </div>

        </div>

        {/* Quiet copyright bar */}
        <div className="mt-12 pt-6 border-t border-[#382F27] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7A6B]">
          <p>© {new Date().getFullYear()} Atelier Coffee Roasters. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>100% Direct Trade Certified</span>
            <span>·</span>
            <span>Compostable Plant-Fiber Cups</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
