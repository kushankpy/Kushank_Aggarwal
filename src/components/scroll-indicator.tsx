"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <Link
      href="/about"
      className="label-mono inline-flex items-center gap-3 text-[var(--text-muted)] transition hover:text-[var(--accent)]"
    >
      <span>Explore Sections</span>
      <span className="relative flex h-9 w-5 items-start justify-center rounded-full border border-[var(--line)]">
        <motion.span
          className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
          animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </span>
    </Link>
  );
}
