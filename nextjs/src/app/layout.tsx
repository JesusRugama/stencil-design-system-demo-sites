import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DesignSystemLoader from "@/components/DesignSystemLoader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Design System Demo - Next.js SSR",
  description: "Demo site showcasing @jesusrugama/stencil-design-system with Next.js SSR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DesignSystemLoader />
        {children}
      </body>
    </html>
  );
}
