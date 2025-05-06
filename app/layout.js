import "./globals.css";
import Navbar from "@/components/Navbar";

import { League_Spartan } from "next/font/google";

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
      </body>
    </html>
  );
}
