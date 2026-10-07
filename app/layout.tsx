import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Animation Studio",
  description: "Production dashboard for an AI-assisted adult animation pipeline",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}