
import type { Metadata } from "next";
import { Button } from "~/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { baseMetadata } from "~/lib/metadata";

const metadata: Metadata = {
  ...baseMetadata,
  title: "Pricing | Agrobridge Plans and Solutions",
  description:
    "Explore Agrobridge’s pricing options and choose the plan that fits your farming or selling needs best.",
  keywords: [
    "Agrobridge pricing",
    "plans",
    "agriculture marketplace cost",
    "subscription plans",
    "farming solutions",
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Pricing | Agrobridge Plans and Solutions",
    description:
      "View Agrobridge’s flexible pricing plans designed to support farmers and sellers at every scale.",
    url: "https://agro-bridge-taupe.vercel.app/company/pricing",
    images: [
      {
        url: "https://agro-bridge-taupe.vercel.app/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "Agrobridge Pricing Plans",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Pricing | Agrobridge Plans and Solutions",
    description:
      "Compare Agrobridge pricing plans and choose what works best for you.",
    images: ["https://agro-bridge-taupe.vercel.app/twitter-pricing.jpg"],
  },
};

import { PricingProp } from "~/app/types/types";

const pricingProps: PricingProp[] = [
  {
    name: 'Starter Farmer',
    description: 'Essential tools for individual farmers to get started.',
    price: '$29',
    period: '/month',
    
    features: [
      'Direct listing for up to 10 products',
      'Access to local market data',
      'Basic logistics support',
      'Email support',
    ],
    ctaLabel: 'Choose Plan',
    cta: false,
    ctaLink: "/company/contact"
  },
  {
    name: 'Growth Plan',
    description: 'Advanced features for growing farms and cooperatives.',
    price: '$79',
    period: '/month',
    features: [
      'Unlimited product listings',
      'Real-time national market data',
      'Advanced logistics & tracking',
      'Dedicated account manager',
      'Priority phone & email support',
    ],
    ctaLabel: 'Choose Plan',
    cta: true,
    ctaLink: "/company/contact"
  },
  {
    name: 'Enterprise',
    description: 'Tailored solutions for large-scale agricultural businesses and buyers.',
    price: 'Custom',
    period: '',
    features: [
      'All features from Growth Plan',
      'Custom API integrations',
      'Volume-based pricing models',
      'On-site training & support',
      'Bespoke analytics dashboard',
    ],
    ctaLabel: 'Contact Sales',
    cta: false,
    ctaLink: "/company/contact"
  },
];

export default function PricingPage() {
  return (
    <main className="relative -mt-(--navbar-h) [font-family:var(--font-open-sans)] ">
      
      {/* Pricing Hero Section */}
      <section className="relative py-(--section-py) sm:py-(--section-py-sm) lg:py-(--section-py-lg) w-full h-full">
        <div className="flex items-center gap-10 lg:gap-12 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full max-w-7xl mx-auto h-full">

          <div className="flex flex-col gap-4 text-center w-full mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold font-headline">Find a Plan That's Right for You</h1>
            <p className="text-sm md:text-base text-center text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent pricing to help you grow your agricultural business. No hidden fees.
            </p>
          </div>

        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="relative py-(--section-py) sm:py-(--section-py-sm) lg:py-(--section-py-lg)w-full h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-6 lg:gap-8 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full max-w-5xl mx-auto h-full">

          {pricingProps.map((prop) => (
            <div 
              key={prop.name} 
              className={`rounded-lg border flex flex-col gap-6 p-6 lg:p-8 h-full hover:scale-105 hover:bg-black/3 hover:shadow-xl duration-300 ease-in-out transition-all 
                ${prop.cta ? 'relative border-(--agro-green-dark) shadow-2xl' : 'shadow-md'}
              `}
            >
              {prop.cta && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <div className="text-primary-foreground text-xs font-semibold px-4 py-1 bg-(--agro-green-dark) rounded-full">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl lg:text-3xl font-bold font-headline">{prop.name}</h2>
                <p className="text-sm lg:text-base text-muted-foreground">{prop.description}</p>
              </div>
              
              <div className="">
                <span className="text-3xl lg:text-4xl font-bold">{prop.price}</span>
                <span className="text-muted-foreground">{prop.period}</span>
              </div>

              <ul className="flex flex-col gap-2 text-muted-foreground flex-grow mb-8">
                {prop.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-(--agro-green-dark)" />
                    <span className="text-sm lg:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href={prop.ctaLink} className="w-full mt-4">
                <Button 
                  size="lg" 
                  className="w-full mt-4 cursor-pointer duration-300 ease-in-out transition-all" 
                  variant={prop.cta ? 'default' : 'outline'}
                >
                  {prop.ctaLabel}
                </Button>
              </Link>

            </div>
          ))}

        </div>
      </section>

    </main>
  );
}

