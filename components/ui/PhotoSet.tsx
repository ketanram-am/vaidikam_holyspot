"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import {
  CaretLeftIcon,
  CaretRightIcon,
  XIcon,
} from "@phosphor-icons/react/dist/ssr";

/**
 * A photograph set that works the same way on a phone and on a desktop.
 *
 * On a phone it is a snap rail — one photograph filling most of the screen,
 * swiped horizontally. That is how people look at photos on a phone, and it
 * shows each one large instead of shrinking four into a grid.
 *
 * On desktop it is a grid, because there the screen has room for several at
 * once and a rail would waste it.
 *
 * Either way, tapping a photograph opens it full-screen with arrows and
 * keyboard navigation. The lightbox is what makes this a real way of looking
 * at pictures rather than a decorative strip: these are somebody's ceremonies
 * and his teachers, and they deserve to be seen at size.
 */

export type Photo = { src: string; alt: string; caption: string };

export default function PhotoSet({
  photos,
  shape = "portrait",
}: {
  photos: Photo[];
  /** Frame ratio. His photographs are 4:5; ceremony shots vary. */
  shape?: "portrait" | "landscape";
}) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (by: number) =>
      setOpen((current) =>
        current === null
          ? null
          : (current + by + photos.length) % photos.length
      ),
    [photos.length]
  );

  useEffect(() => {
    if (open === null) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  if (photos.length === 0) return null;

  const active = open === null ? null : photos[open];

  return (
    <LazyMotion features={domAnimation} strict>
      <ul className="pset" data-shape={shape}>
        {photos.map((photo, i) => (
          <li key={photo.src} className="pset__item">
            <button
              type="button"
              className="pset__button"
              onClick={() => setOpen(i)}
              aria-label={`View: ${photo.caption}`}
            >
              <span className="pset__frame">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 767px) 82vw, (max-width: 1023px) 46vw, 31vw"
                  className="pset__img"
                />
              </span>
              <span className="pset__caption">{photo.caption}</span>
            </button>
          </li>
        ))}
      </ul>

      {/* The rail is scrollable but that is only obvious once you try, so on
          touch widths a count sits underneath. */}
      <p className="pset__hint">
        {photos.length} photographs — swipe, or tap to enlarge
      </p>

      <AnimatePresence>
        {active && (
          <m.div
            className="lbox"
            role="dialog"
            aria-modal="true"
            aria-label={active.caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={close}
          >
            <button
              type="button"
              className="lbox__close"
              onClick={close}
              aria-label="Close"
            >
              <XIcon size={22} weight="bold" aria-hidden="true" />
            </button>

            <button
              type="button"
              className="lbox__nav lbox__nav--prev"
              onClick={(event) => {
                event.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photograph"
            >
              <CaretLeftIcon size={26} weight="bold" aria-hidden="true" />
            </button>

            <m.figure
              className="lbox__figure"
              // Stops a click on the picture itself from closing the lightbox.
              onClick={(event) => event.stopPropagation()}
              key={active.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={active.src}
                alt={active.alt}
                width={1440}
                height={1800}
                sizes="(max-width: 767px) 94vw, 78vw"
                className="lbox__img"
              />
              <figcaption>{active.caption}</figcaption>
            </m.figure>

            <button
              type="button"
              className="lbox__nav lbox__nav--next"
              onClick={(event) => {
                event.stopPropagation();
                step(1);
              }}
              aria-label="Next photograph"
            >
              <CaretRightIcon size={26} weight="bold" aria-hidden="true" />
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
