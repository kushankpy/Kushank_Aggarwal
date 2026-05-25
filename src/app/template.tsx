"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { easingCurve } from "@/lib/motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: easingCurve }}
    >
      {children}
    </motion.div>
  );
}
