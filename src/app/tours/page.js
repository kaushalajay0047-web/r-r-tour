import PopularTours from "@/components/PopularTours";

export const metadata = {
  title: "Tours | R&R Tour & Travels",
  description: "Browse our exclusive and most popular tours.",
};

export default function ToursPage() {
  return (
    <main className="pt-0 bg-white min-h-screen">
      <div className="bg-primary/90 py-32 text-center text-white">
        <h1 className="font-abril text-5xl md:text-7xl">Featured Tours</h1>
        <p className="mt-4 text-gray-100 max-w-2xl mx-auto text-lg">Unforgettable experiences waiting for you</p>
      </div>
      <PopularTours />
    </main>
  );
}
