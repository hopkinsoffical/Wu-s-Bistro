import type { Metadata } from "next";
import { SMS_COMPLIANCE_URL } from "@/lib/sms-config";

export const metadata: Metadata = {
  title: "SMS Opt-In Policy",
  description:
    "How guests opt in to SMS reservation messages from Wu's Bistro Group, including keyword consent, message types, frequency, and opt-out instructions for Twilio compliance.",
  alternates: { canonical: SMS_COMPLIANCE_URL },
  robots: { index: true, follow: true },
};

export default function SmsComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
