
"use client";

import type { Metadata } from "next";
import { ArrowRight, PlayCircle, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { HomeImages } from "~/lib/images";
import type { Stat } from "./types/types";
import { useState, useTransition } from "react";
import { toast } from "sonner";

// Static metadata
const metadata: Metadata = {
  title: {
    template: "%s | Bridging Farmers to Sellers",
    default: "Agrobridge",
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
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Agrobridge - Connecting Farmers to Sellers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@agrobridge",
    title: "Agrobridge | Bridging Farmers to Sellers",
    description:
      "Agrobridge connects farmers with the right sellers for their crops.",
    images: "/twitter-image.jpg",
  },
  // favicon: "/favicon.ico", // Replace with your favicon path
};

import Image from "next/image";

import { handleSubscribe } from '~/actions/subscribe';
import { subscribeFormSchema } from '~/lib/validations/subscribe-form-schema';


const stats: Stat[] = [
  { value: '50+', label: 'Years Of Experience' },
  { value: '200+', label: 'Fields Under Cultivation' },
  { value: '120,000+', label: 'Farmers Connected' },
  { value: '$15 Million', label: 'Agricultural Potentials' },
];

const getStartedSteps = [
  { id: '01', title: 'Technology Irrigation', imageId: 'get-started-1' },
  { id: '02', title: 'Organic Fertilizer', imageId: 'get-started-2' },
  { id: '03', title: 'Soil Health & Analysis', imageId: 'get-started-3' },
  { id: '04', title: 'Agricultural Mountain', imageId: 'get-started-4' },
];

const solutions = [
  { title: 'Farming Precision', description: 'Our precision farming employs state-of-the-art technology to optimize every aspect of farm operations.', imageId: 'solution-1' },
  { title: 'Crop Surveillance', description: 'Tracking your crop\'s health & growth in real-time with our innovative solution.', imageId: 'solution-2' },
  { title: 'Automated Farming', description: 'Enhance farm efficiency & productivity with our cutting-edge automation solution.', imageId: 'solution-3' },
]


export default function Home() {
  const homeImage = HomeImages.find((img) => img.id === "home-hero");
  const storyImage = HomeImages.find((img) => img.id === "story-vision");
  const videoThumbnails = HomeImages.filter((img) => img.id.includes('video-thumbnail'));
  const ctaBgImage = HomeImages.find((img) => img.id === "cta-background");

  const [isPending, startTransition] = useTransition();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Prevent full reload

    setMessage(null);

    if (honeypot.trim() != "") {
      // setMessage("❌ Bot submission detected.");
      toast.error("🚫 Bot detected. Submission rejected.");
      return;
    }

    // Validate with Zod (client-side first)
    const validation = subscribeFormSchema.safeParse({ email });
    if (!validation.success) {
      // setMessage("❌ Please enter a valid email address.");
      toast.error("❌ Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", email);

      const result = await handleSubscribe(formData);

      setMessage("✅ Subscription successful! Please check your inbox.");

      setEmail("");
      } catch (error) {
      console.error(error);
      toast.error("❌ Network or server error occurred.");
      setMessage("❌ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }


  }

  return (
    <div className="relative -mt-(--navbar-h) [font-family:var(--font-open-sans)] ">
      <main className="bg-white dark:bg-black w-full h-full">
        
        {/* Hero Section */}
        <section className="relative lg:-mt-(--navbar-h) h-full lg:h-screen">
          {/* Background Image */}
          (homeImage && (
            <Image
              src={homeImage?.imageUrl}
              alt={homeImage?.imageAlt}
              fill
              className="dark:invert object-cover object-bottom"
              priority
            />

          ))

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>

          {/* Content */}
          <div className="relative z-12 flex flex-col items-center lg:justify-center gap-6 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-32 lg:py-0 lg:pt-0 w-full max-w-4xl mx-auto h-full">
            <p className="text-sm text-(--agro-green-dark) font-semibold uppercase tracking-widest">Sowing Seeds of Change</p>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-(--text-white) dark:text-white font-bold">
              The Future of Fair
                <br />
              Agricultural Trade
            </h1>

            <p className="lg:text-lg text-(--text-white) max-w-xl mx-auto mt-6">
              Quickly communicate AgroBridge's mission, benefits, and credibility
            </p>

            <Link 
              href="/auth/signup"
              className="flex items-center gap-2 text-white text-sm font-semibold bg-(--agro-green-light) p-3 rounded-full shadow-lg cursor-pointer duration-300 ease-in-out transition-all"
            >
              <span>Get Started </span>
              <span><ArrowRight className="w-4 h-4 -rotate-45" /></span>
            </Link>

          </div>

        </section>

        {/* Stats & Get Started Section */}
        <section className="relative py-(--section-py) sm:py-(--section-py-sm) lg:py-(--section-py-lg) w-full h-full">
          <div className="flex flex-col gap-16 lg:gap-20 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full max-w-7xl mx-auto h-full">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl lg:text-4xl text-(--agro-green-dark) font-bold">{stat.value}</p>
                  <p className="text-sm text-(--text-black)">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="relative mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-bold font-headline">
                Despite Technological Advances In Agriculture, Traditional, Labor-Heavy Farming Practices Continue To Show Inefficiencies.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

              <div className="relative flex flex-col gap-4 lg:col-span-1">
                {(() => {
                  const getStartedImage = HomeImages.find((img) => img.id === getStartedSteps[0].imageId);
                  return(
                    <div className="relative aspect-[3/4] rounded-lg shadow-md overflow-hidden">
                      {getStartedImage && (
                        <>
                          <Image 
                            src={getStartedImage.imageUrl} 
                            alt={getStartedImage.imageAlt} 
                            fill
                            className="object-cover"
                          />

                          <div className="absolute bottom-4 flex flex-col gap-2 w-full rounded">
                            <div className="absolute inset-0 bg-black/20 z-1"></div>
                            <div className="flex flex-col gap-2 px-2 z-2">
                              <p className="text-(--agro-green-dark) font-bold text-4xl font-bold">{getStartedSteps[0].id}</p>
                              <h3 className="text-white font-semibold">{getStartedSteps[0].title}</h3>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })()}
                
                      {/* {getStartedStepsImages.map((getStartedStep) => (
                        <div className="relative aspect-w-3 aspect-h-4 rounded-lg shadow-md overflow-hidden">
                          <Image 
                            src={getStartedStep.imageUrl} 
                            alt={getStartedStep.imageAlt} 
                            layout="fill" 
                            className="object-cover"
                          />

                          <div className="flex flex-col gap-2 text-white bg-black/20 rounded">
                            <p className="text-(--agro-green-dark) font-bold text-4xl font-bold">{getStartedSteps[0].id}</p>
                            <h3 className="font-semibold">{getStartedSteps[0].title}</h3>
                          </div>

                          {/* <div className="absolute bottom-4 left-4 text-white p-2 bg-black/20 rounded">
                            <p className="text-primary font-bold text-4xl">{getStartedSteps[0].id}</p>
                            <h3 className="font-semibold mt-1">{getStartedSteps[0].title}</h3>
                          </div> 

                        </div>
                      ))} */}
                
              </div>

              <div className="flex flex-col gap-8 lg:col-span-2">
                {/* Get Started */}
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-5xl text-(--agro-green-dark) font-bold font-headline leading-tight">
                    Get Started
                    <br />
                    Now
                  </h2>

                  <Link 
                    href="/auth/signup"
                    className="text-white text-sm font-bold bg-black rounded-full"
                  >
                    <Plus className="p-1.75 w-8 h-8" />
                  </Link>
                </div>

                {/* Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  <div className="relative flex flex-col gap-4 lg:col-span-1">
                    {(() => {
                      const getStartedImage = HomeImages.find((img) => img.id === getStartedSteps[1].imageId);
                      return(
                        <div className="relative aspect-[3/4] rounded-lg shadow-md overflow-hidden">
                          {getStartedImage && (
                            <>
                              <Image 
                                src={getStartedImage.imageUrl} 
                                alt={getStartedImage.imageAlt} 
                                fill
                                className="object-cover"
                              />

                              <div className="absolute bottom-4 flex flex-col gap-2 p-2 w-full rounded">
                                <div className="absolute inset-0 bg-black/20 z-1"></div>
                                <div className="flex flex-col gap-2 px-2 z-2">
                                  <p className="text-(--agro-green-dark) font-bold text-4xl font-bold">{getStartedSteps[1].id}</p>
                                  <h3 className="text-white font-semibold">{getStartedSteps[1].title}</h3>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      );
                    })()}                  
                  </div>

                  <div className="relative flex flex-col gap-4 lg:col-span-1">
                    {(() => {
                      const getStartedImage = HomeImages.find((img) => img.id === getStartedSteps[2].imageId);
                      return(
                        <div className="relative aspect-[3/4] rounded-lg shadow-md overflow-hidden">
                          {getStartedImage && (
                            <>
                              <Image 
                                src={getStartedImage.imageUrl} 
                                alt={getStartedImage.imageAlt} 
                                fill
                                className="object-cover"
                              />

                              <div className="absolute bottom-4 flex flex-col gap-2 p-2 w-full rounded">
                                <div className="absolute inset-0 bg-black/20 z-1"></div>
                                <div className="flex flex-col gap-2 px-2 z-2">
                                  <p className="text-(--agro-green-dark) font-bold text-4xl font-bold">{getStartedSteps[2].id}</p>
                                  <h3 className="text-white font-semibold">{getStartedSteps[2].title}</h3>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      );
                    })()}                  
                  </div>

                  <div className="relative flex flex-col gap-4 lg:col-span-1">
                    {(() => {
                      const getStartedImage = HomeImages.find((img) => img.id === getStartedSteps[3].imageId);
                      return(
                        <div className="relative aspect-[3/4] rounded-lg shadow-md overflow-hidden">
                          {getStartedImage && (
                            <>
                              <Image 
                                src={getStartedImage.imageUrl} 
                                alt={getStartedImage.imageAlt} 
                                fill
                                className="object-cover"
                              />

                              <div className="absolute bottom-4 flex flex-col gap-2 p-2 w-full rounded">
                                <div className="absolute inset-0 bg-black/20 z-1"></div>
                                <div className="flex flex-col gap-2 px-2 z-2">
                                  <p className="text-(--agro-green-dark) font-bold text-4xl font-bold">{getStartedSteps[3].id}</p>
                                  <h3 className="text-white font-semibold">{getStartedSteps[3].title}</h3>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      );
                    })()}                  
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section> 

        {/* Story Section */}
        <section className="relative py-(--section-py) sm:py-(--section-py-sm) lg:py-(--section-py-lg)">
          <div className="w-full max-w-7xl mx-auto px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg)">
            <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px] lg:h-[500px]">
              {/* Background Image */}
              {storyImage && (
                <Image
                  src={storyImage.imageUrl}
                  alt={storyImage.imageAlt}
                  fill
                  className="object-cover object-center"
                  priority
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 z-10 rounded-xl"></div>

              {/* Content */}
              <div className="relative z-20 flex flex-col justify-between h-full p-8 lg:p-12">
                {/* Top-left text */}
                <div className="max-w-md">
                  <h2 className="text-xl lg:text-2xl text-white font-semibold font-headline leading-snug">
                    Build trust and show Agrobridge&apos;s story and vision.
                  </h2>
                </div>

                {/* Optional bottom-right text placeholder */}
                {/* <div className="flex justify-end">
                  <p className="text-white">More info or tagline here</p>
                </div> */}
              </div>
            </div>
          </div>
        </section>


        {/* Next Gen paragraph */}
        {/* <section className="relative py-(--section-py) sm:py-(--section-py-sm) lg:py-(--section-py-lg) w-full h-full">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-6 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full max-w-7xl mx-auto h-full">

            <span className="text-2xl text-[#1C1C1C] w-full lg:max-w-1/3">
              Next-Gen Solutions For Optimal Crop Growth
            </span>

            <span className="text-xl text-[#1C1C1C] font-light w-full lg:max-w-1/3">
              We&apos;ve offer live pricing data & market ends to help users make better decisions.
            </span>

          </div>
        </section> */}

        {/* Solution Section */}
        <section className="relative py-(--section-py) sm:py-(--section-py-sm) lg:py-(--section-py-lg)w-full h-full">
          <div className="flex flex-col gap-4 gap-6 lg:gap-8 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full max-w-7xl mx-auto h-full">

            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold font-headline">Next-Gen Solutions For Optimal Crop Growth</h2>
              <p className="text-muted-foreground">We offer live pricing data & market trends to help users make better decisions.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {solutions.map((solution) => {
                const solutionsImage = HomeImages.find((img) => img.id === solution.imageId);
                return (
                  <div key={solutionsImage?.imageUrl}>
                    {solutionsImage && 
                      <Image src={solutionsImage?.imageUrl} alt={solutionsImage?.imageAlt}
                        width={500} height={150}
                        className="rounded-lg object-cover shadow-lg max-h-90"
                      />
                    }
                      <h3 className="text-lg lg:text-xl font-semibold mt-6 my-2 text-(--text-black)">{solution.title}</h3>
                      <p className="text-sm lg:text-base text-black">{solution.description}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Video Thumbnail Section */}
        <section className="relative py-(--section-py) sm:py-(--section-py-sm) lg:py-(--section-py-lg)w-full h-full">
          <div className="flex flex-col gap-4 gap-6 lg:gap-8 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full max-w-7xl mx-auto h-full">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {videoThumbnails.map((thumbnail) => (
              <div key={thumbnail.id} className="relative rounded-lg overflow-hidden aspect-video">
                <Image 
                  src={thumbnail.imageUrl} 
                  alt={thumbnail.imageAlt} 
                  fill 
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button variant="ghost" size="icon" className="w-20 h-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </Button>
                </div>
              </div>
            ))}

            <h3 className="text-2xl font-bold font-headline">Facilitate discovery & trade between farmers, aggregators and buyers.</h3>
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

          <div className="absolute inset-0 bg-primary/50 z-10"></div>

          {/* Content */}
          <div className="relative z-12 flex flex-col items-center justify-center gap-8 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full max-w-4xl mx-auto h-full">
            <h2 className="text-4xl text-white font-bold font-headline">Join agroBridge pro Today!</h2>
            <form 
              action="" 
              method="post"
              className="flex items-center gap-4 w-full max-w-lg mx-auto"
            >
              <Input 
                type="email" name="emailPro" id="emailPro" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email Address"
                className="px-6 bg-white/90 text-zinc-900 rounded-full h-10"
              />

              <Button
                type="submit" variant="default"
                disabled={loading}
                className="rounded-full h-10 cursor-pointer duration-300 ease-in-out transition-all"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>

            {message && (
              <p
                className={`text-sm mt-2 ${
                  message.startsWith("✅") ? "text-green-600" : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}            

          </div>
        </section>

      </main>
    </div>
  );
}
