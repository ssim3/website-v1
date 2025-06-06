import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { League_Spartan } from "next/font/google";
 
// Main Font
const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tristan Sim - Portfolio",
  description: "Tristan Sim's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
