import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Search and filter careers: business insights & analytics, marketing, business development, and restaurant roles across Xie Bao and Wu's Fish House.",
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
