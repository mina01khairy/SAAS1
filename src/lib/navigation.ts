import {
  faGaugeHigh,
  faTicket,
  faBookOpen,
  faGear,
  faCreditCard,
  faShieldHalved,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface NavItem {
  label: string;
  href: string;
  icon: IconDefinition;
}

export const primaryNav: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: faGaugeHigh },
  { label: "Tickets", href: "/tickets", icon: faTicket },
  { label: "Knowledge Base", href: "/knowledge-base", icon: faBookOpen },
  { label: "Notifications", href: "/notifications", icon: faBell },
];

export const secondaryNav: NavItem[] = [
  { label: "Settings", href: "/settings", icon: faGear },
  { label: "Billing", href: "/billing", icon: faCreditCard },
  { label: "Admin", href: "/admin", icon: faShieldHalved },
];

export const bottomNav: NavItem[] = [
  { label: "Home", href: "/dashboard", icon: faGaugeHigh },
  { label: "Tickets", href: "/tickets", icon: faTicket },
  { label: "Notifications", href: "/notifications", icon: faBell },
  { label: "Profile", href: "/settings", icon: faGear },
];
