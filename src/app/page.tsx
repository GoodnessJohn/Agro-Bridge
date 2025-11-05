
import type { Metadata } from "next";
import { ArrowRight, Dot } from "lucide-react";
import Link from "next/link";

// Static metadata
export const metadata: Metadata = {
  title: {
    template: "%s | Bridging Farmers to Sellers",
    default: "Agrobridge",
  },
  description:
    "Agrobridge connects farmers with the right sellers for their crops. Streamlining agriculture for a better tomorrow.",
  keywords: "Agrobridge, farmers, sellers, agriculture, crops, marketplace",
  authors: [{ name: "Agrobridge Team", url: "https://agrobridge.com" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agrobridge.com", // Replace with actual URL
    title: "Agrobridge | Bridging Farmers to Sellers",
    description:
      "Agrobridge connects farmers with the right sellers for their crops. Streamlining agriculture for a better tomorrow.",
    siteName: "Agrobridge",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in the static files
        width: 1200,
        height: 630,
        alt: "Agrobridge - Connecting Farmers to Sellers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image", // Ensures the large image format for Twitter
    site: "@agrobridge", // Replace with your actual Twitter handle
    title: "Agrobridge | Bridging Farmers to Sellers",
    description:
      "Agrobridge connects farmers with the right sellers for their crops.",
    images: "/twitter-image.jpg", // Twitter-specific image
  },
  // favicon: "/favicon.ico", // Replace with your favicon path
};

import Image from "next/image";

export default function Home() {
  return (
    <div className="elative -mt-(--navbar-h) font-sans">
      <main className="bg-white dark:bg-black w-full h-full">
        
      {/* Hero Section */}
        <section className="relative lg:-mt-(--navbar-h) h-full lg:h-screen font-sans">
          {/* Background Image */}
          <Image
            src="/homepage/hero-home.jpeg"
            alt="Hero Image: A beautiful landscape of rice paddies on a terrace in a rural mountainous area at sunset."
            fill
            priority
            className="dark:invert object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 z-10"></div>

          {/* Content */}
          <div className="relative z-12 flex flex-col items-center gap-6 [font-family:var(--font-open-sans)] px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-32 lg:py-0 lg:pt-52 w-full max-w-4xl mx-auto h-full">
            <p className="flex items-center font-semibold uppercase tracking-widest">
              <Dot className="w-8 h-8 text-green-700" />
              <span className="text-sm text-(--text-black)">Sowing Seeds of Change</span>
            </p>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-(--text-black) dark:text-white font-bold">
              The Future of Fair
                <br />
              Agricultural Trade
            </h1>

            <p className="text-lg text-(--text-white) max-w-xl mx-auto mt-6">
              Quickly communicate AgroBridge's mission, benefits, and credibility
            </p>

            <Link 
              href="/auth/signup"
              className="flex items-center gap-2 text-white text-sm font-semibold bg-black p-3 rounded-full shadow-lg cursor-pointer duration-300 ease-in-out transition-all"
            >
              <span>Get Started </span>
              <span><ArrowRight className="w-4 h-4 -rotate-45" /></span>
            </Link>

          </div>

        </section>


      </main>
    </div>
  );
}
