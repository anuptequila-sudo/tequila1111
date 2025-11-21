import type { Metadata } from "next";
import "../styles/bootstrap.min.css";
import "../styles/globals.css";
import Header from "../components/layout/Header";
import SoapBubbleCursor from "@/components/layout/SoapBubbleCursor";
import FluidCursor from "@/components/layout/FluidCursor";
import LenisProvider from "@/components/layout/LenisProvider"; // ✅ import

export const metadata: Metadata = {
  title: "Tequila",
  description: "Next.js App Router project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.webp" />
      </head>
      <body>
        <FluidCursor />
        <Header />
        <SoapBubbleCursor />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
