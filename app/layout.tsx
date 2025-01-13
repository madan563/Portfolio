import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
 weight:['400','500','700'],
 subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Madan_Portfolio",
  description: "Website by Madan Bandi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={dmSans.className}>{children}</body>
    </html>
  );
}
