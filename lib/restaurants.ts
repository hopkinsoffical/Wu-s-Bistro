/** Public-facing restaurant units — use everywhere addresses are shown. */
export type RestaurantLocation = {
  id: string;
  brand: "Xie Bao" | "Wu's Fish House";
  name: string;
  /** City / area label for quick scan */
  area: string;
  lines: [string, string, string?];
  /** Optional context (building, floor) */
  note?: string;
};

export const RESTAURANT_LOCATIONS: RestaurantLocation[] = [
  {
    id: "manhattan-xiebao",
    brand: "Xie Bao",
    name: "Xie Bao Crab House — Manhattan",
    area: "Manhattan, NY",
    lines: ["650 9th Avenue", "New York, NY 10019"],
    note: "Hell's Kitchen / Midtown West",
  },
  {
    id: "flushing-xiebao",
    brand: "Xie Bao",
    name: "Xie Bao — Flushing",
    area: "Flushing, Queens, NY",
    lines: ["133-35 Roosevelt Avenue", "Flushing, NY 11354"],
    note: "Roosevelt Avenue retail corridor",
  },
  {
    id: "edison-xiebao",
    brand: "Xie Bao",
    name: "Xie Bao Crab House — Edison",
    area: "Edison, NJ",
    lines: ["1783 Lincoln Highway (U.S. Route 27)", "Edison, NJ 08817"],
    note: "Festival Plaza — 2nd floor (above Mango Mango)",
  },
  {
    id: "edison-wusfish",
    brand: "Wu's Fish House",
    name: "Wu's Fish House — Edison",
    area: "Edison, NJ",
    lines: [
      "1783 Lincoln Highway (U.S. Route 27), Suite 201",
      "Edison, NJ 08817",
    ],
    note: "吴氏鱼汤 · Festival Plaza (same complex as Xie Bao Edison)",
  },
];
