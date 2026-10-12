import React, { useState } from 'react';
import { Scissors, Sparkles, Smile, Shield, Hand, Flame, UserCheck, ArrowRight, Clock, Check, ListFilter } from 'lucide-react';
import { SERVICES_LIST, SalonService } from '../data/salonData';

interface ServicesSectionProps {
  onSelectServiceForBooking: (service: SalonService) => void;
  activeGenderTab: 'men' | 'women';
  setActiveGenderTab: (tab: 'men' | 'women') => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
  activeGenderTab,
  setActiveGenderTab,
}) => {
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  // Filter services by gender and group
  const genderServices = SERVICES_LIST.filter((s) => s.category === activeGenderTab);
  const displayedServices = selectedGroup === 'all'
    ? genderServices
    : genderServices.filter((s) => s.group === selectedGroup);

  const filterGroups = activeGenderTab === 'men'
    ? [
        { id: 'all', label: 'All Men\'s Services' },
        { id: 'hair', label: 'Hair Cut & Color' },
        { id: 'beard', label: 'Beard Grooming' },
        { id: 'skin', label: 'Facial & HydraFacial' },
        { id: 'waxing', label: 'Waxing & Threading' },
      ]
    : [
        { id: 'all', label: 'All Women\'s Services' },
        { id: 'hair', label: 'Hair Cut & Styling' },
        { id: 'skin', label: 'HydraFacial Glow (1+1 Free)' },
        { id: 'treatment', label: 'Keratin & Treatments' },
        { id: 'nails', label: 'Manicure & Pedicure' },
        { id: 'waxing', label: 'Rica Waxing' },
      ];

  return (
    <section id="services" className="py-20 bg-[#0c0d12] relative overflow-hidden border-t border-[#1e202d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d4af37]">
              Our Services & Prices
            </span>
            <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide mt-1">
              Premium Services & Pricing
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light mt-1">
              All prices in PKR (Rs.) with certified stylists and authentic products.
            </p>
          </div>

          {/* Men's / Women's Toggle Switcher */}
          <div className="flex items-center gap-3">
            <div className="p-1 rounded-full bg-[#181a25] border border-[#27293a] flex items-center shrink-0">
              <button
                onClick={() => {
                  setActiveGenderTab('men');
                  setSelectedGroup('all');
                }}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeGenderTab === 'men'
                    ? 'bg-white text-black shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Men's Services
              </button>
              <button
                onClick={() => {
                  setActiveGenderTab('women');
                  setSelectedGroup('all');
                }}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeGenderTab === 'women'
                    ? 'bg-gradient-to-r from-[#ecc872] to-[#d4af37] text-black shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Women's Services
              </button>
            </div>

            {/* View Mode Switcher */}
            <button
              onClick={() => setViewMode(viewMode === 'cards' ? 'table' : 'cards')}
              className="p-2.5 rounded-full bg-[#181a25] border border-[#27293a] text-zinc-300 hover:text-[#d4af37] transition-colors cursor-pointer hidden sm:flex items-center gap-1.5 text-xs"
              title="Toggle List/Table view"
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span>{viewMode === 'cards' ? 'Price List' : 'Card View'}</span>
            </button>
          </div>
        </div>

        {/* Sub-category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-semibold">
          {filterGroups.map((grp) => (
            <button
              key={grp.id}
              onClick={() => setSelectedGroup(grp.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                selectedGroup === grp.id
                  ? 'bg-[#d4af37] text-black font-bold shadow-md'
                  : 'bg-[#151622] text-zinc-400 hover:text-white border border-[#232536]'
              }`}
            >
              {grp.label}
            </button>
          ))}
        </div>

        {/* Cards View Mode */}
        {viewMode === 'cards' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedServices.map((service) => (
              <div
                key={service.id}
                className="group rounded-3xl overflow-hidden bg-[#13141f] border border-[#242738] hover:border-[#d4af37] transition-all duration-300 shadow-md hover:shadow-[0_12px_35px_rgba(212,175,55,0.22)] flex flex-col justify-between"
              >
                <div>
                  {/* Service Visual */}
                  <div className="relative aspect-[16/10] w-full bg-zinc-900 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#13141f] via-transparent to-transparent" />

                    {/* Popular / Promo Pill */}
                    {service.id === 'w-hydrafacial' && (
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500 text-black shadow-md flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          1+1 FREE OFFER
                        </span>
                      </div>
                    )}
                    {service.popular && service.id !== 'w-hydrafacial' && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#d4af37] text-black shadow-md flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5" />
                          POPULAR
                        </span>
                      </div>
                    )}

                    {/* Duration badge */}
                    <div className="absolute bottom-3 right-3">
                      <span className="px-2.5 py-1 rounded-md text-[11px] bg-black/75 backdrop-blur-md text-zinc-300 border border-white/10 flex items-center gap-1 font-mono">
                        <Clock className="w-3 h-3 text-[#d4af37]" />
                        {service.durationMinutes} mins
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-2.5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-luxury text-lg font-bold text-white group-hover:text-[#ecc872] transition-colors leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Pricing & Booking Footer */}
                <div className="p-5 pt-3 border-t border-[#1f2231] flex items-center justify-between bg-[#161724]/50">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-zinc-400 block tracking-wider">
                      Salon Price
                    </span>
                    <span className="text-lg sm:text-xl font-luxury font-black text-[#ecc872]">
                      Rs. {service.price.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectServiceForBooking(service)}
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ecc872] to-[#d4af37] text-black text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Table / Price List Mode */
          <div className="rounded-2xl overflow-hidden border border-[#242738] bg-[#13141f] shadow-lg">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#181a26] text-zinc-300 border-b border-[#242738]">
                <tr>
                  <th className="py-3.5 px-4 font-bold text-white">Service Name</th>
                  <th className="py-3.5 px-4 font-bold text-white hidden sm:table-cell">Duration</th>
                  <th className="py-3.5 px-4 font-bold text-white">Price (PKR)</th>
                  <th className="py-3.5 px-4 font-bold text-white text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e202e] text-zinc-300">
                {displayedServices.map((service) => (
                  <tr key={service.id} className="hover:bg-[#181a28]/60 transition-colors">
                    <td className="py-3.5 px-4">
                      <span className="font-semibold text-white block">{service.title}</span>
                      <span className="text-[11px] text-zinc-400 hidden sm:inline">{service.description}</span>
                    </td>
                    <td className="py-3.5 px-4 text-zinc-400 hidden sm:table-cell">
                      {service.durationMinutes} mins
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#ecc872]">
                      Rs. {service.price.toLocaleString()}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => onSelectServiceForBooking(service)}
                        className="px-3.5 py-1.5 rounded-full bg-[#d4af37] text-black text-xs font-bold hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-1"
                      >
                        <span>Book</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
