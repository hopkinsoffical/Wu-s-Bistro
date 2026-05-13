import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Email info@WuBistro.com, phone +1 (724) 390-6466, Instagram @xie_bao_crabhouse, and restaurant addresses for Wu's Bistro Group / Xie Bao.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
