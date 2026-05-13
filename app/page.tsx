import Image from "next/image";
import Link from "next/link";
import { XieBaoStorySection } from "@/components/XieBaoStorySection";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-sea/10 bg-gradient-to-br from-shell via-white to-shell">
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-coral/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sea">
              Wu&apos;s Bistro Group
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Hospitality you can taste—operations you can measure.
            </h1>
            <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-ink/75">
              <p>
                Founded by Dr. Wu, Wu&apos;s Bistro Group is dedicated to
                preserving the tradition and craftsmanship of authentic
                Huaiyang-style Chinese cuisine while delivering a warm and
                memorable seafood dining experience. We proudly operate{" "}
                <strong className="font-semibold text-ink">Xie Bao (蟹宝)</strong>{" "}
                and{" "}
                <strong className="font-semibold text-ink">
                  Wu&apos;s Fish House
                </strong>{" "}
                across{" "}
                <strong className="font-semibold text-ink">Manhattan</strong>,{" "}
                <strong className="font-semibold text-ink">Flushing</strong>, and{" "}
                <strong className="font-semibold text-ink">Edison</strong>.
              </p>
              <p>
                Rooted in quality ingredients, hospitality, and regional culinary
                heritage, our restaurants have earned strong community recognition
                and a loyal customer following throughout New York and New Jersey.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full bg-coral px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-coral/25 transition hover:bg-coral/90"
              >
                Explore services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-sea/25 bg-white px-7 py-3 text-sm font-semibold text-ink transition hover:border-sea/50"
              >
                Contact us
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md justify-self-center lg:max-w-none lg:justify-self-end">
            {/* Lake ambience: soft water-colored glow */}
            <div
              className="pointer-events-none absolute -inset-8 top-[20%] rounded-[55%] bg-gradient-to-b from-sea/25 via-teal-800/15 to-transparent blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-4 bottom-0 h-[38%] rounded-[50%] bg-gradient-to-t from-sea/30 via-sea/10 to-transparent blur-2xl"
              aria-hidden
            />
            {/* Shallow ripple line */}
            <svg
              className="pointer-events-none absolute -bottom-1 left-[8%] right-[8%] h-10 text-sea/35"
              viewBox="0 0 400 48"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                fill="currentColor"
                d="M0 28c40-12 80-12 120 0s80 12 120 0 80-12 120 0 40 12 40 12v8H0z"
                opacity={0.45}
              />
              <path
                fill="currentColor"
                d="M0 34c50-8 100-8 150 0s100 8 150 0 100-8 100 0v14H0z"
                opacity={0.25}
              />
            </svg>

            <div className="relative z-[1] mx-auto w-full max-w-[min(100%,20rem)] sm:max-w-xs lg:max-w-sm">
              <div className="rounded-2xl border-2 border-gold/45 bg-gradient-to-b from-shell via-white to-sea/10 p-2 shadow-[0_28px_60px_-18px_rgba(26,58,74,0.45)] ring-1 ring-sea/15">
                <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-shell">
                  <Image
                    src="/images/hero-huaiyang-banner.png"
                    alt="Xie Bao — Huaiyang cuisine and seafood; Wu's Bistro Group"
                    fill
                    className="object-contain object-center [mask-image:radial-gradient(ellipse_78%_78%_at_50%_50%,#000_55%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_78%_78%_at_50%_50%,#000_55%,transparent_100%)]"
                    sizes="(max-width: 1024px) 320px, 360px"
                    priority
                  />
                  {/* Inner vignette for softer edge blend */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_0_60px_20px_rgba(250,248,244,0.55)]"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <XieBaoStorySection />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink">
              Company overview
            </h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Wu&apos;s Bistro Group is a multi-unit hospitality group with an in-house
              analytics and engineering function. We operate{" "}
              <strong className="text-ink">Xie Bao (蟹宝)</strong> and{" "}
              <strong className="text-ink">Wu&apos;s Fish House</strong>. We are not
              solely a restaurant group or a trading desk—we build and operate{" "}
              <span className="font-medium text-ink">
                data platforms, BI assets, AI agents, and digital workflows
              </span>{" "}
              that sit alongside our operating companies.
            </p>
            <ul className="mt-6 space-y-3 text-ink/80">
              {[
                "Revenue intelligence, cohort analytics, and margin diagnostics",
                "Automated daily & weekly operating reports for every store",
                "AI & voice agents for reservations, QA, and internal copilots",
                "Menu engineering: attach rate, basket analysis, and LTO lift",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-sea/10 bg-white p-8 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sea">
              Who we serve
            </h3>
            <p className="mt-3 leading-relaxed text-ink/75">
              Our primary stakeholders are{" "}
              <strong className="text-ink">multi-unit restaurant operators</strong>
              , <strong className="text-ink">brand leadership</strong>, and{" "}
              <strong className="text-ink">finance & operations teams</strong>{" "}
              that require trustworthy numbers, repeatable automation, and
              modern AI tooling without outsourcing their entire data stack.
            </p>
            <p className="mt-4 leading-relaxed text-ink/75">
              We also engage{" "}
              <strong className="text-ink">select consulting clients</strong>{" "}
              seeking data platform design, BI modernization, and AI workflow
              integration—especially where regulated, high-volume consumer
              businesses need pragmatic governance.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm font-semibold text-coral hover:underline"
            >
              Read About Us →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-sea/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-display text-3xl font-semibold text-ink">
            Xie Bao in the news
          </h2>
          <p className="mt-3 max-w-2xl text-ink/70">
            Independent coverage and listings for our Manhattan flagship—useful
            context for partners and guests.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "W42ST — Hell’s Kitchen feature",
                href: "https://w42st.com/post/claw-some-delights-xie-bao-unveils-unique-chinese-cuisine-in-hells-kitchen/",
                desc: "Local reporting on Xie Bao’s opening and crab-ro focus.",
              },
              {
                title: "Gourmand Syndrome — dining notes",
                href: "https://www.gourmandsyndrome.com/nyc/chinese/xie-bao/",
                desc: "Third-party review of the Midtown crab house experience.",
              },
              {
                title: "Seamless — Manhattan menu",
                href: "https://www.seamless.com/menu/xiebao-crab-house-manhattan-650-9th-ave-new-york/11126448",
                desc: "Public menu listing (650 9th Ave, New York).",
              },
              {
                title: "Xie Bao USA — official guest site",
                href: "https://xiebaousa.com/",
                desc: "Menus, chefs, reservations, and brand imagery for all markets.",
              },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-xl border border-sea/10 bg-shell/50 p-5 transition hover:border-gold/40 hover:bg-shell"
                >
                  <p className="font-semibold text-ink group-hover:text-coral">
                    {link.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {link.desc}
                  </p>
                  <span className="mt-3 inline-block text-xs font-medium uppercase tracking-wide text-sea">
                    Open link ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
