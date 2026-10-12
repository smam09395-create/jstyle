import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Instagram, Maximize2, X, Heart, Sparkles, Upload, Check, Video, RefreshCw, ArrowRight } from 'lucide-react';
import { FEATURED_VIDEOS, VideoReel, SALON_INFO } from '../data/salonData';

interface VideoReelsSectionProps {
  onBookServiceWithStylist: (serviceName: string, stylistName: string) => void;
}

export const VideoReelsSection: React.FC<VideoReelsSectionProps> = ({ onBookServiceWithStylist }) => {
  const [activeVideo, setActiveVideo] = useState<VideoReel | null>(null);
  const [globalMuted, setGlobalMuted] = useState(true);
  const [customVideoUrls, setCustomVideoUrls] = useState<Record<string, string>>({});
  const [playingStates, setPlayingStates] = useState<Record<string, boolean>>({
    'video-1': true,
    'video-2': true,
  });

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const fileInputRef1 = useRef<HTMLInputElement | null>(null);
  const fileInputRef2 = useRef<HTMLInputElement | null>(null);

  const togglePlay = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRefs.current[id];
    if (!vid) return;

    if (vid.paused) {
      vid.play().then(() => {
        setPlayingStates((prev) => ({ ...prev, [id]: true }));
      }).catch(() => {});
    } else {
      vid.pause();
      setPlayingStates((prev) => ({ ...prev, [id]: false }));
    }
  };

  const toggleGlobalMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMuted = !globalMuted;
    setGlobalMuted(nextMuted);

    Object.values(videoRefs.current).forEach((vid) => {
      if (vid) {
        vid.muted = nextMuted;
      }
    });
  };

  const handleCustomFileUpload = (id: string, file: File) => {
    const objectUrl = URL.createObjectURL(file);
    setCustomVideoUrls((prev) => ({ ...prev, [id]: objectUrl }));
    const vid = videoRefs.current[id];
    if (vid) {
      vid.src = objectUrl;
      vid.muted = globalMuted;
      vid.play().catch(() => {});
    }
  };

  useEffect(() => {
    Object.values(videoRefs.current).forEach((vid) => {
      if (vid) {
        vid.muted = true;
        vid.play().catch(() => {});
      }
    });
  }, []);

  return (
    <section id="videos" className="py-20 bg-[#0e0f15] border-y border-[#1f212c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs text-[#ecc872] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>User Uploaded Salon Videos</span>
            </div>
            <h2 className="font-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide">
              Official Salon Videos
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl font-light">
              Both videos provided play automatically on mute. You can unmute audio anytime or load your direct video file!
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleGlobalMute}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#181a24] text-xs font-medium text-zinc-300 hover:text-white border border-[#2d3042] hover:border-[#d4af37] transition-all cursor-pointer"
            >
              {globalMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-[#d4af37]" />
                  <span>Unmute Audio</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                  <span>Audio Playing</span>
                </>
              )}
            </button>

            {/* Follow On Instagram */}
            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1e202d] to-[#2a2d3f] hover:from-[#d4af37] hover:to-[#ecc872] hover:text-black text-white text-xs sm:text-sm font-semibold border border-[#373a4e] hover:border-transparent transition-all shadow-sm"
            >
              <Instagram className="w-4 h-4" />
              <span>{SALON_INFO.instagramHandle}</span>
            </a>
          </div>
        </div>

        {/* Hidden File Inputs for Direct Video Replacement */}
        <input
          type="file"
          ref={fileInputRef1}
          accept="video/*"
          className="hidden"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              handleCustomFileUpload('video-1', e.target.files[0]);
            }
          }}
        />
        <input
          type="file"
          ref={fileInputRef2}
          accept="video/*"
          className="hidden"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              handleCustomFileUpload('video-2', e.target.files[0]);
            }
          }}
        />

        {/* 2 Featured Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {FEATURED_VIDEOS.map((video) => {
            const isPlaying = playingStates[video.id] ?? true;
            const currentVideoSrc = customVideoUrls[video.id] || video.videoSrc;
            const isCustom = Boolean(customVideoUrls[video.id]);

            return (
              <div
                key={video.id}
                onClick={() => setActiveVideo({ ...video, videoSrc: currentVideoSrc })}
                className="group relative rounded-3xl overflow-hidden bg-[#151622] border border-[#292c3d] hover:border-[#d4af37] transition-all duration-300 shadow-xl hover:shadow-[0_15px_35px_rgba(212,175,55,0.25)] cursor-pointer flex flex-col"
              >
                {/* 9:16 Video Player Container */}
                <div className="relative aspect-[9/14] sm:aspect-[9/13] w-full bg-black overflow-hidden">
                  <video
                    ref={(el) => { videoRefs.current[video.id] = el; }}
                    src={currentVideoSrc}
                    poster={video.posterSrc}
                    autoPlay
                    loop
                    muted={globalMuted}
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-semibold text-white">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[#ecc872]">
                      {isCustom ? 'Custom File Playing' : video.badge}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (video.id === 'video-1') {
                          fileInputRef1.current?.click();
                        } else {
                          fileInputRef2.current?.click();
                        }
                      }}
                      className="flex items-center gap-1.5 bg-black/75 hover:bg-[#d4af37] hover:text-black backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-xs text-zinc-200 transition-colors cursor-pointer"
                      title="Upload / Select your exact video file"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>{isCustom ? 'Replace Video' : 'Select Video File'}</span>
                    </button>
                  </div>

                  {/* Play/Pause Button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <button
                      onClick={(e) => togglePlay(video.id, e)}
                      className="w-14 h-14 rounded-full bg-black/70 backdrop-blur-md border-2 border-[#d4af37] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-auto hover:scale-110 hover:bg-[#d4af37] hover:text-black cursor-pointer shadow-lg"
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
                    </button>
                  </div>

                  {/* Bottom Text & Stylist Info */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-2">
                    <div className="flex items-center justify-between text-xs text-zinc-300">
                      <span className="text-[#ecc872] font-semibold bg-[#d4af37]/15 px-2.5 py-0.5 rounded-full border border-[#d4af37]/30">
                        {video.featuredStylist}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-zinc-300">
                        <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
                        {video.likes}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#ecc872] transition-colors leading-snug">
                      {video.title}
                    </h3>

                    <p className="text-xs text-zinc-300 line-clamp-2 font-light">
                      {video.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="p-4 bg-[#12131d] border-t border-[#222434] flex items-center justify-between text-xs">
                  <span className="text-zinc-400 font-medium">Click to expand with full sound</span>
                  <div className="flex items-center gap-1.5 text-[#d4af37] font-bold group-hover:translate-x-1 transition-transform">
                    <span>Watch Full</span>
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Player */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-[#12131b] border border-[#d4af37]/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/80 text-zinc-300 hover:text-white flex items-center justify-center cursor-pointer border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="md:w-3/5 bg-black relative aspect-[9/16] md:aspect-auto md:h-[520px]">
                <video
                  src={activeVideo.videoSrc}
                  autoPlay
                  loop
                  controls
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:w-2/5 p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-[#d4af37] bg-[#d4af37]/15 px-2.5 py-0.5 rounded-full">
                      {activeVideo.category}
                    </span>
                    <span className="text-xs text-zinc-400">{activeVideo.views} views</span>
                  </div>

                  <h3 className="font-luxury text-xl font-bold text-white">
                    {activeVideo.title}
                  </h3>

                  <p className="text-xs text-[#ecc872] mt-1.5 font-semibold">
                    Featuring {activeVideo.featuredStylist}
                  </p>

                  <p className="text-xs text-zinc-300 mt-3 leading-relaxed">
                    {activeVideo.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#262838] space-y-2.5">
                  <button
                    onClick={() => {
                      const service = activeVideo.id === 'video-1' ? 'Hair Cut & Style' : 'Signature HydraFacial (1+1 Free)';
                      const stylist = activeVideo.id === 'video-1' ? 'Master Barber (Ustad)' : 'Ayesha';
                      onBookServiceWithStylist(service, stylist);
                      setActiveVideo(null);
                    }}
                    className="w-full py-3 rounded-full bg-gradient-to-r from-[#ecc872] via-[#d4af37] to-[#b88523] text-black text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] cursor-pointer"
                  >
                    <span>Book With {activeVideo.featuredStylist.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={SALON_INFO.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-full bg-[#1a1c27] text-zinc-300 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Watch on Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
