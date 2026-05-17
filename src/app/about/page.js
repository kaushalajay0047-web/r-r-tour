import Image from "next/image";

export const metadata = {
  title: "About Us | R&R Tour & Travels",
  description: "Learn more about R&R Tour & Travels. We deliver travel experiences that are safe, seamless, and satisfying.",
};

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image 
          src="/assets/about-ban.jpg" 
          alt="About Us Banner"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[1600px] mx-auto bg-[#fdfdfd] p-6 md:p-10 shadow-[0_0_20px_rgba(0,0,0,0.08)] border border-[#eee] rounded-xl flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Rotating Images Banner (Left Side) */}
          <div className="w-full lg:w-1/3 flex justify-center lg:sticky lg:top-32">
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-xl overflow-hidden ">
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
          </div>

          {/* Article Text (Right Side) */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <h1 className="text-3xl md:text-[2.9rem] font-serif font-bold text-[#e91e63] border-b-2 border-gray-800 pb-3 mb-4 inline-block self-start tracking-wide animate-fade-in-up">
              Welcome to R&R Tour & Travels
            </h1>

            <div 
              className="text-justify font-abril text-xl md:text-2xl text-gray-800 leading-relaxed md:columns-2 md:gap-8"
              style={{ columnRule: '1px solid #ccc' }}
            >
              <p className="mb-4">
                At R&R Tour & Travels, we don’t just offer taxi services — we deliver travel experiences that are safe, seamless, and satisfying. With a reputation built on punctuality, professionalism, and personalized service, we’ve become a trusted name in the travel and transportation industry. Whether you're heading out for a short city ride, planning a weekend getaway, or require airport transfers at odd hours, our commitment to excellence ensures that your journey is smooth from start to finish.
              </p>
              <p className="mb-4">
                What sets us apart is our attention to detail and unwavering focus on customer satisfaction. Our fleet consists of a wide range of meticulously maintained vehicles including sedans, SUVs, luxury cars, and tempo travellers — all kept in pristine condition for your comfort and safety. Each vehicle is thoroughly sanitized and inspected before every trip, ensuring peace of mind for you and your loved ones.
              </p>
              <p className="mb-4">
                Our team of experienced and courteous drivers are more than just chauffeurs — they are local experts who understand the roads, value your time, and make it their mission to provide you with a smooth and enjoyable ride. From handling your luggage to taking the safest and shortest routes, their professionalism reflects our company’s core values.
              </p>
              <p className="mb-4">
                Transparency is at the heart of our operations. With clear, upfront pricing and zero hidden charges, you always know what you’re paying for. Whether it's an advance booking or an urgent last-minute ride, our support team is available 24/7 to assist you with quick responses, flexible options, and complete travel solutions tailored to your needs.
              </p>
              <p className="mb-4">
                Over the years, R&R Tour & Travels has proudly served thousands of happy customers — families, solo travelers, corporate clients, tourists, and NRI guests — all of whom trust us for our dependability, cleanliness, and dedication to comfort. From airport pickups to religious tours, from corporate events to hill station getaways, we handle every booking with utmost care.
              </p>
              <p>
                Choose R&R Tour & Travels when you’re looking for more than just a taxi — choose us when you want a travel experience backed by integrity, luxury, and local expertise. Your journey matters to us, and we’re here to make every mile memorable.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
