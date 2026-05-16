import { MapPin, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Contact Us | R&R Tour & Travels",
  description: "Get in touch with R&R Tour & Travels for your next vacation or taxi booking.",
};

export default function ContactPage() {
  return (
    <main className="pt-0 bg-white min-h-screen">
      <div className="bg-primary/90 py-32 text-center text-white">
        <h1 className="font-abril text-5xl md:text-7xl">Contact Us</h1>
        <p className="mt-4 text-gray-100 max-w-2xl mx-auto text-lg">We would love to hear from you</p>
      </div>
      <section className="py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2">
            <h2 className="font-abril text-4xl mb-6 text-gray-800">Get In Touch</h2>
            <p className="text-gray-600 mb-8 text-lg">We would love to hear from you. Please fill out the form or contact us using the details below.</p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 text-primary p-4 rounded-xl"><MapPin /></div>
                <p className="text-gray-700 text-lg">Himachal Pradesh, India</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 text-primary p-4 rounded-xl"><Phone /></div>
                <p className="text-gray-700 text-lg">+91 86289 32897</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 text-primary p-4 rounded-xl"><Mail /></div>
                <p className="text-gray-700 text-lg">info@rrtour.com</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-white border border-gray-100 p-10 rounded-2xl shadow-xl">
            <form className="flex flex-col gap-6">
              <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 outline-none focus:border-primary transition" />
              <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 outline-none focus:border-primary transition" />
              <textarea placeholder="Your Message" rows={5} className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 outline-none focus:border-primary transition"></textarea>
              <button className="bg-primary text-white font-bold py-4 px-8 rounded-xl hover:bg-transparent border-2 border-primary hover:text-primary transition shadow-md">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
