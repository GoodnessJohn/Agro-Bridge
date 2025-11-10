
import type { Metadata } from "next";
import { baseMetadata } from "~/lib/metadata";

const metadata: Metadata = {
  ...baseMetadata,
  title: "Sign Up | Create Your Agrobridge Account",
  description:
    "Join Agrobridge today to connect directly with trusted farmers and sellers in a transparent agricultural marketplace.",
  keywords: [
    "Agrobridge sign up",
    "create account",
    "join agrobridge",
    "register farmer",
    "seller registration",
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Sign Up | Create Your Agrobridge Account",
    description:
      "Register for a free Agrobridge account and start trading directly with farmers and sellers.",
    url: "https://agro-bridge-taupe.vercel.app/auth/signup",
    images: [
      {
        url: "https://agro-bridge-taupe.vercel.app/og-signup.jpg",
        width: 1200,
        height: 630,
        alt: "Agrobridge Sign Up",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Sign Up | Create Your Agrobridge Account",
    description:
      "Join Agrobridge to access trusted agriculture trade opportunities.",
    images: ["https://agro-bridge-taupe.vercel.app/twitter-signup.jpg"],
  },
};


export default function SignUpPage() {
  return (
    <div>SignUp</div>
  );
}

