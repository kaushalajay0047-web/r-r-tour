import Destinations from "@/components/Destinations";

export const metadata = {
  title: "Destinations | R&R Tour & Travels",
  description: "Explore our popular travel destinations including Goa, Shimla, Jaipur, and more.",
};

export default function DestinationsPage() {
  return (
    <main className="pt-0 bg-white min-h-screen">
      <div className="bg-primary/90 py-32 text-center text-white">
        <h1 className="font-abril text-5xl md:text-7xl">Our Destinations</h1>
        <p className="mt-4 text-gray-100 max-w-2xl mx-auto text-lg">Find the perfect place for your next adventure</p>
      </div>
      <Destinations />
    </main>
  );
}
