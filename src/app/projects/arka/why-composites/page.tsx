import Link from "next/link";
import CompositeCarousel from "@/components/CompositeCarousel";
import { PageIntro } from "@/components/page-intro";


export default function WhyCompositesPage() {
  return (
    <div>
      <PageIntro
        kicker="Arka Project"
        title="Why Composites?"
        subtitle="Documentation of the layup process, material selection, and manufacturing workflow used for Arka's lightweight body and structural panels."
      />

      <CompositeCarousel />

      <div className="panel-surface p-7 space-y-6">
        <section>
          <div className="mt-4 grid gap-3">


            <div>
              <p className="label-mono text-[var(--accent)]">Problem</p>
              <p className="body-copy text-[1.03rem] text-soft">I'm a huge fan of metalworking because there's something deeply satisfying about shaping metal by hand. But a solar car is fundamentally limited by the energy it can harvest from the sun, which means every gram matters. That ruled out metal for the body immediately and pointed us straight toward composites.
We built a non-structural composite body over a space-frame chassis which was a deliberate choice for ease of manufacturing. And given the sheer size of the car, fiberglass sandwich construction made far more sense than carbon fibre on our budget. This was undoubtedly the biggest challenge of our entire project. In most Indian student teams, body fabrication gets outsourced entirely. We couldn't as a body this large, a timeline this tight, and a budget this thin meant we had no choice but to build it ourselves.</p>
            </div>

            <div>
              <p className="label-mono text-[var(--accent)]">The Mould</p>
              <p className="body-copy text-[1.03rem] text-soft">Ideally, composite body fabrication starts with a precision-machined polyurethane foam mould. But CNC machining is expensive, large CNC beds are hard to find in Delhi, and foam itself isn't cheap. We needed a different approach.
The inspiration came from boat building. We laser-cut 2mm mild steel sheets as cross-sectional profiles, welded them into a box frame, and then welded a continuous sheet over them to create a clean layup surface, all thanks to our sponsor's laser cutting facility. The result was a functional mould at roughly 1/5th the cost of the conventional route.
It wasn't perfect. Welding the skin sheet to the cross-sections caused thermal distortion, which we had to work around. And mild steel, while cheap and easy to cut, made the mould extremely heavy. A 5-metre steel sheet also has significant flex due to which the frame wobbled. We solved this by welding steel angle sections along the edges, which acted as a backbone and dramatically improved rigidity through its high bending stiffness. Not the most elegant solution, but it worked.</p>
            </div>

            <div>
              <p className="label-mono text-[var(--accent)]">Material Selection</p>
              <p className="body-copy text-[1.03rem] text-soft">Carbon fibre would have been the dream, but at 5–10x the cost of fibreglass and with no autoclave available, it was never realistic for a student team on a tight budget. Our body is non-structural, it sits over a space-frame chassis and carries no primary loads. It just needs to be light, stiff enough to hold its aerodynamic shape, and manufacturable by hand. E-glass fits that brief well. Yes, it's denser than carbon (2.5 g/cm³ vs 1.8), and less stiff, but for non-structural panels, that trade-off is completely acceptable.
For the resin, we used an epoxy system with an amine-based hardener. Epoxy was chosen over polyester for its lower shrinkage (~1–2% vs ~4–8% for polyester), better fibre adhesion, and superior dimensional stability which is all important when you're trying to hold an aerodynamic contour. We specifically chose a slow hardener to get a pot life of around 30–45 minutes. On large panels, a fast hardener is a liability, if the resin starts gelling before you've wet out the fabric, you get dry spots and voids, which are stress concentrations that weaken the laminate. The hardener-to-resin ratio was always weighed precisely, too little and the resin stays permanently tacky, too much and the excess acts as a plasticizer, reducing strength.</p>
            </div>

            <div>
              <p className="label-mono text-[var(--accent)]">Sandwich Construction i.e. Stiffness Without Weight</p>
              <p className="body-copy text-[1.03rem] text-soft">We went with a sandwich layup including two layers of 200gsm twill E-glass on either side of a Soric XF core. Soric XF is a polyester-based foam core that works well with hand layup, unlike honeycomb which really needs vacuum bagging or an autoclave to consolidate properly. Sourcing it was its own adventure because you simply cannot buy Soric XF in small quantities in Delhi. We secured it on the very last day through contacts.</p>
            </div>

            <div>
              <p className="label-mono text-[var(--accent)]">Finishing</p>
              <p className="body-copy text-[1.03rem] text-soft">Since we used a male mould, the outer surface came out rough and uneven the opposite of what you'd get from a female mould. We spent long hours sanding and filling to get it to an acceptable state. But honestly, finish wasn't our priority as the entire upper fairing was going to be covered by solar panels anyway. Function over form, at least this time.</p>
            </div>
          </div>
        </section>

        <div className="mt-6 flex items-center justify-between">

          {/* LEFT BUTTON */}
          <Link
            href="/projects"
            className="ui-sans inline-flex items-center justify-center
               rounded-full border border-[var(--line)]
               px-5 py-3 text-[1.05rem] text-soft
               transition hover:border-[var(--line-strong)]
               hover:text-[var(--text)]"
            >
            ← Back to Projects
          </Link>

          {/* RIGHT BUTTON */}
          <Link
            href="/projects/arka/vehicles-aerodynamics"
            className="ui-sans inline-flex items-center justify-center
               rounded-full border border-[var(--line)]
               px-5 py-3 text-[1.05rem] text-soft
               transition hover:border-[var(--line-strong)]
               hover:text-[var(--text)]"
            >
            Next Section →
          </Link>

        </div>
      </div>
    </div>
  );
}
