export default function ServicesPage() {
  const products = [
    {
      title: "Group buying",
      subtitle: "团购",
      body: "Volume-friendly menus for celebrations, corporate lunches, and seasonal bundles—priced for parties and pre-ordered pick-up or dine-in blocks across our Manhattan, Flushing, and Edison units.",
    },
    {
      title: "Delivery & takeout",
      subtitle: "外卖",
      body: "Off-premise channels with packaging tuned for soup dumplings, seafood, and long commutes. Order-ahead pickup and marketplace listings where we operate.",
    },
    {
      title: "Wuwa",
      subtitle: "Member & digital",
      body: "Our guest-facing digital layer for members: perks, saved favorites, and private offers tied to your usual location—without cluttering the in-store experience.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sea">
        Services
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink">
        Multi-unit dining, done with discipline
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/75">
        Wu&apos;s Bistro Group operates{" "}
        <strong className="text-ink">Xie Bao (蟹宝)</strong> and{" "}
        <strong className="text-ink">Wu&apos;s Fish House</strong> for guests who
        want coastal Chinese flavors in Manhattan, Flushing, and Edison. Below
        is how we package that experience for everyday visits, large parties,
        and digital convenience.
      </p>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Where we cook
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-ink/75">
          Our kitchens focus on Huaiyang-inspired dim sum and seafood—crab roe
          specialties, soup dumplings, and fish-forward plates—served fast
          enough for lunch rushes yet plated for dinner. Menus, chefs, and
          reservations for the guest brand live on{" "}
          <a
            href="https://xiebaousa.com/"
            className="font-medium text-coral underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            xiebaousa.com
          </a>
          ; press and delivery listings include{" "}
          <a
            href="https://w42st.com/post/claw-some-delights-xie-bao-unveils-unique-chinese-cuisine-in-hells-kitchen/"
            className="font-medium text-coral underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            W42ST
          </a>
          ,{" "}
          <a
            href="https://www.gourmandsyndrome.com/nyc/chinese/xie-bao/"
            className="font-medium text-coral underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gourmand Syndrome
          </a>
          , and{" "}
          <a
            href="https://www.seamless.com/menu/xiebao-crab-house-manhattan-650-9th-ave-new-york/11126448"
            className="font-medium text-coral underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Seamless
          </a>
          .
        </p>
      </section>

      <section className="mt-16 border-t border-sea/10 pt-16">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Products
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-ink/65">
          Guest-facing ways to buy and enjoy our food—simple names, clear value.
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-2xl border border-sea/10 bg-shell/50 p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-sea">
                {p.subtitle}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                {p.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
