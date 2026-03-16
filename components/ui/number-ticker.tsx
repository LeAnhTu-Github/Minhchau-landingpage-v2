"use client";

import React from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface NumberTickerProps {
  value: number;
  suffix?: string;
  className?: string;
}

export function NumberTicker({ value, suffix = "", className }: NumberTickerProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  React.useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  React.useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
