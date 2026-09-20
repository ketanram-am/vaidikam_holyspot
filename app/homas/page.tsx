import CategoryLanding from "@/components/pages/CategoryLanding";
import { getCategory } from "@/content/services";
import { pageMetadata } from "@/lib/seo";
import { priest } from "@/content/site";

const category = getCategory("homas")!;

export const metadata = pageMetadata({
  title: category.title,
  // Named so a search for one specific homa resolves to this page rather than
  // to the generic category description.
  description: `Sacred fire rituals in Sri Vaishnava tradition — Ganapati, Navagraha, Maha Mrityunjaya, Narasimha, Maha Sudarshana, Mahalakshmi, Lakshmi Kubera, Durga, Vastu, Vainateya, and Vayuputra homa, performed by ${priest.name}.`,
  path: "/homas",
});

export default function HomasPage() {
  return <CategoryLanding category={category} />;
}
