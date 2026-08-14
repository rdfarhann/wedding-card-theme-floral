import { MapPin, Navigation } from "lucide-react";
import { invitationData } from "@/lib/data";
import FadeIn from "@/components/FadeIn";
import FloralDivider from "@/components/ornaments/FloralDivider";
import FloralCorner from "@/components/ornaments/FloralCorner";

export default function EventDetail() {
  const { events } = invitationData;

  return (
    <section id="acara" className="section-frame">
      <FadeIn className="mb-14 text-center">
        <p className="eyebrow mb-3">The Wedding</p>
        <h2 className="font-display text-display-md text-maroon">Rangkaian Acara</h2>
        <FloralDivider className="mt-6" />
      </FadeIn>

      <div className="flex flex-col gap-8">
        {events.map((event, idx) => (
          <FadeIn
            key={event.label}
            delay={idx * 0.15}
            className="relative overflow-hidden rounded-3xl border border-rose/25 bg-white/50 p-8 text-center shadow-soft"
          >
            <FloralCorner position="top-left" className="left-2 top-2 h-12 w-12 opacity-30" />
            <FloralCorner position="bottom-right" className="bottom-2 right-2 h-12 w-12 opacity-30" />
            <p className="eyebrow mb-2 text-rose-light">{event.label}</p>
            <h3 className="font-display text-2xl text-maroon">{event.hari}</h3>
            <p className="mt-1 font-body text-sm text-maroon-muted">{event.tanggalTampil}</p>
            <p className="mt-1 font-body text-sm text-maroon-muted">
              Pukul {event.jamMulai} &ndash; {event.jamSelesai} WIB
            </p>

            <div className="mx-auto my-5 h-px w-16 bg-rose/40" />

            <p className="font-display text-lg text-maroon">{event.tempat}</p>
            <p className="mt-1 font-body text-sm text-maroon-muted">{event.alamat}</p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={event.gmapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-maroon px-5 py-2.5 font-body text-xs uppercase tracking-[0.2em] text-blush transition hover:bg-maroon-soft"
              >
                <MapPin size={14} /> Google Maps
              </a>
              <a
                href={event.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-maroon/30 px-5 py-2.5 font-body text-xs uppercase tracking-[0.2em] text-maroon transition hover:border-rose hover:text-rose-light"
              >
                <Navigation size={14} /> Waze
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
