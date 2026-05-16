"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

const blogs = [
  { img: "/assets/OIP.webp", title: "A good traveler has no fixed plans and is not intent on arriving.", author: "ajay kaushal", avatar: "/assets/poster 2.jpg", date: "04 Dec", time: "10:30 AM" },
  { img: "/assets/OIP (1).webp", title: "A good traveler has no fixed plans and is not intent on arriving.", author: "ajay kaushal", avatar: "/assets/poster.jpeg", date: "04 Dec", time: "10:30 AM" },
  { img: "/assets/IMG_0471.JPG", title: "A good traveler has no fixed plans and is not intent on arriving.", author: "ajay kaushal", avatar: "/assets/poster.jpeg", date: "04 Dec", time: "10:30 AM" },
];

export default function BlogSection() {
  return (
    <section className="py-24 bg-primary relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-comforter text-accent text-4xl mb-2">From The Blog Post</p>
          <h2 className="font-abril text-white text-4xl md:text-5xl font-medium tracking-wide">Latest News & Articles</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-secondary/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="relative h-[250px] overflow-hidden">
                <Link href="#">
                  <Image 
                    src={blog.img} 
                    alt={blog.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition duration-500"></div>
                </Link>
                <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm text-primary py-2 px-4 rounded-xl flex items-center gap-2 font-bold shadow-lg">
                  <Clock size={18} />
                  <span>{blog.date}</span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-center text-gray-400 text-sm mb-6 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-accent">
                      <Image src={blog.avatar} alt={blog.author} fill className="object-cover" />
                    </div>
                    <div>
                      <Link href="#" className="font-semibold text-white hover:text-accent transition">{blog.author}</Link>
                      <p className="text-xs text-accent/80 uppercase tracking-wider mt-1">Admin</p>
                    </div>
                  </div>
                  <time className="bg-white/10 px-3 py-1.5 rounded-lg">{blog.time}</time>
                </div>

                <h3 className="text-white text-xl font-medium mb-8 hover:text-accent transition-colors leading-relaxed">
                  <Link href="#">{blog.title}</Link>
                </h3>

                <Link href="#" className="flex items-center justify-end gap-2 text-accent font-bold hover:text-white transition group/link">
                  <span>Read More</span>
                  <ArrowRight size={20} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
