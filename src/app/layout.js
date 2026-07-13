import "./globals.css";
import SiteNav from "@/components/Navbar/SiteNav";
import { Plus_Jakarta_Sans } from "next/font/google";

// Google Font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: [
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
});

// Metadata
export const metadata = {
  title: "Emventory",
  description: "Store Management Solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}