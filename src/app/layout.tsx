import type { Metadata } from "next";
import Script from "next/script";

import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://socks4cocks.org"),
  title: "Socks For Cocks",
  description:
    "Socks For Cocks is an organization that provides socks to chickens in need.",
  openGraph: {
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script
        src="https://u.crust.monster/e45e75e27812"
        data-website-id="3ae7523c-d538-47d2-b4fe-528c470fa174"
        strategy="afterInteractive"
      />
    </html>
  );
}
