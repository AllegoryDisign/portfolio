/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "@/styles/globals.scss";
import { AnimationScroll } from "@/components/logics/AnimationScroll";
import NextTopLoader from "nextjs-toploader";

import { Inter, Red_Hat_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-red-hat-display",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${inter.variable} ${redHatDisplay.variable} font-red-hat-display`}
      lang="en"
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="relative bg-white">
        <NextTopLoader color="#2E4EEC" showSpinner={false} />
        {children}
        <AnimationScroll />
      </body>
    </html>
  );
}
