import { ReactNode } from "react";
import type { Metadata } from "next";
import { IBM_Plex_Sans as IBMPlexSans } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const plexSans = IBMPlexSans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://the-cocktail-corner.vercel.app/"),
  title: "The Cocktail Corner",
  description: "Get your drink on with The Cocktail Corner!",
  openGraph: {
    url: "https://the-cocktail-corner.vercel.app/",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1280,
        height: 720,
        alt: "The Cocktail Corner",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "overscroll-none bg-slate-dark text-light-100",
          plexSans.className
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
