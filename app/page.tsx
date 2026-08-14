import InvitationShell from "@/components/InvitationShell";

/**
 * Nama tamu diambil dari query string, contoh:
 *   https://domainanda.com/?to=Bapak%20Budi%20Santoso
 * Karena diambil dari URL, jumlah tamu yang bisa dipersonalisasi tidak terbatas
 * (unlimited) tanpa perlu membuat halaman baru untuk tiap tamu.
 */
export default function Page({
  searchParams,
}: {
  searchParams: { to?: string };
}) {
  const guestName = searchParams.to
    ? decodeURIComponent(searchParams.to).replace(/\+/g, " ")
    : "Tamu Undangan";

  return <InvitationShell guestName={guestName} />;
}
