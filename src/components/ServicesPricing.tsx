import React, { useState } from 'react';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';
import { SERVICES_LIST, SalonService } from '../data/salonData';

interface ServicesPricingProps {
  onSelectServiceForBooking: (service: SalonService) => void;
  activeGenderTab: 'men' | 'women';
  setActiveGenderTab: (tab: 'men' | 'women') => void;
}

export const ServicesPricing: React.FC<ServicesPricingProps> = ({
  onSelectServiceForBooking,
  activeGenderTab,
  setActiveGenderTab,
}) => {
  const filteredServices = SERVICES_LIST.filter(
    (s) => s.category === activeGenderTab
  );

  return (
    <section id="pricing" className="py-20 bg-[#0c0d12] border-t border-[#1f212c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Men's/Women's Tab Switcher matching reference screenshot */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
              Our Services
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light">
              Choose from a wide range of services tailored for your style and comfort.
            </p>
          </div>

          {/* Men's Services / Women's Services Toggle Switcher */}
          <div className="p-1 rounded-full bg-[#181a25] border border-[#27293a] flex items-center shrink-0 w-fit">
            <button
              onClick={() => setActiveGenderTab('men')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeGenderTab === 'men'
                  ? 'bg-white text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Men's Services
            </button>
            <button
              onClick={() => setActiveGenderTab('women')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeGenderTab === 'women'
                  ? 'bg-gradient-to-r from-[#ecc872] to-[#d4af37] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Women's Services
            </button>
          </div>
        </div>

        {/* Services Cards Grid matching reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl overflow-hidden bg-[#141520] border border-[#232535] hover:border-[#d4af37] transition-all duration-300 shadow-md hover:shadow-[0_10px_25px_rgba(212,175,55,0.2)] flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[4/3] w-full bg-zinc-900 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141520] via-transparent to-transparent" />

                  {service.popular && (
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#d4af37] text-black shadow-sm flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-2 right-2">
                    <span className="px-2 py-0.5 rounded-md text-[10px] bg-black/70 backdrop-blur-md text-zinc-300 border border-white/10 flex items-center gap-1 font-mono">
                      <Clock className="w-2.5 h-2.5 text-[#d4af37]" />
                      {service.durationMinutes}m
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 space-y-1.5">
                  <h3 className="font-luxury text-base font-bold text-white group-hover:text-[#ecc872] transition-colors line-clamp-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Price & Book Now Footer */}
              <div className="p-4 pt-2 border-t border-[#1e202e] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-zinc-400 block">
                    Price
                  </span>
                  <span className="text-sm sm:text-base font-luxury font-bold text-[#ecc872]">
                    Rs. {service.price.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => onSelectServiceForBooking(service)}
                  className="px-3.5 py-1.5 rounded-full bg-[#1e202e] hover:bg-[#d4af37] text-xs font-bold text-zinc-200 hover:text-black transition-all flex items-center gap-1 group/btn cursor-pointer"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
