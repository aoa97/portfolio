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
  title: "Ahmed Usama | Flutter Developer",
  description:
    "Flutter Developer with 4+ years of experience building scalable, production-ready cross-platform mobile applications. Specialized in clean architecture, SOLID principles, and modern design patterns.",
  keywords: [
    "Flutter Developer",
    "Dart",
    "Mobile Developer",
    "Cross-Platform",
    "Ahmed Usama",
    "Software Engineer",
  ],
  authors: [{ name: "Ahmed Usama" }],
  openGraph: {
    title: "Ahmed Usama | Flutter Developer",
    description:
      "Flutter Developer with 4+ years building scalable production apps",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://i.ibb.co/C56SsLKw/8f7aa33a-34a4-4637-baf3-fba58ed88d6c.jpg",
        width: 400,
        height: 400,
        alt: "Ahmed Usama",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Ahmed Usama | Flutter Developer",
    description:
      "Flutter Developer with 4+ years building scalable production apps",
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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
