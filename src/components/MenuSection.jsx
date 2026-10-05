import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Plus, Sparkles, Flame } from 'lucide-react';
import CoffeeArtwork from './CoffeeArtwork';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/coffeeData';

export default function MenuSection({ onSelectItem, onQuickAdd }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSpecialtyOnly, setFilterSpecialtyOnly] = useState(false);

  // Filter items based on category, search, and flags
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Specialty/Popular filter
      if (filterSpecialtyOnly && !item.isPopular) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        const matchNotes = item.tastingNotes?.some(n => n.toLowerCase().includes(query));
        const matchCat = item.categoryLabel.toLowerCase().includes(query);
        return matchName || matchDesc || matchNotes || matchCat;
      }
      return true;
    });
  }, [activeCategory, searchQuery, filterSpecialtyOnly]);

  return (
    <section id="menu-section" className="py-16 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#EAE3D9]">
          <div>
            <div className="text-xs font-mono tracking-wider uppercase text-[#9C6237] mb-2 font-medium">
              Curated Offerings · Roasted In-House
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#241E19]">
              Specialty Bar &amp; Bakery Menu
            </h2>
          </div>
          <p className="text-sm text-[#6B5E52] max-w-md">
            Prepared to order on custom Synesso MVP Hydra espresso machines and Kalita Wave/V60 slow bars. Whole beans bagged fresh.
          </p>
        </div>

        {/* Filter Controls Bar (Interactive tabs as clean segmented controls) */}
        <div className="pt-8 pb-6 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#241E19] text-[#FBF9F5] shadow-sm font-semibold'
                      : 'bg-white text-[#524436] hover:bg-[#F2ECE4] border border-[#E0D5C7]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search & Toggle Filters */}
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-[#8C7A6B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search notes, beans, drinks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-white border border-[#D5C8BC] rounded-lg text-xs text-[#241E19] placeholder:text-[#9E8E80] focus:outline-none focus:ring-1 focus:ring-[#9C6237]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#8C7A6B] hover:text-[#241E19]"
                >
                  &times;
                </button>
              )}
            </div>

            {/* Featured Only Toggle Button */}
            <button
              onClick={() => setFilterSpecialtyOnly(!filterSpecialtyOnly)}
              className={`px-3 py-2 text-xs font-medium rounded-lg border transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                filterSpecialtyOnly
                  ? 'bg-[#EFE5D9] text-[#5C391D] border-[#9C6237]'
                  : 'bg-white text-[#524436] border-[#D5C8BC] hover:bg-[#F5EFE8]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#9C6237]" />
              <span>Barista Highlights</span>
            </button>
          </div>

        </div>

        {/* Product Grid: 3-column desktop layout with generous gap-8 */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white border border-[#EAE3D9] rounded-2xl p-8">
            <p className="text-base font-serif text-[#241E19]">No drinks found matching your criteria</p>
            <p className="text-xs text-[#7A6A5C] mt-1">Try resetting the search keyword or selecting "Full Menu".</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); setFilterSpecialtyOnly(false); }}
              className="mt-4 px-4 py-2 bg-[#241E19] text-[#FBF9F5] text-xs font-medium rounded-lg hover:bg-[#3D332B] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className="group bg-white border border-[#E8DFC8] rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <div>
                  {/* Lead with imagery: 65-75% visual card height with styled SVG fallback */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#241E19]">
                    <CoffeeArtwork type={item.category} className="w-full h-full group-hover:scale-105 transition-transform duration-300" />
                    
                    {/* Unboxed subtle indicator on top */}
                    {item.badge && (
                      <div className="absolute top-3 left-3 bg-[#1F1914]/85 text-[#FBF9F5] px-2.5 py-1 rounded text-[11px] font-mono tracking-wider">
                        {item.badge}
                      </div>
                    )}
                  </div>

                  {/* Card Content & Metadata */}
                  <div className="p-5 pb-3 space-y-2">
                    {/* Clean unboxed category kicker & calories */}
                    <div className="flex items-center justify-between text-xs text-[#8A7563] font-mono">
                      <span>{item.categoryLabel}</span>
                      {item.calories !== '—' && (
                        <span>{item.calories}</span>
                      )}
                    </div>

                    {/* Product Title */}
                    <h3 className="text-base font-serif font-medium text-[#241E19] group-hover:text-[#9C6237] transition-colors leading-snug">
                      {item.name}
                    </h3>

                    {/* Prose Description */}
                    <p className="text-xs text-[#6B5E52] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {/* Clean unboxed tasting notes with dot separators */}
                    {item.tastingNotes && item.tastingNotes.length > 0 && (
                      <div className="flex items-center gap-1.5 text-xs text-[#9C6237] font-medium pt-1">
                        <span>{item.tastingNotes[0]}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.tastingNotes[1]}</span>
                        {item.tastingNotes[2] && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span>{item.tastingNotes[2]}</span>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer with Tabular Price & Customize CTA */}
                <div className="p-5 pt-3 border-t border-[#F2ECE4] flex items-center justify-between bg-[#FCFAF7]">
                  <div className="font-mono text-base font-semibold tabular-nums text-[#241E19]">
                    ${item.price.toFixed(2)}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectItem(item);
                      }}
                      className="px-3 py-1.5 text-xs font-medium text-[#241E19] bg-white border border-[#D5C8BC] rounded-md hover:bg-[#F2ECE4] transition-colors whitespace-nowrap"
                    >
                      Customize
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickAdd(item);
                      }}
                      title="Quick Add Standard"
                      className="p-1.5 text-white bg-[#241E19] hover:bg-[#3D322B] rounded-md transition-colors active:scale-95 flex items-center justify-center cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
