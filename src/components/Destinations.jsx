"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const destinations = [
  { img: "/assets/IMG_0459.JPG", subtitle: "GOA", title: "Goa", colSpan: "col-span-1 md:col-span-8" },
  { img: "/assets/IMG_0452.JPG", subtitle: "Shimla", title: "Himachal Pradesh", colSpan: "col-span-1 md:col-span-4" },
  { img: "/assets/IMG_0453.JPG", subtitle: "Jaipur", title: "Rajasthan", colSpan: "col-span-1 md:col-span-4" },
  { img: "/assets/IMG_0451.JPG", subtitle: "Shrinagar", title: "Jammu & Kashmir", colSpan: "col-span-1 md:col-span-4" },
  { img: "/assets/IMG_0454.JPG", subtitle: "Surat", title: "Gujrat", colSpan: "col-span-1 md:col-span-4" },
];

export default function Destinations() {
  return (
    <section id="des" className="py-24 relative bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-comforter text-accent text-4xl mb-2">Destinations</p>
          <h2 className="font-abril text-gray-800 text-4xl md:text-5xl font-medium tracking-wide">Choose Your Place</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${dest.colSpan}`}
            >
              <Link href="/destinations" className="relative rounded-3xl overflow-hidden group block h-[350px] md:h-[450px] shadow-lg hover:shadow-xl transition-shadow">
                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition duration-500 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>
                
                <Image 
                  src={dest.img} 
                  alt={`${dest.title}, ${dest.subtitle}`} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition duration-500">
                  <p className="font-comforter text-accent text-3xl mb-1 opacity-80 group-hover:opacity-100 transition">{dest.subtitle}</p>
                  <h3 className="font-abril text-white text-3xl md:text-4xl">{dest.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link href="/destinations" className="font-comforter text-primary hover:text-accent text-4xl md:text-5xl transition duration-300">
            See More Destinations ➔ 
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
