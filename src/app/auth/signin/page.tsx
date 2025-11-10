
import type { Metadata } from "next";
import { baseMetadata } from "~/lib/metadata";

const metadata: Metadata = {
  ...baseMetadata,
  title: "Sign In | Agrobridge Account Access",
  description:
    "Sign in to your Agrobridge account to connect directly with trusted farmers, sellers, and agricultural partners.",
  keywords: [
    "Agrobridge sign in",
    "login",
    "farmer account",
    "seller account",
    "agriculture marketplace login",
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Sign In | Agrobridge Account Access",
    description:
      "Access your Agrobridge account securely to connect with farmers and sellers.",
    url: "https://agro-bridge-taupe.vercel.app/auth/signin",
    images: [
      {
        url: "https://agro-bridge-taupe.vercel.app/og-signin.jpg",
        width: 1200,
        height: 630,
        alt: "Agrobridge Sign In",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Sign In | Agrobridge Account Access",
    description:
      "Log in to your Agrobridge account to access farming and selling tools.",
    images: ["https://agro-bridge-taupe.vercel.app/twitter-signin.jpg"],
  },
};


export default function SignInPage() {
  return (
    <div>SignIn</div>
  );
}
