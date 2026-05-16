import AboutSection from "@/components/AboutSection";

export const metadata = {
  title: "About Us | R&R Tour & Travels",
  description: "Learn more about R&R Tour & Travels. We deliver travel experiences that are safe, seamless, and satisfying.",
};

export default function AboutPage() {
  return (
    <main className="pt-0 bg-primary min-h-screen">
      <div className="bg-secondary/50 py-32 text-center text-white">
        <h1 className="font-abril text-5xl md:text-7xl text-accent">About Us</h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Journey Beyond Limits</p>
      </div>
      <AboutSection />
    </main>
  );
}
