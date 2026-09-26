import type { Metadata } from "next";
import { Geist, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const TITLE = "Tolulope Obasan | Full-Stack & AI Automation Engineer";
const DESCRIPTION =
  "Portfolio of Tolulope Obasan, a full-stack and AI automation engineer building web and mobile products, and AI systems with Claude where code enforces the rules and a person signs off.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Tolulope Obasan",
    "Full-Stack Engineer",
    "AI Automation Engineer",
    "AI Agents",
    "Claude",
    "Claude Agent SDK",
    "n8n",
    "Workflow Automation",
    "React",
    "Next.js",
    "TypeScript",
    "NestJS",
    "React Native",
    "Software Engineer",
    "Nigeria",
  ],
  authors: [{ name: "Tolulope Obasan" }],
  creator: "Tolulope Obasan",
  metadataBase: new URL("https://tolulopeobasan.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tolulopeobasan.dev",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Tolulope Obasan",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${spaceGrotesk.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
