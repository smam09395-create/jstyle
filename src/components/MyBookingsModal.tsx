import React from 'react';
import { Calendar, Clock, X, Trash2, Scissors, MessageCircle } from 'lucide-react';
import { Appointment, SALON_INFO } from '../data/salonData';

interface MyBookingsModalProps {
  appointments: Appointment[];
  isOpen: boolean;
  onClose: () => void;
  onCancelAppointment: (id: string) => void;
}

export const MyBookingsModal: React.FC<MyBookingsModalProps> = ({
  appointments,
  isOpen,
  onClose,
  onCancelAppointment,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative max-w-lg w-full bg-[#13141f] border border-[#2b2e40] rounded-3xl p-6 shadow-2xl max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#232535]">
          <div>
            <h3 className="font-luxury text-xl font-bold text-white">
              My Booked Appointments
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              Manage your active reservations at J Style
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#1b1d28] text-zinc-400 hover:text-white flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto py-4 space-y-3 flex-1">
          {appointments.length === 0 ? (
            <div className="text-center py-12 text-zinc-400 space-y-2">
              <Calendar className="w-10 h-10 text-zinc-600 mx-auto" />
              <p className="text-sm">No appointments booked yet.</p>
              <p className="text-xs text-zinc-500">
                Book a haircut, beard trim or hydrafacial above!
              </p>
            </div>
          ) : (
            appointments.map((app) => (
              <div
                key={app.id}
                className="p-4 rounded-2xl bg-[#181a25] border border-[#282b3c] flex flex-col justify-between gap-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#ecc872] bg-[#d4af37]/15 px-2 py-0.5 rounded">
                      ID: {app.id}
                    </span>
                    <h4 className="font-luxury font-bold text-white text-base mt-1 flex items-center gap-1.5">
                      <Scissors className="w-4 h-4 text-[#d4af37]" />
                      {app.serviceTitle}
                    </h4>
                    <p className="text-xs text-[#ecc872] mt-0.5">
                      Stylist: {app.stylistName}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-white">
                    Rs. {app.totalPrice.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs text-zinc-300">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                    {app.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                    {app.time}
                  </span>
                </div>

                <div className="pt-2 border-t border-[#232535] flex items-center justify-between">
                  <a
                    href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Assalam-o-Alaikum%2C%20regarding%20my%20appointment%20${app.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-semibold text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Salon</span>
                  </a>

                  <button
                    onClick={() => onCancelAppointment(app.id)}
                    className="text-[11px] text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Cancel Slot</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-[#232535]">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-full bg-[#1c1e2b] text-zinc-300 hover:text-white text-xs font-semibold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
