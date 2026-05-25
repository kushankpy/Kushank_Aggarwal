"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageIntro } from "@/components/page-intro";
import { projects } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function ProjectsPage() {
  return (
    <div>
      <PageIntro
        kicker="Engineering Work"
        title="Projects"
        subtitle="Mechanically grounded builds focused on CAD architecture, simulation depth, tolerance control, and production feasibility."
      />

      <motion.section
        className="grid gap-5 xl:grid-cols-2 items-start"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeUp}
            whileHover={{ y: -7, scale: 1.01 }}
            transition={{ duration: 0.28 }}
            className="panel-surface group p-6 sm:p-7"
          >
            <p className="label-mono text-[var(--accent)]">{project.sequence}</p>
            <h2 className="heading-serif mt-3 text-[1.95rem] leading-[1.04] text-bright">{project.title}</h2>
            <p className="body-copy mt-2 text-[1.04rem] text-soft">{project.subtitle}</p>

            {project.status && (
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 text-[0.8rem] font-semibold text-[var(--accent)]">
                <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" />
                {project.status}
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span
                  key={tag}
                  className="label-mono rounded-full border border-[var(--line)] bg-[color:var(--accent)]/10 px-3 py-1 text-[0.6rem] tracking-[0.12em] text-[var(--text-soft)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            

            {project.title === "Arka - Solar Vehicle" && (
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <Link
                  href="/projects/arka/chassis-engineering"
                  className="ui-sans rounded-full border border-[var(--line)] px-5 py-3 text-center text-[1.02rem] text-soft transition hover:border-[var(--line-strong)] hover:text-[var(--text)]"
                >
                  Chassis Engineering
                </Link>
                <Link
                  href="/projects/arka/why-composites"
                  className="ui-sans rounded-full border border-[var(--line)] px-5 py-3 text-center text-[1.02rem] text-soft transition hover:border-[var(--line-strong)] hover:text-[var(--text)]"
                >
                  Why Composites?
                </Link>
                <Link
                  href="/projects/arka/vehicles-aerodynamics"
                  className="ui-sans rounded-full border border-[var(--line)] px-5 py-3 text-center text-[1.02rem] text-soft transition hover:border-[var(--line-strong)] hover:text-[var(--text)]"
                >
                  Vehicle’s Aerodynamics
                </Link>
              </div>
            )}

            <div className="mt-6 space-y-4">
              {project.sections.map((section) => (
                <div key={`${project.title}-${section.label}`} className="border-t border-[var(--line)] pt-3">
                  <p className="label-mono text-[var(--accent)]">{section.label}</p>
                  <p className="body-copy mt-2 text-[1.04rem] text-soft">{section.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ui-sans rounded-full border border-[var(--line)] px-5 py-3 text-center text-[1.05rem] text-soft transition hover:border-[var(--line-strong)] hover:text-[var(--text)]"
              >
                GitHub Repository
              </a>
            </div>
          </motion.article>
        ))}
      </motion.section>
    </div>
  );
}
