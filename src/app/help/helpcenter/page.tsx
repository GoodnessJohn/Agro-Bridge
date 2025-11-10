
import type { Metadata } from "next";
import { baseMetadata } from "~/lib/metadata";

const metadata: Metadata = {
  ...baseMetadata,
  title: "Help Center | Your Agrobridge Support Hub",
  description:
    "Access the Agrobridge Help Center to get guidance on using the platform, managing your account, and connecting with sellers or farmers.",
  keywords: [
    "Agrobridge help center",
    "customer support",
    "platform guide",
    "agriculture help",
    "account assistance",
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Help Center | Your Agrobridge Support Hub",
    description:
      "Find platform guides, tutorials, and support resources in the Agrobridge Help Center.",
    url: "https://agro-bridge-taupe.vercel.app/help/helpcenter",
    images: [
      {
        url: "https://agro-bridge-taupe.vercel.app/og-helpcenter.jpg",
        width: 1200,
        height: 630,
        alt: "Agrobridge Help Center",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Help Center | Your Agrobridge Support Hub",
    description:
      "Visit the Agrobridge Help Center for guides and step-by-step support.",
    images: ["https://agro-bridge-taupe.vercel.app/twitter-helpcenter.jpg"],
  },
};


export default function HelpCenterPage() {
  return <h1>Help Center Page</h1>;
}

