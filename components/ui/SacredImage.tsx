import Image from "next/image";
import { KolamMark, SealMark } from "./Motifs";

type Props = {
  src?: string | null;
  alt: string;
  /** Aspect ratio + sizing are supplied by the caller via className. */
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Placeholders label themselves with the alt text; suppress where the
   *  caller already renders a visible caption. */
  showPlaceholderLabel?: boolean;
};

/**
 * Renders a responsive next/image when a source is supplied, and a composed
 * placeholder frame otherwise. The wrapper always reserves its aspect ratio,
 * so swapping placeholders for real photography causes no layout shift.
 */
export default function SacredImage({
  src,
  alt,
  className = "",
  sizes = "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw",
  priority = false,
  showPlaceholderLabel = true,
}: Props) {
  return (
    <div
      className={`sacred-niche corner-frame group/image relative border border-bronze/35 bg-paper ${className}`}
    >
      <div className="absolute inset-[clamp(0.38rem,1vw,0.7rem)] overflow-hidden border border-bronze/25 bg-gradient-to-br from-paper via-cream to-sand shadow-[inset_0_0_0_1px_rgba(32,26,23,.08),inset_0_8px_24px_rgba(32,26,23,.12)]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-1.5 z-10 border border-ivory/25"
        />
        {src ? (
          <>
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              priority={priority}
              className="object-cover saturate-[.9] contrast-[1.03] sepia-[.025] transition-[transform,filter] duration-[1600ms] ease-arrive group-hover/image:scale-[1.035] group-hover/image:saturate-[1.04]"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-soot/15 via-transparent to-ivory/[0.04]"
            />
          </>
        ) : (
          <div
            role="img"
            aria-label={alt}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 overflow-hidden p-5 text-center"
          >
            <KolamMark className="slow-drift pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 text-bronze/[0.07]" />
            <SealMark className="relative h-[clamp(1.75rem,5vw,2.75rem)] w-[clamp(1.75rem,5vw,2.75rem)] text-bronze/60" />
            {showPlaceholderLabel && (
              <span className="relative max-w-[22ch] text-small leading-snug text-taupe/80">
                {alt}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
