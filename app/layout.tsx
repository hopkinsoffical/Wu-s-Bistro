import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wu's Bistro Group | Hospitality, Data & AI",
    template: "%s | Wu's Bistro Group",
  },
  description:
    "Wu's Bistro Group operates Xie Bao and Wu's Fish House across Manhattan, Flushing, and Edison while delivering data analytics, BI, AI automation, and digital services.",
  openGraph: {
    title: "Wu's Bistro Group",
    description:
      "Multi-unit hospitality, analytics, and AI under Wu's Bistro Group.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
