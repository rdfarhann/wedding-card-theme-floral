export default function FloralDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 60"
      className={`mx-auto h-10 w-24 text-rose ${className}`}
      fill="none"
      aria-hidden="true"
    >
      {/* Sulur ranting kiri & kanan */}
      <path
        d="M4 30 C24 30, 34 22, 44 30 C34 38, 24 30, 4 30 Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <path
        d="M116 30 C96 30, 86 22, 76 30 C86 38, 96 30, 116 30 Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <path d="M4 30 H44" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M76 30 H116" stroke="currentColor" strokeWidth="1" opacity="0.5" />

      {/* Kelopak bunga mawar kecil di tengah */}
      <circle cx="60" cy="30" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="60" cy="30" r="3.2" fill="currentColor" />
      <path
        d="M60 22 C64 24, 66 28, 64 32 M60 22 C56 24, 54 28, 56 32 M52 30 C54 26, 58 24, 60 22 M68 30 C66 26, 62 24, 60 22"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />

      {/* Daun kecil di kiri & kanan bunga */}
      <path
        d="M52 30 C46 26, 40 28, 38 34"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M68 30 C74 26, 80 28, 82 34"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
