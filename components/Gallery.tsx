"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { invitationData } from "@/lib/data";
import FadeIn from "@/components/FadeIn";
import FloralDivider from "@/components/ornaments/FloralDivider";

export default function Gallery() {
  const { gallery, videoEmbedUrl } = invitationData;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % gallery.length));

  return (
    <section className="section-frame">
      <FadeIn className="mb-14 text-center">
        <p className="eyebrow mb-3">Gallery</p>
        <h2 className="font-display text-display-md text-maroon">Momen Bahagia</h2>
        <FloralDivider className="mt-6" />
      </FadeIn>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-3">
        {gallery.slice(0, 15).map((item, idx) => (
          <FadeIn key={item.src} delay={(idx % 6) * 0.06}>
            <button
              onClick={() => setActiveIndex(idx)}
              className="group relative block aspect-square w-full overflow-hidden rounded-2xl border-2 border-rose/25 shadow-soft"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 46vw, 180px"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-maroon/0 transition group-hover:bg-maroon/20" />
            </button>
          </FadeIn>
        ))}
      </div>

      {videoEmbedUrl && (
        <FadeIn delay={0.2} className="mt-10">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-rose/25 shadow-soft">
            <iframe
              src={videoEmbedUrl}
              title="Wedding video"
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </FadeIn>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-maroon/95 px-4"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Tutup"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-rose/40 text-blush"
            >
              <X size={18} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Sebelumnya"
              className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full border border-rose/40 text-blush sm:left-6"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Selanjutnya"
              className="absolute right-3 flex h-10 w-10 items-center justify-center rounded-full border border-rose/40 text-blush sm:right-6"
            >
              <ChevronRight size={18} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative h-[70vh] w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={gallery[activeIndex].src}
                alt={gallery[activeIndex].alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}