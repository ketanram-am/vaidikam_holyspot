"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
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

export default function PhotoSet({
  photos,
  shape = "portrait",
}: {
  photos: Photo[];
  /** Frame ratio. His photographs are 4:5; ceremony shots vary. */
  shape?: "portrait" | "landscape";
}) {
  const [open, setOpen] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [manuallyPaused, setManuallyPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const touchStart = useRef<number | null>(null);
  const suppressOpen = useRef(false);
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
  const show = useCallback(
    (index: number) => {
      setActiveIndex((index + photos.length) % photos.length);
      setManuallyPaused(true);
    },
    [photos.length]
  );

  const paused = manuallyPaused || hovered || open !== null || reducedMotion;

  useEffect(() => {
    if (paused || photos.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % photos.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [paused, photos.length]);

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

  const currentPhoto = photos[activeIndex];
  const lightboxPhoto = open === null ? null : photos[open];

  return (
    <LazyMotion features={domAnimation} strict>
      <div
        className="pset"
        data-shape={shape}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={(event) => {
          touchStart.current = event.touches[0]?.clientX ?? null;
          suppressOpen.current = false;
          setManuallyPaused(true);
        }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;
          const distance =
            (event.changedTouches[0]?.clientX ?? touchStart.current) -
            touchStart.current;
          touchStart.current = null;

          if (Math.abs(distance) < 40) return;
          suppressOpen.current = true;
          show(activeIndex + (distance < 0 ? 1 : -1));
        }}
      >
        <div className="pset__stage">
          <AnimatePresence mode="wait" initial={false}>
            <m.figure
              key={currentPhoto.src}
              className="pset__slide"
              initial={{ opacity: 0, scale: 1.015 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: reducedMotion ? 0 : 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <button
                type="button"
                className="pset__button"
                onClick={() => {
                  if (suppressOpen.current) {
                    suppressOpen.current = false;
                    return;
                  }
                  setManuallyPaused(true);
                  setOpen(activeIndex);
                }}
                aria-label={`View: ${currentPhoto.caption}`}
              >
                <Image
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 1200px"
                  className="pset__img"
                  priority={activeIndex === 0}
                />
                <span className="pset__shade" aria-hidden="true" />
                <span className="pset__caption">
                  {currentPhoto.caption}
                </span>
              </button>
            </m.figure>
          </AnimatePresence>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                className="pset__nav pset__nav--prev"
                onClick={() => show(activeIndex - 1)}
                aria-label="Previous photograph"
              >
                <CaretLeftIcon size={22} weight="bold" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="pset__nav pset__nav--next"
                onClick={() => show(activeIndex + 1)}
                aria-label="Next photograph"
              >
                <CaretRightIcon size={22} weight="bold" aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        {photos.length > 1 && (
          <div className="pset__controls">
            <div
              className="pset__dots"
              role="group"
              aria-label="Choose photograph"
            >
              {photos.map((photo, index) => (
                <button
                  type="button"
                  key={photo.src}
                  className="pset__dot"
                  data-active={index === activeIndex}
                  onClick={() => show(index)}
                  aria-label={`Show photograph ${index + 1}: ${photo.caption}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                />
              ))}
            </div>
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
