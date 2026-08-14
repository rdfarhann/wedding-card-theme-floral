import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Floral Romance palette — soft blush watercolor + burgundy roses
        blush: {
          DEFAULT: "#FDF6F3", // Soft Blush / Warm Off-White
          deep: "#F7E3E1",
        },
        rose: {
          DEFAULT: "#B33951", // Deep Rose / Burgundy accent
          light: "#D46A85",
          soft: "#F1C6CE",
        },
        maroon: {
          DEFAULT: "#4A121F", // Deep Maroon / Wine text
          soft: "#6E2536",
          muted: "#8C5B66",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 8vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "0.01em" }],
        "display-lg": ["clamp(2.25rem, 6vw, 4rem)", { lineHeight: "1.1", letterSpacing: "0.01em" }],
        "display-md": ["clamp(1.75rem, 4vw, 2.75rem)", { lineHeight: "1.15" }],
        eyebrow: ["0.78rem", { lineHeight: "1.4", letterSpacing: "0.32em" }],
      },
      backgroundImage: {
        "floral-dot-pattern":
          "radial-gradient(circle at 50% 50%, rgba(179,57,81,0.08) 0, rgba(179,57,81,0.08) 2px, transparent 2.5px)",
      },
      boxShadow: {
        rose: "0 8px 30px -8px rgba(179,57,81,0.45)",
        soft: "0 20px 60px -20px rgba(74,18,31,0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22,1,0.36,1) forwards",
        shimmer: "shimmer 3.5s linear infinite",
        "spin-slow": "spin-slow 40s linear infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
