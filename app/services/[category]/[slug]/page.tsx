import { notFound } from "next/navigation";

type Params = { params: { category: string; slug: string } };

export function generateStaticParams() {
  return [];
}

export default function ServiceDetailPage(_props: Params) {
  notFound();
}
