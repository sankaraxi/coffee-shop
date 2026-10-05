import React from 'react';

/**
 * High-fidelity, domain-native vector coffee visuals for product cards and details.
 * Implements the Zero-Broken-Image policy with beautiful styled fallbacks.
 */
export default function CoffeeArtwork({ type, id, className = "w-full h-full", compact = false }) {
  // Determine artwork theme based on drink or category
  const renderVisual = () => {
    switch (type) {
      case 'pourover':
        return (
          <div className={`relative w-full h-full bg-gradient-to-b from-[#2A231D] to-[#1E1915] flex items-center justify-center overflow-hidden ${className}`}>
            {/* Subtle radial warmth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(196,154,108,0.22),transparent_70%)]" />
            <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 max-w-[170px] drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Dripper Cone */}
              <path d="M60 40 H140 L115 105 H85 L60 40Z" fill="url(#ceramicGrad)" stroke="#E5D6C5" strokeWidth="2" strokeLinejoin="round" />
              {/* Filter Cone */}
              <path d="M64 42 H136 L112 100 H88 L64 42Z" fill="#F4EFEA" fillOpacity="0.85" />
              {/* Coffee Bed */}
              <path d="M72 58 Q100 68 128 58 L110 96 H90 L72 58Z" fill="#4A3425" />
              {/* Chemex / Carafe Base */}
              <path d="M82 110 H118 L142 165 C145 172 138 178 130 178 H70 C62 178 55 172 58 165 L82 110Z" fill="rgba(255,255,255,0.08)" stroke="#E5D6C5" strokeWidth="1.8" />
              {/* Brewed Amber Coffee Pool */}
              <path d="M65 162 C68 174 76 176 100 176 C124 176 132 174 135 162 L124 138 Q100 142 76 138 L65 162Z" fill="url(#coffeeAmberGrad)" fillOpacity="0.85" />
              {/* Rising Steam Curves */}
              <path d="M95 32 Q90 22 96 14" stroke="#D5C8BC" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              <path d="M106 35 Q112 25 106 16" stroke="#D5C8BC" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              {/* Wood Collar Collar Accent */}
              <rect x="83" y="106" width="34" height="6" rx="2" fill="#A87B51" stroke="#855832" strokeWidth="1" />
              {/* Defs */}
              <defs>
                <linearGradient id="ceramicGrad" x1="60" y1="40" x2="140" y2="105" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F8F5F0" />
                  <stop offset="1" stopColor="#D8CEC2" />
                </linearGradient>
                <linearGradient id="coffeeAmberGrad" x1="100" y1="135" x2="100" y2="176" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9C6237" />
                  <stop offset="1" stopColor="#4A2511" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-[#C49A6C] tracking-widest uppercase font-mono">
              <span>93°C Extraction</span>
              <span>1:16 Ratio</span>
            </div>
          </div>
        );

      case 'espresso':
        return (
          <div className={`relative w-full h-full bg-gradient-to-b from-[#251E19] to-[#181310] flex items-center justify-center overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(217,140,74,0.18),transparent_70%)]" />
            <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 max-w-[170px] drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Cup Saucer */}
              <ellipse cx="100" cy="162" rx="68" ry="14" fill="#3D322A" stroke="#C49A6C" strokeWidth="1.5" />
              <ellipse cx="100" cy="161" rx="52" ry="9" fill="#251E19" />
              {/* Ceramic Cup Body */}
              <path d="M56 100 C56 142 74 154 100 154 C126 154 144 142 144 100 H56Z" fill="url(#cupClayGrad)" stroke="#DFD5C6" strokeWidth="2" />
              {/* Cup Rim */}
              <ellipse cx="100" cy="100" rx="44" ry="12" fill="#EAE3D9" stroke="#DFD5C6" strokeWidth="1.5" />
              {/* Golden Crema Surface */}
              <ellipse cx="100" cy="101" rx="40" ry="10" fill="url(#cremaGrad)" />
              {/* Crema Swirl / Latte Heart Micro Detail */}
              <path d="M92 98 C92 95 96 94 100 97 C104 94 108 95 108 98 C108 103 100 106 100 106 C100 106 92 103 92 98 Z" fill="#F8F3EC" fillOpacity="0.85" />
              {/* Cup Handle */}
              <path d="M142 108 C158 108 166 118 166 128 C166 138 156 144 140 142" stroke="#DFD5C6" strokeWidth="5" strokeLinecap="round" fill="none" />
              {/* Subtle Roasted Beans Scattered on Table */}
              <ellipse cx="44" cy="160" rx="7" ry="5" fill="#4B3425" transform="rotate(-25 44 160)" />
              <path d="M42 157 Q44 160 46 163" stroke="#25170F" strokeWidth="1" />
              <ellipse cx="158" cy="158" rx="6" ry="4.5" fill="#583E2D" transform="rotate(35 158 158)" />
              {/* Steam */}
              <path d="M96 86 Q92 74 97 64" stroke="#E8DCCF" strokeWidth="1.6" strokeLinecap="round" opacity="0.65" />
              <path d="M106 88 Q111 76 105 66" stroke="#E8DCCF" strokeWidth="1.6" strokeLinecap="round" opacity="0.65" />
              <defs>
                <linearGradient id="cupClayGrad" x1="56" y1="100" x2="144" y2="154" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F3EFEA" />
                  <stop offset="0.6" stopColor="#D5C5B3" />
                  <stop offset="1" stopColor="#B39F8A" />
                </linearGradient>
                <linearGradient id="cremaGrad" x1="60" y1="101" x2="140" y2="101" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C87A38" />
                  <stop offset="0.3" stopColor="#E2A662" />
                  <stop offset="0.7" stopColor="#D18742" />
                  <stop offset="1" stopColor="#8A481B" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-[#D98C4A] tracking-widest uppercase font-mono">
              <span>9 Bar Ristretto</span>
              <span>Velvet Crema</span>
            </div>
          </div>
        );

      case 'cold':
        return (
          <div className={`relative w-full h-full bg-gradient-to-b from-[#1C2329] to-[#12161A] flex items-center justify-center overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(142,185,214,0.15),transparent_70%)]" />
            <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 max-w-[170px] drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Highball Ribbed Glass */}
              <path d="M68 44 L74 168 C74.5 174 81 178 88 178 H112 C119 178 125.5 174 126 168 L132 44 H68Z" fill="rgba(255,255,255,0.06)" stroke="#BACDD9" strokeWidth="1.8" />
              {/* Cold Brew Liquid with Gradient Layers */}
              <path d="M73 80 L74 166 C74.5 172 80 175 88 175 H112 C120 175 125.5 172 126 166 L127 80Z" fill="url(#coldBrewLayer)" />
              {/* Cream Swirl Dripping Down */}
              <path d="M72 58 Q85 64 100 58 Q115 54 128 58 L128 85 Q114 96 100 86 Q86 92 72 80 Z" fill="#F4EFEA" fillOpacity="0.9" />
              {/* Clear Hand-cut Ice Cubes */}
              <rect x="82" y="85" width="22" height="22" rx="3" transform="rotate(12 82 85)" fill="rgba(255,255,255,0.3)" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.7" />
              <rect x="94" y="118" width="20" height="20" rx="3" transform="rotate(-8 94 118)" fill="rgba(255,255,255,0.25)" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.6" />
              {/* Glass Rim */}
              <ellipse cx="100" cy="44" rx="32" ry="6" stroke="#BACDD9" strokeWidth="1.8" fill="rgba(255,255,255,0.1)" />
              {/* Condensation Droplets */}
              <circle cx="71" cy="98" r="1.5" fill="#BACDD9" opacity="0.7" />
              <circle cx="73" cy="130" r="1.2" fill="#BACDD9" opacity="0.6" />
              <circle cx="127" cy="110" r="1.5" fill="#BACDD9" opacity="0.7" />
              <circle cx="126" cy="144" r="1.2" fill="#BACDD9" opacity="0.6" />
              <defs>
                <linearGradient id="coldBrewLayer" x1="100" y1="75" x2="100" y2="175" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6C452C" />
                  <stop offset="0.4" stopColor="#3E2415" />
                  <stop offset="1" stopColor="#1B0F08" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-[#A6C5DB] tracking-widest uppercase font-mono">
              <span>18-Hr Kyoto Drip</span>
              <span>Sub-Zero Clear Ice</span>
            </div>
          </div>
        );

      case 'specialty':
        return (
          <div className={`relative w-full h-full bg-gradient-to-b from-[#222B22] to-[#151C15] flex items-center justify-center overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(141,180,126,0.2),transparent_70%)]" />
            <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 max-w-[170px] drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Japanese Chawan Ceramic Tea Bowl */}
              <path d="M48 95 C48 152 70 165 100 165 C130 165 152 152 152 95 H48Z" fill="url(#chawanClay)" stroke="#43503D" strokeWidth="2.5" />
              <ellipse cx="100" cy="95" rx="52" ry="14" fill="#313D2D" stroke="#43503D" strokeWidth="2" />
              {/* Vibrant Uji Matcha Foam */}
              <ellipse cx="100" cy="96" rx="48" ry="12" fill="url(#matchaGrad)" />
              {/* Whisked Microfoam Swirl */}
              <path d="M85 96 Q100 92 115 96" stroke="#9FD48B" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="95" cy="95" r="1.5" fill="#C5E8B7" />
              <circle cx="106" cy="97" r="1.5" fill="#C5E8B7" />
              {/* Steam */}
              <path d="M96 82 Q90 70 96 60" stroke="#C5E8B7" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              <path d="M106 84 Q112 72 106 62" stroke="#C5E8B7" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              <defs>
                <linearGradient id="chawanClay" x1="48" y1="95" x2="152" y2="165" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#374334" />
                  <stop offset="1" stopColor="#1E261D" />
                </linearGradient>
                <linearGradient id="matchaGrad" x1="52" y1="96" x2="148" y2="96" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6C9A54" />
                  <stop offset="0.5" stopColor="#7EAF64" />
                  <stop offset="1" stopColor="#5B8746" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-[#A7D892] tracking-widest uppercase font-mono">
              <span>Ceremonial Uji</span>
              <span>Bamboo Whisked</span>
            </div>
          </div>
        );

      case 'bakery':
        return (
          <div className={`relative w-full h-full bg-gradient-to-b from-[#2D241C] to-[#1C1611] flex items-center justify-center overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(224,166,104,0.22),transparent_70%)]" />
            <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 max-w-[170px] drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Baker Slate Plate */}
              <ellipse cx="100" cy="150" rx="72" ry="18" fill="#1C1814" stroke="#3D342B" strokeWidth="2" />
              {/* Golden Laminated Croissant / Pastry Form */}
              <path d="M46 142 C56 112 90 98 100 98 C110 98 144 112 154 142 C140 148 122 136 100 136 C78 136 60 148 46 142 Z" fill="url(#croissantGrad)" stroke="#663A16" strokeWidth="1.5" />
              {/* Flaky Lamination Ribs */}
              <path d="M72 110 C80 128 82 134 82 138" stroke="#75431A" strokeWidth="2" strokeLinecap="round" />
              <path d="M100 100 C100 118 100 126 100 136" stroke="#75431A" strokeWidth="2" strokeLinecap="round" />
              <path d="M128 110 C120 128 118 134 118 138" stroke="#75431A" strokeWidth="2" strokeLinecap="round" />
              {/* Sugar Crust Glistening */}
              <circle cx="92" cy="115" r="1.5" fill="#FDF3E5" />
              <circle cx="104" cy="110" r="1.5" fill="#FDF3E5" />
              <circle cx="112" cy="120" r="1.5" fill="#FDF3E5" />
              <circle cx="82" cy="125" r="1.5" fill="#FDF3E5" />
              <defs>
                <linearGradient id="croissantGrad" x1="100" y1="98" x2="100" y2="148" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F5B96B" />
                  <stop offset="0.4" stopColor="#D98A36" />
                  <stop offset="0.8" stopColor="#9C5216" />
                  <stop offset="1" stopColor="#6E330C" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-[#E5B57B] tracking-widest uppercase font-mono">
              <span>Normandy AOP</span>
              <span>48h Laminate</span>
            </div>
          </div>
        );

      case 'beans':
      default:
        return (
          <div className={`relative w-full h-full bg-gradient-to-b from-[#2B231D] to-[#1A1410] flex items-center justify-center overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(202,152,106,0.18),transparent_70%)]" />
            <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 max-w-[170px] drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Gusseted Coffee Valve Bag */}
              <path d="M64 42 H136 L142 165 C142 170 138 174 133 174 H67 C62 174 58 170 58 165 L64 42Z" fill="url(#kraftBag)" stroke="#D5C0A8" strokeWidth="1.5" />
              {/* Folded Top Seal */}
              <rect x="62" y="38" width="76" height="8" rx="2" fill="#3D2D22" stroke="#876850" strokeWidth="1" />
              {/* One-Way Gas Valve */}
              <circle cx="100" cy="62" r="5" fill="#3D2D22" stroke="#B89778" strokeWidth="1.2" />
              <circle cx="100" cy="62" r="1.5" fill="#876850" />
              {/* Minimalist Origin Label Banner */}
              <rect x="70" y="80" width="60" height="74" rx="2" fill="#FBF9F5" />
              {/* Label Lines */}
              <line x1="76" y1="92" x2="124" y2="92" stroke="#2B231D" strokeWidth="2" strokeLinecap="round" />
              <line x1="76" y1="102" x2="114" y2="102" stroke="#876850" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="76" y1="110" x2="120" y2="110" stroke="#876850" strokeWidth="1.2" strokeLinecap="round" />
              <rect x="76" y="122" width="22" height="6" rx="1" fill="#C49A6C" fillOpacity="0.3" />
              <line x1="76" y1="140" x2="124" y2="140" stroke="#D5C0A8" strokeWidth="1" />
              <defs>
                <linearGradient id="kraftBag" x1="64" y1="42" x2="142" y2="174" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#382C23" />
                  <stop offset="0.7" stopColor="#281E17" />
                  <stop offset="1" stopColor="#1B140F" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-[#C49A6C] tracking-widest uppercase font-mono">
              <span>Loring S15 Roast</span>
              <span>Nitrogen Flushed</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`overflow-hidden select-none ${className}`}>
      {renderVisual()}
    </div>
  );
}
