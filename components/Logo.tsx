type Tone = "dark" | "light";

const inkFor = (tone: Tone) => (tone === "dark" ? "#0A0A0A" : "#FAFAFA");

export function LogoFull({
  className = "",
  tone = "dark",
  showAccent = true,
}: {
  className?: string;
  tone?: Tone;
  showAccent?: boolean;
}) {
  const ink = inkFor(tone);
  return (
    <svg
      viewBox="0 0 320 96"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      role="img"
      aria-label="Areté"
    >
      {showAccent && (
        <path
          d="M14 74 L36 26 L58 74"
          stroke={ink}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      <text
        x={showAccent ? 80 : 0}
        y="68"
        fontFamily="'EB Garamond', ui-serif, Georgia, serif"
        fontSize="56"
        fontWeight="400"
        letterSpacing="0.03em"
        fill={ink}
      >
        Areté
      </text>
    </svg>
  );
}

export function LogoWordmark({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: Tone;
}) {
  const ink = inkFor(tone);
  return (
    <svg
      viewBox="0 0 200 60"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      role="img"
      aria-label="Areté"
    >
      <text
        x="0"
        y="44"
        fontFamily="'EB Garamond', ui-serif, Georgia, serif"
        fontSize="40"
        fontWeight="400"
        letterSpacing="0.03em"
        fill={ink}
      >
        Areté
      </text>
    </svg>
  );
}

export function LogoMark({
  className = "",
  tone = "dark",
  strokeWidth = 2,
}: {
  className?: string;
  tone?: Tone;
  strokeWidth?: number;
}) {
  const ink = inkFor(tone);
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      role="img"
      aria-label="Areté"
    >
      <path
        d="M8 30 L20 10 L32 30"
        stroke={ink}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
