"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ListIcon,
  XIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { navGroups, priestNav, primaryAction } from "@/content/site";
import BrandLockup from "@/components/ui/BrandLockup";

/**
 * The navigation.
 *
 * This was 497 lines: two hover dropdown panels with their own animation
 * variants, a framer-motion mobile sheet, a focus trap, a scroll listener, a
 * media-query listener, and three navigation groups. The site now has six
 * destinations, so it is a flat list — which also takes framer-motion off the
 * critical path entirely.
 *
 * The mobile sheet is still a real dialog (Escape closes it, focus moves into
 * it, background scroll is locked) because that part was correct.
 */

const links = [
  ...navGroups[0].items.map((item) => ({
    href: item.href,
    label: item.label,
  })),
  { href: priestNav.href, label: priestNav.label },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => close(), [pathname, close]);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <>
      <header className="nav">
        <div className="container-page nav__bar">
          <BrandLockup />

          <div className="nav__desktop">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
                className="nav__link"
                data-active={isActive(pathname, link.href)}
              >
                {link.label}
              </Link>
            ))}
            <Link href={primaryAction.href} className="btn-primary nav__cta">
              {primaryAction.label}
            </Link>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="nav__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
            {open ? (
              <XIcon size={18} weight="bold" aria-hidden="true" />
            ) : (
              <ListIcon size={18} weight="bold" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {open && (
        <div
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="sheet surface-cream"
        >
          <nav className="container-page sheet__nav">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
                className="sheet__link"
                data-active={isActive(pathname, link.href)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="container-page sheet__foot">
            <Link
              href={primaryAction.href}
              onClick={close}
              className="btn-primary sheet__cta"
            >
              {primaryAction.label}
              <ArrowRightIcon size={16} weight="bold" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
