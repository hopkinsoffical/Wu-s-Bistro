export type JobFamilyId = "insights" | "growth" | "operations";

export type JobFamily = {
  id: JobFamilyId;
  /** Display label (BMS-style “job family”) */
  label: string;
};

export const JOB_FAMILIES: JobFamily[] = [
  { id: "insights", label: "Business insights & analytics" },
  { id: "growth", label: "Marketing & business development" },
  { id: "operations", label: "Restaurant & field operations" },
];

export type JobPosting = {
  id: string;
  title: string;
  familyId: JobFamilyId;
  /** Short chips under title */
  locationLine: string;
  regionTags: string[];
  employmentType: string;
  /** ISO date for sorting */
  postedAt: string;
  summary: string;
  featured?: boolean;
  detail?: {
    intro?: string;
    pillars?: { head: string; text: string }[];
  };
};

export const JOB_POSTINGS: JobPosting[] = [
  {
    id: "data-analyst-bi",
    title: "Data Analyst (Business Intelligence)",
    familyId: "insights",
    locationLine: "Hybrid — NYC / NJ metro, with Edison anchor",
    regionTags: ["Hybrid", "NYC", "NJ", "Edison"],
    employmentType: "Full-time",
    postedAt: "2026-01-15",
    featured: true,
    summary:
      "Own metrics, automation, and forecasting across Xie Bao and Wu's Fish House—from POS signals to leadership-ready packs.",
    detail: {
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
    },
  },
  {
    id: "marketing-analyst",
    title: "Marketing Analyst",
    familyId: "growth",
    locationLine: "Hybrid — NYC / NJ metro",
    regionTags: ["Hybrid", "NYC", "NJ"],
    employmentType: "Full-time",
    postedAt: "2026-01-08",
    summary:
      "Campaign performance, creative testing, and localized storytelling for Manhattan, Flushing, and Edison. Own UTM discipline, social and paid lift readouts, and weekly growth memos tied to same-store traffic and delivery funnels.",
  },
  {
    id: "business-development",
    title: "Business Development",
    familyId: "growth",
    locationLine: "NYC / NJ — travel as needed",
    regionTags: ["NYC", "NJ", "Hybrid"],
    employmentType: "Full-time",
    postedAt: "2026-01-05",
    summary:
      "Corporate catering, platform partnerships, and structured 团购 programs. Prospect and close B2B accounts, negotiate commercial terms with delivery and group-buy partners, and hand off clean playbooks to store execution teams.",
  },
  {
    id: "restaurant-manager",
    title: "Restaurant Manager — Unit Lead",
    familyId: "operations",
    locationLine: "Manhattan, Flushing, or Edison (Xie Bao)",
    regionTags: ["Manhattan", "Flushing", "Edison"],
    employmentType: "Full-time",
    postedAt: "2025-12-20",
    summary:
      "Own daily service, labor pacing, and guest recovery for a high-volume seafood and dim sum house. Partner with kitchen leadership on quality and speed.",
  },
  {
    id: "assistant-manager-foh",
    title: "Assistant Manager — Front of House",
    familyId: "operations",
    locationLine: "Edison, NJ (Xie Bao or Wu's Fish House)",
    regionTags: ["Edison", "NJ"],
    employmentType: "Full-time",
    postedAt: "2025-12-18",
    summary:
      "Floor supervision, reservation and waitlist flow, bilingual guest communication, and shift-close accuracy.",
  },
  {
    id: "lead-line-cook",
    title: "Lead Line Cook — Wok / Hot Line",
    familyId: "operations",
    locationLine: "Flushing or Edison",
    regionTags: ["Flushing", "Edison"],
    employmentType: "Full-time",
    postedAt: "2025-12-12",
    summary:
      "Execution of crab-forward and Huaiyang-style dishes during peak; station mise, wok timing, and spec adherence.",
  },
  {
    id: "dim-sum-specialist",
    title: "Dim Sum & Soup Dumpling Specialist",
    familyId: "operations",
    locationLine: "Manhattan or Edison",
    regionTags: ["Manhattan", "Edison"],
    employmentType: "Full-time",
    postedAt: "2025-12-10",
    summary:
      "Hand-forming, steaming, and expediting soup dumplings and dim sum with consistent skin integrity and ticket sync.",
  },
  {
    id: "prep-cook",
    title: "Prep Cook — Seafood & Cold Station",
    familyId: "operations",
    locationLine: "All units",
    regionTags: ["Manhattan", "Flushing", "Edison"],
    employmentType: "Full-time / part-time",
    postedAt: "2025-12-08",
    summary:
      "Fabrication, portioning, and HACCP-minded prep for roe, shellfish, and daily specials.",
  },
  {
    id: "delivery-platform-coordinator",
    title: "Delivery & Platform Coordinator",
    familyId: "operations",
    locationLine: "Hybrid — Edison HQ + stores",
    regionTags: ["Hybrid", "Edison", "NJ"],
    employmentType: "Full-time",
    postedAt: "2025-12-05",
    summary:
      "Menu sync, SLA monitoring, and issue routing across delivery marketplaces; liaison between stores and central ops.",
  },
  {
    id: "group-sales-events",
    title: "Group Sales & Events Associate",
    familyId: "operations",
    locationLine: "NYC metro",
    regionTags: ["NYC", "Manhattan"],
    employmentType: "Full-time",
    postedAt: "2025-12-01",
    summary:
      "团购 and private-dining pipelines: quotes, deposits, banquet timelines, and day-of execution checklists.",
  },
  {
    id: "wuwa-guest-experience",
    title: "Guest Experience — Wuwa Program",
    familyId: "growth",
    locationLine: "Remote-friendly — US Eastern",
    regionTags: ["Remote"],
    employmentType: "Full-time",
    postedAt: "2025-11-28",
    summary:
      "Support for Wuwa member journeys: onboarding, offer redemption, and feedback loops with store teams.",
  },
  {
    id: "facilities-coordinator",
    title: "Facilities & Smallwares Coordinator",
    familyId: "operations",
    locationLine: "Middlesex County, NJ",
    regionTags: ["NJ", "Edison"],
    employmentType: "Full-time",
    postedAt: "2025-11-22",
    summary:
      "Preventive maintenance scheduling, vendor coordination for equipment, and par-level tracking for service gear.",
  },
];

export const REGION_FILTER_OPTIONS = [
  "Manhattan",
  "Flushing",
  "Edison",
  "NYC",
  "NJ",
  "Hybrid",
  "Remote",
] as const;
