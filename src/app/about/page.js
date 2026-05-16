import AboutSection from "@/components/AboutSection";

export const metadata = {
  title: "About Us | R&R Tour & Travels",
  description: "Learn more about R&R Tour & Travels. We deliver travel experiences that are safe, seamless, and satisfying.",
};

export default function AboutPage() {
  return (
    <main className="pt-0 bg-white min-h-screen">
      <div className="bg-primary/90 py-32 text-center text-white">
        <h1 className="font-abril text-5xl md:text-7xl">About Us</h1>
        <p className="mt-4 text-gray-100 max-w-2xl mx-auto text-lg">Journey Beyond Limits</p>
      </div>
      <AboutSection />
    </main>
  );
}
