import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OSSfolio — Your Open Source Identity",
  description:
    "A public profile platform for open-source contributors. Showcase your merged PRs, contribution streaks, orgs, and more at ossfolio.me/username.",
  openGraph: {
    title: "OSSfolio",
    description: "Your open-source identity, beyond GitHub.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
