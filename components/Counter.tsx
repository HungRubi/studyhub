"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

type CounterProps = {
  value: number;
  suffix?: string;
};

export function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest: number) =>
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      animate(count, value, {
        duration: 1.5,
        ease: "easeOut",
      });
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
