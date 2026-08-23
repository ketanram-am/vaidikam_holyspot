import type { SVGProps } from "react";

type MarkProps = SVGProps<SVGSVGElement>;

/** Five-flame South Indian kuthuvilakku with a lotus bowl and stepped base. */
export function KuthuvilakkuMark(props: MarkProps) {
  return (
    <svg viewBox="0 0 72 112" fill="none" aria-hidden="true" {...props}>
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M36 8c-4 5-4 9 0 13 4-4 4-8 0-13ZM22 14c-3 4-2 8 2 11 3-4 2-8-2-11ZM50 14c3 4 2 8-2 11-3-4-2-8 2-11ZM12 23c-2 4 0 7 4 9 2-4 0-7-4-9ZM60 23c2 4 0 7-4 9-2-4 0-7 4-9Z" />
        <path d="M9 35h54M14 35c2 8 10 13 22 13s20-5 22-13M23 47h26l-5 7H28l-5-7Z" />
        <path d="M33 54h6v37h-6zM28 91h16l5 8H23l5-8ZM17 104h38M13 109h46" />
        <path d="M30 63h12M29 72h14M30 81h12" opacity=".55" />
      </g>
    </svg>
  );
}

/** Simplified granite mandapa pillar with bracket capital and lotus base. */
export function MandapaPillarMark(props: MarkProps) {
  return (
    <svg viewBox="0 0 64 180" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeLinejoin="round">
        <path d="M8 8h48v8H8zM13 16h38l7 10H6l7-10ZM16 26h32l-4 12H20l-4-12Z" />
        <path d="M21 38h22v91H21zM25 38v91M39 38v91" />
        <path d="M18 129h28l5 10H13l5-10ZM10 139h44v9H10zM14 148h36l7 15H7l7-15ZM3 163h58v10H3zM0 177h64" />
        <path d="M21 51h22M21 115h22M27 72h10v20H27z" opacity=".5" />
        <path d="M6 26c7 0 12 4 14 12M58 26c-7 0-12 4-14 12" />
      </g>
    </svg>
  );
}

/** Horizontal stone beam with stepped corbels and shallow kudu-like arches. */
export function MandapaLintelMark(props: MarkProps) {
  return (
    <svg viewBox="0 0 640 36" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 6h244l9 8h132l9-8h244M1 11h238l11 10h140l11-10h238" />
        <path d="M1 27h267l8 7h88l8-7h267" opacity=".5" />
        <path d="M286 21c0-7 5-12 11-12s11 5 11 12M309 21c0-8 5-14 11-14s11 6 11 14M332 21c0-7 5-12 11-12s11 5 11 12" />
        <path d="M266 14h108M276 27h88" opacity=".55" />
      </g>
    </svg>
  );
}
