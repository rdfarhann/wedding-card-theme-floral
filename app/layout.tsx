import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { invitationData } from "@/lib/data";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const { mempelaiWanita, mempelaiPria } = invitationData;

export const metadata: Metadata = {
  title: `The Wedding of ${mempelaiWanita.namaPanggilan} & ${mempelaiPria.namaPanggilan}`,
  description: `Undangan pernikahan digital ${mempelaiWanita.namaPanggilan} & ${mempelaiPria.namaPanggilan}`,
  openGraph: {
    title: `The Wedding of ${mempelaiWanita.namaPanggilan} & ${mempelaiPria.namaPanggilan}`,
    description: "Dengan penuh syukur, kami mengundang Anda untuk hadir di hari bahagia kami.",
    images: [invitationData.heroFoto],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${display.variable} ${body.variable} font-body`}>{children}</body>
    </html>
  );
}
