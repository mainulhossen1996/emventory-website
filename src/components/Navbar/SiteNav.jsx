"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/Navbar/Nav";
import Nav2 from "@/components/Navbar/Nav2";

// Add more path -> nav mappings here as needed.
const HOME_PATHS = ["/", "/home", "/about", "/update-log", "/feature-guide", "/help"];

const SiteNav = () => {
  const pathname = usePathname();

  if (HOME_PATHS.includes(pathname)) {
    return <Nav2 />;
  }

  return <Nav />;
};

export default SiteNav;