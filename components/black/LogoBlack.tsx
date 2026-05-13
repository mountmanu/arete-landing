/**
 * Areté Black logo — the canonical wordmark in bone with a discreet gold
 * accent rule + a subordinate "Black" label set in tracked uppercase Inter.
 * Use this only inside the /black sub-experience.
 */
export function LogoBlack({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 96"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      role="img"
      aria-label="Areté Black"
    >
      <path
        d="M14 74 L36 26 L58 74"
        stroke="#C9A961"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="80"
        y="68"
        fontFamily="'EB Garamond', ui-serif, Georgia, serif"
        fontSize="56"
        fontWeight="400"
        letterSpacing="0.03em"
        fill="#F5F1E8"
      >
        Areté
      </text>
      <line x1="244" y1="56" x2="262" y2="56" stroke="#C9A961" strokeWidth="1" />
      <text
        x="270"
        y="62"
        fontFamily="'Inter', ui-sans-serif, system-ui, sans-serif"
        fontSize="14"
        fontWeight="500"
        letterSpacing="0.32em"
        fill="#C9A961"
      >
        BLACK
      </text>
    </svg>
  );
}
