import { MapPin, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Contact Us | R&R Tour & Travels",
  description: "Get in touch with R&R Tour & Travels for your next vacation or taxi booking.",
};

export default function ContactPage() {
  return (
    <main className="pt-0 bg-primary min-h-screen">
      <div className="bg-secondary/50 py-32 text-center text-white">
        <h1 className="font-abril text-5xl md:text-7xl text-accent">Contact Us</h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">We would love to hear from you</p>
      </div>
      <section className="py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2">
            <h2 className="font-abril text-4xl mb-6 text-white">Get In Touch</h2>
            <p className="text-gray-400 mb-8 text-lg">We would love to hear from you. Please fill out the form or contact us using the details below.</p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 border border-white/20 text-accent p-4 rounded-xl"><MapPin /></div>
                <p className="text-gray-300 text-lg">Himachal Pradesh, India</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/10 border border-white/20 text-accent p-4 rounded-xl"><Phone /></div>
                <p className="text-gray-300 text-lg">+91 86289 32897</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/10 border border-white/20 text-accent p-4 rounded-xl"><Mail /></div>
                <p className="text-gray-300 text-lg">info@rrtour.com</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-secondary/40 backdrop-blur-sm border border-white/10 p-10 rounded-2xl shadow-2xl">
            <form className="flex flex-col gap-6">
              <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl bg-primary border border-white/10 text-white outline-none focus:border-accent transition" />
              <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl bg-primary border border-white/10 text-white outline-none focus:border-accent transition" />
              <textarea placeholder="Your Message" rows={5} className="w-full p-4 rounded-xl bg-primary border border-white/10 text-white outline-none focus:border-accent transition"></textarea>
              <button className="bg-accent text-primary font-bold py-4 px-8 rounded-xl hover:bg-accent-hover transition shadow-[0_0_20px_rgba(244,209,96,0.3)]">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
