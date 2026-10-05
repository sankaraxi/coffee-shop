import React from 'react';
import { ArrowRight, Clock, MapPin, Compass, Flame } from 'lucide-react';
import CoffeeArtwork from './CoffeeArtwork';

export default function Hero({ onExploreMenu, onExploreOrigins, onOpenRituals }) {
  return (
    <section className="relative border-b border-[#EAE3D9] bg-[#F7F3EC] overflow-hidden">
      {/* Background subtle grain and warm ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(196,154,108,0.14),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Brand & Action */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Clean, unboxed metadata indicator */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#8A7563] mb-4">
              <span className="flex items-center gap-1.5 text-[#9C6237] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                Espresso Bar & Roastery Open Now
              </span>
              <span aria-hidden="true">·</span>
              <span>Historic Mill District</span>
              <span aria-hidden="true">·</span>
              <span>412 Artisan Alley</span>
            </div>

            {/* Headline with balanced wrap */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#241E19] leading-[1.12] tracking-tight mb-6 max-w-2xl">
              Slow Craft, Single Origins &amp; Daily Rituals.
            </h1>

            {/* Body prose */}
            <p className="text-base sm:text-lg text-[#615447] leading-relaxed mb-8 max-w-xl">
              We roast micro-lots on a vintage cast iron Loring in small batches. 
              From delicate washed Ethiopian florals to velvety Colombian Bourbon lattes, 
              every cup is extracted with laboratory precision and sincere warmth.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#241E19] text-[#FBF9F5] text-sm font-medium rounded-lg hover:bg-[#3D332B] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
              >
                <span>Order for Pickup or Table</span>
                <ArrowRight className="w-4 h-4 text-[#D5C0A8] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenRituals}
                className="w-full sm:w-auto px-5 py-3.5 border border-[#D5C8BC] text-[#3D322A] text-sm font-medium rounded-lg hover:bg-[#EFE9E0] transition-colors flex items-center justify-center gap-2 cursor-pointer bg-white/60"
              >
                <Compass className="w-4 h-4 text-[#8C6D53]" />
                <span>Pour-Over Ratio Timer</span>
              </button>
            </div>

            {/* Proof point metrics adjacent to hero claim */}
            <div className="mt-12 pt-8 border-t border-[#E5DCDB] grid grid-cols-3 gap-6 sm:gap-8 w-full max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-serif text-[#241E19] font-normal tabular-nums">
                  2,150<span className="text-base font-sans text-[#8C6D53]">m</span>
                </p>
                <p className="text-xs text-[#7A6A5C] mt-1">Highest Origin Elevation</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif text-[#241E19] font-normal tabular-nums">
                  48<span className="text-base font-sans text-[#8C6D53]">h</span>
                </p>
                <p className="text-xs text-[#7A6A5C] mt-1">Laminated Poolish Pastry</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif text-[#241E19] font-normal tabular-nums">
                  100<span className="text-base font-sans text-[#8C6D53]">%</span>
                </p>
                <p className="text-xs text-[#7A6A5C] mt-1">Direct Trade Micro-Lots</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Feature Spotlight Showcase */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFFFF] border border-[#E8DFC8]/80 rounded-2xl p-4 sm:p-5 shadow-sm relative">
              
              {/* Product Visual Container with Zero-Broken-Image Policy */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-inner mb-4 relative group">
                <CoffeeArtwork type="pourover" className="w-full h-full" />
                <div className="absolute top-3 left-3 bg-[#1F1914]/85 text-[#FBF9F5] px-2.5 py-1 rounded text-xs font-mono tracking-wider">
                  Today's Featured Lot
                </div>
              </div>

              {/* Showcase Card Details */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#9C6237] tracking-wider uppercase">
                    Slow Bar Pour-Over
                  </span>
                  <span className="text-sm font-semibold font-mono tabular-nums text-[#241E19]">
                    $6.75
                  </span>
                </div>

                <h3 className="text-lg font-serif font-medium text-[#241E19]">
                  Ethiopia Guji Uraga · Natural Process
                </h3>

                <p className="text-xs text-[#6B5E52] leading-relaxed">
                  Brewed on ceramic Hario V60 at 93°C. Luminous aromatics of white peach, bergamot citrus, and sweet honeysuckle blossom.
                </p>

                <div className="pt-2 flex items-center justify-between text-xs text-[#827161] border-t border-[#F2ECE4]">
                  <span className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#9C6237]" />
                    Roasted 3 days ago
                  </span>
                  <button
                    onClick={onExploreOrigins}
                    className="text-[#9C6237] hover:text-[#7A4B27] font-medium hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    View Origin Story &rarr;
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
