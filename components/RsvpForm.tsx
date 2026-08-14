"use client";

import { useState, FormEvent } from "react";
import { Send, MessageCircle } from "lucide-react";
import { invitationData } from "@/lib/data";
import { useInvitation } from "@/lib/InvitationContext";
import FadeIn from "@/components/FadeIn";
import FloralDivider from "@/components/ornaments/FloralDivider";

type Kehadiran = "Hadir" | "Tidak Hadir";

interface Ucapan {
  nama: string;
  kehadiran: Kehadiran;
  jumlah: number;
  pesan: string;
}

export default function RsvpForm() {
  const { guestName } = useInvitation();
  const { whatsappNomorTujuan, googleSheetsWebAppUrl } = invitationData;

  const [nama, setNama] = useState(guestName !== "Tamu Undangan" ? guestName : "");
  const [kehadiran, setKehadiran] = useState<Kehadiran>("Hadir");
  const [jumlah, setJumlah] = useState(1);
  const [alamat, setAlamat] = useState("");
  const [pesan, setPesan] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ucapanList, setUcapanList] = useState<Ucapan[]>([]);

  const hadirCount = ucapanList.filter((u) => u.kehadiran === "Hadir").length;
  const tidakHadirCount = ucapanList.filter((u) => u.kehadiran === "Tidak Hadir").length;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (nama.trim().length < 2 || pesan.trim().length < 2) return;
    setIsSubmitting(true);

    const payload = { nama, kehadiran, jumlah, alamat, pesan, waktu: new Date().toISOString() };

    // Kirim ke Google Sheets via Apps Script Web App (opsional).
    if (googleSheetsWebAppUrl) {
      try {
        await fetch(googleSheetsWebAppUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch {
        // Gagal diam-diam agar tidak menghambat UX; data tetap terkirim via WA.
      }
    }

    setUcapanList((prev) => [{ nama, kehadiran, jumlah, pesan }, ...prev]);

    // Buka WhatsApp dengan pesan RSVP terisi otomatis.
    const waText = encodeURIComponent(
      `*Konfirmasi Kehadiran*%0ANama: ${nama}%0AKehadiran: ${kehadiran}%0AJumlah: ${jumlah} orang%0AAlamat: ${alamat || "-"}%0AUcapan: ${pesan}`
    );
    window.open(`https://wa.me/${whatsappNomorTujuan}?text=${waText}`, "_blank");

    setIsSubmitting(false);
    setPesan("");
  }

  return (
    <section id="rsvp" className="section-frame">
      <FadeIn className="mb-10 text-center">
        <p className="eyebrow mb-3">RSVP</p>
        <h2 className="font-display text-display-md text-maroon">Konfirmasi Kehadiran</h2>
        <FloralDivider className="mt-6" />
      </FadeIn>

      <FadeIn delay={0.1} className="mx-auto mb-10 flex max-w-sm justify-center gap-6 text-center">
        <div>
          <p className="font-display text-2xl text-maroon">{hadirCount}</p>
          <p className="font-body text-[11px] uppercase tracking-widest text-maroon-muted">Hadir</p>
        </div>
        <div className="h-10 w-px bg-rose/30" />
        <div>
          <p className="font-display text-2xl text-maroon">{tidakHadirCount}</p>
          <p className="font-body text-[11px] uppercase tracking-widest text-maroon-muted">
            Tidak Hadir
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-sm flex-col gap-4 rounded-3xl border border-rose/25 bg-white/50 p-6 shadow-soft"
        >
          <div>
            <label className="mb-1.5 block font-body text-xs uppercase tracking-widest text-maroon-muted">
              Nama*
            </label>
            <input
              required
              minLength={2}
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full rounded-xl border border-maroon/15 bg-blush px-4 py-2.5 font-body text-sm text-maroon outline-none focus:border-rose"
              placeholder="Nama lengkap"
            />
          </div>

          <div>
            <label className="mb-1.5 block font-body text-xs uppercase tracking-widest text-maroon-muted">
              Kehadiran
            </label>
            <div className="flex gap-2">
              {(["Hadir", "Tidak Hadir"] as Kehadiran[]).map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setKehadiran(opt)}
                  className={`flex-1 rounded-xl border px-3 py-2 font-body text-xs uppercase tracking-wider transition ${
                    kehadiran === opt
                      ? "border-rose bg-maroon text-blush"
                      : "border-maroon/15 bg-blush text-maroon-muted"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {kehadiran === "Hadir" && (
            <div>
              <label className="mb-1.5 block font-body text-xs uppercase tracking-widest text-maroon-muted">
                Jumlah Kehadiran*
              </label>
              <select
                value={jumlah}
                onChange={(e) => setJumlah(Number(e.target.value))}
                className="w-full rounded-xl border border-maroon/15 bg-blush px-4 py-2.5 font-body text-sm text-maroon outline-none focus:border-rose"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n} Orang
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="mb-1.5 block font-body text-xs uppercase tracking-widest text-maroon-muted">
              Alamat Domisili
            </label>
            <input
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              className="w-full rounded-xl border border-maroon/15 bg-blush px-4 py-2.5 font-body text-sm text-maroon outline-none focus:border-rose"
              placeholder="Kota domisili"
            />
          </div>

          <div>
            <label className="mb-1.5 block font-body text-xs uppercase tracking-widest text-maroon-muted">
              Ucapan &amp; Doa*
            </label>
            <textarea
              required
              minLength={2}
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              rows={3}
              className="w-full resize-none rounded-xl border border-maroon/15 bg-blush px-4 py-2.5 font-body text-sm text-maroon outline-none focus:border-rose"
              placeholder="Selamat menempuh hidup baru..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-maroon px-6 py-3 font-body text-xs uppercase tracking-[0.2em] text-blush transition hover:bg-maroon-soft disabled:opacity-60"
          >
            <MessageCircle size={14} /> Kirim via WhatsApp
          </button>
        </form>
      </FadeIn>

      {ucapanList.length > 0 && (
        <FadeIn delay={0.1} className="mx-auto mt-10 flex max-w-sm flex-col gap-3">
          {ucapanList.map((u, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-rose/20 bg-white/40 p-4 text-left"
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-base text-maroon">{u.nama}</p>
                <span className="font-body text-[10px] uppercase tracking-wider text-rose-light">
                  {u.kehadiran}
                </span>
              </div>
              <p className="mt-1 font-body text-sm text-maroon-muted">{u.pesan}</p>
            </div>
          ))}
        </FadeIn>
      )}

      <p className="mt-6 text-center font-body text-[11px] text-maroon-muted">
        <Send size={11} className="mr-1 inline" />
        Ucapan Anda juga akan dikirim melalui WhatsApp kepada keluarga mempelai
      </p>
    </section>
  );
}
