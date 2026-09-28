import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afghan Remittance Platform",
  description: "A prototype platform for remittance support and marketplace services.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
