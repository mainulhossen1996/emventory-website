import "./globals.css";
import Nav from "@/components/Navbar/Nav";
import { Fira_Sans } from "next/font/google";

// Google Font
const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
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
      <body className={firaSans.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}