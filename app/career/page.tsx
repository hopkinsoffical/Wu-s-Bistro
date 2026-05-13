import Link from "next/link";
import { CareersJobHub } from "@/components/CareersJobHub";

export default function CareerPage() {
  return (
    <>
      <section className="border-b border-sea/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sea">
              Careers
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Find your role at Wu&apos;s Bistro Group
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink/75">
              Explore openings across{" "}
              <strong className="text-ink">Business insights & analytics</strong>,{" "}
              <strong className="text-ink">marketing & business development</strong>
              , and{" "}
              <strong className="text-ink">restaurant & field operations</strong>{" "}
              for Xie Bao and Wu&apos;s Fish House in{" "}
              <strong className="text-ink">Manhattan</strong>,{" "}
              <strong className="text-ink">Flushing</strong>, and{" "}
              <strong className="text-ink">Edison</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:info@WuBistro.com?subject=Careers%20%E2%80%94%20"
                className="inline-flex items-center justify-center rounded-full bg-coral px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-coral/20 transition hover:bg-coral/90"
              >
                Apply by email
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-sea/20 bg-white px-6 py-2.5 text-sm font-semibold text-ink transition hover:border-sea/40"
              >
                Locations & contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CareersJobHub />
    </>
  );
}
