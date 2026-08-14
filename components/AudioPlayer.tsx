"use client";

import { useInvitation } from "@/lib/InvitationContext";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioPlayer() {
  const { isPlaying, togglePlay } = useInvitation();

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        onClick={togglePlay}
        title={isPlaying ? "Matikan Musik" : "Putar Musik"}
        aria-label={isPlaying ? "Matikan Musik" : "Putar Musik"}
        className={`flex h-11 w-11 items-center justify-center rounded-full border border-rose/30 shadow-md backdrop-blur-md transition-all duration-300 active:scale-95 ${
          isPlaying
            ? "bg-maroon text-blush hover:bg-maroon-soft"
            : "bg-blush/90 text-rose-light hover:bg-white hover:scale-105"
        }`}
      >
        {isPlaying ? (
          <Volume2 size={18} className="animate-pulse text-blush" />
        ) : (
          <VolumeX size={18} className="text-rose-light" />
        )}
      </button>
    </div>
  );
}