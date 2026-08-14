"use client";

import { useEffect, useState } from "react";
import { CalendarPlus } from "lucide-react";
import { invitationData } from "@/lib/data";
import { buildGoogleCalendarUrl, buildAppleCalendarICS, getCountdown } from "@/lib/utils";
import FadeIn from "@/components/FadeIn";
import FloralDivider from "@/components/ornaments/FloralDivider";

const UNIT_LABEL: Record<string, string> = {
  hari: "Hari",
  jam: "Jam",
  menit: "Menit",
  detik: "Detik",
};

export default function Countdown() {
  const { tanggalUtamaISO, mempelaiWanita, mempelaiPria, events } = invitationData;
  
  // 1. Tambahkan state isMounted untuk mendeteksi ketersediaan di browser/client
  const [isMounted, setIsMounted] = useState(false);
  const [time, setTime] = useState(getCountdown(tanggalUtamaISO));

  useEffect(() => {
    // Penanda bahwa komponen sudah berhasil di-mount di sisi Client
    setIsMounted(true);

    const interval = setInterval(() => setTime(getCountdown(tanggalUtamaISO)), 1000);
    return () => clearInterval(interval);
  }, [tanggalUtamaISO]);

  const mainEvent = events[0];
  const title = `Pernikahan ${mempelaiWanita.namaPanggilan} & ${mempelaiPria.namaPanggilan}`;
  const gcalUrl = buildGoogleCalendarUrl({
    title,
    description: `Undangan pernikahan ${mempelaiWanita.namaPanggilan} & ${mempelaiPria.namaPanggilan}`,
    location: mainEvent.alamat,
    startISO: mainEvent.tanggalISO,
    endISO: events[events.length - 1].tanggalISO,
  });
  const icsUrl = buildAppleCalendarICS({
    title,
    description: `Undangan pernikahan ${mempelaiWanita.namaPanggilan} & ${mempelaiPria.namaPanggilan}`,
    location: mainEvent.alamat,
    startISO: mainEvent.tanggalISO,
    endISO: events[events.length - 1].tanggalISO,
  });

  return (
    <section className="section-frame text-center">
      <FadeIn>
        <p className="eyebrow mb-3">Save the Date</p>
        <h2 className="font-display text-display-md text-maroon">Menghitung Hari</h2>
        <FloralDivider className="my-6" />
      </FadeIn>

      <FadeIn delay={0.15} className="mx-auto grid max-w-md grid-cols-4 gap-2 sm:gap-4">
        {(["hari", "jam", "menit", "detik"] as const).map((unit) => (
          <div
            key={unit}
            className="flex flex-col items-center rounded-2xl border border-rose/25 bg-white/50 py-4 shadow-soft"
          >
            <span className="font-display text-3xl text-maroon sm:text-4xl">
              {/* 2. Jika belum mounted di client, tampilkan skeleton/garis loading tipis */}
              {isMounted ? (
                String(time[unit]).padStart(2, "0")
              ) : (
                <span className="inline-block h-8 w-8 animate-pulse rounded bg-rose/20" />
              )}
            </span>
            <span className="mt-1 font-body text-[10px] uppercase tracking-[0.2em] text-maroon-muted">
              {UNIT_LABEL[unit]}
            </span>
          </div>
        ))}
      </FadeIn>

      <FadeIn delay={0.3} className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href={gcalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-maroon px-5 py-2.5 font-body text-xs uppercase tracking-[0.2em] text-blush transition hover:bg-maroon-soft"
        >
          <CalendarPlus size={14} /> Google Calendar
        </a>
        <a
          href={icsUrl}
          download={`${title}.ics`}
          className="inline-flex items-center gap-2 rounded-full border border-maroon/30 px-5 py-2.5 font-body text-xs uppercase tracking-[0.2em] text-maroon transition hover:border-rose hover:text-rose-light"
        >
          <CalendarPlus size={14} /> Apple Calendar
        </a>
      </FadeIn>
    </section>
  );
}