import React, { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle2, Sparkles, X } from 'lucide-react';
import { WORKSHOPS } from '../data/coffeeData';

export default function WorkshopsSection() {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [guestCount, setGuestCount] = useState(1);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');

  const handleOpenBooking = (workshop) => {
    setSelectedWorkshop(workshop);
    setBookingConfirmed(false);
    setGuestCount(1);
    setGuestName('');
    setGuestEmail('');
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!guestName || !guestEmail) return;
    setBookingConfirmed(true);
  };

  return (
    <section className="py-16 bg-[#F5EFE8] border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#EAE3D9]">
          <div>
            <div className="text-xs font-mono tracking-wider uppercase text-[#9C6237] mb-2 font-medium">
              Sensory Education &amp; Coffee Labs
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#241E19]">
              Cupping Flights &amp; Weekend Classes
            </h2>
          </div>
          <p className="text-sm text-[#6B5E52] max-w-md">
            Small-group weekend sessions hosted directly on our roasting floor. Taste rare microlots, master milk steam physics, and calibrate your home palate.
          </p>
        </div>

        {/* 3-Column Workshops Cards */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {WORKSHOPS.map((workshop) => (
            <div
              key={workshop.id}
              className="bg-white border border-[#E8DFC8] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#8A7563] font-mono">
                  <span>{workshop.duration}</span>
                  <span className="text-[#9C6237] font-semibold">{workshop.seatsLeft} seats left</span>
                </div>

                <h3 className="text-xl font-serif font-medium text-[#241E19] leading-snug">
                  {workshop.title}
                </h3>

                <p className="text-xs text-[#6B5E52] leading-relaxed">
                  {workshop.description}
                </p>

                <div className="pt-2 border-t border-[#F2ECE4] space-y-1.5 text-xs text-[#7A6A5C] font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#9C6237]" />
                    <span>{workshop.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-[#9C6237]" />
                    <span>Experience Level: {workshop.level}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F2ECE4] flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-[#7A6A5C] block">Per Participant</span>
                  <span className="font-mono text-xl font-semibold tabular-nums text-[#241E19]">
                    ${workshop.price.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => handleOpenBooking(workshop)}
                  className="px-4 py-2.5 bg-[#241E19] text-[#FBF9F5] text-xs font-medium rounded-lg hover:bg-[#3D322B] transition-colors cursor-pointer shadow-2xs"
                >
                  Reserve Seat
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Booking Modal */}
      {selectedWorkshop && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div 
            className="bg-[#FBF9F5] border border-[#E8DFC8] rounded-2xl w-full max-w-lg shadow-2xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedWorkshop(null)}
              className="absolute top-5 right-5 p-1.5 text-[#7A6A5C] hover:text-[#241E19] rounded-full hover:bg-[#EFE9E0] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingConfirmed ? (
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#9C6237]">
                  Workshop Reservation
                </span>
                <h3 className="text-xl font-serif font-medium text-[#241E19] mt-1 mb-2">
                  {selectedWorkshop.title}
                </h3>
                <p className="text-xs text-[#6B5E52] mb-6">
                  {selectedWorkshop.schedule} · Hosted by Atelier Master Roaster.
                </p>

                <form onSubmit={handleConfirmBooking} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#736353] mb-1 font-medium">
                      Number of Participants
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4].map(num => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setGuestCount(num)}
                          className={`flex-1 py-2 text-xs font-mono rounded-lg border transition-colors cursor-pointer ${
                            guestCount === num
                              ? 'bg-[#241E19] text-[#FBF9F5] border-[#241E19] font-semibold'
                              : 'bg-white text-[#4A3E33] border-[#D5C8BC] hover:bg-[#F5EFE8]'
                          }`}
                        >
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#736353] mb-1 font-medium">
                      Primary Attendee Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Elena Vance"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D5C8BC] rounded-lg text-sm text-[#241E19] placeholder:text-[#A8988A] focus:outline-none focus:ring-1 focus:ring-[#9C6237]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#736353] mb-1 font-medium">
                      Email Confirmation Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. elena@example.com"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D5C8BC] rounded-lg text-sm text-[#241E19] placeholder:text-[#A8988A] focus:outline-none focus:ring-1 focus:ring-[#9C6237]"
                    />
                  </div>

                  <div className="pt-2 border-t border-[#EAE3D9] flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#7A6A5C] font-mono">Total Due at Arrival</span>
                      <p className="font-mono text-xl font-semibold tabular-nums text-[#241E19]">
                        ${(selectedWorkshop.price * guestCount).toFixed(2)}
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#241E19] text-[#FBF9F5] text-xs font-medium rounded-lg hover:bg-[#3D322B] transition-colors cursor-pointer shadow-sm"
                    >
                      Confirm Reservation
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#EAF7ED] text-[#1E7E34] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 stroke-[2]" />
                </div>
                <h4 className="text-lg font-serif font-medium text-[#241E19]">
                  Spot Reserved, {guestName}!
                </h4>
                <p className="text-xs text-[#6B5E52] max-w-sm mx-auto leading-relaxed">
                  We've reserved {guestCount} {guestCount === 1 ? 'place' : 'places'} for the <strong>{selectedWorkshop.title}</strong> on {selectedWorkshop.schedule}. A confirmation packet has been dispatched to <strong>{guestEmail}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSelectedWorkshop(null)}
                    className="px-5 py-2.5 bg-[#241E19] text-[#FBF9F5] text-xs font-medium rounded-lg hover:bg-[#3D322B] transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
