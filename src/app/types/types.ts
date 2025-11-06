
// Header
import type { LucideIcon } from "lucide-react";

// HomePage
export interface NavLink {
  label: string;
  href: string;
  icon?: LucideIcon;
  color?: string;
}

export interface Stat {
  value: string;
  label: string;
}