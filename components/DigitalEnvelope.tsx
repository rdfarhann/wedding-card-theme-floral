"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Copy, Gift, QrCode } from "lucide-react";
import { invitationData } from "@/lib/data";
import { copyToClipboard } from "@/lib/utils";
import FadeIn from "@/components/FadeIn";
import FloralDivider from "@/components/ornaments/FloralDivider";

export default function DigitalEnvelope() {
  const { rekening, qrisImage } = invitationData;
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showQris, setShowQris] = useState(false);

  const handleCopy = async (nomor: string, idx: number) => {
    const ok = await copyToClipboard(nomor);
    if (ok) {
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 1800);
    }
  };

  return (
    <section className="section-frame">
      <FadeIn className="mb-12 text-center">
        <p className="eyebrow mb-3 flex items-center justify-center gap-2">
          <Gift size={14} /> Wedding Gift
        </p>
        <h2 className="font-display text-display-md text-maroon">Amplop Digital</h2>
        <FloralDivider className="mt-6" />
        <p className="mx-auto mt-5 max-w-sm font-body text-sm leading-relaxed text-maroon-muted">
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Jika memberi
          adalah ungkapan tanda kasih, Anda dapat memberi secara cashless.
        </p>
      </FadeIn>

      <div className="mx-auto flex max-w-sm flex-col gap-4">
        {rekening.slice(0, 3).map((rek, idx) => (
          <FadeIn
            key={rek.bank + rek.nomor}
            delay={idx * 0.1}
            className="rounded-2xl border border-rose/25 bg-white/50 p-5 shadow-soft"
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-rose-light">
              {rek.bank}
            </p>
            <p className="mt-1 font-display text-xl text-maroon">{rek.nomor}</p>
            <p className="mt-0.5 font-body text-sm text-maroon-muted">a.n {rek.atasNama}</p>
            <button
              onClick={() => handleCopy(rek.nomor, idx)}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-maroon/30 px-4 py-2 font-body text-xs uppercase tracking-[0.2em] text-maroon transition hover:border-rose hover:text-rose-light"
            >
              {copiedIndex === idx ? <Check size={13} /> : <Copy size={13} />}
              {copiedIndex === idx ? "Tersalin" : "Salin Nomor Rekening"}
            </button>
          </FadeIn>
        ))}
        {/* {qrisImage && (
          <FadeIn delay={rekening.length * 0.1} className="text-center">
            <button
              onClick={() => setShowQris((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full bg-maroon px-5 py-2.5 font-body text-xs uppercase tracking-[0.2em] text-blush transition hover:bg-maroon-soft"
            >
              <QrCode size={14} /> {showQris ? "Sembunyikan QRIS" : "Tampilkan QRIS"}
            </button>
            {showQris && (
              <div className="relative mx-auto mt-5 h-64 w-64 overflow-hidden rounded-2xl border border-rose/25 bg-white p-3 shadow-soft">
                <Image src={qrisImage} alt="QRIS" fill sizes="256px" className="object-contain" />
              </div>
            )}
          </FadeIn>
        )} */}
      </div>
    </section>
  );
}
