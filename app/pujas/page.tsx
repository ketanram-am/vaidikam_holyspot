import CategoryLanding from "@/components/pages/CategoryLanding";
import { getCategory } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const category = getCategory("pujas")!;

export const metadata = pageMetadata({
  title: category.title,
  description: category.description,
  path: "/pujas",
});

export default function PujasPage() {
  return <CategoryLanding category={category} />;
}
