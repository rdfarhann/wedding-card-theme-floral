"use client";

import { motion } from "framer-motion";

/**
 * FloralFrame:
 * Bingkai lengkung (arch) bertema floral — rangkaian bunga mawar & dedaunan
 * di puncak, sulur bunga melengkung di kedua sisi, dengan gradasi warna
 * rose/burgundy lembut menggantikan siluet atap Joglo pada tema sebelumnya.
 * Geometri lengkung utama dipertahankan agar selaras dengan masking foto
 * pada Hero.tsx.
 */
export default function FloralFrame() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.15, duration: 1.2, ease: [0.22, 1, 0.36, 1] },
        opacity: { delay: i * 0.15, duration: 0.3 },
      },
    }),
  };

  const bloom = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: 0.6 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <svg
      viewBox="0 0 360 440"
      fill="none"
      className="pointer-events-none absolute inset-0 h-full w-full drop-shadow-[0_4px_12px_rgba(179,57,81,0.25)]"
      aria-hidden="true"
    >
      <defs>
        {/* Gradasi Rose/Burgundy Utama */}
        <linearGradient id="roseMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E39CAE" />
          <stop offset="35%" stopColor="#D46A85" />
          <stop offset="70%" stopColor="#B33951" />
          <stop offset="100%" stopColor="#7A2438" />
        </linearGradient>

        {/* Gradasi Aksen Rose */}
        <linearGradient id="roseAccent" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F1C6CE" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#B33951" stopOpacity="0.4" />
        </linearGradient>

        {/* Gradasi Daun */}
        <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8FA582" />
          <stop offset="100%" stopColor="#4E6349" />
        </linearGradient>
      </defs>

      {/* ── 1. RANGKAIAN BUNGA DI PUNCAK ── */}
      <motion.g custom={0} variants={bloom} initial="hidden" animate="visible">
        <circle cx="180" cy="20" r="9" fill="url(#roseMetallic)" />
        <circle cx="180" cy="20" r="4" fill="#F1C6CE" />
      </motion.g>
      <motion.g custom={1} variants={bloom} initial="hidden" animate="visible">
        <circle cx="156" cy="30" r="7" fill="url(#roseAccent)" stroke="url(#roseMetallic)" strokeWidth="1" />
      </motion.g>
      <motion.g custom={2} variants={bloom} initial="hidden" animate="visible">
        <circle cx="204" cy="30" r="7" fill="url(#roseAccent)" stroke="url(#roseMetallic)" strokeWidth="1" />
      </motion.g>

      {/* Daun kecil di sekitar bunga puncak */}
      <motion.path
        custom={0.6}
        variants={draw}
        initial="hidden"
        animate="visible"
        d="M156 30 C142 26, 132 32, 130 44"
        stroke="url(#leafGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <motion.path
        custom={0.6}
        variants={draw}
        initial="hidden"
        animate="visible"
        d="M204 30 C218 26, 228 32, 230 44"
        stroke="url(#leafGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* ── 2. SULUR RANTING MELENGKUNG DARI PUNCAK KE SISI ── */}
      <motion.path
        custom={0.8}
        variants={draw}
        initial="hidden"
        animate="visible"
        d="M156 30 C110 40, 70 62, 56 106"
        stroke="url(#roseMetallic)"
        strokeWidth="1.5"
      />
      <motion.path
        custom={0.8}
        variants={draw}
        initial="hidden"
        animate="visible"
        d="M204 30 C250 40, 290 62, 304 106"
        stroke="url(#roseMetallic)"
        strokeWidth="1.5"
      />

      {/* Bunga kecil di sepanjang sulur */}
      <motion.g custom={3} variants={bloom} initial="hidden" animate="visible">
        <circle cx="98" cy="52" r="5" fill="url(#roseAccent)" stroke="url(#roseMetallic)" strokeWidth="0.8" />
      </motion.g>
      <motion.g custom={4} variants={bloom} initial="hidden" animate="visible">
        <circle cx="262" cy="52" r="5" fill="url(#roseAccent)" stroke="url(#roseMetallic)" strokeWidth="0.8" />
      </motion.g>
      <motion.path
        custom={1}
        variants={draw}
        initial="hidden"
        animate="visible"
        d="M98 52 C88 58, 82 68, 84 80"
        stroke="url(#leafGradient)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <motion.path
        custom={1}
        variants={draw}
        initial="hidden"
        animate="visible"
        d="M262 52 C272 58, 278 68, 276 80"
        stroke="url(#leafGradient)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Lis Garis Molding Ganda */}
      <motion.line
        custom={1.4}
        variants={draw}
        initial="hidden"
        animate="visible"
        x1="48" y1="110" x2="312" y2="110"
        stroke="url(#roseMetallic)"
        strokeWidth="1.2"
      />
      <motion.line
        custom={1.6}
        variants={draw}
        initial="hidden"
        animate="visible"
        x1="56" y1="114" x2="304" y2="114"
        stroke="url(#roseAccent)"
        strokeWidth="0.8"
      />

      {/* ── 3. SULUR DAUN DI SUDUT LENGKUNG ── */}
      <motion.path
        custom={1.8}
        variants={draw}
        initial="hidden"
        animate="visible"
        d="M64 106 C48 108, 38 98, 44 88 C50 78, 66 90, 56 100"
        stroke="url(#leafGradient)"
        strokeWidth="1.2"
      />
      <motion.path
        custom={1.8}
        variants={draw}
        initial="hidden"
        animate="visible"
        d="M296 106 C312 108, 322 98, 316 88 C310 78, 294 90, 304 100"
        stroke="url(#leafGradient)"
        strokeWidth="1.2"
      />

      {/* ── 4. BINGKAI LENGKUNG UTAMA (MAIN ARCH) ── */}
      <motion.path
        custom={2.2}
        variants={draw}
        initial="hidden"
        animate="visible"
        d="M56 120 C56 260, 56 350, 180 412 C304 350, 304 260, 304 120"
        stroke="url(#roseMetallic)"
        strokeWidth="1.8"
      />
      <motion.path
        custom={2.5}
        variants={draw}
        initial="hidden"
        animate="visible"
        d="M42 120 C42 270, 42 364, 180 426 C318 364, 318 270, 318 120"
        stroke="url(#roseAccent)"
        strokeWidth="1"
      />

      {/* Bunga-bunga kecil menyusuri bingkai lengkung */}
      <motion.g custom={5} variants={bloom} initial="hidden" animate="visible">
        <circle cx="46" cy="200" r="4.5" fill="url(#roseAccent)" stroke="url(#roseMetallic)" strokeWidth="0.8" />
      </motion.g>
      <motion.g custom={6} variants={bloom} initial="hidden" animate="visible">
        <circle cx="314" cy="200" r="4.5" fill="url(#roseAccent)" stroke="url(#roseMetallic)" strokeWidth="0.8" />
      </motion.g>
      <motion.g custom={7} variants={bloom} initial="hidden" animate="visible">
        <circle cx="66" cy="330" r="4" fill="url(#roseAccent)" stroke="url(#roseMetallic)" strokeWidth="0.7" />
      </motion.g>
      <motion.g custom={8} variants={bloom} initial="hidden" animate="visible">
        <circle cx="294" cy="330" r="4" fill="url(#roseAccent)" stroke="url(#roseMetallic)" strokeWidth="0.7" />
      </motion.g>

      {/* ── 5. RANGKAIAN BUNGA PENUTUP DI BAWAH ── */}
      <motion.g custom={9} variants={bloom} initial="hidden" animate="visible">
        <circle cx="180" cy="412" r="6" fill="url(#roseMetallic)" />
        <circle cx="180" cy="412" r="2.6" fill="#F1C6CE" />
      </motion.g>
      <motion.path
        custom={3}
        variants={draw}
        initial="hidden"
        animate="visible"
        d="M180 412 C168 418, 158 418, 150 412"
        stroke="url(#leafGradient)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <motion.path
        custom={3}
        variants={draw}
        initial="hidden"
        animate="visible"
        d="M180 412 C192 418, 202 418, 210 412"
        stroke="url(#leafGradient)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
