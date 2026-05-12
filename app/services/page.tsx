export default function ServicesPage() {
  const lines = [
    {
      title: "Data Analytics",
      body: "Statistical modeling of sales mix, price elasticity, and promotional lift. Cohort views for dine-in vs. third-party delivery, daypart heatmaps, and channel profitability.",
    },
    {
      title: "Business Intelligence (BI)",
      body: "Semantic layers, governed metrics, and executive dashboards. Self-service exploration for GMs with guardrails; certified reporting for finance close.",
    },
    {
      title: "AI Automation",
      body: "Workflow bots for invoice coding, exception handling, and inventory reconciliation triggers. LLM-assisted document extraction with human-in-the-loop QA.",
    },
    {
      title: "AI Engineer–grade systems",
      body: "Retrieval-augmented knowledge bases over SOPs and training manuals. Evaluation harnesses, prompt/version control, and safe rollout patterns for production agents.",
    },
    {
      title: "Voice & conversational agents",
      body: "Phone and chat copilots for reservations, waitlist triage, and bilingual guest FAQs—instrumented with transcripts for coaching and compliance review.",
    },
    {
      title: "Software / Digital Services",
      body: "Lightweight internal web apps, API integrations (POS, labor, loyalty), and notification layers that connect kitchen, front-of-house, and back office.",
    },
    {
      title: "Data Platform",
      body: "ELT into a curated warehouse, slowly changing dimensions for menus and pricing, data quality monitors, and freshness SLAs for downstream ML features.",
    },
    {
      title: "Consulting",
      body: "Targeted engagements: BI tool selection, metric taxonomy workshops, and AI use-case discovery with written architecture and ROI models.",
    },
  ];

  const roles = [
    {
      role: "Data Analyst (BI)",
      bullets: [
        "Operational revenue analysis by store, platform, and SKU family",
        "Automated daily & weekly P&L-style packs for leadership review",
        "User growth analytics: acquisition vs. retention vs. reactivation",
        "Employee productivity metrics—turns per labor hour, stage-time studies",
      ],
    },
    {
      role: "Business Intelligence Analyst",
      bullets: [
        "Executive scorecards: same-store sales, average check, attach rates",
        "Menu & dish performance: hero SKUs, long-tail drag, LTO post-mortems",
        "Forecasting packs: baseline revenue projections with scenario toggles",
        "Self-serve BI enablement with certified datasets and documentation",
      ],
    },
    {
      role: "AI Engineer",
      bullets: [
        "Production AI agents for internal ops (scheduling hints, prep lists)",
        "Voice agent pipelines with ASR/TTS vendor evaluation and fallbacks",
        "Feature stores for demand signals feeding forecasting models",
        "MLOps-lite: logging, drift checks, and rollback for model updates",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sea">
        Services / Products
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink">
        Professional services aligned to Data, BI, and AI engineering roles
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/75">
        Wu&apos;s Bistro is not only a hospitality operator. We maintain a real
        portfolio of analytics, intelligence, and software deliverables that map
        cleanly to specialty occupations in{" "}
        <strong className="text-ink">data analysis</strong>,{" "}
        <strong className="text-ink">business intelligence</strong>, and{" "}
        <strong className="text-ink">AI engineering</strong>—the same
        capabilities we use to run Xie Bao locations in NYC, Flushing, and
        Edison.
      </p>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Hospitality operating vertical
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-ink/75">
          Our hospitality vertical spans{" "}
          <strong className="text-ink">Xie Bao (蟹宝) Crab House</strong> in
          Manhattan, Flushing, and Edison, plus{" "}
          <strong className="text-ink">Wu&apos;s Fish House</strong> in Edison.
          Coverage examples:{" "}
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
            Seamless (650 9th Ave)
          </a>
          . The public guest hub—menus, chefs, reservations—for{" "}
          <strong className="text-ink">Manhattan, Flushing, NY, and Edison, NJ</strong>{" "}
          is{" "}
          <a
            href="https://xiebaousa.com/"
            className="font-medium text-coral underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            xiebaousa.com
          </a>
          .
        </p>
        <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-ink/80">
          <li className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
            <span>
              <strong className="text-ink">Huaiyang-inspired dim sum &amp; seafood:</strong>{" "}
              handcrafted dishes such as crab roe soup dumplings and Peking duck
              soup dumplings, presented in line with the brand story on{" "}
              <a
                href="https://xiebaousa.com/"
                className="text-coral underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Xie Bao USA
              </a>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
            <span>
              <strong className="text-ink">Signature seafood program:</strong>{" "}
              crab roe-led specialties and coastal plates engineered for
              consistency across stores—inputs our BI team models for mix, margin,
              and prep load.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
            <span>
              <strong className="text-ink">Speed without compromise:</strong>{" "}
              kitchen throughput and digital ordering flows tuned for dine-in and
              to-go demand spikes (the operational counterpart to “fresh &amp;
              fast” positioning on the guest site).
            </span>
          </li>
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Business lines & capabilities
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {lines.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-sea/10 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Role-aligned scope (H1B-relevant families)
        </h2>
        <p className="mt-4 max-w-3xl text-ink/75">
          The following mirrors how we staff and scope work—not marketing fluff.
          Deliverables are documented, versioned, and handed to stakeholders
          under change control.
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {roles.map((block) => (
            <article
              key={block.role}
              className="flex flex-col rounded-2xl border border-sea/10 bg-shell/60 p-6"
            >
              <h3 className="font-display text-xl font-semibold text-ink">
                {block.role}
              </h3>
              <ul className="mt-4 flex-1 space-y-3 text-sm leading-relaxed text-ink/80">
                {block.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-coral" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
