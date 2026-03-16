"use client";

import { motion, useScroll, useTransform, HTMLMotionProps } from "framer-motion";
import { ReactNode, useRef } from "react";

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  distance?: number;
}

export function FadeInView({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  className,
  distance = 20
}: FadeInViewProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: direction === "left" ? distance : direction === "right" ? -distance : 0,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)"
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      viewport={{ once: true, margin: "-10% 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleInView({
  children,
  delay = 0,
  duration = 0.6,
  className
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      viewport={{ once: true, margin: "-10% 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function BlurInView({
  children,
  delay = 0,
  duration = 0.8,
  className
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealView({
  children,
  delay = 0,
  duration = 0.8,
  className
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function StaggerContainer({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className
}: {
  children: ReactNode;
  delay?: number;
  staggerDelay?: number;
  className?: string
}) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxView({
  children,
  offset = 50,
  className
}: {
  children: ReactNode;
  offset?: number;
  className?: string
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
import { useInView, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className
}: {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  className?: string
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref as any, { once: true, margin: "0px" });

  const springValue = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        springValue.set(value);
      }, delay * 1000);
    }
  }, [isInView, springValue, value, delay]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Number(latest.toFixed(value % 1 === 0 ? 0 : 1)));
    });
  }, [springValue, value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
