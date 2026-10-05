import React, { useState } from 'react';
import { X, Check, Flame, Sparkles, Plus, Minus } from 'lucide-react';
import CoffeeArtwork from './CoffeeArtwork';
import { BEAN_ORIGINS, MILK_OPTIONS, SYRUP_OPTIONS } from '../data/coffeeData';

export default function DrinkCustomizerModal({ item, isOpen, onClose, onAddToCart }) {
  if (!isOpen || !item) return null;

  // Selected options state
  const [temperature, setTemperature] = useState('hot');
  const [selectedSize, setSelectedSize] = useState(item.sizes?.[0] || { id: 'std', label: 'Standard', extra: 0 });
  const [selectedBeanId, setSelectedBeanId] = useState(item.defaultBean || 'atelier-house-blend');
  const [selectedMilkId, setSelectedMilkId] = useState('whole');
  const [selectedSyrupId, setSelectedSyrupId] = useState('none');
  const [extraShots, setExtraShots] = useState(0);
  const [notes, setNotes] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Calculate dynamic unit price
  const basePrice = item.price;
  const sizeExtra = selectedSize.extra || 0;
  const milkObj = MILK_OPTIONS.find(m => m.id === selectedMilkId);
  const milkExtra = (item.category === 'espresso' || item.category === 'specialty') ? (milkObj?.extra || 0) : 0;
  const syrupObj = SYRUP_OPTIONS.find(s => s.id === selectedSyrupId);
  const syrupExtra = syrupObj?.extra || 0;
  const shotExtra = extraShots * 1.00;

  const unitPrice = basePrice + sizeExtra + milkExtra + syrupExtra + shotExtra;
  const totalPrice = unitPrice * quantity;

  const selectedBean = BEAN_ORIGINS.find(b => b.id === selectedBeanId);

  const handleAddToCart = () => {
    const customizedItem = {
      ...item,
      cartItemId: `${item.id}-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      quantity,
      unitPrice,
      customizations: {
        temperature: item.category !== 'bakery' && item.category !== 'beans' ? temperature : null,
        size: selectedSize.label,
        bean: item.allowsCustomBeans ? selectedBean?.name : null,
        milk: (item.category === 'espresso' || item.category === 'specialty') ? milkObj?.label : null,
        syrup: syrupObj?.id !== 'none' ? syrupObj?.label : null,
        extraShots: extraShots > 0 ? `+${extraShots} Extra Espresso Shot` : null,
        notes: notes.trim() ? notes.trim() : null
      }
    };

    onAddToCart(customizedItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-[#FBF9F5] border border-[#E8DFC8] rounded-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header bar with close button */}
        <div className="sticky top-0 z-20 bg-[#FBF9F5]/95 backdrop-blur-sm border-b border-[#EAE3D9] px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#9C6237]">
              {item.categoryLabel}
            </span>
            <h2 className="text-xl font-serif font-medium text-[#241E19]">
              {item.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#7A6A5C] hover:text-[#241E19] hover:bg-[#EFE9E0] rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 flex-1">

          {/* Product Spotlight banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white border border-[#EAE3D9] rounded-xl p-3 items-center">
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden shadow-inner">
              <CoffeeArtwork type={item.category} className="w-full h-full" />
            </div>
            <div className="sm:col-span-2 space-y-1.5 pr-2">
              <p className="text-xs text-[#6B5E52] leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#8A7563]">
                <span className="font-medium text-[#241E19]">Notes:</span>
                <span>{item.tastingNotes?.join(' · ')}</span>
              </div>
            </div>
          </div>

          {/* Temperature Choice (For beverages) */}
          {item.category !== 'bakery' && item.category !== 'beans' && (
            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#736353] mb-2 font-medium">
                Serving Temperature
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTemperature('hot')}
                  className={`py-2.5 px-4 text-sm font-medium rounded-lg border text-center transition-colors cursor-pointer ${
                    temperature === 'hot'
                      ? 'bg-[#241E19] text-[#FBF9F5] border-[#241E19] shadow-sm'
                      : 'bg-white text-[#4A3E33] border-[#D5C8BC] hover:bg-[#F5EFE8]'
                  }`}
                >
                  Steamed Warm (Hot)
                </button>
                <button
                  type="button"
                  onClick={() => setTemperature('iced')}
                  className={`py-2.5 px-4 text-sm font-medium rounded-lg border text-center transition-colors cursor-pointer ${
                    temperature === 'iced'
                      ? 'bg-[#241E19] text-[#FBF9F5] border-[#241E19] shadow-sm'
                      : 'bg-white text-[#4A3E33] border-[#D5C8BC] hover:bg-[#F5EFE8]'
                  }`}
                >
                  Over Hand-Carved Ice (Iced)
                </button>
              </div>
            </div>
          )}

          {/* Size Selection */}
          {item.sizes && item.sizes.length > 1 && (
            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#736353] mb-2 font-medium">
                Cup Volume &amp; Serving Size
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {item.sizes.map((size) => {
                  const isSelected = selectedSize.id === size.id;
                  return (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`p-3 text-left rounded-lg border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#241E19] text-[#FBF9F5] border-[#241E19] shadow-sm'
                          : 'bg-white text-[#4A3E33] border-[#D5C8BC] hover:bg-[#F5EFE8]'
                      }`}
                    >
                      <div className="font-medium text-xs">{size.label}</div>
                      <div className={`text-xs mt-1 font-mono tabular-nums ${isSelected ? 'text-[#D5C0A8]' : 'text-[#8A7563]'}`}>
                        {size.extra > 0 ? `+$${size.extra.toFixed(2)}` : 'Standard'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Single Origin Bean Selection (For Espresso/Pourover where custom bean is allowed) */}
          {item.allowsCustomBeans && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono tracking-wider uppercase text-[#736353] font-medium">
                  Single Origin Lot Selection
                </label>
                <span className="text-xs text-[#9C6237]">Roasted in-house</span>
              </div>
              <div className="space-y-2">
                {BEAN_ORIGINS.map((bean) => {
                  const isSelected = selectedBeanId === bean.id;
                  return (
                    <button
                      key={bean.id}
                      type="button"
                      onClick={() => setSelectedBeanId(bean.id)}
                      className={`w-full p-3 rounded-lg border text-left flex items-start justify-between transition-colors cursor-pointer ${
                        isSelected
                          ? 'border-[#9C6237] bg-[#F7F0E8] ring-1 ring-[#9C6237]'
                          : 'border-[#EAE3D9] bg-white hover:bg-[#FAF6F0]'
                      }`}
                    >
                      <div className="space-y-0.5 pr-2">
                        <div className="text-sm font-medium text-[#241E19] flex items-center gap-2">
                          <span>{bean.name}</span>
                          <span className="text-xs font-mono text-[#8C6D53]">({bean.roastLevel})</span>
                        </div>
                        <p className="text-xs text-[#6B5E52]">
                          {bean.region} · {bean.process}
                        </p>
                        <p className="text-xs text-[#9C6237] italic">
                          Notes: {bean.flavorNotes.slice(0, 3).join(', ')}
                        </p>
                      </div>
                      <div className="pt-1">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-[#9C6237] bg-[#9C6237] text-white' : 'border-[#C5B7A8]'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Milk Options for Espresso & Specialty */}
          {(item.category === 'espresso' || item.category === 'specialty') && (
            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#736353] mb-2 font-medium">
                Dairy &amp; Plant Milk Choice
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {MILK_OPTIONS.map((milk) => {
                  const isSelected = selectedMilkId === milk.id;
                  return (
                    <button
                      key={milk.id}
                      type="button"
                      onClick={() => setSelectedMilkId(milk.id)}
                      className={`p-2.5 px-3 rounded-lg border text-left flex items-center justify-between transition-colors cursor-pointer ${
                        isSelected
                          ? 'border-[#241E19] bg-[#241E19] text-[#FBF9F5]'
                          : 'border-[#D5C8BC] bg-white text-[#3D322A] hover:bg-[#F5EFE8]'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-medium">{milk.label}</div>
                        <div className={`text-[11px] ${isSelected ? 'text-[#D5C0A8]' : 'text-[#8A7563]'}`}>
                          {milk.tag}
                        </div>
                      </div>
                      <span className="text-xs font-mono tabular-nums">
                        {milk.extra > 0 ? `+$${milk.extra.toFixed(2)}` : 'Included'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Artisan Syrups & Sweeteners */}
          {item.category !== 'bakery' && item.category !== 'beans' && (
            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#736353] mb-2 font-medium">
                House Infused Syrups
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SYRUP_OPTIONS.map((syrup) => {
                  const isSelected = selectedSyrupId === syrup.id;
                  return (
                    <button
                      key={syrup.id}
                      type="button"
                      onClick={() => setSelectedSyrupId(syrup.id)}
                      className={`p-2.5 px-3 rounded-lg border text-left flex items-center justify-between transition-colors cursor-pointer ${
                        isSelected
                          ? 'border-[#241E19] bg-[#241E19] text-[#FBF9F5]'
                          : 'border-[#D5C8BC] bg-white text-[#3D322A] hover:bg-[#F5EFE8]'
                      }`}
                    >
                      <span className="text-xs font-medium">{syrup.label}</span>
                      <span className="text-xs font-mono tabular-nums">
                        {syrup.extra > 0 ? `+$${syrup.extra.toFixed(2)}` : 'None'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Extra Espresso Shots */}
          {item.category === 'espresso' && (
            <div className="flex items-center justify-between p-3 bg-white border border-[#EAE3D9] rounded-lg">
              <div>
                <p className="text-xs font-medium text-[#241E19]">Additional Double Ristretto Shot</p>
                <p className="text-[11px] text-[#8A7563]">+$1.00 per extraction</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  disabled={extraShots <= 0}
                  onClick={() => setExtraShots(Math.max(0, extraShots - 1))}
                  className="w-8 h-8 rounded-md border border-[#D5C8BC] flex items-center justify-center text-[#241E19] hover:bg-[#F5EFE8] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-mono text-sm tabular-nums w-4 text-center font-semibold">
                  {extraShots}
                </span>
                <button
                  type="button"
                  disabled={extraShots >= 3}
                  onClick={() => setExtraShots(extraShots + 1)}
                  className="w-8 h-8 rounded-md border border-[#D5C8BC] flex items-center justify-center text-[#241E19] hover:bg-[#F5EFE8] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Notes for Barista */}
          <div>
            <label className="block text-xs font-mono tracking-wider uppercase text-[#736353] mb-1.5 font-medium">
              Barista Preparation Notes
            </label>
            <input
              type="text"
              placeholder="e.g. Extra hot, serve in personal ceramic tumbler, room for cream..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-[#D5C8BC] rounded-lg text-sm text-[#241E19] placeholder:text-[#A8988A] focus:outline-none focus:ring-1 focus:ring-[#9C6237]"
            />
          </div>

        </div>

        {/* Modal Sticky Footer with Quantity & Add to Cart */}
        <div className="sticky bottom-0 bg-[#FBF9F5] border-t border-[#EAE3D9] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Quantity Stepper */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <span className="text-xs font-medium text-[#736353] uppercase font-mono">Qty</span>
            <div className="flex items-center border border-[#D5C8BC] rounded-lg bg-white overflow-hidden">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-[#4A3E33] hover:bg-[#F5EFE8] transition-colors cursor-pointer"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="px-3 py-2 font-mono text-sm tabular-nums font-semibold min-w-8 text-center">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-[#4A3E33] hover:bg-[#F5EFE8] transition-colors cursor-pointer"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Add to Cart CTA */}
          <button
            type="button"
            onClick={handleAddToCart}
            className="w-full sm:w-auto flex-1 sm:flex-initial px-8 py-3.5 bg-[#241E19] text-[#FBF9F5] text-sm font-medium rounded-lg hover:bg-[#3D322B] active:scale-[0.99] transition-all flex items-center justify-center gap-3 cursor-pointer shadow-sm"
          >
            <span>Add to Order Bag</span>
            <span className="font-mono text-sm text-[#E5D6C5] font-semibold tabular-nums">
              ${totalPrice.toFixed(2)}
            </span>
          </button>

        </div>

      </div>
    </div>
  );
}
