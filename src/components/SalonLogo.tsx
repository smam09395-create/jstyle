import React from 'react';

interface SalonLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const SalonLogo: React.FC<SalonLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  // Dimension scales
  const monogramHeight = size === 'sm' ? 'h-9 w-9' : size === 'lg' ? 'h-14 w-14' : 'h-11 w-11';
  const titleSize = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl' : 'text-base';
  const subSize = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-xs' : 'text-[10px]';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 bg-transparent select-none ${className}`}>
      {/* 
        Intertwined J and S Monogram matching the exact uploaded image.png
        Transparent background - NO white card or box!
      */}
      <div className={`relative ${monogramHeight} flex items-center justify-center shrink-0`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_2px_10px_rgba(212,175,55,0.35)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldMonogram" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF1BD" />
              <stop offset="40%" stopColor="#E5B84C" />
              <stop offset="75%" stopColor="#C99427" />
              <stop offset="100%" stopColor="#9E7216" />
            </linearGradient>
            <linearGradient id="silverS" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
          </defs>

          {/* Letter 'S' - Elegant Serif interlinked with J */}
          <path
            d="M 64 30 C 60 23 51 21 44 21 C 33 21 27 27 27 35 C 27 46 36 49 48 53 C 60 57 69 62 69 73 C 69 84 59 90 47 90 C 37 90 28 85 24 76 L 31 71 C 34 77 40 82 48 82 C 55 82 60 78 60 71 C 60 62 52 58 40 54 C 28 50 19 45 19 33 C 19 23 29 14 43 14 C 53 14 62 18 68 25 Z"
            fill="url(#silverS)"
            opacity="0.95"
          />

          {/* Letter 'J' - Prominent Tall Gold Serif weaving through S */}
          <path
            d="M 40 10 L 62 10 L 62 16 L 54 16 L 54 68 C 54 78 48 88 34 88 C 24 88 17 82 14 74 L 21 69 C 23 74 27 79 33 79 C 40 79 45 74 45 66 L 45 16 L 38 16 Z"
            fill="url(#goldMonogram)"
          />
        </svg>
      </div>

      {/* Typography: J. STYLES / Hair lounge */}
      <div className="flex flex-col justify-center leading-tight">
        <span
          className={`font-luxury font-bold tracking-[0.2em] uppercase text-white group-hover:text-[#ecc872] transition-colors ${titleSize}`}
        >
          J. STYLES
        </span>
        {showSubtitle && (
          <span
            className={`font-italic-serif tracking-wider text-[#ecc872] font-medium -mt-0.5 ${subSize}`}
          >
            Hair lounge
          </span>
        )}
      </div>
    </div>
  );
};
