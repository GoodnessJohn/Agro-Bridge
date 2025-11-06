
import { NavLink } from "~/app/types/types";
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const socialLinks: NavLink[] = [
  { label: "Facebook", href: "https://facebook.com/yourpage", icon: Facebook, color: "hover:text-[#1877F2]" }, // Facebook Blue
  { label: "X", href: "https://x.com/yourhandle", icon: Twitter, color: "hover:text-black" }, // X Black
  { label: "Instagram", href: "https://instagram.com/yourhandle", icon: Instagram, color: "hover:text-[#E4405F]" }, // Instagram Pink
  { label: "LinkedIn", href: "https://linkedin.com/company/yourcompany", icon: Linkedin, color: "hover:text-[#0A66C2]" }, // LinkedIn Blue
];