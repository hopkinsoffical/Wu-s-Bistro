import type { Metadata } from "next";
import { TERMS_URL } from "@/lib/sms-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for Wu's Bistro Group websites, services, and SMS reservation messaging.",
  alternates: { canonical: TERMS_URL },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
