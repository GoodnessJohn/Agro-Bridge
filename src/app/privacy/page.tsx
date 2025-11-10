
import type { Metadata } from "next";
import { baseMetadata } from "~/lib/metadata";

const metadata: Metadata = {
  ...baseMetadata,
  title: "Privacy Policy",
  description:
    "Understand how Agrobridge collects, uses, and protects your personal data.",
  keywords: [
    "Agrobridge privacy",
    "data protection",
    "user privacy policy",
    "account security",
    "agriculture platform privacy",
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Privacy Policy | Agrobridge",
    description:
      "Learn how Agrobridge safeguards your information and ensures transparency.",
    url: "https://agro-bridge-taupe.vercel.app/privacy",
    images: [
      {
        url: "https://agro-bridge-taupe.vercel.app/og-privacy.jpg",
        width: 1200,
        height: 630,
        alt: "Agrobridge Privacy Policy",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Privacy Policy | Agrobridge",
    description:
      "Understand how Agrobridge protects your personal data and maintains privacy.",
    images: ["https://agro-bridge-taupe.vercel.app/twitter-privacy.jpg"],
  },
};


export default function PrivacyPolicyPage() {
  return (
    <div>PrivacyPolicy</div>
  );
}

