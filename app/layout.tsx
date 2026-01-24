import type React from "react";
import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Montserrat,
  Dancing_Script,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Travel Agency in Thohoyandou | Group Trips from Venda | Ndila Ya Vhupo",
  description:
    "Looking for group trips in Venda? Ndila Ya Vhupo Travels organizes affordable tours and holiday packages departing from Thohoyandou. Book your next adventure today!",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logoshiny.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logoshiny.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logoshiny.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/logoshiny.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${montserrat.variable} ${dancingScript.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body
        className={`font-body antialiased bg-background-light text-primary`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
