import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carter Bogart — Systems, Stories & Growth",
  description:
    "The personal portfolio of Carter Bogart: community growth, practical AI, creative strategy, and systems that make work better.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
