export function formatDateForGCal(iso: string): string {
  const d = new Date(iso);
  return d
    .toISOString()
    .replace(/[-:]/g, "")
    .split(".")[0] + "Z";
}

export function buildGoogleCalendarUrl(params: {
  title: string;
  description: string;
  location: string;
  startISO: string;
  endISO: string;
}): string {
  const { title, description, location, startISO, endISO } = params;
  const dates = `${formatDateForGCal(startISO)}/${formatDateForGCal(endISO)}`;
  const url = new URL("https://www.google.com/calendar/render");
  url.searchParams.set("action", "TEMPLATE");
  url.searchParams.set("text", title);
  url.searchParams.set("details", description);
  url.searchParams.set("location", location);
  url.searchParams.set("dates", dates);
  return url.toString();
}

export function buildAppleCalendarICS(params: {
  title: string;
  description: string;
  location: string;
  startISO: string;
  endISO: string;
}): string {
  const { title, description, location, startISO, endISO } = params;
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `DTSTART:${formatDateForGCal(startISO)}`,
    `DTEND:${formatDateForGCal(endISO)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\n");
  return `data:text/calendar;charset=utf8,${encodeURIComponent(ics)}`;
}

export function getCountdown(targetISO: string) {
  const target = new Date(targetISO).getTime();
  const now = Date.now();
  const distance = Math.max(target - now, 0);

  const hari = Math.floor(distance / (1000 * 60 * 60 * 24));
  const jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((distance % (1000 * 60)) / 1000);

  return { hari, jam, menit, detik, isDone: distance <= 0 };
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export function isInvitationExpired(aktifSejakISO: string, masaAktifBulan: number): boolean {
  const start = new Date(aktifSejakISO);
  const expiry = new Date(start);
  expiry.setMonth(expiry.getMonth() + masaAktifBulan);
  return Date.now() > expiry.getTime();
}

export function getExpiryDate(aktifSejakISO: string, masaAktifBulan: number): Date {
  const start = new Date(aktifSejakISO);
  const expiry = new Date(start);
  expiry.setMonth(expiry.getMonth() + masaAktifBulan);
  return expiry;
}
