"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { profile } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "@/lib/motion";

const heroStats = [
  { value: "02", label: "Core Projects" },
  { value: "04", label: "Technical Roles" },
  { value: "08+", label: "Engineering Domains" },
  { value: "2027", label: "Graduate Target" },
];

export default function HomePage() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(145deg,rgba(17,23,34,0.96),rgba(10,13,19,0.96))] p-5 sm:p-7 lg:p-10">
      <div className="cad-outline cad-outline-a" />
      <div className="cad-outline cad-outline-b" />
      <div className="cad-outline cad-outline-c" />

      <motion.div
        className="grid min-h-[calc(100vh-12.5rem)] gap-8 lg:grid-cols-[1.15fr_0.85fr]"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-col justify-between gap-8 py-2">
          <div className="space-y-7">
            <motion.p variants={fadeUp} className="label-mono text-[var(--accent)]">
              Mechanical Engineer
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="heading-serif text-bright text-[clamp(3rem,8.4vw,7.8rem)] leading-[0.9]"
            >
              <span className="block">Kushank</span>
              <span className="block text-[var(--accent-strong)]">Aggarwal</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="space-y-1">
              <p className="ui-sans text-[1.14rem] text-soft">{profile.role}</p>
              <p className="ui-sans text-[1.1rem] text-soft">{profile.institute}</p>
              <p className="ui-sans text-[1.1rem] text-[var(--accent)]">{profile.availability}</p>
            </motion.div>

            <motion.p variants={fadeUp} className="body-copy max-w-[56ch] text-[1.12rem] text-soft">
              {profile.summary}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="ui-sans flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--accent)] px-6 py-3 text-[0.95rem] font-medium text-[#130f09] transition hover:bg-[var(--accent-strong)]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ui-sans flex items-center gap-2 rounded-full border border-[var(--line)] px-6 py-3 text-[0.95rem] text-soft transition hover:border-[var(--line-strong)] hover:text-[var(--text)]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-4">
            {heroStats.map((item) => (
              <div key={item.label} className="bg-[var(--bg-soft)] px-4 py-4">
                <p className="heading-serif text-[1.72rem] leading-none text-[var(--accent-strong)]">{item.value}</p>
                <p className="label-mono mt-2 text-[0.62rem] tracking-[0.14em] text-muted">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>


        <motion.div variants={fadeUp} className="relative min-h-[420px] lg:min-h-[620px]">
          <div className="absolute inset-0 rounded-[1.7rem] border border-[var(--line)] bg-black/20" />
          <div className="absolute inset-[7%_6%_0_12%] overflow-hidden rounded-[1.7rem] border border-[var(--line-strong)] bg-black/35">
            <Image
              src={profile.portraitPng}
              alt="Kushank Aggarwal portrait"
              fill
              priority
              className="hero-image-mask object-cover object-[center_top] scale-[1.04] filter brightness-125"
              sizes="(max-width: 1024px) 85vw, 38vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(7,9,13,0.94),rgba(7,9,13,0.35)_45%,transparent)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,9,13,0.8),transparent_42%)]" />
          </div>
        </motion.div>
      </motion.div>

           <motion.p variants={fadeUp} className="body-copy mt-6 max-w-[56ch] text-[1.12rem] text-soft">
             Thanks for checking out my portfolio! Whether you’re a recruiter, fellow engineer, friend, or lost stranger, I hope you enjoy the ride.
           </motion.p>

      <div className="mt-7">
        <ScrollIndicator />
      </div>
    </section>
  );
}
