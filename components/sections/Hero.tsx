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

/**
 * The opening: Sri Narasimha as the page itself.
 *
 * Every previous version put the painting inside a container — an arched
 * niche, a gilt frame, a feathered card — and every one read as an object
 * pasted onto a background, because that is what it was. The fix is not a
 * better container; it is to stop containing it. The painting is now
 * full-bleed, edge to edge, and the type sits on the ground it dissolves into.
 * A background cannot look standalone, because it is not standing on anything.
 *
 * Removed to get here:
 *  - the arch (five attempts; the source is 2200x2091, so nearly square, and
 *    no arch fits a square that has its own painted rectangular border);
 *  - the gilt frame (crisp edges are precisely what made it read as pasted on);
 *  - the Sudarshana chakra (behind the figure it overlapped the deity and
 *    muddied both — and the painting carries its own halo already).
 *
 * The image fades out downward through a mask rather than sitting under a
 * veil, so the deity keeps full colour where he is actually looked at while
 * the lower page becomes a clean dark field for the type.
 */

const EASE = [0.16, 1, 0.3, 1] as const;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Drifts and grows slightly as the section leaves, so the parallax reads as
  // depth rather than as the image sliding away.
  const artY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const artScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <LazyMotion features={domAnimation} strict>
      <section id="top" ref={ref} aria-labelledby="hero-title" className="shrine">
        {site.heroImage && (
          <m.div
            aria-hidden="true"
            className="shrine__art"
            style={reduced ? undefined : { y: artY, scale: artScale }}
          >
            <Image
              src={site.heroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="shrine__img"
            />
          </m.div>
        )}

        {/* Warms the field the type sits on and carries the painting's greens
            down into the page instead of ending them at an edge. */}
        <span aria-hidden="true" className="shrine__field" />

        <div className="container-page shrine__inner">
          <m.h1 id="hero-title" className="shrine__title" {...rise(0.15)}>
            Homas, pujas, samskaras
            <span>and Vedic consultation</span>
          </m.h1>

          <m.div className="shrine__who" {...rise(0.25)}>
            <p className="shrine__by">Performed by</p>
            <p className="shrine__name">{priest.name}</p>
            <p className="shrine__initiated">{priest.initiatedName}</p>
            <p className="shrine__lead">
              Bengaluru — for families and individuals, in India and abroad.
            </p>
          </m.div>

          <m.div className="shrine__actions" {...rise(0.35)}>
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
