"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/Navbar/Nav";
import Nav2 from "@/components/Navbar/Nav2";
import NavBlack from "./Nav1";

// Add more path -> nav mappings here as needed.
const HOME_PATHS = ["/", "/home", "/about", "/update-log", "/feature-guide", "/help"];

const PRODUCT_PATH = ["/aisearch"];

const SiteNav = () => {
  const pathname = usePathname();

  if (HOME_PATHS.includes(pathname)) {
    return <Nav2 />;
  }

  if (PRODUCT_PATH.includes(pathname)) {
    return <NavBlack/>;
  }


  return <Nav />;
};

export default SiteNav;