import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Featured Data Analyst (Business Intelligence) role plus Marketing Analyst, Business Development, and restaurant openings across Xie Bao and Wu's Fish House.",
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
