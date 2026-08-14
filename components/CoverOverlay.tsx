"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInvitation } from "@/lib/InvitationContext";
import FloralDivider from "@/components/ornaments/FloralDivider";
import { invitationData } from "@/lib/data";

export default function CoverOverlay() {
  const { isOpened, openInvitation, guestName } = useInvitation();
  const { mempelaiWanita, mempelaiPria, backgroundCover, coverFoto } = invitationData;

  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-between overflow-hidden bg-blush px-6 py-8 text-center sm:py-10"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Background foto/tekstur opsional (lib/data.ts -> backgroundCover) */}
          {backgroundCover && (
            <>
              <Image
                src={backgroundCover}
                alt=""
                fill
                priority
                sizes="100vw"
                className="pointer-events-none absolute inset-0 object-cover"
              />
              {/* Tint blush + vignette gelap tipis agar teks & tombol tetap terbaca */}
              <div className="pointer-events-none absolute inset-0 bg-blush/80" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blush/30 via-transparent to-maroon/30" />
            </>
          )}

          {/* ambient texture */}
          <div className="bg-floral-dots pointer-events-none absolute inset-0 opacity-60" />
          <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-rose/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-24 h-56 w-56 rounded-full bg-rose/10 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative z-10 pt-2"
          >
            <p className="eyebrow text-maroon-muted">The Wedding Of</p>
          </motion.div>

          {/* Foto mempelai dibingkai floral — ukuran disamakan dengan bingkai foto di CoupleProfile */}
          {coverFoto && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 mx-auto h-56 w-56 sm:h-72 sm:w-72"
            >
              {/* Glow lembut di belakang foto */}
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-rose/20 blur-2xl" />

              {/* Cincin ganda rose sebagai bingkai */}
              <div className="absolute inset-0 rounded-full border-[3px] border-rose/70 p-1.5">
                <div className="relative h-full w-full overflow-hidden rounded-full border border-rose-soft shadow-soft">
                  <Image
                    src={coverFoto}
                    alt={`${mempelaiWanita.namaPanggilan} & ${mempelaiPria.namaPanggilan}`}
                    fill
                    priority
                    sizes="(max-width: 640px) 224px, 288px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Bunga kecil di puncak bingkai */}
              <div className="absolute -top-3 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-rose bg-blush shadow-rose">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-rose" fill="currentColor" aria-hidden="true">
                  <circle cx="12" cy="12" r="2.6" />
                  <circle cx="12" cy="5.5" r="2.4" opacity="0.85" />
                  <circle cx="12" cy="18.5" r="2.4" opacity="0.85" />
                  <circle cx="5.5" cy="12" r="2.4" opacity="0.85" />
                  <circle cx="18.5" cy="12" r="2.4" opacity="0.85" />
                </svg>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center gap-3"
          >
            <h1 className="font-display text-display-md text-maroon">
              {mempelaiWanita.namaPanggilan}
              <span className="mx-3 text-rose">&amp;</span>
              {mempelaiPria.namaPanggilan}
            </h1>
            <FloralDivider />
            <p className="font-body text-sm tracking-widest text-maroon-muted">
              {invitationData.tanggalUtamaTampil}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="relative z-10 flex w-full max-w-xs flex-col items-center gap-4"
          >
            <div className="w-full rounded-2xl border border-rose/30 bg-white/40 px-6 py-4 backdrop-blur-sm">
              <p className="font-body text-xs uppercase tracking-[0.25em] text-maroon-muted">
                Kepada Yth. Bapak/Ibu/Saudara/i
              </p>
              <p className="mt-2 font-display text-xl text-maroon">{guestName}</p>
            </div>

            <button
              onClick={openInvitation}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-rose bg-maroon px-8 py-3 font-body text-sm uppercase tracking-[0.2em] text-blush shadow-rose transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Buka Undangan</span>
              <motion.span
                aria-hidden
                className="relative z-10"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
              >
                →
              </motion.span>
            </button>
            <p className="font-body text-[11px] text-maroon-muted">
              Mohon maaf apabila terdapat kesalahan pada penulisan nama/gelar
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}