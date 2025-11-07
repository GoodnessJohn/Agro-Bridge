
import type { Metadata } from "next";
import Image from "next/image";
import { HomeImages } from "~/lib/images";
import type { TeamMember } from "~/app/types/types";

const metadata: Metadata = {
  title: {
    template: "%s | Bridging Farmers to Sellers",
    default: "About",
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

const teamMembers: TeamMember[] = [
  { name: 'John Doe', role: 'CEO & Founder', imageId: 'team-member-1' },
  { name: 'Jane Smith', role: 'Head of Operations', imageId: 'team-member-2' },
  { name: 'Peter Jones', role: 'Lead Agronomist', imageId: 'team-member-3' },
  { name: 'Sarah Williams', role: 'Technology Lead', imageId: 'team-member-4' },
];


export default function About() {
  const visionImage = HomeImages.find((img) => img.id === 'story-vision');
  const heroImage = HomeImages.find((img) => img.id === 'get-started-4');

  return (
    <main className="relative -mt-(--navbar-h) [font-family:var(--font-open-sans)] ">
      
      {/* About Hero Section */}      
      <section className="relative flex flex-col items-center justify-center h-[350px] lg:h-[450px]">
        {/* Background Image */}
        (heroImage && (
          <div className="rounded-lg overflow-hidden">
            <Image
              src={heroImage?.imageUrl}
              alt={heroImage?.imageAlt}
              fill
              className="dark:invert object-cover"
              priority
            />
          </div>
        ))

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative flex flex-col items-center justify-center gap-4 z-10 text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-headline">About AgroBridge</h1>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground text-zinc-200 mx-auto">
            Connecting Farmers and Buyers for a Sustainable Agricultural Future.
          </p>
        </div>       

      </section>

      {/* Vision Section */}
      <section className="relative py-(--section-py) sm:py-(--section-py-sm) lg:py-(--section-py-lg)w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-12 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full max-w-7xl mx-auto h-full">

          <div className="flex flex-col gap-4 order-2 md:order-1">
            <h2 className="text-2xl lg:text-3xl font-bold font-headline">Our Story</h2>
            <p className="text-sm lg:text-base text-muted-foreground">
              AgroBridge was founded with a simple yet powerful mission: to bridge the gap between hardworking farmers and the market. We saw the inefficiencies and inequalities in the traditional agricultural supply chain and knew there was a better way. By leveraging technology, we empower farmers, provide buyers with quality produce, and contribute to a more sustainable and equitable food system.
            </p>
            <p className="text-sm lg:text-base text-muted-foreground">
              Our journey began in the fertile fields of Nigeria, working hand-in-hand with local farmers to understand their challenges. Today, AgroBridge is a growing platform that serves a community of thousands, all dedicated to transforming the future of agriculture.
            </p>
          </div>

          {visionImage && (
            <div className="order-1 md:order-2 rounded-lg overflow-hidden">
              <Image 
                src={visionImage.imageUrl} 
                alt={visionImage.imageAlt} 
                width={600} 
                height={400} 
                className="object-cover shadow-md w-full h-full"
              />
            </div>
          )}

        </div>
      </section>

      {/* Team Members Section */}
      <section className="relative py-(--section-py) sm:py-(--section-py-sm) lg:py-(--section-py-lg)w-full h-full">
        <div className="flex flex-col gap-10 lg:gap-12 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full max-w-7xl mx-auto h-full">

          <div className="flex flex-col gap-4 mx-auto">
            <h2 className="text-2xl lg:text-3xl text-center font-bold font-headline">Our Story</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto ">
              The passionate individuals behind AgroBridge's success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => {
              const image = HomeImages.find((img) => img.id === member.imageId);
              return (
                <div 
                  key={member.name}
                  className="flex flex-col gap-2"
                >
                  {image && (
                    <div className="rounded-full overflow-hidden w-32 h-32 mx-auto shadow-md">
                      <Image 
                        src={image.imageUrl} 
                        alt={image.imageAlt} 
                        width={128} 
                        height={128} 
                        className="object-cover shadow-md w-full h-full"
                      />
                    </div>
                  )}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base lg:text-lg text-center font-semibold">{member.name}</h3>
                    <p className="text-xs lg:text-sm text-primary text-center">{member.role}</p>
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

