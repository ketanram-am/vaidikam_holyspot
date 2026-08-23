"use client";

import { useEffect, useRef, useState } from "react";
import YogaNarasimhaMark from "@/components/ui/YogaNarasimhaMark";
import { INTRO_STORAGE_KEY } from "@/lib/intro";

const MERGE_DELAY = 2600;
const MERGE_DURATION = 900;

export default function SacredIntro() {
  const [visible, setVisible] = useState(true);
  const [merging, setMerging] = useState(false);
  const lockupRef = useRef<HTMLDivElement>(null);
  const finishRef = useRef<() => void>(() => undefined);

  useEffect(() => {
    const root = document.documentElement;
    if (root.dataset.intro !== "play") {
      setVisible(false);
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const backgroundNodes = Array.from(document.body.children)
      .filter(
        (element) =>
          !element.classList.contains("sacred-intro") &&
          element.tagName !== "SCRIPT"
      )
      .map((element) => {
        const node = element as HTMLElement;
        const state = {
          node,
          inert: node.inert,
          ariaHidden: node.getAttribute("aria-hidden"),
        };
        node.inert = true;
        node.setAttribute("aria-hidden", "true");
        return state;
      });

    const restoreBackground = () => {
      for (const { node, inert, ariaHidden } of backgroundNodes) {
        node.inert = inert;
        if (ariaHidden === null) {
          node.removeAttribute("aria-hidden");
        } else {
          node.setAttribute("aria-hidden", ariaHidden);
        }
      }
    };

    let completed = false;
    let mergeAnimation: Animation | undefined;

    const finish = () => {
      if (completed) return;
      completed = true;
      root.dataset.intro = "done";
      try {
        sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
      } catch {
        // The animation still completes when browser storage is unavailable.
      }
      document.body.style.overflow = previousOverflow;
      restoreBackground();
      setVisible(false);
    };

    finishRef.current = finish;

    const merge = () => {
      const source = lockupRef.current;
      const target = document.querySelector<HTMLElement>(
        "header [data-brand-lockup]"
      );

      if (!source || !target) {
        finish();
        return;
      }

      setMerging(true);
      const sourceRect = source.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const scale = targetRect.width / sourceRect.width;

      mergeAnimation = source.animate(
        [
          { transform: "translate3d(0, 0, 0) scale(1)", opacity: 1 },
          {
            transform: `translate3d(${targetRect.left - sourceRect.left}px, ${
              targetRect.top - sourceRect.top
            }px, 0) scale(${scale})`,
            opacity: 1,
          },
        ],
        {
          duration: MERGE_DURATION,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "forwards",
        }
      );
      mergeAnimation.addEventListener("finish", finish, { once: true });
    };

    const timer = window.setTimeout(merge, MERGE_DELAY);

    return () => {
      window.clearTimeout(timer);
      mergeAnimation?.cancel();
      if (!completed) {
        document.body.style.overflow = previousOverflow;
        restoreBackground();
      }
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`sacred-intro ${merging ? "sacred-intro--merging" : ""}`}
      aria-label="Opening Vaidikam Holyspot"
      aria-modal="true"
      role="dialog"
    >
      <div className="sacred-intro__field" aria-hidden="true">
        <span className="sacred-intro__ring sacred-intro__ring--outer" />
        <span className="sacred-intro__ring sacred-intro__ring--inner" />
      </div>

      <div ref={lockupRef} className="sacred-intro__lockup">
        <span className="sacred-intro__mark" aria-hidden="true">
          <YogaNarasimhaMark
            animated
            accentColor="#F8F4EC"
            className="h-full w-full"
          />
        </span>
        <span className="sacred-intro__wordmark">
          <span>Vaidikam</span>
          <span>Holyspot</span>
          <span>
            <span lang="sa">ॐ नमो नारायणाय</span> · Sri Vaishnava tradition
          </span>
        </span>
      </div>

      <button
        type="button"
        className="sacred-intro__skip"
        onClick={() => finishRef.current()}
      >
        Skip intro
      </button>
    </div>
  );
}
