export default function FloralCorner({
  position = "top-left",
  className = "",
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}) {
  const rotation: Record<string, string> = {
    "top-left": "rotate-0",
    "top-right": "rotate-90 scale-x-[-1]",
    "bottom-left": "-rotate-90",
    "bottom-right": "rotate-180",
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className={`pointer-events-none absolute h-16 w-16 text-rose opacity-50 sm:h-20 sm:w-20 ${rotation[position]} ${className}`}
      fill="none"
      aria-hidden="true"
    >
      {/* Sulur vine merambat dari sudut */}
      <path
        d="M4 4 C20 4, 30 10, 34 24 C38 38, 30 48, 16 46"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M4 4 C4 20, 10 30, 24 34 C38 38, 48 30, 46 16"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.7"
      />

      {/* Bunga kecil di ujung sulur */}
      <circle cx="34" cy="24" r="4.5" stroke="currentColor" strokeWidth="1" />
      <circle cx="34" cy="24" r="1.6" fill="currentColor" />

      <circle cx="16" cy="46" r="3" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="16" cy="46" r="1" fill="currentColor" />

      {/* Daun-daun kecil */}
      <path d="M4 4 C10 10, 12 16, 8 22" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
      <path d="M24 34 C20 38, 18 42, 20 46" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    </svg>
  );
}
