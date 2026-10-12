import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [customMsg, setCustomMsg] = useState('');

  if (!isVisible) return null;

  const quickPrompts = [
    "Assalam-o-Alaikum, I'd like to book an appointment for today.",
    "Can you share more details about the 1+1 HydraFacial offer?",
    "I want to book haircut & beard styling with Master Barber.",
    "Is Director Ayesha available for skin consultation tomorrow?"
  ];

  const handleSend = (text: string) => {
    const url = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick WhatsApp Chat Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#141520] border border-[#2f3348] shadow-2xl p-4 text-xs animate-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#232535]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#25D366] text-black flex items-center justify-center font-bold">
                <MessageCircle className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">J Style Salon Support</h4>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {SALON_INFO.timing}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-zinc-300 py-3 leading-relaxed">
            Assalam-o-Alaikum! Welcome to J Style Men's Women's Salon ({SALON_INFO.shortAddress}). How can we assist you today?
          </p>

          <div className="space-y-1.5 mb-3">
            <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">
              Quick Inquiries:
            </span>
            {quickPrompts.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="w-full text-left p-2 rounded-lg bg-[#1c1e2b] hover:bg-[#252839] text-zinc-200 text-[11px] border border-[#292c3d] transition-colors flex items-center justify-between cursor-pointer"
              >
                <span className="truncate">{q}</span>
                <Send className="w-3 h-3 text-[#d4af37] shrink-0 ml-1" />
              </button>
            ))}
          </div>

          <div className="flex gap-1.5 pt-2 border-t border-[#232535]">
            <input
              type="text"
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => {
                if (e.key === 'Enter' && customMsg.trim()) {
                  handleSend(customMsg);
                  setCustomMsg('');
                }
              }}
              className="flex-1 px-3 py-2 rounded-lg bg-[#1c1e2b] text-white border border-[#2b2e40] text-xs placeholder:text-zinc-500 focus:outline-none focus:border-[#25D366]"
            />
            <button
              onClick={() => {
                if (customMsg.trim()) {
                  handleSend(customMsg);
                  setCustomMsg('');
                }
              }}
              className="p-2 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Pill Bar matching reference screenshot */}
      <div className="flex items-center gap-1.5 p-1 pl-3.5 pr-2 rounded-full bg-[#25D366] text-black shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] hover:scale-105 transition-all group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-xs sm:text-sm font-bold cursor-pointer select-none"
        >
          <div className="w-6 h-6 rounded-full bg-black/15 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 fill-current" />
          </div>
          <span>Chat with us</span>
          <span className="font-mono text-xs opacity-90 hidden sm:inline">
            {SALON_INFO.whatsappDisplay}
          </span>
        </button>

        {/* Dismiss 'x' button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsVisible(false);
          }}
          className="w-5 h-5 rounded-full hover:bg-black/20 text-black/80 flex items-center justify-center cursor-pointer ml-1"
          title="Dismiss"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
