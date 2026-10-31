"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

function formatValue(value: number, decimals: number) {
  return value.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export default function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1200,
  className,
}: CountUpProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(value);
  const finalLabel = `${prefix}${formatValue(value, decimals)}${suffix}`;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let frame = 0;
    let hasAnimated = false;

    const finish = () => {
      hasAnimated = true;
      setDisplayValue(value);
    };

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      finish();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (hasAnimated || !entries.some((entry) => entry.isIntersecting)) return;

        hasAnimated = true;
        observer.disconnect();
        const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
        if (reducedMotion) {
          setDisplayValue(value);
          return;
        }

        const startedAt = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(value * eased);
          if (progress < 1) frame = window.requestAnimationFrame(animate);
        };
        frame = window.requestAnimationFrame(animate);
      },
      { threshold: 0.2 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [decimals, duration, value]);

  return (
    <span ref={elementRef} aria-label={finalLabel} className={className} data-count-value={finalLabel}>
      {prefix}
      {formatValue(displayValue, decimals)}
      {suffix}
    </span>
  );
}
