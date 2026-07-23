/**
 * Cover Section Component
 * Botanical Garden Theme - Premium wedding invitation hero
 * Full-screen portrait hero with couple photo and open invitation CTA
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Music, Volume2, VolumeX } from "lucide-react";
import { CoverData, Guest } from "@/types/invitation";

interface CoverProps {
  data: CoverData;
  guestName: string;
  coupleName: string;
  onOpen: () => void;
}

export function Cover({ data, guestName, coupleName, onOpen }: CoverProps) {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('${data.backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Botanical frame decoration */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 opacity-40">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full text-forest-green"
          fill="currentColor"
        >
          <path d="M20,20 Q50,10 80,20 Q100,5 120,20 Q150,10 180,20 L180,80 Q190,50 180,120 Q190,150 180,180 L20,180 Q10,150 20,120 Q10,50 20,80 Z" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-40 rotate-180">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full text-sage-green"
          fill="currentColor"
        >
          <path d="M20,20 Q50,10 80,20 Q100,5 120,20 Q150,10 180,20 L180,80 Q190,50 180,120 Q190,150 180,180 L20,180 Q10,150 20,120 Q10,50 20,80 Z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-2xl mx-auto">
        {/* Logo placeholder */}
        <div className="mb-8 md:mb-12 flex justify-center">
          <img
            src="/manus-storage/botanical-logo_ed5f6bc5.png"
            alt="Logo"
            className="w-16 h-16 md:w-24 md:h-24"
          />
        </div>

        {/* Guest greeting */}
        <p className="text-sm md:text-base tracking-widest text-white/90 mb-4 md:mb-6 uppercase">
          Dear {guestName}
        </p>

        {/* Couple names */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 md:mb-8 leading-tight">
          {coupleName}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-white/95 mb-8 md:mb-12 font-serif italic leading-relaxed">
          {data.subtitle || "We joyfully invite you to celebrate our love"}
        </p>

        {/* Date */}
        {data.date && (
          <p className="text-base md:text-lg text-white/90 mb-12 md:mb-16 tracking-wide">
            {data.date}
          </p>
        )}

        {/* Open Invitation Button */}
        <button
          onClick={onOpen}
          className="btn-botanical mb-8 md:mb-12 inline-block"
        >
          Open Invitation
        </button>

        {/* Music Player */}
        {data.musicUrl && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setIsMusicPlaying(!isMusicPlaying)}
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm"
              aria-label={isMusicPlaying ? "Pause music" : "Play music"}
            >
              {isMusicPlaying ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
            <span className="text-sm text-white/80">
              {isMusicPlaying ? "Music playing" : "Play background music"}
            </span>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
