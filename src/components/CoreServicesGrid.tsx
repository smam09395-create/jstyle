import React from 'react';
import { Scissors, Sparkles, Smile, Brush, Shield, Hand, Flame, UserCheck, ArrowRight } from 'lucide-react';
import { CORE_SERVICE_CATEGORIES } from '../data/salonData';

interface CoreServicesGridProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CoreServicesGrid: React.FC<CoreServicesGridProps> = ({ onSelectCategory }) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors': return Scissors;
      case 'Sparkles': return Sparkles;
      case 'Smile': return Smile;
      case 'Brush': return Brush;
      case 'Shield': return Shield;
      case 'Hand': return Hand;
      case 'Flame': return Flame;
      case 'UserCheck': return UserCheck;
      default: return Scissors;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#0c0d12] relative overflow-hidden">
      {/* Subtle decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching reference image */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d4af37]">
            Our Services
          </span>
          <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Premium Services for Men & Women
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light pt-1">
            From hair to skin, we take care of your complete look.
          </p>
        </div>

        {/* 8 Circular Icon Service Cards matching layout in reference image */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {CORE_SERVICE_CATEGORIES.map((service) => {
            const Icon = getCategoryIcon(service.icon);

            return (
              <button
                key={service.id}
                onClick={() => onSelectCategory(service.id)}
                className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-[#12131b] border border-[#232533] hover:border-[#d4af37]/70 hover:bg-[#161824] transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-[0_12px_30px_rgba(212,175,55,0.18)] cursor-pointer"
              >
                {/* Circular Gold Icon Enclosure */}
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-2 border-[#d4af37] bg-[#1a1c27] flex items-center justify-center text-[#d4af37] group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-black group-hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 mb-5">
                  <Icon className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.6]" />
                </div>

                {/* Service Title */}
                <h3 className="font-luxury text-base sm:text-lg font-bold text-white group-hover:text-[#ecc872] transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-light">
                  {service.subtitle}
                </p>

                {/* Subtle hover arrow */}
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[11px] font-semibold text-[#d4af37]">
                  <span>Explore Pricing</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
