"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/images/hero-bg-bottom.png" 
          alt="Background"
          fill
          className="object-cover opacity-30 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary"></div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between gap-12 mt-20">
        <motion.div 
          className="w-full md:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div className="overflow-hidden">
            <motion.p 
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-comforter text-accent text-4xl md:text-5xl"
            >
              Explore Your Travel
            </motion.p>
          </motion.div>
          
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
              className="font-abril text-5xl md:text-7xl lg:text-8xl text-white leading-tight"
            >
              Trusted Travel Agency
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 text-lg md:text-xl max-w-lg leading-relaxed"
          >
            I travel not to go anywhere, but to go. I travel for travel&apos;s sake the great affair is to move.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link href="/contact" className="bg-accent text-primary hover:bg-accent-hover font-bold py-4 px-8 rounded-full transition duration-300 shadow-[0_0_20px_rgba(244,209,96,0.3)]">
              Plan Your Journey
            </Link>
            <Link href="/about" className="bg-transparent border-2 border-gray-400 text-white hover:border-accent hover:text-accent font-bold py-4 px-8 rounded-full transition duration-300">
              Discover More
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
        >
          <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
            <Image src="/assets/about-img.png" alt="Travel Experience" fill className="object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                <p className="text-accent font-bold text-xl font-abril tracking-wide">Premium Tours</p>
                <p className="text-sm text-gray-200 mt-1">Experience luxury on every road with our exclusive fleet.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
