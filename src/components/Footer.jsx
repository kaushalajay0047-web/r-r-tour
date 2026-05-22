import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-cover bg-center text-white pt-[60px] pb-[30px]" style={{ backgroundColor: "#1e293b" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="font-abril text-[2.4rem] mb-4">Top destination</h3>
            <ul className="flex flex-col gap-3 text-[#d1d5db] text-[1.6rem]">
              <li><Link href="/destinations/hp" className="hover:text-mikado transition">Shimla, Himachal Pradesh</Link></li>
              <li><Link href="/destinations/goa" className="hover:text-mikado transition">GOA, Goa</Link></li>
              <li><Link href="/destinations/rajasthan" className="hover:text-mikado transition">Jaipur, Rajasthan</Link></li>
              <li><Link href="/destinations/chandigarh" className="hover:text-mikado transition">Chandigarh, Chandigarh</Link></li>
              <li><Link href="/destinations/jk" className="hover:text-mikado transition">Shrinagar, Jammu & Kashmir</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-abril text-[2.4rem] mb-4">Categories</h3>
            <ul className="flex flex-col gap-3 text-[#d1d5db] text-[1.6rem]">
              <li><Link href="#" className="hover:text-mikado transition">Travel</Link></li>
              <li><Link href="#" className="hover:text-mikado transition">Lifestyle</Link></li>
              <li><Link href="#" className="hover:text-mikado transition">Fashion</Link></li>
              <li><Link href="#" className="hover:text-mikado transition">Education</Link></li>
              <li><Link href="#" className="hover:text-mikado transition">Food & Drink</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-abril text-[2.4rem] mb-4">Quick links</h3>
            <ul className="flex flex-col gap-3 text-[#d1d5db] text-[1.6rem]">
              <li><Link href="/about" className="hover:text-mikado transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-mikado transition">Contact</Link></li>
              <li><Link href="/tours" className="hover:text-mikado transition">Tours</Link></li>
              <li><Link href="/tours" className="hover:text-mikado transition">Booking</Link></li>
              <li><Link href="#" className="hover:text-mikado transition">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-abril text-[2.4rem] mb-4">Get a newsletter</h3>
            <p className="text-[#d1d5db] text-[1.6rem] mb-4">
              For the latest deals and tips, travel no further than your inbox
            </p>
            <form className="bg-white rounded-md flex overflow-hidden">
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="Email address" 
                className="w-full px-4 text-gray-800 outline-none"
              />
              <button type="submit" className="bg-[#019c9c] text-white font-bold py-3 px-6 hover:bg-transparent hover:text-[#019c9c] border border-[#019c9c] transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-600 pt-6 gap-4">
          <Link href="/" className="font-abril text-[2.4rem]">R&R Tour & Travel</Link>
          <p className="text-[#d1d5db] text-[1.6rem] text-center">
            &copy; 2025 <Link href="/" className="hover:text-mikado">R&R tour and travels</Link>. All Rights Reserved
          </p>
          <ul className="flex gap-4">
            <li><Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#019c9c] transition"><FaFacebook size={20} /></Link></li>
            <li><Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#019c9c] transition"><FaTwitter size={20} /></Link></li>
            <li><Link href="https://www.instagram.com/_a_j_a_y_4_7_?igsh=OWVrd3lqYnhlenYz" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#019c9c] transition"><FaInstagram size={20} /></Link></li>
            <li><Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#019c9c] transition"><FaLinkedin size={20} /></Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
