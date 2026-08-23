import CategoryLanding from "@/components/pages/CategoryLanding";
import { getCategory } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const category = getCategory("samskaras")!;

export const metadata = pageMetadata({
  title: category.title,
  description: category.description,
  path: "/samskaras",
});

export default function SamskarasPage() {
  return <CategoryLanding category={category} />;
}
