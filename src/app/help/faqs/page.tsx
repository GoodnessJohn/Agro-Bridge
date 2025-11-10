
import type { Metadata } from "next";
import { baseMetadata } from "~/lib/metadata";

const metadata: Metadata = {
  ...baseMetadata,
  title: "FAQs | Frequently Asked Questions",
  description:
    "Find quick answers to the most common questions about using Agrobridge — from registration to selling crops and more.",
  keywords: [
    "Agrobridge FAQs",
    "frequently asked questions",
    "help center",
    "farmers help",
    "agriculture support",
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: "FAQs | Frequently Asked Questions",
    description:
      "Explore our FAQs to quickly find answers about how Agrobridge works for farmers and sellers.",
    url: "https://agro-bridge-taupe.vercel.app/help/faqs",
    images: [
      {
        url: "https://agro-bridge-taupe.vercel.app/og-faqs.jpg",
        width: 1200,
        height: 630,
        alt: "Agrobridge FAQs",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "FAQs | Frequently Asked Questions",
    description:
      "Need help? Visit the Agrobridge FAQs page to find quick answers and solutions.",
    images: ["https://agro-bridge-taupe.vercel.app/twitter-faqs.jpg"],
  },
};


export default function FAQS() {
  return (
    <div>FAQS</div>
  );
}

