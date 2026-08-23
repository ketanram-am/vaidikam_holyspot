import CategoryLanding from "@/components/pages/CategoryLanding";
import { getCategory } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const category = getCategory("yagas")!;

export const metadata = pageMetadata({
  title: category.title,
  description: category.description,
  path: "/yagas",
});

export default function YagasPage() {
  return <CategoryLanding category={category} />;
}
