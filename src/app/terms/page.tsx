
import type { Metadata } from "next";
import { baseMetadata } from "~/lib/metadata";

const metadata: Metadata = {
  ...baseMetadata,
  title: "Terms & Conditions",
  description:
    "Read Agrobridge’s Terms & Conditions to understand your rights, responsibilities, and our service policies.",
  keywords: [
    "Agrobridge terms",
    "terms of service",
    "user agreement",
    "platform rules",
    "agriculture marketplace policies",
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Terms & Conditions | Agrobridge",
    description:
      "Review the Terms & Conditions that govern the use of Agrobridge’s platform and services.",
    url: "https://agro-bridge-taupe.vercel.app/terms",
    images: [
      {
        url: "https://agro-bridge-taupe.vercel.app/og-terms.jpg",
        width: 1200,
        height: 630,
        alt: "Agrobridge Terms & Conditions",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Terms & Conditions | Agrobridge",
    description:
      "Learn about the Terms & Conditions that guide your use of Agrobridge.",
    images: ["https://agro-bridge-taupe.vercel.app/twitter-terms.jpg"],
  },
};


export default function TermsOfService() {
  return (
    <div>Terms of Service</div>
  );
}
