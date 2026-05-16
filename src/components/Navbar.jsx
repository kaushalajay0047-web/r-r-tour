"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-200" : "bg-transparent py-5"}`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4 group">
          <Image 
            src="/assets/R&R-logo.png" 
            alt="R&R Logo" 
            width={scrolled ? 50 : 65} 
            height={scrolled ? 50 : 65} 
            className="rounded-full transition-all duration-300 shadow-md group-hover:shadow-lg"
          />
          <span className={`font-abril tracking-wide transition-all duration-300 ${scrolled ? "text-primary text-xl" : "text-white text-2xl"} hidden md:block`}>R&R Tour</span>
        </Link>

        <button className={`${scrolled ? "text-primary" : "text-white"} md:hidden`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <ul className={`flex gap-8 items-center font-medium text-[15px] uppercase tracking-wider ${scrolled ? "text-gray-700" : "text-gray-200"}`}>
            <li><Link href="/" className="hover:text-accent transition duration-300 relative group">HOME<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span></Link></li>
            <li><Link href="/about" className="hover:text-accent transition duration-300 relative group">ABOUT<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span></Link></li>
            <li><Link href="/#tours" className="hover:text-accent transition duration-300 relative group">TOURS<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span></Link></li>
            <li><Link href="/destinations" className="hover:text-accent transition duration-300 relative group">DESTINATIONS<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span></Link></li>
            <li><Link href="/contact" className="hover:text-accent transition duration-300 relative group">CONTACT<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span></Link></li>
          </ul>
          <Link href="/tours" className={`font-bold py-2 px-6 rounded-full transition duration-300 uppercase tracking-wide text-sm ${scrolled ? "bg-primary text-white hover:bg-accent" : "bg-white/20 backdrop-blur-md border border-white/20 text-white hover:bg-accent hover:text-white"}`}>
            Book Now
          </Link>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-8 text-gray-800 text-lg uppercase tracking-wider font-medium">
              <li><Link href="/" onClick={() => setIsOpen(false)} className="hover:text-accent transition">Home</Link></li>
              <li><Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-accent transition">About Us</Link></li>
              <li><Link href="/#tours" onClick={() => setIsOpen(false)} className="hover:text-accent transition">Tours</Link></li>
              <li><Link href="/destinations" onClick={() => setIsOpen(false)} className="hover:text-accent transition">Destinations</Link></li>
              <li><Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-accent transition">Contact</Link></li>
              <li>
                <Link href="/tours" onClick={() => setIsOpen(false)} className="bg-primary text-white font-bold py-3 px-8 rounded-full mt-4 inline-block hover:bg-accent transition">
                  Book Now
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
