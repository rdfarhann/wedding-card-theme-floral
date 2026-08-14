"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import { invitationData } from "@/lib/data";
import { Mempelai } from "@/lib/types";
import FadeIn from "@/components/FadeIn";
import FloralDivider from "@/components/ornaments/FloralDivider";
import FloralCorner from "@/components/ornaments/FloralCorner";

function ProfileCard({ data, direction }: { data: Mempelai; direction: "left" | "right" }) {
  return (
    <FadeIn direction={direction} className="flex flex-col items-center text-center">
      <div className="relative mb-5 h-56 w-56 sm:h-72 sm:w-72 md:h-64 md:w-64 lg:h-72 lg:w-72">
        {/* Cincin ganda rose + bingkai foto */}
        <div className="relative h-full w-full overflow-hidden rounded-full border-[3px] border-rose/50 p-1.5 shadow-rose">
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src={data.foto}
              alt={data.namaLengkap}
              fill
              sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, (max-width: 1024px) 256px, 288px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Bunga kecil di puncak bingkai, senada dengan foto di Cover Overlay */}
        <div className="absolute -top-3 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-rose bg-blush shadow-rose">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-rose" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="12" r="2.6" />
            <circle cx="12" cy="5.5" r="2.4" opacity="0.85" />
            <circle cx="12" cy="18.5" r="2.4" opacity="0.85" />
            <circle cx="5.5" cy="12" r="2.4" opacity="0.85" />
            <circle cx="18.5" cy="12" r="2.4" opacity="0.85" />
          </svg>
        </div>
      </div>

      <h3 className="font-display text-2xl text-maroon sm:text-3xl">{data.namaPanggilan}</h3>
      <p className="mt-1 font-body text-sm text-maroon-muted">{data.namaLengkap}</p>
      <p className="mt-3 max-w-[220px] font-body text-xs leading-relaxed text-maroon-muted">
        {data.anakKe} dari
        <br />
        {data.namaOrangTua}
      </p>
      {data.instagram && (
        <a
          href={data.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-rose/30 px-4 py-1.5 font-body text-xs text-rose-light transition hover:bg-rose/10"
        >
          <Instagram size={13} /> Instagram
        </a>
      )}
    </FadeIn>
  );
}

export default function CoupleProfile() {
  const { mempelaiWanita, mempelaiPria, backgroundSection } = invitationData;

  return (
    <section className="relative mx-auto max-w-4xl overflow-hidden px-6 py-24 sm:px-10">
      {/* Tekstur watercolor floral samar di belakang section */}
      {backgroundSection && (
        <>
          <Image
            src={backgroundSection}
            alt=""
            fill
            sizes="100vw"
            className="pointer-events-none absolute inset-0 object-cover opacity-15"
          />
          <div className="pointer-events-none absolute inset-0 bg-blush/85" />
        </>
      )}

      {/* Sulur floral di keempat sudut section */}
      <FloralCorner position="top-left" className="left-2 top-2" />
      <FloralCorner position="top-right" className="right-2 top-2" />
      <FloralCorner position="bottom-left" className="bottom-2 left-2" />
      <FloralCorner position="bottom-right" className="bottom-2 right-2" />

      {/* Title Fade In dari Atas */}
      <FadeIn direction="down" className="relative z-10 mb-14 text-center">
        <p className="eyebrow mb-3">Kedua Mempelai</p>
        <h2 className="font-display text-display-md text-maroon">Dengan Penuh Syukur</h2>
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center gap-14 md:flex-row md:items-start md:justify-center md:gap-6 lg:gap-12">
        {/* Sekar Meluncur dari Kiri */}
        <ProfileCard data={mempelaiWanita} direction="left" />

        {/* Floral Divider di Tengah */}
        <FadeIn direction="none" delay={0.2} className="shrink-0 self-center">
          <FloralDivider />
        </FadeIn>

        {/* Ridho Meluncur dari Kanan */}
        <ProfileCard data={mempelaiPria} direction="right" />
      </div>
    </section>
  );
}