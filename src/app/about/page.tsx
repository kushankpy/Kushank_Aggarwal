"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PageIntro } from "@/components/page-intro";
import { aboutNarrative, aboutSpecs, profile } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function AboutPage() {
  return (
    <div>
      <PageIntro
        kicker="Engineering Profile"
        title="About"
        subtitle="Technical discipline rooted in mechanical fundamentals, simulation validation, and hardware-focused execution."
      />

      <motion.section
        className="grid gap-6 xl:grid-cols-[1.14fr_0.86fr]"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp} className="panel-surface p-6 sm:p-8">
          <blockquote className="heading-serif border-b border-[var(--line)] pb-6 text-[clamp(1.9rem,3.5vw,3rem)] leading-[1.16] text-bright">
            &quot;I do not only model systems. I study why they fail, how they improve, and how they get built.&quot;
          </blockquote>

          <div className="mt-6 space-y-5">
            {aboutNarrative.map((paragraph) => (
              <p key={paragraph} className="body-copy text-[1.08rem] text-soft">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
            {aboutSpecs.map((spec) => (
              <div key={spec.label} className="bg-[var(--bg-soft)] px-4 py-4">
                <p className="label-mono text-[0.62rem] text-[var(--accent)]">{spec.label}</p>
                <p className="body-copy mt-2 text-[1.02rem] text-bright">{spec.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="panel-surface relative min-h-[560px] overflow-hidden p-5">
          <div className="absolute inset-5 overflow-hidden rounded-[1.35rem] border border-[var(--line)]">
            <Image
              src={profile.portraitJpeg}
              alt="Kushank Aggarwal portrait in studio light"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 85vw, 40vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,9,13,0.9),rgba(7,9,13,0.1)_58%)]" />
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
