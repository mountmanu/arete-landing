import Image from "next/image";
import { clients, type ClientId } from "@/lib/clients";

interface ClientLogoProps {
  id: ClientId;
  /** Altura base en píxeles; cada logo aplica su propio `scale`. */
  height?: number;
  /** En gris, a color al pasar el cursor (o al pasar sobre el `group` padre). */
  mono?: boolean;
  className?: string;
}

export function ClientLogo({
  id,
  height = 40,
  mono = true,
  className = "",
}: ClientLogoProps) {
  const c = clients[id];
  if (!c.logo) {
    return (
      <span
        className={`font-display text-ink leading-none ${className}`}
        style={{ fontSize: Math.round(height * 0.55) }}
      >
        {c.name}
      </span>
    );
  }
  const h = Math.round(height * (c.logo.scale ?? 1));
  const w = Math.round((c.logo.width * h) / c.logo.height);
  return (
    <Image
      src={c.logo.src}
      alt={c.name}
      title={c.name}
      width={c.logo.width}
      height={c.logo.height}
      sizes={`${w * 2}px`}
      style={{ height: h, width: w }}
      className={`block max-w-full object-contain transition-all duration-500 ${
        mono
          ? "grayscale opacity-70 hover:grayscale-0 hover:opacity-100 group-hover:grayscale-0 group-hover:opacity-100"
          : ""
      } ${className}`}
    />
  );
}

interface ClientLogosProps {
  ids: ClientId[];
  height?: number;
  mono?: boolean;
  className?: string;
  gapClass?: string;
}

/** Fila de logos. Los nombres quedan en `alt` y en texto solo para lectores de pantalla. */
export function ClientLogos({
  ids,
  height = 40,
  mono = true,
  className = "",
  gapClass = "gap-x-8 gap-y-4",
}: ClientLogosProps) {
  return (
    <div className={`flex flex-wrap items-center ${gapClass} ${className}`}>
      {ids.map((id) => (
        <ClientLogo key={id} id={id} height={height} mono={mono} />
      ))}
    </div>
  );
}
