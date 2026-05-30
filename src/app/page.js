"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import HeroSection from "@/components/HeroSection";
import Destinations from "@/components/Destinations";
import PopularTours from "@/components/PopularTours";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import TaxiService from "@/components/TaxiService";

export default function Home() {
  const [loading, setLoading] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("introLoaded");
    }
    return true;
  });

  const handleComplete = () => {
    sessionStorage.setItem("introLoaded", "true");
    setLoading(false);
  };

  return (
    <div suppressHydrationWarning>
      <AnimatePresence>
        {loading && <Loader key="loader" onComplete={handleComplete} />}
      </AnimatePresence>

      {!loading && (
        <div suppressHydrationWarning>
          <HeroSection />
          <Destinations />
          <PopularTours />
          <AboutSection />
          <BlogSection />
          <TaxiService />
        </div>
      )}
    </div>
  );
}
