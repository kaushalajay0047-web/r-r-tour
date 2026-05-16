"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const taxis = [
  { img: "/assets/honda-amaze-90.jpg", name: "HONDA AMAZE" },
  { img: "/assets/dzire-21.jpg", name: "SWIFT DZIRE" },
  { img: "/assets/ertiga-86.jpg", name: "MARUTI ERTIGA" },
  { img: "/assets/hycross-19.jpg", name: "INNOVA HYCROSS" },
  { img: "/assets/inova-crysta-5.jpg", name: "INNOVA CRYSTA" },
  { img: "/assets/kia-carens-21_(2).jpg", name: "KIA CARENS" },
  { img: "/assets/tempo_traveller-17.jpg", name: "TEMPO TRAVELLER 12 SEATER" },
  { img: "/assets/17-seater-.jpg", name: "TEMPO TRAVELLER 17 SEATER" },
  { img: "/assets/12-saeter-urbania-traveller--.jpg", name: "URBANIA TRAVELLER 12 SEATER" },
  { img: "/assets/17-saeter-traveller-7--.jpg", name: "URBANIA TRAVELLER 17 SEATER" },
];

export default function TaxiService() {
  return (
    <section className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-16"
        >
          <h2 className="font-abril text-accent text-4xl md:text-5xl text-center">
            Taxi & Travellers Service
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {taxis.map((taxi, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary/50 backdrop-blur-sm border border-white/10 p-3 rounded-2xl group hover:border-accent/50 transition-colors"
            >
              <div className="relative h-[180px] w-full mb-4 overflow-hidden rounded-xl">
                <Image 
                  src={taxi.img} 
                  alt={taxi.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-primary/30 group-hover:bg-transparent transition duration-300"></div>
              </div>
              <p className="font-heebo font-bold text-gray-200 text-sm uppercase tracking-wider text-center group-hover:text-accent transition-colors pb-2">
                {taxi.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
