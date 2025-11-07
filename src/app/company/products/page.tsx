
import type { Metadata } from "next";
import Image from "next/image";
import { HomeImages } from "~/lib/images";
import { Button } from "~/components/ui/button";
import type { Product } from "~/app/types/types";
import Link from "next/link";

const metadata: Metadata = {
  title: {
    template: "%s | Bridging Farmers to Sellers",
    default: "Products",
  },
  description:
    "Agrobridge connects farmers with the right sellers for their crops. Streamlining agriculture for a better tomorrow.",
  keywords: "Agrobridge, farmers, sellers, agriculture, crops, marketplace",
  authors: [{ name: "Agrobridge Team", url: "https://agro-bridge-taupe.vercel.app/" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agro-bridge-taupe.vercel.app/", // Replace with actual URL
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

export default function Products() {
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
