import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founding story, leadership, mission, and corporate addresses for Wu's Bistro and Xie Bao.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
