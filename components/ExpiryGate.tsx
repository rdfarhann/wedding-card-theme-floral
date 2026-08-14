import { ReactNode } from "react";
import { invitationData } from "@/lib/data";
import { isInvitationExpired, getExpiryDate } from "@/lib/utils";
import FloralDivider from "@/components/ornaments/FloralDivider";

/**
 * Membungkus seluruh halaman. Jika masa aktif undangan (default 6 bulan
 * sejak `expiry.aktifSejakISO`) sudah lewat, tamu akan melihat layar
 * pemberitahuan alih-alih konten undangan.
 */
export default function ExpiryGate({ children }: { children: ReactNode }) {
  const { aktifSejakISO, masaAktifBulan } = invitationData.expiry;
  const expired = isInvitationExpired(aktifSejakISO, masaAktifBulan);

  if (!expired) return <>{children}</>;

  const expiryDate = getExpiryDate(aktifSejakISO, masaAktifBulan);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blush px-6 text-center">
      <FloralDivider className="mb-6" />
      <h1 className="font-display text-2xl text-maroon">Masa Aktif Undangan Telah Berakhir</h1>
      <p className="mt-3 max-w-xs font-body text-sm text-maroon-muted">
        Undangan digital ini aktif hingga{" "}
        {expiryDate.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
        . Silakan hubungi penyedia layanan untuk perpanjangan masa aktif.
      </p>
    </div>
  );
}
