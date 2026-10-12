import React from 'react';
import { Users, Sparkles, ShieldCheck, ArrowRight, Clock, MapPin, Phone } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface AboutSectionProps {
  onBookAppointment: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBookAppointment }) => {
  return (
    <section id="about" className="py-20 bg-[#0c0d12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Salon Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/40 shadow-[0_15px_40px_rgba(0,0,0,0.6)] group">
              <img
                src="/src/assets/images/jstyle_salon_hero_1791819644045.jpg"
                alt="J Style Salon Interior Lounge"
                className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Exact Location & Opening details */}
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#ecc872] font-semibold">
                  Official Luxury Salon
                </span>
                <p className="font-luxury text-base sm:text-lg font-bold text-white">
                  {SALON_INFO.address}
                </p>
                <div className="flex items-center gap-3 text-xs text-zinc-300 pt-1">
                  <span className="flex items-center gap-1 text-[#d4af37]">
                    <Clock className="w-3.5 h-3.5" /> {SALON_INFO.timing}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-[#d4af37]">
                    <Phone className="w-3.5 h-3.5" /> {SALON_INFO.phone}
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Gold Accent Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-[#d4af37]/30 rounded-br-3xl pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: About Content matching reference screenshot */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d4af37]">
                About J Style
              </span>
              <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
                {SALON_INFO.aboutHeading}
              </h2>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              {SALON_INFO.aboutText}
            </p>

            {/* 3 Core Pillars matching the exact badges in reference image */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#141520] border border-[#232535] flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#1e202e] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-white">
                  Professional Stylists
                </h4>
                <p className="text-[11px] text-zinc-400 mt-1">
                  Director Ayesha & Master Barber team
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141520] border border-[#232535] flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#1e202e] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-white">
                  Premium Products
                </h4>
                <p className="text-[11px] text-zinc-400 mt-1">
                  100% authentic dermatological care
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141520] border border-[#232535] flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#1e202e] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-white">
                  Hygienic & Safe
                </h4>
                <p className="text-[11px] text-zinc-400 mt-1">
                  Medical-grade tool sterilization
                </p>
              </div>
            </div>

            {/* Button matching reference image */}
            <div className="pt-4">
              <button
                onClick={onBookAppointment}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#ecc872] via-[#d4af37] to-[#b88523] text-black font-bold text-sm shadow-[0_8px_24px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>Book Your Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
