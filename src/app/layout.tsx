import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JNA Dental SEO | Exclusive Organic Patients for Your Practice",
  description:
    "The SEO engine behind AT&T, Xfinity, and 6,000+ dealers — now open to select dental clinics. See if your territory is available.",
  openGraph: {
    title: "JNA Dental SEO | Exclusive Organic Patients for Your Practice",
    description:
      "We generate 780,000+ organic visits/month across 120+ websites. Now we're bringing that system to dental clinics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
