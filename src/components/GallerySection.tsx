import React, { useState } from 'react';
import { Instagram, Eye, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS, SALON_INFO } from '../data/salonData';

interface GallerySectionProps {
  onBookNow: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onBookNow }) => {
  const [filter, setFilter] = useState<'all' | 'hair' | 'skin' | 'beard' | 'women'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-20 bg-[#0e0f15] border-t border-[#1f212c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching reference image */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
              Our Gallery
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 font-light">
              Real People. Real Transformations. Captured live at J Style Salon.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1b1d28] hover:bg-[#d4af37] text-white hover:text-black text-xs sm:text-sm font-semibold border border-[#2e3144] hover:border-transparent transition-all shadow-sm"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow Us on Instagram</span>
            </a>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-semibold">
          {[
            { id: 'all', label: 'All Transformations' },
            { id: 'hair', label: 'Haircuts & Styling' },
            { id: 'skin', label: 'HydraFacials & Skin' },
            { id: 'beard', label: 'Beard Sculpting' },
            { id: 'women', label: "Women's Glamour" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-[#d4af37] text-black font-bold shadow-md'
                  : 'bg-[#161722] text-zinc-400 hover:text-white border border-[#242636]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Cards Grid matching reference image */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item.image)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#161722] border border-[#252737] hover:border-[#d4af37] transition-all duration-300 shadow-md cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                  <Eye className="w-4 h-4" />
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#ecc872] tracking-wider">
                  {item.clientType}
                </span>
                <p className="text-xs sm:text-sm font-bold text-white leading-tight group-hover:text-[#ecc872] transition-colors">
                  {item.title}
                </p>
                <div className="flex flex-wrap gap-1 pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.tags.map((t) => (
                    <span key={t} className="text-[9px] bg-black/70 text-zinc-300 px-1.5 py-0.5 rounded">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Photo Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="relative max-w-3xl max-h-[85vh] rounded-2xl overflow-hidden border border-[#d4af37]/40">
              <img
                src={selectedPhoto}
                alt="Selected Transformation"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-[#141520] flex items-center justify-between">
                <p className="text-sm font-semibold text-white">J Style Salon Signature Transformation</p>
                <button
                  onClick={onBookNow}
                  className="px-4 py-1.5 rounded-full bg-[#d4af37] text-black text-xs font-bold flex items-center gap-1 cursor-pointer"
                >
                  <span>Book This Look</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
