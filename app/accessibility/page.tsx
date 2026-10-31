"use client";

import FeatureRoutePage from "@/components/FeatureRoutePage";
import { featurePages } from "@/src/data/portal";

export default function AccessibilityPage() {
  return <FeatureRoutePage feature={featurePages.accessibility} />;
}
