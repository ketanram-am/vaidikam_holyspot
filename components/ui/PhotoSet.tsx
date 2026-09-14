"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
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
 * An autoplaying photograph showcase with temporary interaction pausing.
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
  const [userPaused, setUserPaused] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [loadTimedOut, setLoadTimedOut] = useState(false);
  const [settledImages, setSettledImages] = useState<Set<string>>(
    () => new Set()
  );
  const stageRef = useRef<HTMLDivElement>(null);
  const settledCountRef = useRef(0);
  const reducedMotion = useReducedMotion();
  const reelCount = photos.length > 1 ? 2 : 1;
  const expectedImages = photos.length * reelCount;
  const allImagesSettled = settledImages.size >= expectedImages;
  settledCountRef.current = settledImages.size;

  const close = useCallback(() => setOpen(null), []);
  const markImageSettled = useCallback((key: string) => {
    setSettledImages((current) => {
      if (current.has(key)) return current;
      const next = new Set(current);
      next.add(key);
      return next;
    });
  }, []);
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
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      setIsVisible(true);
      return;
    }

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoad(true);
        preloadObserver.disconnect();
      },
      { rootMargin: "600px 0px" }
    );
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );

    preloadObserver.observe(stage);
    visibilityObserver.observe(stage);
    return () => {
      preloadObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, []);
  useEffect(() => {
    if (!shouldLoad) return;

    const timeout = window.setTimeout(() => {
      if (settledCountRef.current >= expectedImages) return;
      console.warn(
        `Gallery loading timed out after ${settledCountRef.current} of ${expectedImages} images`
      );
      setLoadTimedOut(true);
    }, 15000);

    return () => window.clearTimeout(timeout);
  }, [expectedImages, shouldLoad]);

  if (photos.length === 0) return null;

  const lightboxPhoto = open === null ? null : photos[open];
  const reels = reelCount === 2 ? [0, 1] : [0];
  const imagesReady = allImagesSettled || loadTimedOut;
  const paused =
    userPaused ||
    interactionPaused ||
    open !== null ||
    reducedMotion === true ||
    photos.length < 2 ||
    !isVisible ||
    !imagesReady;
  const filmStyle: FilmStyle = {
    "--pset-duration": `${Math.max(24, photos.length * 3.8)}s`,
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <div
        className="pset"
        data-shape={shape}
        data-paused={paused}
        style={filmStyle}
      >
        <div className="pset__stage" ref={stageRef}>
          <div className="pset__track">
            {reels.map((reel) => (
              <div
                key={reel}
                className="pset__reel"
                aria-hidden={reel === 1 ? "true" : undefined}
              >
                {photos.map((photo, index) => (
                  <figure
                    key={`${reel}-${index}-${photo.src}`}
                    className="pset__card"
                  >
                    <button
                      type="button"
                      className="pset__button"
                      tabIndex={reel === 0 ? 0 : -1}
                      onFocus={() => setInteractionPaused(true)}
                      onBlur={() => setInteractionPaused(false)}
                      onPointerDown={() => setInteractionPaused(true)}
                      onPointerUp={() => setInteractionPaused(false)}
                      onPointerCancel={() => setInteractionPaused(false)}
                      onPointerLeave={() => setInteractionPaused(false)}
                      onClick={() => {
                        setInteractionPaused(false);
                        setOpen(index);
                      }}
                      aria-label={`View: ${photo.caption}`}
                    >
                      <Image
                        src={photo.src}
                        alt={reel === 0 ? photo.alt : ""}
                        fill
                        sizes="(max-width: 767px) 96vw, (max-width: 1210px) 28rem, (max-width: 1600px) 37vw, 37rem"
                        className="pset__img"
                        priority={reel === 0 && index === 0}
                        loading={
                          reel === 0 && index === 0
                            ? undefined
                            : shouldLoad
                              ? "eager"
                              : "lazy"
                        }
                        onLoad={() =>
                          markImageSettled(`${reel}-${index}`)
                        }
                        onError={() => {
                          console.error(
                            `Gallery image failed to load: ${photo.src}`
                          );
                          markImageSettled(`${reel}-${index}`);
                        }}
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

        {photos.length > 1 && imagesReady && reducedMotion !== true && (
          <div className="pset__controls">
            <button
              type="button"
              className="pset__pause"
              onClick={() => setUserPaused((value) => !value)}
              aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
            >
              {userPaused ? (
                <PlayIcon size={15} weight="fill" aria-hidden="true" />
              ) : (
                <PauseIcon size={15} weight="fill" aria-hidden="true" />
              )}
              {userPaused ? "Play" : "Pause"}
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
