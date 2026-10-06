type Tone = "dark" | "light";

const inkFor = (tone: Tone) => (tone === "dark" ? "#0A0A0A" : "#FAFAFA");

// The lynx is an engraving, so it ships as one image per ground.
const lynxFor = (tone: Tone) =>
  tone === "dark" ? "/brand/lince-negro.png" : "/brand/lince-blanco.png";

const DISPLAY = "var(--font-display-stack), 'EB Garamond', ui-serif, Georgia, serif";

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
  const x = showAccent ? 88 : 0;
  return (
    <svg
      viewBox={`0 0 ${x + 180} 96`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      role="img"
      aria-label="LINCE Sistemas"
    >
      {showAccent && (
        <image
          href={lynxFor(tone)}
          x="0"
          y="0"
          width="72"
          height="96"
          preserveAspectRatio="xMidYMid meet"
        />
      )}
      <text
        x={x}
        y="67"
        style={{ fontFamily: DISPLAY }}
        fontSize="52"
        fontWeight="400"
        textLength="176"
        lengthAdjust="spacing"
        fill={ink}
      >
        LINCE
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
      viewBox="0 0 140 60"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      role="img"
      aria-label="LINCE Sistemas"
    >
      <text
        x="0"
        y="44"
        style={{ fontFamily: DISPLAY }}
        fontSize="40"
        fontWeight="400"
        textLength="136"
        lengthAdjust="spacing"
        fill={ink}
      >
        LINCE
      </text>
    </svg>
  );
}

export function LogoMark({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: Tone;
}) {
  return (
    <svg
      viewBox="0 0 30 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      role="img"
      aria-label="LINCE Sistemas"
    >
      <image
        href={lynxFor(tone)}
        x="0"
        y="0"
        width="30"
        height="40"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
}
