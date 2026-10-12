import React from 'react';
import { CheckCircle2, Calendar, Clock, MapPin, User, Scissors, Phone, MessageCircle, X } from 'lucide-react';
import { Appointment, SALON_INFO } from '../data/salonData';

interface BookingConfirmationModalProps {
  appointment: Appointment | null;
  onClose: () => void;
}

export const BookingConfirmationModal: React.FC<BookingConfirmationModalProps> = ({
  appointment,
  onClose,
}) => {
  if (!appointment) return null;

  const whatsappMessage = encodeURIComponent(
    `Assalam-o-Alaikum J Style Salon! ✨\n\nI just booked an appointment online:\n• Booking ID: ${appointment.id}\n• Name: ${appointment.fullName}\n• Phone: ${appointment.phone}\n• Service: ${appointment.serviceTitle}\n• Barber / Stylist: ${appointment.stylistName}\n• Date: ${appointment.date}\n• Time: ${appointment.time}\n• Est. Total: Rs. ${appointment.totalPrice.toLocaleString()}\n\nPlease confirm my slot. Thank you!`
  );

  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative max-w-lg w-full bg-[#13141f] border border-[#d4af37]/60 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#1c1e2b] text-zinc-400 hover:text-white flex items-center justify-center cursor-pointer border border-[#2b2e40]"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Success Badge */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(52,211,153,0.3)]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <span className="text-xs uppercase tracking-widest font-bold text-[#ecc872]">
            Booking Confirmed
          </span>
          <h3 className="font-luxury text-2xl sm:text-3xl font-bold text-white">
            Appointment Reserved!
          </h3>
          <p className="text-xs text-zinc-300">
            Your appointment has been registered at J Style Salon.
          </p>
        </div>

        {/* Receipt Card */}
        <div className="p-5 rounded-2xl bg-[#191b28] border border-[#272a3c] space-y-3.5">
          <div className="flex items-center justify-between pb-3 border-b border-[#252839]">
            <span className="text-xs text-zinc-400">Booking Reference</span>
            <span className="font-mono text-sm font-bold text-[#ecc872] bg-[#d4af37]/15 px-2.5 py-0.5 rounded-full border border-[#d4af37]/30">
              {appointment.id}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-zinc-400 block mb-0.5">Guest Name</span>
              <span className="font-semibold text-white flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-[#d4af37]" />
                {appointment.fullName}
              </span>
            </div>

            <div>
              <span className="text-zinc-400 block mb-0.5">Phone Number</span>
              <span className="font-semibold text-white flex items-center gap-1 font-mono">
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                {appointment.phone}
              </span>
            </div>

            <div>
              <span className="text-zinc-400 block mb-0.5">Service</span>
              <span className="font-semibold text-white flex items-center gap-1">
                <Scissors className="w-3.5 h-3.5 text-[#d4af37]" />
                {appointment.serviceTitle}
              </span>
            </div>

            <div>
              <span className="text-zinc-400 block mb-0.5">Barber / Stylist</span>
              <span className="font-semibold text-[#ecc872] flex items-center gap-1">
                {appointment.stylistName}
              </span>
            </div>

            <div>
              <span className="text-zinc-400 block mb-0.5">Date</span>
              <span className="font-semibold text-white flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                {appointment.date}
              </span>
            </div>

            <div>
              <span className="text-zinc-400 block mb-0.5">Time Slot</span>
              <span className="font-semibold text-white flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                {appointment.time}
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#252839] flex items-center justify-between">
            <span className="text-xs text-zinc-400">Total Payable at Salon</span>
            <span className="font-luxury font-bold text-lg text-[#ecc872]">
              Rs. {appointment.totalPrice.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Location Note */}
        <div className="flex items-center gap-2 p-3 rounded-xl bg-[#171824] border border-[#242636] text-xs text-zinc-300">
          <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
          <span>{SALON_INFO.address}</span>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Send Confirmation to WhatsApp</span>
          </a>

          <button
            onClick={onClose}
            className="w-full py-3 rounded-full bg-[#1e202e] hover:bg-[#282b3d] text-zinc-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Done & Return to Website
          </button>
        </div>
      </div>
    </div>
  );
};
