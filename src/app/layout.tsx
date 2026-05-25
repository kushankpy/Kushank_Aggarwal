import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Syne } from "next/font/google";
import { BlueprintBackdrop } from "@/components/blueprint-backdrop";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const headingSerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const uiSans = Syne({
  subsets: ["latin"],
  variable: "--font-ui",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const technicalMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono-label",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kushank Aggarwal | Mechanical Engineering Portfolio",
    template: "%s | Kushank Aggarwal",
  },
  description:
    "Premium mechanical engineering portfolio focused on CAD, simulation, manufacturing systems, and precision design.",
  keywords: [
    "Mechanical Engineering Portfolio",
    "CAD",
    "FEA",
    "CFD",
    "Design Engineering",
    "Manufacturing",
    "Product Design",
  ],
  openGraph: {
    title: "Kushank Aggarwal | Mechanical Engineering Portfolio",
    description:
      "Precision-oriented engineering portfolio with technical depth in design, analysis, and fabrication.",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingSerif.variable} ${uiSans.variable} ${technicalMono.variable}`}
    >
      <body className="relative min-h-screen overflow-x-hidden text-[var(--text)]">
        <BlueprintBackdrop />
        <SiteHeader />
        <div className="relative z-10 flex min-h-screen flex-col">
          <main className="mx-auto w-full max-w-[1320px] flex-1 px-5 pb-14 pt-28 sm:px-8 lg:px-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
