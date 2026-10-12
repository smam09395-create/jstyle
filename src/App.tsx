/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoReelsSection } from './components/VideoReelsSection';
import { ServicesSection } from './components/ServicesSection';
import { StylistsSection } from './components/StylistsSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { BookingSection } from './components/BookingSection';
import { BookingConfirmationModal } from './components/BookingConfirmationModal';
import { MyBookingsModal } from './components/MyBookingsModal';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Appointment, SalonService, Stylist, SERVICES_LIST, STYLISTS } from './data/salonData';

export default function App() {
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    try {
      const saved = localStorage.getItem('jstyle_appointments');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return [];
  });

  const [activeGenderTab, setActiveGenderTab] = useState<'men' | 'women'>('men');
  const [preselectedService, setPreselectedService] = useState<SalonService | null>(null);
  const [preselectedStylist, setPreselectedStylist] = useState<Stylist | null>(null);
  const [confirmationAppointment, setConfirmationAppointment] = useState<Appointment | null>(null);
  const [isMyBookingsOpen, setIsMyBookingsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('jstyle_appointments', JSON.stringify(appointments));
    } catch {
      // ignore
    }
  }, [appointments]);

  const scrollToBooking = () => {
    const el = document.getElementById('book');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectCategoryFilter = (filterKey: string) => {
    if (filterKey === 'beard') {
      setActiveGenderTab('men');
    } else if (filterKey === 'nails') {
      setActiveGenderTab('women');
    }
    scrollToServices();
  };

  const handleSelectServiceForBooking = (service: SalonService) => {
    setPreselectedService(service);
    setActiveGenderTab(service.category);
    scrollToBooking();
  };

  const handleBookWithStylist = (stylist: Stylist) => {
    setPreselectedStylist(stylist);
    if (stylist.gender === 'female') {
      setActiveGenderTab('women');
    } else if (stylist.gender === 'male') {
      setActiveGenderTab('men');
    }
    scrollToBooking();
  };

  const handleBookServiceWithStylist = (serviceName: string, stylistName: string) => {
    const matchedService = SERVICES_LIST.find((s) =>
      s.title.toLowerCase().includes(serviceName.toLowerCase())
    );
    const matchedStylist = STYLISTS.find((st) =>
      st.name.toLowerCase().includes(stylistName.toLowerCase())
    );

    if (matchedService) {
      setPreselectedService(matchedService);
      setActiveGenderTab(matchedService.category);
    }
    if (matchedStylist) {
      setPreselectedStylist(matchedStylist);
    }
    scrollToBooking();
  };

  const handleBookingSuccess = (newAppointment: Appointment) => {
    setAppointments((prev) => [newAppointment, ...prev]);
    setConfirmationAppointment(newAppointment);
  };

  const handleCancelAppointment = (id: string) => {
    setAppointments((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0c0d12] text-zinc-100 flex flex-col selection:bg-[#d4af37]/30 selection:text-[#d4af37]">
      {/* Navigation Bar */}
      <Navbar
        onOpenBooking={scrollToBooking}
        onOpenMyBookings={() => setIsMyBookingsOpen(true)}
        bookingCount={appointments.length}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onBookAppointment={scrollToBooking}
          onSelectCategoryFilter={handleSelectCategoryFilter}
        />

        {/* User Salon Videos (Autoplaying Muted + Sound/Upload options) */}
        <VideoReelsSection
          onBookServiceWithStylist={handleBookServiceWithStylist}
        />

        {/* Our Services & Prices Section (Consolidated with PKR Prices & Booking) */}
        <ServicesSection
          onSelectServiceForBooking={handleSelectServiceForBooking}
          activeGenderTab={activeGenderTab}
          setActiveGenderTab={setActiveGenderTab}
        />

        {/* Master Barbers & Stylists Section (Ayesha in Yellow & Master Barber in Red) */}
        <StylistsSection
          onBookWithStylist={handleBookWithStylist}
        />

        {/* About J Style Salon (Plot C2 DHA Phase 9 Lahore) */}
        <AboutSection
          onBookAppointment={scrollToBooking}
        />

        {/* Transformations Gallery */}
        <GallerySection
          onBookNow={scrollToBooking}
        />

        {/* Online Reservation / Booking Form */}
        <BookingSection
          preselectedService={preselectedService}
          preselectedStylist={preselectedStylist}
          onBookingSuccess={handleBookingSuccess}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Confirmation Receipt Modal */}
      <BookingConfirmationModal
        appointment={confirmationAppointment}
        onClose={() => setConfirmationAppointment(null)}
      />

      {/* My Bookings Drawer */}
      <MyBookingsModal
        appointments={appointments}
        isOpen={isMyBookingsOpen}
        onClose={() => setIsMyBookingsOpen(false)}
        onCancelAppointment={handleCancelAppointment}
      />

      {/* Floating WhatsApp Quick Consultation Widget (0302 2380871) */}
      <FloatingWhatsApp />
    </div>
  );
}
