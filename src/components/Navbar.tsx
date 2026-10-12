import React, { useState } from 'react';
import { Calendar, Menu, X, Instagram, Facebook, Phone, Clock, MapPin } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { SalonLogo } from './SalonLogo';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenMyBookings: () => void;
  bookingCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenMyBookings,
  bookingCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Salon Videos', href: '#videos' },
    { name: 'Services', href: '#services' },
    { name: 'Barbers & Ayesha', href: '#stylists' },
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top announcement bar with exact hours & phone from user */}
      <div className="bg-[#101118] border-b border-[#212330] text-xs text-[#a1a1aa] py-2 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              Plot C2, 1st Floor, A Block, Phase 9, DHA, Lahore
            </span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
              {SALON_INFO.timing}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#ecc872] font-semibold hidden md:inline">
              ✨ 1 HydraFacial ke sath 2nd Free Offer!
            </span>
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="flex items-center gap-1 text-zinc-200 hover:text-[#d4af37] font-semibold transition-colors"
            >
              <Phone className="w-3 h-3 text-[#d4af37]" />
              <span>{SALON_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#0c0d12]/95 backdrop-blur-md border-b border-[#20222f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo with transparent background as explicitly requested */}
          <a href="#home" className="group flex items-center">
            <SalonLogo size="md" />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-[#ecc872] transition-colors tracking-wide relative py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons & Socials */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Social Icons */}
            <div className="flex items-center gap-2 pr-2 border-r border-[#262836]">
              <a
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-transparent hover:bg-[#181a24] text-zinc-300 hover:text-[#d4af37] flex items-center justify-center transition-all"
                title="Instagram: @jstylemenswomenssalon"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SALON_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-transparent hover:bg-[#181a24] text-zinc-300 hover:text-[#d4af37] flex items-center justify-center transition-all"
                title="Facebook: J Style Men's Salon"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            {/* My Bookings Pill */}
            {bookingCount > 0 && (
              <button
                onClick={onOpenMyBookings}
                className="px-3 py-2 rounded-lg bg-[#181a24] text-xs font-medium text-zinc-200 hover:text-white border border-[#2d3042] hover:border-[#d4af37] transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>My Bookings</span>
                <span className="px-1.5 py-0.2 text-[10px] font-bold rounded-full bg-[#d4af37] text-black">
                  {bookingCount}
                </span>
              </button>
            )}

            {/* CTA Button */}
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ecc872] via-[#d4af37] to-[#b88523] text-black text-sm font-bold shadow-[0_4px_18px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_24px_rgba(212,175,55,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all tracking-wide flex items-center gap-1.5 cursor-pointer"
            >
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 rounded-full bg-[#d4af37] text-black text-xs font-bold sm:hidden cursor-pointer"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#181a24] text-zinc-300 hover:text-white border border-[#262836] cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0c0d12] border-b border-[#262836] px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:text-[#d4af37] hover:bg-[#151722] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#222430] flex flex-col gap-2.5">
              {bookingCount > 0 && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenMyBookings();
                  }}
                  className="w-full py-2.5 rounded-lg bg-[#181a24] text-xs font-medium text-zinc-200 border border-[#2d3042] flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#d4af37]" />
                  <span>View My Bookings ({bookingCount})</span>
                </button>
              )}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#ecc872] via-[#d4af37] to-[#b88523] text-black text-sm font-bold tracking-wide shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Your Appointment</span>
              </button>

              <div className="flex flex-col gap-1 text-xs text-zinc-400 pt-2 border-t border-[#1c1d27]">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" /> Plot C2, Phase 9 DHA, Lahore
                </span>
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <Clock className="w-3.5 h-3.5 text-[#d4af37]" /> {SALON_INFO.timing}
                </span>
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" /> {SALON_INFO.phone}
                </span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
