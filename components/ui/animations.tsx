 "use client";

 import { ReactNode, useEffect, useRef, useState } from "react";
 import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";

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
   const aosType =
     direction === "up"
       ? "fade-up"
       : direction === "down"
       ? "fade-down"
       : direction === "left"
       ? "fade-left"
       : direction === "right"
       ? "fade-right"
       : "fade";

   const delayMs = Math.max(0, Math.round(delay * 1000));
   const durationMs = Math.max(0, Math.round(duration * 1000));
   const offset = Math.max(0, Math.round(distance * 4));

   return (
     <div
       data-aos={aosType}
       data-aos-delay={delayMs}
       data-aos-duration={durationMs}
       data-aos-offset={offset}
       className={className}
     >
       {children}
     </div>
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
   className?: string;
 }) {
   const delayMs = Math.max(0, Math.round(delay * 1000));
   const durationMs = Math.max(0, Math.round(duration * 1000));

   return (
     <div
       data-aos="zoom-in"
       data-aos-delay={delayMs}
       data-aos-duration={durationMs}
       className={className}
     >
       {children}
     </div>
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
   className?: string;
 }) {
   const delayMs = Math.max(0, Math.round(delay * 1000));
   const durationMs = Math.max(0, Math.round(duration * 1000));

   return (
     <div
       data-aos="fade"
       data-aos-delay={delayMs}
       data-aos-duration={durationMs}
       className={`aos-blur-start ${className ?? ""}`}
     >
       {children}
     </div>
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
   className?: string;
 }) {
   const delayMs = Math.max(0, Math.round(delay * 1000));
   const durationMs = Math.max(0, Math.round(duration * 1000));

   return (
     <div className={`relative overflow-hidden ${className ?? ""}`}>
       <div
         data-aos="fade-up"
         data-aos-delay={delayMs}
         data-aos-duration={durationMs}
       >
         {children}
       </div>
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
   className?: string;
 }) {
   void staggerDelay;
   void delay;

   return <div className={className}>{children}</div>;
 }

 export function ParallaxView({
   children,
   offset = 50,
   className
 }: {
   children: ReactNode;
   offset?: number;
   className?: string;
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

 export function NumberTicker({
   value,
   direction = "up",
   delay = 0,
   className
 }: {
   value: number;
   direction?: "up" | "down";
   delay?: number;
   className?: string;
 }) {
   const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

   const springValue = useSpring(0, {
     mass: 1,
     stiffness: 100,
     damping: 30
   });

   useEffect(() => {
     if (!isInView) {
       return;
     }

     const timeoutId = window.setTimeout(() => {
       springValue.set(direction === "down" ? 0 - value : value);
     }, delay * 1000);

     return () => {
       window.clearTimeout(timeoutId);
     };
   }, [isInView, springValue, value, delay, direction]);

   useEffect(() => {
     const unsubscribe = springValue.on("change", (latest) => {
       const nextValue = direction === "down" ? 0 - Number(latest) : Number(latest);
       const fractionDigits = value % 1 === 0 ? 0 : 1;
       setDisplayValue(Number(nextValue.toFixed(fractionDigits)));
     });

     return unsubscribe;
   }, [springValue, value, direction]);

   return (
     <span ref={ref} className={className}>
       {displayValue}
     </span>
   );
 }
