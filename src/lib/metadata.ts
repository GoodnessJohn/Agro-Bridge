
import type { Metadata } from "next";

export const baseMetadata: Metadata = {
  title: {
    default: "Agrobridge | Bridging Farmers to Sellers",
    template: "%s | Agrobridge",
  },
  description:
    "Agrobridge connects farmers directly with trusted sellers, making agriculture more efficient, transparent, and profitable for everyone.",
  metadataBase: new URL("https://agro-bridge-taupe.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agro-bridge-taupe.vercel.app/",
    siteName: "Agrobridge",
    images: [
      {
        url: "https://agro-bridge-taupe.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Agrobridge - Connecting Farmers to Sellers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@agrobridge",
    images: ["https://agro-bridge-taupe.vercel.app/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
