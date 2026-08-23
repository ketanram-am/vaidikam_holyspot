import CategoryLanding from "@/components/pages/CategoryLanding";
import { getCategory } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const category = getCategory("consultation")!;

export const metadata = pageMetadata({
  title: category.title,
  description: category.description,
  path: "/consultation",
});

export default function ConsultationPage() {
  return <CategoryLanding category={category} />;
}
