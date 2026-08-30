"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDownIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { priest, primaryAction, site } from "@/content/site";
import ArchOverlay, { ArchClip } from "@/components/ui/ArchOverlay";

/**
 * The opening — an arched niche holding the Narasimha painting.
 *
 * The previous version drew a torana arch as a separate SVG at 116% width over
 * a frame whose corners were rounded with `border-radius`. Two different curves
 * never coincide, so the gold arch floated outside the painting and the whole
 * thing looked pasted together. There is now no overlay at all: the gold is
 * `border` and `box-shadow` on the same element that clips the image, so the
 * arch and the picture edge are the same curve by construction and cannot
 * drift apart.
 *
 * The section fills the viewport (100svh) and the image is sized in `svh` so
 * the whole composition — mark, niche, title, button, scroll cue — is on the
 * first screen of a phone rather than the button falling below the fold.
 *
 * Motion is scroll-linked, so it responds to the reader instead of looping.
 */

const EASE = [0.16, 1, 0.3, 1] as const;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: EASE },
});

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const artScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const artY = useTransform(scrollYProgress, [0, 1], ["0%", "-9%"]);
  const haloOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const chakraRotate = useTransform(scrollYProgress, [0, 1], [0, 42]);

  return (
    <LazyMotion features={domAnimation} strict>
      <section id="top" ref={ref} aria-labelledby="hero-title" className="shrine">
        <ArchClip />
        <span aria-hidden="true" className="shrine__ground" />
        <m.span
          aria-hidden="true"
          className="shrine__halo"
          style={reduced ? undefined : { opacity: haloOpacity }}
        />
        {/* The sourced Sudarshana chakra, turning with the scroll. */}
        <m.span
          aria-hidden="true"
          className="shrine__chakra"
          style={{
            maskImage: "url(/images/marks/sudarshana-chakra.svg)",
            WebkitMaskImage: "url(/images/marks/sudarshana-chakra.svg)",
            ...(reduced ? {} : { rotate: chakraRotate }),
          }}
        />

        <div className="container-page shrine__inner">
          {site.heroImage && (
            <m.div className="shrine__niche" {...rise(0.05)}>
              <m.div
                className="shrine__frame"
                style={reduced ? undefined : { y: artY }}
              >
                <m.div
                  className="shrine__imagewrap"
                  style={reduced ? undefined : { scale: artScale }}
                >
                  <Image
                    src={site.heroImage}
                    alt="Sri Narasimha with Prahlada, in a traditional devotional painting"
                    fill
                    priority
                    sizes="(max-width: 767px) 80vw, 460px"
                    className="shrine__image"
                  />
                </m.div>
                <span aria-hidden="true" className="shrine__vignette" />
              </m.div>
              {/* Sibling of the clipped frame, so the 2px gold is not halved
                  by the very clip it is tracing. */}
              <ArchOverlay />
            </m.div>
          )}

          <m.h1 id="hero-title" className="shrine__title" {...rise(0.16)}>
            Homas, yagas, pujas
            <span>and the samskaras</span>
          </m.h1>

          <m.p className="shrine__lead" {...rise(0.26)}>
            Performed by {priest.name} — for families in India and for devotees
            living abroad.
          </m.p>

          <m.div className="shrine__actions" {...rise(0.36)}>
            <Link href={primaryAction.href} className="btn btn-gold">
              {primaryAction.label}
              <ArrowRightIcon size={16} weight="bold" aria-hidden="true" />
            </Link>
            <a href="#ceremonies" className="shrine__scroll">
              See the ceremonies
              <ArrowDownIcon size={14} weight="bold" aria-hidden="true" />
            </a>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
