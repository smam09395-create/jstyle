import React from 'react';
import { MapPin, Phone, Instagram, Facebook, Video, Youtube, Mail, Clock } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { SalonLogo } from './SalonLogo';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#08090d] border-t border-[#1a1b24] text-zinc-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Location */}
          <div className="space-y-4">
            <SalonLogo size="md" />

            <div className="flex items-start gap-2 pt-2 text-zinc-300">
              <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <span>{SALON_INFO.address}</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-300">
              <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>{SALON_INFO.timing}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-luxury font-bold text-white text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#d4af37] transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">Services & Pricing</a>
              </li>
              <li>
                <a href="#videos" className="hover:text-[#d4af37] transition-colors">Salon Videos</a>
              </li>
              <li>
                <a href="#stylists" className="hover:text-[#d4af37] transition-colors">Director Ayesha & Master Barber</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#d4af37] transition-colors">Transformation Gallery</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#d4af37] transition-colors">About J Style</a>
              </li>
              <li>
                <a href="#book" className="hover:text-[#d4af37] transition-colors">Book Appointment</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div className="space-y-3">
            <h4 className="font-luxury font-bold text-white text-sm tracking-wider uppercase">
              Social Media
            </h4>
            <div className="space-y-1.5 text-xs text-zinc-400">
              <p>
                Instagram: <strong className="text-zinc-200">{SALON_INFO.instagramHandle}</strong>
              </p>
              <p>
                Facebook: <strong className="text-zinc-200">{SALON_INFO.facebookName}</strong>
              </p>
            </div>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#181a25] text-zinc-300 hover:text-[#d4af37] hover:bg-[#222435] flex items-center justify-center transition-all"
                title={`Instagram: ${SALON_INFO.instagramHandle}`}
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SALON_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#181a25] text-zinc-300 hover:text-[#d4af37] hover:bg-[#222435] flex items-center justify-center transition-all"
                title={`Facebook: ${SALON_INFO.facebookName}`}
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SALON_INFO.tiktokUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#181a25] text-zinc-300 hover:text-[#d4af37] hover:bg-[#222435] flex items-center justify-center transition-all"
                title="TikTok"
              >
                <Video className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#181a25] text-zinc-300 hover:text-[#d4af37] hover:bg-[#222435] flex items-center justify-center transition-all"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-3">
            <h4 className="font-luxury font-bold text-white text-sm tracking-wider uppercase">
              Contact & Booking
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-zinc-300">
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <a href={`tel:${SALON_INFO.phone}`} className="hover:text-[#d4af37] font-semibold">
                  {SALON_INFO.phone} (Call / WhatsApp)
                </a>
              </div>
              <div className="flex items-start gap-2 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Plot C2, 1st Floor, Phase 9 DHA, Lahore</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>appointments@jstylesalon.pk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#1a1b26] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} J Style Men's Women's Salon · DHA Phase 9 Lahore. All Rights Reserved.</p>
          <p className="font-italic-serif text-sm sm:text-base text-[#d4af37] tracking-wider">
            Look Good · Feel Good
          </p>
        </div>
      </div>
    </footer>
  );
};
