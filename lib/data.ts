import { InvitationData } from "./types";

/**
 * SEMUA KONTEN UNDANGAN DIATUR DI SINI.
 * Ganti teks, tanggal, dan path gambar sesuai kebutuhan.
 * Taruh foto asli di /public/images dan audio di /public/audio,
 * lalu update path di bawah (contoh: "/images/hero.jpg").
 */
export const invitationData: InvitationData = {
  mempelaiWanita: {
    namaLengkap: "Sekar Putri Sandriana",
    namaPanggilan: "Sekar",
    anakKe: "Putri Pertama",
    namaOrangTua: "Bapak Lorem & Ibu Ipsum",
    instagram: "https://instagram.com/sekar",
    foto: "/images/mempelai-wanita.jpg",
  },
  mempelaiPria: {
    namaLengkap: "Ridho Putra Pratama",
    namaPanggilan: "Ridho",
    anakKe: "Putra Pertama",
    namaOrangTua: "Bapak Lorem & Ibu Ipsum",
    instagram: "https://instagram.com/ridho",
    foto: "/images/mempelai-pria.jpg",
  },
  tanggalUtamaISO: "2026-11-14T08:00:00+07:00",
  tanggalUtamaTampil: "14 November 2026",
  ayat: {
    teksArab:
      "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً",
    terjemahan:
      "Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
    sumber: "QS. Ar-Rum: 21",
  },
  events: [
    {
      label: "Akad Nikah",
      hari: "Sabtu",
      tanggalISO: "2026-11-14T08:00:00+07:00",
      tanggalTampil: "14 November 2026",
      jamMulai: "08:00",
      jamSelesai: "10:00",
      tempat: "The Rosewood Garden Hall",
      alamat: "Jl. Kebun Mawar No. 8, Jakarta Selatan",
      gmapsUrl: "https://maps.google.com/?q=Kebun+Mawar+Jakarta+Selatan",
      wazeUrl: "https://waze.com/ul?q=Kebun+Mawar+Jakarta+Selatan",
      lat: -7.7928,
      lng: 110.3654,
    },
    {
      label: "Resepsi",
      hari: "Sabtu",
      tanggalISO: "2026-11-14T11:00:00+07:00",
      tanggalTampil: "14 November 2026",
      jamMulai: "11:00",
      jamSelesai: "14:00",
      tempat: "The Rosewood Garden Hall",
      alamat: "Jl. Kebun Mawar No. 8, Jakarta Selatan",
      gmapsUrl: "https://maps.google.com/?q=Kebun+Mawar+Jakarta+Selatan",
      wazeUrl: "https://waze.com/ul?q=Kebun+Mawar+Jakarta+Selatan",
      lat: -7.7928,
      lng: 110.3654,
    },
  ],
  loveStory: [
    {
      tanggal: "Januari 2020",
      judul: "Awal Bertemu",
      cerita:
        "Dipertemukan di sebuah acara kampus, percakapan singkat itu ternyata menjadi awal dari kisah panjang kami berdua.",
    },
    {
      tanggal: "Agustus 2023",
      judul: "Bertunangan",
      cerita:
        "Setelah melalui banyak hal bersama, kami memutuskan untuk melangkah lebih serius menuju jenjang pernikahan.",
    },
    {
      tanggal: "November 2026",
      judul: "Menikah",
      cerita:
        "Dengan restu kedua orang tua, kami memantapkan hati untuk menyatukan dua keluarga dalam ikatan pernikahan.",
    },
  ],
  gallery: [
    { src: "/images/gallery-01.jpg", alt: "Momen pra-wedding 1" },
    { src: "/images/gallery-02.jpg", alt: "Momen pra-wedding 2" },
    { src: "/images/gallery-03.jpg", alt: "Momen pra-wedding 3" },
    { src: "/images/gallery-04.jpg", alt: "Momen pra-wedding 4" },
    { src: "/images/gallery-05.jpg", alt: "Momen pra-wedding 5" },
    { src: "/images/gallery-06.jpg", alt: "Momen pra-wedding 6" },
  ],
  videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  rekening: [
    { bank: "BCA", nomor: "1236330979", atasNama: "Sekar Putri Sandriana" },
    { bank: "Mandiri", nomor: "1236330979", atasNama: "Ridho Putra Pratama" },
  ],
  qrisImage: "/images/qris.png",
  whatsappNomorTujuan: "6281210274985",
  googleSheetsWebAppUrl: "",
  musik: {
    judul: "Wedding Ambient",
    artis: "Instrumental",
    src: "/audio/backsound.mp3",
  },
  expiry: {
    aktifSejakISO: "2026-08-12T00:00:00+07:00",
    masaAktifBulan: 6,
  },
  heroFoto: "/images/hero.jpg",
  coverFoto: "/images/hero.jpg",
  // Kosongkan ("") jika tidak ingin memakai background foto — akan otomatis
  // jatuh ke warna blush polos + tekstur titik floral tipis.
  backgroundCover: "/images/floral-frame-full.jpg",
  backgroundHero: "/images/floral-frame-bottom.jpg",
  backgroundSection: "/images/floral-watercolor-plain.jpg",
  quoteFooter:
    "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu untuk pernikahan kami.",
};
