"use client";

import FeaturePage from "@/components/FeaturePage";
import type { ReactNode } from "react";
import type { PortalFeature } from "@/src/data/portal";

export default function FeatureRoutePage({ feature, children }: { feature: PortalFeature; children?: ReactNode }) {
  return <FeaturePage {...feature}>{children}</FeaturePage>;
}
