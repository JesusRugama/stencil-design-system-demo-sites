import type { Metadata } from "next";
import "./globals.css";
import DesignSystemLoader from "@/components/DesignSystemLoader";

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
      <body className="antialiased">
        <DesignSystemLoader />
        {children}
      </body>
    </html>
  );
}
