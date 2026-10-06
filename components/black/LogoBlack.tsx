/**
 * LINCE Black logo — the lynx and the wordmark in bone, with a discreet gold
 * rule + a subordinate "Black" label set in tracked uppercase Inter.
 * Use this only inside the /black sub-experience.
 */
export function LogoBlack({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 372 96"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      role="img"
      aria-label="LINCE Black"
    >
      <image
        href="/brand/lince-blanco.png"
        x="0"
        y="0"
        width="72"
        height="96"
        preserveAspectRatio="xMidYMid meet"
      />
      <text
        x="88"
        y="67"
        style={{
          fontFamily:
            "var(--font-display-stack), 'EB Garamond', ui-serif, Georgia, serif",
        }}
        fontSize="52"
        fontWeight="400"
        textLength="176"
        lengthAdjust="spacing"
        fill="#F5F1E8"
      >
        LINCE
      </text>
      <line x1="280" y1="56" x2="298" y2="56" stroke="#C9A961" strokeWidth="1" />
      <text
        x="306"
        y="62"
        style={{
          fontFamily:
            "var(--font-body-stack), 'Inter', ui-sans-serif, system-ui, sans-serif",
        }}
        fontSize="14"
        fontWeight="500"
        textLength="62"
        lengthAdjust="spacing"
        fill="#C9A961"
      >
        BLACK
      </text>
    </svg>
  );
}
