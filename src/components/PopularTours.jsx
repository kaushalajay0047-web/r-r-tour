"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, Star } from "lucide-react";

const tours = [
  { img: "/assets/IMG_0456.JPG", title: "A good traveler has no fixed plans and is not intent on arriving.", location: "Chennai, Tamil Nadu", price: "₹5000.00", days: "12 Days", rating: 4, reviews: 2 },
  { img: "/assets/IMG_0459.JPG", title: "A good traveler has no fixed plans and is not intent on arriving.", location: "GOA, Goa", price: "₹5000.00", days: "12 Days", rating: 4, reviews: 2 },
  { img: "/assets/IMG_0454.JPG", title: "A good traveler has no fixed plans and is not intent on arriving.", location: "Surat, Gujrat", price: "₹5000.00", days: "12 Days", rating: 4, reviews: 2 },
];

export default function PopularTours() {
  return (
    <section id="tours" className="py-24 bg-primary relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-comforter text-accent text-4xl mb-2">Featured Tours</p>
          <h2 className="font-abril text-white text-4xl md:text-5xl font-medium tracking-wide">Most Popular Tours</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tours.map((tour, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-secondary/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="relative h-[280px] overflow-hidden">
                <Link href="/tours">
                  <Image 
                    src={tour.img} 
                    alt={tour.location} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition duration-500"></div>
                </Link>
                <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm text-primary py-2 px-4 rounded-xl flex items-center gap-2 font-bold shadow-lg">
                  <Clock size={18} />
                  <span>{tour.days}</span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <div className="bg-white/10 border border-white/20 text-accent px-4 py-1.5 rounded-lg font-bold text-sm">
                    From {tour.price}
                  </div>
                  <div className="bg-white/10 border border-white/20 text-white px-3 py-1.5 rounded-lg flex items-center gap-1 text-sm">
                    <Star size={14} className="fill-accent text-accent" />
                    <span>({tour.reviews})</span>
                  </div>
                </div>

                <h3 className="text-white text-xl font-medium mb-4 hover:text-accent transition-colors leading-relaxed">
                  <Link href="/tours">{tour.title}</Link>
                </h3>

                <address className="text-gray-400 not-italic text-sm">
                  {tour.location}
                </address>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link href="/tours" className="font-comforter text-white/70 hover:text-accent text-4xl md:text-5xl transition duration-300">
            See More Tours ➔ 
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
