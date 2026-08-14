"use client";

import { motion } from "framer-motion";

/**
 * Butterfly:
 * Ilustrasi kupu-kupu sederhana dengan animasi kepakan sayap (scaleX
 * berdenyut). Warnanya bisa diatur lewat prop `color` agar bervariasi
 * (rose, rose-light, maroon-soft) supaya rombongan kupu-kupu tidak seragam.
 */
export default function Butterfly({
  size = 30,
  color = "#B33951",
}: {
  size?: number;
  color?: string;
}) {
  const flap = {
    animate: { scaleX: [1, 0.5, 1] },
    transition: { duration: 0.32, repeat: Infinity, ease: "easeInOut" as const },
  };

  return (
    <svg
      viewBox="0 0 40 44"
      width={size}
      height={size}
      style={{ overflow: "visible" }}
      aria-hidden="true"
    >
      {/* Sayap atas */}
      <motion.path
        d="M20 16 C10 4, 0 8, 2 18 C4 26, 14 24, 20 18 Z"
        fill={color}
        opacity={0.9}
        style={{ transformOrigin: "20px 18px" }}
        animate={flap.animate}
        transition={flap.transition}
      />
      <motion.path
        d="M20 16 C30 4, 40 8, 38 18 C36 26, 26 24, 20 18 Z"
        fill={color}
        opacity={0.9}
        style={{ transformOrigin: "20px 18px" }}
        animate={flap.animate}
        transition={{ ...flap.transition, delay: 0.02 }}
      />
      {/* Sayap bawah, sedikit lebih kecil */}
      <motion.path
        d="M20 22 C13 24, 7 32, 11 38 C15 41, 20 32, 20 24 Z"
        fill={color}
        opacity={0.7}
        style={{ transformOrigin: "20px 24px" }}
        animate={flap.animate}
        transition={flap.transition}
      />
      <motion.path
        d="M20 22 C27 24, 33 32, 29 38 C25 41, 20 32, 20 24 Z"
        fill={color}
        opacity={0.7}
        style={{ transformOrigin: "20px 24px" }}
        animate={flap.animate}
        transition={{ ...flap.transition, delay: 0.02 }}
      />
      {/* Badan */}
      <ellipse cx="20" cy="20" rx="1.6" ry="8" fill="#4A121F" />
      <circle cx="20" cy="11" r="1.8" fill="#4A121F" />
    </svg>
  );
}