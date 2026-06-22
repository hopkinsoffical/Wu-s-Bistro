import type { Metadata } from "next";
import { PRIVACY_POLICY_URL } from "@/lib/sms-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Wu's Bistro Group, including how we collect, use, and protect personal information and SMS reservation data.",
  alternates: { canonical: PRIVACY_POLICY_URL },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
