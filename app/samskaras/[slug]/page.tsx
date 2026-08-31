import CeremonyDetail from "@/components/pages/CeremonyDetail";
import { getCeremonyIndex, getCeremony } from "@/content/ceremonies";
import { pageMetadata } from "@/lib/seo";
import { priest } from "@/content/site";

const CATEGORY = "samskaras" as const;

export function generateStaticParams() {
  const index = getCeremonyIndex(CATEGORY);
  if (!index) return [];
  return index.groups.flatMap((group) =>
    group.items.map((item) => ({ slug: item.slug }))
  );
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const ceremony = getCeremony(CATEGORY, params.slug);
  if (!ceremony) return {};

  return pageMetadata({
    title: ceremony.name,
    description:
      ceremony.detail?.[0]?.slice(0, 175) ??
      `${ceremony.name} — ${ceremony.deity}. Performed by ${priest.name}, ${priest.location}.`,
    path: `/${CATEGORY}/${params.slug}`,
  });
}

export default function Page({ params }: { params: { slug: string } }) {
  return <CeremonyDetail category={CATEGORY} slug={params.slug} />;
}
