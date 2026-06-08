import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TUP — Reliable Communication Infrastructure for AI Agent Systems",
  description:
    "Telepathy Universal Protocol™ is a proprietary communication layer for multi-agent AI systems. Enterprise-grade infrastructure designed for reliable, consistent, and secure agent coordination.",
  keywords: [
    "AI communication",
    "multi-agent",
    "enterprise infrastructure",
    "AI protocol",
    "agent coordination",
    "proprietary",
  ],
  openGraph: {
    title: "TUP — Reliable AI Communication Infrastructure",
    description:
      "Proprietary communication layer for multi-agent AI systems. Consistent, secure, and ready to deploy.",
    url: "https://telepathy-tup.com",
    siteName: "Telepathy TUP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
