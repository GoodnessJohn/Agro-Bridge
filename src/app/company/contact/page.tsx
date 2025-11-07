
import type { Metadata } from "next";
import type { ContactInfo } from "~/app/types/types";
import { Card, CardContent } from "~/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const metadata: Metadata = {
  title: {
    template: "%s | Bridging Farmers to Sellers",
    default: "Contact",
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


export default function ContactPage() {
  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      content: 'support@agrobridge.com',
      link: 'mailto:support@agrobridge.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      content: '+234 804 9292 092',
      link: 'tel:+2348049292092',
    },
  ];
  
  return (
    <main>   
      {/* Contact Page Section */} 
      <section className="relative py-(--section-py) sm:py-(--section-py-sm) lg:py-(--section-py-lg) w-full h-full">
        <div className="flex flex-col gap-16 lg:gap-20 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full max-w-7xl mx-auto h-full">

          {/* Stats */}
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold font-headline">Get in Touch</h1>
            <p className="text-base lg:text-lg text-muted-foreground text-center max-w-2xl lg:mx-auto">
              We'd love to hear from you. 
              Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Card */}
            <Card>
              <CardContent className="flex flex-col gap-6 p-8">
                <h2 className="text-xl lg:text-2xl font-bold font-headline">Send us a Message</h2>
                <form 
                  action="" 
                  className="flex flex-col gap-6"
                >
                  {/* Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    <div className="flex flex-col gap-2">
                      <div className="flex gap-1">
                        <Label htmlFor="first-name" className="font-semibold">First Name</Label>
                        <span className="text-red-700 text-lg font-bold">*</span>
                      </div>

                      <Input 
                        name="first-name" id="first-name" 
                        placeholder="Enter your first name" 
                        className="h-12 placeholder:text-sm"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex gap-1">
                        <Label htmlFor="last-name" className="font-semibold">Last Name</Label>
                        {/* <span className="text-red-700 text-lg font-bold">*</span> */}
                      </div>

                      <Input 
                        name="last-name" id="last-name" 
                        placeholder="Enter your last name" 
                        className="h-12 placeholder:text-sm"
                      />
                      
                      {/* <Input 
                        name="last-name" id="last-name" 
                        placeholder="Enter your last name" 
                        className="placeholder:text-sm"
                        required
                      /> */}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-1">
                      <Label htmlFor="email" className="font-semibold">Email</Label>
                      <span className="text-red-700 text-lg font-bold">*</span>
                    </div>

                    <Input 
                      name="email" id="email" 
                      placeholder="Enter your email" 
                      className="h-12 placeholder:text-sm"
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-1">
                      <Label htmlFor="subject" className="font-semibold">Subject</Label>
                      <span className="text-red-700 text-lg font-bold">*</span>
                    </div>

                    <Input 
                      name="subject" id="subject" 
                      placeholder="Enter your subject..." 
                      className="h-12 placeholder:text-sm"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-1">
                      <Label htmlFor="message" className="font-semibold">Message</Label>
                      <span className="text-red-700 text-lg font-bold">*</span>
                    </div>

                    <Textarea 
                      name="message" id="message" 
                      placeholder="Enter your message..." 
                      className="h-12 placeholder:text-sm" rows={8}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>

                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="flex flex-col gap-6 w-full h-full">
              <h2 className="text-xl lg:text-2xl font-bold font-headline">Contact Infromation</h2>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="text-muted-foreground p-2 lg:p-3 rounded-full text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base lg:text-lg">Our Office</h3>
                    <p className="text-muted-foreground text-sm lg:text-base">123 Agri-Tech Avenue, Lagos, Nigeria</p>
                  </div>
                </div>

                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-muted-foreground p-2 lg:p-3 rounded-full text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-base lg:text-lg">{item.title}</h3>
                      <p className="text-muted-foreground text-sm lg:text-base">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {item.content}
                        </a>
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>


        </div>
      </section> 
    </main>
  );
}
