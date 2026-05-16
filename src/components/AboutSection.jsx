"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Compass, Briefcase, Umbrella } from "lucide-react";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          className="w-full md:w-1/2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p variants={itemVariants} className="font-comforter text-accent text-4xl mb-2">About Us</motion.p>
          <motion.h2 variants={itemVariants} className="font-abril text-gray-800 text-4xl md:text-5xl font-medium mb-6 leading-tight">
            Explore all tour of the world with us.
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed mb-10 text-justify">
            At R&R Tour & Travels, we don’t just offer taxi services — we deliver travel experiences that are safe, seamless, and satisfying.
          </motion.p>

          <motion.ul variants={containerVariants} className="flex flex-col gap-8 mb-10">
            <motion.li variants={itemVariants} className="flex items-start gap-5">
              <div className="bg-primary/10 text-primary p-4 rounded-2xl mt-1 shadow-sm">
                <Compass size={28} />
              </div>
              <div>
                <h3 className="text-gray-800 font-semibold text-xl mb-2">Tour guide</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Our expert tour guides ensure you enjoy every moment with knowledge, care, and complete peace of mind.
                </p>
              </div>
            </motion.li>
            <motion.li variants={itemVariants} className="flex items-start gap-5">
              <div className="bg-primary/10 text-primary p-4 rounded-2xl mt-1 shadow-sm">
                <Briefcase size={28} />
              </div>
              <div>
                <h3 className="text-gray-800 font-semibold text-xl mb-2">Friendly price</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  We believe in fair and transparent pricing — no hidden costs, just genuine value for your journey.
                </p>
              </div>
            </motion.li>
            <motion.li variants={itemVariants} className="flex items-start gap-5">
              <div className="bg-primary/10 text-primary p-4 rounded-2xl mt-1 shadow-sm">
                <Umbrella size={28} />
              </div>
              <div>
                <h3 className="text-gray-800 font-semibold text-xl mb-2">Reliable tour</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  With us, reliability comes first — trusted tours, on-time service, and hassle-free experiences every time.
                </p>
              </div>
            </motion.li>
          </motion.ul>

          <motion.div variants={itemVariants}>
            <Link href="/tours" className="bg-primary text-white font-bold py-4 px-8 rounded-full border-2 border-primary hover:bg-transparent hover:text-primary transition duration-300 inline-block shadow-md hover:shadow-none">
              Booking Now
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
        >
          <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden shadow-2xl border-4 border-gray-100">
            <Image 
              src="/assets/R&R-logo.png" 
              alt="R&R Logo" 
              fill 
              className="object-cover absolute inset-0 opacity-0 animate-rotate-image" 
              style={{ animationDelay: '0s' }}
            />
            <Image 
              src="/assets/K_20250917_210740_0000.jpg" 
              alt="About Travel" 
              fill 
              className="object-cover absolute inset-0 opacity-0 animate-rotate-image" 
              style={{ animationDelay: '3s' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
