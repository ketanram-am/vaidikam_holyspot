import CategoryLanding from "@/components/pages/CategoryLanding";
import { getCategory } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const category = getCategory("homas")!;

export const metadata = pageMetadata({
  title: category.title,
  description: category.description,
  path: "/homas",
});

export default function HomasPage() {
  return <CategoryLanding category={category} />;
}
