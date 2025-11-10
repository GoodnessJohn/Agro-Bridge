
import type { Metadata } from "next";
import { baseMetadata } from "~/lib/metadata";

const metadata: Metadata = {
  ...baseMetadata,
  title: "Customer Stories | Agrobridge Success Stories",
  description:
    "See how farmers and sellers succeed using Agrobridge’s platform through real-life stories and experiences.",
  keywords: [
    "Agrobridge customer stories",
    "success stories",
    "farmers testimonials",
    "seller experiences",
    "agriculture success",
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Customer Stories | Agrobridge Success Stories",
    description:
      "Discover real user stories showing how Agrobridge improves agriculture and marketplace outcomes.",
    url: "https://agro-bridge-taupe.vercel.app/resource/customerstories",
    images: [
      {
        url: "https://agro-bridge-taupe.vercel.app/og-customerstories.jpg",
        width: 1200,
        height: 630,
        alt: "Agrobridge Customer Stories",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Customer Stories | Agrobridge Success Stories",
    description:
      "Read testimonials from farmers and sellers who thrive with Agrobridge.",
    images: ["https://agro-bridge-taupe.vercel.app/twitter-customerstories.jpg"],
  },
};


export default function CustomerStoriesPage() {
  return (
    <div>Customer Stories</div>
  );
}
