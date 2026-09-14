"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useState } from "react";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";
import {
  CaretLeftIcon,
  CaretRightIcon,
  PauseIcon,
  PlayIcon,
  XIcon,
} from "@phosphor-icons/react/dist/ssr";

/**
 * An autoplaying, touch-pausable photograph showcase with full-screen viewing.
 */

export type Photo = { src: string; alt: string; caption: string };
type FilmStyle = CSSProperties & { "--pset-duration": string };

export default function PhotoSet({
  photos,
  shape = "portrait",
}: {
  photos: Photo[];
  /** Frame ratio. His photographs are 4:5; ceremony shots vary. */
  shape?: "portrait" | "landscape";
}) {
  const [open, setOpen] = useState<number | null>(null);
  const [manuallyPaused, setManuallyPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  const close = useCallback(() => setOpen(null), []);
  const stepLightbox = useCallback(
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
      if (event.key === "ArrowRight") stepLightbox(1);
      if (event.key === "ArrowLeft") stepLightbox(-1);
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close, stepLightbox]);

  if (photos.length === 0) return null;

  const lightboxPhoto = open === null ? null : photos[open];
  const paused =
    manuallyPaused || open !== null || reducedMotion === true || photos.length < 2;
  const filmStyle: FilmStyle = {
    "--pset-duration": `${Math.max(24, photos.length * 3.8)}s`,
  };
  const reels = photos.length > 1 ? [0, 1] : [0];

  return (
    <LazyMotion features={domAnimation} strict>
      <div
        className="pset"
        data-shape={shape}
        data-paused={paused}
        style={filmStyle}
      >
        <div className="pset__stage">
          <div className="pset__track">
            {reels.map((reel) => (
              <div
                key={reel}
                className="pset__reel"
                aria-hidden={reel === 1 ? "true" : undefined}
              >
                {photos.map((photo, index) => (
                  <figure key={`${reel}-${photo.src}`} className="pset__card">
                    <button
                      type="button"
                      className="pset__button"
                      tabIndex={reel === 0 ? 0 : -1}
                      onFocus={() => setManuallyPaused(true)}
                      onClick={() => {
                        setManuallyPaused(true);
                        setOpen(index);
                      }}
                      aria-label={`View: ${photo.caption}`}
                    >
                      <Image
                        src={photo.src}
                        alt={reel === 0 ? photo.alt : ""}
                        fill
                        sizes="(max-width: 767px) 82vw, 42vw"
                        className="pset__img"
                        priority={reel === 0 && index === 0}
                      />
                      <span className="pset__shade" aria-hidden="true" />
                      <span className="pset__caption">{photo.caption}</span>
                    </button>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>

        {photos.length > 1 && (
          <div className="pset__controls">
            <button
              type="button"
              className="pset__pause"
              onClick={() => setManuallyPaused((value) => !value)}
              aria-label={manuallyPaused ? "Play slideshow" : "Pause slideshow"}
            >
              {manuallyPaused ? (
                <PlayIcon size={15} weight="fill" aria-hidden="true" />
              ) : (
                <PauseIcon size={15} weight="fill" aria-hidden="true" />
              )}
              {manuallyPaused ? "Play" : "Pause"}
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightboxPhoto && (
          <m.div
            className="lbox"
            role="dialog"
            aria-modal="true"
            aria-label={lightboxPhoto.caption}
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
                stepLightbox(-1);
              }}
              aria-label="Previous photograph"
            >
              <CaretLeftIcon size={26} weight="bold" aria-hidden="true" />
            </button>

            <m.figure
              className="lbox__figure"
              // Stops a click on the picture itself from closing the lightbox.
              onClick={(event) => event.stopPropagation()}
              key={lightboxPhoto.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={lightboxPhoto.src}
                alt={lightboxPhoto.alt}
                width={1440}
                height={1800}
                sizes="(max-width: 767px) 94vw, 78vw"
                className="lbox__img"
              />
              <figcaption>{lightboxPhoto.caption}</figcaption>
            </m.figure>

            <button
              type="button"
              className="lbox__nav lbox__nav--next"
              onClick={(event) => {
                event.stopPropagation();
                stepLightbox(1);
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
