"use client";
import LayoutDefault from "@/components/layoutDefault/LayoutDefault";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* @ts-ignore */}
        <LayoutDefault>{children}</LayoutDefault>
      </body>
    </html>
  );
}
