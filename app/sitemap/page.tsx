"use client";

import FeatureRoutePage from "@/components/FeatureRoutePage";
import { featurePages } from "@/src/data/portal";

export default function SitemapPage() {
  return <FeatureRoutePage feature={featurePages.sitemap} />;
}
