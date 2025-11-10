
import type { Metadata } from "next";
import { baseMetadata } from "~/lib/metadata";

const metadata: Metadata = {
  ...baseMetadata,
  title: "Payments | Agrobridge Transactions",
  description:
    "Learn how Agrobridge handles secure payments, transactions, and financial operations for farmers and sellers.",
  keywords: [
    "Agrobridge payments",
    "transactions",
    "financial security",
    "farmers payments",
    "seller transactions",
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Payments | Agrobridge Transactions",
    description:
      "Understand the secure payment processes and transaction management on Agrobridge.",
    url: "https://agro-bridge-taupe.vercel.app/resource/payments",
    images: [
      {
        url: "https://agro-bridge-taupe.vercel.app/og-payments.jpg",
        width: 1200,
        height: 630,
        alt: "Agrobridge Payments",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Payments | Agrobridge Transactions",
    description:
      "Learn about Agrobridge’s secure payment systems and transaction management for users.",
    images: ["https://agro-bridge-taupe.vercel.app/twitter-payments.jpg"],
  },
};


export default function PaymentsPage() {
  return (
    <div>Payments</div>
  );
}
