import React from 'react';
import { Star, Calendar, Check, Scissors, Sparkles, Award } from 'lucide-react';
import { STYLISTS, Stylist } from '../data/salonData';

interface StylistsSectionProps {
  onBookWithStylist: (stylist: Stylist) => void;
}

export const StylistsSection: React.FC<StylistsSectionProps> = ({ onBookWithStylist }) => {
  return (
    <section id="stylists" className="py-20 bg-[#0e0f16] border-t border-[#1f212d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d4af37]">
            Meet The Masters
          </span>
          <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Our Master Barbers & Stylists
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light pt-1">
            Featuring Salon Director Ayesha and our Head Master Barber as seen in our salon videos at DHA Phase 9 Lahore.
          </p>
        </div>

        {/* Primary Featured Duo (Ayesha & Master Barber in Red Uniform) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {STYLISTS.slice(0, 2).map((stylist) => (
            <div
              key={stylist.id}
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#181a25] to-[#111219] border border-[#2b2e3e] hover:border-[#d4af37] transition-all duration-300 shadow-xl flex flex-col sm:flex-row"
            >
              {/* Stylist Image */}
              <div className="sm:w-2/5 relative h-80 sm:h-auto overflow-hidden bg-zinc-900">
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/80 via-transparent to-transparent sm:via-black/20" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#d4af37] text-black shadow-md flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {stylist.id === 'ayesha' ? 'Director' : 'Head Master'}
                  </span>
                </div>
              </div>

              {/* Stylist Content */}
              <div className="sm:w-3/5 p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-semibold text-[#ecc872] tracking-wide">
                      {stylist.badge}
                    </span>
                    <div className="flex items-center text-amber-400 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="ml-1 text-zinc-300">4.95 Rating</span>
                    </div>
                  </div>

                  <h3 className="font-luxury text-2xl font-bold text-white group-hover:text-[#ecc872] transition-colors">
                    {stylist.name}
                  </h3>

                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    {stylist.experience}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-300 mt-3 leading-relaxed">
                    {stylist.bio}
                  </p>

                  {/* Specialties List */}
                  <div className="mt-4 pt-3 border-t border-[#242636]">
                    <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-2">
                      Specializations:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {stylist.specialty.map((spec) => (
                        <span
                          key={spec}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-[#202230] text-zinc-300 border border-[#2d3042] flex items-center gap-1"
                        >
                          <Check className="w-3 h-3 text-[#d4af37]" />
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Book Action Button */}
                <div className="mt-6 pt-3">
                  <button
                    onClick={() => onBookWithStylist(stylist)}
                    className="w-full py-3 rounded-full bg-gradient-to-r from-[#ecc872] via-[#d4af37] to-[#b88523] text-black text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Appointment with {stylist.name.split(' ')[0]}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Senior Stylists Team */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {STYLISTS.slice(2).map((stylist) => (
            <div
              key={stylist.id}
              className="p-5 rounded-2xl bg-[#14151f] border border-[#232534] hover:border-[#d4af37]/60 transition-all flex items-center gap-4 group"
            >
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-[#d4af37]/60 shrink-0">
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-luxury text-base font-bold text-white truncate">
                    {stylist.name}
                  </h4>
                  <span className="text-[10px] text-[#ecc872] font-semibold">{stylist.experience}</span>
                </div>
                <p className="text-xs text-zinc-400 mt-0.5">{stylist.role}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {stylist.specialty.slice(0, 2).map((s) => (
                    <span key={s} className="text-[10px] text-zinc-300 bg-[#1e202d] px-2 py-0.5 rounded">
                      {s}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => onBookWithStylist(stylist)}
                  className="mt-2 text-xs font-bold text-[#d4af37] hover:text-[#ecc872] flex items-center gap-1 cursor-pointer"
                >
                  <span>Book with {stylist.name.split(' ')[0]}</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
