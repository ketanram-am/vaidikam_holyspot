import type { SVGProps } from "react";
import type { ServiceCategorySlug } from "@/content/services";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function HomaIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M17 46h30l-4 10H21l-4-10Z" />
      <path d="M22 46 15 34h34l-7 12M18 38h28" opacity=".65" />
      <path d="M32 35c-8-5-6-13 1-22 1 7 9 8 6 17-1 3-3 5-7 5Z" />
      <path d="M31 35c-3-4-1-8 3-12" opacity=".6" />
    </svg>
  );
}

export function YagaIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 49h40M16 43h32M20 37h24L39 55H25l-5-18Z" />
      <path d="M26 36c-5-7 0-12 6-19 0 6 8 7 6 14-1 3-4 5-6 5" />
      <path d="M10 28h8M46 28h8M15 24l3 4-3 4M49 24l-3 4 3 4" opacity=".65" />
    </svg>
  );
}

export function PujaIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M17 50h30M21 45h22l-2 5H23l-2-5Z" />
      <path d="M25 45c0-9 3-17 7-23 4 6 7 14 7 23" />
      <path d="M26 26c-5-4-4-10 1-16 1 5 6 6 5 11M38 26c5-4 4-10-1-16-1 5-6 6-5 11" opacity=".7" />
      <path d="M32 22v23" />
    </svg>
  );
}

export function SamskaraIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="32" cy="32" r="20" />
      <circle cx="32" cy="32" r="12" opacity=".55" />
      <path d="M32 12c2 8 6 12 20 20-14 8-18 12-20 20-2-8-6-12-20-20 14-8 18-12 20-20Z" />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ConsultationIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M16 19h32v24H31l-9 8 2-8h-8V19Z" />
      <path d="M23 28h18M23 34h13" opacity=".7" />
      <path d="M23 14h18" opacity=".45" />
    </svg>
  );
}

const icons = {
  homas: HomaIcon,
  yagas: YagaIcon,
  pujas: PujaIcon,
  samskaras: SamskaraIcon,
  consultation: ConsultationIcon,
};

export function RitualIcon({ category, ...props }: IconProps & { category: ServiceCategorySlug }) {
  const Icon = icons[category];
  return <Icon {...props} />;
}

