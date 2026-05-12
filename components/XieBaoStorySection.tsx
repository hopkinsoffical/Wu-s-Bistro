import Image from "next/image";

const ORIGIN = "https://xiebaousa.com";
const IMG_2025 = `${ORIGIN}/wp-content/uploads/2025/08`;

const pillars = [
  {
    title: "Huaiyang-inspired dim sum & seafood",
    body: "Rooted in Huaiyang culinary traditions, Xie Bao highlights handcrafted seafood— from rich crab roe soup dumplings to Peking duck soup dumplings—served with care across our U.S. locations.",
  },
  {
    title: "Signature seafood",
    body: "Bold coastal flavors and crab-forward specialties anchor the menu, designed for guests who want memorable seafood in a refined, approachable setting.",
  },
  {
    title: "Fresh, consistent, fast",
    body: "Modern kitchen systems and disciplined line standards keep quality high whether you dine in or order to-go—so every cover meets the same spec.",
  },
];

type Props = {
  /** About page: show official brand narrative; omit pillar cards to avoid repetition with Home */
  variant?: "default" | "about";
  className?: string;
};

export function XieBaoStorySection({
  variant = "default",
  className = "",
}: Props) {
  const isAbout = variant === "about";

  return (
    <section
      className={`border-y border-sea/10 bg-gradient-to-b from-white to-shell/40 ${className}`}
      aria-labelledby="xie-bao-brand-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sea">
              {isAbout ? "Heritage & guest brand" : "Consumer brand"}
            </p>
            <h2
              id="xie-bao-brand-heading"
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Xie Bao USA
            </h2>
            <p className="mt-2 max-w-2xl text-ink/70">
              Guest-facing menus, reservations, and brand storytelling live on{" "}
              <a
                href={ORIGIN}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-coral underline-offset-2 hover:underline"
              >
                xiebaousa.com
              </a>
              . Photography is pulled from the same official WordPress media
              library (2025 assets).
            </p>
          </div>
          <a
            href={ORIGIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-sea/20 bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition hover:border-gold/50"
          >
            Visit Xie Bao USA ↗
          </a>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-sea/10 bg-shell shadow-sm">
            <Image
              src={`${IMG_2025}/aboutus-1.png`}
              alt="Xie Bao USA — brand photography (official site)"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={isAbout}
            />
          </figure>
          <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-sea/10 bg-shell shadow-sm">
            <Image
              src={`${IMG_2025}/aboutus-2.png`}
              alt="Xie Bao USA — dining and culinary imagery (official site)"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </figure>
        </div>

        {!isAbout ? (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-sea/10 bg-white/90 p-6 shadow-sm backdrop-blur-sm"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        ) : null}

        {isAbout ? (
          <div className="mt-12 rounded-2xl border border-gold/30 bg-shell/80 p-8 sm:p-10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sea">
              The history of Xie Bao (public brand story)
            </h3>
            <blockquote className="mt-4 text-lg leading-relaxed text-ink/85">
              Xie Bao is on a mission to bring the elegance of Chinese Huaiyang
              cuisine to diners across the U.S.—from signature crab roe
              specialties to refined dim sum and seafood classics—honoring
              centuries of culinary tradition and reimagining it with a modern
              touch. Rooted in heritage, crafted with heart.
            </blockquote>
            <p className="mt-4 text-sm text-ink/55">
              Narrative adapted from the &ldquo;Little About Us&rdquo; section on{" "}
              <a
                href={ORIGIN}
                className="text-coral underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                xiebaousa.com
              </a>
              . Corporate formation and U.S. expansion milestones for Wu&apos;s
              Bistro are summarized separately in{" "}
              <span className="font-medium text-ink">Founding & timeline</span>{" "}
              above.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
