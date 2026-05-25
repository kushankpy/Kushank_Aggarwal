"use client";

import { motion } from "framer-motion";
import { PageIntro } from "@/components/page-intro";
import { contactItems, profile } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function ContactPage() {
  return (
    <div>
      <PageIntro
        kicker="Let's Connect"
        title="Contact"
        subtitle="Open to internships, collaborative build programs, and technically demanding mechanical product work."
      />

      <motion.section
        className="grid gap-6 lg:grid-cols-[1fr_1.05fr]"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.article variants={fadeUp} className="panel-surface p-6 sm:p-8">
          <p className="heading-serif text-[clamp(2rem,4vw,3.1rem)] leading-[1.12] text-bright">
            Precision is a team sport.
            <br />
            Let us build something rigorous.
          </p>
          <p className="body-copy mt-6 text-[1.08rem] text-soft">
            I enjoy working on product development problems involving CAD, structures, manufacturing, and system validation.
          </p>
          <div className="mt-8 border-t border-[var(--line)] pt-5">
            <p className="label-mono text-[var(--accent)]">Location</p>
            <p className="body-copy mt-2 text-[1.05rem] text-soft">{profile.location}</p>
          </div>
        </motion.article>

        <motion.article variants={fadeUp} className="panel-surface p-6 sm:p-8">
          <div className="space-y-3">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block rounded-xl border border-[var(--line)] bg-white/[0.015] px-4 py-4 transition hover:border-[var(--line-strong)] hover:bg-[color:var(--accent)]/8"
              >
                <p className="label-mono text-[var(--accent)]">{item.label}</p>
                <p className="body-copy mt-2 text-[1.06rem] text-bright">{item.value}</p>
              </a>
            ))}
          </div>
        </motion.article>
      </motion.section>
    </div>
  );
}
