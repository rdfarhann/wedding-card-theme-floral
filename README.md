# Undangan Digital — Floral Romance

Kartu undangan pernikahan digital interaktif dibangun dengan **Next.js 14 (App Router)**,
**TypeScript**, **Tailwind CSS**, dan **Framer Motion**. Estetika mengangkat nuansa
"Floral Romance": blush pink hangat, aksen rose/burgundy, tipografi serif elegan, dan
ornamen sulur bunga watercolor sebagai elemen visual khas — cocok untuk tema
garden wedding / romantic floral.

Tema ini adalah adaptasi dari [wedding-card-theme-javanese2](https://github.com/rdfarhann/wedding-card-theme-javanese2):
struktur proyek dan seluruh fitur tetap sama, hanya palet warna, tipografi ornamen,
dan aset visual yang diganti ke tema floral.

## 1. Instalasi

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## 2. Struktur Proyek

```
app/
  layout.tsx        -> font (Cormorant Garamond + Plus Jakarta Sans), metadata
  page.tsx           -> entry point, membaca ?to= dari URL untuk nama tamu
  globals.css         -> base styles, tekstur titik floral, scrollbar rose
components/
  InvitationShell.tsx -> merangkai seluruh section + provider
  CoverOverlay.tsx     -> layar pembuka bernama tamu + tombol "Buka Undangan"
  AudioPlayer.tsx       -> pemutar musik latar melayang (play/pause/mute)
  Hero.tsx               -> foto utama dibingkai ornamen floral + background watercolor
  QuoteSection.tsx        -> ayat/quote
  CoupleProfile.tsx        -> profil kedua mempelai
  Countdown.tsx              -> hitung mundur + tombol Google/Apple Calendar
  EventDetail.tsx              -> detail Akad & Resepsi + Maps/Waze
  LoveStory.tsx                  -> timeline perjalanan cinta
  Gallery.tsx                     -> grid foto (maks 15) + lightbox + video embed
  DigitalEnvelope.tsx               -> amplop digital (rekening + QRIS, copy to clipboard)
  RsvpForm.tsx                       -> form RSVP + buku ucapan -> WhatsApp & Google Sheets
  ExpiryGate.tsx                      -> membatasi akses setelah masa aktif habis
  Footer.tsx                           -> penutup
  ornaments/
    FloralFrame.tsx                     -> elemen signature: bingkai lengkung rose dengan rangkaian bunga
    FloralDivider.tsx                     -> pembatas antar section bermotif kelopak mawar
    FloralCorner.tsx                        -> aksen sulur bunga di sudut kartu event
lib/
  data.ts   -> SEMUA KONTEN (nama, tanggal, galeri, rekening, dst) — edit di sini
  types.ts   -> tipe data TypeScript
  utils.ts    -> helper: countdown, link kalender, clipboard, cek masa aktif
  InvitationContext.tsx -> state global: status overlay, nama tamu, kontrol audio
```

## 3. Kustomisasi Konten

Cukup edit satu file: **`lib/data.ts`**. Semua teks, tanggal, path foto, nomor
rekening, nomor WhatsApp, dan pengaturan masa aktif undangan diatur di sana —
semua nama, tanggal, dan lokasi di file ini masih berupa **data placeholder**,
ganti dengan data pernikahan Anda sebelum dipakai.

Taruh aset asli Anda di:
- `public/images/` — foto hero, profil mempelai, galeri, QRIS
- `public/audio/` — file musik latar (.mp3)

Tiga foto watercolor floral bawaan tema ini juga ada di `public/images/`:
- `floral-frame-full.jpg` — bingkai bunga penuh (atas & bawah), dipakai di Cover Overlay
- `floral-frame-bottom.jpg` — bingkai bunga bawah, dipakai di background Hero
- `floral-watercolor-plain.jpg` — tekstur watercolor polos, dipakai di Quote Section & Footer

Anda bisa mengganti ketiganya dengan foto floral Anda sendiri (ukuran potret,
rasio serupa akan hasilnya paling rapi).

### Background di Cover, Hero & Section lain (opsional)

Isi `backgroundCover`, `backgroundHero`, dan `backgroundSection` di `lib/data.ts`
dengan path gambar untuk menampilkan foto/tekstur latar:

- `backgroundCover` → tampil di belakang layar pembuka (Cover Overlay), dengan
  tint blush transparan otomatis di atasnya agar nama tamu & tombol tetap terbaca.
- `backgroundHero` → tampil di belakang seluruh Hero section (di balik bingkai
  floral dan foto mempelai).
- `backgroundSection` → tekstur watercolor floral polos yang tampil samar di
  Quote Section & Footer.

Kosongkan nilainya (`""`) jika ingin kembali ke warna blush polos + tekstur
titik floral tipis bawaan. Di luar itu, bingkai foto pada Hero juga sudah punya glow
rose lembut bawaan di baliknya (tidak perlu gambar) agar terasa lebih hidup —
bisa disesuaikan intensitasnya di `Hero.tsx` (kelas `bg-rose/20 blur-3xl`).

## 4. Fitur & Cara Kerja

- **Nama tamu unlimited** — dibaca dari query string URL, contoh:
  `https://domainanda.com/?to=Bapak%20Budi%20Santoso`. Tidak perlu generate halaman
  per tamu; cukup bagikan link dengan parameter `to` yang berbeda-beda.
- **Musik latar** — diputar otomatis begitu tamu menekan "Buka Undangan" (mengikuti
  kebijakan autoplay browser yang mensyaratkan interaksi pengguna). Tombol play/pause
  dan mute tersedia melayang di pojok kanan bawah.
- **Countdown** — dihitung ulang tiap detik dari `tanggalUtamaISO` di `lib/data.ts`.
- **Integrasi Kalender** — tombol Google Calendar membuka link `calendar/render`,
  tombol Apple Calendar mengunduh file `.ics`.
- **Maps & Waze** — isi `gmapsUrl` dan `wazeUrl` di tiap event pada `lib/data.ts`.
- **Galeri** — grid 3 kolom, klik foto untuk membuka lightbox dengan navigasi
  kiri/kanan; mendukung hingga 15 foto + 1 video embed (YouTube/Vimeo).
- **Amplop Digital** — tombol "Salin Nomor Rekening" menggunakan Clipboard API,
  serta QRIS opsional yang bisa ditampilkan/disembunyikan.
- **RSVP & Buku Tamu** — saat submit, data dikirim ke WhatsApp (nomor di
  `whatsappNomorTujuan`) melalui `wa.me` dengan pesan siap kirim. Jika Anda mengisi
  `googleSheetsWebAppUrl` (lihat langkah di bawah), data RSVP juga otomatis
  tersimpan ke Google Sheets.
- **Masa Aktif Undangan** — `ExpiryGate` mengecek `expiry.aktifSejakISO` +
  `expiry.masaAktifBulan` (default 6 bulan). Setelah lewat, tamu akan melihat
  layar pemberitahuan alih-alih konten undangan.

### Menghubungkan RSVP ke Google Sheets (opsional)

1. Buat Google Sheet baru, buka **Extensions > Apps Script**.
2. Tempel script sederhana yang menerima POST dan menulis baris baru ke sheet
   (`e.postData.contents` → `JSON.parse` → `sheet.appendRow(...)`).
3. Deploy sebagai **Web App** (akses: "Anyone"), salin URL-nya.
4. Tempel URL tersebut ke `googleSheetsWebAppUrl` di `lib/data.ts`.

## 5. Palet Warna

| Token             | Hex       | Kegunaan                          |
| ------------------ | --------- | ---------------------------------- |
| `blush`             | `#FDF6F3` | Latar utama (soft blush white)     |
| `blush-deep`         | `#F7E3E1` | Variasi latar lebih pekat          |
| `rose`               | `#B33951` | Aksen utama (border, tombol, ikon) |
| `rose-light`          | `#D46A85` | Aksen sekunder / hover             |
| `rose-soft`            | `#F1C6CE` | Aksen sangat lembut                |
| `maroon`                | `#4A121F` | Teks utama, footer gelap           |
| `maroon-soft`            | `#6E2536` | Variasi teks/hover                 |
| `maroon-muted`            | `#8C5B66` | Teks sekunder                      |

Ganti nilai hex ini di `tailwind.config.ts` jika ingin menyesuaikan gradasi warna
floral sesuai selera (misal peach, dusty blue, atau sage green).

## 6. Build & Deploy

```bash
npm run build
npm run start
```

Untuk deploy, proyek ini kompatibel langsung dengan **Vercel** (rekomendasi,
karena dibangun dengan Next.js), atau platform Node.js lain yang mendukung
App Router (Next.js 14+).

## 7. Aksesibilitas & Performa

- Mobile-first, responsif penuh dari 360px ke atas.
- `prefers-reduced-motion` dihormati — animasi otomatis dipangkas untuk pengguna
  yang mengaktifkan pengaturan tersebut di sistem operasinya.
- Gambar memakai `next/image` untuk optimasi otomatis (lazy load, responsive sizes).
