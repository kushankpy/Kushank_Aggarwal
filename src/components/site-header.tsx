"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-[var(--line)] bg-[color:var(--nav-bg)]/94 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="ui-sans text-base tracking-[0.22em] text-[var(--accent)]">
          KA / ME
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-[0.93rem] transition-colors ${
                  active ? "text-[var(--text)]" : "text-[var(--text-soft)] hover:text-[var(--text)]"
                }`}
              >
                <span className="ui-sans">{item.label}</span>
                {active ? (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute inset-0 -z-10 rounded-full border border-[var(--line-strong)] bg-[color:var(--accent)]/12"
                    transition={{ duration: 0.35 }}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <a
          className="ui-sans rounded-full border-2 border-[var(--accent)] bg-[color:var(--accent)]/25 px-4 py-2 text-[0.9rem] font-semibold text-[var(--accent)] transition hover:bg-[color:var(--accent)]/35 hover:shadow-lg hover:shadow-[color:var(--accent)]/20"
          href={profile.resumePath}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>

      <nav
        aria-label="Mobile navigation"
        className="scrollbar-none flex gap-2 overflow-x-auto border-t border-[var(--line)] px-5 py-3 lg:hidden"
      >
        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`ui-sans shrink-0 rounded-full border px-3 py-1.5 text-[0.85rem] transition ${
                active
                  ? "border-[var(--line-strong)] bg-[color:var(--accent)]/16 text-[var(--text)]"
                  : "border-[var(--line)] text-[var(--text-soft)]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
