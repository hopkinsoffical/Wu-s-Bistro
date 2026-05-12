import Link from "next/link";

const featuredDataAnalyst = {
  title: "Data Analyst (Business Intelligence)",
  location: "Hybrid — NYC / NJ metro, with Edison anchor",
  type: "Full-time",
  intro:
    "Lead how we see the business end-to-end: from ticket-level detail to executive-ready views. You will partner with operations, finance, and guest-facing teams across Xie Bao and Wu's Fish House—turning noisy POS, labor, delivery, and marketing signals into decisions we can repeat every week.",
  pillars: [
    {
      head: "Automation & reliability",
      text: "Design and run automated reporting—daily and weekly operating packs, exception alerts, and reconciliation checks—so leaders spend time on exceptions, not copy-paste.",
    },
    {
      head: "AI automation",
      text: "Prototype and productionize AI-assisted workflows: structured extraction from invoices and schedules, copilots over SOPs, and guarded agents that route tasks to the right owner with auditable logs.",
    },
    {
      head: "Market & revenue growth analytics",
      text: "Measure what moves the top line: channel mix, attach rates, daypart curves, and promo lift. Frame cohort views for new guests vs. loyalists and quantify the impact of menu and pricing tests.",
    },
    {
      head: "Full-stack delivery",
      text: "Own the thread from SQL and curated datasets through lightweight internal apps, APIs, and visualization—enough full-stack literacy to ship end-to-end without waiting on a separate engineering queue for every iteration.",
    },
    {
      head: "Revenue forecasting",
      text: "Build and maintain forecasting models that blend historical demand, seasonality, events, and staffing constraints—scenario toggles leadership can stress-test before committing capital or inventory.",
    },
    {
      head: "Market forecasting",
      text: "Translate external demand drivers—local traffic, competitive openings, delivery marketplace dynamics—into forward-looking views that inform expansion, hours, and marketing spend.",
    },
  ],
};

const corporateOpenings = [
  {
    title: "Marketing Analyst",
    location: "Hybrid — NYC / NJ metro",
    type: "Full-time",
    summary:
      "Campaign performance, creative testing, and localized storytelling for Manhattan, Flushing, and Edison. Own UTM discipline, social and paid lift readouts, and weekly growth memos tied to same-store traffic and delivery funnels.",
  },
  {
    title: "Business Development",
    location: "NYC / NJ — travel as needed",
    type: "Full-time",
    summary:
      "Corporate catering, platform partnerships, and structured 团购 programs. Prospect and close B2B accounts, negotiate commercial terms with delivery and group-buy partners, and hand off clean playbooks to store execution teams.",
  },
];

const fieldOpenings = [
  {
    title: "Restaurant Manager — Unit Lead",
    location: "Manhattan, Flushing, or Edison (Xie Bao)",
    type: "Full-time",
    summary:
      "Own daily service, labor pacing, and guest recovery for a high-volume seafood and dim sum house. Partner with kitchen leadership on quality and speed.",
  },
  {
    title: "Assistant Manager — Front of House",
    location: "Edison, NJ (Xie Bao or Wu&apos;s Fish House)",
    type: "Full-time",
    summary:
      "Floor supervision, reservation and waitlist flow, bilingual guest communication, and shift-close accuracy.",
  },
  {
    title: "Lead Line Cook — Wok / Hot Line",
    location: "Flushing or Edison",
    type: "Full-time",
    summary:
      "Execution of crab-forward and Huaiyang-style dishes during peak; station mise, wok timing, and spec adherence.",
  },
  {
    title: "Dim Sum & Soup Dumpling Specialist",
    location: "Manhattan or Edison",
    type: "Full-time",
    summary:
      "Hand-forming, steaming, and expediting soup dumplings and dim sum with consistent skin integrity and ticket sync.",
  },
  {
    title: "Prep Cook — Seafood & Cold Station",
    location: "All units",
    type: "Full-time / part-time",
    summary:
      "Fabrication, portioning, and HACCP-minded prep for roe, shellfish, and daily specials.",
  },
  {
    title: "Delivery & Platform Coordinator",
    location: "Hybrid — Edison HQ + stores",
    type: "Full-time",
    summary:
      "Menu sync, SLA monitoring, and issue routing across delivery marketplaces; liaison between stores and central ops.",
  },
  {
    title: "Group Sales & Events Associate",
    location: "NYC metro",
    type: "Full-time",
    summary:
      "团购 and private-dining pipelines: quotes, deposits, banquet timelines, and day-of execution checklists.",
  },
  {
    title: "Guest Experience — Wuwa Program",
    location: "Remote-friendly — US Eastern",
    type: "Full-time",
    summary:
      "Support for Wuwa member journeys: onboarding, offer redemption, and feedback loops with store teams.",
  },
  {
    title: "Facilities & Smallwares Coordinator",
    location: "Middlesex County, NJ",
    type: "Full-time",
    summary:
      "Preventive maintenance scheduling, vendor coordination for equipment, and par-level tracking for service gear.",
  },
];

function JobCard({
  job,
}: {
  job: {
    title: string;
    location: string;
    type: string;
    summary: string;
  };
}) {
  return (
    <li className="flex flex-col rounded-2xl border border-sea/10 bg-white p-6 shadow-sm">
      <h3 className="font-display text-lg font-semibold text-ink">{job.title}</h3>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-sea">
        {job.location} · {job.type}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">{job.summary}</p>
      <a
        href={`mailto:info@WuBistro.com?subject=${encodeURIComponent(`Careers — ${job.title}`)}`}
        className="mt-4 inline-block text-sm font-semibold text-coral hover:underline"
      >
        Email about this role →
      </a>
    </li>
  );
}

export default function CareerPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sea">
        Careers
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink">
        Join the team behind Xie Bao and Wu&apos;s Fish House
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/75">
        We hire across kitchens, dining rooms, analytics, marketing, and business
        development for multi-unit service in{" "}
        <strong className="text-ink">Manhattan</strong>,{" "}
        <strong className="text-ink">Flushing</strong>, and{" "}
        <strong className="text-ink">Edison</strong>. Put the role title in your
        email subject line so we can route you quickly.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="mailto:info@WuBistro.com?subject=Careers%20%E2%80%94%20"
          className="inline-flex items-center justify-center rounded-full bg-coral px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-coral/25 transition hover:bg-coral/90"
        >
          Apply by email
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border border-sea/25 bg-white px-7 py-3 text-sm font-semibold text-ink transition hover:border-sea/50"
        >
          Contact & locations
        </Link>
      </div>

      <section className="mt-16" aria-labelledby="featured-bi-heading">
        <h2
          id="featured-bi-heading"
          className="font-display text-2xl font-semibold text-ink"
        >
          Featured opening
        </h2>
        <article className="mt-6 overflow-hidden rounded-2xl border-2 border-gold/40 bg-gradient-to-br from-shell via-white to-shell shadow-md">
          <div className="border-b border-sea/10 bg-ink px-6 py-4 text-shell sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Business Intelligence
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
              {featuredDataAnalyst.title}
            </h3>
            <p className="mt-2 text-sm text-shell/80">
              {featuredDataAnalyst.location} · {featuredDataAnalyst.type}
            </p>
          </div>
          <div className="px-6 py-8 sm:px-8 sm:py-10">
            <p className="max-w-3xl text-base leading-relaxed text-ink/85">
              {featuredDataAnalyst.intro}
            </p>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredDataAnalyst.pillars.map((p) => (
                <li
                  key={p.head}
                  className="rounded-xl border border-sea/10 bg-white/90 p-5 shadow-sm"
                >
                  <h4 className="font-semibold text-ink">{p.head}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">
                    {p.text}
                  </p>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:info@WuBistro.com?subject=${encodeURIComponent(`Careers — ${featuredDataAnalyst.title}`)}`}
              className="mt-10 inline-flex items-center justify-center rounded-full bg-coral px-8 py-3 text-sm font-semibold text-white shadow-md shadow-coral/20 transition hover:bg-coral/90"
            >
              Apply for this role
            </a>
          </div>
        </article>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Marketing & business development
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-ink/65">
          Corporate roles supporting growth, partnerships, and measurable demand.
        </p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {corporateOpenings.map((job) => (
            <JobCard key={job.title} job={job} />
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Restaurant & field operations
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-ink/65">
          Titles and scopes may flex by unit; final offer depends on interview and
          work authorization. Equal opportunity employer.
        </p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {fieldOpenings.map((job) => (
            <JobCard key={job.title} job={job} />
          ))}
        </ul>
      </section>
    </div>
  );
}
