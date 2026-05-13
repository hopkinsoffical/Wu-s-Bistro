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
  /** Google Maps place link (opens in new tab) */
  mapsUrl: string;
};

export const RESTAURANT_LOCATIONS: RestaurantLocation[] = [
  {
    id: "manhattan-xiebao",
    brand: "Xie Bao",
    name: "Xie Bao Crab House — Manhattan",
    area: "Manhattan, NY",
    lines: ["650 9th Avenue", "New York, NY 10019"],
    note: "Hell's Kitchen / Midtown West",
    mapsUrl:
      "https://www.google.com/maps/place/Xie+Bao+%E8%9F%B9%E5%AE%9D/@40.7606451,-73.9933645,17z/data=!4m7!3m6!1s0x89c25900533f308d:0x955c81afe0a5c325!8m2!3d40.7606411!4d-73.9907896!10e9!16s%2Fg%2F11wy40txdp?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: "flushing-xiebao",
    brand: "Xie Bao",
    name: "Xie Bao — Flushing",
    area: "Flushing, Queens, NY",
    lines: ["133-35 Roosevelt Avenue", "Flushing, NY 11354"],
    note: "Roosevelt Avenue retail corridor",
    mapsUrl:
      "https://www.google.com/maps/place/Xie+Bao+Flushing+%E8%9F%B9%E5%AF%B6/@40.7588407,-73.8357083,17z/data=!3m1!5s0x89c2600e16848927:0x2031e14c3312ce0d!4m7!3m6!1s0x89c2610055f6dbc3:0x6f7c13f2a720ac16!8m2!3d40.7588367!4d-73.8331334!10e9!16s%2Fg%2F11vpz5k6vj?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: "edison-xiebao",
    brand: "Xie Bao",
    name: "Xie Bao Crab House — Edison",
    area: "Edison, NJ",
    lines: ["1783 Lincoln Highway (U.S. Route 27)", "Edison, NJ 08817"],
    note: "Festival Plaza — 2nd floor (above Mango Mango)",
    mapsUrl:
      "https://www.google.com/maps/place/Xie+Bao/@40.5131502,-74.4085894,17z/data=!3m1!5s0x89c3c7df48f8a6a7:0x9199b8e50eabbc2a!4m7!3m6!1s0x89c3c7466ba52f2f:0xc487fc390524a986!8m2!3d40.5131462!4d-74.4060145!10e9!16s%2Fg%2F11vwz4qcrq?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D",
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
    mapsUrl:
      "https://www.google.com/maps/place/Wu's+Fish+House+%E5%90%B4%E6%B0%8F%E9%B1%BC%E6%B1%A4+%E2%80%93+WUVA+Hibachi+Bowls/@40.5127292,-74.4094481,17z/data=!3m2!4b1!5s0x89c3c7df48f8a6a7:0x9199b8e50eabbc2a!4m6!3m5!1s0x89c3c70076108e85:0xbd0e6d380dd808ea!8m2!3d40.5127252!4d-74.4068732!16s%2Fg%2F11vz7ltmxj?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D",
  },
];
