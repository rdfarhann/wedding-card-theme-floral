"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInvitation } from "@/lib/InvitationContext";
import Butterfly from "@/components/ornaments/Butterfly";

interface FlightPath {
  size: number;
  color: string;
  delay: number;
  duration: number;
  // Lintasan tertutup (titik awal = titik akhir) dalam persen viewport, agar
  // saat animasi berulang (loop) tidak ada "lompatan" posisi yang terlihat.
  left: string[];
  top: string[];
  rotate: number[];
}

const ROSE = "#B33951";
const ROSE_LIGHT = "#D46A85";
const MAROON_SOFT = "#6E2536";
const MAROON_MUTED = "#8C5B66";

const FLIGHTS: FlightPath[] = [
  { size: 30, color: ROSE, delay: 0, duration: 9, left: ["5%", "25%", "45%", "20%", "5%"], top: ["90%", "50%", "30%", "65%", "90%"], rotate: [-8, 10, -6, 8, -8] },
  { size: 22, color: ROSE_LIGHT, delay: 1.2, duration: 10, left: ["90%", "65%", "40%", "70%", "90%"], top: ["95%", "55%", "25%", "60%", "95%"], rotate: [8, -10, 6, -8, 8] },
  { size: 26, color: MAROON_MUTED, delay: 2, duration: 8.5, left: ["50%", "70%", "85%", "65%", "50%"], top: ["100%", "60%", "35%", "70%", "100%"], rotate: [-6, 8, -8, 6, -6] },
  { size: 18, color: ROSE, delay: 0.6, duration: 11, left: ["70%", "45%", "20%", "50%", "70%"], top: ["10%", "30%", "55%", "20%", "10%"], rotate: [6, -8, 8, -6, 6] },
  { size: 24, color: ROSE_LIGHT, delay: 1.8, duration: 9.5, left: ["15%", "35%", "55%", "30%", "15%"], top: ["20%", "5%", "25%", "45%", "20%"], rotate: [-8, 6, -10, 8, -8] },
  { size: 20, color: MAROON_SOFT, delay: 0.3, duration: 10.5, left: ["80%", "60%", "35%", "55%", "80%"], top: ["80%", "40%", "15%", "55%", "80%"], rotate: [8, -6, 10, -8, 8] },
  { size: 32, color: ROSE, delay: 2.4, duration: 8, left: ["30%", "10%", "5%", "25%", "30%"], top: ["60%", "85%", "100%", "70%", "60%"], rotate: [-6, 8, -6, 6, -6] },
  { size: 16, color: ROSE_LIGHT, delay: 1, duration: 9.8, left: ["60%", "80%", "95%", "75%", "60%"], top: ["45%", "20%", "0%", "30%", "45%"], rotate: [6, -8, 6, -6, 6] },
  { size: 28, color: MAROON_MUTED, delay: 2.8, duration: 10.2, left: ["40%", "55%", "65%", "45%", "40%"], top: ["95%", "70%", "40%", "65%", "95%"], rotate: [-8, 10, -8, 8, -8] },
  { size: 20, color: ROSE, delay: 0.9, duration: 9.2, left: ["10%", "30%", "50%", "25%", "10%"], top: ["40%", "15%", "5%", "30%", "40%"], rotate: [8, -6, 8, -8, 8] },
];

/**
 * ButterflyBurst:
 * Rombongan kupu-kupu yang beterbangan terus-menerus (loop tanpa henti)
 * begitu tamu menekan "Buka Undangan" (isOpened di InvitationContext jadi
 * true). Non-interaktif (pointer-events-none) sehingga tidak menghalangi
 * tombol/form di section lain. Dipasang sekali di InvitationShell.tsx.
 */
export default function ButterflyBurst() {
  const { isOpened } = useInvitation();

  return (
    <AnimatePresence>
      {isOpened && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {FLIGHTS.map((flight, idx) => (
            <motion.div
              key={idx}
              className="absolute"
              initial={{ left: flight.left[0], top: flight.top[0], opacity: 0, rotate: flight.rotate[0] }}
              animate={{
                left: flight.left,
                top: flight.top,
                rotate: flight.rotate,
                opacity: 1,
              }}
              transition={{
                delay: flight.delay,
                duration: flight.duration,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Butterfly size={flight.size} color={flight.color} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}