"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { navGroups, priestNav } from "@/content/site";
import BrandLockup from "@/components/ui/BrandLockup";
import { MandapaLintelMark } from "@/components/ui/TempleMotifs";
import { DURATION, EASE_EXIT, EASE_OUT } from "@/lib/motion";

const mobilePanel = {
  hidden: { opacity: 0 },
  shown: {
    opacity: 1,
    transition: {
      duration: DURATION.fast,
      ease: EASE_OUT,
      staggerChildren: 0.045,
      delayChildren: 0.04,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.15, ease: EASE_EXIT } },
};

const mobileItem = {
  hidden: { opacity: 0, y: 10 },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
  exit: { opacity: 0, transition: { duration: 0.1, ease: EASE_EXIT } },
};

const desktopPanel = {
  hidden: { opacity: 0, y: -7, scale: 0.985 },
  shown: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATION.fast, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: { duration: 0.12, ease: EASE_EXIT },
  },
};

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 8"
      aria-hidden="true"
      className={`h-2 w-3 overflow-visible transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path d="m1 1 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const pathname = usePathname() || "/";
  const headerRef = useRef<HTMLElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const closeDesktop = useCallback(() => setDesktopOpen(null), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    closeMobile();
    closeDesktop();
  }, [pathname, closeMobile, closeDesktop]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const onChange = () => {
      if (mq.matches) closeMobile();
      else closeDesktop();
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [closeDesktop, closeMobile]);

  useEffect(() => {
    if (!desktopOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) closeDesktop();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDesktop();
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [desktopOpen, closeDesktop]);

  useEffect(() => {
    if (!mobileOpen) return;

    const node = mobilePanelRef.current;
    const focusables = () =>
      Array.from(
        node?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []
      );

    focusables()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobile();
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const elements = [toggleRef.current, ...focusables()].filter(
        Boolean
      ) as HTMLElement[];
      if (elements.length === 0) return;

      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === toggleRef.current) {
        event.preventDefault();
        focusables()[0]?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, closeMobile]);

  return (
    <LazyMotion features={domAnimation} strict>
      <header
        ref={headerRef}
        className={`site-header fixed inset-x-0 top-0 z-40 border-t-2 border-bronze transition-[background-color,border-color,box-shadow] duration-500 ease-calm ${
          scrolled || mobileOpen || desktopOpen
            ? "border-b border-hairline bg-ivory/95 shadow-card backdrop-blur-md"
            : "border-b border-transparent bg-ivory/45 backdrop-blur-[2px]"
        }`}
      >
        <nav
          aria-label="Primary"
          className="container-page flex h-[var(--nav-height)] items-center justify-between gap-5"
        >
          <BrandLockup />

          <div className="hidden items-center gap-1 xl:flex">
            <Link
              href={priestNav.href}
              aria-current={
                isActive(pathname, priestNav.href) ? "page" : undefined
              }
              className={`nav-desktop-link ${
                isActive(pathname, priestNav.href)
                  ? "text-maroon"
                  : "text-charcoal hover:text-maroon"
              }`}
            >
              {priestNav.label}
              <span
                aria-hidden="true"
                className={`nav-desktop-underline ${
                  isActive(pathname, priestNav.href)
                    ? "scale-x-100"
                    : "scale-x-0"
                }`}
              />
            </Link>

            {navGroups.map((group) => {
              const open = desktopOpen === group.label;
              const active = group.items.some((item) =>
                isActive(pathname, item.href)
              );
              const panelId = `desktop-${group.label.toLowerCase()}-navigation`;

              return (
                <div
                  key={group.label}
                  className="relative"
                  onBlur={(event) => {
                    if (
                      !event.currentTarget.contains(event.relatedTarget as Node)
                    ) {
                      closeDesktop();
                    }
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      event.stopPropagation();
                      closeDesktop();
                      event.currentTarget.querySelector("button")?.focus();
                    }
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    className={`nav-desktop-link gap-2 ${
                      active || open
                        ? "text-maroon"
                        : "text-charcoal hover:text-maroon"
                    }`}
                    onClick={() =>
                      setDesktopOpen((current) =>
                        current === group.label ? null : group.label
                      )
                    }
                  >
                    {group.label}
                    <Chevron open={open} />
                    <span
                      aria-hidden="true"
                      className={`nav-desktop-underline ${
                        active || open ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {open && (
                      <m.div
                        id={panelId}
                        aria-label={`${group.label} navigation`}
                        className="absolute right-0 top-[calc(100%+0.65rem)] w-[20rem] overflow-hidden border border-bronze/30 bg-paper/[.98] p-3 shadow-panel backdrop-blur-md"
                        variants={desktopPanel}
                        initial="hidden"
                        animate="shown"
                        exit="exit"
                      >
                        <MandapaLintelMark className="h-5 w-full text-bronze/45" />
                        <p className="eyebrow flex items-center gap-2 border-b border-hairline px-3 pb-3 pt-2">
                          <span aria-hidden="true" className="h-px w-5 bg-bronze/55" />
                          {group.label}
                        </p>
                        <ul className="mt-1">
                          {group.items.map((item, index) => {
                            const itemActive = isActive(pathname, item.href);
                            return (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  aria-current={itemActive ? "page" : undefined}
                                  className={`group flex min-h-tap items-center gap-4 border-b border-hairline/70 px-3 py-3 last:border-b-0 ${
                                    itemActive
                                      ? "bg-cream/60 text-maroon"
                                      : "text-charcoal hover:bg-cream/45 hover:text-maroon"
                                  }`}
                                >
                                  <span className="font-serif text-sm italic text-bronze/70">
                                    {String(index + 1).padStart(2, "0")}
                                  </span>
                                  <span className="flex min-w-0 flex-col">
                                    <span className="font-serif text-[1.15rem] leading-tight">
                                      {item.label}
                                    </span>
                                    <span className="mt-1 text-[0.72rem] leading-snug text-taupe">
                                      {item.description}
                                    </span>
                                  </span>
                                  <span
                                    aria-hidden="true"
                                    className="ml-auto text-bronze transition-transform duration-300 group-hover:translate-x-1"
                                  >
                                    →
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            <Link
              href="/booking"
              className="btn-primary ml-4 whitespace-nowrap px-6"
            >
              Begin an enquiry
            </Link>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 flex min-h-tap flex-none items-center gap-3 px-2 text-ink xl:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((value) => !value)}
          >
            <span className="eyebrow-quiet text-maroon">
              {mobileOpen ? "Close" : "Menu"}
            </span>
            <span className="relative block h-4 w-6" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-px w-6 bg-current transition-transform duration-300 ease-calm ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-px w-6 bg-current transition-opacity duration-200 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-px w-6 bg-current transition-transform duration-300 ease-calm ${
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <m.div
            ref={mobilePanelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="mobile-navigation surface-cream fixed inset-x-0 bottom-0 top-[var(--nav-height)] z-30 overflow-y-auto overscroll-contain px-gutter pb-[max(2rem,env(safe-area-inset-bottom))] xl:hidden"
            variants={mobilePanel}
            initial="hidden"
            animate="shown"
            exit="exit"
          >
            <div className="relative mx-auto w-full max-w-5xl pb-7 pt-6 md:pt-10">
              <m.div
                variants={mobileItem}
                className="flex flex-col gap-2 border-b border-bronze/30 pb-4 sm:pb-6"
              >
                <p className="eyebrow">Vaidikam Holyspot / Navigation</p>
                <p className="hidden max-w-xl text-small text-taupe sm:block">
                  Begin with the priest, the ritual tradition, or the guidance
                  you need.
                </p>
                <MandapaLintelMark className="mt-2 hidden h-6 w-full text-bronze/50 sm:block" />
              </m.div>

              <m.div variants={mobileItem}>
                <Link
                  href={priestNav.href}
                  onClick={closeMobile}
                  aria-current={
                    isActive(pathname, priestNav.href) ? "page" : undefined
                  }
                  className={`mobile-priest-link group relative mt-5 flex items-center justify-between gap-5 overflow-hidden border border-bronze/30 bg-paper/65 px-4 py-4 sm:mt-6 sm:px-5 sm:py-5 ${
                    isActive(pathname, priestNav.href)
                      ? "text-maroon shadow-card"
                      : "text-charcoal"
                  }`}
                >
                  <span className="flex flex-col">
                    <span className="eyebrow text-bronze">The practitioner</span>
                    <span className="mt-2 font-serif text-[1.55rem] leading-none text-maroon">
                      Mahakaal Prabhu
                    </span>
                    <span className="mt-2 text-small text-taupe">
                      Sri Vaishnava Vedic Priest
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-xl text-bronze transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </m.div>

              <div className="mobile-nav-groups mt-6 grid gap-x-10 gap-y-6 sm:mt-8 sm:grid-cols-2 sm:gap-y-9 md:grid-cols-3">
                {navGroups.map((group, groupIndex) => (
                  <m.section
                    key={group.label}
                    variants={mobileItem}
                    aria-labelledby={`mobile-${group.label.toLowerCase()}`}
                  >
                    <div className="flex items-center gap-3 border-b border-bronze/35 pb-3">
                      <span className="font-serif text-sm italic text-bronze/65">
                        {String(groupIndex + 1).padStart(2, "0")}
                      </span>
                      <h2
                        id={`mobile-${group.label.toLowerCase()}`}
                        className="eyebrow text-maroon"
                      >
                        {group.label}
                      </h2>
                    </div>
                    <ul>
                      {group.items.map((item) => {
                        const active = isActive(pathname, item.href);
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={closeMobile}
                              aria-current={active ? "page" : undefined}
                              className={`group flex min-h-tap items-center justify-between gap-4 border-b border-hairline/80 py-2.5 sm:py-3 ${
                                active
                                  ? "text-maroon"
                                  : "text-charcoal hover:text-maroon"
                              }`}
                            >
                              <span className="flex min-w-0 flex-col">
                                <span className="font-serif text-[1.15rem] leading-tight">
                                  {item.label}
                                </span>
                                <span className="mt-1 hidden text-[0.72rem] leading-snug text-taupe sm:block">
                                  {item.description}
                                </span>
                              </span>
                              <span
                                aria-hidden="true"
                                className="text-bronze transition-transform duration-300 group-hover:translate-x-1"
                              >
                                →
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </m.section>
                ))}
              </div>

              <m.div
                variants={mobileItem}
                className="mobile-nav-footer mt-8 flex flex-col items-start gap-4 border-t border-bronze/35 pt-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-7"
              >
                <p className="hidden max-w-md text-small text-taupe sm:block">
                  Enquiries are handled personally, never through a marketplace.
                </p>
                <Link
                  href="/booking"
                  onClick={closeMobile}
                  className="btn-primary w-full whitespace-nowrap sm:w-auto"
                >
                  Begin an enquiry
                </Link>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
