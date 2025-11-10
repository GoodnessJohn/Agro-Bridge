
import type { Metadata } from "next";
import { baseMetadata } from "~/lib/metadata";

const metadata: Metadata = {
  ...baseMetadata,
  title: "Information Center | Agrobridge Resources",
  description:
    "Access guides, FAQs, and resources to better understand and use Agrobridge’s platform for farming and selling crops.",
  keywords: [
    "Agrobridge resources",
    "information center",
    "guides",
    "FAQs",
    "agriculture support",
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Information Center | Agrobridge Resources",
    description:
      "Find helpful guides, tips, and documentation for using Agrobridge efficiently.",
    url: "https://agro-bridge-taupe.vercel.app/resource/information",
    images: [
      {
        url: "https://agro-bridge-taupe.vercel.app/og-information.jpg",
        width: 1200,
        height: 630,
        alt: "Agrobridge Information Center",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Information Center | Agrobridge Resources",
    description:
      "Explore Agrobridge guides, FAQs, and resources to help farmers and sellers succeed.",
    images: ["https://agro-bridge-taupe.vercel.app/twitter-information.jpg"],
  },
};


export default function CustomerStoriesPage() {
  return (
    <div>Information</div>
  );
}
