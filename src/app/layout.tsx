import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["wdth", "opsz"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

// Runs before first paint so a stored or system dark preference never flashes light.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})()`;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

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
      className={`${bricolage.variable} ${instrument.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
