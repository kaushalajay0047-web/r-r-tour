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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if it's the first visit in this tab
    const hasLoaded = sessionStorage.getItem("introLoaded");
    if (hasLoaded) {
      setLoading(false);
    }
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem("introLoaded", "true");
    setLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" onComplete={handleComplete} />}
      </AnimatePresence>

      {!loading && (
        <>
          <HeroSection />
          <Destinations />
          <PopularTours />
          <AboutSection />
          <BlogSection />
          <TaxiService />
        </>
      )}
    </>
  );
}
