"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500); // Loader displays for 2.5 seconds
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
      initial={{ y: 0 }}
      exit={{ y: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-8 shadow-xl"
      >
        <Image src="/assets/R&R-logo.png" alt="R&R Logo" fill className="object-cover" />
      </motion.div>
      
      <div className="overflow-hidden">
        <motion.h1 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
          className="font-abril text-4xl md:text-6xl text-primary tracking-wider text-center"
        >
          R&R Tour & Travels
        </motion.h1>
      </div>
      
      <div className="overflow-hidden mt-4">
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="font-comforter text-2xl text-accent"
        >
          Journey Beyond Limits
        </motion.p>
      </div>
    </motion.div>
  );
}
