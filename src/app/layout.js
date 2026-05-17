import { Abril_Fatface, Comforter_Brush, Heebo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const heebo = Heebo({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-heebo" });
const abrilFatface = Abril_Fatface({ subsets: ["latin"], weight: ["400"], variable: "--font-abril" });
const comforterBrush = Comforter_Brush({ subsets: ["latin"], weight: ["400"], variable: "--font-comforter" });

export const metadata = {
  title: "R&R Tour & Travels",
  description: "Explore your travel with R&R Tour & Travels. Trusted Travel Agency offering the best tour guides, friendly prices, and reliable tours.",
  keywords: "travel, tour, agency, R&R Tour, vacation, destinations, India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${heebo.variable} ${abrilFatface.variable} ${comforterBrush.variable}`}>
      <body className="antialiased font-heebo text-gray-800 bg-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
