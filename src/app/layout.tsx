import type { Metadata } from "next";
import { Space_Grotesk, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tolulope Obasan — Full-Stack Engineer",
  description:
    "Portfolio of Tolulope Obasan, a full-stack engineer building practical software systems across web, backend, mobile, and product-focused applications.",
  keywords: [
    "Tolulope Obasan",
    "Full-Stack Engineer",
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
    title: "Tolulope Obasan — Full-Stack Engineer",
    description:
      "Portfolio of Tolulope Obasan, a full-stack engineer building practical software systems across web, backend, mobile, and product-focused applications.",
    siteName: "Tolulope Obasan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tolulope Obasan — Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tolulope Obasan — Full-Stack Engineer",
    description:
      "Full-stack engineer building practical software systems across web, backend, mobile, and product-focused applications.",
    images: ["/og-image.png"],
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
