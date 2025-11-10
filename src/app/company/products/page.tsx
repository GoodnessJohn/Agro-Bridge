
import type { Metadata } from "next";
import Image from "next/image";
import { HomeImages } from "~/lib/images";
import { Button } from "~/components/ui/button";
import type { Product } from "~/app/types/types";
import Link from "next/link";
import { baseMetadata } from "~/lib/metadata";

const metadata: Metadata = {
  ...baseMetadata,
  title: "Products | Agrobridge Agricultural Solutions",
  description:
    "Explore Agrobridge’s range of agricultural products and digital solutions designed to empower farmers and sellers.",
  keywords: [
    "Agrobridge products",
    "agriculture tools",
    "farming products",
    "marketplace solutions",
    "agritech platform",
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Products | Agrobridge Agricultural Solutions",
    description:
      "Discover innovative Agrobridge products and digital solutions built for modern agriculture.",
    url: "https://agro-bridge-taupe.vercel.app/company/products",
    images: [
      {
        url: "https://agro-bridge-taupe.vercel.app/og-products.jpg",
        width: 1200,
        height: 630,
        alt: "Agrobridge Products",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Products | Agrobridge Agricultural Solutions",
    description:
      "Browse Agrobridge products and solutions made to bridge the gap between farmers and sellers.",
    images: ["https://agro-bridge-taupe.vercel.app/twitter-products.jpg"],
  },
};


const products: Product[] = [
  {
      title: 'Direct-to-Buyer Marketplace',
      description: 'An online platform where farmers can list their produce and connect directly with a network of verified buyers, including retailers, wholesalers, and food processors. This eliminates unnecessary intermediaries, ensuring better prices for farmers and fresher produce for buyers.',
      imageId: 'solution-1',
      link: '/auth/signup',
      // linkLabel: 'Visit Marketplace',
      linkLabel: 'Get Started',
  },
  {
      title: 'Logistics & Supply Chain',
      description: 'An integrated logistics service that handles the transportation of produce from the farm to the buyer. Our system optimizes routes, provides real-time tracking, and ensures proper handling to maintain quality and reduce post-harvest losses.',
      imageId: 'solution-2',
      // link: '/products/logistics',
      // linkLabel: 'Explore Logistics',
      link: '/auth/signup',
      // linkLabel: 'Visit Marketplace',
      linkLabel: 'Get Started',
  },
  {
      title: 'Market Intelligence',
      description: 'A data analytics service that provides farmers and buyers with valuable insights into market trends, pricing, and demand forecasts. This empowers users to make informed decisions, negotiate better deals, and plan for future market needs.',
      imageId: 'solution-3',
      // link: '/products/market-intelligence',
      // linkLabel: 'View Insights',
      link: '/auth/signup',
      // linkLabel: 'Visit Marketplace',
      linkLabel: 'Get Started',
  }
];

export default function ProductsPage() {
  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Agrobridge Product Line",
    description:
      "A collection of agricultural products and digital tools for farmers and sellers.",
    url: "https://agro-bridge-taupe.vercel.app/company/products",
    itemListElement: [
      {
        "@type": "Product",
        position: 1,
        name: "Agrobridge Marketplace Access",
        description:
          "Connect with buyers and sellers directly through the Agrobridge platform.",
        image: "https://agro-bridge-taupe.vercel.app/images/product1.jpg",
      },
      {
        "@type": "Product",
        position: 2,
        name: "Agrobridge Analytics Dashboard",
        description:
          "Monitor market trends and optimize your crop sales through data-driven insights.",
        image: "https://agro-bridge-taupe.vercel.app/images/product2.jpg",
      },
    ],
  };

  const aboutHeroImage = HomeImages.find((img) => img.id === 'get-started-2');
  return (
    <main className="relative -mt-(--navbar-h) [font-family:var(--font-open-sans)] ">
          
      {/* Products Hero Section */}      
      <section className="relative flex items-center justify-center text-center text-white h-[350px] sm:h-[400px] lg:h-[500px]">
          
        {/* Background Image */}
        {aboutHeroImage && (
          <Image
            src={aboutHeroImage?.imageUrl}
            alt={aboutHeroImage?.imageAlt || "Products hero background image"}
            fill
            className="object-cover object-bottom"
            priority
          />
        )}
  
        <div className="absolute inset-0 bg-black/60 z-10"></div>
  
        <div className="flex flex-col gap-4 mx-auto z-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-headline">Our Products</h1>
          <p className="text-sm sm:text-base lg:text-lg text-center text-white max-w-2xl mx-auto">
            Innovative solutions designed to revolutionize the agricultural value chain.
          </p>
        </div>       

      </section>
  
      {/* Products Section */}
      <section className="relative py-(--section-py) sm:py-(--section-py-sm) lg:py-(--section-py-lg)w-full h-full">
        <div className="px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full max-w-7xl mx-auto h-full">

          <div className="grid gap-8">
            {products.map((product, index) => {
              const image = HomeImages.find((img) => img.id === product.imageId);
              return (
                <div key={product.title} className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                  <div className={`rounded-lg overflow-hidden ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    {image && 
                      <Image 
                        src={image.imageUrl} alt={image.imageAlt || "Product Image"} 
                        width={300}
                        height={200}
                        className="object-cover w-full h-full max-h-70 sm:max-h-90 shadow-md"
                      />
                    }
                  </div>
                  <div className={`flex flex-col gap-6 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="grid gap-4">
                      <h2 className="text-2xl lg:text-3xl font-bold font-headline">{product.title}</h2>
                      <p className="text-sm lg:text-base text-muted-foreground">{product.description}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                      {/* <Button variant="outline" className="w-fit">
                        Learn More
                      </Button> */}

                      {product.link && (
                        <Link href={product.link} className="w-fit">
                          <Button variant="default" className="w-fit">
                            {product.linkLabel}
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
  
        </div>
      </section>
      
    </main>
  );
}
