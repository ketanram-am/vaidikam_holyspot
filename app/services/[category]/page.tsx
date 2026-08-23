import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import {
  categories,
  getCategory,
} from "@/content/services";

type Params = { params: { category: string } };

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const cat = getCategory(params.category);
  if (!cat) return {};
  return pageMetadata({
    title: cat.title,
    description: cat.description,
    path: `/services/${cat.slug}`,
  });
}

export default function CategoryPage({ params }: Params) {
  const cat = getCategory(params.category);
  if (!cat) notFound();
  redirect(`/${cat.slug}`);
}
