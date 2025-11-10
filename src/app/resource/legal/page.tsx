
import type { Metadata } from "next";
import { baseMetadata } from "~/lib/metadata";

const metadata: Metadata = {
  ...baseMetadata,
  title: "Legal | Agrobridge Policies",
  description:
    "Review Agrobridge’s legal policies, compliance documents, and terms that govern the platform.",
  keywords: [
    "Agrobridge legal",
    "policies",
    "terms of service",
    "compliance",
    "agriculture platform legal",
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Legal | Agrobridge Policies",
    description:
      "Understand the legal terms, policies, and compliance guidelines of Agrobridge.",
    url: "https://agro-bridge-taupe.vercel.app/resource/legal",
    images: [
      {
        url: "https://agro-bridge-taupe.vercel.app/og-legal.jpg",
        width: 1200,
        height: 630,
        alt: "Agrobridge Legal",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Legal | Agrobridge Policies",
    description:
      "Learn about the legal terms, policies, and compliance of Agrobridge’s platform.",
    images: ["https://agro-bridge-taupe.vercel.app/twitter-legal.jpg"],
  },
};


export default function LegalPage() {
  return (
    <div>Legal</div>
  );
}
