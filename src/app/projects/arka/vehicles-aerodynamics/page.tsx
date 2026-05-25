import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import BodyViewer from "@/components/body-viewer";

export default function VehiclesAerodynamicsPage() {
  return (
    <div>
      <PageIntro
        kicker="Arka Project"
        title="Vehicle's Aerodynamics"
        subtitle="How airflow management, drag reduction, and solar array integration shaped the Arka body design."
      />
      <BodyViewer />
      <div className="panel-surface p-7 space-y-6">
        <section>
          <div className="mt-4 grid gap-3">
            <div>
              <p className="label-mono text-[var(--accent)]">The Goal- Energy In = Energy Out</p>
              <p className="body-copy text-[1.03rem] text-soft">Solar racing is a game of margins. Your only energy source is the sun, and your only job is to waste as little of it as possible. Every design decision on Arka traces back to one fundamental equation i.e. maximising energy input from our 4m² solar array while minimising energy expenditure through drag. These two goals shaped everything: the body geometry, the aerodynamic form, the weight target, and the material choices.</p>
            </div>

            <div className="my-6 flex justify-center">
              <img
                src="/assets/aero1.png"
                alt=""
                className="w-[600px] shadow-2xl"
              />
            </div>

            <div>
              <p className="label-mono text-[var(--accent)]">Why Aerodynamics is the Most Important Thing</p>
              <p className="body-copy text-[1.03rem] text-soft">In any race you're fighting two forces- rolling resistance and air. Aerodynamic drag scales with the square of velocity, meaning it grows aggressively as the car speeds up. Beyond a certain point it completely takes over, making rolling resistance almost irrelevant. Our model confirmed this, which made aerodynamics not just important but the single most consequential design domain on the entire car.</p>
            </div>

            <div className="my-6 flex justify-center">
              <img
                src="/assets/aero2.png"
                alt=""
                className="w-[800px]  shadow-2xl"
              />
            </div>

            <div>
              <p className="label-mono text-[var(--accent)]">Design Philosophy</p>
              <p className="body-copy text-[1.03rem] text-soft">Our aerodynamic design  is engineered to minimize total vehicle drag, which is the sum of pressure drag, viscous (skin-friction) drag, and interference drag. Our strategy begins at the vehicle's leading edge, where a long forward canopy houses the 4 m² solar arrays. This shape establishes a highly predictable and clean boundary layer over the main body. This managed flow is then presented to the driver pod and wheel fairings, which are shaped to perform optimally within this pre-conditioned wake.</p>
            </div>

            <div className="my-3 flex justify-center gap-6">
              <img
                src="/assets/aero3.png"
                alt=""
                className="w-[48%] shadow-2xl"
              />

              <img
                src="/assets/aero4.png"
                alt=""
                className="w-[48%] shadow-2xl"
              />
            </div>
            <div className="my-4 flex justify-center">
              <img
                src="/assets/aero5.png"
                alt=""
                className="w-[600px] shadow-2xl"
              />
            </div>

            <div>
              <p className="label-mono text-[var(--accent)]">CFD Results</p>
              <p className="body-copy text-[1.03rem] text-soft">Solar racing is typically dominated by monohull and catamaran layouts optimised purely for aerodynamics. We had different constraints, the BSVC regulations required maximising solar panel area, and our manufacturing realities pushed us toward a front-facing panel layout. Within those boundaries, we achieved a drag coefficient of 0.13. For context, the world famous Tokai Challenger sits at 0.11.</p>
            </div>

            <div className="my-6 flex justify-center">
              <img
                src="/assets/aero6.png"
                alt=""
                className="w-full shadow-2xl"
              />
            </div>
          </div>
        </section>        


        <div className="mt-8">
          <Link
            href="/projects"
            className="ui-sans inline-flex items-center justify-center rounded-full border border-[var(--line)] px-5 py-3 text-[1.05rem] text-soft transition hover:border-[var(--line-strong)] hover:text-[var(--text)]"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
