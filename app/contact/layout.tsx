import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Email info@WuBistro.com, phone, and flagship address for Wu's Bistro / Xie Bao.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
