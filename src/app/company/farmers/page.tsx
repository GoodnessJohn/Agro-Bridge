
import type { Metadata } from "next";
import type { Benefit } from "~/app/types/types";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { HomeImages } from "~/lib/images";

import type { VideoLink } from "~/app/types/types";

const metadata: Metadata = {
  title: {
    template: "%s | Bridging Farmers to Sellers",
    default: "Farmers",
  },
  description:
    "Agrobridge connects farmers with the right sellers for their crops. Streamlining agriculture for a better tomorrow.",
  keywords: "Agrobridge, farmers, sellers, agriculture, crops, marketplace",
  authors: [{ name: "Agrobridge Team", url: "https://agro-bridge-taupe.vercel.app/" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agro-bridge-taupe.vercel.app/", 
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

const benefits: Benefit[] = [
  {
    title: 'Direct Market Access',
    description: 'Connect directly with a wide network of buyers, cutting out intermediaries and increasing your profit margins.',
  },
  {
    title: 'Fair & Transparent Pricing',
    description: 'Gain access to real-time market data to price your produce competitively and fairly.',
  },
  {
    title: 'Streamlined Logistics',
    description: 'Our platform helps you manage logistics, from harvest to delivery, ensuring your produce reaches the buyer fresh.',
  },
  {
    title: 'Financial Tools',
    description: 'Access financial services and tools to manage your farm\'s cash flow and invest in growth.',
  },
];


export default function Farmers() {
  const farmerImage = HomeImages.find((img) => img.id === 'get-started-2');
  const ctaBgImage = HomeImages.find((img) => img.id === 'cta-background');

  return (
    <main className="relative -mt-(--navbar-h) [font-family:var(--font-open-sans)]">
      {/* Farmer Hero Section */}
      <section className="relative py-(--section-py) sm:py-(--section-py-sm) lg:py-(--section-py-lg) h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full max-w-7xl mx-auto h-full">

          <div className="flex flex-col justify-center text-center lg:text-left gap-8">
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold font-headline">Empowering Farmers, Nourishing the World</h1>
              <p className="text-sm sm:text-base text-muted-foreground mx-auto lg:mx-0">
                At AgroBridge, we are dedicated to providing you with the tools and resources needed to thrive in today's agricultural market. 
                Join our platform to connect with buyers, get fair prices, and grow your business.
              </p>
            </div>

            <Link 
              href="/auth/signup"
              className="text-white text-sm bg-(--agro-green-dark) px-4 py-2 rounded-md shadow-md cursor-pointer w-fit mx-auto lg:mx-0"
            >
              Join Our Network
            </Link>
          </div>

          {/* Background Image */}
          <div className="relative overflow-hidden rounded-lg shadow-md w-full h-full min-h-[300px] sm:max-h-[400px] lg:max-h-[900px]">
          {farmerImage && (
            <Image
              src={farmerImage.imageUrl}
              alt={farmerImage.imageAlt}
              fill
              className="object-cover rounded-lg shadow-md"
              priority
            />
          )}
          </div>
        </div>

      </section>

      {/* Benefit Section */}
      <section className="relative py-(--section-py) sm:py-(--section-py-sm) lg:py-(--section-py-lg) w-full h-full">
        <div className="flex flex-col gap-8 lg:gap-12 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full max-w-7xl mx-auto h-full">

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl lg:text-3xl text-center font-bold font-headline">Why Partner with AgroBridge?</h2>
            <p className="text-sm lg:text-base text-muted-background text-center text-wrap w-full max-w-2xl mx-auto">
              We provide a comprehensive platform that addresses the key challenges faced by modern farmers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {benefits.map((benefit) => (
              <div 
                key={benefit.title} 
                className="flex flex-col gap-2 p-6 bg-background rounded-lg shadow-sm hover:shadow-md hover:bg-black/2 hover:scale-102 duration-300 ease-in-out transition-all"
              >
                <CheckCircle className="w-8 h-8 text-(--agro-green-dark)" />
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg lg:text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-sm lg:text-base text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-(--section-py) sm:py-(--section-py-sm) lg:py-(--section-py-lg)w-full h-78 sm:h-88 lg:h-92">
        {/* Background Image */}
        {ctaBgImage && 
          <Image 
            src={ctaBgImage.imageUrl} 
            alt={ctaBgImage.imageAlt} 
            fill
            className="dark:invert object-cover object-bottom h-full w-full"
            priority
          />
        }

        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Content */}
        <div className="relative z-12 flex flex-col items-center justify-center gap-8 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full max-w-4xl mx-auto h-full">
          <div className="flex flex-col gap-4 mx-auto">            
            <h2 className="text-3xl lg:text-4xl text-white text-center font-bold font-headline">Join agroBridge pro Today!</h2>
            <p className="text-sm lg:text-base text-center text-white max-w-xl mx-auto">
              Sign up today and take the first step towards a more profitable and sustainable future for your farm.
            </p>
          </div>

          <Link 
            href="/auth/signup"
            className="px-4 py-2 text-white bg-black hover:bg-black/80 rounded-md hover:cursor-pointer shadow-sm hover:shadow-md duration-300 ease-in-out transition-all"
          >
            Become a Partner
          </Link>
      
        </div>
      </section>
      
    </main>
  );
}

