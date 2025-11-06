
'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '~/components/ui/button';
import { HomeIcon, Menu, ArrowRight } from 'lucide-react';
import { AppLogo } from './app-logo';

import type { NavLink } from '../types/types';

const navLinks: NavLink[] = [
  { label: "Home", href: "/", icon: HomeIcon },
  { label: "Farmers", href: "/company/farmers" },
  { label: "About us", href: "/company/about" },
  { label: "Pricing", href: "/company/pricing" },
  { label: "Products", href: "/company/products" },
  { label: "Contact us", href: "/company/contact" },
];

import { socialLinks } from '~/store/store';

export default function Header() {

  const pathname = usePathname();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <header className="sticky top-0 left-0 z-50 bg-white backdrop-blur-sm shadow-sm w-full">
        <div className="flex items-center justify-between gap-2 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full max-w-7xl mx-auto h-full">
          {/* Logo */}
          <div className="flex items-center py-4">
            <Link href="/" className="flex items-center gap-2">
              <AppLogo className="w-8 h-8 text-lg" />
              <span className="text-xl font-bold">AgroBridge</span>
            </Link>
          </div>

          {/* Navigaiton Links */}
          <nav className="hidden lg:flex items-center gap-2 bg-black rounded-full p-1">
            <ul className="flex items-center gap-2">
              {navLinks.map(({ label, href, icon: Icon }) => {
                const isActive = pathname == href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors
                        ${
                          isActive
                            ? "bg-white text-black shadow-sm"
                            : "text-zinc-400 hover:text-white"
                        }`}
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      <span>{label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/auth/signin"
              className="text-sm font-medium hover:text-primary"
            >
              Sign In
            </Link>

            <Button variant="outline">
              <Link
                href="/auth/signin"
                className="flex items-center gap-1 text-sm font-medium hover:text-primary"
              >
                Sign Up
                <span><ArrowRight className="w-4 h-4 -rotate-45" /></span>
              </Link>
            </Button>
          </div>

          {/* Sidebar Toggle Button */}
          <Button
            variant="ghost"
            className="lg:hidden cursor-pointer duration-300 ease-in-out transition-all"
            onClick={() => {
              setIsSidebarOpen(true);
              console.log(isSidebarOpen);
            }}
          >
            <span className="sr-only">Menu</span>
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </header>

      {/* Sidebar */}
      {isSidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed lg:hidden inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
              ${
                isSidebarOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-full pointer-events-none"
              }`}
            onClick={() => setIsSidebarOpen(false)}
          />

          {/* Sidebar Content */}
          <aside
            ref={sidebarRef}
            className={`fixed lg:hidden top-0 left-0 z-50 h-full bg-background/80 shadow-lg w-full sm:w-1/2 lg:w-1/3 h-full duration-300 ease-in-out transform transition-transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col gap-6 h-full overflow-y-auto">
              <div className="flex items-center justify-between p-3 gap-4 backdrop-blur-sm shadow-md w-full h-fit">
                <div className="flex items-center py-1">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                      setIsSidebarOpen(false);
                      console.log(isSidebarOpen);
                    }}
                  >
                    <AppLogo className="w-8 h-8 text-lg" />
                    <span className="text-xl font-bold">AgroBridge</span>
                  </Link>
                </div>

                <Button
                  variant="ghost"
                  className="text-xl text-red-600 hover:text-white p-1 font-bold hover:bg-black/50 rounded-full hover:cursor-pointer duration-300 ease-in-out transition-out"
                  onClick={() => {
                    setIsSidebarOpen(false);
                    console.log(isSidebarOpen);
                  }}
                >
                  x
                </Button>
              </div>

              <nav className="w-full">
                <ul className="grid gap-2 p-4 w-full">
                  {navLinks.map(({ label, href, icon }) => {
                    const isActive = pathname === href;
                    return (
                      <li key={href}>
                        <Link
                          href={href}
                          passHref
                          className={`${
                            isActive
                              ? "!bg-gradient-nav !text-white active:bg-gradient-nav bg-black/50"
                              : "text-black dark:text-white hover:text-white hover:bg-black/50"
                          } flex items-center gap-2 px-2 py-2 text-base font-medium rounded-md`}
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          {/* {icon} */}
                          <span>{label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Social Links */}
              <ul className="flex items-center gap-6 p-6">
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
          </aside>
        </>
      )}
    </>
  );
}
