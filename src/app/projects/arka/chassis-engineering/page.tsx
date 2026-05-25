import Link from "next/link";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import ChassisViewer from "@/components/chassis-viewer";

export default function ChassisEngineeringPage() {
  return (
    <div>
      <PageIntro
        kicker="Arka Project"
        title="Chassis Engineering"
        subtitle="A closer look at the structural layout, stiffness considerations, and material choices that make Arka resilient and lightweight."
      />

      <ChassisViewer />
      <div className="panel-surface p-7 space-y-6">
        <section>
          <h3 className="heading-serif text-2xl text-bright">Building a 32 kg steel skeleton that could survive a crash, corner like it means it, and not weigh down a solar car, all simultaneously wasn't an easy job.</h3>
          <div className="mt-4 grid gap-4">
            <div>
              <p className="label-mono text-[var(--accent)]">Overview</p>
              <p className="body-copy text-[1.03rem] text-soft">The Arka chassis is a tubular spaceframe designed from first principles for the solar vehicle context where every gram is a watt-hour you can't spend on racing.</p>
            </div>

            <div>
              <p className="label-mono text-[var(--accent)]">Material Selection- Why AISI 4130 Chromoly?</p>
              <p className="body-copy text-[1.03rem] text-soft">Selecting tube material is one of those decisions that looks mundane. Most teams default to AISI 1020/1018 Mild steel or Al 6061-T6 because it's cheap and everywhere. We still went with AISI 4130 Chromoly and here's why it earns its slightly-annoying price premium:</p>
              <ul className="body-copy text-[1.03rem] text-soft list-disc pl-5">
                <li>Strength: Yield strength of ~435 MPa vs ~207 MPa for mild steel. Same safety factor, thinner walls, less mass. That's the whole game.</li>
                <li>Fatigue: Chromoly's chromium-molybdenum alloying significantly improves fatigue resistance under cyclic loading which is important when the chassis sees brake, bump, and cornering inputs continuously over a race distance.</li>
                <li>Weld Integrity: 4130 is TIG-weldable with excellent heat-affected zone behaviour when proper technique is used.</li>
              </ul>
            </div>

            <div>
              <p className="label-mono text-[var(--accent)]">Procurement</p>
              <p className="body-copy text-[1.03rem] text-soft">4130 tubes aren't something you pull off a shelf at a local metal yard. Vendor identification involved reaching out to structural tube suppliers across the region, comparing minimum order quantities that don't bankrupt a student team.</p>
            </div>

            <div>
              <p className="label-mono text-[var(--accent)]">Design & Validation</p>
              <p className="body-copy text-[1.03rem] text-soft">The frame was modelled in SolidWorks Weldments with real section profiles assigned to each member. FEA was run to validate the structure under worst-case brake, cornering, and bump load scenarios. Torsional rigidity was evaluated by fully constraining the rear suspension plane and applying a torque at the front, then measuring angular deflection at the loaded end, arriving at 1800 Nm/deg stiffness, which means for every 1800 Nm of torque applied, the chassis twists by just one degree. Mass was tracked per-member throughout the design process. Members that contributed negligible stiffness relative to their mass were removed or rerouted to more efficient load paths until the frame reached target weight. The final structure at 32 kg is lean for a fully triangulated spaceframe with integrated crash structure.</p>
            </div>

            <div>
              <p className="label-mono text-[var(--accent)]">Fabrication</p>
              <p className="body-copy text-[1.03rem] text-soft">This is where design meets shop floor reality. Fabrication was carried out at Mecrox Tech Pvt. Ltd., with personal on-site oversight throughout. Tube notching i.e. the process of profiling tube ends for tight mating joints, was done manually, which is as labour-intensive as it sounds and significantly more satisfying when it comes together clean.</p>
            </div>
          </div>
        </section>

        <div className="mt-8 rounded-lg overflow-hidden border border-[var(--line)] flex justify-center">
          <Image
            src="/assets/team_photo.jpeg"
            alt="Arka team working on chassis"
            width={800}
            height={350}
            className="object-contain"
          />
        </div>

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
            href="/projects/arka/why-composites"
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
