import React, { useState, useEffect } from 'react';
import { CheckCircle2, Clock, MapPin, Coffee, Sparkles, X, ChevronRight } from 'lucide-react';

export default function OrderSuccessModal({ order, onClose }) {
  if (!order) return null;

  // Simulate barista stage progression
  // Stages: 1 = Queued, 2 = Grinding & Dosing, 3 = Extracting & Steaming, 4 = Ready at Counter
  const [currentStage, setCurrentStage] = useState(1);
  const [secondsRemaining, setSecondsRemaining] = useState(order.estimatedMinutes * 60);

  useEffect(() => {
    // Advance stage every 7 seconds for interactive feel
    const stageTimer = setInterval(() => {
      setCurrentStage((prev) => (prev < 4 ? prev + 1 : prev));
    }, 7000);

    // Countdown seconds
    const countdownTimer = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(stageTimer);
      clearInterval(countdownTimer);
    };
  }, []);

  const formatCountdown = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const stages = [
    { num: 1, label: 'Order Queued', desc: 'Received at espresso bar' },
    { num: 2, label: 'Dosing & Grinding', desc: 'Weighed to 0.1g on Mahlkönig' },
    { num: 3, label: 'Extracting & Steaming', desc: 'Pulled on Synesso MVP Hydra' },
    { num: 4, label: 'Ready for You', desc: order.fulfillmentType === 'table' ? `Delivering to Table ${order.tableNumber}` : 'Collect at Pickup Counter' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-[#FBF9F5] border border-[#E8DFC8] rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#241E19] text-[#FBF9F5] px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#3D322A] flex items-center justify-center text-[#E5D6C5]">
              <Coffee className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <div className="text-xs font-mono text-[#D5C0A8] uppercase tracking-wider">
                Order {order.orderId} Confirmed
              </div>
              <h2 className="text-lg font-serif font-normal">
                Barista Preparation Status
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#D5C0A8] hover:text-white rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Body */}
        <div className="p-6 space-y-6">

          {/* Time Remaining Callout Box */}
          <div className="bg-white border border-[#EAE3D9] rounded-xl p-4 flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#9C6237]" />
              <div>
                <p className="text-xs text-[#7A6A5C] uppercase font-mono tracking-wider">Estimated Ready Time</p>
                <p className="text-xl font-serif font-medium text-[#241E19]">
                  {currentStage === 4 ? 'Ready for Pickup!' : `${order.estimatedMinutes} Minutes`}
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="font-mono text-sm font-semibold tabular-nums text-[#9C6237] bg-[#F7F0E8] px-3 py-1 rounded-md border border-[#E8DCCF]">
                {currentStage === 4 ? '00:00' : formatCountdown(secondsRemaining)}
              </span>
            </div>
          </div>

          {/* 4-Stage Barista Timeline */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#736353] mb-3 font-medium">
              Live Brew Progress
            </div>
            <div className="space-y-3">
              {stages.map((st) => {
                const isComplete = currentStage > st.num;
                const isCurrent = currentStage === st.num;
                return (
                  <div
                    key={st.num}
                    className={`p-3 rounded-xl border flex items-center justify-between transition-all ${
                      isCurrent
                        ? 'bg-[#F7F0E8] border-[#9C6237] shadow-sm'
                        : isComplete
                        ? 'bg-white border-[#EAE3D9] opacity-85'
                        : 'bg-[#F9F6F0] border-[#EFE9E0] opacity-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-semibold ${
                        isCurrent
                          ? 'bg-[#9C6237] text-white ring-4 ring-[#9C6237]/20 animate-pulse'
                          : isComplete
                          ? 'bg-[#241E19] text-white'
                          : 'bg-[#E5DCD0] text-[#7A6A5C]'
                      }`}>
                        {isComplete ? '✓' : st.num}
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${isCurrent ? 'text-[#241E19] font-semibold' : 'text-[#3D332A]'}`}>
                          {st.label}
                        </p>
                        <p className="text-xs text-[#7A6A5C]">{st.desc}</p>
                      </div>
                    </div>

                    {isCurrent && (
                      <span className="text-[11px] font-mono text-[#9C6237] font-semibold tracking-wider uppercase">
                        In Progress
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order Details Accordion / Summary */}
          <div className="bg-white border border-[#EAE3D9] rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between text-xs text-[#7A6A5C] pb-2 border-b border-[#F2ECE4]">
              <span>Customer: <strong className="text-[#241E19]">{order.customerName}</strong></span>
              <span>Total Paid: <strong className="text-[#9C6237] font-mono tabular-nums">${order.grandTotal.toFixed(2)}</strong></span>
            </div>
            
            <div className="text-xs text-[#6B5E52] space-y-1">
              {order.items.map((it, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span>{it.quantity}x {it.name}</span>
                  <span className="font-mono tabular-nums">${(it.unitPrice * it.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            {order.fulfillmentType === 'table' ? (
              <div className="pt-2 text-xs text-[#9C6237] font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Our runner will bring your drink directly to Table {order.tableNumber}.</span>
              </div>
            ) : (
              <div className="pt-2 text-xs text-[#7A6A5C] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Listen for name "{order.customerName}" at the front barista counter.</span>
              </div>
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#FBF9F5] border-t border-[#EAE3D9] px-6 py-4 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#241E19] text-[#FBF9F5] text-xs font-medium rounded-lg hover:bg-[#3D322B] transition-colors cursor-pointer"
          >
            Done &amp; Return to Menu
          </button>
        </div>

      </div>
    </div>
  );
}
