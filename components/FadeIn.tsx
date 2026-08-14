"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: FadeInProps) {
  // Menentukan arah awal pergeseran
  const getInitialPosition = () => {
    switch (direction) {
      case "left": return { opacity: 0, x: -50 };  // Meluncur dari kiri
      case "right": return { opacity: 0, x: 50 };   // Meluncur dari kanan
      case "up": return { opacity: 0, y: 30 };      // Meluncur dari bawah
      case "down": return { opacity: 0, y: -30 };   // Meluncur dari atas
      default: return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}