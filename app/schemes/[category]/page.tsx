import SchemeCategoryClient from "./SchemeCategoryClient";

const CATEGORY_IDS = ["all", "women", "farmers", "youth", "entrepreneurs", "tribal", "social"];

export function generateStaticParams() {
  return CATEGORY_IDS.map((category) => ({ category }));
}

export default function SchemeCategoryPage(props: { params: Promise<{ category: string }> }) {
  return <SchemeCategoryClient {...props} />;
}
