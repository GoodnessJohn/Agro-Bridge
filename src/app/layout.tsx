
import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const metadata: Metadata = {
  metadataBase: new URL("https://agro-bridge-taupe.vercel.app"),
  title: {
    template: "%s | Agrobridge",
    default: "Agrobridge | Bridging Farmers to Sellers",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Agrobridge",
  },
  twitter: {
    card: "summary_large_image",
    site: "@agrobridge",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        <main>{children}</main>
        
        <Footer />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
