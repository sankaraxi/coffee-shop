import React, { useState } from 'react';
import { Mountain, Droplets, Flame, Sparkles, ShoppingBag, Check } from 'lucide-react';
import CoffeeArtwork from './CoffeeArtwork';
import { BEAN_ORIGINS } from '../data/coffeeData';

export default function OriginExplorer({ onAddBeanBag, onSelectDrinkWithBean }) {
  const [activeOriginId, setActiveOriginId] = useState(BEAN_ORIGINS[0].id);

  const activeOrigin = BEAN_ORIGINS.find(b => b.id === activeOriginId) || BEAN_ORIGINS[0];

  return (
    <section className="py-16 bg-[#FBF9F5] border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#EAE3D9]">
          <div>
            <div className="text-xs font-mono tracking-wider uppercase text-[#9C6237] mb-2 font-medium">
              Direct Trade · Sustainable Micro-Lots
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#241E19]">
              Single Origin Harvests &amp; Profiles
            </h2>
          </div>
          <p className="text-sm text-[#6B5E52] max-w-md">
            Sourced transparently through long-term relationships with washing stations and regenerative coffee estates across three continents.
          </p>
        </div>

        {/* Origin Selector Ribbon (Buttons, not pills) */}
        <div className="pt-8 pb-8 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {BEAN_ORIGINS.map((bean) => {
            const isSelected = activeOriginId === bean.id;
            return (
              <button
                key={bean.id}
                onClick={() => setActiveOriginId(bean.id)}
                className={`px-4 py-2.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#241E19] text-[#FBF9F5] shadow-sm font-semibold'
                    : 'bg-white text-[#524436] border border-[#D5C8BC] hover:bg-[#F2ECE4]'
                }`}
              >
                {bean.name}
              </button>
            );
          })}
        </div>

        {/* Feature Layout for Selected Origin */}
        <div className="bg-white border border-[#E8DFC8] rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Origin Bag & Visual Artwork */}
            <div className="lg:col-span-5">
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-inner border border-[#EAE3D9] relative">
                <CoffeeArtwork type="beans" className="w-full h-full" />
                <div className="absolute top-3 left-3 bg-[#1F1914]/85 text-[#FBF9F5] px-2.5 py-1 rounded text-xs font-mono tracking-wider">
                  {activeOrigin.bagWeight}
                </div>
              </div>
            </div>

            {/* Right: Technical Origin Specifications & Tasting Notes */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#9C6237] mb-1">
                  <span>{activeOrigin.region}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeOrigin.harvest}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#241E19]">
                  {activeOrigin.name}
                </h3>
                <p className="text-xs text-[#7A6A5C] mt-1 font-mono">
                  Producer: {activeOrigin.producer}
                </p>
              </div>

              {/* Prose Description */}
              <p className="text-sm text-[#615447] leading-relaxed">
                {activeOrigin.description}
              </p>

              {/* Tasting Notes as clean unboxed typography */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#736353] mb-2 font-medium">
                  Aromatic Cup Notes
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeOrigin.flavorNotes.map((note, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#FAF6F0] border border-[#EAE3D9] text-[#4A3E33] rounded-md text-xs font-medium"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Micro-Lot Technical Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 border-t border-[#F2ECE4]">
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#8A7563] flex items-center gap-1">
                    <Mountain className="w-3.5 h-3.5 text-[#9C6237]" /> Elevation
                  </span>
                  <p className="text-xs font-semibold text-[#241E19] mt-0.5 font-mono">
                    {activeOrigin.altitude}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase text-[#8A7563] flex items-center gap-1">
                    <Droplets className="w-3.5 h-3.5 text-[#9C6237]" /> Process
                  </span>
                  <p className="text-xs font-semibold text-[#241E19] mt-0.5">
                    {activeOrigin.process}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase text-[#8A7563] flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-[#9C6237]" /> Roast Profile
                  </span>
                  <p className="text-xs font-semibold text-[#241E19] mt-0.5">
                    {activeOrigin.roastLevel}
                  </p>
                </div>
              </div>

              {/* Buy Bag Action Row */}
              <div className="pt-4 border-t border-[#F2ECE4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#7A6A5C] font-mono block">Retail Valve Bag</span>
                  <span className="font-mono text-2xl font-semibold tabular-nums text-[#241E19]">
                    ${activeOrigin.pricePerBag.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => onAddBeanBag(activeOrigin)}
                    className="flex-1 sm:flex-initial px-6 py-3 bg-[#241E19] text-[#FBF9F5] text-xs font-medium rounded-lg hover:bg-[#3D322B] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#D5C0A8]" />
                    <span>Add Whole Bean Bag</span>
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
