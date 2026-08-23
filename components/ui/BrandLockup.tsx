import Link from "next/link";
import { site } from "@/content/site";
import YogaNarasimhaMark from "./YogaNarasimhaMark";

export default function BrandLockup({
  compact = false,
  inverse = false,
}: {
  compact?: boolean;
  inverse?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`brand-lockup group ${inverse ? "text-ivory" : "text-maroon"}`}
      data-brand-lockup
    >
      <span className="brand-seal" aria-hidden="true">
        <YogaNarasimhaMark
          accentColor="#805B38"
          className="h-full w-full"
        />
      </span>
      {!compact && (
        <span className="brand-wordmark">
          <span>Vaidikam</span>
          <span>Holyspot</span>
        </span>
      )}
    </Link>
  );
}
