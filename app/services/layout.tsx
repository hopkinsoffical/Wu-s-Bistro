import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Data analytics, BI, AI engineering, automation, data platform, and consulting aligned to professional roles.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
