import SchemeCategoryClient from "./SchemeCategoryClient";

const CATEGORY_IDS = ["all", "women", "farmers", "youth", "entrepreneurs", "tribal", "social"];

export function generateStaticParams() {
  return CATEGORY_IDS.map((category) => ({ category }));
}

export default async function SchemeCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  return <SchemeCategoryClient category={category} />;
}
