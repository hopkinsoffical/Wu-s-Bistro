import Image from "next/image";
import Link from "next/link";
import { XieBaoStorySection } from "@/components/XieBaoStorySection";
import { RestaurantLocations } from "@/components/RestaurantLocations";

const aboutNav = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#story", label: "Our story" },
  { href: "#gallery", label: "Signatures" },
  { href: "#brand", label: "Xie Bao USA" },
  { href: "#facts", label: "Timeline & team" },
  { href: "#locations", label: "Locations" },
];

const galleryImages = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
  src: `/images/food/food${n}.jpg`,
  alt: `Wu's Bistro Group — culinary photography ${n}`,
}));

export default function AboutPage() {
  return (
    <div className="bg-shell/30">
      <nav
        aria-label="About page sections"
        className="sticky top-[4.5rem] z-40 border-b border-sea/10 bg-shell/90 backdrop-blur-md sm:top-[5.75rem]"
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink/55 sm:justify-center sm:px-6 sm:text-[11px]">
          {aboutNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full px-3 py-1.5 text-ink/70 transition hover:bg-white hover:text-sea"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section
        id="philosophy"
        className="about-zen-hero relative border-b border-white/5 px-4 py-20 text-center sm:px-6 sm:py-28"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold/90">
            Guided by our philosophy
          </p>
          <blockquote className="mt-6 font-display text-2xl font-medium leading-snug text-shell/95 sm:text-3xl sm:leading-snug">
            <span className="text-gold">&ldquo;Delicate Flavor,</span>
            <br />
            <span className="text-shell">Timeless Tradition.&rdquo;</span>
          </blockquote>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-shell/65 sm:text-base">
            We honor craft in the kitchen and calm in the dining room—then
            carry that same discipline into data, reporting, and automation so
            every service can stay precise, warm, and consistent.
          </p>
          <div className="relative mt-12 h-28 w-28 overflow-hidden rounded-full border border-gold/25 bg-ink shadow-xl shadow-black/40 ring-2 ring-white/5 sm:h-36 sm:w-36">
            <Image
              src="/images/xiebaologo.png"
              alt="Xie Bao — Wu&apos;s Bistro Group mark"
              fill
              className="object-cover object-center"
              sizes="144px"
              priority
            />
          </div>
        </div>
      </section>

      <section
        id="story"
        className="border-b border-sea/10 bg-shell px-4 py-20 sm:px-6 sm:py-28"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sea">
            Wu&apos;s Bistro Group
          </p>
          <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.2] tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
            Built in the kitchen.
            <br />
            Proven where numbers meet guests.
          </h1>
          <p className="mt-8 text-base leading-relaxed text-ink/72 sm:text-lg">
            Bold coastal Chinese flavors—anchored by{" "}
            <strong className="font-semibold text-ink">Xie Bao (蟹宝)</strong>{" "}
            and <strong className="font-semibold text-ink">Wu&apos;s Fish House</strong>
            —meet an internal center for analytics, BI, and AI. Manhattan,
            Flushing, and Edison are home to our tables; the same rigor powers
            our forecasting, dashboards, and guest workflows.
          </p>
        </div>
      </section>

      <section
        id="statement"
        className="about-zen-band border-y border-white/5 px-4 py-20 text-center sm:px-6 sm:py-28"
      >
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-medium leading-[1.35] text-shell/95 sm:text-4xl md:text-5xl">
          Moments of care,
          <br />
          <span className="text-gold/95">at the pass</span>
          <span className="text-shell/90"> and on the screen.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-lg text-sm leading-relaxed text-shell/55 sm:text-base">
          Flowing service. Quiet systems. Every detail composed—in balance, in
          stillness, in time.
        </p>
      </section>

      <section
        id="gallery"
        className="border-b border-sea/10 bg-white px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-sea">
            Signatures &amp; spirit
          </p>
          <h2 className="mt-3 text-center font-display text-2xl font-semibold text-ink sm:text-3xl">
            A glimpse across our tables
          </h2>
          <ul className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4">
            {galleryImages.map((img, i) => (
              <li
                key={img.src}
                className={
                  i === 0
                    ? "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2"
                    : ""
                }
              >
                <figure
                  className={`relative overflow-hidden rounded-xl border border-sea/10 bg-shell shadow-sm ${
                    i === 0 ? "aspect-square sm:aspect-[4/3]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition duration-500 hover:scale-[1.03]"
                    sizes={
                      i === 0
                        ? "(max-width: 640px) 100vw, 50vw"
                        : "(max-width: 640px) 50vw, 25vw"
                    }
                  />
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div id="brand">
        <XieBaoStorySection variant="about" />
      </div>

      <div
        id="facts"
        className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <section className="mt-0">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Founding &amp; timeline
          </h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            The group&apos;s modern corporate chapter formalized in{" "}
            <strong className="text-ink">2024</strong> as we consolidated
            multi-borough restaurant operations and stood up a dedicated data
            &amp; software function to support unit economics at scale.
            Public-facing openings—including the{" "}
            <a
              href="https://w42st.com/post/claw-some-delights-xie-bao-unveils-unique-chinese-cuisine-in-hells-kitchen/"
              className="font-medium text-coral underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hell&apos;s Kitchen flagship
            </a>
            —rolled into market through early{" "}
            <strong className="text-ink">2025</strong>.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Team &amp; founder
          </h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            <strong className="text-ink">Homer Wu</strong> leads Wu&apos;s Bistro
            Group as owner and steward of the Xie Bao concept—drawing on
            childhood memories of Jiangsu&apos;s crab-rich coast while building
            a contemporary, data-informed restaurant company in the United
            States. Chef <strong className="text-ink">Lin</strong> anchors
            culinary execution with deep experience across Fujian and broader
            Chinese traditions, as profiled in community coverage of the
            Manhattan opening.
          </p>
          <p className="mt-4 leading-relaxed text-ink/75">
            The analytics &amp; AI bench reports into finance and operations
            leadership and includes specialists aligned to{" "}
            <strong className="text-ink">Data Analyst (BI)</strong>,{" "}
            <strong className="text-ink">Business Intelligence Analyst</strong>,
            and <strong className="text-ink">AI Engineer</strong> role
            families—delivering models, pipelines, dashboards, and production
            agents rather than one-off spreadsheets.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Mission
          </h2>
          <blockquote className="mt-4 border-l-4 border-gold pl-6 text-lg italic leading-relaxed text-ink/80">
            Deliver uncompromising guest experiences through culinary craft—while
            treating every service minute, every cover, and every SKU as a
            signal we can learn from, forecast, and improve.
          </blockquote>
        </section>
      </div>

      <section
        id="locations"
        className="border-t border-sea/10 bg-white px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Restaurant addresses
          </h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            Four operating units—three under the{" "}
            <strong className="text-ink">Xie Bao (蟹宝)</strong> brand in
            Manhattan, Flushing, and Edison, plus{" "}
            <strong className="text-ink">Wu&apos;s Fish House (吴氏鱼汤)</strong>{" "}
            in Edison. Menus and reservations are summarized on{" "}
            <a
              href="https://xiebaousa.com/"
              className="font-medium text-coral underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Xie Bao USA
            </a>
            .
          </p>
          <RestaurantLocations className="mt-8" />
          <p className="mt-6 rounded-xl border border-sea/15 bg-shell/80 p-5 text-sm leading-relaxed text-ink/75">
            <strong className="text-ink">Registered / filing address:</strong>{" "}
            For the exact legal entity name, jurisdiction, and address as filed
            with the Secretary of State (or equivalent), email{" "}
            <a
              href="mailto:info@WuBistro.com?subject=Corporate%20filing%20address"
              className="font-medium text-coral hover:underline"
            >
              info@WuBistro.com
            </a>{" "}
            with subject line{" "}
            <span className="whitespace-nowrap font-mono text-xs">
              Corporate filing address
            </span>
            . We provide verification on letterhead for qualified counterparties.
          </p>
        </div>
      </section>

      <section className="about-zen-hero border-t border-white/5 px-4 py-16 text-center sm:px-6 sm:py-20">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold/90">
          Contact us
        </p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-shell/65">
          Partnerships, press, guest services, or data &amp; AI engagements—one
          inbox routes to the right team.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex min-w-[12rem] items-center justify-center border border-gold/40 bg-gold/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-gold transition hover:border-gold hover:bg-gold/20"
        >
          Contact
        </Link>
      </section>
    </div>
  );
}
