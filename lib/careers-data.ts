export type JobFamilyId = "insights" | "growth" | "operations";

export type JobFamily = {
  id: JobFamilyId;
  label: string;
};

export const JOB_FAMILIES: JobFamily[] = [
  { id: "insights", label: "Business insights & analytics" },
  { id: "growth", label: "Marketing & business development" },
  { id: "operations", label: "Restaurant & field operations" },
];

/** One Marriott-style posting body: JOB SUMMARY, CANDIDATE PROFILE, CORE WORK ACTIVITIES — single text block. */
export type JobPosting = {
  id: string;
  title: string;
  familyId: JobFamilyId;
  locationLine: string;
  regionTags: string[];
  employmentType: string;
  postedAt: string;
  /** One-line teaser for list + search */
  summary: string;
  featured?: boolean;
  /** Full job description (plain text, use blank lines between sections) */
  fullDescription: string;
};

const JD_DA_BI = `JOB SUMMARY

Wu’s Bistro Group has an opportunity for a Data Analyst (Business Intelligence) to strengthen how we measure and improve performance across Xie Bao and Wu’s Fish House in Manhattan, Flushing, and Edison. This role partners with operations, finance, marketing, and unit leaders to translate transactional data—POS, labor, delivery marketplaces, guest feedback, and internal logs—into trusted metrics, automated reporting, and forward-looking views that inform daily execution and disciplined growth.

You will serve as a hands-on analyst responsible for requirements gathering, metric logic, dashboard delivery, and the reliability of recurring reports. You will identify opportunities to automate repetitive work, introduce AI-assisted workflows where appropriate, and uphold definitions so teams share one version of the truth. You will support revenue and demand forecasting, cohort and channel analyses, and clear storytelling for leadership.

If you enjoy ambiguous restaurant data, disciplined documentation, and shipping insight—not only decks—we invite you to read further and apply.

CANDIDATE PROFILE

Education and Experience

Required:
• 3+ years of professional experience in analytics, business intelligence, or data roles supporting operations or finance in retail, hospitality, logistics, or other multi-unit environments
• Demonstrated ability to own requirements for recurring management reporting and implement them in SQL (or equivalent) against relational sources; comfort documenting metric definitions, grain, and edge cases
• 2+ years building or maintaining reporting pipelines (scheduled jobs, change detection, reconciliation checks) and coordinating refresh of datasets used by operators
• 1+ years with a modern BI tool (Looker, Power BI, Metabase, Tableau, or similar), including certified datasets or governed metrics where applicable
• Practical use of Python or R for ad hoc analysis, data wrangling, and reproducible scripts; ability to read API documentation and support light integrations for internal tools
• Strong written and verbal English; able to facilitate sessions with non-technical stakeholders, write crisp briefs, and present findings with clear recommendations
• Bachelor’s degree in analytics, economics, computer science, information systems, statistics, hospitality management, or related field—or equivalent experience

Preferred:
• Experience with multi-store restaurant groups, high-volume casual dining, or third-party delivery economics (commissions, adjustments, promos, reconciliation)
• Exposure to forecasting (seasonality, driver-based scenarios) and promo or pricing experiment readouts
• Familiarity with workflow automation (dbt, Airflow, cron-based ELT) and basic data quality checks
• Experience designing, evaluating, or operating LLM-based internal tools (prompt hygiene, evaluation sets, guardrails, logging) for operations—not only consumer-facing chat
• Graduate coursework or certification in analytics, cloud, or BI (e.g., AWS/GCP fundamentals, Snowflake, dbt)

CORE WORK ACTIVITIES

Analytics & reporting
• Partner with GMs and central ops to maintain metric catalogs covering sales, labor, margin proxies, channel mix, attach rates, and outlier rules
• Produce daily and weekly operating packs with automated distribution; tune exception thresholds so leaders focus on material variance
• Deliver same-store views, daypart analyses, menu mix shifts, and cohort analyses (new vs. repeat, platform vs. dine-in) with transparent methodology notes

Forecasting, automation & AI
• Build and maintain revenue and demand forecasts with documented assumptions; provide scenario switches leadership can stress-test (hours, staffing, promotions, local events)
• Prototype AI-assisted extraction and routing over invoices, schedules, and SOPs; ensure auditability and human-in-the-loop review where required
• Ship lightweight scripts or internal utilities (API pulls, small apps) when they materially reduce cycle time versus manual repetition

Governance & enablement
• Coordinate with finance and platform vendors (POS, delivery, payroll) to validate extracts, resolve gaps, and document freshness SLAs
• Train operators on self-serve views within guardrails; convert recurring ad hoc asks into documented, reusable assets when possible

Wu’s Bistro Group is an equal opportunity employer and welcomes qualified applicants consistent with applicable law.`;

const JD_MARKETING = `JOB SUMMARY

Wu’s Bistro Group seeks a Marketing Analyst to support brand and performance marketing for Xie Bao and Wu’s Fish House across Manhattan, Flushing, and Edison. You will connect creative, paid, owned, and earned channels to measurable traffic, covers, and delivery outcomes—so leadership sees which stories, offers, and placements move the business.

You will own campaign tagging discipline, weekly readouts, and test design for localized campaigns. You will partner with operations for in-store merchandising alignment, with analytics for metric definitions, and with external partners for co-marketing where applicable.

CANDIDATE PROFILE

Education and Experience

Required:
• 2+ years in growth, performance marketing, or marketing analytics for multi-location retail, dining, or consumer services
• Hands-on experience with web and paid analytics (e.g., Google Analytics, Meta Ads Manager, TikTok Ads), UTM governance, and funnel reporting from impression to order
• Strong Excel/Sheets skills; comfort summarizing experiments (holdouts, geo tests, simple A/B) with plain-language conclusions
• Excellent English copy for internal memos and briefs; ability to coordinate bilingual creative notes with store teams
• Bachelor’s degree in marketing, communications, business, analytics, or related field—or equivalent experience

Preferred:
• Experience with local SEO, map listings, and reputation management for restaurants
• Exposure to CRM or loyalty programs (including Wuwa-style member journeys)
• Basic SQL or BI-tool skills to pull your own cuts without waiting on a full request queue

CORE WORK ACTIVITIES

Campaign performance & testing
• Maintain campaign calendars, budgets, pacing, and post-mortems; flag underperforming geos, dayparts, or creatives with recommended next steps
• Design and document tests (creative, audience, offer) with clear success metrics tied to same-store traffic and delivery funnels

Local storytelling & coordination
• Brief designers and agencies on brand guardrails for crab-forward and seafood positioning; ensure in-store materials match digital campaigns
• Partner with field leaders on openings, LTOs, and community moments; package learnings into reusable playbooks

Reporting & stakeholder management
• Publish weekly growth memos with charts and narrative; present in working sessions with operations and leadership
• Support B2B and event marketing handoffs with clean tracking links and landing-page QA

Wu’s Bistro Group is an equal opportunity employer consistent with applicable law.`;

const JD_BD = `JOB SUMMARY

Wu’s Bistro Group is hiring for Business Development to grow structured 团购 programs, corporate catering, and strategic partnerships with delivery and group-buy platforms. You will prospect, qualify, negotiate commercial terms, and hand off execution-ready playbooks to store teams so revenue lands cleanly in operations.

You will represent the company with professionalism, maintain a disciplined pipeline, and coordinate with finance and legal on contracts and SLAs. You will align partner promotions with kitchen capacity and brand standards.

CANDIDATE PROFILE

Education and Experience

Required:
• 3+ years in B2B sales, partnerships, or business development in hospitality, foodservice, catering, or related multi-unit environments
• Demonstrated track record closing net-new accounts and expanding existing relationships; comfortable with outbound prospecting and structured follow-up
• Experience negotiating commercial terms (minimums, exclusivity windows, marketing funds, SLA for service levels) with clear written summaries
• Strong presentation and English communication skills; ability to run tastings, walkthroughs, and proposal reviews with corporate clients
• Bachelor’s degree in business, hospitality, marketing, or related field—or equivalent experience

Preferred:
• Existing network in NYC/NJ corporate dining, property managers, or community organizations
• Familiarity with marketplace partner portals and promotional calendars
• Conversational Mandarin or other languages used by our guest communities

CORE WORK ACTIVITIES

Pipeline & deal execution
• Build and maintain a qualified pipeline; document stage, owner, next step, and revenue impact in the company CRM or agreed tracker
• Draft scopes of work for events and recurring programs; coordinate tastings, deposits, and day-of execution checklists with unit managers

Partner & platform growth
• Negotiate and renew agreements with delivery and group-buy partners; align promo calendars with operations and marketing
• Identify co-marketing opportunities that respect brand standards and margin targets

Internal coordination
• Partner with finance on pricing, rebates, and invoicing; escalate risks early when execution or quality could be compromised

Wu’s Bistro Group is an equal opportunity employer consistent with applicable law.`;

const JD_RESTAURANT_MANAGER = `JOB SUMMARY

Wu’s Bistro Group seeks a Restaurant Manager—Unit Lead for Xie Bao locations in Manhattan, Flushing, or Edison. You will own the guest experience, shift leadership, and P&L behaviors on the floor—partnering with the kitchen to deliver consistent quality and speed during peak periods while developing the service team.

CANDIDATE PROFILE

Education and Experience

Required:
• 4+ years of restaurant management experience including at least 2 years as a salaried manager in high-volume full-service or upscale casual dining
• Proven ability to lead daily service, control labor, manage cash and comps policy, and resolve guest recovery situations calmly
• Strong knowledge of food safety (ServSafe Manager or local equivalent) and responsible alcohol service where applicable
• English fluency; ability to coach bilingual teams in a fast-paced environment
• Flexible schedule including nights, weekends, and holidays

Preferred:
• Experience with Huaiyang-style seafood, dim sum, or high-touch soup-dumpling service
• Familiarity with reservation platforms, waitlist apps, and third-party delivery operations

CORE WORK ACTIVITIES

Guest & team leadership
• Set the tone for hospitality standards; conduct pre-shift briefings and ongoing coaching on steps of service
• Interview, train, schedule, and retain talent; document performance conversations

Operations & financial discipline
• Monitor sales, labor, and waste daily; execute action plans for variances
• Ensure compliance with health, safety, and brand standards; partner with facilities and vendors as needed

Wu’s Bistro Group is an equal opportunity employer consistent with applicable law.`;

const JD_ASSISTANT_MANAGER = `JOB SUMMARY

Wu’s Bistro Group seeks an Assistant Manager—Front of House for Xie Bao or Wu’s Fish House in Edison, NJ. You will supervise the dining room during service, manage reservations and waitlists, and support the Restaurant Manager in training, cash integrity, and guest satisfaction.

CANDIDATE PROFILE

Education and Experience

Required:
• 2+ years of supervisory experience in full-service restaurants; exposure to high-volume dinner and weekend peaks
• Strong guest communication skills in English; additional language skills a plus for our communities
• Knowledge of POS operations, basic liquor controls, and opening/closing procedures
• Food handler certification as required by location; willingness to work nights, weekends, and holidays

Preferred:
• Experience with soup dumpling or seafood-forward menus and pacing of coursed tables

CORE WORK ACTIVITIES

Service floor supervision
• Manage floor sections, seating pace, and guest recovery; coordinate with kitchen on ticket times and coursing

Shift administration
• Support cash audits, tip-out procedures, and end-of-shift reporting as directed by the Restaurant Manager

Training & culture
• Model service standards; onboard new hosts and servers on menu knowledge and allergy protocols

Wu’s Bistro Group is an equal opportunity employer consistent with applicable law.`;

const JD_LEAD_LINE = `JOB SUMMARY

Wu’s Bistro Group seeks a Lead Line Cook—Wok / Hot Line for Flushing or Edison. You will execute crab-forward and Huaiyang-style dishes during peak service, maintain station mise en place, and uphold spec, timing, and plating standards while mentoring junior cooks.

CANDIDATE PROFILE

Education and Experience

Required:
• 4+ years of professional line cooking including 2+ years on wok or high-heat stations in Asian or seafood-focused kitchens
• Ability to read tickets, prioritize fires, and communicate clearly with expo and cold line
• Knowledge of food safety, cross-contamination controls, and temperature logs
• Physical stamina for long shifts standing; willingness to work nights, weekends, and holidays

Preferred:
• Experience with crab roe dishes, soup dumpling timing support, or banquet volume

CORE WORK ACTIVITIES

Production & quality
• Execute menu items to spec; adjust seasoning and timing with chef guidance; maintain consistent plate presentation

Station leadership
• Train line cooks on wok technique, oil management, and batch prep; maintain cleanliness and organization standards

Inventory & handoff
• Communicate 86 items and prep needs proactively; support inventory counts for proteins and specialty ingredients

Wu’s Bistro Group is an equal opportunity employer consistent with applicable law.`;

const JD_DIMSUM = `JOB SUMMARY

Wu’s Bistro Group seeks a Dim Sum & Soup Dumpling Specialist for Manhattan or Edison. You will hand-form, steam, and expedite soup dumplings and dim sum items with consistent skin integrity, broth retention, and ticket synchronization during high-volume service.

CANDIDATE PROFILE

Education and Experience

Required:
• 3+ years of dim sum or dumpling production in professional kitchens; demonstrated skill with thin skins and soup-filled products
• Knowledge of steamer timing, holding, and quality checks; strong attention to detail
• Food safety certification as required; ability to stand for long periods and lift reasonable loads
• Flexible schedule including weekends

Preferred:
• Experience with crab roe soup dumplings or premium seafood dim sum

CORE WORK ACTIVITIES

Production
• Prepare dough and fillings to recipe; maintain production pace aligned with service demand

Quality control
• Inspect each batch for leaks or skin tears; coordinate with expo on pacing so guests receive optimal texture

Cleanliness & prep
• Maintain organized station, labeled storage, and sanitation standards; communicate prep needs to leadership

Wu’s Bistro Group is an equal opportunity employer consistent with applicable law.`;

const JD_PREP = `JOB SUMMARY

Wu’s Bistro Group seeks a Prep Cook—Seafood & Cold Station for all units. You will fabricate, portion, and prep seafood, roe, and daily specials with HACCP-minded discipline so the line receives consistent, safe, and ready-to-cook ingredients.

CANDIDATE PROFILE

Education and Experience

Required:
• 1+ years of professional prep in full-service restaurants; comfort handling shellfish and delicate proteins
• Knowledge of knife skills, labeling, dating, and cooler organization
• Food handler certification as required; ability to work early mornings, nights, weekends, and holidays

Preferred:
• Experience with crab, roe, or high-turnover seafood prep

CORE WORK ACTIVITIES

Fabrication & portioning
• Break down fish and seafood to spec; maintain yields and minimize waste through proper trimming

Cold station support
• Prepare cold apps and garnishes as assigned; follow allergy protocols strictly

Sanitation & receiving
• Assist with deliveries, rotation (FIFO), and temperature checks; keep prep areas audit-ready

Wu’s Bistro Group is an equal opportunity employer consistent with applicable law.`;

const JD_DELIVERY = `JOB SUMMARY

Wu’s Bistro Group seeks a Delivery & Platform Coordinator in a hybrid model between Edison HQ and stores. You will synchronize menus, photos, and pricing across delivery marketplaces, monitor SLAs and guest issues, and route problems to the right store or vendor owner.

CANDIDATE PROFILE

Education and Experience

Required:
• 2+ years coordinating third-party delivery, ghost kitchen, or multi-unit digital ordering programs
• Strong organizational skills and written English; comfortable in spreadsheets and partner portals
• Ability to travel periodically to stores in NJ/NY

Preferred:
• Experience with POS–marketplace menu sync tools and chargeback/dispute workflows

CORE WORK ACTIVITIES

Marketplace operations
• Maintain accurate menus, hours, and modifiers; coordinate photography and promo updates with marketing

Issue resolution
• Track late orders, missing items, and bad reviews; partner with GMs on root-cause fixes

Reporting
• Summarize platform performance weekly with clear operational follow-ups

Wu’s Bistro Group is an equal opportunity employer consistent with applicable law.`;

const JD_GROUP_SALES = `JOB SUMMARY

Wu’s Bistro Group seeks a Group Sales & Events Associate for the NYC metro area. You will build 团购 and private-dining pipelines—quotes, contracts, deposits, banquet timelines, and day-of execution checklists—working closely with unit managers and the kitchen.

CANDIDATE PROFILE

Education and Experience

Required:
• 2+ years in restaurant events, catering sales, or hospitality group sales in a high-volume market
• Strong written and verbal English; polished client communication and attention to detail
• Ability to manage multiple active deals with clear timelines and internal handoffs

Preferred:
• Mandarin or other languages common to our corporate and community clients
• Experience with banquet-style seafood service and pacing

CORE WORK ACTIVITIES

Sales & proposals
• Respond to inbound leads quickly; build tailored proposals with menu, pricing, and staffing notes

Execution support
• Coordinate tastings, BEOs, and day-of timelines; debrief with operations to improve repeat business

Wu’s Bistro Group is an equal opportunity employer consistent with applicable law.`;

const JD_WUWA = `JOB SUMMARY

Wu’s Bistro Group seeks a Guest Experience specialist for the Wuwa program (remote-friendly, US Eastern). You will support member onboarding, offer redemption, and feedback loops between digital touchpoints and store teams—ensuring perks feel seamless and on-brand.

CANDIDATE PROFILE

Education and Experience

Required:
• 2+ years in customer success, loyalty, or guest relations for consumer brands or hospitality
• Excellent written English; calm tone in email and chat; comfort with light CRM or ticketing tools
• Ability to work Eastern hours and occasional evenings for launch windows

Preferred:
• Experience with bilingual member bases and restaurant promo calendars

CORE WORK ACTIVITIES

Member support
• Resolve tier, points, and redemption issues with clear documentation; escalate product bugs with repro steps

Program hygiene
• Audit offer copy and landing pages with marketing; share weekly themes from member feedback to stores

Wu’s Bistro Group is an equal opportunity employer consistent with applicable law.`;

const JD_FACILITIES = `JOB SUMMARY

Wu’s Bistro Group seeks a Facilities & Smallwares Coordinator based in Middlesex County, NJ. You will schedule preventive maintenance, coordinate vendors for equipment repairs, and track par levels for smallwares so stores stay operational with minimal downtime.

CANDIDATE PROFILE

Education and Experience

Required:
• 2+ years in facilities coordination, restaurant maintenance, or related vendor management
• Valid driver’s license and ability to visit Edison-area locations regularly
• Strong English communication; organized record-keeping for work orders and invoices

Preferred:
• Experience with kitchen exhaust, refrigeration, ice machines, or wok station equipment

CORE WORK ACTIVITIES

Maintenance programs
• Maintain PM calendars; triage urgent repairs; verify completion and invoice accuracy

Smallwares & capex hygiene
• Track par and breakage; recommend replenishment batches aligned with finance approval paths

Wu’s Bistro Group is an equal opportunity employer consistent with applicable law.`;

export const JOB_POSTINGS: JobPosting[] = [
  {
    id: "data-analyst-bi",
    title: "Data Analyst (Business Intelligence)",
    familyId: "insights",
    locationLine: "Hybrid — NYC / NJ metro, with Edison anchor",
    regionTags: ["Hybrid", "NYC", "NJ", "Edison"],
    employmentType: "Full-time / part-time",
    postedAt: "2026-01-15",
    featured: true,
    summary:
      "Own metrics, automation, and forecasting across Xie Bao and Wu's Fish House—from POS signals to leadership-ready packs.",
    fullDescription: JD_DA_BI,
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
      "Campaign performance, creative testing, and localized storytelling for Manhattan, Flushing, and Edison.",
    fullDescription: JD_MARKETING,
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
      "Corporate catering, platform partnerships, and structured 团购 programs.",
    fullDescription: JD_BD,
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
      "Own daily service, labor pacing, and guest recovery for a high-volume seafood and dim sum house.",
    fullDescription: JD_RESTAURANT_MANAGER,
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
      "Floor supervision, reservations, bilingual guest communication, and shift-close accuracy.",
    fullDescription: JD_ASSISTANT_MANAGER,
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
      "Wok execution, mise, and spec adherence for crab-forward and Huaiyang-style dishes.",
    fullDescription: JD_LEAD_LINE,
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
      "Hand-forming, steaming, and expediting soup dumplings and dim sum with consistent quality.",
    fullDescription: JD_DIMSUM,
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
      "Seafood fabrication, portioning, and HACCP-minded prep for roe, shellfish, and specials.",
    fullDescription: JD_PREP,
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
      "Menu sync, SLA monitoring, and marketplace issue routing across delivery channels.",
    fullDescription: JD_DELIVERY,
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
      "团购 and private-dining pipelines: quotes, deposits, banquets, and day-of checklists.",
    fullDescription: JD_GROUP_SALES,
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
      "Wuwa member journeys: onboarding, redemption support, and store feedback loops.",
    fullDescription: JD_WUWA,
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
      "Preventive maintenance, vendor coordination, and smallwares par tracking.",
    fullDescription: JD_FACILITIES,
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
