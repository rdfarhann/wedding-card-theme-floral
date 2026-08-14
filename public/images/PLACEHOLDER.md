Taruh foto asli di folder ini, lalu sesuaikan nama file di `lib/data.ts`:

- hero.jpg — foto utama di Hero section (dalam bingkai floral)
- mempelai-wanita.jpg, mempelai-pria.jpg — foto profil masing-masing mempelai
- gallery-01.jpg s/d gallery-15.jpg — foto galeri (maks 15 foto)
- qris.png — gambar QRIS untuk amplop digital (opsional)

File `floral-frame-full.jpg`, `floral-frame-bottom.jpg`, dan
`floral-watercolor-plain.jpg` adalah aset dekorasi bawaan tema (background
Cover, Hero, dan Quote/Footer) — ganti dengan foto watercolor floral Anda
sendiri jika perlu, lihat `lib/data.ts` (`backgroundCover`, `backgroundHero`,
`backgroundSection`).

Rasio yang disarankan:
- hero.jpg: potret (3:4)
- foto profil: persegi (1:1)
- galeri: persegi (1:1) agar grid rapi
- background floral: potret (9:16), serupa aset bawaan
