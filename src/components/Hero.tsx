import React from 'react';
import { ArrowRight, Scissors, Sparkles, Smile, Shield, CheckCircle2, Star, MapPin, Clock } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeroProps {
  onBookAppointment: () => void;
  onSelectCategoryFilter: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookAppointment, onSelectCategoryFilter }) => {
  const quickCategories = [
    { name: 'Hair', icon: Scissors, filter: 'hair' },
    { name: 'Skin', icon: Sparkles, filter: 'skin' },
    { name: 'Nails', icon: Smile, filter: 'nails' },
    { name: 'Grooming', icon: Shield, filter: 'beard' },
  ];

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-6 pb-16">
      {/* Background with luxury salon ambience */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/jstyle_salon_hero_1791819644045.jpg"
          alt="J Style Luxury Salon Interior"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.28] contrast-[1.1]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/75 to-[#0c0d12]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Independence Day / Grand Special Offer Banner */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-950/80 via-[#181a24] to-amber-950/80 border border-[#d4af37]/40 shadow-[0_0_20px_rgba(212,175,55,0.15)] text-xs sm:text-sm text-zinc-200">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-[#ecc872]">Special Salon Offer:</span>
            <span>1 HydraFacial ke sath 2nd HydraFacial Bilkul Free!</span>
            <button
              onClick={onBookAppointment}
              className="text-[#d4af37] font-bold underline hover:text-[#ecc872] ml-1 cursor-pointer"
            >
              Claim Now
            </button>
          </div>
        </div>

        {/* Hero Central Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <p className="font-italic-serif text-xl sm:text-2xl md:text-3xl text-[#ecc872] tracking-wider">
            Look Good · Feel Good
          </p>

          <div className="flex flex-col items-center">
            <h1 className="font-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wider text-white">
              <span className="text-[#d4af37] drop-shadow-[0_4px_24px_rgba(212,175,55,0.4)]">J</span> STYLE
            </h1>
            <h2 className="font-luxury text-lg sm:text-2xl md:text-3xl font-semibold tracking-widest text-zinc-200 uppercase mt-1">
              Men's Women's Salon
            </h2>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
            {SALON_INFO.subheading}
          </p>

          {/* Location & Timings Badge */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-300 pt-1">
            <span className="flex items-center gap-1.5 bg-[#171924]/80 px-3 py-1 rounded-full border border-[#2a2d3e]">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              {SALON_INFO.shortAddress}
            </span>
            <span className="flex items-center gap-1.5 bg-[#171924]/80 px-3 py-1 rounded-full border border-[#2a2d3e]">
              <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
              {SALON_INFO.timing}
            </span>
          </div>

          {/* CTA Book Button */}
          <div className="pt-3 pb-6">
            <button
              onClick={onBookAppointment}
              className="inline-flex items-center gap-3 px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#ecc872] via-[#d4af37] to-[#b88523] text-black font-bold text-sm sm:text-base shadow-[0_10px_30px_rgba(212,175,55,0.35)] hover:shadow-[0_12px_36px_rgba(212,175,55,0.55)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Book Your Appointment</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Quick Categories Icons matching reference image */}
          <div className="pt-2 flex items-center justify-center gap-6 sm:gap-12 flex-wrap">
            {quickCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.name}
                  onClick={() => onSelectCategoryFilter(cat.filter)}
                  className="flex flex-col items-center gap-2 group cursor-pointer transition-transform hover:-translate-y-1"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#d4af37]/60 bg-[#151722]/80 backdrop-blur-sm flex items-center justify-center text-[#d4af37] group-hover:border-[#ecc872] group-hover:bg-[#d4af37]/15 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.75]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-300 group-hover:text-[#ecc872] tracking-wide">
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dual Master Showcase Cards (Ayesha in Yellow Knotted Top & Master Barber in Red Uniform) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Master Barber Feature Card */}
          <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-b from-[#181a24] to-[#101117] border border-[#2d3042] hover:border-[#d4af37]/50 transition-all p-5 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#d4af37] shrink-0 shadow-md">
                <img
                  src="/src/assets/images/master_barber_red_shirt_1791819632444.jpg"
                  alt="Master Barber in Red Shirt"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37] bg-[#d4af37]/10 px-2 py-0.5 rounded">
                    Head Master Barber
                  </span>
                  <div className="flex items-center text-amber-400 text-xs">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="ml-1 text-zinc-300 font-medium">4.9/5</span>
                  </div>
                </div>
                <h3 className="font-luxury text-lg sm:text-xl font-bold text-white mt-1 truncate">
                  Master Barber (Ustad)
                </h3>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                  Master of razor fades, precision scissor work, and beard contouring in signature red uniform.
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <button
                    onClick={onBookAppointment}
                    className="text-xs font-bold text-[#ecc872] hover:text-white flex items-center gap-1 group/btn cursor-pointer"
                  >
                    <span>Book with Master Barber</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Lady Stylist (Ayesha - matching video look) Feature Card */}
          <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-b from-[#181a24] to-[#101117] border border-[#2d3042] hover:border-[#d4af37]/50 transition-all p-5 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#d4af37] shrink-0 shadow-md">
                <img
                  src="/src/assets/images/ayesha_real_stylist_1791821231979.jpg"
                  alt="Ayesha Salon Director & Skin Aesthetician"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#ecc872] bg-[#ecc872]/10 px-2 py-0.5 rounded">
                    Salon Director & Aesthetician
                  </span>
                  <div className="flex items-center text-amber-400 text-xs">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="ml-1 text-zinc-300 font-medium">5.0/5</span>
                  </div>
                </div>
                <h3 className="font-luxury text-lg sm:text-xl font-bold text-white mt-1 truncate">
                  Ayesha (Director)
                </h3>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                  Signature HydraFacials, dewy glass skin glow, women's layering, and balayage color artistry.
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <button
                    onClick={onBookAppointment}
                    className="text-xs font-bold text-[#ecc872] hover:text-white flex items-center gap-1 group/btn cursor-pointer"
                  >
                    <span>Book with Ayesha</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-10 pt-8 border-t border-[#222430] flex flex-wrap justify-around items-center gap-4 text-xs sm:text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
            <span>Separate VIP Men's & Women's Sections</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
            <span>Certified Stylists & Aestheticians</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
            <span>Premium Imported Products</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
            <span>{SALON_INFO.timing}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
