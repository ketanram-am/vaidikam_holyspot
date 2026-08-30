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
 * The opening — the Narasimha painting, framed.
 *
 * Five attempts went into arching this image before the actual problem showed
 * up: the source is 2200x2091, so it is very nearly SQUARE (1.052). Every
 * version forced it into a 4:5 portrait box, which threw away about a quarter
 * of the painting, and then imposed an arch on top of a composition that has
 * its own painted rectangular border. No arch geometry could ever fit,
 * because the shape being fitted was not the shape of the picture.
 *
 * So the painting is now shown at its own ratio, uncropped, in a rectangular
 * gilt frame — which is how a devotional painting is actually presented. The
 * arch is gone rather than fixed; it was decoration fighting the subject.
 *
 * The section still fills the viewport (100svh) and the frame is sized in
 * `svh`, so the whole composition sits on the first screen of a phone.
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
        <span aria-hidden="true" className="shrine__ground" />
        <m.span
          aria-hidden="true"
          className="shrine__halo"
          style={reduced ? undefined : { opacity: haloOpacity }}
        />
        {/* The sourced chakra, turning with the scroll. It sits low and
            behind, so it never crosses the painting — overlapping the two
            muddied both. */}
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
              </m.div>
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
