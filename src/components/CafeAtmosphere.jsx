import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Wifi, Disc, Sun, ShieldCheck, Check } from 'lucide-react';
import { STORE_INFO } from '../data/coffeeData';

export default function CafeAtmosphere() {
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryText, setInquiryText] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');

  const handleSendInquiry = (e) => {
    e.preventDefault();
    if (!inquiryText || !inquiryEmail) return;
    setInquirySent(true);
  };

  return (
    <section className="py-16 bg-[#FBF9F5] border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#EAE3D9]">
          <div>
            <div className="text-xs font-mono tracking-wider uppercase text-[#9C6237] mb-2 font-medium">
              Physical Space &amp; Roastery
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#241E19]">
              The Roastery Lab &amp; Espresso Bar
            </h2>
          </div>
          <p className="text-sm text-[#6B5E52] max-w-md">
            Housed in a restored 1912 brick timber mill. An unhurried space for focused work, quiet reading, and sensory coffee discovery.
          </p>
        </div>

        {/* 2-Column Desktop Grid */}
        <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Location, Hours & Atmospheric Highlights */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Hours & Address Card */}
            <div className="bg-white border border-[#E8DFC8] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#F2ECE4] pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#241E19] font-semibold">
                    Open Today · 6:30 AM – 6:00 PM
                  </span>
                </div>
                <span className="text-xs font-mono text-[#8C7A6B]">
                  Batch Roasting Live
                </span>
              </div>

              {/* Hours Table */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#736353] block font-medium">
                  Operating Hours
                </span>
                <div className="space-y-1.5 text-xs text-[#4A3E33]">
                  {STORE_INFO.hours.map((h, idx) => (
                    <div key={idx} className="flex justify-between py-1 border-b border-[#F6F2EC]">
                      <span className="font-medium">{h.days}</span>
                      <span className="font-mono text-[#7A6A5C] tabular-nums">{h.open} – {h.close}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Address & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#736353] block font-medium">
                    Location
                  </span>
                  <p className="text-xs text-[#241E19] font-medium">
                    {STORE_INFO.address}
                  </p>
                  <p className="text-xs text-[#7A6A5C]">
                    {STORE_INFO.city}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#736353] block font-medium">
                    Direct Contact
                  </span>
                  <p className="text-xs text-[#241E19] font-mono">
                    {STORE_INFO.phone}
                  </p>
                  <p className="text-xs text-[#7A6A5C]">
                    {STORE_INFO.email}
                  </p>
                </div>
              </div>

            </div>

            {/* Amenities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STORE_INFO.amenities.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#EAE3D9] rounded-xl p-4 space-y-1 shadow-2xs">
                  <h4 className="text-xs font-medium text-[#241E19] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9C6237]" />
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#7A6A5C] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Stylized Minimalist Map & Inquiry Form */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Stylized Architectural Map Card */}
            <div className="bg-[#241E19] text-[#FBF9F5] border border-[#3D322A] rounded-2xl p-6 shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#D5C0A8]">
                  Historic Mill District
                </span>
                <span className="text-xs text-[#8A7563] font-mono">45.5231° N, 122.6765° W</span>
              </div>

              {/* Stylized Architectural Vector Blueprint of the Cafe */}
              <div className="w-full h-44 bg-[#181310] rounded-xl border border-[#382F27] relative overflow-hidden flex items-center justify-center p-4">
                {/* Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a221b_1px,transparent_1px),linear-gradient(to_bottom,#2a221b_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />
                
                {/* Floor plan outlines */}
                <div className="relative z-10 w-full h-full border border-[#524436] rounded-lg p-2 flex flex-col justify-between">
                  <div className="flex justify-between items-center text-[10px] font-mono text-[#A8988A]">
                    <span>Espresso Bar &amp; Synesso Bench</span>
                    <span className="text-[#9C6237]">Loring Roasting Bay</span>
                  </div>
                  
                  {/* Center pin */}
                  <div className="text-center py-2">
                    <div className="w-7 h-7 rounded-full bg-[#9C6237] text-white flex items-center justify-center mx-auto shadow-lg animate-bounce">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-serif text-[#FBF9F5] block mt-1">
                      Atelier Main Entrance
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-[10px] font-mono text-[#A8988A]">
                    <span>Covered Garden Patio</span>
                    <span>Turntable Listening Zone</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-xs text-[#B3A190] leading-relaxed">
                Curbside pickup bays available directly in front of the brick arches on Artisan Alley. Street parking on NW 10th &amp; Johnson.
              </div>
            </div>

            {/* Quick Inquiry / Private Event Box */}
            <div className="bg-white border border-[#E8DFC8] rounded-2xl p-6 shadow-xs">
              <h3 className="text-base font-serif font-medium text-[#241E19] mb-1">
                Private Events &amp; Group Tasting Inquiries
              </h3>
              <p className="text-xs text-[#6B5E52] mb-4">
                Hosting a morning gathering or interested in private cupping flights? Leave us a quick note.
              </p>

              {!inquirySent ? (
                <form onSubmit={handleSendInquiry} className="space-y-3">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#D5C8BC] rounded-lg text-xs text-[#241E19] placeholder:text-[#A8988A] focus:outline-none focus:ring-1 focus:ring-[#9C6237]"
                  />
                  <textarea
                    rows={2}
                    required
                    placeholder="Tell us about your event date or inquiry..."
                    value={inquiryText}
                    onChange={(e) => setInquiryText(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#D5C8BC] rounded-lg text-xs text-[#241E19] placeholder:text-[#A8988A] focus:outline-none focus:ring-1 focus:ring-[#9C6237] resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#241E19] text-[#FBF9F5] text-xs font-medium rounded-lg hover:bg-[#3D322B] transition-colors cursor-pointer"
                  >
                    Send to Cafe Manager
                  </button>
                </form>
              ) : (
                <div className="p-3 bg-[#EAF7ED] text-[#1E7E34] text-xs rounded-lg border border-[#C3E6CB] flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Thank you! We've received your note and will reply within 24 hours.</span>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
