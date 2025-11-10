
import type { Metadata } from "next";
import { baseMetadata } from "~/lib/metadata";

const metadata: Metadata = {
  ...baseMetadata,
  title: "Support | Contact Agrobridge Team",
  description:
    "Need direct support? Contact Agrobridge’s support team for help with your account, transactions, or technical issues.",
  keywords: [
    "Agrobridge support",
    "contact support",
    "customer service",
    "farmers assistance",
    "seller help",
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Support | Contact Agrobridge Team",
    description:
      "Reach out to the Agrobridge support team for personalized assistance and technical help.",
    url: "https://agro-bridge-taupe.vercel.app/help/support",
    images: [
      {
        url: "https://agro-bridge-taupe.vercel.app/og-support.jpg",
        width: 1200,
        height: 630,
        alt: "Agrobridge Support",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Support | Contact Agrobridge Team",
    description:
      "Connect directly with the Agrobridge support team for help with your account or platform issues.",
    images: ["https://agro-bridge-taupe.vercel.app/twitter-support.jpg"],
  },
};


export default function SupportPage() {
  return <h1>Support Page</h1>;
}

