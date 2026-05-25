"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageIntro } from "@/components/page-intro";
import { experienceTimeline } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "@/lib/motion";

const projectLinks: Record<string, string> = {
  Arka: "/projects",
  "Precision Displacement Sensor": "/projects",
};

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const renderDescriptionWithLinks = (description: string) => {
  const pattern = new RegExp(
    `(${Object.keys(projectLinks).map(escapeRegExp).join("|")})`,
    "g"
  );
  const parts = description.split(pattern);

  return parts.map((part, index) => {
    if (projectLinks[part]) {
      return (
        <Link
          key={index}
          href={projectLinks[part]}
          className="!text-[var(--accent)] font-semibold transition-opacity hover:opacity-70 cursor-pointer"
        >
          {part}
        </Link>
      );
    }

    return <span key={index}>{part}</span>;
  });
};

export default function ExperiencePage() {
  return (
    <div>
      <PageIntro
        kicker="Professional Timeline"
        title="Experience"
        subtitle="Research, design internships, and technical leadership shaped by measurable engineering outcomes."
      />

      <motion.section
        className="relative space-y-5 pl-5 sm:pl-9"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <div className="absolute bottom-0 left-0 top-0 w-px bg-[var(--line)] sm:left-3" />

        {experienceTimeline.map((entry) => (
          <motion.article key={`${entry.organization}-${entry.role}`} variants={fadeUp} className="relative panel-surface p-5 sm:p-7">
            <span className="absolute -left-[22px] top-8 h-3 w-3 rounded-full border border-[var(--line-strong)] bg-[var(--bg)] sm:-left-[30px]" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="label-mono text-[var(--accent)]">{entry.duration}</p>
                <h2 className="heading-serif mt-2 text-[1.8rem] leading-tight text-bright">{entry.organization}</h2>
                <p className="ui-sans mt-1 text-[1.04rem] text-soft">{entry.role}</p>
              </div>
              {entry.logo && (
                <div className="relative mt-4 h-25 w-25 shrink-0 overflow-hidden border border-[var(--line)] bg-[var(--bg-soft)] p-2 sm:mt-0">
                  <Image
                    src={entry.logo}
                    alt={`${entry.organization} logo`}
                    fill
                    className="object-contain"
                    sizes="112px"
                  />
                </div>
              )}
            </div>

            <div className="mt-6 space-y-5">
              {entry.details.map((detail) => (
                <div key={detail.title} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <p className="label-mono text-[var(--accent)]">{detail.title}</p>
                  </div>
                  <p className="body-copy text-[1.03rem] text-soft">{renderDescriptionWithLinks(detail.description)}</p>
                </div>
              ))}
              {entry.credentials && (
                <div className="mt-6 flex items-center gap-2 pt-4 border-t border-[var(--line)]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  <a
                    href={entry.credentials}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label-mono text-[var(--accent)] font-semibold transition-opacity hover:opacity-70 cursor-pointer"
                  >
                    View Credentials
                  </a>
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </motion.section>
    </div>
  );
}
