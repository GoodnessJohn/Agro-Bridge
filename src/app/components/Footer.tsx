
"use client"; 

import Link from 'next/link';
import { useState, useTransition } from 'react';
import { AppLogo } from './app-logo';
import type { NavLink } from '../types/types';
import { PhoneIcon, MailIcon, MapPin, ArrowRight } from 'lucide-react';

import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { toast } from 'sonner';

import { handleSubscribe } from '~/actions/subscribe';
import { subscribeFormSchema } from '~/lib/validations/subscribe-form-schema';
import { socialLinks } from '~/store/store';

let devYear: number = 2024;
let currentYear: number = new Date().getFullYear();

const companyLinks: NavLink[] = [
  { label: "Farmers", href: "/company/farmers" },
  { label: "Pricing", href: "/company/pricing" },
  { label: "Products", href: "/company/products" },
  { label: "About Us", href: "/company/about" },
  { label: "Contact Us", href: "/company/contact" },
];

const resourceLinks: NavLink[] = [
  { label: "Blog", href: "/resource/blog" },
  { label: "Customer Stories", href: "/resource/customerstories" },
  { label: "Information", href: "/resource/information" },
  { label: "Legal", href: "/resource/legal" },
  { label: "Payments", href: "/resource/payments" },
];

const helpLinks: NavLink[] = [
  { label: "FAQs", href: "/help/faqs" },
  { label: "Help Center", href: "/help/helpcenter" },
  { label: "Support", href: "/help/support" }
];

const footer2Links: NavLink[] = [
  { label: "FAQs", href: "/faqs" },
  { label: "Terms of service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" }
];


export default function Footer() {

  const displayYear = currentYear > devYear ? `${devYear} - ${currentYear}` : `${devYear}`;
  
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
    <footer className="relative bg-zinc-100 dark:bg-zinc-900 [font-family:var(--font-open-sans)]">
      <div className="grid gap-8 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full max-w-7xl mx-auto h-full">
        {/* Footer 1 */}
        
        <div className="flex flex-col gap-8 lg:gap-12 pt-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
            
            
            {/* Description */}
            <div className="flex flex-col gap-8 w-full lg:w-[280px] xl:w-[320px] shrink-0">

              <div className="flex flex-col gap-6 lg:gap-8">
              
                {/* App Logo */}
                <Link href="/" className="flex items-center gap-2">
                  <AppLogo className="w-8 h-8 text-primary" />
                  <span className="text-3xl text-(--agro-green-dark) font-bold">AgroBridge</span>
                </Link>

                <p className="text-sm lg:text-base text-(--text-black">
                  We are an agricultural solution provider based in Nigeria.
                </p>

              </div>

              {/* Social Links */}
              <ul className="flex items-center gap-6">
                {socialLinks.map(({ label, href, icon: Icon, color }) => {
                  return (
                    <li 
                      key={href}
                      className="relative flex flex-col items-center group"
                    >
                      {/* Label */}
                      <span
                        className={`
                          absolute -top-6 text-xs text-(--text-black) dark:text-white px-2 py-0.5 rounded-md backdrop-blur-sm 
                          bg-white/80 dark:bg-black/50 opacity-0 group-hover:opacity-100 
                          group-hover:translate-y-[-2px] transition-all duration-300 ease-in-out 
                          ${color?.replace("hover:", "")}
                        `}
                      >
                        {label}
                      </span>

                      {/* Icon */}
                      <Link
                        href={href}
                        className={`text-(--text-black) dark:text-white ${color} focus:text-(--text-black)
                          duration-300 ease-in-out transition-all
                          "
                        `}
                      >
                        {Icon && <Icon className="w-5 h-5" />}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Company, Resource, Help and COntact Us */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:[grid-template-columns:repeat(auto-fit,minmax(180px,1fr))] gap-8 w-full">

              {/* Company Links */}
              <div className="flex flex-col gap-4 w-full">
                <h4 className="text-lg lg:text-xl text-black dark:text-white font-semibold">Company</h4>

                <ul className="flex flex-col gap-2 text-sm lg:text-base">
                  {companyLinks.map(({ label, href, icon: Icon }) => {
                    return (
                      <li key={href}>
                        <Link
                          href={href}
                          className="text-(--text-black) hover:text-primary focus:text-primary duration-300 ease-in-out transition-all"
                        >
                          {Icon && <Icon className="w-4 h-4" />}
                          <span>{label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Resource Links */}
              <div className="flex flex-col gap-4 w-full">
                <h4 className="text-lg lg:text-xl text-black dark:text-white font-semibold">Resource</h4>

                <ul className="flex flex-col gap-2 text-sm lg:text-base">
                  {resourceLinks.map(({ label, href, icon: Icon }) => {
                    return (
                      <li key={href}>
                        <Link
                          href={href}
                          className="text-(--text-black) hover:text-primary focus:text-primary duration-300 ease-in-out transition-all"
                        >
                          {Icon && <Icon className="w-4 h-4" />}
                          <span>{label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Help Links */}
              <div className="flex flex-col gap-4 w-full">
                <h4 className="text-lg lg:text-xl text-black dark:text-white font-semibold">Help</h4>

                <ul className="flex flex-col gap-2 text-sm lg:text-base">
                  {helpLinks.map(({ label, href, icon: Icon }) => {
                    return (
                      <li key={href}>
                        <Link
                          href={href}
                          className="text-(--text-black) hover:text-primary focus:text-primary duration-300 ease-in-out transition-all"
                        >
                          {Icon && <Icon className="w-4 h-4" />}
                          <span>{label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Contact Us */}
              <div className="flex flex-col gap-4 w-full">
                <h4 className="text-lg font-semibold">Contact Us</h4>

                <ul className="flex flex-col gap-2 text-sm lg:text-base">
                  <li>
                    <a
                      href="tel:+2348049292092"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-wrap items-center gap-2 text-(--text-black) hover:text-primary focus:text-primary duration-300 ease-in-out transition-all"
                    >
                      <PhoneIcon className="w-5 h-5" />                  
                      +234(0) 804 929 2092
                    </a>
                  </li>

                  <li>
                    <a
                      href="mailto:emailaddress@example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-wrap items-center gap-2 text-(--text-black) hover:text-primary focus:text-primary duration-300 ease-in-out transition-all"
                    >
                      <MailIcon className="w-5 h-5" />
                      Email Address
                    </a>
                  </li>

                  <li className="flex items-center gap-2 text-black dark:text-white cursor-text">
                    <MapPin className="w-5 h-5" />
                    <span className="text-wrap">Barnawa, Kaduna State, Nigeria</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Get In Touch */}
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl lg:text-3xl text-(--text-black) font-bold font-headline">Get In Touch!</h3>

            {/* Get In Touch Form *
            <form 
              action={onSubmit} 
              method="post"
              className="flex items-center gap-4 w-full max-w-lg"
            >
              <Input 
                type="email" name="email" id="email" 
                placeholder="Enter your Email"
                required
                className="px-6 bg-white/90 text-zinc-900 rounded-full w-full h-10"
              />
              {/* CC Multiple Emails *
              <input type="hidden" name="_cc" value="shownzy001@gmail.com,shownzy001@gmail.com"></input>
              {/* Default Thankyou Page *
              <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input>

              <Button
                type="submit" variant="default"
                className="rounded-full h-10 cursor-pointer duration-300 ease-in-out transition-all"
              >
                Subscribe
              </Button>
            </form> 
            */}

            <form
              onSubmit={onSubmit}
              method="POST"
              className="flex items-center gap-4 w-full max-w-lg"
            >
              <Input 
                type="email" name="email" id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                required
                className="px-6 bg-white/90 text-zinc-900 rounded-full w-full h-10 placeholder:text-sm"
              />

              {/* Honeypot field - hidden from real users */}
              <input
                type="text"
                name="company"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* CC Multiple Emails */}
              <input type="hidden" name="_cc" value="shownzy001@gmail.com,shownzy001@gmail.com"></input>
              {/* Default Thankyou Page */}
              <input type="hidden" name="_next" value="https://agro-bridge-taupe.vercel.app/thanks.html"></input>

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
          
        </div>

        {/* Footer 2 */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pb-6 py-2 text-muted-foreground border-t">
          <p className="flex items-center gap-1 text-[10px] sm:text-xs lg:text-sm">
            <span>&copy; Copyright </span>
            <span>{displayYear}</span>
            <span>All Rights Reserved</span>
          </p>

          {/* Footer 2 Links: FAQs, Terms of Service and Privacy Policy */}
          <ul className="flex items-center gap-4">
            {footer2Links.map(({ label, href, icon: Icon }) => {
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[10px] sm:text-xs lg:text-sm hover:text-primary focus:text-primary"
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    <span>{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

        </div>
      </div>
    </footer>
  );
}

