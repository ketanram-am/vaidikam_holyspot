/**
 * The single source of truth for motion.
 *
 * Principles this encodes:
 *  - Entrances are FAST OUT, SOFT LAND. A crisp initial velocity reads as
 *    responsive; the long settle reads as calm. An even curve over a long
 *    duration just reads as slow, which is what this replaces.
 *  - Nothing an eye is waiting for takes longer than ~600ms.
 *  - Stagger is a rhythm, not a queue: it is capped so a 12-item grid never
 *    turns into a two-second cascade.
 */

/** Expo-out. Entrances, reveals, anything arriving. */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

/** Symmetric in-out. Hovers and state changes that can reverse mid-flight. */
export const EASE_SOFT = [0.4, 0, 0.2, 1] as const;

/** Accelerate away. Exits only — leaving should never linger. */
export const EASE_EXIT = [0.4, 0, 1, 1] as const;

export const DURATION = {
  /** Hover, colour, small affordances. */
  fast: 0.2,
  /** Panels, disclosures, transforms. */
  base: 0.3,
  /** Scroll reveals. */
  reveal: 0.55,
  /** Above-the-fold entrance. */
  hero: 0.6,
} as const;

const STAGGER_STEP = 0.055;
const STAGGER_MAX_STEPS = 5;

/**
 * Positional delay for a list or grid.
 *
 * Capped at STAGGER_MAX_STEPS so the last card in a long grid lands ~275ms
 * after the first rather than seconds later. Beyond the cap items share a
 * delay, which the eye reads as "the rest arrived together" — the intended
 * effect, and far better than waiting.
 */
export function stagger(index: number, step: number = STAGGER_STEP): number {
  return Math.min(index, STAGGER_MAX_STEPS) * step;
}

export const cssEase = (curve: readonly number[]) =>
  `cubic-bezier(${curve.join(", ")})`;
