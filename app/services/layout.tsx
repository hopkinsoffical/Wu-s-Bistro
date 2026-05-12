import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Xie Bao and Wu's Fish House dining, plus products: group buying, delivery & takeout, and Wuwa.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
