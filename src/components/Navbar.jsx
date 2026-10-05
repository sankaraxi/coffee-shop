import React from 'react';
import { ShoppingBag, Coffee, Sparkles } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, activeTab, setActiveTab }) {
  const navLinks = [
    { id: 'menu', label: 'Menu & Order' },
    { id: 'origins', label: 'Origin Beans' },
    { id: 'brew-guide', label: 'Brew Rituals' },
    { id: 'workshops', label: 'Cupping & Classes' },
    { id: 'cafe', label: 'Cafe & Hours' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => setActiveTab('menu')}
          className="text-2xl font-serif tracking-tight font-medium text-[#241E19] hover:opacity-85 transition-opacity text-left cursor-pointer"
        >
          Atelier Roasters
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`text-sm font-medium tracking-normal transition-colors cursor-pointer relative py-2 ${
                  isActive ? 'text-[#1F1914] font-semibold' : 'text-[#6B5E52] hover:text-[#1F1914]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#9C6237] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCart}
            aria-label="View shopping bag"
            className="flex items-center gap-2.5 px-4 py-2 text-sm font-medium text-[#FBF9F5] bg-[#241E19] rounded-lg hover:bg-[#382F27] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap shadow-sm"
          >
            <ShoppingBag className="w-4 h-4 text-[#D5C0A8]" />
            <span>Bag</span>
            <span className="font-mono text-xs bg-[#9C6237] text-white px-2 py-0.5 rounded-full font-semibold tabular-nums">
              {cartCount}
            </span>
          </button>
        </div>

      </div>

      {/* Mobile nav bar row for small screens */}
      <div className="md:hidden flex items-center gap-2 px-4 py-2.5 overflow-x-auto border-t border-[#EAE3D9]/60 bg-[#F6F2EA]">
        {navLinks.map((link) => {
          const isActive = activeTab === link.id;
          return (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`px-3 py-1.5 text-xs font-medium whitespace-nowrap rounded-md transition-colors ${
                isActive ? 'bg-[#241E19] text-[#FBF9F5]' : 'text-[#6B5E52] hover:text-[#1F1914]'
              }`}
            >
              {link.label}
            </button>
          );
        })}
      </div>
    </header>
  );
}
