import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, CheckCircle2, ShieldCheck, UserCheck, ArrowRight, Sparkles, Phone, User, Scissors } from 'lucide-react';
import { SERVICES_LIST, STYLISTS, TIME_SLOTS, Appointment, SalonService, Stylist, SALON_INFO } from '../data/salonData';

interface BookingSectionProps {
  preselectedService?: SalonService | null;
  preselectedStylist?: Stylist | null;
  onBookingSuccess: (appointment: Appointment) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preselectedService,
  preselectedStylist,
  onBookingSuccess,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [genderCategory, setGenderCategory] = useState<'men' | 'women'>('men');
  const [serviceId, setServiceId] = useState('');
  const [stylistId, setStylistId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setGenderCategory(preselectedService.category);
      setServiceId(preselectedService.id);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedStylist) {
      setStylistId(preselectedStylist.id);
      if (preselectedStylist.gender === 'female') {
        setGenderCategory('women');
      } else if (preselectedStylist.gender === 'male') {
        setGenderCategory('men');
      }
    }
  }, [preselectedStylist]);

  useEffect(() => {
    if (!date) {
      const today = new Date().toISOString().split('T')[0];
      setDate(today);
    }
    if (!time) {
      setTime(TIME_SLOTS[0]); // 11:00 AM based on new opening hours
    }
  }, []);

  const availableServices = SERVICES_LIST.filter(
    (s) => s.category === genderCategory
  );

  const selectedService = SERVICES_LIST.find((s) => s.id === serviceId) || availableServices[0];
  const selectedStylist = STYLISTS.find((s) => s.id === stylistId);

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'HYDRA14' || promoCode.trim().toUpperCase() === 'JSTYLE') {
      setPromoApplied(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Invalid promo code. Try "HYDRA14" for the 1+1 HydraFacial offer!');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 8) {
      setErrorMsg('Please enter a valid contact phone number');
      return;
    }
    if (!serviceId && !selectedService) {
      setErrorMsg('Please select a salon service');
      return;
    }
    if (!date) {
      setErrorMsg('Please select an appointment date');
      return;
    }
    if (!time) {
      setErrorMsg('Please select an appointment time slot');
      return;
    }

    setIsSubmitting(true);

    const bookingId = `JS-${Math.floor(1000 + Math.random() * 9000)}`;
    const finalService = selectedService || availableServices[0];
    const finalStylistName = selectedStylist ? selectedStylist.name : 'First Available Master Stylist';

    const newAppointment: Appointment = {
      id: bookingId,
      fullName: fullName.trim(),
      phone: phone.trim(),
      serviceId: finalService.id,
      serviceTitle: finalService.title,
      stylistId: stylistId || 'any',
      stylistName: finalStylistName,
      date,
      time,
      genderCategory,
      notes: notes.trim(),
      status: 'confirmed',
      createdAt: new Date().toISOString(),
      totalPrice: finalService.price,
    };

    setTimeout(() => {
      setIsSubmitting(false);
      onBookingSuccess(newAppointment);
      setFullName('');
      setPhone('');
      setNotes('');
    }, 400);
  };

  const setQuickDate = (daysAhead: number) => {
    const d = new Date();
    d.setDate(d.getDate() + daysAhead);
    setDate(d.toISOString().split('T')[0]);
  };

  return (
    <section id="book" className="py-20 bg-gradient-to-b from-[#0c0d12] via-[#101118] to-[#0c0d12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column matching reference screenshot */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d4af37]">
                Online Reservation
              </span>
              <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
                Book Your Appointment
              </h2>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              Your time matters. Book now and get the best service at your convenience with Director Ayesha & our Master Barber.
            </p>

            {/* 3 Badges matching reference screenshot */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#141520] border border-[#242637] flex flex-col items-center text-center">
                <Clock className="w-5 h-5 text-[#d4af37] mb-2" />
                <span className="text-xs font-bold text-white">Quick Booking</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#141520] border border-[#242637] flex flex-col items-center text-center">
                <CheckCircle2 className="w-5 h-5 text-[#d4af37] mb-2" />
                <span className="text-xs font-bold text-white">Instant Confirmation</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#141520] border border-[#242637] flex flex-col items-center text-center">
                <UserCheck className="w-5 h-5 text-[#d4af37] mb-2" />
                <span className="text-xs font-bold text-white">Easy & Convenient</span>
              </div>
            </div>

            {/* Promo Callout Card */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 to-[#181a26] border border-[#d4af37]/30 text-xs text-zinc-300 space-y-1">
              <div className="flex items-center gap-2 text-[#ecc872] font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Video Special Grand Offer</span>
              </div>
              <p>
                Get 1+1 Free on HydraFacial with Ayesha! Apply code <strong className="text-white font-mono bg-black/50 px-1 py-0.5 rounded">HYDRA14</strong> below.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#booking-card"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#ecc872] to-[#d4af37] text-black font-bold text-xs sm:text-sm hover:scale-105 transition-all"
              >
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Make a Booking Card matching reference screenshot */}
          <div id="booking-card" className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#13141e] border border-[#282b3d] shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#232535]">
                <div>
                  <h3 className="font-luxury text-xl sm:text-2xl font-bold text-white">
                    Make a Booking
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Select your preferred service, barber & time slot ({SALON_INFO.timing}).
                  </p>
                </div>

                {/* Gender switch */}
                <div className="flex rounded-full bg-[#1c1e2b] p-1 border border-[#2d3043] text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => {
                      setGenderCategory('men');
                      setServiceId('');
                    }}
                    className={`px-3 py-1 rounded-full cursor-pointer transition-all ${
                      genderCategory === 'men'
                        ? 'bg-white text-black'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Men
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setGenderCategory('women');
                      setServiceId('');
                    }}
                    className={`px-3 py-1 rounded-full cursor-pointer transition-all ${
                      genderCategory === 'women'
                        ? 'bg-[#d4af37] text-black'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Women
                  </button>
                </div>
              </div>

              {errorMsg && (
                <div className="mb-4 p-3 rounded-xl bg-rose-950/50 border border-rose-500/40 text-rose-200 text-xs">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name & Phone Number row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#d4af37]" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your name"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-[#191b26] border border-[#292c3d] text-white text-xs sm:text-sm placeholder:text-zinc-500 focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0302 2380871"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-[#191b26] border border-[#292c3d] text-white text-xs sm:text-sm placeholder:text-zinc-500 focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Scissors className="w-3.5 h-3.5 text-[#d4af37]" />
                      Select Service *
                    </span>
                    {selectedService && (
                      <span className="text-xs font-mono font-bold text-[#ecc872]">
                        Rs. {selectedService.price.toLocaleString()} ({selectedService.durationMinutes} min)
                      </span>
                    )}
                  </label>
                  <select
                    value={serviceId || (selectedService ? selectedService.id : '')}
                    onChange={(e) => setServiceId(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#191b26] border border-[#292c3d] text-white text-xs sm:text-sm focus:outline-none focus:border-[#d4af37] transition-colors cursor-pointer"
                  >
                    {availableServices.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title} — Rs. {service.price.toLocaleString()} ({service.durationMinutes}m)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Barber / Stylist Selection (Featuring Ayesha & Master Barber in Red Uniform) */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                      Preferred Barber / Stylist
                    </span>
                    <span className="text-[11px] text-[#ecc872]">
                      Ayesha & Master Barber
                    </span>
                  </label>
                  <select
                    value={stylistId}
                    onChange={(e) => setStylistId(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#191b26] border border-[#292c3d] text-white text-xs sm:text-sm focus:outline-none focus:border-[#d4af37] transition-colors cursor-pointer"
                  >
                    <option value="">Any Available Master Stylist</option>
                    <option value="ayesha">✨ Ayesha — Director & Skin/Facial Specialist (Video Feature)</option>
                    <option value="master-tariq">✂️ Master Barber (Ustad) — Head Master Barber in Red Uniform</option>
                    <option value="hamza-malik">💈 Hamza Malik — Senior Men's Stylist & Beard Artisan</option>
                    <option value="sana-sheikh">🎨 Sana Sheikh — Senior Hair Colorist & Nail Specialist</option>
                  </select>
                </div>

                {/* Date & Time Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <CalendarIcon className="w-3.5 h-3.5 text-[#d4af37]" />
                        Date *
                      </span>
                      <div className="flex gap-1 text-[10px]">
                        <button
                          type="button"
                          onClick={() => setQuickDate(0)}
                          className="text-[#d4af37] hover:underline"
                        >
                          Today
                        </button>
                        <span>·</span>
                        <button
                          type="button"
                          onClick={() => setQuickDate(1)}
                          className="text-[#d4af37] hover:underline"
                        >
                          Tmrw
                        </button>
                      </div>
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#191b26] border border-[#292c3d] text-white text-xs sm:text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                      Time Slot (11:00 AM – 11:00 PM) *
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-[#191b26] border border-[#292c3d] text-white text-xs sm:text-sm focus:outline-none focus:border-[#d4af37] transition-colors cursor-pointer"
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Promo Code & Notes row */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-1">
                  <div className="sm:col-span-5">
                    <label className="block text-[11px] font-medium text-zinc-400 mb-1">
                      Promo Code (Optional)
                    </label>
                    <div className="flex gap-1.5">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="e.g. HYDRA14"
                        className="w-full px-3 py-2 rounded-lg bg-[#191b26] border border-[#292c3d] text-white text-xs uppercase font-mono placeholder:text-zinc-600 focus:outline-none focus:border-[#d4af37]"
                      />
                      <button
                        type="button"
                        onClick={handleApplyPromo}
                        className="px-3 py-2 rounded-lg bg-[#252839] hover:bg-[#d4af37] hover:text-black text-xs font-semibold text-zinc-300 transition-colors shrink-0"
                      >
                        Apply
                      </button>
                    </div>
                    {promoApplied && (
                      <span className="text-[10px] text-emerald-400 font-semibold block mt-1">
                        ✓ Promo applied: 1+1 HydraFacial Offer!
                      </span>
                    )}
                  </div>

                  <div className="sm:col-span-7">
                    <label className="block text-[11px] font-medium text-zinc-400 mb-1">
                      Special Request or Notes
                    </label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Beard sculpting with hot towel, sensitive skin"
                      className="w-full px-3 py-2 rounded-lg bg-[#191b26] border border-[#292c3d] text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#ecc872] via-[#d4af37] to-[#b88523] text-black font-bold text-sm sm:text-base shadow-[0_10px_30px_rgba(212,175,55,0.35)] hover:shadow-[0_12px_40px_rgba(212,175,55,0.55)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Reserving Your Seat...</span>
                    ) : (
                      <>
                        <span>Confirm Booking</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center pt-1">
                  <span className="text-[11px] text-zinc-400">
                    No advance payment required. Direct payment at salon counter.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
