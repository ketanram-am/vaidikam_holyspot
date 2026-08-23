import Image from "next/image";
import { KolamMark, SealMark } from "./Motifs";

type Props = {
  src?: string | null;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * The priest portrait. Always reserves a 4:5 box so replacing the placeholder
 * with a real photograph produces zero layout shift.
 */
export default function PortraitFrame({
  src,
  alt,
  className = "",
  sizes = "(max-width: 1023px) 80vw, 40vw",
  priority = false,
}: Props) {
  return (
    <div
      className={`corner-frame relative aspect-[4/5] w-full overflow-hidden border border-bronze/35 bg-gradient-to-br from-paper via-cream to-sand ${className}`}
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-2 z-10 border border-ivory/35" />
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover saturate-[.82] sepia-[.06]"
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 overflow-hidden"
        >
          <KolamMark className="slow-drift pointer-events-none absolute left-1/2 top-1/2 h-[135%] w-[135%] -translate-x-1/2 -translate-y-1/2 text-bronze/[0.07]" />
          <SealMark className="relative h-[clamp(2.25rem,6vw,3.25rem)] w-[clamp(2.25rem,6vw,3.25rem)] text-bronze/60" />
          <span className="eyebrow-quiet relative">Portrait</span>
        </div>
      )}
    </div>
  );
}
