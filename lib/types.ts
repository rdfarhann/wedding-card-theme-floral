export interface Mempelai {
  namaLengkap: string;
  namaPanggilan: string;
  anakKe: string;
  namaOrangTua: string;
  instagram?: string;
  foto: string;
}

export interface EventDetail {
  label: string; // "Akad Nikah" | "Resepsi"
  hari: string;
  tanggalISO: string; // ISO date, used for calendar links
  tanggalTampil: string; // "24 Februari 2024"
  jamMulai: string;
  jamSelesai: string;
  tempat: string;
  alamat: string;
  gmapsUrl: string;
  wazeUrl: string;
  lat: number;
  lng: number;
}

export interface LoveStoryItem {
  tanggal: string;
  judul: string;
  cerita: string;
  foto?: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
}

export interface RekeningBank {
  bank: string;
  nomor: string;
  atasNama: string;
  logo?: string;
}

export interface InvitationData {
  mempelaiWanita: Mempelai;
  mempelaiPria: Mempelai;
  tanggalUtamaISO: string;
  tanggalUtamaTampil: string;
  ayat: {
    teksArab?: string;
    terjemahan: string;
    sumber: string;
  };
  events: EventDetail[];
  loveStory: LoveStoryItem[];
  gallery: GalleryItem[];
  videoEmbedUrl?: string;
  rekening: RekeningBank[];
  qrisImage?: string;
  whatsappNomorTujuan: string; // nomor WA yang menerima notifikasi RSVP, format 62xxxx
  googleSheetsWebAppUrl?: string; // Apps Script Web App URL untuk simpan RSVP
  musik: {
    judul: string;
    artis: string;
    src: string;
  };
  expiry: {
    aktifSejakISO: string;
    masaAktifBulan: number;
  };
  heroFoto: string;
  coverFoto?: string;
  quoteFooter: string;
  /** Opsional: gambar latar di balik konten Cover Overlay (opening screen). */
  backgroundCover?: string;
  /** Opsional: gambar latar di balik bingkai Floral pada Hero section. */
  backgroundHero?: string;
  /** Opsional: tekstur watercolor floral polos untuk latar section lain (Quote, Footer). */
  backgroundSection?: string;
}
