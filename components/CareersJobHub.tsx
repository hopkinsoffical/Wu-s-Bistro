"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  JOB_FAMILIES,
  JOB_POSTINGS,
  JobFamilyId,
  REGION_FILTER_OPTIONS,
  type JobPosting,
} from "@/lib/careers-data";

function formatPosted(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function familyLabel(id: JobFamilyId) {
  return JOB_FAMILIES.find((f) => f.id === id)?.label ?? id;
}

function matchesEmployment(job: JobPosting, selected: Set<string>) {
  if (selected.size === 0) return true;
  if (selected.has("Full-time") && job.employmentType.startsWith("Full-time"))
    return true;
  if (
    selected.has("Part-time") &&
    job.employmentType.toLowerCase().includes("part-time")
  )
    return true;
  return false;
}

export function CareersJobHub() {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<"newest" | "az">("newest");
  const [families, setFamilies] = useState<Set<JobFamilyId>>(new Set());
  const [regions, setRegions] = useState<Set<string>>(new Set());
  const [employment, setEmployment] = useState<Set<string>>(new Set());
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleFamily = useCallback((id: JobFamilyId) => {
    setFamilies((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const toggleRegion = useCallback((r: string) => {
    setRegions((prev) => {
      const next = new Set(prev);
      if (next.has(r)) next.delete(r);
      else next.add(r);
      return next;
    });
  }, []);

  const toggleEmployment = useCallback((e: string) => {
    setEmployment((prev) => {
      const next = new Set(prev);
      if (next.has(e)) next.delete(e);
      else next.add(e);
      return next;
    });
  }, []);

  const clearFilters = useCallback(() => {
    setFamilies(new Set());
    setRegions(new Set());
    setEmployment(new Set());
    setQuery("");
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = JOB_POSTINGS.filter((job) => {
      if (families.size > 0 && !families.has(job.familyId)) return false;
      if (regions.size > 0) {
        const hit = [...regions].some((r) => job.regionTags.includes(r));
        if (!hit) return false;
      }
      if (!matchesEmployment(job, employment)) return false;
      if (q) {
        const blob =
          `${job.title} ${job.summary} ${job.locationLine}`.toLowerCase();
        if (!blob.includes(q)) return false;
      }
      return true;
    });

    list = [...list].sort((a, b) => {
      if (sortBy === "az") return a.title.localeCompare(b.title);
      return b.postedAt.localeCompare(a.postedAt);
    });

    return list;
  }, [query, sortBy, families, regions, employment]);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (hash && JOB_POSTINGS.some((j) => j.id === hash)) {
      setExpandedId(hash);
    }
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedId((cur) => {
      const next = cur === id ? null : id;
      if (typeof window !== "undefined") {
        const base = `${window.location.pathname}${window.location.search}`;
        if (next) window.history.replaceState(null, "", `${base}#${next}`);
        else window.history.replaceState(null, "", base);
      }
      return next;
    });
  };

  const filterCount = families.size + regions.size + employment.size;

  return (
    <div className="bg-[#f4f5f7]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <aside className="w-full shrink-0 lg:w-72">
            <div className="rounded-xl border border-sea/10 bg-white p-5 shadow-sm lg:sticky lg:top-24">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-sea">
                  Filters
                </h2>
                {filterCount > 0 || query ? (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-xs font-semibold text-coral hover:underline"
                  >
                    Clear all
                  </button>
                ) : null}
              </div>

              <details className="mt-4 border-t border-sea/10 pt-4 lg:hidden">
                <summary className="cursor-pointer text-sm font-semibold text-ink">
                  Show filters
                </summary>
                <div className="mt-4 space-y-6">
                  <FilterBody
                    families={families}
                    regions={regions}
                    employment={employment}
                    toggleFamily={toggleFamily}
                    toggleRegion={toggleRegion}
                    toggleEmployment={toggleEmployment}
                  />
                </div>
              </details>

              <div className="mt-2 hidden space-y-6 lg:block">
                <FilterBody
                  families={families}
                  regions={regions}
                  employment={employment}
                  toggleFamily={toggleFamily}
                  toggleRegion={toggleRegion}
                  toggleEmployment={toggleEmployment}
                />
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-sea/10 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-ink">Talent network</p>
              <p className="mt-2 text-xs leading-relaxed text-ink/65">
                No perfect match today? Join our informal talent list—we will
                reach out when new roles open.
              </p>
              <a
                href="mailto:info@WuBistro.com?subject=Talent%20network%20%E2%80%94%20"
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg border border-sea/20 bg-shell/60 px-4 py-2.5 text-center text-sm font-semibold text-ink transition hover:border-coral hover:text-coral"
              >
                Join talent list
              </a>
            </div>
          </aside>

          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-4 rounded-xl border border-sea/10 bg-white p-4 shadow-sm sm:flex-row sm:items-end sm:justify-between sm:p-5">
              <div className="min-w-0 flex-1">
                <label
                  htmlFor="career-search"
                  className="text-xs font-semibold uppercase tracking-wider text-sea"
                >
                  Search roles
                </label>
                <input
                  id="career-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Title, location, keyword…"
                  className="mt-2 w-full rounded-lg border border-sea/15 bg-[#f4f5f7] px-3 py-2.5 text-sm text-ink outline-none ring-coral/30 transition placeholder:text-ink/40 focus:border-coral focus:ring-2"
                />
              </div>
              <div className="flex shrink-0 flex-col gap-1 sm:w-48">
                <label
                  htmlFor="career-sort"
                  className="text-xs font-semibold uppercase tracking-wider text-sea"
                >
                  Sort by
                </label>
                <select
                  id="career-sort"
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value as "newest" | "az")
                  }
                  className="rounded-lg border border-sea/15 bg-[#f4f5f7] px-3 py-2.5 text-sm font-medium text-ink outline-none focus:border-coral focus:ring-2 focus:ring-coral/30"
                >
                  <option value="newest">Date posted (newest)</option>
                  <option value="az">Title (A–Z)</option>
                </select>
              </div>
            </div>

            <p className="mt-4 text-sm text-ink/65" aria-live="polite">
              <span className="font-semibold text-ink">{filtered.length}</span>
              {filtered.length === 1 ? " role" : " roles"}
              {filterCount > 0 || query ? " match your criteria" : " available"}
            </p>

            <ul className="mt-4 space-y-3">
              {filtered.map((job) => (
                <li key={job.id}>
                  <article
                    className={`overflow-hidden rounded-xl border bg-white shadow-sm transition ${
                      expandedId === job.id
                        ? "border-coral ring-1 ring-coral/25"
                        : "border-sea/10 hover:border-sea/25 hover:shadow-md"
                    }`}
                  >
                    <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          {job.featured ? (
                            <span className="rounded-full bg-gold/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-ink">
                              Featured
                            </span>
                          ) : null}
                          <span className="text-[11px] font-medium uppercase tracking-wide text-sea/90">
                            {familyLabel(job.familyId)}
                          </span>
                        </div>
                        <h3 className="mt-1 font-display text-xl font-semibold text-ink sm:text-2xl">
                          <button
                            type="button"
                            onClick={() => toggleExpand(job.id)}
                            className="text-left hover:text-coral"
                            aria-expanded={expandedId === job.id}
                            id={`job-trigger-${job.id}`}
                          >
                            {job.title}
                          </button>
                        </h3>
                        <p className="mt-2 text-sm text-ink/75">
                          {job.locationLine}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {job.regionTags.slice(0, 5).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md bg-shell px-2 py-0.5 text-xs font-medium text-ink/80"
                            >
                              {tag}
                            </span>
                          ))}
                          <span className="rounded-md border border-sea/15 px-2 py-0.5 text-xs font-medium text-ink/70">
                            {job.employmentType}
                          </span>
                          <span className="rounded-md border border-sea/15 px-2 py-0.5 text-xs text-ink/55">
                            Posted {formatPosted(job.postedAt)}
                          </span>
                        </div>
                      </div>
                      <div className="flex shrink-0 flex-col gap-2 sm:items-end">
                        <a
                          href={`mailto:info@WuBistro.com?subject=${encodeURIComponent(`Careers — ${job.title}`)}`}
                          className="inline-flex items-center justify-center rounded-lg bg-coral px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-coral/90"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Apply by email
                        </a>
                        <button
                          type="button"
                          onClick={() => toggleExpand(job.id)}
                          className="text-sm font-semibold text-sea hover:text-coral"
                          aria-controls={`job-panel-${job.id}`}
                        >
                          {expandedId === job.id ? "Hide details" : "View role"}
                        </button>
                      </div>
                    </div>

                    {expandedId === job.id ? (
                      <div
                        id={`job-panel-${job.id}`}
                        role="region"
                        aria-labelledby={`job-trigger-${job.id}`}
                        className="border-t border-sea/10 bg-[#fafbfc] px-5 py-6 sm:px-6"
                      >
                        <p className="max-w-3xl text-sm leading-relaxed text-ink/80">
                          {job.detail?.intro ?? job.summary}
                        </p>
                        {job.detail?.pillars?.length ? (
                          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {job.detail.pillars.map((p) => (
                              <li
                                key={p.head}
                                className="rounded-lg border border-sea/10 bg-white p-4 shadow-sm"
                              >
                                <h4 className="text-sm font-semibold text-ink">
                                  {p.head}
                                </h4>
                                <p className="mt-2 text-xs leading-relaxed text-ink/70">
                                  {p.text}
                                </p>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink/75">
                            {job.summary}
                          </p>
                        )}
                      </div>
                    ) : null}
                  </article>
                </li>
              ))}
            </ul>

            {filtered.length === 0 ? (
              <div className="mt-8 rounded-xl border border-dashed border-sea/25 bg-white p-10 text-center">
                <p className="font-medium text-ink">
                  No roles match those filters.
                </p>
                <p className="mt-2 text-sm text-ink/65">
                  Try clearing filters or broadening your search.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 text-sm font-semibold text-coral hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterBody({
  families,
  regions,
  employment,
  toggleFamily,
  toggleRegion,
  toggleEmployment,
}: {
  families: Set<JobFamilyId>;
  regions: Set<string>;
  employment: Set<string>;
  toggleFamily: (id: JobFamilyId) => void;
  toggleRegion: (r: string) => void;
  toggleEmployment: (e: string) => void;
}) {
  return (
    <>
      <fieldset>
        <legend className="text-xs font-semibold uppercase tracking-wider text-sea">
          Job family
        </legend>
        <ul className="mt-3 space-y-2">
          {JOB_FAMILIES.map((f) => (
            <li key={f.id}>
              <label className="flex cursor-pointer items-start gap-2 text-sm text-ink/85">
                <input
                  type="checkbox"
                  checked={families.has(f.id)}
                  onChange={() => toggleFamily(f.id)}
                  className="mt-0.5 rounded border-sea/30 text-coral focus:ring-coral"
                />
                <span>{f.label}</span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>

      <fieldset>
        <legend className="text-xs font-semibold uppercase tracking-wider text-sea">
          Location & work style
        </legend>
        <ul className="mt-3 space-y-2">
          {REGION_FILTER_OPTIONS.map((r) => (
            <li key={r}>
              <label className="flex cursor-pointer items-start gap-2 text-sm text-ink/85">
                <input
                  type="checkbox"
                  checked={regions.has(r)}
                  onChange={() => toggleRegion(r)}
                  className="mt-0.5 rounded border-sea/30 text-coral focus:ring-coral"
                />
                <span>{r}</span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>

      <fieldset>
        <legend className="text-xs font-semibold uppercase tracking-wider text-sea">
          Employment type
        </legend>
        <ul className="mt-3 space-y-2">
          <li>
            <label className="flex cursor-pointer items-start gap-2 text-sm text-ink/85">
              <input
                type="checkbox"
                checked={employment.has("Full-time")}
                onChange={() => toggleEmployment("Full-time")}
                className="mt-0.5 rounded border-sea/30 text-coral focus:ring-coral"
              />
              <span>Full-time</span>
            </label>
          </li>
          <li>
            <label className="flex cursor-pointer items-start gap-2 text-sm text-ink/85">
              <input
                type="checkbox"
                checked={employment.has("Part-time")}
                onChange={() => toggleEmployment("Part-time")}
                className="mt-0.5 rounded border-sea/30 text-coral focus:ring-coral"
              />
              <span>Includes part-time</span>
            </label>
          </li>
        </ul>
      </fieldset>
    </>
  );
}
