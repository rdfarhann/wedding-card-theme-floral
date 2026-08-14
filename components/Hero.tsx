"use client";

import Image from "next/image";
import { invitationData } from "@/lib/data";
import FloralFrame from "@/components/ornaments/FloralFrame";
import FloralDivider from "@/components/ornaments/FloralDivider";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  const { mempelaiWanita, mempelaiPria, tanggalUtamaTampil, heroFoto, backgroundHero } =
    invitationData;

  const maskSvg = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 248 292'><path d='M0 0 C0 140, 0 230, 124 292 C248 230, 248 140, 248 0 Z' fill='black'/></svg>")`;

  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#acara");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-blush px-6 pb-12 pt-16 text-center"
    >
      {/* ── 1. FOTO WATERCOLOR FLORAL SEBAGAI BACKGROUND HERO FULLSCREEN ── */}
      {backgroundHero && (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <Image
            src={backgroundHero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70"
          />
          {/* Overlay tipis agar teks & foto di atasnya tetap kontras dan mudah dibaca */}
          <div className="absolute inset-0 bg-blush/50" />
        </div>
      )}

      {/* Pola titik floral transparan (opsional) */}
      <div className="bg-floral-dots pointer-events-none absolute inset-0 opacity-30 z-0" />

      {/* Teks Pembuka */}
      <FadeIn className="relative z-10 mb-6">
        <p className="eyebrow text-maroon-muted">The Wedding Of</p>
      </FadeIn>

      {/* ── Container Frame Foto Floral ── */}
      <FadeIn
        delay={0.15}
        className="relative z-10 mx-auto h-[420px] w-[320px] sm:h-[500px] sm:w-[400px] md:h-[560px] md:w-[460px]"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-rose/20 blur-3xl" />

        {/* SVG FloralFrame */}
        <FloralFrame />

        {/* Masking Foto */}
        <div
          className="absolute inset-x-[15.5%] top-[27.2%] bottom-[6.4%] overflow-hidden z-10 shadow-soft"
          style={{
            WebkitMaskImage: maskSvg,
            WebkitMaskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskImage: maskSvg,
            maskSize: "100% 100%",
            maskRepeat: "no-repeat",
          }}
        >
          <Image
            src={heroFoto}
            alt={`${mempelaiWanita.namaPanggilan} & ${mempelaiPria.namaPanggilan}`}
            fill
            priority
            sizes="(max-width: 640px) 320px, (max-width: 768px) 400px, 460px"
            className="object-cover"
          />
        </div>
      </FadeIn>

      {/* ── Nama Mempelai & Tanggal ── */}
      <FadeIn delay={0.3} className="relative z-10 mt-6 flex flex-col items-center gap-3">
        <h1 className="font-display text-display-lg text-maroon text-balance leading-tight">
          {mempelaiWanita.namaPanggilan}
          <span className="mx-4 text-rose-light">&amp;</span>
          {mempelaiPria.namaPanggilan}
        </h1>
        <FloralDivider className="my-1" />
        <p className="font-body text-xs uppercase tracking-[0.3em] text-maroon-muted sm:text-sm">
          {tanggalUtamaTampil}
        </p>
      </FadeIn>

      {/* ── Tombol Scroll Down ── */}
      <FadeIn delay={0.45} className="relative z-10 mt-8">
        <a
          href="#acara"
          onClick={handleScrollDown}
          className="inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-maroon/20 bg-blush/70 px-6 py-2.5 font-body text-xs uppercase tracking-[0.25em] text-maroon-muted shadow-sm transition-all hover:border-rose hover:bg-white hover:text-rose-light hover:shadow-md"
        >
          Gulir ke bawah
          <span className="animate-bounce text-rose-light">↓</span>
        </a>
      </FadeIn>
    </section>
  );
}