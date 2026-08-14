import Image from "next/image";
import { invitationData } from "@/lib/data";
import { getExpiryDate } from "@/lib/utils";
import FadeIn from "@/components/FadeIn";
import FloralDivider from "@/components/ornaments/FloralDivider";

export default function Footer() {
  const { mempelaiWanita, mempelaiPria, quoteFooter, expiry, backgroundSection } = invitationData;
  const expiryDate = getExpiryDate(expiry.aktifSejakISO, expiry.masaAktifBulan);

  return (
    <footer className="relative overflow-hidden bg-maroon px-6 py-20 text-center text-blush">
      {backgroundSection && (
        <Image
          src={backgroundSection}
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none absolute inset-0 object-cover opacity-15 mix-blend-luminosity"
        />
      )}
      <div className="bg-floral-dots pointer-events-none absolute inset-0 opacity-10" />
      <FadeIn className="relative z-10">
        <FloralDivider className="mx-auto mb-8 text-rose-light" />
        <p className="mx-auto max-w-sm font-body text-sm leading-relaxed text-blush/80">
          {quoteFooter}
        </p>
        <p className="mt-2 font-body text-sm text-blush/80">
          Atas doa dan restunya, kami ucapkan terima kasih.
        </p>
        <h2 className="mt-8 font-display text-3xl">
          {mempelaiWanita.namaPanggilan} &amp; {mempelaiPria.namaPanggilan}
        </h2>

        <p className="mt-14 font-body text-[11px] uppercase tracking-[0.3em] text-blush/40">
            POWERED BY SAWOO STUDIO
        </p>
      </FadeIn>
    </footer>
  );
}
