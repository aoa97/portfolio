import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamed-magdy.vercel.app"),
  title: "Mohamed Magdy | Real-Time Performance Analyst & Operations Leader",
  description:
    "Results-driven professional with 14+ years of experience (12 years in Dubai, UAE) in real-time performance analytics, workforce scheduling, SLA optimization, asset management, and customer service leadership.",
  keywords: [
    "Mohamed Magdy",
    "Real-Time Analyst",
    "Performance Analyst",
    "Workforce Management",
    "Customer Service Leader",
    "Team Leader Dubai",
    "Teleperformance Dubai",
    "Operations Manager",
    "Asset Management",
    "SLA Optimization",
    "Six Sigma Yellow Belt",
    "PMP",
    "Dubai UAE",
  ],
  authors: [{ name: "Mohamed Magdy" }],
  openGraph: {
    title: "Mohamed Magdy | Real-Time Performance Analyst & Operations Leader",
    description:
      "14+ years of professional leadership in UAE contact centers, real-time analytics, and operational management.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/mohamed_magdy.jpeg",
        width: 400,
        height: 400,
        alt: "Mohamed Magdy",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Mohamed Magdy | Real-Time Performance Analyst & Operations Leader",
    description:
      "14+ years of professional leadership in UAE contact centers, real-time analytics, and operational management.",
    images: ["/mohamed_magdy.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
