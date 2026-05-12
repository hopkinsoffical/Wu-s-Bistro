import { RESTAURANT_LOCATIONS } from "@/lib/restaurants";

type Props = {
  /** Tighter copy for dark footer / CTA bands */
  compact?: boolean;
  /** Multi-column cards (e.g. footer) */
  layout?: "stack" | "grid";
  className?: string;
};

export function RestaurantLocations({
  compact = false,
  layout = "stack",
  className = "",
}: Props) {
  const listClass =
    layout === "grid"
      ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      : `space-y-6 ${compact ? "text-sm" : ""}`;

  const itemClass =
    layout === "grid"
      ? compact
        ? "rounded-lg border border-white/10 bg-white/5 p-3"
        : "rounded-xl border border-sea/10 bg-shell/40 p-4"
      : compact
        ? "border-b border-white/10 pb-4 last:border-0 last:pb-0"
        : "rounded-xl border border-sea/10 bg-shell/40 p-5";

  const titleClass = compact
    ? "font-semibold text-white"
    : "font-display text-base font-semibold text-ink";

  const metaClass = compact
    ? "text-[11px] text-gold/90"
    : "text-xs font-medium text-sea";

  const bodyClass = compact
    ? "mt-1 text-xs leading-snug text-shell/75"
    : "mt-2 text-sm leading-relaxed text-ink/80";

  const noteClass = compact
    ? "mt-1 text-[10px] leading-snug text-shell/50"
    : "mt-2 text-xs text-ink/55";

  return (
    <ul className={`${listClass} ${className}`} aria-label="Restaurant locations">
      {RESTAURANT_LOCATIONS.map((loc) => (
        <li key={loc.id} className={itemClass}>
          <p className={titleClass}>{loc.name}</p>
          <p className={metaClass}>
            {loc.brand} · {loc.area}
          </p>
          <p className={bodyClass}>
            {loc.lines[0]}
            <br />
            {loc.lines[1]}
            {loc.lines[2] ? (
              <>
                <br />
                {loc.lines[2]}
              </>
            ) : null}
          </p>
          {loc.note ? <p className={noteClass}>{loc.note}</p> : null}
        </li>
      ))}
    </ul>
  );
}
