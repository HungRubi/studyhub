"use client";

import { motion } from "framer-motion";

export default function Wrapper({
  children, className
}: {
  children: React.ReactNode;
  className?: string
}) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}