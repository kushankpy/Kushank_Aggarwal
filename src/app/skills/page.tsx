"use client";

import { motion } from "framer-motion";
import { PageIntro } from "@/components/page-intro";
import { skillCategories } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function SkillsPage() {
  return (
    <div>
      <PageIntro
        kicker="Capability Matrix"
        title="Skills"
        subtitle="Categorized techhnical expertise across design, simulation, manufacturing, and technical tooling."
      />

      <motion.section
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {skillCategories.map((bucket) => (
          <motion.article key={bucket.category} variants={fadeUp} className="panel-surface p-6">
            <p className="label-mono text-[var(--accent)]">{bucket.category}</p>
            <div className="mt-5 space-y-4">
              {bucket.items.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between gap-3">
                    <p className="body-copy text-[1.03rem] text-bright">{skill.name}</p>
                    <p className="label-mono text-[0.58rem] tracking-[0.12em] text-soft">{skill.level}</p>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      className="h-full rounded-full bg-[var(--accent)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.section>
    </div>
  );
}
