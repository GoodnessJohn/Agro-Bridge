
import type { Metadata } from "next";
import { baseMetadata } from "~/lib/metadata";

const metadata: Metadata = {
  ...baseMetadata,
  title: "Blog | Agrobridge Insights",
  description:
    "Read the latest articles, tips, and insights from Agrobridge experts on farming, marketplace trends, and agriculture technology.",
  keywords: [
    "Agrobridge blog",
    "agriculture articles",
    "farmers tips",
    "marketplace insights",
    "agritech news",
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Blog | Agrobridge Insights",
    description:
      "Stay updated with Agrobridge articles, guides, and insights for farmers and sellers.",
    url: "https://agro-bridge-taupe.vercel.app/resource/blog",
    images: [
      {
        url: "https://agro-bridge-taupe.vercel.app/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Agrobridge Blog",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Blog | Agrobridge Insights",
    description:
      "Explore Agrobridge’s blog for tips, trends, and updates in agriculture and marketplaces.",
    images: ["https://agro-bridge-taupe.vercel.app/twitter-blog.jpg"],
  },
};


export default function BlogPage() {
  return (
    <div>Blog</div>
  );
}
