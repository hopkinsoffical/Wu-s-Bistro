import type { Metadata } from "next";
import { BOOKING_URL } from "@/lib/sms-config";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Book a table at Xie Bao or Wu's Fish House via SMS. Text RESERVE to our toll-free line for reservation assistance at Manhattan, Flushing, and Edison locations.",
  alternates: { canonical: BOOKING_URL },
  openGraph: {
    title: "Reservations | Wu's Bistro Group",
    description:
      "Text RESERVE to book a table. SMS reservation opt-in for Xie Bao and Wu's Fish House.",
    url: BOOKING_URL,
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
