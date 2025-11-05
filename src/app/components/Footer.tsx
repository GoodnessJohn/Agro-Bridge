
import Link from 'next/link';
import { AppLogo } from './app-logo';
import type { NavLink } from '../types/types';
import { PhoneIcon, MailIcon, LocateFixedIcon } from 'lucide-react';

let devYear: number = 2024;
let currentYear: number = new Date().getFullYear();

const socialLinks: NavLink[] = [
  { label: "", href: "", icon: PhoneIcon }
];

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

  return (
    <footer className="relative bg-zinc-100 dark:bg-zinc-900 [font-family:var(--font-open-sans)]">
      <div className="grid gap-8 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full max-w-7xl mx-auto h-full">
        {/* Footer 1 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 pt-12 w-full">
          
          {/* Description */}
          <div className="flex flex-col gap-4 col-span-2 lg:col-span-1">

            <div className="flex flex-col gap-6 lg:gap-8">
            
              {/* App Logo */}
              <Link href="/" className="flex items-center gap-2">
                <AppLogo className="w-8 h-8 text-primary" />
                <span className="text-3xl text-(--agro-green) font-bold">AgroBridge</span>
              </Link>

              <p className="text-xl text-(--text-black">
                We are an agricultural solution provider based in Nigeria.
              </p>

            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">



            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4 w-full">
            <h4 className="text-xl text-black dark:text-white font-semibold">Company</h4>

            <ul className="flex flex-col gap-2">
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
            <h4 className="text-xl text-black dark:text-white font-semibold">Resource</h4>

            <ul className="flex flex-col gap-2">
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
          <h4 className="text-xl text-black dark:text-white font-semibold">Help</h4>

            <ul className="flex flex-col gap-2">
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

            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="tel:+2348049292092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-wrap items-center gap-2 text-(--text-black) hover:text-primary focus:text-primary duration-300 ease-in-out transition-all"
                >
                  <PhoneIcon className="w-6 h-6" />                  
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
                  <MailIcon className="w-6 h-6" />
                  Email Address
                </a>
              </li>
              <li className="flex flex-wrap items-center gap-2 text-black dark:text-white cursor-text">
                <LocateFixedIcon className="w-6 h-6" />
                <span>Barnawa, Kaduna State, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer 2 */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 py-6 text-muted-foreground border-t">
          <p className="flex items-center gap-1 text-sm">
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
                    className="text-sm hover:text-primary focus:text-primary"
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

