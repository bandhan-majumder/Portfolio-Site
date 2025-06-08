import type { Metadata } from "next";
import localFont from "next/font/local";
import './globals.css';
import "@repo/tailwind-config/styles";
import { Providers } from "../components/Providers";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Bandhan Majumder",
  description: "portfolio of Bandhan Majumder, a computer science enthusiast and open source contributor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-neutral-50 dark:bg-[#292828] overflow-x-hidden antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}