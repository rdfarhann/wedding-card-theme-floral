"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  ReactNode,
} from "react";

interface InvitationContextValue {
  isOpened: boolean;
  openInvitation: () => void;
  guestName: string;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  isMuted: boolean;
  togglePlay: () => void;
  toggleMute: () => void;
}

const InvitationContext = createContext<InvitationContextValue | null>(null);

export function InvitationProvider({
  guestName,
  children,
}: {
  guestName: string;
  children: ReactNode;
}) {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const openInvitation = useCallback(() => {
    setIsOpened(true);
    document.body.classList.remove("no-scroll");
    const audio = audioRef.current;
    if (audio) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.error("Gagal autoplay audio:", err);
          setIsPlaying(false);
        });
    }
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  }, []);

  return (
    <InvitationContext.Provider
      value={{
        isOpened,
        openInvitation,
        guestName,
        audioRef,
        isPlaying,
        isMuted,
        togglePlay,
        toggleMute,
      }}
    >
      {/* 🟢 Pasang Tag Audio di Sini */}
      {/* Pastikan file bg-music.mp3 berada di folder public/audio/bg-music.mp3 */}
      <audio ref={audioRef} src="/audio/backsound.mp3" loop preload="auto" />
      
      {children}
    </InvitationContext.Provider>
  );
}

export function useInvitation() {
  const ctx = useContext(InvitationContext);
  if (!ctx) {
    throw new Error("useInvitation must be used within InvitationProvider");
  }
  return ctx;
}