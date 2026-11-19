import React from "react";
import type { Metadata } from "next";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/assets/css/style.css";
import "@/assets/css/custom.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "WapBorhan",
  description: "This is my Portfolio Site | WapBorhan |",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
  openGraph: {
    title: "|| Borhan Portfolio ||",
    description: "This is my Portfolio Site | WapBorhan |",
    url: "https://wapborhan.com",
    siteName: "WapBorhan",
    images: [
      {
        url: "/images/wapborhan.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "|| Borhan Portfolio ||",
    description: "This is my Portfolio Site | WapBorhan |",
    images: ["/images/wapborhan.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="template-color-1 home-sticky spybody white-version"
        id="template-color-1"
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
