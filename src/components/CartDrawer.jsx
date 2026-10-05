import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, Tag, Check, Coffee, ShoppingBag } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckoutComplete
}) {
  if (!isOpen) return null;

  const [fulfillmentType, setFulfillmentType] = useState('counter'); // 'counter' | 'table' | 'delivery'
  const [tableNumber, setTableNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoError, setPromoError] = useState('');
  const [tipPercent, setTipPercent] = useState(15); // 0, 10, 15, 20

  // Calculate totals
  const subtotal = cartItems.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
  const discount = appliedPromo ? (subtotal * appliedPromo.percent) / 100 : 0;
  const taxableAmount = Math.max(0, subtotal - discount);
  const salesTax = taxableAmount * 0.0825; // 8.25%
  const tipAmount = (taxableAmount * tipPercent) / 100;
  const grandTotal = taxableAmount + salesTax + tipAmount;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    setPromoError('');
    const code = promoCode.trim().toUpperCase();
    if (code === 'FIRSTSIP') {
      setAppliedPromo({ code: 'FIRSTSIP', percent: 10, label: '10% Welcome Sip' });
      setPromoCode('');
    } else if (code === 'ROASTER15') {
      setAppliedPromo({ code: 'ROASTER15', percent: 15, label: '15% Roaster Club' });
      setPromoCode('');
    } else {
      setPromoError('Invalid promo code. Try "FIRSTSIP" for 10% off.');
    }
  };

  const handleCompleteOrder = () => {
    if (cartItems.length === 0) return;

    if (fulfillmentType === 'table' && !tableNumber.trim()) {
      alert('Please enter your table number for table service delivery.');
      return;
    }

    const orderData = {
      orderId: `ATL-${Math.floor(1000 + Math.random() * 9000)}`,
      items: cartItems,
      fulfillmentType,
      tableNumber: fulfillmentType === 'table' ? tableNumber : null,
      customerName: customerName || 'Coffee Lover',
      customerPhone,
      subtotal,
      discount,
      salesTax,
      tipAmount,
      grandTotal,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      estimatedMinutes: fulfillmentType === 'table' ? 6 : 8
    };

    onCheckoutComplete(orderData);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-[#FBF9F5] h-full shadow-2xl flex flex-col justify-between overflow-hidden border-l border-[#EAE3D9]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="px-6 py-5 bg-[#FBF9F5] border-b border-[#EAE3D9] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#9C6237]" />
            <h2 className="text-lg font-serif font-medium text-[#241E19]">
              Your Order Bag
            </h2>
            <span className="text-xs font-mono bg-[#EAE3D9] px-2 py-0.5 rounded-full text-[#4A3E33] font-semibold tabular-nums">
              {cartItems.reduce((acc, i) => acc + i.quantity, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#7A6A5C] hover:text-[#241E19] hover:bg-[#EFE9E0] rounded-full transition-colors cursor-pointer"
            aria-label="Close bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          
          {/* Empty State */}
          {cartItems.length === 0 ? (
            <div className="py-24 text-center space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#EFE9E0] flex items-center justify-center text-[#9C6237]">
                <Coffee className="w-7 h-7 stroke-[1.5]" />
              </div>
              <p className="text-base font-serif text-[#241E19]">Your bag is empty</p>
              <p className="text-xs text-[#7A6A5C] max-w-xs mx-auto">
                Explore our slow pour-overs, handcrafted espresso bar, and fresh morning pastries to begin your order.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-5 py-2.5 bg-[#241E19] text-[#FBF9F5] text-xs font-medium rounded-lg hover:bg-[#3D322B] transition-colors cursor-pointer"
              >
                Explore Offerings
              </button>
            </div>
          ) : (
            <>
              {/* Fulfillment Mode Selector */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#736353] mb-2 font-medium">
                  Service &amp; Delivery Option
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFulfillmentType('counter')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-colors cursor-pointer ${
                      fulfillmentType === 'counter'
                        ? 'bg-[#241E19] text-[#FBF9F5] border-[#241E19]'
                        : 'bg-white text-[#4A3E33] border-[#D5C8BC] hover:bg-[#F5EFE8]'
                    }`}
                  >
                    Counter Pickup
                  </button>
                  <button
                    type="button"
                    onClick={() => setFulfillmentType('table')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-colors cursor-pointer ${
                      fulfillmentType === 'table'
                        ? 'bg-[#241E19] text-[#FBF9F5] border-[#241E19]'
                        : 'bg-white text-[#4A3E33] border-[#D5C8BC] hover:bg-[#F5EFE8]'
                    }`}
                  >
                    Dine-In Table Delivery
                  </button>
                </div>

                {fulfillmentType === 'table' && (
                  <div className="mt-3">
                    <input
                      type="text"
                      placeholder="Enter Table # (e.g. Table 04 or Patio 2)"
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#9C6237] rounded-lg text-xs text-[#241E19] placeholder:text-[#A8988A] focus:outline-none ring-1 ring-[#9C6237]"
                    />
                  </div>
                )}
              </div>

              {/* Itemized List */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#736353] font-medium">
                  Selected Items ({cartItems.length})
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.cartItemId || item.id}
                    className="p-3 bg-white border border-[#EAE3D9] rounded-xl flex items-start justify-between gap-3 shadow-2xs"
                  >
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium text-[#241E19]">
                          {item.name}
                        </h4>
                        <span className="font-mono text-xs font-semibold tabular-nums text-[#241E19]">
                          ${(item.unitPrice * item.quantity).toFixed(2)}
                        </span>
                      </div>

                      {/* Customization Details */}
                      {item.customizations && (
                        <div className="text-[11px] text-[#7A6A5C] space-y-0.5 pt-0.5">
                          {item.customizations.temperature && (
                            <div>Serving: <span className="capitalize text-[#241E19]">{item.customizations.temperature}</span></div>
                          )}
                          {item.customizations.size && (
                            <div>Size: <span className="text-[#241E19]">{item.customizations.size}</span></div>
                          )}
                          {item.customizations.bean && (
                            <div>Bean: <span className="text-[#9C6237] font-medium">{item.customizations.bean}</span></div>
                          )}
                          {item.customizations.milk && item.customizations.milk !== 'Black / No Milk' && (
                            <div>Milk: <span className="text-[#241E19]">{item.customizations.milk}</span></div>
                          )}
                          {item.customizations.syrup && (
                            <div>Syrup: <span className="text-[#241E19]">{item.customizations.syrup}</span></div>
                          )}
                          {item.customizations.extraShots && (
                            <div className="text-[#9C6237]">{item.customizations.extraShots}</div>
                          )}
                          {item.customizations.notes && (
                            <div className="italic text-[#8C6D53]">Note: "{item.customizations.notes}"</div>
                          )}
                        </div>
                      )}

                      {/* Stepper & Remove */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-[#D5C8BC] rounded bg-[#FBF9F5] text-xs">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.cartItemId || item.id, item.quantity - 1)}
                            className="px-2 py-1 text-[#4A3E33] hover:bg-[#EFE9E0] transition-colors cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 py-1 font-mono tabular-nums font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.cartItemId || item.id, item.quantity + 1)}
                            className="px-2 py-1 text-[#4A3E33] hover:bg-[#EFE9E0] transition-colors cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.cartItemId || item.id)}
                          className="text-xs text-[#A85848] hover:text-[#7A2A1A] flex items-center gap-1 cursor-pointer py-1"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Code Form */}
              <div className="pt-2">
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-[#8C7A6B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Promo code (try FIRSTSIP)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 bg-white border border-[#D5C8BC] rounded-lg text-xs text-[#241E19] placeholder:text-[#A8988A] focus:outline-none focus:ring-1 focus:ring-[#9C6237]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-white border border-[#D5C8BC] text-[#241E19] hover:bg-[#F2ECE4] text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Apply
                  </button>
                </form>

                {appliedPromo && (
                  <div className="mt-2 text-xs text-[#1E7E34] flex items-center justify-between bg-[#EAF7ED] p-2 rounded border border-[#C3E6CB]">
                    <span>Applied {appliedPromo.label} (-{appliedPromo.percent}%)</span>
                    <button
                      onClick={() => setAppliedPromo(null)}
                      className="text-[#1E7E34] font-bold hover:underline"
                    >
                      &times;
                    </button>
                  </div>
                )}
                {promoError && (
                  <p className="mt-1.5 text-xs text-[#C53030]">{promoError}</p>
                )}
              </div>

              {/* Tip Selection */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#736353] mb-1.5 font-medium">
                  Barista Craft Gratuity
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[0, 15, 18, 20].map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setTipPercent(pct)}
                      className={`py-1.5 text-xs font-mono rounded-lg border transition-colors cursor-pointer ${
                        tipPercent === pct
                          ? 'bg-[#241E19] text-[#FBF9F5] border-[#241E19] font-semibold'
                          : 'bg-white text-[#4A3E33] border-[#D5C8BC] hover:bg-[#F5EFE8]'
                      }`}
                    >
                      {pct === 0 ? 'None' : `${pct}%`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Customer Contact Info for Order Callout */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#736353] font-medium">
                  Order Name &amp; SMS Alert
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#D5C8BC] rounded-lg text-xs text-[#241E19] placeholder:text-[#A8988A] focus:outline-none focus:ring-1 focus:ring-[#9C6237]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone (optional)"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#D5C8BC] rounded-lg text-xs text-[#241E19] placeholder:text-[#A8988A] focus:outline-none focus:ring-1 focus:ring-[#9C6237]"
                  />
                </div>
              </div>
            </>
          )}

        </div>

        {/* Drawer Sticky Footer with Itemized Bill & Buy CTA */}
        {cartItems.length > 0 && (
          <div className="bg-[#FBF9F5] border-t border-[#EAE3D9] p-6 space-y-4">
            
            {/* Bill breakdown in tabular numbers */}
            <div className="space-y-1.5 text-xs text-[#6B5E52] font-mono">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="tabular-nums font-medium text-[#241E19]">${subtotal.toFixed(2)}</span>
              </div>
              {appliedPromo && (
                <div className="flex justify-between text-[#1E7E34]">
                  <span>Discount ({appliedPromo.code})</span>
                  <span className="tabular-nums font-medium">-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated Tax (8.25%)</span>
                <span className="tabular-nums font-medium text-[#241E19]">${salesTax.toFixed(2)}</span>
              </div>
              {tipAmount > 0 && (
                <div className="flex justify-between">
                  <span>Barista Tip ({tipPercent}%)</span>
                  <span className="tabular-nums font-medium text-[#241E19]">${tipAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="pt-2 border-t border-[#EAE3D9] flex justify-between text-sm font-semibold text-[#241E19]">
                <span className="font-sans">Grand Total</span>
                <span className="font-mono tabular-nums text-base text-[#9C6237]">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handleCompleteOrder}
              className="w-full py-3.5 bg-[#241E19] text-[#FBF9F5] text-sm font-medium rounded-lg hover:bg-[#3D322B] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
            >
              <span>Confirm &amp; Send to Barista</span>
              <ArrowRight className="w-4 h-4 text-[#D5C0A8] group-hover:translate-x-0.5 transition-transform" />
            </button>

            <div className="text-[11px] text-center text-[#8C7A6B]">
              Prepared fresh to order · Free cancellations within 60s
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
